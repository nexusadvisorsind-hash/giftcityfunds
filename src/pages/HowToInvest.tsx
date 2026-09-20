import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArrowRight, BookOpen, UserCheck, FileText, MessageCircle, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    title: "Understand the structures",
    body:
      "Start by learning the four broad GIFT City fund structures — Mutual Fund FoFs, Retail Feeder Funds, AIFs and PMS. Each has a different minimum ticket, regulatory shape and investor fit. Knowing the differences before you compare products avoids costly mismatches later.",
    linkLabel: "Read: Funds Explained",
    linkTo: "/funds-explained",
  },
  {
    icon: UserCheck,
    title: "Check your eligibility & route",
    body:
      "Your residency status shapes what you can invest in and how. NRIs and OCIs typically remit in USD; Resident Indians route through the Liberalised Remittance Scheme (LRS). US-based NRIs should specifically check PFIC vs Non-PFIC status of the fund before proceeding — it materially changes US tax outcomes.",
    linkLabel: "Who It's For & US NRI Guide",
    linkTo: "/who-its-for",
    secondaryLabel: "US-based NRIs: PFIC guide",
    secondaryTo: "/us-based-nris",
  },
  {
    icon: FileText,
    title: "Gather your documents",
    body:
      "Have your KYC pack ready before you start onboarding: passport, PAN card, proof of overseas address, a recent bank statement and — where applicable — a tax residency certificate (TRC) from your country of residence. US persons will additionally need W-9/W-8BEN as appropriate.",
  },
  {
    icon: MessageCircle,
    title: "Talk to Anup",
    body:
      "Once you know the structure that fits, reach out to get connected with the right Fund Management Entity (FME) in GIFT City. Anup Vatyani (AMFI ARN 106715) helps you shortlist and connect — no cold call centre, no rotating relationship manager, no product push.",
    linkLabel: "Contact Anup",
    linkTo: "/contact",
  },
  {
    icon: CheckCircle2,
    title: "Complete onboarding and invest",
    body:
      "Sign the fund's subscription documents, complete KYC verification with the FME, remit funds in USD (or via LRS for Resident Indians), receive your unit allotment confirmation and begin tracking through the FME's investor portal.",
  },
];

const HowToInvest = () => {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Invest in GIFT City Funds",
    "description":
      "Step-by-step overview for NRIs, OCIs and Resident Indians on investing in GIFT City IFSC funds.",
    "step": steps.map((s, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": s.title,
      "text": s.body,
      "url": `https://giftcityfunds.in/how-to-invest#step-${i + 1}`,
    })),
  };

  return (
    <>
      <SEO
        title="How to Invest in GIFT City Funds — Step-by-Step Guide"
        description="A plain-English 5-step guide to investing in GIFT City IFSC funds for NRIs, OCIs, US-based NRIs and Resident Indians. Structures, eligibility, documents and onboarding."
        canonical="https://giftcityfunds.in/how-to-invest"
        schema={howToSchema}
        breadcrumbs={[
          { name: "Home", url: "https://giftcityfunds.in/" },
          { name: "How to Invest", url: "https://giftcityfunds.in/how-to-invest" },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "How to Invest", url: "/how-to-invest" }]} />
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary mt-6 mb-4">
          How to Invest in GIFT City Funds
        </h1>
        <p className="font-body text-lg text-foreground-muted mb-10 leading-relaxed">
          Investing through a GIFT City fund is not complicated, but it does follow a specific sequence.
          Here is the path most NRI, OCI and Resident Indian investors actually take — from understanding
          the framework to receiving your unit allotment.
        </p>

        <ol className="space-y-8 list-none p-0">
          {steps.map((s, i) => (
            <li key={s.title} id={`step-${i + 1}`} className="bg-surface border border-border rounded-lg p-6">
              <div className="flex gap-4">
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-secondary/15 border border-secondary/40 flex items-center justify-center font-heading font-bold text-secondary">
                    {i + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <s.icon className="h-5 w-5 text-secondary" />
                    <h2 className="font-heading font-semibold text-xl text-primary">{s.title}</h2>
                  </div>
                  <p className="font-body text-foreground-muted leading-relaxed mb-3">{s.body}</p>
                  {s.linkTo && (
                    <Link to={s.linkTo} className="font-body text-secondary hover:underline inline-flex items-center mr-4">
                      {s.linkLabel} <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  )}
                  {s.secondaryTo && (
                    <Link to={s.secondaryTo} className="font-body text-secondary hover:underline inline-flex items-center">
                      {s.secondaryLabel} <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3">Ready to take the next step?</h2>
          <p className="font-body text-primary-foreground/85 mb-6">
            Talk to Anup for a plain-English conversation about which GIFT City structure fits your situation.
          </p>
          <Button asChild variant="gold" size="lg">
            <Link to="/contact">Talk to Anup <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>

        <p className="mt-8 text-xs text-foreground-muted italic">
          Informational content only. Not investment advice or a solicitation. Investors should review scheme
          documents and consult a qualified tax advisor before investing.
        </p>
      </div>
    </>
  );
};

export default HowToInvest;
