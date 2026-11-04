// GIFT City funds: facts only, each with a public source. Alphabetical by fund
// house. Not exhaustive and not a ranking. Review monthly and update
// FUNDS_LAST_CHECKED. Where a fund house has not published a fact, say so.
// `excludes` lists residence countries the fund house says it does not accept
// (ISO codes: us, ca, uk). Only add an exclusion the source states.
export type Direction = "Inbound" | "Outbound" | "Gold";
export interface Fund {
  house: string;
  scheme: string;
  direction: Direction;
  invests: string;
  minimum: string;
  who: string;
  residents: boolean; // resident Indians can invest (LRS)
  nri: boolean; // NRIs can invest
  source: { label: string; url: string };
  excludes?: ("us" | "ca" | "uk")[];
  count?: number; // schemes in this row when it names more than one
  upcoming?: boolean; // listed by the fund house as coming soon
  slug?: string; // has its own page at /gift-city-fund/<slug> (rows with enough published facts)
  short?: string; // shorter display name for page titles
}

export const FUNDS_LAST_CHECKED = "31 October 2026";

export const LOW_MIN: Fund[] = [
  { house: "Aditya Birla Sun Life", scheme: "ABSL Emerging Market Equity Fund", slug: "absl-emerging-market-equity-fund", direction: "Outbound", invests: "ARGA Emerging Market Equity Fund and/or other emerging market funds", minimum: "USD 500, then multiples of USD 100", who: "Resident Indians under LRS; eligible Indian companies", residents: true, nri: false, source: { label: "Angel One report", url: "https://www.angelone.in/news/mutual-funds/aditya-birla-sun-life-amc-introduces-gift-city-funds-for-emerging-markets-and-indian-equities" } },
  { house: "Aditya Birla Sun Life", scheme: "ABSL India Growth Fund", slug: "absl-india-growth-fund", direction: "Inbound", invests: "Aditya Birla Sun Life equity schemes, including ETFs and index funds", minimum: "USD 500, then multiples of USD 100", who: "NRIs and foreign investors", residents: false, nri: true, source: { label: "Angel One report", url: "https://www.angelone.in/news/mutual-funds/aditya-birla-sun-life-amc-introduces-gift-city-funds-for-emerging-markets-and-indian-equities" } },
  { house: "DSP", scheme: "DSP Global Equity Fund", slug: "dsp-global-equity-fund", direction: "Outbound", invests: "A concentrated, actively managed portfolio of global companies", minimum: "USD 5,000; top-ups USD 500", who: "Resident Indians under LRS, and other eligible investors per the offer document", residents: true, nri: false, source: { label: "giftcity.dspim.com", url: "https://giftcity.dspim.com/product" } },
  { house: "Edelweiss", scheme: "Edelweiss Greater China Equity Fund", slug: "edelweiss-greater-china-equity-fund", direction: "Outbound", invests: "JPMorgan Funds – Greater China Fund (fund of fund)", minimum: "USD 5,000; top-ups USD 500", who: "Residents, NRIs and foreign nationals with a PAN; not open to Canada", residents: true, nri: true, excludes: ["ca"], source: { label: "edelweissmf.com/gift-city", url: "https://www.edelweissmf.com/gift-city" } },
  { house: "Edelweiss", scheme: "Edelweiss US Technology Equity Fund", slug: "edelweiss-us-technology-equity-fund", direction: "Outbound", invests: "JPMorgan Funds – US Technology Fund (fund of fund)", minimum: "USD 5,000; top-ups USD 500", who: "Residents, NRIs and foreign nationals with a PAN", residents: true, nri: true, source: { label: "Cafemutual, 9 Oct 2026", url: "https://cafemutual.com/news/cafe-alt/39013-edelweiss-launches-us-technology-fund-through-gift-city" } },
  { house: "HDFC", scheme: "HDFC International Developed Markets Equity Fund", slug: "hdfc-international-developed-markets-equity-fund", direction: "Outbound", invests: "A UBS Core MSCI World UCITS ETF (developed-market shares)", minimum: "USD 5,000; top-ups USD 500", who: "Resident Indians under LRS", residents: true, nri: false, source: { label: "Creso report", url: "https://creso.in/blog/gift-city-outbound-retail-funds-(2026)" } },
  { house: "HDFC", scheme: "HDFC International Emerging Markets Equity Fund", slug: "hdfc-international-emerging-markets-equity-fund", direction: "Outbound", invests: "A UBS Core MSCI EM UCITS ETF (emerging-market shares)", minimum: "USD 5,000; top-ups USD 500", who: "Resident Indians under LRS", residents: true, nri: false, source: { label: "Creso report", url: "https://creso.in/blog/gift-city-outbound-retail-funds-(2026)" } },
  { house: "JioBlackRock", scheme: "JioBlackRock Advantage World Equity Fund (IFSC)", slug: "jioblackrock-advantage-world-equity-fund", short: "JioBlackRock Advantage World Equity Fund", direction: "Outbound", invests: "BlackRock Advantage World Equity Fund (fund of fund, 90–100%)", minimum: "USD 5,000; top-ups USD 1,000", who: "Eligible investors in India seeking global equity exposure; check eligibility in the offer document", residents: true, nri: false, source: { label: "Angel One report, 27 Oct 2026", url: "https://www.angelone.in/news/mutual-funds/jioblackrock-international-amc-launches-jioblackrock-advantage-world-equity-fund-through-gift-city" } },
  { house: "Marcellus", scheme: "Marcellus Global Equities Fund", slug: "marcellus-global-equities-fund", direction: "Outbound", invests: "A concentrated portfolio of global companies", minimum: "USD 5,000; top-ups USD 2,000", who: "Resident Indians (including minors), NRIs, OCIs and others; the fund says it may not suit NRIs for tax reasons", residents: true, nri: true, source: { label: "marcellus.in", url: "https://www.marcellus.in/portfolio-management-services/marcellus-global-equities-fund" } },
  { house: "PPFAS (Parag Parikh)", scheme: "Parag Parikh IFSC S&P 500 Fund of Fund", slug: "parag-parikh-ifsc-sp-500-fund-of-fund", direction: "Outbound", invests: "An Invesco S&P 500 UCITS ETF", minimum: "USD 500 (cut from USD 5,000 on 25 Aug 2026)", who: "Resident Indians under LRS", residents: true, nri: false, source: { label: "gift.ppfas.com", url: "https://gift.ppfas.com/" } },
  { house: "PPFAS (Parag Parikh)", scheme: "Parag Parikh IFSC Nasdaq 100 Fund of Fund", slug: "parag-parikh-ifsc-nasdaq-100-fund-of-fund", direction: "Outbound", invests: "An Invesco Nasdaq-100 UCITS ETF", minimum: "USD 500 (cut from USD 5,000 on 25 Aug 2026)", who: "Resident Indians under LRS", residents: true, nri: false, source: { label: "gift.ppfas.com", url: "https://gift.ppfas.com/" } },
  { house: "PPFAS (Parag Parikh)", scheme: "Parag Parikh India Flexi Cap Fund (listed as coming soon)", slug: "parag-parikh-india-flexi-cap-fund-ifsc", short: "Parag Parikh India Flexi Cap Fund (IFSC)", direction: "Inbound", invests: "Parag Parikh Flexi Cap Fund (feeder)", minimum: "USD 10,000; top-ups USD 1,000", who: "NRIs, foreign individuals and FIIs; not resident Indians", residents: false, nri: true, upcoming: true, source: { label: "gift.ppfas.com", url: "https://gift.ppfas.com/product/inbound/parag_parikh_india_flexicap_fund" } },
  { house: "Sundaram", scheme: "Sundaram India Mid Cap GIFT", slug: "sundaram-india-mid-cap-gift", direction: "Inbound", invests: "Sundaram Mid Cap Fund (feeder)", minimum: "USD 5,000", who: "NRIs and global investors; check eligibility with the fund house", residents: false, nri: true, source: { label: "Cafemutual report", url: "https://cafemutual.com/news/cafe-alt/36995-sundaram-amc-launches-a-mid-cap-fund-at-gift-city" } },
  { house: "Tata", scheme: "Tata India Dynamic Equity Fund", slug: "tata-india-dynamic-equity-fund", direction: "Inbound", invests: "Indian equity mutual funds and ETFs (feeder)", minimum: "USD 500", who: "NRIs and foreign investors; not resident Indians or US persons", residents: false, nri: true, excludes: ["us"], source: { label: "tatamutualfund.com", url: "https://www.tatamutualfund.com/ifsc-gift-city" } },
];

