import { Link } from "react-router-dom";
import { GuidePage, h2, p, a, ul, type Faq } from "@/components/GuidePage";
import { ProsCons } from "@/components/Diagrams";

const faqs: Faq[] = [
  { q: "What is the biggest advantage of GIFT City funds?", a: "For NRIs, it is investing in Indian or global markets in US Dollars through an Indian-regulated fund without converting to rupees. For resident Indians, it is an outbound route that is not affected by the SEBI overseas limit that sometimes closes international mutual funds." },
  { q: "What is the biggest drawback?", a: "Higher minimums and more paperwork than a domestic mutual fund, plus, for residents, LRS limits and 20% TCS above ₹10 lakh a year. Many funds are also new, with short track records." },
  { q: "Are GIFT City funds tax-free?", a: "No investment is simply tax-free. Some income of specified funds in the IFSC gets concessions under Indian tax law, but the outcome for you depends on the fund structure and your country of residence. NRIs are also taxed where they live." },
];

const ProsAndCons = () => (
  <GuidePage
    path="/gift-city-funds-pros-and-cons"
    headline="GIFT City Funds: Pros and Cons, Plainly"
    seoTitle="GIFT City Funds Pros and Cons (2026): Advantages & Drawbacks"
    description="The advantages and drawbacks of GIFT City funds for NRIs and resident Indians: USD investing, regulation, tax, minimums, LRS, TCS, liquidity and track record."
    crumb="Pros and Cons"
    datePublished="2026-10-08"
    faqs={faqs}
    sources={["ifsca", "ifscaDirectory", "rbiLrs", "incomeTax"]}
  >
    <p className={p}>
      <strong className="text-primary">The short answer.</strong> GIFT City funds give Indian and NRI investors a regulated, dollar-based route into Indian and global markets. They come with higher minimums, more paperwork and, for residents, LRS limits and TCS. Whether the trade-off is worth it depends on how much you invest, the currency you spend in and where you pay tax.
    </p>

    <ProsCons
      pros={[
        "Invest and redeem in US Dollars, so NRIs avoid rupee conversion",
        "Regulated by IFSCA, with registered Fund Management Entities you can look up",
        "Access to both Indian markets (inbound) and global markets (outbound) from one centre",
        "Not subject to the SEBI USD 7 billion overseas limit on domestic mutual funds",
        "Fund-level tax concessions for specified funds under Indian law",
        "Run by established Indian and global fund houses with offices in GIFT City",
      ]}
      cons={[
        "Higher minimums than domestic mutual funds",
        "Residents use LRS: USD 250,000 a year limit and 20% TCS above ₹10 lakh (creditable)",
        "Currency risk if your spending is in rupees",
        "Many funds are new, so track records are short",
        "SIPs are not available in every scheme",
        "Tax in your country of residence can be complex, especially PFIC rules for US persons",
      ]}
    />

    <h2 className={h2}>Who commonly looks at GIFT City funds</h2>
    <ul className={ul}>
      <li><strong className="text-primary">NRIs and OCIs</strong> who earn in dollars or dirhams and want Indian market exposure without converting to rupees. See <Link to="/gift-city-funds-for-nri" className={a}>by country</Link>.</li>
      <li><strong className="text-primary">Resident Indians</strong> who want global diversification beyond what international mutual funds currently accept. See <Link to="/gift-city-vs-international-mutual-funds" className={a}>the comparison</Link>.</li>
      <li><strong className="text-primary">Returning NRIs</strong> who want to keep part of their savings in dollars. See <Link to="/insights/returning-to-india-gift-city-investments" className={a}>returning to India</Link>.</li>
    </ul>

    <h2 className={h2}>When they may not fit</h2>
    <ul className={ul}>
      <li>You want to invest small amounts monthly in rupees.</li>
      <li>You may need the money at short notice and the fund has a lock-in or exit load.</li>
      <li>You are a US person and the fund is a PFIC (see <Link to="/us-based-nris" className={a}>US-based NRIs</Link>).</li>
    </ul>
    <p className={p + " mt-4"}>
      Read the full list of <Link to="/gift-city-funds-risks" className={a}>risks</Link> before deciding.
    </p>
  </GuidePage>
);

export default ProsAndCons;
