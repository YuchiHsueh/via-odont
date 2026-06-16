// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/** Cloudflare Workers (default): site at domain root. GitHub Pages sets ASTRO_SITE + ASTRO_BASE in CI. */
const site = process.env.ASTRO_SITE || 'https://via-odont.bhsueh94.workers.dev';
const base = process.env.ASTRO_BASE;

export default defineConfig({
	site,
	...(base ? { base } : {}),
	integrations: [sitemap()],
});
