# Wasteland Front - Website Build Specification

**Project Name:** Wasteland Front  
**Domain (Current):** cloutclimber.com  
**Target Domain (Future):** wastelandfront.com  
**Game:** Last War: Survival Game  
**Version:** 1.1  
**Date:** May 31, 2026  
**Author:** Clayton (with Grok)

---

## 1. Project Overview

**Goal:**  
Create a clean, fast, and highly practical guide website for *Last War: Survival Game* aimed at **new and mid-game players**.

The site should help players quickly understand:
- How to build strong squads (especially UR-focused)
- What stats actually do
- Best resource farming methods
- Store priorities
- Event strategies (especially VS and Arms Race)
- Alliance leadership tools

**Core Philosophy:**  
**Fast information.** No fluff. Players should be able to find what they need in under 30 seconds.

---

## 2. Target Audience & Tone

**Audience:**  
- New players (first 30–60 days)  
- Mid-game players (HQ 20–30 range)

**Tone:**  
- Professional but **informal**  
- Direct and scannable  
- Use short paragraphs, bullet points, tables, and “Quick Summary” boxes  
- Avoid long walls of text and overly thematic language

**Key Rule:**  
Every page should answer the user’s question as quickly as possible.

---

## 3. Site Goals

- Become the go-to practical guide for new/mid-game players
- Strong focus on **Squad Building** and **Events**
- Provide ready-to-use **Alliance Tools** (copy-paste messages)
- Easy to maintain and expand later (Tier Lists, Calculators, etc.)

---

## 4. Final Site Structure

### Main Navigation
- Home
- Getting Started
- Heroes
- Squad Building
- Stats
- Resources
- Stores
- Events
- Alliance Tools
- Base Building
- Tools
- Community

### Full Page List (Phase 1)

**Home**
- Clean landing page with quick links to most-used sections

**Getting Started**
- New Player Guide
- First 30 Days Priorities
- Common Mid-Game Mistakes

**Heroes**
- Hero Types Explained
- Rarity Explained (SR, SSR, UR)
- How to Get Heroes
- When to Stop Using SSR Heroes

**Squad Building** (Core Section)
- Squad Building Basics
- Main Squad First Philosophy
- UR Hero Focus
- Tank Squad Strategy (Building 2 Tank Squads)
- Quick UR Tank Squad Builds (Mid-Game)
- Quick UR Aircraft Squad Builds
- Quick UR Missile Squad Builds
- When to Switch Type Focus
- Specialist Heroes (Monica & Rally Heroes)
- Synergy & Counter Tips

**Stats**
- What Each Stat Actually Does
- Stat Priority for Mid-Game

**Resources**
- Resource Overview
- Best Farming Methods (Ranked)
- Resource Tier List

**Stores**
- In-Game Store Priorities
- Real Money Value Guide

**Events**
- VS Schedule & Daily Focus
- Arms Race Guide (Best Chest Strategy)
- Alliance Trial Guide
- General Event Chest Farming

**Alliance Tools**
- Daily VS Messages (Copy & Paste)
- Alliance Trial Messages
- Other Recurring Alliance Posts

**Base Building**
- Building & Research Priorities (New → Mid Game)

**Tools** (Future placeholder)
- Resource Calculator
- Hero Upgrade Calculator

**Community**
- Links and contribution info

---

## 5. Content & Writing Guidelines

- Keep pages relatively short and focused
- Start every page with a **Quick Summary** box when appropriate
- Use tables for comparisons and priorities
- Use bold for key takeaways
- Always explain **why** something is recommended
- For Squad Building: Emphasize **UR heroes** as the long-term focus, with notes about early SSR use and the Tank squad exception (many mid-game players run 2 Tank squads)
- Highlight **Monica** specifically for Doomed Elite rallies (Metal/Food/Gold bonus when leading or participating)

---

## 6. Technical Requirements

**Tech Stack:**
- **Astro** (latest stable)
- **TypeScript**
- **Tailwind CSS**
- **React** (via Astro Islands) — only where needed for interactivity
- Fully static output

**Hosting:**
- Can be deployed to S3 + CloudFront, Netlify, Vercel, or any static hosting (Nginx/Apache)

**Design:**
- Mobile-first
- Clean, modern, slightly dark professional aesthetic
- Fast loading times
- Good navigation and scannability

---

## 7. Future Roadmap (Phase 2+)

- Hero Tier Lists (by season)
- Full Event Calendar
- Calculators (Hero EXP, Resource, Gear, etc.)
- Interactive Squad Builder
- Player-submitted content / comments

---

## 8. Notes for Grok Build / Agent

- Do focused research on each page using official sources, Reddit, and existing guides.
- Prioritize accuracy for mid-game players.
- Make **Squad Building** and **Events** sections the strongest.
- For Alliance Tools, create clean, ready-to-copy message templates.
- Keep language practical, direct, and informal.
- Follow the "Main Squad First" philosophy and highlight specialist heroes like Monica.

---

## 9. Project Status

- [x] Structure Finalized
- [ ] Content Research
- [ ] Page Creation
- [ ] Design & Styling
- [ ] Testing & Polish

---

**End of Specification**