import { Link } from "react-router-dom";
import { GuidePage, h2, h3, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";
import { RouteDiagram } from "@/components/Diagrams";

const faqs: Faq[] = [
  { q: "What is GIFT City insurance?", a: "Life and general insurance sold by insurers' offices in GIFT IFSC, usually in US Dollars. Premiums are paid and claims are paid in dollars. These offices are regulated by IFSCA, not by IRDAI." },
  { q: "Can NRIs buy dollar life insurance from GIFT City?", a: "Yes. Indian life insurers' IFSC offices sell US Dollar term and savings policies aimed at NRIs, with premiums and claims in dollars. Eligibility, medical underwriting and the countries accepted vary by insurer, so check the policy wording." },
  { q: "Is the maturity amount from a GIFT City life policy tax-free in India?", a: "The Finance Act, 2025 amended Section 10(10D) of the Income-tax Act so that proceeds of life policies issued by an IFSC insurance office are exempt without the usual premium-limit condition, from 1 April 2025. The change was aimed at non-residents. Other conditions still apply, and your country of residence may tax the policy differently." },
  { q: "Can resident Indians buy GIFT City insurance?", a: "The position is not settled. Premiums would be an overseas remittance under LRS, and banks have handled these requests differently. If you are resident in India, ask your bank and the insurer in writing before you apply." },
  { q: "Who regulates insurance in GIFT City?", a: "The International Financial Services Centres Authority (IFSCA). IFSCA data cited in July 2026 showed 36 insurance firms and 34 insurance intermediaries operating in GIFT IFSC as of March 2026." },
  { q: "Are there tax issues for US-based NRIs buying a foreign life policy?", a: "Often, yes. A policy from a non-US insurer may not be treated as life insurance under US tax rules, premiums paid to foreign insurers can attract a US excise tax, and cash-value policies may need to be reported as foreign financial assets. Take US tax advice first." },
];

const GiftCityInsurance = () => (
  <GuidePage
    path="/gift-city-insurance"
    headline="GIFT City Insurance for NRIs: Dollar Life Policies Explained"
    seoTitle="GIFT City Insurance for NRIs: USD Life Policies & Tax (2026)"
    description="Dollar-denominated life and term insurance from GIFT City for NRIs: who regulates it, the Section 10(10D) change, residents, and tax in your country."
    crumb="GIFT City Insurance"
    datePublished="2026-10-09"
    faqs={faqs}
    sources={["ifsca", "ifscaDirectory", "incomeTax", "rbiLrs"]}
  >
    <p className={p}>
      <strong className="text-primary">The short answer.</strong> Indian life insurers now sell US Dollar policies from their offices in GIFT IFSC. You pay premiums in dollars and claims are paid in dollars, so an NRI earning in dollars avoids rupee currency risk on the cover. These policies are regulated by IFSCA, not IRDAI. Since 1 April 2025, Indian tax law has treated their proceeds more generously (Section 10(10D)), but your country of residence may not.
    </p>

    <h2 className={h2}>How a GIFT City policy works</h2>
    <RouteDiagram
      caption="Premiums and claims stay in US Dollars from start to finish."
      from={[{ label: "You (NRI)", sub: "Pay premiums in USD from an overseas account", tone: "teal" }]}
      via={{ label: "Insurer's IFSC office", sub: "In GIFT City, regulated by IFSCA", tone: "ink" }}
      to={[
        { label: "Claim or maturity in USD", sub: "Paid to you or your nominee", tone: "amber" },
        { label: "No rupee conversion", sub: "Unless you choose to convert" },
      ]}
    />

    <h2 className={h2}>GIFT City policy vs Indian rupee policy</h2>
    <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto">
      <table className={table}><caption className="sr-only">GIFT City policy vs Indian rupee policy</caption>
        <thead><tr><th className={th}></th><th className={th}>Indian rupee policy</th><th className={th}>GIFT City dollar policy</th></tr></thead>
        <tbody>
          <tr><td className={th}>Currency</td><td className={td}>Rupees</td><td className={td}>Usually US Dollars</td></tr>
          <tr><td className={th}>Regulator</td><td className={td}>IRDAI</td><td className={td}>IFSCA</td></tr>
          <tr><td className={th}>Currency risk for a dollar earner</td><td className={td}>Yes: premiums and claims move with the rupee</td><td className={td}>Largely removed</td></tr>
          <tr><td className={th}>Indian tax on proceeds (Section 10(10D))</td><td className={td}>Exempt only within premium limits and other conditions</td><td className={td}>Premium-limit condition removed for IFSC policies from 1 April 2025; other conditions apply</td></tr>
          <tr><td className={th}>Who can buy</td><td className={td}>Residents and NRIs</td><td className={td}>Mainly NRIs; residents unclear</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className={h2}>Tax where you live matters more</h2>
    <p className={p}>
      The Indian exemption helps only on the Indian side. Your country of residence decides how the policy is taxed there:
    </p>
    <ul className={ul}>
      <li><strong className="text-primary">UAE and most of the Gulf:</strong> no personal income tax on individuals, so the Indian position usually decides the outcome. See <Link to="/gift-city-funds-for-nri#uae" className={a}>UAE NRIs</Link>.</li>
      <li><strong className="text-primary">United States:</strong> a foreign policy may not count as life insurance under US rules, premiums to foreign insurers can attract US excise tax, and cash-value policies may need reporting. See <Link to="/gift-city-funds-for-nri#us" className={a}>US NRIs</Link>.</li>
      <li><strong className="text-primary">UK, Canada, Australia, Singapore:</strong> foreign life policies with an investment element have their own rules. Ask a local tax adviser before buying.</li>
    </ul>

    <h3 className={h3}>Questions to ask the insurer</h3>
    <ul className={ul}>
      <li>Is the policy open to residents of my country, and is medical underwriting done remotely?</li>
      <li>Is it pure term cover, or does it have a savings or investment element? What are the charges?</li>
      <li>What is the premium-to-sum-assured ratio, and does the policy meet the other Section 10(10D) conditions?</li>
      <li>How and where are claims paid, and what does my nominee need to claim?</li>
    </ul>
    <p className="font-body text-xs text-foreground-muted mt-4">
      This page explains how GIFT City insurance works. It does not recommend any policy or insurer, and this site does not sell insurance. Read the policy document and take independent advice.
    </p>
    <p className={p + " mt-4"}>
      Related: <Link to="/gift-city-funds-for-nri" className={a}>GIFT City funds for NRIs</Link>, <Link to="/insights/gift-city-fd-vs-nre-fcnr" className={a}>GIFT City FDs vs NRE and FCNR</Link>, <Link to="/gift-city-rules-updates" className={a}>latest rule changes</Link>.
    </p>
  </GuidePage>
);

export default GiftCityInsurance;