export const HIGH_MIN: Fund[] = [
  { house: "Artha Bharat", scheme: "Artha Bharat FinMet Physical Gold Fund", direction: "Gold", invests: "At least 95% in LBMA-standard gold bars on the India International Bullion Exchange", minimum: "Not published; ask the manager", who: "Not published; ask the manager", residents: false, nri: false, source: { label: "Hubbis report", url: "https://www.hubbis.com/news/artha-bharat-launches-gift-city-s-first-physical-commodity-fund-and-gift-city-s-first-gold-fund-authorised-by-ifsca" } },
  { house: "Bandhan", scheme: "Bandhan India Large and Mid-cap Fund, India Small Cap Fund and India Government Securities Fund (IFSC)", slug: "bandhan-ifsc-india-funds", short: "Bandhan IFSC India Funds", direction: "Inbound", invests: "The matching Bandhan Mutual Fund schemes (Category III AIF feeders)", minimum: "Not published; ask the fund house", who: "Global investors", residents: false, nri: true, count: 3, source: { label: "bandhanamc.com/gift-city", url: "https://bandhanamc.com/gift-city/" } },
  { house: "Baroda BNP Paribas", scheme: "Baroda BNP Paribas GIFT US Small Cap Fund", slug: "baroda-bnp-paribas-gift-us-small-cap-fund", direction: "Outbound", invests: "BNP Paribas US Small Cap, a Luxembourg UCITS fund (Category III AIF, restricted scheme)", minimum: "USD 150,000 (Class U), USD 175,000 (Class T) or USD 250,000 (Class I)", who: "Resident Indians under LRS, family offices and HNIs; not US persons or Canadian residents", residents: true, nri: false, excludes: ["us", "ca"], source: { label: "barodabnpparibasmf.in", url: "https://www.barodabnpparibasmf.in/gift-us-small-cap-fund" } },
  { house: "DSP", scheme: "DSP India Fund IFSC, DSP India Equity Opps Fund, DSP India Absolute Return Fund", direction: "Inbound", invests: "India-focused (details not published)", minimum: "Not published; ask the fund house", who: "Not published; ask the fund house", residents: false, nri: false, count: 3, source: { label: "giftcity.dspim.com", url: "https://giftcity.dspim.com/" } },
  { house: "Edelweiss", scheme: "Edelweiss India Multimanager Equity Fund – Series I", slug: "edelweiss-india-multimanager-equity-fund", short: "Edelweiss India Multimanager Equity Fund", direction: "Inbound", invests: "Indian equity funds (Category III AIF)", minimum: "Not published", who: "Qualified investors, by private placement", residents: false, nri: false, source: { label: "edelweissmf.com/gift-city", url: "https://www.edelweissmf.com/gift-city" } },
  { house: "Equitree Capital", scheme: "Equitree Emerging Opportunities Fund", slug: "equitree-emerging-opportunities-fund", direction: "Inbound", invests: "Listed Indian small-cap companies (Category III AIF, restricted scheme)", minimum: "Not published; ask the manager", who: "NRIs, foreign nationals, family offices and institutions", residents: false, nri: true, source: { label: "Angel One report, 23 Apr 2026", url: "https://www.angelone.in/news/mutual-funds/equitree-capital-launches-offshore-aif-in-gift-city-for-global-investors" } },
  { house: "HDFC", scheme: "HDFC India Flexi Cap, Balanced Advantage, Midcap Opportunities, Small Cap, NIFTY 50 and Diversified Equity FOF", slug: "hdfc-ifsc-india-feeder-funds", short: "HDFC IFSC India Feeder Funds", direction: "Inbound", invests: "The matching HDFC Mutual Fund schemes (Category III AIF feeders)", minimum: "Above USD 150,000 (Class A) or above USD 50,000 (Class AR, not for US or UK investors)", who: "NRIs, foreign nationals and foreign institutions; not resident Indians", residents: false, nri: true, excludes: ["us"], count: 6, source: { label: "HDFC presentation, July 2026", url: "https://www.federal.bank.in/documents/d/guest/hdfc-ifsc-presentation-july-2026" } },
  { house: "ICICI Prudential", scheme: "India-focused restricted scheme (name not published)", direction: "Inbound", invests: "Indian markets", minimum: "Not published; ask the fund house", who: "Global investors", residents: false, nri: false, source: { label: "Business Today report", url: "https://www.businesstoday.in/latest/corporate/story/icici-prudential-amc-launches-gift-city-branch-eyes-global-capital-for-indian-markets-491270-2025-08-27" } },
  { house: "Mirae Asset", scheme: "Mirae Asset India Equity Allocation Fund", direction: "Inbound", invests: "Indian equity", minimum: "Not published on the site; ask the fund house", who: "See the offer document", residents: false, nri: false, source: { label: "Mirae Asset GIFT City", url: "https://giftcity.miraeassetmf.co.in/" } },
  { house: "Mirae Asset", scheme: "Mirae Asset Global Allocation Fund", slug: "mirae-asset-global-allocation-fund", direction: "Outbound", invests: "Global markets (close-ended Category III AIF)", minimum: "USD 151,000; USD 10,000 for accredited investors", who: "Accredited investors; resident Indians can invest under LRS", residents: true, nri: false, source: { label: "Value Research report", url: "https://www.valueresearchonline.com/stories/224953/mirae-asset-sif-launch-global-equity-gift-city/" } },
  { house: "Mirae Asset", scheme: "Mirae Asset Global Advantage Fund", slug: "mirae-asset-global-advantage-fund", direction: "Outbound", invests: "Global equity ETFs and offshore funds (restricted scheme)", minimum: "USD 151,000; USD 25,000 for accredited investors", who: "NRIs and foreign nationals only", residents: false, nri: true, source: { label: "Mirae Asset presentation", url: "https://www.federal.bank.in/documents/d/guest/mirae-asset-global-advantage-fund" } },
  { house: "Motilal Oswal", scheme: "Motilal Oswal GIFT City India Equity Fund of Funds", slug: "motilal-oswal-gift-city-india-equity-fof", direction: "Inbound", invests: "Mainly Motilal Oswal Large & Midcap Fund (Category III AIF)", minimum: "USD 150,000", who: "NRIs, foreign nationals and foreign institutions", residents: false, nri: true, source: { label: "Altport listing", url: "https://www.altportfunds.com/?p=8543" } },
  { house: "Nippon India", scheme: "Nippon India Large Cap Fund GIFT", slug: "nippon-india-large-cap-fund-gift", direction: "Inbound", invests: "Nippon India Large Cap Fund (feeder)", minimum: "USD 150,000", who: "NRIs and foreign nationals", residents: false, nri: true, source: { label: "Cafemutual report", url: "https://cafemutual.com/news/nfo/33944-nippon-life-india-amc-debuts-gift-city-with-nippon-india-large-cap-fund" } },
  { house: "Phillip Capital", scheme: "Phillip India Billion Opportunities Fund", slug: "phillip-india-billion-opportunities-fund", direction: "Inbound", invests: "Indian equity (Category III AIF)", minimum: "Not published; ask the manager", who: "NRIs and foreign nationals", residents: false, nri: true, source: { label: "Zerodha Daily Brief", url: "https://thedailybrief.zerodha.com/p/gift-city-explained-what-weve-learned" } },
  { house: "The Wealth Company", scheme: "The Wealth Company IFSC FoF", slug: "the-wealth-company-ifsc-fof", direction: "Inbound", invests: "Indian mutual fund and SIF schemes (Category III AIF)", minimum: "Not published; ask the fund house", who: "NRIs, HNIs and institutions; not resident Indians, US or Canadian residents", residents: false, nri: true, excludes: ["us", "ca"], source: { label: "Cafemutual report", url: "https://cafemutual.com/news/cafe-alt/38470-the-wealth-company-launches-a-dollar-denominated-gift-city-fund-of-funds-for-nris" } },
  { house: "Unifi Capital", scheme: "Rangoli India Fund", slug: "unifi-rangoli-india-fund", short: "Unifi Capital Rangoli India Fund", direction: "Inbound", invests: "Indian growth companies (Category III AIF)", minimum: "Not published; ask the manager", who: "Foreign and NRI investors", residents: false, nri: true, source: { label: "Entrepreneur report", url: "https://india.entrepreneur.com/news-and-trends/unifi-capital-launches-two-new-funds-at-gift-city/475451" } },
];


