import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RegionToggle } from "@/components/region-toggle";
import { getPostBySlug } from "@/lib/blog-posts";
import {
  ArrowRight,
  BadgeCheck,
  Home,
  Building2,
  Factory,
  Wheat,
  CheckCircle2,
  Search,
  FileCheck,
  Handshake,
} from "lucide-react";
import { PropertyLifecycleChart } from "@/components/property-lifecycle-chart";
import { HomeLoanEligibilityCalculator } from "@/components/home-loan-eligibility-calculator";
import { Reveal } from "@/components/reveal";
import { InPageNav } from "@/components/in-page-nav";
import { ReraStepper } from "@/components/rera-stepper";
import { ScrollTimeline } from "@/components/scroll-timeline";

export const metadata = pageMeta({
  title: 'Real Estate Consultant in Pune & Ahmedabad | Artha Vriksha',
  description: 'MahaRERA and GujRERA registered property consultants. Verify a project with our 5-step RERA check and estimate your home loan eligibility.',
  path: '/real-estate',
});

const categories = [
  {
    icon: Home,
    title: "Residential",
    body: "Flats, villas, and plotted developments across Maharashtra and Gujarat — whether you're buying your first home, upgrading, or investing in a second property. We check builder credentials and RERA status before we ever show you a listing.",
  },
  {
    icon: Building2,
    title: "Commercial",
    body: "Office spaces, retail shops, and mixed-use commercial units for businesses looking to set up, expand, or relocate. We help you evaluate footfall, connectivity, and lease terms so the space actually works for your business.",
  },
  {
    icon: Factory,
    title: "Industrial & Logistics",
    body: "Warehouses, industrial sheds, and manufacturing plots — especially useful if you're setting up operations in Gujarat's industrial corridors. We understand zoning rules and utility access requirements for these properties.",
  },
  {
    icon: Wheat,
    title: "Agricultural",
    body: "Farmhouses and agricultural land, with full title and land-use verification. Agricultural land has its own set of legal complications — we make sure yours is clear before you commit.",
  },
];

const howItWorks = [
  { icon: Search, title: "Tell us what you need", body: "Budget, location, type of property, and timeline — we shortlist options that actually match, instead of flooding you with irrelevant listings." },
  { icon: FileCheck, title: "We verify before you visit", body: "RERA registration, title deed, encumbrance certificate, and builder track record are checked upfront, so your time isn't wasted on properties with hidden problems." },
  { icon: Handshake, title: "We support the deal to closing", body: "From price negotiation to loan coordination (if needed) to final registration, we stay involved until the keys are actually in your hand." },
];

const checklist = [
  "RERA project registration number verified against state authority records",
  "Developer track record and past project delivery history checked",
  "Title deed and encumbrance certificate reviewed",
  "Bank-approved valuation obtained where financing is involved",
  "Zoning and land-use classification confirmed for the intended purpose",
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Real Estate Broking",
  name: "Real Estate Broking Services",
  description:
    "Residential, commercial, industrial and agricultural property broking in Maharashtra and Gujarat, from individually MahaRERA and GujRERA registered professionals.",
  provider: { "@type": "FinancialService", name: "Artha Vriksha Services" },
  areaServed: [
    { "@type": "State", name: "Maharashtra" },
    { "@type": "State", name: "Gujarat" },
  ],
};

const navItems = [
  { id: "rera-check", label: "RERA check" },
  { id: "property-types", label: "Property types" },
  { id: "lifecycle", label: "Lifecycle" },
  { id: "home-loan-check", label: "Home loan check" },
  { id: "how-it-works", label: "How we work" },
  { id: "desks", label: "Our desks" },
];

export default function RealEstate() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <section className="hero-re text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 md:pt-24 md:pb-20">
          <Reveal>
            <p className="inline-flex items-center gap-2 font-body text-sm text-primary-foreground/85 mb-5">
              <BadgeCheck className="h-4 w-4 text-accent" /> Pavan Vatyani (MahaRERA) and Anup Vatyani (GujRERA), registered real estate agents
            </p>
            <h1 className="font-heading font-bold text-4xl md:text-6xl leading-[1.08] mb-6 max-w-3xl">Find property you can trust, checked before you visit</h1>
            <p className="font-body text-lg text-primary-foreground/85 leading-relaxed measure">
              Buying, selling or leasing residential, commercial, industrial or agricultural property in Maharashtra and Gujarat, with every listing verified before it reaches you.
            </p>
          </Reveal>
        </div>
      </section>

      <InPageNav items={navItems} />

      <section id="rera-check" className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3">Five checks before you pay a booking amount</h2>
            <p className="font-body text-foreground-muted measure mb-4">Tick them off as you go. These are the checks that protect you from unregistered projects, title disputes and delays.</p>
            <p className="font-body text-xs text-foreground-muted measure">Projects we present are restricted to registered entities under the respective state authorities.</p>
          </div>
          <ReraStepper />
        </div>
      </section>

      <section id="property-types" className="py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-10">What kind of property are you after?</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {categories.map((c) => (
              <div key={c.title} className="flex gap-4">
                <c.icon className="h-8 w-8 text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-semibold text-xl text-primary mb-2">{c.title}</h3>
                  <p className="font-body text-foreground-muted leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lifecycle" className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3">Where a project sits in its lifecycle</h2>
          <p className="font-body text-foreground-muted measure">Every project moves through stages from launch to maturity. Knowing the stage helps you time a purchase, a rental plan or an exit.</p>
        </div>
        <PropertyLifecycleChart />
      </section>

      <section id="home-loan-check" className="py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3">Know your home budget first</h2>
          <p className="font-body text-foreground-muted measure">A quick estimate of the home loan you could qualify for, based on income and existing obligations. Lenders decide the final amount.</p>
        </div>
        <HomeLoanEligibilityCalculator />
      </section>

      <section id="how-it-works" className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3">How we help you buy, sell or lease</h2>
            <p className="font-body text-foreground-muted measure">From first brief to the day you get the keys.</p>
          </div>
          <ScrollTimeline items={howItWorks.map(({ title, body }) => ({ title, body }))} accent="#0F8A5F" />
        </div>
      </section>

      <section id="desks" className="py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-8">Two desks, one standard</h2>
          <RegionToggle />
        </div>
      </section>

      {getPostBySlug("rera-explained-property-buyers-guide") && (
        <section className="py-10 bg-background border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-body text-sm text-foreground-muted mb-1">Related reading</p>
            <Link href="/blog/rera-explained-property-buyers-guide" className="font-heading font-semibold text-xl text-primary hover:text-secondary transition-colors">
              {getPostBySlug("rera-explained-property-buyers-guide")!.title} →
            </Link>
          </div>
        </section>
      )}

      <section className="py-16 md:py-20 hero-re text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">Looking to buy, sell or lease?</h2>
            <p className="font-body text-primary-foreground/85 measure">Tell us what you need and we will come back with verified options.</p>
          </div>
          <div><Button asChild variant="gold" size="lg"><Link href="/contact">Contact our team <ArrowRight className="ml-2 h-5 w-5" /></Link></Button></div>
        </div>
      </section>
    </>
  );
}
