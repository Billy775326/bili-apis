# 登录态 PC 网页全量验证矩阵

覆盖已建目录的 **82 组方法/URL**：76 个 GET 均有本次实际请求，6 个辅助 POST 按正常网页观察分级。这里的“全量”仅指该固定目录，不承诺 Bilibili 全站所有接口、角色及输入均已验证。

| 结果 | 地址数 |
| --- | --- |
| 字段用例通过 | 65 |
| 浏览器响应观察 | 5 |
| 仅历史浏览器观察 | 1 |
| JSON 无数值业务码 | 1 |
| 字段未满足（含空样本） | 4 |
| 业务错误 | 2 |
| Protobuf 结构通过 | 3 |
| 非 JSON 或 HTTP 错误 | 1 |

[功能导航](README.md) · [受控写操作](write-validation.md) · [直接 HTTP 上传](direct-upload.md) · [脱敏矩阵 JSON](../../catalog/pc-full-validation.json) · [匿名快照](current.md)

## 验证方法与结果边界

用户自行登录独立 Chrome 后，在渲染器中发送带会话的 GET；Cookie/CSRF 未导出。每项记录 HTTP、业务码、响应 SHA-256、字段断言和历史尝试。业务码为 0 仍需字段通过；二进制只按官方播放器消息元数据核对字段编号和 wire type。

本次用户样本改为自有账号，并修正部分资源参数；不能将与匿名结果的差异全部归因于登录。SDK 的 cookie 构造参数未用真实会话在线测试，现有 SDK 仍只封装 39 个只读别名。

### 未通过样本

- 动态 banner、笔记列表、预约、专栏四个地址返回空结构或缺少要求字段，保留失败；不等同于服务对全部用户不可用。
- 活动兑换列表和轮播使用从真实公开响应恢复的参数，均返回 202001；未执行兑换。
- risk/config 返回 JSON 但无数值业务码；archive/stat 返回 HTTP 404。视频统计可读 video.detail.data.stat。
- 三个 Protobuf 样本仅结构通过；字幕样本为空嵌套消息，没有验证字幕正文。
- 五个辅助 POST 有本次正常浏览器响应，gaia-vgate/register 仅历史观察；均不算字段用例通过。

## 按功能查看固定目录

### 登录状态

| 别名 / 用途路径 | 方法 | 最新 HTTP / 业务码 | 结果 | 尝试数 |
| --- | --- | --- | --- | --- |
| /x/web-interface/nav | GET | 200 / 0 | 字段用例通过 | 1 |
| /x/passport-login/web/cookie/info | GET | 200 / 0 | 字段用例通过 | 1 |

### 网页配置与辅助请求

| 别名 / 用途路径 | 方法 | 最新 HTTP / 业务码 | 结果 | 尝试数 |
| --- | --- | --- | --- | --- |
| /bapis/bilibili.api.ticket.v1.Ticket/GenWebTicket | POST | 200 / 0 | 浏览器响应观察 | 4 |
| /x/click-interface/click/now | GET | 200 / 0 | 字段用例通过 | 1 |
| /x/click-interface/click/web/h5 | POST | 200 / 0 | 浏览器响应观察 | 1 |
| /x/click-interface/web/heartbeat | POST | 200 / 0 | 浏览器响应观察 | 2 |
| /x/frontend/finger/spi | GET | 200 / 0 | 字段用例通过 | 1 |
| /x/gaia-vgate/v2/register | POST | 200 / 0 | 仅历史浏览器观察 | 1 |
| /x/internal/gaia-gateway/ExClimbCongLing | POST | 200 / 0 | 浏览器响应观察 | 2 |
| /x/internal/gaia-gateway/ExClimbWuzhi | POST | 200 / 0 | 浏览器响应观察 | 6 |
| /x/internal/gaia-gateway/ExGetAxe | GET | 200 / 0 | 字段用例通过 | 1 |
| /x/kv-frontend/namespace/data | GET | 200 / 0 | 字段用例通过 | 1 |
| /x/vip/ads/materials | GET | 200 / 0 | 字段用例通过 | 1 |
| /x/web-frontend/risk/config | GET | 200 / 未知 | JSON 无数值业务码 | 1 |
| /x/web-show/page/header/v2 | GET | 200 / 0 | 字段用例通过 | 1 |
| /x/web-show/res/locs | GET | 200 / 0 | 字段用例通过 | 1 |
| /x/web-show/wbi/res/locs | GET | 200 / 0 | 字段用例通过 | 1 |

### 评论与楼中楼

