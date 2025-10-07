import { SEO } from "@/components/SEO";

const AccessibilityStatement = () => {
  return (
    <>
      <SEO
        title="Accessibility Statement | GiftCity Wealth Advisory"
        description="Accessibility statement for GiftCity Wealth Advisory - Anup Vatyani (ARN 106715) - our commitment to WCAG 2.1 AA standards."
        canonical="https://www.giftcitywealth.in/accessibility-statement"
      />
      
      <div className="min-h-screen py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl text-primary mb-8">Accessibility Statement</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="font-body text-foreground-muted mb-6">
              GiftCity Wealth Advisory is committed to accessibility under WCAG 2.1 AA standards.
              We strive for keyboard navigation, clear contrast, and alt-text on images.
            </p>
            
            <p className="font-body text-foreground-muted mb-6">
              For feedback or accessibility concerns, contact info@giftcitywealth.in.
            </p>
            
            <p className="font-body text-foreground-muted">
              <strong>Nodal Officer:</strong> Anup Vatyani (MFD ARN 106715), Ahmedabad, Gujarat.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessibilityStatement;
