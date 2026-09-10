# Temporary local tunnel (Netlify credits exhausted)

- Static site: `com.dmpresearch.local-site` → http://127.0.0.1:18191 (`serve dist`)
- Host router: `com.dmpresearch.host-router` → [::]:5733 → proxies `dmpresearch.flowstarter.dev` to :18191
- Public URL: https://dmpresearch.flowstarter.dev (via existing `flowstarter-dev` Cloudflare tunnel wildcard)

Rebuild after edits:
```bash
cd /Users/darius91/.t3/worktrees/dmpresearch-site && npm run build
# serve watches dist; no restart needed unless serve process died
```

When Netlify credits return, redeploy with `netlify deploy --prod --dir=dist` and unload:
```bash
launchctl bootout gui/$(id -u)/com.dmpresearch.local-site
launchctl bootout gui/$(id -u)/com.dmpresearch.host-router
```
