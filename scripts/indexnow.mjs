// Tells IndexNow search engines (Bing, Yandex, Seznam, Naver; Bing also feeds
// DuckDuckGo, Yahoo and ChatGPT search) about URLs in the sitemap changed in the last 14 days.
// Runs after each production build on Vercel. Google does not use IndexNow;
// it reads public/sitemap.xml instead.
// It never fails the build: any error is logged and ignored.
import { readFileSync } from "node:fs";

const KEY = "f2558d6d8768970e79b94becc2f06ef7"; // must match public/<KEY>.txt
const HOST = "giftcityfunds.in";

const isProduction = process.env.VERCEL_ENV === "production";
const dryRun = process.argv.includes("--dry-run");

if (!isProduction && !dryRun) {
  console.log("indexnow: skipped (not a Vercel production build)");
  process.exit(0);
}

try {
  const xml = readFileSync(new URL("../public/sitemap.xml", import.meta.url), "utf8");
  // Only pages changed in the last 14 days (by sitemap lastmod): IndexNow is
  // for telling engines about changes, not for resubmitting the whole site.
  const cutoff = Date.now() - 14 * 86400000;
  const urlList = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)]
    .filter((m) => Date.parse(m[2]) >= cutoff)
    .map((m) => m[1]);
  if (!urlList.length) {
    console.log("indexnow: no recently changed URLs");
    process.exit(0);
  }
  const body = { host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList };
  if (dryRun) {
    console.log(`indexnow: dry run, would submit ${urlList.length} URLs`);
    process.exit(0);
  }
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(15000),
  });
  console.log(`indexnow: submitted ${urlList.length} URLs, response ${res.status}`);
} catch (err) {
  console.log(`indexnow: not submitted (${err?.message ?? err})`);
}
process.exit(0);
