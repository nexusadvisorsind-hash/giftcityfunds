import type { ReactNode } from "react";

// Numbered section label + heading used on the home page, so each band reads
// as its own section rather than one long page.
export const SectionLabel = ({ n, label }: { n: number; label: string }) => (
  <p className="flex items-center gap-2.5 font-body text-[13px] font-bold uppercase tracking-[0.08em] text-secondary">
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-secondary text-white text-xs tracking-normal" aria-hidden>{n}</span>
    {label}
  </p>
);

export const SectionHead = ({ n, label, id, title, sub, action }: { n: number; label: string; id: string; title: ReactNode; sub?: ReactNode; action?: ReactNode }) => (
  <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
    <div>
      <SectionLabel n={n} label={label} />
      <h2 id={id} className="mt-3 font-heading font-extrabold text-3xl md:text-4xl tracking-[-0.02em] text-primary">{title}</h2>
      {sub && <p className="mt-2 font-body text-lg text-foreground-muted">{sub}</p>}
    </div>
    {action}
  </div>
);
