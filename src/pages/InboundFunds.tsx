import { Link } from "react-router-dom";
import { FundDirectionPage } from "@/components/FundDirectionPage";
import { h2, p, a } from "@/components/GuidePage";

const InboundFunds = () => (
  <FundDirectionPage
    direction="Inbound"
    path="/gift-city-inbound-funds"
    headline="GIFT City Inbound Funds 2026: Indian Market Funds for NRIs in US Dollars"
    seoTitle="GIFT City Inbound Funds List 2026: India Funds for NRIs"
    description="GIFT City inbound funds invest in Indian markets in US Dollars, mostly for NRIs and foreign investors. Every public inbound fund we could confirm, with minimums, who can invest and sources."
    intro={<>Inbound GIFT City funds invest <strong className="text-primary">in Indian markets</strong>, in US Dollars, mostly by feeding into a fund house's Indian mutual fund. They are for <strong className="text-primary">NRIs, OCIs and foreign investors</strong>, not resident Indians.</>}
    after={
      <>
        <h2 className={h2}>Before you invest in an inbound fund</h2>
        <p className={p}>
          Tax depends on where you live. See the guides for <Link to="/gift-city-funds-for-uae-nris" className={a}>UAE</Link>, <Link to="/gift-city-funds-for-gulf-nris" className={a}>Saudi Arabia, Qatar, Kuwait, Bahrain and Oman</Link>, <Link to="/gift-city-funds-for-uk-nris" className={a}>UK</Link>, <Link to="/gift-city-funds-for-us-nris" className={a}>US</Link>, <Link to="/gift-city-funds-for-singapore-nris" className={a}>Singapore</Link> and <Link to="/gift-city-funds-for-canada-nris" className={a}>Canada</Link>. Several inbound funds do not accept US or Canadian residents. How feeder funds work: <Link to="/gift-city-feeder-funds" className={a}>GIFT City feeder funds explained</Link>.
        </p>
      </>
    }
    faqs={[
      { q: "What is a GIFT City inbound fund?", a: "A US Dollar fund based in GIFT City that invests in Indian markets, usually by feeding into an Indian mutual fund scheme of the same fund house. It lets NRIs and foreign investors invest in India without converting to rupees." },
      { q: "What is the minimum for GIFT City inbound funds?", a: "Retail inbound funds start at USD 500 (Tata India Dynamic Equity Fund, ABSL India Growth Fund); Sundaram's needs USD 5,000. Most inbound AIFs need USD 150,000, and HDFC's lower-minimum class needs above USD 50,000." },
      { q: "Can resident Indians invest in GIFT City inbound funds?", a: "Generally no. Inbound funds are offered to NRIs, OCIs, foreign nationals and foreign institutions. Resident Indians use outbound funds under LRS." },
      { q: "Can US NRIs invest in GIFT City inbound funds?", a: "Several inbound funds say they do not accept US persons, including Tata India Dynamic Equity Fund and The Wealth Company IFSC FoF; HDFC's lower-minimum class excludes US and UK investors. US persons should also consider PFIC rules." },
    ]}
  />
);
export default InboundFunds;
