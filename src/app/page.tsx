import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";
import { Reveal } from "@/components/reveal";
import { BanyanHero } from "@/components/banyan-hero";
import { LifeMomentPicker } from "@/components/life-moment-picker";
import { CostOfWaiting } from "@/components/cost-of-waiting";

export const metadata = pageMeta({
  title: 'Mutual Funds, Real Estate, Insurance & Loans | Artha Vriksha',
  description: 'Registered mutual fund distributor, real estate consultant, insurance agent and loan DSA with offices in Pune and Ahmedabad. One team, plain language.',
  path: '/',
});

const credentials = [
  { k: "Mutual funds", v: "AMFI ARN 106715" },
  { k: "Real estate", v: "MahaRERA and GujRERA registered" },
  { k: "Insurance", v: "IRDAI licensed agent" },
  { k: "Loans", v: "Empanelled bank loan DSA" },
];

const categoryColors: Record<string, string> = {
  "Mutual Funds": "bg-secondary/10 text-secondary",
  "Real Estate": "bg-green-soft text-green",
  Insurance: "bg-accent/20 text-accent-foreground",
  Loans: "bg-primary/10 text-primary",
  "Personal Finance": "bg-secondary/10 text-secondary",
};

export default function Home() {
  return (
    <>
      <section className="hero-home text-primary-foreground overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 md:pt-20 md:pb-16 grid md:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.08] mb-6">
              Mutual funds, real estate, insurance and loans, under one registered team.
            </h1>
            <p className="font-body text-lg text-primary-foreground/85 leading-relaxed mb-8 measure">
              We are a family-run firm in Pune and Ahmedabad. We explain every product in plain language, show our registrations openly, and look at your money, property, cover and credit together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button asChild size="lg" variant="gold">
                <Link href="/contact">Talk to our team <Phone className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/70 text-white hover:bg-white hover:text-primary">
                <a href="#life-moments">Find where to start</a>
              </Button>
            </div>
            <p className="font-body text-xs text-primary-foreground/65 measure">
              Mutual Fund investments are subject to market risks, read all scheme related documents carefully. Insurance is the subject matter of solicitation.
            </p>
          </div>
          <BanyanHero />
        </div>
      </section>

      <section className="bg-background border-b border-border" aria-label="Our registrations">
        <dl className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
          {credentials.map((c) => (
            <div key={c.k} className="border-l-2 border-accent pl-3">
              <dt className="font-body text-xs text-foreground-muted">{c.k}</dt>
              <dd className="font-body text-sm font-semibold text-primary">{c.v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="life-moments" className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3 measure">Where are you in life right now?</h2>
            <p className="font-body text-foreground-muted mb-8 measure">Pick the moment closest to yours. We will show the three things that usually matter first, in the order they usually matter.</p>
          </Reveal>
          <LifeMomentPicker />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-12">
          <Reveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-5">Why one team instead of four</h2>
            <p className="font-body text-lg text-foreground-muted leading-relaxed measure">
              Most families manage money in pieces. The property agent does not know what you can borrow. The fund distributor does not know about your EMIs. The insurance agent does not know what you need to protect.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-6">
              {[
                ["A loan decision changes your investing.", "A lower EMI frees monthly money for a SIP. We look at both together."],
                ["A property decision changes your cover.", "A home loan needs term cover behind it, so the family keeps the home."],
                ["An uninsured risk undoes years of saving.", "We check what is protected before suggesting where to invest more."],
              ].map(([h, b]) => (
                <li key={h} className="border-l-4 border-green pl-5">
                  <p className="font-heading font-semibold text-xl text-primary mb-1">{h}</p>
                  <p className="font-body text-foreground-muted leading-relaxed">{b}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3 measure">What does waiting cost?</h2>
            <p className="font-body text-foreground-muted mb-10 measure">Move the sliders and compare starting a SIP today with starting later.</p>
          </Reveal>
          <CostOfWaiting />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-forest text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-5">Two offices, local knowledge</h2>
            <p className="font-body text-primary-foreground/80 leading-relaxed measure">
              Good property and loan advice depends on the local market: which builders deliver, which lenders approve quickly, and how each state&rsquo;s rules work. That is why we work from both Pune and Ahmedabad.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="space-y-6">
              <div>
                <dt className="font-heading text-xl font-semibold">Maharashtra</dt>
                <dd className="font-body text-primary-foreground/80 mt-1">Pune office. MahaRERA registered property consulting for residential and commercial buyers.</dd>
              </div>
              <div>
                <dt className="font-heading text-xl font-semibold">Gujarat</dt>
                <dd className="font-body text-primary-foreground/80 mt-1">Ahmedabad office. GujRERA registered property consulting, including industrial and logistics space.</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3">How we earn, and how we protect your data</h2>
          <p className="font-body text-foreground-muted mb-10 measure">Two things people should know before they trust anyone with their finances.</p>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="border-t-2 border-primary pt-5">
              <h3 className="font-heading font-semibold text-xl text-primary mb-2">We are distributors, not fee-charging advisers</h3>
              <p className="font-body text-foreground-muted leading-relaxed measure">We earn commission from the fund house, insurer or lender, never a hidden fee from you. We tell you the risks and the costs before you decide, and we never promise returns.</p>
            </div>
            <div className="border-t-2 border-primary pt-5">
              <h3 className="font-heading font-semibold text-xl text-primary mb-2">Your details stay with us</h3>
              <p className="font-body text-foreground-muted leading-relaxed measure">We collect only what we need, follow the DPDP Act 2023, and never sell or share your information.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3">Read before you decide</h2>
          <p className="font-body text-foreground-muted mb-10 measure">Plain-language guides, written to help you decide, not to sell you anything.</p>
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-10 mb-10">
            {blogPosts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold font-body mb-3 ${categoryColors[post.category]}`}>{post.category}</span>
                <h3 className="font-heading font-semibold text-xl text-primary mb-2 leading-snug group-hover:text-secondary transition-colors">{post.title}</h3>
                <p className="font-body text-sm text-foreground-muted leading-relaxed mb-3">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm text-secondary font-semibold">Read article <ArrowRight className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
          <Button asChild variant="outline" size="lg"><Link href="/blog">All articles</Link></Button>
        </div>
      </section>

      <section className="py-16 md:py-24 hero-navy text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1.2fr_1fr] gap-10 items-end">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Let&rsquo;s talk about your goals</h2>
            <p className="font-body text-lg text-primary-foreground/85 leading-relaxed measure">A no-pressure conversation. Tell us what you want to achieve, and we will lay out the options with the costs and risks first.</p>
          </div>
          <div>
            <Button asChild variant="gold" size="lg" className="mb-4"><Link href="/contact">Contact us <ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
            <p className="font-body text-sm text-primary-foreground/70">info@arthavriksha.in · Offices in Pune and Ahmedabad</p>
          </div>
        </div>
      </section>
    </>
  );
}
