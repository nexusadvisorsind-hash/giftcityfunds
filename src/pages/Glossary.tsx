import { Link } from "react-router-dom";
import { GuidePage, p, a } from "@/components/GuidePage";

interface Term {
  term: string;
  def: string;
  link?: { to: string; label: string };
}

const TERMS: Term[] = [
  { term: "AIF (Alternative Investment Fund)", def: "A pooled fund for strategies outside conventional mutual funds, such as private credit or long-short equity. In GIFT City these are usually restricted schemes with high minimums.", link: { to: "/funds-explained", label: "Fund types" } },
  { term: "ARN (AMFI Registration Number)", def: "The number AMFI issues to a registered Mutual Fund Distributor. You can check any ARN on the AMFI website." },
  { term: "Exit load", def: "A fee charged if you redeem units before a set period. It is stated in the offer document." },
  { term: "Feeder fund", def: "A fund that puts most of its money into one other fund, often an overseas or domestic master fund." },
  { term: "FEMA", def: "The Foreign Exchange Management Act, 1999. For FEMA purposes, entities in the IFSC are treated as outside India, which is why residents invest in GIFT City through LRS." },
  { term: "FME (Fund Management Entity)", def: "The IFSCA-registered company that manages a GIFT City fund. Check it in the IFSCA Directory before investing.", link: { to: "/what-is-ifsca", label: "What is IFSCA" } },
  { term: "Form 26AS / AIS", def: "Your tax statements on the income tax portal. TCS collected on foreign remittances appears here." },
  { term: "GIFT City", def: "Gujarat International Finance Tec-City, a business district in Gandhinagar, Gujarat. Part of it is notified as India's IFSC.", link: { to: "/what-is-gift-city", label: "What is GIFT City" } },
  { term: "IBU (IFSC Banking Unit)", def: "A branch of a bank operating inside GIFT IFSC that offers foreign-currency accounts and deposits.", link: { to: "/insights/how-to-open-gift-city-bank-account", label: "GIFT City bank accounts" } },
  { term: "IFSC (International Financial Services Centre)", def: "A jurisdiction inside India that deals in foreign currency and is treated as outside India for foreign exchange purposes. GIFT IFSC is India's first." },
  { term: "IFSCA", def: "The International Financial Services Centres Authority, the single regulator for financial services in IFSCs in India, set up on 27 April 2020.", link: { to: "/what-is-ifsca", label: "Read more" } },
  { term: "Inbound fund", def: "A GIFT City fund that collects money (often from NRIs or foreign investors) and invests it in Indian markets.", link: { to: "/gift-city-fund-list", label: "Fund list" } },
  { term: "LRS (Liberalised Remittance Scheme)", def: "The RBI scheme that lets a resident individual send up to USD 250,000 abroad each financial year for permitted purposes, including investment in GIFT City funds.", link: { to: "/insights/lrs-tcs-gift-city", label: "LRS and GIFT City" } },
  { term: "NAV (Net Asset Value)", def: "The value of one unit of a fund, worked out from the value of its holdings less costs. GIFT City fund NAVs are usually in US Dollars." },
  { term: "NRE / NRO account", def: "Rupee accounts for NRIs in India. NRE money is freely repatriable; NRO money can be repatriated within limits.", link: { to: "/insights/gift-city-vs-nre-nro", label: "Compare" } },
  { term: "OCI (Overseas Citizen of India)", def: "A foreign citizen of Indian origin registered as an OCI cardholder. OCIs are generally treated like NRIs for investment purposes.", link: { to: "/who-its-for#oci", label: "OCI investors" } },
  { term: "Offer document / PPM", def: "The legal document describing a scheme: strategy, risks, fees, minimums and exit terms. Read it before investing." },
  { term: "OPI (Overseas Portfolio Investment)", def: "The FEMA category under which a resident's investment in foreign securities, including GIFT City funds, falls." },
  { term: "Outbound fund", def: "A GIFT City fund that invests outside India, such as in US or global equities.", link: { to: "/gift-city-vs-international-mutual-funds", label: "vs international MFs" } },
  { term: "PFIC", def: "Passive Foreign Investment Company, a US tax category that covers most non-US funds and can lead to punitive tax and Form 8621 reporting for US persons.", link: { to: "/insights/pfic-explained", label: "PFIC explained" } },
  { term: "PMS (Portfolio Management Services)", def: "A portfolio held in your own name and managed by a professional. In GIFT City the minimum is USD 75,000.", link: { to: "/funds-explained", label: "Fund types" } },
  { term: "Restricted scheme", def: "A GIFT City scheme open only to accredited or high-ticket investors, commonly with a USD 150,000 minimum." },
  { term: "Retail scheme", def: "A GIFT City scheme open to the general public, with minimums set by the scheme. Run only by a Registered FME (Retail)." },
  { term: "Schedule FA", def: "The part of the Indian income tax return where residents report foreign assets, including GIFT City and overseas holdings." },
  { term: "Section 10(4D)", def: "The Income-tax Act provision giving tax concessions to specified funds in an IFSC on certain income.", link: { to: "/taxation", label: "Taxation" } },
  { term: "TCS (Tax Collected at Source)", def: "Tax your bank collects on LRS remittances above the yearly threshold: 20% above ₹10 lakh for investment. It is credited back against your income tax.", link: { to: "/insights/lrs-tcs-gift-city#calculator", label: "TCS calculator" } },
  { term: "TRC (Tax Residency Certificate)", def: "A certificate from your country's tax authority confirming where you are tax resident, needed to claim treaty benefits." },
];

const Glossary = () => (
  <GuidePage
    path="/gift-city-glossary"
    headline="GIFT City Glossary: 27 Terms Explained Simply"
    seoTitle="GIFT City Glossary: IFSC, IFSCA, LRS, TCS, FME & More"
    description="Plain-English definitions of the terms you meet when investing through GIFT City: IFSC, IFSCA, FME, LRS, TCS, PFIC, inbound and outbound funds, retail and restricted schemes."
    crumb="GIFT City Glossary"
    datePublished="2026-10-08"
    sources={["ifsca", "rbiLrs", "incomeTax"]}
    extraSchema={[
      {
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        name: "GIFT City Glossary",
        url: "https://giftcityfunds.in/gift-city-glossary",
        hasDefinedTerm: TERMS.map((t) => ({ "@type": "DefinedTerm", name: t.term, description: t.def })),
      },
    ]}
  >
    <p className={p}>Every term below links to a fuller guide where one exists. Terms are in alphabetical order.</p>
    <nav aria-label="Jump to letter" className="flex flex-wrap gap-2 my-6">
      {[...new Set(TERMS.map((t) => t.term[0]))].map((l) => (
        <a key={l} href={`#letter-${l}`} className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center font-heading font-semibold text-primary hover:bg-teal/15">
          {l}
        </a>
      ))}
    </nav>
    <dl className="space-y-3">
      {TERMS.map((t, i) => {
        const first = i === 0 || TERMS[i - 1].term[0] !== t.term[0];
        return (
          <div key={t.term} id={first ? `letter-${t.term[0]}` : undefined} className="bg-surface border border-border rounded-lg p-5 scroll-mt-24">
            <dt className="font-heading font-semibold text-primary">{t.term}</dt>
            <dd className="font-body text-sm text-foreground-muted mt-1 leading-relaxed">
              {t.def}{" "}
              {t.link && (
                <Link to={t.link.to} className={a}>
                  {t.link.label}
                </Link>
              )}
            </dd>
          </div>
        );
      })}
    </dl>
  </GuidePage>
);

export default Glossary;
