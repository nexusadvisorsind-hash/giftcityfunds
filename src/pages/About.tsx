import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Anup Vatyani",
  "jobTitle": "AMFI-Registered Mutual Fund Distributor (ARN 106715)",
  "url": "https://giftcityfunds.in/about",
  "sameAs": ["https://www.linkedin.com/in/anup-vatyani-081b4142"],
  "worksFor": { "@type": "Organization", "name": "GIFT City Funds" },
};

const About = () => (
  <>
    <SEO
      title="About Anup Vatyani — MFD ARN 106715 | GIFT City Funds"
      description="Anup Vatyani, AMFI-registered Mutual Fund Distributor (ARN 106715), curates GIFT City Funds — an independent educational resource on IFSC and GIFT City investing."
      canonical="https://giftcityfunds.in/about"
      schema={personSchema}
      breadcrumbs={[
        { name: "Home", url: "https://giftcityfunds.in/" },
        { name: "About", url: "https://giftcityfunds.in/about" },
      ]}
    />
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }]} />
      <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary mt-6 mb-6">About the Contributor</h1>
      <div className="font-body text-foreground-muted space-y-4">
        <p>Anup Vatyani has over 22 years of experience in the banking and financial services industry. An ex-banker with a decade of experience as a Mutual Fund Distributor (AMFI ARN 106715), he brings deep domain expertise in financial products, regulatory frameworks, and investor education.</p>
        <p>This platform is curated by him to provide accurate, independent, and educational resources on GIFT City and IFSC structures. It does not offer personalized investment or advisory services.</p>
      </div>

      <div className="mt-8 bg-surface border border-border p-6 rounded-lg">
        <h2 className="font-heading font-semibold text-primary mb-3">Credentials</h2>
        <ul className="font-body text-sm text-foreground-muted space-y-1 list-disc pl-5">
          <li>22+ years in banking & financial services</li>
          <li>Ex-banker</li>
          <li>AMFI-registered Mutual Fund Distributor (ARN 106715)</li>
          <li>Decade of MFD experience</li>
          <li>Focus area: GIFT City / IFSC fund structures, regulatory frameworks, investor education</li>
        </ul>
        <a
          href="https://www.linkedin.com/in/anup-vatyani-081b4142"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 font-body text-secondary hover:underline"
        >
          Connect with Anup on LinkedIn
        </a>
      </div>

      <blockquote className="my-10 border-l-4 border-secondary pl-6 italic font-heading text-xl text-primary">
        "Understand the structure first. The decision gets easier once you do."
      </blockquote>

      <p className="font-body text-sm text-foreground-muted mb-6">Author — Anup Vatyani (MFD ARN 106715) | Informational Content Only | No Personalized Advice.</p>

      <Button asChild variant="gold" size="lg"><Link to="/contact">Talk to Anup <ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
    </div>
  </>
);

export default About;