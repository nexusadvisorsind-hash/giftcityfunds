import { SEO } from "@/components/SEO";

const Accessibility = () => {
  return (
    <div className="min-h-screen py-16 bg-background">
      <SEO
        title="Accessibility Statement — GIFT City Wealth"
        description="Accessibility statement for GIFT City Wealth. We aim for WCAG 2.1 Level AA compliance."
        canonical="https://www.giftcitywealth.in/accessibility"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading font-bold text-4xl text-primary mb-8">Accessibility Statement</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-foreground-muted mb-6">
            <strong>GIFT City Wealth (Prop. Anup Vatyani)</strong>
          </p>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-primary mb-4">Our Commitment</h2>
            <p className="text-foreground-muted mb-4">
              We are committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply the relevant accessibility standards.
            </p>
            <p className="text-foreground-muted mb-4">
              <strong>We aim for WCAG 2.1 Level AA compliance</strong> in accordance with SEBI's guidelines for financial service platforms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-primary mb-4">Measures to Support Accessibility</h2>
            <p className="text-foreground-muted mb-4">
              GIFT City Wealth takes the following measures to ensure accessibility:
            </p>
            <ul className="list-disc pl-6 text-foreground-muted space-y-2">
              <li>Include accessibility as part of our mission statement</li>
              <li>Integrate accessibility into our procurement practices</li>
              <li>Provide continual accessibility training for our staff</li>
              <li>Assign clear accessibility goals and responsibilities</li>
              <li>Employ formal accessibility quality assurance methods</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-primary mb-4">Conformance Status</h2>
            <p className="text-foreground-muted mb-4">
              The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
            </p>
            <p className="text-foreground-muted">
              <strong>GIFT City Wealth is designed to be conformant with WCAG 2.1 Level AA.</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-primary mb-4">Technical Specifications</h2>
            <p className="text-foreground-muted mb-4">
              Accessibility of GIFT City Wealth relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
            </p>
            <ul className="list-disc pl-6 text-foreground-muted space-y-2">
              <li>HTML</li>
              <li>WAI-ARIA</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-primary mb-4">Feedback</h2>
            <p className="text-foreground-muted mb-4">
              We welcome your feedback on the accessibility of GIFT City Wealth. Please let us know if you encounter accessibility barriers:
            </p>
            <div className="bg-muted p-6 rounded-lg">
              <p className="text-foreground-muted mb-2">
                <strong>Nodal Officer:</strong> Anup Vatyani
              </p>
              <p className="text-foreground-muted mb-2">
                <strong>Email:</strong> accessibility@giftcitywealth.in
              </p>
              <p className="text-foreground-muted">
                <strong>Phone:</strong> +91 95375 33533
              </p>
            </div>
            <p className="text-foreground-muted mt-4">
              We try to respond to accessibility feedback within 48 hours.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-primary mb-4">Compatibility with Browsers and Assistive Technology</h2>
            <p className="text-foreground-muted">
              GIFT City Wealth is designed to be compatible with the following assistive technologies and browsers:
            </p>
            <ul className="list-disc pl-6 text-foreground-muted space-y-2 mt-4">
              <li>Recent versions of Chrome, Firefox, Safari, and Edge</li>
              <li>Screen readers including JAWS, NVDA, and VoiceOver</li>
              <li>Keyboard-only navigation</li>
              <li>Voice recognition software</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-primary mb-4">Assessment Approach</h2>
            <p className="text-foreground-muted">
              GIFT City Wealth assessed the accessibility of this website by the following approaches:
            </p>
            <ul className="list-disc pl-6 text-foreground-muted space-y-2 mt-4">
              <li>Self-evaluation using automated testing tools (axe-core, Lighthouse)</li>
              <li>Manual testing with keyboard navigation</li>
              <li>Testing with screen reader software</li>
            </ul>
          </section>

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <p className="text-sm text-foreground-muted">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
