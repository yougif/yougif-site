import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const skipDirs = new Set(["node_modules", "dist", ".astro", ".git", ".wrangler", "private"]);
const files = [];
const errors = [];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (skipDirs.has(entry)) continue;
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      walk(full);
    } else {
      files.push(full);
    }
  }
}

walk(root);

const skippedTextFiles = new Set(["package-lock.json"]);
const textFiles = files.filter((file) => /\.(astro|css|js|json|md|mjs|svg|ts)$/i.test(file) && !skippedTextFiles.has(file.split(/[\\/]/).at(-1)));
const text = new Map(textFiles.map((file) => [file, readFileSync(file, "utf8")]));
const badTerms = [
  ["y", "t", "k", "i", "m"].join(""),
  ["y", "t", "k", "i", "m", "4", "5", "5", "8"].join(""),
  ["A", "W", "S"].join(""),
  ["A", "m", "a", "z", "o", "n"].join(""),
  ["실", "명"].join(""),
  ["전", "문", " ", "포", "트", "폴", "리", "오"].join("")
];

for (const [file, content] of text) {
  const malformedAssetPath = ["/yougif-site", "assets/"].join("");
  if (content.includes(malformedAssetPath)) {
    errors.push(`Malformed base asset path in ${file}`);
  }

  for (const term of badTerms) {
    if (content.toLowerCase().includes(term.toLowerCase())) {
      errors.push(`Forbidden term in ${file}`);
    }
  }
}

const page = readFileSync(join(root, "src", "pages", "index.astro"), "utf8");
const localAssetText = [...text.values()].join("\n");
const distHtmlPath = join(root, "dist", "index.html");
if (existsSync(distHtmlPath)) {
  const distHtml = readFileSync(distHtmlPath, "utf8");
  const drivePrefixPattern = new RegExp(`([A-Z]:${"\\\\"})`, "i");
  if (drivePrefixPattern.test(distHtml)) {
    errors.push("Built HTML exposes a local filesystem path");
  }
}
const clientScript = readFileSync(join(root, "public", "scripts", "site.js"), "utf8");
const css = readFileSync(join(root, "src", "styles", "global.css"), "utf8");
const requiredSections = ["top", "projects", "gallery", "workflow", "automation", "links"];
const ids = new Set([...page.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
for (const sectionId of requiredSections) {
  if (!ids.has(sectionId)) {
    errors.push(`Missing required section: #${sectionId}`);
  }
}
for (const match of page.matchAll(/href="#([^"]+)"/g)) {
  if (!ids.has(match[1])) {
    errors.push(`Missing internal anchor target: #${match[1]}`);
  }
}

for (const match of localAssetText.matchAll(/\/yougif-site\/([A-Za-z0-9_./% -]+)/g)) {
  const target = match[1].replace(/^yougif-site\//, "");
  if (target.startsWith("#")) continue;
  const full = join(root, "public", target);
  if (!existsSync(full)) {
    errors.push(`Missing public asset: /${target}`);
  }
}

if (!page.includes("project-card") || !page.includes("project.href") || !page.includes("자세히 보기")) {
  errors.push("Project detail link markup is missing");
}

if (!page.includes("gallery-grid") || !page.includes("lightbox")) {
  errors.push("Gallery lightbox markup is missing");
}

const projectDetailRoutes = [
  join(root, "dist", "projects", "relay-vanguard", "index.html"),
  join(root, "dist", "projects", "broadcast", "index.html"),
  join(root, "dist", "projects", "shorts-automation", "index.html")
];
for (const route of projectDetailRoutes) {
  if (!existsSync(route)) {
    errors.push(`Missing project detail page: ${route}`);
  }
}

if (!clientScript.includes("document.querySelectorAll(\".gallery-item\")") || !clientScript.includes("openModal(lightbox)")) {
  errors.push("Gallery lightbox click handler is missing");
}

if (!css.includes("@media (max-width: 520px)") || !css.includes(".gallery-grid")) {
  errors.push("Mobile gallery layout rule is missing");
}

if (!css.includes("overflow: hidden") || !css.includes("overflow-x: auto")) {
  errors.push("Overflow control rules are missing");
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`validate-site passed: ${files.length} files checked`);
