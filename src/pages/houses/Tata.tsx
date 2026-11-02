import { FundHousePage } from "@/components/FundHousePage";

const Tata = () => (
  <FundHousePage
    path="/tata-gift-city-fund"
    house="Tata"
    name="Tata"
    headline="Tata GIFT City Fund: Tata India Dynamic Equity Fund (USD 500)"
    seoTitle="Tata GIFT City Fund: India Dynamic Equity Fund, USD 500 Minimum"
    description="Tata India Dynamic Equity Fund (GIFT City): an inbound feeder into Indian equity funds and ETFs for NRIs and foreign investors from USD 500. Who can and cannot invest."
    datePublished="2026-11-02"
    intro={<>Tata Asset Management runs the <strong className="text-primary">Tata India Dynamic Equity Fund</strong> from its GIFT City branch. It is an inbound retail fund that invests in Indian equity mutual funds and ETFs, open to NRIs and foreign investors from <strong className="text-primary">USD 500</strong>. It is not open to resident Indians or US persons.</>}
    entity={[
      ["Fund management entity", "Tata Asset Management Private Limited (IFSC Branch)"],
      ["Website", <a key="w" href="https://www.tatamutualfund.com/ifsc-gift-city" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">tatamutualfund.com/ifsc-gift-city</a>],
    ]}
    faqs={[
      { q: "What is the Tata India Dynamic Equity Fund (GIFT City)?", a: "An inbound retail fund run from Tata Asset Management's GIFT City branch that invests in Indian equity mutual fund schemes and ETFs, in US Dollars." },
      { q: "What is the minimum investment in the Tata GIFT City fund?", a: "USD 500, per Tata Mutual Fund's GIFT City page." },
      { q: "Who cannot invest in the Tata GIFT City fund?", a: "Resident Indians, US and US-connected persons, and investors from FATF black-listed or restricted jurisdictions. Tata's 2025 presentation also mentions Canada, so Canadian residents should confirm with Tata." },
    ]}
  />
);
export default Tata;
