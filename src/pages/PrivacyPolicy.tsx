const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading font-bold text-4xl text-primary mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-foreground-muted mb-6">
            <strong>Last Updated:</strong> January 2025
          </p>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-primary mb-4">1. Information We Collect</h2>
            <p className="text-foreground-muted mb-4">
              GiftCityWealth.in collects limited information when you use our contact form:
            </p>
            <ul className="list-disc pl-6 text-foreground-muted space-y-2">
              <li>Name and email address (required)</li>
              <li>Phone number, WhatsApp, location, country (optional)</li>
              <li>Investor type selection (optional)</li>
              <li>Message content you provide</li>
              <li>Technical information: IP address and user agent (for spam prevention)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-primary mb-4">2. How We Use Your Information</h2>
            <p className="text-foreground-muted mb-4">
              We use collected information solely for:
            </p>
            <ul className="list-disc pl-6 text-foreground-muted space-y-2">
              <li>Responding to your inquiries and questions</li>
              <li>Providing educational information about GIFT City IFSC</li>
              <li>Preventing spam and abuse</li>
              <li>Improving our website and content</li>
            </ul>
            <p className="text-foreground-muted mt-4">
              We do not use your information for marketing, solicitation, or promotional purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-primary mb-4">3. Data Sharing and Disclosure</h2>
            <p className="text-foreground-muted mb-4">
              We do not sell, rent, or share your personal information with third parties, except:
            </p>
            <ul className="list-disc pl-6 text-foreground-muted space-y-2">
              <li>When required by law or legal process</li>
              <li>To protect our rights, property, or safety</li>
              <li>With service providers who assist in website operations (under strict confidentiality)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-primary mb-4">4. Cookies and Tracking</h2>
            <p className="text-foreground-muted mb-4">
              We use essential cookies and may use analytics tools to understand website usage patterns. These help us improve our educational content and user experience.
            </p>
            <p className="text-foreground-muted">
              You can control cookies through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-primary mb-4">5. Data Security</h2>
            <p className="text-foreground-muted">
              We implement reasonable security measures to protect your information from unauthorized access, disclosure, or destruction. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-primary mb-4">6. Your Rights</h2>
            <p className="text-foreground-muted mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-foreground-muted space-y-2">
              <li>Request access to your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal requirements)</li>
              <li>Opt out of non-essential data collection</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-primary mb-4">7. Children's Privacy</h2>
            <p className="text-foreground-muted">
              This website is not intended for individuals under 18 years of age. We do not knowingly collect information from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-primary mb-4">8. Changes to This Policy</h2>
            <p className="text-foreground-muted">
              We may update this privacy policy periodically. Changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-primary mb-4">9. Contact Us</h2>
            <p className="text-foreground-muted">
              For privacy-related questions or to exercise your rights, contact us at:
              <br />
              <strong>Email:</strong> nexusadvisors.ind@gmail.com
              <br />
              <strong>Phone:</strong> +91 9537533533
            </p>
          </section>

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <p className="text-sm text-foreground-muted">
              <strong>Important Disclaimer:</strong> This privacy policy applies to information collected through GiftCityWealth.in. 
              This website provides educational content only and is not an investment advisor, intermediary, or fund distributor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
