import {sanitizePublicEvidence} from '../src/public-evidence.mjs';
﻿import fs from 'node:fs';
import path from 'node:path';
import {parse} from '@babel/parser';
import {extractPcLiterals,buildPcCatalog,pcOutcome,PC_TITLES} from '../src/pc-catalog.mjs';
import {currentPcValidation} from '../src/pc-validation.mjs';
import {WEB_READ_ENDPOINTS} from '../src/web-client.mjs';
import {checkPcCase} from '../src/pc-cases.mjs';
import {sha256,safePcUrl} from '../src/pc-capture.mjs';
const args=process.argv.slice(2),captures=[],checkFiles=[],currentFiles=new Set();for(let i=0;i<args.length;i+=2){if(!args[i+1])throw Error('Missing input path');if(args[i]==='--capture')captures.push(args[i+1]);else if(args[i]==='--checks')checkFiles.push(args[i+1]);else if(args[i]==='--current-checks'){checkFiles.push(args[i+1]);currentFiles.add(args[i+1]);}else throw Error('Use --capture FILE and --checks FILE');}if(!captures.length||!checkFiles.length)throw Error('Desktop captures and HTTP check reports are required');
const read=file=>JSON.parse(fs.readFileSync(file,'utf8').replace(/^\uFEFF/,''));
function body(record){if(!record.local_body_file)return null;const bytes=fs.readFileSync(record.local_body_file);if(sha256(bytes)!==record.body_sha256)throw Error('Response body provenance mismatch');try{return JSON.parse(bytes);}catch{return null;}}
const observations=[],sources=[],scan=[],literalRows=[],seenAssets=new Set(),runs=[];
for(const file of captures){
 const raw=fs.readFileSync(file),run=read(file),runId='desktop:'+sha256(raw).slice(0,16);runs.push({id:runId,kind:'desktop-browser',sha256:sha256(raw),started_at:run.started_at,finished_at:run.finished_at,browser:run.browser,pages:run.pages.map(p=>({id:p.id,url:p.url,title:p.title,body_text_length:p.body_text_length,inspection_error:p.inspection_error||null})),diagnostics:run.diagnostics,partial:!!run.partial,termination_error:run.termination_error||null});
 for(const [index,o]of run.observations.entries()){
  let checked=null;const data=body(o);const alias=Object.entries(WEB_READ_ENDPOINTS).find(([,s])=>s.url===o.url&&o.method==='GET');if(alias&&data&&data.code===0&&alias[1].required.every(k=>Object.hasOwn(o.public_input||{},k))){checked=checkPcCase(alias[0],data,o.public_input||{});}
  const {local_body_file,requestId,...safe}=o;const row={...safe,id:runId+':'+index,context:'browser',run_id:runId,check_result:checked};row.outcome=pcOutcome(row);observations.push(row);
 }
 for(const a of run.assets){
  if(seenAssets.has(a.sha256))continue;seenAssets.add(a.sha256);const bytes=fs.readFileSync(a.local_file);if(sha256(bytes)!==a.sha256||bytes.length!==a.size)throw Error('网页 script provenance mismatch');const source={url:a.url,sha256:a.sha256,bytes:a.size,kind:'served-pc-frontend-script'};sources.push(source);
  if(a.size>6*1024*1024){scan.push({...source,status:'source-budget-skip'});continue;}
  try{const result=extractPcLiterals(bytes.toString('utf8'),parse);scan.push({...source,status:'parsed',strings_examined:result.strings_examined,computed_templates_not_resolved:result.computed_templates_not_resolved,literal_candidates:result.candidates.length});literalRows.push(...result.candidates.map(c=>({...c,source_url:a.url,source_sha256:a.sha256})));}catch(e){scan.push({...source,status:'parse-error',error_name:e.name});}
  if(scan.length%20===0)console.log(JSON.stringify({pc_sources_processed:scan.length,literal_observations:literalRows.length}));
 }
}
const caseRows=[],currentRows=[];
for(const file of checkFiles){
 const raw=fs.readFileSync(file),run=read(file),runId='http:'+sha256(raw).slice(0,16);runs.push({id:runId,kind:'anonymous-desktop-http',sha256:sha256(raw),checked_at:run.checked_at,scope:run.scope});
 const validatedCases=run.cases.map(c=>{const observed=run.observations.find(o=>o.id===c.observation_id);if(!observed||observed.business_code!==0||!Object.hasOwn(WEB_READ_ENDPOINTS,c.endpoint))return c;const json=body(observed);if(!json)return c;const current=checkPcCase(c.endpoint,json,c.input||{}),merged=new Map((c.checks||[]).map(x=>[x.name,{...x}]));for(const check of current.checks){const old=merged.get(check.name);merged.set(check.name,{...check,passed:check.passed&&(old?old.passed:true)});}const checks=[...merged.values()];return {...c,checks,outcome:checks.every(x=>x.passed)?'anonymous-read-case-passed':'response-assertion-failed'};});
 const checkedByObservation=new Map(validatedCases.filter(c=>c.observation_id).map(c=>[c.observation_id,c]));
 for(const c of validatedCases){const caseRow={run_id:runId,checked_at:run.checked_at,started_at:c.started_at||null,endpoint:c.endpoint,observation_id:c.observation_id?runId+':'+run.observations.findIndex(o=>o.id===c.observation_id):null,http_status:c.http_status??run.observations.find(o=>o.id===c.observation_id)?.http_status??null,business_code:c.business_code??run.observations.find(o=>o.id===c.observation_id)?.business_code??null,input_parameter_names:Object.keys(c.input||{}).sort(),public_input:safePcUrl('https://api.bilibili.com/?'+new URLSearchParams(Object.entries(c.input||{}).map(([k,v])=>[k,String(v)]))).public_input,outcome:c.outcome,reason:c.reason||null,checks:c.checks||[]};caseRows.push(caseRow);if(currentFiles.has(file))currentRows.push(caseRow);}
 for(const [index,o]of run.observations.entries()){
  body(o);const c=checkedByObservation.get(o.id);const {local_body_file,...safe}=o;
  const row={...safe,id:runId+':'+index,context:'http-client',run_id:runId,public_input:c?safePcUrl('https://api.bilibili.com/?'+new URLSearchParams(Object.entries(c.input||{}).map(([k,v])=>[k,String(v)]))).public_input:{},query_parameter_names:o.request_parameter_names||(c?Object.keys(c.input||{}).sort():[]),parameter_names_basis:o.request_parameter_names?'names captured from the actual client request URL; values omitted':'explicit case input only; automatic fields were not retained in this historical capture',check_result:c?.checks?.length?{passed:c.outcome==='anonymous-read-case-passed',checks:c.checks}:null};row.outcome=pcOutcome(row);observations.push(row);
 }
}
const grouped=new Map();for(const c of literalRows){let row=grouped.get(c.literal);if(!row){row={literal:c.literal,category:'unreviewed',status:'pc-script-literal-candidate',sources:[]};grouped.set(c.literal,row);}row.sources.push(c);}
const coverage={runs,script_scan:scan,limitations:['Static string literals are candidates, not confirmed callable APIs; bindings, URL composition and server contracts are not recovered by this scan.','Only listed desktop pages and public inputs were exercised. Login, writes, account roles, complete pagination and future versions are not covered.','Original frontend bodies, responses, browser state, signatures and cookies stay outside Git. Response hashes identify decoded CDP/fetch entity bodies, not compressed network packets.']};
const catalog=buildPcCatalog({observations,aliases:WEB_READ_ENDPOINTS,sources,coverage,candidateCount:grouped.size});
const current=currentPcValidation(currentRows,WEB_READ_ENDPOINTS);
for(const endpoint of catalog.endpoints){const row=current.endpoints.find(r=>r.method===endpoint.method&&r.url===endpoint.url);endpoint.verification.current_http_outcome=row?.outcome||'not-selected';endpoint.verification.current_http_checked_at=row?.checked_at||null;}
catalog.summary.current_http_selected=current.summary.endpoints;catalog.summary.current_http_passed=current.summary.passed;
fs.writeFileSync('evidence/pc-current-validation.json',JSON.stringify(sanitizePublicEvidence(current),null,2)+'\n');
fs.writeFileSync('catalog/pc-web.json',JSON.stringify(sanitizePublicEvidence(catalog),null,2)+'\n');fs.writeFileSync('catalog/pc-candidates.json',JSON.stringify({schema_version:1,scope:coverage.limitations[0],candidates:[...grouped.values()].sort((a,b)=>a.literal.localeCompare(b.literal)),coverage:{assets:sources.length,parsed:scan.filter(s=>s.status==='parsed').length,skipped:scan.filter(s=>s.status==='source-budget-skip').length,errors:scan.filter(s=>s.status==='parse-error').length}},null,2)+'\n');
fs.writeFileSync('evidence/pc-http-checks.json',JSON.stringify(sanitizePublicEvidence({schema_version:1,scope:'Reviewed anonymous desktop HTTP cases. All request input values are redacted after assertions; hashes and failures are retained.',runs:caseRows}),null,2)+'\n');console.log(JSON.stringify(catalog.summary));
