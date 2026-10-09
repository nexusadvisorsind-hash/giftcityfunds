import { createRoot, hydrateRoot } from 'react-dom/client'
import App, { preloadForPath } from './App.tsx'
import './index.css'

const root = document.getElementById("root")!;
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
