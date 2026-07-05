# 02 · Tech Stack & Operations

## Stack

| Concern | Choice | Notes |
| --- | --- | --- |
| Framework | **Astro 7** + TypeScript | Fully static output (`astro build`), sitemap integration |
| Styling | **Tailwind CSS v4** | Via `@tailwindcss/vite` plugin in `astro.config.mjs`; utility classes only, no component library |
| Interactivity | **Vanilla JS** in `<script>` tags | Calculators are plain DOM + `localStorage`; no framework islands |
| Hosting | **Docker + nginx** | Self-hosted static image; see Deployment |

No backend, no database, no build-time data fetching.

## Project layout

```text
src/
  layouts/Layout.astro        # shell: nav, footer, SEO/OG tags
  components/QuickSummary.astro
  pages/                      # one .astro file per guide page
    tools.astro               # calculator index
    tools/*.astro             # one file per calculator
  styles/global.css
public/                       # static assets
RESEARCH.md                   # the backlog (see workflow doc)
Docs/                         # these docs
```

## Commands

```bash
npm install                        # if puppeteer download fails: PUPPETEER_SKIP_DOWNLOAD=1 npm install
PUPPETEER_SKIP_DOWNLOAD=1 npm run build   # required build check before every commit that touches pages
npm run dev                        # local dev server
```

Puppeteer is a direct devDependency (used by the Lighthouse CI setup); its Chrome download fails in sandboxed/CI environments — always set `PUPPETEER_SKIP_DOWNLOAD=1`. It does not affect the site build.

## Environment quirks

- Sandboxed git can leave stale `.git/*.lock` files after commits; remove them before git operations if commands fail with "index.lock exists".
- Verify built output when touching `<title>`/meta: `grep -o "<title>[^<]*" dist/<page>/index.html`.

## Deployment (Docker self-host)

```bash
docker build -t wastelandfront:latest .
docker run -p 8080:8080 wastelandfront:latest
# or: docker compose up --build
```

nginx serves `dist/` inside the image (see `nginx.conf`, `Dockerfile`, `docker-compose.yml`). Current domain cloutclimber.com; target wastelandfront.com.
