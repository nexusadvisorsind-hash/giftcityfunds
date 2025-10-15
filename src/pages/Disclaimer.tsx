import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const Disclaimer = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Disclaimer",
    "about": "Legal and informational policies of GiftCityWealth.in"
  };

  return (
    <>
      <SEO
        title="Disclaimer | GIFT City Funds"
        description="Disclaimer for GIFT City Funds - informational content only, no personalized investment advice."
        canonical="https://giftcitywealth.in/disclaimer"
        schema={schema}
        breadcrumbs={[
          { name: "Home", url: "https://giftcitywealth.in/" },
          { name: "Disclaimer", url: "https://giftcitywealth.in/disclaimer" }
        ]}
      />
      
      <div className="min-h-screen py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { name: "Home", url: "/" },
            { name: "Disclaimer", url: "/disclaimer" }
          ]} />

          <p className="text-sm text-foreground-muted mb-4">Last Updated: October 2025</p>
          
          <h1 className="font-heading font-bold text-4xl text-primary mb-8">⚖️ Disclaimer</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">1. Purpose & Scope</h2>
              <p className="font-body text-foreground-muted">
                The information contained on this website is provided for educational and informational purposes only. It is not intended as financial, investment, tax, or legal advice. Users should seek independent professional counsel before making any financial decisions.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">2. No Professional Advice</h2>
              <p className="font-body text-foreground-muted">
                This website does not provide personalized investment, advisory, or solicitation services. The information shared is general in nature and should not be interpreted as a recommendation for any financial product or service.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">3. Accuracy & Updates</h2>
              <p className="font-body text-foreground-muted">
                While efforts are made to ensure accuracy and currency, we make no warranties or representations, express or implied, regarding the completeness, reliability, or suitability of any information on this website.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">4. Third-Party Links</h2>
              <p className="font-body text-foreground-muted">
                Links to third-party websites or resources are provided for informational convenience only. We do not control or endorse these external sites and assume no responsibility for their content or privacy practices.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">5. Use at Your Own Risk</h2>
              <p className="font-body text-foreground-muted">
                Your use of this website and reliance on any information herein are entirely at your own risk. The website owners and contributors shall not be liable for any damages or losses arising from such use.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">6. Limitation of Liability</h2>
              <p className="font-body text-foreground-muted">
                To the maximum extent permitted by law, we disclaim any liability for direct, indirect, incidental, consequential, or punitive damages resulting from your access to or use of this site.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">7. Modifications</h2>
              <p className="font-body text-foreground-muted">
                We reserve the right to modify, update, or remove website content at any time without prior notice.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
