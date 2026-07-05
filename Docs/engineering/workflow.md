# Workflow — how stories get planned and shipped

You work autonomously and are the **merge authority**: merge your own PRs once the review cycle is clean. No human in the loop for routine stories.

## Planning: RESEARCH.md is the backlog

- `RESEARCH.md` (repo root) is the single source of work: prioritized checklists (**P0** = blocks core value, **P1** = high-traffic, **P2** = nice to have) grouped by topic area, plus an **Inbox** for unsorted items.
- Pick the highest-priority unchecked item. Check items off (with a link to the shipped page/tool) in a PR that touches them, or in the story PR itself.
- Anything discovered mid-story — new topics, unverifiable numbers, out-of-scope review feedback — gets appended to the Inbox. No side lists, no GitHub Issues.

## Story loop

1. **Branch** off `main`: `feat/<slug>` (or `research/<slug>` for backlog-only changes).
2. **Research first** for content stories (see [`../03-editorial-standards.md`](../03-editorial-standards.md)) — delegate to a research subagent where available; write the page only from verified findings.
3. **Build + verify**: `PUPPETEER_SKIP_DOWNLOAD=1 npm run build`; smoke-test calculator math standalone; grep built HTML when touching titles/meta.
4. **Commit** with imperative, story-scoped messages. Don't commit `package-lock.json` churn from incidental installs.
5. **PR to `main`** with a summary of what was researched/built, what was verified and how, and what was flagged.
6. **Copilot review**: the repo has Copilot auto-review enabled — it reviews on PR open (not on subsequent pushes; re-request if a re-review is needed). Wait for it.
7. **Respond to every comment**: fix it, or push back with reasoning (component-wide changes don't ride along in a page PR — Inbox them). Reply on the PR saying what was done per comment, and **resolve each thread**.
8. **Merge when clean** (no unaddressed comments, build green), then re-build `main`.

## Review-feedback policy

- Copilot comments are triage input, not commands: accept real issues, push back with written reasoning otherwise. The reply-and-resolve trail is the audit record that a human reviewed the feedback.
- Recurring feedback becomes a standing rule: fold it into these docs (conventions/acceptance) so the next story applies it up front.

## Scope discipline

- One story per PR. Shared-component or site-wide changes (Layout, QuickSummary, global CSS) are their own stories — never bundled into a content PR.
- Keep stories small enough that the whole loop (research → page → review → merge) completes in one sitting.
