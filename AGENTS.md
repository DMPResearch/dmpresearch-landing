## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Review

- All changes go through a pull request from a branch. Never push to `main`.
- Before opening a PR, the final diff gets an independent review from a different model family than the one that wrote it (for Claude-written changes, Codex CLI in read-only mode). Resolve the findings and record the review and each resolution in the PR description.
- Greptile runs only through its CLI: `greptile review --agent` in the branch's worktree. Record the reviewed commit, the verdict and how each finding was resolved in the PR. Never comment `@greptileai` on a PR.
- The GitHub-side review is the OpenCode reviewer that gretlybot posts. It is not enabled for this repo yet: gretlybot is installed on selected repos only, and its OpenCode workflow lives in `DMPResearch/ereno` under `.depot/workflows`. Enabling it here is a separate follow-up.
