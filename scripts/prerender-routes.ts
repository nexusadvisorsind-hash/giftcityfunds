// Postbuild: prerender every public route to static HTML.
//
// For each URL in public/sitemap.xml this renders the React app on the server
// and writes dist/<route>/index.html containing the full page content plus that
// page's own <title>, description, canonical, Open Graph tags and JSON-LD
// (taken from its <SEO> component). Crawlers, social previews and AI tools get
// real content without running JavaScript; React hydrates on top in the browser.
//
// To prerender a new page: add its route in src/App.tsx and its URL to
// public/sitemap.xml. Nothing here needs editing.

import { readFileSync, writeFileSync, mkdirSync, rmSync } from "fs";
import { resolve } from "path";
import { pathToFileURL } from "url";
import { build } from "vite";

const BASE = "https://giftcityfunds.in";
const SSR_OUT = resolve("node_modules/.prerender");

// Head tags that each page's <SEO> component supplies. The copies in
// index.html are defaults for the SPA fallback and must not be duplicated.
const PER_PAGE_TAGS: RegExp[] = [
  /\s*<title>[\s\S]*?<\/title>/,
  /\s*<meta name="description"[^>]*>/,
  /\s*<meta name="robots"[^>]*>/,
  /\s*<meta property="og:(?:type|site_name|title|description|url)"[^>]*>/g,
  /\s*<meta name="twitter:(?:card|title|description)"[^>]*>/g,
];

function routesFromSitemap(): string[] {
  const xml = readFileSync(resolve("public/sitemap.xml"), "utf8");
  const paths = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)]
    .map((m) => m[1])
    .filter((loc) => loc.startsWith(BASE))
    .map((loc) => loc.slice(BASE.length).replace(/\/+$/, "") || "/");
  return [...new Set(paths)];
}

async function main() {
  await build({
    logLevel: "warn",
    build: {
      ssr: resolve("src/entry-server.tsx"),
      outDir: SSR_OUT,
      emptyOutDir: true,
      rollupOptions: { output: { format: "esm", entryFileNames: "entry-server.mjs", manualChunks: undefined } },
    },
    ssr: { noExternal: true },
  });

  const { render } = (await import(pathToFileURL(resolve(SSR_OUT, "entry-server.mjs")).href)) as {
    render: (url: string) => { html: string; head: string };
  };

  const template = readFileSync(resolve("dist/index.html"), "utf8");
  if (!template.includes('<div id="root"></div>')) {
    throw new Error('prerender: <div id="root"></div> not found in dist/index.html');
  }

  const failures: string[] = [];
  for (const path of routesFromSitemap()) {
    try {
      const { html, head } = render(path);
      if (!head.includes("<title")) throw new Error("page rendered no <title> (missing <SEO>?)");

      let out = template;
      for (const tag of PER_PAGE_TAGS) out = out.replace(tag, "");
      out = out.replace("</head>", `    ${head}\n  </head>`);
      out = out.replace(
        '<div id="root"></div>',
        `<div id="root" data-prerendered-path="${path}">${html}</div>`,
      );

      const file = path === "/" ? resolve("dist/index.html") : resolve(`dist${path}/index.html`);
      if (path !== "/") mkdirSync(resolve(`dist${path}`), { recursive: true });
      writeFileSync(file, out);
      console.log(`prerendered ${path} (${Math.round(out.length / 1024)} kB)`);
    } catch (err) {
      failures.push(`${path}: ${(err as Error).message}`);
    }
  }

  // 404.html: hosts that support it (Vercel) serve this with a real 404 status
  // for unknown URLs instead of answering 200 with the app shell.
  try {
    const { html, head } = render("/404");
    let out = template;
    for (const tag of PER_PAGE_TAGS) out = out.replace(tag, "");
    out = out.replace("</head>", `    ${head}\n  </head>`);
    out = out.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
    writeFileSync(resolve("dist/404.html"), out);
    console.log("prerendered 404.html");
  } catch (err) {
    failures.push(`404.html: ${(err as Error).message}`);
  }

  rmSync(SSR_OUT, { recursive: true, force: true });

  if (failures.length) {
    throw new Error(`prerender failed for:\n  ${failures.join("\n  ")}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
