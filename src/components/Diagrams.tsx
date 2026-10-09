// Lightweight, text-based diagrams. They are plain HTML (not images), so the
// words inside them are readable by screen readers and search engines and
// they reflow on small screens.
import { ArrowRight, ArrowDown } from "lucide-react";
import type { ReactNode } from "react";

interface Step {
  title: string;
  sub?: string;
}

/** A numbered left-to-right process (top-to-bottom on phones). */
export const FlowSteps = ({ steps, caption, highlight }: { steps: Step[]; caption: string; highlight?: number }) => (
  <figure className="my-8">
    <ol className="flex flex-col md:flex-row md:items-stretch gap-2 md:gap-0 list-none p-0">
      {steps.map((s, i) => (
        <li key={s.title} className="flex flex-col md:flex-row md:items-center md:flex-1">
          <div
            className={`flex-1 rounded-xl border p-4 h-full ${
              i === highlight ? "bg-brass/15 border-brass" : "bg-surface border-border"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-heading font-bold text-sm mb-2 ${
                i === highlight ? "bg-brass text-ink" : "bg-teal text-ink"
              }`}
            >
              {i + 1}
            </div>
            <p className="font-heading font-semibold text-primary text-sm leading-snug">{s.title}</p>
            {s.sub && <p className="font-body text-xs text-foreground-muted mt-1 leading-snug">{s.sub}</p>}
          </div>
          {i < steps.length - 1 && (
            <>
              <ArrowRight aria-hidden className="hidden md:block shrink-0 mx-1 h-5 w-5 text-secondary" />
              <ArrowDown aria-hidden className="md:hidden self-center my-1 h-5 w-5 text-secondary" />
            </>
          )}
        </li>
      ))}
    </ol>
    <figcaption className="font-body text-xs text-foreground-muted mt-3 text-center">{caption}</figcaption>
  </figure>
);

interface Node {
  label: string;
  sub?: string;
  tone?: "ink" | "teal" | "amber" | "plain";
}

const tone = (t: Node["tone"]) =>
  t === "ink"
    ? "bg-ink text-white border-ink"
    : t === "teal"
    ? "bg-teal/15 border-teal text-primary"
    : t === "amber"
    ? "bg-brass/15 border-brass text-primary"
    : "bg-surface border-border text-primary";

/** Where the money goes: source → via → destination(s). */
export const RouteDiagram = ({ from, via, to, caption, note }: { from: Node[]; via: Node; to: Node[]; caption: string; note?: ReactNode }) => (
  <figure className="my-8 rounded-2xl border border-border bg-background p-4 md:p-6">
    <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3">
      <div className="space-y-2">
        {from.map((n) => (
          <div key={n.label} className={`rounded-xl border p-3 ${tone(n.tone)}`}>
            <p className="font-heading font-semibold text-sm">{n.label}</p>
            {n.sub && <p className="font-body text-xs opacity-80 mt-0.5">{n.sub}</p>}
          </div>
        ))}
      </div>
      <ArrowRight aria-hidden className="hidden md:block h-6 w-6 text-secondary justify-self-center" />
      <ArrowDown aria-hidden className="md:hidden h-6 w-6 text-secondary justify-self-center" />
      <div className={`rounded-2xl border-2 p-4 text-center ${tone(via.tone ?? "ink")}`}>
        <p className="font-heading font-bold">{via.label}</p>
        {via.sub && <p className="font-body text-xs opacity-80 mt-1">{via.sub}</p>}
      </div>
      <ArrowRight aria-hidden className="hidden md:block h-6 w-6 text-secondary justify-self-center" />
      <ArrowDown aria-hidden className="md:hidden h-6 w-6 text-secondary justify-self-center" />
      <div className="space-y-2">
        {to.map((n) => (
          <div key={n.label} className={`rounded-xl border p-3 ${tone(n.tone)}`}>
            <p className="font-heading font-semibold text-sm">{n.label}</p>
            {n.sub && <p className="font-body text-xs opacity-80 mt-0.5">{n.sub}</p>}
          </div>
        ))}
      </div>
    </div>
    {note && <div className="font-body text-xs text-foreground-muted mt-4">{note}</div>}
    <figcaption className="font-body text-xs text-foreground-muted mt-3 text-center">{caption}</figcaption>
  </figure>
);

interface Bar {
  label: string;
  value: number;
  display: string;
  tone?: "teal" | "amber" | "ink";
}

/** Horizontal bar chart. Values are relative to `max` (or the largest value). */
export const BarChart = ({ title, rows, caption, max }: { title: string; rows: Bar[]; caption: string; max?: number }) => {
  const top = max ?? Math.max(...rows.map((r) => r.value), 1);
  return (
    <figure className="my-8 rounded-2xl border border-border bg-background p-4 md:p-6">
      <p className="font-heading font-semibold text-primary mb-4">{title}</p>
      <ul className="space-y-3 list-none p-0">
        {rows.map((r) => (
          <li key={r.label} className="grid grid-cols-[minmax(0,9rem)_1fr] md:grid-cols-[minmax(0,14rem)_1fr] items-center gap-3">
            <span className="font-body text-xs md:text-sm text-foreground-muted leading-tight">{r.label}</span>
            <span className="flex items-center gap-2 min-w-0">
              <span
                className={`h-6 rounded-md shrink-0 ${r.tone === "amber" ? "bg-brass" : r.tone === "ink" ? "bg-ink" : "bg-teal"}`}
                style={{ width: `${Math.max(2, (r.value / top) * 100) * 0.6}%` }}
                aria-hidden
              />
              <span className="font-heading font-semibold text-xs sm:text-sm text-primary min-w-0">{r.display}</span>
            </span>
          </li>
        ))}
      </ul>
      <figcaption className="font-body text-xs text-foreground-muted mt-4">{caption}</figcaption>
    </figure>
  );
};

/** Two-column "this vs that" visual. */
export const ProsCons = ({ pros, cons }: { pros: string[]; cons: string[] }) => (
  <div className="grid md:grid-cols-2 gap-4 my-8">
    <div className="rounded-2xl border border-teal bg-teal/10 p-5">
      <p className="font-heading font-semibold text-primary mb-3">Advantages</p>
      <ul className="space-y-2 font-body text-sm text-foreground-muted list-none p-0">
        {pros.map((p) => (
          <li key={p} className="flex gap-2"><span aria-hidden className="text-secondary font-bold">+</span><span>{p}</span></li>
        ))}
      </ul>
    </div>
    <div className="rounded-2xl border border-brass bg-brass/10 p-5">
      <p className="font-heading font-semibold text-primary mb-3">Drawbacks</p>
      <ul className="space-y-2 font-body text-sm text-foreground-muted list-none p-0">
        {cons.map((c) => (
          <li key={c} className="flex gap-2"><span aria-hidden className="text-brass font-bold">–</span><span>{c}</span></li>
        ))}
      </ul>
    </div>
  </div>
);
