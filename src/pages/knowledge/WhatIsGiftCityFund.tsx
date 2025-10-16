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
                A GIFT City fund is a mutual fund or investment vehicle registered and operated under India's International Financial Services Centre (IFSC) framework within Gujarat International Finance Tec-City (GIFT City).
              </p>

              <p>
                The IFSC framework is regulated by the International Financial Services Centres Authority (IFSCA) — a unified body set up under the IFSCA Act, 2019. These funds enable both Indian and foreign investors, including Non-Resident Indians (NRIs), to invest in Indian and global markets using a globally compliant regulatory structure.
              </p>

              <h2 className="font-heading font-semibold text-2xl text-primary mt-8 mb-4">
                Key Facts
              </h2>
              
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Funds in IFSC operate in foreign currency (usually USD) under IFSCA mutual fund regulations.</li>
                <li>IFSCA oversees fund registration, custodian rules, compliance, and disclosures similar to SEBI norms.</li>
                <li>Fund houses with SEBI registration can set up separate IFSC units in GIFT City.</li>
                <li>All investment documentation, including KYC and risk disclosures, follows IFSCA/AMFI standards.</li>
              </ul>

              <h2 className="font-heading font-semibold text-2xl text-primary mt-8 mb-4">
                Why These Funds Matter
              </h2>

              <p>
                GIFT City funds offer transparent, globally accessible structures that allow NRIs to invest seamlessly while benefiting from simplified regulatory and tax procedures.
              </p>

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
                  1. Are GIFT City funds regulated by SEBI or IFSCA?
                </h4>
                <p>
                  GIFT City funds are regulated by the International Financial Services Centres Authority (IFSCA) — an independent body created under an Act of Parliament.
                </p>

                <h4 className="font-heading font-semibold text-lg text-primary mt-6 mb-2">
                  2. Can resident Indians invest in GIFT City funds?
                </h4>
                <p>
                  Yes. Resident investors can participate if the specific fund's terms allow domestic participation and RBI regulations permit outward remittance under LRS (Liberalised Remittance Scheme).
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
