import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, BookOpen, Scale, Users } from "lucide-react";
import { SEO } from "@/components/SEO";

const Resources = () => {
  const resourceCategories = [
    {
      icon: FileText,
      title: "GIFT City Investment Avenues",
      description: "Learn about AIFs, REITs, InvITs and other investment structures available in GIFT IFSC",
      link: "#"
    },
    {
      icon: Scale,
      title: "NRI Tax & Regulatory Efficiency",
      description: "Understand DTAA, Capital Gains, PAN Rules and tax implications for NRI investors",
      link: "#"
    },
    {
      icon: Users,
      title: "HNI Wealth Structuring",
      description: "Explore Family Office structures, Trust arrangements and wealth management strategies",
      link: "#"
    },
    {
      icon: BookOpen,
      title: "Official Guides & FAQs",
      description: "Access IFSCA regulatory summaries and official documentation",
      link: "#"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resourceCategories.map((category, index) => (
                <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                      <category.icon className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <CardTitle className="font-heading text-xl text-primary">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="font-body text-foreground-muted">
                      {category.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-muted p-6 rounded-lg">
              <p className="font-body text-sm text-foreground-muted text-center">
                <strong>Informational Use Only:</strong> All content on this page is for educational purposes and does not constitute investment advice. Readers should consult qualified advisors before making any investment decisions. Capital is at risk.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Resources;
