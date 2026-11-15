# 本轮 PC HTTP 验证

本轮仅使用匿名 HTTPS GET、当前公开 nav WBI 数据和已审阅的公开输入。每个方法/URL 取本轮最新报告，报告内全部相关用例通过才列为通过；同一评论地址包含首屏与下一页。历史成功与本轮结果分别保留。

共选择 39 个地址，执行或记录 41 个用例，其中 33 个地址的本轮字段用例通过。计数包含明确跳过，不等于全部网页接口。

```sh
node bin/bili-web.mjs list --current-http --limit 100
node bin/bili-web.mjs list --current-http --category user
```

| 功能/别名 | 方法与 URL | 最新 HTTP / 业务码 | 结果 | UTC 检查时间 |
| --- | --- | --- | --- | --- |
| 楼中楼回复 (comment.replies) | GET https://api.bilibili.com/x/v2/reply/reply | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 评论区说明 (comment.subject) | GET https://api.bilibili.com/x/v2/reply/subject/description | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 评论主列表 (comment.main) | GET https://api.bilibili.com/x/v2/reply/wbi/main | 200 / 0; 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 动态横幅 (dynamic.banner) | GET https://api.bilibili.com/x/dynamic/feed/dyn/banner | 200 / 0 | 字段断言未通过 | 2026-11-15T04:07:52.474Z |
| 热门动态 (dynamic.hot) | GET https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/hot | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 公开收藏夹列表 (favorite.folders) | GET https://api.bilibili.com/x/v3/fav/folder/created/list | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 番剧推荐 (home.ogv) | GET https://api.bilibili.com/x/web-interface/index/ogv/rcmd | 200 / -400 | 请求失败 | 2026-11-15T04:09:22.254Z |
| 热门视频 (home.popular) | GET https://api.bilibili.com/x/web-interface/popular | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 首页推荐 (home.recommendations) | GET https://api.bilibili.com/x/web-interface/wbi/index/top/feed/rcmd | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 直播推荐 (live.recommendations) | GET https://api.live.bilibili.com/xlive/web-interface/v1/webMain/getMoreRecList | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 直播间综合信息 (live.roomInfo) | GET https://api.live.bilibili.com/xlive/web-room/v1/index/getInfoByRoom | 200 / -352 | 风控或限速 | 2026-11-15T04:07:52.474Z |
| 直播间基础信息 (live.roomBaseInfo) | GET https://api.live.bilibili.com/xlive/web-room/v1/index/getRoomBaseInfo | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 直播间播放信息 (live.roomPlayInfo) | GET https://api.live.bilibili.com/xlive/web-room/v2/index/getRoomPlayInfo | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 笔记入口状态 (note.availability) | GET https://api.bilibili.com/x/note/is_forbid | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 公开笔记 (note.publicList) | GET https://api.bilibili.com/x/note/publish/list/archive | 200 / 0 | 字段断言未通过 | 2026-11-15T04:07:52.474Z |
| 在线观看人数 (video.online) | GET https://api.bilibili.com/x/player/online/total | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 播放地址元数据 (playback.url) | GET https://api.bilibili.com/x/player/wbi/playurl | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 播放器与字幕信息 (playback.info) | GET https://api.bilibili.com/x/player/wbi/v2 | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 广播连接配置 (playback.broadcastServers) | GET https://api.bilibili.com/x/web-interface/broadcast/servers | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 关注与粉丝数 (user.relationStats) | GET https://api.bilibili.com/x/relation/stat | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 搜索建议 (search.suggest) | GET https://api.bilibili.com/x/web-interface/suggest | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 综合搜索 (search.all) | GET https://api.bilibili.com/x/web-interface/wbi/search/all/v2 | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 默认搜索词 (search.default) | GET https://api.bilibili.com/x/web-interface/wbi/search/default | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 视频搜索 (search.videos) | GET https://api.bilibili.com/x/web-interface/wbi/search/type | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 空间合集与系列 (user.collections) | GET https://api.bilibili.com/x/polymer/web-space/home/seasons_series | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 公开追番 (user.followedBangumi) | GET https://api.bilibili.com/x/space/bangumi/follow/list | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 最近游戏列表 (user.games) | GET https://api.bilibili.com/x/space/lastplaygame/v2 | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 代表作 (user.masterpieces) | GET https://api.bilibili.com/x/space/masterpiece | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 空间内容计数 (user.counters) | GET https://api.bilibili.com/x/space/navnum | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 空间公告 (user.notice) | GET https://api.bilibili.com/x/space/notice | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 空间公开设置 (user.settings) | GET https://api.bilibili.com/x/space/setting | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 公开用户资料 (user.info) | GET https://api.bilibili.com/x/space/wbi/acc/info |  /  | 跳过 | 2026-11-15T04:07:52.474Z |
| 用户投稿列表 (user.uploads) | GET https://api.bilibili.com/x/space/wbi/arc/search | 412 / -412 | 风控或限速 | 2026-11-15T04:07:52.474Z |
| 空间专栏 (user.articles) | GET https://api.bilibili.com/x/space/wbi/article | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 分 P 列表 (video.pages) | GET https://api.bilibili.com/x/player/pagelist | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 视频标签 (video.tags) | GET https://api.bilibili.com/x/tag/archive/tags | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 相关视频 (video.related) | GET https://api.bilibili.com/x/web-interface/archive/related | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 视频详情及内嵌统计 (video.detail) | GET https://api.bilibili.com/x/web-interface/view | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |
| 视频详情聚合 (video.detailBundle) | GET https://api.bilibili.com/x/web-interface/wbi/view/detail | 200 / 0 | 本轮字段用例通过 | 2026-11-15T04:07:52.474Z |

## 未通过与限制

- dynamic.banner：字段断言未通过；HTTP 200 / code 0；未通过 banner-list.
- home.ogv：请求失败；HTTP 200 / code -400.
- live.roomInfo：风控或限速；HTTP 200 / code -352.
- note.publicList：字段断言未通过；HTTP 200 / code 0；未通过 note-page.
- user.info：跳过；HTTP 未请求 / code 未知，same-category-risk-response.
- user.uploads：风控或限速；HTTP 412 / code -412.

- 本轮公开视频普通评论首屏和下一页通过；历史其他视频失败仍保留，不能保证所有视频或无限翻页。
- 本轮浏览器记录：home, popular, search-all, search-videos, video；部分完成，CDP timeout: Page.navigate.
- 空列表通过只说明本次响应结构可读取；播放地址只验证元数据，没有下载媒体或验证会员/地区权益。
- 登录、个人历史、私信、发布、关注、点赞、删除和支付未执行。

[全部用例与断言](../../evidence/pc-http-checks.json) · [本轮脱敏 JSON](../../evidence/pc-current-validation.json) · [历史验证记录](validation.md)
