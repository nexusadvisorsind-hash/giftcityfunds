import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  Download, 
  ExternalLink, 
  BookOpen,
  Scale,
  Building2,
  TrendingUp,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Resources = () => {
  const articles = [
    {
      title: "How IFSCA Regulates Fund Management",
      description: "Comprehensive guide to IFSCA regulatory framework for fund management entities",
      category: "Regulation",
      readTime: "8 min read"
    },
    {
      title: "Step-by-Step: Setting up a Fund Management Entity in IFSC",
      description: "Detailed walkthrough of the registration and setup process",
      category: "Setup",
      readTime: "12 min read"
    },
    {
      title: "Tax Framework & Incentives for IFSC Entities",
      description: "Educational overview of tax structures available in GIFT IFSC",
      category: "Tax",
      readTime: "10 min read"
    },
    {
      title: "GIFT IFSC vs Dubai DIFC vs Singapore MAS",
      description: "Neutral comparison of major international financial centres",
      category: "Comparison",
      readTime: "15 min read"
    }
  ];

  const officialLinks = [
    { name: "IFSCA Official Website", url: "https://ifsca.gov.in", icon: Scale },
    { name: "India INX", url: "https://www.indiainx.com", icon: TrendingUp },
    { name: "NSE IFSC", url: "https://www.nseifsc.com", icon: Building2 },
    { name: "GIFT City Website", url: "https://www.giftgujarat.in", icon: Shield }
  ];

  const faqs = [
    {
      question: "What is GIFT IFSC?",
      answer: "GIFT IFSC (Gujarat International Finance Tec-City International Financial Services Centre) is India's first International Financial Services Centre, established to provide world-class financial services and infrastructure. It operates under special regulatory framework provided by IFSCA (International Financial Services Centres Authority)."
    },
    {
      question: "Who regulates GIFT City activities?",
      answer: "The International Financial Services Centres Authority (IFSCA) is the unified regulator for all financial services in GIFT IFSC. Established under the IFSCA Act 2019, it regulates banking, capital markets, insurance, and fund management activities within the IFSC."
    },
    {
      question: "What are the key advantages of GIFT IFSC?",
      answer: "Key advantages include: simplified regulatory framework, tax incentives for eligible entities, currency flexibility (operate in foreign currency), 100% foreign ownership allowed, access to international markets, and world-class infrastructure with 24/7 operations capability."
    },
    {
      question: "Who can invest through GIFT IFSC funds?",
      answer: "Eligibility varies by product and IFSCA regulations. Typically, institutional investors, qualified investors, and accredited investors can participate. Investment minimums and eligibility criteria are defined by individual fund offerings and IFSCA circulars. Consult official IFSCA documentation for specific requirements."
    },
    {
      question: "What types of funds operate in GIFT IFSC?",
      answer: "GIFT IFSC hosts various fund structures including mutual funds, AIFs (Alternative Investment Funds), offshore funds, private equity funds, venture capital funds, and hedge funds. Each structure has specific regulatory requirements under IFSCA guidelines."
    },
    {
      question: "How does taxation work in GIFT IFSC?",
      answer: "GIFT IFSC offers tax incentives including exemptions on certain incomes, reduced tax rates for eligible entities, and other benefits as per applicable tax laws. Specific tax treatment depends on the entity type, activities, and applicable regulations. This is educational information only - consult tax professionals for advice."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
              GIFT City Knowledge Centre
            </h1>
            <p className="font-body text-lg text-foreground-muted">
              Guides, FAQs, and Official Links — Educational resources explaining IFSCA regulations, fund setup steps, and tax frameworks for GIFT IFSC. Educational purposes only.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-heading font-bold text-3xl text-primary mb-4">
              Educational Articles & Guides
            </h2>
            <p className="font-body text-foreground-muted">
              In-depth educational content about GIFT IFSC structures, regulations, and processes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <Card key={index} className="institutional-card hover-lift">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-semibold text-accent px-2 py-1 bg-secondary rounded">
                      {article.category}
                    </span>
                    <span className="text-xs text-foreground-muted">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-heading">{article.title}</CardTitle>
                  <CardDescription className="text-foreground-muted">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="text-primary">
                    Read Article <FileText className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Official Links */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-heading font-bold text-3xl text-primary mb-4">
              Official Resources
            </h2>
            <p className="font-body text-foreground-muted">
              Direct links to official regulatory and institutional websites
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {officialLinks.map((link, index) => (
              <Card key={index} className="institutional-card hover-lift">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                      <link.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{link.name}</h3>
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-hover transition-corporate inline-flex items-center text-sm"
                    >
                      Visit Website <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-foreground-muted">
              Common questions about GIFT City IFSC — Educational information only
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="font-heading font-bold text-3xl mb-4">
            Have Questions About GIFT City?
          </h2>
          <p className="font-body text-lg mb-8 opacity-90">
            Submit your questions and we'll provide educational information to help you understand GIFT IFSC better.
          </p>
          <Button asChild variant="secondary" size="lg" className="text-lg px-8 py-4">
            <Link to="/contact">Ask a Question</Link>
          </Button>
        </div>
      </section>

      {/* Schema Markup for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>
    </div>
  );
};

export default Resources;
