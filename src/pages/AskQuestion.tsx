import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, HelpCircle } from "lucide-react";
import { SEO } from "@/components/SEO";

type FormState = {
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  country: string;
  investorType: string;
  message: string;
  consent: boolean;
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
  consent: false,
};

function AskQuestion(): JSX.Element {
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((p) => ({ ...p, [name]: checked }));
    } else {
      setForm((p) => ({ ...p, [name]: value }));
    }
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
        title: "Question Submitted Successfully",
        description: "We'll respond with educational information within 24 hours.",
      });

      setForm(initialForm);
    } catch (err: any) {
      console.error("Question submit error:", err);
      toast({
        title: "Submission Error",
        description: "Failed to submit your question. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen">
      <SEO
        title="Ask a Question — GIFT City IFSC Inquiries | GiftCityWealth.in"
        description="Submit your informational questions about GIFT City IFSC, IFSCA regulations, and fund structures. Educational resource only — not investment advice."
        canonical="https://www.giftcitywealth.in/ask-question"
      />
      {/* Hero Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <HelpCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
              Ask a Question About GIFT IFSC
            </h1>
            <p className="font-body text-lg text-foreground-muted">
              Submit your questions about GIFT City IFSC, IFSCA regulations, fund structures, or tax frameworks. We'll provide educational information to help you understand better.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="institutional-card">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Submit Your Question</CardTitle>
                <CardDescription className="font-body">
                  We'll respond with educational information within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="font-body text-sm text-foreground-muted mb-1 block">Name *</label>
                      <Input 
                        name="name" 
                        value={form.name} 
                        onChange={handleChange} 
                        placeholder="Your Name" 
                        required 
                        className="font-body"
                      />
                    </div>
                    <div>
                      <label className="font-body text-sm text-foreground-muted mb-1 block">Email *</label>
                      <Input 
                        name="email" 
                        value={form.email} 
                        onChange={handleChange} 
                        placeholder="your.email@example.com" 
                        required 
                        type="email"
                        className="font-body"
                      />
                    </div>
                    <div>
                      <label className="font-body text-sm text-foreground-muted mb-1 block">Phone *</label>
                      <Input 
                        name="phone" 
                        value={form.phone} 
                        onChange={handleChange} 
                        placeholder="+91 XXXXX XXXXX"
                        required
                        type="tel"
                        className="font-body"
                      />
                    </div>
                    <div>
                      <label className="font-body text-sm text-foreground-muted mb-1 block">WhatsApp *</label>
                      <Input 
                        name="whatsapp" 
                        value={form.whatsapp} 
                        onChange={handleChange} 
                        placeholder="+91 XXXXX XXXXX"
                        required
                        type="tel"
                        className="font-body"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="font-body text-sm text-foreground-muted mb-1 block">City (Optional)</label>
                        <Input 
                          name="location" 
                          value={form.location} 
                          onChange={handleChange} 
                          placeholder="City"
                          className="font-body"
                        />
                      </div>
                      <div>
                        <label className="font-body text-sm text-foreground-muted mb-1 block">Country (Optional)</label>
                        <Input 
                          name="country" 
                          value={form.country} 
                          onChange={handleChange} 
                          placeholder="Country"
                          className="font-body"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-body text-sm text-foreground-muted mb-1 block">Your Question *</label>
                      <Textarea 
                        name="message" 
                        value={form.message} 
                        onChange={handleChange} 
                        placeholder="What would you like to know about GIFT IFSC, IFSCA regulations, or fund structures?" 
                        rows={6}
                        required
                        className="font-body"
                      />
                    </div>
                    <div>
                      <label className="font-body text-sm text-foreground-muted mb-1 block">Investor Type *</label>
                      <Select 
                        name="investorType" 
                        value={form.investorType} 
                        onValueChange={(value) => setForm((p) => ({ ...p, investorType: value }))}
                        required
                      >
                        <SelectTrigger className="font-body">
                          <SelectValue placeholder="Select investor type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Retail">Retail</SelectItem>
                          <SelectItem value="NRI">NRI</SelectItem>
                          <SelectItem value="HNI">HNI</SelectItem>
                          <SelectItem value="Institutional">Institutional</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="consent"
                        name="consent"
                        checked={form.consent}
                        onCheckedChange={(checked) => setForm((p) => ({ ...p, consent: checked as boolean }))}
                        required
                      />
                      <label 
                        htmlFor="consent" 
                        className="font-body text-sm text-foreground-muted leading-relaxed cursor-pointer"
                      >
                        I agree to receive informational updates. *
                      </label>
                    </div>
                  </div>

                  <Button type="submit" disabled={loading} size="lg" className="w-full">
                    {loading ? "Submitting..." : "Submit Question"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="institutional-card">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">Contact Information</CardTitle>
                  <CardDescription className="font-body">
                    Other ways to reach us
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="font-heading font-semibold text-primary">Email</p>
                    <p className="font-body text-foreground-muted">info@nexusadvisors.in</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="font-heading font-semibold text-primary">Phone</p>
                    <p className="font-body text-foreground-muted">+91 95375 33533</p>
                  </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="institutional-card bg-muted">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">Important Notice</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-foreground-muted text-sm">
                    This is an educational information service only. We do not provide investment advice, solicit investments, or facilitate transactions. All responses are for informational purposes to help you understand GIFT IFSC better. Refer to official IFSCA notifications and seek professional counsel for specific guidance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AskQuestion;
