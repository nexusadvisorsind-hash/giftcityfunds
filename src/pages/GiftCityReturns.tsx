import { Link } from "react-router-dom";
import { GuidePage, h2, h3, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";
import { BarChart, FlowSteps } from "@/components/Diagrams";

const faqs: Faq[] = [
  { q: "What returns do GIFT City funds give?", a: "There is no single figure. Each fund's return depends on what it holds, its costs and, for a US Dollar fund investing in India, how the rupee moves against the dollar. Most GIFT City funds are new, so their track records are short. Check each fund's latest factsheet on the fund house's website." },
  { q: "Where can I check a GIFT City fund's performance?", a: "On the fund house's own website: the NAV history, monthly factsheet and offer document. For a feeder fund, also look at the underlying Indian fund it invests in, which usually has a longer history." },
  { q: "Why doesn't this site show GIFT City fund returns or rankings?", a: "Short histories in a new market can mislead, and returns shown without context are not a sound basis for a decision. This site is educational and does not rank funds. It explains how to read performance so you can judge it yourself." },
  { q: "Do GIFT City funds give better returns than Indian mutual funds?", a: "Not necessarily. A feeder fund holding the same Indian portfolio has extra costs and currency effects, so in rupee terms it will usually trail the underlying fund slightly. Its purpose is holding the investment in dollars, not higher returns." },
  { q: "How does the rupee affect GIFT City fund returns?", a: "For a US Dollar fund investing in India, a weaker rupee reduces the dollar return and a stronger rupee adds to it. For a fund investing abroad, a resident Indian gains from a weaker rupee when converting back." },
];

const GiftCityReturns = () => (
  <GuidePage
    path="/gift-city-funds-returns"
    headline="GIFT City Funds Returns and Performance: How to Check and Compare"
    seoTitle="GIFT City Funds Returns & Performance: How to Check (2026)"
    description="How to check GIFT City fund returns and performance: where to find NAVs and factsheets, how the rupee and fees change your return, and how to review a fund fairly."
    crumb="Returns and Performance"
    datePublished="2026-10-16"
    faqs={faqs}
    sources={["ifscaDirectory", "ifsca", "amfi"]}
  >
    <p className={p}>
      <strong className="text-primary">The short answer.</strong> GIFT City funds do not have one "return". Each fund's performance depends on what it holds, its costs and, for a US Dollar fund investing in India, how the rupee moves against the dollar. Most of these funds are new, so this page does not list returns or rank funds. Instead it shows you where to find the numbers and how to read them properly.
    </p>

    <h2 className={h2}>Where to find a fund's performance</h2>
    <ul className={ul}>
      <li><strong className="text-primary">NAV history:</strong> on the fund house's GIFT City page. Links to each fund house are in the <Link to="/gift-city-fund-list" className={a}>GIFT City fund list</Link>.</li>
      <li><strong className="text-primary">Monthly factsheet:</strong> returns over set periods, against a benchmark, plus holdings and costs.</li>
      <li><strong className="text-primary">Offer document:</strong> fees, exit loads, the benchmark and the currency.</li>
      <li><strong className="text-primary">For a feeder fund:</strong> also check the underlying Indian fund it invests in, which usually has a much longer record. See <Link to="/gift-city-feeder-funds" className={a}>feeder funds</Link>.</li>
    </ul>

    <h2 className={h2}>Why the rupee changes your return</h2>
    <p className={p}>
      An inbound GIFT City fund is held in US Dollars but invests in India. Your dollar return is the Indian return adjusted for what the rupee did against the dollar. A simple illustration, not any fund's actual result:
    </p>
    <BarChart
      title="Illustration: Indian portfolio up 10% in rupees"
      caption="Dollar return = (1 + rupee return) × (1 + change in rupee's value against the dollar) − 1. Hypothetical figures, before costs."
      max={14}
      rows={[
        { label: "Rupee steady", value: 10, display: "10.0% in USD" },
        { label: "Rupee falls 3% against USD", value: 6.7, display: "6.7% in USD", tone: "amber" },
        { label: "Rupee rises 3% against USD", value: 13.3, display: "13.3% in USD" },
      ]}
    />

    <h2 className={h2}>What else affects the number you get</h2>
    <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto">
      <table className={table}>
        <caption className="sr-only">Factors that affect GIFT City fund returns</caption>
        <thead><tr><th className={th}>Factor</th><th className={th}>Why it matters</th></tr></thead>
        <tbody>
          <tr><td className={td}>Costs</td><td className={td}>A feeder fund adds its own fee on top of the underlying fund's fee.</td></tr>
          <tr><td className={td}>Currency</td><td className={td}>The rupee–dollar movement, as above.</td></tr>
          <tr><td className={td}>Timing</td><td className={td}>Units are allotted at the NAV when your money arrives; transfers take days.</td></tr>
          <tr><td className={td}>Tax</td><td className={td}>In India and in your country of residence. See <Link to="/taxation" className={a}>taxation</Link>.</td></tr>
          <tr><td className={td}>TCS (residents)</td><td className={td}>Not a cost if you claim it back, but it ties up cash. See the <Link to="/insights/lrs-tcs-gift-city#calculator" className={a}>TCS calculator</Link>.</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className={h2}>How to review a GIFT City fund fairly</h2>
    <FlowSteps
      caption="Five checks before you compare any two funds."
      steps={[
        { title: "Same currency", sub: "Compare USD with USD" },
        { title: "Same period", sub: "And at least a few years if available" },
        { title: "Against its benchmark", sub: "Not against a different market" },
        { title: "After all costs", sub: "Including feeder layers" },
        { title: "After your tax", sub: "Where you live" },
      ]}
    />
    <h3 className={h3}>Red flags</h3>
    <ul className={ul}>
      <li>Returns quoted for a period shorter than a year, or without a benchmark.</li>
      <li>A rupee return presented as if it were a dollar return.</li>
      <li>Anyone promising or guaranteeing returns. Mutual fund investments are subject to market risks.</li>
    </ul>
    <p className={p + " mt-4"}>
      Related: <Link to="/gift-city-funds-risks" className={a}>risks of GIFT City funds</Link>, <Link to="/gift-city-funds-pros-and-cons" className={a}>pros and cons</Link>, <Link to="/gift-city-funds-vs-mutual-funds" className={a}>GIFT City funds vs mutual funds</Link>.
    </p>
  </GuidePage>
);

export default GiftCityReturns;
