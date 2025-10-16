import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AlertTriangle } from "lucide-react";

const Terms = () => {
  return (
    <>
      <SEO
        title="Terms & Conditions | Educational Platform Disclaimer | GiftCityWealth.in"
        description="Terms and conditions for using GiftCityWealth.in. Understanding our educational platform nature and limitations."
        canonical="https://giftcitywealth.in/terms"
        breadcrumbs={[
          { name: "Home", url: "https://giftcitywealth.in/" },
          { name: "Terms & Conditions", url: "https://giftcitywealth.in/terms" }
        ]}
      />
      
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <Breadcrumbs items={[
            { name: "Home", url: "/" },
            { name: "Terms & Conditions", url: "/terms" }
          ]} />

          <div className="mt-8">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
              Terms & Conditions
            </h1>

            <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg mb-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-heading font-semibold text-xl text-primary mb-2">
                    Educational Platform Notice
                  </h2>
                  <p className="text-foreground-muted">
                    Please read these terms carefully before using GIFTCityWealth.in. By accessing this website, you acknowledge and agree to these terms and conditions.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-foreground-muted space-y-8">
              <section>
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  1. Nature of the Platform
                </h2>
                <p>
                  GIFTCityWealth.in is an educational platform providing information about GIFT City and International Financial Services Centre (IFSC) mutual fund structures for Non-Resident Indians (NRIs), High-Net-Worth Individuals (HNIs), and other interested investors.
                </p>
                <p>
                  This website is owned and operated by Anup Vatyani, a registered Mutual Fund Distributor with AMFI (Association of Mutual Funds in India) under ARN 106715.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  2. Educational Information Only
                </h2>
                <div className="bg-muted p-6 rounded-lg">
                  <p className="font-semibold mb-3">This website:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provides general educational content about GIFT City, IFSC, and related investment structures</li>
                    <li>Shares informational resources about regulatory frameworks, tax implications, and investment processes</li>
                    <li>Does NOT provide personalized investment advice tailored to individual circumstances</li>
                    <li>Does NOT offer financial planning, portfolio management, or wealth advisory services</li>
                    <li>Does NOT constitute a solicitation to buy or sell any specific securities or investment products</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  3. Professional Consultation Required
                </h2>
                <p>
                  Before making any investment decisions, readers must:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Consult qualified financial advisors, tax consultants, and legal professionals</li>
                  <li>Review official scheme documents, prospectuses, and regulatory filings</li>
                  <li>Verify all information through official sources such as IFSCA, SEBI, and fund houses</li>
                  <li>Assess their personal financial situation, risk tolerance, and investment objectives</li>
                  <li>Understand that past performance does not guarantee future results</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  4. No Investment Advice
                </h2>
                <p>
                  GIFTCityWealth.in and its owner Anup Vatyani do not provide personalized investment advice through this website. All content is general in nature and for educational purposes only. Nothing on this website should be construed as:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>A recommendation to purchase or sell any specific security or investment product</li>
                  <li>Financial planning advice tailored to individual circumstances</li>
                  <li>Tax advice or legal counsel</li>
                  <li>A guarantee of investment returns or outcomes</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  5. Accuracy and Currency of Information
                </h2>
                <p>
                  While we strive to provide accurate and up-to-date information, we make no warranties or representations regarding:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The accuracy, completeness, or reliability of any content</li>
                  <li>The timeliness of information, as regulations and market conditions change frequently</li>
                  <li>The suitability of any information for specific purposes or circumstances</li>
                </ul>
                <p>
                  Users are responsible for verifying all information through official sources before relying on it for decision-making.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  6. Investment Risks
                </h2>
                <div className="bg-secondary/10 p-6 rounded-lg">
                  <p className="font-semibold text-primary mb-3">Important Risk Disclosure:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Market Risk:</strong> All mutual fund investments are subject to market risk. The value of investments can go up or down.</li>
                    <li><strong>Currency Risk:</strong> GIFT City funds denominated in foreign currencies carry exchange rate risk.</li>
                    <li><strong>Regulatory Risk:</strong> Changes in laws and regulations can affect investment returns.</li>
                    <li><strong>Tax Risk:</strong> Tax treatment depends on individual circumstances and is subject to change.</li>
                    <li><strong>No Guarantee:</strong> There is no guarantee of returns or principal protection.</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  7. Third-Party Links
                </h2>
                <p>
                  This website may contain links to third-party websites for reference purposes. We are not responsible for the content, accuracy, or privacy practices of external sites. Links do not constitute endorsements.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  8. Intellectual Property
                </h2>
                <p>
                  All content on GIFTCityWealth.in, including text, graphics, logos, and article structures, is the property of Anup Vatyani or licensed content providers. Unauthorized reproduction or distribution is prohibited.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  9. Limitation of Liability
                </h2>
                <p>
                  To the fullest extent permitted by law, GIFTCityWealth.in and Anup Vatyani shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use of or inability to use this website</li>
                  <li>Reliance on any information provided on this website</li>
                  <li>Investment decisions made based on content from this website</li>
                  <li>Errors, omissions, or inaccuracies in content</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  10. Regulatory Compliance
                </h2>
                <p>
                  Anup Vatyani is registered with AMFI under ARN 106715 as a Mutual Fund Distributor. This registration pertains to mutual fund distribution activities and does not extend to investment advisory services, portfolio management, or financial planning.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  11. Contact Information
                </h2>
                <p>
                  For questions about these terms or general inquiries:
                </p>
                <div className="bg-muted p-4 rounded-lg mt-3">
                  <p><strong>Email:</strong> <a href="mailto:info@giftcitywealth.in" className="text-primary hover:underline">info@giftcitywealth.in</a></p>
                  <p className="mt-2"><strong>Owner:</strong> Anup Vatyani (MFD ARN 106715)</p>
                </div>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  12. Changes to Terms
                </h2>
                <p>
                  We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the modified terms. Users are encouraged to review this page periodically.
                </p>
              </section>

              <section className="bg-surface p-6 rounded-lg">
                <p className="text-sm text-foreground-muted">
                  <strong>Last Updated:</strong> January 2025
                </p>
                <p className="text-sm text-foreground-muted mt-3">
                  By using GIFTCityWealth.in, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
                </p>
              </section>

              <div className="mt-8 flex flex-wrap justify-center gap-6">
                <Link to="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                <span className="text-foreground-muted">•</span>
                <Link to="/disclaimer" className="text-primary hover:underline">
                  Disclaimer
                </Link>
                <span className="text-foreground-muted">•</span>
                <Link to="/contact" className="text-primary hover:underline">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
