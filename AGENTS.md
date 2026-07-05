# AGENTS.md — Wasteland Front

Guide for AI coding agents working in this repo. Humans: see `README.md`.

## Project overview

Static **Astro 7** guide site for the mobile game **Last War: Survival**, aimed at HQ 15–30 players. The product is **trustworthy numbers**: verified, current, disputes flagged. Guide pages live in `src/pages/`, interactive calculators in `src/pages/tools/`. No backend.

Read `Docs/00-project-brief.md` first — it maps the full documentation set:

| Doc | Covers |
| --- | --- |
| `Docs/00-project-brief.md` | What the site is, differentiators, doc map |
| `Docs/01-site-conventions.md` | Page anatomy, components, a11y table rules, SEO/meta rules |
| `Docs/02-tech-stack.md` | Stack, layout, commands, environment quirks, Docker deploy |
| `Docs/03-editorial-standards.md` | Source reliability tiers, verification rules, recency, dispute handling |
| `Docs/04-calculators.md` | Calculator data-validation rules and hardened UI/code patterns |
| `Docs/05-roadmap.md` | Direction by phase |
| `Docs/06-acceptance.md` | Definition of done for PRs, pages, calculators, research |
| `Docs/engineering/workflow.md` | Story loop, review/merge rules, delegation & model routing |
| `Docs/engineering/code-quality.md` | Code standards for pages and calculator JS |

## Setup & build commands

```bash
PUPPETEER_SKIP_DOWNLOAD=1 npm install    # puppeteer's Chrome download fails in sandboxes; skip it
PUPPETEER_SKIP_DOWNLOAD=1 npm run build  # REQUIRED before every commit that touches pages
npm run dev                              # local dev server
```

There is no test suite; the build is the gate. Calculator math must additionally be smoke-tested standalone (`node -e` with the page's pure functions) before committing.

## Planning

`RESEARCH.md` (repo root) is the **only** backlog: prioritized checklists (P0/P1/P2) plus an Inbox. Pick from the top; append anything you discover (new topics, unverifiable numbers, out-of-scope review feedback) to the Inbox. No other planning system.

## Content rules (non-negotiable)

- **Research before writing; verify before publishing.** Every number needs 2+ independent sources or an explicit flag. Source tiers and the full rules: `Docs/03-editorial-standards.md`.
- Disputed community claims stay labeled disputed. Stale-meta warnings are called out where advice changed.
- Every page carries a "Last verified: <Month Year>" stamp in its lede; update on re-verification.
- Prefer sources under ~12 months old; beware content from other games (Kingshot/Whiteout Survival) contaminating search results.

## Code & page conventions

- Follow `Docs/01-site-conventions.md` exactly. Highlights: sr-only table captions + `scope` attrs; meta descriptions ~100–130 chars with no drift-prone enumerations; pass **raw `&`** (never `&amp;`) in Layout `title`/`description` props — Astro escapes props and pre-escaped entities double-encode.
- Calculators: vanilla JS; clamp-and-normalize every input read; debounced (~300ms) try/caught `localStorage` under `wf-*` keys; listeners scoped to the tool's container; live regions get `role="status" aria-live="polite"`. Full patterns: `Docs/04-calculators.md`.
- Revert incidental `package-lock.json` diffs unless the story intentionally changes dependencies.

## Git & PR workflow

- **Branch per story** off `main` (`feat/<slug>` or `research/<slug>`) → PR → **GitHub Copilot review** (auto-runs on PR open only; re-request after pushes if a re-review is needed) → address or push back on **every** comment, reply on the thread, resolve it → **merge when clean**. The agent is the merge authority. Full loop: `Docs/engineering/workflow.md`.
- One story per PR; shared-component/site-wide changes are their own stories.
- PR descriptions state what was researched/built, how it was verified, and what was flagged.
- If git fails on a stale lock, confirm no git process is running, remove only the named lock file (typically `.git/index.lock`), retry once.

## Definition of done

Check the diff against `Docs/06-acceptance.md` before opening a PR: build green, conventions met, numbers sourced/flagged, review cycle completed after opening.
