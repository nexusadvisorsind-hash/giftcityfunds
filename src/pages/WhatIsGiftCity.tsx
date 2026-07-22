import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArrowRight } from "lucide-react";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What Is GIFT City & IFSC? — Explained Simply",
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
    </div>
  </>
);

export default WhatIsGiftCity;