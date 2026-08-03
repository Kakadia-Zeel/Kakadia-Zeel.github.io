# Zeel Kakadia — Portfolio

Dark · glassmorphism · bento-grid portfolio. Built with **Astro 5 + Tailwind CSS v4**.
Ships ~zero JavaScript, self-hosted fonts, full SEO (OG tags, sitemap, JSON-LD).

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Edit content

Almost everything lives in **`src/data/site.ts`** — name, tagline, links, metrics,
projects, skills, experience. Edit that one file and the whole site updates.

## ✅ Things to fill in (search for `TODO`)

1. **Profile URLs** — set your real GitHub / LinkedIn / LeetCode links in `site.ts`.
2. **Contact form** — get a free key at https://web3forms.com and paste it into
   `site.web3formsKey` in `site.ts`. Until then the form shows a "not configured" note.
3. **Photo** — drop `public/images/photo.jpg`, then swap the monogram placeholder
   in `src/components/Hero.astro` (instructions are in a comment there).
4. **Project screenshots** — add images to `public/images/` and set the `image:`
   field on any project in `site.ts` (e.g. `image: '/images/migration.png'`).
5. **Deployed URL** — update `site:` in `astro.config.mjs` and the URL in
   `public/robots.txt` once you know your final domain.
6. **OG image** — `public/og.png` is auto-generated from `og.svg`; regenerate after
   edits with: `qlmanage -t -s 1200 -o public public/og.svg && ...` (or design your own).

## Deploy free (Vercel — recommended)

```bash
git init && git add -A && git commit -m "Initial portfolio"
# create a repo on github.com, then:
git remote add origin https://github.com/<you>/portfolio.git
git push -u origin main
```

1. Go to https://vercel.com → **Add New → Project** → import the GitHub repo.
2. Vercel auto-detects Astro. Click **Deploy**. Live in ~1 min at `*.vercel.app`.
3. (Optional) Add a custom domain in Vercel → Settings → Domains.

> Also works free on **Netlify** and **Cloudflare Pages** — same repo, same build
> command (`npm run build`, output dir `dist`).
