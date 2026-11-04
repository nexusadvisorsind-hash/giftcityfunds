import { FundHousePage } from "@/components/FundHousePage";

const Absl = () => (
  <FundHousePage
    path="/aditya-birla-sun-life-gift-city-funds"
    house="Aditya Birla Sun Life"
    name="Aditya Birla Sun Life"
    headline="Aditya Birla Sun Life GIFT City Funds: Emerging Markets and India Growth"
    seoTitle="Aditya Birla Sun Life (ABSL) GIFT City Funds: USD 500 Minimum"
    description="Aditya Birla Sun Life's two GIFT City retail funds: an emerging-market fund for resident Indians and an India growth fund for NRIs, both from USD 500, with sources."
    datePublished="2026-11-04"
    intro={<>Aditya Birla Sun Life AMC has two GIFT City retail funds, both from <strong className="text-primary">USD 500</strong> (then multiples of USD 100): the <strong className="text-primary">ABSL Emerging Market Equity Fund</strong>, an outbound fund for resident Indians under LRS, and the <strong className="text-primary">ABSL India Growth Fund</strong>, an inbound fund for NRIs and foreign investors.</>}
    faqs={[
      { q: "Does Aditya Birla Sun Life have a GIFT City fund?", a: "Yes, two retail funds: ABSL Emerging Market Equity Fund (outbound, for resident Indians) and ABSL India Growth Fund (inbound, for NRIs and foreign investors)." },
      { q: "What is the minimum for ABSL's GIFT City funds?", a: "USD 500, then multiples of USD 100, for both funds according to the report we cite." },
      { q: "Which ABSL GIFT City fund can NRIs invest in?", a: "The ABSL India Growth Fund, which invests in Aditya Birla Sun Life equity schemes. The emerging-market fund is for resident Indians under LRS and eligible Indian companies." },
    ]}
  />
);
export default Absl;
