import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArrowLeft } from "lucide-react";

const MutualFundsInGiftCity = () => {
  return (
    <>
      <SEO
        title="Mutual Funds in GIFT City | Fund Structures & Investment Process"
        description="Comprehensive guide to mutual fund structures in GIFT City IFSC. Learn about fund types, investment process, and participation requirements."
        canonical="https://giftcityfunds.in/knowledge/mutual-funds-in-gift-city"
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Mutual Funds in GIFT City",
          "description": "Educational overview of mutual fund structures available under IFSCA in GIFT City.",
          "author": { "@type": "Person", "name": "Anup Vatyani", "url": "https://giftcityfunds.in/team/anup-vatyani" },
          "publisher": { "@type": "Organization", "name": "GIFT City Funds", "url": "https://giftcityfunds.in" },
          "mainEntityOfPage": "https://giftcityfunds.in/knowledge/mutual-funds-in-gift-city"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://giftcityfunds.in/" },
          { name: "Resources", url: "https://giftcityfunds.in/resources" },
          { name: "Mutual Funds in GIFT City", url: "https://giftcityfunds.in/knowledge/mutual-funds-in-gift-city" }
        ]}
      />
      
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <Breadcrumbs items={[
            { name: "Home", url: "/" },
            { name: "Resources", url: "/resources" },
            { name: "Mutual Funds in GIFT City", url: "/knowledge/mutual-funds-in-gift-city" }
          ]} />

          <article className="mt-8">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
              Mutual Funds in GIFT City: Structures and Participation
            </h1>

            <div className="prose prose-lg max-w-none text-foreground-muted">
              <p className="lead text-xl mb-6">
                Mutual funds in GIFT City operate under IFSCA (Fund Management) Regulations, 2022. These rules allow Indian fund houses and international managers to establish fund management entities in GIFT City's IFSC to serve both domestic and global investors.
              </p>

              <h2 className="font-heading font-semibold text-2xl text-primary mt-8 mb-4">
                Structure Overview
              </h2>
              
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li><strong>Fund Management Entity (FME):</strong> The registered manager licensed by IFSCA to launch schemes.</li>
                <li><strong>Custodian & Trustee:</strong> Must be approved entities within IFSC.</li>
                <li><strong>Fund categories:</strong> Retail, Professional, and Restricted Schemes — depending on investor type.</li>
                <li><strong>Currency:</strong> Units are often denominated in USD or other foreign currencies.</li>
              </ul>

              <h2 className="font-heading font-semibold text-2xl text-primary mt-8 mb-4">
                Investor Participation
              </h2>

              <ul className="list-disc pl-6 space-y-2 my-4">
                <li><strong>NRIs/OCIs/Foreign Investors:</strong> Can invest directly without separate RBI approvals since IFSC is treated as an offshore jurisdiction within India.</li>
                <li><strong>Domestic investors:</strong> Allowed under LRS for international exposure.</li>
                <li><strong>Compliance:</strong> Similar risk and disclosure norms as SEBI-regulated funds.</li>
              </ul>

              <h2 className="font-heading font-semibold text-2xl text-primary mt-8 mb-4">
                Advantages
              </h2>

              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Global-standard fund governance</li>
                <li>Seamless cross-border investment framework</li>
                <li>Lower tax friction for eligible non-residents</li>
              </ul>

              <div className="bg-muted p-6 rounded-lg my-8">
                <p className="text-sm">
                  <strong>Important:</strong> Investors should carefully review the fund's offer document, understand all fees and charges, and assess how the fund aligns with their overall investment portfolio before committing capital.
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
                  1. Who regulates GIFT City mutual funds?
                </h4>
                <p>
                  They are governed by the IFSCA Fund Management Regulations, 2022.
                </p>

                <h4 className="font-heading font-semibold text-lg text-primary mt-6 mb-2">
                  2. What currency are these funds issued in?
                </h4>
                <p>
                  Most IFSC mutual funds are denominated in foreign currency (commonly USD), though some may allow INR-based investment tranches.
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

export default MutualFundsInGiftCity;
