import { Link } from "react-router-dom";
import { GuidePage, h2, p, a, table, th, td, type Faq } from "@/components/GuidePage";
import { FUND_COUNT, HOUSE_COUNT, FUNDS_LAST_CHECKED } from "@/data/funds";

// Every figure is IFSCA data as reported, with its date and source. Update when
// IFSCA publishes the next quarter's bulletin; never mix dates in one chart.
const CAFE = { label: "Cafemutual (IFSCA data), 12 Sep 2026", url: "https://cafemutual.com/news/industry/38786-gift-city-fund-commitments-cross-rs-428-lakh-crore-as-fme-count-reaches-235" };
const CAFE_RETAIL = { label: "Cafemutual (IFSCA data), 4 Sep 2026", url: "https://cafemutual.com/news/cafe-alt/38715-retail-investor-base-gets-double-in-gift-city" };
const OUTLOOK = { label: "Outlook Money (IFSCA bulletin), 12 Sep 2026", url: "https://www.outlookmoney.com/invest/gift-city-fund-investors-retail-investor-base-ifsc-ifsca-q1-fy-2026-27" };

const KEY: { value: string; label: string; src: typeof CAFE }[] = [
  { value: "235", label: "Fund management entities registered with IFSCA (30 June 2026)", src: CAFE },
  { value: "401", label: "Funds and schemes (30 June 2026)", src: CAFE },
  { value: "USD 45.08 bn", label: "Cumulative commitments to GIFT City funds (30 June 2026)", src: OUTLOOK },
  { value: "16,150", label: "Investors across GIFT City funds (30 June 2026)", src: OUTLOOK },
  { value: "8,467", label: "Investors in retail schemes, over half of all investors (30 June 2026)", src: CAFE_RETAIL },
  { value: "14", label: "Authorised retail schemes (30 June 2026)", src: CAFE_RETAIL },
];

const RETAIL = [
  { label: "Sep 2025", v: 255 },
  { label: "Dec 2025", v: 1239 },
  { label: "Mar 2026", v: 3438 },
  { label: "Jun 2026", v: 8467 },
];

const GROWTH = [
  { label: "Jun 2025", fme: 177, schemes: 272 },
  { label: "Mar 2026", fme: 217, schemes: 360 },
  { label: "Jun 2026", fme: 235, schemes: 401 },
];

const INVESTORS = [
  { label: "Retail schemes", v: 8467 },
  { label: "Category III AIFs", v: 5175 },
  { label: "Category II AIFs", v: 1655 },
  { label: "Category I AIFs", v: 853 },
];

const fmt = (n: number) => n.toLocaleString("en-IN");

// A plain horizontal bar chart: bars scaled to the largest value, each value
// printed beside its bar, so the chart reads without a legend.
const Bars = ({ title, rows, unit }: { title: string; rows: { label: string; v: number }[]; unit: string }) => {
  const max = Math.max(...rows.map((r) => r.v));
  const rowH = 40, top = 44, h = top + rows.length * rowH + 12;
  return (
    <figure className="my-6 rounded-xl border border-border bg-surface p-4">
      <svg viewBox={`0 0 640 ${h}`} role="img" aria-label={title} className="w-full h-auto">
        <text x="0" y="22" fontSize="16" fontWeight="600" fill="hsl(var(--primary))">{title}</text>
        {rows.map((r, i) => {
          const y = top + i * rowH;
          const w = Math.max(4, (r.v / max) * 400);
          return (
            <g key={r.label}>
              <text x="0" y={y + 20} fontSize="13" fill="hsl(var(--foreground-muted))">{r.label}</text>
              <rect x="130" y={y + 6} width={w} height="22" rx="4" fill="hsl(var(--teal))" />
              <text x={136 + w} y={y + 22} fontSize="13" fontWeight="600" fill="hsl(var(--primary))">{fmt(r.v)}{unit}</text>
            </g>
          );
        })}
      </svg>
    </figure>
  );
};

const faqs: Faq[] = [
  { q: "How many funds are there in GIFT City?", a: "IFSCA data showed 401 funds and schemes run by 235 fund management entities at 30 June 2026. Only 14 were authorised retail schemes; most are AIFs and restricted schemes." },
  { q: "How many investors are in GIFT City funds?", a: "16,150 at 30 June 2026, of which 8,467 were in retail schemes, up from 3,438 at the end of March 2026 and 255 in September 2025." },
  { q: "How much money is committed to GIFT City funds?", a: "USD 45.08 billion in cumulative commitments at 30 June 2026, with USD 22.93 billion actually raised, according to IFSCA data reported by Outlook Money." },
  { q: "How big are GIFT City's bond and banking markets?", a: "IFSCA reported cumulative debt listings of USD 70.31 billion on IFSC exchanges by 31 March 2026, and IFSC Banking Units had disbursed about USD 52.82 billion under RBI's FCNR(B) swap window by 31 August 2026." },
];

