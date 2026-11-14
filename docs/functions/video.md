# 视频详情与互动

视频详情、点赞、投币和分享。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 26 条 HTTP 声明、37 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes11.dex:21398:POST | POST | https://app.bilibili.com/x/v2/view/ad/dislike/cancel | QueryMap:(内容未知) | LlC0/a&lt;Ljava/lang/Void;&gt;; | not-tested |
| classes11.dex:21400:POST | POST | https://app.bilibili.com/x/v2/view/ad/dislike | FieldMap:(内容未知) | LlC0/a&lt;Ljava/lang/Void;&gt;; | not-tested |
| classes11.dex:32799:POST | POST | https://app.bilibili.com/x/v2/view/like | FieldMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceLike;&gt;;&gt;; | not-tested |
| classes11.dex:43324:POST | POST | https://app.bilibili.com/x/v2/view/like | Field:aid, Field:like, Field:spmid, Field:from_spmid, Field:from, Field:action_id, Field:track_id, Field:extend_fields | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes11.dex:43325:POST | POST | https://app.bilibili.com/x/v2/view/like/nologin | Field:aid, Field:like, Field:spmid, Field:from_spmid, Field:from, Field:action, Field:action_id, Field:track_id, Field:extend_fields | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes14.dex:39822:POST | POST | https://app.bilibili.com/x/v2/view/report/upload | Query:access_key, Part:aid, Part:mid, Part:(内容未知) | LlC0/a&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; | not-tested |
| classes16.dex:22260:POST | POST | https://app.bilibili.com/x/v2/view/like/nologin | Field:aid, Field:like, Field:spmid, Field:from_spmid, Field:from, Field:action, Field:action_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes16.dex:22261:POST | POST | https://app.bilibili.com/x/v2/view/like | Field:aid, Field:like, Field:spmid, Field:from_spmid, Field:from, Field:action_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes16.dex:53738:POST | POST | https://api.bilibili.com/x/v2/view/like | Query:access_key, Field:aid, Field:like, Field:spmid, Field:from_spmid, Field:action_id, Field:extend_fields | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; | not-tested |
| classes16.dex:53739:POST | POST | https://api.bilibili.com/x/v2/view/like/nologin | Field:aid, Field:like, Field:spmid, Field:from_spmid, Field:action, Field:action_id, Field:extend_fields | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; | not-tested |
| classes17.dex:5270:POST | POST | https://app.bilibili.com/x/v2/view/like/nologin | Field:aid, Field:like, Field:spmid, Field:from_spmid, Field:action, Field:action_id, Field:extend_fields | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes17.dex:5271:POST | POST | https://app.bilibili.com/x/v2/view/like | Field:aid, Field:like, Field:spmid, Field:from_spmid, Field:action_id, Field:extend_fields | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes18.dex:28587:POST | POST | https://app.bilibili.com/x/v2/view/coin/add | Field:access_key, Field:aid, Field:upid, Field:multiply, Field:avtype, Field:from, Field:select_like, Field:from_spmid, Field:spmid, Field:track_id, Field:goto, Field:source, Field:token, Field:action_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/paycoin/PayCoinRequestResult;&gt;;&gt;; | not-tested |
| classes18.dex:41823:GET | GET | https://api.bilibili.com/x/stein/edgeinfo_v2 | Query:access_key, Query:edge_id, Query:aid, Query:graph_version, Query:delay, Query:screen, Query:portal, Query:choices, Query:cursor | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playerbizcommon/features/interactvideo/model/InteractNode;&gt;;&gt;; | not-tested |
| classes18.dex:41824:POST | POST | https://api.bilibili.com/x/stein/mark | Query:access_key, Query:aid, Query:mark | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; | not-tested |
| classes18.dex:55712:POST | POST | https://app.bilibili.com/x/v2/view/share/complete | Field:access_key, Field:oid, Field:type, Field:share_channel, Field:share_trace_id, Field:from, Field:season_id, Field:ep_id, Field:up_id, Field:parent_area_id, Field:area_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes18.dex:55713:POST | POST | https://app.bilibili.com/x/v2/view/share/click | Field:access_key, Field:oid, Field:type, Field:share_channel, Field:share_trace_id, Field:from, Field:season_id, Field:ep_id, Field:up_id, Field:parent_area_id, Field:area_id, Field:spmid, Field:from_spmid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes18.dex:61254:POST | POST | https://app.bilibili.com/x/v2/view/dislike | Field:access_key, Field:aid, Field:dislike, Field:spmid, Field:from_spmid, Field:from, Field:action_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes18.dex:61255:POST | POST | https://app.bilibili.com/x/v2/view/like | Field:access_key, Field:aid, Field:like, Field:ogv_type, Field:from_spmid, Field:from, Field:spmid, Field:track_id, Field:goto, Field:source, Field:token, Field:action_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playerbizcommon/action/type/ActionLikeReward;&gt;;&gt;; | not-tested |
| classes18.dex:61256:POST | POST | https://app.bilibili.com/x/v2/view/like/triple | Field:access_key, Field:aid, Field:from_spmid, Field:from, Field:spmid, Field:track_id, Field:goto, Field:source, Field:token, Field:action_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playerbizcommon/action/type/ActionLikeTripleReward;&gt;;&gt;; | not-tested |
| classes18.dex:61257:POST | POST | https://app.bilibili.com/x/v2/view/like/nologin | Field:aid, Field:like, Field:action, Field:from_spmid, Field:from, Field:spmid, Field:track_id, Field:goto, Field:source, Field:token, Field:action_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playerbizcommon/action/type/ActionLikeNologinReward;&gt;;&gt;; | not-tested |
| classes20.dex:36740:POST | POST | https://app.bilibili.com/x/v2/view/user/action/add | Field:uid, Field:action, Field:item_id, Field:item_type, Field:extra | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; | not-tested |
| classes21.dex:44680:GET | GET | https://app.bilibili.com/x/v2/view/upper/recmd | QueryMap:(内容未知) | Ljava/lang/Object; | not-tested |
| classes23.dex:12869:GET | GET | https://app.bilibili.com/x/v2/view/dots | Query:aid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/ship/theseus/united/page/floatlayer/interactivesettings/InteractiveSettingsData;&gt;;&gt;; | not-tested |
| classes30.dex:4259:POST | POST | https://api.bilibili.com/x/tag/archive/report | Field:access_key, Field:aid, Field:tag_id, Field:reason | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes35.dex:5442:GET | GET | https://member.bilibili.com/x/risk/archive/del | Query:aid, Query:platform | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Boolean;&gt;;&gt;; | not-tested |

