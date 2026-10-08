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
  us: { to: "/us-based-nris", title: "GIFT City Funds for US-Based NRIs", blurb: "PFIC, tax reporting and what to check first." },
  tax: { to: "/taxation", title: "Regulation and Taxation of GIFT City Funds", blurb: "IFSCA oversight and the India-side tax treatment." },
  how: { to: "/how-to-invest", title: "How to Invest in GIFT City Funds", blurb: "The process step by step, from KYC to allotment." },
  faqs: { to: "/faqs", title: "GIFT City Funds FAQs", blurb: "Short answers to the most common questions." },
  vsMf: { to: "/gift-city-funds-vs-mutual-funds", title: "GIFT City Funds vs Regular Mutual Funds", blurb: "Regulator, currency, minimums and tax side by side." },
  risks: { to: "/gift-city-funds-risks", title: "Risks of GIFT City Funds", blurb: "Market, currency, liquidity and tax risks to weigh." },
  byCountry: { to: "/gift-city-funds-nri-tax-by-country", title: "GIFT City Funds for NRIs by Country", blurb: "UAE, UK, US, Canada and Singapore: what to check." },
  pfic: { to: "/insights/pfic-explained", title: "PFIC Explained for US-Based NRIs", blurb: "Why PFIC status matters and what to ask about a fund." },
  lrs: { to: "/insights/lrs-tcs-gift-city", title: "LRS, TCS and GIFT City", blurb: "What resident Indian investors should know." },
  ten: { to: "/insights/ten-questions-nris-ask", title: "Ten Questions NRIs Ask", blurb: "Practical answers before you invest." },
  vsNre: { to: "/insights/gift-city-vs-nre-nro", title: "GIFT City Fund vs NRE/NRO Investing", blurb: "A straight comparison of the two routes." },
};

// Which guides to suggest at the bottom of each page.
const RELATED: Record<string, (keyof typeof GUIDES)[]> = {
  "/what-is-gift-city": ["funds", "vsMf", "who"],
  "/funds-explained": ["vsMf", "risks", "how"],
  "/who-its-for": ["byCountry", "how", "vsNre"],
  "/us-based-nris": ["pfic", "tax", "how"],
  "/taxation": ["byCountry", "us", "lrs"],
  "/how-to-invest": ["who", "risks", "faqs"],
  "/faqs": ["whatIs", "how", "ten"],
  "/gift-city-funds-vs-mutual-funds": ["funds", "tax", "who"],
  "/gift-city-funds-risks": ["funds", "byCountry", "how"],
  "/gift-city-funds-nri-tax-by-country": ["tax", "us", "risks"],
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
