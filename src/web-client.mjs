import {signWbi,wbiKeysFromNav} from './wbi.mjs';
const api='https://api.bilibili.com';
export const WEB_READ_ENDPOINTS=Object.freeze({
 'video.detail':{category:'video',url:api+'/x/web-interface/view',required:['bvid']},
 'video.pages':{category:'video',url:api+'/x/player/pagelist',required:['bvid']},
 'video.related':{category:'video',url:api+'/x/web-interface/archive/related',required:['bvid']},
 'video.tags':{category:'video',url:api+'/x/tag/archive/tags',required:['bvid']},
 'video.detailBundle':{category:'video',url:api+'/x/web-interface/wbi/view/detail',required:['aid'],wbi:true},
 'video.online':{category:'playback',url:api+'/x/player/online/total',required:['aid','cid']},
 'playback.info':{category:'playback',url:api+'/x/player/wbi/v2',required:['aid','cid'],wbi:true},
 'playback.url':{category:'playback',url:api+'/x/player/wbi/playurl',required:['bvid','cid'],defaults:{qn:32,fnval:16},wbi:true},
 'search.videos':{category:'search',url:api+'/x/web-interface/wbi/search/type',required:['keyword'],defaults:{search_type:'video',page:1},wbi:true},
 'search.all':{category:'search',url:api+'/x/web-interface/wbi/search/all/v2',required:['keyword'],defaults:{page:1},wbi:true},
 'search.default':{category:'search',url:api+'/x/web-interface/wbi/search/default',required:[],wbi:true},
 'comment.main':{category:'comment',url:api+'/x/v2/reply/wbi/main',required:['oid'],defaults:{type:1,mode:3,pagination_str:'{"offset":""}',plat:1,web_location:1315875},wbi:true},
 'comment.replies':{category:'comment',url:api+'/x/v2/reply/reply',required:['oid','root'],defaults:{type:1,pn:1,ps:10}},
 'user.info':{category:'user',url:api+'/x/space/wbi/acc/info',required:['mid'],wbi:true},
 'user.relationStats':{category:'relation',url:api+'/x/relation/stat',required:['vmid']},
 'user.uploads':{category:'user',url:api+'/x/space/wbi/arc/search',required:['mid'],defaults:{pn:1,ps:25,order:'pubdate'},wbi:true},
 'dynamic.hot':{category:'dynamic',url:api+'/x/polymer/web-dynamic/v1/feed/hot',required:[],defaults:{page:1}},
 'favorite.folders':{category:'favorite',url:api+'/x/v3/fav/folder/created/list',required:['up_mid'],defaults:{pn:1,ps:20}},
 'home.popular':{category:'feed',url:api+'/x/web-interface/popular',required:[],defaults:{pn:1,ps:20}},
 'live.roomPlayInfo':{category:'live',url:'https://api.live.bilibili.com/xlive/web-room/v2/index/getRoomPlayInfo',required:['room_id'],defaults:{protocol:'0,1',format:'0,1,2',codec:'0,1',qn:0,platform:'web',ptype:8}},
 'search.suggest':{category:'search',url:api+'/x/web-interface/suggest',required:['term']},
 'comment.subject':{category:'comment',url:api+'/x/v2/reply/subject/description',required:['oid'],defaults:{type:1}},
 'user.collections':{category:'user',url:api+'/x/polymer/web-space/home/seasons_series',required:['mid'],defaults:{page_num:1,page_size:10}},
 'user.counters':{category:'user',url:api+'/x/space/navnum',required:['mid']},
 'user.notice':{category:'user',url:api+'/x/space/notice',required:['mid']},
 'user.masterpieces':{category:'user',url:api+'/x/space/masterpiece',required:['vmid']},
 'user.followedBangumi':{category:'user',url:api+'/x/space/bangumi/follow/list',required:['vmid'],defaults:{type:1},wbi:true},
 'user.games':{category:'user',url:api+'/x/space/lastplaygame/v2',required:['mid'],wbi:true},
 'user.articles':{category:'user',url:api+'/x/space/wbi/article',required:['mid'],defaults:{pn:1,ps:10},wbi:true},
 'user.settings':{category:'user',url:api+'/x/space/setting',required:['mid']},
 'live.roomBaseInfo':{category:'live',url:'https://api.live.bilibili.com/xlive/web-room/v1/index/getRoomBaseInfo',required:['room_ids'],defaults:{req_biz:'web_room_componet'}},
 'live.recommendations':{category:'live',url:'https://api.live.bilibili.com/xlive/web-interface/v1/webMain/getMoreRecList',required:[],defaults:{platform:'web'}},
 'live.roomInfo':{category:'live',url:'https://api.live.bilibili.com/xlive/web-room/v1/index/getInfoByRoom',required:['room_id'],wbi:true},
 'dynamic.banner':{category:'dynamic',url:api+'/x/dynamic/feed/dyn/banner',required:[]},
 'home.ogv':{category:'feed',url:api+'/x/web-interface/index/ogv/rcmd',required:[],defaults:{season_type:1,request_cnt:5,brush:0,fresh_type:0}},
 'home.recommendations':{category:'feed',url:api+'/x/web-interface/wbi/index/top/feed/rcmd',required:[],defaults:{ps:3},wbi:true},
 'note.publicList':{category:'other',url:api+'/x/note/publish/list/archive',required:['oid'],defaults:{oid_type:0,pn:1,ps:3}},
 'note.availability':{category:'other',url:api+'/x/note/is_forbid',required:['aid']},
 'playback.broadcastServers':{category:'playback',url:api+'/x/web-interface/broadcast/servers',required:[],defaults:{platform:'web'}},
});
export class BiliWebApiError extends Error {
 constructor(endpoint,status,code,kind){super(`${endpoint}: ${kind} (HTTP ${status}, code ${code??'unknown'})`);this.name='BiliWebApiError';this.endpoint=endpoint;this.httpStatus=status;this.businessCode=code;this.kind=kind;}
}
export class BiliWebClient {
 constructor({fetchImpl=fetch,cookie='',timeoutMs=15000,userAgent='bili-apis-pc-research/0.0.0',now=()=>Date.now(),onObservation=()=>{}}={}){
  if(!Number.isSafeInteger(timeoutMs)||timeoutMs<1||timeoutMs>120000)throw Error('timeoutMs must be 1..120000');
  if(typeof cookie!=='string'||/[\r\n]/.test(cookie))throw Error('Cookie must be a single-line string');
  this.fetchImpl=fetchImpl;this.cookie=cookie;this.timeoutMs=timeoutMs;this.userAgent=userAgent;this.now=now;this.onObservation=onObservation;this.keys=null;
 }
 async requestJson(url,endpoint,{allowNavError=false}={}){
  const target=new URL(url);if(target.protocol!=='https:'||!['api.bilibili.com','api.live.bilibili.com'].includes(target.hostname)||target.username||target.password||target.port)throw Error('Only reviewed HTTPS Bilibili API hosts are allowed');
  const startedAt=new Date().toISOString();
  const response=await this.fetchImpl(url,{method:'GET',redirect:'manual',headers:{Accept:'application/json','User-Agent':this.userAgent,Referer:target.hostname==='api.live.bilibili.com'?'https://live.bilibili.com/':'https://www.bilibili.com/',...(this.cookie?{Cookie:this.cookie}:{})},signal:AbortSignal.timeout(this.timeoutMs)});
  const chunks=[];let bytes=0;const reader=response.body?.getReader();if(reader)for(;;){const {value,done}=await reader.read();if(done)break;bytes+=value.byteLength;if(bytes>4*1024*1024){await reader.cancel();throw new BiliWebApiError(endpoint,response.status,null,'response-size-limit');}chunks.push(value);}
  const body=Buffer.concat(chunks);let json;try{json=JSON.parse(body);}catch{this.onObservation({endpoint,startedAt,request_parameter_names:[...target.searchParams.keys()].sort(),status:response.status,code:null,body});throw new BiliWebApiError(endpoint,response.status,null,response.status<200||response.status>=300?'http-error':'non-json-response');}
  const code=typeof json?.code==='number'?json.code:null;
  this.onObservation({endpoint,startedAt,request_parameter_names:[...target.searchParams.keys()].sort(),status:response.status,code,body});
  if(response.status<200||response.status>=300)throw new BiliWebApiError(endpoint,response.status,code,'http-error');
  if(code!==0&&!(allowNavError&&code===-101&&json.data?.wbi_img))throw new BiliWebApiError(endpoint,response.status,code,'business-error');
  return json;
 }
 async getWbiKeys(){if(!this.keys){const nav=await this.requestJson(api+'/x/web-interface/nav','auth.wbiNav',{allowNavError:true});this.keys=wbiKeysFromNav(nav);}return this.keys;}
 async call(name,input={}){
  const spec=Object.hasOwn(WEB_READ_ENDPOINTS,name)?WEB_READ_ENDPOINTS[name]:null;if(!spec)throw Error('Unknown read-only PC API: '+name);
  if(input===null||typeof input!=='object'||Array.isArray(input))throw Error('API parameters must be an object');
  const params={...spec.defaults,...input};for(const key of spec.required)if(params[key]===undefined||params[key]===null||params[key]==='')throw Error('Missing parameter: '+key);
  for(const [key,v]of Object.entries(params))if(v!==null&&v!==undefined&&(!['string','number','boolean'].includes(typeof v)||(typeof v==='number'&&!Number.isFinite(v))))throw Error('API parameters must be finite scalars: '+key);
  const query=spec.wbi?signWbi(params,{...await this.getWbiKeys(),nowSeconds:Math.round(this.now()/1000)}).query:new URLSearchParams(Object.entries(params).filter(([,v])=>v!==null&&v!==undefined).map(([k,v])=>[k,String(v)])).toString();
  return this.requestJson(spec.url+(query?'?'+query:''),name);
 }
}
