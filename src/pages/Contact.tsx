import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

type FormState = {
  name: string; email: string; phone: string; whatsapp: string;
  location: string; country: string; investorType: string; message: string;
};
const initialForm: FormState = { name: "", email: "", phone: "", whatsapp: "", location: "", country: "", investorType: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("submit-contact-form", { body: form });
      if (error) throw error;
      toast({ title: "Message sent", description: "We'll get back to you within 24 hours." });
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      toast({ title: "Error", description: "Failed to send message. Please try again later.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <SEO
        title="Contact — GIFT City Funds | Anup Vatyani, MFD ARN 106715"
        description="Reach Anup Vatyani for informational questions on GIFT City and IFSC funds. Email, phone and a short contact form — no advisory or solicitation."
        canonical="https://giftcityfunds.in/contact"
        breadcrumbs={[
          { name: "Home", url: "https://giftcityfunds.in/" },
          { name: "Contact", url: "https://giftcityfunds.in/contact" },
        ]}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }]} />
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary mt-6 mb-4">Send Us a Message</h1>
        <p className="font-body text-foreground-muted mb-8">This form is for informational correspondence only. No investment or advisory services are offered. We'll get back to you within 24 hours.</p>

        <h2 className="sr-only">Contact form and details</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Send a message</CardTitle>
              <CardDescription>We'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input name="name" value={form.name} onChange={handleChange} placeholder="Name" required aria-label="Name" />
                  <Input name="email" value={form.email} onChange={handleChange} placeholder="Email" required type="email" aria-label="Email" />
                  <Input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone (optional)" aria-label="Phone" />
                  <select name="investorType" value={form.investorType} onChange={handleChange} className="w-full border border-input rounded-md p-2 bg-background" aria-label="Investor type">
                    <option value="">Select investor type</option>
                    <option value="Retail">Retail</option>
                    <option value="HNI">HNI</option>
                    <option value="Institutional">Institutional</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <Textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows={6} aria-label="Message" />
                <div className="flex gap-3">
                  <Button type="submit" disabled={loading} variant="gold">{loading ? "Sending..." : "Send"}</Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Other ways to reach us</CardTitle>
              <CardDescription>Office hours, phone or email</CardDescription>
            </CardHeader>
            <CardContent className="font-body text-sm text-foreground-muted space-y-2">
              <p><strong className="text-primary">Email:</strong> info@giftcityfunds.in</p>
              <p><strong className="text-primary">Phone:</strong> +91 95375 33533</p>
              <p><strong className="text-primary">Location:</strong> Ahmedabad, Gujarat, India</p>
              <div className="pt-4 border-t border-border mt-4">
                <p><strong className="text-primary">Feedback or a concern?</strong> For feedback or a complaint, email info@giftcityfunds.in directly — we aim to respond within 2 business days. Investors can also raise concerns through AMFI's official grievance redressal channels.</p>
              </div>
              <p className="pt-4 text-xs">Author — Anup Vatyani (MFD ARN 106715) | Informational Content Only | No Personalized Advice.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Contact;