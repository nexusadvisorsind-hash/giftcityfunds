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
        canonical="https://giftcitywealth.in/knowledge/mutual-funds-in-gift-city"
        breadcrumbs={[
          { name: "Home", url: "https://giftcitywealth.in/" },
          { name: "Resources", url: "https://giftcitywealth.in/resources" },
          { name: "Mutual Funds in GIFT City", url: "https://giftcitywealth.in/knowledge/mutual-funds-in-gift-city" }
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
                Mutual funds operating in GIFT City's International Financial Services Centre (IFSC) offer unique investment structures that combine the benefits of international fund management with Indian regulatory oversight. Understanding these structures is essential for investors seeking global market access through India's financial gateway.
              </p>

              <h2 className="font-heading font-semibold text-2xl text-primary mt-8 mb-4">
                Fund Structure Types in GIFT City
              </h2>
              
              <h3 className="font-heading font-semibold text-xl text-primary mt-6 mb-3">
                1. IFSC Mutual Funds
              </h3>
              <p>
                These are mutual funds specifically registered with IFSCA and operating exclusively within the IFSC zone. They can invest in both Indian and international securities, accept subscriptions in foreign currency, and offer units denominated in USD or other convertible currencies.
              </p>

              <h3 className="font-heading font-semibold text-xl text-primary mt-6 mb-3">
                2. Feeder Funds
              </h3>
              <p>
                IFSC feeder funds invest primarily in master funds (which could be located domestically or internationally), providing investors with indirect access to diversified portfolios managed by experienced fund managers.
              </p>

              <h3 className="font-heading font-semibold text-xl text-primary mt-6 mb-3">
                3. Fund of Funds
              </h3>
              <p>
                These funds invest in other mutual funds or investment funds, providing diversification across multiple fund managers and investment strategies within a single investment vehicle.
              </p>

              <h2 className="font-heading font-semibold text-2xl text-primary mt-8 mb-4">
                Investment Process and Requirements
              </h2>

              <h3 className="font-heading font-semibold text-xl text-primary mt-6 mb-3">
                Step 1: Eligibility Verification
              </h3>
              <p>
                Investors must verify their eligibility based on residency status. NRIs, FPIs, and qualified domestic investors can participate, each with specific documentation requirements.
              </p>

              <h3 className="font-heading font-semibold text-xl text-primary mt-6 mb-3">
                Step 2: KYC Compliance
              </h3>
              <p>
                Complete Know Your Customer (KYC) procedures through IFSC-registered intermediaries. This includes identity verification, address proof, and source of funds documentation.
              </p>

              <h3 className="font-heading font-semibold text-xl text-primary mt-6 mb-3">
                Step 3: Account Opening
              </h3>
              <p>
                Open a foreign currency account with an International Banking Unit (IBU) in GIFT City or use existing NRE/NRO accounts for fund subscriptions.
              </p>

              <h3 className="font-heading font-semibold text-xl text-primary mt-6 mb-3">
                Step 4: Fund Selection and Investment
              </h3>
              <p>
                Select appropriate funds based on investment objectives, risk profile, and time horizon. Submit subscription applications through registered distributors or directly with fund houses.
              </p>

              <h2 className="font-heading font-semibold text-2xl text-primary mt-8 mb-4">
                Key Considerations
              </h2>

              <ul className="list-disc pl-6 space-y-2 my-4">
                <li><strong>Minimum Investment:</strong> Often higher than domestic funds, typically USD 10,000 or equivalent</li>
                <li><strong>Currency Risk:</strong> While transactions are in USD, underlying investments may have currency exposure</li>
                <li><strong>Taxation:</strong> Tax treatment varies based on investor residency status and investment holding period</li>
                <li><strong>Exit Load:</strong> Redemption charges may apply for early withdrawals</li>
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
                  1. Can resident Indians invest in GIFT City mutual funds?
                </h4>
                <p>
                  Yes, resident Indians can invest in GIFT City funds under the Liberalized Remittance Scheme (LRS), subject to the annual limit of USD 250,000 per individual.
                </p>

                <h4 className="font-heading font-semibold text-lg text-primary mt-6 mb-2">
                  2. What are the typical expense ratios for IFSC funds?
                </h4>
                <p>
                  Expense ratios vary by fund type and asset class but are generally competitive with international standards, typically ranging from 0.5% to 2% annually depending on the fund structure and management complexity.
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
