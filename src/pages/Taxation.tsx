import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OfficialSources } from "@/components/OfficialSources";
import { PageFaqs, type PageFaq } from "@/components/PageFaqs";
const PAGE_FAQS: PageFaq[] = [
  { q: "What is the GIFT City 10-year tax holiday?", a: "IFSC units can claim a 100% deduction of their business income for any 10 consecutive years out of 15 under Section 80LA. It benefits businesses and funds set up in GIFT IFSC, not individual investors directly." },
  { q: "What is the corporate tax rate in GIFT City?", a: "IFSC units pay normal Indian corporate tax on income not covered by the tax holiday, with Minimum Alternate Tax at a reduced 9% where MAT applies. Units that opt for the new tax regime do not pay MAT." },
  { q: "Is there an income tax exemption in GIFT City?", a: "There are targeted exemptions: the 10-year holiday for IFSC units, Section 10(4D) for specified funds, and capital gains exemptions for non-residents on specified securities traded on IFSC exchanges. India's tax treaties (DTAA) also apply." },
  { q: "What are the GST rules in GIFT City?", a: "GIFT IFSC sits in a Special Economic Zone. GST is not charged on specified services received in, within or from the IFSC, which keeps costs down for IFSC units." },
  { q: "What is GIFT City taxation for NRIs?", a: "NRIs are taxed in India only on income that India can tax, and many GIFT City products are designed so that non-residents bear little or no Indian tax. NRIs are also taxed in their country of residence; see the rules by country." },
  { q: "What are the GIFT City tax benefits?", a: "GIFT IFSC offers tax concessions mainly at the level of the fund and IFSC units, such as Section 10(4D) for specified funds and deductions for IFSC units. Whether you pay less tax as an investor depends on the fund's structure and your residence." },
  { q: "What are the GIFT City tax benefits for NRIs?", a: "For NRIs, the main practical benefits are investing in US Dollars without LRS or TCS and the fund-level concessions above. NRIs are also taxed in their country of residence, so the overall outcome depends on that country's rules and the tax treaty." },
  { q: "How are GIFT City mutual funds taxed for resident Indians?", a: "Resident Indians are taxed on their worldwide income, so gains and income from GIFT City funds are taxable in India according to the fund's structure, and the holding must be shown in Schedule FA. A chartered accountant should confirm the treatment for a specific fund." },
  { q: "What is Section 10(4D) for GIFT City funds?", a: "Section 10(4D) of the Income-tax Act, 1961 exempts certain income of specified funds located in an IFSC, subject to conditions. It applies to the fund, not automatically to every investor." },
  { q: "Is there capital gains tax on GIFT City funds?", a: "Capital gains can arise at the fund level or for you, depending on the structure, and rates follow Indian law and the law where you live. Check the fund's tax note and take advice before investing." },
];


