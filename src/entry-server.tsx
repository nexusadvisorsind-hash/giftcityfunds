// Build-time only: used by scripts/prerender-routes.ts to render each public
// route to static HTML. Never loaded in the browser.
import { renderToString } from "react-dom/server";
import App from "./App";

interface HelmetDatum {
  toString(): string;
}

export function render(url: string) {
  const helmetContext: { helmet?: Record<string, HelmetDatum> } = {};
  const html = renderToString(<App ssrUrl={url} helmetContext={helmetContext} />);
  const h = helmetContext.helmet;
  const head = h
    ? [h.title, h.meta, h.link, h.script].map((d) => d.toString()).filter(Boolean).join("\n    ")
    : "";
  return { html, head };
}
