import { Link } from "react-router-dom";
import { GuidePage, h2, h3, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";
import { FlowSteps } from "@/components/Diagrams";
import MoneyMap from "@/components/MoneyMap";

interface House {
  name: string;
  entity: string;
  focus: string;
  direction: "Inbound" | "Outbound" | "Both" | "Varies";
  source: { label: string; url: string };
}

// Facts only, alphabetical, each with a public source. Not exhaustive and not
// a ranking. Review monthly; update LAST_CHECKED when you do.
const LAST_CHECKED = "October 2026";
const HOUSES: House[] = [
  { name: "Bandhan AMC", entity: "GIFT City operations launched in 2025", focus: "Three India-focused funds at launch", direction: "Inbound", source: { label: "Bandhan AMC announcement", url: "https://www.bandhanamc.com/amcaccess/sites/default/files/2025-05/Bandhan%20AMC%20Commences%20GIFT%20City%20Operations%20with%20the%20Launch%20of%20Three%20India%20Focused%20Funds.pdf" } },
  { name: "DSP", entity: "DSP Fund Managers IFSC Pvt. Ltd., Registered FME (Retail)", focus: "India funds and a global equity fund", direction: "Both", source: { label: "giftcity.dspim.com", url: "https://giftcity.dspim.com/" } },
  { name: "HDFC AMC", entity: "HDFC AMC International (IFSC) Ltd.", focus: "See the fund house for current schemes", direction: "Varies", source: { label: "HDFC Mutual Fund", url: "https://www.hdfcfund.com/information/inauguration-subsidiarys-office-gift-city" } },
  { name: "ICICI Prudential AMC", entity: "GIFT City branch opened in 2025", focus: "India-centric fund at launch", direction: "Inbound", source: { label: "Business Today report", url: "https://www.businesstoday.in/latest/corporate/story/icici-prudential-amc-launches-gift-city-branch-eyes-global-capital-for-indian-markets-491270-2025-08-27" } },
  { name: "Mirae Asset", entity: "GIFT City fund entity", focus: "Mirae Asset India Equity Allocation GIFT Fund", direction: "Inbound", source: { label: "Mirae Asset product presentation", url: "https://www.miraeassetmf.co.in/docs/default-source/product-presentations/mirae-asset-india-equity-allocation-gift-fund---march-2026.pdf" } },
  { name: "Sundaram Asset Management", entity: "GIFT City operations", focus: "See the fund house for current schemes", direction: "Varies", source: { label: "sundarammutual.com/gift-city", url: "https://www.sundarammutual.com/gift-city" } },
];

const faqs: Faq[] = [
  { q: "How many GIFT City funds are there?", a: "The number changes every month as fund houses launch schemes. IFSCA reported that commitments to funds in GIFT IFSC had crossed USD 7 billion by March 2025. For a current list of managers, use the IFSCA Directory of regulated entities." },
  { q: "What is the difference between inbound and outbound GIFT City funds?", a: "Inbound funds collect money in foreign currency and invest it in India; they are mainly used by NRIs and foreign investors. Outbound funds invest outside India, in US or global markets, and are used by resident Indians under LRS as well as NRIs." },
  { q: "Do DSP, HDFC, ICICI Prudential, Mirae Asset and Bandhan have GIFT City funds?", a: "Yes. Each of these fund houses has announced GIFT City operations or funds, run through an IFSCA-registered entity. The table on this page links to each fund house's own source; check its website for the schemes currently open." },
  { q: "Which are the best funds in GIFT City?", a: "There is no single best fund. Suitability depends on your residence, currency, tax position and goals, so this page lists fund houses factually and does not rank them or show performance. Read each scheme's offer document." },
  { q: "Which are the best GIFT City funds for NRIs?", a: "There is no single best fund; suitability depends on your residence, currency, tax position and goals. This page lists fund houses factually and does not rank them. Read each scheme's offer document and take advice where you need it." },
  { q: "Why don't you show returns or NAVs?", a: "Short histories in a new market can mislead, and returns shown without context are not a basis for a decision. Each fund house publishes NAVs and factsheets on its own website, linked here." },
];

const FundList = () => (
  <GuidePage
    path="/gift-city-fund-list"
    headline="GIFT City Fund List 2026: Fund Houses, Inbound and Outbound"
    seoTitle="GIFT City Funds List 2026: Inbound & Outbound Fund Houses"
    description="Which Indian fund houses run GIFT City funds, which invest in India (inbound) or abroad (outbound), and how to check any fund manager with IFSCA. Facts only, dated and sourced."
    crumb="GIFT City Fund List"
    datePublished="2026-10-08"
    reviewed={`Last checked ${LAST_CHECKED}`}
    faqs={faqs}
    sources={["ifscaDirectory", "ifsca", "amfi"]}
    extraSchema={[
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Fund houses with GIFT City operations",
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: HOUSES.map((h, i) => ({ "@type": "ListItem", position: i + 1, name: h.name, url: h.source.url })),
      },
    ]}
  >
    <p className={p}>
      <strong className="text-primary">The short answer.</strong> Most large Indian fund houses now run funds from GIFT City through an IFSCA-registered Fund Management Entity. Some funds invest in India for NRIs and foreign investors (<em>inbound</em>); others invest abroad for Indian and NRI investors (<em>outbound</em>). Below is a factual, dated list of fund houses with public information about their GIFT City funds, and how to check any manager yourself.
    </p>

    <h2 className={h2}>Inbound vs outbound in one picture</h2>
    <MoneyMap className="my-8" />

    <h2 className={h2}>GIFT City mutual funds list: fund houses</h2>
    <p className="font-body text-sm text-foreground-muted mb-3">Alphabetical. Last checked {LAST_CHECKED}. Not exhaustive.</p>
    <div className="overflow-x-auto">
      <table className={table}>
        <thead>
          <tr><th className={th}>Fund house</th><th className={th}>GIFT City entity / presence</th><th className={th}>Focus (per source)</th><th className={th}>Direction</th><th className={th}>Source</th></tr>
        </thead>
        <tbody>
          {HOUSES.map((h) => (
            <tr key={h.name}>
              <td className={td + " font-medium text-primary"}>{h.name}</td>
              <td className={td}>{h.entity}</td>
              <td className={td}>{h.focus}</td>
              <td className={td}>
                <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${h.direction === "Inbound" ? "bg-brass/20 text-primary" : h.direction === "Outbound" ? "bg-teal/20 text-primary" : "bg-surface text-primary border border-border"}`}>{h.direction}</span>
              </td>
              <td className={td}><a href={h.source.url} target="_blank" rel="noopener noreferrer" className={a}>{h.source.label}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p className="font-body text-xs text-foreground-muted mt-3">
      This list is for information only. Inclusion is not a recommendation or endorsement, and funds are not ranked. As a Mutual Fund Distributor, Anup Vatyani may be empanelled with some of these fund houses. Scheme availability, minimums and eligibility change; check the fund house's website and offer document.
    </p>

    <h2 className={h2}>How to check any GIFT City fund yourself</h2>
    <FlowSteps
      caption="Five checks that take about ten minutes."
      steps={[
        { title: "Find the FME", sub: "Legal name in the offer document" },
        { title: "Verify with IFSCA", sub: "Directory of regulated entities" },
        { title: "Confirm scheme type", sub: "Retail or restricted; your eligibility" },
        { title: "Read costs and exit terms", sub: "Fees, exit load, lock-in" },
        { title: "Check your tax", sub: "India and your country of residence" },
      ]}
    />

    <h3 className={h3}>Questions to ask the fund house</h3>
    <ul className={ul}>
      <li>Is the scheme open to my residential status and country (some exclude US and Canadian residents)?</li>
      <li>What is the minimum first investment, and are additional or <Link to="/gift-city-sip" className={a}>recurring investments</Link> accepted?</li>
      <li>Is it a feeder fund, and what are the total costs including the underlying fund?</li>
      <li>How are redemptions paid, and how long do they take?</li>
    </ul>
    <p className={p + " mt-4"}>
      New to the structures? Start with <Link to="/funds-explained" className={a}>types of GIFT City funds</Link> or check <Link to="/gift-city-route-checker" className={a}>which route applies to you</Link>.
    </p>
  </GuidePage>
);

export default FundList;
