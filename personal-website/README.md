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
| Homepage experience, production feature, project cards, and skills | `src/content/home.ts` |
| Homepage introduction, About, and contact | `src/pages/index.astro` |
| Chess case-study narrative | `src/pages/work/distilling-chess-intelligence.astro` |
| Chess pipeline, explorer, and results | Their components in `src/components/` |
| Medical case study and its homepage summary | `content/case-studies/intracranial-hemorrhage-detection.md` |

The older chess and production Markdown drafts are archived local references, excluded from Git and deployment. They are not alternate editing sources. Historical approval notes do not override the current published copy.

## Cloudflare Pages

- Project: `nikolasmarinkovich`
- Address: https://nikolasmarinkovich.pages.dev
- Hosting: free Pages plan, Direct Upload

Nikolas handles deployment manually. Agents may prepare, check, commit, push, and package approved changes; leave Cloudflare uploads and publication to Nikolas unless he explicitly requests otherwise.

To update the site, run the checks and build above, then open this project in Cloudflare's **Workers & Pages** dashboard and create a production deployment by uploading the contents of `dist/` (or a ZIP with `index.html` at its root).

Upload only the built output. Source drafts, research documents, and private resumes must not be included. The public site intentionally has no downloadable resume.

This project does not automatically deploy Git commits. Direct Upload projects can also deploy through Wrangler; Cloudflare requires a new Pages project to switch to its Git integration.
