import fs from 'node:fs';
import path from 'node:path';
import {BiliWebClient,WEB_READ_ENDPOINTS} from '../src/web-client.mjs';
import {checkPcCase} from '../src/pc-cases.mjs';
import {safePcUrl,summarizePcJson,sha256} from '../src/pc-capture.mjs';
const args=process.argv.slice(2);if(args[0]!=='--run')throw Error('Use --run --output .local/DIRECTORY --video-case FILE');
const options={};for(let i=1;i<args.length;i+=2){if(!['--output','--video-case','--bvid'].includes(args[i])||!args[i+1])throw Error('Invalid option');options[args[i].slice(2)]=args[i+1];}
if(!options.output||Boolean(options['video-case'])===Boolean(options.bvid))throw Error('Output and exactly one of --video-case or --bvid are required');
const output=path.resolve(options.output);if(!output.startsWith(path.resolve('.local')+path.sep))throw Error('Raw results must stay under .local');fs.mkdirSync(output,{recursive:true});
const sample=options.bvid?{bvid:options.bvid,source:'explicit public video test input'}:JSON.parse(fs.readFileSync(options['video-case'],'utf8'));if(!/^BV[A-Za-z0-9]{10}$/.test(sample.bvid))throw Error('Expected public bvid from observed PC page');
const observations=[],cases=[],blockedCategories=new Set();let context={bvid:sample.bvid},root=null;
const client=new BiliWebClient({onObservation:o=>{
 const spec=WEB_READ_ENDPOINTS[o.endpoint];const file=path.join(output,sha256(o.body)+'.json');fs.writeFileSync(file,o.body);let summary;try{summary=summarizePcJson(JSON.parse(o.body));}catch{summary={business_code:null,data_type:'non-json'};}
 observations.push({id:'pc-http:'+observations.length,endpoint:o.endpoint,url:spec?.url||'https://api.bilibili.com/x/web-interface/nav',method:'GET',observed_at:o.startedAt,http_status:o.status,request_parameter_names:o.request_parameter_names,...summary,body_sha256:sha256(o.body),body_bytes:o.body.length,local_body_file:file});
}});
const queue=[['home.popular',{pn:1,ps:3}],['video.detail',()=>({bvid:context.bvid})],['video.pages',()=>({bvid:context.bvid})],['video.related',()=>({bvid:context.bvid})],['video.tags',()=>({bvid:context.bvid})],['user.relationStats',{vmid:'[REDACTED_INPUT]'}],['user.info',{mid:'[REDACTED_INPUT]'}],['search.default',{}],['search.videos',{keyword:'bilibili',page:1}],['search.all',{keyword:'bilibili',page:1}],['video.detailBundle',()=>context.aid?{aid:context.aid}:null],['comment.main',()=>context.aid?{oid:context.aid}:null],['comment.replies',()=>context.aid&&root?{oid:context.aid,root}:null],['video.online',()=>context.aid&&context.cid?{aid:context.aid,cid:context.cid,bvid:context.bvid}:null],['playback.info',()=>context.aid&&context.cid?{aid:context.aid,cid:context.cid}:null],['playback.url',()=>context.cid?{bvid:context.bvid,cid:context.cid}:null],['favorite.folders',{up_mid:'[REDACTED_INPUT]'}],['dynamic.hot',{page:1}],['user.uploads',{mid:'[REDACTED_INPUT]',pn:1,ps:25,order:'pubdate'}],['live.roomPlayInfo',{room_id:7734200}]];
let globalStop=false;
for(const [name,build]of queue){
 const spec=WEB_READ_ENDPOINTS[name],input=typeof build==='function'?build():build;
 if(globalStop||blockedCategories.has(spec.category)||input===null){cases.push({endpoint:name,input:input||{},outcome:'skipped',reason:globalStop?'global-rate-limit':blockedCategories.has(spec.category)?'same-category-risk-response':'dependent-public-resource-unavailable'});continue;}
 const started=new Date().toISOString();try{
  const json=await client.call(name,input),assertion=checkPcCase(name,json,input),last=observations.at(-1);
  cases.push({endpoint:name,input,outcome:assertion.passed?'anonymous-read-case-passed':'response-assertion-failed',checks:assertion.checks,observation_id:last.id,started_at:started});
  if(name==='video.detail'){if(Number.isSafeInteger(json.data?.aid))context.aid=json.data.aid;if(Number.isSafeInteger(json.data?.cid))context.cid=json.data.cid;}
  if(name==='comment.main'){const first=json.data?.replies?.[0]||json.data?.top_replies?.[0];root=first?.rpid_str||(Number.isSafeInteger(first?.rpid)?String(first.rpid):null);}
 }catch(error){const last=observations.at(-1);cases.push({endpoint:name,input,outcome:error.httpStatus===412||error.httpStatus===429||[-352,-412,-509].includes(error.businessCode)?'risk-or-rate-response':error.businessCode===-101?'login-required-response':'request-failed',http_status:error.httpStatus??null,business_code:error.businessCode??null,error_kind:error.kind||error.name,observation_id:last?.endpoint===name?last.id:null,started_at:started});if(error.httpStatus===412||error.businessCode===-352)blockedCategories.add(spec.category);if(error.httpStatus===429||error.businessCode===-509)globalStop=true;}
 console.log(JSON.stringify(cases.at(-1)));await new Promise(r=>setTimeout(r,1000));
}
fs.writeFileSync(path.join(output,'checks.json'),JSON.stringify({schema_version:1,checked_at:new Date().toISOString(),client:'Node.js anonymous GET client, ordinary public nav WBI key discovery; no browser cookies or account credentials',source_video_case:sample,requests_with_navigation:observations.length,observations,cases,scope:'Single reviewed public input per read endpoint; signature/risk/login errors are preserved, no retry or anti-risk workaround. Only the listed business fields are asserted, not all edge cases or authenticated behavior.'},null,2)+'\n');
console.log(JSON.stringify({cases:cases.length,requests:observations.length,outcomes:cases.reduce((m,c)=>(m[c.outcome]=(m[c.outcome]||0)+1,m),{})}));
