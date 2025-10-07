import { SEO } from "@/components/SEO";

const Grievance = () => {
  return (
    <div className="min-h-screen py-16 bg-background">
      <SEO
        title="Grievance Redressal — GIFT City Wealth"
        description="Grievance Redressal Policy for GIFT City Wealth. Submit complaints and concerns to our Grievance Officer."
        canonical="https://www.giftcitywealth.in/grievance"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading font-bold text-4xl text-primary mb-8">Grievance Redressal Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-foreground-muted mb-6">
            <strong>GIFT City Wealth (Prop. Anup Vatyani)</strong>
          </p>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-primary mb-4">Purpose</h2>
            <p className="text-foreground-muted mb-4">
              This Grievance Redressal Policy outlines the process for users to submit complaints or concerns regarding the content, accessibility, or services provided by GIFT City Wealth.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-primary mb-4">Grievance Officer</h2>
            <div className="bg-muted p-6 rounded-lg">
              <p className="text-foreground-muted mb-2">
                <strong>Name:</strong> Anup Vatyani
              </p>
              <p className="text-foreground-muted mb-2">
                <strong>Email:</strong> grievance@giftcitywealth.in
              </p>
              <p className="text-foreground-muted mb-2">
                <strong>Phone:</strong> +91 95375 33533
              </p>
              <p className="text-foreground-muted">
                <strong>Address:</strong> GIFT City, Gandhinagar, Gujarat, India
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-primary mb-4">How to Submit a Grievance</h2>
            <p className="text-foreground-muted mb-4">
              Users can submit grievances through the following methods:
            </p>
            <ul className="list-disc pl-6 text-foreground-muted space-y-2">
              <li><strong>Email:</strong> Send a detailed description of your grievance to grievance@giftcitywealth.in</li>
              <li><strong>Phone:</strong> Call +91 95375 33533 during business hours (Monday-Friday, 10:00 AM - 6:00 PM IST)</li>
              <li><strong>Written Communication:</strong> Send a letter to our registered address at GIFT City, Gandhinagar, Gujarat, India</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-primary mb-4">Information to Include</h2>
            <p className="text-foreground-muted mb-4">
              When submitting a grievance, please include:
            </p>
            <ul className="list-disc pl-6 text-foreground-muted space-y-2">
              <li>Your full name and contact information</li>
              <li>A clear description of the issue or complaint</li>
              <li>Relevant dates, page URLs, or reference information</li>
              <li>Any supporting documentation or evidence</li>
              <li>Your preferred method of response</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-primary mb-4">Response Timeline</h2>
            <div className="bg-surface p-6 rounded-lg">
              <p className="text-foreground-muted mb-3">
                <strong>Acknowledgment:</strong> Within 48 hours of receiving your grievance, we will send an acknowledgment confirming receipt.
              </p>
              <p className="text-foreground-muted mb-3">
                <strong>Investigation:</strong> We will thoroughly investigate your complaint and may contact you for additional information if needed.
              </p>
              <p className="text-foreground-muted">
                <strong>Resolution:</strong> We aim to resolve all grievances within 30 days from the date of receipt. If more time is needed, we will inform you of the expected timeline.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-primary mb-4">Accessibility Complaints</h2>
            <p className="text-foreground-muted mb-4">
              Complaints related to accessibility issues are given priority. These will be escalated to our Nodal Officer for immediate attention.
            </p>
            <p className="text-foreground-muted">
              For accessibility-specific concerns, you may also directly contact: <strong>accessibility@giftcitywealth.in</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-primary mb-4">Escalation Process</h2>
            <p className="text-foreground-muted mb-4">
              If you are not satisfied with the resolution provided:
            </p>
            <ol className="list-decimal pl-6 text-foreground-muted space-y-2">
              <li>You may request a review of the decision by writing to grievance@giftcitywealth.in with "ESCALATION" in the subject line</li>
              <li>The matter will be reviewed by senior management</li>
              <li>You will receive a final response within 15 days of escalation</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-primary mb-4">Confidentiality</h2>
            <p className="text-foreground-muted">
              All grievances will be handled with strict confidentiality. Personal information provided during the grievance process will be used solely for the purpose of addressing your complaint and will not be shared with third parties without your consent, except as required by law.
            </p>
          </section>

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <p className="text-sm text-foreground-muted">
              <strong>Note:</strong> This grievance redressal mechanism is for issues related to the GIFT City Wealth website and its content. For investment-related complaints, please contact the appropriate regulatory authority or your financial advisor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grievance;
