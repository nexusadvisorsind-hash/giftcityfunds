import { SEO } from "@/components/SEO";

const TermsOfUse = () => {
  return (
    <>
      <SEO
        title="Terms of Use | GiftCityWealth.in"
        description="Terms of use for GiftCityWealth.in - educational information about GIFT City IFSC."
        canonical="https://www.giftcitywealth.in/terms-of-use"
      />
      
      <div className="min-h-screen py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl text-primary mb-8">Terms of Use</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="font-body text-foreground-muted mb-6">
              GiftCityWealth.in is an informational and educational website focused on GIFT IFSC.
              The site and its owner Anup Vatyani are not SEBI-registered investment advisors or intermediaries.
            </p>
            
            <p className="font-body text-foreground-muted mb-6">
              The information shared is general and should not be considered advice.
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