const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Regulation and Taxation of GIFT City Funds",
  "author": { "@type": "Person", "name": "Anup Vatyani" },
  "publisher": { "@type": "Organization", "name": "GIFT City Funds" },
  "mainEntityOfPage": "https://giftcityfunds.in/taxation",
  "dateModified": "2026-10-08",
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
      <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary mt-6 mb-2">Regulation and Taxation of GIFT City Funds</h1>
      <p className="font-body text-sm text-foreground-muted mb-6">Last updated: October 2026</p>

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
        <p>US tax law treats foreign funds very differently from Indian tax law — most notably through PFIC classification. If you're a US taxpayer, read the dedicated guide before going further. <Link to="/gift-city-funds-for-nri#us" className="text-secondary hover:underline">GIFT City Funds for US-Based NRIs →</Link></p>
      </section>

      <section className="mb-10 font-body text-foreground-muted space-y-4">
        <h2 className="font-heading font-semibold text-2xl text-primary mb-3">The three questions that decide your tax</h2>
        <p>There is no single tax rate for "GIFT City funds". The outcome for any investor comes from three answers:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong className="text-primary">Where are you tax resident?</strong> A resident Indian, an NRI in Dubai and a US citizen holding the same fund can each owe different tax, in different countries.</li>
          <li><strong className="text-primary">What is the fund's structure?</strong> A Mutual Fund FoF, a Retail Feeder Fund, an AIF and a PMS portfolio are taxed differently, and an AIF's category matters too. See <Link to="/funds-explained" className="text-secondary hover:underline">fund structures</Link>.</li>
          <li><strong className="text-primary">Which way does the money go?</strong> An inbound fund invests in India; an outbound fund invests abroad. The India-side rules and the paperwork differ.</li>
        </ol>
      </section>

      <section className="mb-10 font-body text-foreground-muted space-y-4">
        <h2 className="font-heading font-semibold text-2xl text-primary mb-3">India's tax and your country's tax</h2>
        <p>
          India taxes income that arises in India, and your country of residence usually taxes your worldwide income. Where both can tax the same income, a Double Taxation Avoidance Agreement (DTAA) between India and that country decides who taxes what and how credit is given. India has such treaties with the countries most NRIs live in, including the UAE, the UK, the US, Canada and Singapore.
        </p>
        <p>
          To use a treaty, you normally need a <strong className="text-primary">Tax Residency Certificate (TRC)</strong> from your country of residence. Fund houses often ask for it during onboarding, so obtain it before you invest rather than after.
        </p>
        <p>
          Country-specific points, such as the US PFIC rules or the UK's offshore fund rules, are covered in{" "}
          <Link to="/gift-city-funds-for-nri" className="text-secondary hover:underline">GIFT City funds for NRIs, country by country</Link>.
        </p>
      </section>

      <section className="mb-10 font-body text-foreground-muted space-y-4">
        <h2 className="font-heading font-semibold text-2xl text-primary mb-3">What to ask before you invest</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Is tax deducted inside the fund, and at what stage — on income, on gains, or on redemption?</li>
          <li>Does the fund issue the statements your home country needs for your tax return?</li>
          <li>For US persons: is the fund documented as Non-PFIC, or does it provide QEF information?</li>
          <li>For UK residents: does the fund have UK reporting fund status?</li>
          <li>For resident Indians: how will TCS on your LRS remittance be shown in your tax records?</li>
        </ul>
        <p>Take the answers to a qualified CA or tax adviser in your country of residence. They, not the fund, are responsible for your return.</p>
      </section>

      <section className="space-y-4 font-body text-foreground-muted leading-relaxed">
        <h2 className="font-heading font-semibold text-2xl text-primary">Tax benefits for IFSC units and funds in GIFT City</h2>
        <p>Most of GIFT City's headline tax benefits apply to businesses and funds set up in the IFSC, not directly to individual investors. As summarised in a tax note published on IFSCA's website:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr><th className="text-left font-heading text-primary bg-surface border border-border px-3 py-2">Benefit</th><th className="text-left font-heading text-primary bg-surface border border-border px-3 py-2">What it means</th></tr></thead>
            <tbody>
              <tr><td className="border border-border px-3 py-2">10-year tax holiday (Section 80LA)</td><td className="border border-border px-3 py-2">100% deduction of business income for any 10 consecutive years out of 15</td></tr>
              <tr><td className="border border-border px-3 py-2">Corporate tax and MAT</td><td className="border border-border px-3 py-2">Minimum Alternate Tax at a reduced 9% where MAT applies; not applicable if the unit opts for the new tax regime</td></tr>
              <tr><td className="border border-border px-3 py-2">Funds (Section 10(4D))</td><td className="border border-border px-3 py-2">Exemption for certain income of specified funds; start-of-operations date extended to 31 March 2030</td></tr>
              <tr><td className="border border-border px-3 py-2">Relocated funds</td><td className="border border-border px-3 py-2">Moving an offshore fund's assets into GIFT IFSC is tax-neutral, subject to conditions</td></tr>
              <tr><td className="border border-border px-3 py-2">Non-residents on IFSC exchanges</td><td className="border border-border px-3 py-2">Capital gains on specified securities exempt; 10% withholding on dividends; 9% on interest from IFSC-listed bonds</td></tr>
              <tr><td className="border border-border px-3 py-2">GST</td><td className="border border-border px-3 py-2">No GST on services received in, within or from the IFSC in specified cases</td></tr>
              <tr><td className="border border-border px-3 py-2">Stamp duty, STT and CTT</td><td className="border border-border px-3 py-2">None on transactions on GIFT IFSC exchanges</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="font-heading font-semibold text-lg text-primary">Is GIFT City a tax haven?</h3>
        <p>No. GIFT IFSC is part of India, with an Indian regulator, Indian tax law and India's tax treaties. It offers targeted incentives to attract financial business, but investors are still taxed under India's rules and those of the country where they live.</p>
      </section>

      <PageFaqs items={PAGE_FAQS} className="my-12" />

      <div className="bg-secondary/10 border border-secondary/30 p-6 rounded-lg">
        <p className="font-body text-sm text-primary"><strong>Disclaimer.</strong> Tax rules referenced above are general, current as of publication, and subject to change by the relevant authorities. This is not tax advice — consult a qualified CA or tax professional in your country of residence.</p>
      </div>
      <OfficialSources items={["ifsca", "incomeTax", "rbiLrs", "irs8621"]} />
    </div>
  </>
);

export default Taxation;