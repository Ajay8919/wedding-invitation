# Siva Prakash & Satya Bhavani — Wedding Invitation

A React + TypeScript + Vite recreation of the weddinginvitation.bar single-page
wedding invitation experience, personalised with real wedding details.

## Structure

- `src/data/weddingData.ts` — **single source of truth** for every name, date,
  venue, phone number and piece of copy (English + Telugu). Edit this file to
  update the whole site.
- `src/sections/` — one component per page section (Gate, Invitation card,
  Hero, Welcome, About the Couple, Families, Events, Gallery, Venue, Closing).
- `src/components/` — shared UI (nav bar, language toggle, music toggle,
  countdown, lightbox, section divider).
- `src/assets/gallery/` — the 7 wedding photos used in the Gallery section.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs to `dist/`.

## Deploying to GitHub Pages

A ready-made workflow at `.github/workflows/deploy.yml` builds and deploys on
every push to `main`. To enable it:

1. Push this repo to GitHub.
2. In the repo settings → **Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` — the site will build and publish automatically.

The Vite `base` is set to `./` (relative paths) in `vite.config.ts`, so it
works at `https://<username>.github.io/<repo>/` without any extra
configuration.

## Optional: background music

Drop an mp3 at `public/music/wedding-music.mp3` to enable the floating music
button (bottom-right). Without a file, the button still renders (matching the
reference site) but silently does nothing when clicked.
