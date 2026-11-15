import {createHash} from 'node:crypto';
export const LIVE_PLAN = [
 {name:'region-index',endpoint_id:'classes30.dex:32464:GET',params:{},purpose:'公开分区列表'},
 {name:'emote-search',endpoint_id:'classes11.dex:63095:GET',params:{business:'reply',name:'bilibili',ps:'1',pn:'1'},purpose:'表情搜索'},
 {name:'search-channel',endpoint_id:'classes18.dex:28874:GET',params:{keyword:'bilibili',pn:'1',ps:'1'},purpose:'搜索频道样本'},
 {name:'public-space',endpoint_id:'classes11.dex:32804:GET',params:{ps:'1',order:'pubdate',sort:'0'},required_params:['vmid'],purpose:'公开用户空间作品样本'},
 {name:'live-room-brief',endpoint_id:'classes.dex:53424:GET',params:{},required_params:['room_id'],purpose:'公开直播间状态样本'},
 {name:'history-anonymous',endpoint_id:'classes15.dex:18407:GET',params:{},purpose:'匿名历史记录的认证错误对照'},
];
export function planUrl(plan,endpoints,explicitInputs={}) {
 const endpoint=endpoints.find(e=>e.id===plan.endpoint_id);
 if(!endpoint||endpoint.http_method!=='GET')throw Error('Plan must match a catalog GET declaration');
 const url=new URL(endpoint.resolved_url_candidate);
 if(url.protocol!=='https:'||!['api.bilibili.com','app.bilibili.com','api.live.bilibili.com'].includes(url.hostname)||url.port||url.username||url.password||url.search||url.hash)throw Error('Unexpected plan URL');
 const params={...plan.params};for(const name of plan.required_params||[]){const value=explicitInputs[name];if(typeof value!=='string'||!/^[1-9]\d*$/.test(value))throw Error('Explicit authorized resource input required');params[name]=value;}
 for(const [key,value] of Object.entries(params))url.searchParams.set(key,value);
 return url;
}
export function evaluateLiveResponse(status,body) {
 const result={http_status:status,response_bytes:body.length,response_sha256:createHash('sha256').update(body).digest('hex'),business_code:null,json_object:false,data_type:null,data_keys:[],minimal_data_shape:false};
 let json;
 try {json=JSON.parse(body.toString('utf8'));}catch {return {...result,outcome:status<200||status>=300?'http-error':'unexpected-response'};}
 result.json_object=json!==null&&typeof json==='object'&&!Array.isArray(json);
 if(result.json_object) {
  result.business_code=typeof json.code==='number'&&Number.isFinite(json.code)?json.code:null;
  result.data_type=Array.isArray(json.data)?'array':json.data===null?'null':typeof json.data;
  if(json.data!==null&&typeof json.data==='object') {
   result.data_keys=Array.isArray(json.data)?[]:Object.keys(json.data).filter(k=>/^[a-zA-Z0-9_-]{1,80}$/.test(k)).sort().slice(0,40);
   result.minimal_data_shape=Array.isArray(json.data)?json.data.length>0:Object.keys(json.data).length>0;
  }
 }
 return {...result,outcome:status<200||status>=300?'http-error':result.business_code!==null&&result.business_code!==0?'business-error':result.business_code===0&&result.minimal_data_shape?'business-success':'unexpected-response'};
}
