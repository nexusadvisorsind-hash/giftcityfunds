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
        canonical="https://giftcitywealth.in/knowledge/tax-benefits-for-nris"
        breadcrumbs={[
          { name: "Home", url: "https://giftcitywealth.in/" },
          { name: "Resources", url: "https://giftcitywealth.in/resources" },
          { name: "Tax Benefits for NRIs", url: "https://giftcitywealth.in/knowledge/tax-benefits-for-nris" }
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
                GIFT City's International Financial Services Centre (IFSC) offers significant tax advantages for Non-Resident Indian (NRI) investors, making it an attractive destination for those seeking to invest in India while optimizing their tax liability. Understanding these benefits is crucial for effective financial planning.
              </p>

              <h2 className="font-heading font-semibold text-2xl text-primary mt-8 mb-4">
                Primary Tax Advantages
              </h2>
              
              <h3 className="font-heading font-semibold text-xl text-primary mt-6 mb-3">
                1. Section 80LA Tax Holiday
              </h3>
              <p>
                IFSC entities, including mutual fund houses and fund management companies, enjoy a 100% tax exemption on profits for 10 consecutive years within a 15-year window. This exemption translates to improved fund performance as operating costs are reduced, potentially benefiting investors through lower expense ratios.
              </p>

              <h3 className="font-heading font-semibold text-xl text-primary mt-6 mb-3">
                2. Capital Gains Tax Benefits
              </h3>
              <p>
                For NRI investors, capital gains arising from the transfer of securities traded on IFSC exchanges may receive favorable tax treatment. Specifically, gains from securities denominated in foreign currency and traded on recognized IFSC exchanges can be exempt from Indian capital gains tax under certain conditions.
              </p>

              <h3 className="font-heading font-semibold text-xl text-primary mt-6 mb-3">
                3. Double Taxation Avoidance Agreement (DTAA)
              </h3>
              <p>
                NRIs can benefit from India's extensive DTAA network. Income taxed in India through IFSC investments can claim relief in the country of residence, ensuring income isn't taxed twice. This is particularly valuable for NRIs in countries with high tax rates.
              </p>

              <h2 className="font-heading font-semibold text-2xl text-primary mt-8 mb-4">
                Additional Tax Efficiency Features
              </h2>

              <h3 className="font-heading font-semibold text-xl text-primary mt-6 mb-3">
                No Securities Transaction Tax (STT)
              </h3>
              <p>
                Transactions on IFSC exchanges are exempt from STT, reducing transaction costs for active traders and investors. This exemption applies to equity, debt, and derivative transactions conducted within the IFSC framework.
              </p>

              <h3 className="font-heading font-semibold text-xl text-primary mt-6 mb-3">
                No Dividend Distribution Tax (DDT)
              </h3>
              <p>
                Dividends received from IFSC-based investments are not subject to DDT in the hands of the distributing entity. NRIs need to evaluate the tax treatment of such dividends in their country of residence.
              </p>

              <h2 className="font-heading font-semibold text-2xl text-primary mt-8 mb-4">
                Important Considerations for NRI Investors
              </h2>

              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>Residency Status:</strong> Tax benefits depend on your residential status under Indian tax law. Ensure accurate determination of your tax residency each financial year.
                </li>
                <li>
                  <strong>DTAA Certificate:</strong> Obtain a Tax Residency Certificate (TRC) from your country of residence to claim DTAA benefits effectively.
                </li>
                <li>
                  <strong>PAN Requirement:</strong> NRIs must have a valid PAN card for all financial transactions in India, including IFSC investments.
                </li>
                <li>
                  <strong>Repatriation Rules:</strong> Investment proceeds can typically be repatriated freely, subject to compliance with FEMA regulations and proper documentation.
                </li>
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
                  1. Do NRIs need to pay TDS on GIFT City fund redemptions?
                </h4>
                <p>
                  TDS applicability depends on the nature of income and investor's tax residency status. Generally, capital gains may attract TDS, but rates can be reduced under applicable DTAA provisions with a valid TRC.
                </p>

                <h4 className="font-heading font-semibold text-lg text-primary mt-6 mb-2">
                  2. Can tax paid in India on IFSC investments be claimed as credit abroad?
                </h4>
                <p>
                  Yes, most countries allow foreign tax credits for taxes paid in India under DTAA provisions. The mechanism varies by country, so consult your local tax advisor for specific procedures.
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
