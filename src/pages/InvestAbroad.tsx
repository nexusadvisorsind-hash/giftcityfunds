import { Link } from "react-router-dom";
import { GuidePage, h2, h3, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";
import { FlowSteps } from "@/components/Diagrams";
import { LOW_MIN } from "@/data/funds";

const OUTBOUND = LOW_MIN.filter((f) => f.direction === "Outbound" && f.residents);

const faqs: Faq[] = [
  { q: "How can I invest abroad from India?", a: "Resident Indians have four main routes: Indian international mutual funds and fund of funds in rupees; international ETFs listed in India; US stocks and ETFs bought directly under LRS, including through GIFT City brokers; and outbound GIFT City funds bought in dollars under LRS." },
  { q: "How much money can I invest abroad from India?", a: "Under RBI's Liberalised Remittance Scheme, a resident individual can send up to USD 250,000 a financial year abroad, including for investment. Indian international mutual funds do not use your LRS limit, because the fund invests overseas, not you." },
  { q: "What are the LRS investment options for resident Indians?", a: "Under LRS you can buy foreign shares and ETFs through a broker, invest in GIFT City funds and other overseas funds, and hold foreign currency deposits, including USD accounts at GIFT City IFSC Banking Units, within the USD 250,000 annual limit." },
  { q: "Do I pay TCS when I invest abroad?", a: "For LRS remittances other than education and medical, no TCS applies to the first ₹10 lakh in a financial year; above that, 20% TCS is collected. TCS is not a final tax: it is credited against your income tax or refunded." },
  { q: "Why are international mutual funds not accepting money?", a: "SEBI caps how much the Indian mutual fund industry can invest overseas, at USD 7 billion in total with a limit per fund house. With the limit used up, several fund houses, including Edelweiss, PGIM India and Franklin Templeton in July 2026, paused SIPs and lump sums in some international schemes." },
  { q: "Are GIFT City funds affected by the SEBI overseas limit?", a: "No. GIFT City funds are regulated by IFSCA, not SEBI, so the SEBI cap on domestic mutual funds does not apply. Your own LRS limit and TCS do apply." },
  { q: "How to invest in US stocks from India?", a: "Open an account with a broker that offers US stocks, either a foreign broker or an IFSCA-registered broker in GIFT City, send dollars under LRS, and buy shares or ETFs. Foreign shares held over 24 months are taxed in India at 12.5%, and you report them in Schedule FA each year." },
  { q: "What is the best way to invest abroad from India?", a: "There is no single best route. It depends on how much you invest, whether you want small monthly amounts, whether you prefer to pick stocks or use a fund, and how much paperwork you accept. The comparison table on this page sets the routes side by side." },
];

const InvestAbroad = () => (
  <GuidePage
    path="/invest-abroad-from-india"
    headline="How to Invest Abroad from India (2026): Four Routes Compared"
    seoTitle="How to Invest Abroad from India (2026): 4 Routes, LRS, TCS & Tax"
    description="Ways to invest abroad from India in 2026: international mutual funds (and why many are closed), India-listed global ETFs, US stocks under LRS, and GIFT City funds, compared."
    crumb="Invest Abroad from India"
    datePublished="2026-10-26"
    faqs={faqs}
    sources={["rbiLrs", "sebi", "incomeTax", "ifsca", "ifscaDirectory"]}
  >
    <p className={p}>
      <strong className="text-primary">The short answer.</strong> Resident Indians have four ways to invest abroad: <strong className="text-primary">international mutual funds</strong> in rupees, <strong className="text-primary">global ETFs listed in India</strong>, <strong className="text-primary">US stocks and ETFs bought directly</strong> under LRS, and <strong className="text-primary">GIFT City funds</strong> in dollars. In 2026 the first two are limited by a SEBI cap that has made many international funds stop taking new money, which is why the LRS routes, including GIFT City, are growing fast.
    </p>

    <h2 className={h2}>The four routes at a glance</h2>
    <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto">
      <table className={table}>
        <caption className="sr-only">Ways to invest abroad from India compared</caption>
        <thead>
          <tr><th className={th}></th><th className={th}>International mutual fund / FoF</th><th className={th}>Global ETF listed in India</th><th className={th}>US stocks and ETFs (LRS)</th><th className={th}>GIFT City fund (LRS)</th></tr>
        </thead>
        <tbody>
          <tr><th scope="row" className={th}>You pay in</th><td className={td}>Rupees</td><td className={td}>Rupees</td><td className={td}>US Dollars</td><td className={td}>US Dollars</td></tr>
          <tr><th scope="row" className={th}>Regulator</th><td className={td}>SEBI</td><td className={td}>SEBI</td><td className={td}>Foreign regulator, or IFSCA for GIFT City brokers</td><td className={td}>IFSCA</td></tr>
          <tr><th scope="row" className={th}>SEBI overseas cap</th><td className={td}>Yes; many schemes paused</td><td className={td}>Yes; can trade above NAV when units cannot be created</td><td className={td}>No</td><td className={td}>No</td></tr>
          <tr><th scope="row" className={th}>Uses your LRS limit, TCS above ₹10 lakh</th><td className={td}>No</td><td className={td}>No</td><td className={td}>Yes</td><td className={td}>Yes</td></tr>
          <tr><th scope="row" className={th}>Monthly SIP</th><td className={td}>Where the scheme is open</td><td className={td}>Buy on the exchange any time</td><td className={td}>Depends on the broker</td><td className={td}>No SIP; lump sums</td></tr>
          <tr><th scope="row" className={th}>Typical minimum</th><td className={td}>Small</td><td className={td}>One unit</td><td className={td}>Can be fractional</td><td className={td}>USD 500 to 5,000</td></tr>
          <tr><th scope="row" className={th}>Who picks the investments</th><td className={td}>Fund manager</td><td className={td}>Index</td><td className={td}>You</td><td className={td}>Fund manager or index</td></tr>
          <tr><th scope="row" className={th}>Schedule FA reporting</th><td className={td}>No</td><td className={td}>No</td><td className={td}>Yes, each holding</td><td className={td}>Yes</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className={h2}>Route 1: International mutual funds and fund of funds</h2>
    <p className={p}>
      An Indian fund house collects rupees and invests in foreign shares or foreign funds. It is the simplest route: no LRS, no TCS, no foreign account and small SIPs. The catch is SEBI's cap on overseas investment by the mutual fund industry, USD 7 billion in total with a limit per fund house. When a fund house reaches its limit it stops fresh money. In July 2026 Edelweiss, PGIM India and Franklin Templeton paused fresh SIPs and lump sums in some international schemes. Existing investments are not affected.
    </p>
    <p className={p + " mt-3"}>
      <strong className="text-primary">Tax for residents (FY 2026-27):</strong> for international funds and fund of funds that are not debt funds, gains on units held for more than 24 months are taxed at 12.5%; shorter holdings at your slab rate. Funds investing more than 65% in debt are taxed at slab rates. Confirm with the fund's tax reckoner. More: <Link to="/gift-city-vs-international-mutual-funds" className={a}>GIFT City vs international mutual funds</Link>.
    </p>

    <h2 className={h2}>Route 2: Global ETFs listed in India</h2>
    <p className={p}>
      Some Indian fund houses run ETFs on NSE and BSE that track foreign indices such as the Nasdaq 100 or S&P 500. You buy them like shares through your Indian demat account. They share the same SEBI overseas limits, so when new units cannot be created the ETF can trade at a premium to its NAV: you may pay more than the underlying shares are worth. Check the premium before you buy.
    </p>

    <h2 className={h2}>Route 3: US stocks and ETFs under LRS</h2>
    <p className={p}>
      You send dollars abroad under the Liberalised Remittance Scheme and buy US-listed shares or ETFs yourself, through a foreign broker or one of the new IFSCA-registered brokers in GIFT City. Mirae Asset Sharekhan went live in October 2026, Groww and Angel One are rolling out, and Zerodha and Upstox are approved. See <Link to="/gift-city-funds-zerodha-groww" className={a}>Zerodha, Groww and GIFT City</Link>.
    </p>
    <ul className={ul + " mt-3"}>
      <li>Foreign shares held more than 24 months are taxed in India at 12.5%; shorter holdings at your slab rate.</li>
      <li>US dividends have 25% US tax withheld for Indian residents who file Form W-8BEN; you claim credit in India using Form 67.</li>
      <li>US-domiciled shares and ETFs held directly can be exposed to US estate tax above USD 60,000 for non-US persons.</li>
      <li>Every holding goes in Schedule FA of your income tax return each year.</li>
    </ul>
    <p className={p + " mt-3"}>More: <Link to="/gift-city-us-stocks-etfs" className={a}>US stocks and ETFs via GIFT City</Link>.</p>

    <h2 className={h2}>Route 4: GIFT City outbound funds</h2>
    <p className={p}>
      An outbound GIFT City fund is a dollar fund regulated by IFSCA that invests in global markets. You invest under LRS, so TCS applies above ₹10 lakh a year, but the SEBI cap does not apply. There is no SIP; you invest lump sums. Funds open to resident Indians include:
    </p>
    <ul className={ul + " mt-3"}>
      {OUTBOUND.map((f) => (
        <li key={f.scheme}><strong className="text-primary">{f.scheme}</strong> ({f.house}): {f.minimum}.</li>
      ))}
    </ul>
    <p className={p + " mt-3"}>
      Listing is not a recommendation. Details and sources are on the <Link to="/gift-city-fund-list" className={a}>GIFT City fund list</Link>; see also <Link to="/gift-city-funds-for-resident-indians" className={a}>GIFT City for resident Indians</Link>.
    </p>

    <h2 className={h2}>LRS and TCS: the rules for routes 3 and 4</h2>
    <FlowSteps
      caption="TCS is a prepayment, not an extra tax: you claim it in your return."
      steps={[
        { title: "LRS limit", sub: "USD 250,000 a financial year" },
        { title: "Bank collects Form A2", sub: "And your PAN" },
        { title: "TCS above ₹10 lakh", sub: "20% on investment remittances" },
        { title: "Claim TCS back", sub: "In your income tax return" },
        { title: "Report every year", sub: "Schedule FA" },
      ]}
    />
    <p className={p + " mt-3"}>
      Work out the TCS with the <Link to="/insights/lrs-tcs-gift-city#calculator" className={a}>TCS calculator</Link>.
    </p>

    <h3 className={h3}>What each route suits</h3>
    <ul className={ul}>
      <li><strong className="text-primary">Small monthly amounts in rupees:</strong> an international fund or FoF, where one is open.</li>
      <li><strong className="text-primary">Picking individual companies:</strong> US stocks under LRS.</li>
      <li><strong className="text-primary">A managed dollar fund not limited by the SEBI cap:</strong> a GIFT City outbound fund.</li>
    </ul>
    <p className="font-body text-xs text-foreground-muted mt-4">
      For information only, not a recommendation. Tax rules change; confirm with a chartered accountant. As a Mutual Fund Distributor, Anup Vatyani may be empanelled with some of the fund houses mentioned.
    </p>
  </GuidePage>
);

export default InvestAbroad;
