import { Link } from "react-router-dom";
import { GuidePage, h2, h3, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";
import { BarChart, RouteDiagram } from "@/components/Diagrams";

const faqs: Faq[] = [
  { q: "Is there a SIP option in GIFT City funds?", a: "No. GIFT City funds do not offer a SIP (systematic investment plan) the way Indian rupee mutual funds do. There is no monthly auto-debit mandate. You invest a lump sum that meets the scheme's minimum, and any later investment is another lump sum that you send yourself." },
  { q: "Can I invest in GIFT City funds every month anyway?", a: "Only by sending separate lump-sum investments, where the scheme accepts additional investments. Each one is a fresh transfer you start yourself, and it must meet the scheme's minimum for additional investments. Check this with the fund house before you plan around it." },
  { q: "Why is there no SIP in GIFT City?", a: "A rupee SIP runs on India's NACH or UPI auto-debit systems. A GIFT City fund is held in US Dollars, so for a resident Indian each investment is an overseas remittance under LRS, and for an NRI it is an international transfer. Neither fits a small monthly auto-debit, and schemes are built around higher lump-sum minimums." },
  { q: "If I invest several times a year, how does LRS and TCS work?", a: "For a resident Indian every investment is a separate LRS remittance. Together they count towards the USD 250,000 annual limit and the ₹10 lakh TCS threshold; 20% TCS applies to the amount above ₹10 lakh in the year." },
  { q: "What should I use if I want to invest small amounts monthly?", a: "A monthly SIP is available in Indian rupee mutual funds, including international funds of funds when they are accepting new money. GIFT City is better suited to lump sums. Compare the options on the pages linked here." },
];

const GiftCitySip = () => (
  <GuidePage
    path="/gift-city-sip"
    headline="Is There a SIP in GIFT City Funds? No: Here's How Investing Works"
    seoTitle="GIFT City SIP: Not Available. How to Invest Instead (2026)"
    description="GIFT City funds do not offer a SIP. Why monthly auto-debit is not available, how lump-sum and additional investments work, and how LRS and TCS apply."
    crumb="Is There a SIP in GIFT City?"
    datePublished="2026-10-08"
    dateModified="2026-10-09"
    faqs={faqs}
    sources={["ifsca", "ifscaDirectory", "rbiLrs", "incomeTax"]}
  >
    <div className="space-y-4">
      <p className={p}>
        <strong className="text-primary">The short answer: no.</strong> GIFT City funds do not offer a SIP. There is no monthly auto-debit the way there is with Indian rupee mutual funds. You invest a <strong className="text-primary">lump sum</strong> that meets the scheme's minimum (retail and feeder funds commonly from about USD 500, PMS from USD 75,000, AIFs commonly from USD 150,000). If the scheme accepts additional investments, you can add more later, but each top-up is a separate transfer that you send yourself.
      </p>
    </div>

    <h2 className={h2}>How an investment reaches a GIFT City fund</h2>
    <RouteDiagram
      caption="Every investment, first or additional, is a separate transfer you start yourself."
      from={[
        { label: "Resident Indian", sub: "Rupees converted to USD, sent under LRS", tone: "teal" },
        { label: "NRI / OCI", sub: "USD or other currency from an overseas account", tone: "plain" },
      ]}
      via={{ label: "GIFT City fund", sub: "USD account of the scheme in GIFT IFSC", tone: "ink" }}
      to={[
        { label: "Units allotted", sub: "At the NAV that applies when the money arrives" },
        { label: "Statement from the fund house", sub: "Track it on their investor portal" },
      ]}
    />

    <h2 className={h2}>Rupee mutual fund SIP vs GIFT City fund</h2>
    <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto">
      <table className={table}>
        <thead><tr><th className={th}></th><th className={th}>Indian rupee mutual fund</th><th className={th}>GIFT City fund</th></tr></thead>
        <tbody>
          <tr><td className={th}>SIP</td><td className={td}>Available in almost every open-ended scheme</td><td className={td}>Not available</td></tr>
          <tr><td className={th}>How you invest</td><td className={td}>SIP or lump sum</td><td className={td}>Lump sum; additional lump sums where the scheme allows</td></tr>
          <tr><td className={th}>Typical minimum</td><td className={td}>₹100 to ₹1,000</td><td className={td}>Commonly from about USD 500 (retail); far higher for PMS and AIFs</td></tr>
          <tr><td className={th}>Currency</td><td className={td}>Rupees</td><td className={td}>Usually US Dollars</td></tr>
          <tr><td className={th}>How it is paid</td><td className={td}>NACH or UPI auto-debit</td><td className={td}>A remittance or international transfer each time</td></tr>
          <tr><td className={th}>LRS and TCS (residents)</td><td className={td}>Not applicable</td><td className={td}>Counts towards LRS; 20% TCS above ₹10 lakh a year</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className={h2}>Example: a resident investing in several lump sums</h2>
    <p className={p}>
      Say a resident Indian sends ₹4 lakh three times in a year to a GIFT City fund and makes no other LRS remittance. The first two investments total ₹8 lakh, below the threshold. The third takes the year's total to ₹12 lakh, so 20% TCS applies to the ₹2 lakh above ₹10 lakh.
    </p>
    <BarChart
      title="Year's LRS total and TCS after each investment"
      caption="TCS applies only to the amount above ₹10 lakh in the financial year and is credited against your income tax when you file. Illustration only."
      max={1200000}
      rows={[
        { label: "Investment 1 (₹4 lakh total)", value: 400000, display: "TCS ₹0" },
        { label: "Investment 2 (₹8 lakh total)", value: 800000, display: "TCS ₹0" },
        { label: "Investment 3 (₹12 lakh total)", value: 1200000, display: "TCS ₹40,000", tone: "amber" },
      ]}
    />
    <p className={p}>
      Try your own figures in the <Link to="/insights/lrs-tcs-gift-city#calculator" className={a}>TCS calculator</Link>. NRIs investing money already held abroad do not use LRS, so TCS does not arise.
    </p>

    <h2 className={h2}>What to check before planning more than one investment</h2>
    <ul className={ul}>
      <li>Does the scheme accept additional investments after the first, and what is the minimum for each?</li>
      <li>What does your bank charge per remittance, and what exchange-rate margin does it apply? Several small transfers can cost more than one larger one.</li>
      <li>How many days does a transfer take to be credited, and is there a cut-off time?</li>
      <li>For US-based investors: PFIC reporting applies to every purchase lot. See <Link to="/insights/pfic-explained" className={a}>PFIC explained</Link>.</li>
    </ul>

    <h3 className={h3}>If you want to invest small amounts every month</h3>
    <p className={p}>
      A monthly SIP is available in Indian rupee mutual funds, including <Link to="/gift-city-vs-international-mutual-funds" className={a}>international funds of funds</Link> when they are accepting new money. GIFT City suits lump sums held in dollars. See also <Link to="/gift-city-minimum-investment" className={a}>GIFT City minimum investment</Link> and <Link to="/gift-city-us-stocks-etfs" className={a}>US stocks and ETFs through GIFT City</Link>.
    </p>
  </GuidePage>
);

export default GiftCitySip;