| 别名 / 用途路径 | 方法 | 最新 HTTP / 业务码 | 结果 | 尝试数 |
| --- | --- | --- | --- | --- |
| comment.replies | GET | 200 / 0 | 字段用例通过 | 1 |
| comment.subject | GET | 200 / 0 | 字段用例通过 | 1 |
| comment.main | GET | 200 / 0 | 字段用例通过 | 1 |

### 动态

| 别名 / 用途路径 | 方法 | 最新 HTTP / 业务码 | 结果 | 尝试数 |
| --- | --- | --- | --- | --- |
| dynamic.banner | GET | 200 / 0 | 字段未满足（含空样本） | 1 |
| dynamic.hot | GET | 200 / 0 | 字段用例通过 | 1 |

### 公开收藏夹

| 别名 / 用途路径 | 方法 | 最新 HTTP / 业务码 | 结果 | 尝试数 |
| --- | --- | --- | --- | --- |
| favorite.folders | GET | 200 / 0 | 字段用例通过 | 1 |

### 推荐与热门

| 别名 / 用途路径 | 方法 | 最新 HTTP / 业务码 | 结果 | 尝试数 |
| --- | --- | --- | --- | --- |
| home.ogv | GET | 200 / 0 | 字段用例通过 | 1 |
| home.popular | GET | 200 / 0 | 字段用例通过 | 1 |
| home.recommendations | GET | 200 / 0 | 字段用例通过 | 1 |

### 直播

| 别名 / 用途路径 | 方法 | 最新 HTTP / 业务码 | 结果 | 尝试数 |
| --- | --- | --- | --- | --- |
| /xlive/general-interface/v1/content/get | GET | 200 / 0 | 字段用例通过 | 2 |
| /xlive/general-interface/v1/content/getRevenueMd5 | GET | 200 / 0 | 字段用例通过 | 1 |
| live.recommendations | GET | 200 / 0 | 字段用例通过 | 1 |
| live.roomInfo | GET | 200 / 0 | 字段用例通过 | 1 |
| /xlive/web-room/v1/index/getIpInfo | GET | 200 / 0 | 字段用例通过 | 1 |
| live.roomBaseInfo | GET | 200 / 0 | 字段用例通过 | 1 |
| live.roomPlayInfo | GET | 200 / 0 | 字段用例通过 | 1 |

### 其他网页请求

| 别名 / 用途路径 | 方法 | 最新 HTTP / 业务码 | 结果 | 尝试数 |
| --- | --- | --- | --- | --- |
| /x/activity_components/eva_operation/object | GET | 200 / 0 | 字段用例通过 | 2 |
| /x/activity_components/exchange/list | GET | 200 / 202001 | 业务错误 | 2 |
| /x/activity_components/exchange/merry_go_round | GET | 200 / 202001 | 业务错误 | 2 |
| /x/esports/component/contests | GET | 200 / 0 | 字段用例通过 | 1 |
| /x/esports/contest/series/detail | GET | 200 / 0 | 字段用例通过 | 1 |
| /x/esports/contest/team/detail | GET | 200 / 0 | 字段用例通过 | 1 |
| /x/esports/season/series/knockout_match | GET | 200 / 0 | 字段用例通过 | 1 |
| /x/esports/stats/hero2/rank | GET | 200 / 0 | 字段用例通过 | 1 |
| note.availability | GET | 200 / 0 | 字段用例通过 | 1 |
| note.publicList | GET | 200 / 0 | 字段未满足（含空样本） | 1 |
| /x/task/totalv2 | GET | 200 / 0 | 字段用例通过 | 2 |
| /x/web-interface/relation | GET | 200 / 0 | 字段用例通过 | 3 |

### 播放与在线人数

| 别名 / 用途路径 | 方法 | 最新 HTTP / 业务码 | 结果 | 尝试数 |
| --- | --- | --- | --- | --- |
| /x/esports/stats/player/kda/rank | GET | 200 / 0 | 字段用例通过 | 1 |
| /x/esports/stats/player/mvp/rank | GET | 200 / 0 | 字段用例通过 | 1 |
| video.online | GET | 200 / 0 | 字段用例通过 | 1 |
| playback.url | GET | 200 / 0 | 字段用例通过 | 1 |
| playback.info | GET | 200 / 0 | 字段用例通过 | 1 |
| /x/v2/dm/wbi/web/seg.so | GET | 200 / 未知 | Protobuf 结构通过 | 1 |
| /x/v2/dm/web/view | GET | 200 / 未知 | Protobuf 结构通过 | 1 |
| /x/v2/subtitle/web/view | GET | 200 / 未知 | Protobuf 结构通过 | 1 |
| playback.broadcastServers | GET | 200 / 0 | 字段用例通过 | 1 |

### 关注与粉丝统计

