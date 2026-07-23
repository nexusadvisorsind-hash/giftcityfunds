import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const PrivacyPolicy = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "PrivacyPolicy",
    "name": "Privacy Policy",
    "url": "https://giftcityfunds.in/privacy-policy",
    "description": "How GIFT City Funds collects, uses, and protects visitor information.",
    "inLanguage": "en-IN",
    "dateModified": "2026-07-23",
    "isPartOf": { "@type": "WebSite", "name": "GIFT City Funds", "url": "https://giftcityfunds.in/" },
    "publisher": { "@type": "Person", "name": "Anup Vatyani", "identifier": "AMFI ARN-106715" },
    "about": "Website privacy and data-handling policy"
  };

  return (
    <>
      <SEO
        title="Privacy Policy | GIFT City Funds"
        description="Privacy policy for GIFT City Funds - how we collect, use, and protect your information."
        canonical="https://giftcityfunds.in/privacy-policy"
        schema={schema}
        breadcrumbs={[
          { name: "Home", url: "https://giftcityfunds.in/" },
          { name: "Privacy Policy", url: "https://giftcityfunds.in/privacy-policy" }
        ]}
      />
      
      <div className="min-h-screen py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { name: "Home", url: "/" },
            { name: "Privacy Policy", url: "/privacy-policy" }
          ]} />

          <p className="text-sm text-foreground-muted mb-4">Last Updated: October 2025</p>
          
          <h1 className="font-heading font-bold text-4xl text-primary mb-8">🔒 Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">1. Introduction</h2>
              <p className="font-body text-foreground-muted">
                This Privacy Policy describes how GiftCityWealth / Gift City Funds ("we," "us," "our") collects, uses, discloses, and protects personal and non-personal information obtained through this website.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">2. Information We Collect</h2>
              <p className="font-body text-foreground-muted mb-3">
                <strong>Personal Information:</strong> Name, email address, and other details voluntarily provided through contact forms or inquiries.
              </p>
              <p className="font-body text-foreground-muted mb-3">
                <strong>Non-Personal Information:</strong> Browser type, IP address, device data, referring URLs, and aggregated analytics data.
              </p>
              <p className="font-body text-foreground-muted mb-3">
                <strong>Cookies:</strong> Small data files used to enhance site functionality, remember preferences, and analyze traffic.
              </p>
              <p className="font-body text-foreground-muted">
                We use cookies to improve site performance and understand usage. Only essential cookies run by default; analytics cookies operate solely after user consent. Users can disable cookies anytime through browser settings.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">3. How We Use Information</h2>
              <p className="font-body text-foreground-muted mb-3">We may use collected information to:</p>
              <ul className="list-disc list-inside space-y-2 font-body text-foreground-muted ml-4">
                <li>Respond to user inquiries and provide requested information.</li>
                <li>Improve website performance, user experience, and content relevance.</li>
                <li>Send updates or notifications if you have opted in.</li>
                <li>Comply with applicable laws or regulations.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">4. Information Sharing</h2>
              <p className="font-body text-foreground-muted mb-3">
                We do not sell or rent personal information to third parties.
              </p>
              <p className="font-body text-foreground-muted mb-3">
                Limited data may be shared with trusted service providers (hosting, analytics, email tools) under strict confidentiality.
              </p>
              <p className="font-body text-foreground-muted">
                We may disclose data if legally required or to protect our legal rights.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">5. Data Security</h2>
              <p className="font-body text-foreground-muted">
                We implement reasonable technical and administrative safeguards to protect data against loss, misuse, or unauthorized access. However, no system can guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">6. Data Retention</h2>
              <p className="font-body text-foreground-muted">
                Information is retained only for as long as necessary to fulfill its intended purpose or comply with legal requirements. When data is no longer needed, it is securely deleted or anonymized.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">7. Your Rights</h2>
              <p className="font-body text-foreground-muted">
                You may request access, correction, or deletion of your personal data, or withdraw consent for communication, by emailing <a href="mailto:info@giftcityfunds.in" className="text-primary hover:underline">info@giftcityfunds.in</a>.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">8. Children's Privacy</h2>
              <p className="font-body text-foreground-muted">
                This website is not directed at minors under 18 years of age, and we do not knowingly collect information from children.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">9. Changes to This Policy</h2>
              <p className="font-body text-foreground-muted">
                We may revise this Privacy Policy periodically. Updates will be reflected on this page with a new "Last Updated" date.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
