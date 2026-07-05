# Wasteland Front — agent instructions

Static Astro guide site for **Last War: Survival** (HQ 15–30 players). The site's value proposition is **trustworthy numbers**: verified, current, disputes flagged. Read `Docs/00-project-brief.md` first — it maps the full doc set.

## The three rules that matter most

1. **Research before writing; verify before publishing.** 2+ independent sources per number or flag it. Disputed claims stay labeled disputed. Full rules: `Docs/03-editorial-standards.md`.
2. **RESEARCH.md is the backlog.** Pick from the top, Inbox everything you discover. No other planning system.
3. **Branch per story → PR → Copilot review → reply & resolve every comment → merge when clean.** You are the merge authority. Full loop: `Docs/engineering/workflow.md`.

## Quick facts

- Build check (required pre-commit): `PUPPETEER_SKIP_DOWNLOAD=1 npm run build`
- Copilot auto-reviews on PR **open** only — re-request for re-reviews after pushes.
- Page/calculator conventions and definition of done: `Docs/01-site-conventions.md`, `Docs/04-calculators.md`, `Docs/06-acceptance.md`.
- Every page carries a "Last verified: <Month Year>" stamp; update it on re-verification.
- Pass raw `&` (not `&amp;`) in Layout `title`/`description` props — Astro escapes props.
