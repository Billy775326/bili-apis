# 视频详情与互动

视频详情、点赞、投币和分享。分类根据路由、域名与声明类名称推断，未验证业务行为。

官方 Android 9.19.0：34 条 HTTP 声明、37 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。

[返回分类](README.md) · [与 Play 对比](comparison.md)

## HTTP

参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。

| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |
| --- | --- | --- | --- | --- |
| classes10.dex:39570:POST | POST | https://app.bilibili.com/x/v2/view/like | Field:aid, Field:like, Field:spmid, Field:from_spmid, Field:from, Field:action_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes10.dex:39571:POST | POST | https://app.bilibili.com/x/v2/view/like/nologin | Field:aid, Field:like, Field:spmid, Field:from_spmid, Field:from, Field:action, Field:action_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes11.dex:26930:POST | POST | https://api.bilibili.com/x/v2/view/like | Query:access_key, Field:aid, Field:like, Field:spmid, Field:from_spmid, Field:action_id, Field:extend_fields | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; |
| classes11.dex:26931:POST | POST | https://api.bilibili.com/x/v2/view/like/nologin | Field:aid, Field:like, Field:spmid, Field:from_spmid, Field:action, Field:action_id, Field:extend_fields | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; |
| classes11.dex:48384:POST | POST | https://app.bilibili.com/x/v2/view/like | Field:aid, Field:like, Field:spmid, Field:from_spmid, Field:action_id, Field:extend_fields | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes11.dex:48385:POST | POST | https://app.bilibili.com/x/v2/view/like/nologin | Field:aid, Field:like, Field:spmid, Field:from_spmid, Field:action, Field:action_id, Field:extend_fields | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes15.dex:48695:POST | POST | https://api.bilibili.com/x/tag/archive/report | Field:access_key, Field:aid, Field:tag_id, Field:reason | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes15.dex:52847:GET | GET | https://app.bilibili.com/x/v2/view/upper/recmd | QueryMap:(内容未知) | Ljava/lang/Object; |
| classes15.dex:63601:GET | GET | https://member.bilibili.com/x/risk/archive/del | Query:aid, Query:platform | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Boolean;&gt;;&gt;; |
| classes16.dex:6573:GET | GET | https://api.bilibili.com/x/stein/edgeinfo_v2 | Query:access_key, Query:edge_id, Query:aid, Query:graph_version, Query:delay, Query:screen, Query:portal, Query:choices, Query:cursor | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playerbizcommon/features/interactvideo/model/InteractNode;&gt;;&gt;; |
| classes16.dex:6574:POST | POST | https://api.bilibili.com/x/stein/mark | Query:access_key, Query:aid, Query:mark | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; |
| classes16.dex:46708:GET | GET | https://app.bilibili.com/x/v2/view/dots | Query:aid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/ship/theseus/united/page/floatlayer/interactivesettings/InteractiveSettingsData;&gt;;&gt;; |
| classes19.dex:13254:POST | POST | https://app.bilibili.com/x/v2/view/user/action/add | Field:uid, Field:action, Field:item_id, Field:item_type, Field:extra | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; |
| classes28.dex:13387:POST | POST | https://app.bilibili.com/x/v2/view/dislike | Field:access_key, Field:aid, Field:dislike, Field:spmid, Field:from_spmid, Field:from, Field:action_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes28.dex:13388:POST | POST | https://app.bilibili.com/x/v2/view/like | Field:access_key, Field:aid, Field:like, Field:ogv_type, Field:from_spmid, Field:from, Field:spmid, Field:track_id, Field:goto, Field:source, Field:token, Field:action_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playerbizcommon/action/type/ActionLikeReward;&gt;;&gt;; |
| classes28.dex:13389:POST | POST | https://app.bilibili.com/x/v2/view/like/nologin | Field:aid, Field:like, Field:action, Field:from_spmid, Field:from, Field:spmid, Field:track_id, Field:goto, Field:source, Field:token, Field:action_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playerbizcommon/action/type/ActionLikeNologinReward;&gt;;&gt;; |
| classes28.dex:13390:POST | POST | https://app.bilibili.com/x/v2/view/like/triple | Field:access_key, Field:aid, Field:from_spmid, Field:from, Field:spmid, Field:track_id, Field:goto, Field:source, Field:token, Field:action_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playerbizcommon/action/type/ActionLikeTripleReward;&gt;;&gt;; |
| classes28.dex:26625:POST | POST | https://app.bilibili.com/x/v2/view/share/complete | Field:access_key, Field:oid, Field:type, Field:share_channel, Field:share_trace_id, Field:from, Field:season_id, Field:ep_id, Field:up_id, Field:parent_area_id, Field:area_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes28.dex:26626:POST | POST | https://app.bilibili.com/x/v2/view/share/click | Field:access_key, Field:oid, Field:type, Field:share_channel, Field:share_trace_id, Field:from, Field:season_id, Field:ep_id, Field:up_id, Field:parent_area_id, Field:area_id, Field:spmid, Field:from_spmid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes28.dex:45429:POST | POST | https://api.bilibili.com/x/tag/archive/del | Field:access_key, Field:aid, Field:tag_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes28.dex:45431:POST | POST | https://api.bilibili.com/x/tag/archive/hate2 | Field:access_key, Field:aid, Field:tag_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes28.dex:45432:POST | POST | https://api.bilibili.com/x/tag/archive/like2 | Field:access_key, Field:aid, Field:tag_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes28.dex:45433:POST | POST | https://api.bilibili.com/x/tag/archive/report | Field:access_key, Field:aid, Field:tag_id, Field:reason | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes36.dex:52820:POST | POST | https://app.bilibili.com/x/v2/view/ad/dislike/cancel | QueryMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Ljava/lang/Void;&gt;; |
| classes36.dex:52822:POST | POST | https://app.bilibili.com/x/v2/view/ad/dislike | FieldMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Ljava/lang/Void;&gt;; |
| classes5.dex:8041:POST | POST | https://app.bilibili.com/x/v2/view/like | FieldMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceLike;&gt;;&gt;; |
| classes5.dex:17991:POST | POST | https://app.bilibili.com/x/v2/view/like | Field:aid, Field:like, Field:spmid, Field:from_spmid, Field:from | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes5.dex:17992:POST | POST | https://app.bilibili.com/x/v2/view/like | Field:aid, Field:like, Field:spmid, Field:from_spmid, Field:from, Field:action_id, Field:track_id, Field:extend_fields | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes5.dex:17995:POST | POST | https://app.bilibili.com/x/v2/view/like/nologin | Field:aid, Field:like, Field:spmid, Field:from_spmid, Field:from, Field:action | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes5.dex:17996:POST | POST | https://app.bilibili.com/x/v2/view/like/nologin | Field:aid, Field:like, Field:spmid, Field:from_spmid, Field:from, Field:action, Field:action_id, Field:track_id, Field:extend_fields | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes9.dex:34857:POST | POST | https://app.bilibili.com/x/v2/view/report/add | Field:mid, Field:access_key, Field:aid, Field:type, Field:reason, Field:pics | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes9.dex:34858:POST | POST | https://app.bilibili.com/x/v2/view/report/upload | Query:access_key, Part:aid, Part:mid, Part:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; |
| classes9.dex:34859:GET | GET | https://app.bilibili.com/x/v2/view/report | Query:mid, Query:access_key, Query:aid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/column/ui/report/BiliVideoAppeal;&gt;;&gt;;&gt;; |
| classes9.dex:63673:POST | POST | https://app.bilibili.com/x/v2/view/coin/add | Field:access_key, Field:aid, Field:upid, Field:multiply, Field:avtype, Field:from, Field:select_like, Field:from_spmid, Field:spmid, Field:track_id, Field:goto, Field:source, Field:token, Field:action_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/paycoin/PayCoinRequestResult;&gt;;&gt;; |

