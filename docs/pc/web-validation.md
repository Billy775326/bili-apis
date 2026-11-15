# 网页接口直接 HTTP 验证与未完成清单

接口按网页协议归类，不以电脑硬件区分。`docs/pc` 和 `pc-*` 是历史兼容路径；桌面 Chrome 仅表示之前的取证环境，不意味着所有移动网页或浏览器行为都已验证。

本轮独立 Node HTTP 请求不执行 UI、DOM、文件选择或页面按钮。此前真实写接口工作流继续作为单独证据；没有为刷新日期重复发表、点赞或删除已有账号内容。

固定目录 82 组方法/URL；已发现目录合计 137 组（含签名上传地址族）。逐项状态如下，不能将这些数字理解为全部成功。

| 固定目录结果 | 地址数 |
| --- | --- |
| field-case-passed | 66 |
| observation-only-not-directly-replayed | 6 |
| json-without-numeric-business-code | 1 |
| response-assertion-failed | 3 |
| business-error | 2 |
| protobuf-structure-passed | 3 |
| non-json-or-http-error | 1 |

## 固定目录按功能

### 登录状态

| 接口 | 方法 | 结果 | HTTP / 业务码 |
| --- | --- | --- | --- |
| /x/web-interface/nav | GET | field-case-passed | 200 / 0 |
| /x/passport-login/web/cookie/info | GET | field-case-passed | 200 / 0 |

### 网页配置与辅助请求

| 接口 | 方法 | 结果 | HTTP / 业务码 |
| --- | --- | --- | --- |
| /bapis/bilibili.api.ticket.v1.Ticket/GenWebTicket | POST | observation-only-not-directly-replayed | 未执行 / 未知 |
| /x/click-interface/click/now | GET | field-case-passed | 200 / 0 |
| /x/click-interface/click/web/h5 | POST | observation-only-not-directly-replayed | 未执行 / 未知 |
| /x/click-interface/web/heartbeat | POST | observation-only-not-directly-replayed | 未执行 / 未知 |
| /x/frontend/finger/spi | GET | field-case-passed | 200 / 0 |
| /x/gaia-vgate/v2/register | POST | observation-only-not-directly-replayed | 未执行 / 未知 |
| /x/internal/gaia-gateway/ExClimbCongLing | POST | observation-only-not-directly-replayed | 未执行 / 未知 |
| /x/internal/gaia-gateway/ExClimbWuzhi | POST | observation-only-not-directly-replayed | 未执行 / 未知 |
| /x/internal/gaia-gateway/ExGetAxe | GET | field-case-passed | 200 / 0 |
| /x/kv-frontend/namespace/data | GET | field-case-passed | 200 / 0 |
| /x/vip/ads/materials | GET | field-case-passed | 200 / 0 |
| /x/web-frontend/risk/config | GET | json-without-numeric-business-code | 200 / 未知 |
| /x/web-show/page/header/v2 | GET | field-case-passed | 200 / 0 |
| /x/web-show/res/locs | GET | field-case-passed | 200 / 0 |
| /x/web-show/wbi/res/locs | GET | field-case-passed | 200 / 0 |

### 评论与楼中楼

| 接口 | 方法 | 结果 | HTTP / 业务码 |
| --- | --- | --- | --- |
| comment.replies | GET | field-case-passed | 200 / 0 |
| comment.subject | GET | field-case-passed | 200 / 0 |
| comment.main | GET | field-case-passed | 200 / 0 |

### 动态

| 接口 | 方法 | 结果 | HTTP / 业务码 |
| --- | --- | --- | --- |
| dynamic.banner | GET | response-assertion-failed | 200 / 0 |
| dynamic.hot | GET | field-case-passed | 200 / 0 |

### 公开收藏夹

| 接口 | 方法 | 结果 | HTTP / 业务码 |
| --- | --- | --- | --- |
| favorite.folders | GET | field-case-passed | 200 / 0 |

### 推荐与热门

| 接口 | 方法 | 结果 | HTTP / 业务码 |
| --- | --- | --- | --- |
| home.ogv | GET | field-case-passed | 200 / 0 |
| home.popular | GET | field-case-passed | 200 / 0 |
| home.recommendations | GET | field-case-passed | 200 / 0 |

### 直播

