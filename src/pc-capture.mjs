import fs from 'node:fs';
import path from 'node:path';
import {spawn} from 'node:child_process';
import {createHash} from 'node:crypto';
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
export const sha256=b=>createHash('sha256').update(b).digest('hex');
const API_HOSTS=new Set(['api.bilibili.com','api.live.bilibili.com','s.search.bilibili.com','api.vc.bilibili.com','passport.bilibili.com']);
export function safePcUrl(value) {
 const u=new URL(value);if(!['https:','http:'].includes(u.protocol)||u.username||u.password)throw Error('Unexpected URL');
 const allowed=new Set(['bvid','aid','avid','cid','mid','vmid','host_mid','oid','type','pn','ps','page','page_size','keyword','search_type','order','qn','fnval','mode','plat','room_id','tid','rid','up_mid','root','web_location']);
 return {url:u.origin+u.pathname,query_parameter_names:[...new Set(u.searchParams.keys())].sort(),public_input:Object.fromEntries([...u.searchParams].filter(([k,v])=>allowed.has(k)&&v.length<=100))};
}
export function summarizePcJson(json) {
 const object=json!==null&&typeof json==='object'&&!Array.isArray(json);
 const data=object?json.data:undefined;
 const code=object&&typeof json.code==='number'&&Number.isFinite(json.code)?json.code:null;
 const dataType=Array.isArray(data)?'array':data===null?'null':typeof data;
 const summary={business_code:code,data_type:dataType,data_keys:data!==null&&typeof data==='object'&&!Array.isArray(data)?Object.keys(data).filter(k=>/^[A-Za-z0-9_-]{1,80}$/.test(k)).sort():[],top_level_keys:object?Object.keys(json).filter(k=>/^[A-Za-z0-9_-]{1,80}$/.test(k)).sort():[],array_fields:[]};
 if(Array.isArray(data))summary.data_array_length=data.length;
 if(data&&typeof data==='object'&&!Array.isArray(data))for(const [k,v]of Object.entries(data))if(Array.isArray(v))summary.array_fields.push({name:k,length:v.length,first_item_keys:v[0]&&typeof v[0]==='object'&&!Array.isArray(v[0])?Object.keys(v[0]).filter(k=>/^[A-Za-z0-9_-]{1,80}$/.test(k)).sort():[]});
 return summary;
}
class Cdp {
 constructor(url){this.ws=new WebSocket(url);this.id=0;this.pending=new Map();this.listeners=[];this.ws.addEventListener('message',e=>{const v=JSON.parse(e.data);if(v.id){const p=this.pending.get(v.id);if(p){clearTimeout(p.timer);this.pending.delete(v.id);v.error?p.reject(Error(v.error.message)):p.resolve(v.result);}}else for(const f of this.listeners)f(v);});this.ws.addEventListener('close',()=>{for(const p of this.pending.values()){clearTimeout(p.timer);p.reject(Error('Browser connection closed'));}this.pending.clear();});}
 async ready(){if(this.ws.readyState===1)return;await new Promise((ok,no)=>{this.ws.addEventListener('open',ok,{once:true});this.ws.addEventListener('error',no,{once:true});});}
 call(method,params={},sessionId){return new Promise((resolve,reject)=>{const id=++this.id;const timer=setTimeout(()=>{this.pending.delete(id);reject(Error('CDP timeout: '+method));},15000);this.pending.set(id,{resolve,reject,timer});this.ws.send(JSON.stringify({id,method,params,...(sessionId?{sessionId}:{})}));});}
}
export async function capturePcPages({chromePath,outputDir,waitMs=12000,onProgress=()=>{},pagePlan=null}) {
 fs.mkdirSync(outputDir,{recursive:true});const profile=fs.mkdtempSync(path.join(outputDir,'browser-profile-'));
 const child=spawn(chromePath,['--headless=new','--remote-debugging-address=127.0.0.1','--remote-debugging-port=0','--user-data-dir='+path.resolve(profile),'--no-first-run','--no-default-browser-check','--window-size=1440,1000','about:blank'],{windowsHide:true,stdio:'ignore'});child.unref();
 let cdp,partialSnapshot;const started=new Date().toISOString();
 try {
  let port;for(let i=0;i<80;i++){const file=path.join(profile,'DevToolsActivePort');if(fs.existsSync(file)){port=Number(fs.readFileSync(file,'utf8').split('\n')[0]);break;}await sleep(250);}if(!port)throw Error('Isolated Chrome did not start');
  const version=await(await fetch('http://127.0.0.1:'+port+'/json/version',{signal:AbortSignal.timeout(10000)})).json();cdp=new Cdp(version.webSocketDebuggerUrl);await cdp.ready();
  const {targetId}=await cdp.call('Target.createTarget',{url:'about:blank'});const {sessionId}=await cdp.call('Target.attachToTarget',{targetId,flatten:true});
  const records=new Map(),observations=[],assets=[],diagnostics=[],pages=[],tasks=new Set();let stage='initial',bodyBytes=0,lastDocumentUrl='about:blank';
  partialSnapshot=()=>({schema_version:1,started_at:started,finished_at:new Date().toISOString(),browser:version.Browser,user_agent:version['User-Agent'],profile:'new isolated anonymous browser profile',pages,observations,assets:[...new Map(assets.map(a=>[a.sha256,a])).values()],diagnostics,partial:true});
  fs.mkdirSync(path.join(outputDir,'bodies'),{recursive:true});
  cdp.listeners.push(event=>{
   if(event.sessionId!==sessionId)return;const p=event.params;
   if(event.method==='Page.frameNavigated'&&!p.frame.parentId){lastDocumentUrl=p.frame.url;}
   if(event.method==='Network.requestWillBeSent'){
    let url;try{url=new URL(p.request.url);}catch{return;}
    if(!['https:','http:'].includes(url.protocol)||(!API_HOSTS.has(url.hostname)&&p.type!=='Script'))return;
    let safeUrl;try{safeUrl=safePcUrl(p.request.url);}catch{diagnostics.push({stage,kind:'unsupported-url-redacted'});return;}
    records.set(p.requestId,{requestId:p.requestId,stage,observed_at:new Date().toISOString(),...safeUrl,method:p.request.method,request_header_names:Object.keys(p.request.headers).map(k=>k.toLowerCase()).sort(),resource_type:p.type,post_parameter_names:[],redirected:!!p.redirectResponse});
    if(p.request.postData){try{const j=JSON.parse(p.request.postData);if(j&&typeof j==='object'&&!Array.isArray(j))records.get(p.requestId).post_parameter_names=Object.keys(j).filter(k=>/^[A-Za-z0-9_-]{1,80}$/.test(k)).sort();}catch{records.get(p.requestId).post_parameter_names=[...new Set(new URLSearchParams(p.request.postData).keys())].filter(k=>/^[A-Za-z0-9_-]{1,80}$/.test(k)).sort();}}
   }else if(event.method==='Network.responseReceived'){
    const r=records.get(p.requestId);if(!r)return;r.http_status=p.response.status;r.protocol=p.response.protocol;r.mime_type=p.response.mimeType;
   }else if(event.method==='Network.loadingFailed'){
    const r=records.get(p.requestId);if(r)diagnostics.push({stage:r.stage,url:r.url,method:r.method,kind:'network-loading-failed',error:p.errorText});
   }else if(event.method==='Network.loadingFinished'){
    const r=records.get(p.requestId);if(!r)return;
    const task=(async()=>{
     const api=API_HOSTS.has(new URL(r.url).hostname)&&r.resource_type!=='Preflight';
     const script=r.resource_type==='Script'&&/(?:^|\.)hdslb\.com$|(?:^|\.)bilibili\.com$/.test(new URL(r.url).hostname);
     if(!api&&!script)return;
     if(p.encodedDataLength>6*1024*1024||bodyBytes>160*1024*1024){diagnostics.push({stage:r.stage,url:r.url,kind:'body-budget-skip'});return;}
     let response;try{response=await cdp.call('Network.getResponseBody',{requestId:p.requestId},sessionId);}catch{diagnostics.push({stage:r.stage,url:r.url,kind:'response-body-unavailable'});if(api)observations.push({...r,body_status:'unavailable'});return;}
     const bytes=response.base64Encoded?Buffer.from(response.body,'base64'):Buffer.from(response.body,'utf8');if(bytes.length>12*1024*1024){diagnostics.push({stage:r.stage,url:r.url,kind:'decoded-body-budget-skip'});return;}bodyBytes+=bytes.length;
     const hash=sha256(bytes),file=path.join(outputDir,'bodies',hash+(script?'.js':'.json'));if(!fs.existsSync(file))fs.writeFileSync(file,bytes);
     if(script)assets.push({url:r.url,sha256:hash,size:bytes.length,stage:r.stage,local_file:file});
     if(api){let summary;try{summary=summarizePcJson(JSON.parse(bytes));}catch{summary={business_code:null,data_type:'non-json'};}
      observations.push({...r,...summary,body_status:'captured',body_bytes:bytes.length,body_sha256:hash,local_body_file:file});}
    })().catch(e=>diagnostics.push({stage:r.stage,url:r.url,kind:'capture-error',error:e.message}));tasks.add(task);task.finally(()=>tasks.delete(task));
   }
  });
  await cdp.call('Page.enable',{},sessionId);await cdp.call('Runtime.enable',{},sessionId);await cdp.call('Network.enable',{maxTotalBufferSize:64*1024*1024,maxResourceBufferSize:12*1024*1024},sessionId);
  const evaluate=async expression=>{const v=await cdp.call('Runtime.evaluate',{expression,returnByValue:true},sessionId);if(v.exceptionDetails)throw Error('Browser evaluation failed');return v.result.value;};
  const inspectExpression='('+(()=>({url:location.origin+location.pathname,title:document.title,links:Array.from(document.querySelectorAll('a')).map(a=>a.href).filter(h=>/^https:\/\/www\.bilibili\.com\/video\/BV[A-Za-z0-9]{10}(?:\/|\?|$)/.test(h)).slice(0,5),login_prompt_visible:!!document.querySelector('.bili-mini-login-header,.login-panel'),body_text_length:document.body?.innerText.length||0})).toString()+')()';
  let video;
  const plan=[['home','https://www.bilibili.com/'],['popular','https://www.bilibili.com/v/popular/all/'],['search-all','https://search.bilibili.com/all?keyword=bilibili'],['search-videos','https://search.bilibili.com/video?keyword=bilibili'],['video',null],['space','https://space.bilibili.com/[REQUIRED_USER]'],['dynamic','https://t.bilibili.com/'],['live','https://live.bilibili.com/[REQUIRED_ROOM]']];
  for(const [id,url]of (pagePlan||plan)){
   stage=id;const target=url||(video?'https://www.bilibili.com/video/'+video+'/':null);if(!target){diagnostics.push({stage:id,kind:'no-public-video-from-home'});continue;}
   const pageStarted=new Date().toISOString();await cdp.call('Page.navigate',{url:target},sessionId);await sleep(waitMs);
   if(id==='home'||id==='video'||id==='ordinary-video'){try{await evaluate('window.scrollTo(0,900)');}catch(error){diagnostics.push({stage:id,kind:'scroll-evaluation-failed',error:error.message});}await sleep(3000);}
   let page;try{page=await evaluate(inspectExpression);}catch(error){let url;try{url=safePcUrl(lastDocumentUrl).url;}catch{url=safePcUrl(target).url;}page={url,title:null,links:[],login_prompt_visible:null,body_text_length:null,inspection_error:error.message};diagnostics.push({stage:id,kind:'document-inspection-failed',error:error.message});}if(id==='home')video=page.links.map(h=>new URL(h).pathname.match(/^\/video\/(BV[A-Za-z0-9]{10})/)).find(Boolean)?.[1];
   await Promise.allSettled([...tasks]);pages.push({id,requested_url:safePcUrl(target),started_at:pageStarted,checked_at:new Date().toISOString(),...page});
   fs.writeFileSync(path.join(outputDir,'capture.json'),JSON.stringify(partialSnapshot(),null,2)+'\n');
   onProgress({stage:id,document_url:page.url,api_observations:observations.length,script_assets:assets.length});
  }
  await Promise.allSettled([...tasks]);
  const report={schema_version:1,started_at:started,finished_at:new Date().toISOString(),browser:version.Browser,user_agent:version['User-Agent'],profile:'new isolated anonymous browser profile',pages,observations,assets:[...new Map(assets.map(a=>[a.sha256,a])).values()],diagnostics,scope:'Website-initiated network observations in desktop Chrome. No existing browser profile, account login, user interaction writes or arbitrary endpoint fan-out. Query values are restricted to reviewed public input names; cookies, signatures and auth headers are not retained in the report.'};
  fs.writeFileSync(path.join(outputDir,'capture.json'),JSON.stringify(report,null,2)+'\n');return report;
 }catch(error){if(partialSnapshot)fs.writeFileSync(path.join(outputDir,'capture.json'),JSON.stringify({...partialSnapshot(),termination_error:error.message},null,2)+'\n');throw error;}finally{if(cdp){await cdp.call('Browser.close').catch(()=>{});cdp.ws.close();}if(child.exitCode===null)child.kill();}
}
