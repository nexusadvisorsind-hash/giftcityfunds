import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, BookOpen, Scale, Users, ChevronRight, ChevronDown } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const resourceCategories = [
    {
      icon: FileText,
      title: "GIFT City Investment Avenues",
      shortDescription: "Learn about AIFs, REITs, InvITs and other investment structures available in GIFT IFSC",
      fullContent: (
        <div className="space-y-4 text-foreground-muted">
          <p>
            GIFT City—India's International Financial Services Centre (IFSC)—is designed to enable global investors to access India-linked opportunities through a transparent, globally recognized platform.
            The city operates under the International Financial Services Centres Authority (IFSCA), which regulates fund structures, banking, insurance, and capital market activities in this zone.
          </p>
          
          <h3 className="font-heading font-semibold text-lg text-primary mt-6">1. Mutual Funds in IFSC</h3>
          <p>
            Mutual funds established in GIFT City are permitted to accept subscriptions from global and domestic investors under IFSCA regulations. These funds can invest in Indian and overseas securities, offering diversification under globally benchmarked compliance and risk frameworks. IFSC mutual funds also benefit from simplified foreign currency management and tax neutrality.
          </p>
          
          <h3 className="font-heading font-semibold text-lg text-primary mt-6">2. Alternate Investment Funds (AIFs)</h3>
          <p>
            AIFs in GIFT City operate under IFSCA (Fund Management) Regulations, 2022. They cater to sophisticated investors such as NRIs, FPIs, and institutional participants. Categories I, II, and III cover start-ups, private equity, debt, and hedge strategies. Units are typically issued in foreign currency, with lower operational friction for cross-border participation.
          </p>
          
          <h3 className="font-heading font-semibold text-lg text-primary mt-6">3. Capital Market Access</h3>
          <p>
            GIFT City houses India INX and NSE IFSC, international exchanges that allow listing and trading of equities, debt, and derivatives in foreign currency. This enables Indian entities and global investors to access global capital flows without navigating multiple jurisdictions.
          </p>
          
          <h3 className="font-heading font-semibold text-lg text-primary mt-6">4. Banking and Treasury Operations</h3>
          <p>
            International Banking Units (IBUs) in GIFT City offer foreign currency accounts, trade finance, and treasury services under a globally accepted regulatory framework. These banking units are treated as "non-resident" entities for FEMA purposes, allowing cross-border flexibility.
          </p>
          
          <p className="font-semibold mt-6">
            <strong>Summary:</strong> Investment avenues in GIFT City combine Indian market access with international financial infrastructure—bridging global investors and Indian growth while maintaining robust compliance and tax efficiency.
          </p>
        </div>
      )
    },
    {
      icon: Scale,
      title: "NRI Tax & Regulatory Efficiency",
      shortDescription: "Understand DTAA, Capital Gains, PAN Rules and tax implications for NRI investors",
      fullContent: (
        <div className="space-y-4 text-foreground-muted">
          <p>
            For Non-Resident Indians (NRIs), GIFT City provides a simplified regulatory structure and globally aligned taxation environment. The IFSC's framework enables NRIs to invest in India-linked assets without many of the legacy frictions of domestic systems.
          </p>
          
          <h3 className="font-heading font-semibold text-lg text-primary mt-6">1. Tax Advantages</h3>
          <p>
            Entities operating in GIFT City enjoy a 100% tax holiday on profits for 10 consecutive years within a 15-year window under Section 80LA of the Income Tax Act. For investors, certain capital gains earned through IFSC exchanges are exempt if securities are denominated in foreign currency and traded on IFSC exchanges.
          </p>
          
          <h3 className="font-heading font-semibold text-lg text-primary mt-6">2. Double Taxation Relief (DTAA)</h3>
          <p>
            NRIs investing via GIFT City benefit from India's DTAA network. This ensures that income taxed in India is not taxed again in the investor's country of residence, improving net post-tax returns.
          </p>
          
          <h3 className="font-heading font-semibold text-lg text-primary mt-6">3. Simplified Compliance</h3>
          <p>
            Investors can hold units or instruments in freely convertible foreign currency. IFSC banking units allow account maintenance, lending, and remittances with streamlined FEMA and KYC norms.
          </p>
          
          <h3 className="font-heading font-semibold text-lg text-primary mt-6">4. Regulatory Oversight</h3>
          <p>
            IFSCA acts as a single-window regulator, integrating standards from SEBI, RBI, IRDAI, and PFRDA. This unified model reduces duplication and improves transparency for NRI investors.
          </p>
          
          <p className="font-semibold mt-6">
            <strong>Summary:</strong> Through GIFT City, NRIs gain access to Indian investment opportunities in a low-friction, tax-efficient, and fully regulated environment—bridging offshore convenience with onshore compliance.
          </p>
        </div>
      )
    },
    {
      icon: Users,
      title: "HNI Wealth Structuring",
      shortDescription: "Explore Family Office structures, Trust arrangements and wealth management strategies",
      fullContent: (
        <div className="space-y-4 text-foreground-muted">
          <p>
            High-Net-Worth Individuals (HNIs) increasingly use GIFT City to create globally compliant and tax-efficient structures for wealth management, estate planning, and diversification.
          </p>
          
          <h3 className="font-heading font-semibold text-lg text-primary mt-6">1. Family Office Formation</h3>
          <p>
            HNIs can establish private family investment entities in GIFT City to consolidate multi-generational wealth management. These entities operate under IFSCA regulations, allowing investment in both Indian and global assets through a single jurisdiction.
          </p>
          
          <h3 className="font-heading font-semibold text-lg text-primary mt-6">2. Trusts and Succession Planning</h3>
          <p>
            The IFSC framework recognizes the use of trust structures for asset protection, philanthropy, and estate transfer. Offshore and onshore trusts can both be administered through IFSC-based service providers, ensuring confidentiality and compliance.
          </p>
          
          <h3 className="font-heading font-semibold text-lg text-primary mt-6">3. Investment Diversification</h3>
          <p>
            HNIs can allocate capital to global AIFs, funds, or IFSC-listed instruments in multiple currencies. This enables diversification beyond Indian markets while retaining Indian legal oversight.
          </p>
          
          <h3 className="font-heading font-semibold text-lg text-primary mt-6">4. Governance and Reporting</h3>
          <p>
            Entities within GIFT City are subject to FATCA and CRS standards, ensuring transparency and global acceptability. This makes IFSC-based vehicles suitable for international compliance and reputation-sensitive families.
          </p>
          
          <p className="font-semibold mt-6">
            <strong>Summary:</strong> GIFT City enables Indian HNIs to structure and manage wealth with international flexibility, consolidated governance, and seamless cross-border access—within a regulated Indian jurisdiction.
          </p>
        </div>
      )
    },
    {
      icon: BookOpen,
      title: "Official Guides & FAQs",
      shortDescription: "Access IFSCA regulatory summaries and official documentation",
      fullContent: (
        <div className="space-y-4 text-foreground-muted">
          <p>
            The International Financial Services Centres Authority (IFSCA) has established detailed regulatory frameworks to support fund management, banking, and financial services in GIFT City. Below is a structured summary of key reference information.
          </p>
          
          <h3 className="font-heading font-semibold text-lg text-primary mt-6">1. IFSCA Overview</h3>
          <p>
            IFSCA serves as the unified regulator for GIFT City, bringing together regulatory functions previously overseen by SEBI, RBI, IRDAI, and PFRDA. Its mandate includes licensing of funds, exchanges, insurance firms, and intermediaries in the IFSC zone.
          </p>
          
          <h3 className="font-heading font-semibold text-lg text-primary mt-6">2. Key Regulations and Circulars</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>IFSCA (Fund Management) Regulations, 2022</li>
            <li>IFSCA (Banking) Regulations, 2020</li>
            <li>IFSCA (Insurance Intermediaries) Regulations, 2021</li>
          </ul>
          <p>These documents set operational, disclosure, and risk management norms for institutions and investors.</p>
          
          <h3 className="font-heading font-semibold text-lg text-primary mt-6">3. Frequently Asked Points</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Who can invest?</strong> Non-resident individuals and institutions.</li>
            <li><strong>What currency is used?</strong> Primarily USD or other freely convertible currencies.</li>
            <li><strong>How is GIFT City different from domestic SEZs?</strong> It operates as an international jurisdiction within India, with global financial rules.</li>
          </ul>
          
          <h3 className="font-heading font-semibold text-lg text-primary mt-6">4. Governance and Policy Environment</h3>
          <p>
            IFSCA works under India's Ministry of Finance and aligns domestic policy with international standards, promoting India as a global financial hub.
          </p>
          
          <p className="font-semibold mt-6">
            <strong>Summary:</strong> IFSCA's integrated regulations make GIFT City India's gateway for global finance, offering transparency, stability, and a future-ready ecosystem for institutions and investors alike.
          </p>
        </div>
      )
    }
  ];

  return (
    <>
      <SEO
        title="GIFT City IFSC Resources & Official Guides | GiftCityWealth.in"
        description="Official guides, FAQs, and regulatory summaries about India's GIFT City IFSC and IFSCA. Educational content only."
        canonical="https://www.giftcitywealth.in/resources"
      />
      
      <div className="min-h-screen">
        {/* Page Header */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6 text-center">
              GIFT City IFSC Resources and Guides
            </h1>
            <p className="font-body text-lg text-foreground-muted max-w-3xl mx-auto text-center">
              Access comprehensive educational resources, official guides, and regulatory information about India's International Financial Services Centre.
            </p>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {resourceCategories.map((category, index) => (
                <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                          <category.icon className="h-6 w-6 text-secondary-foreground" />
                        </div>
                        <div>
                          <CardTitle className="font-heading text-xl text-primary mb-2">
                            {category.title}
                          </CardTitle>
                          <CardDescription className="font-body text-foreground-muted">
                            {category.shortDescription}
                          </CardDescription>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                        className="ml-4"
                      >
                        {expandedCard === index ? (
                          <ChevronDown className="h-5 w-5" />
                        ) : (
                          <ChevronRight className="h-5 w-5" />
                        )}
                      </Button>
                    </div>
                  </CardHeader>
                  {expandedCard === index && (
                    <CardContent className="pt-0">
                      <div className="pl-16">
                        {category.fullContent}
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-muted p-6 rounded-lg">
              <p className="font-body text-sm text-foreground-muted text-center mb-4">
                <strong>Informational Use Only:</strong> All content on this page is for educational purposes and does not constitute investment advice. Readers should consult qualified advisors before making any investment decisions. Capital is at risk.
              </p>
              <p className="font-body text-sm text-foreground-muted text-center">
                All information provided on this website is for educational and informational purposes only. It does not constitute investment, legal, or tax advice. Investors should consult licensed professionals before making any financial decisions.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Resources;
