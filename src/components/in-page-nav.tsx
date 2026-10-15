"use client";

import { useEffect, useState } from "react";

type Item = { id: string; label: string };

/** Sticky row of anchors under the site header. Highlights the section being read. */
export function InPageNav({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page" className="sticky top-16 z-30 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-1 overflow-x-auto py-2 [scrollbar-width:none]">
        {items.map((i) => (
          <a
            key={i.id}
            href={`#${i.id}`}
            aria-current={active === i.id ? "true" : undefined}
            className={`whitespace-nowrap rounded-full px-3.5 py-1.5 font-body text-sm font-medium transition-colors ${
              active === i.id ? "bg-primary text-primary-foreground" : "text-foreground-muted hover:text-primary hover:bg-surface"
            }`}
          >
            {i.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
