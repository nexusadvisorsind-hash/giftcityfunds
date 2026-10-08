import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  whatsapp?: string;
  location?: string;
  country?: string;
  investorType?: string;
  message?: string;
  consentResponse?: boolean;
  consentUpdates?: boolean;
  consentNoticeVersion?: string;
}

// Escape user input before putting it into the notification email.
const esc = (v: unknown) =>
  String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    // Do not log the submission itself: it contains personal data.
    console.log("Received contact form submission");

    // Basic spam protection: validate required fields
    if (!formData.name || !formData.email) {
      return new Response(
        JSON.stringify({ error: "Name and email are required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // The form cannot be sent without consent; reject direct calls that skip it.
    if (formData.consentResponse !== true) {
      return new Response(
        JSON.stringify({ error: "Consent is required to process this enquiry" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Get client IP and user agent for spam tracking
    const ip_address = req.headers.get("x-forwarded-for") || "unknown";
    const user_agent = req.headers.get("user-agent") || "unknown";

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Store in database
    const { data: submission, error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        whatsapp: formData.whatsapp || null,
        location: formData.location || null,
        country: formData.country || null,
        investor_type: formData.investorType || null,
        message: formData.message || null,
        ip_address,
        user_agent,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Failed to save submission: ${dbError.message}`);
    }

    console.log("Saved to database:", submission.id);

    // Separate, optional consent to updates: add to the newsletter list.
    if (formData.consentUpdates === true) {
      const { error: subError } = await supabase
        .from("newsletter_subscribers")
        .insert({ email: String(formData.email).trim().toLowerCase(), source: "contact_form_optin", ip_address, user_agent });
      if (subError && !`${subError.message}`.toLowerCase().includes("duplicate")) {
        console.error("Newsletter opt-in error (non-fatal):", subError.message);
      }
    }

    // Send email notification
    try {
      const emailHtml = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${esc(formData.name)}</p>
        <p><strong>Email:</strong> ${esc(formData.email)}</p>
        ${formData.phone ? `<p><strong>Phone:</strong> ${esc(formData.phone)}</p>` : ''}
        ${formData.investorType ? `<p><strong>Investor Type:</strong> ${esc(formData.investorType)}</p>` : ''}
        ${formData.message ? `<p><strong>Message:</strong><br/>${esc(formData.message).replace(/\n/g, '<br/>')}</p>` : ''}
        <hr/>
        <p><small>Consent to reply: yes (privacy notice ${esc(formData.consentNoticeVersion ?? "unversioned")})</small></p>
        <p><small>Consent to email updates: ${formData.consentUpdates === true ? "yes" : "no"}</small></p>
        <p><small>Submitted at: ${new Date().toISOString()}</small></p>
      `;

      const emailResponse = await resend.emails.send({
        from: "GIFT City Funds <onboarding@resend.dev>",
        to: ["nexusadvisors.ind@gmail.com"],
        subject: "New contact form enquiry",
        html: emailHtml,
      });

      console.log("Email sent successfully:", emailResponse);
    } catch (emailError) {
      console.error("Email error (non-fatal):", emailError);
      // Don't fail the request if email fails
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Form submitted successfully",
        id: submission.id,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error in submit-contact-form function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal server error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
