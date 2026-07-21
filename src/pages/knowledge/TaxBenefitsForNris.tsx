import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArrowLeft } from "lucide-react";

const TaxBenefitsForNris = () => {
  return (
    <>
      <SEO
        title="Tax Benefits for NRIs in GIFT City | IFSC Tax Advantages Guide"
        description="Complete guide to tax advantages for NRI investors in GIFT City IFSC. Understand DTAA benefits, capital gains treatment, and tax-efficient investment structures."
        canonical="https://giftcityfunds.in/knowledge/tax-benefits-for-nris"
        breadcrumbs={[
          { name: "Home", url: "https://giftcityfunds.in/" },
          { name: "Resources", url: "https://giftcityfunds.in/resources" },
          { name: "Tax Benefits for NRIs", url: "https://giftcityfunds.in/knowledge/tax-benefits-for-nris" }
        ]}
      />
      
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <Breadcrumbs items={[
            { name: "Home", url: "/" },
            { name: "Resources", url: "/resources" },
            { name: "Tax Benefits for NRIs", url: "/knowledge/tax-benefits-for-nris" }
          ]} />

          <article className="mt-8">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
              Tax Benefits for NRI Investors in GIFT City
            </h1>

            <div className="prose prose-lg max-w-none text-foreground-muted">
              <p className="lead text-xl mb-6">
                The Government of India has extended several tax incentives to entities and investors operating within GIFT City's IFSC. These aim to make India a competitive global investment destination while maintaining regulatory compliance.
              </p>

              <h2 className="font-heading font-semibold text-2xl text-primary mt-8 mb-4">
                Key Provisions Under the Income Tax Act
              </h2>
              
              <h3 className="font-heading font-semibold text-xl text-primary mt-6 mb-3">
                1. Section 80LA
              </h3>
              <p>
                Fund management entities in IFSC enjoy tax holidays on specified income for up to 10 years out of 15 years of operations.
              </p>

              <h3 className="font-heading font-semibold text-xl text-primary mt-6 mb-3">
                2. Section 10(4D)
              </h3>
              <p>
                Income of Category I or II Alternate Investment Funds (AIFs) registered in IFSC is exempt if earned in foreign currency.
              </p>

              <h3 className="font-heading font-semibold text-xl text-primary mt-6 mb-3">
                3. Section 10(4F)
              </h3>
              <p>
                Non-resident investors are exempt from tax on income received from portfolio transfers within IFSC.
              </p>

              <h3 className="font-heading font-semibold text-xl text-primary mt-6 mb-3">
                4. No Capital Gains Tax
              </h3>
              <p>
                Non-residents are exempt from capital gains tax on transfer of certain IFSC-listed securities (subject to conditions).
              </p>

              <h3 className="font-heading font-semibold text-xl text-primary mt-6 mb-3">
                5. GST Exemption
              </h3>
              <p>
                GST exemption on services provided to IFSC entities dealing in foreign currency.
              </p>

              <h2 className="font-heading font-semibold text-2xl text-primary mt-8 mb-4">
                Practical Benefits for NRIs
              </h2>

              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Simplified taxation and lower compliance versus offshore jurisdictions.</li>
                <li>Foreign-currency transactions are ring-fenced from domestic tax exposure.</li>
                <li>Investments are protected by IFSCA and Indian legal frameworks.</li>
              </ul>

              <div className="bg-muted p-6 rounded-lg my-8">
                <p className="text-sm">
                  <strong>Important Disclaimer:</strong> Tax laws are complex and subject to change. Individual tax liability depends on multiple factors including residency status, income sources, and applicable DTAA provisions. Always consult a qualified tax advisor before making investment decisions.
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
                  1. Are NRI investments in IFSC taxable in India?
                </h4>
                <p>
                  In most cases, no, if the investment and gains qualify under the exemptions of Section 10(4D)/(4F). However, tax residency and treaty benefits must be evaluated by each investor.
                </p>

                <h4 className="font-heading font-semibold text-lg text-primary mt-6 mb-2">
                  2. Do IFSC funds need to deduct TDS for NRIs?
                </h4>
                <p>
                  IFSC funds comply with IFSCA rules and may apply limited TDS depending on the fund structure. Investors should consult a tax advisor or refer to IFSCA circulars.
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

export default TaxBenefitsForNris;
