import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import MoneyMap from "@/components/MoneyMap";
import HeroFunnel from "@/components/HeroFunnel";
import { ArrowRight, Landmark, Layers, Wallet, MessageCircle, CircleDollarSign, TrendingUp, Building2, UserCog, FileText, Globe2, Home as Home2, Calculator, Route, ListChecks, BookA } from "lucide-react";
import { PageFaqs, type PageFaq } from "@/components/PageFaqs";
import TicketLadder from "@/components/TicketLadder";
const PAGE_FAQS: PageFaq[] = [
  { q: "What investment opportunities are there in GIFT City?", a: "For individuals: GIFT City mutual funds and feeder funds, AIFs and PMS for larger amounts, US Dollar fixed deposits at IFSC Banking Units, US stocks and ETFs through IFSC brokers, and dollar insurance products. Each has different minimums, risks and tax." },
  { q: "What is GiftCityFunds?", a: "GiftCityFunds (giftcityfunds.in) is an educational website about GIFT City funds, written by Anup Vatyani, an AMFI-registered Mutual Fund Distributor (ARN 106715). It is not a fund house, a bank or an investment platform, and it does not give personalised advice." },
  { q: "What are GIFT City mutual funds?", a: "GIFT City mutual funds are funds set up in India's International Financial Services Centre (GIFT IFSC) in Gandhinagar and regulated by IFSCA. They include retail schemes, feeder funds, AIFs and portfolio management services, run by IFSCA-registered Fund Management Entities, many of them arms of well-known Indian fund houses." },
  { q: "Are GIFT City funds USD funds?", a: "Most are. GIFT City funds are usually denominated in US Dollars: you invest in dollars and redeem in dollars. That suits NRIs who earn in foreign currency, and gives resident Indians a dollar holding through LRS." },
];


