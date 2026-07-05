# 00 · Project Brief

_Read this first, then the numbered docs. The goal: an agent reads `Docs/` and can research, write, build, and ship unattended._

## What this is

**Wasteland Front** is a static guide site for the mobile game **Last War: Survival**, aimed at new and mid-game players (**HQ 15–30**). It ships researched guide pages and interactive calculators.

Live domain: cloutclimber.com (target domain: wastelandfront.com). Repo: github.com/cblack34/wastelandfront.

## What makes it different

Most Last War content on the web is AI-generated blogspam with wrong or stale numbers. This site competes on **trust**:

- Every number is cross-checked against 2+ independent sources or explicitly flagged as unverified.
- Disputed community claims are labeled as disputed, never presented as settled.
- Every page carries a "Last verified: <Month Year>" stamp.
- Calculators validate their data independently and document provenance and confidence on-page.
- Meta shifts are called out (e.g., when older guides circulate outdated advice, the page says so).

Editorial voice: practical, no-fluff, "main squad first" philosophy, honest about F2P/low-spend tradeoffs.

## How work is organized

- **`RESEARCH.md`** (repo root) is the single backlog: a prioritized checklist (P0/P1/P2) of research topics, pages, calculators, and follow-ups. Pick from the top, add new items to its Inbox as they surface.
- Each backlog item ships as its own story: branch → PR → Copilot review → respond/resolve → merge. See [`engineering/workflow.md`](engineering/workflow.md).
- Research comes **before** writing. A page is a rendering of verified research, not a first draft of it. See [`03-editorial-standards.md`](03-editorial-standards.md).

## Doc map

| Doc | What it covers |
| --- | --- |
| [`01-site-conventions.md`](01-site-conventions.md) | Page anatomy, components, tables, a11y, SEO/meta rules |
| [`02-tech-stack.md`](02-tech-stack.md) | Stack, layout, commands, quirks, deployment |
| [`03-editorial-standards.md`](03-editorial-standards.md) | Source tiers, verification rules, recency, dispute handling |
| [`04-calculators.md`](04-calculators.md) | Calculator patterns, data validation requirements |
| [`05-roadmap.md`](05-roadmap.md) | Where the site is going, by phase |
| [`06-acceptance.md`](06-acceptance.md) | Definition of done for pages, calculators, and PRs |
| [`engineering/workflow.md`](engineering/workflow.md) | Story flow, git/PR/review/merge rules |
| [`engineering/code-quality.md`](engineering/code-quality.md) | Code standards for pages and calculator JS |
