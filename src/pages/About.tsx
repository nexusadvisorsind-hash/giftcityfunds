import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Shield, MapPin, Building2, TrendingUp, Users } from "lucide-react";
import manWithGlobeImage from "/lovable-uploads/e80b2379-863d-4ad3-a803-8a865b59a949.png";
import { SEO } from "@/components/SEO";

const About = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "About GiftCityWealth.in — GIFT IFSC Explained",
    "description": "Learn about the vision, regulatory framework, and ecosystem of GIFT City. Independent, educational resources about India's International Financial Services Centre.",
    "author": {
      "@type": "Organization",
      "name": "GiftCityWealth.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GiftCityWealth.in"
    }
  };
  const features = [
    {
      icon: Globe,
      title: "International Financial Services Centre",
      description: "GIFT IFSC serves as India's gateway to international financial services, operating under IFSCA regulations. Educational overview of how IFSC enables cross-border financial operations."
    },
    {
      icon: Shield,
      title: "IFSCA Regulatory Framework",
      description: "The International Financial Services Centres Authority (IFSCA) provides unified regulation for all financial services in GIFT IFSC. Educational insights into the regulatory approach and compliance framework."
    },
    {
      icon: MapPin,
      title: "Strategic Position",
      description: "Positioned in Gujarat, India, GIFT IFSC bridges time zones between Asian and European financial markets, understanding how this enables multi-timezone operations."
    }
  ];

  const keyStats = [
    { number: "$50B+", label: "Assets Under Management", source: "IFSCA Annual Report 2023" },
    { number: "500+", label: "Registered Entities", source: "IFSCA Website" },
    { number: "24/7", label: "Operations Capability", source: "GIFT City Framework" },
    { number: "15+", label: "Major Currencies", source: "IFSCA Guidelines" }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="About GiftCityWealth.in — GIFT IFSC Explained"
        description="Learn about the vision, regulatory framework, and ecosystem of GIFT City. Independent, educational resources about India's International Financial Services Centre."
        canonical="https://www.giftcitywealth.in/about"
        schema={schema}
      />
      {/* Overview Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
                About GiftCityWealth.in — GIFT IFSC Explained
              </h1>
              <div className="space-y-4 font-body text-foreground-muted">
                 <p className="text-lg">
                   GiftCityWealth.in is an independent, informational resource dedicated to explaining India's International Financial Services Centre (GIFT IFSC) and the regulatory framework provided by IFSCA (International Financial Services Centres Authority).
                 </p>
                 <p>
                   GIFT City (Gujarat International Finance Tec-City) is India's first IFSC, established to provide world-class financial infrastructure and regulatory framework for international financial services. Located in Gandhinagar, Gujarat, it operates under IFSCA regulations.
                 </p>
                 <p>
                   This website provides educational content only about GIFT IFSC structures, IFSCA regulations, fund frameworks, tax structures, and operational aspects. We do not provide investment advice, solicit investments, or facilitate transactions.
                 </p>
                 <p className="text-sm text-foreground-subtle italic">
                   All information is for educational purposes. Refer to official IFSCA notifications and consult professional advisors for specific guidance.
                 </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={manWithGlobeImage} 
                alt="GIFT City IFSC - International Financial Services Centre in India" 
                className="rounded-lg shadow-corporate w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
              GIFT IFSC Overview — Key Metrics
            </h2>
            <p className="font-body text-lg text-foreground-muted max-w-2xl mx-auto">
              Educational snapshot of GIFT IFSC growth and capabilities (data from official sources)
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {keyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading font-bold text-4xl md:text-5xl text-accent mb-2">
                  {stat.number}
                </div>
                <div className="font-body text-foreground-muted mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-foreground-subtle">
                  Source: {stat.source}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-foreground-subtle mt-8">
            Statistics as of 2023. For current data, visit <a href="https://ifsca.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">IFSCA.gov.in</a>
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
              Understanding GIFT IFSC Framework
            </h2>
            <p className="font-body text-lg text-foreground-muted max-w-2xl mx-auto">
              Educational overview of key structural features that distinguish GIFT IFSC from domestic Indian markets
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift border-border/50 h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 gradient-corporate rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-heading text-xl text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-body text-foreground-muted leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Framework */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
              GIFT IFSC Operational Framework
            </h2>
            <p className="font-body text-lg text-foreground-muted max-w-2xl mx-auto">
              Educational overview of structural and operational features under IFSCA regulations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="institutional-card hover-lift">
              <CardHeader>
                <Building2 className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="font-heading text-lg text-primary">Tax Framework</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Educational overview of tax structures available for eligible IFSC entities, including potential exemptions and incentives under applicable tax laws. Consult tax professionals for advice.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="institutional-card hover-lift">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="font-heading text-lg text-primary">Currency Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Understanding multi-currency operations framework in GIFT IFSC, enabling transactions in major foreign currencies as per IFSCA guidelines and FEMA exemptions.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="institutional-card hover-lift">
              <CardHeader>
                <Users className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="font-heading text-lg text-primary">Participant Eligibility</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Educational information on participant categories including NRIs, foreign nationals, and institutional investors. Specific eligibility varies by product and IFSCA regulations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;