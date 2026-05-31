# Wasteland Front

Practical, no-fluff guides for **Last War: Survival** — built for new and mid-game players.

**Current domain:** cloutclimber.com (target: wastelandfront.com)

## Tech Stack

- Astro 6 (latest stable)
- TypeScript (strict)
- Tailwind CSS v4 (via Vite plugin)
- Fully static output (`astro build`)
- Minimal client JS (vanilla where possible)

## Philosophy

- Main Squad First
- Strong UR focus with honest advice about mid-game SSR use
- Tank squad exception (many mid-game players run two)
- Monica heavily featured for Doomed Elite resource farming
- Ready-to-copy Alliance messages for VS and Alliance Trial
- Scannable pages with Quick Summary boxes, tables, and short paragraphs

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The `dist/` folder is ready for any static host (Vercel, Netlify, S3 + CloudFront, Nginx, etc.).

## Project Plan & Workflow

See [Docs/IMPLEMENTATION_PLAN.md](Docs/IMPLEMENTATION_PLAN.md) for the full Phase 1 plan, page outlines, design system, and strict Git workflow (feature branches → PRs → Copilot review → squash merge).

## Contributing

Corrections, better strategies, and new sections are welcome. The goal is the best practical resource for players who want clear answers fast.

Not affiliated with the game. Community-driven.

## License

Guides and content are provided freely for the Last War community.
