import { Link } from "react-router-dom";
import { FundDirectionPage } from "@/components/FundDirectionPage";
import { h2, p, a } from "@/components/GuidePage";

const OutboundFunds = () => (
  <FundDirectionPage
    direction="Outbound"
    path="/gift-city-outbound-funds"
    headline="GIFT City Outbound Funds 2026: Global Funds for Resident Indians"
    seoTitle="GIFT City Outbound Funds List 2026: Minimum, Who Can Invest"
    description="GIFT City outbound funds invest outside India in US Dollars. Every public outbound fund we could confirm: S&P 500, Nasdaq 100, global and emerging-market funds, minimums and who can invest."
    intro={<>Outbound GIFT City funds invest <strong className="text-primary">outside India</strong> (US, global, China or emerging markets), in US Dollars. Most are built for <strong className="text-primary">resident Indians investing under LRS</strong>; a few also accept NRIs.</>}
    after={
      <>
        <h2 className={h2}>Before you invest in an outbound fund</h2>
        <p className={p}>
          Resident Indians send money under LRS: up to USD 250,000 a year, with TCS above ₹10 lakh credited back in the tax return (<Link to="/insights/lrs-tcs-gift-city#calculator" className={a}>TCS calculator</Link>). The rupee–dollar rate also affects what you get back in rupees (<Link to="/usd-vs-inr-calculator" className={a}>currency calculator</Link>). For how these compare with Indian international mutual funds, see <Link to="/gift-city-vs-international-mutual-funds" className={a}>GIFT City vs international mutual funds</Link>.
        </p>
      </>
    }
    faqs={[
      { q: "What is a GIFT City outbound fund?", a: "A fund based in GIFT City's International Financial Services Centre that invests outside India, such as in US or global shares, in US Dollars. Resident Indians usually invest through the Liberalised Remittance Scheme." },
      { q: "What is the minimum for GIFT City outbound funds?", a: "Retail outbound funds start at USD 500 (Parag Parikh's S&P 500 and Nasdaq 100 funds, Aditya Birla Sun Life's emerging-market fund); several others need USD 5,000. AIFs and restricted schemes need USD 150,000 or more." },
      { q: "Can NRIs invest in GIFT City outbound funds?", a: "Some can: Edelweiss's two outbound funds and Marcellus Global Equities Fund say they accept NRIs, and Mirae Asset Global Advantage Fund (a restricted scheme) is for NRIs and foreign nationals only. Most other outbound funds are for resident Indians under LRS. Check each fund's offer document." },
      { q: "Are GIFT City outbound funds affected by the SEBI overseas limit?", a: "No. GIFT City funds are regulated by IFSCA and are not subject to the industry-wide overseas investment limit that has led many Indian international mutual funds to pause new money." },
    ]}
  />
);
export default OutboundFunds;
