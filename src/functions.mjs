// Ordered, inspectable rules. Classification is a navigation aid, not recovered business semantics.
export const FUNCTION_CATEGORIES = [
  ['live','直播','直播间、主播、连麦、礼物和直播收益'],
  ['game','游戏','游戏中心、攻略及游戏活动'],
  ['miniapp','小程序与开放平台','小程序配置、开放接口与网关'],
  ['commerce','商城与票务','商品、会员购、票务及交易入口'],
  ['creator','创作与投稿','稿件管理、上传、剪辑、素材及创作工具'],
  ['auth','登录与账号安全','登录、票据、实名、验证码及账号安全'],
  ['payment','支付与充电','订单、支付、付费内容及充电'],
  ['vip','大会员与装扮','大会员、权益、装扮及数字藏品'],
  ['message','私信与客服','会话、私信和客服通信'],
  ['notification','通知与广播','推送、广播连接和消息通知'],
  ['pgc','番剧影视与课程','番剧、影视、课堂及一起看'],
  ['comment','评论与回复','评论列表、楼中楼和评论操作'],
  ['danmaku','弹幕与字幕','视频弹幕、弹幕配置和字幕'],
  ['dynamic','动态与话题','动态流、图文、话题和校园'],
  ['relation','关注与关系','关注、粉丝、关系分组和黑名单'],
  ['favorite','收藏与稍后再看','收藏夹、收藏内容和待播放列表'],
  ['history','历史记录','观看、搜索及其他历史记录'],
  ['user','用户与空间','用户资料、个人空间、主页和我的页面'],
  ['search','搜索','综合搜索、搜索建议和结果'],
  ['feed','推荐与分区','推荐流、热门、排行、频道和分区'],
  ['playback','播放与连接','播放地址、播放器、在线状态和传输'],
  ['video','视频详情与互动','视频详情、点赞、投币和分享'],
  ['article','专栏与阅读','专栏文章和阅读功能'],
  ['audio','音频与音乐','音频、音乐和听视频'],
  ['activity','活动与预约','运营活动、抽奖、预约和签到'],
  ['emote','表情与贴纸','表情包和表情面板'],
  ['governance','社区治理与青少年','举报、治理、反骚扰及青少年设置'],
  ['telemetry','埋点与诊断','上报、探测和质量诊断'],
  ['config','配置与资源','资源、启动、实验、隐私和通用配置'],
  ['tribee','兴趣社区','Tribee 社区、群组和社区管理'],
  ['comic','漫画','漫画阅读、漫画资产和漫画专用接口'],
  ['sharing','分享','分享渠道、海报、短链和分享回调'],
  ['notes','笔记','观看笔记和笔记发布管理'],
  ['operator','运营商服务','免流、流量卡及运营商服务'],
  ['ads','广告','广告投放、转化和商业组件'],
  ['other','待细分','现有名称不足以可靠归类的声明'],
].map(([id,title,description])=>({id,title,description}));
const navigationOrder=['video','playback','search','feed','comment','danmaku','user','relation','favorite','history','dynamic','tribee','article','notes','audio','live','message','notification','creator','auth','pgc','comic','vip','payment','commerce','game','miniapp','sharing','activity','emote','operator','ads','governance','telemetry','config','other'];
FUNCTION_CATEGORIES.sort((a,b)=>navigationOrder.indexOf(a.id)-navigationOrder.indexOf(b.id));

