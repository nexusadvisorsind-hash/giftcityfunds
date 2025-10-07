import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Globe, 
  Shield, 
  MapPin, 
  Banknote, 
  FileText, 
  Building, 
  TrendingUp,
  PieChart,
  BarChart,
  Target,
  ArrowRight,
  BookOpen
} from "lucide-react";
import { SEO } from "@/components/SEO";

const Home = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "GIFT City Wealth",
    "alternateName": "GIFT City Wealth (Prop. Anup Vatyani)",
    "url": "https://www.giftcitywealth.in",
    "logo": "https://www.giftcitywealth.in/logo.png",
    "description": "Financial Information Platform providing IFSC & GIFT City fund insights.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "GIFT City",
      "addressLocality": "Gandhinagar",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "telephone": "+91 95375 33533",
    "email": "info@nexusadvisors.in",
    "sameAs": [
      "https://www.linkedin.com/company/giftcitywealth"
    ]
  };
  const features = [
    {
      icon: Globe,
      title: "Global Financial Hub",
      description: "Understanding India's premier international financial services centre and its role in global markets"
    },
    {
      icon: Shield,
      title: "Regulatory Framework",
      description: "Educational insights into IFSCA's unified regulatory approach and compliance requirements"
    },
    {
      icon: MapPin,
      title: "Strategic Location",
      description: "Exploring GIFT City's position as a bridge between Eastern and Western financial markets"
    }
  ];

  const advantages = [
    {
      icon: Banknote,
      title: "Currency Flexibility",
      description: "Understanding multi-currency operations within GIFT IFSC framework"
    },
    {
      icon: FileText,
      title: "Simplified Regulations",
      description: "Educational overview of IFSC's streamlined regulatory environment"
    },
    {
      icon: Building,
      title: "Tax Structures",
      description: "Learning about tax frameworks available for eligible IFSC entities"
    },
    {
      icon: TrendingUp,
      title: "Operational Framework",
      description: "Understanding 24/7 operations and global connectivity infrastructure"
    }
  ];

  const fundCategories = [
    {
      icon: TrendingUp,
      title: "Equity Strategies",
      description: "Educational content on equity fund structures in IFSC",
      color: "text-primary"
    },
    {
      icon: PieChart,
      title: "Hybrid Structures",
      description: "Understanding balanced allocation frameworks",
      color: "text-accent"
    },
    {
      icon: BarChart,
      title: "Passive Strategies",
      description: "Learning about index-linked investment approaches",
      color: "text-primary"
    },
    {
      icon: Target,
      title: "Alternative Investments",
      description: "Educational resources on PE, real estate, and hedge fund frameworks",
      color: "text-accent"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="GIFT City Funds — IFSC & NRI Investment Insights"
        description="Independent research on GIFT City fund structures and tax rules for HNI investors."
        canonical="https://www.giftcitywealth.in"
        schema={schema}
      />
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yIDEuNS0zLjUgMy41LTMuNVMzOS41IDMyIDQxIDM0djEuNWMwIDItMS41IDMuNS0zLjUgMy41UzM2IDM3LjUgMzYgMzUuNVYzNHoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
              GIFT City Funds — India's Global Financial Gateway
            </h1>
            <p className="font-body text-xl md:text-2xl text-primary-foreground/90 mb-10 leading-relaxed">
              Independent research and regulatory insights on IFSC fund structures, NRI tax rules and wealth structuring for HNI investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg" className="text-lg px-8 py-6">
                <a href="/downloads/GIFT-City-30-Point-Checklist.pdf" download>
                  📘 Download the 30-Point IFSC Readiness Checklist (Free PDF)
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                <Link to="/resources">
                  🔎 Explore Resources
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="font-body text-foreground-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is GIFT IFSC - Pillar Content */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-8 text-center">
              What is GIFT City IFSC?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground-muted text-lg leading-relaxed mb-6">
                GIFT City (Gujarat International Finance Tec-City) is India's first and foremost International Financial Services Centre (IFSC), established to facilitate world-class financial services comparable to global financial hubs like Singapore, Dubai, and Hong Kong.
              </p>
              <p className="text-foreground-muted text-lg leading-relaxed mb-6">
                Located in Gandhinagar, Gujarat, GIFT IFSC operates under a special regulatory framework provided by the International Financial Services Centres Authority (IFSCA). This unified regulator oversees all financial services activities within the IFSC, including banking, capital markets, insurance, and fund management.
              </p>
              <p className="text-foreground-muted text-lg leading-relaxed mb-6">
                The IFSC framework enables financial institutions and market participants to offer a wide range of financial products and services to non-resident Indians (NRIs), foreign investors, and multinational corporations, with operations conducted in foreign currencies.
              </p>
              <div className="bg-muted p-6 rounded-lg mt-8">
                <h3 className="font-heading font-semibold text-xl text-primary mb-4">Key Regulatory Features:</h3>
                <ul className="space-y-2 text-foreground-muted">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Single unified regulator (IFSCA) for all financial services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Simplified regulatory compliance compared to domestic Indian regulations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>100% foreign ownership permitted in most activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Currency flexibility - operations in major foreign currencies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Tax incentives for eligible entities (subject to applicable laws)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding IFSC Advantages */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
              Understanding IFSC Advantages
            </h2>
            <p className="font-body text-lg text-foreground-muted max-w-3xl mx-auto">
              Educational overview of key structural and operational features that distinguish GIFT IFSC from domestic Indian markets
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="institutional-card text-center">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <advantage.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-primary mb-3">
                    {advantage.title}
                  </h3>
                  <p className="font-body text-foreground-muted text-sm">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fund Structures Overview */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
              Fund Structure Categories
            </h2>
            <p className="font-body text-lg text-foreground-muted max-w-3xl mx-auto">
              Educational overview of fund structure types operating within GIFT IFSC regulatory framework
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {fundCategories.map((category, index) => (
              <Card key={index} className="institutional-card hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <category.icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                        {category.title}
                      </h3>
                      <p className="font-body text-foreground-muted text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <p className="font-body text-foreground-muted mb-4">
              <strong>Note:</strong> Eligibility and investment minimums vary by product and IFSCA regulations. Typical participation is limited to institutional and accredited investors.
            </p>
            <p className="text-sm text-foreground-subtle">
              Refer to official IFSCA circulars and individual fund documentation for specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-accent-foreground mb-6">
            Have Questions About GIFT City IFSC?
          </h2>
          <p className="font-body text-lg text-accent-foreground/80 mb-8">
            Submit your questions and we'll provide educational information to help you understand GIFT IFSC better.
          </p>
          <Button asChild variant="default" size="lg" className="text-lg px-8 py-6">
            <Link to="/ask-question">
              Ask a Question
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Home;
