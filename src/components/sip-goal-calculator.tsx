"use client";

import { useMemo, useState } from "react";
import { CalcLeadLink } from "@/components/calc-lead-link";

function formatINR(n: number) {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Math.round(n));
}

export function SipGoalCalculator() {
  const [target, setTarget] = useState(2500000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);

  const requiredMonthly = useMemo(() => {
    const n = years * 12;
    const r = rate / 100 / 12;
    if (r === 0) return target / n;
    const factor = ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    return target / factor;
  }, [target, years, rate]);

  const totalInvested = requiredMonthly * years * 12;
  const wealthGain = target - totalInvested;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-background border border-border rounded-2xl p-6 md:p-10 grid md:grid-cols-2 gap-10">
        <div className="space-y-7">
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-body text-sm font-semibold text-primary">Goal Amount (Target Corpus)</label>
              <span className="font-heading font-semibold text-secondary">₹{formatINR(target)}</span>
            </div>
            <input
              type="range"
              min={100000}
              max={20000000}
              step={50000}
              value={target}
              onChange={(e) => setTarget(Number(e.target.value))}
              className="w-full accent-secondary"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-body text-sm font-semibold text-primary">Years to Reach Goal</label>
              <span className="font-heading font-semibold text-secondary">{years} yrs</span>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full accent-secondary"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-body text-sm font-semibold text-primary">Expected Annual Return</label>
              <span className="font-heading font-semibold text-secondary">{rate}%</span>
            </div>
            <input
              type="range"
              min={4}
              max={18}
              step={0.5}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full accent-secondary"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="text-center border-b border-border pb-5 mb-5">
            <span className="font-body text-sm text-foreground-muted block mb-1">You Need to Invest Monthly</span>
            <span className="font-heading font-bold text-accent text-3xl">₹{formatINR(requiredMonthly)}</span>
            <span className="font-body text-xs text-foreground-muted block mt-1">per month via SIP</span>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-baseline">
              <span className="font-body text-sm text-foreground-muted">Total You&apos;ll Invest</span>
              <span className="font-heading font-semibold text-primary">₹{formatINR(totalInvested)}</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="font-body text-sm text-foreground-muted">Wealth Gained from Growth</span>
              <span className="font-heading font-semibold text-secondary">₹{formatINR(Math.max(0, wealthGain))}</span>
            </div>
          </div>
        </div>
      </div>
      <p className="font-body text-xs text-foreground-muted text-center mt-4">
        Illustrative only. Assumes a flat annual return compounded monthly; actual mutual fund
        returns fluctuate and are not guaranteed.
      </p>
      <CalcLeadLink vertical="Mutual Funds" summary={`Goal of ₹${formatINR(target)} in ${years} years; the calculator showed about ₹${formatINR(requiredMonthly)} a month at an assumed ${rate}%.`} />
    </div>
  );
}
