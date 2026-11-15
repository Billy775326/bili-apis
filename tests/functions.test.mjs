import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {classifyFunction,parameterSummary,resultStatus} from '../src/functions.mjs';
import {loadCatalog,readJson,select} from '../src/catalog.mjs';
import {planUrl,LIVE_PLAN,evaluateLiveResponse} from '../src/live-checks.mjs';
test('domain-specific categories take precedence over generic operations',()=>{
 for(const [url,category] of [
 ['https://api.live.bilibili.com/xlive/app-room/v1/dM/gethistory','live'],
 ['https://line3-h5-mobile-api.biligame.com/game/center/h5/comment/history/list','game'],
 ['https://api.bilibili.com/pgc/view/v2/app/season','pgc'],
 ['https://app.bilibili.com/x/v2/space/archive/cursor','user'],
 ['https://api.bilibili.com/x/article/creative/draft/list','creator'],
 ['https://api.bilibili.com/x/emote/package/search','emote'],
 ])assert.equal(classifyFunction({kind:'http',path:url}).category,category);
 assert.equal(classifyFunction({kind:'http',path:'/x/v2/region/index',declaring_class:'Ltv/danmaku/bili/ui/main/api/RegionApiService;'}).category,'feed');
 assert.equal(classifyFunction({kind:'http',path:'/x/emote/package/search',declaring_class:'Ltv/danmaku/bili/ui/EmoteService;'}).category,'emote');
 assert.equal(classifyFunction({kind:'grpc',id:'/bilibili.main.community.reply.v2.Reply/MainList'}).category,'comment');
 assert.equal(classifyFunction({kind:'http',path:'/unknown/example'}).category,'other');
});
test('all declarations are classified exactly once with matching source digests',()=>{
 const data=readJson('catalog/android/com.bilibili.app.in/play/6.8.0/functions.json'),endpoints=loadCatalog(process.cwd()).filter(e=>['http','grpc'].includes(e.kind));
 assert.equal(data.endpoints.length,endpoints.length);
 assert.equal(new Set(data.endpoints.map(e=>e.id)).size,endpoints.length);
 const map=new Map(endpoints.map(e=>[e.id,e]));
 for(const row of data.endpoints){assert.deepEqual(classifyFunction(map.get(row.id)),Object.fromEntries(['category','classification','rule_scope','rule_pattern','matched_text'].map(k=>[k,row[k]])));assert.ok(data.categories.some(c=>c.id===row.category));}
 for(const [file,hash] of Object.entries(data.source_json_stringify_sha256))assert.equal(createHash('sha256').update(JSON.stringify(readJson(file))).digest('hex'),hash);
 for(const c of data.categories)for(const kind of ['http','grpc'])assert.equal(c.counts[kind],data.endpoints.filter(r=>r.category===c.id&&r.kind===kind).length);
});
test('category queries preserve transport scope and reject invalid category IDs',()=>{
 const rows=[{kind:'http',id:'a',path:'/x/v2/reply/add'},{kind:'http',id:'b',path:'/x/v2/search/channel2'},{kind:'dex-route',id:'c',path:'/x/v2/reply/add'}];
 assert.deepEqual(select(rows,{category:'comment'}).entries.map(e=>e.id),['a']);
 assert.equal(select(rows,{category:'comment',kind:'grpc'}).total,0);
 assert.throws(()=>select(rows,{category:'typo'}),/Unknown function category/);
});
test('parameter display does not invent map keys or requiredness',()=>{
 assert.deepEqual(parameterSummary({parameters:[{position:0,descriptor:'Ljava/util/Map;',annotations:[{type:'Lretrofit2/http/QueryMap;',elements:{}}]}]}),[{position:0,java_type:'Ljava/util/Map;',location:'QueryMap',name:null}]);
 assert.equal(resultStatus({id:'x',kind:'http'}).live,'not-tested');
 assert.equal(resultStatus({id:'x',kind:'http'},[{endpoint_id:'x',outcome:'business-error',observation_id:'y'}]).live,'business-error');
});
test('HTTP 200 does not establish success without business code and data shape',()=>{
 const check=(body,status=200)=>evaluateLiveResponse(status,Buffer.from(body));
 assert.equal(check('{"code":-101,"message":"login required"}').outcome,'business-error');
 assert.equal(check('{"code":0,"data":{"items":[]}}').outcome,'business-success');
 for(const b of ['<html>challenge</html>','{}','{"code":"0","data":{}}','{"code":0}','{"code":0,"data":null}','{"code":0,"data":{}}'])assert.equal(check(b).outcome,'unexpected-response');
 assert.equal(check('{"code":0,"data":{"items":[]}}',403).outcome,'http-error');
 const safe=check('{"code":0,"data":{"access_token":"DO_NOT_PERSIST"}}');assert.ok(!JSON.stringify(safe).includes('DO_NOT_PERSIST'));
});
test('live plan permits only explicit catalog GET URLs without ambient credentials',()=>{
 const http=readJson('catalog/android/com.bilibili.app.in/play/6.8.0/http.json');
 for(const p of LIVE_PLAN){const url=planUrl(p,http.endpoints,{vmid:'1001',room_id:'1002'});assert.equal(url.protocol,'https:');assert.ok(!/[?&](?:access_key|appkey|sign|cookie)=/.test(url.href));}
 for(const p of LIVE_PLAN.filter(p=>p.required_params?.length))assert.throws(()=>planUrl(p,http.endpoints),/Explicit authorized/);
 const plan={endpoint_id:'a',params:{}};
 for(const [http_method,resolved_url_candidate] of [['POST','https://api.bilibili.com/x'],['GET','https://evil.example/x'],['GET','https://api.bilibili.com/x?access_key=secret'],['GET','http://api.bilibili.com/x']])assert.throws(()=>planUrl(plan,[{id:'a',http_method,resolved_url_candidate}]));
});
test('published live observations retain routes, parameter names and provenance while redacting values',()=>{
 const live=readJson('evidence/live-checks.json'),http=readJson('catalog/android/com.bilibili.app.in/play/6.8.0/http.json');
 assert.equal(live.source_artifact_sha256,http.artifact.sha256);
 assert.equal(live.observations.length,LIVE_PLAN.length);
 for(const [i,r] of live.observations.entries()){
  const p=LIVE_PLAN[i];assert.equal(r.endpoint_id,p.endpoint_id);const expected=planUrl(p,http.endpoints,{vmid:'1001',room_id:'1002'});assert.equal(r.url,expected.origin+expected.pathname);assert.deepEqual(r.request_parameter_names||[],[...new Set(expected.searchParams.keys())].sort());assert.equal(r.authentication,'none');assert.equal(r.method,'GET');
  assert.ok(Date.parse(r.finished_at)>=Date.parse(r.started_at));
  if(r.outcome==='business-success'){assert.equal(r.http_status,200);assert.equal(r.business_code,0);assert.equal(r.minimal_data_shape,true);}
  if(r.outcome==='business-error')assert.notEqual(r.business_code,0);
  assert.ok(!('body' in r));assert.ok(!('headers' in r));
 }
});
