export function checkPcCase(name,json,input={}){
 const d=json?.data;const checks=[];
 const add=(name,passed)=>checks.push({name,passed:!!passed});
 const object=v=>v!==null&&typeof v==='object'&&!Array.isArray(v);
 const id=v=>typeof v==='number'&&Number.isSafeInteger(v)&&v>0;
 add('numeric-business-code-zero',json?.code===0);
 switch(name){
  case 'video.detail':add('requested-bvid',d?.bvid===input.bvid);add('positive-aid-cid',id(d?.aid)&&id(d?.cid));add('pages-array',Array.isArray(d?.pages));break;
  case 'video.pages':add('page-list',Array.isArray(d));add('page-identities',Array.isArray(d)&&d.every(p=>id(p.cid)&&Number.isInteger(p.page)));break;
  case 'video.stats':add('requested-bvid',d?.bvid===input.bvid);add('view-counter',Number.isSafeInteger(d?.view)&&d.view>=0);break;
  case 'video.related':add('related-array',Array.isArray(d));add('related-card-shape',Array.isArray(d)&&d.slice(0,3).every(v=>typeof v.bvid==='string'&&typeof v.title==='string'));break;
  case 'video.tags':add('tag-array',Array.isArray(d));add('tag-field-shape',Array.isArray(d)&&d.slice(0,3).every(v=>typeof v.tag_name==='string'));break;
  case 'video.detailBundle':add('requested-aid',String(d?.View?.aid)===String(input.aid));add('related-array',Array.isArray(d?.Related));break;
  case 'video.online':add('online-counter',typeof d?.total==='string'||Number.isFinite(d?.total));add('display-switch',typeof d?.show_switch==='object'||typeof d?.show_switch==='boolean');break;
  case 'playback.info':add('requested-aid-cid',String(d?.aid)===String(input.aid)&&String(d?.cid)===String(input.cid));add('subtitle-metadata',object(d?.subtitle));break;
  case 'playback.url':add('quality-number',Number.isFinite(d?.quality));add('playback-resource-list',Array.isArray(d?.dash?.video)||Array.isArray(d?.durl));break;
  case 'search.all':case 'search.videos':add('search-results',Array.isArray(d?.result)&&d.result.length>0);add('requested-page',Number(d?.page)===Number(input.page||1));break;
  case 'search.default':add('default-search-text',typeof d?.show_name==='string'&&typeof d?.name==='string');break;
  case 'comment.main':add('cursor-object',object(d?.cursor));add('comment-list',Array.isArray(d?.replies)||d?.replies===null);add('visible-comment-or-empty-thread',(d?.replies?.length||0)>0||(d?.top_replies?.length||0)>0||(d?.cursor?.all_count===0&&d?.cursor?.is_end===true));break;
  case 'comment.replies':add('reply-list',Array.isArray(d?.replies)||d?.replies===null);add('pagination',object(d?.page));break;
  case 'user.info':add('requested-mid',String(d?.mid)===String(input.mid));add('public-profile',typeof d?.name==='string'&&typeof d?.face==='string');break;
  case 'user.relationStats':add('requested-mid',String(d?.mid)===String(input.vmid));add('relation-counters',Number.isSafeInteger(d?.following)&&Number.isSafeInteger(d?.follower));break;
  case 'user.uploads':add('archive-list',Array.isArray(d?.list?.vlist));add('pagination',object(d?.page)&&Number.isSafeInteger(d.page.count));break;
  case 'dynamic.hot':add('dynamic-items',Array.isArray(d?.items));add('pagination-offset',typeof d?.offset==='string');break;
  case 'favorite.folders':add('collection-count',Number.isSafeInteger(d?.count)&&d.count>=0);add('collection-list',Array.isArray(d?.list)||d?.list===null);break;
  case 'home.popular':add('popular-list',Array.isArray(d?.list)&&d.list.length>0);add('end-marker',typeof d?.no_more==='boolean');break;
  case 'live.roomPlayInfo':add('requested-room',String(d?.room_id)===String(input.room_id));add('live-status',Number.isInteger(d?.live_status));break;
  default:throw Error('No case assertions for '+name);
 }
 return {passed:checks.every(c=>c.passed),checks};
}
