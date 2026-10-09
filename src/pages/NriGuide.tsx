import { Link } from "react-router-dom";
import { GuidePage, h2, h3, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";
import { FlowSteps, RouteDiagram } from "@/components/Diagrams";

interface Country {
  id: string;
  name: string;
  summary: string;
  tax: string[];
  check: string[];
  more?: { to: string; label: string };
}

const COUNTRIES: Country[] = [
  {
    id: "uae",
    name: "UAE (Dubai, Abu Dhabi and other emirates)",
    summary: "The dirham is pegged to the US Dollar and the UAE does not tax individuals on investment income, so a dollar GIFT City fund fits UAE earners neatly. The India-side rules decide most of the outcome.",
    tax: [
      "The UAE does not levy personal income tax on individuals' investment income.",
      "India and the UAE have a tax treaty; a UAE Tax Residency Certificate, issued by the Federal Tax Authority, is usually needed to rely on it.",
      "Watch the Indian deemed-resident rule: an Indian citizen with Indian-source income above ₹15 lakh who is not liable to tax in any other country can be treated as resident in India (RNOR). Because the UAE has no personal income tax, UAE-based NRIs with substantial Indian income should check this every year.",
    ],
    check: ["Passport, UAE visa or Emirates ID, PAN if you have one, UAE address proof", "Transfer USD (or AED converted) from your UAE bank account"],
  },
  {
    id: "gulf",
    name: "Saudi Arabia, Qatar, Kuwait, Bahrain and Oman",
    summary: "Like the UAE, most Gulf countries do not tax individuals on investment income, and their currencies are mostly pegged to the US Dollar.",
    tax: [
      "Saudi Arabia, Qatar, Kuwait and Bahrain do not levy personal income tax on individuals' investment income.",
      "Oman has announced a 5% personal income tax on high earners from January 2028; check how it applies to you.",
      "India has tax treaties with each of these countries. The same Indian deemed-resident rule as for the UAE can apply.",
    ],
    check: ["Residence permit (Iqama or equivalent) and local address proof", "Some funds restrict certain jurisdictions; confirm eligibility for your country"],
  },
  {
    id: "uk",
    name: "United Kingdom",
    summary: "The deciding question is the fund's HMRC reporting status: without it, gains are normally taxed as income at your marginal rate rather than as capital gains.",
    tax: [
      "Under HMRC's offshore fund rules, a gain on a fund without UK reporting fund status is normally taxed as income (an offshore income gain). A reporting fund's gains are normally capital gains.",
      "From 6 April 2025, the 4-year foreign income and gains (FIG) regime replaced the remittance basis. New arrivals after at least ten years of non-residence can claim relief on eligible foreign income and gains.",
      "GIFT City funds are not usually ISA- or SIPP-eligible. India and the UK have a tax treaty.",
    ],
    check: ["Ask the fund house whether the scheme has, or will apply for, UK reporting fund status", "Funds are usually in USD, so a sterling investor carries USD/GBP currency risk"],
  },
  {
    id: "us",
    name: "United States",
    summary: "Many GIFT City funds do not accept US persons at all. Where they do, PFIC rules usually make the US tax outcome costly, so US-based NRIs should check eligibility and PFIC status before anything else.",
    tax: [
      "Most foreign pooled funds are Passive Foreign Investment Companies (PFICs) for US tax, with annual Form 8621 reporting and, by default, punitive tax on gains.",
      "A QEF election (if the fund provides a PFIC Annual Information Statement) or mark-to-market can improve the outcome.",
      "US persons also have foreign account and asset reporting duties (FBAR, Form 8938).",
    ],
    check: [
      "Confirm the fund accepts US persons: for example, Tata India Dynamic Equity Fund (GIFT City) states that US and US-connected persons are not eligible",
      "Ask whether the fund provides QEF information, and speak to a US tax adviser first",
    ],
    more: { to: "/us-based-nris", label: "Full PFIC guide for US-based NRIs" },
  },
  {
    id: "canada",
    name: "Canada",
    summary: "Canadian residents are taxed on worldwide income, and some GIFT City funds do not accept Canadian residents, so check eligibility first.",
    tax: [
      "Income and gains from a GIFT City fund are reportable in Canada; the India–Canada tax treaty gives credit for tax paid in India.",
      "If the total cost of your specified foreign property is more than CAD 100,000 at any time in the year, you generally need to file Form T1135.",
      "Canada has its own rules for offshore investment funds; take advice before investing.",
    ],
    check: ["Confirm the fund accepts Canadian residents", "Keep cost records in CAD for T1135 and capital gains"],
  },
  {
    id: "singapore",
    name: "Singapore",
    summary: "Singapore does not tax capital gains, and foreign-sourced income received by resident individuals is generally exempt, so the India-side treatment matters most.",
    tax: [
      "Foreign-sourced income received in Singapore by resident individuals is generally exempt, except through a Singapore partnership.",
      "India and Singapore have a tax treaty; a Singapore Certificate of Residence is usually needed to rely on it.",
      "Frequent trading can be treated as business income; confirm your position with IRAS or an adviser.",
    ],
    check: ["Singapore address proof and employment pass or residence document", "Transfer USD or SGD converted from a Singapore bank account"],
  },
  {
    id: "australia",
    name: "Australia",
    summary: "Australian residents are taxed on worldwide income, including capital gains, and claim credit for tax paid abroad.",
    tax: [
      "Gains and distributions from a GIFT City fund are generally taxable in Australia; individuals may get a capital gains discount on assets held for more than 12 months.",
      "Tax paid in India can usually be claimed as a foreign income tax offset; India and Australia have a tax treaty.",
      "Rules for foreign funds can be complex; keep records in AUD and take advice.",
    ],
    check: ["Confirm the fund accepts Australian residents", "Australian address proof and tax file details for KYC"],
  },
];

const faqs: Faq[] = [
  { q: "How are GIFT City funds taxed in the UK for UK-resident NRIs?", a: "It depends on the fund's HMRC reporting status. Gains on a reporting fund are normally capital gains; gains on a non-reporting fund are normally taxed as income (offshore income gains). The 4-year FIG regime may give relief to recent arrivals." },
  { q: "Can NRIs invest in GIFT City funds?", a: "Yes. NRIs can invest in GIFT City funds directly in US Dollars from a bank account abroad, without LRS or TCS. Each fund sets its own eligibility, and some exclude residents of certain countries, especially the US and Canada." },
  { q: "What is the minimum investment for NRIs in GIFT City funds?", a: "It depends on the fund. Some retail schemes start at USD 500; others need a few thousand dollars. PMS needs USD 75,000 and most AIFs about USD 150,000." },
  { q: "What are GIFT City NRI mutual funds?", a: "They are GIFT City funds designed for NRIs: usually US Dollar retail schemes or feeder funds that invest in Indian markets (inbound) or global markets (outbound), bought directly from abroad without converting to rupees." },
  { q: "Do NRIs pay tax in India on GIFT City funds?", a: "Many GIFT City funds are structured so that non-resident investors bear little or no Indian tax, and NRIs whose only Indian income is from such funds may not need to file an Indian return. You are still taxed in your country of residence. Confirm the treatment for the specific fund." },
  { q: "How does repatriation from GIFT City work for NRIs?", a: "Redemptions are paid in US Dollars to an overseas or foreign currency account, so there is no rupee repatriation step and no NRO repatriation limit." },
  { q: "How to invest in GIFT City from the UAE?", a: "Choose a fund that accepts UAE residents, complete the fund house's KYC with your passport, visa or Emirates ID and address proof, and transfer US Dollars from your UAE bank account. No LRS or TCS applies." },
  { q: "How are GIFT City funds taxed for NRIs, country by country?", a: "The UAE and most Gulf countries do not tax individuals' investment income; the UK depends on reporting fund status; the US applies PFIC rules; Canada and Australia tax worldwide income with treaty credit; Singapore generally exempts foreign-sourced income for individuals." },
  { q: "Can US-based NRIs invest in GIFT City funds?", a: "Only in funds that accept US persons, and many do not. Where they do, PFIC rules usually apply. Check the fund's eligibility and PFIC status first." },
];

const NriGuide = () => (
  <GuidePage
    path="/gift-city-funds-for-nri"
    headline="GIFT City Funds for NRIs: The Complete Guide, Country by Country"
    seoTitle="GIFT City Funds for NRIs (2026): Rules, Minimums, Tax by Country"
    description="Everything NRIs need on GIFT City funds: eligibility, USD investing without LRS, minimums from USD 500, documents, repatriation, and full tax explanations for the UAE, Gulf, UK, US, Canada, Singapore and Australia."
    crumb="GIFT City Funds for NRIs"
    datePublished="2026-10-09"
    faqs={faqs}
    sources={["ifscaDirectory", "uaeTax", "hmrcOffshore", "ukFig", "irs8621", "craT1135", "irasOverseas", "incomeTax"]}
  >
    <p className={p}>
      <strong className="text-primary">The short answer.</strong> As an NRI you can invest in GIFT City funds <strong className="text-primary">directly in US Dollars</strong> from your bank account abroad. There is no LRS limit, no TCS and no rupee conversion, and redemptions come back to you in dollars. Some retail funds start at <strong className="text-primary">USD 500</strong>. What changes from country to country is whether the fund accepts you, and how your home country taxes the investment. Both are covered below.
    </p>

    <nav aria-label="Jump to your country" className="my-6 flex flex-wrap gap-2">
      {COUNTRIES.map((c) => (
        <a key={c.id} href={`#${c.id}`} className="rounded-full border border-border bg-surface px-3 py-1.5 font-body text-sm text-primary hover:border-teal hover:bg-teal/10">
          {c.name.split(" (")[0]}
        </a>
      ))}
    </nav>

    <h2 className={h2}>How your money moves as an NRI</h2>
    <RouteDiagram
      caption="No LRS and no TCS: the money starts and ends outside India."
      from={[{ label: "Your bank account abroad", sub: "USD, or local currency converted to USD", tone: "teal" }]}
      via={{ label: "GIFT City fund", sub: "USD account in GIFT IFSC, IFSCA-regulated", tone: "ink" }}
      to={[
        { label: "Inbound: Indian markets", sub: "Indian equity and debt, held in USD terms", tone: "amber" },
        { label: "Outbound: global markets", sub: "US and global funds", tone: "teal" },
        { label: "Redemption in USD", sub: "Back to your account abroad" },
      ]}
    />

    <h2 className={h2}>Who counts as an NRI</h2>
    <p className={p}>
      For investing, an NRI is an Indian citizen who lives outside India. For Indian tax, you are generally non-resident if you spend fewer than 182 days in India in the financial year, though other tests apply, including a 120-day test if your Indian income exceeds ₹15 lakh. OCI cardholders are covered on <Link to="/gift-city-funds-for-oci" className={a}>their own page</Link>.
    </p>

    <h2 className={h2}>What NRIs can invest in through GIFT City</h2>
    <div className="overflow-x-auto">
      <table className={table}>
        <thead><tr><th className={th}>Product</th><th className={th}>Typical minimum</th><th className={th}>Notes</th></tr></thead>
        <tbody>
          <tr><td className={td}>Retail funds and feeder funds</td><td className={td}>From USD 500 for some funds</td><td className={td}>Inbound (India) or outbound (global)</td></tr>
          <tr><td className={td}>USD fixed deposits at IFSC Banking Units</td><td className={td}>Set by each bank</td><td className={td}>See <Link to="/insights/gift-city-fd-vs-nre-fcnr" className={a}>FDs vs NRE/FCNR</Link></td></tr>
          <tr><td className={td}>US stocks and ETFs via IFSC brokers</td><td className={td}>Can be very small</td><td className={td}>You choose the holdings</td></tr>
          <tr><td className={td}><Link to="/gift-city-pms" className={a}>PMS</Link></td><td className={td}>USD 75,000</td><td className={td}>Portfolio in your name</td></tr>
          <tr><td className={td}><Link to="/gift-city-aif" className={a}>AIF (restricted scheme)</Link></td><td className={td}>Commonly USD 150,000</td><td className={td}>For experienced investors</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className={h2}>Investing step by step</h2>
    <FlowSteps
      caption="Typically one to three weeks from start to units."
      highlight={1}
      steps={[
        { title: "Pick inbound or outbound", sub: "India exposure or global" },
        { title: "Check the fund accepts your country", sub: "Especially US and Canada" },
        { title: "KYC with the fund house", sub: "Passport, address proof, PAN if any, TRC" },
        { title: "Transfer USD from abroad", sub: "No LRS, no TCS" },
        { title: "Units allotted", sub: "Track on the investor portal" },
      ]}
    />

    <h2 className={h2}>Country by country: what changes for you</h2>
    <div className="overflow-x-auto">
      <table className={table}>
        <thead><tr><th className={th}>Where you live</th><th className={th}>Home tax on investment income</th><th className={th}>Main thing to check</th></tr></thead>
        <tbody>
          <tr><td className={td}>UAE</td><td className={td}>None for individuals</td><td className={td}>Indian deemed-resident rule</td></tr>
          <tr><td className={td}>Saudi, Qatar, Kuwait, Bahrain</td><td className={td}>None for individuals</td><td className={td}>Fund eligibility for your country</td></tr>
          <tr><td className={td}>Oman</td><td className={td}>5% on high earners from 2028</td><td className={td}>Whether it applies to you</td></tr>
          <tr><td className={td}>UK</td><td className={td}>Yes</td><td className={td}>Reporting fund status</td></tr>
          <tr><td className={td}>US</td><td className={td}>Yes</td><td className={td}>Whether US persons are accepted; PFIC</td></tr>
          <tr><td className={td}>Canada</td><td className={td}>Yes</td><td className={td}>Eligibility; T1135 reporting</td></tr>
          <tr><td className={td}>Singapore</td><td className={td}>Generally none on foreign-sourced income</td><td className={td}>Certificate of Residence</td></tr>
          <tr><td className={td}>Australia</td><td className={td}>Yes</td><td className={td}>Eligibility; foreign income tax offset</td></tr>
        </tbody>
      </table>
    </div>

    {COUNTRIES.map((c) => (
      <section key={c.id} id={c.id} className="mt-10 scroll-mt-24 rounded-2xl border border-border bg-surface p-5 md:p-6">
        <h2 className="font-heading font-semibold text-2xl text-primary mb-2">GIFT City funds for NRIs in {c.name}</h2>
        <p className={p}>{c.summary}</p>
        <h3 className={h3}>Tax at home</h3>
        <ul className={ul}>{c.tax.map((t) => <li key={t}>{t}</li>)}</ul>
        <h3 className={h3}>Before you invest</h3>
        <ul className={ul}>{c.check.map((t) => <li key={t}>{t}</li>)}</ul>
        {c.more && <p className="font-body mt-3"><Link to={c.more.to} className={a}>{c.more.label}</Link></p>}
      </section>
    ))}

    <h2 className={h2}>Comparing routes</h2>
    <p className={p}>
      See <Link to="/insights/gift-city-vs-nre-nro" className={a}>GIFT City vs NRE/NRO investing</Link>, <Link to="/gift-city-fund-list" className={a}>the GIFT City fund list</Link>, and, if you plan to move back, <Link to="/insights/returning-to-india-gift-city-investments" className={a}>returning to India</Link>.
    </p>
  </GuidePage>
);

export default NriGuide;
