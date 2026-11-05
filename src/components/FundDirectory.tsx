import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, LayoutGrid, Table2, Check } from "lucide-react";
import { LOW_MIN, HIGH_MIN, FUNDS_LAST_CHECKED, fundName, fundPath, isRetail, type Fund } from "@/data/funds";

// Searchable, filterable directory of every fund in src/data/funds.ts.
// Facts only: no NAV, returns or ranking. Sorting is alphabetical or by
// published minimum, never by performance.
const ALL: Fund[] = [...LOW_MIN, ...HIGH_MIN];

type Cat = "all" | "retail" | "aif" | "Outbound" | "Inbound";
type Open = "any" | "res" | "nri";
type Sort = "house" | "min";

const minUsd = (f: Fund) => {
  const m = f.minimum.replace(/,/g, "").match(/USD (\d+)/);
  return m ? Number(m[1]) : Infinity;
};
const minShort = (f: Fund) => f.minimum.split(/;|\(|, then| or /)[0].trim();
const whoShort = (f: Fund) =>
  f.residents && f.nri ? "Residents and NRIs" : f.residents ? "Resident Indians (LRS)" : f.nri ? "NRIs and foreign investors" : "See offer document";
const initials = (h: string) =>
  h.replace(/\(.*?\)/g, "").split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

const CATS: [Cat, string, (f: Fund) => boolean][] = [
  ["all", "All funds", () => true],
  ["retail", "Retail funds", (f) => isRetail(f)],
  ["aif", "AIFs & restricted", (f) => !isRetail(f)],
  ["Outbound", "Outbound", (f) => f.direction === "Outbound"],
  ["Inbound", "Inbound", (f) => f.direction === "Inbound"],
];
const count = (rows: Fund[]) => rows.filter((f) => !f.upcoming).reduce((n, f) => n + (f.count ?? 1), 0);

// Emerald outline and top edge on every card, paired with the brand blue; the tags carry the fund type.
const EDGE: Record<string, string> = { Outbound: "before:bg-emerald-600", Inbound: "before:bg-emerald-600", Gold: "before:bg-emerald-600" };

const Card = ({ f }: { f: Fund }) => {
  const to = fundPath(f);
  return (
    <li className={`relative flex flex-col overflow-hidden rounded-2xl border-[1.5px] border-emerald-500/70 bg-white p-5 pt-6 shadow-[0_1px_2px_rgba(15,23,42,0.05),0_6px_16px_rgba(5,150,105,0.08)] transition hover:-translate-y-0.5 hover:border-emerald-600 hover:shadow-[0_2px_4px_rgba(15,23,42,0.06),0_12px_28px_rgba(5,150,105,0.16)] motion-reduce:hover:translate-y-0 before:absolute before:inset-x-0 before:top-0 before:h-1 ${EDGE[f.direction]}`}>
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface font-body text-sm font-bold text-primary" aria-hidden>
          {initials(f.house)}
        </span>
        <span className="flex flex-wrap justify-end gap-1.5">
          <span className={`rounded-full px-2.5 py-0.5 font-body text-xs font-semibold bg-accent text-secondary`}>{f.direction}</span>
          <span className="rounded-full border border-border px-2.5 py-0.5 font-body text-xs font-medium text-foreground-muted">{isRetail(f) ? "Retail" : "AIF"}</span>
        </span>
      </div>
      <h3 className="mt-4 font-body text-[17px] font-semibold leading-snug text-primary">
        {to ? <Link to={to} className="hover:underline">{fundName(f)}</Link> : fundName(f)}
      </h3>
      <p className="mt-0.5 font-body text-[13.5px] text-foreground-muted">{f.house}{f.count ? ` · ${f.count} schemes` : ""}{f.upcoming ? " · coming soon" : ""}</p>
      <dl className="mt-4 grid grid-cols-2 gap-3 rounded-xl bg-slate-50 border border-slate-200 p-3.5 font-body">
        <div><dt className="text-xs text-foreground-muted">Minimum</dt><dd className="mt-0.5 text-[15px] font-semibold text-primary">{minShort(f)}</dd></div>
        <div><dt className="text-xs text-foreground-muted">Who can invest</dt><dd className="mt-0.5 text-[15px] font-semibold text-primary">{whoShort(f)}</dd></div>
      </dl>
      <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-200 pt-4 mt-4">
        <span className="inline-flex items-center gap-1 font-body text-xs text-foreground-muted">
          <Check className="h-3.5 w-3.5 text-emerald-600" strokeWidth={3} aria-hidden /> Source checked
        </span>
        {to ? (
          <Link to={to} className="font-body text-sm font-semibold text-secondary hover:underline">Fund details →</Link>
        ) : (
          <a href={f.source.url} target="_blank" rel="noopener noreferrer" className="font-body text-sm font-semibold text-secondary hover:underline">Source →</a>
        )}
      </div>
    </li>
  );
};

const Table = ({ rows }: { rows: Fund[] }) => (
  <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto rounded-2xl border border-border bg-white">
    <table className="w-full min-w-[760px] border-collapse font-body text-sm">
      <caption className="sr-only">GIFT City funds matching your filters</caption>
      <thead className="bg-surface text-left">
        <tr>{["Fund", "Type", "Invests in", "Minimum", "Who can invest", "Source"].map((h) => <th key={h} scope="col" className="px-4 py-3 font-semibold text-primary">{h}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((f) => (
          <tr key={f.scheme} className="border-t border-border align-top">
            <td className="px-4 py-3 min-w-[12rem]"><span className="block text-xs text-foreground-muted">{f.house}</span>{fundPath(f) ? <Link to={fundPath(f)!} className="font-semibold text-secondary hover:underline">{fundName(f)}</Link> : <span className="font-semibold text-primary">{fundName(f)}</span>}</td>
            <td className="px-4 py-3 whitespace-nowrap text-foreground-muted">{f.direction} · {isRetail(f) ? "Retail" : "AIF"}</td>
            <td className="px-4 py-3 text-foreground-muted">{f.invests}</td>
            <td className="px-4 py-3 text-foreground-muted">{f.minimum}</td>
            <td className="px-4 py-3 text-foreground-muted">{f.who}</td>
            <td className="px-4 py-3"><a href={f.source.url} target="_blank" rel="noopener noreferrer" className="text-secondary underline underline-offset-2">{f.source.label}</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const FundDirectory = () => {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<Cat>("all");
  const [open, setOpen] = useState<Open>("any");
  const [sort, setSort] = useState<Sort>("house");
  const [view, setView] = useState<"cards" | "table">("cards");

  const rows = useMemo(() => {
    const words = q.toLowerCase().split(/\s+/).filter(Boolean);
    const test = CATS.find((c) => c[0] === cat)![2];
    const out = ALL.filter(
      (f) =>
        test(f) &&
        (open === "any" || (open === "res" ? f.residents : f.nri)) &&
        words.every((w) => `${f.scheme} ${f.house} ${f.invests} ${f.direction}`.toLowerCase().includes(w)),
    );
    return out.sort((a, b) => (sort === "min" ? minUsd(a) - minUsd(b) : 0) || a.house.localeCompare(b.house) || a.scheme.localeCompare(b.scheme));
  }, [q, cat, open, sort]);

  const sel = "h-10 rounded-lg border border-input bg-white px-3 font-body text-sm text-primary";
  return (
    <div className="relative left-1/2 w-[min(76rem,calc(100vw-2rem))] -translate-x-1/2 rounded-3xl border border-slate-200 bg-slate-100 p-4 sm:p-6 my-8" id="directory">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-body text-[13px] font-bold uppercase tracking-[0.08em] text-secondary">Fund directory</p>
          <h2 className="mt-1 font-heading text-2xl md:text-3xl font-extrabold tracking-[-0.02em] text-primary">Explore GIFT City funds</h2>
        </div>
        <div className="inline-flex rounded-lg border border-input bg-white p-1" role="group" aria-label="View">
          {(["cards", "table"] as const).map((v) => (
            <button key={v} type="button" aria-pressed={view === v} onClick={() => setView(v)} className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 font-body text-sm font-semibold ${view === v ? "bg-secondary text-white" : "text-foreground-muted hover:text-primary"}`}>
              {v === "cards" ? <LayoutGrid className="h-4 w-4" aria-hidden /> : <Table2 className="h-4 w-4" aria-hidden />}
              {v === "cards" ? "Cards" : "Table"}
            </button>
          ))}
        </div>
      </div>

      <div role="group" aria-label="Fund type" className="mt-5 flex flex-wrap gap-2">
        {CATS.map(([k, label, test]) => (
          <button key={k} type="button" aria-pressed={cat === k} onClick={() => setCat(k)} className={`rounded-full border px-4 py-1.5 font-body text-sm font-semibold transition-colors ${cat === k ? "border-secondary bg-secondary text-white" : "border-border bg-white text-primary hover:border-secondary/50"}`}>
            {label} <span className={cat === k ? "text-white/80" : "text-foreground-muted"}>({count(ALL.filter(test))})</span>
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto_auto]">
        <label className="flex h-10 items-center gap-2 rounded-lg border border-input bg-white px-3 text-foreground-muted focus-within:border-secondary">
          <Search className="h-4 w-4 shrink-0" aria-hidden />
          <span className="sr-only">Search by fund, fund house or strategy</span>
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by fund, fund house or strategy…" className="min-w-0 flex-1 bg-transparent font-body text-sm text-primary outline-none placeholder:text-foreground-muted" />
        </label>
        <label className="sr-only" htmlFor="dir-open">Open to</label>
        <select id="dir-open" value={open} onChange={(e) => setOpen(e.target.value as Open)} className={sel}>
          <option value="any">Open to: anyone</option>
          <option value="res">Open to: resident Indians</option>
          <option value="nri">Open to: NRIs</option>
        </select>
        <label className="sr-only" htmlFor="dir-sort">Sort</label>
        <select id="dir-sort" value={sort} onChange={(e) => setSort(e.target.value as Sort)} className={sel}>
          <option value="house">Sort: fund house A–Z</option>
          <option value="min">Sort: lowest minimum first</option>
        </select>
      </div>

      <p className="mt-4 font-body text-sm text-foreground-muted" aria-live="polite">
        Showing {count(rows)} of {count(ALL)} funds · facts checked {FUNDS_LAST_CHECKED}
      </p>

      {rows.length === 0 ? (
        <p className="mt-4 rounded-2xl border border-border bg-white p-6 font-body text-foreground-muted">No fund matches. Clear the search or choose another filter.</p>
      ) : view === "cards" ? (
        <ul className="mt-4 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">{rows.map((f) => <Card key={f.scheme} f={f} />)}</ul>
      ) : (
        <div className="mt-4"><Table rows={rows} /></div>
      )}

      <p className="mt-5 font-body text-xs text-foreground-muted">
        No NAVs, returns or rankings: check each fund house's website for those. Inclusion is not a recommendation. As a Mutual Fund Distributor, Anup Vatyani may be empanelled with some of these fund houses.
      </p>
    </div>
  );
};
