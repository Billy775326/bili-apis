import {ANDROID_EDITIONS} from '../src/android-editions.mjs';
import {WEB_READ_ENDPOINTS} from '../src/web-client.mjs';
import {PC_CATEGORIES,PC_TITLES} from '../src/pc-catalog.mjs';
const reference='https://github.com/cv-cat/DouYin_Spider';
const parameterInfo={
 bvid:['string','BV 形式的视频标识；示例值需替换'],aid:['string 或 number','视频稿件 ID，可由 video.detail 的 data.aid 取得'],cid:['string 或 number','分 P 内容 ID，可由 video.detail 或 video.pages 取得'],
 mid:['string 或 number','公开用户 UID'],vmid:['string 或 number','目标公开用户 UID'],up_mid:['string 或 number','公开收藏夹所属用户 UID'],oid:['string 或 number','资源 ID；本项目视频评论和笔记样本使用 aid'],root:['string 或 number','根评论 ID，从评论响应的 rpid_str 取得'],
 keyword:['string','搜索关键词'],term:['string','搜索建议关键词'],pn:['number 或数字字符串','页码；客户端样本从 1 开始'],page:['number 或数字字符串','页码；仅承诺已记录样本'],ps:['number 或数字字符串','请求每页数量，不保证服务端实际返回相同条数'],page_num:['number 或数字字符串','页码，客户端默认 1'],page_size:['number 或数字字符串','请求每页数量'],
 search_type:['string','搜索分类；视频搜索封装默认 video'],order:['string','排序参数；投稿封装默认 pubdate，其他值未核对'],type:['number 或数字字符串','资源或列表类型；取值按当前封装默认值'],mode:['number 或数字字符串','评论模式；匿名快照仅核对默认值 3'],pagination_str:['string','JSON 字符串；首屏为空 offset，下一页使用服务端返回的游标'],plat:['number 或数字字符串','评论请求平台参数，匿名快照默认 1'],web_location:['number 或数字字符串','网页入口参数；不代表可以解除风控'],
 qn:['number 或数字字符串','期望清晰度代码；实际清晰度查看响应字段'],fnval:['number 或数字字符串','播放器能力标记；匿名快照默认 16'],room_id:['string 或 number','实际直播房间号；短号行为未核对'],room_ids:['string','目标房间号字符串；匿名快照只核对单个房间'],req_biz:['string','房间基础信息的调用场景参数，默认值来自封装'],protocol:['string','支持的播放协议代码列表'],format:['string','支持的媒体封装代码列表'],codec:['string','支持的编码代码列表'],platform:['string','网页平台标记，默认 web'],ptype:['number 或数字字符串','直播播放请求类型标记'],
 season_type:['number 或数字字符串','推荐内容类型；匿名快照 HTTP 返回 -400'],request_cnt:['number 或数字字符串','推荐请求数量参数'],brush:['number 或数字字符串','推荐刷新参数，其他取值未核对'],fresh_type:['number 或数字字符串','推荐刷新类型，其他取值未核对'],oid_type:['number 或数字字符串','笔记资源类型，匿名快照仅使用默认值 0']
};
const purposes={
 'video.detail':'读取单个视频详情、稿件和分 P 标识及内嵌统计。','video.pages':'读取视频的分 P 列表，取得播放接口需要的 cid。','video.related':'读取与目标视频相关的推荐条目。','video.tags':'读取目标视频的标签列表。','video.detailBundle':'读取详情、相关推荐等聚合信息；历史和匿名快照结果存在差异。',
 'video.online':'读取目标稿件及分 P 的在线人数显示信息。','playback.info':'读取播放器及字幕元数据。','playback.url':'读取播放资源元数据；本项目没有验证媒体下载或权益。','playback.broadcastServers':'读取网页广播连接的域名、节点和端口配置，不建立连接。',
 'search.videos':'按关键词读取视频搜索结果。','search.all':'按关键词读取综合搜索结果；结果可能按内容类型分组。','search.default':'读取当前默认搜索词及展示文案。','search.suggest':'读取输入关键词的搜索建议。',
 'comment.main':'读取视频普通评论及游标；匿名快照核对首屏和一次下一页。','comment.replies':'读取某条根评论下的楼中楼回复，并核对根评论及稿件身份。','comment.subject':'读取评论区的说明元数据。',
 'user.info':'读取公开用户资料；匿名快照因同类风控停止而跳过。','user.relationStats':'读取公开关注与粉丝统计，不是关注/粉丝明细列表。','user.uploads':'读取用户投稿列表；匿名快照返回 HTTP 412，尚未通过。','user.collections':'读取公开空间的合集与系列列表。','user.counters':'读取公开空间的投稿、专栏等内容计数。','user.notice':'读取公开空间公告文本，允许空文本。','user.masterpieces':'读取空间代表作列表，允许合法空列表。','user.followedBangumi':'读取目标空间可公开的追番列表。','user.games':'读取空间最近游戏列表及条数元数据。','user.articles':'读取空间专栏列表及分页元数据。','user.settings':'读取空间公开展示设置，不修改账号配置。',
 'favorite.folders':'读取用户公开收藏夹列表，不读取登录账号的私人收藏。','dynamic.hot':'读取热门动态条目及返回的游标元数据。','dynamic.banner':'读取动态页横幅；匿名快照返回成功业务码但缺少预期数组。','home.popular':'读取热门视频列表。','home.recommendations':'读取首页推荐视频条目。','home.ogv':'读取番剧推荐请求；匿名快照两次受控参数样本均返回 -400。',
 'live.roomPlayInfo':'读取 网页 直播间状态及播放元数据，不监听直播弹幕。','live.roomBaseInfo':'读取指定直播间的基础信息映射。','live.recommendations':'读取 网页 直播推荐房间列表。','live.roomInfo':'读取直播间综合信息；匿名快照返回 -352。','note.publicList':'读取公开视频的公开笔记列表；匿名快照 page 为 null，未通过。','note.availability':'读取稿件的笔记入口状态。'
};
const returns={
 'video.detail':[['data.bvid','视频 BV 标识'],['data.aid / data.cid','稿件和默认分 P 标识'],['data.pages','分 P 列表'],['data.stat','视频统计，字段随服务端变化']],
 'video.pages':[['data[]','分 P 列表'],['data[].cid / data[].page','内容标识与分 P 序号']],
 'video.related':[['data[]','关联视频列表'],['data[].bvid / data[].title','关联稿件标识与标题']],
 'video.tags':[['data[]','标签列表'],['data[].tag_name','标签名称']],
 'video.detailBundle':[['data.View','视频详情对象'],['data.Related','关联视频列表']],
 'video.online':[['data.total','显示人数，样本为字符串'],['data.show_switch','显示配置']],
 'playback.info':[['data.aid / data.cid','用于核对请求目标'],['data.subtitle','字幕元数据，不等于已下载字幕']],
 'playback.url':[['data.quality','实际返回清晰度代码'],['data.dash.video / data.durl','播放资源列表；返回形式以实际响应为准']],
 'playback.broadcastServers':[['data.domain','广播服务域名'],['data.nodes','节点列表']],
 'search.videos':[['data.page','返回页码'],['data.result','视频搜索结果列表'],['data.numResults / data.numPages','响应中观察到的条数和页数元数据']],
 'search.all':[['data.page','返回页码'],['data.result','综合搜索结果列表或分组'],['data.numResults / data.numPages','响应中观察到的条数和页数元数据']],
 'search.default':[['data.name','默认搜索词'],['data.show_name','展示文案']],
 'search.suggest':[['data.result.tag','建议条目列表'],['data.result.tag[].value','建议词']],
 'comment.main':[['data.replies','普通评论；不能用 top_replies 代替'],['data.top_replies','置顶评论，可能为空或 null'],['data.cursor.is_end','是否明确结束'],['data.cursor.pagination_reply.next_offset','下一页游标，只在本地消费']],
 'comment.replies':[['data.root.rpid_str / data.root.oid_str','根评论和稿件身份'],['data.replies','楼中楼回复列表'],['data.page','分页元数据']],
 'comment.subject':[['data.base','评论区说明对象']],
 'user.info':[['data.mid','预期核对的用户标识'],['data.name / data.face','预期公开昵称与头像；匿名快照未请求']],
 'user.relationStats':[['data.mid','目标用户标识'],['data.following / data.follower','关注数及粉丝数']],
 'user.uploads':[['data.list.vlist','客户端预期核对的稿件列表'],['data.page','客户端预期分页对象；匿名快照未取得成功业务响应']],
 'user.collections':[['data.items_lists.seasons_list','合集列表'],['data.items_lists.series_list','系列列表']],
 'user.counters':[['data.video / data.article','视频与专栏计数']],
 'user.notice':[['data','空间公告字符串']],
 'user.masterpieces':[['data[]','代表作列表，可为空'],['data[].aid / data[].bvid','非空条目的稿件标识']],
 'user.followedBangumi':[['data.list','公开追番列表'],['data.total','总条数元数据']],
 'user.games':[['data.list','游戏列表'],['data.total_count','总条数元数据']],
 'user.articles':[['data.articles','专栏列表'],['data.count','条数元数据']],
 'user.settings':[['data.privacy','公开展示配置'],['data.index_order','空间版块顺序']],
 'favorite.folders':[['data.count','公开收藏夹数'],['data.list','收藏夹列表或 null']],
 'dynamic.hot':[['data.items','动态条目'],['data.offset','分页游标元数据；完整遍历未验证']],
 'dynamic.banner':[['data.banners','预期数组；匿名快照字段缺失，未通过']],
 'home.popular':[['data.list','热门视频条目'],['data.no_more','是否没有更多条目']],
 'home.recommendations':[['data.item','推荐视频条目'],['data.item[].bvid','推荐稿件标识']],
 'home.ogv':[['data.items','预期条目列表；匿名快照未取得成功业务响应']],
 'live.roomPlayInfo':[['data.room_id','实际直播房间号'],['data.live_status','直播状态代码'],['data.playurl_info','观察到的播放元数据，不保证正在直播或可播放']],
 'live.roomBaseInfo':[['data.by_room_ids','按房间号索引的基础信息'],['data.by_uids','响应中观察到的主播映射']],
 'live.recommendations':[['data.recommend_room_list','推荐房间列表']],
 'live.roomInfo':[['data.room_info.room_id','客户端预期核对的房间号'],['data.room_info.live_status','客户端预期状态；匿名快照未取得成功业务响应']],
 'note.publicList':[['data.list','笔记列表；匿名快照为 null'],['data.page','预期分页对象；匿名快照为 null'],['data.show_public_note','展示标志']],
 'note.availability':[['data.forbid_note_entrance','是否关闭笔记入口']]
};
const sampleInputs={bvid:'BV1EXAMPLE01',aid:'10001',cid:'20001',mid:'30001',vmid:'30001',up_mid:'30001',oid:'10001',root:'40001',keyword:'bilibili',term:'bilibili',room_id:'50001',room_ids:'50001'};
const notes={
 'comment.main':'下一页请原样消费服务端游标并使用 JSON.stringify({ offset: nextOffset })；不要自行猜测页码或把游标写入公开文档。普通评论和置顶评论分别判断，历史其他视频仍有失败。',
 'comment.replies':'root 建议使用响应的 rpid_str 字符串；oid 必须与该根评论所属视频一致。',
 'search.videos':'匿名快照只核对首页样本；page 参数可传递，不代表所有页码或结果总数均已验证。',
 'search.all':'匿名快照只核对首页样本；综合结果的分组结构与视频搜索不同。',
 'user.relationStats':'这是统计接口，不提供关注名单或粉丝名单。',
 'live.roomPlayInfo':'请区分实际房间号和短号；房间未开播时不保证有播放资源。',
 'live.roomBaseInfo':'目前文档示例和身份断言仅针对单个 room_ids 值；多房间输入未验证。',
 'playback.url':'只核对播放元数据字段；没有测试媒体下载、会员内容或地区权益。',
 'home.ogv':'默认参数补充参考官方网页脚本，但独立 HTTP 仍未通过；保留失败记录。'
};
const statusNames={'anonymous-read-case-passed':'✅ 匿名快照 HTTP 字段用例通过','risk-or-rate-response':'⚠️ 风控或限速','response-assertion-failed':'⚠️ 字段断言未通过','request-failed':'⚠️ 请求失败','skipped':'⏭ 匿名快照跳过','mixed-case-results':'⚠️ 部分用例结果不同','not-selected':'未纳入匿名快照 HTTP 验证'};
const cell=v=>String(v??'').replaceAll('|','\\|').replaceAll('\n',' ').replaceAll('<','&lt;').replaceAll('>','&gt;');
const anchor=name=>name.replaceAll('.','-');
const table=(head,rows)=>['| '+head.join(' | ')+' |','| '+head.map(()=> '---').join(' | ')+' |',...rows.map(r=>'| '+r.map(cell).join(' | ')+' |')];
export function renderPcReferenceDocs({data,current,fullValidation=null,webDirect=null}){
 const files=new Map(),all=Object.entries(WEB_READ_ENDPOINTS);
 const currentFor=name=>current.endpoints.find(e=>e.aliases.includes(name));
 const authenticatedFor=name=>fullValidation?.endpoints.find(e=>e.aliases.includes(name));
 const authenticatedLabel=name=>{const e=authenticatedFor(name);if(!e)return '未纳入';return e.outcome==='field-case-passed'?'字段用例通过':e.outcome;};
 const endpointFor=name=>data.endpoints.find(e=>e.aliases.includes(name));
 const categoryFor=name=>endpointFor(name)?.category||WEB_READ_ENDPOINTS[name].category;
 const link=(name,prefix='')=>prefix+categoryFor(name)+'.md#'+anchor(name);
 function apiSection(name,spec){
  const endpoint=endpointFor(name),recent=currentFor(name),input=Object.fromEntries(spec.required.map(k=>[k,sampleInputs[k]]));
  const lines=[`<a id="${anchor(name)}"></a>`,'',`## ${PC_TITLES[name]||name}`,'',purposes[name]||'读取已记录的网页数据。','',`- 客户端别名：\`${name}\``,`- 请求：\`GET ${spec.url}\``,`- 匿名快照：${statusNames[recent?.outcome||'not-selected']}`,`- 登录态浏览器：${authenticatedLabel(name)}；[完整矩阵](full-validation.md)`,...(webDirect?[`- 最新 Node HTTP：${webDirect.baseline.find(e=>e.aliases.includes(name))?.outcome||'未执行'}；[网页逐项结果](web-validation.md)`]:[]),...(recent?[`- 样本检查时间：\`${recent.checked_at}\`（UTC，采集机时钟）`]:[]),`- WBI：${spec.wbi?'客户端自动取得公开 nav 数据并添加签名参数。':'此别名未启用 WBI 自动签名。'}`,'','### 请求参数','','必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。',''];
  const params=[...new Set([...spec.required,...Object.keys(spec.defaults||{})])];
  if(params.length)lines.push(...table(['参数','建议类型','客户端必填','客户端默认值','说明'],params.map(k=>[k,parameterInfo[k]?.[0]||'有限标量',spec.required.includes(k)?'是':'否',Object.hasOwn(spec.defaults||{},k)?JSON.stringify(spec.defaults[k]):'无',parameterInfo[k]?.[1]||'语义尚未恢复'])),'');
  else lines.push('当前封装没有必填或默认查询参数。','');
  lines.push('### 调用示例','','以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。','', '```sh',`node bin/bili-web.mjs call ${name}`+(spec.required.length?' '+spec.required.map(k=>k+'='+input[k]).join(' '):''),'```','','本页顶部的初始化代码创建 `client` 后：','','```js',`const result = await client.call('${name}'${spec.required.length?', '+JSON.stringify(input):''});`,'console.log(result.data);','```','','### 返回字段','','字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。','',...table(['字段位置','说明'],returns[name]||[['data','尚未恢复结构']]),'');
  if(notes[name])lines.push('### 使用说明','',notes[name],'');
  if(recent&&recent.outcome!=='anonymous-read-case-passed')lines.push('### 匿名快照限制','',...recent.cases.map(c=>'- HTTP '+(c.http_status??'未请求')+' / 业务码 '+(c.business_code??'未知')+(c.reason?'；'+c.reason:'')+(c.checks.some(x=>!x.passed)?'；未通过断言：'+c.checks.filter(x=>!x.passed).map(x=>x.name).join('、'):'')+'。'),'');
  lines.push('[匿名快照记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)','','```sh',`node bin/bili-web.mjs show ${name}`,'```','');return lines;
 }
 const nav=['# 网页 接口文档','','按视频、搜索、评论、用户、收藏、动态、推荐和直播等功能组织。先在分类中选择接口，再看参数、调用示例和返回字段；匿名快照是否通过在每项旁单独标明。','',`当前封装 ${all.length} 个只读别名，匿名快照 ${current.summary.passed} 个地址通过相关匿名 HTTP 字段用例。`,'','[使用场景与完整示例](usage.md) · [环境与客户端](client.md) · [匿名快照](current.md) · [先前浏览器矩阵](full-validation.md) · [最新直接 HTTP](web-validation.md) · [受控私信](message.md) · [受控写操作](write-validation.md) · [直接 HTTP 上传](direct-upload.md) · [验证历史](validation.md)','','## 功能分类','',...table(['功能模块','读取别名数','匿名快照通过','可做什么'],Object.entries(PC_CATEGORIES).map(([id,title])=>{const aliases=all.filter(([n])=>categoryFor(n)===id);return [`[${title}](${id}.md)`,aliases.length,aliases.filter(([n])=>currentFor(n)?.outcome==='anonymous-read-case-passed').length,aliases.map(([n])=>PC_TITLES[n]||n).join('、')||'网页观察记录，暂无客户端调用封装'];})),'','## 接口索引','',...table(['功能','别名','匿名快照状态','登录态浏览器'],all.map(([n])=>[`[${PC_TITLES[n]||n}](${link(n)})`,`\`${n}\``,statusNames[currentFor(n)?.outcome||'not-selected'],authenticatedLabel(n)])),'','## 文档怎么读','','- 参数表描述当前 SDK 的要求和默认值；网页观察到的额外参数不自动构成服务端契约。','- 示例中的资源 ID 是合成占位值；[完整示例](usage.md)可从热门列表取得真实公开输入。','- 返回字段用于定位数据，不等于完整 JSON Schema。空列表或单个样本成功不能保证完整分页。','- 风控、失败和跳过保留；[匿名快照结果](current.md)与[历史记录](validation.md)分别查看。',''];
 files.set('docs/pc/README.md',nav.join('\n'));
 for(const [id,title]of Object.entries(PC_CATEGORIES)){
  const aliases=all.filter(([n])=>categoryFor(n)===id),observed=data.endpoints.filter(e=>e.category===id&&!e.aliases.length);
  const lines=[`# ${title}`,'','[功能导航](README.md) · [使用场景](usage.md) · [匿名快照](current.md) · [先前浏览器矩阵](full-validation.md) · [最新直接 HTTP](web-validation.md) · [受控私信](message.md)','',`本模块有 ${aliases.length} 个读取别名，${aliases.filter(([n])=>currentFor(n)?.outcome==='anonymous-read-case-passed').length} 个通过匿名快照相关匿名 HTTP 字段用例。`,''];
  if(aliases.length)lines.push('## 接口列表','',...table(['接口','用途','匿名快照状态'],aliases.map(([n])=>[`[${PC_TITLES[n]||n}](#${anchor(n)})`,purposes[n],statusNames[currentFor(n)?.outcome||'not-selected']])),'','## JavaScript 初始化','','在仓库根目录的 `.mjs` 文件中使用以下初始化。环境和错误处理见[客户端说明](client.md)。','','```js',"import { BiliWebClient } from './src/web-client.mjs';",'const client = new BiliWebClient();','```','',...aliases.flatMap(([n,s])=>apiSection(n,s)));
  if(observed.length)lines.push('## 其他网页观察请求','','以下地址只保留网页观测，尚无本仓库客户端调用封装；配置、票据和辅助 POST 的出现不代表已验证主动调用。','',...table(['方法','URL','观察到的参数名'],observed.map(e=>[e.method,e.url,[...e.query_parameter_names,...e.post_parameter_names].join(', ')])),'');
  files.set('docs/pc/'+id+'.md',lines.join('\n'));
 }
 const readme=['# Bilibili APIs','','Bilibili 网页接口与 Android 安装包接口研究项目。网页提供按功能组织的接口说明、Node.js 客户端及验证记录；Google Play 与官方 Android 安装包分别保存静态接口、参数模型与来源证据。','','## 选择接口范围','',...table(['范围','包名','版本','入口'],[['网页','不适用','按观测与验证记录','[功能文档与验证](docs/pc/README.md)'],...ANDROID_EDITIONS.map(e=>[e.channel,e.package_name,e.version_name,'[接口与文档]('+e.docs_directory+'/README.md)'])]),'','[按包名、渠道和版本查看全部目录](docs/android/README.md)。以下客户端与在线验证说明属于网页范围，APK 声明的静态提取状态在各自文档中单列。','',`当前封装 **${all.length} 个 网页 只读别名**；匿名快照 **${current.summary.passed} 个地址**通过相关匿名 HTTP 字段用例。网页观察目录共 ${data.summary.endpoints} 组方法与 URL，包含这些读取地址；不能将所有观察都算作可调用接口。`,'',...(fullValidation?[`登录态固定目录覆盖 **${fullValidation.summary.baseline} 组方法/URL**：${fullValidation.summary.outcomes['field-case-passed']} 组字段通过，${fullValidation.summary.outcomes['protobuf-structure-passed']} 组仅 Protobuf 结构通过，其余状态单列。[按功能查看全量矩阵](docs/pc/full-validation.md) · [受控写操作及清理](docs/pc/write-validation.md) · [直接 HTTP 上传](docs/pc/direct-upload.md)`,'']:[]),...(webDirect?[`最新直接 HTTP：固定目录 ${webDirect.summary.baseline} 组，${webDirect.summary.baseline_outcomes['field-case-passed']} 组字段通过、3 组仅二进制结构通过；全部已发现方法/地址共 ${webDirect.summary.inventory} 组，未执行项单列。[网页接口逐项验证与缺口](docs/pc/web-validation.md)`,'']:[]),'## 功能特性','','- **视频与搜索**：视频详情及统计、分 P、相关视频、标签、综合搜索、视频搜索、搜索建议。','- **评论读取**：普通评论、置顶评论、楼中楼；匿名快照公开视频的首屏与一次下一页通过。','- **空间与内容**：关注/粉丝统计、公开合集、公告、专栏、追番、代表作、公开收藏夹、热门动态。','- **推荐与直播**：热门视频、首页推荐、直播播放元数据、房间基础信息和直播推荐。','- **接口调用**：命令行与 JavaScript 两种入口；WBI 由客户端处理，默认匿名、不自动重试。','- **直接 HTTP 上传（实验性）**：独立视频分片、封面、投稿和所有权读回客户端；本次真实测试无 UI 操作或人工确认，见[使用文档](docs/pc/direct-upload.md)。','- **受控私信（实验性）**：直接 HTTP 发送、固定对方的最新单条读取和撤回，含双账号读回与精度保护；[接口说明](docs/pc/message.md)。','- **研究资料**：独立保留官方 Android 与 Play 静态目录、参数模型和差异报告。','','部分读取地址仍受风控、返回结构或参数限制，具体状态见[匿名快照验证结果](docs/pc/current.md)。登录态读取、投稿、评论、点赞、收藏与历史清理另有[真实验证记录](docs/pc/full-validation.md)；默认读取 SDK 继续只读；另有独立的[实验性直接上传客户端](docs/pc/direct-upload.md)。受控私信的发送、单条读取和撤回已验证，见[私信文档](docs/pc/message.md)；精确详情接口未通过，支付未验证。','', '## 快速开始','','### 运行环境','','Node.js 24.11 或更新版本。查询目录和调用客户端无需安装第三方运行时依赖；运行提取工具及完整测试需要 `npm ci --ignore-scripts`。','','### 获取项目','','```sh','git clone https://github.com/Billy775326/bili-apis.git','cd bili-apis','```','','仓库访问权限以你的 GitHub 账号为准。','','### 查询和调用','','```sh','# 本地查询，不发送 API 请求','node bin/bili-web.mjs list --current-http --limit 100','','# 请求三条热门视频；此命令会发送匿名 HTTPS GET','node bin/bili-web.mjs call home.popular pn=1 ps=3','','# 从热门列表选取公开视频，串联详情和分 P 请求','node examples/pc-read.mjs','```','','## 按功能查找','',...table(['功能','接口入口','示例'],[['视频','[详情、分 P、相关视频、标签](docs/pc/video.md)','video.detail'],['播放','[播放地址与播放器](docs/pc/playback.md)','playback.url'],['搜索','[视频、综合搜索和搜索建议](docs/pc/search.md)','search.videos'],['评论','[评论列表与楼中楼](docs/pc/comment.md)','comment.main'],['用户空间','[合集、公告、追番、专栏等](docs/pc/user.md)','user.collections'],['关注与粉丝','[公开统计](docs/pc/relation.md)','user.relationStats'],['收藏','[公开收藏夹](docs/pc/favorite.md)','favorite.folders'],['动态','[热门动态](docs/pc/dynamic.md)','dynamic.hot'],['推荐','[热门与首页推荐](docs/pc/feed.md)','home.popular'],['直播','[房间状态和推荐](docs/pc/live.md)','live.roomBaseInfo']]),'','## 文档与示例','','- [完整接口索引](docs/pc/README.md)：每项包含用途、请求参数、调用示例、返回字段和验证状态。','- [按场景使用](docs/pc/usage.md)：热门视频到详情、搜索、评论下一页、空间和直播。','- [客户端配置与错误处理](docs/pc/client.md)：会话、超时、WBI、失败和调用入口。','- [匿名快照验证](docs/pc/current.md)与[历史验证](docs/pc/validation.md)：明确通过、失败、风控和跳过。','','## 项目结构','','```text','bin/                  命令行入口：bili-web 与 Android 目录查询','src/web-client.mjs    网页 匿名 GET 客户端及读取别名','src/pc-cases.mjs      字段断言','examples/             可执行的 网页 读取示例','docs/pc/              网页功能文档、使用场景及验证结果','docs/android/         包名/渠道/版本下的 APK 文档','catalog/android/com.bilibili.app.in/play/6.8.0/              脱敏目录、静态候选与 Android 元数据','evidence/             来源哈希与脱敏验证记录','scripts/              提取、复测和文档生成','tests/                离线测试','```','','## Android 研究资料','','[按包名、渠道及版本选择](docs/android/README.md) · [机器可读版本清单](catalog/android/editions.json)。网页目录独立维护，Android 声明不自动计为网页可调用接口。','','[官方 Android 静态目录与 Play 对比](docs/android/tv.danmaku.bili/official/9.19.0/README.md) · [历史 Play 目录与旧 CLI](docs/android/com.bilibili.app.in/play/6.8.0/README.md)。这些是独立静态证据，不自动作为网页可用性验证，也不导入 网页 客户端。','','## 验证与维护','','[公开数据边界与隐私检查](docs/privacy.md)：真实账号、消息、资源样本、凭据及个人路径禁止进入 Git；公开验证仅保留脱敏参数名、断言、状态和哈希。','','样本通过只覆盖记录的输入和字段；未保证所有视频、完整分页、登录角色、付费内容或未来版本。完整响应、账号 Cookie、动态签名及第三方脚本正文均留在本地忽略目录。','', '```sh','npm ci --ignore-scripts','npm test','npm run privacy:check','npm run docs:generate','```','','入口与接口详情页由 `scripts/build-pc-docs.mjs` 和 `scripts/pc-reference-docs.mjs` 生成；接口说明模板与参数释义在后者维护，验证数字来自已保存目录。生成文档不会发送 API 请求。','','文档组织参考 [cv-cat/DouYin_Spider]('+reference+') 的功能清单、快速开始和模块入口，以及其 API 方法对用途和参数的说明；Bilibili 的接口、客户端实现和验证结论由本仓库独立整理。','','项目处于未发布研究阶段，版本 `0.0.0` 尚无稳定兼容承诺。[更新日志](CHANGELOG.md)',''];
 files.set('README.md',readme.join('\n'));
 const client=['# 环境与 网页 客户端','','[功能导航](README.md) · [使用场景](usage.md) · [匿名快照](current.md) · [先前浏览器矩阵](full-validation.md) · [最新直接 HTTP](web-validation.md) · [受控私信](message.md)','','## 运行环境','','Node.js 24.11 或更新版本。在仓库根目录运行命令；查询目录、调用和执行示例不需要安装第三方运行时依赖。提取和完整离线测试需要安装开发依赖。','','```sh','npm ci --ignore-scripts','npm test','```','','Windows PowerShell 若阻止 npm.ps1，可使用 npm.cmd 执行相同命令。','','## 命令行入口','','```sh','# 离线查询匿名快照通过项','node bin/bili-web.mjs list --current-http --limit 100','node bin/bili-web.mjs show search.videos','','# 匿名读取','node bin/bili-web.mjs call home.popular pn=1 ps=3','node bin/bili-web.mjs call search.videos keyword=bilibili page=1','```','','只有 call 发送 API 请求；stats、list、show 和 candidates 读取本地目录。默认 list 显示历史至少一个匿名样本通过的地址；--current-http 只显示匿名快照相关 HTTP 用例全部通过的地址，--all 包含全部观察请求。','','## JavaScript 入口','','```js',"import { BiliWebClient } from './src/web-client.mjs';",'const client = new BiliWebClient({ timeoutMs: 15000 });',"const response = await client.call('search.videos', { keyword: 'bilibili', page: 1 });",'console.log(response.data.result);','```','','call 返回原始 JSON 对象，不将结果转换成统一列表。它检查 HTTP、JSON 与业务码；业务字段断言在复测脚本执行，实际使用时仍需检查返回结构。','','## 读取别名索引','',...table(['功能','别名','客户端必填','默认参数','WBI','匿名快照状态'],all.map(([n,s])=>['['+(PC_TITLES[n]||n)+']('+link(n)+')',n,s.required.join(', ')||'无',JSON.stringify(s.defaults||{}),s.wbi?'自动':'未启用',statusNames[currentFor(n)?.outcome||'not-selected']])),'','## 会话与客户端参数','',...table(['构造参数','默认值','行为'],[['timeoutMs','15000','毫秒；范围 1–120000，超时停止请求'],['cookie','空字符串','默认匿名；真实登录已在隔离 Chrome 验证，Node cookie 传输未在线验证'],['userAgent','bili-apis-pc-research/0.0.0','请求标识'],['fetchImpl','全局 fetch','用于传输或离线替身，不是代理配置'],['onObservation','空回调','接收请求观察和完整响应正文；回调应自行脱敏保管']]),'','命令行可以从本地环境 BILI_COOKIE 读取会话；不要把真实 Cookie 写入示例、提交、命令参数或聊天。参数允许有限字符串、数字和布尔值，不能传对象或数组；pagination_str 使用 JSON.stringify 后的字符串。','','## WBI','','启用 WBI 的别名会读取公开 nav 响应中的图片文件名，并按已读取的官方网页脚本整理参数及计算签名；wts 和 w_rid 由客户端添加。未登录的 nav 业务码不代表登录成功。动态数据仅在客户端内存缓存；长期运行需要更新时重新创建实例。','','[WBI 来源位置与哈希](../../evidence/pc-wbi-source.json)。WBI 不保证请求通过账号、地区或风控检查。客户端不自动重试，不提供绕过风控的承诺。','','## 错误处理','','```js',"import { BiliWebClient, BiliWebApiError } from './src/web-client.mjs';",'const client = new BiliWebClient();','try {',"  await client.call('search.videos', { keyword: 'bilibili', page: 1 });",'} catch (error) {','  if (error instanceof BiliWebApiError) {','    console.error(error.endpoint, error.httpStatus, error.businessCode, error.kind);','  } else {','    console.error(error.name); // 网络或调用参数错误','  }','}','```','',...table(['现象','解释','处理'],[['HTTP 非 2xx','HTTP 错误，包括重定向；客户端不会跟随重定向','保留 HTTP 状态并停止本次调用'],['业务码 -101','未登录或会话限制','需有效会话；浏览器验证与 Node 会话传输分别评估'],['业务码 -352 / HTTP 412','风控或访问限制','停止同类验证，不更换身份反复试探'],['业务码 -400','请求错误；具体原因需要核对参数与上下文','保留失败，不当作空结果'],['non-json-response','收到非 JSON 正文','不能当作 API 数据'],['response-size-limit','超过 4 MiB 响应上限','请求被取消，记录限制']]),'','## 直接 HTTP 上传与投稿','','读取客户端 `BiliWebClient` 仍只封装 GET。独立 `BiliUploadClient` 的真实 Node HTTP 上传、封面、投稿及读回已验证，详见[直接上传文档](direct-upload.md)。此前 UI 投稿含用户人工确认，仅作辅助观察。','','## 生成文档与复测','','文档生成离线读取已保存目录。接口说明模板维护在 scripts/pc-reference-docs.mjs；实时复测是独立动作。','','```sh','npm run docs:generate','node scripts/capture-pc-web.mjs --chrome /path/to/chrome --output .local/pc-run','node scripts/check-pc-web.mjs --run --output .local/pc-http --bvid BV1EXAMPLE01','node scripts/build-pc-web.mjs --capture .local/pc-run/capture.json --current-checks .local/pc-http/checks.json','npm run docs:generate','```','','复测前替换 Chrome 路径和合成 BVID。原始捕获、浏览器配置与完整响应放在忽略目录 .local；生成器只发布脱敏字段和哈希。新捕获需要已安装 Chrome/Chromium，CI 不访问 Bilibili。',''];
 files.set('docs/pc/client.md',client.join('\n'));

 return files;
}
