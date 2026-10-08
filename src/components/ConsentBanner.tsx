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
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center gap-4">
        <p className="font-body text-sm text-foreground-muted flex-1">
          We'd like to use Google Analytics cookies to understand how visitors use this site. They collect data such as your
          IP address and pages viewed. We use them only if you agree, and you can change your mind at any time from
          "Cookie settings" in the footer. See our{" "}
          <Link to="/privacy-policy" className="text-secondary hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <Button variant="outline" onClick={() => choose("denied")}>
            Decline
          </Button>
          <Button variant="gold" onClick={() => choose("granted")}>
            Accept analytics
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
