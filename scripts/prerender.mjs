import {writeRestoredPages} from './restored-pages.mjs';
import {createServer} from 'vite';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
const server=await createServer({server:{middlewareMode:true,hmr:false},appType:'custom'});
try {
 const {App}=await server.ssrLoadModule('/src/App.tsx');
 const {DEDICATED_PAGES}=await server.ssrLoadModule('/src/data/jurisdictionPages.ts');
 const template=await readFile('dist/index.html','utf8');
 const esc=s=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
 const urls=[];
 for(const slug of ['',...Object.keys(DEDICATED_PAGES)]) for(const ar of [false,true]) {
  const path=(ar?'/ar':'')+(slug?'/'+slug:'/'); const url='https://www.expediaservices.ae'+path;
  const data=DEDICATED_PAGES[slug];
  const title=data?data.meta[ar?'titleAr':'titleEn']:(ar?'تأسيس الشركات وخدمات المعاملات في أبوظبي | إكسبيديا':'Business Setup & PRO Services Abu Dhabi | Expedia');
  const desc=data?data.meta[ar?'descriptionAr':'descriptionEn']:(ar?'تأسيس الشركات واستفسارات الإقامة وخدمات المعاملات. تواصل معنا للحصول على عرض سعر حسب احتياجاتك.':'Company formation, residency enquiries, PRO services and digital support in Abu Dhabi and Dubai. Contact Expedia for a tailored quotation.');
  let html=template.replace('<div id="root"></div>',`<div id="root">${renderToString(React.createElement(App,{initialPath:path}))}</div>`).replace('<html lang="en"',`<html lang="${ar?'ar':'en'}" dir="${ar?'rtl':'ltr'}"`).replace(/<title>.*?<\/title>/,`<title>${esc(title)}</title>`).replace(/(<meta name="description" content=")[^"]*/,`$1${esc(desc)}`).replace(/(<link rel="canonical" href=")[^"]*/,`$1${url}`).replace(/(<meta property="og:url" content=")[^"]*/,`$1${url}`);
  for (const [property, value] of Object.entries({'og:title':title,'og:description':desc,'og:locale':ar?'ar_AE':'en_AE'})) {
   html=html.replace(new RegExp('(<meta property="'+property+'" content=")[^"]*'), (_match,prefix)=>prefix+esc(value));
  }
  html=html.replace('</head>',`<link rel="alternate" hreflang="en" href="https://www.expediaservices.ae/${slug}"/><link rel="alternate" hreflang="ar" href="https://www.expediaservices.ae/ar/${slug}"/></head>`);
  const dir='dist'+(path==='/'?'':path.replace(/\/$/,''));await mkdir(dir,{recursive:true});html=html.replace('</head>','<noscript><style>[style*="opacity"]{opacity:1!important;transform:none!important}</style></noscript></head>');await writeFile(dir+'/index.html',html);urls.push(url);
 }
 urls.push(...await writeRestoredPages());
 await writeFile('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+urls.map(u=>`<url><loc>${u}</loc></url>`).join('')+'</urlset>');
 await writeFile('dist/404.html','<!doctype html><html lang="en"><meta name="robots" content="noindex"><title>Page not found | Expedia</title><h1>Page not found</h1><p><a href="/">Return to Expedia Business & Services</a></p></html>');
 console.log('Prerendered',urls.length,'website pages');
} finally {await server.close()}
