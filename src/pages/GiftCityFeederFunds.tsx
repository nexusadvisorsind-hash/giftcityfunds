import { Link } from "react-router-dom";
import { GuidePage, h2, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";
import { RouteDiagram } from "@/components/Diagrams";

const faqs: Faq[] = [
  { q: "What is a GIFT City feeder fund?", a: "A feeder fund in GIFT City is a scheme, usually in US Dollars, that puts most of its money into one other fund: an Indian mutual fund scheme (inbound) or an overseas fund (outbound). It lets investors reach that fund through GIFT IFSC." },
  { q: "Feeder fund vs direct FPI: what is the difference?", a: "A feeder fund invests in another fund. A fund registered as a foreign portfolio investor (FPI) invests directly in Indian shares and bonds and builds its own portfolio. Feeders are simpler to run and mirror a known strategy; direct FPI funds have one less layer of cost and more flexibility." },
  { q: "Do feeder funds cost more?", a: "Usually there are two layers of cost: the feeder's own expenses and those of the fund it invests in. Ask for the total expense, including the underlying fund." },
  { q: "Who invests in GIFT City feeder funds?", a: "Inbound feeders mainly suit NRIs who want Indian mutual fund strategies in US Dollars. Outbound feeders suit resident Indians (under LRS) and NRIs who want a global fund through an Indian fund house." },
];

const GiftCityFeederFunds = () => (
  <GuidePage
    path="/gift-city-feeder-funds"
    headline="GIFT City Feeder Funds: How They Work, and Feeder vs Direct FPI"
    seoTitle="GIFT City Feeder Funds Explained: Inbound, Outbound, vs FPI"
    description="How GIFT City feeder funds work: inbound and outbound feeders, layered costs, and how a feeder differs from a fund investing directly as an FPI."
    crumb="GIFT City Feeder Funds"
    datePublished="2026-10-09"
    faqs={faqs}
    sources={["ifsca", "ifscaDirectory", "sebi"]}
  >
    <p className={p}>
      <strong className="text-primary">The short answer.</strong> A GIFT City feeder fund is a dollar fund that invests almost all its money in one other fund. <em>Inbound</em> feeders invest in an Indian mutual fund scheme, so NRIs can hold a familiar Indian strategy in US Dollars. <em>Outbound</em> feeders invest in a global fund. They are simple to understand but carry two layers of cost.
    </p>

    <h2 className={h2}>Inbound feeder vs direct FPI fund</h2>
    <RouteDiagram
      caption="Both reach Indian markets; the feeder goes through another fund."
      from={[{ label: "NRI investor", sub: "USD from abroad", tone: "plain" }]}
      via={{ label: "GIFT City fund", sub: "USD scheme in GIFT IFSC", tone: "ink" }}
      to={[
        { label: "Feeder route", sub: "Invests in an Indian mutual fund scheme, which holds the shares", tone: "amber" },
        { label: "Direct FPI route", sub: "Registered as an FPI, holds Indian shares and bonds itself", tone: "teal" },
      ]}
    />

    <h2 className={h2}>Feeder fund vs direct FPI, side by side</h2>
    <div className="overflow-x-auto">
      <table className={table}>
        <thead><tr><th className={th}></th><th className={th}>Feeder fund</th><th className={th}>Direct FPI fund</th></tr></thead>
        <tbody>
          <tr><td className={th}>What it holds</td><td className={td}>Units of one underlying fund</td><td className={td}>Its own portfolio of securities</td></tr>
          <tr><td className={th}>Cost layers</td><td className={td}>Two (feeder and underlying fund)</td><td className={td}>One</td></tr>
          <tr><td className={th}>Strategy</td><td className={td}>Mirrors a known fund</td><td className={td}>Managed directly</td></tr>
          <tr><td className={th}>Regulatory set-up</td><td className={td}>IFSCA scheme investing in a fund</td><td className={td}>IFSCA scheme plus SEBI FPI registration</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className={h2}>Before you choose a feeder fund</h2>
    <ul className={ul}>
      <li>Which fund does it feed into, and can you see that fund's factsheet?</li>
      <li>What is the total expense, including the underlying fund?</li>
      <li>Does the feeder hold any cash or hedge currency?</li>
      <li>How long do redemptions take, given two funds are involved?</li>
    </ul>
    <p className={p + " mt-4"}>
      See also <Link to="/gift-city-family-office-fpi" className={a}>FPIs in GIFT City</Link>, <Link to="/gift-city-fund-list" className={a}>the fund list</Link> and <Link to="/funds-explained" className={a}>all fund types</Link>.
    </p>
  </GuidePage>
);

export default GiftCityFeederFunds;
