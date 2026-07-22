import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const faqs = [
  { g: "Basics", qas: [
    { q: "Is a GIFT City fund the same as a regular Indian mutual fund?", a: "No. It's regulated by IFSCA (not SEBI alone), denominated in foreign currency, and structured to operate within India's International Financial Services Centre — with different rules on eligibility, currency and taxation." },
    { q: "Do I need a PAN card to invest?", a: "For many GIFT City structures, a PAN isn't mandatory for eligible foreign investors, though requirements vary by Fund Management Entity and fund category. Confirm with the specific fund before assuming either way." },
    { q: "What currency do I invest in?", a: "Almost always US Dollars. You transfer USD in, and — on redemption — receive USD out; the fund handles INR conversion internally." },
  ]},
  { g: "Eligibility", qas: [
    { q: "Can resident Indians invest?", a: "Yes, via the Liberalised Remittance Scheme (LRS), subject to the annual USD 250,000 limit and TCS rules." },
    { q: "I'm an OCI — can I invest the same way as an NRI?", a: "Broadly yes, though some Fund Management Entities apply country-specific or entity-specific conditions. Always confirm eligibility for the specific fund." },
  ]},
  { g: "Taxation", qas: [
    { q: "How is a GIFT City fund taxed for a US-based NRI?", a: "It depends heavily on whether the structure has PFIC or Non-PFIC status under US tax law — significant enough that we've written a full page on it. See /us-based-nris" },
    { q: "Do I have to pay GST on fund management fees?", a: "Generally no — most GIFT City structures aren't subject to India's GST on fund management or performance fees." },
  ]},
  { g: "Getting Started", qas: [
    { q: "What documents will I need?", a: "It varies by whether you're investing as an individual or an entity, and inbound or outbound. Reach out for a current checklist covering the common requirements." },
    { q: "Does Anup sell these funds directly?", a: "Anup is an AMFI-registered Mutual Fund Distributor (ARN 106715). He can guide you to the right Fund Management Entity/AMC and help with the process, but this website's purpose is to help you understand the landscape first." },
    { q: "Is this financial advice?", a: "No. This site is an educational resource. Nothing here should be read as a personalised investment or tax recommendation — always consult your own advisors." },
  ]},
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.flatMap(g => g.qas.map(qa => ({
    "@type": "Question", "name": qa.q,
    "acceptedAnswer": { "@type": "Answer", "text": qa.a },
  }))),
};

const Faqs = () => (
  <>
    <SEO
      title="GIFT City Funds — Frequently Asked Questions"
      description="Answers to common questions about GIFT City mutual funds, AIFs, PMS, taxation, and how to get started."
      canonical="https://giftcityfunds.in/faqs"
      schema={faqSchema}
      breadcrumbs={[
        { name: "Home", url: "https://giftcityfunds.in/" },
        { name: "FAQs", url: "https://giftcityfunds.in/faqs" },
      ]}
    />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "FAQs", url: "/faqs" }]} />
      <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary mt-6 mb-10">Frequently Asked Questions</h1>
      {faqs.map((g) => (
        <section key={g.g} className="mb-10">
          <h2 className="font-heading font-semibold text-2xl text-primary mb-4">{g.g}</h2>
          <div className="space-y-4">
            {g.qas.map((qa) => (
              <div key={qa.q} className="bg-surface p-5 rounded-lg border border-border">
                <h3 className="font-heading font-semibold text-primary mb-2">{qa.q}</h3>
                <p className="font-body text-sm text-foreground-muted">{qa.a.includes("/us-based-nris") ? (<>It depends heavily on whether the structure has PFIC or Non-PFIC status under US tax law — significant enough that we've written a full page on it. <Link to="/us-based-nris" className="text-secondary hover:underline">See the guide →</Link></>) : qa.a}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  </>
);

export default Faqs;