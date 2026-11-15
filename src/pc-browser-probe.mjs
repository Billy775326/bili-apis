/** Executes one reviewed GET inside the user's isolated browser. No cookies or body values leave it. */
export async function probePcBrowser(request,caseCheck,extraCheck,summarize,wireInspect,fetchImpl=fetch){
 const target=new URL(request.url);if(request.method!=='GET'||target.protocol!=='https:'||!['api.bilibili.com','api.live.bilibili.com','passport.bilibili.com'].includes(target.hostname)||target.username||target.password||target.port)throw Error('Unreviewed probe target');
 const started_at=new Date().toISOString();
 try{
  const response=await fetchImpl(target.href,{method:'GET',credentials:'include',redirect:'manual',signal:AbortSignal.timeout(15000)});
  const reader=response.body?.getReader(),chunks=[];let size=0;if(reader)for(;;){const r=await reader.read();if(r.done)break;size+=r.value.length;if(size>4194304){await reader.cancel();return{started_at,http_status:response.status,outcome:'response-size-limit'};}chunks.push(r.value);}
  const bytes=new Uint8Array(size);let at=0;for(const b of chunks){bytes.set(b,at);at+=b.length;}
  const digest=[...new Uint8Array(await crypto.subtle.digest('SHA-256',bytes))].map(n=>n.toString(16).padStart(2,'0')).join('');
  const base={started_at,http_status:response.status,body_bytes:size,body_sha256:digest,request_parameter_names:[...target.searchParams.keys()].sort()};
  let json;try{json=JSON.parse(new TextDecoder().decode(bytes));}catch{
   if(request.schema_fields&&response.status>=200&&response.status<300){try{const wire=wireInspect(bytes);const expected=new Map(request.schema_fields.map(f=>[f.id,f]));const checks=[{name:'nonempty-protobuf',passed:wire.total_fields>0},{name:'known-root-field-present',passed:Object.keys(wire.fields).some(k=>expected.has(Number(k)))},{name:'known-field-wire-types',passed:Object.entries(wire.fields).every(([id,row])=>{const f=expected.get(Number(id));if(!f)return true;const scalar=['int32','int64','uint32','uint64','sint32','sint64','bool'];const want=scalar.includes(f.type)?0:f.type==='double'||f.type==='fixed64'?1:f.type==='float'||f.type==='fixed32'?5:2;return row.wire_types.every(n=>n===want);})}];return{...base,business_code:null,data_type:'protobuf',wire,checks,outcome:checks.every(c=>c.passed)?'protobuf-structure-passed':'response-assertion-failed'};}catch{return{...base,business_code:null,data_type:'binary',outcome:'protobuf-parse-failed'};}}
   return{...base,business_code:null,data_type:'non-json',outcome:response.status===412||response.status===429?'risk-or-rate-response':'non-json-or-http-error'};
  }
  const summary=summarize(json),safeKey=k=>!/^(?:[0-9]{5,}|[a-f0-9]{16,})$/i.test(k);summary.data_keys=summary.data_keys.filter(safeKey);summary.top_level_keys=summary.top_level_keys.filter(safeKey);for(const row of summary.array_fields)row.first_item_keys=row.first_item_keys.filter(safeKey);
  const code=typeof json?.code==='number'?json.code:null;let check={passed:false,checks:[]};if(response.status>=200&&response.status<300&&code===0)check=request.alias?caseCheck(request.alias,json,request.input):extraCheck(request.path,json,request.input);
  const outcome=response.status===412||response.status===429||[-352,-412,-509].includes(code)?'risk-or-rate-response':response.status<200||response.status>=300?'http-error':code===-101?'login-required-response':code===null?'json-without-numeric-business-code':code!==0?'business-error':check.passed?'field-case-passed':'response-assertion-failed';
  return{...base,...summary,checks:check.checks,outcome};
 }catch(error){return{started_at,http_status:null,business_code:null,outcome:'transport-or-cors-error',error_kind:error.name};}
}
