# PC 接口文档

按视频、搜索、评论、用户、收藏、动态、推荐和直播等功能组织。先在分类中选择接口，再看参数、调用示例和返回字段；本轮是否通过在每项旁单独标明。

当前封装 39 个只读别名，本轮 33 个地址通过相关匿名 HTTP 字段用例。

[使用场景与完整示例](usage.md) · [环境与客户端](client.md) · [本轮验证](current.md) · [验证历史](validation.md)

## 功能分类

| 功能模块 | 读取别名数 | 本轮通过 | 可做什么 |
| --- | --- | --- | --- |
| [视频详情与关联内容](video.md) | 5 | 5 | 视频详情及内嵌统计、分 P 列表、相关视频、视频标签、视频详情聚合 |
| [播放与在线人数](playback.md) | 4 | 4 | 在线观看人数、播放器与字幕信息、播放地址元数据、广播连接配置 |
| [搜索](search.md) | 4 | 4 | 视频搜索、综合搜索、默认搜索词、搜索建议 |
| [评论与楼中楼](comment.md) | 3 | 3 | 评论主列表、楼中楼回复、评论区说明 |
| [用户与空间](user.md) | 10 | 8 | 公开用户资料、用户投稿列表、空间合集与系列、空间内容计数、空间公告、代表作、公开追番、最近游戏列表、空间专栏、空间公开设置 |
| [关注与粉丝统计](relation.md) | 1 | 1 | 关注与粉丝数 |
| [公开收藏夹](favorite.md) | 1 | 1 | 公开收藏夹列表 |
| [动态](dynamic.md) | 2 | 1 | 热门动态、动态横幅 |
| [直播](live.md) | 4 | 3 | 直播间播放信息、直播间基础信息、直播推荐、直播间综合信息 |
| [推荐与热门](feed.md) | 3 | 2 | 热门视频、番剧推荐、首页推荐 |
| [登录状态](auth.md) | 0 | 0 | 网页观察记录，暂无客户端调用封装 |
| [网页配置与辅助请求](auxiliary.md) | 0 | 0 | 网页观察记录，暂无客户端调用封装 |
| [其他网页请求](other.md) | 2 | 1 | 公开笔记、笔记入口状态 |

## 接口索引

| 功能 | 别名 | 本轮状态 |
| --- | --- | --- |
| [视频详情及内嵌统计](video.md#video-detail) | `video.detail` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [分 P 列表](video.md#video-pages) | `video.pages` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [相关视频](video.md#video-related) | `video.related` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [视频标签](video.md#video-tags) | `video.tags` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [视频详情聚合](video.md#video-detailBundle) | `video.detailBundle` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [在线观看人数](playback.md#video-online) | `video.online` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [播放器与字幕信息](playback.md#playback-info) | `playback.info` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [播放地址元数据](playback.md#playback-url) | `playback.url` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [视频搜索](search.md#search-videos) | `search.videos` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [综合搜索](search.md#search-all) | `search.all` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [默认搜索词](search.md#search-default) | `search.default` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [评论主列表](comment.md#comment-main) | `comment.main` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [楼中楼回复](comment.md#comment-replies) | `comment.replies` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [公开用户资料](user.md#user-info) | `user.info` | ⏭ 本轮跳过 |
| [关注与粉丝数](relation.md#user-relationStats) | `user.relationStats` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [用户投稿列表](user.md#user-uploads) | `user.uploads` | ⚠️ 风控或限速 |
| [热门动态](dynamic.md#dynamic-hot) | `dynamic.hot` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [公开收藏夹列表](favorite.md#favorite-folders) | `favorite.folders` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [热门视频](feed.md#home-popular) | `home.popular` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [直播间播放信息](live.md#live-roomPlayInfo) | `live.roomPlayInfo` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [搜索建议](search.md#search-suggest) | `search.suggest` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [评论区说明](comment.md#comment-subject) | `comment.subject` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [空间合集与系列](user.md#user-collections) | `user.collections` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [空间内容计数](user.md#user-counters) | `user.counters` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [空间公告](user.md#user-notice) | `user.notice` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [代表作](user.md#user-masterpieces) | `user.masterpieces` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [公开追番](user.md#user-followedBangumi) | `user.followedBangumi` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [最近游戏列表](user.md#user-games) | `user.games` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [空间专栏](user.md#user-articles) | `user.articles` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [空间公开设置](user.md#user-settings) | `user.settings` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [直播间基础信息](live.md#live-roomBaseInfo) | `live.roomBaseInfo` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [直播推荐](live.md#live-recommendations) | `live.recommendations` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [直播间综合信息](live.md#live-roomInfo) | `live.roomInfo` | ⚠️ 风控或限速 |
| [动态横幅](dynamic.md#dynamic-banner) | `dynamic.banner` | ⚠️ 字段断言未通过 |
| [番剧推荐](feed.md#home-ogv) | `home.ogv` | ⚠️ 请求失败 |
| [首页推荐](feed.md#home-recommendations) | `home.recommendations` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [公开笔记](other.md#note-publicList) | `note.publicList` | ⚠️ 字段断言未通过 |
| [笔记入口状态](other.md#note-availability) | `note.availability` | ✅ 本轮匿名 HTTP 字段用例通过 |
| [广播连接配置](playback.md#playback-broadcastServers) | `playback.broadcastServers` | ✅ 本轮匿名 HTTP 字段用例通过 |

## 文档怎么读

- 参数表描述当前 SDK 的要求和默认值；网页观察到的额外参数不自动构成服务端契约。
- 示例中的资源 ID 是合成占位值；[完整示例](usage.md)可从热门列表取得真实公开输入。
- 返回字段用于定位数据，不等于完整 JSON Schema。空列表或单个样本成功不能保证完整分页。
- 风控、失败和跳过保留；[本轮结果](current.md)与[历史记录](validation.md)分别查看。
