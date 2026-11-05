import { Link } from "react-router-dom";

interface Props {
  /** e.g. "Published 21 September 2026" or "Last reviewed October 2026" */
  dateText?: React.ReactNode;
}

// Photo + name + registration, used at the top of guides and articles.
export const AuthorByline = ({ dateText }: Props) => (
  <div className="flex items-center gap-3 mb-8">
    <img
      src="/images/anup-vatyani-96.webp"
      alt="Anup Vatyani"
      width={44}
      height={44}
      loading="lazy"
      className="w-11 h-11 rounded-full object-cover border border-border shrink-0"
    />
    <p className="font-body text-sm text-foreground-muted leading-snug">
      By{" "}
      <Link to="/about" className="text-secondary hover:underline font-medium">
        Anup Vatyani
      </Link>
      , AMFI-registered Mutual Fund Distributor (ARN 106715)
      {dateText ? <><br /><span className="inline-flex items-center gap-1"><svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7" /></svg>{dateText}</span></> : null}
    </p>
  </div>
);
