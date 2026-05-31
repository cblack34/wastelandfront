# Wasteland Front - Implementation Plan

**Status:** Phase 1 (Core Site)  
**Date:** 2026-05-31  
**Tech:** Astro (latest stable) + TypeScript + Tailwind CSS v4 + minimal React islands (only for copy-to-clipboard on Alliance Tools)  
**Output:** Fully static (`astro build`)

---

## 1. Core Principles (Non-Negotiable)

- **Speed of information first.** Every page answers the question in <30s scan.
- **"Main Squad First" philosophy** emphasized everywhere relevant.
- **UR focus** for long-term advice; honest about early SSR use + the Tank squad exception (many mid-game players run 2x Tank squads).
- **Monica highlighted** specifically for Doomed Elite rallies (resource bonus applies to lead + participants; Metal/Food/Gold/RSS).
- Professional but informal tone (contractions, direct, "you", experienced friend voice).
- Heavy use of:
  - Quick Summary callout boxes at top of complex pages
  - Short paragraphs
  - Bullet points + numbered lists
  - Clean comparison tables
  - Bold key takeaways + "Why" explanations
- Mobile-first, excellent scannability on phones.
- All content validated against current community consensus (r/LastWarMobileGame + wiki) and noted where meta shifts by season/server.

---

## 2. Final Site Structure & Routes

All pages under `src/pages/` as `.astro` files (or index.astro in folders if needed later).

| Route                    | File                        | Priority | Notes |
|--------------------------|-----------------------------|----------|-------|
| `/`                      | `index.astro`               | High     | Hero, quick nav cards, value prop |
| `/getting-started`       | `getting-started.astro`     | High     | New player 30-day guide + mid-game mistakes |
| `/heroes`                | `heroes.astro`              | High     | Types, rarity, acquisition, when to drop SSR |
| `/squad-building`        | `squad-building.astro`      | **Critical** | Largest page. Multiple sections + internal TOC |
| `/stats`                 | `stats.astro`               | Med      | Practical explanations + priority by phase |
| `/resources`             | `resources.astro`           | Med      | Best farming methods ranked + tier list |
| `/stores`                | `stores.astro`              | Med      | In-game priorities + real $ value |
| `/events`                | `events.astro`              | High     | VS daily focus + schedule, Arms Race chest strategy, Alliance Trial |
| `/alliance-tools`        | `alliance-tools.astro`      | High     | Ready-to-copy VS + Alliance Trial messages (core value feature) |
| `/base-building`         | `base-building.astro`       | Med      | Priorities new → mid game (HQ, research, troops) |
| `/tools`                 | `tools.astro`               | Low      | Placeholder + links to future calculators |
| `/community`             | `community.astro`           | Low      | Links, contribution, credits |

**Navigation (Main):** Horizontal top bar (desktop) + mobile slide-in or accordion. Include "Wasteland Front" logo (text + simple SVG icon).

**Footer:** Quick links + "Built for the Last War community. Not affiliated with the game."

---

## 3. Project Structure (After Astro Init)

```
wasteland/
├── public/
│   ├── favicon.svg
│   ├── og-image.png (or generate later)
│   └── images/          # Only if we add credited game screenshots
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   ├── QuickSummary.astro
│   │   │   ├── InfoTable.astro
│   │   │   ├── CopyButton.tsx     # React island (only one)
│   │   │   └── ...
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Layout.astro
│   │   │   └── TableOfContents.astro (for long pages)
│   │   └── game/
│   │       ├── TypeBadge.astro
│   │       ├── RarityBadge.astro
│   │       ├── SquadFormation.astro (SVG diagram)
│   │       └── ResourceIcon.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── ... (see routes above)
│   ├── styles/
│   │   └── global.css
│   └── content/         # Future: content collections for hero data if we expand
├── astro.config.mjs
├── tailwind.config.mjs (if needed for v3 compat; prefer v4)
├── tsconfig.json
├── package.json
├── .gitignore
├── README.md (rich, with contribution + deployment)
└── Docs/                # Keep all specs + this plan + research notes
```

**No content collections in Phase 1** (hardcoded content in pages for full control and speed of iteration). Can migrate later.

---

## 4. Design System

