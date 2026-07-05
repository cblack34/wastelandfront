# 06 · Acceptance — Definition of Done

## Every PR

- [ ] `PUPPETEER_SKIP_DOWNLOAD=1 npm run build` passes locally before push.
- [ ] One story per branch/PR; PR description states what was researched/built and how it was verified.
- [ ] Copilot review received; **every** comment gets a fix or a written push-back reply, and the thread is resolved.
- [ ] Out-of-scope review feedback is added to `RESEARCH.md` → Inbox, not silently dropped.
- [ ] Merged to `main` only after the above; `main` re-built after merge.

## Every guide page

- [ ] Follows the page anatomy in [`01-site-conventions.md`](01-site-conventions.md) (lede + stamp, QuickSummary, sources footer).
- [ ] Every number satisfies the 2-source rule or is explicitly flagged ([`03-editorial-standards.md`](03-editorial-standards.md)).
- [ ] Disputed claims labeled as disputed; stale-advice warnings included where the meta changed.
- [ ] Tables: sr-only caption, `scope="col"`, `<th scope="row">` where applicable.
- [ ] Meta description ~100–130 chars, accurate, no drift-prone enumerations; raw `&` in the title prop.
- [ ] "Last verified" stamp is current.

## Every calculator

- [ ] Data rules from [`04-calculators.md`](04-calculators.md): provenance section on-page, validated/estimated/excluded values distinguished, no blind-copied tables.
- [ ] Math verified by a standalone smoke test (node) covering boundaries and the published-data anchors.
- [ ] All inputs clamped **and normalized back into the UI**; localStorage debounced + try/caught; listeners scoped to the tool; live result region has `role="status" aria-live="polite"`.
- [ ] Linked from `/tools`.
- [ ] Unverifiable data queued in `RESEARCH.md` for in-game capture.

## Every research pass

- [ ] Sources ranked per the reliability tiers; Tier-3-only claims marked unverified.
- [ ] Findings recorded with per-claim citations before any page is written.
- [ ] New topics/gaps discovered during research appended to `RESEARCH.md`.
