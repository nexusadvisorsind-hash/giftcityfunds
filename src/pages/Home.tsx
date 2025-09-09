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
      <section className="w-full">
        <img 
          src={heroImage} 
          alt="GIFT City Financial Hub" 
          className="w-full h-auto object-cover"
        />
        <div className="py-8 bg-background">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="gold" size="lg" className="text-lg px-8 py-4">
                <Link to="/investments">
                  Explore Funds
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
                <Link to="/contact">Contact Advisor</Link>
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
              Operate globally with robust regulation and seamless cross-border flows.
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
            Speak with an Advisor
          </h2>
          <p className="font-body text-lg text-foreground-muted max-w-2xl mx-auto mb-8">
            Our team will guide you on structures and next steps.
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