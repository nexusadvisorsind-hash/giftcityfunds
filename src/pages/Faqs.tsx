import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OfficialSources } from "@/components/OfficialSources";

interface QA { q: string; a: string; link?: { to: string; label: string } }

const faqs: { g: string; qas: QA[] }[] = [
  { g: "Basics", qas: [
    { q: "What is a GIFT City fund?", a: "A fund registered with and regulated by IFSCA, managed by a Fund Management Entity based in GIFT City's International Financial Services Centre, and denominated in a foreign currency — almost always US Dollars.", link: { to: "/what-is-gift-city", label: "What is GIFT City?" } },
    { q: "Where is GIFT City?", a: "GIFT City (Gujarat International Finance Tec-City) is a purpose-built financial district in Gandhinagar, Gujarat. It hosts India's International Financial Services Centre." },
    { q: "Who regulates GIFT City funds?", a: "IFSCA, the International Financial Services Centres Authority. It is the unified regulator for financial services in the IFSC. SEBI regulates domestic Indian mutual funds, not GIFT City funds.", link: { to: "/insights/ifsca-vs-sebi", label: "IFSCA vs SEBI" } },
    { q: "What is the difference between inbound and outbound GIFT City funds?", a: "An inbound fund brings money from outside India into Indian markets. An outbound fund takes money from India or global investors into international markets.", link: { to: "/funds-explained", label: "Fund structures explained" } },
    { q: "Is a GIFT City fund the same as a regular Indian mutual fund?", a: "No. It's regulated by IFSCA (not SEBI alone), denominated in foreign currency, and structured to operate within India's International Financial Services Centre — with different rules on eligibility, currency and taxation." },
    { q: "Do I need a PAN card to invest?", a: "For many GIFT City structures, a PAN isn't mandatory for eligible foreign investors, though requirements vary by Fund Management Entity and fund category. Confirm with the specific fund before assuming either way." },
    { q: "What currency do I invest in?", a: "Almost always US Dollars. You transfer USD in, and — on redemption — receive USD out; the fund handles INR conversion internally." },
  ]},
  { g: "Eligibility", qas: [
    { q: "Can resident Indians invest?", a: "Yes, via the Liberalised Remittance Scheme (LRS), subject to the annual USD 250,000 limit and TCS rules." },
    { q: "Do NRIs need an NRE or NRO account to invest?", a: "No. NRIs typically invest directly in US Dollars from an existing overseas bank account.", link: { to: "/insights/gift-city-vs-nre-nro", label: "GIFT City fund vs NRE/NRO investing" } },
    { q: "Can foreign institutions invest in GIFT City funds?", a: "Yes. Corporates, banks, insurers, sovereign funds and other institutions can access GIFT City funds, typically through inbound structures, subject to their own documentation requirements." },
    { q: "I'm an OCI — can I invest the same way as an NRI?", a: "Broadly yes, though some Fund Management Entities apply country-specific or entity-specific conditions. Always confirm eligibility for the specific fund." },
  ]},
  { g: "Minimums and money", qas: [
    { q: "What is the minimum investment in a GIFT City fund?", a: "It depends on the structure. Mutual Fund FoFs and Retail Feeder Funds can start from roughly $5,000, while PMS and AIFs typically require $75,000 to $150,000 or more. Figures are indicative; confirm the current minimum with the fund.", link: { to: "/funds-explained", label: "Compare the structures" } },
    { q: "What is the LRS limit for resident Indians?", a: "The Liberalised Remittance Scheme currently allows a resident individual to remit up to USD 250,000 per financial year for permitted purposes, including investing in outbound GIFT City structures.", link: { to: "/insights/lrs-tcs-gift-city", label: "LRS, TCS and GIFT City" } },
    { q: "Is my money repatriable?", a: "Generally yes, since these are USD-denominated structures — but always confirm the specific redemption and repatriation terms with the Fund Management Entity before investing." },
  ]},
  { g: "Safety and risk", qas: [
    { q: "Are GIFT City funds safe?", a: "They are regulated by IFSCA, and Fund Management Entities must be registered. Regulation does not guarantee returns. As with any investment, safety depends on the specific fund, its manager and what it holds.", link: { to: "/gift-city-funds-risks", label: "Risks of GIFT City funds" } },
    { q: "How is a GIFT City fund different from a regular mutual fund?", a: "The regulator (IFSCA, not SEBI), the currency (US Dollars, not rupees), the minimum investment and the tax treatment are all different.", link: { to: "/gift-city-funds-vs-mutual-funds", label: "See the full comparison" } },
  ]},
  { g: "Taxation", qas: [
    { q: "Is TCS on an LRS remittance an extra tax?", a: "No. Tax Collected at Source on LRS remittances above the threshold is an advance tax. You can claim it back or adjust it against your total tax liability when you file your return.", link: { to: "/taxation", label: "Regulation and taxation" } },
    { q: "How is a GIFT City fund taxed for a US-based NRI?", a: "It depends heavily on whether the structure has PFIC or Non-PFIC status under US tax law — significant enough that we've written a full page on it. See /us-based-nris" },
    { q: "Do I have to pay GST on fund management fees?", a: "Generally no — most GIFT City structures aren't subject to India's GST on fund management or performance fees." },
  ]},
  { g: "Getting Started", qas: [
    { q: "What documents will I need?", a: "It varies by whether you're investing as an individual or an entity, and inbound or outbound. Reach out for a current checklist covering the common requirements." },
    { q: "Does Anup sell these funds directly?", a: "Anup is an AMFI-registered Mutual Fund Distributor (ARN 106715), not a SEBI-registered Investment Adviser. If you ask, he can explain the process and connect you with a Fund Management Entity. He does not give personalised investment advice, and this website exists to help you understand the landscape first." },
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
      title="GIFT City Funds FAQs: Minimums, Tax, Safety & Eligibility"
      description="Plain answers to common questions about GIFT City funds: who can invest, minimum investment, LRS and TCS, safety, tax and how to get started."
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
                <p className="font-body text-sm text-foreground-muted">{qa.link ? (<>{qa.a} <Link to={qa.link.to} className="text-secondary hover:underline">{qa.link.label} →</Link></>) : qa.a.includes("/us-based-nris") ? (<>It depends heavily on whether the structure has PFIC or Non-PFIC status under US tax law — significant enough that we've written a full page on it. <Link to="/us-based-nris" className="text-secondary hover:underline">See the guide →</Link></>) : qa.a}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
      <OfficialSources items={["ifsca", "rbiLrs", "incomeTax", "amfi"]} />
    </div>
  </>
);

export default Faqs;