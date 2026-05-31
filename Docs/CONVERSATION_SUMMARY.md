# Wasteland Front - Conversation Summary & Key Decisions

**Date:** May 31, 2026  
**Purpose:** This document captures important details, preferences, and decisions from our planning conversation that are not fully covered in the main build specification.

---

## 1. Overall Vision & Philosophy

- The site should feel **practical and no-nonsense**.
- Goal is to help players (especially new and mid-game) get the information they need **as fast as possible**.
- Avoid long walls of text, heavy theming, or "fluff".
- Use short pages, clear headings, tables, bullet points, and Quick Summary boxes.

---

## 2. Key Content Focus Areas

### Squad Building (Most Important Section)
- Primary focus should be on **UR heroes** for long-term progression.
- Early game often requires SSR heroes, but players should transition away from them relatively quickly.
- **Major exception:** Tank squads. Many mid-game players will run **two Tank squads**.
- Core philosophy: **"Main Squad First"** — A strong #1 squad makes the 2nd and 3rd squads much less important because the first squad can carry most content.
- Resources should be heavily prioritized toward upgrading the main squad.

### Specialist Heroes
- **Monica** is important and should be highlighted.
- She provides bonuses to **Metal, Food, and Gold** during **Doomed Elite rallies**.
- This bonus applies whether the player is leading the rally or just participating as a member.
- Other specialist heroes for specific content should be noted when relevant.

### Stats Section
- Keep explanations simple and practical.
- Focus on what actually matters for mid-game players (Attack, Defense, HP, March Size, Troop Load, etc.).
- Include basic stat priority guidance by game phase.

### Events Section
- **VS (Victory Showdown)** is very important — include daily focus guides and schedule.
- **Arms Race** should have a dedicated guide with best strategies for maximizing chests.
- Include guidance on **Alliance Trial** and other recurring alliance events.
- General advice on how to efficiently farm event chests.

### Alliance Tools (High Value Feature)
- Create easy **copy-and-paste** daily messages for alliance leaders.
- Include ready-to-use messages for:
  - Daily VS focus
  - Alliance Trial / 2x weekly events
- These should be clean and ready to post directly in alliance chat.

---

## 3. Tone & Writing Style Preferences

- Professional but **informal** — friendly and direct, not corporate or overly polished.
- Use contractions (you're, don't, it's).
- Speak to the player like a helpful experienced friend.
- Prioritize clarity and speed over beautiful prose.

---

## 4. Technical Decisions

**Final Tech Stack:**
- Next.js 15+ (App Router)
- TypeScript
- Tailwind CSS
- Static export (`output: 'export'`) so the site remains fully static and can be hosted on S3, Nginx, etc.

**Why Next.js + TS instead of Astro:**
- User preference for React + TypeScript development experience.

---

## 5. Future Considerations (Not in Phase 1)

- Tier lists (seasonal)
- Full interactive event calendar
- Multiple calculators (Hero EXP, Gear, Resources, etc.)
- Possible interactive squad builder tool
- Player comments or contribution system

---

## 6. Miscellaneous Notes

- The site is currently hosted on `cloutclimber.com` but the project/brand name is **Wasteland Front**.
- Long-term goal is to move to `wastelandfront.com` when available/ready.
- Keep the design clean and professional with a slightly dark/wasteland feel, but prioritize usability over heavy theming.

---

**This document should be kept in the repo alongside the main build spec for reference during development.**
