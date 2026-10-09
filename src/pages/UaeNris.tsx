import { Link } from "react-router-dom";
import { GuidePage, h2, h3, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";
import { FlowSteps, RouteDiagram } from "@/components/Diagrams";

const faqs: Faq[] = [
  { q: "Can UAE-based NRIs invest in GIFT City funds?", a: "Yes. NRIs living in the UAE can invest in GIFT City funds by sending US Dollars (or dirhams converted to dollars) from a UAE bank account. LRS and TCS do not apply, because the money is not leaving India." },
  { q: "Do UAE residents pay tax on GIFT City fund gains?", a: "The UAE does not levy personal income tax on individuals' investment income. The India-side treatment of the fund and any tax inside the fund is therefore what matters most. Confirm your position with a tax adviser." },
  { q: "What is the 'deemed resident' rule and why does it matter in the UAE?", a: "Indian tax law can treat an Indian citizen as resident in India if their Indian-source income exceeds ₹15 lakh in a year and they are not liable to tax in any other country because of residence or domicile. Because the UAE has no personal income tax, UAE-based NRIs with substantial Indian income should check this rule with a chartered accountant." },
  { q: "Do I need a UAE Tax Residency Certificate?", a: "To claim benefits under the India–UAE tax treaty you generally need a Tax Residency Certificate, issued in the UAE by the Federal Tax Authority. Fund houses may ask for it during onboarding." },
  { q: "Should I keep money in NRE deposits or a GIFT City fund?", a: "They do different jobs. NRE deposits are rupee bank deposits with tax-free interest in India; a GIFT City fund is a market-linked investment, usually in dollars. Compare them on currency, risk and liquidity." },
];

const UaeNris = () => (
  <GuidePage
    path="/gift-city-funds-for-uae-nris"
    headline="GIFT City Funds for NRIs in the UAE and Gulf: A Practical Guide"
    seoTitle="GIFT City Funds for UAE NRIs (Dubai, Abu Dhabi): 2026 Guide"
    description="How NRIs in Dubai, Abu Dhabi and the Gulf can invest in GIFT City funds in US Dollars: no LRS or TCS, UAE tax position, the ₹15 lakh deemed-resident rule, TRC and documents."
    crumb="GIFT City Funds for UAE NRIs"
    datePublished="2026-10-09"
    faqs={faqs}
    sources={["uaeTax", "incomeTax", "ifscaDirectory", "rbiLrs"]}
  >
    <p className={p}>
      <strong className="text-primary">The short answer.</strong> For an NRI in Dubai, Abu Dhabi or elsewhere in the Gulf, a GIFT City fund is a way to invest in Indian or global markets <em>in US Dollars</em>, from a UAE bank account, without converting to rupees. The dirham is pegged to the dollar, so dollar funds carry little currency risk for UAE earners. The UAE does not tax individuals on investment income, so the India-side rules decide most of the outcome.
    </p>

    <h2 className={h2}>How money flows from the UAE</h2>
    <RouteDiagram
      caption="No LRS, no TCS: the money starts outside India."
      from={[{ label: "Your UAE bank account", sub: "AED converted to USD (AED is pegged to USD)", tone: "teal" }]}
      via={{ label: "GIFT City fund", sub: "USD account in GIFT IFSC, IFSCA-regulated", tone: "ink" }}
      to={[
        { label: "Inbound: Indian markets", sub: "Indian equity and debt, held in USD terms", tone: "amber" },
        { label: "Redemption in USD", sub: "Paid back to your UAE or other foreign account" },
      ]}
    />

    <h2 className={h2}>Why UAE NRIs look at GIFT City</h2>
    <ul className={ul}>
      <li><strong className="text-primary">No rupee round-trip.</strong> Invest and redeem in dollars; your dirham savings stay dollar-linked.</li>
      <li><strong className="text-primary">No LRS or TCS.</strong> Those apply to residents sending money out of India, not to you.</li>
      <li><strong className="text-primary">Indian regulation, Indian time zone.</strong> The fund is regulated by IFSCA and run by Indian fund houses you may already know.</li>
      <li><strong className="text-primary">Planning a return to India.</strong> Holdings can stay in dollars after you return. See <Link to="/insights/returning-to-india-gift-city-investments" className={a}>returning to India</Link>.</li>
    </ul>

    <h2 className={h2}>The tax picture</h2>
    <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto">
      <table className={table}>
        <thead><tr><th className={th}>Question</th><th className={th}>Position in brief</th></tr></thead>
        <tbody>
          <tr><td className={td}>UAE tax on your gains</td><td className={td}>The UAE does not levy personal income tax on individuals' investment income.</td></tr>
          <tr><td className={td}>Indian tax</td><td className={td}>Depends on the fund structure; some income of specified IFSC funds gets concessions. See <Link to="/taxation" className={a}>Taxation</Link>.</td></tr>
          <tr><td className={td}>Treaty</td><td className={td}>India and the UAE have a tax treaty; a UAE Tax Residency Certificate is usually needed to rely on it.</td></tr>
          <tr><td className={td}>Your residential status in India</td><td className={td}>Depends on days spent in India and, for high Indian income, the deemed-resident rule below.</td></tr>
        </tbody>
      </table>
    </div>

    <h3 className={h3}>Watch the deemed-resident rule</h3>
    <p className={p}>
      An Indian citizen whose income from Indian sources exceeds ₹15 lakh in a year, and who is not liable to tax in any other country by reason of residence or domicile, can be treated as resident in India (as "resident but not ordinarily resident"). Because the UAE does not tax individuals' income, UAE-based NRIs with rental, interest or business income in India above this level should check their status with a chartered accountant every year.
    </p>

    <h2 className={h2}>Getting started from the UAE</h2>
    <FlowSteps
      caption="Typical sequence; each fund house sets its own requirements."
      steps={[
        { title: "Choose inbound or outbound", sub: "India exposure or global" },
        { title: "Gather documents", sub: "Passport, visa/Emirates ID, PAN, UAE address proof" },
        { title: "Get a TRC if needed", sub: "From the UAE Federal Tax Authority" },
        { title: "Complete fund KYC", sub: "Often online" },
        { title: "Transfer USD", sub: "From your UAE bank account" },
      ]}
    />
    <p className={p}>
      Compare routes with <Link to="/insights/gift-city-vs-nre-nro" className={a}>NRE/NRO investing</Link> and <Link to="/insights/gift-city-fd-vs-nre-fcnr" className={a}>GIFT City FDs vs NRE and FCNR</Link>, or browse the <Link to="/gift-city-fund-list" className={a}>GIFT City fund list</Link>.
    </p>
  </GuidePage>
);

export default UaeNris;
