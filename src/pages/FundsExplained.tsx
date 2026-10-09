import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OfficialSources } from "@/components/OfficialSources";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PageFaqs, type PageFaq } from "@/components/PageFaqs";
const PAGE_FAQS: PageFaq[] = [
  { q: "What are GIFT City VC funds?", a: "GIFT City venture capital funds are venture capital schemes registered with IFSCA. They invest in start-ups and early-stage companies in India and abroad and are open only to accredited or high-ticket investors." },
  { q: "What is an alternative investment fund in GIFT City?", a: "An alternative investment fund in GIFT City is a pooled fund for strategies outside conventional mutual funds, set up as a restricted scheme or venture capital scheme under IFSCA's fund management regulations." },
  { q: "What retail investment options are there in GIFT City?", a: "Retail investors can use retail schemes and feeder funds, USD deposits at IFSC Banking Units, and US stocks and ETFs through IFSC brokers. Restricted schemes, venture capital schemes and PMS have high minimums." },
  { q: "What is the minimum investment in a GIFT City AIF?", a: "Most GIFT City AIFs are restricted schemes, where the minimum is commonly USD 150,000 per investor; accredited investors may be exempt. Check the scheme's offer document for the current figure." },
  { q: "What is the minimum investment for GIFT City PMS?", a: "Portfolio management services in GIFT IFSC have a minimum of USD 75,000, reduced from USD 150,000 under the 2025 regulations." },
  { q: "What is a GIFT City retail scheme?", a: "A retail scheme is a GIFT City fund open to the general public, including NRIs and resident Indians. Only a Fund Management Entity registered for retail schemes can run one, and the scheme sets its own minimum, often a few thousand US Dollars." },
  { q: "What is a GIFT City restricted scheme?", a: "A restricted scheme is open only to accredited or high-ticket investors, commonly with a USD 150,000 minimum. Most GIFT City AIFs are restricted schemes." },
  { q: "What is a GIFT City feeder fund?", a: "A feeder fund puts most of its money into one other fund, such as an overseas fund or an Indian mutual fund scheme. It lets investors reach that fund in US Dollars through GIFT IFSC; its costs include the underlying fund's costs." },
];


const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Types of GIFT City Funds: How They Are Structured",
  "author": { "@type": "Person", "name": "Anup Vatyani" },
  "publisher": { "@type": "Organization", "name": "GIFT City Funds" },
  "mainEntityOfPage": "https://giftcityfunds.in/funds-explained",
};

const rows = [
  { s: "Mutual Fund FoF", what: "A feeder fund that channels your money into an underlying scheme", t: "From ~USD 500 for some funds", best: "Investors wanting fund-of-fund simplicity at a lower ticket size" },
  { s: "AIF (Alternative Investment Fund)", what: "A pooled vehicle for less standardised strategies (equity, credit, structured products)", t: "From ~$150,000 (some lower exceptions exist)", best: "Investors comfortable with higher tickets and less liquid strategies" },
  { s: "PMS (Portfolio Management Services)", what: "A professionally managed, individually held portfolio", t: "From ~$75,000", best: "Investors wanting a more customised, discretionary approach" },
  { s: "Retail Feeder Fund", what: "A lower-ticket fund designed for individual retail access", t: "From ~USD 500 for some funds", best: "Investors wanting simple exposure without a large minimum" },
];

