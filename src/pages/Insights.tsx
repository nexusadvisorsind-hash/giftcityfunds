import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { articles, getArticle } from "./insights/articles";
import { formatDate } from "@/lib/formatDate";
import { trackEvent } from "@/lib/analytics";

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

      <h2 className="font-heading font-semibold text-2xl text-primary mb-6">All articles</h2>
      <ul className="grid md:grid-cols-2 gap-6">
        {articles.map((a) => (
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
