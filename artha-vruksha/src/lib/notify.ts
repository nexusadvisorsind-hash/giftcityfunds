// Sends an alert when a new enquiry arrives. Every channel is optional:
// it is used only when its settings exist in Vercel, otherwise it is skipped.
// A failed alert never stops the enquiry from being saved.

type Lead = { name: string; email: string; phone: string; vertical: string; message: string | null };

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function sendEmail(lead: Lead) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_ALERT_EMAIL_TO;
  if (!key || !to) return;
  const from = process.env.LEAD_ALERT_EMAIL_FROM || "Assetzpro Website <alerts@assetzpro.com>";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: to.split(",").map((s) => s.trim()).filter(Boolean),
      reply_to: lead.email,
      subject: `New enquiry: ${lead.vertical} - ${lead.name}`,
      html: `<p><b>New website enquiry</b></p>
<p>Name: ${esc(lead.name)}<br>Phone: ${esc(lead.phone)}<br>Email: ${esc(lead.email)}<br>Interested in: ${esc(lead.vertical)}</p>
<p>Message: ${esc(lead.message || "(none)")}</p>
<p><a href="https://assetzpro.com/admin/leads">Open the leads page</a></p>`,
    }),
  });
  if (!res.ok) console.error("Lead email alert failed with status", res.status);
}

// WhatsApp Cloud API. Uses an approved message template with three
// variables: {{1}} name, {{2}} service, {{3}} phone.
async function sendWhatsApp(lead: Lead) {
  const token = process.env.WHATSAPP_TOKEN;
  const phoneId = process.env.WHATSAPP_PHONE_ID;
  const to = process.env.WHATSAPP_ALERT_TO; // digits only, with country code, e.g. 919022958266
  const template = process.env.WHATSAPP_TEMPLATE;
  if (!token || !phoneId || !to || !template) return;
  const text = (s: string) => ({ type: "text", text: s.replace(/[\r\n\t]+/g, " ").slice(0, 60) });
  const res = await fetch(`https://graph.facebook.com/v21.0/${phoneId}/messages`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to,
      type: "template",
      template: {
        name: template,
        language: { code: process.env.WHATSAPP_TEMPLATE_LANG || "en" },
        components: [{ type: "body", parameters: [text(lead.name), text(lead.vertical), text(lead.phone)] }],
      },
    }),
  });
  if (!res.ok) console.error("Lead WhatsApp alert failed with status", res.status);
}

export async function notifyNewLead(lead: Lead) {
  const results = await Promise.allSettled([sendEmail(lead), sendWhatsApp(lead)]);
  for (const r of results) {
    if (r.status === "rejected") console.error("Lead alert error:", r.reason instanceof Error ? r.reason.message : "unknown");
  }
}
