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
  { name: "Aditya Birla Sun Life AMC", entity: "GIFT City unit set up through a wholly owned IFSC subsidiary", focus: "See the fund house for current schemes", direction: "Varies", source: { label: "Business Standard report", url: "https://www.business-standard.com/article/news-cm/abslamc-to-set-up-new-unit-at-gift-city-122112900858_1.html" } },
  { name: "Bandhan AMC", entity: "GIFT City operations launched in 2025", focus: "Three India-focused funds at launch", direction: "Inbound", source: { label: "Bandhan AMC announcement", url: "https://www.bandhanamc.com/amcaccess/sites/default/files/2025-05/Bandhan%20AMC%20Commences%20GIFT%20City%20Operations%20with%20the%20Launch%20of%20Three%20India%20Focused%20Funds.pdf" } },
  { name: "DSP", entity: "DSP Fund Managers IFSC Pvt. Ltd., Registered FME (Retail)", focus: "India funds and a global equity fund", direction: "Both", source: { label: "giftcity.dspim.com", url: "https://giftcity.dspim.com/" } },
  { name: "Edelweiss AMC", entity: "GIFT City branch opened in 2025", focus: "Edelweiss India Multimanager Equity Fund – Series I (fund of Indian equity funds); a Greater China equity fund", direction: "Both", source: { label: "edelweissmf.com/gift-city", url: "https://www.edelweissmf.com/gift-city" } },
  { name: "HDFC AMC", entity: "HDFC AMC International (IFSC) Ltd.", focus: "See the fund house for current schemes", direction: "Varies", source: { label: "HDFC Mutual Fund", url: "https://www.hdfcfund.com/information/inauguration-subsidiarys-office-gift-city" } },
  { name: "ICICI Prudential AMC", entity: "GIFT City branch opened in 2025", focus: "India-centric fund at launch", direction: "Inbound", source: { label: "Business Today report", url: "https://www.businesstoday.in/latest/corporate/story/icici-prudential-amc-launches-gift-city-branch-eyes-global-capital-for-indian-markets-491270-2025-08-27" } },
  { name: "Mirae Asset", entity: "GIFT City fund entity", focus: "Mirae Asset India Equity Allocation GIFT Fund", direction: "Inbound", source: { label: "Mirae Asset product presentation", url: "https://www.miraeassetmf.co.in/docs/default-source/product-presentations/mirae-asset-india-equity-allocation-gift-fund---march-2026.pdf" } },
  { name: "Motilal Oswal AMC", entity: "GIFT City fund (Category III AIF)", focus: "Motilal Oswal GIFT City India Equity Fund of Funds", direction: "Inbound", source: { label: "PMS AIF World listing", url: "https://www.pmsaifworld.com/portfolio/motilal-oswal-gift-city-india-equity-fund-of-funds/" } },
  { name: "Nippon India Mutual Fund", entity: "IFSC branch of Nippon Life India Asset Management", focus: "Nippon India Large Cap Fund GIFT (feeder into Nippon India Large Cap Fund)", direction: "Inbound", source: { label: "Angel One report", url: "https://www.angelone.in/news/mutual-funds/nippon-life-india-unveils-its-first-feeder-fund-from-gift-city-nippon-india-large-cap-fund-gift" } },
  { name: "Sundaram Asset Management", entity: "GIFT City operations", focus: "See the fund house for current schemes", direction: "Varies", source: { label: "sundarammutual.com/gift-city", url: "https://www.sundarammutual.com/gift-city" } },
  { name: "Tata Asset Management", entity: "IFSCA-approved GIFT City fund", focus: "Tata India Dynamic Equity Fund (GIFT IFSC), a feeder into Indian equity schemes", direction: "Inbound", source: { label: "tatamutualfund.com/ifsc-gift-city", url: "https://www.tatamutualfund.com/ifsc-gift-city" } },
  { name: "The Wealth Company", entity: "IFSC branch of Wealth Company Asset Management", focus: "The Wealth Company IFSC FoF (US Dollar Category III AIF investing in Indian funds)", direction: "Inbound", source: { label: "Cafemutual report", url: "https://cafemutual.com/news/cafe-alt/38470-the-wealth-company-launches-a-dollar-denominated-gift-city-fund-of-funds-for-nris" } },
];
const OUTBOUND = HOUSES.filter((h) => h.direction === "Outbound" || h.direction === "Both");

