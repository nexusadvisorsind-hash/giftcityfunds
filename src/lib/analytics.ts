// Google Analytics loads only after the visitor agrees (DPDP Act: consent before
// processing personal data such as IP address and cookie identifiers).
const GA_ID = "G-RVTXNPKQDS";
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
