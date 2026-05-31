import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";

const binary = process.platform === "win32"
  ? join("node_modules", ".bin", "astro.cmd")
  : join("node_modules", ".bin", "astro");
const command = existsSync(binary) ? binary : "astro";
const result = spawnSync(command, ["build"], {
  env: {
    ...process.env,
    DEPLOY_TARGET: "cloudflare"
  },
  stdio: "inherit",
  shell: process.platform === "win32"
});

process.exit(result.status ?? 1);
