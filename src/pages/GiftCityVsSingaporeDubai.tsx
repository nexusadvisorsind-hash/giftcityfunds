import { Link } from "react-router-dom";
import { GuidePage, h2, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";

const faqs: Faq[] = [
  { q: "Is GIFT City a global financial centre?", a: "It aims to be one. GIFT IFSC is India's international financial centre, competing with Singapore, Dubai and others for fund management, banking, insurance, leasing and capital markets business that would otherwise be booked offshore." },
  { q: "Is GIFT City like Singapore or Dubai?", a: "In purpose, yes: all three are international financial centres that deal in foreign currency and host fund managers. The differences are maturity, regulator, the range of products and how closely each is linked to India." },
  { q: "Which regulator oversees each centre?", a: "GIFT IFSC is regulated by IFSCA. Singapore's financial sector is regulated by the Monetary Authority of Singapore (MAS). The Dubai International Financial Centre (DIFC) has its own regulator, the Dubai Financial Services Authority (DFSA); Abu Dhabi Global Market (ADGM) has the FSRA." },
  { q: "For a resident Indian, is a Singapore fund different from a GIFT City fund?", a: "Both are overseas investments under LRS, with the same USD 250,000 limit and the same TCS. The practical differences are the regulator, availability through Indian fund houses, and how the fund and your holdings are taxed." },
];

const GiftCityVsSingaporeDubai = () => (
  <GuidePage
    path="/gift-city-vs-singapore-dubai"
    headline="GIFT City vs Singapore vs Dubai: How the Fund Centres Compare"
    seoTitle="GIFT City vs Singapore vs Dubai (DIFC): Fund Hubs Compared"
    description="GIFT IFSC compared with Singapore and Dubai's DIFC as fund centres for Indian and NRI investors: regulator, currency, product range, maturity, India link and what changes for you."
    crumb="GIFT City vs Singapore vs Dubai"
    datePublished="2026-10-09"
    faqs={faqs}
    sources={["ifsca", "rbiLrs", "giftCity"]}
  >
    <p className={p}>
      <strong className="text-primary">The short answer.</strong> Singapore and Dubai are older, larger and offer a much wider range of funds. GIFT City is newer but is built specifically to bring India-linked finance onshore: Indian fund houses, an Indian regulator, Indian time zone, and funds aimed at NRIs and resident Indians. For an Indian investor, the choice is usually about which <em>product</em> suits you, not which city.
    </p>

    <h2 className={h2}>Side by side</h2>
    <div className="overflow-x-auto">
      <table className={table}>
        <thead><tr><th className={th}></th><th className={th}>GIFT IFSC (India)</th><th className={th}>Singapore</th><th className={th}>Dubai (DIFC)</th></tr></thead>
        <tbody>
          <tr><td className={th}>Regulator</td><td className={td}>IFSCA</td><td className={td}>MAS</td><td className={td}>DFSA</td></tr>
          <tr><td className={th}>Started as a financial centre</td><td className={td}>IFSC operations from 2015; IFSCA from 2020</td><td className={td}>Decades-old global centre</td><td className={td}>DIFC from 2004</td></tr>
          <tr><td className={th}>Currency of funds</td><td className={td}>Mainly USD</td><td className={td}>USD, SGD and others</td><td className={td}>Mainly USD</td></tr>
          <tr><td className={th}>Fund range for retail investors</td><td className={td}>Growing; mostly Indian fund houses</td><td className={td}>Very wide</td><td className={td}>Wide, mostly for professional clients</td></tr>
          <tr><td className={th}>Link to India</td><td className={td}>Inside India; Indian fund houses and time zone</td><td className={td}>Foreign jurisdiction</td><td className={td}>Foreign jurisdiction; large NRI population nearby</td></tr>
          <tr><td className={th}>Resident Indian investing</td><td className={td}>Under LRS, with TCS</td><td className={td}>Under LRS, with TCS</td><td className={td}>Under LRS, with TCS</td></tr>
          <tr><td className={th}>Language of documents</td><td className={td}>English</td><td className={td}>English</td><td className={td}>English</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className={h2}>What this means for you</h2>
    <ul className={ul}>
      <li><strong className="text-primary">Resident Indians:</strong> LRS limits and TCS are the same wherever the fund is based. GIFT City funds are often easier to reach through Indian fund houses and Indian KYC habits.</li>
      <li><strong className="text-primary">NRIs in the Gulf:</strong> both DIFC and GIFT City funds can be bought in dollars. GIFT City adds Indian fund houses' India strategies. See <Link to="/gift-city-funds-for-nri#uae" className={a}>GIFT City for UAE NRIs</Link>.</li>
      <li><strong className="text-primary">Everyone:</strong> compare the fund, its costs, its regulator and how you are taxed where you live. Location alone does not make a fund better.</li>
    </ul>
    <p className={p + " mt-4"}>
      Start with <Link to="/what-is-gift-city" className={a}>what GIFT City is</Link> and <Link to="/what-is-ifsca" className={a}>how IFSCA regulates it</Link>.
    </p>
  </GuidePage>
);

export default GiftCityVsSingaporeDubai;