| 接口 | 方法 | 结果 | HTTP / 业务码 |
| --- | --- | --- | --- |
| /xlive/general-interface/v1/content/get | GET | field-case-passed | 200 / 0 |
| /xlive/general-interface/v1/content/getRevenueMd5 | GET | field-case-passed | 200 / 0 |
| live.recommendations | GET | field-case-passed | 200 / 0 |
| live.roomInfo | GET | field-case-passed | 200 / 0 |
| /xlive/web-room/v1/index/getIpInfo | GET | field-case-passed | 200 / 0 |
| live.roomBaseInfo | GET | field-case-passed | 200 / 0 |
| live.roomPlayInfo | GET | field-case-passed | 200 / 0 |

### 其他网页请求

| 接口 | 方法 | 结果 | HTTP / 业务码 |
| --- | --- | --- | --- |
| /x/activity_components/eva_operation/object | GET | field-case-passed | 200 / 0 |
| /x/activity_components/exchange/list | GET | business-error | 200 / 202001 |
| /x/activity_components/exchange/merry_go_round | GET | business-error | 200 / 202001 |
| /x/esports/component/contests | GET | field-case-passed | 200 / 0 |
| /x/esports/contest/series/detail | GET | field-case-passed | 200 / 0 |
| /x/esports/contest/team/detail | GET | field-case-passed | 200 / 0 |
| /x/esports/season/series/knockout_match | GET | field-case-passed | 200 / 0 |
| /x/esports/stats/hero2/rank | GET | field-case-passed | 200 / 0 |
| note.availability | GET | field-case-passed | 200 / 0 |
| note.publicList | GET | response-assertion-failed | 200 / 0 |
| /x/task/totalv2 | GET | field-case-passed | 200 / 0 |
| /x/web-interface/relation | GET | field-case-passed | 200 / 0 |

### 播放与在线人数

| 接口 | 方法 | 结果 | HTTP / 业务码 |
| --- | --- | --- | --- |
| /x/esports/stats/player/kda/rank | GET | field-case-passed | 200 / 0 |
| /x/esports/stats/player/mvp/rank | GET | field-case-passed | 200 / 0 |
| video.online | GET | field-case-passed | 200 / 0 |
| playback.url | GET | field-case-passed | 200 / 0 |
| playback.info | GET | field-case-passed | 200 / 0 |
| /x/v2/dm/wbi/web/seg.so | GET | protobuf-structure-passed | 200 / 未知 |
| /x/v2/dm/web/view | GET | protobuf-structure-passed | 200 / 未知 |
| /x/v2/subtitle/web/view | GET | protobuf-structure-passed | 200 / 未知 |
| playback.broadcastServers | GET | field-case-passed | 200 / 0 |

### 关注与粉丝统计

| 接口 | 方法 | 结果 | HTTP / 业务码 |
| --- | --- | --- | --- |
| /x/relation/relations | GET | field-case-passed | 200 / 0 |
| user.relationStats | GET | field-case-passed | 200 / 0 |

### 搜索

| 接口 | 方法 | 结果 | HTTP / 业务码 |
| --- | --- | --- | --- |
| search.suggest | GET | field-case-passed | 200 / 0 |
| search.all | GET | field-case-passed | 200 / 0 |
| search.default | GET | field-case-passed | 200 / 0 |
| search.videos | GET | field-case-passed | 200 / 0 |

### 用户与空间

| 接口 | 方法 | 结果 | HTTP / 业务码 |
| --- | --- | --- | --- |
| user.collections | GET | field-case-passed | 200 / 0 |
| user.followedBangumi | GET | field-case-passed | 200 / 0 |
| /x/space/coin/video | GET | field-case-passed | 200 / 0 |
| user.games | GET | field-case-passed | 200 / 0 |
| /x/space/like/video | GET | field-case-passed | 200 / 0 |
| user.masterpieces | GET | field-case-passed | 200 / 0 |
| user.counters | GET | field-case-passed | 200 / 0 |
| user.notice | GET | field-case-passed | 200 / 0 |
| /x/space/reservation | GET | response-assertion-failed | 200 / 0 |
| user.settings | GET | field-case-passed | 200 / 0 |
| /x/space/upstat | GET | field-case-passed | 200 / 0 |
| /x/space/v2/myinfo | GET | field-case-passed | 200 / 0 |
| user.info | GET | field-case-passed | 200 / 0 |
| /x/space/wbi/acc/relation | GET | field-case-passed | 200 / 0 |
| user.uploads | GET | field-case-passed | 200 / 0 |
| user.articles | GET | field-case-passed | 200 / 0 |

