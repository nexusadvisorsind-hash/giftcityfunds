import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { FUND_PAGES, fundName, fundPath } from "@/data/funds";

export interface SearchPage {
  label: string;
  path: string;
}

interface Item {
  title: string;
  sub: string;
  to: string;
  kind: "Funds" | "Guides";
  hay: string;
}

// Header search over the fund pages and the main guides. Runs in the browser
// on data already in the bundle; nothing is sent anywhere. Press "/" to focus.
export const SiteSearch = ({ pages, onPick, className = "" }: { pages: SearchPage[]; onPick?: () => void; className?: string }) => {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [hi, setHi] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const box = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const listId = useId();

  const items = useMemo<Item[]>(
    () => [
      ...FUND_PAGES.map((f) => ({
        title: fundName(f),
        sub: `${f.house} · ${f.direction} · ${f.minimum.split(/;|\(|, then| or /)[0].trim()}`,
        to: fundPath(f)!,
        kind: "Funds" as const,
        hay: `${fundName(f)} ${f.scheme} ${f.house} ${f.direction} ${f.invests}`.toLowerCase(),
      })),
      ...pages.map((p) => ({ title: p.label, sub: "Guide", to: p.path, kind: "Guides" as const, hay: p.label.toLowerCase() })),
    ],
    [pages],
  );

  const words = q.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const results = words.length ? items.filter((it) => words.every((w) => it.hay.includes(w))).slice(0, 8) : [];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (e.key === "/" && !/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) && !t.isContentEditable) {
        e.preventDefault();
        input.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (box.current && !box.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  const go = (to: string) => {
    setOpen(false);
    setQ("");
    onPick?.();
    navigate(to);
  };

  const show = open && words.length > 0;
  return (
    <div ref={box} className={`relative ${className}`}>
      <label className="flex items-center gap-2 h-10 rounded-lg border border-input bg-white px-3 text-sm text-foreground-muted focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/20">
        <Search className="h-4 w-4 shrink-0" aria-hidden />
        <span className="sr-only">Search funds and guides</span>
        <input
          ref={input}
          type="search"
          role="combobox"
          aria-expanded={show}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={show && results[hi] ? `${listId}-${hi}` : undefined}
          value={q}
          placeholder="Search funds…"
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
            setHi(0);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") { e.preventDefault(); setHi((h) => Math.min(h + 1, results.length - 1)); }
            else if (e.key === "ArrowUp") { e.preventDefault(); setHi((h) => Math.max(h - 1, 0)); }
            else if (e.key === "Enter" && results[hi]) { e.preventDefault(); go(results[hi].to); }
            else if (e.key === "Escape") { setOpen(false); input.current?.blur(); }
          }}
          className="min-w-0 flex-1 bg-transparent text-primary placeholder:text-foreground-muted outline-none [&::-webkit-search-cancel-button]:hidden"
        />
        <kbd className="hidden xl:inline font-body text-[11px] text-foreground-muted border border-border rounded px-1.5 py-0.5" aria-hidden>/</kbd>
      </label>
      {show && (
        <ul
          id={listId}
          role="listbox"
          aria-label="Search results"
          className="absolute right-0 z-50 mt-2 w-[22rem] max-w-[calc(100vw-2rem)] rounded-xl border border-border bg-white p-1.5 shadow-lg list-none"
        >
          {results.length === 0 ? (
            <li className="px-3 py-3 text-sm text-foreground-muted">
              No match. Try the <Link to="/gift-city-fund-list" onClick={() => go("/gift-city-fund-list")} className="text-secondary underline">full fund list</Link>.
            </li>
          ) : (
            results.map((r, i) => (
              <li
                key={r.to}
                id={`${listId}-${i}`}
                role="option"
                aria-selected={i === hi}
                onMouseEnter={() => setHi(i)}
                onMouseDown={(e) => { e.preventDefault(); go(r.to); }}
                className={`cursor-pointer rounded-lg px-3 py-2 ${i === hi ? "bg-accent" : ""}`}
              >
                <span className="block text-sm font-semibold text-primary">{r.title}</span>
                <span className="block truncate text-xs text-foreground-muted">{r.kind === "Funds" ? r.sub : "Guide"}</span>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};
