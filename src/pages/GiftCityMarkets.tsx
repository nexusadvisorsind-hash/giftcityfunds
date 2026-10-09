import { Link } from "react-router-dom";
import { GuidePage, h2, h3, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";
import { FlowSteps } from "@/components/Diagrams";

const faqs: Faq[] = [
  { q: "Is retail trading allowed in GIFT City?", a: "Retail trading in GIFT City is open to NRIs and foreign individuals through IFSC brokers. Resident Indian individuals can buy permitted securities such as shares and ETFs under LRS, but generally cannot trade derivatives." },
  { q: "What are GIFT Nifty futures and other derivative trading in GIFT City?", a: "GIFT Nifty futures are US Dollar contracts on the Nifty 50 index. NSE IX and India INX also list other index, stock and currency derivatives. Derivatives are leveraged and can lose more than the money you put in." },
  { q: "What is NSEIX in GIFT City?", a: "NSEIX, or NSE IX, is NSE International Exchange, the National Stock Exchange's exchange in GIFT IFSC. It is where GIFT Nifty trades." },
  { q: "What is the India International Bullion Exchange (IIBX), the GIFT City bullion exchange?", a: "The India International Bullion Exchange (IIBX) in GIFT City opened in July 2022 for trading gold and silver with physical delivery. Participation is limited to qualified jewellers, banks and other approved participants." },
  { q: "What is GIFT Nifty?", a: "GIFT Nifty is the name for Nifty 50 index futures traded on NSE International Exchange (NSE IX) in GIFT City. It replaced SGX Nifty: trading moved from Singapore to GIFT City on 3 July 2023 under an arrangement between NSE and Singapore Exchange." },
  { q: "GIFT Nifty vs SGX Nifty: what is the difference?", a: "They are the same idea in a different place. SGX Nifty traded on the Singapore Exchange; since 3 July 2023 the contracts trade on NSE IX in GIFT City as GIFT Nifty, and SGX Nifty no longer trades." },
  { q: "What are GIFT Nifty trading hours?", a: "GIFT Nifty trades in two sessions, roughly 6:30 am to 3:40 pm and 4:35 pm to 2:45 am IST, about 21 hours a day. Check the NSE IX website for the current timings and holiday calendar." },
  { q: "Where can I see GIFT Nifty live?", a: "We do not show live prices. NSE IX publishes GIFT Nifty quotes on its website, and most market data sites show it. People often use it as an early signal for how Indian markets may open." },
  { q: "How to trade in GIFT Nifty: who is allowed?", a: "NRIs and foreign investors can trade GIFT Nifty through an IFSCA-registered broker that is a member of NSE IX. Resident Indian individuals generally cannot, because the Liberalised Remittance Scheme does not permit remittances for margin trading or derivatives. This page explains the rules; it does not recommend trading." },
  { q: "Which stock exchanges are in GIFT City?", a: "Two: NSE International Exchange (NSE IX, sometimes written NSEIX) and India International Exchange (India INX), part of the BSE group. GIFT City also hosts the India International Bullion Exchange (IIBX)." },
  { q: "Is there a list of brokers in GIFT City?", a: "Yes. Broker-dealers in GIFT IFSC must be registered with IFSCA, and the IFSCA Directory of regulated entities lists them. The exchanges also publish lists of their trading members." },
];

const GiftCityMarkets = () => (
  <GuidePage
    path="/gift-city-markets-gift-nifty"
    headline="GIFT Nifty and GIFT City Stock Exchanges Explained: NSE IX, India INX and IIBX"
    seoTitle="GIFT Nifty, NSE IX, India INX & IIBX: GIFT City Markets (2026)"
    description="GIFT Nifty explained: vs SGX Nifty, trading hours, who can trade, and the GIFT City exchanges NSE IX, India INX and IIBX. Facts only, no tips."
    crumb="GIFT Nifty and GIFT City Exchanges"
    datePublished="2026-10-09"
    faqs={faqs}
    sources={["ifsca", "ifscaDirectory", "rbiLrs"]}
  >
    <p className={p}>
      <strong className="text-primary">The short answer.</strong> GIFT City has two international stock exchanges, NSE IX and India INX, and a bullion exchange, IIBX. The best-known product is <strong className="text-primary">GIFT Nifty</strong>: US Dollar Nifty 50 futures that took over from SGX Nifty in July 2023 and trade for about 21 hours a day. These markets are mainly for NRIs, foreign investors and institutions; resident individuals face limits. This page is about how the markets work. It is not a recommendation to trade, and derivatives can lose more than you put in.
    </p>

    <h2 className={h2}>The GIFT City exchanges at a glance</h2>
    <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto">
      <table className={table}>
        <thead><tr><th className={th}>Exchange</th><th className={th}>Group</th><th className={th}>What trades there</th></tr></thead>
        <tbody>
          <tr><td className={td}>NSE International Exchange (NSE IX)</td><td className={td}>NSE</td><td className={td}>GIFT Nifty and other index futures, stock derivatives, bonds, receipts on selected US stocks</td></tr>
          <tr><td className={td}>India International Exchange (India INX)</td><td className={td}>BSE</td><td className={td}>Derivatives, bonds and debt listings; started operations in 2017</td></tr>
          <tr><td className={td}>India International Bullion Exchange (IIBX)</td><td className={td}>Promoted by Indian market institutions</td><td className={td}>Gold and silver, with physical delivery; opened in July 2022 for qualified jewellers and other approved participants</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className={h2}>GIFT Nifty in one picture</h2>
    <FlowSteps
      caption="SGX Nifty moved to GIFT City in 2023 and was renamed GIFT Nifty."
      highlight={2}
      steps={[
        { title: "Until July 2023", sub: "SGX Nifty traded in Singapore" },
        { title: "3 July 2023", sub: "Trading moves to NSE IX in GIFT City" },
        { title: "GIFT Nifty", sub: "USD Nifty 50 futures, about 21 hours a day" },
        { title: "Used as a signal", sub: "For where Indian markets may open" },
      ]}
    />

    <h3 className={h3}>GIFT Nifty trading hours (IST)</h3>
    <ul className={ul}>
      <li>Session I: about 6:30 am to 3:40 pm</li>
      <li>Session II: about 4:35 pm to 2:45 am the next day</li>
    </ul>

    <h2 className={h2}>Who can trade in GIFT City markets</h2>
    <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto">
      <table className={table}>
        <thead><tr><th className={th}>Investor</th><th className={th}>GIFT Nifty and other derivatives</th><th className={th}>Shares, ETFs and bonds</th></tr></thead>
        <tbody>
          <tr><td className={td}>NRIs and OCIs</td><td className={td}>Yes, through an IFSC broker</td><td className={td}>Yes</td></tr>
          <tr><td className={td}>Foreign investors</td><td className={td}>Yes, subject to the broker's KYC</td><td className={td}>Yes</td></tr>
          <tr><td className={td}>Resident Indian individuals</td><td className={td}>Generally no; LRS does not allow margin trading or derivatives</td><td className={td}>Yes, under LRS, within permitted products</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className={h2}>Opening a GIFT City trading account</h2>
    <ul className={ul}>
      <li>Pick a broker-dealer registered with IFSCA and a member of the exchange you need; check it in the <a href="https://ifsca.gov.in/DirectoryList" target="_blank" rel="noopener noreferrer" className={a}>IFSCA Directory</a>.</li>
      <li>Complete the broker's KYC (passport, PAN where needed, address and bank proof).</li>
      <li>Fund the account in US Dollars: NRIs from abroad, residents under LRS for permitted products.</li>
    </ul>
    <p className={p + " mt-4"}>
      If you want market exposure without trading, compare <Link to="/gift-city-fund-list" className={a}>GIFT City funds</Link> and <Link to="/gift-city-us-stocks-etfs" className={a}>ETFs and US stocks through GIFT City</Link>.
    </p>
  </GuidePage>
);

export default GiftCityMarkets;