const rule = (category, scope, pattern) => ({category,scope,pattern});
export const FUNCTION_RULES = [
 rule('tribee','namespace',/\.community\.interfaces\.cosmoconn\./i),
 rule('comic','namespace',/manga\.bilibili|(?:^|\/)twirp\/(?:comic|community|column|pay)\.v\d\./i),
 rule('sharing','route',/(?:^|\/)x\/share(?:\/|$)/i),
 rule('notes','route',/(?:^|\/)x\/note(?:\/|$)/i),
 rule('operator','namespace',/(?:^|\/)x\/wall\/|card\.e\.189\.cn|csapi\.bol\.wo\.cn|\/videoif\//i),
 rule('ads','namespace',/(?:^|\/)bce\/sunspot\/|(?:^|\/)cm\/api\/|^https?:\/\/cm\.bilibili/i),
 rule('creator','route',/(?:^|\/)x\/(?:vu|vupre|mvp|app\/(?:cards|detail|newpubinfo|newcomer|appeal|limited|pagetip|openscreen|index|up\/draft|v3\/material|danmu\/transfer))\/|\/c\/spark\/app\//i),
 rule('dynamic','route',/(?:^|\/)(?:dynamic_svr|dynamic_mix|dynamic_repost)\/|\/api\/v1\/drawImage\//i),
 rule('payment','route',/(?:^|\/)(?:paywallet|ugcpay-rank)\//i),
 rule('auth','namespace',/\.gaia\.gw\.|gaia-gateway|safecenter|silverbullet-proxy|\/x\/member\/(?:account_switch|app\/up\/realname)/i),
 rule('vip','namespace',/\.pangu\.gallery\./i),
 rule('notification','route',/(?:^|\/)(?:notice)(?:[?\/]|$)/i),
 rule('relation','route',/\/x\/relation(?:[?\/]|$)|\/x\/tag\/subscribe\//i),
 rule('user','route',/\/x\/member\/app\/(?:birthday|nickfree|point|sex|sign|uname|school)(?:[\/]|$)/i),
 rule('governance','route',/\/x\/v2\/family\//i),
 rule('video','route',/\/x\/stein\//i),
 rule('config','route',/\/x\/v2\/(?:param|display)(?:\/|$)|\.app\.overseas\.app\.v1\.Banner\//i),
 rule('activity','route',/(?:^|\/)x\/(?:coupon|fission|operational_activity)\//i),
 rule('pgc','route',/(?:^|\/)(?:review\/api|sponsor)\//i),
 rule('user','route',/\/x\/(?:v2\/space(?:[?\/]|$)|member\/app\/(?:face|pendant)\/|app\/(?:v1\/user\/profiles|up\/info))/i),
 rule('playback','route',/\/x\/tv\//i),
 rule('favorite','route',/\/x\/v1\/medialist\//i),
 rule('telemetry','route',/\/open\/monitor\//i),
 rule('governance','route',/\/x\/feedback\//i),
 rule('live','namespace',/api\.live\.bilibili\.com|(?:^|\/)xlive\/|bililive|(?:^|\/)live\/app\/|(?:^|\/)(?:av|room|link_group|link_setting|lottery)\/v\d\//i),
 rule('game','namespace',/biligame|gamecenter|(?:^|\/)game\/center\/|\/api\/(?:h5\/)?game\/|\/h5\/game\/|\/news\/strategy\/game/i),
 rule('miniapp','route',/miniapp|(?:^|\/)open\/open_api\/|mgk\/api\/|api\/applet\//i),
 rule('commerce','namespace',/mall\.|show\.bilibili|mall-cbp|\/ticket\/(?:buyer|project)|(?:^|\/)(?:mall|shop|e-commerce)\//i),
 rule('creator','route',/(?:^|\/)x(?:2)?\/(?:creative|creative-tool|material|bcut|app\/archive|app\/material|app\/bgm|app\/staff|app\/gfactory|mvp\/material)|\/x\/article\/creative|\/v2\/bcut\//i),
 rule('auth','namespace',/passport|(?:^|\/)x\/member\/realname|bilibili\.api\.ticket\.|\.account\.interface\.|(?:^|\/)(?:login|oauth2|captcha|auth)\//i),
 rule('payment','route',/(?:^|\/)(?:pay|payment|payplatform|ugcpay|order)\/|\/x\/(?:upower|elec)\//i),
 rule('vip','route',/(?:^|\/)(?:vip|garb|vas)\//i),
 rule('message','namespace',/bilibili\.im\.|broadcast\.message\.im\.|(?:^|\/)(?:im|session_svr|msgfeed|svr_sync|customer)\/|message\.bilibili\.com/i),
 rule('notification','namespace',/bilibili\.broadcast\.|(?:^|\/)(?:push|notification|notify)\//i),
 rule('pgc','namespace',/\bpgc\.|(?:^|\/)(?:pgc|pugv|bangumi|cheese)\/|bangumi\.bilibili/i),
 rule('comment','namespace',/\.community\.reply\.|(?:^|\/)(?:reply|comment)\//i),
 rule('danmaku','namespace',/\.service\.dm\.|bilibili\.subtitle\.|(?:^|\/)(?:dm|danmaku|subtitle)\//i),
 rule('dynamic','namespace',/bilibili\.(?:app|main)\.dynamic\.|\.app\.topic\.|(?:^|\/)(?:dynamic|topic|opus|bplus)\//i),
 rule('relation','namespace',/bilibili\.relation\.|(?:^|\/)(?:relation|follow|fans|blacklist)\//i),
 rule('favorite','namespace',/bilibili\.polymer\.list\.|(?:^|\/)(?:fav|favorite|favorites|toview|watchlater)\//i),
 rule('history','namespace',/\.interface\.v1\.History(?:\/|$)|(?:^|\/)history\//i),
 rule('user','namespace',/\.interface\.v1\.Space(?:\/|$)|\.mine\.|(?:^|\/)(?:space|account|user\/info|user\/card)\//i),
 rule('search','namespace',/\.Search(?:\/|$)|\.app\.search\.|(?:^|\/)search\//i),
 rule('feed','namespace',/\.app\.(?:show|home|story)\.|(?:^|\/)(?:feed|region|channel|rank|popular)\//i),
 rule('playback','namespace',/\.app\.(?:playeronline|playerunite|playurl)\.|\.p2p\.|(?:^|\/)(?:playurl|player|playback)\//i),
 rule('video','namespace',/\.app\.(?:view|viewunite)\.|(?:^|\/)(?:view|archive|video)\//i),
 rule('article','route',/(?:^|\/)(?:article|read)\//i),
 rule('audio','namespace',/\.app\.listener\.|(?:^|\/)(?:audio|music)\//i),
 rule('activity','namespace',/\.account\.fission\.|\.app\.growth\.|(?:^|\/)(?:activity|custom_activity|checkin-plat|new-reserve|reserve|lottery)\//i),
 rule('emote','route',/(?:^|\/)(?:emote|emoji|sticker)\//i),
 rule('governance','namespace',/\.community\.(?:govern|cosmoconn)|\.service\.(?:cert|govern)\.|\.Teenagers(?:\/|$)|AntiHarassment|(?:^|\/)(?:report|anti_addiction|teenagers|answer)\//i),
 rule('telemetry','namespace',/\.api\.probe\.|\.app\.click\.|(?:^|\/)(?:log|report|probe|qoe|dataflow)\//i),
 rule('config','namespace',/\.app\.(?:distribution|resource|translation|wall)\.|(?:^|\/)(?:resource|config|abtest|splash|privacy)\//i),
];

export function classifyFunction(entry) {
 const route = entry.kind==='grpc' ? entry.id : (entry.resolved_url_candidate || entry.path || '');
 // Prefer actual route/domain names over class packages. Shared tv/danmaku is not a danmaku feature.
 const declarationClass=(entry.declaring_class||'').replace(/^Ltv\/danmaku\//,'Ltv/');
 for(const [scope,value] of [['route',route],['declaration-class',declarationClass]]) {
  for(const r of FUNCTION_RULES) {
   if(scope==='declaration-class'&&r.scope!=='namespace')continue;
   const match=value.match(r.pattern);
   if(match)return {category:r.category,classification:'name-based-inference',rule_scope:scope,rule_pattern:r.pattern.source,matched_text:match[0]};
  }
 }
 return {category:'other',classification:'unclassified',rule_scope:null,rule_pattern:null,matched_text:null};
}
export function isEndpoint(entry) { return entry.kind==='http'||entry.kind==='grpc'; }
export function functionCategory(id) {
 const result=FUNCTION_CATEGORIES.find(c=>c.id===id);
 if(!result)throw Error('Unknown function category: '+id);
 return result;
}
export function parameterSummary(entry) {
 return (entry.parameters||[]).flatMap(p=>p.annotations.map(a=>({
  position:p.position,java_type:p.descriptor,location:a.type.split('/').at(-1).replace(';',''),
  name: typeof a.elements?.value==='string'?a.elements.value:null,
 })));
}
export function resultStatus(record, liveResults=[]) {
 const observations=liveResults.filter(r=>r.endpoint_id===record.id);
 return {static:record.kind==='http'?'retrofit-declaration':'grpc-method-descriptor',
  live:observations.length?observations.at(-1).outcome:'not-tested',
  scope:observations.length?'anonymous-https-sample-only':'no-live-request',observations:observations.map(r=>r.observation_id)};
}
