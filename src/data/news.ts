// GIFT City news, newest first. To add a story: put a new entry at the TOP,
// in our own words (2–3 factual sentences, no returns or recommendations),
// with the original source. Then update NEWS_UPDATED and the sitemap lastmod.
export interface NewsItem {
  date: string; // ISO yyyy-mm-dd
  title: string;
  summary: string;
  tag: "Funds" | "Regulation" | "Markets" | "Banking" | "Tax" | "Platforms" | "Insurance";
  source: { label: string; url: string };
  more?: [string, string]; // related guide on this site
}

export const NEWS_UPDATED = "24 October 2026";

export const NEWS: NewsItem[] = [
  {
    date: "2026-10-19",
    title: "Angel One starts rolling out US stocks through GIFT City",
    summary: "Angel One began offering US-listed stocks and ETFs through GIFT City to selected app users, following IFSCA approval, and expects to open it to all users by mid-November.",
    tag: "Platforms",
    source: { label: "UNI", url: "https://www.uniindia.com/west-india/business-india-angel-one-us-stock-investing/219556" },
    more: ["/gift-city-funds-zerodha-groww", "Zerodha, Groww and GIFT City"],
  },
  {
    date: "2026-10-18",
    title: "NMDC and SAIL set up subsidiaries in GIFT IFSC",
    summary: "The two public sector companies have each incorporated a subsidiary in GIFT City's IFSC: NMDC as a platform for overseas mineral projects, SAIL mainly as a group treasury centre.",
    tag: "Markets",
    source: { label: "Business Standard", url: "https://www.business-standard.com/markets/news/psus-tap-gift-city-for-overseas-mineral-hunt-amid-critical-supply-push-126101800834_1.html" },
  },
  {
    date: "2026-10-17",
    title: "Canara HSBC Life launches a dollar ULIP for NRIs via GIFT City",
    summary: "Canara HSBC Life introduced a US Dollar unit-linked insurance plan through GIFT City, aimed at NRIs, with global equity, gold and silver, and debt fund options. It is distributed through Policybazaar.",
    tag: "Insurance",
    source: { label: "Angel One report", url: "https://www.angelone.in/news/market-updates/canara-hsbc-life-introduces-us-dollar-denominated-global-wealth-plan" },
    more: ["/gift-city-insurance", "GIFT City insurance"],
  },
  {
    date: "2026-10-15",
    title: "SEZ rules amended to make GIFT City fund set-up easier",
    summary: "The SEZ (Fourth Amendment) Rules, 2026 let a fund in GIFT IFSC rely on its fund management entity's office space offer and lease deed, removing a separate set-up step for each fund.",
    tag: "Regulation",
    source: { label: "AIF Services (G.S.R. 895(E))", url: "https://www.aifservices.in/p/gift-ifsc-fund-setup-gets-a-regulatory" },
    more: ["/gift-city-rules-updates", "All rule changes"],
  },
  {
    date: "2026-10-15",
    title: "Aditya Birla Sun Life launches two retail GIFT City funds",
    summary: "Its IFSC subsidiary announced an outbound emerging-markets fund for resident Indians investing under LRS, and an inbound India Growth fund of funds for NRIs and foreign investors. Both have a stated minimum of USD 500.",
    tag: "Funds",
    source: { label: "Angel One report", url: "https://www.angelone.in/news/mutual-funds/aditya-birla-sun-life-amc-introduces-gift-city-funds-for-emerging-markets-and-indian-equities" },
    more: ["/gift-city-fund-list", "GIFT City fund list"],
  },
  {
    date: "2026-10-09",
    title: "Edelweiss launches a US technology fund through GIFT City",
    summary: "Edelweiss's GIFT City branch opened the Edelweiss US Technology Equity Fund, a retail fund of fund investing in JPMorgan Funds – US Technology Fund. It accepts residents under LRS, NRIs and foreign nationals, from USD 5,000.",
    tag: "Funds",
    source: { label: "Cafemutual", url: "https://cafemutual.com/news/cafe-alt/39013-edelweiss-launches-us-technology-fund-through-gift-city" },
    more: ["/gift-city-fund-list", "GIFT City fund list"],
  },
  {
    date: "2026-10-07",
    title: "Mirae Asset Sharekhan opens US stocks through GIFT City",
    summary: "Mirae Asset Sharekhan launched access to over 10,000 US stocks and ETFs, with fractional investing from USD 1, through its IFSCA-registered broker-dealer in GIFT City. Residents invest under LRS.",
    tag: "Platforms",
    source: { label: "UNI (Business Wire India)", url: "https://www.uniindia.com/business-wire-india/mirae-asset-sharekhan-enables-indian-investors-to-access-over-10000-us-stocks-and-etfs-through-gift/205332" },
    more: ["/gift-city-us-stocks-etfs", "US stocks via GIFT City"],
  },
  {
    date: "2026-09-29",
    title: "Groww starts rolling out US stocks through GIFT City",
    summary: "Groww began offering US stocks and ETFs to its users through the GIFT City Global Access Provider route, with wider availability expected over the following month.",
    tag: "Platforms",
    source: { label: "Free Press Journal", url: "https://www.freepressjournal.in/business/groww-rolls-out-us-stock-investing-amid-ai-wave" },
    more: ["/gift-city-funds-zerodha-groww", "Zerodha, Groww and GIFT City"],
  },
  {
    date: "2026-09-12",
    title: "GIFT City fund investors cross 16,000; retail now over half",
    summary: "IFSCA data showed 16,150 investors in GIFT City funds at 30 June 2026, with 8,467 in retail schemes, up from 3,438 in March. Fund management entities rose to 235 and schemes to 401.",
    tag: "Markets",
    source: { label: "Cafemutual (IFSCA data)", url: "https://cafemutual.com/news/industry/38786-gift-city-fund-commitments-cross-rs-428-lakh-crore-as-fme-count-reaches-235" },
    more: ["/gift-city-fund-list", "GIFT City fund list"],
  },
  {
    date: "2026-09-02",
    title: "GIFT City banks disburse USD 52.8 billion under RBI's FCNR(B) swap window",
    summary: "IFSCA said 20 IFSC Banking Units had disbursed about USD 52.82 billion under RBI's special FCNR(B) swap facility by 31 August 2026, and Indian banks had listed USD 11.12 billion of bonds on IFSC exchanges from April to August.",
    tag: "Banking",
    source: { label: "TaxGuru (PIB release)", url: "https://taxguru.in/finance/ifsca-highlights-gift-ifsc-foreign-currency-mobilisation-exceeding-usd-52-8-billion.html" },
    more: ["/gift-city-banks-and-business-setup", "Banks in GIFT City"],
  },
  {
    date: "2026-08-25",
    title: "PPFAS cuts minimum for its GIFT City S&P 500 and Nasdaq 100 funds to USD 500",
    summary: "PPFAS lowered the minimum first and additional investment in its two outbound GIFT City funds of funds from USD 5,000 to USD 500. Resident Indians invest in them under LRS.",
    tag: "Funds",
    source: { label: "IndMoney", url: "https://www.indmoney.com/blog/mutual-funds/parag-parikh-ppfas-gift-outbound-funds-minimum-investment-500" },
    more: ["/gift-city-fund-list", "GIFT City fund list"],
  },
  {
    date: "2026-08-10",
    title: "The Wealth Company launches a dollar fund of funds for NRIs",
    summary: "The Wealth Company's IFSC branch launched a US Dollar Category III AIF that invests in Indian funds. It is for NRIs and global investors; US, Canadian and resident Indian investors are not accepted.",
    tag: "Funds",
    source: { label: "Cafemutual", url: "https://cafemutual.com/news/cafe-alt/38470-the-wealth-company-launches-a-dollar-denominated-gift-city-fund-of-funds-for-nris" },
    more: ["/gift-city-aif", "GIFT City AIFs"],
  },
  {
    date: "2026-08-03",
    title: "360 ONE's GIFT City arm registered as a retail fund manager",
    summary: "IFSCA granted 360 ONE Global Asset Management (IFSC) final registration as a retail Fund Management Entity, allowing it to launch retail schemes from GIFT City. No scheme had been launched at the time.",
    tag: "Funds",
    source: { label: "Sahi", url: "https://www.sahi.com/news/360-one-wam-subsidiary-gets-final-ifsca-registration-as-retail-fund-manager-4366-PE1_COR" },
  },
  {
    date: "2026-07-27",
    title: "Dollar term insurance for NRIs offered through GIFT City",
    summary: "Policybazaar began offering US Dollar term insurance from partner insurers through GIFT City, with premiums and claims in dollars and remote onboarding for NRIs.",
    tag: "Insurance",
    source: { label: "Business Today", url: "https://www.businesstoday.in/amp/personal-finance/investment/story/policybazaar-launches-dollar-denominated-term-insurance-for-nris-via-gift-city-545492-2026-07-27" },
    more: ["/gift-city-insurance", "GIFT City insurance"],
  },
  {
    date: "2026-07-17",
    title: "Mauritius approves ratifying the India–Mauritius tax treaty protocol",
    summary: "Mauritius's Cabinet approved ratification of the 2024 protocol adding a principal purpose test to the treaty. It takes effect only after both countries complete their procedures.",
    tag: "Tax",
    source: { label: "EY tax alert", url: "https://www.ey.com/en_in/technical/alerts-hub/2026/07/mauritian-cabinet-approves-ratification-of-protocol-to-india-mauritius-dtaa" },
    more: ["/gift-city-vs-singapore-dubai", "GIFT City vs Mauritius"],
  },
  {
    date: "2026-07-04",
    title: "GIFT City gets its first physical gold fund",
    summary: "Artha Bharat Investment Managers IFSC launched the Artha Bharat FinMet Physical Gold Fund, which holds at least 95% in LBMA-standard gold bars traded on the India International Bullion Exchange.",
    tag: "Funds",
    source: { label: "Business Today", url: "https://www.businesstoday.in/mutual-funds/story/new-fund-launches-in-july-axis-mirae-motilal-oswal-launch-new-passive-funds-gift-city-gets-physical-gold-fund-540992-2026-07-04" },
    more: ["/gift-city-fund-list", "GIFT City fund list"],
  },
  {
    date: "2026-06-17",
    title: "Zerodha, Groww, Upstox and Angel One get IFSCA nod for US stocks",
    summary: "IFSCA approved Zerodha and Upstox as broker-dealers and Groww and Angel One as Global Access Providers, letting them offer US stocks through GIFT City.",
    tag: "Platforms",
    source: { label: "Business Today", url: "https://www.businesstoday.in/amp/markets/stocks/story/groww-zerodha-angel-one-upstox-secure-gift-city-approval-for-us-and-global-stock-investment-537332-2026-06-17" },
    more: ["/gift-city-us-stocks-etfs", "US stocks via GIFT City"],
  },
  {
    date: "2026-04-10",
    title: "IFSCA separates fiduciary roles for GIFT City schemes",
    summary: "A new IFSCA circular bars a scheme's fiduciary from also acting as its administrator, valuer, auditor or lender. Existing schemes must comply by 30 September 2026.",
    tag: "Regulation",
    source: { label: "Mondaq", url: "https://www.mondaq.com/india/fund-management-reits/1784396/ifsca-tightens-fund-management-regime-in-gift-city-accountability-certification-and-governance" },
    more: ["/gift-city-rules-updates", "All rule changes"],
  },
  {
    date: "2026-03-31",
    title: "GIFT City bond listings reach USD 70 billion",
    summary: "IFSCA's debt market report put cumulative debt listings on IFSC exchanges at USD 70.31 billion by 31 March 2026, with USD 49.20 billion outstanding.",
    tag: "Markets",
    source: { label: "TaxGuru (IFSCA report)", url: "https://taxguru.in/finance/ifsca-reviews-fy2025-26-debt-market-growth-outlook-gift-ifsc.html" },
    more: ["/gift-city-bonds", "GIFT City bonds"],
  },
];

export const formatNewsDate = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
