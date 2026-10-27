import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import config from "../astro.config.mjs";

const site = new URL(config.site);
assert.equal(site.protocol, "https:", "Production metadata must use HTTPS");
assert(!["localhost", "127.0.0.1", "[::1]"].includes(site.hostname), "Production site cannot be localhost");

const dist = fileURLToPath(new URL("../dist/", import.meta.url));
const pages = readdirSync(dist, { recursive: true }).filter((file) => file.endsWith(".html"));
assert(pages.length > 0, "No built HTML pages found");

for (const page of pages) {
  const html = readFileSync(join(dist, page), "utf8");
  const route = page.replaceAll("\\", "/").replace(/index\.html$/, "");
  const canonical = new URL(route, site).href;
  const image = new URL("/og-v2.png", site).href;
  const expected = [
    [/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/, canonical],
    [/<meta\b[^>]*property="og:url"[^>]*content="([^"]+)"/, canonical],
    [/<meta\b[^>]*property="og:image"[^>]*content="([^"]+)"/, image],
    [/<meta\b[^>]*name="twitter:image"[^>]*content="([^"]+)"/, image],
  ];
  for (const [pattern, value] of expected) {
    assert.equal(html.match(pattern)?.[1], value, `${page}: incorrect or missing ${pattern}`);
  }
}

console.log(`Production metadata verified on ${pages.length} pages.`);
