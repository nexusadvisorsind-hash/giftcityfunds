import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OfficialSources } from "@/components/OfficialSources";
import { AuthorByline } from "@/components/AuthorByline";

const URL = "https://giftcityfunds.in/gift-city-funds-risks";
const HEADLINE = "Risks of GIFT City Funds: What to Know Before You Invest";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": HEADLINE,
  "mainEntityOfPage": URL,
  "datePublished": "2026-10-06",
  "dateModified": "2026-10-06",
};

const risks = [
  { t: "Market risk", d: "A GIFT City fund holds shares, bonds or other funds, and its value rises and falls with them. Registration in the IFSC does not protect you from a falling market. Returns are not guaranteed." },
  { t: "Currency risk", d: "Most GIFT City funds are in US Dollars. If your spending is in rupees, your result depends on the exchange rate as well as on the fund. A stronger rupee reduces the rupee value of a dollar investment; a weaker rupee increases it." },
  { t: "Liquidity and exit terms", d: "Some structures, particularly AIFs, have lock-ins, notice periods or exit loads. Redemption can take longer than with a domestic open-ended mutual fund. Read the exit terms before you invest, not when you need the money." },
  { t: "High minimum investment", d: "Entry tickets are far larger than for domestic mutual funds, which can concentrate a lot of your money in one fund. A large minimum is not a reason to invest more than suits your overall portfolio." },
  { t: "Tax complexity", d: "Tax depends on the fund structure, the direction of the fund and your country of residence. US-based investors face PFIC rules that can change the outcome sharply. Tax rules also change over time." },
  { t: "Regulatory change", d: "The IFSC framework is still developing. IFSCA revises its regulations, and rules on remittances and tax collection are set by other authorities. A change can affect eligibility, costs or reporting." },
  { t: "Limited track record", d: "Many GIFT City funds were launched recently. There may be only a short history to judge the fund or the Fund Management Entity's IFSC operations on." },
  { t: "Costs", d: "Management fees, operating expenses, exit loads and bank charges on international transfers all reduce your return. Feeder funds also bear the costs of the fund they invest in." },
];

const faqs = [
  { q: "Are GIFT City funds safe?", a: "GIFT City funds are regulated by IFSCA, and their Fund Management Entities must be registered. Regulation governs how a fund is run and disclosed. It does not guarantee returns or protect against market losses, so safety depends on the specific fund, its manager and what it holds." },
  { q: "Can I lose money in a GIFT City fund?", a: "Yes. These are market-linked investments. You can lose part of your capital through market falls, currency movements or costs." },
  { q: "How can I check that a fund manager is genuine?", a: "Look the Fund Management Entity up in the IFSCA Directory of regulated entities, and read the fund's offer document for its registration details." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
};

const h2 = "font-heading font-semibold text-2xl text-primary mt-12 mb-4";
const link = "text-secondary hover:underline";

const Risks = () => (
  <>
    <SEO
      title="Risks of GIFT City Funds: Are They Safe? (2026 Guide)"
      description="The main risks of GIFT City funds explained plainly: market, currency, liquidity, high minimums, tax and regulatory change, and how to check a fund manager."
      canonical={URL}
      type="article"
      schema={[articleSchema, faqSchema]}
      breadcrumbs={[
        { name: "Home", url: "https://giftcityfunds.in/" },
        { name: "Risks of GIFT City Funds", url: URL },
      ]}
    />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Risks of GIFT City Funds", url: "/gift-city-funds-risks" }]} />
      <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary mt-6 mb-2">{HEADLINE}</h1>
      <AuthorByline dateText="Last reviewed October 2026" />

      <div className="font-body text-foreground-muted leading-relaxed space-y-4">
        <p>
          <strong className="text-primary">The short answer.</strong> GIFT City funds are regulated, but they are not risk-free. They carry the same market risk as any fund, plus risks that come from investing in foreign currency, through a newer framework, at a higher minimum. Knowing these before you invest is more useful than any list of benefits.
        </p>
      </div>

      <h2 className={h2}>The eight risks to understand</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {risks.map((r, i) => (
          <div key={r.t} className="bg-surface p-5 rounded-lg border border-border">
            <h3 className="font-heading font-semibold text-primary mb-2">{i + 1}. {r.t}</h3>
            <p className="font-body text-sm text-foreground-muted leading-relaxed">{r.d}</p>
          </div>
        ))}
      </div>

      <h2 className={h2}>Questions to ask before you invest</h2>
      <ul className="list-disc pl-6 space-y-2 font-body text-foreground-muted leading-relaxed">
        <li>Is the Fund Management Entity registered with IFSCA, and under which category?</li>
        <li>What does the fund actually hold, and in which markets?</li>
        <li>What are the lock-in, notice period and exit load?</li>
        <li>What are the total annual costs, including those of any underlying fund?</li>
        <li>How will this be taxed in my country of residence, and what must I report?</li>
        <li>How much of my total portfolio would this one investment be?</li>
      </ul>
      <p className="font-body text-foreground-muted leading-relaxed mt-4">
        For how the structures differ, see <Link to="/funds-explained" className={link}>GIFT City fund categories</Link>. For tax, see <Link to="/taxation" className={link}>Regulation and Taxation</Link>. To compare with rupee funds, see <Link to="/gift-city-funds-vs-mutual-funds" className={link}>GIFT City funds vs regular mutual funds</Link>.
      </p>

      <h2 className={h2}>Common questions</h2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="bg-surface p-5 rounded-lg border border-border">
            <h3 className="font-heading font-semibold text-primary mb-2">{f.q}</h3>
            <p className="font-body text-sm text-foreground-muted">{f.a}</p>
          </div>
        ))}
      </div>

      <OfficialSources items={["ifsca", "ifscaDirectory", "rbiLrs", "irs8621"]} />

      <p className="font-body text-sm italic text-foreground-muted mt-8">
        This page is educational and is not investment or tax advice. Investments are subject to market risks; read all scheme-related documents carefully.
      </p>
    </div>
  </>
);

export default Risks;
