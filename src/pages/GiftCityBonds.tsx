import { Link } from "react-router-dom";
import { GuidePage, h2, h3, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";
import { BarChart } from "@/components/Diagrams";

const faqs: Faq[] = [
  { q: "Can I buy bonds in GIFT City?", a: "Yes. Bonds and other debt securities are listed on the two GIFT City exchanges, India INX and NSE IX. Individuals usually buy through a broker registered in GIFT IFSC. Many bonds are issued in large denominations meant for institutions, so a debt fund can be a more practical route for smaller amounts." },
  { q: "How big is the GIFT City bond market?", a: "According to IFSCA's debt market report for 2025-26, cumulative debt listings on IFSC exchanges reached USD 70.31 billion by 31 March 2026, with USD 49.20 billion outstanding. ESG-labelled bonds made up USD 16.80 billion of cumulative listings." },
  { q: "What kinds of bonds are listed in GIFT City?", a: "Mainly foreign currency (usually US Dollar) bonds of Indian companies, banks and public sector issuers; masala (rupee-denominated) bonds; and green, social and sustainability-linked bonds." },
  { q: "Can NRIs invest in GIFT City bonds?", a: "Yes, subject to KYC with an IFSC broker and the bond's own terms, including minimum denomination and any restriction on who may buy it. NRIs invest with money held abroad, so LRS does not apply." },
  { q: "Can resident Indians buy GIFT City bonds?", a: "Residents invest in GIFT IFSC under LRS. LRS rules restrict residents from buying certain foreign currency bonds issued by Indian companies, even when they are listed in GIFT City. Check with your bank and broker before you buy a particular bond." },
  { q: "How are GIFT City bonds taxed for non-residents?", a: "India gives some concessions to non-residents, for example on transfers of certain bonds on IFSC exchanges and on withholding tax on interest from certain IFSC-listed bonds, each with conditions. Your country of residence taxes the interest and gains under its own rules." },
];

const GiftCityBonds = () => (
  <GuidePage
    path="/gift-city-bonds"
    headline="GIFT City Bonds: Dollar Bonds on India INX and NSE IX Explained"
    seoTitle="GIFT City Bonds for NRIs: USD, Masala & Green Bonds (2026)"
    description="What bonds are listed in GIFT City, on India INX and NSE IX: USD bonds of Indian issuers, masala and green bonds, who can buy, minimums and tax points."
    crumb="GIFT City Bonds"
    datePublished="2026-10-09"
    faqs={faqs}
    sources={["indiaInx", "nseIx", "ifsca", "rbiLrs", "incomeTax"]}
  >
    <p className={p}>
      <strong className="text-primary">The short answer.</strong> GIFT City's two exchanges, India INX and NSE IX, list bonds worth tens of billions of dollars. Most are US Dollar bonds issued by Indian banks, companies and public sector firms, plus masala (rupee) bonds and green bonds. NRIs can buy them through an IFSC broker, but many are issued in large lots for institutions. For smaller amounts, a GIFT City debt fund is often the practical route.
    </p>

    <h2 className={h2}>The market in numbers</h2>
    <BarChart
      title="GIFT IFSC debt market, as of 31 March 2026 (USD billion)"
      caption="Source: IFSCA, Debt Market at IFSC: Landscape, Trends and Outlook 2025–26."
      max={75}
      rows={[
        { label: "Cumulative debt listings", value: 70.31, display: "USD 70.31 bn" },
        { label: "Outstanding debt securities", value: 49.2, display: "USD 49.20 bn" },
        { label: "Cumulative ESG-labelled listings", value: 16.8, display: "USD 16.80 bn", tone: "amber" },
        { label: "New listings in 2025–26 (30 issues)", value: 5.2, display: "USD 5.20 bn" },
      ]}
    />

    <h2 className={h2}>Types of bonds you will find</h2>
    <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto">
      <table className={table}>
        <thead><tr><th className={th}>Type</th><th className={th}>Currency</th><th className={th}>What to know</th></tr></thead>
        <tbody>
          <tr><td className={td}>Foreign currency bonds of Indian issuers</td><td className={td}>Usually USD</td><td className={td}>Banks, companies and public sector firms raise dollars; often large minimum lots</td></tr>
          <tr><td className={td}>Masala bonds</td><td className={td}>Rupee-denominated, settled in foreign currency</td><td className={td}>You carry the rupee's currency risk</td></tr>
          <tr><td className={td}>Green, social and sustainability bonds</td><td className={td}>USD or rupee</td><td className={td}>Fund specific projects; a smaller, less liquid pool</td></tr>
          <tr><td className={td}>GIFT City debt funds</td><td className={td}>Usually USD</td><td className={td}>Hold many bonds; smaller minimums, but charges apply and there is no fixed maturity</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className={h2}>Who can buy, and how</h2>
    <ul className={ul}>
      <li><strong className="text-primary">NRIs and OCIs:</strong> open an account with a broker registered in GIFT IFSC, complete KYC and pay in dollars from an overseas account. No LRS or TCS.</li>
      <li><strong className="text-primary">Resident Indians:</strong> invest under LRS (USD 250,000 a year; 20% TCS above ₹10 lakh). LRS restricts buying certain foreign currency bonds of Indian companies, so confirm a specific bond with your bank first. See <Link to="/insights/lrs-tcs-gift-city" className={a}>LRS and TCS</Link>.</li>
      <li><strong className="text-primary">Everyone:</strong> check the bond's minimum denomination, credit rating, liquidity on the exchange and any restriction on who may hold it (some bonds are for institutional or non-US investors only).</li>
    </ul>

    <h3 className={h3}>Before you buy a bond</h3>
    <ul className={ul}>
      <li>Who is the issuer, what is its rating, and does the bond rank ahead of or behind other debt (for example, bank AT-1 bonds can be written down)?</li>
      <li>How often does it trade on India INX or NSE IX, and how wide is the price spread?</li>
      <li>How is the interest taxed in India and in your country of residence?</li>
    </ul>
    <p className={p + " mt-4"}>
      Related: <Link to="/gift-city-markets-gift-nifty" className={a}>GIFT City exchanges and GIFT Nifty</Link>, <Link to="/gift-city-us-stocks-etfs" className={a}>US stocks and ETFs via GIFT City</Link>, <Link to="/insights/gift-city-fd-vs-nre-fcnr" className={a}>GIFT City FDs</Link>.
    </p>
    <p className="font-body text-xs text-foreground-muted mt-4">For information only. This page does not recommend any bond or issuer.</p>
  </GuidePage>
);

export default GiftCityBonds;
