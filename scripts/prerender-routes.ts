// Postbuild: emit route-specific HTML shells (copies of the built index.html
// with per-route <title>, description, canonical, and OG tags baked in) so
// Googlebot sees distinct meta per URL without executing the SPA. React
// hydrates on top at runtime.

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve } from "path";

const BASE = "https://giftcityfunds.in";

interface Route {
  path: string;
  title: string;
  description: string;
  type?: string;
}

const routes: Route[] = [
  {
    path: "/terms-of-use",
    title: "Terms of Use — GIFT City Funds",
    description:
      "Terms of use governing access to GIFT City Funds — an independent educational resource by Anup Vatyani (AMFI ARN 106715).",
  },
  {
    path: "/disclaimer",
    title: "Disclaimer — GIFT City Funds",
    description:
      "Educational disclaimer for GIFT City Funds. Information only; no investment advice or solicitation. Anup Vatyani, AMFI ARN 106715.",
  },
  {
    path: "/accessibility-statement",
    title: "Accessibility Statement — GIFT City Funds",
    description:
      "Our commitment to WCAG 2.1 AA accessibility on GIFT City Funds, an independent educational resource on IFSC investing.",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy — GIFT City Funds",
    description:
      "How GIFT City Funds handles visitor data, cookies, analytics, and contact form submissions. Independent educational resource by Anup Vatyani.",
  },
];

const template = readFileSync(resolve("dist/index.html"), "utf8");

function render(route: Route) {
  const canonical = `${BASE}${route.path}`;
  let html = template;
  // Replace title
  html = html.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${route.title}</title>`,
  );
  // Replace description
  html = html.replace(
    /<meta name="description"[^>]*>/,
    `<meta name="description" content="${route.description}" />`,
  );
  // Replace OG title/description/url
  html = html.replace(
    /<meta property="og:title"[^>]*>/,
    `<meta property="og:title" content="${route.title}" />`,
  );
  html = html.replace(
    /<meta property="og:description"[^>]*>/,
    `<meta property="og:description" content="${route.description}" />`,
  );
  html = html.replace(
    /<meta property="og:url"[^>]*>/,
    `<meta property="og:url" content="${canonical}" />`,
  );
  html = html.replace(
    /<meta name="twitter:title"[^>]*>/,
    `<meta name="twitter:title" content="${route.title}" />`,
  );
  html = html.replace(
    /<meta name="twitter:description"[^>]*>/,
    `<meta name="twitter:description" content="${route.description}" />`,
  );
  // Inject canonical link before </head>
  html = html.replace(
    /<\/head>/,
    `    <link rel="canonical" href="${canonical}" />\n  </head>`,
  );
  return html;
}

for (const route of routes) {
  const dir = resolve("dist" + route.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(resolve(dir, "index.html"), render(route));
  console.log(`prerendered ${route.path}/index.html`);
}