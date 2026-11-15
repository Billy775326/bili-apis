# 环境与 网页 客户端

[功能导航](README.md) · [使用场景](usage.md) · [匿名快照](current.md) · [先前浏览器矩阵](full-validation.md) · [最新直接 HTTP](web-validation.md) · [受控私信](message.md)

## 运行环境

Node.js 24.11 或更新版本。在仓库根目录运行命令；查询目录、调用和执行示例不需要安装第三方运行时依赖。提取和完整离线测试需要安装开发依赖。

```sh
npm ci --ignore-scripts
npm test
```

Windows PowerShell 若阻止 npm.ps1，可使用 npm.cmd 执行相同命令。

## 命令行入口

```sh
# 离线查询匿名快照通过项
node bin/bili-web.mjs list --current-http --limit 100
node bin/bili-web.mjs show search.videos

# 匿名读取
node bin/bili-web.mjs call home.popular pn=1 ps=3
node bin/bili-web.mjs call search.videos keyword=bilibili page=1
```

只有 call 发送 API 请求；stats、list、show 和 candidates 读取本地目录。默认 list 显示历史至少一个匿名样本通过的地址；--current-http 只显示匿名快照相关 HTTP 用例全部通过的地址，--all 包含全部观察请求。

## JavaScript 入口

```js
import { BiliWebClient } from './src/web-client.mjs';
const client = new BiliWebClient({ timeoutMs: 15000 });
const response = await client.call('search.videos', { keyword: 'bilibili', page: 1 });
console.log(response.data.result);
```

call 返回原始 JSON 对象，不将结果转换成统一列表。它检查 HTTP、JSON 与业务码；业务字段断言在复测脚本执行，实际使用时仍需检查返回结构。

## 读取别名索引