const GiftCityNumbers = () => (
  <GuidePage
    path="/gift-city-in-numbers"
    headline="GIFT City in Numbers 2026: Funds, Investors and Money, with Sources"
    seoTitle="GIFT City Statistics 2026: Funds, Investors, Commitments (IFSCA Data)"
    description="GIFT City in numbers: 235 fund managers, 401 schemes, USD 45 bn committed and 16,150 investors at 30 June 2026, retail investor growth and more, each figure dated and sourced."
    crumb="GIFT City in Numbers"
    datePublished="2026-11-02"
    reviewed="Figures as of 30 June 2026 unless stated; reviewed 2 November 2026"
    faqs={faqs}
    sources={["ifsca", "ifscaDirectory"]}
  >
    <p className={p}>
      <strong className="text-primary">The short answer.</strong> At 30 June 2026, GIFT City had <strong className="text-primary">235 fund managers running 401 funds and schemes</strong>, with <strong className="text-primary">USD 45.08 billion committed</strong> and <strong className="text-primary">16,150 investors</strong>. Retail investors grew more than 30 times in nine months, to 8,467. Every figure below is IFSCA data, dated and linked to where it was reported. You are welcome to cite this page.
    </p>

    <h2 className={h2}>Key figures</h2>
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 list-none p-0">
      {KEY.map((k) => (
        <li key={k.label} className="rounded-xl border border-border bg-surface p-5">
          <p className="font-heading font-bold text-3xl text-primary">{k.value}</p>
          <p className="font-body text-sm text-foreground-muted mt-1">{k.label}</p>
          <a href={k.src.url} target="_blank" rel="noopener noreferrer" className={a + " text-xs mt-2 inline-block"}>{k.src.label}</a>
        </li>
      ))}
    </ul>

    <h2 className={h2}>Retail investors in GIFT City funds</h2>
    <Bars title="Investors in GIFT City retail schemes" rows={RETAIL.map((r) => ({ label: r.label, v: r.v }))} unit="" />
    <p className="font-body text-xs text-foreground-muted">Quarter-end figures. Source: <a href={CAFE_RETAIL.url} target="_blank" rel="noopener noreferrer" className={a}>{CAFE_RETAIL.label}</a>.</p>

    <h2 className={h2}>Who invests: investors by fund type</h2>
    <Bars title="Investors by fund type, 30 June 2026" rows={INVESTORS} unit="" />
    <p className="font-body text-xs text-foreground-muted">Source: <a href={OUTLOOK.url} target="_blank" rel="noopener noreferrer" className={a}>{OUTLOOK.label}</a>.</p>

    <h2 className={h2}>Fund managers and schemes</h2>
    <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto">
      <table className={table}>
        <caption className="sr-only">Fund management entities and schemes in GIFT City</caption>
        <thead><tr><th className={th}>Date</th><th className={th}>Fund management entities</th><th className={th}>Funds and schemes</th></tr></thead>
        <tbody>
          {GROWTH.map((g) => (
            <tr key={g.label}><th scope="row" className={th}>{g.label}</th><td className={td}>{g.fme}</td><td className={td}>{g.schemes}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
    <p className="font-body text-xs text-foreground-muted mt-2">Source: <a href={CAFE.url} target="_blank" rel="noopener noreferrer" className={a}>{CAFE.label}</a>.</p>

    <h2 className={h2}>Money in GIFT City funds</h2>
    <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto">
      <table className={table}>
        <caption className="sr-only">Commitments, money raised and invested</caption>
        <thead><tr><th className={th}>Measure (30 June 2026)</th><th className={th}>Amount</th></tr></thead>
        <tbody>
          <tr><th scope="row" className={th}>Cumulative commitments</th><td className={td}>USD 45.08 billion (about ₹4.31 lakh crore)</td></tr>
          <tr><th scope="row" className={th}>Funds actually raised</th><td className={td}>USD 22.93 billion</td></tr>
          <tr><th scope="row" className={th}>Investments made</th><td className={td}>USD 21.05 billion, about 92% of it in India</td></tr>
          <tr><th scope="row" className={th}>Fund investments linked to NRIs and OCIs</th><td className={td}>₹8,083 crore</td></tr>
          <tr><th scope="row" className={th}>Portfolio management (PMS) assets</th><td className={td}>₹31,961 crore</td></tr>
        </tbody>
      </table>
    </div>
    <p className="font-body text-xs text-foreground-muted mt-2">Sources: <a href={OUTLOOK.url} target="_blank" rel="noopener noreferrer" className={a}>{OUTLOOK.label}</a>; <a href={CAFE.url} target="_blank" rel="noopener noreferrer" className={a}>{CAFE.label}</a>.</p>

    <h2 className={h2}>Bonds and banking</h2>
    <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto">
      <table className={table}>
        <caption className="sr-only">GIFT City bond and banking figures</caption>
        <thead><tr><th className={th}>Measure</th><th className={th}>Figure</th><th className={th}>As of</th></tr></thead>
        <tbody>
          <tr><th scope="row" className={th}>Cumulative debt listings on IFSC exchanges</th><td className={td}>USD 70.31 billion (USD 49.20 billion outstanding)</td><td className={td}>31 March 2026 · <a href="https://taxguru.in/finance/ifsca-reviews-fy2025-26-debt-market-growth-outlook-gift-ifsc.html" target="_blank" rel="noopener noreferrer" className={a}>source</a></td></tr>
          <tr><th scope="row" className={th}>Disbursed by IFSC Banking Units under RBI's FCNR(B) swap window</th><td className={td}>About USD 52.82 billion, by 20 banks</td><td className={td}>31 August 2026 · <a href="https://taxguru.in/finance/ifsca-highlights-gift-ifsc-foreign-currency-mobilisation-exceeding-usd-52-8-billion.html" target="_blank" rel="noopener noreferrer" className={a}>source</a></td></tr>
        </tbody>
      </table>
    </div>

    <h2 className={h2}>On this site</h2>
    <p className={p}>
      Our <Link to="/gift-city-fund-list" className={a}>GIFT City fund list</Link> covers {FUND_COUNT} funds from {HOUSE_COUNT} fund houses that have made them public (checked {FUNDS_LAST_CHECKED}). For the latest developments, see <Link to="/gift-city-news" className={a}>GIFT City news</Link>.
    </p>
  </GuidePage>
);

export default GiftCityNumbers;
