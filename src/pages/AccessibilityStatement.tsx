import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const AccessibilityStatement = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Accessibility Statement",
    "about": "Legal and informational policies of GiftCityWealth.in"
  };

  return (
    <>
      <SEO
        title="Accessibility Statement | GIFT City Funds"
        description="Accessibility statement for GIFT City Funds - our commitment to web accessibility standards."
        canonical="https://www.giftcityfunds.in/accessibility-statement"
        schema={schema}
        breadcrumbs={[
          { name: "Home", url: "https://giftcityfunds.in/" },
          { name: "Accessibility Statement", url: "https://giftcityfunds.in/accessibility-statement" },
        ]}
      />
      
      <div className="min-h-screen py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-foreground-muted mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Accessibility Statement</span>
          </nav>

          <p className="text-sm text-foreground-muted mb-4">Last Updated: October 2025</p>
          
          <h1 className="font-heading font-bold text-4xl text-primary mb-8">♿ Accessibility Statement</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">1. Our Approach</h2>
              <p className="font-body text-foreground-muted">
                We are committed to providing a website that is accessible and usable by all individuals, including those with disabilities or assistive technologies. Our goal is to continuously enhance the user experience for everyone.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">2. Design Principles</h2>
              <p className="font-body text-foreground-muted mb-3">We strive to ensure that our website:</p>
              <ul className="list-disc list-inside space-y-2 font-body text-foreground-muted ml-4">
                <li>Uses readable font sizes and adequate color contrast.</li>
                <li>Maintains clear navigation and logical content structure.</li>
                <li>Includes descriptive alt text for meaningful images.</li>
                <li>Enables users to navigate with a keyboard wherever possible.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">3. Ongoing Improvement</h2>
              <p className="font-body text-foreground-muted">
                Accessibility is an ongoing process. We review and update our website to identify potential barriers and improve usability over time.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">4. Known Limitations</h2>
              <p className="font-body text-foreground-muted">
                Some older pages or third-party content may not yet meet desired accessibility levels. We are actively working to enhance those areas.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">5. Feedback and Support</h2>
              <p className="font-body text-foreground-muted mb-3">
                We welcome feedback on accessibility and usability. If you face challenges accessing content or require an alternative format, please contact us at <a href="mailto:info@giftcityfunds.in" className="text-primary hover:underline">info@giftcityfunds.in</a>.
              </p>
              <p className="font-body text-foreground-muted">
                We will make reasonable efforts to assist and improve the experience.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">6. Future Commitment</h2>
              <p className="font-body text-foreground-muted">
                We aim to continue improving accessibility and follow recognized web usability best practices as the site evolves.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessibilityStatement;
