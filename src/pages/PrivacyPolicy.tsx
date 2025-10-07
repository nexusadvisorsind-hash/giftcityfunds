import { SEO } from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy | GiftCity Wealth Advisory"
        description="Privacy policy for GiftCity Wealth Advisory - Anup Vatyani (ARN 106715) - how we collect, use, and protect your information."
        canonical="https://www.giftcitywealth.in/privacy-policy"
      />
      
      <div className="min-h-screen py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl text-primary mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="font-body text-foreground-muted mb-6">
              <strong>GiftCity Wealth Advisory (Anup Vatyani, MFD ARN 106715) — Privacy Policy</strong>
            </p>
            
            <p className="font-body text-foreground-muted mb-6">
              We collect limited data (name, email, phone, WhatsApp) to send informational downloads and regulatory updates.
              We do not sell data. Unsubscribe anytime via email.
            </p>
            
            <p className="font-body text-foreground-muted mb-6">
              GiftCity Wealth Advisory values your privacy. The site does not collect personal information except through voluntary submissions (e.g., contact forms).
              We do not share or sell any data to third parties. Cookies may be used for analytics to improve user experience.
              By using this website, you consent to the minimal data practices described.
            </p>
            
            <p className="font-body text-foreground-muted">
              <strong>Contact:</strong> info@giftcitywealth.in
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
