# Wasteland Front

**Practical, no-fluff guides for Last War: Survival** — built specifically for new and mid-game players (HQ ~15-30).

**Current domain:** cloutclimber.com (target: wastelandfront.com)

## What Makes This Site Different

- **Main Squad First** philosophy applied everywhere
- Strong emphasis on **UR heroes** for long-term progression while being honest about mid-game SSR use
- Clear explanation of the **Tank squad exception** (many mid-game players successfully run two Tank squads)
- **Monica** heavily featured for Doomed Elite resource farming
- Dozens of **ready-to-copy alliance messages** for VS, Alliance Trial, Arms Race, etc.
- Extremely scannable pages with Quick Summary boxes, tables, and short paragraphs

## Tech Stack

- Astro 7 + TypeScript
- Tailwind CSS v4
- Fully static output (`astro build`)
- Docker + Nginx production image included

## Quick Start (Development)

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

Output is in `dist/`.

## Docker (Recommended for Self-Hosting)

```bash
# Build
docker build -t wastelandfront:latest .

# Run
docker run -p 8080:8080 wastelandfront:latest

# Or with Docker Compose
docker compose up --build
```

See the [Docker section in the README](https://github.com/cblack34/wastelandfront#docker) for full details (multi-stage, non-root, healthchecks, caching headers).

## Deployment Options

This site works great on:
- **Docker** (VPS, Kubernetes, ECS, etc.) — see above
- Vercel / Netlify (easiest for static)
- S3 + CloudFront
- Any Nginx / Apache static hosting

## Project Structure & Philosophy

See [Docs/IMPLEMENTATION_PLAN.md](Docs/IMPLEMENTATION_PLAN.md) for the full build plan, content strategy, and Git workflow.

## Contributing

We prioritize accuracy and speed of information over volume.

If you have better mid-game advice, corrections, or new copy-paste messages that work well in your alliance, open an issue or PR.

## License

Community resource. Not affiliated with the game.
