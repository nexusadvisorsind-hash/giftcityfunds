import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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
      title="Is a GIFT City Fund Right for You? NRI, OCI & Resident Guide"
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
      <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary mt-6 mb-4">Who Actually Invests in GIFT City Funds?</h1>
      <p className="font-body text-lg text-foreground-muted mb-8">Eligibility and mechanics differ depending on your residency status. Pick the one that applies to you.</p>

      <Tabs defaultValue="nri" className="mb-10">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="nri">NRI</TabsTrigger>
          <TabsTrigger value="oci">OCI</TabsTrigger>
          <TabsTrigger value="resident">Resident Indian</TabsTrigger>
        </TabsList>
        <TabsContent value="nri" className="bg-surface p-6 rounded-lg border border-border font-body text-foreground-muted space-y-3">
          <p>As a Non-Resident Indian, you can invest directly in GIFT City funds — inbound or outbound — typically in USD, without routing through the standard LRS process that applies to resident Indians. This is one of the more direct advantages GIFT City offers NRIs over conventional NRE/NRO route investing.</p>
          <p className="italic"><strong>What to watch for:</strong> country-specific documentation requirements, minimum ticket sizes, and — if you're US-based — how the fund is taxed where you live.</p>
          <p>US-based? <Link to="/us-based-nris" className="text-secondary hover:underline">See the dedicated tax guide →</Link></p>
        </TabsContent>
        <TabsContent value="oci" className="bg-surface p-6 rounded-lg border border-border font-body text-foreground-muted space-y-3">
          <p>Overseas Citizens of India generally follow a similar eligibility path to NRIs for GIFT City fund investing, though specific Fund Management Entities may apply their own documentation or country-based conditions.</p>
          <p className="italic"><strong>What to watch for:</strong> confirm eligibility with the specific fund's FME, as conditions can vary.</p>
        </TabsContent>
        <TabsContent value="resident" className="bg-surface p-6 rounded-lg border border-border font-body text-foreground-muted space-y-3">
          <p>Resident Indians can invest in outbound GIFT City structures via the Liberalised Remittance Scheme (LRS), which currently allows remittance of up to USD 250,000 per person, per financial year, for this and other permitted purposes.</p>
          <p className="italic"><strong>What to watch for:</strong> LRS remittances above ₹10 lakh typically attract Tax Collected at Source (TCS) — this is adjustable against your final tax liability when filing returns, not an additional cost.</p>
          <p>Read more on the <Link to="/taxation" className="text-secondary hover:underline">Taxation page →</Link></p>
        </TabsContent>
      </Tabs>

      <div className="bg-surface border border-border p-6 rounded-lg mb-6">
        <h3 className="font-heading font-semibold text-primary mb-2">Foreign Entities & Institutions</h3>
        <p className="font-body text-sm text-foreground-muted">Corporates, PSUs, banks, insurers, sovereign funds and other institutional entities can also access GIFT City funds, typically through inbound structures, subject to their own documentation requirements.</p>
      </div>

      <div className="bg-secondary/10 border border-secondary/30 p-6 rounded-lg">
        <p className="font-body text-sm text-primary">If you're an NRI based in the United States, GIFT City funds interact with US tax rules — like PFIC status — in ways that materially change the numbers.{" "}
          <Link to="/us-based-nris" className="text-secondary hover:underline">See the US-Based NRI guide →</Link>
        </p>
      </div>
    </div>
  </>
);

export default WhoItsFor;