import fs from 'node:fs';
import {readJson} from '../src/catalog.mjs';
import {LIVE_PLAN,planUrl,evaluateLiveResponse} from '../src/live-checks.mjs';
if(process.argv.length!==3||process.argv[2]!=='--run')throw Error('Use --run to send the six anonymous GET requests');
const http=readJson('catalog/http.json'),observations=[];
for(const plan of LIVE_PLAN) {
 const url=planUrl(plan,http.endpoints),started_at=new Date().toISOString();
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
fs.writeFileSync('evidence/live-checks.json',JSON.stringify({schema_version:1,scope:'Six anonymous HTTPS GET samples from pinned APK declarations; no app signing, login, runtime capture, writes, retries or redirect following. A success establishes only minimal JSON shape for this one request.',source_artifact_sha256:http.artifact.sha256,observations},null,2)+'\n');
