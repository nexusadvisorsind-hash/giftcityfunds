import { FundHousePage } from "@/components/FundHousePage";

const Hdfc = () => (
  <FundHousePage
    path="/hdfc-gift-city-funds"
    house="HDFC"
    name="HDFC"
    headline="HDFC GIFT City Funds: Outbound Funds for Residents and India Funds for NRIs"
    seoTitle="HDFC GIFT City Funds: Developed & Emerging Markets, India Feeders"
    description="HDFC AMC International (IFSC) GIFT City funds: two outbound funds for resident Indians (USD 5,000) and six India feeder funds for NRIs (above USD 50,000), with sources."
    datePublished="2026-11-02"
    intro={<>HDFC runs its GIFT City funds through <strong className="text-primary">HDFC AMC International (IFSC) Limited</strong>, a wholly owned subsidiary of HDFC AMC. It has <strong className="text-primary">two outbound funds for resident Indians</strong> (developed and emerging markets, USD 5,000 minimum) and <strong className="text-primary">six India funds for NRIs</strong> that feed into HDFC Mutual Fund schemes, with minimums above USD 50,000.</>}
    entity={[
      ["Fund management entity", "HDFC AMC International (IFSC) Limited, a wholly owned subsidiary of HDFC Asset Management Company"],
      ["Registration", "Registered with IFSCA as a Fund Management Entity (Retail)"],
      ["Address", "Hiranandani Signature, Block 13-B, Zone 1, GIFT City, Gandhinagar"],
      ["Office opened", "August 2023"],
    ]}
    faqs={[
      { q: "Does HDFC have a GIFT City fund?", a: "Yes. HDFC AMC International (IFSC) runs outbound funds for resident Indians and inbound India feeder funds for NRIs and foreign investors." },
      { q: "What is the minimum for HDFC's GIFT City funds?", a: "USD 5,000 for the two outbound funds (top-ups USD 500). The India feeder funds need above USD 150,000 for Class A or above USD 50,000 for Class AR units." },
      { q: "Can resident Indians invest in HDFC GIFT City funds?", a: "In the two outbound funds, under LRS. The India feeder funds are for NRIs, foreign nationals and foreign institutions, not resident Indians." },
      { q: "Can US or UK residents invest in HDFC's GIFT City India funds?", a: "HDFC's material says the units are not offered to US persons except under an exemption, and the lower-minimum Class AR units are not available to US or UK investors." },
    ]}
  />
);
export default Hdfc;
