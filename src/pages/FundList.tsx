import { useState } from "react";
import { Link } from "react-router-dom";
import { GuidePage, h2, h3, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";
import { FlowSteps } from "@/components/Diagrams";
import MoneyMap from "@/components/MoneyMap";
import { LOW_MIN, HIGH_MIN, FUNDS_LAST_CHECKED as LAST_CHECKED, type Fund, type Direction } from "@/data/funds";

const ALL = [...LOW_MIN, ...HIGH_MIN];
const HOUSES = Array.from(new Set(ALL.map((f) => f.house))).sort();
const OUTBOUND_RES = LOW_MIN.filter((f) => f.direction === "Outbound" && f.residents);
const INBOUND_NRI = LOW_MIN.filter((f) => f.direction === "Inbound" && f.nri);

type Filter = "all" | "res" | "nri";
const FILTERS: [Filter, string][] = [["all", "All funds"], ["res", "Resident Indians"], ["nri", "NRIs"]];

const DIR_STYLE: Record<Direction, string> = {
  Inbound: "bg-brass/20 text-primary",
  Outbound: "bg-teal/20 text-primary",
  Gold: "bg-surface text-primary border border-border",
};

const FundTable = ({ funds, caption }: { funds: Fund[]; caption: string }) => (
  <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto">
    <table className={table}>
      <caption className="sr-only">{caption}</caption>
      <thead>
        <tr><th className={th}>Fund</th><th className={th}>Direction</th><th className={th}>Invests in</th><th className={th}>Minimum</th><th className={th}>Who can invest</th><th className={th}>Source</th></tr>
      </thead>
      <tbody>
        {funds.length === 0 && (
          <tr><td className={td} colSpan={6}>No funds in this group match the filter.</td></tr>
        )}
        {funds.map((f) => (
          <tr key={f.scheme}>
            <td className={td + " min-w-[11rem]"}><span className="block font-semibold text-primary">{f.house}</span>{f.scheme}</td>
            <td className={td}><span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${DIR_STYLE[f.direction]}`}>{f.direction}</span></td>
            <td className={td}>{f.invests}</td>
            <td className={td}>{f.minimum}</td>
            <td className={td}>{f.who}</td>
            <td className={td}><a href={f.source.url} target="_blank" rel="noopener noreferrer" className={a}>{f.source.label}</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const faqs: Faq[] = [
  { q: "How many GIFT City funds are there?", a: "IFSCA data showed 401 funds and schemes run by 235 fund management entities at 30 June 2026. Only 14 of them were authorised retail schemes; most are AIFs and restricted schemes for institutions and wealthy investors. This page lists the funds that Indian fund houses and managers have made public." },
  { q: "What is the minimum investment in GIFT City funds?", a: "It depends on the fund. Some retail schemes start at USD 500, including ABSL's two funds, PPFAS's S&P 500 and Nasdaq 100 funds and Tata India Dynamic Equity Fund. Many others start at USD 5,000. AIFs and restricted schemes usually need USD 150,000, or less for accredited investors." },
  { q: "Which GIFT City funds can resident Indians invest in?", a: "Outbound funds that accept investment under LRS, such as those from ABSL, DSP, Edelweiss, HDFC, Marcellus and PPFAS listed on this page. Many inbound funds are for NRIs and foreign investors only. Use the Resident Indians filter above, and confirm eligibility in the offer document." },
  { q: "What is the difference between inbound and outbound GIFT City funds?", a: "Inbound funds collect money in foreign currency and invest it in India; they are mainly used by NRIs and foreign investors. Outbound funds invest outside India, in US or global markets, and are used by resident Indians under LRS as well as NRIs." },
  { q: "Does Parag Parikh (PPFAS) have a GIFT City fund?", a: "Yes. PPFAS Alternate Asset Managers IFSC runs the Parag Parikh IFSC S&P 500 Fund of Fund and Nasdaq 100 Fund of Fund for resident Indians under LRS, with a USD 500 minimum since 25 August 2026. A Parag Parikh India Flexi Cap Fund for NRIs is listed as coming soon." },
  { q: "Do DSP, HDFC, ICICI Prudential, Mirae Asset and Bandhan have GIFT City funds?", a: "Yes. Each runs GIFT City funds through an IFSCA-registered entity. HDFC and DSP have outbound funds for residents as well as India funds for NRIs; Bandhan, ICICI Prudential and Mirae Asset's India fund are for global investors. The tables on this page link to each source." },
  { q: "Do Edelweiss, Sundaram, Marcellus and Tata have GIFT City funds?", a: "Yes. Edelweiss has the Greater China Equity Fund and US Technology Equity Fund for residents and NRIs; Marcellus has the Global Equities Fund for residents; Sundaram has the Sundaram India Mid Cap GIFT fund and Tata the Tata India Dynamic Equity Fund, both for NRIs and foreign investors. Details and sources are in the table." },
  { q: "Which AMCs have GIFT City funds?", a: `Fund houses and managers on this page: ${HOUSES.join(", ")}. Each operates through an IFSCA-registered entity. Check the fund house's website for the schemes currently open.` },
  { q: "Which are the best funds in GIFT City?", a: "There is no single best fund. Suitability depends on your residence, currency, tax position and goals, so this page lists funds factually and does not rank them or show performance. Read each scheme's offer document." },
  { q: "Which are the best GIFT City funds for NRIs?", a: "There is no single best fund; suitability depends on your residence, currency, tax position and goals. Note that some funds exclude US or Canadian residents. This page lists funds factually and does not rank them. Read each scheme's offer document." },
  { q: "Why don't you show returns or NAVs?", a: "Short histories in a new market can mislead, and returns shown without context are not a basis for a decision. Each fund house publishes NAVs and factsheets on its own website, linked here." },
];

const FundList = () => {
  const [filter, setFilter] = useState<Filter>("all");
  const pick = (list: Fund[]) => list.filter((f) => filter === "all" || (filter === "res" ? f.residents : f.nri));

  return (
    <GuidePage
      path="/gift-city-fund-list"
      headline="GIFT City Fund List 2026: AMCs and Fund Houses, Inbound and Outbound"
      seoTitle="GIFT City Funds & AMC List 2026: Inbound and Outbound"
      description={`GIFT City fund list: ${ALL.length}+ funds from ${HOUSES.length} fund houses, including PPFAS, HDFC, DSP and Tata, with minimums, who can invest and a source for each.`}
      crumb="GIFT City Fund List"
      datePublished="2026-10-08"
      dateModified="2026-10-24"
      reviewed={`Last checked ${LAST_CHECKED}`}
      faqs={faqs}
      sources={["ifscaDirectory", "ifsca", "amfi"]}
      extraSchema={[
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "GIFT City funds",
          itemListOrder: "https://schema.org/ItemListOrderAscending",
          itemListElement: ALL.map((f, i) => ({ "@type": "ListItem", position: i + 1, name: `${f.scheme} (${f.house})`, url: f.source.url })),
        },
      ]}
    >
      <p className={p}>
        <strong className="text-primary">The short answer.</strong> {HOUSES.length} fund houses and managers have made their GIFT City funds public. Some invest in India for NRIs and foreign investors (<em>inbound</em>); others invest abroad for resident Indians under LRS (<em>outbound</em>). Retail funds start from USD 500 to USD 10,000; AIFs usually need USD 150,000. Below is every fund we could confirm, with its minimum, who can invest and a source.
      </p>

      <h2 className={h2}>Inbound vs outbound in one picture</h2>
      <MoneyMap className="my-8" />

      <h2 className={h2}>GIFT City mutual funds and AMC list</h2>
      <p className="font-body text-sm text-foreground-muted mb-3">Alphabetical by fund house. Last checked {LAST_CHECKED}. Not exhaustive and not a ranking.</p>
      <div role="group" aria-label="Show funds open to" className="flex flex-wrap items-center gap-2 mb-6">
        <span className="font-body text-sm text-foreground-muted mr-1">Show funds open to:</span>
        {FILTERS.map(([key, label]) => (
          <button
            key={key}
            type="button"
            aria-pressed={filter === key}
            onClick={() => setFilter(key)}
            className={`rounded-full px-4 py-1.5 font-body text-sm font-semibold border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${filter === key ? "bg-primary text-primary-foreground border-primary" : "bg-background text-primary border-border hover:border-primary"}`}
          >
            {label}
          </button>
        ))}
      </div>

      <h3 className={h3}>Retail funds: minimum USD 500 to USD 10,000</h3>
      <FundTable funds={pick(LOW_MIN)} caption="GIFT City retail funds with lower minimums" />

      <h3 className={h3}>AIFs and restricted funds: higher minimums</h3>
      <p className="font-body text-sm text-foreground-muted mb-3">Mostly Category III AIFs for NRIs, foreign investors and institutions. Where a fund house has not published a detail, the table says so.</p>
      <FundTable funds={pick(HIGH_MIN)} caption="GIFT City AIFs and restricted funds" />

      <p className="font-body text-xs text-foreground-muted mt-3">
        For information only. Inclusion is not a recommendation or endorsement, and funds are not ranked. As a Mutual Fund Distributor, Anup Vatyani may be empanelled with some of these fund houses. Schemes, minimums and eligibility change; check the fund house's website and offer document before investing.
      </p>

      <h2 className={h2}>GIFT City outbound funds list for resident Indians</h2>
      <p className={p}>
        Outbound funds invest outside India. Resident Indians invest under LRS (up to USD 250,000 a year; TCS above ₹10 lakh). They are not subject to the SEBI overseas limit that has made many Indian international mutual funds <Link to="/gift-city-vs-international-mutual-funds" className={a}>pause new money</Link>. Lower-minimum outbound funds on this page:
      </p>
      <ul className={ul + " mt-3"}>
        {OUTBOUND_RES.map((f) => (
          <li key={f.scheme}><strong className="text-primary">{f.scheme}</strong> ({f.house}): {f.invests}; {f.minimum}.</li>
        ))}
      </ul>
      <p className="font-body text-sm text-foreground-muted mt-3">
        See <Link to="/gift-city-funds-for-resident-indians" className={a}>GIFT City for resident Indians</Link> and the <Link to="/insights/lrs-tcs-gift-city#calculator" className={a}>TCS calculator</Link>.
      </p>

      <h2 className={h2}>GIFT City inbound funds for NRIs</h2>
      <p className={p}>
        Inbound funds invest in Indian markets in US Dollars, mostly by feeding into a fund house's Indian mutual fund. Lower-minimum inbound funds on this page:
      </p>
      <ul className={ul + " mt-3"}>
        {INBOUND_NRI.map((f) => (
          <li key={f.scheme}><strong className="text-primary">{f.scheme}</strong> ({f.house}): {f.minimum}. {f.who}.</li>
        ))}
      </ul>
      <p className="font-body text-sm text-foreground-muted mt-3">
        US and Canadian residents: several funds do not accept you. Check before applying, and read <Link to="/insights/pfic-explained" className={a}>PFIC explained</Link> if you are a US person. More in <Link to="/gift-city-funds-for-nri" className={a}>GIFT City for NRIs</Link>.
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
};

export default FundList;
