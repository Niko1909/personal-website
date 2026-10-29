# Personal website

Nikolas Marinkovich's static Astro portfolio, live at https://nikolasmarinkovich.pages.dev.

The application is in [`personal-website/`](personal-website/). See its [README](personal-website/README.md) for requirements and Cloudflare deployment instructions.

```sh
cd personal-website
npm ci
npm run dev
```

Before deploying, run `npm run check` and `npm run build` from that directory.

## Netlify

The repository includes `netlify.toml` because the Astro app lives in `personal-website/` rather than at the repository root. If you configure the site in the Netlify dashboard instead, use:

- Base directory: `personal-website`
- Build command: `npm run build`
- Publish directory: `dist` (relative to the base directory)

Do not set the publish directory to the repository root. The generated static site is written to `personal-website/dist/`.

Only website source, required content, assets, and setup files are versioned. Local research, review drafts, and private resumes are excluded. Pushes to `main` deploy the site through GitHub Actions after checks pass; working branches do not deploy. See the application's README for deployment credentials and troubleshooting.
