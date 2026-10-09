import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OfficialSources } from "@/components/OfficialSources";
import { PageFaqs, type PageFaq } from "@/components/PageFaqs";
const PAGE_FAQS: PageFaq[] = [
  { q: "What are GIFT City NRI mutual funds?", a: "These are GIFT City funds designed for NRIs: usually US Dollar retail schemes or feeder funds that invest in Indian markets (inbound) or global markets (outbound), bought directly from abroad without converting to rupees." },
  { q: "How does repatriation from GIFT City work?", a: "For NRIs, redemptions are paid in US Dollars to an overseas or foreign currency account, so there is no rupee repatriation step. Resident Indians must bring money back to India or reinvest it within the time RBI rules allow." },
  { q: "What is GIFT City outbound investment for resident Indians?", a: "It is investing abroad through a GIFT City fund or IFSC broker, using LRS. The fund invests in US or global markets; you hold it in dollars, within the USD 250,000 annual LRS limit." },
  { q: "GIFT City investment for NRIs: can NRIs invest?", a: "Yes. NRIs can invest in GIFT City funds directly in US Dollars from an overseas bank account, without LRS or TCS. Each scheme sets its own eligibility, and some exclude residents of certain countries such as the US or Canada." },
  { q: "Can foreign citizens invest in GIFT City funds?", a: "Yes, foreign citizens, including OCI cardholders, can invest in many GIFT City funds, subject to the fund's eligibility rules and KYC. US persons should check PFIC rules first." },
  { q: "Can resident Indians invest in GIFT City?", a: "Yes. Resident Indians invest under the Liberalised Remittance Scheme, up to USD 250,000 a financial year, with 20% TCS on remittances above ₹10 lakh a year that can be claimed back in the income tax return." },
];


const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Who Actually Invests in GIFT City Funds?",
  "author": { "@type": "Person", "name": "Anup Vatyani" },
  "publisher": { "@type": "Organization", "name": "GIFT City Funds" },
  "mainEntityOfPage": "https://giftcityfunds.in/who-its-for",
};

