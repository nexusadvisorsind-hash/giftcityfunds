import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const root = document.getElementById("root")!;
const normalize = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p);

// Pages are prerendered to static HTML at build time (scripts/prerender-routes.ts).
// Hydrate only when the HTML we were served was rendered for this exact URL;
// otherwise (SPA fallback for /admin, /auth, unknown URLs) render from scratch.
const prerenderedPath = root.dataset.prerenderedPath;
if (prerenderedPath && normalize(prerenderedPath) === normalize(window.location.pathname)) {
  hydrateRoot(root, <App />);
} else {
  root.innerHTML = "";
  createRoot(root).render(<App />);
}
