import { Link } from "react-router-dom";
import { GuidePage, h2, h3, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";
import { FlowSteps } from "@/components/Diagrams";

const faqs: Faq[] = [
  { q: "What happens to my GIFT City investments if I move back to India?", a: "Under Section 6(4) of FEMA, a resident may keep foreign currency assets acquired while living outside India, so you can usually continue to hold them. Your Indian tax position changes as you become RNOR and then resident, and residents must report foreign holdings in Schedule FA. Tell the fund house about your new status." },
  { q: "I invested as a resident and am now moving abroad. Can I keep my GIFT City fund?", a: "Usually yes. Update your address, tax residency and FATCA/CRS details with the fund house, and check that the scheme accepts residents of your new country. From then on you invest from your overseas account, without LRS or TCS." },
  { q: "I am an NRI moving from one country to another. What changes?", a: "Mainly tax. Your new country's rules apply from the date you become resident there. Moving to the US brings PFIC rules; moving to the UK brings HMRC's offshore fund rules. Some schemes do not accept US or Canadian residents, so check eligibility before you move." },
  { q: "Do any countries tax me when I leave?", a: "Yes, some do. Canada generally treats you as having sold most of your assets when you stop being resident (departure tax), and Australia has a similar rule when you stop being an Australian resident, with an option to defer. Take advice before you move, not after." },
  { q: "Do I need to tell the fund house when I move?", a: "Yes. Update your residential status, address, tax identification number, bank account for redemptions and FATCA/CRS self-certification. Your status can change the tax deducted and whether you may stay invested." },
];

const GiftCityMovingCountry = () => (
  <GuidePage
    path="/gift-city-moving-country"
    headline="Moving Country? What Happens to Your GIFT City Investments"
    seoTitle="Moving Abroad or Back to India: Your GIFT City Investments"
    description="What happens to GIFT City funds when you return to India, move abroad or move between countries: FEMA 6(4), RNOR, KYC updates, PFIC and exit taxes."
    crumb="Moving Country"
    datePublished="2026-10-09"
    faqs={faqs}
    sources={["rbiFema", "incomeTax", "irs8621", "hmrcOffshore", "ifscaDirectory"]}
  >
    <p className={p}>
      <strong className="text-primary">The short answer.</strong> You can usually keep your GIFT City investments when you move, whether that is back to India, out of India or from one country to another. What changes is how they are taxed, what you must report and whether the scheme still accepts you. Update the fund house every time your residence changes.
    </p>

    <h2 className={h2}>Three moves, side by side</h2>
    <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto">
      <table className={table}>
        <thead><tr><th className={th}></th><th className={th}>NRI returning to India</th><th className={th}>Resident moving abroad</th><th className={th}>NRI moving between countries</th></tr></thead>
        <tbody>
          <tr><td className={th}>Can you keep the holding?</td><td className={td}>Usually yes (FEMA Section 6(4))</td><td className={td}>Usually yes, if the scheme accepts your new country</td><td className={td}>Usually yes, if the scheme accepts your new country</td></tr>
          <tr><td className={th}>New investments</td><td className={td}>Under LRS, with TCS above ₹10 lakh</td><td className={td}>From your overseas account; no LRS or TCS</td><td className={td}>From your overseas account</td></tr>
          <tr><td className={th}>Indian tax status</td><td className={td}>RNOR first, then resident</td><td className={td}>Non-resident once you meet the day-count tests</td><td className={td}>Stays non-resident</td></tr>
          <tr><td className={th}>Reporting</td><td className={td}>Schedule FA once resident</td><td className={td}>Your new country's foreign asset rules</td><td className={td}>Your new country's rules (FBAR and Form 8938 in the US; T1135 in Canada)</td></tr>
          <tr><td className={th}>Watch out for</td><td className={td}>Timing of sales during RNOR years</td><td className={td}>Eligibility in the new country; your bank account for redemptions</td><td className={td}>PFIC in the US; exit taxes in Canada and Australia</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className={h2}>Your checklist when you move</h2>
    <FlowSteps
      caption="Do these before or as soon as your residence changes."
      steps={[
        { title: "Get tax advice", sub: "In both the old and new country" },
        { title: "Check eligibility", sub: "Does the scheme accept your new country?" },
        { title: "Update KYC", sub: "Address, status, tax ID" },
        { title: "Update FATCA/CRS", sub: "New self-certification" },
        { title: "Change bank account", sub: "Where redemptions will be paid" },
      ]}
    />

    <h2 className={h2}>GIFT City investments after returning to India</h2>
    <p className={p}>
      FEMA Section 6(4) lets you keep foreign currency assets acquired while you were non-resident. For a few years you may be "resident but not ordinarily resident" (RNOR), when foreign income is generally not taxed in India; after that, your worldwide income is taxable and the holding goes in Schedule FA. Read the full guide: <Link to="/insights/returning-to-india-gift-city-investments" className={a}>returning to India with GIFT City investments</Link>.
    </p>

    <h2 className={h2}>Moving to another country</h2>
    <ul className={ul}>
      <li><strong className="text-primary">To the US:</strong> PFIC rules apply from the day you become a US person; a holding bought earlier can become a PFIC problem. Read <Link to="/insights/pfic-explained" className={a}>PFIC explained</Link> before you move.</li>
      <li><strong className="text-primary">To the UK:</strong> gains on a fund without UK reporting fund status are normally taxed as income. See <Link to="/gift-city-funds-for-nri#uk" className={a}>UK NRIs</Link>.</li>
      <li><strong className="text-primary">Leaving Canada or Australia:</strong> both can tax unrealised gains when you stop being resident. See <Link to="/gift-city-funds-for-nri#canada" className={a}>Canada</Link> and <Link to="/gift-city-funds-for-nri#australia" className={a}>Australia</Link>.</li>
      <li><strong className="text-primary">To the UAE or the Gulf:</strong> no personal income tax, but check India's deemed-resident rule if you have large Indian income. See <Link to="/gift-city-funds-for-nri#uae" className={a}>UAE NRIs</Link>.</li>
    </ul>

    <h3 className={h3}>Taking the money out instead?</h3>
    <p className={p}>
      See <Link to="/gift-city-redemption-repatriation" className={a}>redemption and repatriation</Link> for timelines and the 180-day rule for residents.
    </p>
  </GuidePage>
);

export default GiftCityMovingCountry;
