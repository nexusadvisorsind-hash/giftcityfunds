import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const TermsOfUse = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Use",
    "about": "Legal and informational policies of GiftCityWealth.in"
  };

  return (
    <>
      <SEO
        title="Terms of Use | GIFT City Funds"
        description="Terms of use for GIFT City Funds - educational information about GIFT City IFSC."
        canonical="https://www.giftcitywealth.in/terms-of-use"
        schema={schema}
      />
      
      <div className="min-h-screen py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-foreground-muted mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Terms of Use</span>
          </nav>

          <p className="text-sm text-foreground-muted mb-4">Last Updated: October 2025</p>
          
          <h1 className="font-heading font-bold text-4xl text-primary mb-8">📜 Terms of Use</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">1. Acceptance</h2>
              <p className="font-body text-foreground-muted">
                By accessing or using this website, you agree to these Terms of Use. If you do not agree, you must discontinue use immediately.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">2. Eligibility</h2>
              <p className="font-body text-foreground-muted">
                You must be at least 18 years old and legally capable of entering into binding agreements under Indian law to use this site.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">3. Permitted Use</h2>
              <p className="font-body text-foreground-muted">
                You may view, download, and print material from this website for personal, non-commercial use only, provided that all copyright and ownership notices remain intact.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">4. Intellectual Property</h2>
              <p className="font-body text-foreground-muted">
                All text, graphics, designs, and other materials on this website are the property of GiftCityWealth or its licensors. Unauthorized reproduction, distribution, or modification is prohibited.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">5. Prohibited Conduct</h2>
              <p className="font-body text-foreground-muted mb-3">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 font-body text-foreground-muted ml-4">
                <li>Use the website for unlawful or fraudulent purposes.</li>
                <li>Interfere with site functionality or security.</li>
                <li>Upload malicious code or infringe intellectual property rights.</li>
                <li>Misrepresent identity or impersonate others.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">6. Third-Party Links</h2>
              <p className="font-body text-foreground-muted">
                This site may contain links to external sites for convenience. We are not responsible for their accuracy, security, or content.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">7. Disclaimer of Warranties</h2>
              <p className="font-body text-foreground-muted">
                The website is provided "as is" and "as available." We make no warranties regarding uninterrupted operation, security, or error-free access.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">8. Limitation of Liability</h2>
              <p className="font-body text-foreground-muted">
                To the fullest extent permitted by law, we are not responsible for damages resulting from your use or inability to use this website.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">9. Modifications to Terms</h2>
              <p className="font-body text-foreground-muted">
                We reserve the right to modify these Terms at any time. Continued use of the site following changes indicates acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">10. Governing Law & Jurisdiction</h2>
              <p className="font-body text-foreground-muted">
                These Terms shall be governed by and construed in accordance with the laws of India. All disputes are subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfUse;