| 功能 | 别名 | 客户端必填 | 默认参数 | WBI | 匿名快照状态 |
| --- | --- | --- | --- | --- | --- |
| [视频详情及内嵌统计](video.md#video-detail) | video.detail | bvid | {} | 未启用 | ✅ 匿名快照 HTTP 字段用例通过 |
| [分 P 列表](video.md#video-pages) | video.pages | bvid | {} | 未启用 | ✅ 匿名快照 HTTP 字段用例通过 |
| [相关视频](video.md#video-related) | video.related | bvid | {} | 未启用 | ✅ 匿名快照 HTTP 字段用例通过 |
| [视频标签](video.md#video-tags) | video.tags | bvid | {} | 未启用 | ✅ 匿名快照 HTTP 字段用例通过 |
| [视频详情聚合](video.md#video-detailBundle) | video.detailBundle | aid | {} | 自动 | ✅ 匿名快照 HTTP 字段用例通过 |
| [在线观看人数](playback.md#video-online) | video.online | aid, cid | {} | 未启用 | ✅ 匿名快照 HTTP 字段用例通过 |
| [播放器与字幕信息](playback.md#playback-info) | playback.info | aid, cid | {} | 自动 | ✅ 匿名快照 HTTP 字段用例通过 |
| [播放地址元数据](playback.md#playback-url) | playback.url | bvid, cid | {"qn":32,"fnval":16} | 自动 | ✅ 匿名快照 HTTP 字段用例通过 |
| [视频搜索](search.md#search-videos) | search.videos | keyword | {"search_type":"video","page":1} | 自动 | ✅ 匿名快照 HTTP 字段用例通过 |
| [综合搜索](search.md#search-all) | search.all | keyword | {"page":1} | 自动 | ✅ 匿名快照 HTTP 字段用例通过 |
| [默认搜索词](search.md#search-default) | search.default | 无 | {} | 自动 | ✅ 匿名快照 HTTP 字段用例通过 |
| [评论主列表](comment.md#comment-main) | comment.main | oid | {"type":1,"mode":3,"pagination_str":"{\"offset\":\"\"}","plat":1,"web_location":1315875} | 自动 | ✅ 匿名快照 HTTP 字段用例通过 |
| [楼中楼回复](comment.md#comment-replies) | comment.replies | oid, root | {"type":1,"pn":1,"ps":10} | 未启用 | ✅ 匿名快照 HTTP 字段用例通过 |
| [公开用户资料](user.md#user-info) | user.info | mid | {} | 自动 | ⏭ 匿名快照跳过 |
| [关注与粉丝数](relation.md#user-relationStats) | user.relationStats | vmid | {} | 未启用 | ✅ 匿名快照 HTTP 字段用例通过 |
| [用户投稿列表](user.md#user-uploads) | user.uploads | mid | {"pn":1,"ps":25,"order":"pubdate"} | 自动 | ⚠️ 风控或限速 |
| [热门动态](dynamic.md#dynamic-hot) | dynamic.hot | 无 | {"page":1} | 未启用 | ✅ 匿名快照 HTTP 字段用例通过 |
| [公开收藏夹列表](favorite.md#favorite-folders) | favorite.folders | up_mid | {"pn":1,"ps":20} | 未启用 | ✅ 匿名快照 HTTP 字段用例通过 |
| [热门视频](feed.md#home-popular) | home.popular | 无 | {"pn":1,"ps":20} | 未启用 | ✅ 匿名快照 HTTP 字段用例通过 |
| [直播间播放信息](live.md#live-roomPlayInfo) | live.roomPlayInfo | room_id | {"protocol":"0,1","format":"0,1,2","codec":"0,1","qn":0,"platform":"web","ptype":8} | 未启用 | ✅ 匿名快照 HTTP 字段用例通过 |
| [搜索建议](search.md#search-suggest) | search.suggest | term | {} | 未启用 | ✅ 匿名快照 HTTP 字段用例通过 |
| [评论区说明](comment.md#comment-subject) | comment.subject | oid | {"type":1} | 未启用 | ✅ 匿名快照 HTTP 字段用例通过 |
| [空间合集与系列](user.md#user-collections) | user.collections | mid | {"page_num":1,"page_size":10} | 未启用 | ✅ 匿名快照 HTTP 字段用例通过 |
| [空间内容计数](user.md#user-counters) | user.counters | mid | {} | 未启用 | ✅ 匿名快照 HTTP 字段用例通过 |
| [空间公告](user.md#user-notice) | user.notice | mid | {} | 未启用 | ✅ 匿名快照 HTTP 字段用例通过 |
| [代表作](user.md#user-masterpieces) | user.masterpieces | vmid | {} | 未启用 | ✅ 匿名快照 HTTP 字段用例通过 |
| [公开追番](user.md#user-followedBangumi) | user.followedBangumi | vmid | {"type":1} | 自动 | ✅ 匿名快照 HTTP 字段用例通过 |
| [最近游戏列表](user.md#user-games) | user.games | mid | {} | 自动 | ✅ 匿名快照 HTTP 字段用例通过 |
| [空间专栏](user.md#user-articles) | user.articles | mid | {"pn":1,"ps":10} | 自动 | ✅ 匿名快照 HTTP 字段用例通过 |
| [空间公开设置](user.md#user-settings) | user.settings | mid | {} | 未启用 | ✅ 匿名快照 HTTP 字段用例通过 |
| [直播间基础信息](live.md#live-roomBaseInfo) | live.roomBaseInfo | room_ids | {"req_biz":"web_room_componet"} | 未启用 | ✅ 匿名快照 HTTP 字段用例通过 |
| [直播推荐](live.md#live-recommendations) | live.recommendations | 无 | {"platform":"web"} | 未启用 | ✅ 匿名快照 HTTP 字段用例通过 |
| [直播间综合信息](live.md#live-roomInfo) | live.roomInfo | room_id | {} | 自动 | ⚠️ 风控或限速 |
| [动态横幅](dynamic.md#dynamic-banner) | dynamic.banner | 无 | {} | 未启用 | ⚠️ 字段断言未通过 |
| [番剧推荐](feed.md#home-ogv) | home.ogv | 无 | {"season_type":1,"request_cnt":5,"brush":0,"fresh_type":0} | 未启用 | ⚠️ 请求失败 |
| [首页推荐](feed.md#home-recommendations) | home.recommendations | 无 | {"ps":3} | 自动 | ✅ 匿名快照 HTTP 字段用例通过 |
| [公开笔记](other.md#note-publicList) | note.publicList | oid | {"oid_type":0,"pn":1,"ps":3} | 未启用 | ⚠️ 字段断言未通过 |
| [笔记入口状态](other.md#note-availability) | note.availability | aid | {} | 未启用 | ✅ 匿名快照 HTTP 字段用例通过 |
| [广播连接配置](playback.md#playback-broadcastServers) | playback.broadcastServers | 无 | {"platform":"web"} | 未启用 | ✅ 匿名快照 HTTP 字段用例通过 |

## 会话与客户端参数

| 构造参数 | 默认值 | 行为 |
| --- | --- | --- |
| timeoutMs | 15000 | 毫秒；范围 1–120000，超时停止请求 |
| cookie | 空字符串 | 默认匿名；真实登录已在隔离 Chrome 验证，Node cookie 传输未在线验证 |
| userAgent | bili-apis-pc-research/0.0.0 | 请求标识 |
| fetchImpl | 全局 fetch | 用于传输或离线替身，不是代理配置 |
| onObservation | 空回调 | 接收请求观察和完整响应正文；回调应自行脱敏保管 |

命令行可以从本地环境 BILI_COOKIE 读取会话；不要把真实 Cookie 写入示例、提交、命令参数或聊天。参数允许有限字符串、数字和布尔值，不能传对象或数组；pagination_str 使用 JSON.stringify 后的字符串。

## WBI

启用 WBI 的别名会读取公开 nav 响应中的图片文件名，并按已读取的官方网页脚本整理参数及计算签名；wts 和 w_rid 由客户端添加。未登录的 nav 业务码不代表登录成功。动态数据仅在客户端内存缓存；长期运行需要更新时重新创建实例。

[WBI 来源位置与哈希](../../evidence/pc-wbi-source.json)。WBI 不保证请求通过账号、地区或风控检查。客户端不自动重试，不提供绕过风控的承诺。

## 错误处理

```js
import { BiliWebClient, BiliWebApiError } from './src/web-client.mjs';
const client = new BiliWebClient();
try {
  await client.call('search.videos', { keyword: 'bilibili', page: 1 });
} catch (error) {
  if (error instanceof BiliWebApiError) {
    console.error(error.endpoint, error.httpStatus, error.businessCode, error.kind);
  } else {
    console.error(error.name); // 网络或调用参数错误
  }
}
```

| 现象 | 解释 | 处理 |
| --- | --- | --- |
| HTTP 非 2xx | HTTP 错误，包括重定向；客户端不会跟随重定向 | 保留 HTTP 状态并停止本次调用 |
| 业务码 -101 | 未登录或会话限制 | 需有效会话；浏览器验证与 Node 会话传输分别评估 |
| 业务码 -352 / HTTP 412 | 风控或访问限制 | 停止同类验证，不更换身份反复试探 |
| 业务码 -400 | 请求错误；具体原因需要核对参数与上下文 | 保留失败，不当作空结果 |
| non-json-response | 收到非 JSON 正文 | 不能当作 API 数据 |
| response-size-limit | 超过 4 MiB 响应上限 | 请求被取消，记录限制 |

## 直接 HTTP 上传与投稿

读取客户端 `BiliWebClient` 仍只封装 GET。独立 `BiliUploadClient` 的真实 Node HTTP 上传、封面、投稿及读回已验证，详见[直接上传文档](direct-upload.md)。此前 UI 投稿含用户人工确认，仅作辅助观察。

## 生成文档与复测

文档生成离线读取已保存目录。接口说明模板维护在 scripts/pc-reference-docs.mjs；实时复测是独立动作。

```sh
npm run docs:generate
node scripts/capture-pc-web.mjs --chrome /path/to/chrome --output .local/pc-run
node scripts/check-pc-web.mjs --run --output .local/pc-http --bvid BV1EXAMPLE01
node scripts/build-pc-web.mjs --capture .local/pc-run/capture.json --current-checks .local/pc-http/checks.json
npm run docs:generate
```

复测前替换 Chrome 路径和合成 BVID。原始捕获、浏览器配置与完整响应放在忽略目录 .local；生成器只发布脱敏字段和哈希。新捕获需要已安装 Chrome/Chromium，CI 不访问 Bilibili。
