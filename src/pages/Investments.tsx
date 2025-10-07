import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  ArrowRight,
  BookOpen
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import moneyBalanceImage from "/lovable-uploads/ec8c2ed1-e4ab-41d7-8b14-52e3df8a2e66.png";
import { SEO } from "@/components/SEO";

const Investments = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is GIFT IFSC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GIFT IFSC is India's International Financial Services Centre located in Gujarat International Finance Tec-City, regulated by IFSCA to offer global financial services."
        }
      },
      {
        "@type": "Question",
        "name": "Who regulates GIFT City activities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The International Financial Services Centres Authority (IFSCA) regulates all financial activities within GIFT IFSC."
        }
      },
      {
        "@type": "Question",
        "name": "What fund structures are available in GIFT IFSC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GIFT IFSC allows various fund structures including Alternative Investment Funds (AIFs), Venture Capital Funds, and other pooled investment vehicles under IFSCA regulations."
        }
      }
    ]
  };
  const advantages = [
    {
      icon: Banknote,
      title: "Currency Flexibility",
      description: "Understanding multi-currency operations in GIFT IFSC, enabling fund operations in USD, EUR, GBP and other major currencies as per IFSCA framework."
    },
    {
      icon: FileText,
      title: "Regulatory Framework",
      description: "Educational overview of IFSCA regulations and how IFSC framework differs from domestic Indian regulations, including FEMA exemptions for eligible operations."
    },
    {
      icon: Building,
      title: "Tax Structures",
      description: "Learning about tax frameworks available for eligible IFSC entities, including potential benefits and exemptions. Educational information only — consult tax professionals for advice."
    },
    {
      icon: TrendingUp,
      title: "Operational Features",
      description: "Understanding liquidity structures, redemption frameworks, and operational capabilities under various IFSC fund structures as per IFSCA guidelines."
    }
  ];

  const fundCategories = [
    {
      icon: TrendingUp,
      title: "Equity Fund Structures",
      description: "Educational content on equity-focused fund frameworks",
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
      title: "Alternative Investment Funds",
      description: "Educational resources on PE, real estate, and hedge fund frameworks under IFSCA",
      color: "text-accent"
    }
  ];

  const faqs = [
    {
      question: "What types of fund structures operate in GIFT IFSC?",
      answer: "GIFT IFSC hosts various fund structures including mutual funds, AIFs (Alternative Investment Funds), offshore funds, private equity funds, venture capital funds, and hedge funds. Each structure has specific regulatory requirements under IFSCA guidelines."
    },
    {
      question: "Who can invest through GIFT IFSC funds?",
      answer: "Eligibility varies by product and IFSCA regulations. Typically, institutional investors, qualified investors, and accredited investors can participate. Investment minimums and eligibility criteria are defined by individual fund offerings and IFSCA circulars. This is educational information — consult official IFSCA documentation for specific requirements."
    },
    {
      question: "What is the typical establishment process for a fund in GIFT IFSC?",
      answer: "The typical process involves: (1) Regulatory consultation and planning with IFSCA framework review, (2) Documentation and IFSCA registration including entity setup and compliance, (3) Operational setup with custodians, administrators, and fund launch. Specific requirements vary by fund type and IFSCA regulations."
    },
    {
      question: "What are the tax implications for GIFT IFSC funds?",
      answer: "GIFT IFSC offers various tax structures for eligible entities, including potential exemptions and incentives as per applicable tax laws. Specific tax treatment depends on the entity type, activities, and applicable regulations. This is educational information only — consult qualified tax professionals for advice on your specific situation."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Investments in GIFT City IFSC — Structures & Process | GiftCityWealth.in"
        description="Informational guide on fund structures, registration process, and operational setup under IFSCA for funds and financial entities in GIFT IFSC — educational purposes only."
        canonical="https://www.giftcitywealth.in/investments"
        schema={faqSchema}
      />
      {/* Hero Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
              Understanding Investments in GIFT City — IFSC Structures & Process
            </h1>
            <p className="font-body text-lg text-foreground-muted">
              Informational guide on fund structures, registration process, and operational setup under IFSCA for funds and financial entities in GIFT IFSC — educational purposes only.
            </p>
          </div>
        </div>
      </section>

      {/* IFSC Framework Features */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-8">
                GIFT IFSC Framework Features
              </h2>
              <div className="space-y-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <advantage.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                        {advantage.title}
                      </h3>
                      <p className="font-body text-foreground-muted text-sm">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={moneyBalanceImage} 
                alt="GIFT City fund structures and investment frameworks - educational illustration" 
                className="rounded-lg shadow-corporate w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fund Structure Categories */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
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

      {/* Typical Establishment Process */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
              Typical Establishment Process
            </h2>
            <p className="font-body text-lg text-foreground-muted max-w-2xl mx-auto">
              Educational overview of the typical fund setup process in GIFT IFSC (actual requirements vary by fund type and IFSCA regulations)
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="institutional-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-bold text-xl text-primary">
                  1
                </div>
                <CardTitle className="font-heading text-lg text-primary">Regulatory Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Understanding IFSCA framework, reviewing applicable regulations, determining fund structure type, and planning regulatory approach.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="institutional-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-bold text-xl text-primary">
                  2
                </div>
                <CardTitle className="font-heading text-lg text-primary">IFSCA Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Entity setup, documentation preparation, IFSCA application process, and compliance framework establishment as per applicable guidelines.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="institutional-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-bold text-xl text-primary">
                  3
                </div>
                <CardTitle className="font-heading text-lg text-primary">Operational Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Appointing custodians and administrators, establishing operational infrastructure, and fund launch in compliance with IFSCA requirements.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-foreground-muted">
              Common questions about GIFT IFSC fund structures — Educational information only
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-heading text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-foreground-muted">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-navy text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <BookOpen className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Have Questions About GIFT IFSC Funds?
          </h2>
          <p className="font-body text-lg mb-8 opacity-90">
            Submit your questions and we'll provide educational information to help you understand GIFT IFSC fund structures better.
          </p>
          <Button asChild variant="secondary" size="lg" className="text-lg px-8 py-4">
            <Link to="/ask-question">Ask a Question</Link>
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Investments;
