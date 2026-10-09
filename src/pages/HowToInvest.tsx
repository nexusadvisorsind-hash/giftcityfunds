import { Link } from "react-router-dom";
import { GuidePage, h2, h3, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";
import { FlowSteps, RouteDiagram } from "@/components/Diagrams";
import { BookOpen, UserCheck, FileText, MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    title: "Understand the structures",
    body: "GIFT City funds are a family of structures: retail schemes (including feeder funds), restricted schemes such as AIFs, and portfolio management services. Each has its own minimum, investor eligibility and exit terms. Choosing the structure first matters, because switching later usually means starting onboarding again.",
    link: ["/funds-explained", "Types of GIFT City funds"],
  },
  {
    icon: UserCheck,
    title: "Confirm your route and eligibility",
    body: "Your residential status decides how money reaches the fund. Resident Indians remit from an Indian bank account under the Liberalised Remittance Scheme (LRS), with TCS above ₹10 lakh a year. NRIs and OCIs usually send foreign currency straight from an overseas account, with no LRS and no TCS. US persons should check PFIC status before anything else.",
    link: ["/gift-city-route-checker", "Check your route in 30 seconds"],
  },
  {
    icon: FileText,
    title: "Prepare your KYC documents",
    body: "Fund Management Entities run their own KYC; an Indian mutual fund KYC is not automatically accepted. Keep the documents in the checklist below ready as clear scans. Overseas documents may need to be self-attested or notarised, depending on the fund house.",
  },
  {
    icon: MessageCircle,
    title: "Ask your questions before you sign",
    body: "Read the offer document and ask about anything unclear: costs, exit load, lock-in, how redemptions are paid and how the fund is taxed where you live. Anup Vatyani, an AMFI-registered Mutual Fund Distributor (ARN 106715), can explain the process and connect you with a Fund Management Entity. He does not give personalised investment advice.",
    link: ["/contact", "Talk to Anup"],
  },
  {
    icon: CheckCircle2,
    title: "Subscribe, remit and receive your units",
    body: "Sign the subscription form, complete KYC with the fund house and send the money to the scheme's USD account in GIFT IFSC. Units are allotted at the NAV that applies when the money is received, and you track the holding through the fund house's investor portal and statements.",
  },
];

const faqs: Faq[] = [
  { q: "How long does it take to invest in a GIFT City fund?", a: "Usually one to three weeks from first contact with the fund house: a few days for KYC, one to three working days for the remittance to arrive, and allotment at the next applicable NAV. Delays most often come from missing or unattested documents." },
  { q: "Can I invest in GIFT City funds online?", a: "Many fund houses now offer digital onboarding with e-signatures, though some still ask for physical or notarised documents, especially for overseas investors. The remittance itself is made through your bank." },
  { q: "Do I need a GIFT City bank account to invest?", a: "No. You can invest in most GIFT City funds directly from an Indian bank account (residents, under LRS) or an overseas account (NRIs). A GIFT City bank account (IBU) is optional and can be useful for holding dollars." },
  { q: "Do NRIs need a PAN to invest in a GIFT City fund?", a: "Most fund houses ask for a PAN, or a declaration where PAN is not available. Requirements differ by fund house and investor type, so confirm with the fund before you start." },
  { q: "How does GIFT City fund redemption work?", a: "You submit a redemption request to the fund house. Proceeds are paid in the fund's currency, usually USD, to your registered bank account. Resident Indians must bring the money back to India or reinvest it within the time allowed by RBI rules." },
];

