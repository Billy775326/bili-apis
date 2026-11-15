/** Bounded protobuf wire inventory. Values and text are never returned. */
export function inspectPcWire(bytes,{maxFields=100000,maxBytes=4194304}={}){
 if(!(bytes instanceof Uint8Array)||bytes.length>maxBytes)throw Error('Wire input exceeds limit');let p=0,total=0;const fields={};
 const number=()=>{let n=0n;for(let i=0;i<10;i++){if(p>=bytes.length)throw Error('Truncated varint');const b=bytes[p++];if(i===9&&b>1)throw Error('Varint overflow');n|=BigInt(b&127)<<BigInt(i*7);if(!(b&128))return n;}throw Error('Unterminated varint');};
 while(p<bytes.length){if(++total>maxFields)throw Error('Wire field budget exceeded');const tag=number(),id=Number(tag>>3n),wire=Number(tag&7n);if(id<1||id>536870911)throw Error('Invalid protobuf field');const row=fields[id]||={wire_types:[],occurrences:0,lengths:[]};if(!row.wire_types.includes(wire))row.wire_types.push(wire);row.occurrences++;
  if(wire===0)number();else if(wire===1){if(p+8>bytes.length)throw Error('Truncated fixed64');p+=8;}else if(wire===5){if(p+4>bytes.length)throw Error('Truncated fixed32');p+=4;}else if(wire===2){const length=Number(number());if(!Number.isSafeInteger(length)||length<0||p+length>bytes.length)throw Error('Invalid length-delimited field');if(row.lengths.length<3)row.lengths.push(length);p+=length;}else throw Error('Unsupported protobuf group/wire type');
 }
 return{bytes:bytes.length,total_fields:total,fields};
}
export function checkPcExtended(path,json,input={}){
 const checks=[],d=json?.data,obj=v=>v!==null&&typeof v==='object'&&!Array.isArray(v),add=(name,ok)=>checks.push({name,passed:!!ok});add('numeric-business-code-zero',json?.code===0);
 const hasKeys=(keys)=>add('expected-data-fields',obj(d)&&keys.every(k=>Object.hasOwn(d,k)));
 switch(path){
 case '/x/web-interface/nav':add('logged-in-test-account',d?.isLogin===true);add('account-identity-present',typeof d?.mid==='number'&&d.mid>0);break;
 case '/x/passport-login/web/cookie/info':add('refresh-flag',typeof d?.refresh==='boolean');add('timestamp',Number.isFinite(d?.timestamp));break;
 case '/x/click-interface/click/now':add('server-time',Number.isFinite(d?.now));break;
 case '/x/frontend/finger/spi':add('two-identifiers-present',typeof d?.b_3==='string'&&d.b_3.length>0&&typeof d?.b_4==='string'&&d.b_4.length>0);break;
 case '/x/internal/gaia-gateway/ExGetAxe':add('public-challenge-metadata',typeof d?.version==='string'&&typeof d?.public_key==='string'&&Number.isFinite(d?.deadline));break;
 case '/x/kv-frontend/namespace/data':hasKeys(['versionId','data']);break;
 case '/x/vip/ads/materials':add('material-lists',Array.isArray(d?.list)&&Array.isArray(d?.list_v2));break;
 case '/x/web-show/page/header/v2':add('header-identity',Number.isFinite(d?.id)&&typeof d?.name==='string');break;
 case '/x/web-show/res/locs':case '/x/web-show/wbi/res/locs':add('requested-location-keys',obj(d)&&String(input.ids||'').split(',').filter(Boolean).length>0&&String(input.ids).split(',').every(k=>Object.hasOwn(d,k)&&(d[k]===null||Array.isArray(d[k]))));break;
 case '/xlive/general-interface/v1/content/get':add('public-content-metadata',typeof d?.md5==='string'&&typeof d?.content==='string');break;
 case '/xlive/general-interface/v1/content/getRevenueMd5':add('wealth-metadata',typeof d?.wealth==='string');break;
 case '/xlive/web-room/v1/index/getIpInfo':add('location-field-types',typeof d?.country==='string'&&typeof d?.province==='string');break;
 case '/x/activity_components/eva_operation/object':add('requested-object',String(input.object_id||'').length>0&&(String(d?.id)===String(input.object_id)||String(d?.object_id)===String(input.object_id)));break;
 case '/x/activity_components/exchange/list':add('reward-list',Array.isArray(d?.list));add('score-metadata',obj(d?.score));break;
 case '/x/activity_components/exchange/merry_go_round':add('carousel-list',Array.isArray(d?.carousel_info));break;
 case '/x/esports/component/contests':add('contest-lists',Array.isArray(d?.history)&&Array.isArray(d?.future));break;
 case '/x/esports/contest/series/detail':add('requested-series',String(d?.series_id)===String(input.series_id));add('series-title',typeof d?.series_title==='string');break;
 case '/x/esports/contest/team/detail':add('teams',Array.isArray(d?.teams));break;
 case '/x/esports/season/series/knockout_match':add('requested-series',String(d?.series_id)===String(input.series_id));add('bracket-lists',Array.isArray(d?.groups)&&Array.isArray(d?.teams));break;
 case '/x/esports/stats/hero2/rank':case '/x/esports/stats/player/kda/rank':case '/x/esports/stats/player/mvp/rank':add('rank-list',Array.isArray(d));break;
 case '/x/task/totalv2':add('task-list',Array.isArray(d?.list));add('requested-task',Array.isArray(d?.list)&&d.list.some(t=>String(t.task_id)===String(input.task_ids)));hasKeys(['task_refresh_conf']);break;
 case '/x/web-interface/relation':add('relation-objects',obj(d?.relation)&&obj(d?.be_relation));add('requested-relation-user',String(d?.relation?.mid)===String(input.mid));break;
 case '/x/relation/relations':add('relation-map',obj(d)&&Object.keys(d).length>0);break;
 case '/x/space/coin/video':add('public-video-list',Array.isArray(d));break;
 case '/x/space/like/video':add('liked-video-list',Array.isArray(d?.list));add('liked-card-identities',Array.isArray(d?.list)&&d.list.slice(0,3).every(v=>typeof v.bvid==='string'&&Number.isSafeInteger(v.aid)&&v.aid>0));break;
 case '/x/space/reservation':add('reservation-list-shape',Array.isArray(d)||Array.isArray(d?.list));break;
 case '/x/space/upstat':add('public-statistics',obj(d?.archive)&&Number.isFinite(d?.archive?.view)&&Number.isFinite(d?.likes));break;
 case '/x/space/v2/myinfo':add('own-profile-and-level',obj(d?.profile)&&obj(d?.level_exp));hasKeys(['coins','following','follower']);break;
 case '/x/space/wbi/acc/relation':add('relation-state',obj(d?.relation));break;
 case '/x/web-interface/archive/stat':add('requested-bvid',d?.bvid===input.bvid);add('view-count',Number.isFinite(d?.view));break;
 default:add('schema-not-reviewed',false);
 }
 return{passed:checks.every(c=>c.passed),checks};
}
