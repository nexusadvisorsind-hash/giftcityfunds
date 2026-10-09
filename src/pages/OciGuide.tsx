import { Link } from "react-router-dom";
import { GuidePage, h2, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";
import { FlowSteps } from "@/components/Diagrams";

const faqs: Faq[] = [
  { q: "Can OCI cardholders invest in GIFT City funds?", a: "Yes. Overseas Citizens of India can invest in many GIFT City funds in US Dollars from a bank account abroad, subject to each fund's eligibility rules and KYC. They are generally treated like NRIs for these investments." },
  { q: "Do OCIs need a PAN to invest in GIFT City?", a: "Not always. Some GIFT City funds do not require a PAN for non-resident investors whose only Indian income comes from IFSC funds; others ask for one. Check the fund's KYC list." },
  { q: "Can US or Canadian citizens with an OCI card invest?", a: "Only in funds that accept US or Canadian persons, and many GIFT City funds do not. US citizens also face PFIC rules. Check eligibility before starting KYC." },
  { q: "Is an OCI the same as an NRI for GIFT City?", a: "For most GIFT City funds the process is the same: invest in USD from abroad, no LRS or TCS. The differences are in documents (foreign passport plus OCI card) and in the citizenship-based rules of your home country." },
];

const OciGuide = () => (
  <GuidePage
    path="/gift-city-funds-for-oci"
    headline="GIFT City Funds for OCI Cardholders: Eligibility, Documents and Tax"
    seoTitle="Can OCI Cardholders Invest in GIFT City Funds? (2026 Guide)"
    description="How Overseas Citizens of India invest in GIFT City funds: eligibility, documents (foreign passport, OCI card), PAN, US and Canadian citizen restrictions, tax at home, and how it differs from NRIs."
    crumb="GIFT City Funds for OCIs"
    datePublished="2026-10-09"
    faqs={faqs}
    sources={["ifscaDirectory", "irs8621", "craT1135", "incomeTax"]}
  >
    <p className={p}>
      <strong className="text-primary">The short answer.</strong> OCI cardholders can invest in most GIFT City funds the same way NRIs do: in <strong className="text-primary">US Dollars from a bank account abroad</strong>, with no LRS or TCS. Some retail funds start at USD 500. The two things to check are whether the fund accepts citizens of your country, and how your country of citizenship and residence taxes the investment.
    </p>

    <h2 className={h2}>OCI vs NRI for GIFT City funds</h2>
    <div className="overflow-x-auto">
      <table className={table}>
        <thead><tr><th className={th}></th><th className={th}>NRI</th><th className={th}>OCI cardholder</th></tr></thead>
        <tbody>
          <tr><td className={th}>Citizenship</td><td className={td}>Indian</td><td className={td}>Foreign, of Indian origin</td></tr>
          <tr><td className={th}>How you invest</td><td className={td}>USD from abroad</td><td className={td}>USD from abroad</td></tr>
          <tr><td className={th}>LRS and TCS</td><td className={td}>No</td><td className={td}>No</td></tr>
          <tr><td className={th}>Identity documents</td><td className={td}>Indian passport</td><td className={td}>Foreign passport and OCI card</td></tr>
          <tr><td className={th}>Fund eligibility</td><td className={td}>Depends on country of residence</td><td className={td}>Depends on citizenship and residence</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className={h2}>Documents OCIs usually need</h2>
    <ul className={ul}>
      <li>Foreign passport and OCI card</li>
      <li>Proof of overseas address</li>
      <li>PAN, if the fund asks for one (some do not for non-residents)</li>
      <li>Tax Residency Certificate, to claim treaty benefits</li>
      <li>FATCA/CRS self-certification, and W-9 or W-8BEN if US-linked</li>
    </ul>

    <h2 className={h2}>The process</h2>
    <FlowSteps
      caption="The same steps as for NRIs, with citizenship checks up front."
      highlight={0}
      steps={[
        { title: "Check citizenship eligibility", sub: "US and Canadian citizens are often excluded" },
        { title: "Choose the fund", sub: "Inbound or outbound" },
        { title: "KYC", sub: "Foreign passport, OCI card, address" },
        { title: "Transfer USD", sub: "From your account abroad" },
      ]}
    />

    <h2 className={h2}>Tax depends on where you live and your citizenship</h2>
    <p className={p}>
      US citizens are taxed by the US wherever they live, so PFIC rules follow them even if they live in India or the UAE. See <Link to="/us-based-nris" className={a}>the US guide</Link>. For other countries, see the country sections in <Link to="/gift-city-funds-for-nri#uae" className={a}>GIFT City funds for NRIs</Link>, which apply equally to OCIs living there.
    </p>
  </GuidePage>
);

export default OciGuide;
