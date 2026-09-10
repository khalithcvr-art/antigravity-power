import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
import test from 'node:test';
import assert from 'node:assert/strict';
const source=readFileSync(new URL('../src/lib/tracking.ts',import.meta.url),'utf8');
const code=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;
function load(gtag){
 const logs=[];const context={exports:{},require:()=>({COMPANY_INFO:{}}),window:{gtag},console:{log:(...x)=>logs.push(x)}};
 vm.runInNewContext(code,context);return {track:context.exports.trackConversion,logs};
}
test('lead and lookup never forward personal values or log them',()=>{
 const calls=[];const {track,logs}=load((...x)=>calls.push(x));
 const privateData={name:'Private name',phone:'Private phone',email:'private@example.invalid',message:'Private message',query:'Private reference',source:'Private custom value'};
 track('generate_lead',privateData);track('status_tracker_search',privateData);
 assert.equal(JSON.stringify(calls),JSON.stringify([['event','generate_lead',{source:'contact_form'}],['event','status_tracker_search',{source:'status_tracker'}]]));
 assert.equal(logs.length,0);
});
test('missing or broken analytics cannot interrupt submission',()=>{
 for(const gtag of [undefined,{},()=>{throw Error('blocked')}]) assert.doesNotThrow(()=>load(gtag).track('generate_lead'));
});