### 视频详情与关联内容

| 接口 | 方法 | 结果 | HTTP / 业务码 |
| --- | --- | --- | --- |
| video.pages | GET | field-case-passed | 200 / 0 |
| video.tags | GET | field-case-passed | 200 / 0 |
| video.related | GET | field-case-passed | 200 / 0 |
| /x/web-interface/archive/stat | GET | non-json-or-http-error | 404 / 未知 |
| video.detail | GET | field-case-passed | 200 / 0 |
| video.detailBundle | GET | field-case-passed | 200 / 0 |

## 目录外 GET 与缺失参数

| 地址 | 结果 | 未提供的历史参数（不代表均必填） |
| --- | --- | --- |
| https://api.bilibili.com/x/product/user/recommendation/follow-up/recent/whitelist/status | direct-business-acknowledged | — |
| https://api.bilibili.com/x/web-interface/history/continuation | direct-business-acknowledged | his_exp |
| https://api.bilibili.com/x/web-interface/dynamic/entrance | direct-business-acknowledged | alltype_offset, article_offset, video_offset |
| https://api.bilibili.com/x/v3/fav/folder/season/show | direct-business-acknowledged | — |
| https://api.bilibili.com/x/space/fav/nav | direct-business-acknowledged | — |
| https://api.bilibili.com/x/v3/fav/resource/list | direct-business-acknowledged | media_id, tid |
| https://api.bilibili.com/x/v3/fav/folder/created/list-all | direct-business-acknowledged | — |
| https://api.bilibili.com/x/v3/fav/folder/collected/list | direct-business-acknowledged | — |
| https://api.live.bilibili.com/xlive/open-interface/v1/fetch_client_resource | direct-business-acknowledged | — |
| https://api.live.bilibili.com/xlive/web-ucenter/user/get_user_info | direct-business-acknowledged | — |
| https://api.bilibili.com/x/web-interface/nav/stat | direct-business-acknowledged | — |
| https://api.live.bilibili.com/xlive/web-interface/v1/index/getListV2 | direct-business-acknowledged | — |
| https://api.live.bilibili.com/xlive/web-ucenter/v1/room/GetHomePageConfig | direct-business-acknowledged | — |
| https://api.live.bilibili.com/xlive/web-interface/v1/index/getAreaMask | direct-business-acknowledged | area_id, ruid |
| https://api.live.bilibili.com/xlive/web-ucenter/v1/banned/GetShieldInfo | direct-business-acknowledged | — |
| https://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo | risk-or-rate-response | id, w_rid, wts |
| https://api.live.bilibili.com/xlive/open-interface/v2/tracker/conf | not-executed-risk-stop | protocol, roomid, stream, timeshift |
| https://api.bilibili.com//x/web-interface/search/default | direct-business-acknowledged | — |
| https://api.vc.bilibili.com/x/im/web/toast_msg | direct-business-acknowledged | build, mobi_app, statistics |
| https://api.vc.bilibili.com/link_setting/v1/link_setting/get | direct-business-acknowledged | build, mobi_app, msg_notify, show_unfollowed_msg, statistics |
| https://api.vc.bilibili.com/link_setting/v1/link_setting/get_sys_setting | direct-business-acknowledged | build, mobi_app, statistics |
| https://api.vc.bilibili.com/session_svr/v1/session_svr/single_unread | direct-business-acknowledged | build, mobi_app, show_dustbin, statistics, unread_type |
| https://api.vc.bilibili.com/x/im/web/msgfeed/unread | direct-business-acknowledged | build, mobi_app, statistics |
| https://api.bilibili.com/x/relation/blacks | direct-business-acknowledged | cross_domain, statistics |
| https://api.vc.bilibili.com/session_svr/v1/session_svr/get_sessions | business-error | build, group_fold, mobi_app, session_type, size, sort_rule, statistics, unfollow_fold, w_rid, wts |
| https://api.vc.bilibili.com/session_svr/v1/session_svr/my_group_unread | direct-business-acknowledged | statistics |
| https://api.bilibili.com/x/polymer/pc-electron/v1/user/cards | direct-business-acknowledged | build, mobi_app, statistics, uids |
| https://api.vc.bilibili.com/link_setting/v1/link_setting/is_limit | direct-business-acknowledged | build, mobi_app, statistics, uid |
| https://message.bilibili.com/pages/nav/header_sync | unconfirmed-response | — |
| https://member.bilibili.com/x/vupre/web/archive/precheck | business-error | check_item, content, t |
| https://member.bilibili.com/x/vupre/web/topic/type/v2 | direct-business-acknowledged | platform, pn, ps, t, title, track_id, type_id, type_pid, upload_id, zip_url |
| https://member.bilibili.com/x/vupre/web/tag/recommend | direct-business-acknowledged | cover_url, description, filename, subtype_id, t, title, upload_id |
| https://member.bilibili.com/x/vupre/web/archive/aicover/taskquery | direct-business-acknowledged | cid, filename, source, t |

