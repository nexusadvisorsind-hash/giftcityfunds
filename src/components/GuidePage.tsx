import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OfficialSources, type SourceKey } from "@/components/OfficialSources";
import { AuthorByline } from "@/components/AuthorByline";

export interface Faq {
  q: string;
  a: string;
}

interface GuidePageProps {
  path: string;
  headline: string;
  seoTitle: string;
  description: string;
  crumb: string;
  datePublished: string;
  dateModified?: string;
  reviewed?: string;
  faqs?: Faq[];
  sources?: SourceKey[];
  /** Extra JSON-LD (e.g. HowTo, DefinedTermSet, WebApplication). */
  extraSchema?: object[];
  /** "Article" for guides, "WebPage" for tools. */
  kind?: "Article" | "WebPage";
  children: ReactNode;
}

export const h2 = "font-heading font-semibold text-2xl text-primary mt-12 mb-4 scroll-mt-24";
export const h3 = "font-heading font-semibold text-lg text-primary mt-6 mb-2";
export const p = "font-body text-foreground-muted leading-relaxed";
export const a = "text-secondary hover:underline font-medium";
export const ul = "list-disc pl-6 space-y-2 font-body text-foreground-muted leading-relaxed";
export const table = "w-full text-sm font-body border-collapse";
export const th = "text-left font-heading font-semibold text-primary bg-surface border border-border px-3 py-2 align-top";
export const td = "border border-border px-3 py-2 text-foreground-muted align-top";

/** The shared shell for every guide: SEO, breadcrumbs, byline, FAQs, sources, disclaimer. */
export const GuidePage = ({
  path,
  headline,
  seoTitle,
  description,
  crumb,
  datePublished,
  dateModified,
  reviewed = "Last reviewed October 2026",
  faqs,
  sources,
  extraSchema = [],
  kind = "Article",
  children,
}: GuidePageProps) => {
  const url = `https://giftcityfunds.in${path}`;
  const main =
    kind === "Article"
      ? { "@context": "https://schema.org", "@type": "Article", headline, description, mainEntityOfPage: url, datePublished, dateModified: dateModified ?? datePublished }
      : { "@context": "https://schema.org", "@type": "WebPage", name: headline, description, url, dateModified: dateModified ?? datePublished };
  const faqSchema = faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }
    : null;

  return (
    <>
      <SEO
        title={seoTitle}
        description={description}
        canonical={url}
        type={kind === "Article" ? "article" : "website"}
        schema={[main, ...(faqSchema ? [faqSchema] : []), ...extraSchema]}
        breadcrumbs={[
          { name: "Home", url: "https://giftcityfunds.in/" },
          { name: crumb, url },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: crumb, url: path }]} />
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary mt-6 mb-2">{headline}</h1>
        <AuthorByline dateText={reviewed} />

        {children}

        {faqs && faqs.length > 0 && (
          <>
            <h2 className={h2}>Common questions</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="bg-surface p-5 rounded-lg border border-border">
                  <h3 className="font-heading font-semibold text-primary mb-2">{f.q}</h3>
                  <p className="font-body text-sm text-foreground-muted leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {sources && sources.length > 0 && <OfficialSources items={sources} />}

        <div className="mt-10 rounded-2xl bg-ink text-white p-6 md:p-8">
          <p className="font-heading font-semibold text-xl mb-2">Have a question about how this works?</p>
          <p className="font-body text-slate-300 text-sm mb-4">
            Anup Vatyani explains GIFT City fund structures and the investment process in plain English. Educational conversation only, not personalised advice.
          </p>
          <Link to="/contact" className="inline-flex items-center rounded-xl bg-brass text-ink font-heading font-semibold px-5 py-2.5 hover:bg-brass-light">
            Talk to Anup
          </Link>
        </div>

        <p className="font-body text-sm italic text-foreground-muted mt-8">
          This page is educational and is not investment, tax or legal advice. Figures and rules are as understood at the date shown and can change; check the official sources and the scheme's offer documents. Investments are subject to market risks; read all scheme-related documents carefully.
        </p>
      </div>
    </>
  );
};
