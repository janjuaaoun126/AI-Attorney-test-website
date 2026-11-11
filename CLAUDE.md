# CLAUDE.md: Frontend Website Rules

## About Me
- I am a beginner with very little coding knowledge. I am learning by building.
- Before and after each change, explain in 2 to 4 plain-English sentences what you did and why.
- Ask before deleting files, installing anything new, or making big design decisions.

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.
- If the skill is not available, tell me once, then continue using the rules in this file.

## First-Time Setup (run once per project folder)
- Check that Node.js is installed (`node -v`). If not, stop and tell me to install the LTS version from nodejs.org.
- Check that `serve.mjs` and `screenshot.mjs` exist in the project root. If either is missing, stop and tell me.
- If there is no `node_modules/puppeteer` folder, ask me, then run `npm install puppeteer` in the project root.
- Create the `brand_assets/` folder if it does not exist.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against the reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or I say so.

## Local Server
- **Always serve on localhost.** Never screenshot a `file:///` URL.
- Start the server: `node serve.mjs` (serves the project root at `http://localhost:3000`).
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed locally in this project (`node_modules/puppeteer`). Do not look for it anywhere else.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots save automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label: `node screenshot.mjs http://localhost:3000 hero` saves as `screenshot-N-hero.png`.
- Mobile view: add `--mobile` (e.g. `node screenshot.mjs http://localhost:3000 home --mobile`) for a 390px-wide phone screenshot.
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool. You can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px".
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing.
- Check both desktop and `--mobile` screenshots before saying a page is done.

## Output Defaults
- Single `index.html` file, all styles inline, unless I say otherwise.
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive.

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values. Do not invent brand colors.

## Anti-Generic Guardrails
- **Colors:** Never use the default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings and generous line-height (`1.7`) on body text.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via an SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens, not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base, elevated, floating), not all sit at the same level.

## Hard Rules
- Do not add sections, features, or content not in the reference.
- Do not "improve" a reference design. Match it.
- Do not stop after one screenshot pass.
- Do not use `transition-all`.
- Do not use default Tailwind blue/indigo as the primary color.
- Do not copy real logos, photos, or text from other companies' websites. Recreate layout and style only.
- Do not put passwords or API keys in any file.
