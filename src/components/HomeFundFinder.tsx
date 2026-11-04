import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { LOW_MIN, HIGH_MIN, FUND_COUNT, HOUSE_COUNT, FUNDS_LAST_CHECKED, fundPath, type Fund } from "@/data/funds";

// Home page: a compact, factual look at the GIFT City fund list. Same data as
// /gift-city-fund-list. Alphabetical, never ranked; no returns or NAVs.
type Filter = "all" | "res" | "nri" | "usd500";
const FILTERS: [Filter, string][] = [
  ["all", "All"],
  ["res", "Open to resident Indians"],
  ["nri", "Open to NRIs"],
  ["usd500", "From USD 500"],
];
const SHOW = 6;
const ALL: Fund[] = [...LOW_MIN, ...HIGH_MIN].filter((f) => !f.upcoming);

const match = (f: Fund, k: Filter) =>
  k === "all" ? true : k === "res" ? f.residents : k === "nri" ? f.nri : f.minimum.startsWith("USD 500");

const HomeFundFinder = () => {
  const [filter, setFilter] = useState<Filter>("all");
  const list = ALL.filter((f) => match(f, filter));

  return (
    <section id="fund-finder" className="py-16 md:py-20 bg-surface border-b border-border scroll-mt-20" aria-labelledby="fund-finder-h">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <p className="font-body text-sm font-semibold uppercase tracking-wider text-secondary mb-2">GIFT City funds list</p>
            <h2 id="fund-finder-h" className="font-heading font-bold text-3xl md:text-4xl text-primary">
              {FUND_COUNT} GIFT City Funds from {HOUSE_COUNT} Fund Houses
            </h2>
            <p className="font-body text-lg text-foreground-muted mt-2">
              Inbound and outbound GIFT City funds, with who can invest and the minimum. Checked {FUNDS_LAST_CHECKED}.
            </p>
          </div>
          <Link to="/gift-city-fund-list" className="font-body font-semibold text-secondary hover:underline inline-flex items-center">
            See all {FUND_COUNT} funds <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
          </Link>
        </div>

        <p className="font-body text-sm text-foreground-muted mb-4">
          Funds open where you live:{" "}
          <Link to="/gift-city-funds-for-uae-nris" className="font-semibold text-secondary hover:underline">UAE</Link>{" · "}
          <Link to="/gift-city-funds-for-gulf-nris" className="font-semibold text-secondary hover:underline">Saudi, Qatar, Kuwait, Bahrain, Oman</Link>{" · "}
          <Link to="/gift-city-funds-for-uk-nris" className="font-semibold text-secondary hover:underline">UK</Link>{" · "}
          <Link to="/gift-city-funds-for-us-nris" className="font-semibold text-secondary hover:underline">US</Link>{" · "}
          <Link to="/gift-city-funds-for-singapore-nris" className="font-semibold text-secondary hover:underline">Singapore</Link>{" · "}
          <Link to="/gift-city-funds-for-canada-nris" className="font-semibold text-secondary hover:underline">Canada</Link>{" · "}
          <Link to="/gift-city-funds-for-resident-indians" className="font-semibold text-secondary hover:underline">India (residents)</Link>
          {" · "}<Link to="/gift-city-fund-compare" className="font-semibold text-secondary hover:underline">Compare funds side by side</Link>
        </p>
        <div role="group" aria-label="Show funds" className="flex flex-wrap gap-2 mb-6">
          {FILTERS.map(([k, label]) => (
            <button
              key={k}
              type="button"
              aria-pressed={filter === k}
              onClick={() => setFilter(k)}
              className={`rounded-full px-4 py-1.5 font-body text-sm font-semibold border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${filter === k ? "bg-primary text-primary-foreground border-primary" : "bg-background text-primary border-border hover:border-primary"}`}
            >
              {label}
            </button>
          ))}
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
          {list.slice(0, SHOW).map((f) => (
            <li key={f.scheme} className="rounded-2xl border border-border bg-background p-5 flex flex-col">
              <p className="font-body text-sm font-semibold text-secondary">{f.house} · {f.direction}</p>
              <h3 className="mt-1 font-heading font-semibold text-lg text-primary leading-snug">{f.scheme}</h3>
              <dl className="mt-3 font-body text-sm text-foreground-muted space-y-1 flex-1">
                <div><dt className="inline font-semibold text-primary">Minimum: </dt><dd className="inline">{f.minimum}</dd></div>
                <div><dt className="inline font-semibold text-primary">Who can invest: </dt><dd className="inline">{f.who}</dd></div>
              </dl>
              <p className="mt-3 font-body text-sm font-medium">
                {fundPath(f) && <><Link to={fundPath(f)!} className="text-secondary underline underline-offset-2">Fund details</Link>{" · "}</>}
                <a href={f.source.url} target="_blank" rel="noopener noreferrer" className="text-secondary underline underline-offset-2">Source: {f.source.label}</a>
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="font-body text-xs text-foreground-muted max-w-3xl">
            The first {Math.min(SHOW, list.length)} shown, alphabetical by fund house. Not a ranking or recommendation; no returns are shown. Eligibility and minimums change, so check the fund house's offer document. As a Mutual Fund Distributor, Anup Vatyani may be empanelled with some of these fund houses.
          </p>
          <Link to="/gift-city-fund-list" className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 font-body text-sm font-semibold text-primary-foreground hover:opacity-90">
            See the full fund list <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFundFinder;
