// "What changed" log for the fund list, newest first. Record only changes we
// made or confirmed, with the date we recorded them. Started 26 November 2026,
// so it is not a full history of GIFT City.
export interface Change { date: string; text: string; link?: [string, string] }

export const CHANGES_SINCE = "26 November 2026";

export const CHANGES: Change[] = [
  { date: "2026-11-26", text: "Added expense ratio, exit load, lock-in and fund manager for 18 funds, where the fund house has published them or two reports agree." },
  { date: "2026-11-26", text: "ABSL Global Bluechip Equity Fund (IFSC): marked closed for subscription, per the fund house page.", link: ["/gift-city-fund/absl-global-bluechip-equity-fund-ifsc", "Fund page"] },
  { date: "2026-11-26", text: "Parag Parikh India Flexi Cap Fund (IFSC): new fund offer 6 to 27 November 2026, as reported by Business Today.", link: ["/gift-city-fund/parag-parikh-india-flexi-cap-fund-ifsc", "Fund page"] },
  { date: "2026-11-26", text: "Added to the list: Standard Chartered Signature CIO Funds (4), Neo India All-Cap Core Equity Fund, ABSL India Flexicap Fund (IFSC), ABSL Global Bluechip Equity Fund (IFSC), Ashoka WhiteOak India Multi Cap GIFT Fund, Alchemy India Long Term Fund and Nuvama India EDGE Fund." },
];
