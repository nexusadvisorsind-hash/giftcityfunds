import { FundHousePage } from "@/components/FundHousePage";

const Ppfas = () => (
  <FundHousePage
    path="/parag-parikh-gift-city-fund"
    house="PPFAS (Parag Parikh)"
    name="Parag Parikh (PPFAS)"
    headline="Parag Parikh GIFT City Funds: S&P 500 and Nasdaq 100 FoFs, India Flexi Cap"
    seoTitle="Parag Parikh GIFT City Fund: S&P 500, Nasdaq 100 FoF, USD 500 Minimum"
    description="PPFAS GIFT City funds: Parag Parikh IFSC S&P 500 and Nasdaq 100 Fund of Funds for residents (USD 500 minimum since 25 Aug 2026), and the India Flexi Cap fund for NRIs."
    datePublished="2026-11-02"
    intro={<>PPFAS runs its GIFT City funds through <strong className="text-primary">PPFAS Alternate Asset Managers IFSC</strong>. For resident Indians it offers two outbound funds of funds tracking the S&P 500 and the Nasdaq 100, with a <strong className="text-primary">USD 500 minimum since 25 August 2026</strong>. For NRIs it lists a Parag Parikh India Flexi Cap fund as coming soon.</>}
    entity={[
      ["Fund management entity", "PPFAS Alternate Asset Managers IFSC Private Limited (FME, Retail)"],
      ["IFSCA registration", "FDM2025FMR0814"],
      ["Address", "Pragya II, Block 15C1, Road 11, GIFT City, Gandhinagar"],
      ["Website", <a key="w" href="https://gift.ppfas.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">gift.ppfas.com</a>],
    ]}
    faqs={[
      { q: "Does Parag Parikh have a GIFT City fund?", a: "Yes. PPFAS Alternate Asset Managers IFSC runs the Parag Parikh IFSC S&P 500 Fund of Fund and the Parag Parikh IFSC Nasdaq 100 Fund of Fund, and lists a Parag Parikh India Flexi Cap Fund for NRIs as coming soon." },
      { q: "What is the minimum investment in the PPFAS GIFT City funds?", a: "USD 500 for the S&P 500 and Nasdaq 100 funds of funds, for both the first and later investments, since 25 August 2026 (it was USD 5,000). The India Flexi Cap fund lists USD 10,000." },
      { q: "Who can invest in the Parag Parikh S&P 500 and Nasdaq 100 GIFT City funds?", a: "Resident Indians, under the Liberalised Remittance Scheme. TCS applies to remittances above ₹10 lakh a year and can be claimed back in your tax return." },
      { q: "Is the Parag Parikh India Flexi Cap GIFT fund open?", a: "PPFAS lists it as coming soon. It is meant for NRIs, foreign individuals and FIIs, not resident Indians, with a USD 10,000 minimum." },
    ]}
  />
);
export default Ppfas;
