// Writes dist/gift-city-funds.csv from src/data/funds.ts and fundExtras.ts, so
// the download always matches the site. Facts only; blanks mean "not
// published or not confirmed". Runs in postbuild.
import { writeFileSync } from "node:fs";
import { LOW_MIN, HIGH_MIN, FUNDS_LAST_CHECKED, fundName, fundPath, isRetail } from "../src/data/funds";
import { FUND_EXTRAS } from "../src/data/fundExtras";

const q = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;
const head = ["Fund", "Fund house", "Direction", "Type", "Invests in", "Minimum", "Who can invest", "Resident Indians (LRS)", "NRIs", "Expense ratio (TER)", "Exit load", "Lock-in", "Fund manager (IFSCA entity)", "Status", "Fund page", "Source"];
const rows = [...LOW_MIN, ...HIGH_MIN].map((f) => {
  const x = f.slug ? FUND_EXTRAS[f.slug] : undefined;
  return [
    fundName(f), f.house, f.direction, isRetail(f) ? "Retail" : "AIF or restricted", f.invests, f.minimum, f.who,
    f.residents ? "Yes" : "Not listed", f.nri ? "Yes" : "Not listed",
    x?.ter ?? "", x?.exitLoad ?? "", x?.lockIn ?? "", x?.manager ?? "",
    x?.status ?? (f.upcoming ? "Listed as coming soon" : "Open, per source"),
    fundPath(f) ? `https://giftcityfunds.in${fundPath(f)}` : "", f.source.url,
  ];
});
const note = [`GIFT City funds list from giftcityfunds.in, checked ${FUNDS_LAST_CHECKED}. Facts only: no NAVs, returns or rankings. Blank = not published or not confirmed. Free to use with a link to https://giftcityfunds.in/gift-city-fund-list`];
const csv = "﻿" + [note, head, ...rows].map((r) => r.map(q).join(",")).join("\r\n") + "\r\n";
writeFileSync(new URL("../dist/gift-city-funds.csv", import.meta.url), csv);
console.log(`funds csv: ${rows.length} rows`);
