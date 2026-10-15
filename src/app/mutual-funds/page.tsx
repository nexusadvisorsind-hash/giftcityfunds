import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SipCalculator } from "@/components/sip-calculator";
import { SipGoalCalculator } from "@/components/sip-goal-calculator";
import { Reveal } from "@/components/reveal";
import { InPageNav } from "@/components/in-page-nav";
import { HorizonPicker } from "@/components/horizon-picker";
import { ScrollTimeline } from "@/components/scroll-timeline";
import { getPostBySlug } from "@/lib/blog-posts";
import {
  ArrowRight,
  BadgeCheck,
  TrendingUp,
  ShieldCheck,
  Droplets,
  PiggyBank,
  Target,
  Calendar,
  Repeat,
  ChevronDown,
} from "lucide-react";

const fundCategories = [
  {
    icon: TrendingUp,
    title: "Equity SIPs",
    body: "Small, regular monthly investments into equity-oriented mutual fund schemes. Instead of trying to time the market, you invest a fixed amount every month — some months the market is up, some months it's down, and over the years this averages out and builds wealth steadily. Great for long-term goals like retirement or your child's education, typically 7+ years away.",
  },
  {
    icon: PiggyBank,
    title: "ELSS Tax Savers",
    body: "Equity Linked Savings Schemes let you save tax under Section 80C (up to ₹1.5 lakh per year) while your money stays invested in equity markets. The lock-in is just 3 years — the shortest of any 80C option like PPF or fixed deposits — so your money isn't tied up for as long.",
  },
  {
    icon: Droplets,
    title: "Liquid & Overnight Funds",
    body: "If you have surplus cash sitting idle in a savings account, these low-risk debt funds are a better home for it short-term. They're highly liquid (you can usually withdraw within a day) and historically offer better returns than a regular savings account for money you might need soon.",
  },
];

const howItWorks = [
  { icon: Target, title: "You share your goal", body: "A house down payment, your child's college fund, retirement. Anup Vatyani starts by understanding what you are saving for and when you will need the money." },
  { icon: Calendar, title: "Funds are matched to your goal", body: "Based on your goal, timeline and comfort with risk, Anup shortlists funds that fit, never a one-size-fits-all choice." },
  { icon: Repeat, title: "You invest, Anup checks in", body: "Start a SIP or lump-sum investment. Anup checks in periodically to see whether your funds are still on track for your goal." },
];

export const metadata = pageMeta({
  title: 'Mutual Fund Distributor in Pune & Ahmedabad | Artha Vriksha',
  description: 'AMFI-registered mutual fund distributor (ARN 106715). Start a SIP, plan a goal and see what it could grow to with free calculators. Pune and Ahmedabad.',
  path: '/mutual-funds',
});

