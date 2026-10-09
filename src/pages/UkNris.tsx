import { Link } from "react-router-dom";
import { GuidePage, h2, h3, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";
import { RouteDiagram } from "@/components/Diagrams";

const faqs: Faq[] = [
  { q: "Can UK-resident NRIs invest in GIFT City funds?", a: "Yes, where the fund accepts UK residents. You invest in US Dollars (or sterling converted to dollars) from a UK bank account. LRS and TCS do not apply because the money does not leave India." },
  { q: "What is an offshore 'reporting fund' and why does it matter?", a: "Under HMRC's offshore fund rules, a gain on a fund without UK reporting fund status is normally taxed as income (an offshore income gain) rather than as a capital gain. A gain on a reporting fund is normally a capital gain. Ask the fund house whether the GIFT City fund has UK reporting status before you invest." },
  { q: "Can I hold a GIFT City fund in an ISA or SIPP?", a: "Generally no. GIFT City funds are not usually available through UK ISA or pension platforms, so they sit outside those tax wrappers." },
  { q: "Does the new UK FIG regime help?", a: "From 6 April 2025, people in their first four years of UK tax residence after at least ten years of non-residence can claim relief on eligible foreign income and gains under the foreign income and gains (FIG) regime. Whether it applies depends on your history; check with a UK tax adviser." },
];

const UkNris = () => (
  <GuidePage
    path="/gift-city-funds-for-uk-nris"
    headline="GIFT City Funds for NRIs in the UK: Tax Rules to Check First"
    seoTitle="GIFT City Funds for UK NRIs: Reporting Fund Status & Tax (2026)"
    description="UK-based NRIs and GIFT City funds: investing in USD, HMRC offshore fund rules (reporting vs non-reporting), the 4-year FIG regime, ISAs, currency risk and the India–UK treaty."
    crumb="GIFT City Funds for UK NRIs"
    datePublished="2026-10-09"
    faqs={faqs}
    sources={["hmrcOffshore", "ukFig", "incomeTax", "ifscaDirectory"]}
  >
    <p className={p}>
      <strong className="text-primary">The short answer.</strong> UK-resident NRIs can usually invest in GIFT City funds in dollars without LRS or TCS. The deciding question is UK tax: if the fund does not have HMRC <em>reporting fund</em> status, gains are normally taxed as income at your marginal rate rather than as capital gains. Check that before anything else.
    </p>

    <h2 className={h2}>The one UK question that changes the outcome</h2>
    <RouteDiagram
      caption="Same fund, very different UK tax, depending on its HMRC status."
      from={[{ label: "You sell or redeem your units", sub: "Gain measured in sterling", tone: "plain" }]}
      via={{ label: "Does the fund have UK reporting fund status?", sub: "Ask the fund house; HMRC publishes a list", tone: "ink" }}
      to={[
        { label: "Yes: capital gain", sub: "Capital gains tax rates and annual exempt amount", tone: "teal" },
        { label: "No: offshore income gain", sub: "Taxed as income at your marginal rate", tone: "amber" },
      ]}
    />

    <h2 className={h2}>Other UK points</h2>
    <div className="overflow-x-auto">
      <table className={table}>
        <thead><tr><th className={th}>Topic</th><th className={th}>What to know</th></tr></thead>
        <tbody>
          <tr><td className={td}>Currency</td><td className={td}>Funds are usually in USD, so a sterling investor carries USD/GBP currency risk.</td></tr>
          <tr><td className={td}>Tax wrappers</td><td className={td}>GIFT City funds are not usually ISA- or SIPP-eligible.</td></tr>
          <tr><td className={td}>New arrivals</td><td className={td}>The 4-year FIG regime (from 6 April 2025) may give relief on foreign income and gains.</td></tr>
          <tr><td className={td}>Treaty</td><td className={td}>India and the UK have a tax treaty for income taxed in both countries.</td></tr>
          <tr><td className={td}>Indian side</td><td className={td}>Depends on the fund structure. See <Link to="/taxation" className={a}>Taxation</Link>.</td></tr>
        </tbody>
      </table>
    </div>

    <h3 className={h3}>Questions to ask the fund house</h3>
    <ul className={ul}>
      <li>Does the fund accept UK-resident investors?</li>
      <li>Does it have, or plan to apply for, UK reporting fund status?</li>
      <li>Will it provide the annual reports UK investors need for their return?</li>
    </ul>
    <p className={p + " mt-4"}>
      See all countries in <Link to="/gift-city-funds-nri-tax-by-country" className={a}>GIFT City funds for NRIs by country</Link>, or <Link to="/gift-city-route-checker" className={a}>check your route</Link>.
    </p>
  </GuidePage>
);

export default UkNris;
