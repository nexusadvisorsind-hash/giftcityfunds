"use client";

import { useState } from "react";

const RATE = 0.12; // assumed, illustrative only
const inr = (n: number) =>
  n >= 1e7 ? `₹${(n / 1e7).toFixed(2)} crore` : `₹${(n / 1e5).toFixed(1)} lakh`;

function fv(monthly: number, years: number) {
  const r = RATE / 12;
  const n = years * 12;
  return monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
}

/** Shows what the same monthly SIP grows to if started now versus later (illustrative). */
export function CostOfWaiting() {
  const [monthly, setMonthly] = useState(10000);
  const [delay, setDelay] = useState(5);
  const horizon = 25;
  const now = fv(monthly, horizon);
  const later = fv(monthly, horizon - delay);
  const gap = now - later;
  const pct = Math.max(8, Math.round((later / now) * 100));

  return (
    <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
      <div className="space-y-7">
        <label className="block">
          <span className="flex justify-between font-body text-sm font-semibold text-primary mb-2">
            Monthly SIP <span>₹{monthly.toLocaleString("en-IN")}</span>
          </span>
          <input type="range" min={2000} max={100000} step={1000} value={monthly} onChange={(e) => setMonthly(+e.target.value)} className="w-full accent-[#1E5FD9]" />
        </label>
        <label className="block">
          <span className="flex justify-between font-body text-sm font-semibold text-primary mb-2">
            If you wait <span>{delay} {delay === 1 ? "year" : "years"}</span>
          </span>
          <input type="range" min={1} max={10} step={1} value={delay} onChange={(e) => setDelay(+e.target.value)} className="w-full accent-[#1E5FD9]" />
        </label>
        <p className="font-body text-xs text-foreground-muted measure">
          Illustration only. Assumes {Math.round(RATE * 100)}% a year over {horizon} years, which is not a promise or a forecast. Actual mutual fund returns vary and can be negative. Mutual fund investments are subject to market risks, read all scheme related documents carefully.
        </p>
      </div>

      <div aria-live="polite">
        <p className="font-heading text-2xl md:text-3xl text-primary leading-snug mb-6">
          Waiting {delay} {delay === 1 ? "year" : "years"} could leave about <span className="text-green">{inr(gap)}</span> on the table.
        </p>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between font-body text-sm mb-1.5"><span className="text-foreground-muted">Start today</span><strong className="text-primary">{inr(now)}</strong></div>
            <div className="h-4 rounded-full bg-surface overflow-hidden"><div className="h-full rounded-full bg-green transition-[width] duration-500" style={{ width: "100%" }} /></div>
          </div>
          <div>
            <div className="flex justify-between font-body text-sm mb-1.5"><span className="text-foreground-muted">Start in {delay} {delay === 1 ? "year" : "years"}</span><strong className="text-primary">{inr(later)}</strong></div>
            <div className="h-4 rounded-full bg-surface overflow-hidden"><div className="h-full rounded-full bg-secondary transition-[width] duration-500" style={{ width: `${pct}%` }} /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
