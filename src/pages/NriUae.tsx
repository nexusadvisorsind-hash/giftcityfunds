import { Link } from "react-router-dom";
import { p, a, ul, h3 } from "@/components/GuidePage";
import { NriCountryPage } from "@/components/NriCountryPage";

const NriUae = () => (
  <NriCountryPage
    code="uae"
    path="/gift-city-funds-for-uae-nris"
    name="the UAE"
    short="UAE"
    headline="GIFT City Funds for UAE NRIs: How to Invest from Dubai and Abu Dhabi (2026)"
    seoTitle="GIFT City Funds for UAE NRIs: Invest from Dubai, Tax & Funds (2026)"
    description="How UAE NRIs invest in GIFT City funds from Dubai or Abu Dhabi: which funds accept UAE residents, no UAE personal tax, the deemed-resident rule, TRC and documents."
    datePublished="2026-10-26"
    intro={<>NRIs living in the UAE can invest in GIFT City funds <strong className="text-primary">directly in US Dollars</strong> from a UAE bank account, with no LRS and no TCS. The dirham is pegged to the dollar and the UAE does not levy personal income tax on individuals' investment income, so the India-side rules decide most of the outcome. The one rule to watch is India's <strong className="text-primary">deemed-resident test</strong> for people with large Indian income.</>}
    facts={[
      ["Currency", "UAE dirham, pegged at AED 3.6725 to USD 1. Most GIFT City funds are in USD."],
      ["UAE tax on your investment income", "No personal income tax for individuals"],
      ["Tax treaty with India", "Yes. A UAE Tax Residency Certificate (TRC) is usually needed to rely on it."],
      ["LRS or TCS?", "No. Those apply only to resident Indians sending money out of India."],
      ["Main thing to check", "India's deemed-resident rule if your Indian income exceeds ₹15 lakh"],
      ["Lowest fund minimum", "USD 500 for some retail funds"],
    ]}
    steps={[
      { title: "Choose a fund", sub: "Inbound (India) or outbound (global)" },
      { title: "Confirm UAE eligibility", sub: "In the offer document" },
      { title: "KYC with the fund house", sub: "Passport, Emirates ID, address proof" },
      { title: "Transfer USD from the UAE", sub: "Or AED converted by your bank" },
      { title: "Units allotted", sub: "Track on the investor portal" },
    ]}
    fundNote={<>None of the fund houses we track publishes an exclusion for UAE residents.</>}
    tax={
      <>
        <ul className={ul}>
          <li>The UAE does not levy personal income tax on individuals' investment income, so gains and income from a GIFT City fund are generally not taxed in the UAE when you hold them personally.</li>
          <li>UAE corporate tax, introduced in 2023, is aimed at businesses. If you invest through a company or as part of a business, take advice.</li>
          <li>India and the UAE have a tax treaty. To rely on it you usually need a UAE Tax Residency Certificate from the Federal Tax Authority.</li>
        </ul>
        <h3 className={h3}>Getting a UAE Tax Residency Certificate</h3>
        <p className={p}>
          Individuals apply through the FTA's EmaraTax portal once they meet the residency criteria: for example, 183 days or more in the UAE, or 90 to 182 days with UAE employment, business or a permanent home. The FTA lists an Emirates ID or passport with an entry and exit report among the documents, and charges a fee.
        </p>
        <h3 className={h3}>The deemed-resident rule for UAE NRIs</h3>
        <p className={p}>
          Under Section 6(1A) of India's Income-tax Act, an Indian citizen whose income other than foreign-source income exceeds ₹15 lakh is deemed resident in India if they are not liable to tax in any other country because of domicile or residence. Because the UAE has no personal income tax, UAE-based NRIs with substantial Indian income should check this every year. Deemed residents are treated as Resident but Not Ordinarily Resident (RNOR).
        </p>
      </>
    }
    docs={[
      "Passport (and OCI card if you are not an Indian citizen)",
      "UAE residence visa or Emirates ID",
      "UAE address proof, such as a tenancy contract (Ejari) or utility bill",
      "PAN, if you have one; some funds ask for it",
      "UAE Tax Residency Certificate, if you want to rely on the India–UAE treaty",
      "FATCA and CRS self-certification",
    ]}
    money={
      <p className={p}>
        Transfer US Dollars from your UAE bank account to the fund's subscription account, or ask your bank to convert dirhams. Because the dirham is pegged, there is little AED/USD currency risk; the risk is in the fund's own markets and, for inbound funds, the rupee against the dollar. Redemptions are paid in US Dollars back to an account outside India. Compare with keeping money in an <Link to="/insights/gift-city-fd-vs-nre-fcnr" className={a}>NRE or FCNR deposit</Link>.
      </p>
    }
    faqs={[
      { q: "How to invest in GIFT City from the UAE?", a: "Choose a GIFT City fund that accepts UAE residents, complete the fund house's KYC with your passport, Emirates ID or visa and UAE address proof, and transfer US Dollars from your UAE bank account. No LRS or TCS applies to NRIs." },
      { q: "Do UAE NRIs pay tax on GIFT City funds?", a: "The UAE does not levy personal income tax on individuals' investment income. On the Indian side, many GIFT City funds are structured so that non-residents bear little or no Indian tax; check the specific fund. Watch India's deemed-resident rule if your Indian income exceeds ₹15 lakh." },
      { q: "Can I invest in GIFT City funds in dirhams?", a: "Most GIFT City funds take US Dollars. Your UAE bank can convert dirhams to dollars; because the dirham is pegged to the dollar, the conversion carries little exchange-rate risk." },
      { q: "Do I need a UAE Tax Residency Certificate to invest in GIFT City?", a: "Not usually to invest, but you may need one to claim benefits under the India–UAE tax treaty. Individuals apply to the Federal Tax Authority through EmaraTax once they meet the residency criteria." },
      { q: "What is the deemed-resident rule for UAE NRIs?", a: "An Indian citizen whose Indian income exceeds ₹15 lakh and who is not liable to tax in any other country can be deemed resident in India (as RNOR). Because the UAE has no personal income tax, UAE-based NRIs with large Indian income should check this each year." },
      { q: "Which GIFT City funds accept UAE residents?", a: "None of the fund houses we track publishes an exclusion for UAE residents, so most NRI funds on our fund list are open to you, from USD 500 for some retail schemes. Confirm eligibility in the offer document." },
    ]}
    sources={["uaeTax", "uaeTrc", "itResidency", "incomeTax", "ifscaDirectory"]}
  />
);

export default NriUae;
