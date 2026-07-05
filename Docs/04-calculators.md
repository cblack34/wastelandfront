# 04 · Calculators

Interactive tools under `src/pages/tools/`, linked from `/tools`. They compete with established community calculators (cpt-hedge.com/calculators, lastwarvault.com/calculators, lastwarnexus.net) — the bar is: **our numbers are validated and our tools fill gaps theirs don't.**

## Data rules (non-negotiable)

- **Never copy another site's data table blind.** Validate independently: 2+ sources per value, programmatic internal-consistency checks (ratios, anchors reproducing published tables), and in-game verification queued in `RESEARCH.md` for anything that can't be confirmed.
- **Document provenance on-page.** Every calculator has a "Where these numbers come from" section: which values are verified, which are interpolated/estimated (with error bars), which constants were chosen over conflicting alternatives and why.
- **Exclude rather than guess.** If a data series can't be validated (wrong ratios, single source), leave it out and say so on-page.
- **Prefer pure arithmetic over scraped tables.** A tool that asks the user to read a value from their own game screen (timers, counts) never goes stale; a scraped duration/cost table does. Choose the former shape when possible.
- Game-mechanics gotcha that shaped the resource-chest tool: Last War resource chests have **no fixed denominations** — payout = f(HQ level at open time, rarity). Fixed-denomination models belong to other games.

## UI/code patterns (established; follow them)

- Vanilla JS in the page's `<script>` tag; no framework.
- **Every input read goes through a clamp helper that writes the normalized value back** to the input — the UI must never display a value different from what the math uses.
- `localStorage` persistence of user inputs, **debounced (~300ms)**, wrapped in try/catch (private mode), keys namespaced `wf-*`; corrupt state ignored on load.
- Event listeners scoped to the tool's own controls (delegation on the tool's container), never `document.querySelectorAll('input')`.
- Result regions that update as the user types: `role="status" aria-live="polite"`.
- Number formatting helper (K/M/B) shared style across tools; verify formatting/math with a standalone node smoke test before committing.

## Gap list (validated demand, roughly ranked)

1. Troop training / promotion calculator (cost, time, power, VS points per batch)
2. Chest-opening "value of waiting" advisor (shipped as part of the resource chest tool — extend it)
3. Power growth calculator
4. VS points-per-inventory planner
5. Free pack-value optimizer (paywalled elsewhere)
6. Hospital/healing cost, Wall of Honor material planner, wishlist ROI
