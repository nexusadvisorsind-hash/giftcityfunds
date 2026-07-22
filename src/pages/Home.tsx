import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { ArrowRight, Landmark, Layers, Wallet, MessageCircle, CircleDollarSign, TrendingUp, Building2, UserCog, BookOpen, UserCheck, FileText, CheckCircle2 } from "lucide-react";

const Home = () => {
  const financialServiceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "GIFT City Funds",
    "url": "https://giftcityfunds.in/",
    "description": "Independent educational guide to GIFT City IFSC mutual funds, AIFs and PMS structures by Anup Vatyani (AMFI ARN 106715).",
    "areaServed": { "@type": "Country", "name": "India" },
  };

  return (
    <>
      <SEO
        title="GIFT City Funds — IFSC Investing Explained Simply"
        description="Independent, plain-English guide to GIFT City & IFSC mutual funds, AIFs and PMS structures for NRIs, OCIs and resident Indians. By Anup Vatyani, MFD ARN 106715."
        canonical="https://giftcityfunds.in/"
        schema={financialServiceSchema}
        breadcrumbs={[{ name: "Home", url: "https://giftcityfunds.in/" }]}
      />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative hero-section">
          <div className="w-full h-[300px] sm:h-[340px] md:h-[390px] overflow-hidden bg-background">
            <img
              src="/images/gujrat.png"
              alt="GIFT City IFSC skyline at Gandhinagar, Gujarat"
              className="hero-image w-full h-full object-cover object-top"
              width="1568"
              height="1003"
              fetchPriority="high"
              decoding="sync"
            />
          </div>
          <div className="pt-10 pb-14 md:pt-12 md:pb-16 bg-background">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <h1 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-5 leading-tight">
                GIFT City Funds, Explained Simply
              </h1>
              <p className="font-body text-lg text-foreground-muted max-w-3xl mx-auto mb-8">
                A trusted educational resource to understand GIFT City Mutual Funds, Alternative Investment Funds (AIFs), and the IFSC investment ecosystem for NRIs, OCIs and Resident Indians.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="gold" size="lg">
                  <Link to="/what-is-gift-city">Start with the Basics <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Talk to Anup</Link>
                </Button>
              </div>
            </div>
          </div>
          {/* Stat band */}
          <div className="bg-primary text-primary-foreground">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center">
              <p className="font-body text-sm md:text-base">
                NRI investment in GIFT City funds has crossed <strong className="text-brass">$7 billion</strong> — IFSCA, reported March 2025.
              </p>
            </div>
          </div>
        </section>

        {/* Why Start Here */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-10 text-center">Why Start Here</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Landmark, title: "Regulated by IFSCA", body: "GIFT City funds operate under India's International Financial Services Centres Authority — a single regulator built specifically for this jurisdiction, distinct from SEBI's oversight of the rest of India's mutual fund industry." },
                { icon: TrendingUp, title: "Independent, not AMC-run", body: "Unlike a fund house's own website, this isn't built to promote one AMC's scheme. It's a neutral map across GIFT City fund structures, written so you can compare before you commit to anything." },
                { icon: MessageCircle, title: "One point of contact", body: "Questions go directly to Anup Vatyani — no call centre, no relationship-manager rotation, no hand-offs between departments." },
              ].map((f) => (
                <div key={f.title} className="bg-background p-6 rounded-lg border border-border">
                  <f.icon className="h-8 w-8 text-secondary mb-3" />
                  <h3 className="font-heading font-semibold text-lg text-primary mb-2">{f.title}</h3>
                  <p className="font-body text-foreground-muted text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* What Is GIFT City */}
        <section className="py-16 bg-surface border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">What Is GIFT City?</h2>
            <p className="font-body text-lg text-foreground-muted mb-6 leading-relaxed">
              GIFT City — short for Gujarat International Finance Tec-City — is India's first International Financial Services Centre (IFSC): a purpose-built jurisdiction where funds can be bought and sold in US Dollars, regulated separately from the rest of India's financial system. That single fact is what makes a GIFT City fund structurally different from a mutual fund you might already hold through a regular Indian demat account.
            </p>
            <Link to="/what-is-gift-city" className="font-body text-secondary hover:underline inline-flex items-center">
              Understand GIFT City in full <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Why These Funds Exist */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-10 text-center">Why These Funds Exist</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: CircleDollarSign, title: "Invest in global currency", body: "Contributions and redemptions happen in US Dollars, so currency risk and conversion costs work differently than a typical NRI remittance through the NRE/NRO route." },
                { icon: Landmark, title: "A separate regulator", body: "The International Financial Services Centres Authority (IFSCA) — not SEBI alone — oversees GIFT City funds, with its own rules on structure, disclosure and investor eligibility." },
                { icon: TrendingUp, title: "Built for global portfolios", body: "These structures are designed to hold international assets and route capital across borders in ways a typical onshore Indian mutual fund cannot." },
              ].map((f) => (
                <div key={f.title} className="bg-background p-6 rounded-lg border border-border">
                  <f.icon className="h-8 w-8 text-secondary mb-3" />
                  <h3 className="font-heading font-semibold text-lg text-primary mb-2">{f.title}</h3>
                  <p className="font-body text-foreground-muted text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How GIFT City Funds Are Structured */}
        <section className="py-16 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">How GIFT City Funds Are Structured</h2>
            <p className="font-body text-foreground-muted mb-8">Not every GIFT City fund works the same way. Four broad structures cover most of what's available:</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Layers, title: "Mutual Fund FoF", body: "A feeder fund that channels your money into an underlying scheme; typically the lowest entry ticket of the four." },
                { icon: Building2, title: "AIF (Alternative Investment Fund)", body: "A pooled vehicle for less standardised strategies; typically the highest entry ticket." },
                { icon: UserCog, title: "PMS (Portfolio Management Services)", body: "A professionally managed, individually held portfolio for investors wanting more customisation." },
                { icon: Wallet, title: "Retail Feeder Fund", body: "A lower-ticket fund built for simple, individual access." },
              ].map((f) => (
                <div key={f.title} className="flex gap-4 p-5 bg-surface rounded-lg border border-border">
                  <f.icon className="h-6 w-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-primary mb-1">{f.title}</h3>
                    <p className="font-body text-sm text-foreground-muted">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/funds-explained" className="font-body text-secondary hover:underline inline-flex items-center">
                See the full comparison <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Who Actually Invests */}
        <section className="py-16 bg-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-8">Who Actually Invests in These Funds?</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {[
                { title: "NRI", body: "Send money in USD, invest in USD, redeem in USD — a more direct route than the LRS remittance most NRIs default to." },
                { title: "OCI", body: "Broadly similar access to NRIs, with a few fund-specific eligibility conditions worth checking upfront." },
                { title: "Resident Indian", body: "You can invest too, via the Liberalised Remittance Scheme (LRS), subject to its own annual limit and tax treatment." },
              ].map((f) => (
                <div key={f.title} className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="font-heading font-semibold text-primary mb-2">{f.title}</h3>
                  <p className="font-body text-sm text-foreground-muted">{f.body}</p>
                </div>
              ))}
            </div>
            <div className="bg-secondary/10 border border-secondary/30 p-5 rounded-lg mb-6">
              <p className="font-body text-sm text-primary">
                <strong>Based in the United States?</strong> GIFT City structures interact with US tax rules — like PFIC status — in ways that materially change the numbers.{" "}
                <Link to="/us-based-nris" className="text-secondary hover:underline">See the dedicated guide for US-based NRIs →</Link>
              </p>
            </div>
            <Link to="/who-its-for" className="font-body text-secondary hover:underline inline-flex items-center">
              See the full breakdown <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Why Invest Through GIFT City */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">Advantages of GIFT City Funds for NRIs</h2>
            <p className="font-body text-lg text-foreground-muted mb-8 leading-relaxed max-w-4xl">
              GIFT City provides NRIs with a globally aligned investment ecosystem, offering access to professionally managed investment products through India's International Financial Services Centre (IFSC). It combines international standards, regulatory oversight, and a wider range of investment opportunities in one place.
            </p>

            <h3 className="font-heading font-semibold text-xl text-primary mb-4">Key Benefits</h3>
            <ul className="grid md:grid-cols-2 gap-3 mb-12">
              {[
                "Invest in USD and other permitted foreign currencies (subject to fund structure)",
                "Access India and global investment opportunities",
                "Regulated by IFSCA, India's unified IFSC regulator",
                "Professionally managed investment products",
                "Potential tax-efficient investment structures",
                "Diversified options across Mutual Funds, AIFs, REITs, InvITs and more",
              ].map((b) => (
                <li key={b} className="flex gap-3 p-4 bg-surface rounded-lg border border-border">
                  <span className="text-secondary mt-1 shrink-0">◆</span>
                  <span className="font-body text-sm text-foreground-muted leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-heading font-semibold text-xl text-primary mb-4">Investing Through Traditional Route vs GIFT City</h3>

            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto rounded-lg border border-border">
              <table
                className="w-full table-fixed text-left font-body text-sm text-foreground"
                aria-describedby="comparison-caption"
              >
                <caption
                  id="comparison-caption"
                  className="sr-only"
                >
                  Comparison of the traditional Indian investment route versus investing through GIFT City IFSC, across currency, products, regulation, market access, diversification, tax efficiency and investor experience.
                </caption>
                <thead className="bg-surface">
                  <tr>
                    <th scope="col" className="w-[24%] px-4 py-3 font-heading font-semibold text-primary border-b border-border align-top">Feature</th>
                    <th scope="col" className="w-[38%] px-4 py-3 font-heading font-semibold text-primary border-b border-border align-top">Traditional Investment Route</th>
                    <th scope="col" className="w-[38%] px-4 py-3 font-heading font-semibold text-primary border-b border-border align-top">GIFT City Investment</th>
                  </tr>
                </thead>
                <tbody className="text-foreground">
                  {[
                    ["Investment Currency", "Primarily INR", "USD and other permitted foreign currencies*"],
                    ["Investment Opportunities", "Primarily India-focused", "India-focused and global investment opportunities"],
                    ["Investment Products", "Mutual Funds, Stocks, Fixed Income", "Mutual Funds, AIFs, REITs, InvITs, Feeder Funds & Fund of Funds"],
                    ["Regulatory Framework", "Multiple regulations (RBI, FEMA, SEBI, etc.)", "Unified IFSC ecosystem regulated by IFSCA"],
                    ["Global Market Access", "Limited", "Easier access through internationally structured funds"],
                    ["Portfolio Diversification", "Primarily domestic investments", "Diversified exposure across India and global markets"],
                    ["Tax Efficiency", "Standard tax provisions", "Potential tax-efficient structures for eligible IFSC investments*"],
                    ["Investment Experience", "Multiple processes and intermediaries", "Streamlined cross-border investment experience"],
                  ].map(([feature, trad, gift]) => (
                    <tr key={feature} className="border-b border-border last:border-b-0">
                      <th scope="row" className="px-4 py-3 font-heading font-semibold text-primary align-top break-words text-left">{feature}</th>
                      <td className="px-4 py-3 align-top break-words">{trad}</td>
                      <td className="px-4 py-3 align-top break-words">{gift}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile stacked cards */}
            <ul className="md:hidden space-y-4 list-none p-0" aria-label="Traditional route versus GIFT City comparison">
              {[
                ["Investment Currency", "Primarily INR", "USD and other permitted foreign currencies*"],
                ["Investment Opportunities", "Primarily India-focused", "India-focused and global investment opportunities"],
                ["Investment Products", "Mutual Funds, Stocks, Fixed Income", "Mutual Funds, AIFs, REITs, InvITs, Feeder Funds & Fund of Funds"],
                ["Regulatory Framework", "Multiple regulations (RBI, FEMA, SEBI, etc.)", "Unified IFSC ecosystem regulated by IFSCA"],
                ["Global Market Access", "Limited", "Easier access through internationally structured funds"],
                ["Portfolio Diversification", "Primarily domestic investments", "Diversified exposure across India and global markets"],
                ["Tax Efficiency", "Standard tax provisions", "Potential tax-efficient structures for eligible IFSC investments*"],
                ["Investment Experience", "Multiple processes and intermediaries", "Streamlined cross-border investment experience"],
              ].map(([feature, trad, gift]) => (
                <li key={feature} className="bg-surface rounded-lg border border-border p-4">
                  <h3 className="font-heading font-semibold text-primary mb-3 text-base">{feature}</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="block text-xs font-heading font-semibold text-foreground uppercase tracking-wide mb-1">Traditional Route</span>
                      <p className="font-body text-sm text-foreground break-words">{trad}</p>
                    </div>
                    <div className="pt-3 border-t border-border">
                      <span className="block text-xs font-heading font-semibold text-secondary uppercase tracking-wide mb-1">GIFT City</span>
                      <p className="font-body text-sm text-foreground break-words">{gift}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-foreground-muted italic">
              *Investment features, currency options, and tax benefits vary depending on the specific fund structure, applicable regulations, and the investor's country of residence.
            </p>
          </div>
        </section>

        {/* How to Invest — placed before How Anup Can Help */}
        <section className="py-16 bg-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">How to Invest in GIFT City Funds</h2>
            <p className="font-body text-lg text-foreground-muted mb-8 max-w-4xl leading-relaxed">
              Advantages tell you <em>why</em>. This tells you <em>what to do next</em> — five practical steps most NRI, OCI and Resident Indian investors follow.
            </p>
            <ol className="space-y-4 list-none p-0 mb-8">
              {[
                { icon: BookOpen, title: "Understand the structures", body: "Learn how Mutual Fund FoFs, Retail Feeder Funds, AIFs and PMS differ.", to: "/funds-explained", cta: "Funds Explained" },
                { icon: UserCheck, title: "Check your eligibility & route", body: "NRI, OCI or Resident Indian — and if US-based, verify PFIC / Non-PFIC status first.", to: "/who-its-for", cta: "Who It's For", to2: "/us-based-nris", cta2: "US NRIs" },
                { icon: FileText, title: "Gather your documents", body: "KYC pack: passport, PAN, overseas address proof, tax residency certificate (as applicable)." },
                { icon: MessageCircle, title: "Talk to Anup", body: "Get connected with the right Fund Management Entity — no call-centre routing.", to: "/contact", cta: "Contact Anup" },
                { icon: CheckCircle2, title: "Complete onboarding and invest", body: "Sign subscription documents, complete KYC with the FME, remit funds, receive allotment." },
              ].map((s, i) => (
                <li key={s.title} className="flex gap-4 bg-background p-5 rounded-lg border border-border">
                  <div className="shrink-0 w-9 h-9 rounded-full bg-secondary/15 border border-secondary/40 flex items-center justify-center font-heading font-bold text-secondary">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <s.icon className="h-5 w-5 text-secondary" />
                      <h3 className="font-heading font-semibold text-primary">{s.title}</h3>
                    </div>
                    <p className="font-body text-sm text-foreground-muted leading-relaxed mb-2">{s.body}</p>
                    {s.to && (
                      <Link to={s.to} className="font-body text-sm text-secondary hover:underline inline-flex items-center mr-4">
                        {s.cta} <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    )}
                    {s.to2 && (
                      <Link to={s.to2} className="font-body text-sm text-secondary hover:underline inline-flex items-center">
                        {s.cta2} <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ol>
            <Link to="/how-to-invest" className="font-body text-secondary hover:underline inline-flex items-center">
              See the full step-by-step guide <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* How Anup Can Help (continued) */}
        <section className="py-16 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">How Anup Can Help</h2>
            <p className="font-body text-lg text-foreground-muted leading-relaxed mb-8">
              I'm Anup Vatyani, an AMFI-registered Mutual Fund Distributor (ARN 106715) with over 22 years in banking and financial services, including a decade dedicated to mutual fund distribution. My role on this site — and in any conversation that follows — is to help you understand how GIFT City funds work and whether they fit your situation, not to push a specific product. If, after reading through this, you'd like to talk it through, I'm one message away.
            </p>
            <Button asChild variant="gold" size="lg">
              <Link to="/contact">Talk to Anup <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </section>

        {/* Frequently Asked */}
        <section className="py-16 bg-surface">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-8">Frequently Asked</h2>
            <ul className="space-y-3 mb-6">
              {[
                "Is a GIFT City fund the same as a regular Indian mutual fund?",
                "Do I need a PAN card to invest?",
                "How is a GIFT City fund taxed for a US-based NRI?",
                "Who regulates GIFT City funds?",
              ].map((q) => (
                <li key={q} className="bg-background p-4 rounded-lg border border-border font-body text-primary">{q}</li>
              ))}
            </ul>
            <Link to="/faqs" className="font-body text-secondary hover:underline inline-flex items-center">
              Read all FAQs <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* About the Contributor */}
        <section className="py-16 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">About the Contributor</h2>
            <p className="font-body text-foreground-muted leading-relaxed mb-6">
              Anup Vatyani has over 22 years of experience in banking and financial services, including a decade as an AMFI-registered Mutual Fund Distributor (ARN 106715). This site is his effort to provide an accurate, independent, educational resource on GIFT City and IFSC investing.
            </p>
            <Link to="/about" className="font-body text-secondary hover:underline inline-flex items-center">
              Read Anup's full background <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Still deciding if GIFT City investing is right for you?</h2>
            <p className="font-body text-lg text-primary-foreground/85 mb-8">
              That's a fair place to be. Ask Anup anything — no forms that go to a call centre, no pressure, and no obligation to invest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="gold" size="lg">
                <Link to="/contact">Talk to Anup</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href="https://wa.me/919537533533" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;