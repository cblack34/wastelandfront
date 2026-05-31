// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://wastelandfront.com', // Update when final domain confirmed (currently cloutclimber.com)
  integrations: [sitemap()],
});
