import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EmiCalculator } from "@/components/emi-calculator";
import { LoanEligibilityCalculator } from "@/components/loan-eligibility-calculator";
import { Reveal } from "@/components/reveal";
import { InPageNav } from "@/components/in-page-nav";
import { ScrollTimeline } from "@/components/scroll-timeline";
import { getPostBySlug } from "@/lib/blog-posts";
import {
  ArrowRight,
  BadgeCheck,
  Home,
  Landmark,
  Briefcase,
  GraduationCap,
  User,
  ClipboardList,
  Search as SearchIcon,
  ThumbsUp,
  ShieldCheck,
} from "lucide-react";

export const metadata = pageMeta({
  title: 'Home Loan & LAP Consultant, Pune & Ahmedabad | Artha Vriksha',
  description: 'Empanelled loan DSA comparing home loan, loan against property and business loan offers across banks and NBFCs. Free EMI and eligibility calculators.',
  path: '/loans',
});

const secured = [
  { icon: Home, title: "Home Loans", body: "Financing to buy or build a residential property, with tenures up to 30 years and competitive interest rates from our partner banks." },
  { icon: Landmark, title: "Loan Against Property (LAP)", body: "Already own a property? Unlock cash against it without selling — useful for business expansion, a child's education, or any large expense." },
  { icon: Briefcase, title: "Working Capital", body: "Secured credit lines that help businesses manage day-to-day expenses like inventory, payroll and supplier payments without cash-flow stress." },
];

const unsecured = [
  { icon: User, title: "Personal Loans", body: "No collateral needed — approved based on your income and credit profile. Useful for medical emergencies, weddings, or any personal need." },
  { icon: GraduationCap, title: "Education Loans", body: "Funding for higher education in India or abroad, including tuition, living expenses and other approved costs." },
];

const howItWorks = [
  { icon: ClipboardList, title: "Tell us what you need", body: "Loan amount, purpose, and timeline — we figure out which loan type actually fits your situation." },
  { icon: SearchIcon, title: "We compare lenders for you", body: "Instead of applying at one bank and hoping, we check rates and eligibility across our partner banks and NBFCs to find you the best deal." },
  { icon: ThumbsUp, title: "We help with the paperwork", body: "Loan applications get rejected or delayed over small documentation errors. We help you get it right the first time." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Loan DSA Services",
  name: "Home, Business & Personal Loan DSA Services",
  description:
    "Direct Selling Partner comparing home loans, loan against property, business working capital, personal and education loans across partner banks & NBFCs.",
  provider: { "@type": "FinancialService", name: "Artha Vriksha Services" },
  areaServed: [
    { "@type": "State", name: "Maharashtra" },
    { "@type": "State", name: "Gujarat" },
  ],
};

const navItems = [
  { id: "emi-calculator", label: "EMI calculator" },
  { id: "eligibility", label: "Eligibility" },
  { id: "loan-types", label: "Loan types" },
  { id: "how-it-works", label: "How we work" },
];

export default function Loans() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <section className="hero-loan text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 md:pt-24 md:pb-20">
          <Reveal>
            <p className="inline-flex items-center gap-2 font-body text-sm text-primary-foreground/85 mb-5">
              <BadgeCheck className="h-4 w-4 text-accent" /> Individually empanelled bank loan DSA
            </p>
            <h1 className="font-heading font-bold text-4xl md:text-6xl leading-[1.08] mb-6 max-w-3xl">Get the right loan, faster</h1>
            <p className="font-body text-lg text-primary-foreground/85 leading-relaxed measure">
              We work with a panel of banks and NBFCs to compare rates for home loans, loan against property, business capital and more, and help you avoid the paperwork mistakes that slow approvals.
            </p>
          </Reveal>
        </div>
      </section>

      <InPageNav items={navItems} />

      <section id="emi-calculator" className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3">What will your EMI be?</h2>
          <p className="font-body text-foreground-muted measure">Illustrative only. Actual rates and eligibility are decided by the lending bank or NBFC.</p>
        </div>
        <EmiCalculator />
      </section>

      <section id="eligibility" className="py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3">How much could you borrow?</h2>
          <p className="font-body text-foreground-muted measure">Enter your income and existing EMIs for a quick estimate of loan eligibility.</p>
        </div>
        <LoanEligibilityCalculator />
      </section>

      <section id="loan-types" className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-14">
          <div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-2">Secured loans</h2>
            <p className="font-body text-sm text-foreground-muted mb-6">Backed by collateral, usually with lower rates and higher amounts.</p>
            <div className="space-y-6">
              {secured.map((s) => (
                <div key={s.title} className="flex gap-4 border-l-4 border-secondary pl-4">
                  <s.icon className="h-6 w-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-primary mb-1">{s.title}</h3>
                    <p className="font-body text-sm text-foreground-muted leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-2">Unsecured loans</h2>
            <p className="font-body text-sm text-foreground-muted mb-6">No collateral. Approval depends on income and credit history.</p>
            <div className="space-y-6">
              {unsecured.map((s) => (
                <div key={s.title} className="flex gap-4 border-l-4 border-green pl-4">
                  <s.icon className="h-6 w-6 text-green shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-primary mb-1">{s.title}</h3>
                    <p className="font-body text-sm text-foreground-muted leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3">How we help you borrow smart</h2>
            <p className="font-body text-foreground-muted measure mb-6">You never pay us directly. We disclose our partnership commission upfront, and our earnings come from the lender once your loan is disbursed.</p>
            <p className="font-body text-sm text-foreground-muted flex gap-2 measure"><ShieldCheck className="h-5 w-5 text-green shrink-0" /> No hidden charges.</p>
          </div>
          <ScrollTimeline items={howItWorks.map(({ title, body }) => ({ title, body }))} accent="#1E5FD9" />
        </div>
      </section>

      {getPostBySlug("improve-loan-approval-chances") && (
        <section className="py-10 bg-background border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-body text-sm text-foreground-muted mb-1">Related reading</p>
            <Link href="/blog/improve-loan-approval-chances" className="font-heading font-semibold text-xl text-primary hover:text-secondary transition-colors">
              {getPostBySlug("improve-loan-approval-chances")!.title} →
            </Link>
          </div>
        </section>
      )}

      <section className="py-16 md:py-20 hero-loan text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">Ready to apply?</h2>
            <p className="font-body text-primary-foreground/85 measure">Tell us what you need financed and we will match you with the right lender.</p>
          </div>
          <div><Button asChild variant="gold" size="lg"><Link href="/contact">Contact our team <ArrowRight className="ml-2 h-5 w-5" /></Link></Button></div>
        </div>
      </section>
    </>
  );
}
