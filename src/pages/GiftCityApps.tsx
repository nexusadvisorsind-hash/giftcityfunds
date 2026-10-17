import { Link } from "react-router-dom";
import { GuidePage, h2, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";

const faqs: Faq[] = [
  { q: "Can I buy GIFT City funds on Zerodha?", a: "Not as of October 2026. Zerodha received IFSCA approval in June 2026 to act as a broker-dealer in GIFT City for US stocks. GIFT City mutual funds, feeder funds, AIFs and PMS are bought from the fund house itself, directly or through a registered distributor." },
  { q: "Can I buy GIFT City funds on Groww?", a: "Groww began rolling out US stocks and ETFs through GIFT City in late September 2026, as a Global Access Provider approved by IFSCA. That is investing in US-listed securities, not GIFT City mutual funds, which are bought from the fund house." },
  { q: "What is a Global Access Provider in GIFT City?", a: "A route set up by IFSCA in 2025 that lets Indian platforms give their users access to foreign markets through an entity in GIFT IFSC, with simpler repatriation of money back to India." },
  { q: "Is buying US stocks through Zerodha or Groww the same as a GIFT City fund?", a: "No. Through the apps you buy individual US stocks or ETFs yourself. A GIFT City fund is a managed pool regulated by IFSCA. For residents both go under LRS, with TCS above ₹10 lakh a year." },
  { q: "How do I invest in a GIFT City fund then?", a: "Choose the fund, complete the fund house's KYC, and send US Dollars to the scheme's account: from India under LRS if you are resident, or from abroad if you are an NRI. The full process is on the how-to-invest page." },
];

const GiftCityApps = () => (
  <GuidePage
    path="/gift-city-funds-zerodha-groww"
    headline="GIFT City on Zerodha, Groww, Upstox and Angel One: What the Apps Offer"
    seoTitle="GIFT City Funds on Zerodha & Groww: What the Apps Offer (2026)"
    description="Can you buy GIFT City funds on Zerodha or Groww? What IFSCA approved in 2026, what the apps offer (US stocks and ETFs), and how GIFT City funds are bought instead."
    crumb="Zerodha, Groww and GIFT City"
    datePublished="2026-10-16"
    faqs={faqs}
    sources={["ifsca", "ifscaDirectory", "rbiLrs"]}
  >
    <p className={p}>
      <strong className="text-primary">The short answer.</strong> Zerodha, Groww, Upstox and Angel One are bringing <strong className="text-primary">US stocks and ETFs</strong> to their apps through GIFT City, not GIFT City mutual funds. In June 2026, IFSCA approved Zerodha and Upstox as broker-dealers and Groww and Angel One as Global Access Providers. Groww began rolling out US investing in late September 2026. GIFT City funds are still bought from the fund house.
    </p>

    <h2 className={h2}>What each app is approved for</h2>
    <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto">
      <table className={table}>
        <caption className="sr-only">Zerodha, Groww, Upstox and Angel One GIFT City approvals</caption>
        <thead><tr><th className={th}>Platform</th><th className={th}>Role in GIFT City</th><th className={th}>What it offers</th><th className={th}>Status (October 2026)</th></tr></thead>
        <tbody>
          <tr><td className={td}>Zerodha</td><td className={td}>Broker-dealer</td><td className={td}>US stocks</td><td className={td}>Approved June 2026; check the app for launch</td></tr>
          <tr><td className={td}>Upstox</td><td className={td}>Broker-dealer</td><td className={td}>US stocks</td><td className={td}>Approved June 2026; check the app for launch</td></tr>
          <tr><td className={td}>Groww</td><td className={td}>Global Access Provider</td><td className={td}>US stocks and ETFs</td><td className={td}>Rolling out from late September 2026</td></tr>
          <tr><td className={td}>Angel One</td><td className={td}>Global Access Provider</td><td className={td}>US stocks</td><td className={td}>Approved June 2026; check the app for launch</td></tr>
        </tbody>
      </table>
    </div>
    <p className="font-body text-xs text-foreground-muted mt-2">Based on public reports; features and eligibility change. Check each platform's own terms.</p>

    <h2 className={h2}>App vs GIFT City fund</h2>
    <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto">
      <table className={table}>
        <caption className="sr-only">US stocks through an app vs a GIFT City fund</caption>
        <thead><tr><th className={th}></th><th className={th}>US stocks via an app</th><th className={th}>GIFT City fund</th></tr></thead>
        <tbody>
          <tr><td className={th}>What you own</td><td className={td}>Individual US stocks or ETFs</td><td className={td}>Units of a managed fund</td></tr>
          <tr><td className={th}>Who decides what to buy</td><td className={td}>You</td><td className={td}>The fund manager</td></tr>
          <tr><td className={th}>Regulator in GIFT City</td><td className={td}>IFSCA (the app's GIFT City arm)</td><td className={td}>IFSCA (the fund management entity)</td></tr>
          <tr><td className={th}>Residents: LRS and TCS</td><td className={td}>Yes</td><td className={td}>Yes</td></tr>
          <tr><td className={th}>Where you buy</td><td className={td}>In the app</td><td className={td}>From the fund house, directly or through a distributor</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className={h2}>Which suits you</h2>
    <ul className={ul}>
      <li><strong className="text-primary">You want to pick US stocks yourself:</strong> an app route. See <Link to="/gift-city-us-stocks-etfs" className={a}>US stocks and ETFs via GIFT City</Link>.</li>
      <li><strong className="text-primary">You want a managed fund in dollars:</strong> a GIFT City fund. See the <Link to="/gift-city-fund-list" className={a}>fund list</Link> and <Link to="/how-to-invest" className={a}>how to invest</Link>.</li>
      <li><strong className="text-primary">You are a US person:</strong> read <Link to="/insights/pfic-explained" className={a}>PFIC explained</Link> before buying any non-US fund.</li>
    </ul>
    <p className="font-body text-xs text-foreground-muted mt-4">This page explains how these platforms relate to GIFT City. It does not recommend any platform.</p>
  </GuidePage>
);

export default GiftCityApps;
