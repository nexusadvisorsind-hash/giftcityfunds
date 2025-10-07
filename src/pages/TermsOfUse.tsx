import { SEO } from "@/components/SEO";

const TermsOfUse = () => {
  return (
    <>
      <SEO
        title="Terms of Use | GiftCity Wealth Advisory"
        description="Terms of use for GiftCity Wealth Advisory - Anup Vatyani (ARN 106715) - educational information about GIFT City IFSC."
        canonical="https://www.giftcitywealth.in/terms-of-use"
      />
      
      <div className="min-h-screen py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl text-primary mb-8">Terms of Use</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="font-body text-foreground-muted mb-6">
              GiftCity Wealth Advisory is an informational and educational website focused on GIFT IFSC.
              The site and its owner Anup Vatyani (MFD ARN 106715) are a registered Mutual Fund Distributor and do not provide personalized investment or financial planning through this platform.
            </p>
            
            <p className="font-body text-foreground-muted mb-6">
              The information shared is general and should not be considered as personalized advice.
              Users must consult licensed professionals before acting on any information.
            </p>
            
            <p className="font-body text-foreground-muted">
              Use of this site implies agreement to these terms.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfUse;
