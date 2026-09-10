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
