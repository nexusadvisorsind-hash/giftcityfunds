// The site's signature infographic: how money moves through GIFT IFSC.
// Two layouts (wide and phone) so the text stays legible at every size.
// Flow lines drift slowly; prefers-reduced-motion stops them (see index.css).

const INK = "#0B1736";
const HUB = "#13224A";
const TEAL = "#14B8A6";
const AMBER = "#F5A623";
const WHITE = "#FFFFFF";
const MUTED = "#B8C4D9";

const Box = ({ x, y, w, h, title, lines, accent }: { x: number; y: number; w: number; h: number; title: string; lines: string[]; accent: string }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx={14} fill={HUB} stroke={accent} strokeWidth={1.5} />
    <rect x={x} y={y + 14} width={4} height={h - 28} rx={2} fill={accent} />
    <text x={x + 18} y={y + 30} fill={WHITE} fontFamily="'Space Grotesk', sans-serif" fontWeight={600} fontSize={16}>{title}</text>
    {lines.map((l, i) => (
      <text key={l} x={x + 18} y={y + 52 + i * 18} fill={MUTED} fontFamily="'DM Sans', sans-serif" fontSize={13}>{l}</text>
    ))}
  </g>
);

const Towers = ({ cx, base, scale = 1 }: { cx: number; base: number; scale?: number }) => {
  const w = 26 * scale;
  const t1 = 118 * scale;
  const t2 = 140 * scale;
  const gap = 10 * scale;
  const x1 = cx - w - gap / 2;
  const x2 = cx + gap / 2;
  const windows = (x: number, top: number, h: number) =>
    Array.from({ length: Math.floor(h / (12 * scale)) - 1 }, (_, i) => (
      <line key={i} x1={x + 5 * scale} x2={x + w - 5 * scale} y1={top + 12 * scale * (i + 1)} y2={top + 12 * scale * (i + 1)} stroke={INK} strokeOpacity={0.35} strokeWidth={1.2} />
    ));
  return (
    <g>
      <rect x={x1} y={base - t1} width={w} height={t1} rx={3} fill={TEAL} />
      {windows(x1, base - t1, t1)}
      <rect x={x2} y={base - t2} width={w} height={t2} rx={3} fill="#2DD4BF" />
      {windows(x2, base - t2, t2)}
      <line x1={cx - 50 * scale} x2={cx + 50 * scale} y1={base} y2={base} stroke={TEAL} strokeOpacity={0.5} strokeWidth={2} />
    </g>
  );
};

const Flow = ({ d, color, delay = 0 }: { d: string; color: string; delay?: number }) => (
  <g>
    <path d={d} fill="none" stroke={color} strokeOpacity={0.25} strokeWidth={10} strokeLinecap="round" />
    <path d={d} fill="none" stroke={color} strokeWidth={3} strokeLinecap="round" strokeDasharray="2 12" className="gcf-flow" style={{ animationDelay: `${delay}s` }} />
  </g>
);

const Label = ({ x, y, text, color, anchor = "middle" }: { x: number; y: number; text: string; color: string; anchor?: "start" | "middle" | "end" }) => (
  <text x={x} y={y} textAnchor={anchor} fill={color} fontFamily="'DM Sans', sans-serif" fontWeight={600} fontSize={13}>{text}</text>
);

