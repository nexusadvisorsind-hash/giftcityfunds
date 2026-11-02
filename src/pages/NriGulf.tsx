import { Link } from "react-router-dom";
import { p, a, ul, h3, table, th, td } from "@/components/GuidePage";
import { NriCountryPage } from "@/components/NriCountryPage";

// Tax facts per PwC Worldwide Tax Summaries (Saudi Arabia reviewed 29 Jul 2026,
// Qatar 17 Sep 2026, Kuwait 22 Jul 2026, Bahrain 26 Jul 2026) and KPMG Oman
// (Royal Decree 56/2025). Re-check before changing.
const NriGulf = () => (
  <NriCountryPage
    code="gulf"
    path="/gift-city-funds-for-gulf-nris"
    name="Saudi Arabia, Qatar, Kuwait, Bahrain and Oman"
    short="Gulf"
    headline="GIFT City Funds for Gulf NRIs: Saudi Arabia, Qatar, Kuwait, Bahrain and Oman (2026)"
    seoTitle="GIFT City Funds for Gulf NRIs: Saudi, Qatar, Kuwait, Bahrain, Oman"
    description="How NRIs in Saudi Arabia, Qatar, Kuwait, Bahrain and Oman invest in GIFT City funds in US Dollars: local tax country by country, Oman's 2028 income tax, India's deemed-resident rule, documents."
    datePublished="2026-11-02"
    taxHeading="How Gulf countries tax GIFT City funds"
    intro={<>NRIs living in Saudi Arabia, Qatar, Kuwait, Bahrain or Oman can invest in GIFT City funds <strong className="text-primary">directly in US Dollars</strong> from a local bank account, with no LRS and no TCS. None of these countries currently taxes individuals on personal investment income, and most Gulf currencies are pegged to the dollar. Two things to watch: <strong className="text-primary">Oman's personal income tax from 2028</strong> for high earners, and India's <strong className="text-primary">deemed-resident rule</strong> if your Indian income is large. If you live in Dubai or Abu Dhabi, see the <Link to="/gift-city-funds-for-uae-nris" className={a}>UAE guide</Link>.</>}
    facts={[
      ["Countries covered", "Saudi Arabia, Qatar, Kuwait, Bahrain and Oman (UAE has its own guide)"],
      ["Local tax on personal investment income", "None in any of the five today; Oman introduces a 5% income tax from 1 January 2028 on gross income above OMR 42,000"],
      ["Currencies", "Saudi riyal, Qatari riyal, Bahraini dinar and Omani rial are pegged to the US Dollar; the Kuwaiti dinar is pegged to a basket of currencies"],
      ["Tax treaty with India", "Yes, with each of the five"],
      ["LRS or TCS?", "No. Those apply only to resident Indians sending money out of India."],
      ["Main thing to check", "India's deemed-resident rule if your Indian income exceeds ₹15 lakh"],
    ]}
    steps={[
      { title: "Choose a fund", sub: "Inbound (India) or outbound (global)" },
      { title: "Confirm eligibility", sub: "For your country of residence" },
      { title: "KYC with the fund house", sub: "Passport, Iqama or residence permit" },
      { title: "Transfer USD from the Gulf", sub: "Or local currency converted" },
      { title: "Units allotted", sub: "Track on the investor portal" },
    ]}
    fundNote={<>None of the fund houses we track publishes an exclusion for these five countries. Several offer documents exclude FATF-listed jurisdictions; check the current list for your country.</>}
    tax={
      <>
        <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto">
          <table className={table}>
            <caption className="sr-only">Tax on personal investment income in the Gulf, country by country</caption>
            <thead><tr><th className={th}>Country</th><th className={th}>Personal income tax</th><th className={th}>Investment income and gains</th><th className={th}>Currency</th></tr></thead>
            <tbody>
              <tr><th scope="row" className={th}>Saudi Arabia</th><td className={td}>No individual income tax scheme</td><td className={td}>Not taxed as personal income</td><td className={td}>Riyal, pegged to USD</td></tr>
              <tr><th scope="row" className={th}>Qatar</th><td className={td}>No tax on salaries; only qualifying Qatar-source income is taxable</td><td className={td}>Interest and gains on securities not taxed for individuals without a taxable activity in Qatar</td><td className={td}>Riyal, pegged to USD</td></tr>
              <tr><th scope="row" className={th}>Kuwait</th><td className={td}>No personal income tax regime</td><td className={td}>Not taxed</td><td className={td}>Dinar, pegged to a basket</td></tr>
              <tr><th scope="row" className={th}>Bahrain</th><td className={td}>No personal income tax regime</td><td className={td}>Not taxed</td><td className={td}>Dinar, pegged to USD</td></tr>
              <tr><th scope="row" className={th}>Oman</th><td className={td}>None today; 5% from 1 January 2028 on gross income above OMR 42,000</td><td className={td}>Treatment of foreign investment income under the new law awaits executive regulations</td><td className={td}>Rial, pegged to USD</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className={h3}>Oman's income tax from 2028</h3>
        <p className={p}>
          Royal Decree 56/2025 introduces a 5% personal income tax from 1 January 2028 on individuals whose annual gross income exceeds OMR 42,000 (about USD 109,000). Exemptions include a primary residence, and income earned outside Oman may get a one-time two-year exemption. Executive regulations will settle the detail, so Oman-based investors with high incomes should take advice before 2028.
        </p>
        <h3 className={h3}>The deemed-resident rule for Gulf NRIs</h3>
        <p className={p}>
          Under Section 6(1A) of India's Income-tax Act, an Indian citizen whose income other than foreign-source income exceeds ₹15 lakh is deemed resident in India if they are not liable to tax in any other country because of domicile or residence. Because these countries do not tax individuals' income, Gulf-based NRIs with substantial Indian income should check this every year. Deemed residents are treated as Resident but Not Ordinarily Resident (RNOR).
        </p>
        <ul className={ul + " mt-3"}>
          <li>India has tax treaties with Saudi Arabia, Qatar, Kuwait, Bahrain and Oman. A tax residency certificate from your country's tax authority is usually needed to rely on one.</li>
          <li>Rules change; confirm your position with a tax adviser in your country.</li>
        </ul>
      </>
    }
    docs={[
      "Passport (and OCI card if you are not an Indian citizen)",
      "Residence permit: Iqama (Saudi Arabia), QID (Qatar), Civil ID (Kuwait), CPR (Bahrain) or resident card (Oman)",
      "Local address proof, such as a utility bill or tenancy contract",
      "PAN, if you have one; some funds ask for it",
      "Tax residency certificate, if you want to rely on a tax treaty",
      "FATCA and CRS self-certification",
    ]}
    money={
      <p className={p}>
        Transfer US Dollars from your Gulf bank account to the fund's subscription account, or ask your bank to convert riyals or dinars. With currencies pegged to the dollar (Kuwait's to a basket), the conversion carries little exchange-rate risk; the risk is in the fund's markets and, for inbound funds, the rupee. Redemptions are paid in US Dollars to an account outside India. Compare with an <Link to="/insights/gift-city-fd-vs-nre-fcnr" className={a}>NRE or FCNR deposit</Link>.
      </p>
    }
    faqs={[
      { q: "Can NRIs in Saudi Arabia invest in GIFT City funds?", a: "Yes. NRIs living in Saudi Arabia can invest in GIFT City funds that accept Saudi residents, in US Dollars from a Saudi bank account, with their passport and Iqama for KYC. Saudi Arabia has no individual income tax scheme." },
      { q: "Can NRIs in Qatar invest in GIFT City funds?", a: "Yes, in funds that accept Qatar residents. Qatar does not tax salaries, and interest and gains on securities are not taxed for individuals who do not carry on a taxable activity in Qatar." },
      { q: "Can NRIs in Kuwait, Bahrain or Oman invest in GIFT City funds?", a: "Yes, in funds that accept residents of those countries. Kuwait and Bahrain have no personal income tax. Oman has none today but introduces a 5% tax from 1 January 2028 on gross income above OMR 42,000." },
      { q: "Can NRIs in the Middle East invest in GIFT City funds?", a: "Yes. NRIs across the Middle East (UAE, Saudi Arabia, Qatar, Kuwait, Bahrain and Oman) can invest in GIFT City funds that accept their country of residence, in US Dollars from a local bank account, without LRS or TCS. The UAE has its own guide; this page covers the other five Gulf countries." },
      { q: "Do Gulf NRIs pay tax on GIFT City funds?", a: "Not in Saudi Arabia, Qatar, Kuwait or Bahrain on personal investment income under current rules. On the Indian side, many GIFT City funds are structured so that non-residents bear little or no Indian tax; check the specific fund. Watch India's deemed-resident rule if your Indian income exceeds ₹15 lakh." },
      { q: "Which is better for Gulf NRIs, GIFT City funds or NRE deposits?", a: "They do different jobs. NRE and FCNR deposits are bank deposits; GIFT City funds are market-linked investments in US Dollars. Neither is better in general; it depends on your goals and risk. See our comparison of GIFT City FDs, NRE and FCNR." },
    ]}
    sources={["pwcSaudi", "pwcQatar", "pwcKuwait", "pwcBahrain", "kpmgOman", "itResidency", "incomeTax", "ifscaDirectory"]}
  />
);

export default NriGulf;
