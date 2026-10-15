"use client";

import { useMemo, useState } from "react";
import { CalcLeadLink } from "@/components/calc-lead-link";

function formatINR(n: number) {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Math.round(n));
}

export function SipCalculator() {
  const [monthly, setMonthly] = useState(10000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);

  const { invested, maturity, gains, yearly } = useMemo(() => {
    const months = years * 12;
    const r = rate / 100 / 12;
    let value = 0;
    const yearly: number[] = [];
    for (let m = 1; m <= months; m++) {
      value = (value + monthly) * (1 + r);
      if (m % 12 === 0) yearly.push(value);
    }
    const invested = monthly * months;
    return { invested, maturity: value, gains: value - invested, yearly };
  }, [monthly, years, rate]);

  const maxVal = yearly[yearly.length - 1] || 1;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-background border border-border rounded-2xl p-6 md:p-10 grid md:grid-cols-2 gap-10">
        <div className="space-y-7">
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-body text-sm font-semibold text-primary">Monthly SIP Amount</label>
              <span className="font-heading font-semibold text-secondary">₹{formatINR(monthly)}</span>
            </div>
            <input
              type="range"
              min={1000}
              max={100000}
              step={1000}
              value={monthly}
              onChange={(e) => setMonthly(Number(e.target.value))}
              className="w-full accent-secondary"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-body text-sm font-semibold text-primary">Investment Period</label>
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

        <div className="flex flex-col justify-between">
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-baseline border-b border-border pb-3">
              <span className="font-body text-sm text-foreground-muted">Total Invested</span>
              <span className="font-heading font-semibold text-primary text-lg">₹{formatINR(invested)}</span>
            </div>
            <div className="flex justify-between items-baseline border-b border-border pb-3">
              <span className="font-body text-sm text-foreground-muted">Estimated Gains</span>
              <span className="font-heading font-semibold text-secondary text-lg">₹{formatINR(gains)}</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="font-body text-sm font-semibold text-primary">Estimated Maturity Value</span>
              <span className="font-heading font-bold text-accent text-2xl">₹{formatINR(maturity)}</span>
            </div>
          </div>

          <div className="flex items-end gap-1 h-24">
            {yearly.map((v, i) => (
              <div
                key={i}
                className="flex-1 bg-secondary/70 rounded-t"
                style={{ height: `${Math.max(4, (v / maxVal) * 100)}%` }}
                title={`Year ${i + 1}: ₹${formatINR(v)}`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="font-body text-xs text-foreground-muted text-center mt-4">
        Illustrative only. Assumes constant monthly contribution and a flat annual return; actual
        mutual fund returns fluctuate and are not guaranteed.
      </p>
      <CalcLeadLink vertical="Mutual Funds" summary={`SIP of ₹${formatINR(monthly)} a month for ${years} years at an assumed ${rate}%.`} />
    </div>
  );
}
