import { Link } from "react-router-dom";
import { p, a, ul, h3, table, th, td } from "@/components/GuidePage";
import { NriCountryPage } from "@/components/NriCountryPage";

const NriUk = () => (
  <NriCountryPage
    code="uk"
    path="/gift-city-funds-for-uk-nris"
    name="the UK"
    short="UK"
    headline="GIFT City Funds for UK NRIs: Reporting Fund Status, Tax and How to Invest (2026)"
    seoTitle="GIFT City Funds for UK NRIs: UK Tax, Reporting Status & How to Invest"
    description="How UK-resident NRIs invest in GIFT City funds: offshore fund rules and reporting fund status, CGT rates, the 4-year FIG regime, which funds accept UK residents, and documents."
    datePublished="2026-10-26"
    intro={<>UK-resident NRIs can invest in GIFT City funds in US Dollars from a UK bank account, with no LRS or TCS. The question that decides your UK tax is the fund's <strong className="text-primary">HMRC reporting fund status</strong>: without it, gains are normally taxed as income at your marginal rate rather than as capital gains. Ask the fund house before you invest.</>}
    facts={[
      ["Currency", "Pound sterling; most GIFT City funds are in USD, so you carry USD/GBP risk"],
      ["UK tax on your investment", "Yes, on worldwide income and gains for UK residents (subject to the FIG regime)"],
      ["Tax treaty with India", "Yes"],
      ["LRS or TCS?", "No. Those apply only to resident Indians."],
      ["Main thing to check", "Whether the fund has UK reporting fund status"],
      ["ISA or SIPP?", "GIFT City funds are not usually ISA- or SIPP-eligible"],
    ]}
    steps={[
      { title: "Choose a fund", sub: "Inbound (India) or outbound (global)" },
      { title: "Ask about reporting status", sub: "And UK eligibility" },
      { title: "KYC with the fund house", sub: "Passport, UK address proof" },
      { title: "Transfer USD from the UK", sub: "Or GBP converted" },
      { title: "Keep records for HMRC", sub: "Cost and dates in GBP" },
    ]}
    fundNote={<>HDFC's inbound GIFT City funds state that their lower-minimum Class AR units are not available to UK investors; the Class A minimum is above USD 150,000.</>}
    tax={
      <>
        <p className={p}>
          GIFT City funds are offshore funds for UK tax. HMRC's offshore fund rules split them into two groups:
        </p>
        <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto mt-4">
          <table className={table}>
            <caption className="sr-only">UK tax on reporting and non-reporting offshore funds</caption>
            <thead><tr><th className={th}></th><th className={th}>Reporting fund</th><th className={th}>Non-reporting fund</th></tr></thead>
            <tbody>
              <tr><th scope="row" className={th}>Gain on sale</th><td className={td}>Capital gain: 18% or 24% for individuals in 2026-27, after the £3,000 annual exempt amount</td><td className={td}>Offshore income gain, taxed as income at your marginal rate</td></tr>
              <tr><th scope="row" className={th}>Income while you hold</th><td className={td}>Your share of reported income is taxable each year, even if not paid out</td><td className={td}>Distributions taxable when paid</td></tr>
              <tr><th scope="row" className={th}>What to ask the fund</th><td className={td} colSpan={2}>Does the scheme have, or will it apply for, UK reporting fund status?</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className={h3}>The 4-year FIG regime</h3>
        <p className={p}>
          From 6 April 2025, the UK replaced the remittance basis with the 4-year foreign income and gains (FIG) regime. People arriving in the UK after at least ten consecutive years of non-residence can claim relief on eligible foreign income and gains for their first four tax years. Others are taxed on worldwide income and gains.
        </p>
        <ul className={ul + " mt-3"}>
          <li>India and the UK have a tax treaty; any Indian tax can usually be credited against UK tax on the same income.</li>
          <li>Keep cost, dates and exchange rates in sterling for each purchase and sale.</li>
        </ul>
      </>
    }
    docs={[
      "Passport (and OCI card if you are a British citizen of Indian origin)",
      "UK address proof, such as a council tax bill or bank statement",
      "PAN, if you have one",
      "UK National Insurance number or tax reference, for CRS self-certification",
      "FATCA and CRS self-certification",
    ]}
    money={
      <p className={p}>
        Transfer US Dollars from a UK bank or currency account to the fund's subscription account, or convert sterling through your bank or a regulated currency provider. Your return in sterling depends on the fund's markets and on USD/GBP, and for inbound funds also on the rupee. Redemptions come back in US Dollars. If you might move back to India, read <Link to="/gift-city-moving-country" className={a}>moving country with GIFT City investments</Link>.
      </p>
    }
    faqs={[
      { q: "How are GIFT City funds taxed in the UK?", a: "As offshore funds. If the fund has HMRC reporting fund status, gains are normally capital gains (18% or 24% in 2026-27 after the £3,000 allowance) and reported income is taxed yearly. Without it, gains are normally offshore income gains, taxed as income at your marginal rate." },
      { q: "Do GIFT City funds have UK reporting fund status?", a: "It varies by fund, and many new funds do not. Ask the fund house whether the scheme has, or will apply for, reporting fund status before you invest, because it changes how your gains are taxed." },
      { q: "Can UK residents invest in GIFT City funds?", a: "Yes, in funds that accept UK residents. Most NRI funds on our list do; HDFC's inbound funds state that their lower-minimum Class AR units are not available to UK investors. Confirm eligibility in the offer document." },
      { q: "Does the FIG regime apply to GIFT City funds?", a: "It can. Since 6 April 2025, people who arrive in the UK after at least ten years of non-residence can claim relief on eligible foreign income and gains for four tax years. After that, or if you do not qualify, worldwide income and gains are taxable." },
      { q: "Can I hold a GIFT City fund in an ISA or SIPP?", a: "Not usually. GIFT City funds are offshore funds that are not normally eligible for ISAs or SIPPs; check with your provider." },
    ]}
    sources={["hmrcOffshore", "hmrcCgt", "ukFig", "incomeTax", "ifscaDirectory"]}
  />
);

export default NriUk;
