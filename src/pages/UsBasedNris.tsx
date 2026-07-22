import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle } from "lucide-react";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "GIFT City Funds for US-Based NRIs",
  "author": { "@type": "Person", "name": "Anup Vatyani" },
  "publisher": { "@type": "Organization", "name": "GIFT City Funds" },
  "mainEntityOfPage": "https://giftcityfunds.in/us-based-nris",
};

const stcg = [
  ["Up to $48,000", "12%"], ["Up to $103,000", "22%"], ["Up to $197,000", "24%"],
  ["Up to $250,000", "32%"], ["Up to $626,000", "35%"], ["Above $626,000", "37%"],
];
const ltcg = [["Up to $48,000", "0%"], ["Up to $533,000", "15%"], ["Above $533,000", "20%"]];

const UsBasedNris = () => (
  <>
    <SEO
      title="GIFT City Funds for US-Based NRIs — PFIC, Tax & What to Know"
      description="How GIFT City fund structures are taxed for US-based NRIs, including PFIC vs Non-PFIC status, US capital gains slabs, and K-1 reporting."
      canonical="https://giftcityfunds.in/us-based-nris"
      schema={articleSchema}
      breadcrumbs={[
        { name: "Home", url: "https://giftcityfunds.in/" },
        { name: "For US NRIs", url: "https://giftcityfunds.in/us-based-nris" },
      ]}
    />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "For US NRIs", url: "/us-based-nris" }]} />
      <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary mt-6 mb-4">GIFT City Funds for US-Based NRIs</h1>
      <p className="font-body text-lg text-foreground-muted mb-6">If you live in the United States, the way a fund is taxed can matter more than the fund itself. Here's what changes.</p>

      <div className="flex gap-3 bg-secondary/10 border border-secondary/30 p-4 rounded-lg mb-10">
        <AlertTriangle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
        <p className="font-body text-sm text-primary">
          <strong>Disclaimer.</strong> This page explains general tax concepts for orientation only. Anup Vatyani is a Mutual Fund Distributor, not a tax advisor. Always confirm your personal tax position with a qualified CA or US tax professional before investing.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="font-heading font-semibold text-2xl text-primary mb-3">Currency & Cost Mechanics</h2>
        <p className="font-body text-foreground-muted">GIFT City funds are bought and redeemed in US Dollars. The fund itself — not you — handles the INR/USD conversion, typically at institutional exchange rates rather than the retail rates a bank would charge an individual. Over time, that difference in currency conversion cost can add up meaningfully on a large investment. Most GIFT City structures also don't attract India's Goods & Services Tax (GST) on fund management charges, which does apply to many onshore Indian fund structures.</p>
      </section>

      <section className="mb-10">
        <h2 className="font-heading font-semibold text-2xl text-primary mb-3">Inbound vs Outbound, from a US Perspective</h2>
        <p className="font-body text-foreground-muted mb-3">The same inbound/outbound distinction applies here as elsewhere on this site: inbound structures bring foreign capital into Indian-focused strategies via the FPI/FDI routes, while outbound structures move capital into global markets via the LRS/OPI routes. Which direction is relevant to you depends on whether you're trying to access Indian markets from the US, or diversify further internationally.</p>
        <Link to="/funds-explained" className="text-secondary hover:underline inline-flex items-center">See the full Inbound vs Outbound breakdown <ArrowRight className="ml-1 h-4 w-4" /></Link>
      </section>

      <section className="mb-10">
        <h2 className="font-heading font-semibold text-2xl text-primary mb-3">PFIC vs Non-PFIC: the Single Biggest Factor</h2>
        <p className="font-body text-foreground-muted mb-3">The US government treats most foreign mutual funds, ETFs and pooled investment vehicles — including standard Indian mutual funds — as a Passive Foreign Investment Company (PFIC). PFIC status is generally unfavourable: gains can be taxed annually even before you've sold anything ("unrealised gains"), often at a high effective rate.</p>
        <p className="font-body text-foreground-muted">Certain GIFT City fund structures, by contrast, are structured to avoid PFIC classification (Non-PFIC status) — meaning they're taxed under ordinary US capital gains rules instead. This is often the single biggest reason a US-based NRI would consider a GIFT City structure over a standard Indian mutual fund.</p>
      </section>

      <section className="mb-10">
        <h2 className="font-heading font-semibold text-2xl text-primary mb-3">US Capital Gains Tax Slabs (for Orientation)</h2>
        <p className="italic text-xs text-foreground-muted mb-4">Confirm current IRS figures with your tax advisor — brackets are periodically revised.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-heading font-semibold text-primary mb-2">Short-Term</h3>
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-surface"><th className="text-left p-2 border border-border">Total Income</th><th className="text-left p-2 border border-border">Rate</th></tr></thead>
              <tbody>{stcg.map(([i, r]) => <tr key={i}><td className="p-2 border border-border">{i}</td><td className="p-2 border border-border">{r}</td></tr>)}</tbody>
            </table>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-primary mb-2">Long-Term</h3>
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-surface"><th className="text-left p-2 border border-border">Total Income</th><th className="text-left p-2 border border-border">Rate</th></tr></thead>
              <tbody>{ltcg.map(([i, r]) => <tr key={i}><td className="p-2 border border-border">{i}</td><td className="p-2 border border-border">{r}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
        <p className="font-body text-sm text-foreground-muted mt-3">Most US investors fall into the 15% long-term capital gains bracket.</p>
      </section>

      <section className="mb-10">
        <h2 className="font-heading font-semibold text-2xl text-primary mb-3">How the Tax Actually Gets Paid — AIF vs Mutual Fund Feeder</h2>
        <p className="font-body text-foreground-muted mb-3"><strong className="text-primary">AIF structures.</strong> The fund itself pays Indian tax on gains as they're booked (trade-to-trade), at Indian long/short-term capital gains rates. You receive a K-1-style annual statement showing what's been taxed in India, which you then use to calculate any additional US tax due after applying the India–US Double Taxation Avoidance Agreement (DTAA) — generally, you pay only the difference between the two countries' rates, not both in full.</p>
        <p className="font-body text-foreground-muted"><strong className="text-primary">Mutual Fund Feeder structures.</strong> Neither the fund nor the feeder pays tax in India. You receive the full amount (capital + gains) on redemption. Because the structure is Non-PFIC, you're still required to report and pay US tax annually on gains booked by the underlying fund manager — even though no tax was withheld in India.</p>
      </section>

      <section className="mb-10">
        <h2 className="font-heading font-semibold text-2xl text-primary mb-3">Documentation You'll Be Asked For</h2>
        <p className="font-body text-foreground-muted">Requirements vary by Fund Management Entity and by whether you're investing as an individual or an entity. Reach out to Anup for a current checklist.</p>
      </section>

      <div className="text-center pt-6 border-t border-border">
        <p className="font-body text-foreground-muted mb-4">None of this replaces a conversation with your CA. But if you'd like help understanding which structure and route makes sense to explore, Anup can walk you through the options.</p>
        <Button asChild variant="gold" size="lg"><Link to="/contact">Talk to Anup <ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
      </div>
    </div>
  </>
);

export default UsBasedNris;