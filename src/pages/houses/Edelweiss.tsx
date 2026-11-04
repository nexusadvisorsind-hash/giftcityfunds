import { FundHousePage } from "@/components/FundHousePage";

const Edelweiss = () => (
  <FundHousePage
    path="/edelweiss-gift-city-funds"
    house="Edelweiss"
    name="Edelweiss"
    headline="Edelweiss GIFT City Funds: Greater China, US Technology and India Multimanager"
    seoTitle="Edelweiss GIFT City Funds: Greater China & US Technology"
    description="Edelweiss's GIFT City funds: Greater China Equity and US Technology Equity (USD 5,000, for residents and NRIs) and an India multimanager AIF, with eligibility and sources."
    datePublished="2026-11-04"
    intro={<>Edelweiss has two GIFT City retail funds that invest abroad through JPMorgan funds, the <strong className="text-primary">Greater China Equity Fund</strong> and the <strong className="text-primary">US Technology Equity Fund</strong>, both from <strong className="text-primary">USD 5,000</strong> and open to residents, NRIs and foreign nationals with a PAN. It also runs an India-focused multimanager AIF by private placement.</>}
    faqs={[
      { q: "Does Edelweiss have a GIFT City fund?", a: "Yes. Edelweiss Greater China Equity Fund and Edelweiss US Technology Equity Fund are retail outbound funds; Edelweiss India Multimanager Equity Fund – Series I is a Category III AIF investing in Indian equity funds." },
      { q: "Can NRIs invest in Edelweiss GIFT City funds?", a: "Yes. Edelweiss says its two outbound retail funds are open to residents, NRIs and foreign nationals with a PAN. The Greater China fund is not open to investors in Canada." },
      { q: "What is the minimum for Edelweiss GIFT City funds?", a: "USD 5,000 for the two retail funds, with top-ups of USD 500. The multimanager AIF does not publish a minimum." },
    ]}
  />
);
export default Edelweiss;
