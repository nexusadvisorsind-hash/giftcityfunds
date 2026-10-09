import { Link } from "react-router-dom";
import { GuidePage, h2, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";
import { FlowSteps } from "@/components/Diagrams";

const faqs: Faq[] = [
  { q: "What is a GIFT City restricted scheme?", a: "A restricted scheme is the IFSCA scheme type used by most GIFT City AIFs. It is open only to accredited or high-ticket investors, commonly with a USD 150,000 minimum, and its placement memorandum is filed with IFSCA." },
  { q: "What is a GIFT City AIF?", a: "A GIFT City AIF is an alternative investment fund set up in GIFT IFSC under IFSCA's fund management regulations, usually as a restricted scheme or a venture capital scheme. It pools money from eligible investors for strategies such as private credit, long-short equity or start-up investing, mostly in US Dollars." },
  { q: "What is the minimum investment in a GIFT City AIF?", a: "Commonly USD 150,000 per investor for restricted schemes, with exemptions for accredited investors. Venture capital schemes also have high minimums. The scheme's placement memorandum states the exact figure." },
  { q: "Are GIFT City AIFs Category I, II or III?", a: "No. Category I, II and III are SEBI's classes for domestic AIFs. IFSCA uses scheme types instead (venture capital and restricted schemes). A GIFT City AIF may follow a strategy similar to a SEBI category, but it is regulated differently." },
  { q: "Can resident Indians invest in a GIFT City AIF?", a: "Yes, under LRS, if the scheme accepts them and they meet the minimum. The investment counts towards the USD 250,000 annual LRS limit and attracts 20% TCS above ₹10 lakh a year, which is claimed back in the return." },
  { q: "What should I check before investing in a GIFT City AIF?", a: "The Fund Management Entity's IFSCA registration, the strategy, lock-in and exit terms, fees including any performance fee, how often valuations are reported, and the tax treatment in India and your country of residence." },
];

const GiftCityAif = () => (
  <GuidePage
    path="/gift-city-aif"
    headline="GIFT City AIF: Alternative Investment Funds in GIFT IFSC Explained"
    seoTitle="GIFT City AIF: Minimum Investment, Types & Who Can Invest (2026)"
    description="GIFT City AIFs: restricted and venture capital schemes, the USD 150,000 minimum, how they differ from SEBI Category I, II and III AIFs, and who can invest."
    crumb="GIFT City AIF"
    datePublished="2026-10-09"
    faqs={faqs}
    sources={["ifsca", "ifscaDirectory", "rbiLrs", "sebi"]}
  >
    <p className={p}>
      <strong className="text-primary">The short answer.</strong> An alternative investment fund (AIF) in GIFT City is a pooled fund for strategies outside ordinary mutual funds, such as private credit, long-short equity or venture capital. It is set up under the IFSCA (Fund Management) Regulations, 2025, usually as a <strong className="text-primary">restricted scheme</strong> with a minimum of about <strong className="text-primary">USD 150,000</strong>, and invests mostly in US Dollars. It suits experienced investors with large amounts who can accept lock-ins.
    </p>

    <h2 className={h2}>GIFT City AIFs vs SEBI AIFs</h2>
    <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto">
      <table className={table}>
        <thead><tr><th className={th}></th><th className={th}>GIFT City AIF</th><th className={th}>SEBI AIF (domestic)</th></tr></thead>
        <tbody>
          <tr><td className={th}>Regulator</td><td className={td}>IFSCA</td><td className={td}>SEBI</td></tr>
          <tr><td className={th}>Classification</td><td className={td}>Venture capital scheme or restricted scheme</td><td className={td}>Category I, II or III</td></tr>
          <tr><td className={th}>Currency</td><td className={td}>Usually USD</td><td className={td}>INR</td></tr>
          <tr><td className={th}>Typical minimum</td><td className={td}>USD 150,000 (accredited investors may be exempt)</td><td className={td}>₹1 crore</td></tr>
          <tr><td className={th}>Minimum fund size</td><td className={td}>USD 3 million (reduced from USD 5 million in 2025)</td><td className={td}>Set by SEBI per category</td></tr>
          <tr><td className={th}>Can invest abroad</td><td className={td}>Yes, freely</td><td className={td}>Within SEBI's overseas limits</td></tr>
          <tr><td className={th}>Resident Indians invest via</td><td className={td}>LRS (with TCS above ₹10 lakh)</td><td className={td}>Rupee payment</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className={h2}>Common GIFT City AIF strategies</h2>
    <ul className={ul}>
      <li><strong className="text-primary">Private credit:</strong> lending to companies, often with fixed coupons and a lock-in.</li>
      <li><strong className="text-primary">Long-short and absolute return equity:</strong> aiming for returns less tied to the market.</li>
      <li><strong className="text-primary">Venture capital and private equity:</strong> investing in unlisted companies, with long holding periods.</li>
      <li><strong className="text-primary">Fund of funds:</strong> investing in other funds, in India or abroad.</li>
    </ul>

    <h2 className={h2}>How investing in a GIFT City AIF works</h2>
    <FlowSteps
      caption="Each scheme's placement memorandum sets the exact process."
      highlight={1}
      steps={[
        { title: "Check eligibility", sub: "Minimum, investor type, country" },
        { title: "Read the placement memorandum", sub: "Strategy, fees, lock-in, risks" },
        { title: "KYC and commitment", sub: "Sign the contribution agreement" },
        { title: "Fund in USD", sub: "Residents under LRS; NRIs from abroad" },
        { title: "Track and exit", sub: "Statements, distributions, redemption terms" },
      ]}
    />
    <p className={p}>
      Compare with <Link to="/gift-city-pms" className={a}>GIFT City PMS</Link>, <Link to="/gift-city-feeder-funds" className={a}>feeder funds</Link> and the full list of <Link to="/gift-city-minimum-investment" className={a}>minimum investment amounts</Link>.
    </p>
  </GuidePage>
);

export default GiftCityAif;