## 全部已发现方法与地址

| 功能来源 | 方法与地址 | 证据状态 |
| --- | --- | --- |
| auth | GET https://api.bilibili.com/x/web-interface/nav | field-case-passed |
| auth | GET https://passport.bilibili.com/x/passport-login/web/cookie/info | field-case-passed |
| auxiliary | POST https://api.bilibili.com/bapis/bilibili.api.ticket.v1.Ticket/GenWebTicket | observation-only-not-directly-replayed |
| auxiliary | GET https://api.bilibili.com/x/click-interface/click/now | field-case-passed |
| auxiliary | POST https://api.bilibili.com/x/click-interface/click/web/h5 | observation-only-not-directly-replayed |
| auxiliary | POST https://api.bilibili.com/x/click-interface/web/heartbeat | observation-only-not-directly-replayed |
| auxiliary | GET https://api.bilibili.com/x/frontend/finger/spi | field-case-passed |
| auxiliary | POST https://api.bilibili.com/x/gaia-vgate/v2/register | observation-only-not-directly-replayed |
| auxiliary | POST https://api.bilibili.com/x/internal/gaia-gateway/ExClimbCongLing | observation-only-not-directly-replayed |
| auxiliary | POST https://api.bilibili.com/x/internal/gaia-gateway/ExClimbWuzhi | observation-only-not-directly-replayed |
| auxiliary | GET https://api.bilibili.com/x/internal/gaia-gateway/ExGetAxe | field-case-passed |
| auxiliary | GET https://api.bilibili.com/x/kv-frontend/namespace/data | field-case-passed |
| auxiliary | GET https://api.bilibili.com/x/vip/ads/materials | field-case-passed |
| auxiliary | GET https://api.bilibili.com/x/web-frontend/risk/config | json-without-numeric-business-code |
| auxiliary | GET https://api.bilibili.com/x/web-show/page/header/v2 | field-case-passed |
| auxiliary | GET https://api.bilibili.com/x/web-show/res/locs | field-case-passed |
| auxiliary | GET https://api.bilibili.com/x/web-show/wbi/res/locs | field-case-passed |
| comment | GET https://api.bilibili.com/x/v2/reply/reply | field-case-passed |
| comment | GET https://api.bilibili.com/x/v2/reply/subject/description | field-case-passed |
| comment | GET https://api.bilibili.com/x/v2/reply/wbi/main | field-case-passed |
| dynamic | GET https://api.bilibili.com/x/dynamic/feed/dyn/banner | response-assertion-failed |
| dynamic | GET https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/hot | field-case-passed |
| favorite | GET https://api.bilibili.com/x/v3/fav/folder/created/list | field-case-passed |
| feed | GET https://api.bilibili.com/x/web-interface/index/ogv/rcmd | field-case-passed |
| feed | GET https://api.bilibili.com/x/web-interface/popular | field-case-passed |
| feed | GET https://api.bilibili.com/x/web-interface/wbi/index/top/feed/rcmd | field-case-passed |
| live | GET https://api.live.bilibili.com/xlive/general-interface/v1/content/get | field-case-passed |
| live | GET https://api.live.bilibili.com/xlive/general-interface/v1/content/getRevenueMd5 | field-case-passed |
| live | GET https://api.live.bilibili.com/xlive/web-interface/v1/webMain/getMoreRecList | field-case-passed |
| live | GET https://api.live.bilibili.com/xlive/web-room/v1/index/getInfoByRoom | field-case-passed |
| live | GET https://api.live.bilibili.com/xlive/web-room/v1/index/getIpInfo | field-case-passed |
| live | GET https://api.live.bilibili.com/xlive/web-room/v1/index/getRoomBaseInfo | field-case-passed |
| live | GET https://api.live.bilibili.com/xlive/web-room/v2/index/getRoomPlayInfo | field-case-passed |
| other | GET https://api.bilibili.com/x/activity_components/eva_operation/object | field-case-passed |
| other | GET https://api.bilibili.com/x/activity_components/exchange/list | business-error |
| other | GET https://api.bilibili.com/x/activity_components/exchange/merry_go_round | business-error |
| other | GET https://api.bilibili.com/x/esports/component/contests | field-case-passed |
| other | GET https://api.bilibili.com/x/esports/contest/series/detail | field-case-passed |
| other | GET https://api.bilibili.com/x/esports/contest/team/detail | field-case-passed |
| other | GET https://api.bilibili.com/x/esports/season/series/knockout_match | field-case-passed |
| other | GET https://api.bilibili.com/x/esports/stats/hero2/rank | field-case-passed |
| other | GET https://api.bilibili.com/x/note/is_forbid | field-case-passed |
| other | GET https://api.bilibili.com/x/note/publish/list/archive | response-assertion-failed |
| other | GET https://api.bilibili.com/x/task/totalv2 | field-case-passed |
| other | GET https://api.bilibili.com/x/web-interface/relation | field-case-passed |
| playback | GET https://api.bilibili.com/x/esports/stats/player/kda/rank | field-case-passed |
| playback | GET https://api.bilibili.com/x/esports/stats/player/mvp/rank | field-case-passed |
| playback | GET https://api.bilibili.com/x/player/online/total | field-case-passed |
| playback | GET https://api.bilibili.com/x/player/wbi/playurl | field-case-passed |
| playback | GET https://api.bilibili.com/x/player/wbi/v2 | field-case-passed |
| playback | GET https://api.bilibili.com/x/v2/dm/wbi/web/seg.so | protobuf-structure-passed |
| playback | GET https://api.bilibili.com/x/v2/dm/web/view | protobuf-structure-passed |
| playback | GET https://api.bilibili.com/x/v2/subtitle/web/view | protobuf-structure-passed |
| playback | GET https://api.bilibili.com/x/web-interface/broadcast/servers | field-case-passed |
| relation | GET https://api.bilibili.com/x/relation/relations | field-case-passed |
| relation | GET https://api.bilibili.com/x/relation/stat | field-case-passed |
| search | GET https://api.bilibili.com/x/web-interface/suggest | field-case-passed |
| search | GET https://api.bilibili.com/x/web-interface/wbi/search/all/v2 | field-case-passed |
| search | GET https://api.bilibili.com/x/web-interface/wbi/search/default | field-case-passed |
| search | GET https://api.bilibili.com/x/web-interface/wbi/search/type | field-case-passed |
| user | GET https://api.bilibili.com/x/polymer/web-space/home/seasons_series | field-case-passed |
| user | GET https://api.bilibili.com/x/space/bangumi/follow/list | field-case-passed |
| user | GET https://api.bilibili.com/x/space/coin/video | field-case-passed |
| user | GET https://api.bilibili.com/x/space/lastplaygame/v2 | field-case-passed |
| user | GET https://api.bilibili.com/x/space/like/video | field-case-passed |
| user | GET https://api.bilibili.com/x/space/masterpiece | field-case-passed |
| user | GET https://api.bilibili.com/x/space/navnum | field-case-passed |
| user | GET https://api.bilibili.com/x/space/notice | field-case-passed |
| user | GET https://api.bilibili.com/x/space/reservation | response-assertion-failed |
| user | GET https://api.bilibili.com/x/space/setting | field-case-passed |
| user | GET https://api.bilibili.com/x/space/upstat | field-case-passed |
| user | GET https://api.bilibili.com/x/space/v2/myinfo | field-case-passed |
| user | GET https://api.bilibili.com/x/space/wbi/acc/info | field-case-passed |
| user | GET https://api.bilibili.com/x/space/wbi/acc/relation | field-case-passed |
| user | GET https://api.bilibili.com/x/space/wbi/arc/search | field-case-passed |
| user | GET https://api.bilibili.com/x/space/wbi/article | field-case-passed |
| video | GET https://api.bilibili.com/x/player/pagelist | field-case-passed |
| video | GET https://api.bilibili.com/x/tag/archive/tags | field-case-passed |
| video | GET https://api.bilibili.com/x/web-interface/archive/related | field-case-passed |
| video | GET https://api.bilibili.com/x/web-interface/archive/stat | non-json-or-http-error |
| video | GET https://api.bilibili.com/x/web-interface/view | field-case-passed |
| video | GET https://api.bilibili.com/x/web-interface/wbi/view/detail | field-case-passed |
| additional | GET https://api.bilibili.com/x/product/user/recommendation/follow-up/recent/whitelist/status | direct-business-acknowledged |
| additional | GET https://api.bilibili.com/x/web-interface/history/continuation | direct-business-acknowledged |
| additional | GET https://api.bilibili.com/x/web-interface/dynamic/entrance | direct-business-acknowledged |
| additional | GET https://api.bilibili.com/x/v3/fav/folder/season/show | direct-business-acknowledged |
| additional | GET https://api.bilibili.com/x/space/fav/nav | direct-business-acknowledged |
| additional | GET https://api.bilibili.com/x/v3/fav/resource/list | direct-business-acknowledged |
| additional | GET https://api.bilibili.com/x/v3/fav/folder/created/list-all | direct-business-acknowledged |
| additional | GET https://api.bilibili.com/x/v3/fav/folder/collected/list | direct-business-acknowledged |
| additional | GET https://api.live.bilibili.com/xlive/open-interface/v1/fetch_client_resource | direct-business-acknowledged |
| additional | GET https://api.live.bilibili.com/xlive/web-ucenter/user/get_user_info | direct-business-acknowledged |
| additional | GET https://api.bilibili.com/x/web-interface/nav/stat | direct-business-acknowledged |
| additional | GET https://api.live.bilibili.com/xlive/web-interface/v1/index/getListV2 | direct-business-acknowledged |
| additional | GET https://api.live.bilibili.com/xlive/web-ucenter/v1/room/GetHomePageConfig | direct-business-acknowledged |
| additional | GET https://api.live.bilibili.com/xlive/web-interface/v1/index/getAreaMask | direct-business-acknowledged |
| additional | GET https://api.live.bilibili.com/xlive/web-ucenter/v1/banned/GetShieldInfo | direct-business-acknowledged |
| additional | GET https://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo | risk-or-rate-response |
| additional | GET https://api.live.bilibili.com/xlive/open-interface/v2/tracker/conf | not-executed-risk-stop |
| additional | GET https://api.bilibili.com//x/web-interface/search/default | direct-business-acknowledged |
| additional | GET https://api.vc.bilibili.com/x/im/web/toast_msg | direct-business-acknowledged |
| additional | GET https://api.vc.bilibili.com/link_setting/v1/link_setting/get | direct-business-acknowledged |
| additional | GET https://api.vc.bilibili.com/link_setting/v1/link_setting/get_sys_setting | direct-business-acknowledged |
| additional | GET https://api.vc.bilibili.com/session_svr/v1/session_svr/single_unread | direct-business-acknowledged |
| additional | GET https://api.vc.bilibili.com/x/im/web/msgfeed/unread | direct-business-acknowledged |
| additional | GET https://api.bilibili.com/x/relation/blacks | direct-business-acknowledged |
| additional | GET https://api.vc.bilibili.com/session_svr/v1/session_svr/get_sessions | business-error |
| additional | GET https://api.vc.bilibili.com/session_svr/v1/session_svr/my_group_unread | direct-business-acknowledged |
| additional | GET https://api.bilibili.com/x/polymer/pc-electron/v1/user/cards | direct-business-acknowledged |
| additional | GET https://api.vc.bilibili.com/link_setting/v1/link_setting/is_limit | direct-business-acknowledged |
| additional | GET https://message.bilibili.com/pages/nav/header_sync | unconfirmed-response |
| additional | POST https://member.bilibili.com/upload/file | observation-only-not-directly-replayed |
| additional | GET https://member.bilibili.com/x/vupre/web/archive/precheck | business-error |
| additional | POST https://member.bilibili.com/x/vupre/web/archive/types/predict | observation-only-not-directly-replayed |
| additional | GET https://member.bilibili.com/x/vupre/web/topic/type/v2 | direct-business-acknowledged |
| additional | GET https://member.bilibili.com/x/vupre/web/tag/recommend | direct-business-acknowledged |
| upload | POST https://member.bilibili.com/upload/multipart/new | prior-direct-workflow-evidence |
| additional | GET https://member.bilibili.com/x/vupre/web/archive/aicover/taskquery | direct-business-acknowledged |
| upload | POST https://member.bilibili.com/upload/multipart/part | prior-direct-workflow-evidence |
| additional | POST https://member.bilibili.com/x/vupre/web/archive/videocheck | observation-only-not-directly-replayed |
| upload | POST https://member.bilibili.com/upload/multipart/complete | prior-direct-workflow-evidence |
| upload | POST https://member.bilibili.com/x/vu/web/add/v3 | prior-direct-workflow-evidence |
| additional | POST https://api.bilibili.com/x/v2/dm/exposure | observation-only-not-directly-replayed |
| upload | PUT https://jscs-luffy-upcdntx.bilivideo.com/[signed-upload] | prior-direct-workflow-evidence |
| upload | POST https://member.bilibili.com/x/vu/web/cover/up | prior-direct-workflow-evidence |
| upload | GET https://member.bilibili.com/x/vupre/web/archive/view | prior-direct-workflow-evidence |
| controlled-write | POST https://api.bilibili.com/x/v3/fav/folder/add | prior-direct-workflow-evidence |
| controlled-write | POST https://api.bilibili.com/x/v3/fav/folder/edit | prior-direct-workflow-evidence |
| controlled-write | POST https://api.bilibili.com/x/v3/fav/folder/del | prior-direct-workflow-evidence |
| controlled-write | GET https://api.bilibili.com/x/v3/fav/folder/info | prior-direct-workflow-evidence |
| controlled-write | POST https://api.bilibili.com/x/v3/fav/resource/deal | prior-direct-workflow-evidence |
| controlled-write | POST https://api.bilibili.com/x/v2/reply/add | prior-direct-workflow-evidence |
| controlled-write | POST https://api.bilibili.com/x/v2/reply/del | prior-direct-workflow-evidence |
| controlled-write | POST https://api.bilibili.com/x/web-interface/archive/like | prior-direct-workflow-evidence |
| controlled-write | GET https://api.bilibili.com/x/web-interface/archive/relation | prior-direct-workflow-evidence |
| controlled-write | GET https://api.bilibili.com/x/web-interface/history/cursor | prior-direct-workflow-evidence |
| controlled-write | POST https://api.bilibili.com/x/v2/history/delete | prior-direct-workflow-evidence |

