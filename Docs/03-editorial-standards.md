# 03 · Editorial Standards

_This is the heart of the project. The site's only durable advantage is that its numbers can be trusted._

## Research before writing

A page is a rendering of completed research, never a first draft of it. For any nontrivial topic, run a research pass (web search + source fetches) that returns: in-game terminology, numbers with per-claim sourcing, and noted community consensus/controversy. Only then write the page.

## Source reliability tiers

**Tier 1 (trust, still cross-check):** lastwartutorial.com (screenshot-verified, dev-corroborated), cpt-hedge.com, lastwarvault.com, lastwar.wiki / lastwar.fandom.com, official channels (@lastwarsurvival, FirstFun zendesk).

**Tier 2 (usable, verify numbers):** allclash.com, lastwar-tutorial.com (distinct from lastwartutorial.com), packsify.com, theriagames.com, medievalfun.com, heaven-guardian.com, r/LastWarMobileGame.

**Tier 3 (leads only, never sole source):** lastwarhandbook.com (ranks well but shows AI-content-farm signs — fabricated trust badges), top-up-shop blogs (lootbar, ldshop, u7buy, lw-spy). These sites have published day-tables and mechanics copied from *other games entirely* (e.g., "KvK", Whiteout Survival stats). If a claim exists only here, treat it as unverified.

## Verification rules

- **The 2-source rule:** a number goes on the page as fact only when 2+ independent sources agree. "Independent" matters — community datasets often share one origin; note when corroboration is likely shared lineage.
- **Flag, don't drop:** single-sourced or conflicting numbers still appear when useful, explicitly marked (e.g., "Unverified: sources conflict on X and Y — check your server; the strategy is identical either way").
- **Disputes are content:** where the community genuinely disagrees (stat priorities, squad hybrids, transition timing), present both camps and say it's contested. Never launder a contested claim into settled advice.
- **Sanity-check math yourself:** when data implies internal ratios or formulas, verify consistency programmatically before publishing (does the derived value reproduce the published table?). Prefer the constant that exactly reproduces published data, and document the choice.
- **Beware cross-game contamination:** search results routinely mix in Kingshot/Whiteout Survival mechanics. If a stat or system doesn't have a Tier-1 Last War citation, suspect it's from another game.

## Recency

- Prefer sources from the last ~12 months; the game's meta and schedules change by patch and season.
- When advice changed at a known point, say so on the page ("older guides say X — that changed in <period>").
- Every page footer lists the sources verified against; every page lede carries "Last verified: <Month Year>". Update the stamp whenever the page is re-verified, not merely edited.

## Follow-ups

Unverifiable numbers worth pinning down later (in-game screenshots, per-server checks) go into `RESEARCH.md` → Inbox as checklist items so no session loses them.
