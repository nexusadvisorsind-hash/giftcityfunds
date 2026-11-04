import { Link } from "react-router-dom";
import { GuidePage, h2, h3, p, a, type Faq } from "@/components/GuidePage";
import { LOW_MIN, HIGH_MIN, FUNDS_LAST_CHECKED, fundName, fundPath, type Fund } from "@/data/funds";
import { FundCard } from "@/components/FundCard";

interface Props {
  direction: "Inbound" | "Outbound";
  path: string;
  headline: string;
  seoTitle: string;
  description: string;
  intro: React.ReactNode;
  faqs: Faq[];
  after?: React.ReactNode;
}

const schemes = (rows: Fund[]) => rows.filter((f) => !f.upcoming).reduce((n, f) => n + (f.count ?? 1), 0);

// Every fund of one direction from src/data/funds.ts, retail first. Facts only.
export const FundDirectionPage = (c: Props) => {
  const retail = LOW_MIN.filter((f) => f.direction === c.direction);
  const aif = HIGH_MIN.filter((f) => f.direction === c.direction);
  const all = [...retail, ...aif];
  return (
    <GuidePage
      path={c.path}
      headline={c.headline}
      seoTitle={c.seoTitle}
      description={c.description}
      crumb={`GIFT City ${c.direction.toLowerCase()} funds`}
      datePublished="2026-11-04"
      reviewed={`Last checked ${FUNDS_LAST_CHECKED}`}
      faqs={c.faqs}
      sources={["ifscaDirectory", "ifsca"]}
      extraSchema={[
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `GIFT City ${c.direction.toLowerCase()} funds`,
          itemListElement: all.map((f, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: `${fundName(f)} (${f.house})`,
            url: fundPath(f) ? `https://giftcityfunds.in${fundPath(f)}` : f.source.url,
          })),
        },
      ]}
    >
      <p className={p}>
        <strong className="text-primary">The short answer.</strong> {c.intro} We list <strong className="text-primary">{schemes(all)}</strong> {c.direction.toLowerCase()} funds that fund houses have made public, checked {FUNDS_LAST_CHECKED}.
      </p>

      <h2 className={h2}>Retail {c.direction.toLowerCase()} funds ({schemes(retail)})</h2>
      <p className={p}>Retail schemes have lower minimums, from USD 500 to USD 10,000.</p>
      <ul className="grid gap-4 md:grid-cols-2 list-none p-0 mt-3">{retail.map((f) => <li key={f.scheme}><FundCard f={f} /></li>)}</ul>

      <h2 className={h2}>AIFs and restricted {c.direction.toLowerCase()} funds ({schemes(aif)})</h2>
      <p className={p}>Alternative investment funds and restricted schemes usually need USD 150,000 or more, or accredited-investor status.</p>
      <ul className="grid gap-4 md:grid-cols-2 list-none p-0 mt-3">{aif.map((f) => <li key={f.scheme}><FundCard f={f} /></li>)}</ul>

      {c.after}

      <h3 className={h3}>Compare and check</h3>
      <p className={p}>
        Put funds side by side with the <Link to="/gift-city-fund-compare" className={a}>comparison tool</Link>, see every fund on the <Link to="/gift-city-fund-list" className={a}>GIFT City fund list</Link>, or check <Link to="/gift-city-route-checker" className={a}>which route applies to you</Link>.
      </p>
      <p className="font-body text-xs text-foreground-muted mt-4">
        For information only. Not a recommendation or ranking; no returns are shown. As a Mutual Fund Distributor, Anup Vatyani may be empanelled with some of these fund houses.
      </p>
    </GuidePage>
  );
};
