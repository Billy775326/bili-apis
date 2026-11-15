/** Summarize only explicitly selected anonymous HTTP validation reports. */
export function currentPcValidation(cases, specs) {
 const groups=new Map();
 for(const row of [...cases].sort((a,b)=>String(a.checked_at).localeCompare(String(b.checked_at)))){
  const spec=Object.hasOwn(specs,row.endpoint)?specs[row.endpoint]:null;if(!spec)throw Error('Unknown current validation alias: '+row.endpoint);
  const key='GET '+spec.url,previous=groups.get(key);
  if(!previous||previous.run_id!==row.run_id)groups.set(key,{method:'GET',url:spec.url,category:spec.category,aliases:[row.endpoint],run_id:row.run_id,checked_at:row.checked_at,cases:[]});
  const group=groups.get(key);if(!group.aliases.includes(row.endpoint))group.aliases.push(row.endpoint);group.cases.push(row);
 }
 const endpoints=[...groups.values()].map(group=>{
  const passed=row=>row.outcome==='anonymous-read-case-passed'&&row.http_status>=200&&row.http_status<300&&row.business_code===0&&row.observation_id&&row.checks.length>0&&row.checks.every(c=>c.passed===true);
  const outcomes=new Set(group.cases.map(row=>passed(row)?'anonymous-read-case-passed':row.outcome==='anonymous-read-case-passed'?'response-assertion-failed':row.outcome));
  const outcome=group.cases.every(passed)?'anonymous-read-case-passed':outcomes.has('risk-or-rate-response')?'risk-or-rate-response':outcomes.size===1?[...outcomes][0]:'mixed-case-results';
  return {...group,outcome};
 }).sort((a,b)=>a.category.localeCompare(b.category)||a.url.localeCompare(b.url));
 const summary={endpoints:endpoints.length,cases:cases.length,passed:endpoints.filter(e=>e.outcome==='anonymous-read-case-passed').length,outcomes:endpoints.reduce((r,e)=>(r[e.outcome]=(r[e.outcome]||0)+1,r),{})};
 return {schema_version:1,scope:'Latest explicitly selected anonymous HTTP run per method+URL; all cases for that endpoint in the selected run must pass. Older historical success is not a current pass. Empty lists establish response shape only, not content completeness.',summary,endpoints};
}