| 别名 / 用途路径 | 方法 | 最新 HTTP / 业务码 | 结果 | 尝试数 |
| --- | --- | --- | --- | --- |
| /x/relation/relations | GET | 200 / 0 | 字段用例通过 | 3 |
| user.relationStats | GET | 200 / 0 | 字段用例通过 | 1 |

### 搜索

| 别名 / 用途路径 | 方法 | 最新 HTTP / 业务码 | 结果 | 尝试数 |
| --- | --- | --- | --- | --- |
| search.suggest | GET | 200 / 0 | 字段用例通过 | 1 |
| search.all | GET | 200 / 0 | 字段用例通过 | 1 |
| search.default | GET | 200 / 0 | 字段用例通过 | 1 |
| search.videos | GET | 200 / 0 | 字段用例通过 | 1 |

### 用户与空间

| 别名 / 用途路径 | 方法 | 最新 HTTP / 业务码 | 结果 | 尝试数 |
| --- | --- | --- | --- | --- |
| user.collections | GET | 200 / 0 | 字段用例通过 | 1 |
| user.followedBangumi | GET | 200 / 0 | 字段用例通过 | 1 |
| /x/space/coin/video | GET | 200 / 0 | 字段用例通过 | 1 |
| user.games | GET | 200 / 0 | 字段用例通过 | 1 |
| /x/space/like/video | GET | 200 / 0 | 字段用例通过 | 2 |
| user.masterpieces | GET | 200 / 0 | 字段用例通过 | 1 |
| user.counters | GET | 200 / 0 | 字段用例通过 | 1 |
| user.notice | GET | 200 / 0 | 字段用例通过 | 1 |
| /x/space/reservation | GET | 200 / 0 | 字段未满足（含空样本） | 1 |
| user.settings | GET | 200 / 0 | 字段用例通过 | 1 |
| /x/space/upstat | GET | 200 / 0 | 字段用例通过 | 1 |
| /x/space/v2/myinfo | GET | 200 / 0 | 字段用例通过 | 1 |
| user.info | GET | 200 / 0 | 字段用例通过 | 1 |
| /x/space/wbi/acc/relation | GET | 200 / 0 | 字段用例通过 | 1 |
| user.uploads | GET | 200 / 0 | 字段用例通过 | 1 |
| user.articles | GET | 200 / 0 | 字段未满足（含空样本） | 1 |

### 视频详情与关联内容

| 别名 / 用途路径 | 方法 | 最新 HTTP / 业务码 | 结果 | 尝试数 |
| --- | --- | --- | --- | --- |
| video.pages | GET | 200 / 0 | 字段用例通过 | 1 |
| video.tags | GET | 200 / 0 | 字段用例通过 | 1 |
| video.related | GET | 200 / 0 | 字段用例通过 | 1 |
| /x/web-interface/archive/stat | GET | 404 / 未知 | 非 JSON 或 HTTP 错误 | 1 |
| video.detail | GET | 200 / 0 | 字段用例通过 | 1 |
| video.detailBundle | GET | 200 / 0 | 字段用例通过 | 1 |

## 目录之外的正常网页观察

另发现 41 组方法/URL。下列只证明页面请求及响应被观察，不自动算字段或业务工作流通过；受控写操作的读回证据另列。

