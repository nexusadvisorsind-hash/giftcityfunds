import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Conceptual real-estate investment lifecycle: value/rental growth against
// the stages a property typically moves through from pre-launch to exit.
// Coordinates are illustrative, not derived from real market data.
const stages = [
  { key: "A", label: "Pre-Launch", sub: "3–6 months", x: 40, y: 340 },
  { key: "B", label: "Launch", sub: "Booking opens", x: 150, y: 300 },
  { key: "C", label: "Possession", sub: "1–2 yrs", x: 260, y: 245 },
  { key: "D", label: "100% Occupancy", sub: "Close to full", x: 370, y: 185 },
  { key: "E", label: "Infra Ready", sub: "Roads, metro, schools", x: 480, y: 135 },
  { key: "F", label: "Word of Mouth", sub: "Area in demand", x: 590, y: 100 },
  { key: "G", label: "Building Ages", sub: "New options nearby", x: 700, y: 80 },
  { key: "H", label: "Investors Exit", sub: "Supply increases", x: 810, y: 72 },
];

function pathThrough(points: { x: number; y: number }[]) {
  if (points.length < 2) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const midX = (p0.x + p1.x) / 2;
    d += ` C ${midX} ${p0.y}, ${midX} ${p1.y}, ${p1.x} ${p1.y}`;
  }
  return d;
}

export function PropertyLifecycleChart() {
  const linePath = pathThrough(stages);
  const areaPath = `${linePath} L ${stages[stages.length - 1].x} 380 L ${stages[0].x} 380 Z`;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-background border border-border rounded-2xl p-4 sm:p-8 overflow-x-auto">
        <svg viewBox="0 0 900 420" className="w-full min-w-[720px]" role="img" aria-label="Property investment lifecycle chart">
          <defs>
            <linearGradient id="lifecycleFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0F8A5F" stopOpacity="0.35" />
              <stop offset="55%" stopColor="#1E5FD9" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#1E5FD9" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="lifecycleLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0F8A5F" />
              <stop offset="55%" stopColor="#1E5FD9" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
          </defs>

          {/* Axis */}
          <line x1="30" y1="380" x2="860" y2="380" stroke="var(--border)" strokeWidth="2" />
          <line x1="30" y1="20" x2="30" y2="380" stroke="var(--border)" strokeWidth="2" />
          <text x="10" y="30" className="font-body" fontSize="11" fill="#4B5670">High</text>
          <text x="10" y="385" className="font-body" fontSize="11" fill="#4B5670">Low</text>
          <text x="440" y="410" textAnchor="middle" className="font-body" fontSize="12" fill="#4B5670">
            Property Lifecycle Stage →
          </text>

          {/* Area + line */}
          <path d={areaPath} fill="url(#lifecycleFill)" />
          <path d={linePath} fill="none" stroke="url(#lifecycleLine)" strokeWidth="4" strokeLinecap="round" />

          {/* Best Rental Value callout — around stage E/F */}
          <g>
            <line x1="535" y1="118" x2="535" y2="60" stroke="#0F8A5F" strokeWidth="1.5" strokeDasharray="3 3" />
            <rect x="465" y="20" width="140" height="42" rx="10" fill="#E7F5EF" stroke="#0F8A5F" />
            <text x="535" y="37" textAnchor="middle" className="font-heading" fontSize="12" fontWeight="700" fill="#0F8A5F">
              Best Rental Value
            </text>
            <text x="535" y="53" textAnchor="middle" className="font-body" fontSize="10" fill="#0F8A5F">
              Demand is high, supply still limited
            </text>
          </g>

          {/* Best Time to Exit callout — around stage F/G */}
          <g>
            <line x1="700" y1="80" x2="700" y2="130" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="3 3" />
            <rect x="630" y="130" width="150" height="48" rx="10" fill="#FBF3DC" stroke="#D4AF37" />
            <text x="705" y="150" textAnchor="middle" className="font-heading" fontSize="12" fontWeight="700" fill="#8A6D1F">
              Best Time to Exit
            </text>
            <text x="705" y="166" textAnchor="middle" className="font-body" fontSize="10" fill="#8A6D1F">
              Before nearby supply increases
            </text>
          </g>

          {/* Exit → SWP note pointing toward Mutual Funds */}
          <g>
            <circle cx="850" cy="72" r="5" fill="#1E5FD9" />
            <text x="820" y="55" textAnchor="end" className="font-heading" fontSize="12" fontWeight="700" fill="#1E5FD9">
              Exit → Reinvest via SWP
            </text>
          </g>

          {/* Stage points + labels */}
          {stages.map((s) => (
            <g key={s.key}>
              <circle cx={s.x} cy={s.y} r="6" fill="#fff" stroke="#0B1E42" strokeWidth="2.5" />
              <circle cx={s.x} cy="380" r="3" fill="#4B5670" />
              <text x={s.x} y="398" textAnchor="middle" className="font-body" fontSize="10.5" fontWeight="600" fill="#101A2E">
                {s.label}
              </text>
              <text x={s.x} y="411" textAnchor="middle" className="font-body" fontSize="9" fill="#4B5670">
                {s.sub}
              </text>
            </g>
          ))}
        </svg>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-5">
          <p className="font-body text-xs text-foreground-muted max-w-2xl">
            A conceptual illustration of how property value and rental demand typically move
            through a project&apos;s lifecycle — from pre-launch booking through possession,
            peak rental years, and eventual exit as an area matures. Actual timelines and returns
            vary by project, location and market conditions.
          </p>
          <Link
            href="/mutual-funds"
            className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:underline whitespace-nowrap"
          >
            Learn about SWPs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
