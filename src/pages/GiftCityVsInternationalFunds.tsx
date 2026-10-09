import { Link } from "react-router-dom";
import { GuidePage, h2, h3, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";
import { RouteDiagram } from "@/components/Diagrams";

const faqs: Faq[] = [
  { q: "Why do some international mutual funds stop accepting money?", a: "SEBI caps how much the Indian mutual fund industry can invest overseas: USD 7 billion in total, with a limit for each fund house. When a fund house nears its limit it pauses fresh lump sums and new SIPs in its international schemes until headroom returns." },
  { q: "Are GIFT City funds subject to the USD 7 billion limit?", a: "No. GIFT City funds are regulated by IFSCA, not SEBI, and invest from the IFSC. The SEBI overseas limit for domestic mutual funds does not apply to them. The investor's own LRS limit still applies to resident Indians." },
  { q: "Which is better for a resident Indian?", a: "Neither is better in general. An international fund of funds is simpler, takes rupees, allows small SIPs and has no TCS, but may be closed to new money. A GIFT City fund is in dollars, has higher minimums and involves LRS and TCS, but is not affected by the SEBI cap. Your amount, horizon and tax position decide which suits you." },
  { q: "Do NRIs have the same choice?", a: "NRIs can usually invest in both. Many use GIFT City funds because they can invest and redeem in dollars from an overseas account without converting to rupees." },
];

const GiftCityVsInternationalFunds = () => (
  <GuidePage
    path="/gift-city-vs-international-mutual-funds"
    headline="GIFT City Funds vs International Mutual Funds: Which Route Abroad?"
    seoTitle="GIFT City Fund vs International Mutual Fund (2026 Comparison)"
    description="GIFT City funds vs Indian international mutual funds: the SEBI USD 7 billion cap, currency, minimums, SIPs, LRS and TCS, side by side."
    crumb="GIFT City vs International Mutual Funds"
    datePublished="2026-10-08"
    faqs={faqs}
    sources={["sebi", "ifsca", "rbiLrs", "incomeTax"]}
  >
    <div className="space-y-4">
      <p className={p}>
        <strong className="text-primary">The short answer.</strong> Both let an Indian investor own shares outside India. An <em>international mutual fund</em> is a SEBI-regulated rupee scheme that invests abroad, often through an overseas fund (a fund of funds). A <em>GIFT City outbound fund</em> is an IFSCA-regulated scheme, usually in US Dollars, that you invest in directly. The biggest practical difference: international mutual funds share a SEBI overseas limit and sometimes stop taking money; GIFT City funds do not share that limit.
      </p>
    </div>

    <h2 className={h2}>Two routes to the same markets</h2>
    <RouteDiagram
      caption="Route A stays in rupees and inside the SEBI overseas limit. Route B goes through LRS into a dollar fund in GIFT IFSC."
      from={[
        { label: "A: International mutual fund", sub: "Pay in rupees, SEBI-regulated, subject to the USD 7 billion industry cap", tone: "plain" },
        { label: "B: GIFT City outbound fund", sub: "Pay in USD (residents via LRS), IFSCA-regulated", tone: "teal" },
      ]}
      via={{ label: "Overseas fund or securities", sub: "US, global or regional equities and bonds", tone: "ink" }}
      to={[{ label: "Same underlying markets", sub: "What differs is the wrapper: currency, limits, tax and minimums", tone: "amber" }]}
    />

    <h2 className={h2}>Side by side</h2>
    <div className="overflow-x-auto">
      <table className={table}>
        <thead><tr><th className={th}></th><th className={th}>International mutual fund / FoF</th><th className={th}>GIFT City outbound fund</th></tr></thead>
        <tbody>
          <tr><td className={th}>Regulator</td><td className={td}>SEBI</td><td className={td}>IFSCA</td></tr>
          <tr><td className={th}>Currency you invest in</td><td className={td}>Rupees</td><td className={td}>Usually US Dollars</td></tr>
          <tr><td className={th}>Overseas investment cap</td><td className={td}>Shares the industry limit of USD 7 billion, with a limit per fund house; may pause inflows</td><td className={td}>Not subject to the SEBI cap</td></tr>
          <tr><td className={th}>How a resident pays</td><td className={td}>Normal rupee payment, SIP by auto-debit</td><td className={td}>Remittance under LRS (USD 250,000 a year limit)</td></tr>
          <tr><td className={th}>TCS for residents</td><td className={td}>None</td><td className={td}>20% on LRS remittances above ₹10 lakh a year (creditable)</td></tr>
          <tr><td className={th}>Minimum</td><td className={td}>Often ₹100 to ₹5,000</td><td className={td}>Set by each scheme, commonly a few thousand USD</td></tr>
          <tr><td className={th}>SIP</td><td className={td}>Widely available</td><td className={td}>Only some schemes</td></tr>
          <tr><td className={th}>Redemption paid in</td><td className={td}>Rupees to your Indian account</td><td className={td}>USD; residents must bring it back or reinvest within RBI timelines</td></tr>
          <tr><td className={th}>Tax</td><td className={td}>Indian capital gains rules for non-equity funds</td><td className={td}>Depends on the fund structure and the investor's residence; see <Link to="/taxation" className={a}>Taxation</Link></td></tr>
        </tbody>
      </table>
    </div>

    <h2 className={h2}>When each route tends to fit</h2>
    <h3 className={h3}>International mutual funds tend to fit when</h3>
    <ul className={ul}>
      <li>You want to invest small amounts monthly in rupees.</li>
      <li>You do not want to use your LRS limit or deal with TCS.</li>
      <li>The scheme you want is currently accepting money.</li>
    </ul>
    <h3 className={h3}>GIFT City funds tend to fit when</h3>
    <ul className={ul}>
      <li>You are investing a larger lump sum and want to hold it in dollars.</li>
      <li>The international funds you looked at have paused inflows.</li>
      <li>You are an NRI investing from abroad and want to stay in foreign currency.</li>
    </ul>
    <p className={p + " mt-4"}>
      These are general patterns, not a recommendation. Also compare with <Link to="/gift-city-us-stocks-etfs" className={a}>US stocks and ETFs through GIFT City</Link>, and read the <Link to="/gift-city-funds-risks" className={a}>risks</Link> before deciding.
    </p>
  </GuidePage>
);

export default GiftCityVsInternationalFunds;