## 仍需资源或实现

- 固定目录 76 个 GET 均有本轮直接 Node HTTP 请求；空样本与失败保留。
- 公开专栏样本字段通过，自有空账号样本的失败同时保留，不能归因于登录或传输变化。
- 新增 GET 的 code=0 仅表示直接业务应答；没有领域字段断言时不升级成字段用例通过。
- 新增请求中历史缺少参数的条目进行了部分输入探测；返回0只算应答，不代表完整参数/功能已验证。直播弹幕配置返回-352后，另一直播跟踪请求停止；6个辅助POST及部分页面POST仍未直接重放。
- 已有评论/收藏等写入用例使用凭据化 fetch 直接请求 API；独立 Node 上传证据另存，均不以 UI 点击充当接口验证。
- 私信发送缺少第二个受控账号；笔记、预约及特殊权限需要对应样本或角色。
- 573 条静态候选未逐条盲测；全部已发现目录不等于全站所有接口。

## 复现与证据

[逐项脱敏 JSON](../../evidence/web-direct-validation.json) · [既有写操作与清理](write-validation.md) · [独立上传](direct-upload.md) · [先前浏览器验证](full-validation.md)

在线驱动只在本地读取专用隔离会话；原始参数、会话、账号及上传标识不发布。公开字段断言在 `src/pc-cases.mjs`、`src/pc-full-checks.mjs` 和 `src/pc-browser-probe.mjs`，本轮为其注入带授权会话的 Node fetch。文档与汇总生成不会发送请求。

```sh
node scripts/build-web-direct-validation.mjs --local .local/web-direct-validation
npm run docs:generate
npm test
```
