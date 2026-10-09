// Performance budget: warns (never fails the build) when the JavaScript a
// visitor downloads before the first page works grows past the limits below.
// Sizes are gzip, roughly what Vercel sends over the network.
// Run: node scripts/check-bundle-size.mjs   (runs automatically after build)
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

const DIST = "dist";
const BUDGET_KB = {
  initialJs: 190, // entry script + modulepreloads on the home page
  anyChunk: 90, // any single lazy chunk
  css: 20,
};

const gz = (file) => zlib.gzipSync(fs.readFileSync(file)).length / 1024;
const html = fs.readFileSync(path.join(DIST, "index.html"), "utf8");
const initial = [
  ...html.matchAll(/<script[^>]+src="([^"]+\.js)"/g),
  ...html.matchAll(/<link rel="modulepreload"[^>]+href="([^"]+\.js)"/g),
].map((m) => path.join(DIST, m[1]));

const assets = path.join(DIST, "assets");
const files = fs.readdirSync(assets);
const initialKb = initial.reduce((s, f) => s + gz(f), 0);
const cssKb = files.filter((f) => f.endsWith(".css")).reduce((s, f) => s + gz(path.join(assets, f)), 0);
const chunks = files
  .filter((f) => f.endsWith(".js") && !initial.some((i) => i.endsWith(f)))
  .map((f) => ({ f, kb: gz(path.join(assets, f)) }))
  .sort((a, b) => b.kb - a.kb);

const warnings = [];
if (initialKb > BUDGET_KB.initialJs) warnings.push(`Initial JS ${initialKb.toFixed(1)} KB > ${BUDGET_KB.initialJs} KB`);
if (cssKb > BUDGET_KB.css) warnings.push(`CSS ${cssKb.toFixed(1)} KB > ${BUDGET_KB.css} KB`);
for (const c of chunks) if (c.kb > BUDGET_KB.anyChunk) warnings.push(`Chunk ${c.f} ${c.kb.toFixed(1)} KB > ${BUDGET_KB.anyChunk} KB`);

console.log(`[budget] initial JS ${initialKb.toFixed(1)} KB gz (limit ${BUDGET_KB.initialJs}), CSS ${cssKb.toFixed(1)} KB gz (limit ${BUDGET_KB.css}), largest lazy chunk ${chunks[0]?.f} ${chunks[0]?.kb.toFixed(1)} KB gz (limit ${BUDGET_KB.anyChunk})`);
if (warnings.length) {
  console.warn("[budget] WARNING, performance budget exceeded:\n  " + warnings.join("\n  "));
} else {
  console.log("[budget] within budget");
}
