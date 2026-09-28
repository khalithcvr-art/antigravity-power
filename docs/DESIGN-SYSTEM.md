# Sovereign Editorial Tech: design system

Single source of truth: `src/styles/tokens.css`. `tailwind.config.js` and `scripts/restored-pages.mjs`
(the static guide and policy pages) both read from it, and `scripts/design-tokens.test.mjs` enforces it.

## Roles, not hues
| Role | Token | Used for |
|---|---|---|
| Ground | `obsidian-950` `#070A0D`, `obsidian-900` `#0F1519` | page and elevated surface |
| Text | `text` `#F4F3EF`, `slate-400` `#A7B2B0` | primary and secondary copy |
| Authority | `gold-400` `#D7B56D` | the licence rule before headings, licence and authority marks, journey numerals, active-nav underline |
| Corporate action | `emerald-500` `#2DD4A8` | buttons, checks, success (corporate mode) |
| Digital studio | `cyan-500` `#67E8F9` | console, buttons, glows (digital mode) |
| Reading and forms | `paper` `#F4F3EF` on `ink` `#0F1519` | the enquiry form card and the static guide pages |

`accent` follows `data-mode` on the app root (emerald in corporate, cyan in digital). Tailwind's stray hue
families (`indigo`, `purple`, `sky`, `blue`, `teal`, `amber`) alias onto these three so one-off colours cannot creep back in.
`slate-600` is decorative only and fails AA as text.

## Type
Syne 700 for English `h1`/`h2` (lining figures on; its default figures are old-style). Plus Jakarta Sans for body and UI.
IBM Plex Sans Arabic for `html[lang=ar]` with no letter-spacing. JetBrains Mono only for the licence number, the tracker
reference field, tech chips and the studio console. No all-caps labels and no gradient text.

## Motion
- Reveals are CSS + IntersectionObserver and engage only after a real user input, so crawlers, audits, print and screenshots see finished content.
- Hover lift is CSS and only on `(hover: hover) and (pointer: fine)`. The cursor glow (digital cards only) is one rAF-throttled listener on fine pointers.
- One hero entrance per mode: the studio console sequence (about 7 s, always skippable) and `.hero-in` (played on a mode switch, never over the prerendered first paint).
- Mode switch uses the View Transitions API where available and swaps instantly elsewhere.
- Menus and dialogs mount long enough to play their exit (`usePresence`). Reduced motion unmounts at once, starts no timer, and hides nothing.

## Guardrails
`npm run build` (tsc + vite + prerender) and `node --test scripts/*.test.mjs`. Check keyboard paths from PR #28
(`aria-haspopup`/`aria-expanded`/`aria-controls`, ArrowDown to open, Escape to close) after touching the header.
