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
        canonical="https://giftcitywealth.in/knowledge/how-ifsc-works"
        breadcrumbs={[
          { name: "Home", url: "https://giftcitywealth.in/" },
          { name: "Resources", url: "https://giftcitywealth.in/resources" },
          { name: "How IFSC Works", url: "https://giftcitywealth.in/knowledge/how-ifsc-works" }
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
                The International Financial Services Centre (IFSC) is a special economic zone within India that operates under international financial regulations while remaining within India's legal jurisdiction. Located in GIFT City, Gujarat, it serves as a bridge between domestic and global financial markets.
              </p>

              <h2 className="font-heading font-semibold text-2xl text-primary mt-8 mb-4">
                IFSC Regulatory Framework
              </h2>
              
              <p>
                The IFSC operates under the International Financial Services Centres Authority (IFSCA), a unified regulator established in 2020. IFSCA consolidates regulatory functions previously distributed across SEBI, RBI, IRDAI, and PFRDA, creating a single-window system for international financial services.
              </p>

              <h2 className="font-heading font-semibold text-2xl text-primary mt-8 mb-4">
                Key Features of IFSC Operations
              </h2>

              <h3 className="font-heading font-semibold text-xl text-primary mt-6 mb-3">
                1. International Standards with Indian Oversight
              </h3>
              <p>
                IFSC entities follow international best practices and standards comparable to global financial centers like Singapore, Dubai, and Hong Kong, while remaining under Indian legal jurisdiction. This unique position provides regulatory certainty and investor protection.
              </p>

              <h3 className="font-heading font-semibold text-xl text-primary mt-6 mb-3">
                2. Currency Flexibility
              </h3>
              <p>
                All transactions within IFSC are conducted in freely convertible foreign currencies, primarily US Dollars. This eliminates exchange rate risks and conversion complexities for international participants, making cross-border transactions seamless.
              </p>

              <h3 className="font-heading font-semibold text-xl text-primary mt-6 mb-3">
                3. Tax Benefits
              </h3>
              <p>
                IFSC units enjoy significant tax advantages, including 100% profit tax exemption for 10 consecutive years within a 15-year window under Section 80LA. Capital gains on IFSC securities may also receive favorable treatment depending on investor status and holding period.
              </p>

              <h2 className="font-heading font-semibold text-2xl text-primary mt-8 mb-4">
                Benefits for Investors
              </h2>

              <ul className="list-disc pl-6 space-y-2 my-4">
                <li><strong>Simplified Compliance:</strong> Single regulatory authority reduces bureaucratic complexity</li>
                <li><strong>Global Market Access:</strong> Investment in both Indian and international securities</li>
                <li><strong>Cost Efficiency:</strong> Lower transaction costs compared to offshore alternatives</li>
                <li><strong>Regulatory Protection:</strong> Full legal recourse under Indian judicial system</li>
              </ul>

              <h2 className="font-heading font-semibold text-2xl text-primary mt-8 mb-4">
                Who Can Participate in IFSC?
              </h2>

              <p>
                IFSC is open to a wide range of participants including Non-Resident Indians (NRIs), Foreign Portfolio Investors (FPIs), institutional investors, and qualified domestic investors seeking international exposure. Each category has specific eligibility requirements and documentation needs.
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
                  1. Is IFSC part of India or considered offshore?
                </h4>
                <p>
                  IFSC is physically located in India (GIFT City, Gujarat) but operates under international financial regulations. It's considered a special economic zone with "deemed non-resident" status for foreign exchange purposes.
                </p>

                <h4 className="font-heading font-semibold text-lg text-primary mt-6 mb-2">
                  2. What is IFSCA and how does it differ from SEBI?
                </h4>
                <p>
                  IFSCA is the unified regulator for IFSC, consolidating powers of SEBI, RBI, IRDAI, and PFRDA for international financial services. It follows international best practices while SEBI governs domestic capital markets.
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
