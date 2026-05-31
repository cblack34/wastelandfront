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

## Docker

This site can be containerized and served with Nginx.

### Build the Docker image

```bash
docker build -t wastelandfront:latest .
```

### Run with Docker

```bash
docker run -p 8080:8080 wastelandfront:latest
```

Then visit **http://localhost:8080**

### Run with Docker Compose (recommended for local testing)

```bash
docker compose up --build
```

### Production deployment notes

The Docker image:
- Uses a **multi-stage build** (final image is ~25MB)
- Runs **Nginx as non-root user** for security
- Includes aggressive caching headers for static assets
- Has a `/health` endpoint for load balancers / orchestrators
- Gzip compression enabled

The image is suitable for:
- Kubernetes
- ECS / Fargate
- Any VPS with Docker
- Docker Swarm

Example for Kubernetes or ECS: simply point your load balancer / ingress at port 80 of the container.

## Project Plan & Workflow

See [Docs/IMPLEMENTATION_PLAN.md](Docs/IMPLEMENTATION_PLAN.md) for the full Phase 1 plan, page outlines, design system, and strict Git workflow (feature branches → PRs → Copilot review → squash merge).

## Contributing

Corrections, better strategies, and new sections are welcome. The goal is the best practical resource for players who want clear answers fast.

Not affiliated with the game. Community-driven.

## License

Guides and content are provided freely for the Last War community.
