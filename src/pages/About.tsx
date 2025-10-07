import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Shield, MapPin, Building2, TrendingUp, Users } from "lucide-react";
import heroImage from "/lovable-uploads/178cd483-83cc-496d-bd09-df449dbf3c00.png";
import manWithGlobeImage from "/lovable-uploads/e80b2379-863d-4ad3-a803-8a865b59a949.png";

const About = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Financial Hub",
      description: "GIFT City serves as India's gateway to international finance, connecting domestic markets with global opportunities. Our strategic location provides unparalleled access to both Eastern and Western financial markets."
    },
    {
      icon: Shield,
      title: "Regulatory Advantage (IFSCA)",
      description: "Regulated by the International Financial Services Centres Authority (IFSCA), GIFT City offers a robust regulatory framework that balances investor protection with operational flexibility for global financial services."
    },
    {
      icon: MapPin,
      title: "Strategic Location",
      description: "Positioned between major Asian and European financial centers, GIFT City operates across multiple time zones, enabling 24/7 financial services and seamless global market access."
    }
  ];

  const keyStats = [
    { number: "$50B+", label: "Assets Under Management" },
    { number: "200+", label: "Financial Institutions" },
    { number: "24/7", label: "Market Access" },
    { number: "15+", label: "Currencies Supported" }
  ];

  return (
    <div className="min-h-screen">{/* Content starts immediately without hero banner */}

      {/* Overview Section */}
      <section className="py-16 bg-background mt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
                Transforming Global Finance
              </h2>
              <div className="space-y-4 font-body text-foreground-muted">
                 <p>
                   GIFT City is India's first IFSC offering global market access, IFSCA regulation, and tax benefits. As the country's premier International Financial Services Centre, GIFT City provides unparalleled opportunities for global financial services with world-class regulatory framework.
                 </p>
                 <p>
                   Located in Gujarat, India, GIFT City serves as the gateway between Eastern and Western financial markets, offering international investors seamless access to Indian opportunities while enabling Indian entities to access global markets with enhanced flexibility and reduced regulatory constraints.
                 </p>
                 <p>
                   Through IFSCA's robust regulatory environment, GIFT City maintains international standards while providing innovative solutions for cross-border financial services, making it the ideal destination for sophisticated global investment strategies.
                 </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={manWithGlobeImage} 
                alt="Man with Globe - Global Financial Reach" 
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
              GIFT City by Numbers
            </h2>
            <p className="font-body text-lg text-foreground-muted max-w-2xl mx-auto">
              Leading indicators of growth and global impact
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {keyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading font-bold text-4xl md:text-5xl text-secondary mb-2">
                  {stat.number}
                </div>
                <div className="font-body text-foreground-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
              Key Features & Advantages
            </h2>
            <p className="font-body text-lg text-foreground-muted max-w-2xl mx-auto">
              Discover what makes GIFT City the preferred destination for global financial services
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

      {/* Benefits for Investors */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
              Benefits for Global Investors
            </h2>
            <p className="font-body text-lg text-foreground-muted max-w-2xl mx-auto">
              GIFT City offers unique advantages for international investment strategies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-lift border-border/50">
              <CardHeader>
                <Building2 className="h-8 w-8 text-secondary mb-2" />
                <CardTitle className="font-heading text-lg text-primary">Tax Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Benefit from IFSC's favorable tax regime with exemptions on capital gains and dividend distribution tax for qualifying investments.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift border-border/50">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-secondary mb-2" />
                <CardTitle className="font-heading text-lg text-primary">Currency Flexibility</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Operate in multiple foreign currencies without FEMA restrictions, enabling seamless global investment strategies.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift border-border/50">
              <CardHeader>
                <Users className="h-8 w-8 text-secondary mb-2" />
                <CardTitle className="font-heading text-lg text-primary">Investor Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Open to NRIs, foreign nationals, and institutional investors with streamlined onboarding and compliance processes.
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