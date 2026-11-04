import { FundHousePage } from "@/components/FundHousePage";

const Mirae = () => (
  <FundHousePage
    path="/mirae-asset-gift-city-funds"
    house="Mirae Asset"
    name="Mirae Asset"
    headline="Mirae Asset GIFT City Funds: Global Allocation, Global Advantage and India Equity"
    seoTitle="Mirae Asset GIFT City Funds: Minimum, Who Can Invest"
    description="Mirae Asset's GIFT City funds: Global Allocation (residents under LRS), Global Advantage (NRIs and foreign nationals) and India Equity Allocation, with minimums and sources."
    datePublished="2026-11-04"
    intro={<>Mirae Asset runs three GIFT City funds, all AIFs or restricted schemes with higher minimums: the <strong className="text-primary">Global Allocation Fund</strong> (USD 151,000, or USD 10,000 for accredited investors; resident Indians can invest under LRS), the <strong className="text-primary">Global Advantage Fund</strong> (USD 151,000, or USD 25,000 for accredited investors; NRIs and foreign nationals only) and the <strong className="text-primary">India Equity Allocation Fund</strong>.</>}
    faqs={[
      { q: "Does Mirae Asset have a GIFT City fund?", a: "Yes, three: Mirae Asset Global Allocation Fund and Global Advantage Fund, which invest outside India, and Mirae Asset India Equity Allocation Fund, which invests in Indian equity." },
      { q: "Can resident Indians invest in Mirae Asset GIFT City funds?", a: "In the Global Allocation Fund, under LRS, subject to its minimum or accredited-investor status. The Global Advantage Fund is for NRIs and foreign nationals only." },
      { q: "What is the minimum for Mirae Asset GIFT City funds?", a: "USD 151,000 for the two global funds, or USD 10,000 (Global Allocation) and USD 25,000 (Global Advantage) for accredited investors. The India Equity Allocation Fund's minimum is not published on its site." },
    ]}
  />
);
export default Mirae;
