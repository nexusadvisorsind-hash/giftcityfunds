import { useId, useState } from "react";
import { Link } from "react-router-dom";
import { BellRing, Check } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

// "Fund launch alerts" sign-up. Reuses the existing subscribe-newsletter
// backend; `source` records which page the sign-up came from. Consent is a
// separate, unticked box (DPDP Act): nothing is sent without it.
export const FundAlerts = ({ source, className = "" }: { source: string; className?: string }) => {
  const id = useId();
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setState("error");
      setMsg("Please enter a valid email address.");
      return;
    }
    if (!agree) {
      setState("error");
      setMsg("Please tick the box to agree to receive the alerts.");
      return;
    }
    setState("sending");
    try {
      // Loaded on submit so the backend client is not in every visitor's first download.
      const { supabase } = await import("@/integrations/supabase/client");
      const { error } = await supabase.functions.invoke("subscribe-newsletter", {
        body: { email: trimmed, source: `fund_alerts:${source}` },
      });
      if (error) throw error;
      trackEvent("newsletter_signup", { source: `fund_alerts:${source}` });
      setState("done");
      setEmail("");
    } catch (err) {
      console.error(err);
      setState("error");
      setMsg("That didn't go through. Please try again in a moment.");
    }
  }

  return (
    <section aria-labelledby={`${id}-h`} className={`rounded-2xl border-[1.5px] border-emerald-500/70 bg-white p-5 sm:p-6 shadow-[0_6px_16px_rgba(5,150,105,0.08)] ${className}`}>
      <div className="flex items-start gap-4">
        <span className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent" aria-hidden>
          <BellRing className="h-5 w-5 text-secondary" />
        </span>
        <div className="flex-1 min-w-0">
          <h2 id={`${id}-h`} className="font-heading font-bold text-xl text-primary">Get an alert when a new GIFT City fund launches</h2>
          <p className="mt-1 font-body text-foreground-muted">
            A short email when a fund opens, a minimum changes or a rule affects NRIs or resident Indians. Facts only, about once or twice a month.
          </p>

          {state === "done" ? (
            <p className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-4 py-3 font-body font-semibold text-emerald-800" role="status">
              <Check className="h-5 w-5" aria-hidden /> You're on the list. The next alert will come from info@giftcityfunds.in.
            </p>
          ) : (
            <form onSubmit={submit} noValidate className="mt-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <label htmlFor={`${id}-email`} className="sr-only">Email address</label>
                <input
                  id={`${id}-email`}
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="h-12 w-full sm:flex-1 rounded-lg border border-input bg-white px-4 font-body text-primary placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary"
                />
                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="h-12 rounded-lg bg-secondary px-6 font-body font-semibold text-white hover:bg-secondary-hover disabled:opacity-60"
                >
                  {state === "sending" ? "Signing up…" : "Get alerts"}
                </button>
              </div>
              <label className="mt-3 flex items-start gap-2.5 font-body text-sm text-foreground-muted">
                <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-0.5 h-4 w-4 shrink-0 accent-[#1D4ED8]" />
                <span>
                  I agree to receive GIFT City fund alerts by email from Anup Vatyani (AMFI-registered Mutual Fund Distributor, ARN 106715). I can unsubscribe at any time by replying "unsubscribe". See the <Link to="/privacy-policy" className="text-secondary underline underline-offset-2">Privacy Policy</Link>.
                </span>
              </label>
              {state === "error" && <p className="mt-2 font-body text-sm font-semibold text-destructive" role="alert">{msg}</p>}
            </form>
          )}
          <p className="mt-3 font-body text-xs text-foreground-muted">Alerts are information, not recommendations. No spam; your email is never shared or sold.</p>
        </div>
      </div>
    </section>
  );
};
