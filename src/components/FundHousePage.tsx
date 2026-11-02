import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { GuidePage, h2, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";
import { LOW_MIN, HIGH_MIN, FUNDS_LAST_CHECKED } from "@/data/funds";

interface Props {
  path: string;
  house: string; // must match `house` in src/data/funds.ts
  name: string; // display name, e.g. "PPFAS (Parag Parikh)"
  headline: string;
  seoTitle: string;
  description: string;
  datePublished: string;
  intro: ReactNode;
  entity: [string, ReactNode][];
  faqs: Faq[];
}

// One fund house's GIFT City funds, drawn from src/data/funds.ts so it always
// matches the fund list. Facts only: no returns, no ranking.
export const FundHousePage = (c: Props) => {
  const funds = [...LOW_MIN, ...HIGH_MIN].filter((f) => f.house === c.house);
  return (
    <GuidePage
      path={c.path}
      headline={c.headline}
      seoTitle={c.seoTitle}
      description={c.description}
      crumb={`${c.name} GIFT City funds`}
      datePublished={c.datePublished}
      reviewed={`Last checked ${FUNDS_LAST_CHECKED}`}
      faqs={c.faqs}
      sources={["ifscaDirectory", "ifsca"]}
      extraSchema={[
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `${c.name} GIFT City funds`,
          itemListElement: funds.map((f, i) => ({ "@type": "ListItem", position: i + 1, name: f.scheme, url: f.source.url })),
        },
      ]}
    >
      <p className={p}>
        <strong className="text-primary">The short answer.</strong> {c.intro}
      </p>

      <h2 className={h2}>The fund house in GIFT City</h2>
      <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto">
        <table className={table}>
          <caption className="sr-only">{c.name} in GIFT City</caption>
          <tbody>
            {c.entity.map(([k, v]) => (
              <tr key={k}><th scope="row" className={th + " w-1/3"}>{k}</th><td className={td}>{v}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className={h2}>{c.name} GIFT City funds</h2>
      <div className="space-y-5">
        {funds.map((f) => (
          <div key={f.scheme} className="rounded-xl border border-border bg-surface p-5">
            <h3 className="font-heading font-semibold text-lg text-primary">{f.scheme}</h3>
            <ul className={ul + " mt-2"}>
              <li><strong className="text-primary">Direction:</strong> {f.direction === "Inbound" ? "Inbound (invests in India)" : f.direction === "Outbound" ? "Outbound (invests outside India)" : f.direction}</li>
              <li><strong className="text-primary">Invests in:</strong> {f.invests}</li>
              <li><strong className="text-primary">Minimum:</strong> {f.minimum}</li>
              <li><strong className="text-primary">Who can invest:</strong> {f.who}</li>
            </ul>
            <p className="font-body text-sm mt-2"><a href={f.source.url} target="_blank" rel="noopener noreferrer" className={a}>Source: {f.source.label}</a></p>
          </div>
        ))}
      </div>
      <p className="font-body text-xs text-foreground-muted mt-4">
        Facts as published by the fund house or reported, checked {FUNDS_LAST_CHECKED}. Not a recommendation; no returns are shown. Read the offer document before investing. As a Mutual Fund Distributor, Anup Vatyani may be empanelled with this fund house.
      </p>

      <h2 className={h2}>Compare with other fund houses</h2>
      <p className={p}>
        See all funds on the <Link to="/gift-city-fund-list" className={a}>GIFT City fund list</Link>, put funds side by side with the <Link to="/gift-city-fund-compare" className={a}>comparison tool</Link>, or check <Link to="/gift-city-route-checker" className={a}>which route applies to you</Link>.
      </p>
    </GuidePage>
  );
};