const HowToInvest = () => (
  <GuidePage
    path="/how-to-invest"
    headline="How to Invest in GIFT City Funds: Step-by-Step Guide for NRIs and Residents"
    seoTitle="How to Invest in GIFT City Funds (2026): NRI & Resident Guide"
    description="How to invest in GIFT City funds step by step: choosing a structure, LRS for residents vs direct USD for NRIs, KYC documents, remittance, allotment and redemption. With diagrams and a document checklist."
    crumb="How to Invest"
    datePublished="2026-07-23"
    dateModified="2026-10-08"
    faqs={faqs}
    sources={["ifscaDirectory", "rbiLrs", "incomeTax", "irs8621"]}
    extraSchema={[
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "How to Invest in GIFT City Funds",
        description: "Step-by-step process for NRIs, OCIs and resident Indians investing in GIFT City IFSC funds.",
        totalTime: "P14D",
        step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.body, url: `https://giftcityfunds.in/how-to-invest#step-${i + 1}` })),
      },
    ]}
  >
    <p className={p}>
      <strong className="text-primary">The short answer.</strong> Choose the fund structure, confirm how your money will travel (LRS for resident Indians, direct foreign currency for NRIs), complete KYC with the fund house, then remit US Dollars to the scheme and receive units. The whole process usually takes one to three weeks.
    </p>

    <FlowSteps
      caption="The five steps. Step 4 is where most mistakes are avoided."
      highlight={3}
      steps={steps.map((s) => ({ title: s.title }))}
    />

    <h2 className={h2}>Two routes: residents and NRIs</h2>
    <RouteDiagram
      caption="The fund is the same; the route, limits and paperwork differ."
      from={[
        { label: "Resident Indian", sub: "Indian bank account → LRS (USD 250,000 a year) → TCS 20% above ₹10 lakh", tone: "teal" },
        { label: "NRI / OCI", sub: "Overseas bank account → USD transfer, no LRS, no TCS", tone: "plain" },
      ]}
      via={{ label: "Scheme's USD account in GIFT IFSC", sub: "Run by an IFSCA-registered FME", tone: "ink" }}
      to={[{ label: "Units allotted at NAV", sub: "Statement and investor portal access", tone: "amber" }]}
    />

    <h2 className={h2}>The GIFT City investment process, step by step</h2>
    <ol className="space-y-5 list-none p-0">
      {steps.map((s, i) => (
        <li key={s.title} id={`step-${i + 1}`} className="bg-surface border border-border rounded-xl p-5 md:p-6 scroll-mt-24 gcf-lift">
          <div className="flex gap-4">
            <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold ${i === 3 ? "bg-brass text-ink" : "bg-teal text-ink"}`}>{i + 1}</div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <s.icon className="h-5 w-5 text-secondary" aria-hidden />
                <h3 className="font-heading font-semibold text-xl text-primary">{s.title}</h3>
              </div>
              <p className={p}>{s.body}</p>
              {s.link && (
                <Link to={s.link[0]} className="mt-3 font-body text-secondary hover:underline inline-flex items-center">
                  {s.link[1]} <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>

    <h2 className={h2}>Document checklist</h2>
    <div className="overflow-x-auto">
      <table className={table}>
        <thead><tr><th className={th}>Document</th><th className={th}>Resident Indian</th><th className={th}>NRI</th><th className={th}>OCI / foreign citizen</th></tr></thead>
        <tbody>
          <tr><td className={td}>Passport</td><td className={td}>Usually</td><td className={td}>Yes</td><td className={td}>Yes (foreign passport)</td></tr>
          <tr><td className={td}>PAN card</td><td className={td}>Yes</td><td className={td}>Usually</td><td className={td}>Usually, or a declaration</td></tr>
          <tr><td className={td}>OCI card</td><td className={td}>—</td><td className={td}>—</td><td className={td}>Yes</td></tr>
          <tr><td className={td}>Proof of address</td><td className={td}>Indian address</td><td className={td}>Overseas address</td><td className={td}>Overseas address</td></tr>
          <tr><td className={td}>Bank statement / cancelled cheque</td><td className={td}>Indian account</td><td className={td}>Account the money comes from</td><td className={td}>Account the money comes from</td></tr>
          <tr><td className={td}>Tax Residency Certificate</td><td className={td}>—</td><td className={td}>Often, to claim treaty rates</td><td className={td}>Often</td></tr>
          <tr><td className={td}>FATCA / CRS self-certification</td><td className={td}>Yes</td><td className={td}>Yes</td><td className={td}>Yes</td></tr>
          <tr><td className={td}>Form A2 and LRS declaration</td><td className={td}>Yes, at your bank</td><td className={td}>—</td><td className={td}>—</td></tr>
          <tr><td className={td}>W-9 or W-8BEN</td><td className={td}>—</td><td className={td}>If US-linked</td><td className={td}>If US-linked</td></tr>
        </tbody>
      </table>
    </div>
    <p className="font-body text-xs text-foreground-muted mt-2">Typical requirements; each fund house sets its own list.</p>

    <h2 className={h2}>What happens to your money, and when</h2>
    <div className="grid sm:grid-cols-3 gap-3">
      {[
        ["Days 1–5", "KYC submitted and verified by the fund house"],
        ["Days 5–8", "Remittance sent; arrives in one to three working days"],
        ["Days 8–14", "Units allotted; confirmation and portal access"],
      ].map(([t, d]) => (
        <div key={t} className="rounded-xl border border-border bg-background p-4">
          <p className="font-heading font-bold text-secondary">{t}</p>
          <p className="font-body text-sm text-foreground-muted mt-1">{d}</p>
        </div>
      ))}
    </div>

    <h2 className={h2}>Mistakes to avoid</h2>
    <ul className={ul}>
      <li><strong className="text-primary">Investing from the wrong account.</strong> NRIs should not invest from a resident savings account; convert it to NRO first.</li>
      <li><strong className="text-primary">Forgetting other LRS remittances.</strong> School fees, travel and gifts count towards the same ₹10 lakh TCS threshold. Use the <Link to="/insights/lrs-tcs-gift-city#calculator" className={a}>TCS calculator</Link>.</li>
      <li><strong className="text-primary">Ignoring PFIC as a US person.</strong> Read <Link to="/insights/pfic-explained" className={a}>PFIC explained</Link> first.</li>
      <li><strong className="text-primary">Skipping the exit terms.</strong> Lock-ins and exit loads differ widely between structures.</li>
      <li><strong className="text-primary">Not reporting it.</strong> Residents must show the holding in Schedule FA of their return every year.</li>
    </ul>

    <h3 className={h3}>Next</h3>
    <p className={p}>
      Browse the <Link to="/gift-city-fund-list" className={a}>GIFT City fund list</Link>, read the <Link to="/gift-city-funds-risks" className={a}>risks</Link>, or see <Link to="/who-its-for" className={a}>who can invest</Link>.
    </p>
  </GuidePage>
);

export default HowToInvest;
