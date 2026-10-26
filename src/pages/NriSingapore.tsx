import { Link } from "react-router-dom";
import { p, a, ul, h3 } from "@/components/GuidePage";
import { NriCountryPage } from "@/components/NriCountryPage";

const NriSingapore = () => (
  <NriCountryPage
    code="sg"
    path="/gift-city-funds-for-singapore-nris"
    name="Singapore"
    short="Singapore"
    headline="GIFT City Funds for Singapore NRIs: Tax, Eligibility and How to Invest (2026)"
    seoTitle="GIFT City Funds for Singapore NRIs: Tax, Funds & How to Invest"
    description="How Singapore-based NRIs invest in GIFT City funds: no capital gains tax, foreign-sourced income for individuals, Certificate of Residence, which funds accept you, documents."
    datePublished="2026-10-26"
    intro={<>NRIs in Singapore can invest in GIFT City funds in US Dollars from a Singapore bank account, with no LRS or TCS. Singapore does not tax capital gains, and foreign-sourced income received by resident individuals is generally exempt, so <strong className="text-primary">the Indian treatment of the fund matters most</strong>. Unlike the UAE dirham, the Singapore dollar floats, so you carry currency risk.</>}
    facts={[
      ["Currency", "Singapore dollar (floating); most GIFT City funds are in USD"],
      ["Singapore tax on your investment", "No capital gains tax; foreign-sourced income of resident individuals generally exempt"],
      ["Tax treaty with India", "Yes. A Singapore Certificate of Residence is usually needed to rely on it."],
      ["LRS or TCS?", "No. Those apply only to resident Indians."],
      ["Main thing to check", "That your activity is investing, not trading as a business"],
      ["Lowest fund minimum", "USD 500 for some retail funds"],
    ]}
    steps={[
      { title: "Choose a fund", sub: "Inbound (India) or outbound (global)" },
      { title: "Confirm Singapore eligibility", sub: "In the offer document" },
      { title: "KYC with the fund house", sub: "Passport, pass, address proof" },
      { title: "Transfer USD from Singapore", sub: "Or SGD converted" },
      { title: "Units allotted", sub: "Track on the investor portal" },
    ]}
    fundNote={<>None of the fund houses we track publishes an exclusion for Singapore residents.</>}
    tax={
      <>
        <ul className={ul}>
          <li>Singapore does not have a capital gains tax, so gains on selling fund units are generally not taxed for individuals who invest rather than trade.</li>
          <li>Foreign-sourced income received in Singapore by resident individuals is generally exempt, except when received through a Singapore partnership.</li>
          <li>If buying and selling is frequent enough to look like a trade, gains can be taxed as business income. Confirm your position with IRAS or an adviser.</li>
        </ul>
        <h3 className={h3}>India–Singapore tax treaty</h3>
        <p className={p}>
          India and Singapore have a tax treaty. To claim its benefits you usually need a Certificate of Residence from IRAS, and possibly Form 10F for the Indian side.
        </p>
      </>
    }
    docs={[
      "Passport (and OCI card if you are not an Indian citizen)",
      "Employment Pass, S Pass, Dependant's Pass or PR card",
      "Singapore address proof",
      "PAN, if you have one",
      "Certificate of Residence, if you want to rely on the treaty",
      "FATCA and CRS self-certification",
    ]}
    money={
      <p className={p}>
        Transfer US Dollars from a Singapore bank's foreign currency account, or convert Singapore dollars through your bank. Your return in Singapore dollars depends on the fund's markets, USD/SGD and, for inbound funds, the rupee. Redemptions come back in dollars. See <Link to="/gift-city-redemption-repatriation" className={a}>redemption and repatriation</Link>.
      </p>
    }
    faqs={[
      { q: "Can Singapore residents invest in GIFT City funds?", a: "Yes. NRIs and other investors living in Singapore can invest in GIFT City funds that accept them, in US Dollars from a Singapore bank account. None of the fund houses we track publishes an exclusion for Singapore residents; confirm in the offer document." },
      { q: "Are GIFT City funds taxed in Singapore?", a: "Generally not for individuals who invest rather than trade. Singapore does not tax capital gains, and foreign-sourced income received by resident individuals is generally exempt, except through a Singapore partnership." },
      { q: "Do I need a Singapore Certificate of Residence?", a: "Not usually to invest, but you may need one from IRAS to claim benefits under the India–Singapore tax treaty." },
      { q: "Is there currency risk for Singapore NRIs in GIFT City funds?", a: "Yes. Most GIFT City funds are in US Dollars and the Singapore dollar floats, so your return in SGD moves with USD/SGD, and for inbound funds also with the rupee." },
    ]}
    sources={["irasOverseas", "itResidency", "incomeTax", "ifscaDirectory"]}
  />
);

export default NriSingapore;