| 方法 | URL | 观察结果 |
| --- | --- | --- |
| GET | https://api.bilibili.com/x/product/user/recommendation/follow-up/recent/whitelist/status | 200 / 0 |
| GET | https://api.bilibili.com/x/web-interface/history/continuation | 200 / 0 |
| GET | https://api.bilibili.com/x/web-interface/dynamic/entrance | 200 / 0; 200 / 0; 200 / 0; 200 / 0 |
| GET | https://api.bilibili.com/x/v3/fav/folder/season/show | 200 / 0 |
| GET | https://api.bilibili.com/x/space/fav/nav | 200 / 0 |
| GET | https://api.bilibili.com/x/v3/fav/resource/list | 200 / 0; 200 / 0 |
| GET | https://api.bilibili.com/x/v3/fav/folder/created/list-all | 200 / 0 |
| GET | https://api.bilibili.com/x/v3/fav/folder/collected/list | 200 / 0 |
| GET | https://api.live.bilibili.com/xlive/open-interface/v1/fetch_client_resource | 200 / 0 |
| GET | https://api.live.bilibili.com/xlive/web-ucenter/user/get_user_info | 200 / 0 |
| GET | https://api.bilibili.com/x/web-interface/nav/stat | 200 / 0 |
| GET | https://api.live.bilibili.com/xlive/web-interface/v1/index/getListV2 | 200 / 0 |
| GET | https://api.live.bilibili.com/xlive/web-ucenter/v1/room/GetHomePageConfig | 200 / 0 |
| GET | https://api.live.bilibili.com/xlive/web-interface/v1/index/getAreaMask | 200 / 0 |
| GET | https://api.live.bilibili.com/xlive/web-ucenter/v1/banned/GetShieldInfo | 200 / 0 |
| GET | https://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo | 200 / 0 |
| GET | https://api.live.bilibili.com/xlive/open-interface/v2/tracker/conf | 200 / 0 |
| GET | https://api.bilibili.com//x/web-interface/search/default | 200 / 0 |
| GET | https://api.vc.bilibili.com/x/im/web/toast_msg | 200 / 0 |
| GET | https://api.vc.bilibili.com/link_setting/v1/link_setting/get | 200 / 0 |
| GET | https://api.vc.bilibili.com/link_setting/v1/link_setting/get_sys_setting | 200 / 0 |
| GET | https://api.vc.bilibili.com/session_svr/v1/session_svr/single_unread | 200 / 0 |
| GET | https://api.vc.bilibili.com/x/im/web/msgfeed/unread | 200 / 0 |
| GET | https://api.bilibili.com/x/relation/blacks | 200 / 0 |
| GET | https://api.vc.bilibili.com/session_svr/v1/session_svr/get_sessions | 200 / 0; 200 / 0; 200 / 0 |
| GET | https://api.vc.bilibili.com/session_svr/v1/session_svr/my_group_unread | 200 / 0 |
| GET | https://api.bilibili.com/x/polymer/pc-electron/v1/user/cards | 200 / 0 |
| GET | https://api.vc.bilibili.com/link_setting/v1/link_setting/is_limit | 200 / 0 |
| GET | https://message.bilibili.com/pages/nav/header_sync | 200 / 未知 |
| POST | https://member.bilibili.com/upload/file | 200 / 0 |
| GET | https://member.bilibili.com/x/vupre/web/archive/precheck | 200 / 0 |
| POST | https://member.bilibili.com/x/vupre/web/archive/types/predict | 200 / 0 |
| GET | https://member.bilibili.com/x/vupre/web/topic/type/v2 | 200 / 0; 200 / 0 |
| GET | https://member.bilibili.com/x/vupre/web/tag/recommend | 200 / 0 |
| POST | https://member.bilibili.com/upload/multipart/new | 200 / 0 |
| GET | https://member.bilibili.com/x/vupre/web/archive/aicover/taskquery | 200 / 0 |
| POST | https://member.bilibili.com/upload/multipart/part | 200 / 0 |
| POST | https://member.bilibili.com/x/vupre/web/archive/videocheck | 200 / 0 |
| POST | https://member.bilibili.com/upload/multipart/complete | 200 / 0 |
| POST | https://member.bilibili.com/x/vu/web/add/v3 | 200 / 0 |
| POST | https://api.bilibili.com/x/v2/dm/exposure | 200 / 0 |

## 复现与审计

离线检查与文档生成：

```sh
npm ci --ignore-scripts
npm test
npm run docs:generate
```

若本地已有本轮私有脱敏输入，可以重新汇总（公开仓库不附带账号环境或运行资料）：

```sh
node scripts/build-pc-full-validation.mjs --local .local/pc-full-validation
npm run docs:generate
```

`src/pc-browser-probe.mjs` 限定 GET、主机、响应容量和超时；`src/pc-full-checks.mjs` 提供额外字段及 wire 断言。当前没有一键登录态写入 CLI；本次写入由隔离浏览器和官方投稿 UI 驱动，私有一次性脚本不作为可分发 SDK。

[播放器消息字段来源与偏移](../../evidence/pc-wire-schema.json)由 `scripts/extract-pc-wire-schema.mjs --capture FILE --output FILE` 提取，保留脚本 SHA-256、字节及 UTF-16 偏移。

- Browser credentialed fetch was tested; Node BiliWebClient cookie transport was not live tested.
- Protobuf results validate wire structure against official player metadata, not decoded text or business semantics.
- No second controlled private-message recipient, creator/streamer roles or financial entitlements supplied. No messages, financial transfers, follows or paid actions were sent.
- 573 static candidate strings remain candidates. Unvisited pages, roles and runtime-generated routes may be missing.
- Original assertion failures and delayed read-after-write outcomes are retained. Empty feature samples are not promoted to success.
- Normal player reports and history changed; currentTime stayed zero and duration was unavailable, so actual media playback is unconfirmed.
- The earlier UI upload required user confirmation and is auxiliary evidence only; later direct HTTP proof is in evidence/pc-direct-upload-validation.json. Synthetic test video remains on the authorized test account. Temporary folders/comments/favorites were removed, like restored and newly created history removed.
- Response bodies and credentialed operator scripts remain private locally. Hashes and predicates permit audit of recorded conclusions, not independent reconstruction of raw traffic.
