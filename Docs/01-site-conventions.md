# 01 · Site Conventions

## Page anatomy (guide pages)

Every guide page follows this skeleton, top to bottom:

1. `<h1>` title, then a one-line lede in `text-lg text-[#8a96b0]` ending with **"Last verified: <Month Year>."**
2. `<QuickSummary>` — the whole page compressed into 1–3 sentences a player can act on without reading further.
3. Body sections under `<h2>` headings: tables for scannable data, short `<ul class="text-sm">` lists for rules, minimal prose.
4. A closing `text-xs text-[#8a96b0]` sources paragraph: which sites the content was verified against, and a note that flagged items are approximate/disputed.

## Components & styling

- Layout: `src/layouts/Layout.astro` (nav, footer, SEO tags). Pages pass `title` and `description` props.
- `<QuickSummary>`: `src/components/QuickSummary.astro`. Heading level is configurable via the `level` prop (2–6, default `2`); the default is correct when the component sits directly after the page `h1` — only pass `level` when it's nested deeper.
- Tailwind v4 utility classes; site palette: background `#0b1220`/`#0e1730`, borders `#2a3854`, body text `#e5e9f2`, muted `#8a96b0`, accent `#f59e0b`.
- Tables: wrap in `<div class="table-wrapper">`.

## Accessibility (required on every new/touched table)

- `<caption class="sr-only">` describing the table.
- `scope="col"` on header cells; `<th scope="row">` for row-header first cells (e.g., day names).
- Dynamically-updated result regions get `role="status" aria-live="polite"`.

## SEO / meta rules

- `description` prop: ~100–130 characters, matching the rest of the site. Never enumerate lists that can drift out of sync with page content (e.g., don't list which stores a page covers).
- `title` and `description` props: pass **raw text** (`&`, not `&amp;`) — Astro escapes props; pre-escaped entities double-encode in `<title>`, meta, and OG tags. In HTML body markup, use `&amp;` as normal.
- The meta description must never claim content the page doesn't have.

## Navigation

Nav links live in `Layout.astro` twice (desktop and mobile lists) — update both. New calculators are linked from `/tools` under "Our Calculators" rather than getting top-nav slots.

## Cross-linking

Link related pages inline where a rule connects them (e.g., a spend-timing rule links the events guide; event-currency advice links the store guides). Accent link style: `class="text-[#f59e0b] hover:underline"`.
