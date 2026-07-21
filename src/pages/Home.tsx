import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Users,
  ArrowRight
} from "lucide-react";
import { SEO } from "@/components/SEO";

const Home = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GIFT City Wealth",
    "url": "https://giftcityfunds.in",
    "logo": "https://giftcityfunds.in/logo.png",
    "description": "An educational resource on GIFT City and IFSC investment frameworks for NRIs and HNIs.",
    "founder": {
      "@type": "Person",
      "name": "Anup Vatyani",
      "jobTitle": "Mutual Fund Distributor",
      "identifier": "AMFI ARN-106815"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9537533533",
      "contactType": "Customer Support",
      "email": "info@giftcityfunds.in"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://giftcityfunds.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://giftcityfunds.in/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://giftcityfunds.in/#webpage",
    "url": "https://giftcityfunds.in/",
    "name": "GIFT City Wealth | IFSC Investment Information Platform",
    "description": "Educational platform on GIFT City IFSC investment structures, funds, and regulatory framework."
  };

  const features = [
    {
      icon: Globe,
      title: "Global Financial Hub",
      description: "Access to international markets through India's premier IFSC"
    },
    {
      icon: Shield,
      title: "Regulatory Advantage",
      description: "IFSCA regulated environment with streamlined compliance"
    },
    {
      icon: MapPin,
      title: "Strategic Location",
      description: "Gateway between Eastern and Western financial markets"
    }
  ];

  const advantages = [
    {
      icon: Banknote,
      title: "Currency Freedom",
      description: "Invest in multiple currencies without restrictions"
    },
    {
      icon: FileText,
      title: "No FEMA Constraints",
      description: "Simplified regulatory framework for international investments"
    },
    {
      icon: Building,
      title: "Tax-Efficient Structures",
      description: "Optimized tax benefits through IFSC regulations"
    },
    {
      icon: TrendingUp,
      title: "Daily Liquidity",
      description: "Flexible redemption options with daily liquidity"
    }
  ];

  const fundCategories = [
    {
      icon: TrendingUp,
      title: "Equity Funds",
      description: "High-growth sectors with global exposure",
      color: "text-corporate-blue"
    },
    {
      icon: PieChart,
      title: "Hybrid Funds",
      description: "Balanced allocation across asset classes",
      color: "text-corporate-gold"
    },
    {
      icon: BarChart,
      title: "Passive Investments",
      description: "Index-linked strategies with low fees",
      color: "text-corporate-blue"
    },
    {
      icon: Target,
      title: "Alternative Investments",
      description: "PE, Real Estate, and Hedge Fund strategies",
      color: "text-corporate-gold"
    }
  ];

  return (
    <>
      <SEO
        title="GIFT City Wealth | IFSC Investment Information Platform"
        description="Educational platform on GIFT City IFSC investment structures, funds, and regulatory framework by Anup Vatyani (MFD ARN 106715)."
        canonical="https://giftcityfunds.in/"
        schema={webPageSchema}
        breadcrumbs={[
          { name: "Home", url: "https://giftcityfunds.in/" }
        ]}
      />
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      
      <div className="min-h-screen">
        {/* Hero Section */}
      <section className="w-full relative hero-section">
        <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-gradient-to-b from-background to-surface">
          <img
            src="/images/hero-optimized-2025.webp"
            alt="GIFT City IFSC skyline Gujarat financial district at dusk"
            className="hero-image w-full h-full object-cover object-center brightness-105 contrast-110"
            width="1920"
            height="1080"
            fetchPriority="high"
            decoding="sync"
          />
        </div>
        <div className="py-8 bg-background">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
              Informational Insights on GIFT City and IFSC Funds
            </h1>
            <p className="font-body text-lg text-foreground-muted max-w-4xl mx-auto mb-8">
              Educational resources by Anup Vatyani (Mutual Fund Distributor ARN 106715) — Simplifying GIFT City investment frameworks for NRIs and HNIs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="gold" size="lg" className="text-lg px-8 py-4">
                <Link to="/investments">
                  Explore Funds
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* IFSC Advantage Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
              India's IFSC Advantage
            </h2>
            <p className="font-body text-lg text-foreground-muted max-w-3xl mx-auto">
              India's first International Financial Services Centre offers a unified regulatory framework, global market access, and a business-friendly environment. GIFT City Funds highlights the advantages that make it a hub for international finance.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Advantages */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
              Why Invest via GIFT City
            </h2>
            <p className="font-body text-lg text-foreground-muted max-w-3xl mx-auto">
              Global investors consider GIFT City for its currency flexibility, tax-efficient structures, and streamlined regulatory approach. GIFT City Funds shares perspectives on how these features support cross-border investment flows.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                  {advantage.title}
                </h3>
                <p className="font-body text-foreground-muted text-sm">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fund Categories Snapshot */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
              Fund Categories
            </h2>
            <p className="font-body text-lg text-foreground-muted max-w-3xl mx-auto">
              GIFT City Funds covers the key categories of strategies structured under the IFSC — Equity, Hybrid, Passive, and Alternative — for awareness and understanding of the investment landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {fundCategories.map((category, index) => (
              <div key={index} className="text-center p-6 bg-surface rounded-lg">
                <div className={`w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className={`h-6 w-6 text-secondary-foreground`} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                  {category.title}
                </h3>
                <p className="font-body text-foreground-muted text-sm">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="font-heading font-bold text-xl text-primary">
              Minimum Investment: $150,000
            </p>
          </div>
        </div>
      </section>

      {/* Contact Teaser */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
            Speak to us to know more about GIFT City Funds
          </h2>
          <p className="font-body text-lg text-foreground-muted max-w-2xl mx-auto mb-8">
            Speak to us to know more about GIFT City Funds and explore the structures shaping India's international finance hub.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="gold" size="lg" className="text-lg px-8 py-4">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
              <Link to="/about">Learn About GIFT City</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
              <Link to="/resources">View Resources</Link>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;