const faqs = [
  { q: "How much money do I need to start?", a: "Most SIPs can be started with as little as ₹500 per month. There's no need for a large lump sum to get going." },
  { q: "Can I stop or change my SIP anytime?", a: "Yes. SIPs have no lock-in (except ELSS, which has a 3-year lock-in). You can pause, stop, or increase your monthly amount whenever you like." },
  { q: "Do you charge me a fee for this?", a: "No fee is charged to you. Anup Vatyani earns a distribution commission from the fund house, which is disclosed transparently, so you never pay him directly." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Mutual Fund Distribution",
  name: "Mutual Fund Distributor & SIP Investment Services",
  description:
    "AMFI-registered Mutual Fund Distributor (ARN 106715) helping clients start SIPs, ELSS tax-saver funds and liquid funds across Maharashtra & Gujarat.",
  provider: { "@type": "Person", name: "Anup Vatyani", jobTitle: "AMFI-registered Mutual Fund Distributor", identifier: "ARN 106715", worksFor: { "@type": "FinancialService", name: "Artha Vriksha Services" } },
  areaServed: [
    { "@type": "State", name: "Maharashtra" },
    { "@type": "State", name: "Gujarat" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const navItems = [
  { id: "fund-types", label: "Fund types" },
  { id: "sip-calculator", label: "SIP calculator" },
  { id: "goal-calculator", label: "Plan a goal" },
  { id: "how-it-works", label: "How it works" },
  { id: "faq", label: "Questions" },
];

export default function MutualFunds() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="hero-mf text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 md:pt-24 md:pb-20">
          <Reveal>
            <p className="inline-flex items-center gap-2 font-body text-sm text-primary-foreground/85 mb-5">
              <BadgeCheck className="h-4 w-4 text-accent" /> Anup Vatyani, AMFI-registered Mutual Fund Distributor, <strong className="font-semibold text-white">ARN 106715</strong>
            </p>
            <h1 className="font-heading font-bold text-4xl md:text-6xl leading-[1.08] mb-6 max-w-3xl">Start growing your money, one SIP at a time</h1>
            <p className="font-body text-lg text-primary-foreground/85 leading-relaxed measure mb-6">
              Anup Vatyani, an AMFI-registered Mutual Fund Distributor (ARN 106715), helps you choose and start mutual fund investments that match your goals, from SIPs to ELSS tax savers, in plain language and without pressure.
            </p>
            <p className="font-body text-xs text-primary-foreground/65 measure">Mutual Fund investments are subject to market risks, read all scheme related documents carefully.</p>
          </Reveal>
        </div>
      </section>

      <InPageNav items={navItems} />

      <section className="py-16 md:py-24 bg-background" id="fund-types">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3">When do you need the money?</h2>
          <p className="font-body text-foreground-muted mb-10 measure">The time you have decides the kind of fund worth looking at first. Slide to see how it changes.</p>
          <HorizonPicker />
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-10 mt-16 border-t border-border pt-12">
            {fundCategories.map((f) => (
              <div key={f.title}>
                <f.icon className="h-7 w-7 text-secondary mb-3" />
                <h3 className="font-heading font-semibold text-xl text-primary mb-2">{f.title}</h3>
                <p className="font-body text-sm text-foreground-muted leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sip-calculator" className="py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3">See how a monthly SIP could grow</h2>
          <p className="font-body text-foreground-muted measure">An illustrative projection only, not a promise of returns. Actual scheme performance varies and is subject to market risk.</p>
        </div>
        <SipCalculator />
      </section>

      <section aria-label="How the distributor is paid" className="bg-surface">
        <p className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 font-body text-xs text-foreground-muted measure">
          Anup Vatyani (AMFI ARN 106715) earns distribution (trail) commission from the asset management companies. He does not charge fee-based advisory under SEBI (IA) Regulations. Mutual fund investments are subject to market risks, read all scheme related documents carefully.
        </p>
      </section>

      <section id="goal-calculator" className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3">Work backwards from your goal</h2>
          <p className="font-body text-foreground-muted measure">Enter the amount you want to reach and by when. The calculator estimates the monthly SIP that could get you there.</p>
        </div>
        <SipGoalCalculator />
      </section>

      <section id="how-it-works" className="py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3">How it works with Anup</h2>
            <p className="font-body text-foreground-muted measure">Three steps, no pressure. You decide at every stage.</p>
          </div>
          <ScrollTimeline items={howItWorks.map(({ title, body }) => ({ title, body }))} accent="#1E5FD9" />
        </div>
      </section>

      <section id="faq" className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-8">Common questions</h2>
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading font-semibold text-lg text-primary">
                  {f.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-secondary transition-transform group-open:rotate-180" />
                </summary>
                <p className="font-body text-foreground-muted leading-relaxed mt-3 measure">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="font-body text-sm text-foreground-muted mt-8 measure flex gap-2"><ShieldCheck className="h-5 w-5 text-green shrink-0" /> Anup Vatyani is an AMFI-registered Mutual Fund Distributor (ARN 106715), not a fee-charging investment adviser. He does not provide portfolio management or fee-based advisory services under SEBI (IA) Regulations.</p>
        </div>
      </section>

      {getPostBySlug("sip-mistakes-first-time-investors") && (
        <section className="py-10 bg-surface border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-body text-sm text-foreground-muted mb-1">Related reading</p>
            <Link href="/blog/sip-mistakes-first-time-investors" className="font-heading font-semibold text-xl text-primary hover:text-secondary transition-colors">
              {getPostBySlug("sip-mistakes-first-time-investors")!.title} →
            </Link>
          </div>
        </section>
      )}

      <section className="py-16 md:py-20 hero-mf text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">Ready to start your first SIP?</h2>
            <p className="font-body text-primary-foreground/85 measure">Talk to Anup Vatyani for a free, no-obligation conversation about your goals.</p>
          </div>
          <div><Button asChild variant="gold" size="lg"><Link href="/contact">Contact Anup <ArrowRight className="ml-2 h-5 w-5" /></Link></Button></div>
        </div>
      </section>
    </>
  );
}