**Color Palette (Slightly Dark Wasteland / Professional)**
- `--bg`: #0f172a (slate-950)
- `--surface`: #1e293b (slate-800)
- `--surface-2`: #334155 (slate-700)
- `--text`: #e2e8f0 (slate-200)
- `--text-muted`: #94a3b8 (slate-400)
- `--accent`: #f59e0b (amber-500) — wasteland / caution / important
- `--accent-2`: #22c55e (emerald-500) for positive / success
- `--danger`: #ef4444 for warnings
- Borders: subtle slate-700

**Typography**
- System stack: Inter / system-ui for excellent readability
- Headings: semibold, good scale (text-4xl → text-xl)
- Body: text-[15px] or 16px, line-height relaxed

**Components**
- QuickSummary: left amber border, dark surface, bold title "Quick Summary"
- Tables: full-width on mobile (horizontal scroll), clean header, zebra rows, good tap targets
- Copy buttons: prominent on alliance-tools, use React island for reliable clipboard + toast feedback
- Badges: small pill for Tank / Aircraft / Missile + SR/SSR/UR

**Motion**
- Subtle: hover lift on cards, focus rings, no heavy animations (performance + tone)

**Accessibility**
- Proper heading order, ARIA where needed, sufficient contrast (WCAG AA target), keyboard nav for any interactive elements.

---

## 5. Git Workflow (Strict — Must Follow)

1. All work on feature branches from `main`.
2. Logical grouping (not one branch per page):
   - `feat/setup` — Astro + Tailwind + Layout + Design system + skeleton pages + SEO base
   - `feat/home-getting-started` 
   - `feat/heroes-squad-building` (combined because tightly related and largest content)
   - `feat/events-alliance-tools` (VS + Arms Race + copy messages are high-value together)
   - `feat/stats-resources-stores-base`
   - `feat/tools-community-polish`
3. Commit often, clear messages (`feat(squad-building): add main squad first callout + Monica section`).
4. Create PR with `gh pr create` (or MCP equivalent) targeting `main`.
5. **Immediately after PR created:** Call `MCP_DOCKER__request_copilot_review` on the PR.
6. Read review results via `MCP_DOCKER__pull_request_read` (method: get_review_comments or get_reviews).
7. Address **every** Copilot comment with code changes + push.
8. Re-request review if substantial changes.
9. Only merge when Copilot issues are resolved (or explicitly noted as non-blocking with justification).
10. Merge method: **squash** (via `gh pr merge --squash` or MCP `merge_pull_request` with `squash`).
11. Delete branch after merge.
12. Main must always pass `astro build` cleanly.

**PR Titles:** Conventional + descriptive (`feat: add Squad Building page with UR focus and Tank exception`).

