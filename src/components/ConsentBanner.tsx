import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CONSENT_EVENT, getConsent, loadAnalytics, setConsent } from "@/lib/analytics";

// Shown until the visitor chooses. Rendered only in the browser, after load,
// so prerendered HTML stays identical for every visitor.
const ConsentBanner = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const choice = getConsent();
    if (choice === "granted") loadAnalytics();
    if (choice === null) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(CONSENT_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_EVENT, reopen);
  }, []);

  if (!open) return null;

  const choose = (c: "granted" | "denied") => {
    setConsent(c);
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Analytics cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-background shadow-lg"
    >
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <p className="font-body text-xs md:text-sm text-foreground-muted flex-1 leading-snug">
          May we use Google Analytics cookies (they record your IP address and pages viewed) to see how the site is used?
          Only with your consent; change it any time in "Cookie settings".{" "}
          <Link to="/privacy-policy" className="text-secondary underline underline-offset-2">Privacy Policy</Link>
        </p>
        <div className="flex gap-2 shrink-0">
          <Button size="sm" variant="outline" onClick={() => choose("denied")}>
            Decline
          </Button>
          <Button size="sm" variant="gold" onClick={() => choose("granted")}>
            Accept analytics
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
