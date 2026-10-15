import type { Metadata } from "next";

export const SITE_URL = "https://arthavriksha.in";
const OG_IMAGE = { url: "/og-image.png", width: 1200, height: 630, alt: "Artha Vriksha Services" };

/** Keeps description under Google's visible length without cutting mid-word. */
export function clamp(text: string, max = 155) {
  if (text.length <= max) return text;
  return text.slice(0, max - 1).replace(/\s+\S*$/, "") + "…";
}

/** One place to build title, description, canonical, Open Graph and Twitter tags so every page agrees. */
export function pageMeta(opts: { title: string; description: string; path: string; type?: "website" | "article" }): Metadata {
  const description = clamp(opts.description);
  return {
    title: { absolute: opts.title },
    description,
    alternates: { canonical: opts.path },
    openGraph: {
      type: opts.type ?? "website",
      locale: "en_IN",
      siteName: "Artha Vriksha Services",
      url: opts.path,
      title: opts.title,
      description,
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title: opts.title, description, images: [OG_IMAGE.url] },
  };
}

/** "September 2026" -> "2026-09-01" so Article schema carries a valid ISO date. */
export function isoDate(label: string) {
  const d = new Date(`${label} 1 UTC`);
  return isNaN(d.getTime()) ? undefined : d.toISOString().slice(0, 10);
}
