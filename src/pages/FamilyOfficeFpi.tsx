import { Link } from "react-router-dom";
import { GuidePage, h2, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";

const faqs: Faq[] = [
  { q: "Can I set up a family office in GIFT City?", a: "Yes. IFSCA's fund management regulations include a framework for family investment funds, which let a single family pool and invest its wealth from GIFT IFSC. They have their own minimum corpus and conditions; take legal advice on structure." },
  { q: "What is an FPI in GIFT City?", a: "A foreign portfolio investor (FPI) based in GIFT IFSC is a fund or entity in the IFSC that registers with SEBI as an FPI so it can invest in Indian listed securities. Many inbound GIFT City funds use this route." },
  { q: "Can NRIs invest through GIFT City FPIs?", a: "Yes. In 2024 SEBI allowed FPIs based in IFSCs to receive contributions from NRIs, OCIs and resident Indian individuals of up to 100% of their corpus in aggregate, subject to conditions such as disclosure of contributors." },
  { q: "Are there venture capital funds in GIFT City?", a: "Yes. IFSCA allows venture capital schemes, which invest in start-ups and early-stage companies. They are non-retail schemes for accredited or high-ticket investors and are run by registered Fund Management Entities." },
  { q: "What does wealth management in GIFT City include?", a: "Portfolio management services (minimum USD 75,000), private banking and deposits at IFSC Banking Units, GIFT City funds, and access to global securities through IFSC brokers, mostly in US Dollars." },
];

const FamilyOfficeFpi = () => (
  <GuidePage
    path="/gift-city-family-office-fpi"
    headline="Family Offices, FPIs, Venture Capital and Wealth Management in GIFT City"
    seoTitle="GIFT City Family Office, FPI, VC Funds & Wealth Management"
    description="GIFT City for wealthy families and institutions: family investment funds, FPIs and SEBI's 2024 NRI change, venture capital schemes, PMS and private banking."
    crumb="Family Offices, FPIs and Wealth Management"
    datePublished="2026-10-09"
    faqs={faqs}
    sources={["ifsca", "ifscaDirectory", "sebi"]}
  >
    <p className={p}>
      <strong className="text-primary">The short answer.</strong> Beyond retail funds, GIFT City is built for larger pools of money: family offices, foreign portfolio investors, venture capital funds and wealth managers. These structures have high minimums and need legal and tax advice to set up. This page explains what each one is so you can tell them apart.
    </p>

    <h2 className={h2}>The structures compared</h2>
    <div className="overflow-x-auto">
      <table className={table}>
        <thead><tr><th className={th}>Structure</th><th className={th}>What it is for</th><th className={th}>Who it suits</th></tr></thead>
        <tbody>
          <tr><td className={td}>Family investment fund (family office)</td><td className={td}>Pooling and investing one family's wealth from GIFT IFSC</td><td className={td}>Wealthy Indian and NRI families</td></tr>
          <tr><td className={td}>FPI based in GIFT IFSC</td><td className={td}>Investing in Indian listed securities from the IFSC</td><td className={td}>Fund managers running inbound funds</td></tr>
          <tr><td className={td}>Venture capital scheme</td><td className={td}>Investing in start-ups and early-stage companies</td><td className={td}>Accredited and high-ticket investors</td></tr>
          <tr><td className={td}>Restricted scheme (AIF)</td><td className={td}>Alternative strategies such as private credit</td><td className={td}>Investors meeting a high minimum, commonly USD 150,000</td></tr>
          <tr><td className={td}>Portfolio management services</td><td className={td}>A managed portfolio held in your name</td><td className={td}>Investors with USD 75,000 or more</td></tr>
          <tr><td className={td}>Private banking at IFSC Banking Units</td><td className={td}>USD deposits, lending and services</td><td className={td}>NRIs and eligible residents</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className={h2}>Foreign portfolio investment (FPI) in GIFT City: the 2024 change for NRIs</h2>
    <p className={p}>
      In June 2024 SEBI allowed FPIs based in an IFSC to take up to 100% of their corpus, in aggregate, from NRIs, OCIs and resident Indian individuals, subject to conditions such as disclosing each contributor's PAN. This made it easier for Indian fund houses to run inbound GIFT City funds for NRIs.
    </p>

    <h2 className={h2}>Before you go further</h2>
    <ul className={ul}>
      <li>Check the Fund Management Entity or manager in the IFSCA Directory.</li>
      <li>Ask for the scheme type, minimum, lock-in and fees in writing.</li>
      <li>Take legal and tax advice in India and in your country of residence; these structures are not do-it-yourself products.</li>
    </ul>
    <p className={p + " mt-4"}>
      For individual investors, start with <Link to="/funds-explained" className={a}>types of GIFT City funds</Link> and <Link to="/what-is-ifsca" className={a}>how IFSCA regulates them</Link>.
    </p>
  </GuidePage>
);

export default FamilyOfficeFpi;
