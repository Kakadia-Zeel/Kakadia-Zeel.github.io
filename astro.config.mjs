import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Update `site` to your real deployed URL (used for canonical, sitemap, OG tags).
export default defineConfig({
  site: 'https://zeelkakadia.vercel.app',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
