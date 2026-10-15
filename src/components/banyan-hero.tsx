"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type PillarKey = "mf" | "re" | "ins" | "loan";

const PILLARS: Record<
  PillarKey,
  {
    name: string;
    line: string;
    href: string;
    color: string;
    branch: string;
    tip: [number, number];
    twigs: string[];
    root: string;
    tag: string;
    tagX: number;
  }
> = {
  mf: {
    name: "Mutual funds",
    line: "SIPs, ELSS tax-saving funds and goal planning from an AMFI-registered distributor.",
    href: "/mutual-funds",
    color: "#6EA0FF",
    branch: "M301 340 C 262 318, 205 280, 140 190",
    tip: [140, 190],
    twigs: ["M222 262 C 205 252, 190 250, 176 256", "M180 224 C 168 214, 160 205, 158 196"],
    root: "M138 205 C 130 290, 205 380, 200 470",
    tag: "AMFI · ARN 106715",
    tagX: 200,
  },
  re: {
    name: "Real estate",
    line: "RERA-registered property in Maharashtra and Gujarat, checked before it reaches you.",
    href: "/real-estate",
    color: "#3FD39A",
    branch: "M303 300 C 350 275, 420 240, 468 160",
    tip: [468, 160],
    twigs: ["M388 250 C 404 244, 420 246, 432 254", "M430 202 C 442 196, 452 196, 462 202"],
    root: "M466 175 C 480 260, 396 380, 396 470",
    tag: "MahaRERA · GujRERA",
    tagX: 396,
  },
  ins: {
    name: "Insurance",
    line: "Term, health and motor cover, compared across insurers before you choose.",
    href: "/insurance",
    color: "#E8C65A",
    branch: "M299 410 C 250 395, 180 375, 100 335",
    tip: [100, 335],
    twigs: ["M200 385 C 190 372, 176 366, 160 366", "M148 362 C 140 354, 132 352, 122 354"],
    root: "M100 350 C 90 400, 66 440, 62 470",
    tag: "IRDAI agent",
    tagX: 62,
  },
  loan: {
    name: "Loans",
    line: "Home loans, loan against property and business loans from a panel of banks and NBFCs.",
    href: "/loans",
    color: "#C9D6F5",
    branch: "M302 380 C 360 360, 440 335, 510 290",
    tip: [510, 290],
    twigs: ["M400 350 C 414 344, 428 346, 440 354", "M458 318 C 468 312, 478 312, 488 318"],
    root: "M510 305 C 522 370, 552 430, 554 470",
    tag: "Loan DSA",
    tagX: 554,
  },
};

const ORDER: PillarKey[] = ["mf", "re", "ins", "loan"];

// Small leaf dots around each branch tip, fixed so server and client render the same.
const LEAVES: [number, number, number][] = [
  [-26, -10, 9],
  [-12, -28, 11],
  [10, -26, 9],
  [26, -8, 10],
  [-24, 12, 8],
  [22, 14, 8],
  [0, 0, 14],
];

const SOIL_ROOTS = [
  "M300 470 C 300 530, 250 580, 150 612",
  "M300 470 C 296 540, 284 590, 262 632",
  "M300 470 C 304 540, 322 590, 344 632",
  "M300 470 C 300 530, 352 580, 452 612",
];

