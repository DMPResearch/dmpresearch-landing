# CI / CD

One workflow: `.github/workflows/ci-cd.yml`

| Job | When | What |
|---|---|---|
| **Build** | every push / PR | `npm ci` + `npm run build`, uploads `dist` |
| **Deploy to Netlify** | when `NETLIFY_SITE_ID` is set | production on `main`, draft preview on PRs |

## Configure Netlify access

```sh
# Site id (safe to store as a variable)
gh variable set NETLIFY_SITE_ID \
  --repo DMPResearch/dmpresearch-landing \
  --body f7e7d93e-2f98-48f1-b756-d9fe0721cb54

# Auth token (secret) — create at
# https://app.netlify.com/user/applications#personal-access-tokens
gh secret set NETLIFY_AUTH_TOKEN --repo DMPResearch/dmpresearch-landing
```

Until both are set, **Build** still runs and gates the PR; Deploy is skipped.
Netlify account credit must be available for deploys to succeed.
