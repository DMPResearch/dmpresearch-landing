# DMPResearch

Studio site for [DMPResearch](https://github.com/DMPResearch), live at [dmpresearch.flowstarter.dev](https://dmpresearch.flowstarter.dev).

Astro static site, no client framework. The visual system is a warm paper canvas (`#f4f1ea`, lifted from the bars in the brand mark) with ink type (`#0e1216`) and one gradient signature taken from the mark itself: Flowstarter blue on the left, Ereno olive on the right. Newsreader for headlines, IBM Plex Sans for body, IBM Plex Mono for ledger labels.

Structure, in page order:

- `Hero` — value proposition plus a table of contents for the page.
- `ProductShowcase` — one section per product, fed from `src/content/site-labels.md`. Real screenshots live in `public/images/`.
- `Method` — the agents-propose, we-decide loop and what stays human.
- `Team` — Darius and Dorin, plus the agents as the rest of the crew.
- `Contact` — the client CTA. Mailto links stay plain links.

Rules for the front end: nothing may require hover to become readable, mailto links never open in a new tab, and every section works without JavaScript. The only script is the mobile menu toggle. Scroll motion uses `animation-timeline: view()` behind a feature and reduced-motion check, so unsupported browsers simply see static content.

All copy lives in `src/content/site-labels.md`.

## Develop

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

Deploys to Netlify from `main`.
