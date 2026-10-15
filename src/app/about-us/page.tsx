import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { ScrollTimeline } from "@/components/scroll-timeline";
import {
  Target,
  Compass,
  Users,
  ArrowRight,
  BadgeCheck,
  ShieldCheck,
  Scale,
  Heart,
  Handshake,
  Landmark,
} from "lucide-react";

const goals = [
  {
    icon: Target,
    title: "One Team for All Your Finances",
    body: "Instead of visiting four different people for your investments, property, insurance and loans, we bring all of it under one accountable, transparent relationship — so your advice actually fits together.",
  },
  {
    icon: ShieldCheck,
    title: "Always By the Book",
    body: "We operate strictly within SEBI, AMFI, RERA and IRDAI rules. We never use misleading titles or give advice we're not licensed to give — that line matters to us.",
  },
  {
    icon: Scale,
    title: "Nothing Hidden from You",
    body: "Every commission we earn, every disclosure, every risk — stated plainly, so you can decide with full information, not sales pressure.",
  },
];

const values = [
  {
    icon: Heart,
    title: "We treat your money like it's ours",
    body: "We only recommend what we'd be comfortable recommending to our own family.",
  },
  {
    icon: Handshake,
    title: "We're honest, even when it costs us",
    body: "If a product isn't right for you, we'll say so — even if it means a smaller commission for us.",
  },
];

export const metadata = pageMeta({
  title: 'About Anup & Pavan Vatyani | Artha Vriksha',
  description: 'Meet the founders: Anup Vatyani, AMFI-registered distributor (ARN 106715), and Pavan Vatyani, MahaRERA-registered agent. Offices in Pune and Ahmedabad.',
  path: '/about-us',
});

const personJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Anup Vatyani",
      jobTitle: "Founder — Mutual Funds & Regulatory Affairs, Artha Vriksha Services",
      description:
        "AMFI-registered Mutual Fund Distributor (ARN 106715) with 24+ years in banking and financial services.",
      knowsAbout: ["Mutual Funds", "GIFT City IFSC", "Regulatory Compliance", "Investor Education"],
    },
    {
      "@type": "Person",
      name: "Pavan Vatyani",
      jobTitle: "Founder — Real Estate & Digital Strategy, Artha Vriksha Services",
      description:
        "MahaRERA-registered real estate professional (A52100037796) with 22+ years in real estate, finance and digital transformation.",
      knowsAbout: ["Real Estate", "RERA Compliance", "Digital Transformation"],
    },
  ],
};

const founders = [
  {
    initials: "AV",
    name: "Anup Vatyani",
    role: "Founder — Mutual Funds & Regulatory Affairs",
    bio: "Anup Vatyani has over 24 years of experience in the banking and financial services industry. An ex-banker with a decade of experience as a Mutual Fund Distributor, he brings deep domain expertise in financial products, regulatory frameworks, and investor education.",
    credentials: [
      "24+ years in banking & financial services",
      "Ex-banker",
      "AMFI-Registered Mutual Fund Distributor — ARN 106715",
      "A decade of dedicated Mutual Fund Distribution (MFD) experience",
      "Focus area: GIFT City / IFSC fund structures, regulatory frameworks, investor education",
      "Gujarat RERA Registered — AG/AHMEDABAD/AHMEDABAD CITY/A403336/200529",
    ],
  },
  {
    initials: "PV",
    name: "Pavan Vatyani",
    role: "Founder — Real Estate & Digital Strategy",
    bio: "Pavan Vatyani brings 22+ years of experience across Real Estate, Finance and Digital Transformation, having worked in leadership roles with organisations including 99acres, AllCheckDeals, Bajaj Finance and DigitalMutation.",
    credentials: [
      "22+ years in Real Estate, Finance & Digital Transformation",
      "Leadership roles at 99acres, AllCheckDeals, Bajaj Finance & DigitalMutation",
      "MahaRERA Registered Real Estate Agent — A52100037796",
      "Focus area: property transaction structuring, digital-first client experience",
    ],
  },
];

const otherDesks = [
  {
    icon: ShieldCheck,
    role: "Insurance Desk",
    note: "Our licensed insurance agents compare life, health, motor and business policies across insurers to find you the right cover.",
  },
  {
    icon: Landmark,
    role: "Loans & Credit Desk",
    note: "Our loan specialists work with partner banks and NBFCs to get you competitive rates on home loans, business finance, and personal loans.",
  },
];

