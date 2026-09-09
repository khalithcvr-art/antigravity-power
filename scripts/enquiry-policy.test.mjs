import {test} from 'node:test';
import assert from 'node:assert/strict';
import {prepareEnquiry} from '../supabase/functions/website-enquiry/policy.js';
const body={name:'Internal test',phone:'test',email:'test@example.invalid',service:'Residency',message:'sample',request_id:'d3933200-0064-40cd-9458-cfcae3478248'};
test('same request survives minute/day boundary',()=>assert.equal(prepareEnquiry(body,new Date('2026-09-09T23:59:59Z')).identity,prepareEnquiry(body,new Date('2026-09-10T00:00:01Z')).identity));
test('changed content cannot be silently swallowed',()=>assert.notEqual(prepareEnquiry(body).identity,prepareEnquiry({...body,message:'different'}).identity));
test('new request ID preserves intentional identical submissions',()=>assert.notEqual(prepareEnquiry(body).identity,prepareEnquiry({...body,request_id:'d3933200-0064-40cd-9458-cfcae3478249'}).identity));
test('public source cannot suppress owner notification',()=>assert.equal(prepareEnquiry({...body,source:'lyria_handoff'}).fields.source,'expediaservices.ae'));
test('non-object JSON rejected safely',()=>{for(const b of [null,[],true,'x',3]) assert.equal(prepareEnquiry(b).error,'invalid_body');});
test('invalid ID rejected',()=>assert.equal(prepareEnquiry({...body,request_id:'bad'}).error,'invalid_request_id'));
test('honeypot and required fields retain rejection',()=>{assert.equal(prepareEnquiry({...body,company_website:'bot'}).ignored,true);assert.ok(prepareEnquiry({}).error);assert.equal(prepareEnquiry({...body,email:'bad'}).error,'invalid_email');});
test('older clients supported; different content in same minute retained',()=>{const old={...body};delete old.request_id;assert.ok(prepareEnquiry(old).fields);assert.notEqual(prepareEnquiry(old).identity,prepareEnquiry({...old,service:'Formation'}).identity);});

