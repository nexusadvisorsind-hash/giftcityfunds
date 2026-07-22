import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Regulation and Taxation of GIFT City Funds",
  "author": { "@type": "Person", "name": "Anup Vatyani" },
  "publisher": { "@type": "Organization", "name": "GIFT City Funds" },
  "mainEntityOfPage": "https://giftcityfunds.in/taxation",
};

const rows = [
  ["Capital gains — equity-oriented mutual fund units", "Exempt"],
  ["Capital gains — listed equity", "Taxed at fund level: ~20% short-term / ~12.5% long-term*"],
  ["Interest income", "~10%*"],
  ["Dividend income", "~10%*"],
  ["GST on management/performance fees", "Not applicable"],
];

const Taxation = () => (
  <>
    <SEO
      title="GIFT City Fund Taxation & Regulatory Framework Explained"
      description="How GIFT City funds are regulated by IFSCA, and how Indian tax rules — Section 10(4D), LRS and TCS — apply to investors."
      canonical="https://giftcityfunds.in/taxation"
      schema={articleSchema}
      breadcrumbs={[
        { name: "Home", url: "https://giftcityfunds.in/" },
        { name: "Taxation", url: "https://giftcityfunds.in/taxation" },
      ]}
    />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Taxation", url: "/taxation" }]} />
      <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary mt-6 mb-6">Regulation and Taxation of GIFT City Funds</h1>

      <section className="mb-10 space-y-4 font-body text-foreground-muted">
        <p><strong className="text-primary">Regulatory framework.</strong> GIFT City funds sit under the IFSCA (International Financial Services Centres Authority), India's unified regulator for the IFSC. Fund Management Entities (FMEs) must be registered with IFSCA to operate, and different fund categories (Retail, Category I/II/III AIF, etc.) carry different regulatory conditions around investor eligibility, disclosure and structure.</p>
      </section>

      <section className="mb-10">
        <h2 className="font-heading font-semibold text-2xl text-primary mb-4">India-side tax treatment (general reference)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-surface"><th className="text-left p-3 border border-border">Income type</th><th className="text-left p-3 border border-border">Typical treatment (IFSC Cat III AIF)</th></tr></thead>
            <tbody>{rows.map(([a, b]) => <tr key={a}><td className="p-3 border border-border">{a}</td><td className="p-3 border border-border">{b}</td></tr>)}</tbody>
          </table>
        </div>
        <p className="italic text-xs text-foreground-muted mt-3">*Rates reference Section 10(4D) of the Income-tax Act, 1961 for specified funds meeting prescribed conditions, and are subject to change. Confirm current rates with your tax advisor.</p>
      </section>

      <section className="mb-10 font-body text-foreground-muted">
        <h2 className="font-heading font-semibold text-2xl text-primary mb-3">For resident Indian investors: LRS & TCS</h2>
        <p>Resident investors accessing outbound GIFT City structures do so via the Liberalised Remittance Scheme (LRS), capped at USD 250,000 per person per financial year. Remittances above ₹10 lakh in a financial year attract 20% Tax Collected at Source (TCS) — this isn't an extra cost, but an advance tax you can claim back or adjust against your total tax liability when filing your return.</p>
      </section>

      <section className="mb-10 font-body text-foreground-muted">
        <h2 className="font-heading font-semibold text-2xl text-primary mb-3">US-based? It's a different picture.</h2>
        <p>US tax law treats foreign funds very differently from Indian tax law — most notably through PFIC classification. If you're a US taxpayer, read the dedicated guide before going further. <Link to="/us-based-nris" className="text-secondary hover:underline">GIFT City Funds for US-Based NRIs →</Link></p>
      </section>

      <div className="bg-secondary/10 border border-secondary/30 p-6 rounded-lg">
        <p className="font-body text-sm text-primary"><strong>Disclaimer.</strong> Tax rules referenced above are general, current as of publication, and subject to change by the relevant authorities. This is not tax advice — consult a qualified CA or tax professional in your country of residence.</p>
      </div>
    </div>
  </>
);

export default Taxation;