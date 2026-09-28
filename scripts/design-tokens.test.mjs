import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import config from '../tailwind.config.js';
import {renderPage} from './restored-pages.mjs';

const css = readFileSync(new URL('../src/styles/tokens.css', import.meta.url), 'utf8');
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

// name -> [r, g, b] for every `--c-*: R G B;` token
const channels = new Map([...css.matchAll(/--c-([\w-]+):\s*(\d+)\s+(\d+)\s+(\d+)\s*;/g)].map(m => [m[1], [+m[2], +m[3], +m[4]]]));
const luminance = ([r, g, b]) => {
  const lin = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
};
const contrast = (a, b) => {
  const [hi, lo] = [luminance(channels.get(a)), luminance(channels.get(b))].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

test('every colour Tailwind uses is defined once, in tokens.css', () => {
  const referenced = new Set();
  const walk = node => {
    for (const value of Object.values(node)) {
      if (typeof value === 'string') for (const m of value.matchAll(/var\(--c-([\w-]+)\)/g)) referenced.add(m[1]);
      else if (value && typeof value === 'object') walk(value);
    }
  };
  walk(config.theme.extend.colors);
  assert.ok(referenced.size > 40, `expected a full palette, found ${referenced.size} references`);
  // accent and accent-soft are aliases resolved in CSS (they point at emerald or cyan by mode)
  const aliases = new Set(['accent', 'accent-soft']);
  for (const name of referenced) {
    assert.ok(channels.has(name) || aliases.has(name) || css.includes(`--c-${name}:`), `--c-${name} is referenced by tailwind.config.js but not defined in tokens.css`);
  }
  assert.equal(css.includes('--c-accent: var(--c-emerald-500)'), true);
  assert.equal(css.includes("[data-mode='digital']"), true);
});

test('brand palette matches the approved hex values', () => {
  const hex = name => '#' + channels.get(name).map(v => v.toString(16).padStart(2, '0')).join('').toUpperCase();
  assert.equal(hex('obsidian-950'), '#070A0D');
  assert.equal(hex('obsidian-900'), '#0F1519');
  assert.equal(hex('text'), '#F4F3EF');
  assert.equal(hex('slate-400'), '#A7B2B0');
  assert.equal(hex('gold-400'), '#D7B56D');
  assert.equal(hex('emerald-500'), '#2DD4A8');
  assert.equal(hex('cyan-500'), '#67E8F9');
});

test('text and control contrast stays at or above WCAG AA on every surface', () => {
  const surfaces = ['obsidian-950', 'obsidian-900', 'obsidian-850'];
  for (const surface of surfaces) {
    for (const text of ['text', 'slate-200', 'slate-300', 'slate-400', 'slate-500', 'gold-400', 'emerald-500', 'emerald-400', 'cyan-500']) {
      assert.ok(contrast(text, surface) >= 4.5, `${text} on ${surface} is ${contrast(text, surface).toFixed(2)}:1`);
    }
    assert.ok(contrast('slate-400', surface) >= 7, `secondary text on ${surface} should reach AAA`);
  }
  // button labels: dark ink on the three accent fills
  for (const fill of ['emerald-500', 'emerald-400', 'cyan-500', 'gold-400']) {
    assert.ok(contrast('obsidian-950', fill) >= 7, `label on ${fill} is ${contrast('obsidian-950', fill).toFixed(2)}:1`);
  }
  // sanity: the checker really discriminates (slate-600 is documented as decorative-only)
  assert.ok(contrast('slate-600', 'obsidian-950') < 4.5, 'slate-600 should stay below AA so it is never used for text');
  // paper surfaces (enquiry form, guide pages)
  assert.ok(contrast('ink', 'paper') >= 7);
  assert.ok(contrast('ink-2', 'paper') >= 7);
  assert.ok(contrast('ink-3', 'paper') >= 4.5);
  assert.ok(contrast('gold-700', 'paper') >= 4.5);
  assert.ok(contrast('emerald-800', 'paper') >= 4.5);
  assert.ok(contrast('danger-700', 'paper') >= 4.5);
  assert.ok(contrast('paper-field', 'paper') >= 3, 'input borders need 3:1 (WCAG 1.4.11)');
});

test('static guide and policy pages inline the same tokens and keep a dark header for the light-on-dark logo', () => {
  const pages = JSON.parse(readFileSync(new URL('../content/restored-pages.json', import.meta.url), 'utf8'));
  const page = renderPage(pages[0], pages);
  assert.ok(page.includes('--c-obsidian-950: 7 10 13'), 'tokens are inlined');
  assert.ok(page.includes('class="site-header"'), 'dark header wraps the logo');
  assert.equal((page.match(/<h1>/g) || []).length, 1);
});

test('only approved font families are requested', () => {
  const request = html.match(/fonts\.googleapis\.com\/css2\?([^"]+)"/)[1];
  const families = [...request.matchAll(/family=([^:&]+)/g)].map(m => decodeURIComponent(m[1]).replace(/\+/g, ' '));
  const allowed = ['IBM Plex Sans Arabic', 'JetBrains Mono', 'Plus Jakarta Sans', 'Syne', 'Tajawal'];
  for (const family of families) assert.ok(allowed.includes(family), `unexpected font family: ${family}`);
  assert.ok(!families.includes('Outfit'), 'Outfit is no longer used and must not be loaded');
});
