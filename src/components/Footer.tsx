import { Link } from "react-router-dom";
import { openCookieSettings } from "@/lib/analytics";
import { Mail, Phone, MapPin } from "lucide-react";


type L = [string, string];
const GROUPS: [string, L[]][] = [
  ["Learn", [
    ["/what-is-gift-city", "What is GIFT City"], ["/funds-explained", "Funds Explained"], ["/how-to-invest", "How to Invest"],
    ["/taxation", "Taxation"], ["/gift-city-funds-risks", "Risks"], ["/gift-city-funds-pros-and-cons", "Pros and Cons"],
    ["/gift-city-funds-vs-mutual-funds", "GIFT City Funds vs Mutual Funds"], ["/gift-city-vs-international-mutual-funds", "vs International Funds"],
    ["/gift-city-aif", "GIFT City AIF"], ["/gift-city-pms", "GIFT City PMS"], ["/gift-city-feeder-funds", "Feeder Funds"],
    ["/gift-city-minimum-investment", "Minimums & Limits"], ["/gift-city-sip", "No SIP in GIFT City: why"], ["/gift-city-funds-returns", "Returns & Performance"],
    ["/what-is-ifsca", "What Is IFSCA"], ["/gift-city-glossary", "Glossary"], ["/gift-city-guide", "GIFT City Guide"],
  ]],
  ["Who it's for", [
    ["/who-its-for", "Who It's For"], ["/gift-city-funds-for-nri", "For NRIs"], ["/gift-city-funds-for-uae-nris", "NRIs in the UAE"],
    ["/gift-city-funds-for-gulf-nris", "NRIs in the Gulf"], ["/gift-city-funds-for-uk-nris", "NRIs in the UK"], ["/gift-city-funds-for-us-nris", "NRIs in the US"],
    ["/gift-city-funds-for-singapore-nris", "NRIs in Singapore"], ["/gift-city-funds-for-canada-nris", "NRIs in Canada"], ["/gift-city-funds-for-oci", "For OCIs"],
    ["/gift-city-funds-for-resident-indians", "For Resident Indians"], ["/invest-abroad-from-india", "Invest Abroad from India"],
    ["/gift-city-redemption-repatriation", "Redemption & Repatriation"], ["/gift-city-moving-country", "Moving Country"],
  ]],
  ["Funds", [
    ["/gift-city-fund-list", "GIFT City Fund List"], ["/gift-city-outbound-funds", "Outbound Funds"], ["/gift-city-inbound-funds", "Inbound Funds"],
    ["/gift-city-fund-compare", "Compare GIFT City Funds"], ["/parag-parikh-gift-city-fund", "Parag Parikh"], ["/hdfc-gift-city-funds", "HDFC"],
    ["/dsp-gift-city-funds", "DSP"], ["/tata-gift-city-fund", "Tata"], ["/aditya-birla-sun-life-gift-city-funds", "Aditya Birla Sun Life"],
    ["/edelweiss-gift-city-funds", "Edelweiss"], ["/mirae-asset-gift-city-funds", "Mirae Asset"], ["/gift-city-us-stocks-etfs", "US Stocks & ETFs"],
    ["/gift-city-funds-zerodha-groww", "Zerodha, Groww & GIFT City"], ["/gift-city-bonds", "GIFT City Bonds"], ["/gift-city-insurance", "GIFT City Insurance"],
  ]],
  ["Tools and updates", [
    ["/gift-city-route-checker", "Route Checker"], ["/insights/lrs-tcs-gift-city#calculator", "TCS Calculator"], ["/usd-vs-inr-calculator", "USD vs INR Calculator"],
    ["/gift-city-document-checklist", "Document Checklist"], ["/gift-city-in-numbers", "GIFT City in Numbers"], ["/gift-city-news", "GIFT City News"],
    ["/gift-city-rules-updates", "GIFT City Rule Changes"], ["/insights", "Insights"], ["/faqs", "FAQs"],
    ["/gift-city-vs-singapore-dubai", "vs Singapore, Dubai, Mauritius"], ["/gift-city-markets-gift-nifty", "GIFT Nifty & Exchanges"],
    ["/gift-city-family-office-fpi", "Family Offices & FPIs"], ["/gift-city-banks-and-business-setup", "Banks & Business Setup"],
  ]],
  ["About and legal", [
    ["/about", "About Anup Vatyani"], ["/contact", "Contact"], ["/privacy-policy", "Privacy Policy"], ["/terms-of-use", "Terms of Use"],
    ["/disclaimer", "Disclaimer"], ["/accessibility-statement", "Accessibility"],
  ]],
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Brand and contact */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 pb-8 border-b border-primary-foreground/20">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-teal rounded-xl flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xl">G</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg">GIFT CITY FUNDS</span>
                <span className="text-sm text-primary-foreground/80">An Informational Resource on GIFT City and IFSC Frameworks</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              giftcityfunds.in provides information about GIFT City and IFSC investment frameworks for NRIs and HNIs. Owned and operated by Anup Vatyani, AMFI-registered Mutual Fund Distributor (ARN 106715). Educational resources only; no personalised investment advice or financial planning.
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2"><Phone className="h-4 w-4" aria-hidden /><span>+91 9537533533</span></div>
            <div className="flex items-center gap-2"><Mail className="h-4 w-4" aria-hidden /><span>info@giftcityfunds.in</span></div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4" aria-hidden /><span>Ahmedabad, Gujarat, India</span></div>
          </div>
        </div>

        {/* All pages, grouped */}
        <nav aria-label="Site pages" className="h-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8 py-8">
          {GROUPS.map(([title, links]) => (
            <div key={title}>
              <h3 className="font-heading font-semibold text-base mb-3">{title}</h3>
              <ul className="space-y-1.5 text-sm">
                {links.map(([to, label]) => (
                  <li key={to + label}>
                    <Link to={to} className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">{label}</Link>
                  </li>
                ))}
                {title === "About and legal" && (
                  <li>
                    <button type="button" onClick={openCookieSettings} className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate text-left">Cookie settings</button>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </nav>

        <div className="border-t border-primary-foreground/20 pt-6">
          
          <div className="text-center mb-6">
            <p className="text-primary-foreground/70 text-sm mb-2">
              <strong>Disclaimer:</strong>
            </p>
            <p className="text-primary-foreground/70 text-xs max-w-5xl mx-auto leading-relaxed mb-2">
              All content on giftcityfunds.in is for general information and education only.
              GIFT CITY FUNDS and its owner Anup Vatyani (MFD ARN 106715) do not provide personalized investment, financial planning, or portfolio management through this website.
              Nothing here constitutes a solicitation to buy or sell any security. Users must verify facts via official scheme documents and consult qualified professionals before investing.
            </p>
            <p className="text-primary-foreground/70 text-xs max-w-5xl mx-auto leading-relaxed mb-2">
              This website is not affiliated with, endorsed by or operated by GIFT City Company Limited, IFSCA, SEBI, AMFI, or any asset management company or Fund Management Entity.
              Anup Vatyani is a Mutual Fund Distributor, not a SEBI-registered Investment Adviser.
            </p>
            <p className="text-primary-foreground/70 text-xs max-w-5xl mx-auto leading-relaxed">
              Mutual Fund investments are subject to market risk. Please read all scheme related documents carefully before investing.
            </p>
          </div>
          
          <p className="text-primary-foreground/70 text-xs text-center mt-6">
            © 2026 GIFT CITY FUNDS | Anup Vatyani (MFD ARN 106715) | info@giftcityfunds.in | Informational Use Only | Mutual Fund investments are subject to market risk.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
