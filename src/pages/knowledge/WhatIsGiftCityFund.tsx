import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArrowLeft } from "lucide-react";

const WhatIsGiftCityFund = () => {
  return (
    <>
      <SEO
        title="What is a GIFT City Fund? | Complete Guide to IFSC Mutual Funds"
        description="Comprehensive guide explaining GIFT City funds, how they work, and how they differ from domestic mutual funds. Learn about IFSC investment opportunities."
        canonical="https://giftcitywealth.in/knowledge/what-is-gift-city-fund"
        breadcrumbs={[
          { name: "Home", url: "https://giftcitywealth.in/" },
          { name: "Resources", url: "https://giftcitywealth.in/resources" },
          { name: "What is a GIFT City Fund", url: "https://giftcitywealth.in/knowledge/what-is-gift-city-fund" }
        ]}
      />
      
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <Breadcrumbs items={[
            { name: "Home", url: "/" },
            { name: "Resources", url: "/resources" },
            { name: "What is a GIFT City Fund", url: "/knowledge/what-is-gift-city-fund" }
          ]} />

          <article className="mt-8">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
              What is a GIFT City Fund?
            </h1>

            <div className="prose prose-lg max-w-none text-foreground-muted">
              <p className="lead text-xl mb-6">
                GIFT City funds are mutual funds established within India's International Financial Services Centre (IFSC) located in Gujarat International Finance Tec-City (GIFT City). These funds operate under a unique regulatory framework designed to bridge domestic and international investment opportunities.
              </p>

              <h2 className="font-heading font-semibold text-2xl text-primary mt-8 mb-4">
                Understanding GIFT City Funds
              </h2>
              
              <p>
                Unlike traditional Indian mutual funds that operate under SEBI regulations within India's domestic market, GIFT City funds are governed by the International Financial Services Centres Authority (IFSCA). This distinction allows them to offer unique advantages in terms of currency flexibility, tax efficiency, and global market access.
              </p>

              <h2 className="font-heading font-semibold text-2xl text-primary mt-8 mb-4">
                Key Differences from Domestic Mutual Funds
              </h2>

              <h3 className="font-heading font-semibold text-xl text-primary mt-6 mb-3">
                1. Regulatory Framework
              </h3>
              <p>
                GIFT City funds operate under IFSCA regulations, which align with international standards while remaining within India's legal jurisdiction. This provides a bridge between domestic and offshore investment structures.
              </p>

              <h3 className="font-heading font-semibold text-xl text-primary mt-6 mb-3">
                2. Currency Operations
              </h3>
              <p>
                These funds can accept subscriptions and make investments in freely convertible foreign currencies, primarily USD. This eliminates currency conversion complexities for international investors and NRIs.
              </p>

              <h3 className="font-heading font-semibold text-xl text-primary mt-6 mb-3">
                3. Investment Universe
              </h3>
              <p>
                GIFT City funds have the flexibility to invest in both Indian securities and global markets, providing diversification opportunities that go beyond what domestic funds typically offer.
              </p>

              <h2 className="font-heading font-semibold text-2xl text-primary mt-8 mb-4">
                Who Should Consider GIFT City Funds?
              </h2>

              <p>
                GIFT City funds are particularly attractive for Non-Resident Indians (NRIs), Foreign Portfolio Investors (FPIs), and High-Net-Worth Individuals (HNIs) seeking:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Access to Indian markets without domestic regulatory constraints</li>
                <li>Tax-efficient investment structures under IFSC benefits</li>
                <li>Foreign currency denominated investment options</li>
                <li>Simplified compliance for international investors</li>
              </ul>

              <div className="bg-muted p-6 rounded-lg my-8">
                <p className="text-sm">
                  <strong>Important Note:</strong> While GIFT City funds offer unique advantages, investors should carefully evaluate their investment objectives, risk tolerance, and tax implications before investing. Consultation with qualified financial advisors is recommended.
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
                  1. What is the benefit of investing in GIFT City funds?
                </h4>
                <p>
                  GIFT City funds allow investors — especially NRIs — to access global markets through India's IFSC platform with tax advantages and lower compliance burdens.
                </p>

                <h4 className="font-heading font-semibold text-lg text-primary mt-6 mb-2">
                  2. Are GIFT City mutual funds safe?
                </h4>
                <p>
                  These funds are regulated by the International Financial Services Centres Authority (IFSCA) and follow SEBI-equivalent norms, making them as safe as domestic mutual funds, subject to market risks.
                </p>

                <h4 className="font-heading font-semibold text-lg text-primary mt-6 mb-2">
                  3. Can NRIs invest in GIFT City funds directly?
                </h4>
                <p>
                  Yes. NRIs can invest directly using NRE/NRO accounts after completing KYC, just like any Indian mutual fund.
                </p>

                <h4 className="font-heading font-semibold text-lg text-primary mt-6 mb-2">
                  4. How are GIFT City funds taxed?
                </h4>
                <p>
                  Tax treatment depends on residency status and fund type. GIFT City offers favorable tax exemptions for non-residents under specific sections. Always consult a tax advisor.
                </p>

                <h4 className="font-heading font-semibold text-lg text-primary mt-6 mb-2">
                  5. How do I start investing through GIFT City Wealth?
                </h4>
                <p>
                  You can start by contacting our advisory team or filling out the "Get Started" form on our homepage. Our MFD team will guide you through fund selection and documentation.
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

export default WhatIsGiftCityFund;
