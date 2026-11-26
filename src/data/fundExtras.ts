// Extra published facts per fund page (keyed by slug): costs, exit load,
// manager, dates. Each value comes from the fund house's own document or from
// at least two independent reports, listed in `sources`. No NAVs, returns or
// rankings. If a fact is not published or not confirmed twice, leave it out.
// Costs and loads change: re-check monthly with FUNDS_LAST_CHECKED.
export interface Src { label: string; url: string }
export interface FundExtra {
  manager?: string; // the IFSCA-registered fund management entity
  structure?: string;
  ter?: string; // total expense ratio, as published
  exitLoad?: string;
  lockIn?: string;
  dealing?: string;
  launched?: string; // launch, NFO or inception date
  benchmark?: string;
  ifsca?: string; // IFSCA registration or acknowledgement numbers
  status?: string; // overrides the default "Open, per our source"
  docs?: Src[]; // offer document, factsheet, FAQ on the fund house site
  sources: Src[];
}

const PPFAS_SOURCES: Src[] = [
  { label: "Business Today, 20 Nov 2025", url: "https://www.businesstoday.in/mutual-funds/story/ppfas-to-launch-parag-parikh-ifsc-sp-500-fund-of-fund-what-it-means-for-indian-investors-502938-2025-11-20" },
  { label: "Angel One", url: "https://www.angelone.in/news/mutual-funds/ppfas-gets-nod-for-2-new-gift-city-based-funds-ifsc-s-p-500-fof-and-nasdaq-100-fof" },
  { label: "Cafemutual: 15 GIFT City retail funds", url: "https://cafemutual.com/news/cafe-alt/38868-15-gift-city-retail-funds-now-available-for-mfds" },
];
const ABSL_RETAIL: Src[] = [
  { label: "Cafemutual", url: "https://cafemutual.com/news/cafe-alt/39083-absl-amc-launches-two-retail-fofs-from-gift-city" },
  { label: "Angel One", url: "https://www.angelone.in/news/mutual-funds/aditya-birla-sun-life-amc-introduces-gift-city-funds-for-emerging-markets-and-indian-equities" },
];

