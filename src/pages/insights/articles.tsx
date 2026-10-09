// Insights articles. Each entry becomes its own page at /insights/<slug>.
// To publish a new article: add an entry here and its URL to public/sitemap.xml.
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import TcsCalculator from "@/components/TcsCalculator";
import type { PageFaq } from "@/components/PageFaqs";
import { BarChart, FlowSteps, RouteDiagram } from "@/components/Diagrams";

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
    faqs: [{ q: "How long does it take to open a GIFT City bank account?", a: "Usually one to two weeks, and often less with video KYC or if you already bank with the same group." }, { q: "Can resident Indians use a GIFT City account for other overseas payments?", a: "Yes. Since July 2024, a resident's foreign currency account in an IFSC can be used for any purpose permitted under LRS, within the USD 250,000 annual limit." }, { q: "Can I open a GIFT City USD account?", a: "Yes. IFSC Banking Units in GIFT City offer US Dollar accounts and deposits to eligible NRIs, foreign citizens and, within LRS, resident Indians. Each bank sets its own minimum balance and documents." }],
    title: "How to Open a GIFT City Bank Account (IFSC Banking Unit)",
    seoTitle: "How to Open a GIFT City Bank Account: NRIs and Residents",
    description: "Who can open a GIFT City bank account with an IFSC Banking Unit, the documents needed, how to fund it, and what to compare between banks.",
    datePublished: "2026-10-08",
    dateModified: "2026-10-09",
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
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">The process at a glance</h3>
          <FlowSteps
            caption="Typically one to two weeks; faster if you already bank with the same group."
            steps={[
              { title: "Pick an IFSC Banking Unit", sub: "Check it in the IFSCA Directory" },
              { title: "KYC", sub: "Passport, PAN or Form 60, address" },
              { title: "Open online or in branch", sub: "Video KYC at many banks" },
              { title: "Fund it", sub: "Wire from abroad, or LRS for residents" },
              { title: "Use it", sub: "Hold USD, book FDs, invest" },
            ]}
          />
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">Common problems and how to avoid them</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-primary">Name mismatches</strong> between passport, PAN and bank records delay KYC; fix them first.</li>
            <li><strong className="text-primary">Unattested overseas documents</strong> may be rejected; ask the bank what attestation it needs.</li>
            <li><strong className="text-primary">Wrong remittance purpose code</strong> for residents can cause the transfer to bounce; ask your Indian bank for the code for a remittance to an IFSC account.</li>
            <li><strong className="text-primary">Missing tax statements:</strong> ask how the bank reports interest for your country before you open the account.</li>
          </ul>
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">Using the account for residents</h3>
          <p>
            For residents, the IFSC account sits inside the LRS: every rupee sent to it counts towards the USD 250,000 limit and the ₹10 lakh TCS threshold. Money in the account can then be used for other permitted LRS purposes, which makes it a convenient dollar base for overseas spending and investing. See <Link to="/gift-city-funds-for-resident-indians" className="text-secondary hover:underline">GIFT City for resident Indians</Link>.
          </p>
          <p className="text-sm italic pt-2">
            This article is educational only and is not banking, investment or tax advice. Bank products and rules change; confirm current terms with the bank.
          </p>
        </div>
    ),
  },
  {
    slug: "gift-city-fd-vs-nre-fcnr",
    faqs: [{ q: "How do I open a GIFT City fixed deposit?", a: "Choose an IFSC Banking Unit, complete its KYC (passport, address proof, PAN if available), open the account, transfer foreign currency from abroad and book the deposit." }, { q: "Can I break a GIFT City FD early?", a: "Usually yes, with a penalty or reduced rate set by the bank. Check the premature withdrawal terms before booking." }, { q: "What are GIFT City FD interest rates?", a: "GIFT City fixed deposits are offered by IFSC Banking Units in US Dollars and other currencies. Rates are set by each bank, depend on tenure and amount, and change often, so compare the banks' current rate cards rather than relying on a single figure." }],
    title: "GIFT City Fixed Deposits vs NRE and FCNR Deposits",
    seoTitle: "GIFT City FD vs NRE vs FCNR Deposits for NRIs",
    description: "GIFT City foreign-currency fixed deposits compared with NRE and FCNR deposits: currency, tenure, Indian tax on interest, what changes when you return to India.",
    datePublished: "2026-10-08",
    dateModified: "2026-10-09",
    body: (
        <div className="font-body text-foreground-muted space-y-4 leading-relaxed">
          <p>
            <strong className="text-primary">The short answer.</strong> All three let an NRI earn interest in India that is free of Indian tax and freely repatriable. The difference is currency and flexibility: an NRE deposit is in rupees, an FCNR deposit is in a foreign currency for one to five years, and a GIFT City deposit is in a foreign currency with an IFSC Banking Unit, sometimes for shorter terms.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">Side by side</h3>
          <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto">
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
            Indian exemptions do not stop your country of residence from taxing the interest. US, UK and Canadian residents generally report worldwide interest; the UAE does not tax individuals' income. See <Link to="/gift-city-funds-for-nri" className="text-secondary hover:underline">GIFT City funds for NRIs, country by country</Link>.
          </p>
          <p className="text-sm">
            How to open the account first: <Link to="/insights/how-to-open-gift-city-bank-account" className="text-secondary hover:underline">How to open a GIFT City bank account</Link>. Example product terms: <a href="https://www.idfcfirst.bank.in/gift-city/non-resident-banking/fixed-deposit-account" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">one bank's GIFT City fixed deposit page</a>.
          </p>
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">Opening a GIFT City fixed deposit</h3>
          <FlowSteps
            caption="Most banks complete this in one to two weeks."
            steps={[
              { title: "Choose an IFSC Banking Unit", sub: "Compare rates and tenures" },
              { title: "KYC", sub: "Passport, address proof, PAN if available" },
              { title: "Open the account", sub: "Often online or by video KYC" },
              { title: "Transfer foreign currency", sub: "From your account abroad" },
              { title: "Book the deposit", sub: "Choose tenure and payout" },
            ]}
          />
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">Questions to ask the bank</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>What is the minimum deposit and minimum tenure?</li>
            <li>Is there a penalty for breaking the deposit early?</li>
            <li>Can interest be paid to an account abroad, and in which currencies?</li>
            <li>What happens to the deposit if I become resident in India?</li>
            <li>Which charges apply to inward and outward transfers?</li>
          </ul>
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">Deposits or funds?</h3>
          <p>
            Deposits pay a fixed rate for a fixed term and suit money you need to keep safe and in dollars. Funds are market-linked: they can grow more, and they can fall. Many NRIs keep an emergency reserve in deposits and invest longer-term money in funds. To compare the fund side, see <Link to="/gift-city-funds-for-nri" className="text-secondary hover:underline">GIFT City funds for NRIs</Link> and <Link to="/gift-city-minimum-investment" className="text-secondary hover:underline">minimum investment amounts</Link>.
          </p>
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">Which currency should the deposit be in?</h3>
          <p>
            Match the currency to what you will spend the money on. A dollar earner planning to stay abroad usually keeps dollars; someone planning to return to India may want part of their savings in rupees over time. Converting back and forth costs money each way, so fewer conversions usually mean better results.
          </p>
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">An example</h3>
          <p>
            Ravi works in Dubai and has USD 60,000 saved. He keeps USD 20,000 in a 6-month GIFT City deposit as a reserve he may need, puts USD 30,000 in a 3-year FCNR deposit, and keeps USD 10,000 in rupees in an NRE account for family expenses in India. Each piece matches a purpose and a time frame. This is an illustration of how people think about it, not a recommendation.
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
    dateModified: "2026-10-09",
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
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">The three stages after you return</h3>
          <FlowSteps
            caption="How long each stage lasts depends on your travel history; confirm the dates with a CA."
            highlight={1}
            steps={[
              { title: "Non-resident (NR)", sub: "Before you move" },
              { title: "RNOR", sub: "Foreign income generally not taxed in India" },
              { title: "Resident (ROR)", sub: "Worldwide income taxed; Schedule FA" },
            ]}
          />
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">What happens to each holding</h3>
          <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto not-prose">
            <table className="w-full text-sm border-collapse">
              <thead><tr><th className="text-left font-heading text-primary bg-surface border border-border px-3 py-2">Holding</th><th className="text-left font-heading text-primary bg-surface border border-border px-3 py-2">After you return</th></tr></thead>
              <tbody>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">GIFT City fund units</td><td className="border border-border px-3 py-2">Can usually be kept; update your status with the fund house</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">GIFT City (IBU) deposits</td><td className="border border-border px-3 py-2">Can continue; interest stays exempt while you are RNOR</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">FCNR deposits</td><td className="border border-border px-3 py-2">Can run to maturity; interest exempt while RNOR</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">NRE accounts</td><td className="border border-border px-3 py-2">Must be redesignated; interest becomes taxable</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Overseas accounts and investments</td><td className="border border-border px-3 py-2">Can generally be kept under FEMA 6(4); report in Schedule FA once ROR</td></tr>
              </tbody>
            </table>
          </div>
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">Planning the move</h3>
          <p>
            The RNOR years are the main planning window. Some people redeem or rebalance foreign investments while RNOR, when foreign gains are generally not taxed in India, rather than after becoming ROR. Whether that helps depends on the fund structure and your home country's exit rules, so model it with a CA in both countries before you move.
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
    description: "LRS and TCS for GIFT City investments: the USD 250,000 limit, no TCS up to ₹10 lakh, 20% above it, how to claim it back, and a free calculator.",
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
            NRIs investing money already held abroad send it directly in foreign currency. LRS and TCS apply to residents sending money out of India, so they do not arise. See <Link to="/gift-city-funds-for-nri#uae" className="text-secondary hover:underline">UAE NRIs</Link> or <Link to="/gift-city-route-checker" className="text-secondary hover:underline">check your route</Link>.
          </p>

          <h3 className="font-heading font-semibold text-xl text-primary pt-2">Planning monthly investments?</h3>
          <p>
            Each instalment is a separate LRS remittance; see <Link to="/gift-city-sip" className="text-secondary hover:underline">SIP in GIFT City funds</Link> for a month-by-month example.
          </p>

          <p className="text-sm">
            Official sources: <a href="https://www.rbi.org.in/Scripts/FAQView.aspx?Id=115" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">RBI FAQs on LRS</a> · <a href="https://www.incometaxindia.gov.in/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Income Tax Department</a>
          </p>
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">LRS limit vs TCS threshold: not the same thing</h3>
          <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto not-prose">
            <table className="w-full text-sm border-collapse">
              <thead><tr><th className="text-left font-heading text-primary bg-surface border border-border px-3 py-2"></th><th className="text-left font-heading text-primary bg-surface border border-border px-3 py-2">LRS limit</th><th className="text-left font-heading text-primary bg-surface border border-border px-3 py-2">TCS threshold</th></tr></thead>
              <tbody>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Set by</td><td className="border border-border px-3 py-2">RBI (foreign exchange)</td><td className="border border-border px-3 py-2">Income-tax law</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Amount</td><td className="border border-border px-3 py-2">USD 250,000 per person per financial year</td><td className="border border-border px-3 py-2">₹10 lakh per person per financial year</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">What happens above it</td><td className="border border-border px-3 py-2">You cannot remit more that year</td><td className="border border-border px-3 py-2">20% TCS on investment remittances, credited back</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Counts</td><td className="border border-border px-3 py-2">All LRS purposes together</td><td className="border border-border px-3 py-2">All LRS remittances together</td></tr>
              </tbody>
            </table>
          </div>
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">Example: a couple investing together</h3>
          <p>
            Meera and Arjun, both resident, want to put ₹20 lakh into a GIFT City fund this year and have sent nothing abroad so far. If Meera sends it all, ₹10 lakh is above her threshold and ₹2 lakh is collected as TCS. If each sends ₹10 lakh of their own money, neither crosses the threshold and no TCS is collected. Either way the tax is the same in the end; the difference is cash tied up until the returns are processed. Each person must use genuinely their own funds.
          </p>
          <p className="text-sm italic pt-2">
            This article is educational and is not tax advice. Rates are as changed by the Finance Act, 2026 (effective 1 April 2026) and can change; confirm with your bank or chartered accountant before remitting.
          </p>
        </div>
    ),
  },
  {
    slug: "aif-vs-pms-vs-fof",
    faqs: [{ q: "Which is better for NRIs: AIF, PMS or a GIFT City mutual fund?", a: "None is better in general. Ticket size usually decides first: retail funds and feeders for smaller amounts, PMS from USD 75,000, AIFs commonly from USD 150,000. Then weigh liquidity, costs and how involved you want to be." }, { q: "Do GIFT City AIFs have lock-ins?", a: "Many do, especially close-ended strategies such as private credit. Check the placement memorandum for lock-in, notice periods and exit loads before committing." }],
    title: "AIF vs PMS vs Mutual Fund FoF: Choosing a GIFT City Structure",
    seoTitle: "AIF vs PMS vs Mutual Fund FoF in GIFT City Compared",
    description: "A side-by-side comparison of the three main GIFT City fund structures — AIF, PMS and Mutual Fund FoF — by ticket size, access and investor fit.",
    datePublished: "2026-09-21",
    dateModified: "2026-10-09",
    body: (
        <div className="font-body text-foreground-muted space-y-4 leading-relaxed">
          <p>
            Once you've decided to invest through GIFT City, the next decision is which structure. The three most-compared options are the AIF (Alternative Investment Fund), PMS (Portfolio Management Services), and Mutual Fund FoF (Fund of Funds) — and the right choice usually comes down to ticket size, how hands-on you want to be, and how comfortable you are with liquidity constraints.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">Mutual Fund FoF: simplicity at a lower ticket</h3>
          <p>
            A GIFT City Mutual Fund FoF is a feeder structure — your money channels into an underlying scheme, much like a fund-of-funds works domestically. Entry tickets are the lowest of the three (from USD 500 for some funds, though this varies by fund house), pooled and professionally managed with no ongoing decision-making required from you. This is generally the most accessible structure for an investor new to GIFT City.
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
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">The three structures compared</h3>
          <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto not-prose">
            <table className="w-full text-sm border-collapse">
              <thead><tr><th className="text-left font-heading text-primary bg-surface border border-border px-3 py-2"></th><th className="text-left font-heading text-primary bg-surface border border-border px-3 py-2">Mutual Fund FoF / feeder</th><th className="text-left font-heading text-primary bg-surface border border-border px-3 py-2">PMS</th><th className="text-left font-heading text-primary bg-surface border border-border px-3 py-2">AIF</th></tr></thead>
              <tbody>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Typical minimum</td><td className="border border-border px-3 py-2">From USD 500 for some funds</td><td className="border border-border px-3 py-2">USD 75,000</td><td className="border border-border px-3 py-2">Commonly USD 150,000</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">What you own</td><td className="border border-border px-3 py-2">Units of a pooled fund</td><td className="border border-border px-3 py-2">The securities themselves</td><td className="border border-border px-3 py-2">Units of a pooled fund</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Liquidity</td><td className="border border-border px-3 py-2">Usually regular redemptions</td><td className="border border-border px-3 py-2">Withdraw on notice</td><td className="border border-border px-3 py-2">Often lock-ins or close-ended terms</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Costs</td><td className="border border-border px-3 py-2">Fund expenses plus underlying fund</td><td className="border border-border px-3 py-2">Management fee, often a performance fee</td><td className="border border-border px-3 py-2">Management fee, often a performance fee</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Your involvement</td><td className="border border-border px-3 py-2">None after investing</td><td className="border border-border px-3 py-2">Mandate set with the manager</td><td className="border border-border px-3 py-2">None after committing</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Tax paperwork</td><td className="border border-border px-3 py-2">One holding</td><td className="border border-border px-3 py-2">Each security</td><td className="border border-border px-3 py-2">One holding, sometimes complex statements</td></tr>
              </tbody>
            </table>
          </div>
          <BarChart
            title="Typical minimum investment, USD"
            caption="Indicative; each scheme sets its own minimum."
            rows={[
              { label: "FoF / feeder (lowest seen)", value: 500, display: "500" },
              { label: "PMS", value: 75000, display: "75,000" },
              { label: "AIF (restricted scheme)", value: 150000, display: "150,000", tone: "amber" },
            ]}
          />
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">A simple way to narrow it down</h3>
          <FlowSteps
            caption="Ticket size first, then how involved you want to be, then liquidity."
            steps={[
              { title: "Under USD 75,000?", sub: "Retail funds and feeders" },
              { title: "USD 75,000 to 150,000?", sub: "PMS becomes possible" },
              { title: "Over USD 150,000?", sub: "AIFs become possible" },
              { title: "Need access to the money?", sub: "Avoid long lock-ins" },
            ]}
          />
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">Two examples</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-primary">A UAE-based NRI with USD 20,000</strong> wanting Indian equity exposure in dollars will mostly be looking at retail inbound funds or feeders.</li>
            <li><strong className="text-primary">A family with USD 500,000</strong> might split between a diversified fund and one AIF strategy, accepting the AIF's lock-in for part of the money only.</li>
          </ul>
          <p>
            Each structure has its own page: <Link to="/gift-city-feeder-funds" className="text-secondary hover:underline">feeder funds</Link>, <Link to="/gift-city-pms" className="text-secondary hover:underline">PMS</Link> and <Link to="/gift-city-aif" className="text-secondary hover:underline">AIFs</Link>. All minimums are in one table on <Link to="/gift-city-minimum-investment" className="text-secondary hover:underline">minimum investment amounts</Link>.
          </p>
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">Understanding the costs</h3>
          <p>
            Costs differ more than people expect. A feeder fund charges its own expenses and also bears the costs of the fund it invests in, so ask for the total. PMS and AIFs usually charge a yearly management fee and often a performance fee: a share of returns above a hurdle. A performance fee can be fair, but read how it is calculated, whether there is a high-water mark, and whether it is charged on realised or unrealised gains.
          </p>
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">Questions to ask before you choose</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>What is the total yearly cost, including any underlying fund and performance fee?</li>
            <li>How and when can I take money out, and what does it cost to leave early?</li>
            <li>Who holds the assets (the custodian), and how often is the portfolio valued?</li>
            <li>Does the scheme accept investors from my country and residential status?</li>
            <li>What statements will I get for tax filing in India and where I live?</li>
          </ul>
          <p className="text-sm italic pt-2">
            Ticket sizes and terms are indicative and vary by Fund Management Entity. This article is educational only and is not investment advice.
          </p>
        </div>
      
    ),
  },
  {
    slug: "ifsca-vs-sebi",
    faqs: [{ q: "Is a GIFT City fund registered with SEBI?", a: "No. GIFT City funds are registered with IFSCA under its fund management regulations. An inbound fund may separately register with SEBI as a foreign portfolio investor to invest in Indian markets, but the fund itself is regulated by IFSCA." }, { q: "Who do I complain to about a GIFT City fund?", a: "First the Fund Management Entity, in writing. If the issue is not resolved, IFSCA is the regulator for GIFT City funds." }, { q: "Does IFSCA regulation guarantee my money?", a: "No. Regulation governs how the manager is registered and how the fund is run and disclosed. It does not guarantee returns or protect against market or currency losses." }],
    title: "IFSCA vs SEBI: Who Actually Regulates Your GIFT City Fund",
    description: "How IFSCA regulates GIFT City funds, how that differs from SEBI's role for domestic mutual funds, and what it means for investor protection.",
    datePublished: "2026-09-21",
    dateModified: "2026-10-09",
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
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">IFSCA and SEBI side by side</h3>
          <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto not-prose">
            <table className="w-full text-sm border-collapse">
              <thead><tr><th className="text-left font-heading text-primary bg-surface border border-border px-3 py-2"></th><th className="text-left font-heading text-primary bg-surface border border-border px-3 py-2">IFSCA</th><th className="text-left font-heading text-primary bg-surface border border-border px-3 py-2">SEBI</th></tr></thead>
              <tbody>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Set up under</td><td className="border border-border px-3 py-2">IFSCA Act, 2019; established 27 April 2020</td><td className="border border-border px-3 py-2">SEBI Act, 1992</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Where it regulates</td><td className="border border-border px-3 py-2">Inside International Financial Services Centres (GIFT IFSC)</td><td className="border border-border px-3 py-2">India's domestic securities markets</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Scope</td><td className="border border-border px-3 py-2">Banking, capital markets, insurance, pensions and funds, all in one regulator</td><td className="border border-border px-3 py-2">Securities markets, mutual funds, AIFs, PMS, intermediaries</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Fund rules</td><td className="border border-border px-3 py-2">IFSCA (Fund Management) Regulations, 2025</td><td className="border border-border px-3 py-2">Separate regulations for mutual funds, AIFs and PMS</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Currency of products</td><td className="border border-border px-3 py-2">Foreign currency, usually USD</td><td className="border border-border px-3 py-2">Indian rupees</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">How residents invest</td><td className="border border-border px-3 py-2">Under LRS, as an overseas investment</td><td className="border border-border px-3 py-2">Normal rupee payment</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Fund manager is called</td><td className="border border-border px-3 py-2">Fund Management Entity (FME)</td><td className="border border-border px-3 py-2">Asset management company (AMC) or manager</td></tr>
              </tbody>
            </table>
          </div>
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">Where SEBI still appears in GIFT City</h3>
          <p>
            SEBI does not regulate GIFT City funds, but it can still be part of the picture. An inbound GIFT City fund that buys Indian shares and bonds directly usually registers with SEBI as a foreign portfolio investor (FPI), because it is investing in SEBI-regulated Indian markets. In 2024 SEBI also changed its FPI rules so that IFSC-based funds can take money from NRIs, OCIs and resident Indians. So the fund itself answers to IFSCA, while its trades in India follow SEBI's market rules. More on this in <Link to="/gift-city-family-office-fpi" className="text-secondary hover:underline">FPIs in GIFT City</Link>.
          </p>
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">What regulation does and does not protect</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-primary">It does:</strong> require the manager to be registered and fit to run money, set rules on who may invest, require offer documents and regular disclosure, and require independent parties such as custodians and auditors.</li>
            <li><strong className="text-primary">It does not:</strong> guarantee returns, protect you from market falls or currency moves, or make a fund suitable for you. That depends on the fund, its strategy and your situation.</li>
          </ul>
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">Checking a GIFT City fund manager in four steps</h3>
          <FlowSteps
            caption="This takes about ten minutes and should come before any subscription form."
            steps={[
              { title: "Get the FME's legal name", sub: "From the offer document" },
              { title: "Search the IFSCA Directory", sub: "ifsca.gov.in, regulated entities" },
              { title: "Match the category", sub: "e.g. Registered FME (Retail)" },
              { title: "Confirm the scheme type", sub: "Retail, restricted or venture capital" },
            ]}
          />
          <p>
            If something goes wrong, raise it first with the Fund Management Entity in writing. If it is not resolved, IFSCA, as the regulator, is the next step for GIFT City funds, in the same way SEBI is for domestic funds. For a fuller profile of the regulator, read <Link to="/what-is-ifsca" className="text-secondary hover:underline">What is IFSCA</Link>.
          </p>
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">How IFSCA came about</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-primary">2015:</strong> GIFT IFSC begins operating as India's first International Financial Services Centre, with RBI, SEBI, IRDAI and PFRDA each regulating their own part of it.</li>
            <li><strong className="text-primary">2019:</strong> Parliament passes the International Financial Services Centres Authority Act to bring these powers under one regulator.</li>
            <li><strong className="text-primary">April 2020:</strong> IFSCA is established, headquartered in GIFT City.</li>
            <li><strong className="text-primary">2022 and 2025:</strong> IFSCA issues its own fund management regulations, revised in 2025 to cut the minimum fund size from USD 5 million to USD 3 million and the PMS minimum from USD 150,000 to USD 75,000.</li>
          </ul>
          <p>
            The practical effect for investors is one regulator, one set of rules and one directory to check, instead of four. For fund investors, that makes due diligence simpler than it was before 2020.
          </p>
          <p className="text-sm italic pt-2">
            This article is educational only and is not regulatory or investment advice. Regulatory frameworks evolve — always verify current requirements directly with IFSCA.
          </p>
        </div>
      
    ),
  },
  {
    slug: "gift-city-vs-nre-nro",
    faqs: [{ q: "Can NRIs invest in Indian markets through GIFT City instead of an NRE account?", a: "Yes. Inbound GIFT City funds invest in Indian equities and bonds, and you hold them in US Dollars without converting to rupees. NRE investing gives the same market exposure in rupees." }, { q: "Is NRO money easy to move into a GIFT City fund?", a: "NRO balances can be repatriated up to USD 1 million a financial year with Forms 15CA/15CB and proof that tax has been paid. Many NRIs find it simpler to invest from money already held abroad." }, { q: "Should NRIs choose a GIFT City fund or an NRE account?", a: "They do different jobs. An NRE account holds rupees with tax-free interest and full repatriation; a GIFT City fund is a market-linked investment, usually in US Dollars, with no rupee conversion. Many NRIs use both." }],
    title: "GIFT City Fund vs NRE/NRO Investing: A Straight Comparison",
    description: "How a GIFT City fund compares with the NRE and NRO account route for NRIs — currency, repatriation, tax and structure differences explained.",
    datePublished: "2026-09-21",
    dateModified: "2026-10-09",
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
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">A correction worth making: GIFT City funds can invest in India too</h3>
          <p>
            GIFT City funds come in two directions. Outbound funds invest in global markets; <strong className="text-primary">inbound</strong> funds invest in Indian equities and bonds, but you hold them in US Dollars. So an NRI who wants Indian market exposure now has two routes: rupee investing through NRE/NRO accounts, or a dollar inbound fund in GIFT City.
          </p>
          <RouteDiagram
            caption="Same Indian market, two routes: rupees through NRE/NRO, or dollars through GIFT City."
            from={[{ label: "NRI's money abroad", sub: "Salary or savings in foreign currency", tone: "plain" }]}
            via={{ label: "Choose a route", sub: "Rupees or dollars", tone: "ink" }}
            to={[
              { label: "NRE/NRO route", sub: "Convert to INR, invest in Indian mutual funds or shares", tone: "amber" },
              { label: "GIFT City route", sub: "Stay in USD, invest in an inbound or outbound fund", tone: "teal" },
            ]}
          />
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">NRE vs NRO vs GIFT City fund</h3>
          <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto not-prose">
            <table className="w-full text-sm border-collapse">
              <thead><tr><th className="text-left font-heading text-primary bg-surface border border-border px-3 py-2"></th><th className="text-left font-heading text-primary bg-surface border border-border px-3 py-2">NRE</th><th className="text-left font-heading text-primary bg-surface border border-border px-3 py-2">NRO</th><th className="text-left font-heading text-primary bg-surface border border-border px-3 py-2">GIFT City fund</th></tr></thead>
              <tbody>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Currency</td><td className="border border-border px-3 py-2">INR</td><td className="border border-border px-3 py-2">INR</td><td className="border border-border px-3 py-2">Usually USD</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Source of money</td><td className="border border-border px-3 py-2">Money earned abroad</td><td className="border border-border px-3 py-2">Income earned in India</td><td className="border border-border px-3 py-2">Money held abroad</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Repatriation</td><td className="border border-border px-3 py-2">Free</td><td className="border border-border px-3 py-2">Up to USD 1 million a year, with paperwork</td><td className="border border-border px-3 py-2">Paid out in USD abroad</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Indian tax on account interest</td><td className="border border-border px-3 py-2">Exempt</td><td className="border border-border px-3 py-2">Taxable</td><td className="border border-border px-3 py-2">Depends on the fund; often little or none for non-residents</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Rupee exchange-rate risk</td><td className="border border-border px-3 py-2">Yes</td><td className="border border-border px-3 py-2">Yes</td><td className="border border-border px-3 py-2">Only on what the fund holds in India</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Typical use</td><td className="border border-border px-3 py-2">Savings and rupee investing</td><td className="border border-border px-3 py-2">Managing Indian income</td><td className="border border-border px-3 py-2">Dollar-based investing</td></tr>
              </tbody>
            </table>
          </div>
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">Three situations</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-primary">You plan to retire in India:</strong> rupee assets through NRE make sense for money you will spend in India.</li>
            <li><strong className="text-primary">You will stay abroad:</strong> a dollar inbound fund gives Indian exposure without a rupee round trip.</li>
            <li><strong className="text-primary">You have rent or dividends in India:</strong> they land in NRO; repatriating them takes Forms 15CA/15CB and counts towards the USD 1 million yearly limit.</li>
          </ul>
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">Moving from NRE savings to a GIFT City fund</h3>
          <FlowSteps
            caption="If your savings already sit in an NRE account, this is the usual path."
            steps={[
              { title: "Choose the fund", sub: "Check it accepts your country" },
              { title: "Fund house KYC", sub: "Passport, address, PAN" },
              { title: "Ask your bank", sub: "Outward transfer from NRE in USD" },
              { title: "Units allotted", sub: "Redemptions paid in USD" },
            ]}
          />
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">Do not forget tax at home</h3>
          <p>
            Indian exemptions on NRE interest do not stop your country of residence from taxing it, and the same goes for gains on a GIFT City fund. The UAE and most Gulf states do not tax individuals' investment income; the UK, US, Canada and Australia generally do. The country sections of our <Link to="/gift-city-funds-for-nri" className="text-secondary hover:underline">NRI guide</Link> set out what to check.
          </p>
          <p className="text-sm italic pt-2">
            This article is educational only and is not investment or tax advice. Tax treatment of NRE/NRO accounts and GIFT City funds depends on your specific residency and country of tax residence — consult a qualified advisor.
          </p>
        </div>
      
    ),
  },
  {
    slug: "gift-city-vs-direct-foreign",
    faqs: [{ q: "Should an NRI invest through GIFT City or an overseas brokerage account?", a: "It depends on what you want: a GIFT City fund gives professional management and access to India-focused strategies in dollars, while a brokerage account gives you control and often lower costs. US persons usually prefer US-listed funds to avoid PFIC rules." }, { q: "Does holding US ETFs directly create US estate tax risk for NRIs?", a: "Yes. Shares of US companies and US-listed ETFs are US-situated assets, and non-US persons may owe US estate tax above a USD 60,000 exemption. Ask a tax adviser how this applies to you." }],
    title: "GIFT City vs Direct Foreign Investment: What Actually Changes for an NRI",
    seoTitle: "GIFT City Funds vs US ETFs and Direct Foreign Investing",
    description: "What changes when an NRI invests through a GIFT City IFSC fund instead of buying US-listed ETFs or other funds through a foreign brokerage account.",
    datePublished: "2026-09-21",
    dateModified: "2026-10-09",
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
            If you're a US-based NRI weighing this decision, our <Link to="/gift-city-funds-for-nri#us" className="text-secondary hover:underline">US-Based NRI guide</Link> and the article on <Link to="/insights/pfic-explained" className="text-secondary hover:underline">PFIC status</Link> below are worth reading first, or <Link to="/contact" className="text-secondary hover:underline">talk to Anup</Link> directly about your specific situation.
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
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">Three routes side by side</h3>
          <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto not-prose">
            <table className="w-full text-sm border-collapse">
              <thead><tr><th className="text-left font-heading text-primary bg-surface border border-border px-3 py-2"></th><th className="text-left font-heading text-primary bg-surface border border-border px-3 py-2">GIFT City fund</th><th className="text-left font-heading text-primary bg-surface border border-border px-3 py-2">Overseas brokerage account</th><th className="text-left font-heading text-primary bg-surface border border-border px-3 py-2">US stocks/ETFs via GIFT City broker</th></tr></thead>
              <tbody>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Who chooses holdings</td><td className="border border-border px-3 py-2">Fund manager</td><td className="border border-border px-3 py-2">You</td><td className="border border-border px-3 py-2">You</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Regulator</td><td className="border border-border px-3 py-2">IFSCA</td><td className="border border-border px-3 py-2">Your local regulator</td><td className="border border-border px-3 py-2">IFSCA (broker)</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Access to India-focused strategies</td><td className="border border-border px-3 py-2">Yes, inbound funds</td><td className="border border-border px-3 py-2">Limited</td><td className="border border-border px-3 py-2">Limited</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">US estate tax exposure</td><td className="border border-border px-3 py-2">Depends on fund domicile</td><td className="border border-border px-3 py-2">Yes, on US-situated assets</td><td className="border border-border px-3 py-2">Yes, on US-situated assets</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">PFIC issue for US persons</td><td className="border border-border px-3 py-2">Usually yes</td><td className="border border-border px-3 py-2">No, for US-listed funds</td><td className="border border-border px-3 py-2">No, for US-listed funds</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Effort</td><td className="border border-border px-3 py-2">Low</td><td className="border border-border px-3 py-2">High</td><td className="border border-border px-3 py-2">Medium</td></tr>
              </tbody>
            </table>
          </div>
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">How country of residence changes the answer</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-primary">UAE and Gulf:</strong> no personal tax on investment income, so the choice is mostly about convenience, costs and US estate tax on direct US holdings.</li>
            <li><strong className="text-primary">UK:</strong> check whether the fund has HMRC reporting status; direct shares avoid that question.</li>
            <li><strong className="text-primary">US:</strong> direct US-listed funds usually win because they avoid PFIC rules.</li>
          </ul>
          <p>
            The full country rules are in the <Link to="/gift-city-funds-for-nri" className="text-secondary hover:underline">NRI guide</Link>, and the GIFT City broker route is explained in <Link to="/gift-city-us-stocks-etfs" className="text-secondary hover:underline">GIFT City ETFs and US stocks</Link>.
          </p>
          <p className="text-sm italic pt-2">
            This article is educational only and is not investment or tax advice. Consult a qualified tax professional familiar with your country of residence before deciding between structures.
          </p>
        </div>
      
    ),
  },
  {
    slug: "ten-questions-nris-ask",
    faqs: [{ q: "How long does it take to invest in a GIFT City fund as an NRI?", a: "Usually one to three weeks for a first investment: a few days for KYC, one to three working days for the transfer, and allotment at the next applicable NAV." }, { q: "What does a GIFT City fund cost an NRI?", a: "The fund's annual expenses, the underlying fund's costs for feeder funds, and your bank's transfer charges and exchange-rate margin." }, { q: "What happens to my GIFT City investment if I move back to India?", a: "You can generally keep holdings made while you were an NRI. New money after you become resident goes through LRS, and your tax treatment changes with your residential status." }],
    title: "Ten Questions NRIs Actually Ask About GIFT City Funds",
    description: "Ten plain-English answers to the questions NRIs most commonly ask before investing in a GIFT City IFSC fund.",
    datePublished: "2026-09-21",
    dateModified: "2026-10-09",
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
              <strong className="text-primary">What's the minimum investment?</strong> It varies by structure: some retail funds and feeders start from USD 500, PMS needs USD 75,000 and AIFs commonly USD 150,000. See the full <Link to="/funds-explained" className="text-secondary hover:underline">structure comparison</Link>.
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
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">Going deeper: what NRIs ask next</h3>
          <p>
            Once the first ten questions are answered, the conversation usually turns to costs, timing and what happens later in life. These are the follow-ups we hear most.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">What does it really cost?</h3>
          <p>
            There are three layers. The fund's own annual expenses, stated in its offer document; for feeder funds, the costs of the underlying fund as well; and your bank's charges and exchange-rate margin when you send money. On small amounts the bank's margin can matter more than the fund's fee, so ask your bank for its rate before sending.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">How long does it take?</h3>
          <FlowSteps
            caption="A typical first investment takes one to three weeks; later top-ups are faster."
            steps={[
              { title: "KYC", sub: "Two to five days" },
              { title: "Transfer USD", sub: "One to three working days" },
              { title: "Units allotted", sub: "At the next applicable NAV" },
              { title: "Statement", sub: "Investor portal access" },
            ]}
          />
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">Does where I live change anything?</h3>
          <p>
            Yes, in two ways. Some funds do not accept residents of certain countries, most often the US and Canada. And your home country taxes the investment under its own rules: the UAE and most Gulf states do not tax individuals' investment income, the UK looks at reporting fund status, and the US applies PFIC rules. Our <Link to="/gift-city-funds-for-nri" className="text-secondary hover:underline">NRI guide</Link> covers each country.
          </p>
          <h3 className="font-heading font-semibold text-lg text-primary pt-2">Three mistakes NRIs make</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-primary">Investing before checking eligibility.</strong> Completing KYC and then learning the fund does not accept your country wastes weeks.</li>
            <li><strong className="text-primary">Ignoring exit terms.</strong> Lock-ins and exit loads differ widely, especially between retail funds and AIFs.</li>
            <li><strong className="text-primary">Forgetting home-country reporting.</strong> The investment is foreign to your home tax authority; report it from the first year.</li>
          </ul>
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">Documents checklist for NRIs</h3>
          <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto not-prose">
            <table className="w-full text-sm border-collapse">
              <thead><tr><th className="text-left font-heading text-primary bg-surface border border-border px-3 py-2">Document</th><th className="text-left font-heading text-primary bg-surface border border-border px-3 py-2">Why it is asked for</th></tr></thead>
              <tbody>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Passport</td><td className="border border-border px-3 py-2">Identity and citizenship</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Overseas address proof</td><td className="border border-border px-3 py-2">Residence for KYC and tax</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">PAN, if you have one</td><td className="border border-border px-3 py-2">Some funds ask for it; others do not need it from non-residents</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Bank statement from the paying account</td><td className="border border-border px-3 py-2">To match the money to you</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Tax Residency Certificate</td><td className="border border-border px-3 py-2">To claim treaty rates where relevant</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">FATCA/CRS self-certification</td><td className="border border-border px-3 py-2">International tax reporting</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">W-9 or W-8BEN</td><td className="border border-border px-3 py-2">Only if you have US links</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Clear colour scans save time; some fund houses ask for overseas documents to be self-attested or notarised. The full process is in <Link to="/how-to-invest" className="text-secondary hover:underline">How to Invest</Link>.
          </p>
          <p className="text-sm italic pt-2">
            This article is educational only and is not investment, tax or legal advice. Individual circumstances vary — always consult qualified professionals before investing.
          </p>
        </div>
      
    ),
  },
  {
    slug: "pfic-explained",
    faqs: [{ q: "Do all GIFT City funds count as PFICs?", a: "Most foreign pooled funds meet the PFIC tests, so US persons should assume a GIFT City fund is a PFIC unless the fund house documents otherwise." }, { q: "When do I not need to file Form 8621?", a: "There is an exception from annual filing when your total PFIC holdings are USD 25,000 or less (USD 50,000 on a joint return) and you had no excess distribution or gain, but elections and sales still require the form. Confirm with a US tax preparer." }, { q: "Can US citizens invest in GIFT City funds at all?", a: "Only where the fund accepts US persons, and many do not. Check eligibility first." }],
    title: "PFIC Explained: Why It Matters for Every US-Based NRI Investor",
    seoTitle: "PFIC Explained for US-Based NRIs | GIFT City Funds",
    description: "A plain-English explanation of PFIC status, why it applies to many foreign funds, and why GIFT City fund structure matters for US-based NRIs and US persons.",
    datePublished: "2026-09-20",
    dateModified: "2026-10-09",
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
            <Link to="/gift-city-funds-for-nri#us" className="text-secondary hover:underline">
              guide for US-based NRIs
            </Link>
            , or{" "}
            <Link to="/contact" className="text-secondary hover:underline">
              talk to Anup
            </Link>{" "}
            about how the process works. Ask the fund's manager how the fund is documented for US tax purposes, and confirm it with your US tax professional.
          </p>
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">The three PFIC tax regimes</h3>
          <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto not-prose">
            <table className="w-full text-sm border-collapse">
              <thead><tr><th className="text-left font-heading text-primary bg-surface border border-border px-3 py-2">Regime</th><th className="text-left font-heading text-primary bg-surface border border-border px-3 py-2">How gains are taxed</th><th className="text-left font-heading text-primary bg-surface border border-border px-3 py-2">What it needs</th></tr></thead>
              <tbody>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Excess distribution (default)</td><td className="border border-border px-3 py-2">Gains spread over the holding period, taxed at the highest ordinary rate for each year, plus an interest charge</td><td className="border border-border px-3 py-2">Nothing; it applies automatically</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">QEF election</td><td className="border border-border px-3 py-2">Your share of the fund's earnings each year, with capital gains kept as capital gains</td><td className="border border-border px-3 py-2">A PFIC Annual Information Statement from the fund</td></tr>
                <tr><td className="border border-border px-3 py-2 font-medium text-primary">Mark-to-market</td><td className="border border-border px-3 py-2">Each year's increase in value taxed as ordinary income</td><td className="border border-border px-3 py-2">Units must count as marketable stock</td></tr>
              </tbody>
            </table>
          </div>
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">How the default regime adds up</h3>
          <FlowSteps
            caption="Why the default regime is costly: the gain is pushed back into earlier years at top rates, with interest."
            highlight={3}
            steps={[
              { title: "You sell at a gain", sub: "Or receive a large distribution" },
              { title: "Gain spread over holding years", sub: "Each year gets a share" },
              { title: "Top ordinary rate per year", sub: "Not the capital gains rate" },
              { title: "Interest charge added", sub: "As if tax were paid late" },
            ]}
          />
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">Form 8621 in practice</h3>
          <p>
            You generally file Form 8621 for each PFIC you hold. There is an exception from annual filing when your total PFIC holdings are small (USD 25,000, or USD 50,000 on a joint return) and you had no excess distribution or gain that year, but elections and dispositions still need the form. Many US-based NRIs pay a specialist preparer for this, which is a real cost to weigh against small investments.
          </p>
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">First check: does the fund accept US persons?</h3>
          <p>
            Many GIFT City funds do not accept US citizens, green card holders or US residents at all, because of the reporting burden. For example, Tata India Dynamic Equity Fund (GIFT City) lists US and US-connected persons as not eligible. Check eligibility before anything else; the PFIC question only matters for funds that will take you.
          </p>
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">Questions to ask the fund house</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Do you accept US persons?</li>
            <li>Is the fund likely to be a PFIC, and do you provide a PFIC Annual Information Statement for a QEF election?</li>
            <li>Are the units listed or otherwise marketable for a mark-to-market election?</li>
            <li>What statements will I receive each year, and when?</li>
          </ul>
          <h3 className="font-heading font-semibold text-xl text-primary pt-4">Alternatives US persons often compare</h3>
          <p>
            Because most foreign funds are PFICs, many US-based NRIs get Indian exposure through US-listed India ETFs or US-domiciled India funds, which are not PFICs, and keep GIFT City for deposits rather than funds. Others accept PFIC reporting for a specific strategy they cannot get elsewhere. The right answer depends on the amount, the holding period and how much the extra filing costs you each year.
          </p>
          <p className="text-sm italic pt-2">
            This article is educational only and is not tax or investment advice. PFIC rules are complex and fact-specific — always consult a qualified US tax professional about your own situation.
          </p>
        </div>
      
    ),
  },
];

export const getArticle = (slug?: string) => articles.find((a) => a.slug === slug);
