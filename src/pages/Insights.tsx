import { useState } from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const insightsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "PFIC Explained: Why It Matters for Every US-Based NRI Investor",
      "description": "A plain-English explanation of PFIC status, why it applies to many foreign funds, and why GIFT City fund structure matters for US-based NRIs and US persons.",
      "author": { "@type": "Person", "name": "Anup Vatyani" },
      "publisher": { "@type": "Organization", "name": "GIFT City Funds" },
      "mainEntityOfPage": "https://giftcityfunds.in/insights#pfic-explained",
      "datePublished": "2026-09-20",
    },
    {
      "@type": "Article",
      "headline": "How NRIs Can Invest in GIFT City Funds: A Step-by-Step Overview",
      "description": "A step-by-step walkthrough of how NRIs and OCIs actually invest in GIFT City IFSC funds, from eligibility and KYC to remittance and unit allotment.",
      "author": { "@type": "Person", "name": "Anup Vatyani" },
      "publisher": { "@type": "Organization", "name": "GIFT City Funds" },
      "mainEntityOfPage": "https://giftcityfunds.in/insights#nri-step-by-step",
      "datePublished": "2026-09-21",
    },
    {
      "@type": "Article",
      "headline": "LRS, TCS and GIFT City: What Resident Indian Investors Should Know",
      "description": "How the Liberalised Remittance Scheme (LRS) and Tax Collected at Source (TCS) apply when a Resident Indian invests in a GIFT City fund via the Overseas Portfolio Investment route.",
      "author": { "@type": "Person", "name": "Anup Vatyani" },
      "publisher": { "@type": "Organization", "name": "GIFT City Funds" },
      "mainEntityOfPage": "https://giftcityfunds.in/insights#lrs-tcs-gift-city",
      "datePublished": "2026-09-21",
    },
    {
      "@type": "Article",
      "headline": "AIF vs PMS vs Mutual Fund FoF: Choosing a GIFT City Structure",
      "description": "A side-by-side comparison of the three main GIFT City fund structures — AIF, PMS and Mutual Fund FoF — to help you choose the right one for your ticket size and goals.",
      "author": { "@type": "Person", "name": "Anup Vatyani" },
      "publisher": { "@type": "Organization", "name": "GIFT City Funds" },
      "mainEntityOfPage": "https://giftcityfunds.in/insights#aif-vs-pms-vs-fof",
      "datePublished": "2026-09-21",
    },
    {
      "@type": "Article",
      "headline": "IFSCA vs SEBI: Who Actually Regulates Your GIFT City Fund",
      "description": "A clear explanation of how IFSCA regulates GIFT City IFSC funds, how that differs from SEBI's role for domestic Indian mutual funds, and what it means for investor protection.",
      "author": { "@type": "Person", "name": "Anup Vatyani" },
      "publisher": { "@type": "Organization", "name": "GIFT City Funds" },
      "mainEntityOfPage": "https://giftcityfunds.in/insights#ifsca-vs-sebi",
      "datePublished": "2026-09-21",
    },
    {
      "@type": "Article",
      "headline": "GIFT City Fund vs NRE/NRO Investing: A Straight Comparison",
      "description": "How investing through a GIFT City fund compares with the traditional NRE and NRO account route for NRIs — currency, repatriation, tax and structure differences explained.",
      "author": { "@type": "Person", "name": "Anup Vatyani" },
      "publisher": { "@type": "Organization", "name": "GIFT City Funds" },
      "mainEntityOfPage": "https://giftcityfunds.in/insights#gift-city-vs-nre-nro",
      "datePublished": "2026-09-21",
    },
    {
      "@type": "Article",
      "headline": "GIFT City vs Direct Foreign Investment: What Actually Changes for an NRI",
      "description": "What changes when an NRI invests through a GIFT City IFSC fund instead of investing directly in a foreign brokerage account or offshore fund.",
      "author": { "@type": "Person", "name": "Anup Vatyani" },
      "publisher": { "@type": "Organization", "name": "GIFT City Funds" },
      "mainEntityOfPage": "https://giftcityfunds.in/insights#gift-city-vs-direct-foreign",
      "datePublished": "2026-09-21",
    },
    {
      "@type": "Article",
      "headline": "Ten Questions NRIs Actually Ask About GIFT City Funds",
      "description": "Ten plain-English answers to the questions NRIs most commonly ask before investing in a GIFT City IFSC fund.",
      "author": { "@type": "Person", "name": "Anup Vatyani" },
      "publisher": { "@type": "Organization", "name": "GIFT City Funds" },
      "mainEntityOfPage": "https://giftcityfunds.in/insights#ten-questions-nris-ask",
      "datePublished": "2026-09-21",
    },
  ],
};

