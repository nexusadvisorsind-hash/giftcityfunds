import { Link } from "react-router-dom";
import { GuidePage, p, a, type Faq } from "@/components/GuidePage";
import { NEWS, NEWS_UPDATED, formatNewsDate } from "@/data/news";

const faqs: Faq[] = [
  { q: "What is the latest news on GIFT City?", a: `The most recent items here are ${NEWS[0].title.toLowerCase()} (${formatNewsDate(NEWS[0].date)}) and ${NEWS[1].title.toLowerCase()} (${formatNewsDate(NEWS[1].date)}). This page was last updated on ${NEWS_UPDATED}.` },
  { q: "How often is this page updated?", a: "Regularly, as GIFT City developments that matter to investors happen. Each item is dated, summarised in plain English and linked to its original source." },
  { q: "Where do the news items come from?", a: "Regulators' releases and established financial publications. Every item links to the source; read it for the full details." },
];

const TAG_STYLE: Record<string, string> = {
  Funds: "bg-teal/15 text-primary",
  Regulation: "bg-brass/20 text-primary",
  Markets: "bg-surface text-primary border border-border",
  Banking: "bg-surface text-primary border border-border",
  Tax: "bg-brass/20 text-primary",
  Platforms: "bg-teal/15 text-primary",
  Insurance: "bg-teal/15 text-primary",
};

const GiftCityNews = () => (
  <GuidePage
    path="/gift-city-news"
    headline="GIFT City News: Latest Updates for Investors"
    seoTitle="GIFT City News Today: Latest Updates for NRIs & Investors"
    description="Latest GIFT City news for investors: new funds, IFSCA decisions, banking and market updates, each dated, in plain English and linked to its source."
    crumb="GIFT City News"
    datePublished="2026-10-20"
    reviewed={`Updated ${NEWS_UPDATED}`}
    faqs={faqs}
    sources={["ifsca", "ifscaDirectory"]}
    extraSchema={[
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "GIFT City news for investors",
        itemListOrder: "https://schema.org/ItemListOrderDescending",
        itemListElement: NEWS.map((n, i) => ({ "@type": "ListItem", position: i + 1, name: n.title, url: n.source.url })),
      },
    ]}
  >
    <p className={p}>
      <strong className="text-primary">The short version.</strong> The GIFT City developments that matter to NRIs and Indian investors, newest first. Each is summarised in plain English and linked to its original source. For changes to the rules themselves, see <Link to="/gift-city-rules-updates" className={a}>GIFT City rule changes</Link>.
    </p>

    <ol className="mt-8 space-y-4 list-none p-0">
      {NEWS.map((n) => (
        <li key={n.date + n.title}>
          <article className="rounded-xl border border-border bg-surface p-5 md:p-6">
            <div className="flex flex-wrap items-center gap-3 font-body text-sm">
              <time dateTime={n.date} className="font-semibold text-primary">{formatNewsDate(n.date)}</time>
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${TAG_STYLE[n.tag]}`}>{n.tag}</span>
            </div>
            <h2 className="mt-2 font-heading font-semibold text-xl text-primary">{n.title}</h2>
            <p className="mt-2 font-body text-foreground-muted leading-relaxed">{n.summary}</p>
            <p className="mt-3 font-body text-sm flex flex-wrap gap-x-5 gap-y-1">
              <a href={n.source.url} target="_blank" rel="noopener noreferrer" className={a}>Source: {n.source.label}</a>
              {n.more && <Link to={n.more[0]} className={a}>Guide: {n.more[1]}</Link>}
            </p>
          </article>
        </li>
      ))}
    </ol>
    <p className="font-body text-xs text-foreground-muted mt-6">
      News summaries for information only. Mention of a fund, company or platform is not a recommendation. Read the original source and the scheme documents.
    </p>
  </GuidePage>
);

export default GiftCityNews;
