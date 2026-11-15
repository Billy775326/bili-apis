import {createHash} from 'node:crypto';
export const PC_CATEGORIES=Object.freeze({video:'视频详情与关联内容',playback:'播放与在线人数',search:'搜索',comment:'评论与楼中楼',user:'用户与空间',relation:'关注与粉丝统计',favorite:'公开收藏夹',dynamic:'动态',live:'直播',feed:'推荐与热门',auth:'登录状态',auxiliary:'网页配置与辅助请求',other:'其他网页请求'});
export const PC_TITLES=Object.freeze({'video.detail':'视频详情及内嵌统计','video.pages':'分 P 列表','video.related':'相关视频','video.tags':'视频标签','video.detailBundle':'视频详情聚合','video.online':'在线观看人数','playback.info':'播放器与字幕信息','playback.url':'播放地址元数据','search.videos':'视频搜索','search.all':'综合搜索','search.default':'默认搜索词','comment.main':'评论主列表','comment.replies':'楼中楼回复','user.info':'公开用户资料','user.relationStats':'关注与粉丝数','user.uploads':'用户投稿列表','dynamic.hot':'热门动态','favorite.folders':'公开收藏夹列表','home.popular':'热门视频','live.roomPlayInfo':'直播间播放信息'});
export function pcEndpointId(method,url){return 'pc:'+createHash('sha256').update(method+' '+url).digest('hex').slice(0,20);}
export function pcCategory(url){
 const u=new URL(url),p=u.pathname;
 if(u.hostname==='api.live.bilibili.com')return 'live';
 if(/passport|\/nav$/.test(url))return 'auth';
 if(/gaia|finger\/spi|GenWebTicket|\/kv-frontend\/|\/web-show\/|\/vip\/ads|click-interface|\/risk\//.test(p))return 'auxiliary';
 if(/\/reply\//.test(p))return 'comment';
 if(/\/search\//.test(p)||/\/suggest$/.test(p))return 'search';
 if(/\/player\//.test(p)||/\/dm\/|\/subtitle\//.test(p))return 'playback';
 if(/\/fav\//.test(p))return 'favorite';
 if(/\/relation\//.test(p))return 'relation';
 if(/dynamic/.test(p))return 'dynamic';
 if(/\/space\//.test(p)||/web-space/.test(p))return 'user';
 if(/\/popular$|\/index\//.test(p))return 'feed';
 if(/\/view(?:\/|$)|\/archive\/|\/tag\/archive/.test(p))return 'video';
 return 'other';
}
export function pcOutcome(o){
 if(o.http_status===412||o.http_status===429||[-352,-412,-509].includes(o.business_code))return 'risk-or-rate-response';
 if(o.http_status<200||o.http_status>=300)return 'http-error';
 if(o.business_code===-101)return 'login-required-response';
 if(o.check_result?.passed)return 'anonymous-read-case-passed';
 if(o.check_result&&!o.check_result.passed)return 'response-assertion-failed';
 if(o.business_code===0)return 'business-zero-observed';
 if(typeof o.business_code==='number')return 'business-error';
 return o.body_status==='unavailable'?'body-unavailable':'non-json-or-no-business-code';
}
export function extractPcLiterals(source,parse){
 const ast=parse(source,{sourceType:'unambiguous',allowReturnOutsideFunction:true,allowAwaitOutsideFunction:true,errorRecovery:false,plugins:['jsx','importAttributes']});
 const stack=[{node:ast,parent:null}],candidates=[];let strings=0,computedTemplates=0;
 while(stack.length){
  const {node,parent}=stack.pop();if(!node||typeof node!=='object')continue;
  if(node.type==='TemplateLiteral'&&node.expressions?.length)computedTemplates++;
  if(node.type==='StringLiteral'){
   strings++;const value=node.value;
   if(typeof value==='string'&&value.length<4096&&/^(?:(?:https?:)?\/\/api(?:\.live|\.vc)?\.bilibili\.com\/|\/?(?:x|xlive|bapis|pgc)\/)/.test(value)){
    let literal,query;try{const u=/^(?:https?:)?\/\//.test(value)?new URL(value.startsWith('//')?'https:'+value:value):new URL(value.startsWith('/')?value:'/'+value,'https://placeholder.invalid');literal=u.hostname==='placeholder.invalid'?u.pathname:u.origin+u.pathname;query=[...new Set(u.searchParams.keys())].filter(k=>/^[A-Za-z0-9_-]{1,80}$/.test(k)).sort();}catch{continue;}
    let methodHint=null;if(parent?.type==='CallExpression'&&parent.arguments?.[0]===node){const callee=parent.callee;if(callee?.type==='MemberExpression'&&!callee.computed&&['get','post','put','patch','delete','head','options'].includes(callee.property?.name))methodHint=callee.property.name.toUpperCase();}
    candidates.push({literal,query_parameter_names:query,method_hint:methodHint,method_hint_scope:methodHint?'callee property name only; binding unverified':null,literal_fragment:parent?.type==='BinaryExpression',source_utf16_offset:node.start,source_byte_offset:Buffer.byteLength(source.slice(0,node.start),'utf8'),status:'pc-script-literal-candidate'});
   }
  }
  for(const [key,value]of Object.entries(node)){if(['loc','start','end','extra','comments','tokens','errors'].includes(key))continue;if(Array.isArray(value)){for(let i=value.length-1;i>=0;i--)if(value[i]&&typeof value[i]==='object')stack.push({node:value[i],parent:node});}else if(value&&typeof value==='object')stack.push({node:value,parent:node});}
 }
 return {candidates,strings_examined:strings,computed_templates_not_resolved:computedTemplates};
}
export function buildPcCatalog({observations,aliases,sources,coverage,candidateCount}){
 const map=new Map();
 for(const o of observations){
  if(o.method==='OPTIONS')continue;
  const id=pcEndpointId(o.method,o.url);let e=map.get(id);
  if(!e){const matched=Object.entries(aliases).filter(([,s])=>s.url===o.url&&o.method==='GET');e={id,url:o.url,method:o.method,category:matched[0]?.[1].category||pcCategory(o.url),title:PC_TITLES[matched[0]?.[0]]||new URL(o.url).pathname,aliases:matched.map(([name])=>name),browser_observed:false,query_parameter_names:[],post_parameter_names:[],response_data_fields:[],observations:[],verification:{anonymous_case_passed:false,browser_case_passed:false,http_case_passed:false,failed_assertions:false,risk_response:false,login_response:false,wbi_query_observed:false}};map.set(id,e);}
  e.browser_observed ||= o.context==='browser';
  for(const key of ['query_parameter_names','post_parameter_names'])e[key]=[...new Set([...e[key],...(o[key]||[])])].sort();
  e.response_data_fields=[...new Set([...e.response_data_fields,...(o.data_keys||[])])].sort();e.observations.push(o.id);
  e.verification.anonymous_case_passed ||= o.outcome==='anonymous-read-case-passed';
  e.verification.browser_case_passed ||= o.context==='browser'&&o.outcome==='anonymous-read-case-passed';
  e.verification.http_case_passed ||= o.context==='http-client'&&o.outcome==='anonymous-read-case-passed';
  e.verification.failed_assertions ||= o.outcome==='response-assertion-failed';
  e.verification.risk_response ||= o.outcome==='risk-or-rate-response';e.verification.login_response ||= o.outcome==='login-required-response';
  e.verification.wbi_query_observed ||= (o.query_parameter_names||[]).includes('w_rid');
 }
 const endpoints=[...map.values()].sort((a,b)=>a.category.localeCompare(b.category)||a.url.localeCompare(b.url)||a.method.localeCompare(b.method));
 return {schema_version:1,scope:'Bilibili PC websites and reviewed desktop HTTP GET probes only. No APK declarations are imported. A passed case covers its recorded input and field assertions, not every account role, page or future server version.',categories:PC_CATEGORIES,summary:{endpoints:endpoints.length,browser_observed:endpoints.filter(e=>e.browser_observed).length,anonymous_case_passed:endpoints.filter(e=>e.verification.anonymous_case_passed).length,browser_case_passed:endpoints.filter(e=>e.verification.browser_case_passed).length,http_case_passed:endpoints.filter(e=>e.verification.http_case_passed).length,with_risk_response:endpoints.filter(e=>e.verification.risk_response).length,with_failed_assertions:endpoints.filter(e=>e.verification.failed_assertions).length,pc_script_literal_candidates:candidateCount},sources,coverage,endpoints,observations};
}
