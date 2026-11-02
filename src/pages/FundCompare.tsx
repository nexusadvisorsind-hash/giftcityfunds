import { useState } from "react";
import { Link } from "react-router-dom";
import { GuidePage, h2, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";
import { LOW_MIN, HIGH_MIN, FUNDS_LAST_CHECKED, FUND_COUNT, type Fund } from "@/data/funds";

// Side-by-side facts for up to four GIFT City funds. Same data as the fund
// list. No returns, NAVs or rankings, and no "winner".
const ALL: Fund[] = [...LOW_MIN, ...HIGH_MIN];
const MAX = 4;
const EXCL: Record<string, string> = { us: "US persons", ca: "Canadian residents", uk: "UK investors" };

const ROWS: [string, (f: Fund) => string][] = [
  ["Fund house", (f) => f.house],
  ["Direction", (f) => (f.direction === "Inbound" ? "Inbound (invests in India)" : f.direction === "Outbound" ? "Outbound (invests outside India)" : f.direction)],
  ["Type", (f) => (LOW_MIN.includes(f) ? "Retail fund" : "AIF or restricted fund")],
  ["Invests in", (f) => f.invests],
  ["Minimum", (f) => f.minimum],
  ["Who can invest", (f) => f.who],
  ["Resident Indians (LRS)", (f) => (f.residents ? "Yes" : "Not stated or no")],
  ["NRIs", (f) => (f.nri ? "Yes" : "Not stated or no")],
  ["Says it does not accept", (f) => (f.excludes?.length ? f.excludes.map((x) => EXCL[x]).join(", ") : "None published")],
  ["Status", (f) => (f.upcoming ? "Listed as coming soon" : "Open")],
];

const faqs: Faq[] = [
  { q: "How do I compare GIFT City funds?", a: "Start with who can invest and where you live, then the minimum, what the fund invests in, and whether it is a retail fund or an AIF. Then read each offer document for costs, exit loads and redemption terms, which this tool does not show." },
  { q: "Why doesn't the comparison show returns?", a: "GIFT City funds have short track records, and returns shown without context are not a basis for a decision. Each fund house publishes NAVs and factsheets on its own website." },
  { q: "Which GIFT City fund is better?", a: "None is better in general. The comparison shows facts side by side so you can see which funds are open to you; suitability depends on your residence, goals, currency and tax position." },
];

const FundCompare = () => {
  const [picked, setPicked] = useState<string[]>([]);
  const chosen = picked.map((s) => ALL.find((f) => f.scheme === s)!).filter(Boolean);
  const toggle = (s: string) =>
    setPicked((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : cur.length >= MAX ? cur : [...cur, s]));

  return (
    <GuidePage
      path="/gift-city-fund-compare"
      headline="Compare GIFT City Funds Side by Side"
      seoTitle="Compare GIFT City Funds: Minimum, Who Can Invest, Side by Side"
      description={`Compare up to four GIFT City funds side by side: minimum, direction, who can invest, excluded countries and source. Facts only, from our list of ${FUND_COUNT} funds.`}
      crumb="Compare GIFT City Funds"
      datePublished="2026-11-02"
      reviewed={`Data checked ${FUNDS_LAST_CHECKED}`}
      faqs={faqs}
      kind="WebPage"
      sources={["ifscaDirectory", "ifsca"]}
    >
      <p className={p}>
        <strong className="text-primary">How it works.</strong> Tick up to {MAX} funds below to see their facts side by side: minimum, what they invest in, who can invest and any countries they exclude. It uses the same sourced data as the <Link to="/gift-city-fund-list" className={a}>GIFT City fund list</Link>. It does not show returns or rank funds.
      </p>

      <h2 className={h2}>Choose funds to compare</h2>
      <p className="font-body text-sm text-foreground-muted mb-3">{picked.length} of {MAX} selected.{picked.length > 0 && <> <button type="button" onClick={() => setPicked([])} className={a}>Clear</button></>}</p>
      <fieldset className="grid gap-2 sm:grid-cols-2">
        <legend className="sr-only">GIFT City funds</legend>
        {ALL.map((f) => {
          const on = picked.includes(f.scheme);
          const full = !on && picked.length >= MAX;
          return (
            <label key={f.scheme} className={`flex items-start gap-3 rounded-lg border p-3 font-body text-sm ${on ? "border-primary bg-surface" : "border-border"} ${full ? "opacity-50" : "cursor-pointer"}`}>
              <input type="checkbox" checked={on} disabled={full} onChange={() => toggle(f.scheme)} className="mt-0.5 h-4 w-4" />
              <span><span className="font-semibold text-primary">{f.scheme}</span><span className="block text-foreground-muted">{f.house} · {f.direction}</span></span>
            </label>
          );
        })}
      </fieldset>

      <h2 className={h2}>Side by side</h2>
      {chosen.length === 0 ? (
        <p className={p}>Tick at least one fund above to see the comparison.</p>
      ) : (
        <div tabIndex={0} role="region" aria-label="Comparison table, scroll sideways to see more" className="overflow-x-auto">
          <table className={table}>
            <caption className="sr-only">Selected GIFT City funds compared</caption>
            <thead>
              <tr><th className={th}></th>{chosen.map((f) => <th key={f.scheme} scope="col" className={th + " min-w-[12rem]"}>{f.scheme}</th>)}</tr>
            </thead>
            <tbody>
              {ROWS.map(([label, get]) => (
                <tr key={label}><th scope="row" className={th}>{label}</th>{chosen.map((f) => <td key={f.scheme} className={td}>{get(f)}</td>)}</tr>
              ))}
              <tr><th scope="row" className={th}>Source</th>{chosen.map((f) => <td key={f.scheme} className={td}><a href={f.source.url} target="_blank" rel="noopener noreferrer" className={a}>{f.source.label}</a></td>)}</tr>
            </tbody>
          </table>
        </div>
      )}

      <h2 className={h2}>What this comparison does not show</h2>
      <ul className={ul}>
        <li>Costs, exit loads and lock-ins: read each fund's offer document or key information document.</li>
        <li>Returns and NAVs: published by each fund house on its own website.</li>
        <li>Your tax: it depends on where you live. See the guides for <Link to="/gift-city-funds-for-nri" className={a}>NRIs by country</Link> and <Link to="/gift-city-funds-for-resident-indians" className={a}>resident Indians</Link>.</li>
      </ul>
      <p className="font-body text-xs text-foreground-muted mt-4">
        For information only. Not a recommendation or ranking. As a Mutual Fund Distributor, Anup Vatyani may be empanelled with some of these fund houses.
      </p>
    </GuidePage>
  );
};

export default FundCompare;