const FundsExplained = () => (
  <>
    <SEO
      title="GIFT City Fund Types: Retail, Restricted, AIF & PMS (2026)"
      description="GIFT City fund types compared: retail schemes, restricted schemes (AIFs), venture capital schemes and PMS, with who can invest and minimum tickets."
      canonical="https://giftcityfunds.in/funds-explained"
      schema={articleSchema}
      breadcrumbs={[
        { name: "Home", url: "https://giftcityfunds.in/" },
        { name: "Funds Explained", url: "https://giftcityfunds.in/funds-explained" },
      ]}
    />
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Funds Explained", url: "/funds-explained" }]} />
      <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary mt-6 mb-6">Types of GIFT City Funds: How They Are Structured</h1>
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
              <th className="text-left p-3 border border-border">Typically used by</th>
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
      <p className="font-body text-foreground-muted mb-8">
        Each structure in depth: <Link to="/gift-city-aif" className="text-secondary hover:underline">GIFT City AIF</Link> · <Link to="/gift-city-pms" className="text-secondary hover:underline">GIFT City PMS</Link> · <Link to="/gift-city-feeder-funds" className="text-secondary hover:underline">feeder funds</Link> · <Link to="/gift-city-minimum-investment" className="text-secondary hover:underline">all minimum investment amounts</Link>.
      </p>
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

      <h2 className="font-heading font-semibold text-2xl text-primary mb-4 mt-10">IFSCA's legal categories: retail, restricted and venture capital schemes</h2>
      <p className="font-body text-foreground-muted mb-4">
        Behind the product names above, every GIFT City fund is registered under the IFSCA (Fund Management) Regulations, 2025 as one of a few scheme types. The type decides who may invest and the minimum ticket, and each is run by a matching category of Fund Management Entity (FME).
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-surface">
              <th scope="col" className="text-left p-3 border border-border">Scheme type</th>
              <th scope="col" className="text-left p-3 border border-border">Run by</th>
              <th scope="col" className="text-left p-3 border border-border">Who can invest</th>
              <th scope="col" className="text-left p-3 border border-border">Minimum per investor</th>
            </tr>
          </thead>
          <tbody className="text-foreground-muted">
            <tr className="bg-background">
              <th scope="row" className="text-left p-3 border border-border font-medium text-primary">Retail scheme (mutual funds, ETFs)</th>
              <td className="p-3 border border-border">Registered FME (Retail)</td>
              <td className="p-3 border border-border">Anyone eligible, including individual retail investors</td>
              <td className="p-3 border border-border">Set by each scheme, from USD 500 for some funds</td>
            </tr>
            <tr className="bg-background">
              <th scope="row" className="text-left p-3 border border-border font-medium text-primary">Restricted scheme (AIF Category I, II, III)</th>
              <td className="p-3 border border-border">Registered FME (Non-Retail)</td>
              <td className="p-3 border border-border">Accredited investors, or investors meeting the minimum</td>
              <td className="p-3 border border-border">Commonly USD 150,000</td>
            </tr>
            <tr className="bg-background">
              <th scope="row" className="text-left p-3 border border-border font-medium text-primary">Venture capital scheme</th>
              <td className="p-3 border border-border">Authorised FME</td>
              <td className="p-3 border border-border">By private placement, up to 50 investors; close-ended, at least 3 years</td>
              <td className="p-3 border border-border">As set by the scheme</td>
            </tr>
            <tr className="bg-background">
              <th scope="row" className="text-left p-3 border border-border font-medium text-primary">Portfolio management (PMS)</th>
              <td className="p-3 border border-border">Registered FME</td>
              <td className="p-3 border border-border">Individual portfolios, not a pooled scheme</td>
              <td className="p-3 border border-border">USD 75,000 (reduced from USD 150,000 in 2025)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="font-body text-sm text-foreground-muted mb-8">
        In practice: if you are an individual investing less than USD 75,000, you are looking at retail schemes. Restricted schemes and PMS are built for larger tickets. Sources:{" "}
        <a href="https://giftcity.dspim.com/knowledge-hub/types-of-gift-city-funds-a-guide-to-fund-categories-under-ifsca" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">DSP GIFT City knowledge hub</a>,{" "}
        <a href="https://www.business-standard.com/markets/news/ifsca-eases-compliance-for-fund-managers-in-gift-city-to-boost-investment-125022001195_1.html" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Business Standard on IFSCA's 2025 changes</a>.
      </p>

      <div className="bg-secondary/10 border border-secondary/30 p-6 rounded-lg mb-8">
        <h3 className="font-heading font-semibold text-primary mb-2">A quick word on tax</h3>
        <p className="font-body text-sm text-foreground-muted">
          Tax treatment differs meaningfully by structure, by direction, and by where you live — especially if you're a US-based NRI. We've broken that down separately.{" "}
          <Link to="/taxation" className="text-secondary hover:underline">See the Taxation page</Link> · <Link to="/us-based-nris" className="text-secondary hover:underline">See the US-Based NRI guide</Link>
        </p>
      </div>

      <section className="my-12 font-body text-foreground-muted leading-relaxed space-y-4">
        <h2 className="font-heading font-semibold text-2xl text-primary">Alternative investment funds in GIFT City vs SEBI Category I, II and III</h2>
        <p>In India, SEBI classifies AIFs as Category I (for example venture capital), Category II (for example private equity and private credit) and Category III (for example hedge-fund-style strategies). IFSCA does not use these categories. In GIFT City, an alternative investment fund is set up as a <strong className="text-primary">venture capital scheme</strong> or a <strong className="text-primary">restricted scheme</strong>, and the scheme type decides who may invest and the minimum.</p>
        <h2 className="font-heading font-semibold text-2xl text-primary">GIFT City investment minimum amount, at a glance</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr><th className="text-left font-heading text-primary bg-surface border border-border px-3 py-2">Product</th><th className="text-left font-heading text-primary bg-surface border border-border px-3 py-2">Typical minimum</th></tr></thead>
            <tbody>
              <tr><td className="border border-border px-3 py-2">Retail scheme / feeder fund</td><td className="border border-border px-3 py-2">Set by the scheme, often a few thousand USD</td></tr>
              <tr><td className="border border-border px-3 py-2">Restricted scheme (AIF)</td><td className="border border-border px-3 py-2">Commonly USD 150,000</td></tr>
              <tr><td className="border border-border px-3 py-2">Venture capital scheme</td><td className="border border-border px-3 py-2">High; for accredited or high-ticket investors</td></tr>
              <tr><td className="border border-border px-3 py-2">Portfolio management services</td><td className="border border-border px-3 py-2">USD 75,000</td></tr>
              <tr><td className="border border-border px-3 py-2">US stocks and ETFs via an IFSC broker</td><td className="border border-border px-3 py-2">Can be very small</td></tr>
              <tr><td className="border border-border px-3 py-2">USD fixed deposit at an IFSC Banking Unit</td><td className="border border-border px-3 py-2">Set by each bank</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <PageFaqs items={PAGE_FAQS} className="my-12" />

      <div className="text-center">
        <p className="font-body text-foreground-muted mb-4">Have a question about how these structures work? Ask Anup.</p>
        <Button asChild variant="gold" size="lg"><Link to="/contact">Talk to Anup <ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
      </div>
      <OfficialSources items={["ifsca", "ifscaDirectory", "rbiLrs"]} />
    </div>
  </>
);

export default FundsExplained;
