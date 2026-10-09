import { Link } from "react-router-dom";
import { GuidePage, h2, p, a, table, th, td, type Faq } from "@/components/GuidePage";
import { BarChart } from "@/components/Diagrams";
import TicketLadder from "@/components/TicketLadder";

const faqs: Faq[] = [
  { q: "What is the minimum investment in GIFT City?", a: "It depends on the product: retail schemes and feeder funds set their own minimum, often a few thousand US Dollars; PMS needs USD 75,000; restricted schemes (most AIFs) commonly USD 150,000; US stocks and ETFs through IFSC brokers can start very small." },
  { q: "What is the minimum amount for NRIs to invest in GIFT City?", a: "The same product minimums apply to NRIs. NRIs face no LRS limit or TCS, because their money does not leave India." },
  { q: "Is there a maximum for resident Indians?", a: "Yes. Resident Indians can send up to USD 250,000 a financial year under LRS, across all purposes. TCS of 20% applies to investment remittances above ₹10 lakh a year and is credited back in the income tax return." },
];

const MinimumInvestment = () => (
  <GuidePage
    path="/gift-city-minimum-investment"
    headline="GIFT City Minimum Investment Amounts and Limits, in One Table"
    seoTitle="GIFT City Minimum Investment Amount: Funds, AIF, PMS (2026)"
    description="Every GIFT City minimum in one place: retail funds from USD 500, PMS USD 75,000, AIFs USD 150,000, deposits and US stocks, plus LRS and TCS limits."
    crumb="Minimum Investment and Limits"
    datePublished="2026-10-09"
    faqs={faqs}
    sources={["ifsca", "rbiLrs", "incomeTax"]}
  >
    <p className={p}>
      <strong className="text-primary">The short answer.</strong> GIFT City has no single minimum. Retail funds can start at a few thousand US Dollars, PMS at <strong className="text-primary">USD 75,000</strong> and most AIFs at <strong className="text-primary">USD 150,000</strong>. Resident Indians also work within the LRS limit of <strong className="text-primary">USD 250,000 a year</strong>, with TCS above ₹10 lakh.
    </p>

    <h2 className={h2}>Retail tier vs high-ticket tier</h2>
    <TicketLadder className="mb-4" />

    <h2 className={h2}>Minimums by product</h2>
    <div className="overflow-x-auto">
      <table className={table}>
        <thead><tr><th className={th}>Product</th><th className={th}>Typical minimum</th><th className={th}>Who it suits</th></tr></thead>
        <tbody>
          <tr><td className={td}>US stocks and ETFs via an IFSC broker</td><td className={td}>Can be under USD 100 (fractional)</td><td className={td}>Do-it-yourself investors</td></tr>
          <tr><td className={td}><Link to="/gift-city-feeder-funds" className={a}>Retail scheme / feeder fund</Link></td><td className={td}>From USD 500 for some schemes</td><td className={td}>Most individual investors</td></tr>
          <tr><td className={td}>USD fixed deposit at an IFSC Banking Unit</td><td className={td}>Set by each bank</td><td className={td}>Savers wanting dollar deposits</td></tr>
          <tr><td className={td}><Link to="/gift-city-pms" className={a}>Portfolio management services</Link></td><td className={td}>USD 75,000</td><td className={td}>Larger investors wanting a managed portfolio</td></tr>
          <tr><td className={td}><Link to="/gift-city-aif" className={a}>Restricted scheme (AIF)</Link></td><td className={td}>Commonly USD 150,000</td><td className={td}>Experienced, high-ticket investors</td></tr>
          <tr><td className={td}>Venture capital scheme</td><td className={td}>High; accredited or high-ticket investors</td><td className={td}>Start-up investors</td></tr>
          <tr><td className={td}><Link to="/gift-city-family-office-fpi" className={a}>Family investment fund</Link></td><td className={td}>High minimum corpus</td><td className={td}>Wealthy families</td></tr>
        </tbody>
      </table>
    </div>

    <BarChart
      title="Typical minimums, USD"
      caption="Indicative; each scheme or bank sets its own figure. Some retail schemes start at USD 500."
      rows={[
        { label: "Retail scheme (lowest seen)", value: 500, display: "500" },
        { label: "PMS", value: 75000, display: "75,000" },
        { label: "Restricted scheme (AIF)", value: 150000, display: "150,000", tone: "amber" },
      ]}
    />

    <h2 className={h2}>Limits for resident Indians</h2>
    <div className="overflow-x-auto">
      <table className={table}>
        <tbody>
          <tr><td className={th}>LRS limit</td><td className={td}>USD 250,000 per person per financial year, all purposes combined</td></tr>
          <tr><td className={th}>TCS threshold</td><td className={td}>No TCS on the first ₹10 lakh of LRS remittances a year; 20% above it on investments (FY 2026-27)</td></tr>
          <tr><td className={th}>Calculator</td><td className={td}><Link to="/insights/lrs-tcs-gift-city#calculator" className={a}>Work out TCS on your amount</Link></td></tr>
        </tbody>
      </table>
    </div>
    <p className={p + " mt-4"}>
      Not sure which route applies? Use the <Link to="/gift-city-route-checker" className={a}>route checker</Link>.
    </p>
  </GuidePage>
);

export default MinimumInvestment;
