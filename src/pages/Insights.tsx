import { useState } from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const seedArticles = [
  "How NRIs Can Invest via GIFT City: A Step-by-Step Overview",
  "LRS, TCS and GIFT City: What Resident Indian Investors Should Know",
  "AIF vs PMS vs Mutual Fund FoF: Choosing a GIFT City Structure",
  "IFSCA vs SEBI: Who Actually Regulates Your GIFT City Fund",
  "GIFT City Fund vs NRE/NRO Investing: A Straight Comparison",
  "GIFT City vs Direct Foreign Investment: What Actually Changes for an NRI",
  "Ten Questions NRIs Actually Ask About GIFT City",
];

const pficArticleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "PFIC Explained: Why It Matters for Every US-Based NRI Investor",
  "description": "A plain-English explanation of PFIC status, why it applies to many foreign funds, and why GIFT City fund structure matters for US-based NRIs and US persons.",
  "author": { "@type": "Person", "name": "Anup Vatyani" },
  "publisher": { "@type": "Organization", "name": "GIFT City Funds" },
  "mainEntityOfPage": "https://giftcityfunds.in/insights#pfic-explained",
  "datePublished": "2026-09-20",
};

const Insights = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("subscribe-newsletter", {
        body: { email: trimmed, source: "insights_page" },
      });
      if (error) throw error;
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
      title="Insights — GIFT City & IFSC Fund Articles (2026)"
      description="Ongoing articles on GIFT City funds, IFSC regulation, NRI investing and cross-border tax topics, including PFIC status explained for US-based NRIs."
      canonical="https://giftcityfunds.in/insights"
      schema={pficArticleSchema}
      breadcrumbs={[
        { name: "Home", url: "https://giftcityfunds.in/" },
        { name: "Insights", url: "https://giftcityfunds.in/insights" },
      ]}
    />
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Insights", url: "/insights" }]} />
      <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary mt-6 mb-4">Insights on GIFT City & IFSC Investing</h1>
      <p className="font-body text-lg text-foreground-muted mb-8">Ongoing, plain-English writing on the mechanics, regulation and tax treatment of GIFT City funds — updated as rules evolve.</p>

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
      </div>

      {/* Published article: PFIC Explained */}
      <article id="pfic-explained" className="mb-14 bg-background border border-border rounded-lg p-6 md:p-8">
        <div className="text-xs uppercase tracking-wider text-secondary mb-2">Published</div>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">
          PFIC Explained: Why It Matters for Every US-Based NRI Investor
        </h2>
        <div className="font-body text-foreground-muted space-y-4 leading-relaxed">
          <p>
            If you're a US citizen, green card holder, or otherwise a "US person" for tax purposes, one acronym should be on your radar before you invest in any foreign fund structure — including GIFT City funds: <strong className="text-primary">PFIC</strong>, short for Passive Foreign Investment Company.
          </p>
          <p>
            The US tax code treats most foreign pooled investment vehicles — mutual funds, ETFs, and many fund-of-fund structures organised outside the US — as PFICs by default. This isn't specific to GIFT City; it applies broadly to foreign funds. But because GIFT City funds are explicitly structured for international investors, including US-based NRIs, it's a question that comes up constantly.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">Why PFIC status matters</h3>
          <p>
            A fund with PFIC status triggers extra US tax compliance for the investor — typically annual Form 8621 filings for each PFIC holding, and tax treatment that can be considerably less favourable than a comparable US-domiciled fund, particularly under the default "excess distribution" regime. Two elections — Qualified Electing Fund (QEF) and Mark-to-Market — can sometimes improve this outcome, but both come with their own eligibility conditions, paperwork and timing requirements.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">Non-PFIC structures</h3>
          <p>
            Some GIFT City fund structures are specifically designed or documented to avoid PFIC classification, or to provide the annual information needed for a QEF election. This is exactly why "PFIC vs Non-PFIC status" should be one of the first questions a US-based NRI asks about any specific GIFT City fund — the answer materially changes what your ongoing US tax filing and liability actually looks like.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">What to actually do about it</h3>
          <p>
            This is genuinely one of the more technical corners of cross-border investing, and the right answer depends on your specific tax residency, the specific fund's structure, and your broader portfolio. Two practical steps: first, always ask the Fund Management Entity directly whether the fund is PFIC or Non-PFIC, and whether QEF information is provided annually. Second, involve a US tax professional experienced with PFIC reporting before you invest — not after.
          </p>
          <p>
            For more on how residency status shapes what you can invest in, see our{" "}
            <Link to="/us-based-nris" className="text-secondary hover:underline">
              guide for US-based NRIs
            </Link>
            , or{" "}
            <Link to="/contact" className="text-secondary hover:underline">
              talk to Anup
            </Link>{" "}
            about which GIFT City structures are typically documented as Non-PFIC or QEF-compliant.
          </p>
          <p className="text-sm italic pt-2">
            This article is educational only and is not tax or investment advice. PFIC rules are complex and fact-specific — always consult a qualified US tax professional about your own situation.
          </p>
        </div>
      </article>

      <h2 className="font-heading font-semibold text-2xl text-primary mb-4">Upcoming articles</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {seedArticles.map((title) => (
          <div key={title} className="bg-background border border-border p-5 rounded-lg">
            <div className="text-xs uppercase tracking-wider text-secondary mb-2">Coming soon</div>
            <h3 className="font-heading font-semibold text-primary">{title}</h3>
          </div>
        ))}
      </div>
    </div>
  </>
  );
};

export default Insights;
