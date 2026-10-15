import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getPostBySlug } from "@/lib/blog-posts";
import {
  ArrowRight,
  BadgeCheck,
  HeartPulse,
  Car,
  Building2,
  ShieldPlus,
  Umbrella,
  MessageSquare,
  Scale as ScaleIcon,
  FileSignature,
  ChevronDown,
} from "lucide-react";
import { InsuranceNeedsCalculator } from "@/components/insurance-needs-calculator";
import { Reveal } from "@/components/reveal";
import { InPageNav } from "@/components/in-page-nav";
import { ScrollTimeline } from "@/components/scroll-timeline";

export const metadata = pageMeta({
  title: 'Life & Health Insurance in Pune & Ahmedabad | Artha Vriksha',
  description: 'IRDAI-licensed agent comparing term, health, motor and business insurance across insurers. Estimate the term cover your family needs.',
  path: '/insurance',
});

const products = [
  {
    icon: Umbrella,
    title: "Term Life Insurance",
    body: "The simplest, most affordable way to protect your family's income if something happens to you. A large cover amount for a small premium — no savings component, just pure protection so your family isn't left in a financial crisis.",
  },
  {
    icon: ShieldPlus,
    title: "Whole Life Insurance",
    body: "Lifelong coverage that combines protection with a savings or investment element, so the policy also builds some value over time in addition to the death benefit.",
  },
  {
    icon: HeartPulse,
    title: "Health Insurance",
    body: "Individual and family floater plans that cover hospital bills, surgeries, and critical illness treatment. With medical costs rising every year, this is often the single most important policy a family can have.",
  },
  {
    icon: Car,
    title: "Motor Insurance",
    body: "Comprehensive and third-party cover for your car or two-wheeler — both personal and commercial vehicles. We help you compare add-ons like zero-depreciation cover so you're not underinsured after an accident.",
  },
  {
    icon: Building2,
    title: "Commercial Risk Cover",
    body: "Property, liability, and business-interruption insurance for business owners — protecting your shop, office, or warehouse against fire, theft, and the income loss that follows.",
  },
];

const howItWorks = [
  { icon: MessageSquare, title: "We understand your risks", body: "Every family and business has a different risk profile. We ask the right questions to figure out what actually needs protecting." },
  { icon: ScaleIcon, title: "We compare policies for you", body: "Instead of pushing one insurer, we compare coverage, exclusions, and premiums across multiple companies so you get the best fit." },
  { icon: FileSignature, title: "We explain the fine print", body: "Exclusions, waiting periods, claim process — we walk you through it in plain language before you sign anything." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Insurance Advisory",
  name: "Life, Health, Motor & Business Insurance Advisory",
  description:
    "Individually registered insurance agent comparing term life, health, motor and commercial insurance across multiple insurers in Maharashtra & Gujarat.",
  provider: { "@type": "FinancialService", name: "Artha Vriksha Services" },
  areaServed: [
    { "@type": "State", name: "Maharashtra" },
    { "@type": "State", name: "Gujarat" },
  ],
};

const navItems = [
  { id: "cover-calculator", label: "How much cover" },
  { id: "policy-types", label: "Policy types" },
  { id: "how-it-works", label: "How we work" },
  { id: "why-compare", label: "Why compare" },
];

export default function Insurance() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <section className="hero-ins text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 md:pt-24 md:pb-20">
          <Reveal>
            <p className="inline-flex items-center gap-2 font-body text-sm text-primary-foreground/85 mb-5">
              <BadgeCheck className="h-4 w-4 text-accent" /> Anup Vatyani, individual insurance agent (IRDAI)
            </p>
            <h1 className="font-heading font-bold text-4xl md:text-6xl leading-[1.08] mb-6 max-w-3xl">Protect what matters most, in plain language</h1>
            <p className="font-body text-lg text-primary-foreground/85 leading-relaxed measure mb-6">
              Life, health, motor and business insurance, compared across insurers, so you know exactly what you are covered for before you sign.
            </p>
            <p className="font-body text-xs text-primary-foreground/65">Insurance is the subject matter of solicitation.</p>
          </Reveal>
        </div>
      </section>

      <InPageNav items={navItems} />

      <section id="cover-calculator" className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3">How much term cover does your family need?</h2>
          <p className="font-body text-foreground-muted measure">Enter your income, loans and existing cover. The estimate is a starting point for a conversation, not a recommendation.</p>
        </div>
        <InsuranceNeedsCalculator />
      </section>

      <section id="policy-types" className="py-16 md:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-8">Pick a cover to read about</h2>
          <div className="divide-y divide-border border-y border-border">
            {products.map((p, i) => (
              <details key={p.title} className="group py-5" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center gap-4 font-heading font-semibold text-xl text-primary">
                  <p.icon className="h-6 w-6 text-secondary shrink-0" />
                  <span className="flex-1">{p.title}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-secondary transition-transform group-open:rotate-180" />
                </summary>
                <p className="font-body text-foreground-muted leading-relaxed mt-3 pl-10 measure">{p.body}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3">How we help you choose</h2>
            <p className="font-body text-foreground-muted measure">We compare first and explain the fine print before you decide.</p>
          </div>
          <ScrollTimeline items={howItWorks.map(({ title, body }) => ({ title, body }))} accent="#D4AF37" />
        </div>
      </section>

      <section id="why-compare" className="py-16 md:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-l-4 border-accent pl-6">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-3">Why compare with us?</h2>
          <p className="font-body text-lg text-foreground-muted leading-relaxed measure">
            As an individually registered insurance agent, we work with multiple insurers rather than being tied to one. We recommend the policy that fits you, not the company that pays us most.
          </p>
        </div>
      </section>

      {getPostBySlug("term-vs-whole-life-insurance") && (
        <section className="py-10 bg-background border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-body text-sm text-foreground-muted mb-1">Related reading</p>
            <Link href="/blog/term-vs-whole-life-insurance" className="font-heading font-semibold text-xl text-primary hover:text-secondary transition-colors">
              {getPostBySlug("term-vs-whole-life-insurance")!.title} →
            </Link>
          </div>
        </section>
      )}

      <section className="py-16 md:py-20 hero-ins text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">Not sure what you need?</h2>
            <p className="font-body text-primary-foreground/85 measure">Tell us about your family and your work. We will show what is worth covering first.</p>
          </div>
          <div><Button asChild variant="gold" size="lg"><Link href="/contact">Contact our team <ArrowRight className="ml-2 h-5 w-5" /></Link></Button></div>
        </div>
      </section>
    </>
  );
}
