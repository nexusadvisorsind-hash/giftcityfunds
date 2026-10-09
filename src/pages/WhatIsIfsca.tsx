import { Link } from "react-router-dom";
import { GuidePage, h2, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";
import { RouteDiagram, FlowSteps } from "@/components/Diagrams";

const faqs: Faq[] = [
  { q: "What are the main IFSCA regulations?", a: "IFSCA has issued separate regulations for fund management, banking, capital markets, insurance, payment services and more. For investors, the most important are the IFSCA (Fund Management) Regulations, 2025." },
  { q: "What are the GIFT City FME regulations?", a: "Fund Management Entities register with IFSCA under the Fund Management Regulations, 2025, which set registration categories, net worth, key personnel and the schemes each category may run. The regulations reduced the minimum corpus for schemes from USD 5 million to USD 3 million." },
  { q: "What compliance does a GIFT City AIF have?", a: "A GIFT City AIF (restricted or venture capital scheme) must file its placement memorandum with IFSCA, appoint a custodian and auditor, follow investor and valuation rules, and report to IFSCA and investors regularly. The details depend on the scheme type." },
  { q: "What are the IFSCA (Fund Management) Regulations, 2025?", a: "They are the rules for fund managers and funds in GIFT IFSC. They replaced the 2022 regulations and set out how Fund Management Entities register, which schemes they may run (retail, restricted, venture capital, PMS), the minimum investments and the disclosures they must make." },
  { q: "What is an IFSCA-registered Fund Management Entity?", a: "A Fund Management Entity (FME) is the company that manages a GIFT City fund. It must be registered with IFSCA in a category that matches the schemes it runs, such as Registered FME (Retail). You can look it up in the IFSCA Directory." },
  { q: "What is IFSCA?", a: "The International Financial Services Centres Authority (IFSCA) is the single regulator for financial products, services and institutions in International Financial Services Centres in India. Today that means GIFT IFSC in Gandhinagar, Gujarat." },
  { q: "When was IFSCA set up?", a: "IFSCA was established on 27 April 2020 under the International Financial Services Centres Authority Act, 2019." },
  { q: "Does SEBI regulate GIFT City funds?", a: "No. Inside the IFSC, IFSCA exercises the powers that SEBI, RBI, IRDAI and PFRDA hold in the rest of India. GIFT City funds are governed by the IFSCA (Fund Management) Regulations, 2025." },
  { q: "How do I check whether a fund manager is regulated by IFSCA?", a: "Search the IFSCA Directory of regulated entities on ifsca.gov.in for the Fund Management Entity's name, and match the registration details with those in the fund's offer document." },
];

const WhatIsIfsca = () => (
  <GuidePage
    path="/what-is-ifsca"
    headline="What Is IFSCA? GIFT City's Unified Financial Regulator"
    seoTitle="What Is IFSCA? The GIFT City Regulator Explained (2026)"
    description="What is IFSCA? GIFT City's single regulator: when it was set up, the RBI, SEBI, IRDAI and PFRDA powers it took over, and how to check a fund manager."
    crumb="What Is IFSCA"
    datePublished="2026-10-08"
    faqs={faqs}
    sources={["ifsca", "ifscaDirectory", "giftCity"]}
  >
    <p className={p}>
      <strong className="text-primary">The short answer.</strong> IFSCA, the International Financial Services Centres Authority, is the one regulator for banking, capital markets, insurance, pensions and funds inside India's International Financial Services Centre at GIFT City. Before IFSCA, four regulators shared that job. If you invest in a GIFT City fund, IFSCA is the regulator of the fund and its manager.
    </p>

    <h2 className={h2}>Four regulators became one</h2>
    <RouteDiagram
      caption="Inside the IFSC, IFSCA exercises the powers these regulators hold in the rest of India."
      from={[
        { label: "RBI", sub: "Banking and foreign exchange" },
        { label: "SEBI", sub: "Securities markets and funds" },
        { label: "IRDAI", sub: "Insurance" },
        { label: "PFRDA", sub: "Pensions" },
      ]}
      via={{ label: "IFSCA", sub: "Unified regulator, headquartered in GIFT City, Gandhinagar", tone: "ink" }}
      to={[
        { label: "IFSC Banking Units", tone: "teal" },
        { label: "Exchanges and brokers", tone: "teal" },
        { label: "Fund Management Entities and funds", tone: "amber" },
        { label: "Insurance and pensions", tone: "teal" },
      ]}
    />

    <h2 className={h2}>Key facts</h2>
    <div className="overflow-x-auto">
      <table className={table}>
        <tbody>
          <tr><td className={th}>Full name</td><td className={td}>International Financial Services Centres Authority</td></tr>
          <tr><td className={th}>Law</td><td className={td}>International Financial Services Centres Authority Act, 2019</td></tr>
          <tr><td className={th}>Established</td><td className={td}>27 April 2020</td></tr>
          <tr><td className={th}>Headquarters</td><td className={td}>GIFT City, Gandhinagar, Gujarat</td></tr>
          <tr><td className={th}>Regulates</td><td className={td}>Financial products, services and institutions in IFSCs in India</td></tr>
          <tr><td className={th}>Fund rules</td><td className={td}>IFSCA (Fund Management) Regulations, 2025</td></tr>
          <tr><td className={th}>Website</td><td className={td}><a href="https://ifsca.gov.in/" target="_blank" rel="noopener noreferrer" className={a}>ifsca.gov.in</a></td></tr>
        </tbody>
      </table>
    </div>

    <h2 className={h2}>How IFSCA regulates GIFT City funds</h2>
    <ul className={ul}>
      <li><strong className="text-primary">It registers the manager.</strong> Every GIFT City fund is run by a Fund Management Entity (FME) registered with IFSCA in a category that decides which schemes it may run, for example a Registered FME (Retail).</li>
      <li><strong className="text-primary">It sets the scheme types.</strong> Retail schemes, restricted schemes, venture capital schemes and portfolio management services each have their own investor eligibility and minimums. See <Link to="/funds-explained" className={a}>types of GIFT City funds</Link>.</li>
      <li><strong className="text-primary">It requires disclosure.</strong> Schemes file offer documents and report to IFSCA and investors.</li>
      <li><strong className="text-primary">It does not guarantee returns.</strong> Regulation governs conduct and disclosure, not performance.</li>
    </ul>

    <h2 className={h2}>Checking a fund manager in three steps</h2>
    <FlowSteps
      caption="Do this before you sign any subscription form."
      steps={[
        { title: "Get the FME's legal name", sub: "From the offer document or factsheet" },
        { title: "Search the IFSCA Directory", sub: "ifsca.gov.in, regulated entities" },
        { title: "Match category and number", sub: "Registration must match the document" },
      ]}
    />
    <p className={p}>
      For the bigger picture, read <Link to="/what-is-gift-city" className={a}>What is GIFT City and IFSC</Link>, <Link to="/insights/ifsca-vs-sebi" className={a}>IFSCA vs SEBI</Link> and the <Link to="/gift-city-glossary" className={a}>GIFT City glossary</Link>.
    </p>
  </GuidePage>
);

export default WhatIsIfsca;
