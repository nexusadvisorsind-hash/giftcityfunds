import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { GuidePage, h2, h3, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";
import { FlowSteps } from "@/components/Diagrams";
import type { SourceKey } from "@/components/OfficialSources";
import { LOW_MIN, HIGH_MIN, FUNDS_LAST_CHECKED } from "@/data/funds";

export type CountryCode = "uae" | "uk" | "us" | "sg" | "ca";

export interface CountryPageProps {
  code: CountryCode;
  path: string;
  name: string; // "the UAE"
  short: string; // "UAE"
  headline: string;
  seoTitle: string;
  description: string;
  datePublished: string;
  intro: ReactNode;
  facts: [string, ReactNode][];
  steps: { title: string; sub: string }[];
  tax: ReactNode;
  docs: string[];
  money: ReactNode;
  fundNote?: ReactNode;
  extra?: ReactNode;
  faqs: Faq[];
  sources: SourceKey[];
}

const EX_CODE: Partial<Record<CountryCode, "us" | "ca" | "uk">> = { us: "us", ca: "ca", uk: "uk" };

// Shared layout for the NRI country pages. Each page supplies its own facts,
// tax section and FAQs, so the content stays unique; the fund lists come from
// src/data/funds.ts so they stay in step with the fund list page.
export const NriCountryPage = (c: CountryPageProps) => {
  const ex = EX_CODE[c.code];
  const nriFunds = [...LOW_MIN, ...HIGH_MIN].filter((f) => f.nri);
  const open = nriFunds.filter((f) => !ex || !f.excludes?.includes(ex));
  const closed = ex ? [...LOW_MIN, ...HIGH_MIN].filter((f) => f.excludes?.includes(ex)) : [];
  const openLow = open.filter((f) => LOW_MIN.includes(f));
  const openHigh = open.filter((f) => HIGH_MIN.includes(f));

  return (
    <GuidePage
      path={c.path}
      headline={c.headline}
      seoTitle={c.seoTitle}
      description={c.description}
      crumb={`NRIs in ${c.short}`}
      datePublished={c.datePublished}
      faqs={c.faqs}
      sources={c.sources}
    >
      <p className={p}>
        <strong className="text-primary">The short answer.</strong> {c.intro}
      </p>

      <h2 className={h2}>{c.short} NRIs and GIFT City: key facts</h2>
      <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto">
        <table className={table}>
          <caption className="sr-only">Key facts for NRIs in {c.name}</caption>
          <tbody>
            {c.facts.map(([k, v]) => (
              <tr key={k}><th scope="row" className={th + " w-1/3"}>{k}</th><td className={td}>{v}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className={h2}>How to invest in GIFT City from {c.name}</h2>
      <FlowSteps caption="Typically one to three weeks from first contact to units." steps={c.steps} />

      <h2 className={h2}>Which GIFT City funds accept NRIs in {c.name}?</h2>
      <p className={p}>
        Based on each fund house's published eligibility, checked {FUNDS_LAST_CHECKED}. Offer documents can add conditions, and most exclude sanctioned or FATF-listed countries, so confirm with the fund house before you apply. Listing is not a recommendation.
      </p>
      {c.fundNote && <p className={p + " mt-3"}>{c.fundNote}</p>}
      <h3 className={h3}>Lower minimums (USD 500 to USD 10,000)</h3>
      <ul className={ul}>
        {openLow.map((f) => (
          <li key={f.scheme}><strong className="text-primary">{f.scheme}</strong> ({f.house}, {f.direction.toLowerCase()}): {f.minimum}.</li>
        ))}
      </ul>
      <h3 className={h3}>AIFs and restricted funds (higher minimums)</h3>
      <ul className={ul}>
        {openHigh.map((f) => (
          <li key={f.scheme}><strong className="text-primary">{f.scheme}</strong> ({f.house}): {f.minimum}.</li>
        ))}
      </ul>
      {closed.length > 0 && (
        <>
          <h3 className={h3}>Funds that say they do not accept {c.short} residents</h3>
          <ul className={ul}>
            {closed.map((f) => (
              <li key={f.scheme}><strong className="text-primary">{f.scheme}</strong> ({f.house}). <a href={f.source.url} target="_blank" rel="noopener noreferrer" className={a}>Source</a></li>
            ))}
          </ul>
        </>
      )}
      <p className="font-body text-sm text-foreground-muted mt-3">
        Full details, minimums and sources: <Link to="/gift-city-fund-list" className={a}>GIFT City fund list</Link>.
      </p>

      <h2 className={h2}>How {c.short} taxes GIFT City funds</h2>
      {c.tax}

      <h2 className={h2}>Indian tax for NRIs in {c.name}</h2>
      <p className={p}>
        Many GIFT City funds are structured so that non-resident investors bear little or no Indian tax, with tax handled at the fund level; the treatment depends on the fund, so ask for it in writing. Your Indian residential status decides the rest: you are generally non-resident if you spend fewer than 182 days in India in the financial year, but a 120-day test applies if your Indian income exceeds ₹15 lakh. See <Link to="/taxation" className={a}>GIFT City taxation</Link>.
      </p>

      {c.extra}

      <h2 className={h2}>Documents NRIs in {c.name} are usually asked for</h2>
      <ul className={ul}>{c.docs.map((d) => <li key={d}>{d}</li>)}</ul>
      <p className="font-body text-sm text-foreground-muted mt-3">
        Build your own list with the <Link to="/gift-city-document-checklist" className={a}>document checklist</Link>.
      </p>

      <h2 className={h2}>Sending money from {c.name}</h2>
      {c.money}

      <h2 className={h2}>Other countries</h2>
      <p className={p}>
        Guides for <Link to="/gift-city-funds-for-uae-nris" className={a}>the UAE</Link>, <Link to="/gift-city-funds-for-uk-nris" className={a}>the UK</Link>, <Link to="/gift-city-funds-for-us-nris" className={a}>the US</Link>, <Link to="/gift-city-funds-for-singapore-nris" className={a}>Singapore</Link> and <Link to="/gift-city-funds-for-canada-nris" className={a}>Canada</Link>, and the Gulf and Australia on the main <Link to="/gift-city-funds-for-nri" className={a}>GIFT City for NRIs</Link> page.
      </p>
    </GuidePage>
  );
};
