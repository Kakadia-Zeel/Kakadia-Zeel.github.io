import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// `site` is the deployed URL (used for canonical, sitemap, OG tags).
// Root user-pages site, so no `base` path is needed.
export default defineConfig({
  site: 'https://kakadia-zeel.github.io',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
