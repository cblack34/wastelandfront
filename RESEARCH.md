# Research Backlog — Last War: Survival

Living list of everything to research before rewriting site content. Goal: replace generic filler with **specific, verified, actionable** guidance for HQ 15–30 players.

**How to use this file:** add new items as they come up (append to the relevant section, or "Inbox" at the bottom). When an item is researched, check it off and link the resulting page/notes. Priorities: **P0** = asked for directly / blocks core pages, **P1** = high-traffic topics, **P2** = nice to have.

**Trusted sources:** lastwartutorial.com, cpt-hedge.com, lastwarvault.com, allclash.com, lastwar.fandom.com, r/LastWarMobileGame. Caution: lastwarhandbook.com ranks well but looks AI-farmed — verify its numbers elsewhere.

---

## 0. Content repair — full-site audit, July 2026 (P0, blocks new content)

Adversarial audit of all 19 pages (5 research clusters, per-claim verification; full findings in [#37](https://github.com/cblack34/wastelandfront/pull/37)). Verdicts: no page needs DELETE; base-building/resources/aircraft/missile need REWRITE; heroes/upgrade-roadmap are the strongest pages but still carry confirmed errors. **Rule: nothing new ships until the P0 fixes land.** Each item below is one story-sized PR; every fix must carry its citations and add/refresh the page's "Last verified" stamp.

### P0 — confirmed wrong facts (correction known, cited)

- [x] heroes.astro: move Lucius (Aircraft-type) and Adam (Missile-type) out of "Tanks (front row)"; move Stetmann from Support to DPS/all-rounder; clarify Morrison's −25% DEF shred is a stacking debuff (5%/hit, 25% cap over 9s); add Season 6 / Hero Awakening context to the S1–S5 EW list — fixed in [#38](https://github.com/cblack34/wastelandfront/pull/38)
- [x] upgrade-roadmap.astro: fix EW L30 cumulative total 2,830 → 2,880 (internal math error); narrow the shard-refund claim to Wall of Honor shards only (star-ascension shards do NOT refund — page currently contradicts its own WoH section); Resonance triggers on chip rarity (4× Legendary/Epic), not star level; drone left/right framing (left drops ~2×, that's why choice-picks go right); complete the T10 gate (also Barracks L30 + Special Forces research) — fixed in [#39](https://github.com/cblack34/wastelandfront/pull/39)
- [x] events.astro: fix the Saturday shield claim — scouting/attacking triggers War Fever (blocks shield *activation* ~15 min), it does not permanently pop an active shield; fix Desert Storm scale (not 20v20 — task forces up to 60/side); downgrade every single-source point value in the VS day table to an explicit [VERIFY] flag; remove or flag the unverified "Duel Expert" / "Premium Rewards" research names; soften the Dec-2025 schedule-unification claim until verified against a live source — fixed in [#40](https://github.com/cblack34/wastelandfront/pull/40)
- [x] stats.astro: remove or reconcile the "2M T1 ≈ 292K effective vs 1M T10" example (contradicts the page's own T1=24/T10=1,647 figures by 10×); label "Murphy Exception" as a house term, not community consensus; reframe Severe Wound −5% per the official Zendesk wording (active combat effect while Armored units attack, not passive spec stat); flag the type-counter cycle direction as disputed between sources — fixed in [#41](https://github.com/cblack34/wastelandfront/pull/41)
- [x] src/pages/tools/resource-chest-calculator.astro: switch gold-coin factor to 0.60 (cited by theriagames) unless 0.636 can be reproduced from a live calculator screenshot — 0.636 is numerically identical to the page's own HQ20→35 growth ratio (12,600/19,800), almost certainly a derivation mix-up; fix the Hero EXP exclusion rationale (the ratios 10.0/80.1/240.3× DO match the standard pattern — correct reason is "base figures unsourced"); fix the self-contradictory "8.6K → 8,424" example (anchor is 8,640) — fixed in [#42](https://github.com/cblack34/wastelandfront/pull/42)
- [x] src/pages/tools/speedup-calculator.astro: rewrite the QuickSummary "spend rule" (currently double-counts Friday, omits Mon/Thu/Sat and Healing entirely) as a day-by-theme table sourced from lastwartutorial VS/Arms Race pages; flag 15m/30m/24h denominations as unconfirmed — fixed in [#43](https://github.com/cblack34/wastelandfront/pull/43)
- [x] Cross-site naming & citation fixes (one PR): "Doomed Elites" → "Doom Elites" (resources, getting-started, squad-building, README); resolve "Alliance Trial" per page context (alliance-tools' rally event → Alliance Duel; index's reminder example → General's Trial — verify each); delete the fabricated "tooltician's Black Market guide" citation (stores); delete or fix the Bond Badges / Universal Overlord Shards Alliance Store line (they belong to Gorilla Overlord / General's Trial systems); fix tools.astro "Coming Soon" still listing the shipped resource calculator; verify-or-remove the Aethernis (Server #1210) attribution + ko-fi link on squad-building/tank/community (unverified named person + payment link = liability) — fixed in [#44](https://github.com/cblack34/wastelandfront/pull/44)
- [x] Honesty pass on verification language: events.astro footer ("matches every screenshot-verified community source"), stats.astro footer ("cross-checked against 2+ sources"), tools.astro ("independently validated") all overclaim vs audit findings — soften each until the underlying claims are actually verified; getting-started's "70% of your power" and base-building's "first 30–45 days" are unsourced invented precision — cut or explicitly label as opinion — fixed in [#45](https://github.com/cblack34/wastelandfront/pull/45)

### P1 — rewrites (research first, then page-writer)

- [ ] base-building.astro REWRITE — worst page on the site (~90% generic): invents building names ("Troop Center", "Research Lab", "Gear Workshop"; real: Tank/Air/Missile Center, Tech Center, Gear Factory, Drill Ground), zero numbers, no stamp. Needs real HQ-gated building research first
- [ ] resources.astro REWRITE (~60–70% generic) — keep the Monica/Doom Elite mechanic (fix name, source the bonus %: 25 vs 39% disputed), correct or remove the Arms Race chest-timing advice (sources say phase-matched, not final-hours hoarding), replace unsourced priority rankings with cited numbers or cut
- [ ] src/pages/squad-building/aircraft.astro + missile.astro — either complete as real guides (needs hero-type verification for DVA/Carlie/Schuyler and Tesla/Swift/McGregor first) or strip to honest placeholders that make no unverified type claims
- [ ] alliance-tools.astro — fix the data-copy vs visible-text mismatches in 3 of 4 templates (copy button copies different text than shown); replace generic filler templates with event-specific ones after Alliance Duel research

### P2 — external verification gaps (single-source or site-internal-only claims)

- [ ] Mono-type formation bonus (+5/10/15/20%) and ±20% type-counter cycle: only ever self-cited between our own pages; already flagged "reverse-engineered only" in §1. Get Tier-1/2 citations or in-game screenshots — Whiteout Survival contamination is the named risk
- [ ] Re-run the squad-cluster research passes that didn't complete in the audit (squad-building, aircraft, missile, tank external verification; row-targeting; wishlist ~10 shards/200 recruits; 5★ EW/WoH gate)
- [ ] "Season Hero Swap vouchers" (heroes.astro): highest fabrication suspicion on the site — no footprint anywhere else in the repo; verify it exists or remove
- [ ] "Back row center targeted last" (squad-building, tank): zero corroboration for within-row targeting priority — source or cut
- [ ] Monica/Doom-Elite bonus % + 3–4★ threshold: README markets it as a differentiator while this backlog flags it unverified — escalated priority
- [ ] Single-source store numerics (stores.astro): Dielectric Ceramic VIP 6 vs 9; Campaign Store #1-buy priority (disputed); Black Market daily cap/refresh; "Season Medals" vs "Season Points" naming

## 1. Stats & Combat Mechanics (P0)

- [ ] **P0** Full stat glossary with practical effect of each: Squad ATK / DEF / HP, type-specific bonuses (Tank/Missile Vehicle/Aircraft ATK/DEF/HP), Hero ATK/DEF/HP, Crit, Skill/tactic damage, Damage Reduction, Morale, Troop Load, Power, march size
- [ ] **P0** Lethality & severe wound rate — where these actually appear (T11 Armament Institute specializations: Armored Troopers vs Assault Raiders; some gear/skills). Poorly documented anywhere = content we can own
- [ ] **P0** Stat priority order: is ATK > DEF > HP right ("dead enemies deal no damage")? Differs for frontline tanks vs backline DPS?
- [ ] Damage formula: stacking order of type modifier (±20% Tank > Missile > Aircraft > Tank), morale, formation bonus (5 same-type = +20% ATK/DEF/HP), skill multipliers, gear. Reverse-engineered only — cross-check multiple sources
- [ ] Morale: how it's calculated, all sources, in-battle morale-loss cascade
- [ ] War Fever (+1% per scout): cap? Is daily scout farming worth it?
- [ ] Row mechanics: front row (2 slots) vs back row (3 slots) targeting; which skills bypass rows; per-hero placement
- [ ] Troop tiers T1–T11: stats/power per tier, when displayed Power misleads, T10→T11 transition planning
- [ ] Hospital vs Emergency Center (HQ 22, fainted units / Fainted Unit Ratio) — full troop-loss flow, when troops actually die
- [ ] Rally mechanics: whose buffs apply (leader's), first-slot importance
- [ ] Base defense bonuses (+25% vs Aircraft claim — verify)

## 2. Store Buy Guides (P0)

One page per store: currency, how to earn it, best buys ranked, never-buys, monthly caps.

- [ ] **P0** Alliance Store (Alliance Coins) — consensus: UR shards > construction speedups > research speedups > drone parts; never survivors / resource chests / superalloy / dielectric ceramic. Verify + get current shard rotation (Mason/Violet etc.)
- [ ] **P0** Honor Shop (Honor Points, monthly reset) — consensus: Legendary Gear Blueprints only (cap 50/month), skip everything else. Verify cap + income sources (Desert Storm, Capitol Conquest)
- [ ] **P0** VIP Store (diamonds, VIP-gated, weekly rotation) — what's actually discounted enough to buy
- [ ] **P0** Campaign Store (Campaign Medals) — Epic Resource Choice Chest, Legendary Campaign Chest, Drone Parts, Universal EW Shards; rank them
- [ ] **P0** Season Store (Season Medals) — what to bank for
- [ ] **P0** Black Market (Black Market Cash, ~4-week Season Celebration event) — buy list
- [ ] **P0** Glittering Market (Glittering Coins) — consensus: everything toward Mythic Gear Blueprints; F2P math ~300–360 coins/6-day cycle, 8–10 cycles per blueprint set. Verify
- [ ] Zombie Invasion Trade Store (Courage Medals)
- [ ] VS / Arms Race point shops
- [ ] **Coupon Store** (new ~Feb 2026, almost zero coverage anywhere — opportunity)
- [ ] How store stock changes with server age / season number

## 3. Upgrade Priority Roadmap (P0)

The big one: where does each resource/currency go, in what order, at each HQ band.

- [ ] **P0** Master priority order — community rule: HQ level > main-squad gear > main-squad hero stars > second squad. Build an HQ 15–20 / 20–25 / 25–30 roadmap
- [ ] **P0** Gear (blueprints/BP): slot order per hero role (Gun first?), Legendary → Mythic transition timing, star tiers, blueprint sourcing calendar (Honor Shop, Glittering Market, World Boss, season pass)
- [ ] **P0** Exclusive Weapons (EW): unlock = 50 named shards; level 20 breakpoint (7.5% boost; 20→30 costs ~1,750 more shards). Which heroes' EWs first; named vs Universal shard usage
- [ ] **P0** Wall of Honor: unlock requirements, material sources, ATK-first ordering — verify
- [ ] **P0** Relative ROI: gear vs EW vs Wall of Honor vs drone vs hero stars — per-resource "who competes with whom" map (they mostly use different currencies; document overlaps)
- [ ] Drone: parts-per-level curve, Combat Boost, Chip Lab ("park at 20"? verify), chip priority (Interference-first anti-burst meta — verify recency), 4 chip slots (Initial/Attack/Defense/Interference), Resonance set bonus, Drone Parts Workshop (HQ 30+)
- [ ] Hero investment: levels vs stars vs skill medals ROI; when to stop leveling SSRs; Season Awakening weekly schedule
- [ ] Tech Center research: military vs economy vs Alliance Duel research ROI; Age of Oil track; Third Tech Center
- [ ] Buildings: never-rush list; Drill Ground vs Tech Center vs Barracks priority; troop-tier unlock levels
- [ ] Decorations: which Legendary decors are worth Universal Decor Components; season decorations
- [ ] Skins: verify buff sizes; F2P skip consensus

## 4. Squad Building & Hero Meta (P1)

- [ ] Current UR tier list snapshot (Kimberly, Murphy, Williams, DVA, Marshall, Tesla, Schuyler, Fiona, Mason, Violet, Morrison, Lucius, Carlie, Adam, McGregor, Swift, Stetmann) + how meta shifts per season (S1–S6)
- [ ] Tank-meta-first: when/whether Aircraft becomes squad #2 (~server day 70+ claim — controversial, may be server-dependent)
- [ ] 4+1 Marshall hybrid vs pure mono-type — document the debate
- [ ] Second/third squad timing; how much weaker they can be
- [ ] Tavern Wish Hero optimization (10 shards per 200 recruits)
- [ ] Front/back row placement per meta hero
- [ ] Update existing "two Tank squads mid-game" page against current consensus

## 5. Events (P1)

- [ ] **P1** VS / Alliance Duel: authoritative day-by-day table (Day 1 Radar/Hero, Day 2 Building, Day 3 Tech+drone data, Day 4 Hero advancement, Day 5 Training, Day 6 kills — sources disagree, verify in-game; owning a correct table is a traffic win). Hoarding mechanics: gift-wrapped buildings, unclaimed research, queued troops, Legendary trade trucks, Drone Component Chests; 5-min post-reset dead zone; Infinite Roulette; Alliance Duel research +150%
- [ ] **P1** Arms Race: six 4-hour phases (Hero Advancement, Unit Progression, Tech Research, Drone Boost, City Building), badge thresholds (2/8/18 of 36), Slot Swap feature, syncing with VS days (the core double-dip loop; tool: lastwarnexus.net)
- [ ] Desert Storm: format, 10-min unlocks (Nuclear Silo/Arsenal/Mercenary Factory), role assignments, Honor Point income; Winter Storm variant
- [ ] Zombie Siege (20 waves, reinforce after wave 11) & Zombie Invasion / Doom Elite (300 clues → Army of Doom); Monica farming angle (existing site claim — verify)
- [ ] Capitol Conquest: President + title buffs (First Lady, Secretaries)
- [ ] Seasons S1 Crimson Plague → S6 Lost/Shadow Rainforest: per-season week-by-week checklists (highest-demand content format); Profession system (Engineer vs War Leader); Faction Duel; Season Celebration
- [ ] SvS; World Boss; Doom Walker; Hidden Treasure dig; "Bullet events" (verify name)

## 6. Economy & Spending (P1)

- [ ] Diamond spending priority: VIP push (VIP 10 milestone) > stamina > builders — verify
- [ ] Speedup discipline: only during matching Arms Race phase / VS day
- [ ] Resource income: gathering vs production vs trucks vs Secret Tasks; survivors (Agent Shirley etc.)
- [ ] Low-spend pack value ranking (monthly card / battle pass / which $ packs); update existing money page with specifics
- [ ] Stamina economics (Doom Elites, radar bosses)
- [ ] Shield discipline (24h + 8h before Saturday kill day); anti-zeroing guide
- [ ] Server transfer tickets — when to move; young vs old server strategy

## 7. Other / Site Opportunities (P2)

- [ ] Server timeline: day-by-day feature unlock calendar (high traffic, cpt-hedge has one)
- [ ] Radar & Secret Tasks daily routine; truck refresh strategy
- [ ] Honorable Campaign progression walls
- [ ] Gift/redeem codes page (evergreen SEO, needs maintenance plan)
- [ ] March size optimization (Drill Ground, type Centers, Shirley)
- [ ] Alliance leadership: rally etiquette, tech donations, reinforcement rules
- [ ] Officer/squad positioning FAQ; awakening schedule per season week

## 8. Calculator Tools (P0 — requested)

Build interactive calculators. **Rule: validate every assumption and number independently** (in-game verification or multiple corroborating sources) — don't copy other sites' numbers blind. Document our validation for each.

- [x] **P0** Resource Chest calculator (like lastwarvault.com/resource-chests/): total resources from banked chests by tier/size. Validate chest yield tables ourselves — built in [#22](https://github.com/cblack34/wastelandfront/pull/22)
- [ ] **P0** Survey existing calculators (cpt-hedge.com/calculators, lastwar.streamlit.app, lastwarnexus.net, lastwarvault) — what exists, what's wrong/stale, what's missing
- [x] Speedup calculator: total speedup time in inventory vs a build/research target — built in [#27](https://github.com/cblack34/wastelandfront/pull/27)
- [ ] Gear cost calculator: blueprints/materials from current → target tier
- [ ] EW shard calculator: shards needed to level X→Y (validate the lvl-20 breakpoint math)
- [ ] Drone chip / Combat Data calculator
- [ ] Troop training cost/time calculator (incl. T10→T11 promotion math) — **BLOCKED on in-game capture** (researched July 2026: no Tier-1/2 source publishes per-troop cost or per-tier time data at any tier; building on placeholders would violate editorial standards). Key corrections from research: single troop line T1–T11 (no per-type cost split — that's Whiteout Survival contamination); T11 is promotion-only from T10, so the useful output is promotion cost/time, not promote-vs-train comparison. See capture items in Inbox.
- [ ] Arms Race / VS point planner: given planned spends, projected points/chest thresholds
- [ ] Candidates no one has built well: hospital/healing cost, Wall of Honor material planner, wishlist ROI, march-size stacking

## Inbox (unsorted — add new items here)

- [ ] Site-wide table accessibility pass: add sr-only captions + scope="col" to all guide tables (pattern established in upgrade-roadmap PR)
- [x] QuickSummary component renders h3 directly after h1 (skipped heading level) — make heading level configurable (default h2) and update all pages together (flagged by Copilot review on PR #21) — fixed in [#36](https://github.com/cblack34/wastelandfront/pull/36)
- [ ] index.astro has a hand-rolled `.quick-summary` callout ("Core Philosophy") with its own h1→h3 skip — convert it to the QuickSummary component (or insert an h2) so the homepage heading order is clean (found during #36)
- [ ] Capture in-game chest values at HQ 21–34 to replace interpolated estimates in the resource chest calculator; also verify gold-coin factor (0.636 vs 0.60) and Hero EXP chest scaling
- [ ] In-game capture pass for troop training data (unblocks the troop training calculator): per-troop Food/Iron/Coin cost T1–T11 (screenshot Barracks screen per tier); per-tier training time at a reference Barracks level; whether cost/time scale linearly with queue quantity (time 10 vs 100 at same tier — single-sourced from lastwartutorial.com, highest-priority test); speed-bonus stacking model (additive vs multiplicative — A/B toggle VIP/research/building buffs); Drill Ground capacity per level and HQ 16/21 unlock gates; marginal per-troop T10→T11 promotion cost/time (distinct from the Armament Institute unlock cost)
- [ ] Verify T11 unlock cost (120k Armament Materials + 200 Armament Cores + 1.2M Oil) and HQ 27 / Season-4 off-season gating against the official Zendesk "Lv11 Unit Info" article (403 to automated fetch) or in-game screenshot — currently single-source (cpt-hedge)
- [ ] Confirm or reject "assign survivors to Barracks increases training cap" — appeared in fetch summaries but no Last War source confirms; likely cross-game contamination
- [ ] Manual browser check of cpt-hedge.com /buildings/barracks and /calculators (automated fetch 403'd twice) for troop cost/time tables that may already exist; also check whether lastwar.streamlit.app's login wall is permanent before citing it as dead in competitor copy
- [ ] Confirm VIP training/research speed percentages with a Tier-1/2 source before use (only Tier-3 ldshop.gg cites "VIP 11: +15% research"; VIP 16 training claim is vague)
- [ ] stores.astro line ~94 says "recruitment tickets" imprecisely — use the two real ticket names (Legendary Recruitment Ticket / Survivor Recruitment Ticket) as done on getting-started in #45
- [ ] index.astro events teaser no longer enumerates General's Trial because /events doesn't cover it — revisit when a General's Trial story lands (noted in #44)
