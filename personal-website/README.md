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

## Cloudflare Pages

- Project: `nikolasmarinkovich`
- Address: https://nikolasmarinkovich.pages.dev
- Hosting: free Pages plan, Direct Upload

To update the site, run the checks and build above, then open this project in Cloudflare's **Workers & Pages** dashboard and create a production deployment by uploading the contents of `dist/` (or a ZIP with `index.html` at its root).

Upload only the built output. Source drafts, research documents, and private resumes must not be included. The public site intentionally has no downloadable resume.

This project does not automatically deploy Git commits. Direct Upload projects can also deploy through Wrangler; Cloudflare requires a new Pages project to switch to its Git integration.
