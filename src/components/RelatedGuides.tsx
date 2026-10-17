import { Link, useLocation } from "react-router-dom";

interface Guide {
  to: string;
  title: string;
  blurb: string;
}

const GUIDES: Record<string, Guide> = {
  whatIs: { to: "/what-is-gift-city", title: "What Is GIFT City & IFSC?", blurb: "The basics of India's international financial centre and its regulator." },
  funds: { to: "/funds-explained", title: "GIFT City Fund Categories Explained", blurb: "Mutual Fund FoFs, AIFs, PMS and feeder funds compared." },
  who: { to: "/who-its-for", title: "Who Can Invest in GIFT City Funds?", blurb: "How it works for NRIs, OCIs and resident Indians." },
  us: { to: "/gift-city-funds-for-nri#us", title: "US-Based NRIs and PFIC", blurb: "Eligibility, PFIC, QEF and US reporting." },
  tax: { to: "/taxation", title: "Regulation and Taxation of GIFT City Funds", blurb: "IFSCA oversight and the India-side tax treatment." },
  how: { to: "/how-to-invest", title: "How to Invest in GIFT City Funds", blurb: "The process step by step, from KYC to allotment." },
  faqs: { to: "/faqs", title: "GIFT City Funds FAQs", blurb: "Short answers to the most common questions." },
  vsMf: { to: "/gift-city-funds-vs-mutual-funds", title: "GIFT City Funds vs Regular Mutual Funds", blurb: "Regulator, currency, minimums and tax side by side." },
  risks: { to: "/gift-city-funds-risks", title: "Risks of GIFT City Funds", blurb: "Market, currency, liquidity and tax risks to weigh." },
  byCountry: { to: "/gift-city-funds-for-nri", title: "GIFT City Funds for NRIs", blurb: "Eligibility, minimums and tax for every major NRI country." },
  bank: { to: "/insights/how-to-open-gift-city-bank-account", title: "How to Open a GIFT City Bank Account", blurb: "IFSC Banking Units, documents and funding." },
  pfic: { to: "/insights/pfic-explained", title: "PFIC Explained for US-Based NRIs", blurb: "Why PFIC status matters and what to ask about a fund." },
  lrs: { to: "/insights/lrs-tcs-gift-city", title: "LRS and TCS for GIFT City Funds", blurb: "Limits, 20% TCS and how to claim it back." },
  ten: { to: "/insights/ten-questions-nris-ask", title: "Ten Questions NRIs Ask", blurb: "Practical answers before you invest." },
  vsNre: { to: "/insights/gift-city-vs-nre-nro", title: "GIFT City Fund vs NRE/NRO Investing", blurb: "A straight comparison of the two routes." },
  list: { to: "/gift-city-fund-list", title: "GIFT City Fund List 2026", blurb: "Fund houses, inbound and outbound, with sources." },
  sip: { to: "/gift-city-sip", title: "Is There a SIP in GIFT City?", blurb: "No SIP; how lump-sum investing works instead." },
  vsIntl: { to: "/gift-city-vs-international-mutual-funds", title: "GIFT City vs International Mutual Funds", blurb: "The SEBI cap, currency, minimums and TCS compared." },
  prosCons: { to: "/gift-city-funds-pros-and-cons", title: "Pros and Cons of GIFT City Funds", blurb: "Advantages and drawbacks side by side." },
  ifsca: { to: "/what-is-ifsca", title: "What Is IFSCA?", blurb: "GIFT City's unified regulator in one page." },
  etfs: { to: "/gift-city-us-stocks-etfs", title: "US Stocks and ETFs via GIFT City", blurb: "How the IFSC broker route works, and the tax." },
  tcs: { to: "/insights/lrs-tcs-gift-city#calculator", title: "TCS Calculator", blurb: "Work out TCS on a GIFT City investment." },
  glossary: { to: "/gift-city-glossary", title: "GIFT City Glossary", blurb: "27 terms explained simply." },
  uae: { to: "/gift-city-funds-for-oci", title: "GIFT City Funds for OCIs", blurb: "Eligibility, documents and citizenship rules." },
  uk: { to: "/gift-city-funds-for-resident-indians", title: "GIFT City Funds for Resident Indians", blurb: "LRS, TCS and what residents can and cannot do." },
  centres: { to: "/gift-city-vs-singapore-dubai", title: "GIFT City vs Singapore, Dubai and Mauritius", blurb: "How the fund centres compare." },
  markets: { to: "/gift-city-markets-gift-nifty", title: "GIFT Nifty and GIFT City Exchanges", blurb: "NSE IX, India INX, IIBX and who can trade." },
  family: { to: "/gift-city-family-office-fpi", title: "Family Offices, FPIs and VC Funds", blurb: "Structures for larger pools of money." },
  banks: { to: "/gift-city-banks-and-business-setup", title: "Banks and Business Setup", blurb: "IFSC Banking Units and setting up in GIFT IFSC." },
  guide: { to: "/gift-city-guide", title: "GIFT City Guide", blurb: "Location, ownership, metro, living and working." },
  aif: { to: "/gift-city-aif", title: "GIFT City AIF", blurb: "Restricted and VC schemes, USD 150,000 minimum." },
  pms: { to: "/gift-city-pms", title: "GIFT City PMS", blurb: "Managed portfolios from USD 75,000." },
  feeder: { to: "/gift-city-feeder-funds", title: "GIFT City Feeder Funds", blurb: "How feeders work, and feeder vs direct FPI." },
  minimums: { to: "/gift-city-minimum-investment", title: "Minimum Investment and Limits", blurb: "Every minimum and LRS limit in one table." },
  insurance: { to: "/gift-city-insurance", title: "GIFT City Insurance for NRIs", blurb: "Dollar life policies, IFSCA and the 10(10D) change." },
  bonds: { to: "/gift-city-bonds", title: "GIFT City Bonds", blurb: "USD, masala and green bonds on India INX and NSE IX." },
  redeem: { to: "/gift-city-redemption-repatriation", title: "Redemption and Repatriation", blurb: "Getting money out, timelines and the 180-day rule." },
  moving: { to: "/gift-city-moving-country", title: "Moving Country?", blurb: "What happens to your holdings when you move." },
  rules: { to: "/gift-city-rules-updates", title: "GIFT City Rule Changes", blurb: "A dated log of what changed and what it means." },
  docs: { to: "/gift-city-document-checklist", title: "Document Checklist", blurb: "Build your KYC list in 30 seconds." },
  returns: { to: "/gift-city-funds-returns", title: "Returns and Performance", blurb: "How to check and compare a GIFT City fund." },
  apps: { to: "/gift-city-funds-zerodha-groww", title: "Zerodha, Groww and GIFT City", blurb: "What the apps offer, and what they don't." },
  checker: { to: "/gift-city-route-checker", title: "Which Route Applies to You?", blurb: "A 30-second checker for residents and NRIs." },
};

