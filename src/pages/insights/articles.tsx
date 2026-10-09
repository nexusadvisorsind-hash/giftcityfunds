// Insights articles. Each entry becomes its own page at /insights/<slug>.
// To publish a new article: add an entry here and its URL to public/sitemap.xml.
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import TcsCalculator from "@/components/TcsCalculator";
import type { PageFaq } from "@/components/PageFaqs";
import { BarChart, FlowSteps } from "@/components/Diagrams";

export interface InsightArticle {
  slug: string;
  title: string;
  /** Shorter title for search results when the headline runs past ~60 characters. */
  seoTitle?: string;
  description: string;
  /** ISO date, e.g. "2026-09-21" */
  datePublished: string;
  /** ISO date of the last substantive update. */
  dateModified?: string;
  /** Questions phrased the way people search; shown with FAQPage data. */
  faqs?: PageFaq[];
  body: ReactNode;
}

export const articles: InsightArticle[] = [
  {
    slug: "how-to-open-gift-city-bank-account",
    faqs: [{ q: "Can I open a GIFT City USD account?", a: "Yes. IFSC Banking Units in GIFT City offer US Dollar accounts and deposits to eligible NRIs, foreign citizens and, within LRS, resident Indians. Each bank sets its own minimum balance and documents." }],
    title: "How to Open a GIFT City Bank Account (IFSC Banking Unit)",
    seoTitle: "How to Open a GIFT City Bank Account: NRIs and Residents",
    description: "Who can open a foreign-currency account with a GIFT City IFSC Banking Unit, the documents banks ask for, how to fund it, and what to check before you choose a bank.",
    datePublished: "2026-10-08",
    body: (
        <div className="font-body text-foreground-muted space-y-4 leading-relaxed">
          <p>
            <strong className="text-primary">The short answer.</strong> A GIFT City bank account is a foreign-currency account with an <strong className="text-primary">IFSC Banking Unit (IBU)</strong> — the GIFT City branch of an Indian or foreign bank. NRIs and OCIs can open one to hold US Dollars and other currencies in India. Resident Indians can open one too, funded under the Liberalised Remittance Scheme. Most banks handle the process online or through their NRI desk.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">Who can open one</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-primary">NRIs and OCIs:</strong> can open foreign-currency accounts and deposits with an IBU, funded from an overseas bank account.</li>
            <li><strong className="text-primary">Resident Indians:</strong> can open a Foreign Currency Account in an IFSC under the LRS. Since RBI's revision of July 2024, it can be used for all purposes permitted under LRS, not only for investing in GIFT City. An earlier rule requiring money left idle for 15 days to be sent back to India was withdrawn in 2023.</li>
          </ul>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">The steps</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong className="text-primary">Choose a bank with an IBU.</strong> Several Indian and foreign banks operate in GIFT City. You can check a bank's IFSC registration in the <a href="https://ifsca.gov.in/DirectoryList" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">IFSCA Directory</a>.</li>
            <li><strong className="text-primary">Prepare KYC documents.</strong> Banks typically ask for a passport, PAN or Form 60, proof of address, a photograph and a FATCA/CRS self-declaration. NRIs may also be asked for proof of overseas address and a Tax Residency Certificate. Requirements differ by bank.</li>
            <li><strong className="text-primary">Complete the application.</strong> Many banks allow an existing customer to open the account in their app, or a new customer to apply with video KYC. Some still need signed forms.</li>
            <li><strong className="text-primary">Fund the account.</strong> NRIs send a wire transfer from their overseas account. Residents remit through their Indian bank under LRS, which counts towards the USD 250,000 annual limit and may attract TCS.</li>
            <li><strong className="text-primary">Use it.</strong> Hold foreign currency, book fixed deposits, invest in GIFT City funds, or — for residents — make other LRS payments abroad.</li>
          </ol>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">What to compare between banks</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Which currencies are offered. US Dollars are standard; some banks also offer Euro, Pound and others.</li>
            <li>Minimum balance, account charges and transfer fees.</li>
            <li>Whether the account can be opened fully online from your country.</li>
            <li>Deposit tenures and rates, if you plan to book fixed deposits. See <Link to="/insights/gift-city-fd-vs-nre-fcnr" className="text-secondary hover:underline">GIFT City FDs vs NRE and FCNR deposits</Link>.</li>
            <li>What statements the bank issues for tax filing in your country.</li>
          </ul>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">Tax on interest</h3>
          <p>
            Interest on foreign-currency deposits with an IBU is exempt from Indian tax for non-residents and RNORs under section 10(15)(viii) of the Income-tax Act. Resident Indians are taxed on it in the normal way. Your country of residence may tax the interest even when India does not.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">A bank account is not a fund investment</h3>
          <p>
            An IBU account holds cash and deposits. Investing in a GIFT City fund is a separate step with a Fund Management Entity, although many people use the IBU account to send and receive the money. See <Link to="/how-to-invest" className="text-secondary hover:underline">How to Invest in GIFT City Funds</Link>.
          </p>
          <p className="text-sm">
            Sources: <a href="https://rbidocs.rbi.org.in/rdocs/notification/PDFs/NT9952781DE54AA141D3B89703E895DDA10C.PDF" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">RBI circular on LRS remittances to IFSCs (16 Feb 2021)</a>; <a href="https://privateclient.cyrilamarchandblogs.com/2024/07/rbis-revised-lrs-circular-for-ifsc-gift-city-a-welcome-reform/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Cyril Amarchand Mangaldas on RBI's July 2024 revision</a>; <a href="https://www.rbi.org.in/Scripts/FAQView.aspx?Id=115" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">RBI LRS FAQs</a>.
          </p>
          <p className="text-sm italic pt-2">
            This article is educational only and is not banking, investment or tax advice. Bank products and rules change; confirm current terms with the bank.
          </p>
        </div>
    ),
  },
  {
    slug: "gift-city-fd-vs-nre-fcnr",
    faqs: [{ q: "What are GIFT City FD interest rates?", a: "GIFT City fixed deposits are offered by IFSC Banking Units in US Dollars and other currencies. Rates are set by each bank, depend on tenure and amount, and change often, so compare the banks' current rate cards rather than relying on a single figure." }],
    title: "GIFT City Fixed Deposits vs NRE and FCNR Deposits",
    seoTitle: "GIFT City FD vs NRE vs FCNR Deposits for NRIs",
    description: "GIFT City foreign-currency fixed deposits compared with NRE and FCNR deposits: currency, tenure, Indian tax on interest, what changes when you return to India.",
    datePublished: "2026-10-08",
    body: (
        <div className="font-body text-foreground-muted space-y-4 leading-relaxed">
          <p>
            <strong className="text-primary">The short answer.</strong> All three let an NRI earn interest in India that is free of Indian tax and freely repatriable. The difference is currency and flexibility: an NRE deposit is in rupees, an FCNR deposit is in a foreign currency for one to five years, and a GIFT City deposit is in a foreign currency with an IFSC Banking Unit, sometimes for shorter terms.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">Side by side</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-surface">
                  <th scope="col" className="text-left p-3 border border-border">Feature</th>
                  <th scope="col" className="text-left p-3 border border-border">GIFT City FD (IBU)</th>
                  <th scope="col" className="text-left p-3 border border-border">FCNR (B) deposit</th>
                  <th scope="col" className="text-left p-3 border border-border">NRE deposit</th>
                </tr>
              </thead>
              <tbody>
                <tr><th scope="row" className="text-left p-3 border border-border text-primary font-medium">Currency</th><td className="p-3 border border-border">Foreign currency, usually USD; some banks offer EUR and others</td><td className="p-3 border border-border">Foreign currency, a wider choice at many banks</td><td className="p-3 border border-border">Indian rupees</td></tr>
                <tr><th scope="row" className="text-left p-3 border border-border text-primary font-medium">Regulated under</th><td className="p-3 border border-border">IFSCA</td><td className="p-3 border border-border">RBI (FEMA)</td><td className="p-3 border border-border">RBI (FEMA)</td></tr>
                <tr><th scope="row" className="text-left p-3 border border-border text-primary font-medium">Tenure</th><td className="p-3 border border-border">Set by each bank; some start from 7 days, up to 5 years</td><td className="p-3 border border-border">1 to 5 years</td><td className="p-3 border border-border">From 1 year</td></tr>
                <tr><th scope="row" className="text-left p-3 border border-border text-primary font-medium">Indian tax on interest (NRI)</th><td className="p-3 border border-border">Exempt — section 10(15)(viii)</td><td className="p-3 border border-border">Exempt — section 10(15)(iv)(fa)</td><td className="p-3 border border-border">Exempt — section 10(4)(ii)</td></tr>
                <tr><th scope="row" className="text-left p-3 border border-border text-primary font-medium">Currency risk for a dollar earner</th><td className="p-3 border border-border">None in USD terms</td><td className="p-3 border border-border">None in deposit-currency terms</td><td className="p-3 border border-border">Yes — rupee movements</td></tr>
                <tr><th scope="row" className="text-left p-3 border border-border text-primary font-medium">Repatriation</th><td className="p-3 border border-border">Free</td><td className="p-3 border border-border">Free</td><td className="p-3 border border-border">Free</td></tr>
                <tr><th scope="row" className="text-left p-3 border border-border text-primary font-medium">After you return to India</th><td className="p-3 border border-border">Interest stays exempt while you are RNOR</td><td className="p-3 border border-border">Can run to maturity; interest stays exempt while you are RNOR</td><td className="p-3 border border-border">Must be redesignated; interest becomes taxable</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm">Interest rates change often and differ by bank, so compare current rates directly; this table does not.</p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">How people typically choose</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-primary">Earning and spending in dollars:</strong> a GIFT City FD or an FCNR deposit avoids converting to rupees and back.</li>
            <li><strong className="text-primary">Need a short term, under a year:</strong> some GIFT City FDs allow this; FCNR deposits do not.</li>
            <li><strong className="text-primary">Planning to spend the money in India:</strong> an NRE deposit is already in rupees, with the rupee's exchange-rate risk.</li>
            <li><strong className="text-primary">Want market-linked returns instead of interest:</strong> that is a fund, not a deposit. See <Link to="/insights/gift-city-vs-nre-nro" className="text-secondary hover:underline">GIFT City funds vs NRE/NRO investing</Link>.</li>
          </ul>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">Your home country's tax</h3>
          <p>
            Indian exemptions do not stop your country of residence from taxing the interest. US, UK and Canadian residents generally report worldwide interest; the UAE does not tax individuals' income. See <Link to="/gift-city-funds-nri-tax-by-country" className="text-secondary hover:underline">GIFT City funds for NRIs by country</Link>.
          </p>
          <p className="text-sm">
            How to open the account first: <Link to="/insights/how-to-open-gift-city-bank-account" className="text-secondary hover:underline">How to open a GIFT City bank account</Link>. Example product terms: <a href="https://www.idfcfirst.bank.in/gift-city/non-resident-banking/fixed-deposit-account" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">one bank's GIFT City fixed deposit page</a>.
          </p>
          <p className="text-sm italic pt-2">
            This article is educational only and is not banking, investment or tax advice. Tax sections are summarised; confirm your position with a CA before relying on them.
          </p>
        </div>
    ),
  },
  {
    slug: "returning-to-india-gift-city-investments",
    faqs: [{ q: "Returning NRI: what happens to GIFT City investments when you move back to India?", a: "Investments made while you were an NRI can generally continue to be held after you return, under FEMA's rules for returning residents. New money you send abroad after becoming resident goes through LRS. Your tax treatment changes with your residential status." }, { q: "How does RNOR status affect GIFT City investments?", a: "In the years you are 'resident but not ordinarily resident' (RNOR), income that arises and is received outside India is generally not taxed in India. That can make the first years after return a useful window for planning; confirm the dates with a chartered accountant." }],
    title: "Returning to India? What Happens to Your GIFT City Investments",
    seoTitle: "Returning to India: What Happens to GIFT City Investments",
    description: "What changes for your GIFT City funds, deposits and accounts when you move back to India: RNOR status, FEMA rules on holdings, LRS for new money, a checklist.",
    datePublished: "2026-10-08",
    body: (
        <div className="font-body text-foreground-muted space-y-4 leading-relaxed">
          <p>
            <strong className="text-primary">The short answer.</strong> You can generally keep GIFT City investments you made as an NRI after you return. What changes is tax: you may first become a Resident but Not Ordinarily Resident (RNOR), which keeps some exemptions for a while, and then a full resident taxed on worldwide income. Any new money you send to GIFT City as a resident goes through the LRS.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">1. Your residential status changes in stages</h3>
          <p>
            Indian tax law has three statuses: non-resident (NR), resident but not ordinarily resident (RNOR), and resident and ordinarily resident (ROR). Under section 6 of the Income-tax Act, a returning NRI is usually RNOR at first — for example, if they were non-resident in nine of the previous ten years, or spent no more than 729 days in India in the previous seven. How long RNOR lasts depends on your own travel history.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">2. While you are RNOR</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Income earned and received outside India is generally not taxed in India, unless it comes from a business controlled or profession set up in India.</li>
            <li>Interest on GIFT City IBU deposits and FCNR deposits stays exempt, because both exemptions cover RNORs.</li>
            <li>Gains from GIFT City funds: the treatment depends on the fund structure. Ask your CA before redeeming, because timing a redemption within the RNOR window can matter.</li>
          </ul>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">3. Can you keep the investments?</h3>
          <p>
            Generally, yes. Section 6(4) of FEMA allows a person resident in India to hold, own or transfer foreign currency and foreign securities acquired while they were resident outside India. Units in GIFT IFSC are treated as persons resident outside India for FEMA purposes, so holdings bought as an NRI can usually continue. Confirm this with your bank and the Fund Management Entity, who must update your status.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">4. New money goes through LRS</h3>
          <p>
            Once resident, fresh investments into GIFT City are made under the Liberalised Remittance Scheme, within the USD 250,000 annual limit, and may attract TCS. See <Link to="/insights/lrs-tcs-gift-city" className="text-secondary hover:underline">LRS, TCS and GIFT City</Link>.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">5. Once you become ROR</h3>
          <p>
            As a full resident you are taxed in India on worldwide income, including GIFT City deposit interest and fund gains, and you must report foreign assets in Schedule FA of your income-tax return.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">Checklist before and after you move</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Work out your expected residential status for the next few years with a CA.</li>
            <li>Tell every bank, IBU and Fund Management Entity about your change of status and update KYC.</li>
            <li>Redesignate NRE and NRO accounts as required; review FCNR maturities.</li>
            <li>Keep records of your purchase cost in foreign currency for each holding.</li>
            <li>Settle tax obligations in the country you are leaving. US citizens and green card holders remain US taxpayers wherever they live.</li>
          </ul>
          <p className="text-sm">
            Related: <Link to="/insights/gift-city-fd-vs-nre-fcnr" className="text-secondary hover:underline">GIFT City FDs vs NRE and FCNR deposits</Link> · <Link to="/taxation" className="text-secondary hover:underline">Regulation and Taxation</Link> · <a href="https://www.incometaxindia.gov.in/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Income Tax Department</a>
          </p>
          <p className="text-sm italic pt-2">
            This article is educational only and is not tax, legal or investment advice. Residential status and FEMA rules turn on individual facts; take professional advice before you move.
          </p>
        </div>
    ),
  },
  {
    slug: "lrs-tcs-gift-city",
    faqs: [{ q: "What is the GIFT City LRS scheme?", a: "There is no separate scheme: resident Indians invest in GIFT City through the RBI's Liberalised Remittance Scheme, which applies because the IFSC is treated as outside India for foreign exchange purposes." }, { q: "What is the LRS limit? Is it USD 250,000 a year?", a: "Yes. Under the Liberalised Remittance Scheme a resident individual can send up to USD 250,000 abroad in a financial year, across all permitted purposes including investing in GIFT City funds." }, { q: "How much TCS on foreign remittance for investment?", a: "For FY 2026-27, no TCS on the first ₹10 lakh of your LRS remittances in the year and 20% on investment remittances above that. It is credited back against your income tax." }, { q: "Is a GIFT City investment an overseas portfolio investment?", a: "Yes. For a resident Indian, investing in a GIFT City fund is treated as an overseas portfolio investment (OPI) under FEMA, made through LRS, because the IFSC is treated as outside India for foreign exchange purposes." }, { q: "What is Form A2 under LRS?", a: "Form A2 is the application and declaration you give your bank when sending money abroad under LRS. You state the purpose, such as overseas portfolio investment, and confirm the remittance is within your annual limit." }],
    title: "LRS and TCS for GIFT City Funds: Limits, 20% TCS and a Calculator",
    seoTitle: "LRS & TCS on GIFT City Investments: Calculator (FY 2026-27)",
    description: "How LRS and TCS apply when a resident Indian invests in a GIFT City fund: the USD 250,000 limit, no TCS up to ₹10 lakh, 20% above it, how to claim it back, and a free calculator.",
    datePublished: "2026-09-21",
    dateModified: "2026-10-09",
    body: (
        <div className="font-body text-foreground-muted space-y-4 leading-relaxed">
          <p>
            <strong className="text-primary">The short answer.</strong> A resident Indian invests in a GIFT City fund by sending money under the <strong className="text-primary">Liberalised Remittance Scheme (LRS)</strong>, because for foreign exchange purposes GIFT IFSC is treated as outside India. That brings two rules: an annual limit of <strong className="text-primary">USD 250,000</strong>, and Tax Collected at Source (TCS) of <strong className="text-primary">20% on the part of your year's remittances above ₹10 lakh</strong>. TCS is not a cost; you claim it back in your income tax return.
          </p>

          <TcsCalculator />

          <h3 className="font-heading font-semibold text-xl text-primary pt-2">How much TCS on a GIFT City investment?</h3>
          <BarChart
            title="TCS on a GIFT City investment, if it is your only LRS remittance this year"
            caption="20% on the portion above ₹10 lakh, FY 2026-27. Illustration only."
            rows={[
              { label: "Invest ₹5 lakh", value: 0, display: "₹0" },
              { label: "Invest ₹10 lakh", value: 0, display: "₹0" },
              { label: "Invest ₹15 lakh", value: 100000, display: "₹1,00,000" },
              { label: "Invest ₹25 lakh", value: 300000, display: "₹3,00,000", tone: "amber" },
              { label: "Invest ₹50 lakh", value: 800000, display: "₹8,00,000", tone: "amber" },
            ]}
          />

          <h3 className="font-heading font-semibold text-xl text-primary pt-2">From your bank to the fund, and back to you</h3>
          <FlowSteps
            caption="TCS is collected when the money leaves and credited back when you file your return."
            highlight={4}
            steps={[
              { title: "Form A2 at your bank", sub: "Purpose: overseas portfolio investment" },
              { title: "Bank checks your LRS total", sub: "Across the financial year" },
              { title: "USD sent to the fund", sub: "TCS deducted above ₹10 lakh" },
              { title: "TCS shows in Form 26AS", sub: "Against your PAN" },
              { title: "Claim it in your ITR", sub: "Set off or refunded" },
            ]}
          />

          <h3 className="font-heading font-semibold text-xl text-primary pt-2">The ₹10 lakh threshold counts everything</h3>
          <p>
            The threshold is per person per financial year and adds up all your LRS remittances, not just investments. School fees sent abroad in June count towards it, so a GIFT City investment in November may cross the threshold sooner than you expect. Tell your bank about remittances made through other banks.
          </p>

          <h3 className="font-heading font-semibold text-xl text-primary pt-2">Getting the TCS back</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Check that the TCS appears in Form 26AS or the Annual Information Statement.</li>
            <li>Claim it in your income tax return; any excess over your tax is refunded.</li>
            <li>Salaried? Ask your employer to take it into account when deducting TDS, so less cash is tied up.</li>
          </ul>

          <h3 className="font-heading font-semibold text-xl text-primary pt-2">Why NRIs are different</h3>
          <p>
            NRIs investing money already held abroad send it directly in foreign currency. LRS and TCS apply to residents sending money out of India, so they do not arise. See <Link to="/gift-city-funds-for-uae-nris" className="text-secondary hover:underline">UAE NRIs</Link> or <Link to="/gift-city-route-checker" className="text-secondary hover:underline">check your route</Link>.
          </p>

          <h3 className="font-heading font-semibold text-xl text-primary pt-2">Planning monthly investments?</h3>
          <p>
            Each instalment is a separate LRS remittance; see <Link to="/gift-city-sip" className="text-secondary hover:underline">SIP in GIFT City funds</Link> for a month-by-month example.
          </p>

          <p className="text-sm">
            Official sources: <a href="https://www.rbi.org.in/Scripts/FAQView.aspx?Id=115" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">RBI FAQs on LRS</a> · <a href="https://www.incometaxindia.gov.in/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Income Tax Department</a>
          </p>
          <p className="text-sm italic pt-2">
            This article is educational and is not tax advice. Rates are as changed by the Finance Act, 2026 (effective 1 April 2026) and can change; confirm with your bank or chartered accountant before remitting.
          </p>
        </div>
    ),
  },
  {
    slug: "aif-vs-pms-vs-fof",
    title: "AIF vs PMS vs Mutual Fund FoF: Choosing a GIFT City Structure",
    seoTitle: "AIF vs PMS vs Mutual Fund FoF in GIFT City Compared",
    description: "A side-by-side comparison of the three main GIFT City fund structures — AIF, PMS and Mutual Fund FoF — by ticket size, access and investor fit.",
    datePublished: "2026-09-21",
    body: (
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
      
    ),
  },
  {
    slug: "ifsca-vs-sebi",
    title: "IFSCA vs SEBI: Who Actually Regulates Your GIFT City Fund",
    description: "How IFSCA regulates GIFT City funds, how that differs from SEBI's role for domestic mutual funds, and what it means for investor protection.",
    datePublished: "2026-09-21",
    body: (
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
      
    ),
  },
  {
    slug: "gift-city-vs-nre-nro",
    faqs: [{ q: "Should NRIs choose a GIFT City fund or an NRE account?", a: "They do different jobs. An NRE account holds rupees with tax-free interest and full repatriation; a GIFT City fund is a market-linked investment, usually in US Dollars, with no rupee conversion. Many NRIs use both." }],
    title: "GIFT City Fund vs NRE/NRO Investing: A Straight Comparison",
    description: "How a GIFT City fund compares with the NRE and NRO account route for NRIs — currency, repatriation, tax and structure differences explained.",
    datePublished: "2026-09-21",
    body: (
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
      
    ),
  },
  {
    slug: "gift-city-vs-direct-foreign",
    title: "GIFT City vs Direct Foreign Investment: What Actually Changes for an NRI",
    seoTitle: "GIFT City Funds vs US ETFs and Direct Foreign Investing",
    description: "What changes when an NRI invests through a GIFT City IFSC fund instead of buying US-listed ETFs or other funds through a foreign brokerage account.",
    datePublished: "2026-09-21",
    body: (
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
            If you're a US-based NRI weighing this decision, our <Link to="/us-based-nris" className="text-secondary hover:underline">US-Based NRI guide</Link> and the article on <Link to="/insights/pfic-explained" className="text-secondary hover:underline">PFIC status</Link> below are worth reading first, or <Link to="/contact" className="text-secondary hover:underline">talk to Anup</Link> directly about your specific situation.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">GIFT City fund vs a US-listed ETF</h3>
          <p>
            Many NRIs compare a GIFT City global fund with simply buying a US-listed ETF through an overseas broker. The main differences:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-primary">US estate tax (non-US persons):</strong> shares of US companies, including US-listed ETFs, are US-situated assets. The IRS requires an estate tax return for a non-resident non-citizen whose US-situated assets exceed USD 60,000 at death. A fund domiciled in GIFT IFSC is not a US company; ask the fund and a tax adviser how this applies to you.</li>
            <li><strong className="text-primary">US withholding on dividends:</strong> dividends from US securities paid to non-US persons are subject to US withholding tax, which a tax treaty may reduce.</li>
            <li><strong className="text-primary">US persons:</strong> the comparison usually reverses. A US-listed ETF is not a PFIC, while most foreign funds are. See <Link to="/insights/pfic-explained" className="text-secondary hover:underline">PFIC explained</Link>.</li>
            <li><strong className="text-primary">Cost:</strong> broad US ETFs often have very low expense ratios. A GIFT City feeder fund adds its own costs on top of the underlying fund's. Compare the total.</li>
            <li><strong className="text-primary">Convenience:</strong> a GIFT City fund keeps your investment, statements and KYC within India's regulated framework, which some investors prefer to an overseas brokerage account.</li>
          </ul>
          <p className="text-sm">
            Source: <a href="https://www.irs.gov/individuals/international-taxpayers/some-nonresidents-with-us-assets-must-file-estate-tax-returns" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">IRS — some nonresidents with US assets must file estate tax returns</a>.
          </p>
          <p className="text-sm italic pt-2">
            This article is educational only and is not investment or tax advice. Consult a qualified tax professional familiar with your country of residence before deciding between structures.
          </p>
        </div>
      
    ),
  },
  {
    slug: "ten-questions-nris-ask",
    title: "Ten Questions NRIs Actually Ask About GIFT City Funds",
    description: "Ten plain-English answers to the questions NRIs most commonly ask before investing in a GIFT City IFSC fund.",
    datePublished: "2026-09-21",
    body: (
        <div className="font-body text-foreground-muted space-y-4 leading-relaxed">
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong className="text-primary">Is GIFT City safe to invest in?</strong> GIFT City funds are regulated by IFSCA, India's dedicated regulator for its International Financial Services Centres. As with any investment, safety depends on the specific fund, its FME, and the underlying strategy — not on GIFT City as a location alone.
            </li>
            <li>
              <strong className="text-primary">Do I need an NRE or NRO account to invest?</strong> No. NRIs typically invest directly in USD from an existing overseas bank account — see our comparison of <Link to="/insights/gift-city-vs-nre-nro" className="text-secondary hover:underline">GIFT City funds vs NRE/NRO investing</Link>.
            </li>
            <li>
              <strong className="text-primary">What's the minimum investment?</strong> It varies significantly by structure — Mutual Fund FoFs and Retail Feeder Funds can start from roughly $5,000, while AIFs and PMS typically require $75,000–$150,000+. See the full <Link to="/funds-explained" className="text-secondary hover:underline">structure comparison</Link>.
            </li>
            <li>
              <strong className="text-primary">Is my money repatriable?</strong> Generally yes, since these are USD-denominated structures — but always confirm the specific redemption and repatriation terms with your FME before investing.
            </li>
            <li>
              <strong className="text-primary">Who regulates GIFT City funds?</strong> IFSCA, not SEBI. See our full explainer on <Link to="/insights/ifsca-vs-sebi" className="text-secondary hover:underline">IFSCA vs SEBI</Link>.
            </li>
            <li>
              <strong className="text-primary">Am I taxed in India on GIFT City fund gains?</strong> Tax treatment depends on your residency status, the specific fund structure, and applicable double-taxation treaties. See our <Link to="/taxation" className="text-secondary hover:underline">Taxation page</Link> for a full breakdown.
            </li>
            <li>
              <strong className="text-primary">I'm a US citizen — does PFIC apply to me?</strong> Possibly — many foreign pooled funds default to PFIC treatment under US tax law. Read our dedicated <Link to="/insights/pfic-explained" className="text-secondary hover:underline">PFIC explainer</Link> before investing.
            </li>
            <li>
              <strong className="text-primary">What documents do I need?</strong> Typically a passport, PAN or Form 60, proof of overseas address, a recent bank statement, and a tax residency certificate. US persons also need a W-9 or W-8BEN. Full detail in our <Link to="/how-to-invest" className="text-secondary hover:underline">How to Invest guide</Link>.
            </li>
            <li>
              <strong className="text-primary">Can Resident Indians invest too, not just NRIs?</strong> Yes, via the Liberalised Remittance Scheme (LRS) under the Overseas Portfolio Investment route — see our explainer on <Link to="/insights/lrs-tcs-gift-city" className="text-secondary hover:underline">LRS, TCS and GIFT City</Link>.
            </li>
            <li>
              <strong className="text-primary">How do I actually get started?</strong> Understand the structures, confirm your eligibility and route, gather your documents, and connect with an IFSCA-registered Fund Management Entity. <Link to="/contact" className="text-secondary hover:underline">Talk to Anup</Link> for a plain-English walkthrough of how the process works.
            </li>
          </ol>
          <p className="text-sm italic pt-2">
            This article is educational only and is not investment, tax or legal advice. Individual circumstances vary — always consult qualified professionals before investing.
          </p>
        </div>
      
    ),
  },
  {
    slug: "pfic-explained",
    title: "PFIC Explained: Why It Matters for Every US-Based NRI Investor",
    seoTitle: "PFIC Explained for US-Based NRIs | GIFT City Funds",
    description: "A plain-English explanation of PFIC status, why it applies to many foreign funds, and why GIFT City fund structure matters for US-based NRIs and US persons.",
    datePublished: "2026-09-20",
    body: (
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
            about how the process works. Ask the fund's manager how the fund is documented for US tax purposes, and confirm it with your US tax professional.
          </p>
          <p className="text-sm italic pt-2">
            This article is educational only and is not tax or investment advice. PFIC rules are complex and fact-specific — always consult a qualified US tax professional about your own situation.
          </p>
        </div>
      
    ),
  },
];

export const getArticle = (slug?: string) => articles.find((a) => a.slug === slug);
