# Personal website

Nikolas Marinkovich's static Astro portfolio, live at https://nikolasmarinkovich.pages.dev.

The application is in [`personal-website/`](personal-website/). See its [README](personal-website/README.md) for requirements and Cloudflare deployment instructions.

```sh
cd personal-website
npm ci
npm run dev
```

Before deploying, run `npm run check` and `npm run build` from that directory.

Only website source, required content, assets, and setup files are versioned. Local research, review drafts, and private resumes are excluded. Cloudflare currently uses Direct Upload; Git pushes do not deploy the site.
