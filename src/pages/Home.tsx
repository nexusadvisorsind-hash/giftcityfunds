import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { SectionHead, SectionLabel } from "@/components/SectionHead";
import { ArrowRight, ArrowDown, FileText, Globe2, Calculator, Route, ListChecks } from "lucide-react";
import { PageFaqs, type PageFaq } from "@/components/PageFaqs";
import LatestNews from "@/components/LatestNews";
import HomeFundFinder from "@/components/HomeFundFinder";
import { FUND_COUNT } from "@/data/funds";
const PAGE_FAQS: PageFaq[] = [
  { q: "Which GIFT City fund is best?", a: "There is no single best GIFT City fund. The right fund depends on where you live, whether you want Indian or global markets, how much you invest and your tax position. Our GIFT City fund list sets out every fund we could verify, with minimums and who can invest, without ranking them." },
  { q: "Is it good to invest in GIFT City?", a: "It can suit some investors and not others. GIFT City funds offer US Dollar investing under IFSCA regulation, from USD 500 for some retail funds, and are not limited by the SEBI overseas cap. Drawbacks include no SIP, LRS and 20% TCS above ₹10 lakh for residents, short track records and, for US persons, PFIC rules. This is general information, not advice." },
  { q: "How does a GIFT City fund work?", a: "A GIFT City fund is run by a Fund Management Entity registered with IFSCA in GIFT IFSC, Gandhinagar. You complete the fund's KYC and send US Dollars: residents under LRS, NRIs from an account abroad. The fund invests in India (inbound) or abroad (outbound), often by feeding into another fund, and pays redemptions in US Dollars." },
  { q: "What investment opportunities are there in GIFT City?", a: "For individuals: GIFT City mutual funds and feeder funds, AIFs and PMS for larger amounts, US Dollar fixed deposits at IFSC Banking Units, US stocks and ETFs through IFSC brokers, and dollar insurance products. Each has different minimums, risks and tax." },
  { q: "What is GiftCityFunds?", a: "GiftCityFunds (giftcityfunds.in) is an educational website about GIFT City funds, written by Anup Vatyani, an AMFI-registered Mutual Fund Distributor (ARN 106715). It is not a fund house, a bank or an investment platform, and it does not give personalised advice." },
  { q: "What are GIFT City mutual funds?", a: "GIFT City mutual funds are funds set up in India's International Financial Services Centre (GIFT IFSC) in Gandhinagar and regulated by IFSCA. They include retail schemes, feeder funds, AIFs and portfolio management services, run by IFSCA-registered Fund Management Entities, many of them arms of well-known Indian fund houses." },
  { q: "Are GIFT City funds USD funds?", a: "Most are. GIFT City funds are usually denominated in US Dollars: you invest in dollars and redeem in dollars. That suits NRIs who earn in foreign currency, and gives resident Indians a dollar holding through LRS." },
  { q: "Is a GIFT City fund the same as a regular Indian mutual fund?", a: "No. A GIFT City fund is regulated by IFSCA rather than SEBI, is usually in US Dollars, and has its own rules on who can invest, minimums and tax. There is also no SIP: you invest lump sums." },
  { q: "Do I need a PAN card to invest in GIFT City funds?", a: "Resident Indians need a PAN. For NRIs and foreign citizens it depends on the fund house: some require a PAN, others accept a declaration from investors whose only Indian income is from IFSC funds." },
  { q: "Who regulates GIFT City funds?", a: "The International Financial Services Centres Authority (IFSCA), the single regulator for financial services in GIFT IFSC. SEBI regulates domestic Indian mutual funds, not GIFT City funds." },
  { q: "How is a GIFT City fund taxed for a US-based NRI?", a: "Mainly under US rules: most GIFT City funds are likely to be PFICs, which brings annual Form 8621 reporting and potentially punitive tax unless an election is available. Many schemes also do not accept US persons. Take US tax advice first." },
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
        description="Plain-English guide to GIFT City funds, AIFs and PMS for NRIs, OCIs and resident Indians. By Anup Vatyani, AMFI-registered MFD (ARN 106715)."
        canonical="https://giftcityfunds.in/"
        schema={financialServiceSchema}
        breadcrumbs={[{ name: "Home", url: "https://giftcityfunds.in/" }]}
      />

      <div className="min-h-screen">
        {/* Hero: centred, text and buttons only (owner's choice, Nov 2026). */}
        <section className="bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-28 pb-16 md:pb-24 text-center flex flex-col items-center">
            <p className="gcf-fade-up gcf-delay-1 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-accent px-3 py-1.5 font-body text-xs sm:text-sm font-semibold text-secondary">
              <span className="h-2 w-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" aria-hidden="true"></span>
              Funds regulated by IFSCA · invested in US Dollars
            </p>
            <h1 className="mt-6 font-heading font-extrabold text-[2.6rem] leading-[1.04] sm:text-6xl md:text-7xl tracking-[-0.035em] text-primary">
              GIFT City funds,<br />
              <span className="text-secondary">explained simply.</span>
            </h1>
            <p className="gcf-fade-up gcf-delay-2 mt-6 font-body text-lg md:text-xl text-foreground-muted leading-relaxed">
              Plain-English guides to {FUND_COUNT} GIFT City funds, for NRIs and resident Indians.
            </p>
            <div className="gcf-fade-up gcf-delay-3 mt-9 flex flex-wrap items-center justify-center gap-3">
              <a href="#fund-finder" className="inline-flex items-center gap-2 rounded-lg bg-ink text-white font-body font-semibold text-base px-5 py-3.5 hover:bg-primary-hover">
                Browse {FUND_COUNT} funds <ArrowDown className="h-4 w-4" aria-hidden />
              </a>
              <Link to="/gift-city-route-checker" className="inline-flex items-center gap-2 rounded-lg border border-input bg-white text-primary font-body font-semibold text-base px-5 py-3.5 hover:bg-accent">
                Find your route <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link to="/contact" className="font-body font-semibold text-secondary underline underline-offset-4 hover:text-secondary-hover">
                or talk to Anup
              </Link>
            </div>
          </div>
        </section>

        {/* Fact ticker */}
        <div className="bg-secondary text-white overflow-hidden whitespace-nowrap font-body font-medium text-[15px]" aria-label="Key facts">
          <div className="gcf-marquee inline-flex gap-12 py-3.5">
            {[0, 1].map((copy) => (
              <span key={copy} className="inline-flex gap-12" aria-hidden={copy === 1 ? "true" : undefined}>
                <span>Regulated by IFSCA, not SEBI</span>
                <span>Funds are in US Dollars; your bank converts from rupees or your local currency</span>
                <span>Residents invest via LRS — up to USD 250,000 a year</span>
                <span>Some retail funds from USD 500</span>
                <span>16,150 investors in GIFT City funds, over half in retail schemes (IFSCA, June 2026)</span>
                <span>Every guide links to its official source</span>
              </span>
            ))}
          </div>
        </div>

        {/* Fund finder: the funds themselves, near the top */}
        <HomeFundFinder />

        {/* Free tools */}
        <section className="py-16 md:py-20 bg-white border-t border-border" aria-labelledby="tools-h">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHead n={2} label="Free tools" id="tools-h" title="Work it out in under a minute" sub="No sign-up needed." />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { to: "/gift-city-route-checker", icon: Route, t: "Which route applies to me?", d: "Resident, NRI, OCI or returning: see your route, limits and tax collected at source." },
                { to: "/insights/lrs-tcs-gift-city#calculator", icon: Calculator, t: "TCS calculator", d: "Estimate TCS on any LRS remittance for FY 2026-27, including GIFT City investments." },
                { to: "/gift-city-fund-list", icon: ListChecks, t: "GIFT City fund list", d: "Fund houses with GIFT City funds, inbound and outbound, with official sources." },
                { to: "/gift-city-document-checklist", icon: FileText, t: "Document checklist", d: "Pick your status, country and product; print your KYC list." },
                { to: "/gift-city-rules-updates", icon: Globe2, t: "What changed lately", d: "Dated IFSCA, RBI, SEBI and tax changes, and what each means for you." },
              ].map((c) => (
                <Link key={c.to} to={c.to} className="group rounded-2xl border border-border bg-white p-5 hover:border-secondary/40 hover:shadow-sm transition">
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent"><c.icon className="h-5 w-5 text-secondary" aria-hidden /></span>
                  <p className="font-heading font-semibold text-lg text-primary group-hover:underline">{c.t}</p>
                  <p className="font-body text-sm text-foreground-muted mt-1">{c.d}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <LatestNews />

        {/* Frequently asked: answered, with FAQPage schema */}
        <section className="py-16 md:py-20 bg-white border-t border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionLabel n={4} label="Questions" />
            <PageFaqs items={PAGE_FAQS} title="Frequently asked questions" className="mt-3 [&>h2]:font-extrabold [&>h2]:text-3xl md:[&>h2]:text-4xl [&>h2]:tracking-[-0.02em] [&>h2]:mb-8" />
            <Link to="/faqs" className="mt-4 font-body text-secondary hover:underline inline-flex items-center">
              Read all FAQs <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
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
