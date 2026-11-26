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

const BASICS: { t: string; body: React.ReactNode; links: [string, string][] }[] = [
  {
    t: "Inbound or outbound",
    body: <><strong className="text-primary">Inbound</strong> funds invest in India and are mainly for NRIs and foreign investors. <strong className="text-primary">Outbound</strong> funds invest abroad, often in US shares, and many accept resident Indians.</>,
    links: [["/gift-city-inbound-funds", "Inbound funds"], ["/gift-city-outbound-funds", "Outbound funds"]],
  },
  {
    t: "Who can invest",
    body: <><strong className="text-primary">NRIs, OCIs and foreign nationals</strong>, where the fund accepts their country. <strong className="text-primary">Resident Indians</strong> under LRS: up to USD 250,000 a year, with 20% TCS above ₹10 lakh, claimed back in your tax return. There is no SIP; each investment is a lump sum.</>,
    links: [["/gift-city-funds-for-nri", "NRIs"], ["/gift-city-funds-for-resident-indians", "Resident Indians"], ["/gift-city-funds-for-oci", "OCIs"]],
  },
  {
    t: "Tax, in one line",
    body: <>The tax concessions sit mainly at the level of the fund. What you pay as an investor depends on the fund's structure and where you live, and NRIs are also taxed in their country of residence.</>,
    links: [["/taxation", "GIFT City fund taxation"]],
  },
];

const STEPS = ["Pick a fund that accepts you", "Complete the fund house's KYC", "Send US Dollars from your bank", "Units are allotted to you"];

const sub = "font-heading font-bold text-xl text-primary";
const link = "font-body text-sm font-semibold text-secondary underline underline-offset-2 hover:text-secondary-hover";

const HomeGuide = () => (
  <section className="py-16 md:py-20 bg-white" aria-labelledby="what-h">
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

      {/* Types */}
      <div className="mt-12 pt-10 border-t border-border">
        <h3 className={sub}>Types of GIFT City funds</h3>
        <ul className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 list-none p-0">
          {TYPES.map((x) => (
            <li key={x.t}>
              <Link to={x.to} className="group flex h-full flex-col rounded-2xl border border-border bg-white p-5 transition hover:border-secondary/50 hover:shadow-md">
                <span className="font-heading font-semibold text-lg text-primary group-hover:underline">{x.t}</span>
                <span className="mt-2 inline-flex w-fit rounded-full bg-emerald-50 px-2.5 py-0.5 font-body text-xs font-semibold text-emerald-700">{x.m}</span>
                <span className="mt-3 font-body text-sm leading-relaxed text-foreground-muted">{x.d}</span>
                <span className="mt-auto pt-4 inline-flex items-center gap-1 font-body text-sm font-semibold text-secondary">Read more <ArrowRight className="h-4 w-4" aria-hidden /></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Before you invest */}
      <div className="mt-12 pt-10 border-t border-border">
        <h3 className={sub}>Before you invest</h3>
        <ul className="mt-5 grid md:grid-cols-3 gap-5 list-none p-0">
          {BASICS.map((b) => (
            <li key={b.t} className="flex h-full flex-col rounded-2xl border border-border bg-white p-6">
              <h4 className="font-heading font-semibold text-lg text-primary">{b.t}</h4>
              <p className="mt-2 font-body text-[15px] leading-relaxed text-foreground-muted">{b.body}</p>
              <p className="mt-auto pt-4 flex flex-wrap gap-x-4 gap-y-1">
                {b.links.map(([to, label]) => <Link key={to} to={to} className={link}>{label}</Link>)}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* How to invest */}
      <div className="mt-12 rounded-2xl bg-surface border border-border p-6 sm:p-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h3 className={sub}>How to invest in GIFT City funds</h3>
          <Link to="/how-to-invest" className="inline-flex items-center gap-1 font-body text-sm font-semibold text-secondary hover:underline">
            Step-by-step guide <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <ol className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none p-0">
          {STEPS.map((s, i) => (
            <li key={s} className="flex items-start gap-3 rounded-xl bg-white border border-border p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary font-body text-sm font-bold text-white" aria-hidden>{i + 1}</span>
              <span className="font-body text-[15px] font-medium text-primary leading-snug pt-1">{s}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default HomeGuide;
