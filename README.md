# DMPResearch

Studio site for [DMPResearch](https://github.com/DMPResearch), live at [dmpresearch.flowstarter.dev](https://dmpresearch.flowstarter.dev).

Astro static site. Page chrome descends from the Dorin portfolio Flowstarter template (Clash Grotesk titles, one-shot intro overlay), restyled to the DMPResearch palette: forest ink `#0b100d`, canopy green `#1e9862`, mineral blue `#3a5bff`, gold `#c49a3c`, sage canvas `#e8ede6`. Each product gets a full section with its real screenshot from `public/images/`. Copy lives in `src/content/site-labels.md`.

Rule of thumb for the front end: nothing may require hover to become readable. Idle blur or opacity reveals on body copy are out; a one-shot intro animation is fine.

We build useful products that blend AI with human work:

- [Flowstarter](https://flowstarter.net)
- [Ereno](https://ereno.flowstarter.dev)

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
