import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://nikolasmarinkovich.pages.dev",
  output: "static",
  build: {
    format: "directory",
  },
});