const ALL_FUNDS = [...LOW_MIN, ...HIGH_MIN];
/** Schemes open now (rows that name several schemes count each one; "coming soon" excluded). */
export const FUND_COUNT = ALL_FUNDS.filter((f) => !f.upcoming).reduce((n, f) => n + (f.count ?? 1), 0);
/** Fund houses and managers with at least one scheme on the list. */
export const HOUSE_COUNT = new Set(ALL_FUNDS.map((f) => f.house)).size;

/** Rows with their own fact page. */
export const FUND_PAGES = ALL_FUNDS.filter((f): f is Fund & { slug: string } => !!f.slug);
export const fundPath = (f: Fund) => (f.slug ? `/gift-city-fund/${f.slug}` : undefined);
export const fundName = (f: Fund) => f.short ?? f.scheme;
export const isRetail = (f: Fund) => LOW_MIN.includes(f);

/** Fund houses with their own page on this site. */
export const HOUSE_PAGES: Record<string, string> = {
  "Aditya Birla Sun Life": "/aditya-birla-sun-life-gift-city-funds",
  DSP: "/dsp-gift-city-funds",
  Edelweiss: "/edelweiss-gift-city-funds",
  HDFC: "/hdfc-gift-city-funds",
  "Mirae Asset": "/mirae-asset-gift-city-funds",
  "PPFAS (Parag Parikh)": "/parag-parikh-gift-city-fund",
  Tata: "/tata-gift-city-fund",
};
