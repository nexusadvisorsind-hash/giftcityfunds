import { FundHousePage } from "@/components/FundHousePage";

const Dsp = () => (
  <FundHousePage
    path="/dsp-gift-city-funds"
    house="DSP"
    name="DSP"
    headline="DSP GIFT City Funds: DSP Global Equity Fund and India Funds"
    seoTitle="DSP GIFT City Fund: Global Equity Fund (USD 5,000) and India Funds"
    description="DSP Fund Managers IFSC: the DSP Global Equity Fund for resident Indians under LRS (USD 5,000) and DSP's India funds for global investors, with sources."
    datePublished="2026-11-02"
    intro={<>DSP runs its GIFT City funds through <strong className="text-primary">DSP Fund Managers IFSC</strong>. Its <strong className="text-primary">DSP Global Equity Fund</strong> is an open-ended retail fund for resident Indians under LRS, from USD 5,000. DSP also names three India funds (India Fund IFSC, India Equity Opps and India Absolute Return) but publishes few details about them.</>}
    entity={[
      ["Fund management entity", "DSP Fund Managers IFSC Private Limited"],
      ["Website", <a key="w" href="https://giftcity.dspim.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">giftcity.dspim.com</a>],
      ["Exit load (Global Equity Fund)", "1% within 24 months, per DSP's product page"],
    ]}
    faqs={[
      { q: "Does DSP have a GIFT City fund?", a: "Yes. DSP Fund Managers IFSC runs the DSP Global Equity Fund, an open-ended retail fund for resident Indians investing under LRS, and lists India funds for global investors." },
      { q: "What is the minimum for the DSP Global Equity Fund?", a: "USD 5,000 for the first investment and USD 500 for top-ups, per DSP's GIFT City product page." },
      { q: "What does the DSP Global Equity Fund invest in?", a: "A concentrated, actively managed portfolio of global companies." },
    ]}
  />
);
export default Dsp;
