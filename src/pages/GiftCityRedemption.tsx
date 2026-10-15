import { Link } from "react-router-dom";
import { GuidePage, h2, h3, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";
import { FlowSteps, RouteDiagram } from "@/components/Diagrams";

const faqs: Faq[] = [
  { q: "How do I withdraw money from a GIFT City fund?", a: "Submit a redemption request to the fund house, online or on its form. Units are redeemed at the applicable NAV and the proceeds, usually in US Dollars, are paid to the bank account registered with the fund house. The scheme's offer document states the payment timeline." },
  { q: "How long does GIFT City fund redemption take?", a: "For open-ended retail schemes, proceeds usually arrive within a few business days of the redemption being processed; the offer document gives the exact period. Close-ended schemes, AIFs and PMS follow their own terms: AIFs may allow exits only at set windows or at maturity." },
  { q: "Can NRIs repatriate GIFT City redemption proceeds?", a: "Yes. NRIs invest from money held abroad, and proceeds are paid in foreign currency to their registered account, usually overseas. The USD 1 million a year limit that applies to repatriating money from an NRO account does not come into it." },
  { q: "Do resident Indians have to bring the money back to India?", a: "Under the LRS rules, money received abroad (such as redemption proceeds) must be brought back to India within 180 days unless it is reinvested. Many residents have proceeds paid straight to their Indian bank account. Check the current rule with your bank." },
  { q: "Is there an exit load on GIFT City funds?", a: "It depends on the scheme. Some retail schemes charge an exit load for early redemption; AIFs often have lock-ins of several years. Check the offer document before you invest." },
  { q: "Is tax deducted when I redeem?", a: "It depends on the fund's structure and your residential status. Gains are reported in your Indian return if you are resident, and in your country of residence if you are an NRI. Residents also show the holding in Schedule FA every year until it is sold." },
];

const GiftCityRedemption = () => (
  <GuidePage
    path="/gift-city-redemption-repatriation"
    headline="Withdrawing Money from GIFT City Funds: Redemption and Repatriation"
    seoTitle="GIFT City Fund Redemption & Repatriation: NRI and Resident Rules"
    description="How to redeem a GIFT City fund, how long it takes, where the dollars go, the 180-day rule for residents, exit loads and lock-ins, and tax on the way out."
    crumb="Redemption and Repatriation"
    datePublished="2026-10-09"
    faqs={faqs}
    sources={["rbiLrs", "ifsca", "ifscaDirectory", "incomeTax"]}
  >
    <p className={p}>
      <strong className="text-primary">The short answer.</strong> You ask the fund house to redeem, the units are sold at the applicable NAV, and the proceeds are paid in US Dollars to your registered bank account. NRIs usually receive the money abroad with no repatriation limit. Resident Indians who invested under LRS must bring the money back to India within 180 days unless they reinvest it.
    </p>

    <h2 className={h2}>Redemption in five steps</h2>
    <FlowSteps
      caption="Open-ended retail schemes; AIFs and PMS follow their own agreements."
      steps={[
        { title: "Check exit terms", sub: "Exit load, lock-in, cut-off time" },
        { title: "Submit request", sub: "Online or on the fund house's form" },
        { title: "NAV applied", sub: "Per the offer document" },
        { title: "USD paid out", sub: "To your registered account" },
        { title: "Report it", sub: "In your tax return" },
      ]}
    />

    <h2 className={h2}>Where the money goes</h2>
    <RouteDiagram
      caption="The registered bank account decides where proceeds land."
      from={[{ label: "GIFT City fund redeems units", sub: "Proceeds in USD", tone: "ink" }]}
      via={{ label: "Your registered bank account", sub: "Set at onboarding; change it with the fund house", tone: "plain" }}
      to={[
        { label: "NRI: overseas account", sub: "No NRO repatriation limit applies", tone: "teal" },
        { label: "Resident: Indian account", sub: "Or reinvest within 180 days", tone: "amber" },
      ]}
    />

    <h2 className={h2}>By type of product</h2>
    <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto">
      <table className={table}><caption className="sr-only">By type of product</caption>
        <thead><tr><th className={th}>Product</th><th className={th}>When you can exit</th><th className={th}>What to check</th></tr></thead>
        <tbody>
          <tr><td className={td}>Open-ended retail or feeder fund</td><td className={td}>Any dealing day</td><td className={td}>Exit load, cut-off time, payment timeline</td></tr>
          <tr><td className={td}>Close-ended scheme</td><td className={td}>At maturity, or by selling on an exchange if listed</td><td className={td}>Maturity date, listing and liquidity</td></tr>
          <tr><td className={td}>AIF (restricted scheme)</td><td className={td}>At set windows or maturity; often multi-year lock-in</td><td className={td}>Contribution agreement terms</td></tr>
          <tr><td className={td}>PMS</td><td className={td}>Under the PMS agreement</td><td className={td}>Exit fees and time to sell the portfolio</td></tr>
          <tr><td className={td}>IFSC bank deposit</td><td className={td}>At maturity; early withdrawal per bank terms</td><td className={td}>Premature withdrawal penalty</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className={h2}>Rules for resident Indians</h2>
    <ul className={ul}>
      <li><strong className="text-primary">180 days:</strong> under the LRS rules, money received abroad must be brought back to India within 180 days unless it is reinvested.</li>
      <li><strong className="text-primary">IFSC foreign currency account:</strong> since RBI's circular of 10 July 2024, residents may hold a foreign currency account in GIFT IFSC under LRS for permitted purposes. Ask your bank how long proceeds may stay there.</li>
      <li><strong className="text-primary">TCS:</strong> any TCS collected when you invested is credited against your income tax; it is not refunded on redemption. See the <Link to="/insights/lrs-tcs-gift-city#calculator" className={a}>TCS calculator</Link>.</li>
      <li><strong className="text-primary">Schedule FA:</strong> report the holding every year you held it, including the year of sale.</li>
    </ul>

    <h3 className={h3}>Common mistakes</h3>
    <ul className={ul}>
      <li>Changing banks or countries without updating the registered account with the fund house.</li>
      <li>Redeeming inside an exit-load period without checking the cost.</li>
      <li>For residents, leaving proceeds abroad beyond the permitted period.</li>
    </ul>
    <p className={p + " mt-4"}>
      Moving country? See <Link to="/gift-city-moving-country" className={a}>what happens to your GIFT City investments when you move</Link>. Related: <Link to="/how-to-invest" className={a}>how to invest</Link>, <Link to="/taxation" className={a}>taxation</Link>.
    </p>
  </GuidePage>
);

export default GiftCityRedemption;
