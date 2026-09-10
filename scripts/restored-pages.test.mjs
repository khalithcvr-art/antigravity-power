import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {renderPage} from './restored-pages.mjs';
const pages=JSON.parse(readFileSync('content/restored-pages.json','utf8'));
test('all eight missing routes render distinct accessible static content',()=>{
 assert.equal(pages.length,8);assert.equal(new Set(pages.map(p=>p.path)).size,8);
 for(const p of pages){const html=renderPage(p,pages);assert.equal((html.match(/<h1>/g)||[]).length,1);assert.ok(html.includes('href="https://www.expediaservices.ae'+p.path+'"'));assert.ok(!html.includes('src="/src/main'));assert.ok(html.includes('Skip to content'));}
});
test('guide index links to four restored articles; policies do not invent consent banner',()=>{
 const html=renderPage(pages.find(p=>p.path==='/blog'),pages);
 for(const p of pages.filter(p=>p.path.startsWith('/blog/')))assert.ok(html.includes('href="'+p.path+'"'));
 assert.ok(!JSON.stringify(pages).includes('only set if you click'));
});
test('article text cannot inject markup',()=>{
 const html=renderPage({...pages[0],title:'<script>alert(1)</script>'},pages);assert.ok(html.includes('&lt;script&gt;'));assert.ok(!html.includes('<script>'));
});