export default function AboutUs() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />

      <section className="hero-home text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 md:pt-24 md:pb-20 grid md:grid-cols-[1fr_auto] gap-10 items-center">
          <Reveal>
            <h1 className="font-heading font-bold text-4xl md:text-6xl leading-[1.08] mb-6 max-w-3xl">Deep roots, steady growth</h1>
            <p className="font-body text-lg text-primary-foreground/85 leading-relaxed measure">
              Artha means money and purpose. Vriksha means tree. Like a banyan, we believe good financial guidance should have deep roots and grow over many years, not chase quick wins.
            </p>
          </Reveal>
          <Image src="/brand/logo-icon-192.png" alt="Artha Vriksha Services" width={160} height={160} className="hidden md:block h-36 w-auto" />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_1fr] gap-12">
          <Reveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-5">Why we started</h2>
            <p className="font-heading text-xl md:text-2xl text-primary leading-snug measure">
              Too many people get fragmented, sometimes conflicting advice from agents who cannot see the whole picture.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-body text-lg text-foreground-muted leading-relaxed measure mb-5">
              We wanted to build one team you can call for investments, property, insurance and credit, that actually talks to each other.
            </p>
            <p className="font-body text-lg text-foreground-muted leading-relaxed measure">
              Our aim is to become the most trusted financial services partner for families and small businesses in Maharashtra and Gujarat, handled by people who are properly licensed and accountable to you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3">Three commitments</h2>
            <p className="font-body text-foreground-muted measure">They shape every conversation we have with a client.</p>
          </div>
          <ScrollTimeline items={goals.map((g) => ({ title: g.title, body: g.body }))} accent="#0F8A5F" />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-forest text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_1fr] gap-12">
          <Reveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-5">The tree of wealth</h2>
            <p className="font-body text-lg text-primary-foreground/80 leading-relaxed measure">
              A tree draws strength from many roots to grow one strong trunk. We bridge physical assets like property with liquid assets like mutual funds, insurance and credit, so your wealth grows from a stable base instead of depending on one thing going right.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-6">
              {values.map((v) => (
                <li key={v.title} className="border-l-4 border-accent pl-5">
                  <h3 className="font-heading font-semibold text-xl mb-1">{v.title}</h3>
                  <p className="font-body text-primary-foreground/80 leading-relaxed">{v.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3">Meet the founders</h2>
          <p className="font-body text-foreground-muted mb-12 measure">Led directly by its founders, so every client works with people who are personally licensed and personally accountable.</p>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-14 mb-14">
            {founders.map((f) => (
              <article key={f.name}>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground font-heading font-bold text-lg flex items-center justify-center shrink-0">{f.initials}</div>
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-primary">{f.name}</h3>
                    <p className="font-body text-sm font-semibold text-secondary">{f.role}</p>
                  </div>
                </div>
                <p className="font-body text-foreground-muted leading-relaxed mb-5 measure">{f.bio}</p>
                <ul className="space-y-2">
                  {f.credentials.map((c) => (
                    <li key={c} className="flex gap-2 items-start">
                      <BadgeCheck className="h-4 w-4 text-green shrink-0 mt-1" />
                      <span className="font-body text-sm text-foreground-muted leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-8 border-t border-border pt-10">
            {otherDesks.map((d) => (
              <div key={d.role} className="flex gap-4 items-start">
                <d.icon className="h-7 w-7 text-secondary shrink-0" />
                <div>
                  <h3 className="font-heading font-semibold text-lg text-primary mb-1">{d.role}</h3>
                  <p className="font-body text-sm text-foreground-muted leading-relaxed">{d.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-xl text-primary mb-5">Our registrations</h2>
          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
            {[
              "Anup Vatyani: AMFI-registered Mutual Fund Distributor",
              "Pavan Vatyani: MahaRERA registered real estate agent",
              "Anup Vatyani: GujRERA registered real estate agent",
              "Anup Vatyani: individual insurance agent (IRDAI)",
              "DPDP Act 2023 compliant data handling",
            ].map((b) => (
              <li key={b} className="flex items-center gap-2 font-body text-sm text-foreground">
                <BadgeCheck className="h-4 w-4 text-green shrink-0" /> {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-20 hero-navy text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">Want to know more before you get in touch?</h2>
            <p className="font-body text-primary-foreground/85 measure">We will walk you through our credentials and how we work. No pressure, no obligation.</p>
          </div>
          <div><Button asChild variant="gold" size="lg"><Link href="/contact">Contact our team <ArrowRight className="ml-2 h-5 w-5" /></Link></Button></div>
        </div>
      </section>
    </>
  );
}
