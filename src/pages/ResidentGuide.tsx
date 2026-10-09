import { Link } from "react-router-dom";
import { GuidePage, h2, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";
import { FlowSteps, RouteDiagram } from "@/components/Diagrams";
import TcsCalculator from "@/components/TcsCalculator";

const faqs: Faq[] = [
  { q: "What is GIFT City outbound investment for resident Indians?", a: "It is investing abroad through a GIFT City fund, broker or bank, using LRS. The money is held in US Dollars and invested in global markets, within the USD 250,000 annual LRS limit." },
  { q: "Can resident Indians invest in GIFT City funds?", a: "Yes, through the Liberalised Remittance Scheme. Resident Indians can invest in outbound GIFT City funds and other permitted IFSC products, up to USD 250,000 a financial year across all LRS purposes." },
  { q: "Can resident Indians invest in inbound GIFT City funds?", a: "Usually not. Inbound funds that invest in India are generally meant for NRIs and foreign investors, and many exclude Indian residents. Residents normally use outbound funds or domestic Indian mutual funds." },
  { q: "How much TCS will I pay?", a: "For FY 2026-27, no TCS on the first ₹10 lakh of LRS remittances in the year, then 20% on investment remittances above it. TCS is credited back against your income tax." },
  { q: "What do resident Indians need to report?", a: "Show the GIFT City holding in Schedule FA of your income tax return every year, and report any income or gains. Missing Schedule FA can attract heavy penalties." },
  { q: "Can resident Indians trade GIFT Nifty?", a: "Generally no. LRS does not allow remittances for margin trading or derivatives, so resident individuals cannot trade GIFT Nifty futures." },
];

const ResidentGuide = () => (
  <GuidePage
    path="/gift-city-funds-for-resident-indians"
    headline="GIFT City Funds for Resident Indians: LRS, TCS and How to Invest Abroad"
    seoTitle="GIFT City Funds for Resident Indians: LRS, TCS, How to Invest"
    description="How resident Indians invest through GIFT City: LRS up to USD 250,000 a year, 20% TCS above ₹10 lakh and claiming it back, Schedule FA, with a calculator."
    crumb="GIFT City Funds for Resident Indians"
    datePublished="2026-10-09"
    faqs={faqs}
    sources={["rbiLrs", "incomeTax", "ifscaDirectory"]}
  >
    <p className={p}>
      <strong className="text-primary">The short answer.</strong> Resident Indians use GIFT City mainly to <strong className="text-primary">invest abroad</strong>: in outbound funds, US stocks and ETFs, or USD deposits. The money goes under the <strong className="text-primary">Liberalised Remittance Scheme (LRS)</strong>, up to USD 250,000 a year, with 20% TCS on investment remittances above ₹10 lakh a year that you claim back in your return. Inbound funds that invest in India are generally not open to residents.
    </p>

    <h2 className={h2}>How your money moves</h2>
    <RouteDiagram
      caption="GIFT IFSC counts as outside India for foreign exchange, so LRS applies."
      from={[{ label: "Your Indian bank account", sub: "Rupees, Form A2 and LRS declaration", tone: "teal" }]}
      via={{ label: "GIFT City fund or broker", sub: "In USD, IFSCA-regulated", tone: "ink" }}
      to={[
        { label: "Global markets", sub: "Outbound funds, US stocks and ETFs", tone: "teal" },
        { label: "TCS credit", sub: "Claimed in your income tax return", tone: "amber" },
      ]}
    />

    <h2 className={h2}>What resident Indians can and cannot do</h2>
    <div className="overflow-x-auto">
      <table className={table}>
        <thead><tr><th className={th}>Product</th><th className={th}>Allowed for residents?</th></tr></thead>
        <tbody>
          <tr><td className={td}>Outbound GIFT City funds</td><td className={td}>Yes, under LRS</td></tr>
          <tr><td className={td}>US stocks and ETFs via IFSC brokers</td><td className={td}>Yes, under LRS</td></tr>
          <tr><td className={td}>USD deposits at IFSC Banking Units</td><td className={td}>Yes, within LRS rules</td></tr>
          <tr><td className={td}>PMS and AIFs in GIFT City</td><td className={td}>Yes, if the scheme accepts residents and you meet the minimum</td></tr>
          <tr><td className={td}>Inbound funds investing in India</td><td className={td}>Usually not; meant for non-residents</td></tr>
          <tr><td className={td}>GIFT Nifty and other derivatives</td><td className={td}>No; LRS does not allow margin trading</td></tr>
        </tbody>
      </table>
    </div>

    <TcsCalculator />

    <h2 className={h2}>Step by step</h2>
    <FlowSteps
      caption="Allow one to three weeks."
      highlight={2}
      steps={[
        { title: "Choose an outbound fund", sub: "Check it accepts residents" },
        { title: "KYC with the fund house", sub: "PAN, Aadhaar, address, bank" },
        { title: "Form A2 at your bank", sub: "Purpose: overseas portfolio investment" },
        { title: "USD reaches the fund", sub: "TCS deducted above ₹10 lakh" },
        { title: "Report every year", sub: "Schedule FA in your ITR" },
      ]}
    />

    <h2 className={h2}>Things residents often miss</h2>
    <ul className={ul}>
      <li>The ₹10 lakh TCS threshold counts all your LRS remittances in the year, including school fees and travel.</li>
      <li>Redemption proceeds must come back to India or be reinvested within the time RBI rules allow.</li>
      <li>Schedule FA is required every year you hold the investment, even if you sold nothing.</li>
      <li>Compare with Indian <Link to="/gift-city-vs-international-mutual-funds" className={a}>international mutual funds</Link>, which need no LRS or TCS.</li>
    </ul>
  </GuidePage>
);

export default ResidentGuide;
