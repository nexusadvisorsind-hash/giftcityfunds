// Google Analytics and Microsoft Clarity load only after the visitor agrees
// (DPDP Act: consent before processing personal data such as IP address and
// cookie identifiers).
const GA_ID = "G-RVTXNPKQDS";
const CLARITY_ID = "z3mq492luz";
const KEY = "gcf-analytics-consent"; // "granted" | "denied"
export const CONSENT_EVENT = "gcf:open-cookie-settings";

type Choice = "granted" | "denied";

export function getConsent(): Choice | null {
  try {
    const v = window.localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

let loaded = false;
export function loadAnalytics() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  const w = window as unknown as { dataLayer: unknown[]; gtag: (...a: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments);
  };
  w.gtag("js", new Date());
  w.gtag("config", GA_ID, { anonymize_ip: true });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
  loadClarity();
}

// Microsoft Clarity: heatmaps and session recordings, to see where visitors
// get stuck. Text is masked in Clarity's settings. Loaded with the same
// consent as Google Analytics, and told consent was given.
function loadClarity() {
  const w = window as unknown as { clarity?: ((...a: unknown[]) => void) & { q?: unknown[] } };
  const c = function clarity(...args: unknown[]) {
    (c.q = c.q || []).push(args);
  } as ((...a: unknown[]) => void) & { q?: unknown[] };
  w.clarity = w.clarity || c;
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
  document.head.appendChild(s);
  w.clarity("consent");
}

export function setConsent(choice: Choice) {
  try {
    window.localStorage.setItem(KEY, choice);
  } catch {
    /* storage blocked: choice applies to this visit only */
  }
  if (choice === "granted") {
    loadAnalytics();
  } else if (loaded) {
    // Analytics already ran this visit; reload so it stops.
    window.location.reload();
  }
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

/**
 * Record a lead or engagement event in Google Analytics.
 * Does nothing unless the visitor accepted analytics and it has loaded.
 * Events used: generate_lead (contact form), whatsapp_click,
 * newsletter_signup, contact_click (any "Talk to Anup" style link).
 */
export function trackEvent(name: string, params: Record<string, string | number> = {}) {
  if (!loaded || typeof window === "undefined") return;
  const w = window as unknown as { gtag?: (...a: unknown[]) => void };
  w.gtag?.("event", name, { page_path: window.location.pathname, ...params });
}