const Home = () => {
  const financialServiceSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "GIFT City Funds",
    "url": "https://giftcityfunds.in/",
    "description": "Educational guide to GIFT City IFSC mutual funds, AIFs and PMS structures by Anup Vatyani (AMFI ARN 106715).",
    "areaServed": { "@type": "Country", "name": "India" },
  };

  return (
    <>
      <SEO
        title="GIFT City Funds: Types, Tax, Minimums & How to Invest (2026)"
        description="A plain-English educational guide to GIFT City & IFSC mutual funds, AIFs and PMS structures for NRIs, OCIs and resident Indians. By Anup Vatyani, MFD ARN 106715."
        canonical="https://giftcityfunds.in/"
        schema={financialServiceSchema}
        breadcrumbs={[{ name: "Home", url: "https://giftcityfunds.in/" }]}
      />

      <div className="min-h-screen">
        {/* Hero — Option A: navy, persona choice above the fold */}
        <section className="bg-ink text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-12 pb-6 grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <p className="gcf-fade-up gcf-delay-1 inline-flex items-center rounded-full bg-teal/15 text-teal-light px-4 py-1.5 font-body text-sm font-medium mb-4">
                Plain-English guide · Regulated by IFSCA
              </p>
              <h1 className="gcf-fade-up gcf-delay-2 font-heading font-bold text-4xl md:text-6xl leading-[1.05] tracking-tight mb-5">
                GIFT City Funds, <span className="text-teal-light">Explained Simply</span>
              </h1>
              <p className="gcf-fade-up gcf-delay-3 font-body text-lg md:text-xl text-slate-300 max-w-xl mb-7 leading-relaxed">
                An educational resource to understand GIFT City Mutual Funds, Alternative Investment Funds (AIFs), and the IFSC investment ecosystem for NRIs, OCIs and Resident Indians.
              </p>
              <div className="gcf-fade-up gcf-delay-4 flex flex-wrap gap-3">
                <Link to="/what-is-gift-city" className="inline-flex items-center rounded-xl bg-teal text-ink font-heading font-semibold px-6 py-3.5 transition-transform hover:-translate-y-0.5 motion-reduce:hover:translate-y-0">
                  Start with the basics
                </Link>
                <Link to="/gift-city-funds-vs-mutual-funds" className="inline-flex items-center rounded-xl border border-slate-600 text-white font-heading font-medium px-6 py-3.5 transition-colors hover:border-teal-light">
                  Compare with mutual funds
                </Link>
              </div>
            </div>
            <div className="gcf-fade-up gcf-delay-3 relative hidden sm:flex items-center justify-center min-h-[340px]" aria-hidden="false">
              <div className="gcf-spin-slow absolute w-[360px] h-[360px] rounded-full border border-dashed border-teal-light/35" aria-hidden="true"></div>
              <div className="gcf-spin-slower absolute w-[284px] h-[284px] rounded-full border border-brass/30" aria-hidden="true"></div>
              <img
                src="/images/gift-city-skyline-828.webp"
                alt="GIFT City IFSC skyline at Gandhinagar, Gujarat"
                width="248"
                height="248"
                fetchPriority="high"
                className="relative w-[248px] h-[248px] rounded-full object-cover border-[6px] border-[#13254F]"
              />
              <span className="gcf-float absolute top-6 left-4 md:left-10 rounded-xl bg-white text-ink px-4 py-2.5 font-body text-sm font-semibold shadow-xl">Invest in USD</span>
              <span className="gcf-float absolute bottom-8 left-2 md:left-6 rounded-xl bg-brass text-ink px-4 py-2.5 font-body text-sm font-semibold [animation-delay:1.5s]">IFSCA-regulated</span>
              <span className="gcf-float absolute top-24 right-2 md:right-8 rounded-xl bg-teal text-ink px-4 py-2.5 font-body text-sm font-semibold [animation-delay:3s]">From USD 500</span>
            </div>
          </div>

          {/* Where to start: 3-step funnel */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <h2 className="font-heading text-xl font-semibold text-white mb-3">Find your starting point in three clicks</h2>
            <HeroFunnel />
            <p className="mt-5 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 font-body text-sm text-slate-300">
              <span className="font-semibold text-brass">Start from USD 500.</span> Some GIFT City retail funds now have low minimums. For example, Tata India Dynamic Equity Fund (GIFT City) accepts USD 500 from NRIs, OCIs and foreign investors; it is not open to Indian residents or US persons.{" "}
              <a href="https://www.tatamutualfund.com/ifsc-gift-city" target="_blank" rel="noopener noreferrer" className="text-teal-light underline">Source: Tata Mutual Fund</a>. An example of a minimum, not a recommendation; read the scheme documents.
            </p>
          </div>
        </section>

        {/* Fact ticker */}
        <div className="bg-teal text-ink overflow-hidden whitespace-nowrap font-body font-semibold text-[15px]" aria-label="Key facts">
          <div className="gcf-marquee inline-flex gap-12 py-3.5">
            {[0, 1].map((copy) => (
              <span key={copy} className="inline-flex gap-12" aria-hidden={copy === 1 ? "true" : undefined}>
                <span>Regulated by IFSCA, not SEBI</span>
                <span>Invest and redeem in US Dollars</span>
                <span>Residents invest via LRS — up to USD 250,000 a year</span>
                <span>Some retail funds from USD 500</span>
                <span>NRI investment in GIFT City funds has crossed $7 billion (IFSCA, March 2025)</span>
                <span>Every guide links to its official source</span>
              </span>
            ))}
          </div>
        </div>

        {/* How investing works — five steps */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div>
                <p className="font-body text-sm font-semibold uppercase tracking-wider text-secondary mb-2">The process</p>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">How Investing Works, in Five Steps</h2>
                <p className="font-body text-lg text-foreground-muted mt-2">The same path most NRI, OCI and Resident Indian investors follow.</p>
              </div>
              <Link to="/how-to-invest" className="font-body font-semibold text-secondary hover:underline inline-flex items-center">
                Read the full guide <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute hidden lg:block top-7 left-7 right-7 h-[3px] rounded bg-border" aria-hidden="true">
                <div className="gcf-grow h-[3px] rounded bg-teal"></div>
              </div>
              <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-5 list-none p-0 m-0">
                {[
                  { title: "Understand the structures", body: "Mutual Fund FoFs, Retail Feeder Funds, AIFs and PMS — and their minimums.", to: "/funds-explained", cta: "Funds Explained" },
                  { title: "Check your eligibility & route", body: "NRI, OCI or Resident Indian — and if US-based, PFIC status first.", to: "/who-its-for", cta: "Who It's For" },
                  { title: "Gather your documents", body: "Passport, PAN, overseas address proof, tax residency certificate." },
                  { title: "Ask your questions", body: "Ask Anup how the process works, or to be connected with a Fund Management Entity.", to: "/contact", cta: "Contact Anup", highlight: true },
                  { title: "Complete onboarding and invest", body: "KYC with the FME, sign subscription documents, remit USD, receive units." },
                ].map((s, i) => (
                  <li key={s.title}>
                    <span
                      className={`gcf-pop flex h-14 w-14 items-center justify-center rounded-full font-heading text-xl font-bold shadow-[0_0_0_6px_hsl(var(--background))] ${s.highlight ? "bg-brass text-ink" : "bg-ink text-teal-light"}`}
                      style={{ animationDelay: `${0.2 + i * 0.3}s` }}
                    >
                      {i + 1}
                    </span>
                    <h3 className="font-heading font-semibold text-lg text-primary mt-4 mb-1.5">{s.title}</h3>
                    <p className="font-body text-foreground-muted leading-relaxed">{s.body}</p>
                    {s.to && (
                      <Link to={s.to} className="font-body text-sm font-semibold text-secondary hover:underline inline-flex items-center mt-2">
                        {s.cta} <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Two tiers by ticket size */}
        <section className="py-16 md:py-20 bg-surface" aria-labelledby="tiers-h">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="tiers-h" className="font-heading font-bold text-3xl md:text-4xl text-primary max-w-2xl">Two tiers of GIFT City products</h2>
            <p className="font-body text-lg text-foreground-muted mt-3 mb-8 max-w-2xl">
              Retail funds start from about USD 500. PMS and AIFs start at USD 75,000 and USD 150,000 and are built for high-net-worth investors, families and institutions. Know which tier you are looking at before you compare.
            </p>
            <TicketLadder />
          </div>
        </section>

        {/* Signature infographic */}
        <section className="py-16 md:py-20 bg-background" aria-labelledby="map-h">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="map-h" className="font-heading font-bold text-3xl md:text-4xl text-primary max-w-2xl">Where your money goes when you invest through GIFT City</h2>
            <p className="font-body text-lg text-foreground-muted mt-3 mb-8 max-w-2xl">
              GIFT City funds run in two directions. NRIs use them to invest in India in dollars; resident Indians use them to invest abroad.{" "}
              <Link to="/gift-city-fund-list" className="text-secondary font-medium hover:underline">See which fund houses run them</Link>.
            </p>
            <MoneyMap />
          </div>
        </section>

        {/* Free tools */}
        <section className="py-16 bg-ink text-white" aria-labelledby="tools-h">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 id="tools-h" className="font-heading font-bold text-3xl md:text-4xl mb-8">Work it out in under a minute</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { to: "/gift-city-route-checker", icon: Route, t: "Which route applies to me?", d: "Resident, NRI, OCI or returning: see your route, limits and tax collected at source." },
                { to: "/insights/lrs-tcs-gift-city#calculator", icon: Calculator, t: "TCS calculator", d: "Estimate TCS on any LRS remittance for FY 2026-27, including GIFT City investments." },
                { to: "/gift-city-fund-list", icon: ListChecks, t: "GIFT City fund list", d: "Fund houses with GIFT City funds, inbound and outbound, with official sources." },
                { to: "/gift-city-glossary", icon: BookA, t: "Glossary", d: "IFSC, IFSCA, FME, LRS, PFIC and more, explained in a line each." },
              ].map((c) => (
                <Link key={c.to} to={c.to} className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 gcf-lift">
                  <c.icon className="h-7 w-7 text-brass mb-3" aria-hidden />
                  <p className="font-heading font-semibold text-lg text-white group-hover:underline">{c.t}</p>
                  <p className="font-body text-sm text-slate-300 mt-1">{c.d}</p>
                </Link>
              ))}
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
                { icon: TrendingUp, title: "Not run by a fund house", body: "This isn't an AMC's own website, and it isn't built to promote one scheme. It explains the GIFT City fund structures so you can compare them before you commit to anything." },
                { icon: MessageCircle, title: "One point of contact", body: "Questions go directly to Anup Vatyani — no call centre, no relationship-manager rotation, no hand-offs between departments." },
              ].map((f) => (
                <div key={f.title} className="gcf-lift bg-background p-6 rounded-2xl border border-border">
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
                <div key={f.title} className="gcf-lift bg-background p-6 rounded-2xl border border-border">
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
                <div key={f.title} className="gcf-lift flex gap-4 p-5 bg-surface rounded-2xl border border-border">
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
                <div key={f.title} className="gcf-lift bg-background p-6 rounded-2xl border border-border">
                  <h3 className="font-heading font-semibold text-primary mb-2">{f.title}</h3>
                  <p className="font-body text-sm text-foreground-muted">{f.body}</p>
                </div>
              ))}
            </div>
            <div className="bg-secondary/10 border border-secondary/30 p-5 rounded-lg mb-6">
              <p className="font-body text-sm text-primary">
                <strong>Living outside India?</strong> Whether a fund accepts you, and how it is taxed, depends on your country: the UAE and Gulf, UK, US (PFIC rules), Canada, Singapore or Australia.{" "}
                <Link to="/gift-city-funds-for-nri" className="text-secondary hover:underline">See the NRI guide, country by country</Link>
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
            <p className="mt-4 font-body text-sm text-foreground-muted">
              These features come with risks, including market risk, currency risk and exit restrictions. Returns are not guaranteed.{" "}
              <Link to="/gift-city-funds-risks" className="text-secondary hover:underline">Read the risks of GIFT City funds</Link>{" "}
              and how they compare with{" "}
              <Link to="/gift-city-funds-vs-mutual-funds" className="text-secondary hover:underline">regular Indian mutual funds</Link>.
            </p>
          </div>
        </section>

        {/* How Anup Can Help (continued) */}
        <section className="py-16 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">How Anup Can Help</h2>
            <p className="font-body text-lg text-foreground-muted leading-relaxed mb-8">
              I'm Anup Vatyani, an AMFI-registered Mutual Fund Distributor (ARN 106715) with over 22 years in banking and financial services, including a decade dedicated to mutual fund distribution. My role on this site — and in any conversation that follows — is to help you understand how GIFT City funds work, not to push a specific product or give personalised investment advice. If, after reading through this, you'd like to talk it through, I'm one message away.
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
            <div className="flex flex-col sm:flex-row gap-6 items-start">
            <img
              src="/images/anup-vatyani-320.webp"
              alt="Anup Vatyani"
              width={128}
              height={128}
              loading="lazy"
              className="w-32 h-32 rounded-full object-cover border border-border shrink-0"
            />
            <div>
            <p className="font-body text-foreground-muted leading-relaxed mb-6">
              Anup Vatyani has over 22 years of experience in banking and financial services, including a decade as an AMFI-registered Mutual Fund Distributor (ARN 106715). This site is his effort to provide an accurate, educational resource on GIFT City and IFSC investing.
            </p>
            <Link to="/about" className="font-body text-secondary hover:underline inline-flex items-center">
              Read Anup's full background <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
            </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <PageFaqs items={PAGE_FAQS} title="GIFT City funds: quick answers" />
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Still have questions about GIFT City funds?</h2>
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
