# AI Attorney Brand Guidelines

Source: measured from the live site, aiattorney.com.pk (November 2026). Every hex value, font and size below was read from the site's own styles, not guessed.

**For Claude Code:** this file is the source of truth for anything built for AI Attorney. Where it conflicts with the general rules in CLAUDE.md (for example the "never use the same font for headings and body" guardrail), this file wins.

---

## 1. Brand in one line

AI Attorney is **Pakistan's Legal Intelligence Workspace**: research, drafting, document review, case diary, cause lists and a shared firm knowledge bank in one platform, built for Pakistani legal professionals.

Visual personality: calm, credible, institutional. Deep greens, lots of white space, soft mint surfaces, rounded cards. It should feel like a serious legal tool, not a flashy startup.

---

## 2. Logo

| File | Use on | Where to get it |
|---|---|---|
| `logo.svg` (green monogram, stylised "A") | White or light backgrounds | https://aiattorney.com.pk/assets/CheckoutLogo-D7kKgf2i.svg |
| `logo-white.png` (white version) | Dark green backgrounds (`#003734`, `#004743`) | https://aiattorney.com.pk/assets/NewAIAttorneyLogoWhite-QWaIC3ak.png |
| `og-logo.png` (2048 x 2048, square) | Social previews, favicons | https://aiattorney.com.pk/images/og-logo-v2.png |

Save these three files into this `brand_assets/` folder with the file names shown.

- Logo colours: `#06513D` and `#021913` (two-tone dark green).
- Header size on the live site: 32px tall. Footer: about 48px.
- Keep clear space around the logo of at least half its height.
- Never recolour, stretch, rotate, add effects to, or place the green logo on a dark background.

---

## 3. Colour palette

### Core greens

| Role | Hex | Where it's used |
|---|---|---|
| **Primary** | `#004743` | Brand theme colour, dark buttons, key surfaces |
| Primary hover | `#01260F` | Hover state for primary elements |
| Deep section background | `#003734` | Dark bands (MCP connectors section, footer) |
| Deepest | `#002422` | End stop of dark gradients |
| **Accent green** | `#008B62` | Links, "Sign Up", highlights, icons |
| Brand text green | `#006B45` | Most-used coloured text, outline buttons |
| Heading green | `#033416` | H1 headings |
| Logo green | `#06513D` | Logo, secondary dark text |
| Bright green | `#059669` | Gradient end stops only |
| Teal | `#005C57` | Secondary accent |

### Neutrals and surfaces

| Role | Hex |
|---|---|
| White (main background) | `#FFFFFF` |
| Mint tint (soft section bg) | `#FAFDFB` |
| Mint light (badges, chips) | `#EDF8F0` |
| Mint mid | `#E7F3ED` |
| Cool grey section bg | `#F1F4F9` |
| Light grey bg | `#F3F4F6` |
| Border, green-tinted | `#DCE7E1` |
| Border, neutral | `#E5E7EB` |
| Heading text (near-black) | `#111827` |
| Body text (dark) | `#1A1A1A` |
| Dark text on light buttons | `#0A1D1A` |
| Secondary text | `#4B5563` |
| Muted text | `#6B7280` |
| Muted green-grey | `#7C8F83` (see accessibility note) |

### Limited-use colours

| Hex | Use only for |
|---|---|
| `#8DC63F` (lime) | Pricing banner / promotional highlight, sparingly |
| `#BE123C` (rose) | Errors, warnings, required-field markers |

Do not introduce blue or purple as a brand colour. The site has one blue gradient on a feature card; treat it as an exception, not part of the palette.

### Gradients

| Name | Value | Use |
|---|---|---|
| **Primary button** | `linear-gradient(to bottom right, #286C37, #10867F)` | Main CTAs ("Start Free Trial") |
| Heading highlight | `linear-gradient(to right, #286C37, #008B62)` | Highlighted words in H1 (e.g. "Intelligence Workspace") |
| Dark section | `linear-gradient(to bottom right, #003734, #004743, #002422)` | Dark hero or CTA bands |
| Brand sweep | `linear-gradient(to right, #004743, #059669)` | Thin accents, dividers, progress bars |
| Soft glow | `linear-gradient(rgba(16,185,129,0.1), transparent)` | Subtle top fade on light sections |

### Accessibility note

`#7C8F83` on white has a contrast ratio of about 3.4:1, below the 4.5:1 minimum for normal body text. Use it only for large text or captions. For paragraphs, use `#4B5563`.

---

## 4. Typography

| Use | Font |
|---|---|
| Everything (headings, body, buttons) | **Inter Tight** (Google Fonts) |
| Urdu text | **Noto Nastaliq Urdu** (Google Fonts) |

The brand uses a single typeface. Create hierarchy with **weight, size and letter-spacing**, not with a second font.

Google Fonts link:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Noto+Nastaliq+Urdu:wght@400;700&display=swap" rel="stylesheet">
```

### Type scale (measured at tablet width; scale headings up about 20 to 30% on desktop)

| Element | Size / line-height | Weight | Letter-spacing | Colour |
|---|---|---|---|---|
| H1 | 40px / 46px | 700 | -1px | `#033416` (+ gradient on key words) |
| H2 | 30px / 33px | 600 | -0.75px | `#111827`, or white on dark |
| H3 | 18px / 28px | 600 | normal | `#111827`, or white on dark |
| Body | 16px / 24 to 26px | 400 to 500 | normal | `#1A1A1A` or `#4B5563` |
| Button | 14 to 15px | 600 | normal | per button style |
| Small / caption | 14px | 500 | normal | `#6B7280` |

