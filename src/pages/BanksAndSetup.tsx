import { Link } from "react-router-dom";
import { GuidePage, h2, h3, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";
import { FlowSteps } from "@/components/Diagrams";

const faqs: Faq[] = [
  { q: "Does SBI have a GIFT City branch?", a: "Yes. State Bank of India runs an IFSC Banking Unit in GIFT City, as do several other large Indian banks." },
  { q: "Which foreign banks are in GIFT City?", a: "Foreign banks with IFSC Banking Units in GIFT City include JPMorgan, Standard Chartered, Citibank, HSBC, Deutsche Bank, Barclays, Bank of America and MUFG, mostly serving corporate and institutional clients." },
  { q: "Can I open foreign currency accounts in GIFT City?", a: "Yes. GIFT City foreign currency accounts are offered by IFSC Banking Units in US Dollars and other major currencies, subject to each bank's eligibility and KYC." },
  { q: "Is GIFT City offshore banking?", a: "In effect, yes: GIFT City banking is treated as offshore for foreign exchange purposes, so IFSC Banking Units deal in foreign currency, but they are regulated in India by IFSCA." },
  { q: "How do company registration and the IFSC license work in GIFT City?", a: "Company registration in GIFT City starts with incorporating an Indian company or branch. The business then applies for an IFSC licence or registration from IFSCA for its activity, and for SEZ approval, through IFSCA's Single Window IT System." },
  { q: "What is involved in a GIFT City IFSC setup?", a: "A GIFT City IFSC setup typically needs an incorporated entity, the right IFSCA licence, SEZ approval, an office in the GIFT SEZ, key personnel and a compliance framework." },
  { q: "How do I set up a fintech in GIFT City?", a: "For a GIFT City fintech setup, IFSCA offers a regulatory sandbox and a fintech incentive scheme with grants for eligible start-ups. Apply to IFSCA under its fintech framework." },
  { q: "What is the operating cost in GIFT City?", a: "GIFT City operating cost depends on office space, staff and compliance. Rents are generally lower than in Mumbai's financial districts, but get current quotes from GIFT City developers and service providers." },
  { q: "Are there subsidies in GIFT City?", a: "GIFT City subsidies and incentives include the tax benefits for IFSC units, IFSCA's fintech incentive scheme, and Gujarat state policies that can offer support to eligible businesses. Check the current schemes before planning on them." },
  { q: "Which banks are in GIFT City?", a: "GIFT City has IFSC Banking Units (IBUs) of most large Indian banks, including SBI, and of many foreign banks, such as JPMorgan, Standard Chartered, Citibank, HSBC, Deutsche Bank, Barclays and MUFG. The IFSCA Directory has the current list." },
  { q: "Can I open a bank account in GIFT City?", a: "Yes. IFSC Banking Units offer foreign currency accounts and deposits to NRIs, foreign citizens and, within LRS, resident Indians. Each bank sets its own documents and minimum balance." },
  { q: "How do I set up a company in GIFT City?", a: "Typically: incorporate an Indian company or branch, apply to IFSCA for the licence or registration your activity needs, and get approval to operate in the GIFT SEZ. IFSCA's Single Window IT System brings the IFSCA and SEZ applications together." },
  { q: "What is the difference between the SEZ and DTA in GIFT City?", a: "GIFT City has a multi-service Special Economic Zone, which contains the IFSC, and a Domestic Tariff Area (DTA) for regular Indian businesses, offices and housing. IFSC benefits apply only to units in the SEZ." },
  { q: "Is GIFT City used for aircraft and ship leasing?", a: "Yes. IFSCA has a framework for aircraft and ship leasing, and many leasing companies have set up in GIFT IFSC to lease aircraft and ships to Indian and foreign operators." },
];

const BanksAndSetup = () => (
  <GuidePage
    path="/gift-city-banks-and-business-setup"
    headline="Banks in GIFT City and Setting Up a Business in GIFT IFSC"
    seoTitle="Banks in GIFT City & How to Set Up a Company in GIFT IFSC"
    description="Banks in GIFT City (IFSC Banking Units), opening a foreign currency account, and how companies set up in GIFT IFSC: IFSCA licence, SEZ vs DTA, fintech, aircraft and ship leasing."
    crumb="Banks and Business Setup in GIFT City"
    datePublished="2026-10-09"
    faqs={faqs}
    sources={["ifsca", "ifscaDirectory", "giftCity"]}
  >
    <p className={p}>
      <strong className="text-primary">The short answer.</strong> For individuals, the useful part of GIFT City banking is the <strong className="text-primary">IFSC Banking Unit (IBU)</strong>: a branch of an Indian or foreign bank that offers US Dollar and other foreign currency accounts. For businesses, GIFT IFSC offers a special regime with its own regulator, tax incentives and a single application window. This page covers both at a high level.
    </p>

    <h2 className={h2}>Banks in GIFT City</h2>
    <div className="overflow-x-auto">
      <table className={table}>
        <thead><tr><th className={th}>Type</th><th className={th}>Examples</th><th className={th}>Useful for individuals</th></tr></thead>
        <tbody>
          <tr><td className={td}>Indian banks' IFSC Banking Units</td><td className={td}>SBI, other large public and private sector banks</td><td className={td}>USD accounts and fixed deposits</td></tr>
          <tr><td className={td}>Foreign banks' IFSC Banking Units</td><td className={td}>JPMorgan, Standard Chartered, Citibank, HSBC, Deutsche Bank, Barclays, MUFG</td><td className={td}>Mainly corporate and institutional banking</td></tr>
        </tbody>
      </table>
    </div>
    <p className={p + " mt-3"}>
      How to open an account, documents and costs: see <Link to="/insights/how-to-open-gift-city-bank-account" className={a}>How to open a GIFT City bank account</Link>. Deposits compared: <Link to="/insights/gift-city-fd-vs-nre-fcnr" className={a}>GIFT City FDs vs NRE and FCNR</Link>.
    </p>

    <h2 className={h2}>Setting up a business in GIFT IFSC</h2>
    <FlowSteps
      caption="A typical route; the exact licence depends on the activity."
      steps={[
        { title: "Choose the activity", sub: "Fund management, banking, broking, leasing, fintech" },
        { title: "Incorporate", sub: "Indian company or branch" },
        { title: "Apply to IFSCA", sub: "Through the Single Window IT System" },
        { title: "SEZ approval", sub: "To operate as an IFSC unit" },
        { title: "Start operations", sub: "Office in the GIFT SEZ" },
      ]}
    />
    <h3 className={h3}>Common IFSC activities</h3>
    <ul className={ul}>
      <li><strong className="text-primary">Fund management:</strong> registering as a Fund Management Entity. See <Link to="/what-is-ifsca" className={a}>IFSCA and its fund regulations</Link>.</li>
      <li><strong className="text-primary">Fintech:</strong> IFSCA runs a regulatory sandbox and fintech incentive scheme for eligible start-ups.</li>
      <li><strong className="text-primary">Aircraft and ship leasing:</strong> a dedicated IFSCA framework for leasing companies.</li>
      <li><strong className="text-primary">Global in-house centres and back offices</strong> serving international operations.</li>
    </ul>

    <h3 className={h3}>Tax and incentives for IFSC units</h3>
    <p className={p}>
      IFSC units can claim a 100% income tax deduction for any 10 consecutive years out of 15, pay a reduced MAT of 9% where MAT applies, and benefit from GST and stamp duty relief. Details are in <Link to="/taxation" className={a}>Regulation and Taxation</Link>. Costs such as office rent vary; get current quotes from GIFT City developers and service providers.
    </p>
  </GuidePage>
);

export default BanksAndSetup;
