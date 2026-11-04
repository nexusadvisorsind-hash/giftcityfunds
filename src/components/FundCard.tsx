import { Link } from "react-router-dom";
import { fundName, fundPath, type Fund } from "@/data/funds";

const who = (f: Fund) =>
  f.residents && f.nri ? "Residents and NRIs" : f.residents ? "Resident Indians (LRS)" : f.nri ? "NRIs and foreign investors" : f.who.split(/[;.]/)[0];

const minShort = (f: Fund) => f.minimum.split(/;|\(|, then| or /)[0].trim();

// One fund as a compact card: type tag, name, fund house and who can invest,
// minimum on the right. Links to the fund's own page, else to its source.
export const FundCard = ({ f }: { f: Fund }) => {
  const to = fundPath(f);
  const body = (
    <>
      <span className="min-w-0">
        <span className="inline-block rounded-full bg-accent px-2.5 py-0.5 font-body text-xs font-semibold text-secondary">
          {f.direction}{f.upcoming ? " · coming soon" : ""}
        </span>
        <span className="mt-2 block font-body font-semibold text-[17px] leading-snug text-primary">{fundName(f)}</span>
        <span className="mt-0.5 block font-body text-[13.5px] text-foreground-muted">{f.house} · {who(f)}</span>
      </span>
      <span className="shrink-0 text-right">
        <span className="block font-body text-[13px] text-foreground-muted">Minimum</span>
        <span className="block font-body font-bold text-[17px] text-primary tabular-nums">{minShort(f)}</span>
      </span>
    </>
  );
  const cls = "flex h-full items-center justify-between gap-4 rounded-2xl border border-border bg-white px-5 py-4 transition hover:border-secondary/40 hover:shadow-sm";
  return to ? (
    <Link to={to} className={cls}>{body}</Link>
  ) : (
    <a href={f.source.url} target="_blank" rel="noopener noreferrer" className={cls}>{body}</a>
  );
};
