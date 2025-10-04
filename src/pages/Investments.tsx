import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Banknote, 
  FileText, 
  Building, 
  TrendingUp,
  PieChart,
  BarChart,
  Target,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import heroImage from "/lovable-uploads/178cd483-83cc-496d-bd09-df449dbf3c00.png";
import moneyBalanceImage from "/lovable-uploads/ec8c2ed1-e4ab-41d7-8b14-52e3df8a2e66.png";

const Investments = () => {
  const advantages = [
    {
      icon: Banknote,
      title: "Currency Freedom",
      description: "Invest across multiple currencies including USD, EUR, GBP, and other major currencies without foreign exchange restrictions or FEMA compliance burdens."
    },
    {
      icon: FileText,
      title: "No FEMA Constraints",
      description: "Operate under IFSC regulations that eliminate traditional FEMA limitations, providing greater flexibility for international investment strategies and portfolio management."
    },
    {
      icon: Building,
      title: "Tax-Efficient Structures",
      description: "Benefit from GIFT City's favorable tax regime including exemptions on capital gains, dividend distribution tax, and other fiscal advantages for qualifying investments."
    },
    {
      icon: TrendingUp,
      title: "Daily Liquidity",
      description: "Enjoy flexible redemption options with daily liquidity features, ensuring you can access your investments when needed without lengthy lock-in periods."
    }
  ];

  const fundCategories = [
    {
      icon: TrendingUp,
      title: "Equity Funds",
      description: "High-growth sectors with global exposure",
      details: [
        "Global technology and innovation",
        "Emerging market opportunities",
        "Developed market blue-chip investments",
        "Sector-specific growth strategies"
      ],
      color: "text-corporate-blue",
      bgColor: "bg-corporate-blue/10"
    },
    {
      icon: PieChart,
      title: "Hybrid Funds",
      description: "Balanced allocation across asset classes",
      details: [
        "Multi-asset diversified portfolios",
        "Dynamic asset allocation strategies",
        "Risk-balanced investment approach",
        "Income and growth objectives"
      ],
      color: "text-corporate-gold",
      bgColor: "bg-corporate-gold/10"
    },
    {
      icon: BarChart,
      title: "Passive Investments",
      description: "Index-linked strategies with low fees",
      details: [
        "Global index fund exposure",
        "ETF-based investment strategies",
        "Low-cost passive management",
        "Broad market diversification"
      ],
      color: "text-corporate-blue",
      bgColor: "bg-corporate-blue/10"
    },
    {
      icon: Target,
      title: "Alternative Investments",
      description: "PE, Real Estate, and Hedge Fund strategies",
      details: [
        "Private equity opportunities",
        "Real estate investment trusts",
        "Hedge fund strategies",
        "Infrastructure and commodities"
      ],
      color: "text-corporate-gold",
      bgColor: "bg-corporate-gold/10"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Content starts immediately without hero banner */}

      {/* Investment Advantages */}
      <section className="py-16 bg-background mt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-8">
                Investment Advantages
              </h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center space-x-3">
                    <Banknote className="h-6 w-6 text-secondary" />
                    <span className="font-body text-lg text-primary">Currency Freedom</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="h-6 w-6 text-secondary" />
                    <span className="font-body text-lg text-primary">No FEMA Constraints</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="h-6 w-6 text-secondary" />
                    <span className="font-body text-lg text-primary">Tax-Efficient Structures</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-6 w-6 text-secondary" />
                    <span className="font-body text-lg text-primary">Daily Liquidity</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={moneyBalanceImage} 
                alt="Investment Balance Illustration" 
                className="rounded-lg shadow-corporate w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Minimum Investment Notice */}
      <section className="py-8 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="text-lg font-heading px-6 py-3">
            Minimum Investment: $150,000
          </Badge>
          <p className="font-body text-foreground-muted mt-4 max-w-2xl mx-auto">
            Our investment solutions are designed for sophisticated investors seeking global diversification through GIFT City's regulatory advantages.
          </p>
        </div>
      </section>

      {/* Fund Categories */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
              Fund Categories
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="text-left">
              <p className="font-body text-lg text-primary mb-2">
                <strong>Equity</strong> — High-growth sectors with global exposure
              </p>
            </div>
            <div className="text-left">
              <p className="font-body text-lg text-primary mb-2">
                <strong>Hybrid</strong> — Balanced allocation
              </p>
            </div>
            <div className="text-left">
              <p className="font-body text-lg text-primary mb-2">
                <strong>Passive</strong> — Index-linked strategies
              </p>
            </div>
            <div className="text-left">
              <p className="font-body text-lg text-primary mb-2">
                <strong>Alternative</strong> — PE, RE, Hedge Funds
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="font-heading font-bold text-xl text-primary">
              Minimum Investment: $150,000
            </p>
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
              Investment Process
            </h2>
            <p className="font-body text-lg text-foreground-muted max-w-2xl mx-auto">
              A streamlined approach to global investing through GIFT City
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-border/50">
              <CardHeader>
                <div className="w-12 h-12 gradient-corporate text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-bold text-xl">
                  1
                </div>
                <CardTitle className="font-heading text-lg text-primary">Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Initial consultation to understand your investment objectives, risk profile, and global diversification goals.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50">
              <CardHeader>
                <div className="w-12 h-12 gradient-gold text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-bold text-xl">
                  2
                </div>
                <CardTitle className="font-heading text-lg text-primary">Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Streamlined KYC and onboarding process designed for international investors with GIFT City compliance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50">
              <CardHeader>
                <div className="w-12 h-12 gradient-corporate text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-bold text-xl">
                  3
                </div>
                <CardTitle className="font-heading text-lg text-primary">Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Execute your investment strategy with ongoing portfolio management and regular performance reporting.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-hover">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
            Want to Know More?
          </h2>
          <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact us to learn more about GIFT City funds and how they can provide global investment opportunities.
          </p>
          <Button asChild variant="gold" size="lg">
            <Link to="/contact">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Investments;