export function BanyanHero() {
  const [active, setActive] = useState<PillarKey | null>(null);
  const reduce = useReducedMotion();
  const d = (seconds: number) => (reduce ? 0 : seconds);

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 600 640"
        role="group"
        aria-label="A banyan tree. Its four branches are Mutual funds, Real estate, Insurance and Loans."
        className="w-full h-auto max-h-[560px] overflow-visible"
      >
        {/* ground line */}
        <motion.path
          d="M24 470 H576"
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: reduce ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: d(0.8) }}
        />

        {/* roots under the soil (drawn first) */}
        {SOIL_ROOTS.map((p, i) => (
          <motion.path
            key={p}
            d={p}
            stroke="#D4AF37"
            strokeOpacity="0.55"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: reduce ? 1 : 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: d(0.9), delay: d(0.1 + i * 0.08), ease: "easeOut" }}
          />
        ))}

        {/* trunk */}
        <motion.path
          d="M300 470 C 292 410, 308 370, 300 320 C 296 290, 300 270, 304 248"
          stroke="rgba(255,255,255,0.20)"
          strokeWidth="30"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: reduce ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: d(1.2), delay: d(0.6), ease: "easeOut" }}
        />
        <motion.path
          d="M300 470 C 292 410, 308 370, 300 320 C 296 290, 300 270, 304 248"
          stroke="#F2F6FF"
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: reduce ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: d(1.2), delay: d(0.6), ease: "easeOut" }}
        />

        {ORDER.map((key, i) => {
          const p = PILLARS[key];
          const isActive = active === key;
          const dimmed = active !== null && !isActive;
          const baseDelay = 1.6 + i * 0.22;
          return (
            <g
              key={key}
              style={{ opacity: dimmed ? 0.45 : 1, transition: "opacity 0.25s" }}
            >
              {/* aerial root and its credential tag */}
              <motion.path
                d={p.root}
                stroke="#D4AF37"
                strokeOpacity="0.85"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: reduce ? 1 : 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: d(1.1), delay: d(2.5 + i * 0.18), ease: "easeOut" }}
              />
              <motion.g
                className="max-sm:hidden"
                initial={{ opacity: reduce ? 1 : 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: d(0.5), delay: d(3.4 + i * 0.12) }}
              >
                <rect
                  x={p.tagX - (p.tag.length * 7.2 + 20) / 2}
                  y={486}
                  width={p.tag.length * 7.2 + 20}
                  height={26}
                  rx={13}
                  fill="rgba(212,175,55,0.14)"
                  stroke="rgba(212,175,55,0.65)"
                />
                <text
                  x={p.tagX}
                  y={503}
                  textAnchor="middle"
                  fontSize="13"
                  fontFamily="Inter, Arial, sans-serif"
                  fill="#F6E7B0"
                >
                  {p.tag}
                </text>
              </motion.g>

              {/* branch and twigs */}
              <motion.path
                d={p.branch}
                stroke={p.color}
                strokeWidth={isActive ? 11 : 8}
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: reduce ? 1 : 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: d(1), delay: d(baseDelay), ease: "easeOut" }}
                style={{ transition: "stroke-width 0.2s" }}
              />
              {p.twigs.map((t) => (
                <motion.path
                  key={t}
                  d={t}
                  stroke={p.color}
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: reduce ? 1 : 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: d(0.6), delay: d(baseDelay + 0.7) }}
                />
              ))}

              {/* leaf cluster at the tip */}
              <motion.g
                initial={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: d(0.5), delay: d(baseDelay + 0.9) }}
                style={{ transformOrigin: `${p.tip[0]}px ${p.tip[1]}px` }}
              >
                <circle
                  cx={p.tip[0]}
                  cy={p.tip[1]}
                  r={isActive ? 56 : 46}
                  fill={p.color}
                  fillOpacity={isActive ? 0.28 : 0.12}
                  style={{ transition: "all 0.25s" }}
                />
                {LEAVES.map(([dx, dy, r], li) => (
                  <circle
                    key={li}
                    cx={p.tip[0] + dx}
                    cy={p.tip[1] + dy}
                    r={r}
                    fill={p.color}
                    fillOpacity={0.85}
                  />
                ))}
              </motion.g>

              {/* label */}
              <motion.text
                x={p.tip[0]}
                y={p.tip[1] - 62}
                textAnchor="middle"
                fontSize="17"
                fontWeight="600"
                fontFamily="Inter, Arial, sans-serif"
                fill="#FFFFFF"
                initial={{ opacity: reduce ? 1 : 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: d(0.5), delay: d(baseDelay + 1.1) }}
              >
                {p.name}
              </motion.text>

              {/* generous touch / keyboard target */}
              <circle
                cx={p.tip[0]}
                cy={p.tip[1]}
                r={64}
                fill="transparent"
                tabIndex={0}
                role="button"
                aria-label={`${p.name}: ${p.line}`}
                aria-pressed={isActive}
                style={{ cursor: "pointer", outline: "none" }}
                onMouseEnter={() => setActive(key)}
                
                onFocus={() => setActive(key)}
                
                onClick={() => setActive(key)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive(key);
                  }
                }}
              />
            </g>
          );
        })}
      </svg>

      <div className="min-h-[104px] mt-2" aria-live="polite">
        <AnimatePresence mode="wait">
          {active ? (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="border-l-2 pl-4"
              style={{ borderColor: PILLARS[active].color }}
            >
              <p className="font-heading font-semibold text-xl text-white">{PILLARS[active].name}</p>
              <p className="font-body text-sm text-white/80 mt-1 max-w-sm">{PILLARS[active].line}</p>
              <Link
                href={PILLARS[active].href}
                className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-accent mt-2 hover:underline"
              >
                See {PILLARS[active].name.toLowerCase()} <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ) : (
            <motion.p
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="font-body text-sm text-white/65 border-l-2 border-white/20 pl-4 max-w-sm"
            >
              Four services grow from one trunk. The gold roots are our registrations. Tap a branch to see what grows from it.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
