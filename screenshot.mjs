// screenshot.mjs: full-page screenshot of a local page.
// Setup (once per project):  npm install puppeteer
// Usage:
//   node screenshot.mjs http://localhost:3000
//   node screenshot.mjs http://localhost:3000 hero
//   node screenshot.mjs http://localhost:3000 home --mobile
// Saves to ./temporary screenshots/screenshot-N[-label].png (never overwrites).

import puppeteer from "puppeteer";
import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const mobile = args.includes("--mobile");
const positional = args.filter((a) => a !== "--mobile");
const url = positional[0] || "http://localhost:3000";
const label = positional[1] ? "-" + positional[1].replace(/[^a-z0-9_-]/gi, "-") : "";

const outDir = path.join(process.cwd(), "temporary screenshots");
fs.mkdirSync(outDir, { recursive: true });

// Next number = highest existing screenshot number + 1
let n = 0;
for (const f of fs.readdirSync(outDir)) {
  const m = f.match(/^screenshot-(\d+)/);
  if (m) n = Math.max(n, Number(m[1]));
}
const file = path.join(outDir, `screenshot-${n + 1}${label}${mobile ? "-mobile" : ""}.png`);

const browser = await puppeteer.launch({ headless: true });
try {
  const page = await browser.newPage();
  if (mobile) {
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  } else {
    await page.setViewport({ width: 1440, height: 900 });
  }
  await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
  // Short pause so fonts, Tailwind CDN and animations settle
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: file, fullPage: true });
  console.log("Saved: " + file);
} catch (err) {
  console.error("Screenshot failed: " + err.message);
  console.error("Is the server running? Start it with: node serve.mjs");
  process.exitCode = 1;
} finally {
  await browser.close();
}
