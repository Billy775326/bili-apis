import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
import {parse} from '@babel/parser';
import {signWbi,wbiKeysFromNav,WBI_PERMUTATION} from '../src/wbi.mjs';
import {BiliWebClient,BiliWebApiError,WEB_READ_ENDPOINTS} from '../src/web-client.mjs';
import {checkPcCase} from '../src/pc-cases.mjs';
import {safePcUrl,summarizePcJson} from '../src/pc-capture.mjs';
import {extractPcLiterals,pcOutcome,pcEndpointId} from '../src/pc-catalog.mjs';
const root=fileURLToPath(new URL('../',import.meta.url));
const read=name=>JSON.parse(fs.readFileSync(path.join(root,name),'utf8').replace(/^\uFEFF/,''));
const keys={imgKey:'0123456789abcdef0123456789abcdef',subKey:'fedcba9876543210fedcba9876543210'};
const jsonResponse=(value,status=200)=>new Response(JSON.stringify(value),{status,headers:{'Content-Type':'application/json'}});

test('WBI golden vector preserves scalar types, encoding, order and caller input',()=>{
 const input={foo:'bili bili!()',empty:'',nullable:null,num:1,bool:false,'中文':'测试'};
 const signed=signWbi(input,{...keys,nowSeconds:1700000000});
 assert.equal(signed.query,'bool=false&empty=&foo=bili%20bili!()&num=1&wts=1700000000&%E4%B8%AD%E6%96%87=%E6%B5%8B%E8%AF%95&w_rid=27098cafce28d7c63dc923c2c791e00f');
 assert.equal(signed.canonicalQuery,'bool=false&empty=&foo=bili%20bili&num=1&wts=1700000000&%E4%B8%AD%E6%96%87=%E6%B5%8B%E8%AF%95');assert.equal(new URLSearchParams(signed.query).get('foo'),'bili bili!()');assert.equal(input.foo,'bili bili!()');assert.equal(signed.parameters.bool,false);assert.ok(!('nullable' in signed.parameters));
 assert.equal(signWbi(Object.fromEntries(Object.entries(input).reverse()),{...keys,nowSeconds:1700000000}).query,signed.query);
});
test('WBI rejects ambiguous or invalid inputs instead of silently signing them',()=>{
 for(const params of [null,[],{n:NaN},{nested:{}},{wts:1},{w_rid:'fixture'}])assert.throws(()=>signWbi(params,{...keys,nowSeconds:1}));
 assert.throws(()=>signWbi({}, {...keys,nowSeconds:1.5}));assert.throws(()=>signWbi({}, {...keys,imgKey:'bad',nowSeconds:1}));
 const odd=signWbi(JSON.parse('{"__proto__":"value","normal":1}'),{...keys,nowSeconds:1});assert.ok(odd.query.includes('__proto__=value'));assert.equal(Object.getPrototypeOf(odd.parameters),Object.prototype);
});
test('public WBI nav keys do not require treating -101 as authenticated',()=>{
 const nav={code:-101,data:{isLogin:false,wbi_img:{img_url:'https://i0.hdslb.com/bfs/wbi/'+keys.imgKey+'.png',sub_url:'https://i0.hdslb.com/bfs/wbi/'+keys.subKey+'.png'}}};
 assert.deepEqual(wbiKeysFromNav(nav),keys);assert.throws(()=>wbiKeysFromNav({code:0,data:{}}));assert.throws(()=>wbiKeysFromNav({data:{wbi_img:{img_url:'not-a-url'}}}));
});
test('read client uses reviewed GET URL and cannot override method or follow redirects',async()=>{
 let seen;const client=new BiliWebClient({fetchImpl:async(url,options)=>{seen={url:new URL(url),options};return jsonResponse({code:0,data:{list:[],no_more:true}});}});
 await client.call('home.popular',{pn:2,method:'POST'});
 assert.equal(seen.url.hostname,'api.bilibili.com');assert.equal(seen.url.pathname,'/x/web-interface/popular');assert.equal(seen.url.searchParams.get('pn'),'2');assert.equal(seen.options.method,'GET');assert.equal(seen.options.redirect,'manual');assert.ok(!('Cookie' in seen.options.headers));
});
test('invalid aliases and missing resource IDs fail before sending a request',async()=>{
 let called=false;const client=new BiliWebClient({fetchImpl:async()=>{called=true;throw Error('unexpected');}});
 for(const name of ['__proto__','constructor','video.stats','unknown'])await assert.rejects(client.call(name),/Unknown read-only PC API/);
 await assert.rejects(client.call('video.detail'),/Missing parameter/);assert.equal(called,false);
});
test('WBI request bootstraps public nav and keeps cookies out of observation metadata',async()=>{
 const observed=[],requests=[];
 const client=new BiliWebClient({cookie:'fixture_session=1',now:()=>1700000000000,onObservation:o=>observed.push(o),fetchImpl:async(url,options)=>{const u=new URL(url);requests.push({u,options});if(u.pathname.endsWith('/nav'))return jsonResponse({code:-101,data:{isLogin:false,wbi_img:{img_url:'https://i0.hdslb.com/'+keys.imgKey+'.png',sub_url:'https://i0.hdslb.com/'+keys.subKey+'.png'}}});return jsonResponse({code:0,data:{result:[{type:'video'}],page:1}});}});
 const json=await client.call('search.videos',{keyword:'bilibili'});assert.equal(json.code,0);assert.equal(requests.length,2);assert.match(requests[1].u.searchParams.get('w_rid'),/^[a-f0-9]{32}$/);assert.equal(requests[1].u.searchParams.get('wts'),'1700000000');assert.ok(!JSON.stringify(observed).includes('fixture_session=1'));
});
test('HTTP, business and malformed response failures retain useful error distinctions',async()=>{
 for(const [status,body,kind,code]of [[200,{code:-101},'business-error',-101],[200,{code:-352},'business-error',-352],[200,{},'business-error',null],[404,'<html>missing</html>','http-error',null],[200,'<html>challenge</html>','non-json-response',null]]){
  const client=new BiliWebClient({fetchImpl:async()=>typeof body==='string'?new Response(body,{status}):jsonResponse(body,status)});
  await assert.rejects(client.call('home.popular'),e=>e instanceof BiliWebApiError&&e.httpStatus===status&&e.businessCode===code&&e.kind===kind);
 }
});
test('read client bounds response size and rejects newline-bearing cookie input',async()=>{
 assert.throws(()=>new BiliWebClient({cookie:'fixture\r\ninjected: value'}),/single-line/);
 assert.throws(()=>new BiliWebClient({timeoutMs:0}),/timeoutMs/);
 const client=new BiliWebClient({fetchImpl:async()=>new Response('x'.repeat(4*1024*1024+1))});
 await assert.rejects(client.call('home.popular'),e=>e.kind==='response-size-limit');
});
test('URL and JSON summaries remove signatures, sessions and payload values',()=>{
 const safe=safePcUrl('https://api.bilibili.com/x?keyword=bilibili&w_rid=NEVER_PUBLISH_SIGNATURE&SESSDATA=NEVER_PUBLISH_SESSION&pagination_str=NEVER_PUBLISH_CURSOR');
 assert.equal(safe.url,'https://api.bilibili.com/x');assert.deepEqual(safe.public_input,{keyword:'bilibili'});assert.ok(!JSON.stringify(safe).includes('NEVER_PUBLISH'));
 const summary=summarizePcJson({code:0,data:{access_token:'NEVER_PUBLISH_TOKEN',items:[{name:'NEVER_PUBLISH_BODY'}]}});assert.ok(summary.data_keys.includes('access_token'));assert.ok(!JSON.stringify(summary).includes('NEVER_PUBLISH'));
 assert.throws(()=>safePcUrl('https://user:password@api.bilibili.com/x'));assert.throws(()=>safePcUrl('javascript:alert(1)'));
});
test('PC script scan ignores comments, retains computed gaps and exact UTF8 offsets',()=>{
 const source="const pre='前置'; // request.get('/x/not-a-request');\nrequest.get('/x/web-interface/view?access_key=NEVER_PUBLISH'); const dynamic=`/x/foo/${id}`;";
 const scanned=extractPcLiterals(source,parse);assert.equal(scanned.candidates.length,1);const c=scanned.candidates[0];assert.equal(c.literal,'/x/web-interface/view');assert.equal(c.method_hint,'GET');assert.match(c.method_hint_scope,/unverified/);assert.equal(scanned.computed_templates_not_resolved,1);assert.ok(c.source_byte_offset>c.source_utf16_offset);assert.equal(Buffer.from(source).subarray(c.source_byte_offset,c.source_byte_offset+1).toString(),"'");assert.ok(!JSON.stringify(scanned).includes('NEVER_PUBLISH'));
});
test('business zero plus an empty unresolved comment thread does not pass semantic checks',()=>{
 const checked=checkPcCase('comment.main',{code:0,data:{cursor:{all_count:10,is_end:false},replies:[],top_replies:[]}},{oid:1});assert.equal(checked.passed,false);
 assert.equal(pcOutcome({http_status:200,business_code:0,check_result:checked}),'response-assertion-failed');assert.equal(pcOutcome({http_status:412,business_code:null}),'risk-or-rate-response');
 assert.equal(checkPcCase('video.detail',{code:0,data:{bvid:'BV_WRONG',aid:1,cid:2,pages:[]}},{bvid:'BV_EXPECTED'}).passed,false);
});
test('PC catalog keeps independent identity, valid observations and correct pass counters',()=>{
 const data=read('catalog/pc-web.json'),ids=new Set(data.endpoints.map(e=>e.id)),observations=new Map(data.observations.map(o=>[o.id,o]));assert.equal(ids.size,data.endpoints.length);assert.equal(observations.size,data.observations.length);
 for(const e of data.endpoints){assert.equal(e.id,pcEndpointId(e.method,e.url));assert.notEqual(e.method,'OPTIONS');assert.ok(e.observations.every(id=>observations.has(id)));if(e.verification.http_case_passed)assert.ok(e.observations.some(id=>observations.get(id).context==='http-client'&&observations.get(id).outcome==='anonymous-read-case-passed'));}
 assert.equal(data.summary.http_case_passed,data.endpoints.filter(e=>e.verification.http_case_passed).length);assert.equal(data.summary.anonymous_case_passed,data.endpoints.filter(e=>e.verification.anonymous_case_passed).length);
 const comment=data.endpoints.find(e=>e.aliases.includes('comment.main'));assert.equal(comment.verification.failed_assertions,true);assert.ok(data.endpoints.some(e=>e.aliases.includes('search.videos')&&e.verification.http_case_passed));assert.ok(!Object.hasOwn(WEB_READ_ENDPOINTS,'video.stats'));
});
test('PC candidate positions are bound to primary frontend sources and remain candidates',()=>{
 const data=read('catalog/pc-web.json'),candidates=read('catalog/pc-candidates.json'),sourceHashes=new Set(data.sources.map(s=>s.sha256));
 for(const c of candidates.candidates){assert.equal(c.status,'pc-script-literal-candidate');for(const r of c.sources){assert.ok(sourceHashes.has(r.source_sha256));assert.ok(Number.isSafeInteger(r.source_byte_offset)&&r.source_byte_offset>=0);}}
 const facts=read('evidence/pc-wbi-source.json');for(const s of facts.sources){assert.deepEqual(s.table,[...WBI_PERMUTATION]);assert.ok(sourceHashes.has(s.asset_sha256));}
});
test('PC CLI queries the generated web catalog without Android data or a network call',()=>{
 const result=spawnSync(process.execPath,[path.join(root,'bin/bili-web.mjs'),'list','--category','search','--limit','1'],{cwd:root,encoding:'utf8'});assert.equal(result.status,0,result.stderr);const j=JSON.parse(result.stdout);assert.equal(j.entries.length,1);assert.equal(j.entries[0].category,'search');assert.match(j.entries[0].id,/^pc:/);
 const invalid=spawnSync(process.execPath,[path.join(root,'bin/bili-web.mjs'),'list','--limit','0'],{cwd:root,encoding:'utf8'});assert.notEqual(invalid.status,0);assert.match(invalid.stderr,/limit/);
});
