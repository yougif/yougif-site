import { defineConfig } from "astro/config";

const isCloudflare = process.env.DEPLOY_TARGET === "cloudflare" || process.env.CF_PAGES === "1";

export default defineConfig({
  site: isCloudflare ? "https://yougif-site.pages.dev" : "https://yougif.github.io",
  base: isCloudflare ? "/" : "/yougif-site",
  output: "static"
});
