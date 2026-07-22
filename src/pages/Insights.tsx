import { useState } from "react";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const seedArticles = [
  "GIFT City vs Direct Foreign Investment: What Actually Changes for an NRI",
  "How NRIs Can Invest via GIFT City: A Step-by-Step Overview",
  "PFIC Explained: Why It Matters for Every US-Based NRI Investor",
  "LRS, TCS and GIFT City: What Resident Indian Investors Should Know",
  "AIF vs PMS vs Mutual Fund FoF: Choosing a GIFT City Structure",
  "IFSCA vs SEBI: Who Actually Regulates Your GIFT City Fund",
  "GIFT City Fund vs NRE/NRO Investing: A Straight Comparison",
  "Ten Questions NRIs Actually Ask About GIFT City",
];

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
      title="Insights — GIFT City & IFSC Fund Articles"
      description="Ongoing articles on GIFT City funds, IFSC regulation, NRI investing and cross-border tax topics."
      canonical="https://giftcityfunds.in/insights"
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