## gRPC

请求/响应角色默认仍为静态候选；View/View 已有单独实现核对。表格不代表已建立连接或验证认证。

| 路由 | 请求类型候选 | 响应类型候选 | 线上抽查 |
| --- | --- | --- | --- |
| /bilibili.app.view.v1.LegacyView/Like | Lcom/bapis/bilibili/app/view/v1/LikeReq; | Lcom/bapis/bilibili/app/view/v1/LikeReply; | not-tested |
| /bilibili.app.view.v1.View/AddContract | Lcom/bapis/bilibili/app/view/v1/AddContractReq; | Lcom/bapis/bilibili/app/view/v1/NoReply; | not-tested |
| /bilibili.app.view.v1.View/CacheView | Lcom/bapis/bilibili/app/view/v1/CacheViewReq; | Lcom/bapis/bilibili/app/view/v1/CacheViewReply; | not-tested |
| /bilibili.app.view.v1.View/ChronosPkg | Lcom/bapis/bilibili/app/view/v1/ChronosPkgReq; | Lcom/bapis/bilibili/app/view/v1/Chronos; | not-tested |
| /bilibili.app.view.v1.View/ClickActivitySeason | Lcom/bapis/bilibili/app/view/v1/ClickActivitySeasonReq; | Lcom/bapis/bilibili/app/view/v1/NoReply; | not-tested |
| /bilibili.app.view.v1.View/ClickPlayerCard | Lcom/bapis/bilibili/app/view/v1/ClickPlayerCardReq; | Lcom/bapis/bilibili/app/view/v1/NoReply; | not-tested |
| /bilibili.app.view.v1.View/ClickPlayerCardV2 | Lcom/bapis/bilibili/app/view/v1/ClickPlayerCardReq; | Lcom/bapis/bilibili/app/view/v1/ClickPlayerCardReply; | not-tested |
| /bilibili.app.view.v1.View/ContinuousPlay | Lcom/bapis/bilibili/app/view/v1/ContinuousPlayReq; | Lcom/bapis/bilibili/app/view/v1/ContinuousPlayReply; | not-tested |
| /bilibili.app.view.v1.View/ExposePlayerCard | Lcom/bapis/bilibili/app/view/v1/ExposePlayerCardReq; | Lcom/bapis/bilibili/app/view/v1/NoReply; | not-tested |
| /bilibili.app.view.v1.View/FeedView | Lcom/bapis/bilibili/app/view/v1/FeedViewReq; | Lcom/bapis/bilibili/app/view/v1/FeedViewReply; | not-tested |
| /bilibili.app.view.v1.View/GetArcsPlayer | Lcom/bapis/bilibili/app/view/v1/GetArcsPlayerReq; | Lcom/bapis/bilibili/app/view/v1/GetArcsPlayerReply; | not-tested |
| /bilibili.app.view.v1.View/GetUser | Lcom/bapis/bilibili/app/view/v1/GetUserReq; | Lcom/bapis/bilibili/app/view/v1/GetUserReply; | not-tested |
| /bilibili.app.view.v1.View/PlayerRelates | Lcom/bapis/bilibili/app/view/v1/PlayerRelatesReq; | Lcom/bapis/bilibili/app/view/v1/PlayerRelatesReply; | not-tested |
| /bilibili.app.view.v1.View/PremiereArchive | Lcom/bapis/bilibili/app/view/v1/PremiereArchiveReq; | Lcom/bapis/bilibili/app/view/v1/PremiereArchiveReply; | not-tested |
| /bilibili.app.view.v1.View/RelatesFeed | Lcom/bapis/bilibili/app/view/v1/RelatesFeedReq; | Lcom/bapis/bilibili/app/view/v1/RelatesFeedReply; | not-tested |
| /bilibili.app.view.v1.View/Reserve | Lcom/bapis/bilibili/app/view/v1/ReserveReq; | Lcom/bapis/bilibili/app/view/v1/ReserveReply; | not-tested |
| /bilibili.app.view.v1.View/Season | Lcom/bapis/bilibili/app/view/v1/SeasonReq; | Lcom/bapis/bilibili/app/view/v1/SeasonReply; | not-tested |
| /bilibili.app.view.v1.View/SeasonActivityRecord | Lcom/bapis/bilibili/app/view/v1/SeasonActivityRecordReq; | Lcom/bapis/bilibili/app/view/v1/SeasonActivityRecordReply; | not-tested |
| /bilibili.app.view.v1.View/SeasonWidgetExpose | Lcom/bapis/bilibili/app/view/v1/SeasonWidgetExposeReq; | Lcom/bapis/bilibili/app/view/v1/SeasonWidgetExposeReply; | not-tested |
| /bilibili.app.view.v1.View/ShortFormVideoDownload | Lcom/bapis/bilibili/app/view/v1/ShortFormVideoDownloadReq; | Lcom/bapis/bilibili/app/view/v1/ShortFormVideoDownloadReply; | not-tested |
| /bilibili.app.view.v1.View/TFInfo | Lcom/bapis/bilibili/app/view/v1/TFInfoReq; | Lcom/bapis/bilibili/app/view/v1/TFInfoReply; | not-tested |
| /bilibili.app.view.v1.View/View | Lcom/bapis/bilibili/app/view/v1/ViewReq; | Lcom/bapis/bilibili/app/view/v1/ViewReply; | not-tested |
| /bilibili.app.view.v1.View/ViewMaterial | Lcom/bapis/bilibili/app/view/v1/ViewMaterialReq; | Lcom/bapis/bilibili/app/view/v1/ViewMaterialReply; | not-tested |
| /bilibili.app.view.v1.View/ViewProgress | Lcom/bapis/bilibili/app/view/v1/ViewProgressReq; | Lcom/bapis/bilibili/app/view/v1/ViewProgressReply; | not-tested |
| /bilibili.app.view.v1.View/ViewTag | Lcom/bapis/bilibili/app/view/v1/ViewTagReq; | Lcom/bapis/bilibili/app/view/v1/ViewTagReply; | not-tested |
| /bilibili.app.viewunite.v1.View/AIRelateAsync | Lcom/bapis/bilibili/app/viewunite/v1/AIRelateAsyncReq; | Lcom/bapis/bilibili/app/viewunite/v1/AIRelateAsyncReply; | not-tested |
| /bilibili.app.viewunite.v1.View/ArcRefresh | Lcom/bapis/bilibili/app/viewunite/v1/ArcRefreshReq; | Lcom/bapis/bilibili/app/viewunite/v1/ArcRefreshReply; | not-tested |
| /bilibili.app.viewunite.v1.View/CacheAuthentication | Lcom/bapis/bilibili/app/viewunite/v1/CacheAuthenticationReq; | Lcom/bapis/bilibili/app/viewunite/v1/CacheAuthenticationReply; | not-tested |
| /bilibili.app.viewunite.v1.View/FloorAdSearch | Lcom/bapis/bilibili/app/viewunite/v1/FloorAdSearchReq; | Lcom/bapis/bilibili/app/viewunite/v1/FloorAdSearchReply; | not-tested |
| /bilibili.app.viewunite.v1.View/Pages | Lcom/bapis/bilibili/app/viewunite/v1/PagesReq; | Lcom/bapis/bilibili/app/viewunite/v1/PagesReply; | not-tested |
| /bilibili.app.viewunite.v1.View/PlayPause | Lcom/bapis/bilibili/app/viewunite/v1/PlayPauseReq; | Lcom/bapis/bilibili/app/viewunite/v1/PlayPauseReply; | not-tested |
| /bilibili.app.viewunite.v1.View/RelatesFeed | Lcom/bapis/bilibili/app/viewunite/v1/RelatesFeedReq; | Lcom/bapis/bilibili/app/viewunite/v1/RelatesFeedReply; | not-tested |
| /bilibili.app.viewunite.v1.View/Story | Lcom/bapis/bilibili/app/viewunite/v1/StoryReq; | Lcom/bapis/bilibili/app/viewunite/v1/StoryReply; | not-tested |
| /bilibili.app.viewunite.v1.View/VideoMentions | Lcom/bapis/bilibili/app/viewunite/v1/VideoMentionsReq; | Lcom/bapis/bilibili/app/viewunite/v1/VideoMentionsReply; | not-tested |
| /bilibili.app.viewunite.v1.View/View | Lcom/bapis/bilibili/app/viewunite/v1/ViewReq; | Lcom/bapis/bilibili/app/viewunite/v1/ViewReply; | not-tested |
| /bilibili.app.viewunite.v1.View/ViewEndPage | Lcom/bapis/bilibili/app/viewunite/v1/ViewEndPageReq; | Lcom/bapis/bilibili/app/viewunite/v1/ViewEndPageReply; | not-tested |
| /bilibili.app.viewunite.v1.View/ViewProgress | Lcom/bapis/bilibili/app/viewunite/v1/ViewProgressReq; | Lcom/bapis/bilibili/app/viewunite/v1/ViewProgressReply; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category video --limit 10
node bin/bili-apis.mjs show "ID"
```
