# Code quality

Write code a strict senior engineer would approve on first read. This is a small static site — the standards below are proportionate; don't import app-scale architecture.

## Astro pages

- One page = one `.astro` file; shared chrome lives in `Layout.astro` and components, never duplicated per page.
- Pages are content-first: minimal frontmatter logic; no page-level client JS unless the page is a calculator. (The layout's small mobile-nav toggle script is the one sanctioned exception, and it lives in `Layout.astro`, not in pages.)
- Follow the conventions doc for structure/a11y/meta ([`../01-site-conventions.md`](../01-site-conventions.md)) — those rules exist because reviews keep enforcing them.

## Calculator JS

- Vanilla JS, small pure functions: math/formatting helpers separated from DOM wiring so they can be smoke-tested in node verbatim.
- Data tables at the top of the script with per-value provenance comments (verified vs interpolated, source).
- Defensive by default: clamp-and-normalize every input read, try/catch around storage, NaN fallbacks — assume tampered localStorage and hostile keyboard input.
- No dependencies. If a tool seems to need a library, the tool is too big — split it or reconsider.

## General

- Simplicity/YAGNI: build for the current backlog item, not imagined futures. New abstractions need two concrete users first.
- One focused change at a time; never a drive-by refactor inside a content story.
- Comments explain *why* (provenance, chosen constants, review-driven decisions), not *what*.
- Prefer the compiler/build as the safety net: if `astro build` can catch it, arrange the code so it does.
