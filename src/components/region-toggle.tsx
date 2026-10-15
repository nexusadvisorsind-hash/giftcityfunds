"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const regions = {
  Maharashtra: {
    desk: "Maharashtra Desk",
    points: ["Pavan Vatyani — MahaRERA Certified", "Commercial & Residential", "Corporate Capital Hub"],
  },
  Gujarat: {
    desk: "Gujarat Desk",
    points: ["Anup Vatyani — GujRERA Certified", "Industrial & Logistics", "Commercial Hub Integration"],
  },
};

export function RegionToggle() {
  const [region, setRegion] = useState<keyof typeof regions>("Maharashtra");
  const data = regions[region];

  return (
    <div className="bg-surface border border-border rounded-2xl p-6 md:p-8">
      <div className="flex justify-center gap-2 mb-8">
        {(Object.keys(regions) as (keyof typeof regions)[]).map((r) => (
          <button
            key={r}
            onClick={() => setRegion(r)}
            className={cn(
              "px-5 py-2 rounded-full font-body text-sm font-semibold transition-colors",
              region === r
                ? "bg-primary text-primary-foreground"
                : "bg-background border border-border text-foreground-muted hover:text-primary"
            )}
          >
            {r}
          </button>
        ))}
      </div>
      <div className="text-center">
        <h3 className="font-heading font-semibold text-xl text-primary mb-4">{data.desk}</h3>
        <ul className="flex flex-wrap justify-center gap-3">
          {data.points.map((p) => (
            <li key={p} className="font-body text-sm bg-background border border-border rounded-full px-4 py-1.5 text-foreground-muted">
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