const faqs: Faq[] = [
  { q: "How many GIFT City funds are there?", a: "The number changes every month as fund houses launch schemes. IFSCA reported that commitments to funds in GIFT IFSC had crossed USD 7 billion by March 2025. For a current list of managers, use the IFSCA Directory of regulated entities." },
  { q: "What is the difference between inbound and outbound GIFT City funds?", a: "Inbound funds collect money in foreign currency and invest it in India; they are mainly used by NRIs and foreign investors. Outbound funds invest outside India, in US or global markets, and are used by resident Indians under LRS as well as NRIs." },
  { q: "Do DSP, HDFC, ICICI Prudential, Mirae Asset and Bandhan have GIFT City funds?", a: "Yes. Each of these fund houses has announced GIFT City operations or funds, run through an IFSCA-registered entity. The table on this page links to each fund house's own source; check its website for the schemes currently open." },
  { q: "Which AMCs have GIFT City funds?", a: "Fund houses with public information about GIFT City funds or operations include Aditya Birla Sun Life, Bandhan, DSP, Edelweiss, HDFC, ICICI Prudential, Mirae Asset, Motilal Oswal, Nippon India, Sundaram, Tata and The Wealth Company, each through an IFSCA-registered entity. The table on this page links to each fund house's own source; check its website for the schemes currently open." },
  { q: "Which are the best funds in GIFT City?", a: "There is no single best fund. Suitability depends on your residence, currency, tax position and goals, so this page lists fund houses factually and does not rank them or show performance. Read each scheme's offer document." },
  { q: "Which are the best GIFT City funds for NRIs?", a: "There is no single best fund; suitability depends on your residence, currency, tax position and goals. This page lists fund houses factually and does not rank them. Read each scheme's offer document and take advice where you need it." },
  { q: "Why don't you show returns or NAVs?", a: "Short histories in a new market can mislead, and returns shown without context are not a basis for a decision. Each fund house publishes NAVs and factsheets on its own website, linked here." },
];

const FundList = () => (
  <GuidePage
    path="/gift-city-fund-list"
    headline="GIFT City Fund List 2026: AMCs and Fund Houses, Inbound and Outbound"
    seoTitle="GIFT City Funds & AMC List 2026: Inbound and Outbound"
    description="GIFT City AMC and mutual fund list: 12 fund houses with GIFT City funds, inbound and outbound, each with a source. How to check any manager with IFSCA."
    crumb="GIFT City Fund List"
    datePublished="2026-10-08"
    dateModified="2026-10-16"
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

    <h2 className={h2}>GIFT City mutual funds and AMC list</h2>
    <p className="font-body text-sm text-foreground-muted mb-3">Alphabetical. Last checked {LAST_CHECKED}. Not exhaustive.</p>
    <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto">
      <table className={table}><caption className="sr-only">GIFT City mutual funds list: fund houses</caption>
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

    <h2 className={h2}>GIFT City outbound funds list</h2>
    <p className={p}>
      Outbound funds invest outside India, in US or global markets. Resident Indians invest in them under LRS (USD 250,000 a year; TCS above ₹10 lakh) and NRIs from their overseas accounts. From the list above:
    </p>
    <ul className={ul + " mt-3"}>
      {OUTBOUND.map((h) => (
        <li key={h.name}><strong className="text-primary">{h.name}:</strong> {h.focus}. <a href={h.source.url} target="_blank" rel="noopener noreferrer" className={a}>Source</a></li>
      ))}
    </ul>
    <p className="font-body text-sm text-foreground-muted mt-3">
      Outbound schemes change often. Ask the fund house which ones are open to your residential status, and see <Link to="/gift-city-funds-for-resident-indians" className={a}>GIFT City for resident Indians</Link>.
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
      <li>What is the minimum first investment, and are additional lump-sum investments accepted? (There is <Link to="/gift-city-sip" className={a}>no SIP in GIFT City</Link>.)</li>
      <li>Is it a feeder fund, and what are the total costs including the underlying fund?</li>
      <li>How are redemptions paid, and how long do they take?</li>
    </ul>
    <p className={p + " mt-4"}>
      New to the structures? Start with <Link to="/funds-explained" className={a}>types of GIFT City funds</Link> or check <Link to="/gift-city-route-checker" className={a}>which route applies to you</Link>.
    </p>
  </GuidePage>
);

export default FundList;
