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

## Shared agent skills

Agents on this repo use the shared skills from
[DMPResearch/agent-skills](https://github.com/DMPResearch/agent-skills):
`decide-or-ask` before asking the owner anything, `cross-review` before calling
work done, committing or pushing, `verify-live` after any UI, flow, link or
native change, `babysit-pr` once a PR is open, and `merge-safe-prs` for merges.
Install them with that repo's `install.sh`. Where they are not installed (CI,
the automatic reviewer), this file alone applies; a check a skill would have run
and you could not is unrun, and an unrun check is not a pass: say so. This file wins wherever a skill
says otherwise.
