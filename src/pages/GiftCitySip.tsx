import { Link } from "react-router-dom";
import { GuidePage, h2, h3, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";
import { BarChart, RouteDiagram } from "@/components/Diagrams";

const faqs: Faq[] = [
  { q: "Can I do a SIP in a GIFT City fund?", a: "It depends on the scheme. Some GIFT City retail schemes accept regular, smaller investments after a first investment; many are built around a lump-sum minimum. The scheme's offer document and the fund house state whether recurring investments are accepted and at what minimum." },
  { q: "Can I use a NACH auto-debit mandate like a normal SIP?", a: "Usually not in the same way. A resident's investment in a GIFT City fund is an overseas remittance under LRS, so each instalment is a foreign remittance from your bank, often set up as a standing instruction or sent manually. Arrangements vary by bank and fund house." },
  { q: "Does each SIP instalment count towards LRS?", a: "Yes. For a resident Indian every instalment is a remittance under LRS. It counts towards the USD 250,000 annual limit and towards the ₹10 lakh TCS threshold." },
  { q: "Do NRIs need LRS for a GIFT City SIP?", a: "No. NRIs investing money already held abroad send it in foreign currency from their overseas account, so LRS and TCS do not apply. They still need to meet the scheme's own minimums." },
  { q: "Is there a cheaper way to invest small monthly amounts abroad?", a: "For small regular amounts, a domestic international fund of funds (when it is accepting money) or US-listed ETFs bought through an IFSC broker are the usual alternatives. Each has different costs, tax and limits; see the comparison pages linked here." },
];

const GiftCitySip = () => (
  <GuidePage
    path="/gift-city-sip"
    headline="SIP in GIFT City Funds: Can You Invest Monthly?"
    seoTitle="SIP in GIFT City Funds: How Monthly Investing Works (2026)"
    description="Can you start a SIP in a GIFT City fund? How monthly investing works for residents (LRS, TCS) and NRIs, with a month-by-month TCS example."
    crumb="SIP in GIFT City Funds"
    datePublished="2026-10-08"
    faqs={faqs}
    sources={["ifsca", "ifscaDirectory", "rbiLrs", "incomeTax"]}
  >
    <div className="space-y-4">
      <p className={p}>
        <strong className="text-primary">The short answer.</strong> A systematic investment plan (SIP) in a GIFT City fund is possible only where the scheme allows recurring investments, and it does not work quite like a rupee SIP. For a resident Indian, every instalment is an overseas remittance under the Liberalised Remittance Scheme (LRS): it is sent in US Dollars, counts towards your annual LRS limit and, once your remittances for the year pass ₹10 lakh, attracts 20% TCS. NRIs investing from abroad avoid LRS and TCS.
      </p>
    </div>

    <h2 className={h2}>How a monthly instalment travels</h2>
    <RouteDiagram
      caption="Each instalment is a separate transfer into the fund's USD account in GIFT IFSC."
      from={[
        { label: "Resident Indian", sub: "Rupees from an Indian bank account, under LRS", tone: "teal" },
        { label: "NRI / OCI", sub: "USD or other currency from an overseas account", tone: "plain" },
      ]}
      via={{ label: "GIFT City fund", sub: "USD account of the scheme in GIFT IFSC", tone: "ink" }}
      to={[
        { label: "Units allotted", sub: "At the NAV on the day the money is received" },
        { label: "Statement from the fund house", sub: "Track it on their investor portal" },
      ]}
    />

    <h2 className={h2}>Rupee SIP vs GIFT City recurring investment</h2>
    <div className="overflow-x-auto">
      <table className={table}>
        <thead><tr><th className={th}></th><th className={th}>Domestic mutual fund SIP</th><th className={th}>GIFT City fund, recurring</th></tr></thead>
        <tbody>
          <tr><td className={th}>Availability</td><td className={td}>Almost every open-ended scheme</td><td className={td}>Only where the scheme permits it</td></tr>
          <tr><td className={th}>Typical minimum</td><td className={td}>₹100 to ₹1,000 a month</td><td className={td}>Set by the scheme; often a larger first investment</td></tr>
          <tr><td className={th}>Currency</td><td className={td}>Rupees</td><td className={td}>Usually US Dollars</td></tr>
          <tr><td className={th}>How it is paid</td><td className={td}>NACH or UPI auto-debit</td><td className={td}>Overseas remittance each time</td></tr>
          <tr><td className={th}>LRS and TCS (residents)</td><td className={td}>Not applicable</td><td className={td}>Counts towards LRS; 20% TCS above ₹10 lakh a year</td></tr>
          <tr><td className={th}>Bank charges</td><td className={td}>Usually none</td><td className={td}>Remittance and conversion charges on each instalment</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className={h2}>Example: ₹1 lakh a month for a year</h2>
    <p className={p}>
      A resident who sends ₹1 lakh every month and makes no other LRS remittance stays under ₹10 lakh until the tenth instalment. The eleventh and twelfth instalments are fully above the threshold, so each attracts 20% TCS.
    </p>
    <BarChart
      title="Cumulative remittance and TCS, month by month"
      caption="TCS starts only once the year's total passes ₹10 lakh. It is credited against your income tax when you file your return. Illustration only."
      max={1200000}
      rows={[
        { label: "Months 1–10 (₹10 lakh total)", value: 1000000, display: "TCS ₹0" },
        { label: "Month 11 (₹11 lakh total)", value: 1100000, display: "TCS ₹20,000", tone: "amber" },
        { label: "Month 12 (₹12 lakh total)", value: 1200000, display: "TCS ₹20,000", tone: "amber" },
      ]}
    />
    <p className={p}>
      Over the year, ₹40,000 is collected as TCS and claimed back in the return. Try your own figures in the <Link to="/insights/lrs-tcs-gift-city#calculator" className={a}>TCS calculator</Link>.
    </p>

    <h2 className={h2}>What to check before setting up regular investments</h2>
    <ul className={ul}>
      <li>Does the scheme accept additional or recurring investments, and what is the minimum for each?</li>
      <li>Is there a cut-off time, and how many days does a remittance take to be credited?</li>
      <li>What does your bank charge per remittance, and what exchange rate margin does it apply? On small instalments this can matter more than the fund's own cost.</li>
      <li>Can your bank set up a standing instruction for a monthly overseas remittance?</li>
      <li>For US-based investors: PFIC reporting applies to every purchase lot. See <Link to="/insights/pfic-explained" className={a}>PFIC explained</Link>.</li>
    </ul>

    <h3 className={h3}>Alternatives for small monthly amounts</h3>
    <p className={p}>
      If the amount is small, compare with an Indian <Link to="/gift-city-vs-international-mutual-funds" className={a}>international mutual fund</Link> (when it is accepting new money) or <Link to="/gift-city-us-stocks-etfs" className={a}>US ETFs through GIFT City</Link>. The trade-offs in cost, tax and limits are set out on those pages.
    </p>
  </GuidePage>
);

export default GiftCitySip;