const Insights = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("subscribe-newsletter", {
        body: { email: trimmed, source: "insights_page" },
      });
      if (error) throw error;
      toast.success("Subscribed!", { description: "You'll get new GIFT City articles in your inbox." });
      setEmail("");
    } catch (err) {
      console.error(err);
      toast.error("Subscription failed", { description: "Please try again in a moment." });
    } finally {
      setLoading(false);
    }
  }

  return (
  <>
    <SEO
      title="Insights — GIFT City & IFSC Fund Articles for NRIs (2026)"
      description="In-depth articles on GIFT City funds, IFSCA regulation, NRI investing, LRS/TCS rules, PFIC status and how GIFT City compares to NRE/NRO and direct foreign investing."
      canonical="https://giftcityfunds.in/insights"
      schema={insightsSchema}
      breadcrumbs={[
        { name: "Home", url: "https://giftcityfunds.in/" },
        { name: "Insights", url: "https://giftcityfunds.in/insights" },
      ]}
    />
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Insights", url: "/insights" }]} />
      <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary mt-6 mb-4">Insights on GIFT City & IFSC Investing</h1>
      <p className="font-body text-lg text-foreground-muted mb-8">Plain-English writing on the mechanics, regulation and tax treatment of GIFT City funds — for NRIs, OCIs and Resident Indians, updated as rules evolve.</p>

      <div className="bg-surface border border-border p-6 rounded-lg mb-12">
        <h2 className="font-heading font-semibold text-primary mb-2">Get new GIFT City articles by email</h2>
        <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubscribe}>
          <Input
            type="email"
            placeholder="you@example.com"
            aria-label="Email address"
            className="flex-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" variant="gold" disabled={loading}>
            {loading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>

      {/* Quick jump links */}
      <div className="bg-background border border-border rounded-lg p-5 mb-12">
        <h2 className="font-heading font-semibold text-primary mb-3 text-sm uppercase tracking-wider">Jump to an article</h2>
        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 font-body text-sm">
          <li><a href="#nri-step-by-step" className="text-secondary hover:underline">How NRIs Can Invest: Step-by-Step</a></li>
          <li><a href="#lrs-tcs-gift-city" className="text-secondary hover:underline">LRS, TCS and GIFT City</a></li>
          <li><a href="#aif-vs-pms-vs-fof" className="text-secondary hover:underline">AIF vs PMS vs Mutual Fund FoF</a></li>
          <li><a href="#ifsca-vs-sebi" className="text-secondary hover:underline">IFSCA vs SEBI</a></li>
          <li><a href="#gift-city-vs-nre-nro" className="text-secondary hover:underline">GIFT City Fund vs NRE/NRO</a></li>
          <li><a href="#gift-city-vs-direct-foreign" className="text-secondary hover:underline">GIFT City vs Direct Foreign Investment</a></li>
          <li><a href="#ten-questions-nris-ask" className="text-secondary hover:underline">Ten Questions NRIs Ask</a></li>
          <li><a href="#pfic-explained" className="text-secondary hover:underline">PFIC Explained (US-based NRIs)</a></li>
        </ul>
      </div>

      <article id="nri-step-by-step" className="mb-14 bg-background border border-border rounded-lg p-6 md:p-8">
        <div className="text-xs uppercase tracking-wider text-secondary mb-2">Published</div>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">
          How NRIs Can Invest in GIFT City Funds: A Step-by-Step Overview
        </h2>
        <div className="font-body text-foreground-muted space-y-4 leading-relaxed">
          <p>
            For most NRIs and OCIs, investing in a GIFT City IFSC fund for the first time raises the same practical question: what actually happens, in what order? The regulatory framework is new enough that there isn't yet a well-worn path the way there is for, say, opening an NRE account. Here is the sequence in practice.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">Step 1: Understand which structure you're choosing</h3>
          <p>
            GIFT City funds aren't one product — they're a family of structures (Mutual Fund FoFs, AIFs, PMS and Retail Feeder Funds) with different ticket sizes and risk profiles. Get this right first; changing structure later usually means starting the onboarding process over. See our <Link to="/funds-explained" className="text-secondary hover:underline">fund categories comparison</Link> for the full breakdown.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">Step 2: Confirm eligibility and residency route</h3>
          <p>
            NRIs and OCIs typically invest directly in USD from an overseas bank account — no LRS involved, since the money never originates in India. This is one of the more attractive parts of the GIFT City structure for NRIs specifically. If you're a US-based NRI or US person, also check PFIC vs Non-PFIC status of the specific fund before proceeding.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">Step 3: Prepare your KYC documentation</h3>
          <p>
            Standard requirements are a valid passport, PAN card (or Form 60 declaration where applicable), proof of overseas address, a recent bank statement, and a tax residency certificate (TRC) from your country of residence. US persons will additionally need to complete a W-9 or W-8BEN as appropriate.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">Step 4: Onboard with the Fund Management Entity (FME)</h3>
          <p>
            Every GIFT City fund is run by an IFSCA-registered Fund Management Entity. You'll complete their subscription documents and KYC verification directly with them — this is not routed through a mutual fund distributor's platform in the way a domestic Indian mutual fund purchase is.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">Step 5: Remit funds and receive your allotment</h3>
          <p>
            Once onboarding is complete, you remit funds in USD directly from your overseas account, and receive a unit allotment confirmation from the FME. From there, you track your holding through the FME's investor portal — much like tracking a brokerage account.
          </p>
          <p>
            For the full walkthrough with all five steps laid out visually, see our <Link to="/how-to-invest" className="text-secondary hover:underline">How to Invest guide</Link>, or <Link to="/contact" className="text-secondary hover:underline">talk to Anup</Link> to get matched with the right FME for your situation.
          </p>
          <p className="text-sm italic pt-2">
            This article is educational only and is not investment advice. Always review scheme documents and consult a qualified advisor before investing.
          </p>
        </div>
      </article>

      <article id="lrs-tcs-gift-city" className="mb-14 bg-background border border-border rounded-lg p-6 md:p-8">
        <div className="text-xs uppercase tracking-wider text-secondary mb-2">Published</div>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">
          LRS, TCS and GIFT City: What Resident Indian Investors Should Know
        </h2>
        <div className="font-body text-foreground-muted space-y-4 leading-relaxed">
          <p>
            Unlike NRIs, Resident Indians investing in a GIFT City fund route their money through the <strong className="text-primary">Liberalised Remittance Scheme (LRS)</strong> under the Overseas Portfolio Investment (OPI) framework — and that brings two things every Resident Indian investor should understand before remitting: the annual LRS limit, and Tax Collected at Source (TCS).
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">The LRS limit</h3>
          <p>
            The RBI's LRS framework caps how much a Resident Indian can remit abroad in a financial year across all purposes combined — investments, travel, education, gifts and more. A GIFT City fund investment counts against this same annual limit, so it's worth checking how much of your LRS headroom you've already used elsewhere in the year before committing an amount.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">How TCS applies</h3>
          <p>
            Remittances under LRS for investment purposes are subject to Tax Collected at Source, deducted by your bank at the time of remittance above the threshold set by current rules. TCS is not an additional cost in the way a fee is — it's a prepayment of tax that you can claim as a credit against your total tax liability when filing your income tax return, or adjust against TDS on your salary if applicable.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">Why this differs from the NRI route</h3>
          <p>
            NRIs remit in USD from funds already held overseas, so LRS and TCS simply don't apply to them — this is one of the clearest structural differences between how Resident Indians and NRIs access the same GIFT City fund. It's a distinction worth understanding fully if your household includes both resident and non-resident family members considering the same fund.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">What to check before remitting</h3>
          <p>
            Confirm your remaining LRS headroom for the financial year, the current TCS rate and threshold applicable to investment remittances (these have changed in past budgets, so don't rely on last year's figures), and how your specific FME handles TCS documentation for your records at tax-filing time.
          </p>
          <p>
            For how this fits alongside the broader outbound investment picture, see our <Link to="/funds-explained" className="text-secondary hover:underline">Funds Explained</Link> page, or the full <Link to="/taxation" className="text-secondary hover:underline">Taxation guide</Link>.
          </p>
          <p className="text-sm italic pt-2">
            This article is educational only and is not tax advice. LRS limits and TCS rates change with policy updates — confirm current figures with your bank and a tax professional before remitting.
          </p>
        </div>
      </article>

      <article id="aif-vs-pms-vs-fof" className="mb-14 bg-background border border-border rounded-lg p-6 md:p-8">
        <div className="text-xs uppercase tracking-wider text-secondary mb-2">Published</div>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">
          AIF vs PMS vs Mutual Fund FoF: Choosing a GIFT City Structure
        </h2>
        <div className="font-body text-foreground-muted space-y-4 leading-relaxed">
          <p>
            Once you've decided to invest through GIFT City, the next decision is which structure. The three most-compared options are the AIF (Alternative Investment Fund), PMS (Portfolio Management Services), and Mutual Fund FoF (Fund of Funds) — and the right choice usually comes down to ticket size, how hands-on you want to be, and how comfortable you are with liquidity constraints.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">Mutual Fund FoF: simplicity at a lower ticket</h3>
          <p>
            A GIFT City Mutual Fund FoF is a feeder structure — your money channels into an underlying scheme, much like a fund-of-funds works domestically. Entry tickets are typically the lowest of the three (from roughly $5,000, though this varies by FME), pooled and professionally managed with no ongoing decision-making required from you. This is generally the most accessible structure for an investor new to GIFT City.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">AIF: for less standardised, higher-conviction strategies</h3>
          <p>
            An AIF is a pooled vehicle built for strategies that don't fit neatly into a mutual fund wrapper — concentrated equity bets, credit strategies, structured products. Entry tickets are meaningfully higher (commonly from around $150,000, with some exceptions), and liquidity terms are usually less flexible, with lock-in periods common. AIFs suit investors who specifically want exposure to the strategy's differentiation, not just diversified market exposure.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">PMS: customisation and discretion</h3>
          <p>
            Portfolio Management Services give you an individually held portfolio managed to a mandate, rather than pooled units in a fund. Minimum tickets typically start around $75,000. PMS suits investors who want more visibility into and influence over their actual holdings, and who are comfortable with a more concentrated, discretionary approach than a pooled fund offers.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">How to actually decide</h3>
          <p>
            Start with your ticket size — it often narrows the choice on its own. Then weigh how much you want a diversified, hands-off structure (FoF) against wanting a specific strategy (AIF) or individual portfolio customisation (PMS). Liquidity terms differ meaningfully across all three, so always confirm redemption terms and lock-ins with the specific FME before committing.
          </p>
          <p>
            See the full comparison table with ticket sizes and investor fit on our <Link to="/funds-explained" className="text-secondary hover:underline">Funds Explained</Link> page, or <Link to="/contact" className="text-secondary hover:underline">talk to Anup</Link> about which structure suits your situation.
          </p>
          <p className="text-sm italic pt-2">
            Ticket sizes and terms are indicative and vary by Fund Management Entity. This article is educational only and is not investment advice.
          </p>
        </div>
      </article>

      <article id="ifsca-vs-sebi" className="mb-14 bg-background border border-border rounded-lg p-6 md:p-8">
        <div className="text-xs uppercase tracking-wider text-secondary mb-2">Published</div>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">
          IFSCA vs SEBI: Who Actually Regulates Your GIFT City Fund
        </h2>
        <div className="font-body text-foreground-muted space-y-4 leading-relaxed">
          <p>
            One of the most common points of confusion for first-time GIFT City investors: is this a SEBI-regulated product, like a domestic Indian mutual fund? The answer is no — and understanding who actually regulates your fund matters for knowing what protections and disclosure standards apply.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">IFSCA: the regulator for GIFT City</h3>
          <p>
            The International Financial Services Centres Authority (IFSCA) is the unified regulator for all financial services within India's International Financial Services Centres, including GIFT City. It regulates banking, insurance, capital markets and fund management activity within the IFSC — including every Fund Management Entity (FME) operating a GIFT City fund. IFSCA was specifically created to give India's offshore financial centre its own regulatory framework, distinct from — though coordinated with — India's domestic regulators.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">SEBI: the regulator for domestic Indian markets</h3>
          <p>
            The Securities and Exchange Board of India (SEBI) regulates India's domestic securities markets — this includes domestic mutual funds, listed equities, and India-based AIFs and PMS operating outside the IFSC. SEBI has no direct regulatory authority over GIFT City fund structures; that jurisdiction sits with IFSCA.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">Why the distinction matters to you as an investor</h3>
          <p>
            IFSCA's regulatory framework for fund management (the IFSCA Fund Management Regulations) sets its own standards for FME registration, disclosure, and investor eligibility — modelled on, but not identical to, SEBI's domestic framework. Practically, this means the specific compliance and disclosure requirements you should expect from a GIFT City FME are IFSCA's, not SEBI's — so when checking a fund's credentials, you should confirm IFSCA registration status, not look for a SEBI mutual fund registration number.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">A quick way to check</h3>
          <p>
            Ask any Fund Management Entity directly for their IFSCA registration details, and cross-check status on IFSCA's own public registers. This is a reasonable, standard question to ask before investing — a properly registered FME will have this information readily available.
          </p>
          <p>
            For more on how GIFT City fits into India's broader investment landscape, see our <Link to="/what-is-gift-city" className="text-secondary hover:underline">What Is GIFT City</Link> page, or <Link to="/contact" className="text-secondary hover:underline">talk to Anup</Link> with any specific fund you're evaluating.
          </p>
          <p className="text-sm italic pt-2">
            This article is educational only and is not regulatory or investment advice. Regulatory frameworks evolve — always verify current requirements directly with IFSCA.
          </p>
        </div>
      </article>

      <article id="gift-city-vs-nre-nro" className="mb-14 bg-background border border-border rounded-lg p-6 md:p-8">
        <div className="text-xs uppercase tracking-wider text-secondary mb-2">Published</div>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">
          GIFT City Fund vs NRE/NRO Investing: A Straight Comparison
        </h2>
        <div className="font-body text-foreground-muted space-y-4 leading-relaxed">
          <p>
            For NRIs who already hold NRE and NRO accounts, a natural question is: how is investing through a GIFT City fund actually different from investing in Indian markets through those accounts? The two aren't competing for the same money in most cases — they serve different purposes.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">What NRE/NRO investing gives you</h3>
          <p>
            NRE and NRO accounts let NRIs invest in Indian rupee-denominated assets — domestic mutual funds, listed Indian equities, fixed deposits. NRE holdings are fully repatriable and the interest is tax-free in India; NRO holdings (from India-sourced income like rent) are only partially repatriable and are taxable. Either way, your exposure is to the Indian market, in rupees.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">What a GIFT City fund gives you instead</h3>
          <p>
            A GIFT City fund is typically USD-denominated and gives access to global market strategies — international equities, global bonds, cross-border allocations — depending on the specific fund. You invest directly from your overseas bank account in USD, with no NRE/NRO account involved at all for this particular investment.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">Currency and repatriation</h3>
          <p>
            This is the biggest practical difference. NRE/NRO investing keeps your money in the rupee system, exposed to INR movements against your home currency. A GIFT City fund keeps your money in USD throughout — no currency conversion drag going in or (for many structures) coming out, since both the investment and eventual redemption can happen in USD.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">So which should you use?</h3>
          <p>
            Most NRIs use both for different goals — NRE/NRO accounts for maintaining an India-based rupee foothold (property, family support, India-market exposure), and GIFT City funds for globally diversified investing without routing money through the rupee system. They're complementary tools rather than substitutes for most portfolios.
          </p>
          <p>
            Read more about who GIFT City funds are actually built for on our <Link to="/who-its-for" className="text-secondary hover:underline">Who It's For</Link> page, or <Link to="/contact" className="text-secondary hover:underline">talk to Anup</Link> about how a GIFT City allocation might fit alongside your existing NRE/NRO holdings.
          </p>
          <p className="text-sm italic pt-2">
            This article is educational only and is not investment or tax advice. Tax treatment of NRE/NRO accounts and GIFT City funds depends on your specific residency and country of tax residence — consult a qualified advisor.
          </p>
        </div>
      </article>

      <article id="gift-city-vs-direct-foreign" className="mb-14 bg-background border border-border rounded-lg p-6 md:p-8">
        <div className="text-xs uppercase tracking-wider text-secondary mb-2">Published</div>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">
          GIFT City vs Direct Foreign Investment: What Actually Changes for an NRI
        </h2>
        <div className="font-body text-foreground-muted space-y-4 leading-relaxed">
          <p>
            Many NRIs already hold a foreign brokerage account and could, in principle, buy the same underlying global exposure directly rather than through a GIFT City fund. So what does routing the investment through GIFT City actually change? Mostly: structure, access and, for some investors, tax treatment.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">Access to India-linked and specialised strategies</h3>
          <p>
            Some GIFT City funds offer strategies not easily replicable through a standard foreign brokerage account — India-linked global strategies, structured products, or AIF-style approaches that aren't available as retail products on typical international platforms. For these, GIFT City is less a substitute for direct investing and more an access point to something otherwise unavailable to you as an individual investor.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">Professional management vs self-directed</h3>
          <p>
            Direct foreign investment through your own brokerage account means you're making the individual security decisions. A GIFT City fund (whether FoF, AIF or PMS) means a Fund Management Entity is making those calls within a defined mandate. This is a genuine trade-off, not a strict upgrade either way — it depends on whether you want to manage the portfolio yourself or delegate that to a professional structure.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">Tax and reporting differences</h3>
          <p>
            Tax treatment differs by your country of tax residence and by the specific structure. For US-based NRIs specifically, this is where PFIC status becomes highly relevant — a foreign pooled fund (including some GIFT City structures) can trigger PFIC reporting obligations that a direct holding of individual foreign stocks would not. This makes the fund-versus-direct decision materially different depending on your tax residency.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">Onboarding and account complexity</h3>
          <p>
            A GIFT City fund investment is a single subscription relationship with one FME. Direct foreign investing means managing your own brokerage relationship, currency conversion, and individual security research and monitoring — more control, but more ongoing effort.
          </p>
          <p>
            If you're a US-based NRI weighing this decision, our <Link to="/us-based-nris" className="text-secondary hover:underline">US-Based NRI guide</Link> and the article on <a href="#pfic-explained" className="text-secondary hover:underline">PFIC status</a> below are worth reading first, or <Link to="/contact" className="text-secondary hover:underline">talk to Anup</Link> directly about your specific situation.
          </p>
          <p className="text-sm italic pt-2">
            This article is educational only and is not investment or tax advice. Consult a qualified tax professional familiar with your country of residence before deciding between structures.
          </p>
        </div>
      </article>

      <article id="ten-questions-nris-ask" className="mb-14 bg-background border border-border rounded-lg p-6 md:p-8">
        <div className="text-xs uppercase tracking-wider text-secondary mb-2">Published</div>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">
          Ten Questions NRIs Actually Ask About GIFT City Funds
        </h2>
        <div className="font-body text-foreground-muted space-y-4 leading-relaxed">
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong className="text-primary">Is GIFT City safe to invest in?</strong> GIFT City funds are regulated by IFSCA, India's dedicated regulator for its International Financial Services Centres. As with any investment, safety depends on the specific fund, its FME, and the underlying strategy — not on GIFT City as a location alone.
            </li>
            <li>
              <strong className="text-primary">Do I need an NRE or NRO account to invest?</strong> No. NRIs typically invest directly in USD from an existing overseas bank account — see our comparison of <a href="#gift-city-vs-nre-nro" className="text-secondary hover:underline">GIFT City funds vs NRE/NRO investing</a>.
            </li>
            <li>
              <strong className="text-primary">What's the minimum investment?</strong> It varies significantly by structure — Mutual Fund FoFs and Retail Feeder Funds can start from roughly $5,000, while AIFs and PMS typically require $75,000–$150,000+. See the full <Link to="/funds-explained" className="text-secondary hover:underline">structure comparison</Link>.
            </li>
            <li>
              <strong className="text-primary">Is my money repatriable?</strong> Generally yes, since these are USD-denominated structures — but always confirm the specific redemption and repatriation terms with your FME before investing.
            </li>
            <li>
              <strong className="text-primary">Who regulates GIFT City funds?</strong> IFSCA, not SEBI. See our full explainer on <a href="#ifsca-vs-sebi" className="text-secondary hover:underline">IFSCA vs SEBI</a>.
            </li>
            <li>
              <strong className="text-primary">Am I taxed in India on GIFT City fund gains?</strong> Tax treatment depends on your residency status, the specific fund structure, and applicable double-taxation treaties. See our <Link to="/taxation" className="text-secondary hover:underline">Taxation page</Link> for a full breakdown.
            </li>
            <li>
              <strong className="text-primary">I'm a US citizen — does PFIC apply to me?</strong> Possibly — many foreign pooled funds default to PFIC treatment under US tax law. Read our dedicated <a href="#pfic-explained" className="text-secondary hover:underline">PFIC explainer</a> before investing.
            </li>
            <li>
              <strong className="text-primary">What documents do I need?</strong> Typically a passport, PAN or Form 60, proof of overseas address, a recent bank statement, and a tax residency certificate. US persons also need a W-9 or W-8BEN. Full detail in our <Link to="/how-to-invest" className="text-secondary hover:underline">How to Invest guide</Link>.
            </li>
            <li>
              <strong className="text-primary">Can Resident Indians invest too, not just NRIs?</strong> Yes, via the Liberalised Remittance Scheme (LRS) under the Overseas Portfolio Investment route — see our explainer on <a href="#lrs-tcs-gift-city" className="text-secondary hover:underline">LRS, TCS and GIFT City</a>.
            </li>
            <li>
              <strong className="text-primary">How do I actually get started?</strong> Understand the structures, confirm your eligibility and route, gather your documents, and connect with an IFSCA-registered Fund Management Entity. <Link to="/contact" className="text-secondary hover:underline">Talk to Anup</Link> for a plain-English walkthrough of your specific situation.
            </li>
          </ol>
          <p className="text-sm italic pt-2">
            This article is educational only and is not investment, tax or legal advice. Individual circumstances vary — always consult qualified professionals before investing.
          </p>
        </div>
      </article>

      <article id="pfic-explained" className="mb-14 bg-background border border-border rounded-lg p-6 md:p-8">
        <div className="text-xs uppercase tracking-wider text-secondary mb-2">Published</div>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">
          PFIC Explained: Why It Matters for Every US-Based NRI Investor
        </h2>
        <div className="font-body text-foreground-muted space-y-4 leading-relaxed">
          <p>
            If you're a US citizen, green card holder, or otherwise a "US person" for tax purposes, one acronym should be on your radar before you invest in any foreign fund structure — including GIFT City funds: <strong className="text-primary">PFIC</strong>, short for Passive Foreign Investment Company.
          </p>
          <p>
            The US tax code treats most foreign pooled investment vehicles — mutual funds, ETFs, and many fund-of-fund structures organised outside the US — as PFICs by default. This isn't specific to GIFT City; it applies broadly to foreign funds. But because GIFT City funds are explicitly structured for international investors, including US-based NRIs, it's a question that comes up constantly.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">Why PFIC status matters</h3>
          <p>
            A fund with PFIC status triggers extra US tax compliance for the investor — typically annual Form 8621 filings for each PFIC holding, and tax treatment that can be considerably less favourable than a comparable US-domiciled fund, particularly under the default "excess distribution" regime. Two elections — Qualified Electing Fund (QEF) and Mark-to-Market — can sometimes improve this outcome, but both come with their own eligibility conditions, paperwork and timing requirements.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">Non-PFIC structures</h3>
          <p>
            Some GIFT City fund structures are specifically designed or documented to avoid PFIC classification, or to provide the annual information needed for a QEF election. This is exactly why "PFIC vs Non-PFIC status" should be one of the first questions a US-based NRI asks about any specific GIFT City fund — the answer materially changes what your ongoing US tax filing and liability actually looks like.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">What to actually do about it</h3>
          <p>
            This is genuinely one of the more technical corners of cross-border investing, and the right answer depends on your specific tax residency, the specific fund's structure, and your broader portfolio. Two practical steps: first, always ask the Fund Management Entity directly whether the fund is PFIC or Non-PFIC, and whether QEF information is provided annually. Second, involve a US tax professional experienced with PFIC reporting before you invest — not after.
          </p>
          <p>
            For more on how residency status shapes what you can invest in, see our{" "}
            <Link to="/us-based-nris" className="text-secondary hover:underline">
              guide for US-based NRIs
            </Link>
            , or{" "}
            <Link to="/contact" className="text-secondary hover:underline">
              talk to Anup
            </Link>{" "}
            about which GIFT City structures are typically documented as Non-PFIC or QEF-compliant.
          </p>
          <p className="text-sm italic pt-2">
            This article is educational only and is not tax or investment advice. PFIC rules are complex and fact-specific — always consult a qualified US tax professional about your own situation.
          </p>
        </div>
      </article>
    </div>
  </>
  );
};

export default Insights;