export const MoneyMap = ({ className = "" }: { className?: string }) => (
  <figure className={`rounded-3xl bg-ink p-4 md:p-8 ${className}`}>
    {/* Wide layout */}
    <svg viewBox="0 0 1000 420" className="hidden md:block w-full h-auto" role="img" aria-labelledby="mm-title mm-desc">
      <title id="mm-title">How money moves through GIFT City</title>
      <desc id="mm-desc">
        Inbound: NRIs and foreign investors send US Dollars to funds in GIFT IFSC, which invest in Indian markets.
        Outbound: resident Indians send money under LRS to funds in GIFT IFSC, which invest in US and global markets.
      </desc>
      <circle cx={500} cy={200} r={128} fill={HUB} />
      <circle cx={500} cy={200} r={128} fill="none" stroke={TEAL} strokeOpacity={0.35} strokeWidth={1.5} strokeDasharray="3 7" />
      <Flow d="M 270 110 C 340 110, 360 170, 400 178" color={AMBER} />
      <Flow d="M 600 178 C 640 170, 660 110, 730 110" color={AMBER} delay={0.6} />
      <Flow d="M 270 300 C 340 300, 360 230, 400 222" color={TEAL} delay={0.3} />
      <Flow d="M 600 222 C 640 230, 660 300, 730 300" color={TEAL} delay={0.9} />
      <Box x={30} y={60} w={240} h={100} title="NRIs and foreign investors" lines={["USD from the UAE, UK, US,", "Singapore and elsewhere"]} accent={AMBER} />
      <Box x={30} y={250} w={240} h={100} title="Resident Indians" lines={["Rupees converted to USD", "under LRS (USD 250,000 a year)"]} accent={TEAL} />
      <Box x={730} y={60} w={240} h={100} title="Indian markets" lines={["Inbound funds: Indian", "equities and bonds"]} accent={AMBER} />
      <Box x={730} y={250} w={240} h={100} title="US and global markets" lines={["Outbound funds: global", "equities, ETFs and bonds"]} accent={TEAL} />
      <Towers cx={500} base={250} />
      <text x={500} y={286} textAnchor="middle" fill={WHITE} fontFamily="'Space Grotesk', sans-serif" fontWeight={700} fontSize={22}>GIFT IFSC</text>
      <text x={500} y={306} textAnchor="middle" fill={MUTED} fontFamily="'DM Sans', sans-serif" fontSize={13}>IFSCA-regulated funds, in USD</text>
      <Label x={335} y={98} text="Inbound" color={AMBER} />
      <Label x={335} y={338} text="Outbound" color={TEAL} />
      <Label x={500} y={398} text="No LRS or TCS for NRIs investing from abroad. Residents pay 20% TCS above ₹10 lakh a year, credited back." color={MUTED} />
    </svg>

    {/* Phone layout */}
    <svg viewBox="0 0 360 660" className="md:hidden w-full h-auto" role="img" aria-labelledby="mm-title-m mm-desc-m">
      <title id="mm-title-m">How money moves through GIFT City</title>
      <desc id="mm-desc-m">
        Inbound: NRIs send US Dollars to GIFT IFSC funds that invest in India. Outbound: resident Indians send money under LRS to GIFT IFSC funds that invest globally.
      </desc>
      <circle cx={180} cy={330} r={104} fill={HUB} />
      <circle cx={180} cy={330} r={104} fill="none" stroke={TEAL} strokeOpacity={0.35} strokeWidth={1.5} strokeDasharray="3 7" />
      <Flow d="M 90 118 C 90 170, 120 210, 140 238" color={AMBER} />
      <Flow d="M 270 118 C 270 170, 240 210, 220 238" color={TEAL} delay={0.3} />
      <Flow d="M 140 422 C 120 450, 90 490, 90 542" color={AMBER} delay={0.6} />
      <Flow d="M 220 422 C 240 450, 270 490, 270 542" color={TEAL} delay={0.9} />
      <Box x={8} y={14} w={166} h={104} title="NRIs" lines={["USD from abroad", "No LRS or TCS"]} accent={AMBER} />
      <Box x={186} y={14} w={166} h={104} title="Resident Indians" lines={["Under LRS", "TCS above ₹10 lakh"]} accent={TEAL} />
      <Towers cx={180} base={360} scale={0.8} />
      <text x={180} y={392} textAnchor="middle" fill={WHITE} fontFamily="'Space Grotesk', sans-serif" fontWeight={700} fontSize={20}>GIFT IFSC</text>
      <text x={180} y={410} textAnchor="middle" fill={MUTED} fontFamily="'DM Sans', sans-serif" fontSize={12}>IFSCA-regulated, USD</text>
      <Box x={8} y={542} w={166} h={104} title="Indian markets" lines={["Inbound funds", "Indian equity, bonds"]} accent={AMBER} />
      <Box x={186} y={542} w={166} h={104} title="Global markets" lines={["Outbound funds", "US and global"]} accent={TEAL} />
      <Label x={70} y={190} text="Inbound" color={AMBER} anchor="end" />
      <Label x={290} y={190} text="Outbound" color={TEAL} anchor="start" />
    </svg>
    <figcaption className="font-body text-sm text-slate-300 mt-4 md:text-center">
      One centre, two directions. The direction of a fund decides who usually invests and which rules apply.
    </figcaption>
  </figure>
);

export default MoneyMap;
