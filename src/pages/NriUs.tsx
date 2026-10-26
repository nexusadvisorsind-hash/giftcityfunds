import { Link } from "react-router-dom";
import { p, a, ul, h3, table, th, td } from "@/components/GuidePage";
import { NriCountryPage } from "@/components/NriCountryPage";

const NriUs = () => (
  <NriCountryPage
    code="us"
    path="/gift-city-funds-for-us-nris"
    name="the US"
    short="US"
    headline="GIFT City Funds for US NRIs and US Citizens: PFIC, Eligibility and Reporting (2026)"
    seoTitle="GIFT City Funds for US NRIs: PFIC, Form 8621, FBAR & Eligibility"
    description="Can US-based NRIs and US citizens invest in GIFT City funds? Which funds exclude US persons, PFIC and Form 8621, QEF and mark-to-market, FBAR and Form 8938."
    datePublished="2026-10-26"
    intro={<>Many GIFT City funds <strong className="text-primary">do not accept US persons</strong> at all, including US citizens and green card holders living anywhere. Where a fund does accept you, it will usually be a <strong className="text-primary">PFIC</strong> for US tax, which by default taxes gains harshly and needs Form 8621 every year. Check eligibility and PFIC treatment before anything else, and speak to a US tax adviser.</>}
    facts={[
      ["Who counts as a US person", "US citizens and green card holders wherever they live, and others who are US tax residents"],
      ["US tax on your investment", "Yes, on worldwide income; most foreign funds are PFICs"],
      ["Yearly forms", "Form 8621 for each PFIC; FBAR and Form 8938 above thresholds"],
      ["LRS or TCS?", "No. Those apply only to resident Indians."],
      ["Main thing to check", "Whether the fund accepts US persons, and whether it provides QEF information"],
      ["Tax treaty with India", "Yes; credit for Indian tax is usually available"],
    ]}
    steps={[
      { title: "Check US-person eligibility", sub: "Many funds say no" },
      { title: "Ask about PFIC and QEF", sub: "Annual Information Statement?" },
      { title: "Talk to a US tax adviser", sub: "Before you commit" },
      { title: "KYC including Form W-9", sub: "FATCA self-certification" },
      { title: "Report every year", sub: "Form 8621, FBAR, Form 8938" },
    ]}
    fundNote={<>For US persons, treat every fund on the list below as "ask first": offer documents often restrict US persons even where the fund's website does not say so.</>}
    tax={
      <>
        <p className={p}>
          A pooled fund based outside the US is usually a Passive Foreign Investment Company (PFIC). US persons who hold one file <strong className="text-primary">Form 8621</strong> each year, and the tax depends on which of three regimes applies:
        </p>
        <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto mt-4">
          <table className={table}>
            <caption className="sr-only">PFIC, QEF and mark-to-market: the three US tax regimes</caption>
            <thead><tr><th className={th}>Regime</th><th className={th}>How gains are taxed</th><th className={th}>What you need</th></tr></thead>
            <tbody>
              <tr><td className={td}>Excess distribution (default)</td><td className={td}>Gains and large distributions spread over your holding period, taxed at the highest ordinary rate for each year, plus an interest charge</td><td className={td}>Nothing to elect; usually the most costly outcome</td></tr>
              <tr><td className={td}>QEF (Qualified Electing Fund)</td><td className={td}>Your share of the fund's ordinary earnings and net capital gains each year, keeping capital gain treatment</td><td className={td}>A PFIC Annual Information Statement from the fund, and a timely election</td></tr>
              <tr><td className={td}>Mark-to-market</td><td className={td}>Each year's rise in value taxed as ordinary income; losses allowed only up to earlier gains</td><td className={td}>The units must count as marketable stock</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className={h3}>Foreign account and asset reporting</h3>
        <ul className={ul}>
          <li><strong className="text-primary">FBAR (FinCEN 114):</strong> required if your foreign financial accounts together exceed USD 10,000 at any time in the year.</li>
          <li><strong className="text-primary">Form 8938 (FATCA):</strong> for an unmarried taxpayer living in the US, required above USD 50,000 at year-end or USD 75,000 at any time; higher thresholds apply if you live abroad or file jointly. Check the IRS for the current year.</li>
        </ul>
        <h3 className={h3}>Inbound vs outbound for a US person</h3>
        <p className={p}>
          An inbound GIFT City fund gives Indian market exposure in dollars. An outbound GIFT City fund investing in global markets usually makes little sense for a US person, who can buy US-domiciled funds without PFIC issues. More detail: <Link to="/insights/pfic-explained" className={a}>PFIC explained</Link>.
        </p>
      </>
    }
    docs={[
      "US passport or green card, plus Indian passport or OCI card where relevant",
      "Form W-9 and FATCA self-certification",
      "US address proof and a recent bank statement",
      "PAN, if you have one",
    ]}
    money={
      <p className={p}>
        If a fund accepts you, transfer US Dollars by wire from your US bank account to the fund's subscription account; redemptions come back in dollars. The account in GIFT City and the fund holding both count towards your FBAR and Form 8938 totals. Keep the fund's statements for Form 8621.
      </p>
    }
    faqs={[
      { q: "How to invest in GIFT City from the USA?", a: "First find a GIFT City fund that accepts US persons; many do not. Then ask whether it provides PFIC Annual Information Statements, take US tax advice, complete the fund's KYC including Form W-9, and wire US Dollars from your US bank account." },
      { q: "Can US citizens invest in GIFT City funds?", a: "Only in funds that accept US persons. Tata India Dynamic Equity Fund, The Wealth Company IFSC FoF and HDFC's inbound GIFT City funds are among those that state they do not. Where a fund does accept you, it is usually a PFIC for US tax." },
      { q: "What are the PFIC rules for GIFT City funds?", a: "Most GIFT City funds are Passive Foreign Investment Companies for US tax. US persons file Form 8621 each year and, by default, pay tax at the highest ordinary rate plus an interest charge on gains, unless a QEF or mark-to-market election applies." },
      { q: "Do I need to file FBAR for a GIFT City investment?", a: "If your foreign financial accounts together exceed USD 10,000 at any time in the year, you file an FBAR. Form 8938 may also apply above its own thresholds." },
      { q: "Can US-based NRIs invest in GIFT City funds?", a: "An NRI living in the US is usually a US tax resident and is treated as a US person by fund houses, so the same restrictions and PFIC rules apply. Check eligibility before anything else." },
    ]}
    sources={["irs8621", "irsFbar", "irs8938", "incomeTax", "ifscaDirectory"]}
  />
);

export default NriUs;
