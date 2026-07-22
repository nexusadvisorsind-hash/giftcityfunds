import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How GIFT City Funds Are Structured",
  "author": { "@type": "Person", "name": "Anup Vatyani" },
  "publisher": { "@type": "Organization", "name": "GIFT City Funds" },
  "mainEntityOfPage": "https://giftcityfunds.in/funds-explained",
};

const rows = [
  { s: "Mutual Fund FoF", what: "A feeder fund that channels your money into an underlying scheme", t: "From ~$5,000", best: "Investors wanting fund-of-fund simplicity at a lower ticket size" },
  { s: "AIF (Alternative Investment Fund)", what: "A pooled vehicle for less standardised strategies (equity, credit, structured products)", t: "From ~$150,000 (some lower exceptions exist)", best: "Investors comfortable with higher tickets and less liquid strategies" },
  { s: "PMS (Portfolio Management Services)", what: "A professionally managed, individually held portfolio", t: "From ~$75,000", best: "Investors wanting a more customised, discretionary approach" },
  { s: "Retail Feeder Fund", what: "A lower-ticket fund designed for individual retail access", t: "From ~$5,000", best: "Investors wanting simple exposure without a large minimum" },
];

const FundsExplained = () => (
  <>
    <SEO
      title="GIFT City Fund Structures: MF FoF, AIF, PMS & More"
      description="Understand the difference between GIFT City Mutual Fund FoFs, AIFs, PMS structures and Retail Feeder Funds — explained in plain English."
      canonical="https://giftcityfunds.in/funds-explained"
      schema={articleSchema}
      breadcrumbs={[
        { name: "Home", url: "https://giftcityfunds.in/" },
        { name: "Funds Explained", url: "https://giftcityfunds.in/funds-explained" },
      ]}
    />
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Funds Explained", url: "/funds-explained" }]} />
      <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary mt-6 mb-6">How GIFT City Funds Are Structured</h1>
      <p className="font-body text-lg text-foreground-muted mb-8">
        Not all GIFT City funds work the same way. Before comparing anything, it helps to understand the four broad structures you'll come across — and the two directions money can flow between India and the rest of the world.
      </p>

      <h2 className="font-heading font-semibold text-2xl text-primary mb-4">The four structures, compared</h2>
      <div className="overflow-x-auto mb-4">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-surface">
              <th className="text-left p-3 border border-border">Structure</th>
              <th className="text-left p-3 border border-border">What it is</th>
              <th className="text-left p-3 border border-border">Typical entry ticket</th>
              <th className="text-left p-3 border border-border">Best suited for</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.s} className="bg-background">
                <td className="p-3 border border-border font-medium text-primary">{r.s}</td>
                <td className="p-3 border border-border text-foreground-muted">{r.what}</td>
                <td className="p-3 border border-border text-foreground-muted">{r.t}</td>
                <td className="p-3 border border-border text-foreground-muted">{r.best}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs italic text-foreground-muted mb-10">Ticket sizes are indicative and vary by Fund Management Entity — always confirm current minimums directly before assuming a structure is out of reach.</p>

      <h2 className="font-heading font-semibold text-2xl text-primary mb-4">Inbound vs Outbound: which way is the money moving?</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="p-6 bg-surface rounded-lg border border-border">
          <h3 className="font-heading font-semibold text-primary mb-2">INBOUND</h3>
          <p className="font-body text-sm text-foreground-muted">Money from outside India (NRIs, OCIs, foreign institutions) flowing into India — via the Foreign Portfolio Investment (FPI) or Foreign Direct Investment (FDI) routes — usually to access Indian equities, Indian mutual funds, or India-focused strategies.</p>
        </div>
        <div className="p-6 bg-surface rounded-lg border border-border">
          <h3 className="font-heading font-semibold text-primary mb-2">OUTBOUND</h3>
          <p className="font-body text-sm text-foreground-muted">Money from India (via the Liberalised Remittance Scheme, LRS) or global sources flowing out into international markets — global equities, ETFs, bonds, alternative strategies, or structured products, via the Overseas Portfolio Investment (OPI) route.</p>
        </div>
      </div>

      <div className="bg-secondary/10 border border-secondary/30 p-6 rounded-lg mb-8">
        <h3 className="font-heading font-semibold text-primary mb-2">A quick word on tax</h3>
        <p className="font-body text-sm text-foreground-muted">
          Tax treatment differs meaningfully by structure, by direction, and by where you live — especially if you're a US-based NRI. We've broken that down separately.{" "}
          <Link to="/taxation" className="text-secondary hover:underline">See the Taxation page</Link> · <Link to="/us-based-nris" className="text-secondary hover:underline">See the US-Based NRI guide</Link>
        </p>
      </div>

      <div className="text-center">
        <p className="font-body text-foreground-muted mb-4">Not sure which structure fits your situation? Talk it through with Anup.</p>
        <Button asChild variant="gold" size="lg"><Link to="/contact">Talk to Anup <ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
      </div>
    </div>
  </>
);

export default FundsExplained;