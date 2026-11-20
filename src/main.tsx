import { createRoot, hydrateRoot } from 'react-dom/client'
import App, { preloadForPath } from './App.tsx'
import './index.css'

const root = document.getElementById("root")!;

// Moving parts (the home facts strip) start on the visitor's first scroll,
// tap, mouse move or key press, so the first screen is settled as soon as it loads.
const startMotion = () => {
  document.documentElement.classList.add("gcf-moved");
  ["scroll", "pointerdown", "pointermove", "keydown", "touchstart"].forEach((e) => window.removeEventListener(e, startMotion));
};
["scroll", "pointerdown", "pointermove", "keydown", "touchstart"].forEach((e) => window.addEventListener(e, startMotion, { passive: true }));
const normalize = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p);

// Pages are prerendered to static HTML at build time (scripts/prerender-routes.ts).
// Each page's code is split into its own file; load the current page's file
// first, then hydrate the prerendered HTML (or render from scratch for SPA-only
// URLs such as /admin, /auth and unknown paths).
const prerenderedPath = root.dataset.prerenderedPath;
const path = window.location.pathname;
preloadForPath(path)
  .catch(() => undefined)
  .then(() => {
    if (prerenderedPath && normalize(prerenderedPath) === normalize(path)) {
      hydrateRoot(root, <App />);
    } else {
      root.innerHTML = "";
      createRoot(root).render(<App />);
    }
  });
