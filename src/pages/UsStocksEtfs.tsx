import { Link } from "react-router-dom";
import { GuidePage, h2, h3, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";
import { FlowSteps } from "@/components/Diagrams";

const faqs: Faq[] = [
  { q: "What is a GIFT City ETF?", a: "The term is used for two things: exchange-traded funds launched under IFSCA rules and listed on the IFSC exchanges (NSE IX and India INX), and US-listed ETFs that Indian investors buy through brokers based in GIFT IFSC. The second is far more common today." },
  { q: "Can I buy US stocks and ETFs through GIFT City?", a: "Yes. IFSCA-registered broker-dealers in GIFT IFSC offer access to US-listed stocks and ETFs, and the IFSC exchanges have offered receipts on selected US stocks. Residents invest under LRS; eligible NRIs can also use these platforms." },
  { q: "Is buying US ETFs through GIFT City the same as a GIFT City fund?", a: "No. With an ETF or stock you choose and hold the securities yourself through a broker. A GIFT City fund is a pooled scheme run by a Fund Management Entity. The costs, tax and paperwork differ." },
  { q: "Do I pay TCS when buying US stocks through a GIFT City broker?", a: "Yes, if you are a resident Indian. The money leaves India under LRS, so the ₹10 lakh threshold and 20% TCS above it apply in the same way as for any overseas investment." },
  { q: "What is US estate tax and why does it matter?", a: "US-situated assets such as shares of US companies and US-domiciled ETFs held directly by a non-US person can be subject to US estate tax on death above a small exemption of USD 60,000. Holding through a non-US fund changes this. It is worth discussing with a tax adviser if your US holdings are large." },
];

const UsStocksEtfs = () => (
  <GuidePage
    path="/gift-city-us-stocks-etfs"
    headline="GIFT City ETFs and US Stocks: How Investing Through GIFT City Works"
    seoTitle="GIFT City ETFs & US Stocks: How to Invest, Tax, Costs (2026)"
    description="GIFT City ETFs and US stocks: how residents and NRIs invest through IFSC brokers, LRS and TCS, dividend withholding and US estate tax."
    crumb="GIFT City ETFs and US Stocks"
    datePublished="2026-10-08"
    faqs={faqs}
    sources={["ifsca", "ifscaDirectory", "rbiLrs", "incomeTax"]}
  >
    <p className={p}>
      <strong className="text-primary">The short answer.</strong> GIFT City is now a route not only into pooled funds but also into individual US-listed stocks and ETFs. IFSCA-registered broker-dealers in GIFT IFSC let investors open a dollar account, fund it (residents under LRS) and buy US securities, often in fractions. It is a do-it-yourself route: you pick the investments, and you handle the tax reporting.
    </p>

    <h2 className={h2}>Two meanings of "GIFT City ETF"</h2>
    <div className="grid md:grid-cols-2 gap-4">
      <div className="rounded-2xl border border-teal bg-teal/10 p-5">
        <p className="font-heading font-semibold text-primary mb-2">ETFs listed in GIFT IFSC</p>
        <p className="font-body text-sm text-foreground-muted">IFSCA's fund management rules allow exchange-traded funds to be set up in GIFT IFSC and listed on its exchanges, NSE IX and India INX. The choice is still small; check the exchanges' websites for what is listed and how liquid it is.</p>
      </div>
      <div className="rounded-2xl border border-brass bg-brass/10 p-5">
        <p className="font-heading font-semibold text-primary mb-2">US ETFs bought through a GIFT City broker</p>
        <p className="font-body text-sm text-foreground-muted">IFSCA-registered broker-dealers in GIFT IFSC give access to thousands of US-listed stocks and ETFs. This is what most people mean today, and the rest of this page explains how it works.</p>
      </div>
    </div>

    <h2 className={h2}>How it works for a resident Indian</h2>
    <FlowSteps
      caption="The broker and its account sit in GIFT IFSC; the securities are listed in the US."
      highlight={2}
      steps={[
        { title: "Open an account with an IFSC broker", sub: "Online KYC; check its IFSCA registration" },
        { title: "Remit under LRS", sub: "Rupees converted to USD; TCS above ₹10 lakh" },
        { title: "Buy US stocks or ETFs", sub: "Whole or fractional units" },
        { title: "Receive dividends in USD", sub: "US tax withheld at source" },
        { title: "Report in your ITR", sub: "Schedule FA and foreign income" },
      ]}
    />

    <h2 className={h2}>US ETFs via GIFT City vs a GIFT City fund vs an international mutual fund</h2>
    <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto">
      <table className={table}>
        <thead><tr><th className={th}></th><th className={th}>US ETFs via IFSC broker</th><th className={th}>GIFT City outbound fund</th><th className={th}>Indian international MF</th></tr></thead>
        <tbody>
          <tr><td className={th}>Who chooses holdings</td><td className={td}>You</td><td className={td}>Fund manager</td><td className={td}>Fund manager</td></tr>
          <tr><td className={th}>Currency</td><td className={td}>USD</td><td className={td}>USD</td><td className={td}>INR</td></tr>
          <tr><td className={th}>Minimum</td><td className={td}>Can be very small (fractional)</td><td className={td}>Set by scheme</td><td className={td}>Small</td></tr>
          <tr><td className={th}>LRS / TCS (residents)</td><td className={td}>Yes</td><td className={td}>Yes</td><td className={td}>No</td></tr>
          <tr><td className={th}>US dividend withholding</td><td className={td}>Applies to you directly</td><td className={td}>Handled inside the fund</td><td className={td}>Handled inside the fund</td></tr>
          <tr><td className={th}>US estate tax exposure</td><td className={td}>Possible on large holdings</td><td className={td}>Depends on fund domicile</td><td className={td}>Generally not direct</td></tr>
          <tr><td className={th}>Indian tax reporting</td><td className={td}>Schedule FA, each holding</td><td className={td}>Depends on structure</td><td className={td}>Normal capital gains</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className={h2}>Tax points to know</h2>
    <h3 className={h3}>Dividends</h3>
    <p className={p}>
      US companies and ETFs withhold US tax on dividends paid to non-US investors. Under the India–US tax treaty the rate for Indian residents who file Form W-8BEN is 25%. The dividend is taxable in India at your slab rate, and you can usually claim credit for the US tax (Form 67 must be filed).
    </p>
    <h3 className={h3}>Capital gains</h3>
    <p className={p}>
      The US generally does not tax capital gains of non-resident aliens on shares. In India, foreign shares held for more than 24 months are long-term and taxed at 12.5%; shorter holdings are taxed at your slab rate. Rules change, so confirm with a chartered accountant.
    </p>
    <h3 className={h3}>Reporting</h3>
    <p className={p}>
      Resident and ordinarily resident taxpayers must report foreign assets in Schedule FA of the income tax return every year, even if nothing was sold. Missing this can attract heavy penalties under the Black Money Act.
    </p>

    <h2 className={h2}>Before you open an account</h2>
    <ul className={ul}>
      <li>Confirm the broker is registered with IFSCA as a broker-dealer in the <a href="https://ifsca.gov.in/DirectoryList" target="_blank" rel="noopener noreferrer" className={a}>IFSCA Directory</a>.</li>
      <li>Ask about every cost: brokerage, currency conversion margin, remittance charges and withdrawal fees. "Zero account fee" is not the same as zero cost.</li>
      <li>Check who holds your securities (the custodian) and what happens if the broker closes.</li>
      <li>Decide whether you want to choose securities yourself or prefer a managed <Link to="/gift-city-fund-list" className={a}>GIFT City fund</Link>.</li>
    </ul>
  </GuidePage>
);

export default UsStocksEtfs;