---

## 5. Components

### Buttons

| Style | Background | Text | Border | Radius | Padding |
|---|---|---|---|---|---|
| **Primary** | Primary button gradient | `#FFFFFF` | none | 12px | 14px 32px |
| Primary, compact (pricing) | Primary button gradient | `#FFFFFF` | none | 8px | 14px 16px |
| On dark background | `#FFFFFF` | `#0A1D1A` | none | 12px | 16px 32px |
| Ghost on dark | transparent | `#FFFFFF` | 1px `rgba(255,255,255,0.2)` | 12px | 16px 32px |
| Outline | `#FFFFFF` | `#006B45` | 1px `#006B45` | 8px | 14px 16px |
| Nav "Login" | `#004743` | `#FFFFFF` | none | full pill | |
| Text link | none | `#008B62` | none | | weight 600 |

### Cards and surfaces

- Card radius: **16px** (large panels 24 to 32px).
- Badges, chips, tags: **full pill** (`9999px`), mint background `#EDF8F0`, green text `#006B45`.
- Card border: 1px `#DCE7E1`.
- Shadows are very soft:
  - Default: `0 1px 2px rgba(0,0,0,0.05)`
  - Floating card: `0 2px 12px rgba(0,0,0,0.04)`
  - Hero product mockup: `0 25px 50px -12px rgba(0,0,0,0.25)`
- Header: white at 95% opacity, sticky.

### Section rhythm

Alternate backgrounds so sections are easy to tell apart:
white, then mint tint `#FAFDFB`, then cool grey `#F8FAFC` or `#F1F4F9`, with one or two **dark green bands** (`#003734`) for emphasis and the footer.

---

## 6. Ready-to-use code

### Tailwind (CDN) config

Paste right after the Tailwind CDN script tag:

```html
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          brand: {
            DEFAULT: '#004743',
            hover:   '#01260F',
            deep:    '#003734',
            deepest: '#002422',
            accent:  '#008B62',
            text:    '#006B45',
            heading: '#033416',
            logo:    '#06513D',
            teal:    '#005C57',
            lime:    '#8DC63F',
          },
          mint: { 50: '#FAFDFB', 100: '#EDF8F0', 200: '#E7F3ED', 300: '#DCE7E1' },
          ink:  { DEFAULT: '#111827', body: '#1A1A1A', soft: '#4B5563', muted: '#6B7280' },
        },
        fontFamily: {
          sans: ['"Inter Tight"', '"Noto Nastaliq Urdu"', 'sans-serif'],
          urdu: ['"Noto Nastaliq Urdu"', 'serif'],
        },
        borderRadius: { card: '16px', btn: '12px' },
        backgroundImage: {
          'brand-btn':     'linear-gradient(to bottom right, #286C37, #10867F)',
          'brand-heading': 'linear-gradient(to right, #286C37, #008B62)',
          'brand-dark':    'linear-gradient(to bottom right, #003734, #004743, #002422)',
        },
      },
    },
  };
</script>
```

### Plain CSS variables

```css
:root {
  --primary: #004743;
  --primary-hover: #01260F;
  --deep: #003734;
  --accent: #008B62;
  --brand-text: #006B45;
  --heading: #033416;
  --mint-50: #FAFDFB;
  --mint-100: #EDF8F0;
  --border: #DCE7E1;
  --ink: #111827;
  --ink-body: #1A1A1A;
  --ink-soft: #4B5563;
  --grad-btn: linear-gradient(to bottom right, #286C37, #10867F);
  --grad-heading: linear-gradient(to right, #286C37, #008B62);
  --radius-card: 16px;
  --radius-btn: 12px;
  --font: "Inter Tight", "Noto Nastaliq Urdu", sans-serif;
}
```

---

## 7. Voice and copy

- **Tone:** formal and authoritative first, concise and specific second. Sounds like a credible partner to senior lawyers, not a salesperson.
- Lead with substance. Use real product names: Legal Library, Interactive Chat, Case Diary, Cause List, Document Review, Legal Drafter, Knowledge Bank, Firm Brain, Workspaces, MCP connectors.
- No hype words: unlock, seamless, elevate, robust, cutting-edge, game-changer, revolutionize, delve. No emojis. No exclamation-heavy copy. No em dashes.
- Placeholder copy should sound like real Pakistani legal practice (cause lists, High Court benches, case diaries), not generic SaaS text.

### Published figures (from the live site; confirm before reusing)

400K+ records · 50+ courts and tribunals · 79+ years of case law · 99.9% uptime · 2000+ users

Never invent other numbers, user counts or testimonials. Use a clearly marked placeholder instead, e.g. `[STAT NEEDED]`.

### Compliance red lines (always apply)

- Never say AI Attorney "gives legal advice", "represents clients" or "practises law". It is a tool for licensed professionals, whose review is required.
- No "100% accurate", "guaranteed" or promised outcomes. Use "citation-aware", "verified references", "reduces research time".
- Do not claim compliance with a specific Pakistani data-protection law or any certification (ISO 27001, SOC 2) unless confirmed. Use "aligned with data protection best practices", zero data retention, audit logs, no training on user data.
- Do not imply a fully proprietary AI model; AI Attorney discloses it runs on third-party AI.
- No unverified or disparaging claims about competitors.
- Do not position AI Attorney as a tool for lawyers to advertise or win clients; keep the message on research and practice efficiency.
