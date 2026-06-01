import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = join(process.cwd(), "dist-github-pages");
const canonical = "https://yougif.pages.dev";
const legacyBase = "/yougif-site";

mkdirSync(outputDir, { recursive: true });

const html = String.raw`<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex,follow" />
    <link rel="canonical" href="${canonical}/" />
    <meta http-equiv="refresh" content="0; url=${canonical}/" />
    <title>Yougif has moved</title>
    <style>
      :root {
        color-scheme: dark;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background: #080a0f;
        color: #f7f8fb;
      }
      body {
        min-height: 100svh;
        display: grid;
        place-items: center;
        margin: 0;
        padding: 2rem;
      }
      main {
        max-width: 34rem;
        display: grid;
        gap: 1rem;
      }
      a {
        color: #58d7f7;
        font-weight: 800;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Yougif site has moved</h1>
      <p>The canonical Yougif site is now served from Cloudflare Pages.</p>
      <p><a id="canonical-link" href="${canonical}/">${canonical}/</a></p>
    </main>
    <script>
      const canonical = new URL("${canonical}/");
      const legacyBase = "${legacyBase}";
      let path = window.location.pathname;
      if (path === legacyBase || path === legacyBase + "/") {
        path = "/";
      } else if (path.startsWith(legacyBase + "/")) {
        path = path.slice(legacyBase.length);
      }
      canonical.pathname = path;
      canonical.search = window.location.search;
      canonical.hash = window.location.hash;
      document.getElementById("canonical-link").href = canonical.toString();
      document.getElementById("canonical-link").textContent = canonical.toString();
      window.location.replace(canonical.toString());
    </script>
  </body>
</html>
`;

writeFileSync(join(outputDir, "index.html"), html);
writeFileSync(join(outputDir, "404.html"), html);
writeFileSync(
  join(outputDir, "robots.txt"),
  [
    "User-agent: *",
    "Disallow: /",
    `Sitemap: ${canonical}/sitemap.xml`,
    ""
  ].join("\n")
);
writeFileSync(join(outputDir, ".nojekyll"), "");

console.log(`GitHub Pages redirect shim written to ${outputDir}`);
