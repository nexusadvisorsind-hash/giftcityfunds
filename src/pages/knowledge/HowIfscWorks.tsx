import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArrowLeft } from "lucide-react";

const HowIfscWorks = () => {
  return (
    <>
      <SEO
        title="How IFSC Works | Understanding India's International Financial Services Centre"
        description="Complete guide to IFSC operations, regulatory framework, and benefits for investors. Learn how India's International Financial Services Centre enables global investment access."
        canonical="https://giftcityfunds.in/knowledge/how-ifsc-works"
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "How the IFSC Framework Works",
          "description": "Educational overview of how IFSCA regulates GIFT City's International Financial Services Centre.",
          "author": { "@type": "Person", "name": "Anup Vatyani", "url": "https://giftcityfunds.in/team/anup-vatyani" },
          "publisher": { "@type": "Organization", "name": "GIFT City Funds", "url": "https://giftcityfunds.in" },
          "mainEntityOfPage": "https://giftcityfunds.in/knowledge/how-ifsc-works"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://giftcityfunds.in/" },
          { name: "Resources", url: "https://giftcityfunds.in/resources" },
          { name: "How IFSC Works", url: "https://giftcityfunds.in/knowledge/how-ifsc-works" }
        ]}
      />
      
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <Breadcrumbs items={[
            { name: "Home", url: "/" },
            { name: "Resources", url: "/resources" },
            { name: "How IFSC Works", url: "/knowledge/how-ifsc-works" }
          ]} />

          <article className="mt-8">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
              How IFSC Works: Understanding India's International Financial Services Centre
            </h1>

            <div className="prose prose-lg max-w-none text-foreground-muted">
              <p className="lead text-xl mb-6">
                The International Financial Services Centre (IFSC) in GIFT City is India's first globally integrated financial zone. It was established to provide a regulatory ecosystem similar to international hubs like Singapore or Dubai.
              </p>

              <p>
                The IFSC operates under the International Financial Services Centres Authority Act, 2019, which consolidates regulatory oversight from SEBI, RBI, IRDAI, and PFRDA under one body — IFSCA.
              </p>

              <h2 className="font-heading font-semibold text-2xl text-primary mt-8 mb-4">
                Core Functions of IFSC
              </h2>
              
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Hosts global financial institutions, banks, insurers, brokers, and fund managers.</li>
                <li>Enables cross-border financial transactions in freely convertible currencies.</li>
                <li>Facilitates global fund management, aircraft and ship leasing, fintech, and bullion trading.</li>
                <li>Applies global accounting, KYC, and anti-money laundering (AML) standards.</li>
              </ul>

              <h2 className="font-heading font-semibold text-2xl text-primary mt-8 mb-4">
                Investor Significance
              </h2>

              <p>
                For NRIs and global investors, the IFSC allows India-linked investments without the regulatory barriers of the domestic system. All participants operate under IFSCA supervision, ensuring transparency and investor protection.
              </p>

              <div className="bg-muted p-6 rounded-lg my-8">
                <p className="text-sm">
                  <strong>Key Takeaway:</strong> IFSC represents India's ambition to become a global financial hub by offering world-class infrastructure and regulatory framework while maintaining the familiarity and legal certainty of Indian jurisdiction.
                </p>
              </div>

              {/* Author Block */}
              <footer className="article-author mt-12 pt-6 border-t border-border">
                <p className="text-sm">
                  <strong>Written by <Link to="/team/anup-vatyani" className="text-primary hover:underline" rel="author">Anup Vatyani</Link></strong> — MFD (ARN: 106715). Dedicated to simplifying GIFT City fund investing for NRIs & Indian residents through education-first guidance.
                </p>
              </footer>

              {/* References Block */}
              <section className="article-references mt-8" aria-labelledby="refs-heading">
                <h3 id="refs-heading" className="font-heading font-semibold text-xl text-primary mb-4">
                  References
                </h3>
                <ul className="list-none space-y-2">
                  <li>
                    <a href="https://www.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      SEBI — Official Website
                    </a>
                  </li>
                  <li>
                    <a href="https://www.amfiindia.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      AMFI — Mutual Fund Information Portal
                    </a>
                  </li>
                  <li>
                    <a href="https://ifsca.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      IFSC Authority — Regulatory Details
                    </a>
                  </li>
                </ul>
              </section>

              {/* FAQ Block */}
              <section className="article-qa mt-12" aria-labelledby="qa-heading">
                <h3 id="qa-heading" className="font-heading font-semibold text-2xl text-primary mb-6">
                  Frequently Asked Questions (FAQs)
                </h3>

                <h4 className="font-heading font-semibold text-lg text-primary mt-6 mb-2">
                  1. Is GIFT City the only IFSC in India?
                </h4>
                <p>
                  Yes. As of 2025, GIFT City IFSC is India's only operational International Financial Services Centre.
                </p>

                <h4 className="font-heading font-semibold text-lg text-primary mt-6 mb-2">
                  2. What's the key difference between IFSC and SEZ?
                </h4>
                <p>
                  An SEZ (Special Economic Zone) supports trade and manufacturing, while the IFSC enables international financial transactions under a unified regulator (IFSCA).
                </p>
              </section>

              <div className="mt-12 pt-6 border-t border-border">
                <Link to="/resources" className="inline-flex items-center text-primary hover:underline">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Resources
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default HowIfscWorks;