// Which guides to suggest at the bottom of each page.
const RELATED: Record<string, (keyof typeof GUIDES)[]> = {
  "/gift-city-funds-for-nri": ["docs", "insurance", "moving"],
  "/gift-city-funds-for-oci": ["byCountry", "us", "checker"],
  "/gift-city-funds-for-resident-indians": ["vsIntl", "etfs", "lrs"],
  "/what-is-gift-city": ["guide", "ifsca", "list"],
  "/funds-explained": ["aif", "pms", "feeder"],
  "/gift-city-aif": ["pms", "minimums", "family"],
  "/gift-city-pms": ["aif", "minimums", "list"],
  "/gift-city-feeder-funds": ["list", "family", "aif"],
  "/gift-city-minimum-investment": ["checker", "aif", "pms"],
  "/who-its-for": ["checker", "byCountry", "how"],
  "/taxation": ["tcs", "byCountry", "us"],
  "/how-to-invest": ["docs", "checker", "list"],
  "/faqs": ["glossary", "how", "prosCons"],
  "/gift-city-funds-vs-mutual-funds": ["vsIntl", "funds", "tax"],
  "/gift-city-funds-risks": ["returns", "prosCons", "how"],
  "/gift-city-vs-singapore-dubai": ["ifsca", "uae", "vsIntl"],
  "/gift-city-markets-gift-nifty": ["bonds", "etfs", "list"],
  "/gift-city-family-office-fpi": ["funds", "banks", "ifsca"],
  "/gift-city-banks-and-business-setup": ["bank", "tax", "family"],
  "/gift-city-guide": ["whatIs", "markets", "banks"],
  "/gift-city-fund-list": ["funds", "how", "checker"],
  "/gift-city-sip": ["tcs", "vsIntl", "etfs"],
  "/gift-city-vs-international-mutual-funds": ["etfs", "sip", "list"],
  "/gift-city-funds-pros-and-cons": ["risks", "vsIntl", "checker"],
  "/what-is-ifsca": ["whatIs", "centres", "list"],
  "/gift-city-us-stocks-etfs": ["apps", "vsIntl", "tcs"],
  "/insights/lrs-tcs-gift-city#calculator": ["lrs", "sip", "checker"],
  "/gift-city-glossary": ["whatIs", "ifsca", "how"],
  "/gift-city-route-checker": ["docs", "how", "tcs"],
  "/gift-city-insurance": ["byCountry", "bonds", "rules"],
  "/gift-city-funds-returns": ["risks", "list", "feeder"],
  "/gift-city-funds-zerodha-groww": ["etfs", "list", "how"],
  "/gift-city-bonds": ["markets", "etfs", "insurance"],
  "/gift-city-redemption-repatriation": ["moving", "tcs", "how"],
  "/gift-city-moving-country": ["redeem", "byCountry", "pfic"],
  "/gift-city-rules-updates": ["minimums", "tcs", "ifsca"],
  "/gift-city-document-checklist": ["how", "checker", "redeem"],
};

const RelatedGuides = () => {
  const { pathname } = useLocation();
  const keys = RELATED[pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname];
  if (!keys) return null;

  return (
    <aside aria-labelledby="related-guides" className="bg-surface border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 id="related-guides" className="font-heading font-semibold text-2xl text-primary mb-6">
          Related guides
        </h2>
        <ul className="grid md:grid-cols-3 gap-4">
          {keys.map((k) => {
            const g = GUIDES[k];
            return (
              <li key={g.to} className="bg-background border border-border rounded-lg p-5">
                <Link to={g.to} className="font-heading font-semibold text-primary hover:underline">
                  {g.title}
                </Link>
                <p className="font-body text-sm text-foreground-muted mt-2">{g.blurb}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default RelatedGuides;
