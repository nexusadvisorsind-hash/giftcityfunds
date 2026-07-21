import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Mail, Award, BookOpen } from "lucide-react";

const AnupVatyani = () => {
  return (
    <>
      <SEO
        title="Anup Vatyani | MFD (AMFI ARN 106715) | GIFT City Investment Advisor"
        description="Learn about Anup Vatyani, a registered Mutual Fund Distributor (AMFI ARN 106715) specializing in GIFT City IFSC investments for NRIs and HNIs."
        canonical="https://giftcityfunds.in/team/anup-vatyani"
        breadcrumbs={[
          { name: "Home", url: "https://giftcityfunds.in/" },
          { name: "Team", url: "https://giftcityfunds.in/team/anup-vatyani" },
          { name: "Anup Vatyani", url: "https://giftcityfunds.in/team/anup-vatyani" }
        ]}
      />
      
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <Breadcrumbs items={[
            { name: "Home", url: "/" },
            { name: "Team", url: "/team/anup-vatyani" },
            { name: "Anup Vatyani", url: "/team/anup-vatyani" }
          ]} />

          <article className="mt-8">
            <div className="bg-surface rounded-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-48 h-48 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-secondary-foreground font-heading font-bold text-4xl">AV</span>
                    </div>
                    <p className="text-xs text-foreground-muted">Professional Photo</p>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h1 className="font-heading font-bold text-4xl text-primary mb-2">
                    Anup Vatyani
                  </h1>
                  <p className="text-xl text-foreground-muted mb-4">
                    Mutual Fund Distributor | GIFT City Investment Specialist
                  </p>
                  
                  <div className="flex items-center space-x-2 text-primary mb-6">
                    <Award className="h-5 w-5" />
                    <span className="font-semibold">AMFI ARN: 106715</span>
                  </div>

                  <div className="flex items-center space-x-2 text-foreground-muted">
                    <Mail className="h-5 w-5" />
                    <a href="mailto:info@giftcityfunds.in" className="hover:text-primary transition-colors">
                      info@giftcityfunds.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-foreground-muted space-y-6">
              <section>
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  About Anup Vatyani
                </h2>
                <p>
                  Anup Vatyani is a registered Mutual Fund Distributor with AMFI (Association of Mutual Funds in India) under ARN 106715. With deep expertise in India's International Financial Services Centre (IFSC) ecosystem, Anup specializes in helping Non-Resident Indians (NRIs), High-Net-Worth Individuals (HNIs), and institutional investors navigate GIFT City's unique investment opportunities.
                </p>
                <p>
                  Through GIFTCityWealth.in, Anup provides educational resources and informational guidance on GIFT City investment structures, regulatory frameworks, and the advantages of IFSC-based mutual funds. His mission is to demystify the IFSC ecosystem and make information accessible to investors worldwide.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  Areas of Expertise
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>GIFT City IFSC Investments:</strong> Comprehensive knowledge of IFSC regulatory framework, fund structures, and operational mechanisms</li>
                  <li><strong>NRI Investments:</strong> Specialized guidance for Non-Resident Indians seeking to invest in India through tax-efficient IFSC structures</li>
                  <li><strong>Mutual Fund Distribution:</strong> Registered with AMFI to distribute mutual funds with a focus on GIFT City offerings</li>
                  <li><strong>Wealth Structuring:</strong> Advisory on family office structures, trusts, and HNI wealth management through IFSC entities</li>
                  <li><strong>Regulatory Compliance:</strong> Deep understanding of IFSCA, SEBI, and RBI regulations affecting IFSC investments</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  Professional Philosophy
                </h2>
                <p>
                  Anup believes in an education-first approach to investment guidance. Through detailed articles, guides, and resources on GIFTCityWealth.in, he aims to empower investors with knowledge before they make financial decisions. This website serves as an informational platform and does not provide personalized investment advice or financial planning services.
                </p>
                <div className="bg-muted p-6 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <BookOpen className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-primary mb-2">Education-First Approach</p>
                      <p className="text-sm">
                        "Understanding investment structures and regulations is fundamental. Informed investors make better decisions. My goal is to provide clear, accurate information about GIFT City opportunities so investors can make decisions aligned with their financial goals."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  Registration & Credentials
                </h2>
                <div className="bg-surface p-6 rounded-lg">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-semibold text-primary min-w-[140px]">AMFI ARN:</span>
                      <span>106715 (Mutual Fund Distributor)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-primary min-w-[140px]">Specialization:</span>
                      <span>GIFT City IFSC Investments, NRI Investment Guidance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-primary min-w-[140px]">Platform:</span>
                      <span>GIFTCityWealth.in (Educational Resource)</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  Get in Touch
                </h2>
                <p>
                  For general inquiries about GIFT City investments or to learn more about the resources available on this platform, please reach out:
                </p>
                <div className="bg-muted p-6 rounded-lg mt-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <a href="mailto:info@giftcityfunds.in" className="text-primary hover:underline">
                        info@giftcityfunds.in
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-foreground-muted mt-4">
                    <strong>Note:</strong> This website provides educational information only and does not constitute personalized investment advice, financial planning, or portfolio management services.
                  </p>
                </div>
              </section>

              <section className="bg-surface p-6 rounded-lg">
                <h3 className="font-heading font-semibold text-lg text-primary mb-3">
                  Important Disclaimer
                </h3>
                <p className="text-sm text-foreground-muted">
                  Anup Vatyani is a registered Mutual Fund Distributor (MFD) with AMFI ARN 106715. GIFTCityWealth.in is an informational and educational platform. Nothing on this website constitutes personalized investment advice, financial planning, or a solicitation to buy or sell securities. All investment decisions should be made after consulting qualified professionals and reviewing official scheme documents. Mutual fund investments are subject to market risk. Please read all scheme-related documents carefully before investing.
                </p>
              </section>

              <div className="mt-8 pt-6 border-t border-border text-center">
                <Link to="/contact" className="text-primary hover:underline font-semibold">
                  Contact Us for General Inquiries →
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default AnupVatyani;
