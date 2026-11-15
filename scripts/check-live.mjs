import{sanitizePublicEvidence}from'../src/public-evidence.mjs';
﻿import fs from 'node:fs';
import {readJson} from '../src/catalog.mjs';
import {LIVE_PLAN,planUrl,evaluateLiveResponse} from '../src/live-checks.mjs';
const args=process.argv.slice(2);if(args[0]!=='--run')throw Error('Use --run [--uid UID] [--room-id ROOM]');const explicit={};for(let i=1;i<args.length;i+=2){if(!['--uid','--room-id'].includes(args[i])||!args[i+1])throw Error('Invalid input');explicit[args[i]==='--uid'?'vmid':'room_id']=args[i+1];}
const http=readJson('catalog/android/com.bilibili.app.in/play/6.8.0/http.json'),observations=[];
for(const plan of LIVE_PLAN) {
 if((plan.required_params||[]).some(k=>!explicit[k])){observations.push({endpoint_id:plan.endpoint_id,outcome:'not-executed-missing-input',input_parameter_names:plan.required_params});continue;}
 const url=planUrl(plan,http.endpoints,explicit),started_at=new Date().toISOString();
 const base={observation_id:plan.name+':'+started_at,endpoint_id:plan.endpoint_id,started_at,purpose:plan.purpose,method:'GET',url:url.href,authentication:'none',client:'bili-apis-research/0.0.0 (anonymous static-catalog check)',timeout_ms:15000,max_response_bytes:524288,assertion:'HTTP 2xx + numeric code=0 + nonempty object/array data; no complete response-schema or pagination assertion'};
 let result;
 try {
  const response=await fetch(url,{method:'GET',headers:{'User-Agent':base.client,Accept:'application/json'},redirect:'manual',signal:AbortSignal.timeout(base.timeout_ms)});
  const reader=response.body?.getReader(),chunks=[];let size=0;
  if(reader)for(;;){const {done,value}=await reader.read();if(done)break;size+=value.length;if(size>base.max_response_bytes){await reader.cancel();throw Object.assign(Error('Response too large'),{code:'RESPONSE_SIZE_LIMIT'});}chunks.push(value);}
  result=evaluateLiveResponse(response.status,Buffer.concat(chunks));
 }catch(error){result={outcome:'transport-error',error_name:String(error.name).slice(0,80),error_code:String(error.cause?.code||error.code||'UNSPECIFIED').slice(0,80),http_status:null,business_code:null};}
 const observation={...base,...result,finished_at:new Date().toISOString()};observations.push(observation);
 console.log(JSON.stringify({name:plan.name,http_status:observation.http_status,business_code:observation.business_code,outcome:observation.outcome,error_code:observation.error_code}));
}
fs.writeFileSync('evidence/live-checks.json',JSON.stringify(sanitizePublicEvidence({schema_version:1,scope:'Six anonymous HTTPS GET samples from pinned APK declarations; no app signing, login, runtime capture, writes, retries or redirect following. A success establishes only minimal JSON shape for this one request.',source_artifact_sha256:http.artifact.sha256,observations}),null,2)+'\n');
