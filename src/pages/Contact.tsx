import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();

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

    try {
      const { data, error } = await supabase.functions.invoke("submit-contact-form", {
        body: {
          name: form.name,
          email: form.email,
          phone: form.phone,
          whatsapp: form.whatsapp,
          location: form.location,
          country: form.country,
          investorType: form.investorType,
          message: form.message,
        },
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you within 24 hours.",
      });

      setForm(initialForm);
    } catch (err: any) {
      console.error("Contact submit error:", err);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
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
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Other ways to reach us</CardTitle>
              <CardDescription>Office hours, phone or email</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Email: info@giftcitywealth.in</p>
              <p className="mb-2">Phone: +91 9537533533</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Contact;