**Before every merge to main:** Run `astro build` locally and confirm no errors + good Lighthouse-ish scores (we'll add a simple check script later if needed).

---

## 6. Page-by-Page Content Outline (Key Requirements)

### Home (`/`)
- Strong headline: "Practical guides for Last War: Survival — new & mid-game players"
- Value props in 3-4 cards: Squad Building, VS/Events, Alliance Tools
- "Main Squad First" teaser
- Quick links grid to all major sections
- "Not affiliated" disclaimer small

### Getting Started
- Quick Summary: "Focus on one squad + your HQ for the first 30-60 days."
- Day-by-day / Week-by-week priorities (recruitment, research, buildings)
- Common mistakes list (spreading shards too thin, ignoring events, etc.)
- "When you're ready for Squad Building" link

### Heroes
- Types (Tank / Aircraft / Missile) with counter explanation + simple diagram (SVG)
- Rarity: SR (filler), SSR (early-mid workhorses), UR (endgame investment)
- How to get heroes (recruitment, events, Wall of Honor, season shop)
- "When to stop using SSR heroes" — honest guidance (keep 1-2 strong promotables, transition most resources to UR)

### Squad Building (Most Important Page)
Must include **all** of these:
- Quick Summary box with philosophy
- Squad Building Basics (5-hero mono-type, positioning basics with SVG formation diagram)
- **"Main Squad First"** — dedicated strong section with why + resource allocation advice
- UR Hero Focus (long-term power curve)
- **Tank Squad Strategy** — why many mid-game players run **two full Tank squads** (durability + content coverage) before splitting into Air/Missile
- Quick example builds (mid-game friendly, with notes on which are UR vs promotable SSR)
  - 1-2 Tank examples
  - 1 Aircraft example
  - 1 Missile example (when to pivot)
- **Monica** section: "The Elite Farmer" — exact bonus explanation, when to slot her, investment level (low-medium is fine)
- Synergy, counters, and "Don't overthink early" advice
- Positioning visual + tips

### Stats
- Simple practical table: Attack, Defense, HP, March Size, Troop Load, Lethality, etc.
- What actually moves the needle in mid-game PvE/PvP
- Priority order by phase (early / mid / late)

### Resources
- Ranked farming methods (Doomed Elites with Monica > regular elites > gathering with load > events > ...)
- Resource priority tier list (which to hoard vs spend)

### Stores
- In-game: Alliance store, Black Market, Season shop, VIP, etc. — what to buy first
- Real money value guide (battle pass vs monthly card vs packs — honest F2P/low-spender view)

### Events (High Priority)
- **VS (Victory Showdown)**: Daily focus schedule (what to prioritize each day), chest strategy
- **Arms Race**: Best chest opening strategy (save vs pop, which chests), stamina management
- Alliance Trial (2x per week) — what it is + tips
- General event chest farming efficiency

### Alliance Tools (High Value)
- Clean, large "Copy" buttons for:
  - Daily VS focus messages (different versions for different days or general)
  - Alliance Trial / prep messages
  - Recurring "Do Elite rallies with Monica in squad" reminder
- Bonus: Simple "Rally reminder" template
- Note: "Replace [brackets] with your numbers"

### Base Building
- Priority order: HQ rush early → then specific buildings that unlock power (Troop Center for your main type, Research Lab, etc.)
- Research priorities (combat vs economy)
- Common traps (upgrading everything evenly)

### Tools + Community
- Future calculators teaser
- Links to r/LastWarMobileGame, active Discord communities, good content creators (Aethernis-style guides)
- Contribution: "Found an error or better tip? Open an issue or PR"

---

## 7. Image & Asset Strategy (Strict Policy)

- **Primary:** Custom SVG icons and diagrams (squad formation, type counters, resource icons, badges). Fully self-contained, no external requests.
- **Secondary:** High-quality public game screenshots or official art **only** when we can provide clear credit + link back to source (Fandom wiki, official site, credited Reddit post). Prefer not to hotlink.
- **Fallback:** Clean Tailwind + emoji/SVG illustrations. Never use AI-generated hero portraits.
- All external images must have `rel="noopener"` + proper attribution in a small caption or footer note on the page.

---

## 8. Validation & Research Process (MCP-First)

For every major library decision or pattern:
1. Use `MCP_DOCKER__resolve-library-id` → `MCP_DOCKER__get-library-docs` (Context7) first.
2. Cross-check with official Astro docs + recent GitHub issues if needed.
3. For game content: web_search + targeted Reddit threads (already started; will do per-section deep dives).
4. Run `astro build` after every significant change on the branch.
5. Manual mobile + desktop scan before PR.

**Specific items to validate with Context7 before coding:**
- Recommended Tailwind v4 setup in Astro 4/5 (Vite plugin vs PostCSS)
- Best pattern for client-side copy buttons without heavy JS
- Layout + View Transitions (optional nice-to-have)
- Sitemap + robots best practices
- Image component usage if we add any

---

## 9. Phased Delivery (Branches)

See Git Workflow section. Suggested branch grouping above.

After all Phase 1 merges:
- One final `chore/polish` branch for any remaining tweaks + full validation pass.
- Update root README with "Getting Started for contributors" + deployment instructions.
- Add basic CI (optional GitHub Action for build check on PRs — nice but not Phase 1 blocker).

---

## 10. Post-Launch / Phase 2 Ideas (Documented for Later)

- Seasonal hero tier lists (data-driven)
- Interactive squad builder (React island or full)
- Resource / EXP calculators
- Full event calendar (content collection + dates)
- Player comments / "was this helpful?" (requires backend or static comments system)
- Darker/more thematic visual refresh once content is proven valuable

---

## 11. Risks & Mitigations

- **Scope creep on Squad Building page** → Strict outline + "edit later" comments in code.
- **Game meta changes fast** → Add "Last updated: [date]" + "Meta can shift by season/server" disclaimers on key pages.
- **Copilot review finds many issues** → Budget time for 1-2 iteration cycles per PR.
- **Image licensing** → SVG-first policy strictly enforced.

---

**This plan is the single source of truth for Phase 1.** Any deviation requires updating this document and noting why in the PR description.

Next step after approval: Create `feat/setup` branch and begin Astro initialization + core infrastructure.

---

*Plan written following full review of WASTELAND_FRONT_BUILD_SPEC.md + CONVERSATION_SUMMARY.md + initial game research from r/LastWarMobileGame and wiki.*