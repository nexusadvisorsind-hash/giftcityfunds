import { Link } from "react-router-dom";
import { p, a, ul, h3 } from "@/components/GuidePage";
import { NriCountryPage } from "@/components/NriCountryPage";

const NriCanada = () => (
  <NriCountryPage
    code="ca"
    path="/gift-city-funds-for-canada-nris"
    name="Canada"
    short="Canada"
    headline="GIFT City Funds for Canada NRIs: Eligibility, T1135 and Tax (2026)"
    seoTitle="GIFT City Funds for Canada NRIs: Eligibility, T1135 & Canadian Tax"
    description="Can NRIs in Canada invest in GIFT City funds? Which funds exclude Canadian residents, capital gains at a 50% inclusion rate, Form T1135, offshore fund rules and documents."
    datePublished="2026-10-26"
    intro={<>Some GIFT City funds <strong className="text-primary">do not accept Canadian residents</strong>, so eligibility is the first check. Where a fund accepts you, Canada taxes your worldwide income, half of a capital gain is taxable, and foreign property costing more than CAD 100,000 must be reported on <strong className="text-primary">Form T1135</strong>. Canada's offshore fund rules can also apply, so take advice before investing.</>}
    facts={[
      ["Currency", "Canadian dollar; most GIFT City funds are in USD"],
      ["Canadian tax on your investment", "Yes, on worldwide income; 50% of capital gains is taxable"],
      ["Yearly reporting", "Form T1135 if foreign property cost exceeds CAD 100,000 at any time in the year"],
      ["LRS or TCS?", "No. Those apply only to resident Indians."],
      ["Main thing to check", "Whether the fund accepts Canadian residents"],
      ["Tax treaty with India", "Yes; credit for Indian tax is usually available"],
    ]}
    steps={[
      { title: "Check Canadian eligibility", sub: "Some funds say no" },
      { title: "Ask a Canadian tax adviser", sub: "Including section 94.1" },
      { title: "KYC with the fund house", sub: "Passport, address proof" },
      { title: "Transfer USD from Canada", sub: "Or CAD converted" },
      { title: "Keep records in CAD", sub: "For T1135 and gains" },
    ]}
    fundNote={<>Tata India Dynamic Equity Fund's website excludes US persons; its 2025 presentation also mentions Canada, so Canadian residents should confirm with Tata directly.</>}
    tax={
      <>
        <ul className={ul}>
          <li>Canadian residents are taxed on worldwide income. Distributions are taxable when received, and 50% of a capital gain is included in income. A proposed increase to two-thirds was cancelled in March 2025.</li>
          <li>If the total cost of your specified foreign property, including GIFT City fund units and foreign accounts, exceeds CAD 100,000 at any time in the year, you generally file Form T1135.</li>
          <li>India and Canada have a tax treaty; Indian tax on the same income can usually be credited.</li>
        </ul>
        <h3 className={h3}>Canada's offshore investment fund rule</h3>
        <p className={p}>
          Section 94.1 of the Income Tax Act can add a deemed amount to your income each year for an interest in a non-resident fund that mainly holds portfolio investments, if one of the main reasons for the investment is to pay significantly less Canadian tax. Whether it applies depends on the facts, so ask a Canadian tax adviser before investing.
        </p>
      </>
    }
    docs={[
      "Passport (and OCI card if you are a Canadian citizen of Indian origin)",
      "Canadian address proof",
      "PAN, if you have one",
      "Canadian SIN or tax number for CRS self-certification",
      "FATCA and CRS self-certification",
    ]}
    money={
      <p className={p}>
        Transfer US Dollars from a Canadian bank's USD account, or convert Canadian dollars through your bank. Your return in Canadian dollars depends on the fund's markets, USD/CAD and, for inbound funds, the rupee. Record the CAD cost of each purchase on the day you buy. See also <Link to="/gift-city-moving-country" className={a}>moving country</Link> if you may return to India.
      </p>
    }
    faqs={[
      { q: "Can NRIs in Canada invest in GIFT City funds?", a: "Only in funds that accept Canadian residents. Edelweiss Greater China Equity Fund and The Wealth Company IFSC FoF state that they do not, and Tata's material also mentions Canada. Confirm eligibility in the offer document before applying." },
      { q: "How are GIFT City funds taxed in Canada?", a: "Canadian residents are taxed on worldwide income: distributions when received, and 50% of capital gains. Section 94.1's offshore investment fund rule can sometimes add deemed income. Indian tax can usually be credited under the treaty." },
      { q: "Do I need to file T1135 for a GIFT City fund?", a: "Yes, if the total cost of your specified foreign property, including the fund units, exceeds CAD 100,000 at any time in the year." },
      { q: "Is there currency risk for Canadian investors?", a: "Yes. Most GIFT City funds are in US Dollars, so your return in Canadian dollars moves with USD/CAD, and for inbound funds also with the rupee." },
    ]}
    sources={["craT1135", "craCapitalGains", "canadaIta941", "incomeTax", "ifscaDirectory"]}
  />
);

export default NriCanada;
