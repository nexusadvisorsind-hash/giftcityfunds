import { SEO } from "@/components/SEO";

const Disclaimer = () => {
  return (
    <div className="min-h-screen py-16 bg-background">
      <SEO
        title="Disclaimer — GIFT City Wealth"
        description="Disclaimer for GIFT City Wealth. All content is for educational information only and does not constitute investment advice."
        canonical="https://www.giftcitywealth.in/disclaimer"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading font-bold text-4xl text-primary mb-8">Disclaimer</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-muted p-6 rounded-lg mb-8">
            <p className="text-foreground-muted font-body">
              All content on this site is for <strong>educational information only</strong> and does not constitute investment advice. <strong>Capital is at risk.</strong>
            </p>
          </div>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-primary mb-4">Important Notice</h2>
            <p className="text-foreground-muted mb-4">
              The information provided on GIFT City Wealth (Prop. Anup Vatyani) is for general informational and educational purposes only. It should not be considered as professional financial, investment, legal, or tax advice.
            </p>
            <p className="text-foreground-muted mb-4">
              <strong>Consult a qualified advisor before making any financial or investment decisions.</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-primary mb-4">No Investment Solicitation</h2>
            <p className="text-foreground-muted mb-4">
              This website does not offer, solicit, or facilitate any investment products or services. We are not registered as an investment advisor, broker, or intermediary with SEBI or any other regulatory authority.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-primary mb-4">Risk Disclosure</h2>
            <p className="text-foreground-muted mb-4">
              All investments carry risk, including the potential loss of capital. Past performance is not indicative of future results. Market conditions, regulatory changes, and other factors can significantly impact investment outcomes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-primary mb-4">Accuracy of Information</h2>
            <p className="text-foreground-muted mb-4">
              While we strive to provide accurate and up-to-date information, we make no representations or warranties regarding the completeness, accuracy, or reliability of any content on this website. Regulations and market conditions change frequently.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-primary mb-4">External Links</h2>
            <p className="text-foreground-muted">
              This website may contain links to external websites. We are not responsible for the content, accuracy, or practices of any linked third-party sites.
            </p>
          </section>

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <p className="text-sm text-foreground-muted">
              <strong>Contact:</strong> For questions about this disclaimer, contact us at info@nexusadvisors.in or +91 95375 33533.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
