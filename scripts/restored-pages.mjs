import {readFile, writeFile, mkdir} from 'node:fs/promises';
import {readFileSync} from 'node:fs';
import {dirname} from 'node:path';
export const escapeHtml = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const site='https://www.expediaservices.ae';
// One source of truth: the static pages inline the same design tokens the app uses.
const tokens=readFileSync(new URL('../src/styles/tokens.css',import.meta.url),'utf8').replace(/\/\*[\s\S]*?\*\//g,'').replace(/\s+/g,' ').trim();
const fonts='https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Syne:wght@700&display=swap';
const css=`body{margin:0;background:rgb(var(--c-paper));color:rgb(var(--c-ink));font-family:var(--font-sans);font-size:1.125rem;line-height:1.75;-webkit-font-smoothing:antialiased}
.site-header{background:rgb(var(--c-obsidian-950));border-bottom:1px solid rgb(var(--c-gold-400)/.2)}
.site-header .bar{max-width:64rem;margin:auto;padding:.75rem 1.5rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:.5rem 1.5rem}
.site-header nav{display:flex;flex-wrap:wrap;gap:.25rem 1.5rem}
.site-header nav a{color:rgb(var(--c-slate-300));text-decoration:none;font-size:1rem;font-weight:500;padding:.5rem 0}
.site-header nav a:hover{color:rgb(var(--c-text))}
.logo{width:auto;height:3.5rem;max-width:100%;display:block}
main,.site-footer .bar{max-width:44rem;margin:auto;padding:3rem 1.5rem}
a{color:rgb(var(--c-gold-700));text-underline-offset:4px}
a:focus-visible,button:focus-visible{outline:3px solid rgb(var(--c-ink));outline-offset:4px;border-radius:2px}
.site-header a:focus-visible,.site-footer a:focus-visible{outline-color:rgb(var(--c-gold-400))}
h1{font-family:var(--font-display);font-weight:700;font-size:clamp(1.9rem,4.4vw,2.75rem);line-height:1.15;letter-spacing:-.02em;font-variant-numeric:lining-nums;margin:0 0 1rem;text-wrap:balance}
h2{font-size:1.5rem;line-height:1.35;margin:2.75rem 0 .5rem;padding-top:1rem;position:relative;text-wrap:balance}
h2:before{content:'';position:absolute;top:0;left:0;width:1.75rem;height:2px;background:rgb(var(--c-gold-500))}
p,li{overflow-wrap:anywhere;text-wrap:pretty}
.meta{font-size:.9375rem;color:rgb(var(--c-ink-3))}
li{margin-bottom:.75rem}
.contact{margin-top:3rem;padding:1.5rem;background:rgb(var(--c-field));border:1px solid rgb(var(--c-paper-line));border-radius:1rem}
.contact h2{margin-top:0}
.site-footer{background:rgb(var(--c-obsidian-950));color:rgb(var(--c-slate-400));font-size:.9375rem}
.site-footer .bar{padding-block:2rem 3rem}
.site-footer nav{display:flex;flex-wrap:wrap;gap:.25rem 1.5rem}
.site-footer a{color:rgb(var(--c-slate-300))}
.site-footer .meta{color:rgb(var(--c-slate-500));margin-top:1rem}
.skip{position:absolute;top:-100px}.skip:focus{top:.75rem;left:.75rem;background:rgb(var(--c-paper));color:rgb(var(--c-ink));padding:.75rem 1rem;border-radius:.5rem;z-index:10}
main:focus{outline:none}
@media (prefers-reduced-motion:reduce){*{scroll-behavior:auto!important}}`;
export function renderPage(page,pages) {
 const e=escapeHtml;
 const guides=pages.filter(p=>p.path.startsWith('/blog/'));
 const links=pages.filter(p=>['/blog','/privacy','/cookies','/terms'].includes(p.path));
 return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${e(page.title)} | Expedia Business Services</title><meta name="description" content="${e(page.description)}"><link rel="canonical" href="${site}${e(page.path)}"><meta property="og:title" content="${e(page.title)}"><meta property="og:description" content="${e(page.description)}"><meta property="og:url" content="${site}${e(page.path)}"><meta property="og:type" content="${page.path.startsWith('/blog/')?'article':'website'}"><meta property="og:locale" content="en_AE"><meta property="og:image" content="${site}/expedia-latest-logo.png"><link rel="icon" href="/icon-logo.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="${fonts}"><meta name="theme-color" content="#070A0D"><style>${tokens}${css}</style></head><body><a class="skip" href="#main-content">Skip to content</a><header class="site-header"><div class="bar"><a href="/" aria-label="Expedia home"><img class="logo" src="/expedia-latest-logo.png" alt="Expedia Business Services" width="940" height="420"></a><nav aria-label="Main navigation"><a href="/">Home</a><a href="/#services">Services</a><a href="/blog">Guides</a><a href="/#contact">Contact</a></nav></div></header><main id="main-content" tabindex="-1"><article><h1>${e(page.title)}</h1><p class="meta">Reviewed 10 September 2026 · Expedia Business and Services L.L.C</p><p>${e(page.description)}</p>${page.sections.map(s=>`<section><h2>${e(s.heading)}</h2>${s.paragraphs.map(p=>`<p>${e(p)}</p>`).join('')}</section>`).join('')}${page.path==='/blog'?`<ul>${guides.map(g=>`<li><a href="${e(g.path)}">${e(g.title)}</a><p>${e(g.description)}</p></li>`).join('')}</ul>`:''}${page.sources.length?`<section><h2>Official sources</h2><ul>${page.sources.map(s=>`<li><a href="${e(s.url)}" rel="noopener noreferrer">${e(s.label)}</a></li>`).join('')}</ul></section>`:''}</article><section class="contact"><h2>Speak to our team</h2><p><a href="/#contact">Send an enquiry</a> or email <a href="mailto:info@expediaservices.ae">info@expediaservices.ae</a>.</p><p><a href="tel:+971564425950">+971 56 4425 950</a> · Haibu, Level 1, Abu Dhabi Mall, Abu Dhabi, UAE</p></section></main><footer class="site-footer"><div class="bar"><nav aria-label="Guides and policies">${links.map(p=>`<a href="${e(p.path)}">${e(p.title)}</a>`).join('')}</nav><p class="meta">Expedia Business and Services L.L.C</p></div></footer></body></html>`;
}
export async function writeRestoredPages(){
 const pages=JSON.parse(await readFile('content/restored-pages.json','utf8'));
 for(const page of pages){const file='dist'+page.path+'.html';await mkdir(dirname(file),{recursive:true});await writeFile(file,renderPage(page,pages));}
 return pages.map(p=>site+p.path);
}
