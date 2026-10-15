import { pageMeta } from "@/lib/seo";
import { ContactForm } from "@/components/contact-form";
import { Mail, MapPin, BadgeCheck } from "lucide-react";

export const metadata = pageMeta({
  title: 'Contact Artha Vriksha | Pune & Ahmedabad',
  description: 'Contact our Pune and Ahmedabad offices about mutual funds, property, insurance or loans. Write to us and we usually reply within 24 hours.',
  path: '/contact',
});

export default function Contact() {
  return (
    <>
      <section className="hero-navy text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 md:pt-24 md:pb-20">
          <h1 className="font-heading font-bold text-4xl md:text-6xl leading-[1.08] mb-6 max-w-3xl">Tell us what you need</h1>
          <p className="font-body text-lg text-primary-foreground/85 leading-relaxed measure mb-4">
            Mutual funds, real estate, insurance or loans: write a few lines and our team will get back to you. No pressure, no obligation.
          </p>
          <p className="inline-flex items-center gap-2 font-body text-sm text-primary-foreground/85"><BadgeCheck className="h-4 w-4 text-accent" /> We usually reply within 24 hours</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <ContactForm />
          </div>
          <div className="md:col-span-2 space-y-8">
            <div>
              <Mail className="h-6 w-6 text-secondary mb-2" />
              <h2 className="font-heading font-semibold text-lg text-primary mb-1">Email</h2>
              <p className="font-body text-foreground-muted">info@arthavriksha.in</p>
            </div>
            <div>
              <MapPin className="h-6 w-6 text-secondary mb-2" />
              <h2 className="font-heading font-semibold text-lg text-primary mb-1">Our offices</h2>
              <p className="font-body text-foreground-muted">Amanora Park Town, Pune, Maharashtra 411928</p>
              <p className="font-body text-foreground-muted mt-2">4 Tarang Hills Society, Chandlodia, Ahmedabad, Gujarat</p>
            </div>
            <p className="font-body text-xs text-foreground-muted leading-relaxed border-l-4 border-green pl-4">
              We are licensed distributors and registered real estate agents, not fee-charging investment advisers. Enquiries here do not constitute investment advice.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
