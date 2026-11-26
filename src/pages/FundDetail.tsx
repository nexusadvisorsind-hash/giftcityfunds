import { Link, useParams } from "react-router-dom";
import { GuidePage, h2, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";
import NotFound from "@/pages/NotFound";
import { FundAlerts } from "@/components/FundAlerts";
import { FUND_EXTRAS } from "@/data/fundExtras";
import {
  FUND_PAGES,
  FUNDS_LAST_CHECKED,
  HOUSE_PAGES,
  fundName,
  fundPath,
  isRetail,
  type Fund,
} from "@/data/funds";

// One page per fund row in src/data/funds.ts, built only from the facts stored
// there (each with its source). No NAV, returns or ranking.
const EXCL: Record<string, string> = { us: "US persons", ca: "Canadian residents", uk: "UK investors" };

const directionText = (f: Fund) =>
  f.direction === "Inbound" ? "Inbound (invests in India)" : f.direction === "Outbound" ? "Outbound (invests outside India)" : f.direction;

const plural = (f: Fund) => (f.count ?? 1) > 1;

// Keep titles inside what search results show (about 60 characters).
// Hand-written titles where searchers use words the fund name lacks.
const TITLE_OVERRIDE: Record<string, string> = {
  "franklin-us-equity-ifsc-fund": "Franklin Templeton GIFT City Fund (NFO): Minimum USD 5,000",
};
const DESC_OVERRIDE: Record<string, string> = {
  "franklin-us-equity-ifsc-fund": "Franklin Templeton's GIFT City fund, Franklin US Equity IFSC Fund: NFO 11 Nov to 11 Dec 2026, minimum USD 5,000, for Indian investors under LRS.",
};

const titleFor = (n: string) => {
  const opts = /gift/i.test(n)
    ? [`${n}: Minimum, Who Can Invest`, `${n}: Minimum & Eligibility`, `${n}: Minimum`, n]
    : [`${n} (GIFT City): Minimum, Who Can Invest`, `${n}: GIFT City Fund Minimum`, `${n} | GIFT City Fund`, `${n} GIFT City`, n];
  return opts.find((t) => t.length <= 62) ?? n;
};

function faqsFor(f: Fund): Faq[] {
  const n = fundName(f);
  const many = plural(f);
  const out: Faq[] = [
    { q: `What is the minimum investment in ${n}?`, a: `${f.minimum}. Minimums can change; confirm with the fund house before investing.` },
    {
      q: `Can resident Indians invest in ${n}?`,
      a: f.residents
        ? `Yes, according to our source, under the Liberalised Remittance Scheme (LRS): up to USD 250,000 a year, with TCS above ₹10 lakh a year. Who can invest: ${f.who}.`
        : `Our source does not list resident Indians as eligible. It says: ${f.who}.`,
    },
    {
      q: `Can NRIs invest in ${n}?`,
      a: f.nri
        ? `Yes, according to our source. Who can invest: ${f.who}. Check the offer document for your country of residence.`
        : `Our source does not list NRIs as eligible. It says: ${f.who}.`,
    },
    { q: `What ${many ? "do these funds" : "does this fund"} invest in?`, a: `${f.invests}.` },
  ];
  const x = f.slug ? FUND_EXTRAS[f.slug] : undefined;
  if (x?.ter) out.push({ q: `What is the expense ratio (TER) of ${n}?`, a: `${x.ter}, as published. Expense ratios can change; check the latest factsheet or offer document.` });
  if (x?.exitLoad) out.push({ q: `Is there an exit load on ${n}?`, a: `${x.exitLoad}.${x.lockIn ? ` Lock-in: ${x.lockIn.toLowerCase()}.` : ""}` });
  if (x?.manager) out.push({ q: `Who manages ${n}?`, a: `${x.manager}, registered with IFSCA in GIFT City.` });
  if (f.excludes?.length) {
    out.push({
      q: `Who ${many ? "do these funds" : "does this fund"} not accept?`,
      a: `The fund house says it does not accept ${f.excludes.map((x) => EXCL[x]).join(" or ")}.`,
    });
  }
  return out;
}

const FundDetail = () => {
  const { slug } = useParams();
  const f = FUND_PAGES.find((x) => x.slug === slug);
  if (!f) return <NotFound />;

  const n = fundName(f);
  const many = plural(f);
  const path = fundPath(f)!;
  const housePage = HOUSE_PAGES[f.house];
  const sameHouse = FUND_PAGES.filter((x) => x.house === f.house && x !== f);
  const similar = FUND_PAGES.filter(
    (x) => x.house !== f.house && x.direction === f.direction && (x.residents === f.residents || x.nri === f.nri),
  ).slice(0, 5);
  const dir = f.direction.toLowerCase();
  const dirPage = f.direction === "Inbound" ? "/gift-city-inbound-funds" : f.direction === "Outbound" ? "/gift-city-outbound-funds" : undefined;

  const x = FUND_EXTRAS[f.slug!];
  const extra: [string, string | undefined][] = [
    ["Fund manager (IFSCA entity)", x?.manager],
    ["Structure", x?.structure],
    ["Expense ratio (TER)", x?.ter],
    ["Exit load", x?.exitLoad],
    ["Lock-in", x?.lockIn],
    ["Dealing", x?.dealing],
    ["Launched", x?.launched],
    ["Benchmark", x?.benchmark],
    ["IFSCA registration", x?.ifsca],
  ];
  const rows: [string, React.ReactNode][] = [
    ["Fund house", housePage ? <Link to={housePage} className={a}>{f.house}</Link> : f.house],
    ...(many ? ([["Schemes", f.scheme]] as [string, React.ReactNode][]) : []),
    ["Direction", directionText(f)],
    ["Type", isRetail(f) ? "Retail fund" : "AIF or restricted fund"],
    ["Invests in", f.invests],
    ["Minimum", f.minimum],
    ["Who can invest", f.who],
    ["Resident Indians (LRS)", f.residents ? "Yes" : "Not listed as eligible"],
    ["NRIs", f.nri ? "Yes" : "Not listed as eligible"],
    ["Does not accept", f.excludes?.length ? f.excludes.map((e) => EXCL[e]).join(", ") : "None published"],
    ...(extra.filter(([, v]) => v) as [string, React.ReactNode][]),
    ["Status", x?.status ?? (f.upcoming ? "Listed by the fund house as coming soon" : "Open, per our source")],
    ...(x?.docs?.length
      ? ([["Documents", <>{x.docs.map((d, i) => <span key={d.url}>{i ? " · " : ""}<a href={d.url} target="_blank" rel="noopener noreferrer" className={a}>{d.label}</a></span>)}</>]] as [string, React.ReactNode][])
      : []),
    ["Sources", <>{[f.source, ...(x?.sources ?? []).filter((s) => s.url !== f.source.url)].map((s, i) => <span key={s.url}>{i ? " · " : ""}<a href={s.url} target="_blank" rel="noopener noreferrer" className={a}>{s.label}</a></span>)}</>],
  ];

  return (
    <GuidePage
      path={path}
      headline={`${n}: GIFT City ${f.direction} ${many ? "Funds" : "Fund"} Facts`}
      seoTitle={TITLE_OVERRIDE[f.slug!] ?? titleFor(n)}
      description={DESC_OVERRIDE[f.slug!] ?? `${n}: ${dir} GIFT City ${many ? "funds" : "fund"} from ${f.house}. ${/^not published/i.test(f.minimum) ? "Minimum not published" : `Minimum ${f.minimum.split(/;|\(|, then| or /)[0].trim()}`}. Who can invest, what it holds and the source.`}
      crumb={n}
      datePublished="2026-11-04"
      reviewed={`Last checked ${FUNDS_LAST_CHECKED}`}
      kind="WebPage"
      faqs={faqsFor(f)}
      sources={["ifscaDirectory", "ifsca"]}
    >
      <p className={p}>
        <strong className="text-primary">The short answer.</strong> {many ? <>{n} {many ? "are" : "is"} {f.count} </> : <>{n} is an </>}
        <strong className="text-primary">{dir}</strong> GIFT City {many ? "funds" : "fund"} from {f.house}
        {f.direction === "Inbound" ? ", investing in India" : f.direction === "Outbound" ? ", investing outside India" : ""}, in US Dollars.
        {" "}Minimum: <strong className="text-primary">{f.minimum}</strong>. Who can invest: {f.who}.
        {f.upcoming && <> The fund house lists it as <strong className="text-primary">coming soon</strong>, so it may not be open yet.</>}
        {(x?.ter || x?.exitLoad) && <> Costs: {x?.ter ? <>expense ratio {x.ter}</> : null}{x?.ter && x?.exitLoad ? "; " : ""}{x?.exitLoad ? <>exit load {x.exitLoad.charAt(0).toLowerCase() + x.exitLoad.slice(1)}</> : null}.</>}
      </p>

      <h2 className={h2}>Fund facts</h2>
      <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto">
        <table className={table}>
          <caption className="sr-only">{n}: facts</caption>
          <tbody>
            {rows.map(([k, v]) => (
              <tr key={k}><th scope="row" className={th + " w-1/3"}>{k}</th><td className={td}>{v}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="font-body text-xs text-foreground-muted mt-2">
        Facts as published by the fund house or reported, checked {FUNDS_LAST_CHECKED}. Not a recommendation. Read the offer document before investing.
      </p>

      <h2 className={h2}>Who can invest</h2>
      <ul className={ul}>
        <li>
          <strong className="text-primary">Resident Indians:</strong>{" "}
          {f.residents ? (
            <>yes, under LRS (up to USD 250,000 a year; TCS above ₹10 lakh, credited back in your tax return). See <Link to="/gift-city-funds-for-resident-indians" className={a}>GIFT City for resident Indians</Link> and the <Link to="/insights/lrs-tcs-gift-city#calculator" className={a}>TCS calculator</Link>.</>
          ) : (
            <>not listed as eligible by our source.</>
          )}
        </li>
        <li>
          <strong className="text-primary">NRIs:</strong>{" "}
          {f.nri ? (
            <>yes, per our source. Tax depends on where you live: see the guides for <Link to="/gift-city-funds-for-uae-nris" className={a}>UAE</Link>, <Link to="/gift-city-funds-for-gulf-nris" className={a}>other Gulf countries</Link>, <Link to="/gift-city-funds-for-uk-nris" className={a}>UK</Link>, <Link to="/gift-city-funds-for-us-nris" className={a}>US</Link>, <Link to="/gift-city-funds-for-singapore-nris" className={a}>Singapore</Link> and <Link to="/gift-city-funds-for-canada-nris" className={a}>Canada</Link>.</>
          ) : (
            <>not listed as eligible by our source.</>
          )}
        </li>
        {f.excludes?.length ? (
          <li><strong className="text-primary">Not accepted:</strong> {f.excludes.map((x) => EXCL[x]).join(", ")}, according to the fund house.</li>
        ) : null}
      </ul>

      <h2 className={h2}>NAV, factsheet and offer document</h2>
      <p className={p}>
        We do not show NAVs or returns: they change daily and a stale figure is worse than none. The fund house publishes the NAV, factsheet and offer document on its own website. Our source for the facts on this page: <a href={f.source.url} target="_blank" rel="noopener noreferrer" className={a}>{f.source.label}</a>. You can also confirm the fund manager in the <a href="https://ifsca.gov.in/DirectoryList" target="_blank" rel="noopener noreferrer" className={a}>IFSCA directory of regulated entities</a>.
      </p>

      {(sameHouse.length > 0 || housePage) && (
        <>
          <h2 className={h2}>Other {f.house} GIFT City funds</h2>
          <ul className={ul}>
            {sameHouse.map((x) => (
              <li key={x.slug}><Link to={fundPath(x)!} className={a}>{fundName(x)}</Link>: {x.direction.toLowerCase()}; minimum: {x.minimum}</li>
            ))}
            {housePage && <li><Link to={housePage} className={a}>All {f.house} GIFT City funds</Link></li>}
          </ul>
        </>
      )}

      {similar.length > 0 && (
        <>
          <h2 className={h2}>Other {dir} GIFT City funds</h2>
          <ul className={ul}>
            {similar.map((x) => (
              <li key={x.slug}><Link to={fundPath(x)!} className={a}>{fundName(x)}</Link> ({x.house}). Minimum: {x.minimum}</li>
            ))}
            {dirPage && <li><Link to={dirPage} className={a}>All GIFT City {dir} funds</Link></li>}
          </ul>
        </>
      )}

      <FundAlerts source={`fund:${f.slug}`} className="mt-10" />

      <p className={p + " mt-6"}>
        Put this fund next to others with the <Link to="/gift-city-fund-compare" className={a}>comparison tool</Link>, see the full <Link to="/gift-city-fund-list" className={a}>GIFT City fund list</Link>, or check <Link to="/gift-city-route-checker" className={a}>which route applies to you</Link>.
      </p>
      <p className="font-body text-xs text-foreground-muted mt-4">
        For information only. Not a recommendation or ranking. As a Mutual Fund Distributor, Anup Vatyani may be empanelled with this fund house.
      </p>
    </GuidePage>
  );
};

export default FundDetail;
