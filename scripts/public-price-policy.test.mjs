import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
const context={exports:{}};
vm.runInNewContext(ts.transpileModule(fs.readFileSync('src/data/jurisdictionPages.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText,context);
test('dedicated pages do not publish unapproved structured offers or breakdown prices',()=>{
 const pages=Object.values(context.exports.DEDICATED_PAGES);assert.ok(pages.length>=6);
 for(const p of pages){assert.ok(!JSON.stringify(p.schemaJson).includes('"offers"'));for(const item of p.costBreakdown.items)assert.equal(item.costAed,'Quotation required');assert.ok(!/AED\s*\d|\d[\d,]*\s*درهم/.test(JSON.stringify(p.meta)));}
});

test('shared search metadata does not reintroduce blanket pricing or approval claims',()=>{
 const html=fs.readFileSync('index.html','utf8');
 const graph=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
 const service=graph.find(x=>x['@type']==='ProfessionalService');
 assert.equal(service.priceRange,undefined);
 assert.ok(!/100% foreign ownership|nomination and issuance|Authorized partner/.test(JSON.stringify(service)));
 const org=graph.find(x=>x['@type']==='Organization');
 assert.equal(org.logo,'https://www.expediaservices.ae/expedia-latest-logo.png');
 assert.ok(org.hasCredential.every(c=>c.credentialCategory==='Commercial License'));
});
