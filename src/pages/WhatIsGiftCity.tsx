import { Link } from "react-router-dom";
import MoneyMap from "@/components/MoneyMap";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OfficialSources } from "@/components/OfficialSources";
import { ArrowRight } from "lucide-react";
import { PageFaqs, type PageFaq } from "@/components/PageFaqs";
const PAGE_FAQS: PageFaq[] = [
  { q: "What is the full form of GIFT City?", a: "GIFT City stands for Gujarat International Finance Tec-City. Part of it is notified as GIFT IFSC, India's International Financial Services Centre." },
  { q: "Where is GIFT City in Gandhinagar?", a: "GIFT City is in Gandhinagar district, Gujarat, between Ahmedabad and Gandhinagar on the Sabarmati river. You do not need to visit it to invest; onboarding with fund houses is usually done remotely." },
];


const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What Is GIFT City & IFSC? — Explained Simply",
  "dateModified": "2026-10-08",
  "author": { "@type": "Person", "name": "Anup Vatyani" },
  "publisher": { "@type": "Organization", "name": "GIFT City Funds" },
  "mainEntityOfPage": "https://giftcityfunds.in/what-is-gift-city",
};

const WhatIsGiftCity = () => (
  <>
    <SEO
      title="What Is GIFT City & IFSC? — Explained Simply"
      description="A plain-English explanation of GIFT City, India's first International Financial Services Centre, and why it matters for fund investing."
      canonical="https://giftcityfunds.in/what-is-gift-city"
      schema={articleSchema}
      breadcrumbs={[
        { name: "Home", url: "https://giftcityfunds.in/" },
        { name: "What is GIFT City", url: "https://giftcityfunds.in/what-is-gift-city" },
      ]}
    />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "What is GIFT City", url: "/what-is-gift-city" }]} />
      <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary mt-6 mb-8">What Is GIFT City, and What Is an IFSC?</h1>

      <div className="prose max-w-none font-body text-foreground-muted space-y-6">
        <p><strong className="text-primary">The short version.</strong> GIFT City — Gujarat International Finance Tec-City — is a purpose-built financial district in Gandhinagar, Gujarat. Within it sits India's International Financial Services Centre (IFSC): a separately regulated zone where financial institutions can transact in foreign currency, under rules distinct from the rest of India's domestic financial system. It's the reason a "GIFT City fund" behaves differently from a regular Indian mutual fund from the moment you invest.</p>

        <p><strong className="text-primary">Why a separate zone exists.</strong> Most Indian financial products operate in rupees, under SEBI, RBI and other domestic regulators built for a rupee-denominated system. The IFSC exists so India could host US-Dollar-denominated financial activity — banking, fund management, insurance, capital markets — on Indian soil, under a single regulator designed specifically for that purpose: the IFSCA.</p>

        <p><strong className="text-primary">Who regulates it: the IFSCA.</strong> The International Financial Services Centres Authority (IFSCA) is the unified regulator for all financial services within GIFT City's IFSC — replacing the need to deal separately with SEBI, RBI, IRDAI and PFRDA for IFSC-based activity. For fund investors specifically, IFSCA is the body that licenses and oversees the Fund Management Entities (FMEs) that actually run GIFT City funds.</p>

        <p><strong className="text-primary">Where funds fit into this.</strong> A "GIFT City fund" is a fund registered with and regulated by the IFSCA, managed by a Fund Management Entity based in the IFSC, and denominated in a foreign currency — almost always US Dollars. It can be structured to bring money into India (an inbound fund) or to take Indian or global money out into international markets (an outbound fund).</p>

        <p>
          <Link to="/funds-explained" className="text-secondary hover:underline inline-flex items-center">See how these fund structures actually work <ArrowRight className="ml-1 h-4 w-4" /></Link>
        </p>

        <h2 className="font-heading font-semibold text-2xl text-primary pt-4">A short timeline</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-primary">December 2015:</strong> India's first International Financial Services Centre is set up in GIFT City.</li>
          <li><strong className="text-primary">2019:</strong> Parliament passes the International Financial Services Centres Authority Act, 2019.</li>
          <li><strong className="text-primary">27 April 2020:</strong> IFSCA is established under that Act as the single regulator for financial services in India's IFSCs.</li>
          <li><strong className="text-primary">Since then:</strong> IFSCA has issued its own regulations for fund management, capital markets, banking and insurance, including the IFSCA (Fund Management) Regulations, 2025 that govern GIFT City funds today.</li>
        </ul>

        <h2 className="font-heading font-semibold text-2xl text-primary pt-4">GIFT City is not all IFSC</h2>
        <p>
          GIFT City has two parts. The <strong className="text-primary">IFSC</strong> is the international zone, where business is done in foreign currency under IFSCA. The <strong className="text-primary">Domestic Tariff Area</strong> is the rest of the city, where ordinary Indian rules apply. A "GIFT City fund" in the sense used on this site is one registered in the IFSC, not simply a business with a GIFT City address.
        </p>

        <h2 className="font-heading font-semibold text-2xl text-primary pt-4">What happens inside GIFT IFSC</h2>
        <MoneyMap className="my-6" />
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-primary">Banking:</strong> IFSC Banking Units of Indian and foreign banks offer foreign-currency accounts and deposits.</li>
          <li><strong className="text-primary">Capital markets:</strong> international exchanges list and trade securities in foreign currency.</li>
          <li><strong className="text-primary">Fund management:</strong> Fund Management Entities run retail schemes, AIFs and PMS portfolios — the "GIFT City funds" this site explains.</li>
          <li><strong className="text-primary">Insurance, aircraft leasing and fintech:</strong> other activities IFSCA regulates, less relevant to individual investors.</li>
        </ul>

        <h2 className="font-heading font-semibold text-2xl text-primary pt-4">Common questions</h2>
        <div className="space-y-4">
          <div className="bg-surface p-5 rounded-lg border border-border">
            <h3 className="font-heading font-semibold text-primary mb-2">Is GIFT City a tax haven?</h3>
            <p className="text-sm">No. It is an Indian financial centre with its own regulator and certain tax concessions for IFSC units. Investors are still taxed according to India's rules and those of their country of residence. See <Link to="/taxation" className="text-secondary hover:underline">Regulation and Taxation</Link>.</p>
          </div>
          <div className="bg-surface p-5 rounded-lg border border-border">
            <h3 className="font-heading font-semibold text-primary mb-2">Do I have to visit GIFT City to invest?</h3>
            <p className="text-sm">Generally no. Onboarding with a Fund Management Entity is usually done with documents and video or digital KYC. See <Link to="/how-to-invest" className="text-secondary hover:underline">How to Invest</Link>.</p>
          </div>
          <div className="bg-surface p-5 rounded-lg border border-border">
            <h3 className="font-heading font-semibold text-primary mb-2">How do I check that a fund manager is registered?</h3>
            <p className="text-sm">Search the IFSCA Directory of regulated entities, linked below, and match it with the registration details in the fund's offer document.</p>
          </div>
        </div>

        <div className="bg-surface border border-border rounded-lg p-6 my-6">
          <h2 className="font-heading font-semibold text-primary mb-3">Why this matters for you:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Transactions happen in USD, not INR</li>
            <li>A different regulator (IFSCA) with a different rulebook</li>
            <li>Designed specifically to bridge India and global capital markets</li>
            <li>Available to NRIs, OCIs, foreign nationals, and — via the LRS — resident Indians</li>
          </ul>
        </div>

        <p>
          Next: see how GIFT City funds are actually structured →{" "}
          <Link to="/funds-explained" className="text-secondary hover:underline">/funds-explained</Link>
        </p>
      </div>
      <PageFaqs items={PAGE_FAQS} className="my-12" />

      <OfficialSources items={["ifsca", "giftCity", "ifscaDirectory"]} />
    </div>
  </>
);

export default WhatIsGiftCity;