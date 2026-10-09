import { Link } from "react-router-dom";
import { GuidePage, h2, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";

const faqs: Faq[] = [
  { q: "What is GIFT City PMS?", a: "Portfolio management services in GIFT City are offered by IFSCA-registered managers who run a portfolio of securities held in your own name, usually in US Dollars, rather than pooling your money in a fund." },
  { q: "What is the minimum investment for GIFT City PMS?", a: "USD 75,000. IFSCA reduced it from USD 150,000 under the Fund Management Regulations, 2025." },
  { q: "Can NRIs invest in GIFT City PMS?", a: "Yes. NRIs can invest from an overseas account in US Dollars, without LRS or TCS, subject to the manager's eligibility and KYC." },
  { q: "Can resident Indians invest in GIFT City PMS?", a: "Yes, under LRS. The investment counts towards the USD 250,000 annual limit and attracts 20% TCS above ₹10 lakh a year, which is claimed back in the income tax return." },
  { q: "How is GIFT City PMS different from a domestic PMS?", a: "A domestic PMS is regulated by SEBI, invests in rupees and needs ₹50 lakh. A GIFT City PMS is regulated by IFSCA, works in US Dollars, needs USD 75,000 and can invest in Indian and global securities." },
];

const GiftCityPms = () => (
  <GuidePage
    path="/gift-city-pms"
    headline="GIFT City PMS: Portfolio Management Services in GIFT IFSC"
    seoTitle="GIFT City PMS: USD 75,000 Minimum, How It Works (2026)"
    description="Portfolio management services in GIFT City: USD 75,000 minimum (cut from USD 150,000 in 2025), discretionary vs non-discretionary, GIFT City PMS vs domestic PMS, and how NRIs and residents invest."
    crumb="GIFT City PMS"
    datePublished="2026-10-09"
    faqs={faqs}
    sources={["ifsca", "ifscaDirectory", "rbiLrs"]}
  >
    <p className={p}>
      <strong className="text-primary">The short answer.</strong> A GIFT City PMS is a professionally managed portfolio held in your own name, run by an IFSCA-registered manager, usually in US Dollars. The minimum is <strong className="text-primary">USD 75,000</strong>, reduced from USD 150,000 in 2025. Unlike a fund, you own the individual securities, which gives more transparency and customisation but more paperwork.
    </p>

    <h2 className={h2}>GIFT City PMS vs domestic PMS vs GIFT City fund</h2>
    <div className="overflow-x-auto">
      <table className={table}>
        <thead><tr><th className={th}></th><th className={th}>GIFT City PMS</th><th className={th}>Domestic PMS</th><th className={th}>GIFT City retail fund</th></tr></thead>
        <tbody>
          <tr><td className={th}>Regulator</td><td className={td}>IFSCA</td><td className={td}>SEBI</td><td className={td}>IFSCA</td></tr>
          <tr><td className={th}>Minimum</td><td className={td}>USD 75,000</td><td className={td}>₹50 lakh</td><td className={td}>Set by scheme, often a few thousand USD</td></tr>
          <tr><td className={th}>Currency</td><td className={td}>Usually USD</td><td className={td}>INR</td><td className={td}>Usually USD</td></tr>
          <tr><td className={th}>Who owns the securities</td><td className={td}>You</td><td className={td}>You</td><td className={td}>The fund</td></tr>
          <tr><td className={th}>Customisation</td><td className={td}>Possible</td><td className={td}>Possible</td><td className={td}>None</td></tr>
          <tr><td className={th}>Paperwork and tax reporting</td><td className={td}>Each holding</td><td className={td}>Each holding</td><td className={td}>One holding</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className={h2}>Types of GIFT City PMS</h2>
    <ul className={ul}>
      <li><strong className="text-primary">Discretionary:</strong> the manager decides what to buy and sell within the agreed mandate.</li>
      <li><strong className="text-primary">Non-discretionary:</strong> the manager recommends; you approve each trade.</li>
      <li><strong className="text-primary">Advisory:</strong> the manager advises; you execute.</li>
    </ul>

    <h2 className={h2}>Questions to ask a GIFT City PMS manager</h2>
    <ul className={ul}>
      <li>Is the manager registered with IFSCA? Check the <a href="https://ifsca.gov.in/DirectoryList" target="_blank" rel="noopener noreferrer" className={a}>IFSCA Directory</a>.</li>
      <li>What are the fixed and performance fees, and how is performance measured?</li>
      <li>Which custodian holds the securities, and how do I see them?</li>
      <li>How are withdrawals paid, and how quickly?</li>
      <li>What will I need to report for tax in India and my country of residence?</li>
    </ul>
    <p className={p + " mt-4"}>
      Compare with <Link to="/gift-city-aif" className={a}>GIFT City AIFs</Link> and see all <Link to="/gift-city-minimum-investment" className={a}>minimum investment amounts</Link>.
    </p>
  </GuidePage>
);

export default GiftCityPms;
