import { useEffect, useState } from "react";
import { Users, Layers, Scale, Landmark } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { articles, getArticle } from "./insights/articles";
import { formatDate } from "@/lib/formatDate";
import { trackEvent } from "@/lib/analytics";

// The Insights hub groups every guide, tool and article into four topics.
const CLUSTERS: { id: string; title: string; blurb: string; icon: typeof Users; accent: string; badge: string; links: [string, string, string?][] }[] = [
  {
    id: "investors", title: "NRI, OCI and resident guides", blurb: "What applies to you, depending on where you live and your citizenship.", icon: Users, accent: "border-t-teal", badge: "bg-teal",
    links: [
      ["/gift-city-funds-for-nri", "GIFT City funds for NRIs, country by country", "Guide"],
      ["/gift-city-funds-for-oci", "GIFT City funds for OCIs", "Guide"],
      ["/gift-city-funds-for-resident-indians", "GIFT City funds for resident Indians", "Guide"],
      ["/how-to-invest", "How to invest, step by step", "Guide"],
      ["/gift-city-route-checker", "Which route applies to you?", "Tool"],
      ["/insights/pfic-explained", "PFIC explained for US persons", "Article"],
      ["/insights/returning-to-india-gift-city-investments", "Returning to India", "Article"],
      ["/insights/gift-city-vs-nre-nro", "GIFT City vs NRE/NRO", "Article"],
      ["/insights/ten-questions-nris-ask", "Ten questions NRIs ask", "Article"],
    ],
  },
  {
    id: "funds", title: "Fund types and minimums", blurb: "AIFs, PMS, feeder funds and how they compare with Indian mutual funds.", icon: Layers, accent: "border-t-brass", badge: "bg-brass",
    links: [
      ["/funds-explained", "Types of GIFT City funds", "Guide"],
      ["/gift-city-fund-list", "GIFT City fund list", "Guide"],
      ["/gift-city-aif", "GIFT City AIF", "Guide"],
      ["/gift-city-pms", "GIFT City PMS", "Guide"],
      ["/gift-city-feeder-funds", "Feeder funds vs direct FPI", "Guide"],
      ["/gift-city-minimum-investment", "Minimum investment and limits", "Guide"],
      ["/insights/aif-vs-pms-vs-fof", "AIF vs PMS vs mutual fund FoF", "Article"],
      ["/gift-city-sip", "SIP in GIFT City funds", "Guide"],
      ["/gift-city-funds-vs-mutual-funds", "GIFT City funds vs mutual funds", "Guide"],
      ["/gift-city-vs-international-mutual-funds", "vs international mutual funds", "Guide"],
      ["/gift-city-funds-pros-and-cons", "Pros and cons", "Guide"],
      ["/gift-city-funds-risks", "Risks", "Guide"],
      ["/gift-city-family-office-fpi", "Family offices, FPIs and VC funds", "Guide"],
    ],
  },
  {
    id: "tax", title: "Tax and regulation", blurb: "LRS, TCS, Indian tax rules and who regulates GIFT City.", icon: Scale, accent: "border-t-ink", badge: "bg-indigo-300",
    links: [
      ["/taxation", "Regulation and taxation", "Guide"],
      ["/insights/lrs-tcs-gift-city", "LRS and TCS, with calculator", "Tool"],
      ["/what-is-ifsca", "What is IFSCA?", "Guide"],
      ["/insights/ifsca-vs-sebi", "IFSCA vs SEBI", "Article"],
      ["/what-is-gift-city", "What is GIFT City and IFSC?", "Guide"],
      ["/gift-city-vs-singapore-dubai", "GIFT City vs Singapore and Dubai", "Guide"],
      ["/gift-city-glossary", "Glossary", "Guide"],
      ["/faqs", "FAQs", "Guide"],
    ],
  },
  {
    id: "banking", title: "Banking and markets", blurb: "Dollar accounts and deposits, US stocks, ETFs and the GIFT City exchanges.", icon: Landmark, accent: "border-t-teal-light", badge: "bg-teal-light",
    links: [
      ["/insights/how-to-open-gift-city-bank-account", "Open a GIFT City bank account", "Article"],
      ["/insights/gift-city-fd-vs-nre-fcnr", "GIFT City FDs vs NRE and FCNR", "Article"],
      ["/gift-city-us-stocks-etfs", "GIFT City ETFs and US stocks", "Guide"],
      ["/insights/gift-city-vs-direct-foreign", "GIFT City vs investing directly abroad", "Article"],
      ["/gift-city-markets-gift-nifty", "GIFT Nifty and the GIFT City exchanges", "Guide"],
      ["/gift-city-banks-and-business-setup", "Banks and business setup", "Guide"],
      ["/gift-city-guide", "GIFT City guide: location, living, working", "Guide"],
    ],
  },
];

const insightsSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "GIFT City Funds Insights",
  "url": "https://giftcityfunds.in/insights",
  "blogPost": articles.map((a) => ({
    "@type": "BlogPosting",
    "headline": a.title,
    "description": a.description,
    "url": `https://giftcityfunds.in/insights/${a.slug}`,
    "datePublished": a.datePublished,
    "author": { "@type": "Person", "name": "Anup Vatyani", "url": "https://giftcityfunds.in/about" },
  })),
};

const Insights = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string>("all");
  const q = query.trim().toLowerCase();
  const matches = (text: string) => !q || q.split(/\s+/).every((w) => text.toLowerCase().includes(w));
  const visibleClusters = CLUSTERS
    .filter((c) => tag === "all" || tag === c.id || ["Guide", "Tool", "Article"].includes(tag))
    .map((c) => ({ ...c, links: c.links.filter(([, label, kind]) => matches(label) && (!["Guide", "Tool", "Article"].includes(tag) || kind === tag)) }))
    .filter((c) => c.links.length > 0);
  const visibleArticles = articles.filter((a) => matches(`${a.title} ${a.description}`) && (tag === "all" || tag === "Article" || CLUSTERS.find((c) => c.id === tag)?.links.some(([to]) => to === `/insights/${a.slug}`)));
  const TAGS: [string, string][] = [["all", "All"], ...CLUSTERS.map((c) => [c.id, c.title] as [string, string]), ["Guide", "Guides"], ["Tool", "Tools"], ["Article", "Articles"]];
  const { hash } = useLocation();
  const navigate = useNavigate();

  // Articles used to live on this page as #anchors; send old links to the article page.
  useEffect(() => {
    const slug = hash.replace(/^#/, "");
    if (getArticle(slug)) navigate(`/insights/${slug}`, { replace: true });
  }, [hash, navigate]);

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      // Loaded on submit so the backend client is not in every visitor's first download.
      const { supabase } = await import("@/integrations/supabase/client");
      const { error } = await supabase.functions.invoke("subscribe-newsletter", {
        body: { email: trimmed, source: "insights_page" },
      });
      if (error) throw error;
      trackEvent("newsletter_signup", { source: "insights_page" });
      toast.success("Subscribed!", { description: "You'll get new GIFT City articles in your inbox." });
      setEmail("");
    } catch (err) {
      console.error(err);
      toast.error("Subscription failed", { description: "Please try again in a moment." });
    } finally {
      setLoading(false);
    }
  }

  return (
  <>
    <SEO
      title="Insights — GIFT City & IFSC Fund Articles for NRIs (2026)"
      description="Articles on GIFT City funds, IFSCA regulation, NRI investing, LRS/TCS rules, PFIC status and how GIFT City compares with NRE/NRO investing."
      canonical="https://giftcityfunds.in/insights"
      schema={insightsSchema}
      breadcrumbs={[
        { name: "Home", url: "https://giftcityfunds.in/" },
        { name: "Insights", url: "https://giftcityfunds.in/insights" },
      ]}
    />
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Insights", url: "/insights" }]} />
      <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary mt-6 mb-4">Insights on GIFT City & IFSC Investing</h1>
      <p className="font-body text-lg text-foreground-muted mb-8">Plain-English writing on the mechanics, regulation and tax treatment of GIFT City funds — for NRIs, OCIs and Resident Indians, updated as rules evolve.</p>

      <div className="bg-surface border border-border p-6 rounded-lg mb-12">
        <h2 className="font-heading font-semibold text-primary mb-2">Get new GIFT City articles by email</h2>
        <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubscribe}>
          <Input
            type="email"
            placeholder="you@example.com"
            aria-label="Email address"
            className="flex-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" variant="gold" disabled={loading}>
            {loading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
        <p className="font-body text-xs text-foreground-muted mt-3">
          By subscribing you agree to receive occasional emails about new articles. We use your email address only for this,
          and you can unsubscribe at any time by replying "unsubscribe" or writing to info@giftcityfunds.in. See our{" "}
          <Link to="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</Link>.
        </p>
      </div>

      <div className="mb-8 rounded-2xl border border-border bg-surface p-4 md:p-5">
        <label htmlFor="insights-search" className="font-heading font-semibold text-primary">Search guides and articles</label>
        <input
          id="insights-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Try PFIC, TCS, AIF, UAE, minimum…"
          className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 font-body text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
        />
        <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Filter by topic or type">
          {TAGS.map(([id, label]) => (
            <button
              key={id}
              type="button"
              aria-pressed={tag === id}
              onClick={() => setTag(id)}
              className={`rounded-full border px-3 py-1 font-body text-sm ${tag === id ? "border-teal bg-teal/15 text-primary font-medium" : "border-border bg-background text-foreground-muted hover:border-teal"}`}
            >
              {label}
            </button>
          ))}
        </div>
        <p className="mt-2 font-body text-xs text-foreground-muted" aria-live="polite">
          {(() => { const n = visibleClusters.reduce((t, c) => t + c.links.length, 0); return n === 1 ? "1 result" : `${n} results`; })()}
        </p>
      </div>

      <h2 className="font-heading font-semibold text-2xl text-primary mb-2">Browse by topic</h2>
      <p className="font-body text-foreground-muted mb-6">Every guide, tool and article, grouped into four topics.</p>
      <div className="grid md:grid-cols-2 gap-5 mb-14">
        {visibleClusters.length === 0 && <p className="font-body text-foreground-muted">Nothing matches. Try a shorter word, or <Link to="/faqs" className="text-secondary hover:underline">browse the FAQs</Link>.</p>}
        {visibleClusters.map((c) => (
          <section key={c.title} aria-labelledby={`cluster-${c.id}`} className={`rounded-2xl border-t-4 ${c.accent} border-x border-b border-border bg-background p-5 md:p-6`}>
            <div className="flex items-center gap-3 mb-1">
              <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${c.badge}`}><c.icon className="h-5 w-5 text-ink" aria-hidden="true" /></span>
              <h3 id={`cluster-${c.id}`} className="font-heading font-semibold text-xl text-primary">{c.title}</h3>
            </div>
            <p className="font-body text-sm text-foreground-muted mb-4">{c.blurb}</p>
            <ul className="space-y-1.5 list-none p-0">
              {c.links.map(([to, label, kind]) => (
                <li key={to}>
                  <Link to={to} className="group flex items-baseline justify-between gap-3 rounded-lg px-2 py-1.5 font-body text-primary hover:bg-surface">
                    <span className="group-hover:underline">{label}</span>
                    {kind && <span className="shrink-0 rounded-full bg-surface px-2 py-0.5 text-xs text-foreground-muted">{kind}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <h2 className="font-heading font-semibold text-2xl text-primary mb-6">All articles, newest first</h2>
      <ul className="grid md:grid-cols-2 gap-6">
        {visibleArticles.map((a) => (
          <li key={a.slug} className="bg-background border border-border rounded-lg p-6 flex flex-col">
            <time dateTime={a.datePublished} className="text-xs uppercase tracking-wider text-secondary mb-2">
              {formatDate(a.datePublished)}
            </time>
            <h3 className="font-heading font-bold text-xl text-primary mb-3">
              <Link to={`/insights/${a.slug}`} className="hover:underline">
                {a.title}
              </Link>
            </h3>
            <p className="font-body text-foreground-muted leading-relaxed mb-4 flex-1">{a.description}</p>
            <Link to={`/insights/${a.slug}`} className="font-body text-secondary hover:underline" aria-label={`Read: ${a.title}`}>
              Read the article
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </>
  );
};

export default Insights;
