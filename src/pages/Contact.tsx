// src/pages/Contact.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

/* CONFIG - DO NOT CHANGE UNLESS YOU CHANGE THE APPSCRIPT */
const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbw1GSqz7DA2XX27eN051mp6-VCzFCiBhDamCI86D-csWkd4m1sSInw6hxr-t-JyHPa41w/exec";
const SECRET_TOKEN = "GIFT-S3cRet-T0k3n-2025";
const CALENDLY_URL = "https://calendly.com/your-calendly-username/30min";

type FormState = {
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  country: string;
  investorType: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  whatsapp: "",
  location: "",
  country: "",
  investorType: "",
  message: "",
};

function Contact(): JSX.Element {
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ show: boolean; success: boolean; message: string }>({
    show: false,
    success: false,
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  function openCalendly() {
    window.open(CALENDLY_URL, "_blank");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus({ show: false, success: false, message: "" });

    try {
      const payload: Record<string, string> = {
        token: SECRET_TOKEN,
        source: "Website - Contact Us",
        name: form.name || "",
        email: form.email || "",
        phone: form.phone || "",
        whatsapp: form.whatsapp || "",
        location: form.location || "",
        country: form.country || "",
        investorType: form.investorType || "",
        message: form.message || "",
      };

      // create or reuse a hidden iframe to avoid CORS preflight
      let hiddenFrame = document.getElementById("gcf-hidden-iframe") as HTMLIFrameElement | null;
      if (!hiddenFrame) {
        hiddenFrame = document.createElement("iframe");
        hiddenFrame.id = "gcf-hidden-iframe";
        hiddenFrame.name = "gcf-hidden-iframe";
        hiddenFrame.style.display = "none";
        document.body.appendChild(hiddenFrame);
      }

      // build a plain HTML form and POST to the apps script URL
      const f = document.createElement("form");
      f.method = "POST";
      f.action = WEB_APP_URL;
      f.target = "gcf-hidden-iframe";
      f.style.display = "none";

      Object.keys(payload).forEach((k) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = k;
        input.value = payload[k] ?? "";
        f.appendChild(input);
      });

      document.body.appendChild(f);

      // Optimistic UI
      setStatus({ show: true, success: true, message: "✅ Thanks — your message has been received." });
      setForm(initialForm);

      f.submit();

      setTimeout(() => {
        try {
          document.body.removeChild(f);
        } catch (err) {}
      }, 3000);
    } catch (err: any) {
      console.error("Contact submit error:", err);
      setStatus({ show: true, success: false, message: "❌ Submission error. Please try again later." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-600">Get in touch — we'll reply within 24 hours.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>We'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <Input name="name" value={form.name} onChange={handleChange} placeholder="First Name" required />
                  <Input name="email" value={form.email} onChange={handleChange} placeholder="Email" required type="email" />
                  <Input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />
                  <Input name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="WhatsApp" />
                  <Input name="location" value={form.location} onChange={handleChange} placeholder="City, State" />
                  <Input name="country" value={form.country} onChange={handleChange} placeholder="Country" />
                </div>

                <div className="mb-4">
                  <select name="investorType" value={form.investorType} onChange={handleChange} className="w-full border p-2">
                    <option value="">Select investor type</option>
                    <option value="Retail">Retail</option>
                    <option value="HNI">HNI</option>
                    <option value="Institutional">Institutional</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="mb-4">
                  <Textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows={6} />
                </div>

                <div className="flex gap-4 items-center">
                  <Button type="submit" disabled={loading} className="bg-blue-600 text-white">
                    {loading ? "Sending..." : "Send"}
                  </Button>
                  <Button type="button" onClick={openCalendly} className="border">
                    Book a Call
                  </Button>
                </div>

                {status.show && (
                  <div className={`mt-4 p-3 rounded ${status.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {status.message}
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Other ways to reach us</CardTitle>
              <CardDescription>Office hours, phone or email</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Email: info@nexusadvisors.in</p>
              <p className="mb-2">Phone: +91-99206XXXXX</p>
            </CardContent>
          </Card>
        </div>

        <iframe id="gcf-hidden-iframe" name="gcf-hidden-iframe" style={{ display: "none" }} />
      </div>
    </div>
  );
}

export default Contact;