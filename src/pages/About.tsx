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
  "identifier": { "@type": "PropertyValue", "propertyID": "AMFI ARN", "value": "106715" },
  "knowsAbout": ["GIFT City", "IFSC fund structures", "Mutual funds", "Alternative Investment Funds", "NRI investing"],
  "address": { "@type": "PostalAddress", "addressLocality": "Ahmedabad", "addressRegion": "Gujarat", "addressCountry": "IN" },
  "worksFor": { "@type": "Organization", "name": "GIFT City Funds" },
};

const About = () => (
  <>
    <SEO
      title="About Anup Vatyani — MFD ARN 106715 | GIFT City Funds"
      description="Anup Vatyani, AMFI-registered Mutual Fund Distributor (ARN 106715), curates GIFT City Funds, an educational guide to IFSC investing."
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
        <p>This platform is curated by him to provide accurate, educational resources on GIFT City and IFSC structures. It does not offer personalized investment or advisory services.</p>
        <p>He started this site because the questions NRIs, OCIs and resident Indians ask about GIFT City funds are often the same — who regulates them, how the money moves, what a US or UK tax return will make of them — and good plain-English answers were hard to find. Each guide here is written to be read before a conversation with any fund house, so that investors arrive knowing what to ask.</p>
        <h2 className="font-heading font-semibold text-2xl text-primary pt-4">How the content is prepared</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Rules and figures are taken from official sources — IFSCA, RBI, the Income Tax Department and, for other countries, their tax authorities — and each guide links to them.</li>
          <li>Every guide shows when it was published or last reviewed, and is revisited when IFSCA or tax rules change.</li>
          <li>The site describes structures and processes. It does not rank or recommend funds, and it does not give personalised investment or tax advice.</li>
        </ul>
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
        <p className="font-body text-sm text-foreground-muted mt-3">
          Verify the registration: search ARN 106715 on AMFI's{" "}
          <a href="https://www.amfiindia.com/locate-distributor" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
            Locate a Mutual Fund Distributor
          </a>{" "}
          page.
        </p>
      </div>

      <blockquote className="my-10 border-l-4 border-secondary pl-6 italic font-heading text-xl text-primary">
        "Understand the structure first. The decision gets easier once you do."
      </blockquote>

      <p className="font-body text-sm text-foreground-muted mb-6">Anup Vatyani — AMFI-registered Mutual Fund Distributor (ARN 106715) | Educational content only | No personalised advice</p>

      <Button asChild variant="gold" size="lg"><Link to="/contact">Talk to Anup <ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
    </div>
  </>
);

export default About;