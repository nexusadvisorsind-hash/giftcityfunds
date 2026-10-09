import { Helmet } from "react-helmet-async";
import type { ReactNode } from "react";

export interface PageFaq {
  q: string;
  /** Plain-text answer, also used for the FAQPage structured data. */
  a: string;
  /** Optional richer answer (links) shown on the page instead of `a`. */
  rich?: ReactNode;
}

/**
 * A "Common questions" block with matching FAQPage structured data.
 * Questions are phrased the way people search, so each is a heading.
 */
export const PageFaqs = ({ items, title = "Common questions", className = "" }: { items: PageFaq[]; title?: string; className?: string }) => (
  <section aria-labelledby="page-faqs" className={className}>
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        })}
      </script>
    </Helmet>
    <h2 id="page-faqs" className="font-heading font-semibold text-2xl text-primary mb-4">{title}</h2>
    <div className="space-y-3">
      {items.map((f) => (
        <div key={f.q} className="bg-surface p-5 rounded-lg border border-border">
          <h3 className="font-heading font-semibold text-primary mb-2">{f.q}</h3>
          <div className="font-body text-sm text-foreground-muted leading-relaxed">{f.rich ?? f.a}</div>
        </div>
      ))}
    </div>
  </section>
);

export default PageFaqs;