const WhoItsFor = () => (
  <>
    <SEO
      title="Who Can Invest in GIFT City Funds? NRI, OCI & Resident Guide"
      description="See how GIFT City fund investing works differently for NRIs, OCIs and resident Indian investors — eligibility, routes, and what to watch for."
      canonical="https://giftcityfunds.in/who-its-for"
      schema={articleSchema}
      breadcrumbs={[
        { name: "Home", url: "https://giftcityfunds.in/" },
        { name: "Who It's For", url: "https://giftcityfunds.in/who-its-for" },
      ]}
    />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Who It's For", url: "/who-its-for" }]} />
      <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary mt-6 mb-4">Who Can Invest in GIFT City Funds?</h1>
      <p className="font-body text-lg text-foreground-muted mb-8">Eligibility and mechanics differ depending on your residency status. Find the section that applies to you.</p>

      <nav aria-label="On this page" className="mb-8 font-body text-sm">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li><a href="#nri" className="text-secondary hover:underline">NRIs</a></li>
          <li><a href="#oci" className="text-secondary hover:underline">OCIs</a></li>
          <li><a href="#resident" className="text-secondary hover:underline">Resident Indians</a></li>
          <li><a href="#institutions" className="text-secondary hover:underline">Institutions</a></li>
        </ul>
      </nav>

      <h2 className="font-heading font-semibold text-2xl text-primary mb-4">At a glance</h2>
      <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto mb-10">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-surface">
              <th scope="col" className="text-left p-3 border border-border">Investor</th>
              <th scope="col" className="text-left p-3 border border-border">How the money moves</th>
              <th scope="col" className="text-left p-3 border border-border">Check first</th>
            </tr>
          </thead>
          <tbody className="text-foreground-muted">
            <tr className="bg-background">
              <th scope="row" className="text-left p-3 border border-border font-medium text-primary">NRI</th>
              <td className="p-3 border border-border">Directly, typically in USD, without the LRS process</td>
              <td className="p-3 border border-border">Documents for your country, minimum ticket, tax where you live</td>
            </tr>
            <tr className="bg-background">
              <th scope="row" className="text-left p-3 border border-border font-medium text-primary">OCI</th>
              <td className="p-3 border border-border">Broadly the same path as an NRI</td>
              <td className="p-3 border border-border">Any conditions the specific Fund Management Entity applies</td>
            </tr>
            <tr className="bg-background">
              <th scope="row" className="text-left p-3 border border-border font-medium text-primary">Resident Indian</th>
              <td className="p-3 border border-border">Through the Liberalised Remittance Scheme (LRS), into outbound structures</td>
              <td className="p-3 border border-border">The USD 250,000 annual LRS limit and TCS on remittances</td>
            </tr>
            <tr className="bg-background">
              <th scope="row" className="text-left p-3 border border-border font-medium text-primary">Institution</th>
              <td className="p-3 border border-border">Typically through inbound structures</td>
              <td className="p-3 border border-border">Entity documentation requirements</td>
            </tr>
          </tbody>
        </table>
      </div>

      <section id="nri" className="bg-surface p-6 rounded-lg border border-border font-body text-foreground-muted space-y-3 mb-6 scroll-mt-24">
        <h2 className="font-heading font-semibold text-2xl text-primary">Non-Resident Indians (NRIs)</h2>
          <p>As a Non-Resident Indian, you can invest directly in GIFT City funds — inbound or outbound — typically in USD, without routing through the standard LRS process that applies to resident Indians. This is one of the more direct advantages GIFT City offers NRIs over conventional NRE/NRO route investing.</p>
          <p className="italic"><strong>What to watch for:</strong> country-specific documentation requirements, minimum ticket sizes, and — if you're US-based — how the fund is taxed where you live.</p>
          <p>US-based? <Link to="/gift-city-funds-for-nri#us" className="text-secondary hover:underline">See the US section of the NRI guide</Link> Comparing routes? Read <Link to="/insights/gift-city-vs-nre-nro" className="text-secondary hover:underline">GIFT City fund vs NRE/NRO investing</Link>.</p>
        <p><Link to="/gift-city-funds-for-nri" className="inline-flex items-center rounded-lg bg-teal/15 px-3 py-2 font-medium text-primary hover:bg-teal/25">Read the full NRI guide, with every major country explained</Link></p>
      </section>
      <section id="oci" className="bg-surface p-6 rounded-lg border border-border font-body text-foreground-muted space-y-3 mb-6 scroll-mt-24">
        <h2 className="font-heading font-semibold text-2xl text-primary">Overseas Citizens of India (OCIs)</h2>
          <p>Overseas Citizens of India generally follow a similar eligibility path to NRIs for GIFT City fund investing, though specific Fund Management Entities may apply their own documentation or country-based conditions.</p>
          <p className="italic"><strong>What to watch for:</strong> confirm eligibility with the specific fund's FME, as conditions can vary.</p>
        <p><Link to="/gift-city-funds-for-oci" className="inline-flex items-center rounded-lg bg-teal/15 px-3 py-2 font-medium text-primary hover:bg-teal/25">Read the full OCI guide</Link></p>
      </section>
      <section id="resident" className="bg-surface p-6 rounded-lg border border-border font-body text-foreground-muted space-y-3 mb-6 scroll-mt-24">
        <h2 className="font-heading font-semibold text-2xl text-primary">Resident Indians</h2>
          <p>Resident Indians can invest in outbound GIFT City structures via the Liberalised Remittance Scheme (LRS), which currently allows remittance of up to USD 250,000 per person, per financial year, for this and other permitted purposes.</p>
          <p className="italic"><strong>What to watch for:</strong> LRS remittances above ₹10 lakh typically attract Tax Collected at Source (TCS) — this is adjustable against your final tax liability when filing returns, not an additional cost.</p>
          <p>Read more on the <Link to="/taxation" className="text-secondary hover:underline">Taxation page →</Link> and in <Link to="/insights/lrs-tcs-gift-city" className="text-secondary hover:underline">LRS, TCS and GIFT City</Link>.</p>
        <p><Link to="/gift-city-funds-for-resident-indians" className="inline-flex items-center rounded-lg bg-teal/15 px-3 py-2 font-medium text-primary hover:bg-teal/25">Read the full guide for resident Indians, with TCS calculator</Link></p>
      </section>

      <div id="institutions" className="bg-surface border border-border p-6 rounded-lg mb-6 scroll-mt-24">
        <h2 className="font-heading font-semibold text-2xl text-primary mb-2">Foreign Entities & Institutions</h2>
        <p className="font-body text-sm text-foreground-muted">Corporates, PSUs, banks, insurers, sovereign funds and other institutional entities can also access GIFT City funds, typically through inbound structures, subject to their own documentation requirements.</p>
      </div>

      <div className="bg-secondary/10 border border-secondary/30 p-6 rounded-lg">
        <p className="font-body text-sm text-primary">If you're an NRI based in the United States, GIFT City funds interact with US tax rules — like PFIC status — in ways that materially change the numbers.{" "}
          <Link to="/gift-city-funds-for-nri#us" className="text-secondary hover:underline">See the US section of the NRI guide</Link>
        </p>
      </div>

      <p className="font-body text-foreground-muted mt-8">
        Whichever group you are in, read the <Link to="/gift-city-funds-risks" className="text-secondary hover:underline">risks of GIFT City funds</Link> and how they differ from <Link to="/gift-city-funds-vs-mutual-funds" className="text-secondary hover:underline">regular Indian mutual funds</Link> before deciding.
      </p>

      <PageFaqs items={PAGE_FAQS} className="my-12" />

      <OfficialSources items={["ifsca", "ifscaDirectory", "rbiLrs"]} />
    </div>
  </>
);

export default WhoItsFor;