## gRPC

请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。

| 路由 | 请求类型候选 | 响应类型候选 |
| --- | --- | --- |
| /bilibili.app.view.v1.LegacyView/Like | Lcom/bapis/bilibili/app/view/v1/LikeReq; | Lcom/bapis/bilibili/app/view/v1/LikeReply; |
| /bilibili.app.view.v1.View/AddContract | Lcom/bapis/bilibili/app/view/v1/AddContractReq; | Lcom/bapis/bilibili/app/view/v1/NoReply; |
| /bilibili.app.view.v1.View/CacheView | Lcom/bapis/bilibili/app/view/v1/CacheViewReq; | Lcom/bapis/bilibili/app/view/v1/CacheViewReply; |
| /bilibili.app.view.v1.View/ChronosPkg | Lcom/bapis/bilibili/app/view/v1/ChronosPkgReq; | Lcom/bapis/bilibili/app/view/v1/Chronos; |
| /bilibili.app.view.v1.View/ClickActivitySeason | Lcom/bapis/bilibili/app/view/v1/ClickActivitySeasonReq; | Lcom/bapis/bilibili/app/view/v1/NoReply; |
| /bilibili.app.view.v1.View/ClickPlayerCard | Lcom/bapis/bilibili/app/view/v1/ClickPlayerCardReq; | Lcom/bapis/bilibili/app/view/v1/NoReply; |
| /bilibili.app.view.v1.View/ClickPlayerCardV2 | Lcom/bapis/bilibili/app/view/v1/ClickPlayerCardReq; | Lcom/bapis/bilibili/app/view/v1/ClickPlayerCardReply; |
| /bilibili.app.view.v1.View/ContinuousPlay | Lcom/bapis/bilibili/app/view/v1/ContinuousPlayReq; | Lcom/bapis/bilibili/app/view/v1/ContinuousPlayReply; |
| /bilibili.app.view.v1.View/ExposePlayerCard | Lcom/bapis/bilibili/app/view/v1/ExposePlayerCardReq; | Lcom/bapis/bilibili/app/view/v1/NoReply; |
| /bilibili.app.view.v1.View/FeedView | Lcom/bapis/bilibili/app/view/v1/FeedViewReq; | Lcom/bapis/bilibili/app/view/v1/FeedViewReply; |
| /bilibili.app.view.v1.View/GetArcsPlayer | Lcom/bapis/bilibili/app/view/v1/GetArcsPlayerReq; | Lcom/bapis/bilibili/app/view/v1/GetArcsPlayerReply; |
| /bilibili.app.view.v1.View/GetUser | Lcom/bapis/bilibili/app/view/v1/GetUserReq; | Lcom/bapis/bilibili/app/view/v1/GetUserReply; |
| /bilibili.app.view.v1.View/PlayerRelates | Lcom/bapis/bilibili/app/view/v1/PlayerRelatesReq; | Lcom/bapis/bilibili/app/view/v1/PlayerRelatesReply; |
| /bilibili.app.view.v1.View/PremiereArchive | Lcom/bapis/bilibili/app/view/v1/PremiereArchiveReq; | Lcom/bapis/bilibili/app/view/v1/PremiereArchiveReply; |
| /bilibili.app.view.v1.View/RelatesFeed | Lcom/bapis/bilibili/app/view/v1/RelatesFeedReq; | Lcom/bapis/bilibili/app/view/v1/RelatesFeedReply; |
| /bilibili.app.view.v1.View/Reserve | Lcom/bapis/bilibili/app/view/v1/ReserveReq; | Lcom/bapis/bilibili/app/view/v1/ReserveReply; |
| /bilibili.app.view.v1.View/Season | Lcom/bapis/bilibili/app/view/v1/SeasonReq; | Lcom/bapis/bilibili/app/view/v1/SeasonReply; |
| /bilibili.app.view.v1.View/SeasonActivityRecord | Lcom/bapis/bilibili/app/view/v1/SeasonActivityRecordReq; | Lcom/bapis/bilibili/app/view/v1/SeasonActivityRecordReply; |
| /bilibili.app.view.v1.View/SeasonWidgetExpose | Lcom/bapis/bilibili/app/view/v1/SeasonWidgetExposeReq; | Lcom/bapis/bilibili/app/view/v1/SeasonWidgetExposeReply; |
| /bilibili.app.view.v1.View/ShortFormVideoDownload | Lcom/bapis/bilibili/app/view/v1/ShortFormVideoDownloadReq; | Lcom/bapis/bilibili/app/view/v1/ShortFormVideoDownloadReply; |
| /bilibili.app.view.v1.View/TFInfo | Lcom/bapis/bilibili/app/view/v1/TFInfoReq; | Lcom/bapis/bilibili/app/view/v1/TFInfoReply; |
| /bilibili.app.view.v1.View/View | Lcom/bapis/bilibili/app/view/v1/ViewReq; | Lcom/bapis/bilibili/app/view/v1/ViewReply; |
| /bilibili.app.view.v1.View/ViewMaterial | Lcom/bapis/bilibili/app/view/v1/ViewMaterialReq; | Lcom/bapis/bilibili/app/view/v1/ViewMaterialReply; |
| /bilibili.app.view.v1.View/ViewProgress | Lcom/bapis/bilibili/app/view/v1/ViewProgressReq; | Lcom/bapis/bilibili/app/view/v1/ViewProgressReply; |
| /bilibili.app.view.v1.View/ViewTag | Lcom/bapis/bilibili/app/view/v1/ViewTagReq; | Lcom/bapis/bilibili/app/view/v1/ViewTagReply; |
| /bilibili.app.viewunite.v1.View/AIRelateAsync | Lcom/bapis/bilibili/app/viewunite/v1/AIRelateAsyncReq; | Lcom/bapis/bilibili/app/viewunite/v1/AIRelateAsyncReply; |
| /bilibili.app.viewunite.v1.View/ArcRefresh | Lcom/bapis/bilibili/app/viewunite/v1/ArcRefreshReq; | Lcom/bapis/bilibili/app/viewunite/v1/ArcRefreshReply; |
| /bilibili.app.viewunite.v1.View/CacheAuthentication | Lcom/bapis/bilibili/app/viewunite/v1/CacheAuthenticationReq; | Lcom/bapis/bilibili/app/viewunite/v1/CacheAuthenticationReply; |
| /bilibili.app.viewunite.v1.View/FloorAdSearch | Lcom/bapis/bilibili/app/viewunite/v1/FloorAdSearchReq; | Lcom/bapis/bilibili/app/viewunite/v1/FloorAdSearchReply; |
| /bilibili.app.viewunite.v1.View/Pages | Lcom/bapis/bilibili/app/viewunite/v1/PagesReq; | Lcom/bapis/bilibili/app/viewunite/v1/PagesReply; |
| /bilibili.app.viewunite.v1.View/PlayPause | Lcom/bapis/bilibili/app/viewunite/v1/PlayPauseReq; | Lcom/bapis/bilibili/app/viewunite/v1/PlayPauseReply; |
| /bilibili.app.viewunite.v1.View/RelatesFeed | Lcom/bapis/bilibili/app/viewunite/v1/RelatesFeedReq; | Lcom/bapis/bilibili/app/viewunite/v1/RelatesFeedReply; |
| /bilibili.app.viewunite.v1.View/Story | Lcom/bapis/bilibili/app/viewunite/v1/StoryReq; | Lcom/bapis/bilibili/app/viewunite/v1/StoryReply; |
| /bilibili.app.viewunite.v1.View/VideoMentions | Lcom/bapis/bilibili/app/viewunite/v1/VideoMentionsReq; | Lcom/bapis/bilibili/app/viewunite/v1/VideoMentionsReply; |
| /bilibili.app.viewunite.v1.View/View | Lcom/bapis/bilibili/app/viewunite/v1/ViewReq; | Lcom/bapis/bilibili/app/viewunite/v1/ViewReply; |
| /bilibili.app.viewunite.v1.View/ViewEndPage | Lcom/bapis/bilibili/app/viewunite/v1/ViewEndPageReq; | Lcom/bapis/bilibili/app/viewunite/v1/ViewEndPageReply; |
| /bilibili.app.viewunite.v1.View/ViewProgress | Lcom/bapis/bilibili/app/viewunite/v1/ViewProgressReq; | Lcom/bapis/bilibili/app/viewunite/v1/ViewProgressReply; |

```sh
node bin/bili-apis.mjs --edition official list --category video --limit 10
node bin/bili-apis.mjs --edition official show "ID"
```
