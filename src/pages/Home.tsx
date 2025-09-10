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
import heroImage from "/lovable-uploads/178cd483-83cc-496d-bd09-df449dbf3c00.png";
import manWithGlobeImage from "/lovable-uploads/e80b2379-863d-4ad3-a803-8a865b59a949.png";
import financeSecurityImage from "/lovable-uploads/2229ba3b-6463-4ce4-9082-69086106aa4e.png";
import moneyBalanceImage from "/lovable-uploads/ec8c2ed1-e4ab-41d7-8b14-52e3df8a2e66.png";
import businessDiscussionImage from "/lovable-uploads/13dd1c05-85f5-44db-8e96-ba7926f34d41.png";

const Home = () => {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative">
        <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <img 
            src={heroImage} 
            alt="GIFT City Financial Hub - India's Premier International Financial Services Centre" 
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            loading="eager"
            decoding="sync"
          />
        </div>
        <div className="py-8 bg-background">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <p className="font-body text-lg text-foreground-muted max-w-4xl mx-auto mb-8">
              GIFT City Funds provides insights into India's premier International Financial Services Centre, showcasing its role as a gateway for global capital and regulated cross-border finance.
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
          <Button asChild variant="gold" size="lg" className="text-lg px-8 py-4">
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;