export const FUND_EXTRAS: Record<string, FundExtra> = {
  "absl-emerging-market-equity-fund": {
    manager: "Aditya Birla Sun Life AMC International (IFSC) Limited",
    structure: "Open-ended fund of funds, retail scheme",
    launched: "Announced 15 October 2026",
    sources: ABSL_RETAIL,
  },
  "absl-india-growth-fund": {
    manager: "Aditya Birla Sun Life AMC International (IFSC) Limited",
    structure: "Open-ended fund of funds, retail scheme",
    launched: "Announced 15 October 2026",
    sources: ABSL_RETAIL,
  },
  "absl-global-bluechip-equity-fund-ifsc": {
    structure: "Close-ended Category III AIF (feeder)",
    status: "Closed for subscription, per the fund house page",
    sources: [{ label: "Aditya Birla Sun Life GIFT City page", url: "https://alternateinvestments.adityabirlacapital.com/gift-city" }],
  },
  "dsp-global-equity-fund": {
    manager: "DSP Fund Managers IFSC Private Limited",
    structure: "Open-ended retail scheme, actively managed",
    ter: "Direct 1.00% a year; Regular 1.75% a year",
    exitLoad: "1% if redeemed within 2 years; nil after",
    lockIn: "None",
    docs: [{ label: "DSP GIFT City fund page and FAQ", url: "https://giftcity.dspim.com/faq" }],
    sources: [
      { label: "DSP GIFT City product page", url: "https://giftcity.dspim.com/product" },
      { label: "Belong help centre", url: "https://belong.zohodesk.in/portal/en/kb/articles/what-are-the-charges-associated-with-this-fund-16-12-2025" },
      { label: "Vested Finance", url: "https://support.vestedfinance.com/portal/en/kb/articles/what-is-the-cost-structure-of-the-dsp-global-equity-fund" },
    ],
  },
  "edelweiss-greater-china-equity-fund": {
    manager: "Edelweiss Asset Management Limited (IFSC Branch)",
    structure: "Open-ended fund of funds, retail scheme",
    docs: [{ label: "Factsheet (September 2026)", url: "https://www.edelweissmf.com/Files/GIFT/Downloads/Factsheet/Factsheets/Factsheet_Edelweiss_Greater_China_Equity_Fund_September_2026_13102026091850.pdf" }],
    sources: [{ label: "Edelweiss factsheet", url: "https://www.edelweissmf.com/Files/GIFT/Downloads/Factsheet/Factsheets/Factsheet_Edelweiss_Greater_China_Equity_Fund_September_2026_13102026091850.pdf" }],
  },
  "edelweiss-us-technology-equity-fund": {
    manager: "Edelweiss Asset Management Limited (IFSC Branch)",
    structure: "Open-ended fund of funds, retail scheme (95 to 100% in JPMorgan Funds – US Technology Fund)",
    exitLoad: "2% within 395 days; 1% from 396 to 760 days; nil after",
    launched: "8 October 2026",
    sources: [
      { label: "Cafemutual", url: "https://cafemutual.com/news/cafe-alt/39013-edelweiss-launches-us-technology-fund-through-gift-city" },
      { label: "5paisa", url: "https://www.5paisa.com/blog/edelweiss-asset-management-launches-us-technology-equity-fund-through-gift-city" },
      { label: "Dealroom", url: "https://dealroom.co/news/160777-edelweiss-opens-dollar-route-to-us-tech-via-gift-city-with-5-000-entry/" },
    ],
  },
  "franklin-us-equity-ifsc-fund": {
    manager: "Franklin Templeton Asset Management (IFSC) Private Limited",
    structure: "Open-ended feeder fund, retail scheme",
    exitLoad: "2% if redeemed within 24 months; nil after",
    dealing: "Daily after the NFO; cut-off 3 pm IST",
    launched: "NFO 11 November to 11 December 2026",
    sources: [
      { label: "Angel One", url: "https://www.angelone.in/news/mutual-funds/franklin-templeton-introduces-first-outbound-fund-from-gift-city-for-us-stock-investments" },
      { label: "Cafemutual", url: "https://cafemutual.com/news/cafe-alt/39316-franklin-templeton-launches-outbound-fund-from-gift-city-offers-us-equity-exposure" },
      { label: "Entrepreneur India", url: "https://india.entrepreneur.com/?p=101498" },
    ],
  },
  "jioblackrock-advantage-world-equity-fund": {
    manager: "Jio BlackRock International AMC (IFSC) Private Limited",
    structure: "Open-ended fund of funds, retail scheme (90 to 100% in BlackRock Advantage World Equity Fund)",
    ter: "Direct 0.90% a year; Regular 1.40% a year (indicative, per the launch)",
    exitLoad: "Nil",
    launched: "26 October 2026",
    sources: [
      { label: "Business Today", url: "https://www.businesstoday.in/personal-finance/investment/story/jioblackrock-launches-new-global-equity-fund-minimum-investment-starts-at-5000-563692-2026-10-26" },
      { label: "Cafemutual", url: "https://cafemutual.com/news/cafe-alt/39145-jioblackrock-launches-gift-city-global-equity-fund-for-indians-with-usd-5000-of-minimum-investment" },
      { label: "Free Press Journal", url: "https://www.freepressjournal.in/business/jioblackrock-launches-global-equity-fund-through-gift-city" },
    ],
  },
  "marcellus-global-equities-fund": {
    manager: "Marcellus Investment Managers Private Limited (IFSC Branch)",
    structure: "Retail scheme, actively managed global equities",
    ter: "Direct 1.25% a year; Regular 2% a year",
    exitLoad: "2% if redeemed within 24 months (each tranche); nil after",
    lockIn: "None",
    launched: "NFO 8 to 19 June 2026",
    docs: [{ label: "Marcellus FAQ", url: "https://marcellus.helpscoutdocs.com/article/190-faq" }],
    sources: [
      { label: "Marcellus FAQ", url: "https://marcellus.helpscoutdocs.com/article/190-faq" },
      { label: "Business Today", url: "https://www.businesstoday.in/mutual-funds/story/nfo-alert-marcellus-to-launch-global-equities-fund-in-gift-city-what-does-this-mean-for-you-534974-2026-06-05" },
      { label: "PMS Bazaar", url: "https://pmsbazaar.com/News/Marcellus-Investment-Managers-Private-Limited-IFSC-Branch/marcellus_investment_managers_gift_launch_global_equities_fund_nfo_for_indian_retail_investors" },
    ],
  },
  "parag-parikh-ifsc-sp-500-fund-of-fund": {
    manager: "PPFAS Alternate Asset Managers IFSC Private Limited",
    structure: "Open-ended retail scheme; fund of funds in S&P 500 UCITS ETFs (passive)",
    ter: "Direct (Class A) 0.30% a year; Regular (Class B) 0.60% a year, as announced at launch",
    exitLoad: "Nil",
    lockIn: "None",
    launched: "NFO 23 February to 16 March 2026",
    ifsca: "FME registration FDM2025FMR0814; scheme acknowledgement IFSC/Retail/2025-26/005",
    docs: [{ label: "Offer document (March 2026)", url: "https://gift.ppfas.com/product/outbound/parag_parikh_ifsc_s&p_500_fof/PPISP500_Offer_Document.pdf" }],
    sources: PPFAS_SOURCES,
  },
  "parag-parikh-ifsc-nasdaq-100-fund-of-fund": {
    manager: "PPFAS Alternate Asset Managers IFSC Private Limited",
    structure: "Open-ended retail scheme; fund of funds in Nasdaq 100 UCITS ETFs (passive)",
    ter: "Direct (Class A) 0.30% a year; Regular (Class B) 0.60% a year, as announced at launch",
    exitLoad: "Nil",
    lockIn: "None",
    launched: "NFO 23 February to 16 March 2026",
    ifsca: "FME registration FDM2025FMR0814",
    docs: [{ label: "Offer document (March 2026)", url: "https://gift.ppfas.com/product/outbound/parag_parikh_ifsc_nasdaq_100_fof/PPINDX100_Offer_Document.pdf" }],
    sources: PPFAS_SOURCES,
  },
  "parag-parikh-india-flexi-cap-fund-ifsc": {
    manager: "PPFAS Alternate Asset Managers IFSC Private Limited",
    structure: "US Dollar feeder into Parag Parikh Flexi Cap Fund",
    launched: "NFO 6 to 27 November 2026, as reported",
    status: "In NFO, per Business Today; the fund house page still showed \"coming soon\" when we checked",
    sources: [
      { label: "Business Today", url: "https://www.businesstoday.in/mutual-funds/story/ppfas-launches-dollar-denominated-flexi-cap-fund-at-gift-city-who-can-invest-and-what-are-the-charges-569083-2026-11-23" },
      { label: "PPFAS GIFT fund page", url: "https://gift.ppfas.com/product/inbound/parag_parikh_india_flexicap_fund" },
    ],
  },
  "tata-india-dynamic-equity-fund": {
    structure: "Retail scheme; inbound feeder into Tata mutual fund equity schemes and ETFs",
    ter: "Direct (Class A) up to 1.75% a year; Regular (Class B) 2.50% a year",
    exitLoad: "Nil",
    lockIn: "None",
    launched: "Inception 5 December 2025",
    benchmark: "Nifty 500 TRI",
    docs: [
      { label: "Investor FAQ", url: "https://www.tatamutualfund.com/system/files/2025-10/Faqs%20on%20Investor%20Onboarding%20Final%20.pdf" },
      { label: "Factsheet (October 2026)", url: "https://www.tatamutualfund.com/system/files/2026-10/Tata%20India%20Dynamic%20Equity%20Fund%20Factsheet%20-%20B%20-%20Oct%2726.pdf" },
    ],
    sources: [
      { label: "Tata investor FAQ", url: "https://www.tatamutualfund.com/system/files/2025-10/Faqs%20on%20Investor%20Onboarding%20Final%20.pdf" },
      { label: "Tata factsheet", url: "https://www.tatamutualfund.com/system/files/2026-10/Tata%20India%20Dynamic%20Equity%20Fund%20Factsheet%20-%20B%20-%20Oct%2726.pdf" },
      { label: "Belong help centre", url: "https://belong.zohodesk.in/portal/en/kb/inbound-mutual-funds/schemes-available/tata-india-dynamic-equity-fund-direct" },
    ],
  },
  "standard-chartered-signature-cio-funds": {
    manager: "SBI Funds International (IFSC) Limited, with Standard Chartered",
    structure: "Four open-ended retail schemes, multi-asset, investing through funds managed by Amundi",
    launched: "12 November 2026",
    sources: [
      { label: "Cafemutual", url: "https://cafemutual.com/news/cafe-alt/39280-standard-chartered-launches-four-signature-cio-funds-from-gift-city" },
      { label: "Bar & Bench", url: "https://www.barandbench.com/law-firms/dealstreet/trilegal-advises-sbi-funds-international-on-launch-of-signature-cio-funds-from-gift-city" },
      { label: "Angel One", url: "https://www.angelone.in/news/market-updates/standard-chartered-begins-wealth-services-in-gift-city-with-four-signature-cio-funds" },
    ],
  },
  "neo-india-all-cap-core-equity-fund": {
    manager: "Neo Asset Management Private Limited (IFSC Branch)",
    structure: "Open-ended multi-manager fund of funds, Category III AIF",
    launched: "December 2025",
    sources: [
      { label: "Business Today", url: "https://www.businesstoday.in/mutual-funds/story/india-all-cap-core-equity-fund-launched-neo-asset-management-global-investors-507280-2025-12-18" },
      { label: "Angel One", url: "https://www.angelone.in/news/mutual-funds/neo-asset-management-debuts-india-s-first-multi-amc-fund-via-gift-city" },
    ],
  },
  "ashoka-whiteoak-india-multi-cap-gift-fund": {
    manager: "Ashoka WhiteOak Capital Management (GIFT) LLP",
    structure: "Open-ended Category III AIF (non-retail), feeder",
    ifsca: "IFSC/AIF3/2024-25/0188, registered 13 November 2024",
    sources: [
      { label: "Altport listing", url: "https://www.altportfunds.com/investments/ashoka-whiteoak-india-multi-cap-gift-fund/" },
      { label: "IFSCA directory (manager)", url: "https://www.ifsca.gov.in/Directory/index/D6DYiDzBhbs=" },
    ],
  },
  "alchemy-india-long-term-fund": {
    manager: "Alchemy Investment Management LLP",
    launched: "Re-domiciled to GIFT City in May 2023",
    sources: [
      { label: "Nishith Desai / Nuvama AltLens", url: "https://www.nishithdesai.com/fileadmin/user_upload/pdfs/Research%20Articles/Nuvama-AltLens.pdf" },
      { label: "IFSCA directory (manager)", url: "https://www.ifsca.gov.in/Directory/index/D6DYiDzBhbs=" },
    ],
  },
};
