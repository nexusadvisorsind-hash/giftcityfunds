import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHead } from "@/components/SectionHead";
import { FUND_COUNT, HOUSE_COUNT } from "@/data/funds";

// "What are GIFT City funds?" in one place on the home page, so the page
// answers the search "gift city funds" directly. Every figure here is already
// on the linked guide, with its official source there.
const TYPES = [
  { t: "Retail schemes", m: "Some from USD 500", d: "Open to most investors, like a mutual fund. Some invest abroad through a feeder fund.", to: "/gift-city-fund-list" },
  { t: "Feeder funds and fund of funds", m: "Varies by fund", d: "Put your money into one or more underlying funds, in India or abroad.", to: "/gift-city-feeder-funds" },
  { t: "PMS", m: "From USD 75,000", d: "A portfolio managed in your own name.", to: "/gift-city-pms" },
  { t: "AIFs", m: "Mostly USD 150,000", d: "Category I, II and III funds for larger investors.", to: "/gift-city-aif" },
];

const card = "rounded-2xl border border-border bg-white p-5";
const h3 = "font-heading font-semibold text-lg text-primary";
const body = "font-body text-foreground-muted leading-relaxed";
const link = "text-secondary font-semibold underline underline-offset-2";

const HomeGuide = () => (
  <section className="py-16 md:py-20 bg-white border-t border-border" aria-labelledby="what-h">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHead
        n={1}
        label="The basics"
        id="what-h"
        title="What are GIFT City funds?"
        sub="The short version, with a link to the full guide for each point."
      />

      <p className="font-body text-lg text-primary leading-relaxed max-w-4xl">
        <strong>GIFT City funds</strong> are investment funds set up in GIFT IFSC, India's International Financial Services
        Centre in Gandhinagar, Gujarat. They are <strong>regulated by IFSCA</strong>, not SEBI, and you invest in{" "}
        <strong>US Dollars</strong>. Each is run by a Fund Management Entity registered with IFSCA, often an arm of a well-known
        Indian fund house. Today we list {FUND_COUNT} GIFT City funds from {HOUSE_COUNT} fund houses.
      </p>

      <h3 className="mt-10 font-heading font-bold text-xl text-primary">Types of GIFT City funds</h3>
      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {TYPES.map((x) => (
          <Link key={x.t} to={x.to} className={`${card} group hover:border-secondary/40 hover:shadow-sm transition`}>
            <p className={`${h3} group-hover:underline`}>{x.t}</p>
            <p className="mt-1 font-body text-sm font-semibold text-emerald-700">{x.m}</p>
            <p className="mt-2 font-body text-sm text-foreground-muted">{x.d}</p>
          </Link>
        ))}
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-4">
        <div className={card}>
          <h3 className={h3}>Inbound or outbound</h3>
          <p className={`mt-2 ${body}`}>
            <strong className="text-primary">Inbound</strong> funds invest in India and are mainly for NRIs and foreign investors.{" "}
            <strong className="text-primary">Outbound</strong> funds invest abroad, often in US shares, and many accept resident Indians.
          </p>
          <p className="mt-3 font-body text-sm">
            <Link to="/gift-city-inbound-funds" className={link}>Inbound funds</Link> ·{" "}
            <Link to="/gift-city-outbound-funds" className={link}>Outbound funds</Link>
          </p>
        </div>
        <div className={card}>
          <h3 className={h3}>Who can invest</h3>
          <p className={`mt-2 ${body}`}>
            <strong className="text-primary">NRIs, OCIs and foreign nationals</strong>, where the fund accepts their country.{" "}
            <strong className="text-primary">Resident Indians</strong> under LRS: up to USD 250,000 a year, with 20% TCS above ₹10 lakh,
            claimed back in your tax return. There is no SIP; each investment is a lump sum.
          </p>
          <p className="mt-3 font-body text-sm">
            <Link to="/gift-city-funds-for-nri" className={link}>NRIs</Link> ·{" "}
            <Link to="/gift-city-funds-for-resident-indians" className={link}>Resident Indians</Link> ·{" "}
            <Link to="/gift-city-funds-for-oci" className={link}>OCIs</Link>
          </p>
        </div>
        <div className={card}>
          <h3 className={h3}>Tax, in one line</h3>
          <p className={`mt-2 ${body}`}>
            The tax concessions sit mainly at the level of the fund. What you pay as an investor depends on the fund's structure and
            where you live, and NRIs are also taxed in their country of residence.
          </p>
          <p className="mt-3 font-body text-sm">
            <Link to="/taxation" className={link}>GIFT City fund taxation</Link>
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-surface p-5 sm:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <div className="flex-1">
          <h3 className={h3}>How to invest in GIFT City funds</h3>
          <ol className="mt-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-1 font-body text-foreground-muted list-decimal list-inside">
            <li>Pick a fund that accepts you</li>
            <li>Complete the fund house's KYC</li>
            <li>Send US Dollars from your bank</li>
            <li>Units are allotted to you</li>
          </ol>
        </div>
        <Link to="/how-to-invest" className="inline-flex items-center gap-2 font-body font-semibold text-secondary hover:underline shrink-0">
          Step-by-step guide <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </div>
  </section>
);

export default HomeGuide;
