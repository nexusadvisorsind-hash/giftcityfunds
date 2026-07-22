# GIFT City Funds — Copy Rebuild Plan (Phase 1 of 2)

The spec defines an 11-page IA that only partially overlaps with what exists today. I'll rebuild page copy + routes first, then run the design pass in Phase 2.

## New site map

```
/                       Home (rewrite)
/what-is-gift-city      NEW
/funds-explained        NEW  (replaces /investments)
/who-its-for            NEW
/us-based-nris          NEW  ★ flagship
/taxation               NEW
/faqs                   NEW
/about                  Rewrite (About the Contributor)
/insights               NEW  (replaces /resources)
/contact                Rewrite (trim, keep form + contributor)
/disclaimer             Rewrite to spec
+ keep: /privacy-policy, /terms-of-use, /accessibility-statement (footer legal)
```

## Route + redirect changes (src/App.tsx, public/_redirects)

- Add routes for the 8 new pages.
- Redirect `/investments` → `/funds-explained`, `/resources` → `/insights`, old knowledge slugs → nearest new page.
- Update `public/sitemap.xml` to the 11-page IA.
- Retire (delete) `src/pages/Investments.tsx`, `src/pages/Resources.tsx`, and the four `src/pages/knowledge/*.tsx` files (content is absorbed into new pages).

## Sitewide chrome

- **Navigation.tsx**: primary nav = Home · What is GIFT City · Funds Explained · Who It's For · US NRIs · Taxation · Insights · About · Contact. Keep FAQs + Disclaimer in footer + inline links. Keep trust bar ("Author — Anup Vatyani (MFD ARN 106715) | Informational Content Only | No Personalized Advice.").
- **Footer.tsx**: keep current legal strip / contact / ARN. Add FAQs + Disclaimer link. Confirm domain = giftcityfunds.in.
- **Floating WhatsApp widget**: add global bottom-right FAB linking to `https://wa.me/919537533533`.
- **SEO.tsx**: extend to support per-page schema arrays (Article, FAQPage, Person, FinancialService, BreadcrumbList).

## Per-page copy application

For each page, paste the spec copy verbatim: H1, section H2s, callouts, tables, CTAs, internal links, image alt text, and set title/description/canonical/schema exactly as specified. Placeholder illustrations reused for now; new imagery lands in Phase 2 (design).

Pages built new: Home, /what-is-gift-city, /funds-explained, /who-its-for, /us-based-nris, /taxation, /faqs, /insights (list with 8 seed article cards as "coming soon" placeholders — no article bodies yet), /disclaimer.
Pages rewritten: /about, /contact.

## Deferred to Phase 2 (design)

- Visual system pass per `giftcityfunds-content-and-design.md` (typography, palette, photography plan, section layouts, hero treatment).
- I'll ask the 3 visual-choice questions (palette / type / layout) at the start of Phase 2 before generating direction previews.

## Out of scope this phase

- Writing the 8 seed Insights articles (spec calls them "to be written next").
- `/resources/document-checklist` lead magnet (spec references but doesn't provide the PDF or gate).
- Newsletter backend (form UI only; wiring later).

Confirm and I'll execute Phase 1 straight through.
