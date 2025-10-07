import { SEO } from "@/components/SEO";

const Disclaimer = () => {
  return (
    <>
      <SEO
        title="Disclaimer | GiftCity Wealth Advisory"
        description="Disclaimer for GiftCity Wealth Advisory - informational content only, no personalized investment advice."
        canonical="https://www.giftcitywealth.in/disclaimer"
      />
      
      <div className="min-h-screen py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl text-primary mb-8">Disclaimer</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="font-body text-foreground-muted">
              All content on giftcitywealth.in is for general information and education only.
            </p>
            
            <p className="font-body text-foreground-muted">
              GiftCity Wealth Advisory and its owner Anup Vatyani (MFD ARN 106715) do not provide personalized investment, financial planning, or portfolio management through this website.
            </p>
            
            <p className="font-body text-foreground-muted">
              Nothing here constitutes a solicitation to buy or sell any security. Users must verify facts via official scheme documents and consult qualified professionals before investing.
            </p>
            
            <p className="font-body text-foreground-muted">
              <strong>Mutual Fund investments are subject to market risk. Please read all scheme related documents carefully before investing.</strong>
            </p>
            
            <p className="font-body text-foreground-muted mt-8">
              <strong>Contact:</strong> info@giftcitywealth.in
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
