# Nikolas Marinkovich's portfolio

Static Astro website. Requires Node.js 22.12 or newer and npm.

```sh
npm ci
npm run dev
npm run check
npm run build
npm test
```

The build creates `dist/` and checks canonical and social-image metadata on every generated page. Production URLs use `site` in `astro.config.mjs`.

## Editing content

Edit the published copy in these files:

| Section | Authoritative source |
| --- | --- |
| Homepage experience, education, production feature, project cards, and skills | `src/content/home.ts` |
| Homepage introduction and contact | `src/pages/index.astro` |
| Chess case-study narrative | `src/pages/work/distilling-chess-intelligence.astro` |
| Chess pipeline, explorer, and results | Their components in `src/components/` |
| Medical case study and its homepage summary | `content/case-studies/intracranial-hemorrhage-detection.md` |

The older chess and production Markdown drafts are archived local references, excluded from Git and deployment. They are not alternate editing sources. Historical approval notes do not override the current published copy.

## Cloudflare Pages

- Project: `nikolasmarinkovich`
- Address: https://nikolasmarinkovich.pages.dev
- Hosting: free Pages plan, deployed by GitHub Actions

Pushes to `main` run the workflow in `.github/workflows/deploy.yml`: install dependencies, check Astro, build, test, then upload `dist/` to the existing Cloudflare Pages project. A failed check prevents deployment. Other branches do not deploy.

Keep unapproved changes on a working branch. Nikolas controls publication by approving what is merged or pushed to `main`; agents should not push there without authorization to publish.

The repository needs the Actions secret `CLOUDFLARE_API_TOKEN`, with **Account → Cloudflare Pages → Edit** access limited to the hosting account. Add or rotate it through GitHub's **Settings → Secrets and variables → Actions**; never put it in source files. The Cloudflare account ID and project name are configured in the workflow.

Follow deployment results in the repository's **Actions** tab. To retry a failed deployment after fixing credentials or a transient error, use **Re-run failed jobs**. Manual Cloudflare uploads remain available as a fallback.

Upload only the built output. Source drafts, research documents, and private resumes must not be included. The public site intentionally has no downloadable resume.

Cloudflare's native Git integration is not used: the existing Direct Upload project is deployed through Wrangler in GitHub Actions, preserving its `pages.dev` address.
