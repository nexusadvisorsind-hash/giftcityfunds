import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OfficialSources } from "@/components/OfficialSources";

const URL = "https://giftcityfunds.in/gift-city-funds-nri-tax-by-country";
const HEADLINE = "GIFT City Funds for NRIs by Country: UAE, UK, US, Canada and Singapore";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": HEADLINE,
  "mainEntityOfPage": URL,
  "datePublished": "2026-10-08",
  "dateModified": "2026-10-08",
};

const countries = [
  {
    id: "uae",
    name: "UAE and the Gulf",
    summary: "The UAE does not levy income tax on individuals, so for most UAE-resident NRIs the question is mainly the India side.",
    points: [
      "The UAE government states that it does not levy income tax on individuals. That is why the India-side treatment of the fund and any tax deducted inside it matter most.",
      "India and the UAE have a tax treaty. A UAE Tax Residency Certificate is usually needed to rely on it.",
      "Other Gulf countries have their own rules; check them separately.",
    ],
  },
  {
    id: "uk",
    name: "United Kingdom",
    summary: "Two UK rules matter: the fund's reporting status, and whether the new foreign income and gains regime applies to you.",
    points: [
      "Under HMRC's offshore fund rules, a gain on a fund without UK \"reporting fund\" status is normally taxed as income, not as a capital gain. A gain on a reporting fund is taxed as a capital gain. Ask whether the GIFT City fund has reporting status.",
      "On 6 April 2025 the remittance basis was replaced by the 4-year foreign income and gains (FIG) regime. It is available in your first four years of UK tax residence after at least ten years as a non-UK resident, and lets you claim relief from UK tax on eligible foreign income and gains.",
      "India and the UK have a tax treaty for income taxed in both countries.",
    ],
  },
  {
    id: "us",
    name: "United States",
    summary: "PFIC status is the single biggest factor for US citizens, green card holders and other US tax residents.",
    points: [
      "Most foreign pooled funds are treated as Passive Foreign Investment Companies (PFICs) under US tax law, which brings annual Form 8621 reporting and can make the tax outcome considerably worse.",
      "Ask whether the fund is documented as Non-PFIC or provides the information needed for a QEF election.",
      "US persons usually also have foreign account and asset reporting duties. Our full guide covers this in detail.",
    ],
    more: { to: "/us-based-nris", label: "GIFT City funds for US-based NRIs" },
  },
  {
    id: "canada",
    name: "Canada",
    summary: "Canadian residents are taxed on worldwide income and may need to report foreign holdings.",
    points: [
      "If the total cost of your specified foreign property is more than CAD 100,000 at any time in the year, you generally need to file Form T1135 (Foreign Income Verification Statement) with the Canada Revenue Agency.",
      "Income and gains from a GIFT City fund are reportable in Canada; India and Canada have a tax treaty for credit on tax paid in India.",
      "Canada has its own rules for interests in offshore investment funds. Take advice before investing.",
    ],
  },
  {
    id: "singapore",
    name: "Singapore",
    summary: "For resident individuals, foreign-sourced income received in Singapore is generally not taxed.",
    points: [
      "Foreign-sourced income received in Singapore by resident individuals is generally exempt from tax, except where it is received through a partnership in Singapore.",
      "India and Singapore have a tax treaty, and a Singapore Certificate of Residence is usually needed to rely on it.",
      "If you trade frequently, Singapore may treat gains as business income; confirm your position with IRAS or an adviser.",
    ],
  },
];

const h2 = "font-heading font-semibold text-2xl text-primary mb-3";
const link = "text-secondary hover:underline";

const NriByCountry = () => (
  <>
    <SEO
      title="GIFT City Funds for NRIs by Country: UAE, UK, US, Canada"
      description="How GIFT City funds look from the UAE, UK, US, Canada and Singapore: the home-country rules NRIs should check, with links to each tax authority."
      canonical={URL}
      type="article"
      schema={articleSchema}
      breadcrumbs={[
        { name: "Home", url: "https://giftcityfunds.in/" },
        { name: "NRIs by Country", url: URL },
      ]}
    />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "NRIs by Country", url: "/gift-city-funds-nri-tax-by-country" }]} />
      <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary mt-6 mb-2">{HEADLINE}</h1>
      <p className="font-body text-sm text-foreground-muted mb-6">
        By <Link to="/about" className={link}>Anup Vatyani</Link>, AMFI-registered MFD (ARN 106715) · Last reviewed October 2026
      </p>

      <div className="font-body text-foreground-muted leading-relaxed space-y-4 mb-8">
        <p>
          <strong className="text-primary">The short answer.</strong> The same GIFT City fund can be a sensible holding for an NRI in Dubai and an expensive one for an NRI in New York. The difference comes from the tax rules of the country you live in. This page sets out the main rule to check for each of the five countries most of our readers live in, with a link to the authority that sets it.
        </p>
        <p>
          It is a starting point, not tax advice. Rules change, and personal circumstances matter. Confirm your position with a tax professional in your country before investing.
        </p>
      </div>

      <nav aria-label="Countries on this page" className="mb-10">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 font-body text-sm">
          {countries.map((c) => (
            <li key={c.id}>
              <a href={`#${c.id}`} className={link}>{c.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <h2 className={h2}>At a glance</h2>
      <div className="overflow-x-auto mb-12">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-surface">
              <th scope="col" className="text-left p-3 border border-border">Country</th>
              <th scope="col" className="text-left p-3 border border-border">Main point to check</th>
            </tr>
          </thead>
          <tbody className="text-foreground-muted">
            {countries.map((c) => (
              <tr key={c.id} className="bg-background">
                <th scope="row" className="text-left p-3 border border-border font-medium text-primary">{c.name}</th>
                <td className="p-3 border border-border">{c.summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {countries.map((c) => (
        <section key={c.id} id={c.id} className="mb-10 scroll-mt-24">
          <h2 className={h2}>{c.name}</h2>
          <ul className="list-disc pl-6 space-y-2 font-body text-foreground-muted leading-relaxed">
            {c.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
          {c.more && (
            <p className="font-body mt-3">
              <Link to={c.more.to} className={link}>{c.more.label} →</Link>
            </p>
          )}
        </section>
      ))}

      <section className="mb-10 font-body text-foreground-muted leading-relaxed space-y-3">
        <h2 className={h2}>What applies wherever you live</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>India's tax rules for the fund still apply. See <Link to="/taxation" className={link}>Regulation and Taxation</Link>.</li>
          <li>Get a Tax Residency Certificate from your country before you invest; fund houses often ask for it.</li>
          <li>Check what statements the fund will send you, and whether they meet your country's reporting needs.</li>
          <li>Currency movements affect your result in your home currency. See the <Link to="/gift-city-funds-risks" className={link}>risks of GIFT City funds</Link>.</li>
        </ul>
      </section>

      <OfficialSources items={["uaeTax", "hmrcOffshore", "ukFig", "irs8621", "craT1135", "irasOverseas", "incomeTax"]} />

      <p className="font-body text-sm italic text-foreground-muted mt-8">
        This page is educational and is not tax or investment advice. Investments are subject to market risks; read all scheme-related documents carefully.
      </p>
    </div>
  </>
);

export default NriByCountry;
