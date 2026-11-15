# 动态与话题

<!-- android-edition:start -->
包名：`com.bilibili.app.in` · 渠道：Google Play · 版本：6.8.0（9180200）。

[全部版本](../../../../README.md) · [本包文档](../README.md) · [网页接口](../../../../../pc/README.md) · [基线元数据](../../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

动态流、图文、话题和校园。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 62 条 HTTP 声明、149 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes11.dex:39820:POST | POST | https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/create_act_draw | Field:access_key, Field:oid, Field:type, Field:rp_id, Field:extension, Field:pictures, Field:from | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/comment2/attachment/BiliDynamicSender$ResultData;&gt;;&gt;; | not-tested |
| classes11.dex:39821:POST | POST | https://api.vc.bilibili.com/dynamic_repost/v1/dynamic_repost/reply | Field:access_key, Field:uid, Field:share_uid, Field:type, Field:rid, Field:content, Field:repost_code, Field:ctrl, Field:extension, Field:source | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/comment2/attachment/BiliDynamicSender$ResultData;&gt;;&gt;; | not-tested |
| classes11.dex:39822:POST | POST | https://api.vc.bilibili.com/api/v1/drawImage/upload | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/comment2/attachment/BiliDynamicSender$UploadImage;&gt;;&gt;; | not-tested |
| classes11.dex:39823:POST | POST | https://api.bilibili.com/x/dynamic/feed/draw/upload_bfs | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/comment2/attachment/BiliDynamicSender$UploadImage;&gt;;&gt;; | not-tested |
| classes12.dex:45897:GET | GET | https://api.bilibili.com/x/dynamic/feed/attach/attachcardpreview | Query:biz_type, Query:biz_id, Query:mid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/AttachCardPreview;&gt;;&gt;; | not-tested |
| classes12.dex:45898:GET | GET | https://api.bilibili.com/x/dynamic/feed/attach/preview | Query:biz_id, Query:biz_type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/AttachPreview;&gt;;&gt;; | not-tested |
| classes12.dex:45899:GET | GET | https://api.bilibili.com/x/dynamic/feed/attach/reservepreview | Query:reserve_id, Query:mid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/ReserveCardPreview;&gt;;&gt;; | not-tested |
| classes12.dex:45900:GET | GET | https://api.bilibili.com/x/dynamic/feed/attach/ugcpreview | Query:ugc_id, Query:mid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/AttachUgcPreview;&gt;;&gt;; | not-tested |
| classes12.dex:45902:POST | POST | https://api.vc.bilibili.com/dynamic_repost/v1/dynamic_repost/pre_judge | Field:uid, Field:dynamic_id, Field:content, Field:texts, Field:dynamic_type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/net/entity/CheckResult;&gt;;&gt;; | not-tested |
| classes12.dex:45903:POST | POST | https://api.bilibili.com/x/dynamic/feed/block/add | Query:mid, Query:fid, Query:type, Query:action, Query:biz_value | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/EmptyData;&gt;;&gt;; | not-tested |
| classes12.dex:45904:GET | GET | https://api.vc.bilibili.com/topic_svr/v1/topic_svr/fetch_ogv | Query:topic_id, Query:topic_name | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/FetchTopicOgv;&gt;;&gt;; | not-tested |
| classes12.dex:45907:GET | GET | https://app.bilibili.com/x/topic/pub/rcmd/search | Query:keywords, Query:upload_id, Query:from_topic_id, Query:from_topic_name | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/net/entity/response/TopicItems;&gt;;&gt;; | not-tested |
| classes12.dex:45908:GET | GET | https://api.vc.bilibili.com/topic_svr/v1/topic_svr/fetch_dynamics_v2 | Query:device_id, Query:topic_id, Query:topic_name, Query:offset, Query:is_frontpage, Query:types, Query:sortby, Query:from_spmid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/TopicFollowingInfo;&gt;;&gt;; | not-tested |
| classes12.dex:45909:GET | GET | https://api.vc.bilibili.com/topic_svr/v1/topic_svr/fetch_dynamics_v2 | Query:access_key, Query:offset, Query:from_spmid, QueryMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/TopicFollowingInfo;&gt;;&gt;; | not-tested |
| classes12.dex:45910:POST | POST | https://api.vc.bilibili.com/topic_svr/v1/topic_svr/topic_component_types | Field:topic_id, Field:topic_name | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/TopicWebBean;&gt;;&gt;; | not-tested |
| classes12.dex:45912:POST | POST | https://api.vc.bilibili.com/dynamic_report/v1/dynamic_report/rcmd_report | Field:report_type, Field:uid, Field:dynamic_id, Field:count | LlC0/a&lt;Lokhttp3/ResponseBody;&gt;; | not-tested |
| classes12.dex:45913:GET | GET | https://api.vc.bilibili.com/dynamic_topic/v1/topic/followTopics | Query:size, Query:page | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/cardBean/FollowingTopic;&gt;;&gt;; | not-tested |
| classes12.dex:45914:POST | POST | https://api.vc.bilibili.com/dynamic_topic/v1/topic/setTopTopic | Field:top_list | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes12.dex:45915:POST | POST | https://app.bilibili.com/x/topic/pub/upload | Query:topic_id, Query:request_id, Query:upload_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes12.dex:45916:GET | GET | https://app.bilibili.com/x/topic/vert/search | Query:keywords, Query:page_num, Query:offset | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/TopicRecommendData;&gt;;&gt;; | not-tested |
| classes12.dex:45917:POST | POST | https://api.vc.bilibili.com/api/v1/drawImage/upload | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/net/entity/response/FollowingUploadImageResponse;&gt;;&gt;; | not-tested |
| classes12.dex:45918:POST | POST | https://api.bilibili.com/x/dynamic/feed/draw/upload_bfs | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/net/entity/response/FollowingUploadImageResponse;&gt;;&gt;; | not-tested |
| classes12.dex:45919:POST | POST | https://api.bilibili.com/x/station/upload_bfs | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/net/entity/response/FollowingUploadImageResponse;&gt;;&gt;; | not-tested |
| classes12.dex:45932:GET | GET | https://api.bilibili.com/x/dynamic/topic/stats | Query:topic_id, Query:topic_name | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/net/entity/TopicActiveStatsEntity;&gt;;&gt;; | not-tested |
| classes12.dex:46187:POST | POST | https://app.bilibili.com/x/topic/resource/report | Field:topic_id, Field:res_id, Field:res_type, Field:reason | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes12.dex:46188:POST | POST | https://app.bilibili.com/x/topic/report | Field:topic_id, Field:reason | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes14.dex:4306:GET | GET | https://app.bilibili.com/x/bplus/draw/search/users | Query:uid, Query:keyword, Query:page, Query:page_size | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/tagsearch/model/TagUserWrapper;&gt;;&gt;; | not-tested |
| classes14.dex:4307:GET | GET | https://app.bilibili.com/x/bplus/draw/search/items | Query:uid, Query:keyword, Query:page, Query:page_size | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/tagsearch/model/TagProductWrapper;&gt;;&gt;; | not-tested |
| classes14.dex:4308:GET | GET | https://app.bilibili.com/x/bplus/draw/search/all | Query:uid, Query:keyword, Query:lat, Query:lng | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/tagsearch/model/TagAll;&gt;;&gt;; | not-tested |
| classes14.dex:4309:GET | GET | https://app.bilibili.com/x/bplus/draw/search/locations | Query:uid, Query:keyword, Query:lat, Query:lng, Query:page, Query:page_size | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/tagsearch/model/TagLocationWrapper;&gt;;&gt;; | not-tested |
| classes14.dex:4310:GET | GET | https://app.bilibili.com/x/bplus/draw/search/topics | Query:uid, Query:keyword, Query:page, Query:page_size | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/tagsearch/model/TagTopicWrapper;&gt;;&gt;; | not-tested |
| classes14.dex:19398:POST | POST | https://app.bilibili.com/x/topic/fav/sub/cancel | Field:topic_set_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes14.dex:22586:GET | GET | https://api.vc.bilibili.com/link_dynamic/v1/dynamic/owner_dynamic | Query:owner_uid, Query:group_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/im/entity/PushCardModel;&gt;;&gt;; | not-tested |
| classes14.dex:22595:POST | POST | https://api.bilibili.com/x/dynamic/feed/draw/upload_bfs | Part:biz, Part:timestamp, Part:rnd, Query:access_key, Part:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes17.dex:6624:GET | GET | https://app.bilibili.com/x/bplus/geo | Query:lat, Query:lng | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/location/api/MapInfo;&gt;;&gt;; | not-tested |
| classes18.dex:5065:GET | GET | https://app.bilibili.com/x/v2/region/dynamic/list | Query:rid, Query:channel, Query:pull, Query:ctime | Lqm1/s&lt;Lcom/bilibili/ogv/opbase/BangumiUgcVideoV2;&gt;; | not-tested |
| classes20.dex:27478:GET | GET | https://app.bilibili.com/x/topic/pub/is_existed | Query:topic | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/topix/model/TopicTitleCheckResult;&gt;;&gt;; | not-tested |
| classes20.dex:27479:GET | GET | https://app.bilibili.com/x/topic/pub/endpoint | Query:scene | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/topix/model/TopicCreateLimit;&gt;;&gt;; | not-tested |
| classes20.dex:27482:POST | POST | https://app.bilibili.com/x/topic/create/submit | Field:topic_name, Field:description, Field:scene, Field:submit_topic_type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/topix/model/TopicCreationResult;&gt;;&gt;; | not-tested |
| classes20.dex:27483:GET | GET | https://app.bilibili.com/x/topic/pub/search?page_size=20 | Query:keywords, Query:offset, Query:upload_id, Query:from_topic_id, Query:from_topic_name, Query:from, Query:content | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/topix/model/TopicSearchResult;&gt;;&gt;; | not-tested |
| classes20.dex:27484:GET | GET | https://app.bilibili.com/x/topic/pub/search?page_size=20&from=center | Query:keywords, Query:offset | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/topix/model/TopicSearchResult;&gt;;&gt;; | not-tested |
| classes20.dex:27485:GET | GET | https://app.bilibili.com/x/topic/vert/center?source=app&page_size=20 | Query:offset, Query:scene | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/topix/center/TopixCenterData;&gt;;&gt;; | not-tested |
| classes20.dex:27486:POST | POST | https://app.bilibili.com/x/topic/dislike | Field:topic_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes20.dex:27487:GET | GET | https://app.bilibili.com/x/topic/vert/online | Query:topic_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/topix/model/TopixDynamicOnline;&gt;;&gt;; | not-tested |
| classes20.dex:27488:GET | GET | https://app.bilibili.com/x/topic/pub/events | Query:show_mids, Query:new_pub_num | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/topix/model/TopixDynamicPubEvent;&gt;;&gt;; | not-tested |
| classes20.dex:27489:POST | POST | https://app.bilibili.com/x/topic/fav/sub/add | Field:topic_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes20.dex:27490:POST | POST | https://app.bilibili.com/x/topic/fav/sub/cancel | Field:topic_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes20.dex:27491:POST | POST | https://app.bilibili.com/x/topic/like | Field:up_mid, Field:topic_id, Field:action | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes20.dex:27492:POST | POST | https://app.bilibili.com/x/topic/fav/sub/add | Field:topic_set_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes20.dex:27493:POST | POST | https://app.bilibili.com/x/topic/fav/sub/cancel | Field:topic_set_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes20.dex:27494:GET | GET | https://app.bilibili.com/x/topic/timeline | Query:topic_id, Query:offset | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/topix/detail/timeline/TopicTimelineFloatRsp;&gt;;&gt;; | not-tested |
| classes20.dex:36737:GET | GET | https://app.bilibili.com/x/v2/feed/index/dynamic/story | QueryMap:(内容未知), Query:aid, Query:pull, Query:scene, Query:topic_id, Query:circle_id | LlC0/a&lt;Lcom/bilibili/video/story/api/StoryFeedResponse;&gt;; | not-tested |
| classes30.dex:56335:POST | POST | https://api.bilibili.com/x/v2/fav/topic/add | Query:access_key, Query:tpid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes30.dex:56336:GET | GET | https://api.bilibili.com/event/getlist | Query:access_key, Query:page, Query:pageSize | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/topic/api/BiliTopicList;&gt;;&gt;; | not-tested |
| classes30.dex:56337:GET | GET | https://api.bilibili.com/topic/getlist | Query:access_key, Query:page, Query:pageSize | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/topic/api/BiliTopicList;&gt;;&gt;; | not-tested |
| classes30.dex:56338:GET | GET | https://api.bilibili.com/x/v2/fav/topic/favoured | Query:access_key, Query:tpid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/topic/api/FavouredStatus;&gt;;&gt;; | not-tested |
| classes30.dex:56339:POST | POST | https://api.bilibili.com/x/v2/fav/topic/del | Query:access_key, Query:tpid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes35.dex:5437:GET | GET | https://api.vc.bilibili.com/dynamic_mix/v1/dynamic_mix/at_search | Query:uid, Query:keyword | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/upper/api/bean/atuser/AtUserListBean;&gt;;&gt;; | not-tested |
| classes35.dex:5438:GET | GET | https://api.vc.bilibili.com/dynamic_mix/v1/dynamic_mix/name_to_uid | Query:names, Query:teenagers_mode | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/upper/api/bean/atuser/AtUserIdListBean;&gt;;&gt;; | not-tested |
| classes35.dex:5439:GET | GET | https://api.vc.bilibili.com/dynamic_mix/v1/dynamic_mix/at_list | Query:uid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/upper/api/bean/atuser/AtUserListBean;&gt;;&gt;; | not-tested |
| classes7.dex:62337:POST | POST | https://app.bilibili.com/x/topic/fav/sub/cancel | Field:topic_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes7.dex:62339:GET | GET | https://app.bilibili.com/x/topic/fav/sub/list | Query:page_size, Query:page_num, Query:offset, Query:from | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/topic/RspCollectionTopic;&gt;;&gt;; | not-tested |

## gRPC

请求/响应角色默认仍为静态候选；View/View 已有单独实现核对。表格不代表已建立连接或验证认证。

| 路由 | 请求类型候选 | 响应类型候选 | 线上抽查 |
| --- | --- | --- | --- |
| /bilibili.app.dynamic.v1.Dynamic/DynDetails | Lcom/bapis/bilibili/app/dynamic/v1/DynDetailsReq; | Lcom/bapis/bilibili/app/dynamic/v1/DynDetailsReply; | not-tested |
| /bilibili.app.dynamic.v1.Dynamic/DynMixUpListSearch | Lcom/bapis/bilibili/app/dynamic/v1/DynMixUpListSearchReq; | Lcom/bapis/bilibili/app/dynamic/v1/DynMixUpListSearchReply; | not-tested |
| /bilibili.app.dynamic.v1.Dynamic/DynMixUpListViewMore | Lcom/bapis/bilibili/app/dynamic/v1/NoReq; | Lcom/bapis/bilibili/app/dynamic/v1/DynMixUpListViewMoreReply; | not-tested |
| /bilibili.app.dynamic.v1.Dynamic/DynOurCity | Lcom/bapis/bilibili/app/dynamic/v1/DynOurCityReq; | Lcom/bapis/bilibili/app/dynamic/v1/DynOurCityReply; | not-tested |
| /bilibili.app.dynamic.v1.Dynamic/DynOurCitySwitch | Lcom/bapis/bilibili/app/dynamic/v1/DynOurCitySwitchReq; | Lcom/bapis/bilibili/app/dynamic/v1/NoReply; | not-tested |
| /bilibili.app.dynamic.v1.Dynamic/DynRed | Lcom/bapis/bilibili/app/dynamic/v1/DynRedReq; | Lcom/bapis/bilibili/app/dynamic/v1/DynRedReply; | not-tested |
| /bilibili.app.dynamic.v1.Dynamic/DynTab | Lcom/bapis/bilibili/app/dynamic/v1/DynTabReq; | Lcom/bapis/bilibili/app/dynamic/v1/DynTabReply; | not-tested |
| /bilibili.app.dynamic.v1.Dynamic/DynUpdOffset | Lcom/bapis/bilibili/app/dynamic/v1/DynUpdOffsetReq; | Lcom/bapis/bilibili/app/dynamic/v1/NoReply; | not-tested |
| /bilibili.app.dynamic.v1.Dynamic/DynVideo | Lcom/bapis/bilibili/app/dynamic/v1/DynVideoReq; | Lcom/bapis/bilibili/app/dynamic/v1/DynVideoReqReply; | not-tested |
| /bilibili.app.dynamic.v1.Dynamic/DynVideoPersonal | Lcom/bapis/bilibili/app/dynamic/v1/DynVideoPersonalReq; | Lcom/bapis/bilibili/app/dynamic/v1/DynVideoPersonalReply; | not-tested |
| /bilibili.app.dynamic.v1.Dynamic/GeoCoder | Lcom/bapis/bilibili/app/dynamic/v1/GeoCoderReq; | Lcom/bapis/bilibili/app/dynamic/v1/GeoCoderReply; | not-tested |
| /bilibili.app.dynamic.v1.Dynamic/OurCityClickReport | Lcom/bapis/bilibili/app/dynamic/v1/OurCityClickReportReq; | Lcom/bapis/bilibili/app/dynamic/v1/OurCityClickReportReply; | not-tested |
| /bilibili.app.dynamic.v1.Dynamic/SVideo | Lcom/bapis/bilibili/app/dynamic/v1/SVideoReq; | Lcom/bapis/bilibili/app/dynamic/v1/SVideoReply; | not-tested |
| /bilibili.app.dynamic.v2.Campus/WaterFlowRcmd | Lcom/bapis/bilibili/app/dynamic/v2/WaterFlowRcmdReq; | Lcom/bapis/bilibili/app/dynamic/v2/WaterFlowRcmdResp; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/AlumniDynamics | Lcom/bapis/bilibili/app/dynamic/v2/AlumniDynamicsReq; | Lcom/bapis/bilibili/app/dynamic/v2/AlumniDynamicsReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/CampusBillboard | Lcom/bapis/bilibili/app/dynamic/v2/CampusBillBoardReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusBillBoardReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/CampusBillboardInternal | Lcom/bapis/bilibili/app/dynamic/v2/CampusBillboardInternalReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusBillBoardReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/CampusEntryTab | Lcom/bapis/bilibili/app/dynamic/v2/CampusEntryTabReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusEntryTabResp; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/CampusFeedback | Lcom/bapis/bilibili/app/dynamic/v2/CampusFeedbackReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusFeedbackReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/CampusHomePages | Lcom/bapis/bilibili/app/dynamic/v2/CampusHomePagesReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusHomePagesReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/CampusMateLikeList | Lcom/bapis/bilibili/app/dynamic/v2/CampusMateLikeListReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusMateLikeListReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/CampusMngDetail | Lcom/bapis/bilibili/app/dynamic/v2/CampusMngDetailReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusMngDetailReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/CampusMngQuizOperate | Lcom/bapis/bilibili/app/dynamic/v2/CampusMngQuizOperateReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusMngQuizOperateReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/CampusMngSubmit | Lcom/bapis/bilibili/app/dynamic/v2/CampusMngSubmitReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusMngSubmitReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/CampusRcmd | Lcom/bapis/bilibili/app/dynamic/v2/CampusRcmdReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusRcmdReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/CampusRcmdFeed | Lcom/bapis/bilibili/app/dynamic/v2/CampusRcmdFeedReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusRcmdFeedReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/CampusRecommend | Lcom/bapis/bilibili/app/dynamic/v2/CampusRecommendReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusRecommendReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/CampusRedDot | Lcom/bapis/bilibili/app/dynamic/v2/CampusRedDotReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusRedDotReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/CampusSquare | Lcom/bapis/bilibili/app/dynamic/v2/CampusSquareReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusSquareReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/CampusTopicRcmdFeed | Lcom/bapis/bilibili/app/dynamic/v2/CampusTopicRcmdFeedReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusTopicRcmdFeedReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/CooperationStaffList | Lcom/bapis/bilibili/app/dynamic/v2/CooperationStaffListReq; | Lcom/bapis/bilibili/app/dynamic/v2/CooperationStaffListResp; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/DynAdditionCommonFollow | Lcom/bapis/bilibili/app/dynamic/v2/DynAdditionCommonFollowReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynAdditionCommonFollowReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/DynAll | Lcom/bapis/bilibili/app/dynamic/v2/DynAllReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynAllReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/DynAllPersonal | Lcom/bapis/bilibili/app/dynamic/v2/DynAllPersonalReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynAllPersonalReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/DynAllUpdOffset | Lcom/bapis/bilibili/app/dynamic/v2/DynAllUpdOffsetReq; | Lcom/bapis/bilibili/app/dynamic/v2/NoReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/DynDetail | Lcom/bapis/bilibili/app/dynamic/v2/DynDetailReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynDetailReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/DynDetails | Lcom/bapis/bilibili/app/dynamic/v2/DynDetailsReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynDetailsReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/DynFakeCard | Lcom/bapis/bilibili/app/dynamic/v2/DynFakeCardReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynFakeCardReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/DynFriend | Lcom/bapis/bilibili/app/dynamic/v2/DynFriendReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynFriendReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/DynLight | Lcom/bapis/bilibili/app/dynamic/v2/DynLightReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynLightReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/DynMixUpListSearch | Lcom/bapis/bilibili/app/dynamic/v2/DynMixUpListSearchReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynMixUpListSearchReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/DynMixUpListViewMore | Lcom/bapis/bilibili/app/dynamic/v2/DynMixUpListViewMoreReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynMixUpListViewMoreReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/DynRcmdUpExchange | Lcom/bapis/bilibili/app/dynamic/v2/DynRcmdUpExchangeReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynRcmdUpExchangeReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/DynSearch | Lcom/bapis/bilibili/app/dynamic/v2/DynSearchReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynSearchReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/DynServerDetails | Lcom/bapis/bilibili/app/dynamic/v2/DynServerDetailsReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynServerDetailsReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/DynSpace | Lcom/bapis/bilibili/app/dynamic/v2/DynSpaceReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynSpaceRsp; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/DynSpaceInternal | Lcom/bapis/bilibili/app/dynamic/v2/DynSpaceReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynSpaceRsp; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/DynSpaceSearchDetails | Lcom/bapis/bilibili/app/dynamic/v2/DynSpaceSearchDetailsReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynSpaceSearchDetailsReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/DynTab | Lcom/bapis/bilibili/app/dynamic/v2/DynTabReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynTabReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/DynThumb | Lcom/bapis/bilibili/app/dynamic/v2/DynThumbReq; | Lcom/bapis/bilibili/app/dynamic/v2/NoReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/DynTranslate | Lcom/bapis/bilibili/app/dynamic/v2/DynTranslateReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynTranslateResp; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/DynUnLoginRcmd | Lcom/bapis/bilibili/app/dynamic/v2/DynRcmdReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynRcmdReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/DynVideo | Lcom/bapis/bilibili/app/dynamic/v2/DynVideoReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynVideoReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/DynVideoPersonal | Lcom/bapis/bilibili/app/dynamic/v2/DynVideoPersonalReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynVideoPersonalReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/DynVideoUpdOffset | Lcom/bapis/bilibili/app/dynamic/v2/DynVideoUpdOffsetReq; | Lcom/bapis/bilibili/app/dynamic/v2/NoReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/DynVote | Lcom/bapis/bilibili/app/dynamic/v2/DynVoteReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynVoteReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/FeedFilter | Lcom/bapis/bilibili/app/dynamic/v2/FeedFilterReq; | Lcom/bapis/bilibili/app/dynamic/v2/FeedFilterReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/FetchTabSetting | Lcom/bapis/bilibili/app/dynamic/v2/NoReq; | Lcom/bapis/bilibili/app/dynamic/v2/FetchTabSettingReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/HomeSubscribe | Lcom/bapis/bilibili/app/dynamic/v2/HomeSubscribeReq; | Lcom/bapis/bilibili/app/dynamic/v2/HomeSubscribeReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/LbsPoi | Lcom/bapis/bilibili/app/dynamic/v2/LbsPoiReq; | Lcom/bapis/bilibili/app/dynamic/v2/LbsPoiReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/LegacyTopicFeed | Lcom/bapis/bilibili/app/dynamic/v2/LegacyTopicFeedReq; | Lcom/bapis/bilibili/app/dynamic/v2/LegacyTopicFeedReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/LikeList | Lcom/bapis/bilibili/app/dynamic/v2/LikeListReq; | Lcom/bapis/bilibili/app/dynamic/v2/LikeListReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/OfficialAccounts | Lcom/bapis/bilibili/app/dynamic/v2/OfficialAccountsReq; | Lcom/bapis/bilibili/app/dynamic/v2/OfficialAccountsReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/OfficialDynamics | Lcom/bapis/bilibili/app/dynamic/v2/OfficialDynamicsReq; | Lcom/bapis/bilibili/app/dynamic/v2/OfficialDynamicsReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/QuickConsumeMoreAvatarList | Lcom/bapis/bilibili/app/dynamic/v2/QuickConsumeMoreAvatarListReq; | Lcom/bapis/bilibili/app/dynamic/v2/QuickConsumeMoreAvatarListReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/ReactionList | Lcom/bapis/bilibili/app/dynamic/v2/ReactionListReq; | Lcom/bapis/bilibili/app/dynamic/v2/ReactionListReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/RepostList | Lcom/bapis/bilibili/app/dynamic/v2/RepostListReq; | Lcom/bapis/bilibili/app/dynamic/v2/RepostListRsp; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/SchoolRecommend | Lcom/bapis/bilibili/app/dynamic/v2/SchoolRecommendReq; | Lcom/bapis/bilibili/app/dynamic/v2/SchoolRecommendReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/SchoolSearch | Lcom/bapis/bilibili/app/dynamic/v2/SchoolSearchReq; | Lcom/bapis/bilibili/app/dynamic/v2/SchoolSearchReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/SetDecision | Lcom/bapis/bilibili/app/dynamic/v2/SetDecisionReq; | Lcom/bapis/bilibili/app/dynamic/v2/NoReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/SetRecentCampus | Lcom/bapis/bilibili/app/dynamic/v2/SetRecentCampusReq; | Lcom/bapis/bilibili/app/dynamic/v2/NoReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/SubscribeCampus | Lcom/bapis/bilibili/app/dynamic/v2/SubscribeCampusReq; | Lcom/bapis/bilibili/app/dynamic/v2/NoReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/SubscriptionClick | Lcom/bapis/bilibili/app/dynamic/v2/SubscriptionClickReq; | Lcom/bapis/bilibili/app/dynamic/v2/SubscriptionClickResp; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/TopicList | Lcom/bapis/bilibili/app/dynamic/v2/TopicListReq; | Lcom/bapis/bilibili/app/dynamic/v2/TopicListReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/TopicSquare | Lcom/bapis/bilibili/app/dynamic/v2/TopicSquareReq; | Lcom/bapis/bilibili/app/dynamic/v2/TopicSquareReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/UnfollowMatch | Lcom/bapis/bilibili/app/dynamic/v2/UnfollowMatchReq; | Lcom/bapis/bilibili/app/dynamic/v2/NoReply; | not-tested |
| /bilibili.app.dynamic.v2.Dynamic/UpdateTabSetting | Lcom/bapis/bilibili/app/dynamic/v2/UpdateTabSettingReq; | Lcom/bapis/bilibili/app/dynamic/v2/NoReply; | not-tested |
| /bilibili.app.dynamic.v2.Opus/FeedbackRelatedTribee | Lcom/bapis/bilibili/app/dynamic/v2/FeedbackRelatedTribeeReq; | Lcom/bapis/bilibili/app/dynamic/v2/FeedbackRelatedTribeeRsp; | not-tested |
| /bilibili.app.dynamic.v2.Opus/ListCreation | Lcom/bapis/bilibili/app/dynamic/v2/ListCreationReq; | Lcom/bapis/bilibili/app/dynamic/v2/ListCreationResp; | not-tested |
| /bilibili.app.dynamic.v2.Opus/ListFav | Lcom/bapis/bilibili/app/dynamic/v2/ListFavReq; | Lcom/bapis/bilibili/app/dynamic/v2/ListFavResp; | not-tested |
| /bilibili.app.dynamic.v2.Opus/OpusCollectionDetail | Lcom/bapis/bilibili/app/dynamic/v2/OpusCollectionDetailReq; | Lcom/bapis/bilibili/app/dynamic/v2/OpusCollectionDetailResp; | not-tested |
| /bilibili.app.dynamic.v2.Opus/OpusDetail | Lcom/bapis/bilibili/app/dynamic/v2/OpusDetailReq; | Lcom/bapis/bilibili/app/dynamic/v2/OpusDetailResp; | not-tested |
| /bilibili.app.dynamic.v2.Opus/OpusSpaceFlow | Lcom/bapis/bilibili/app/dynamic/v2/OpusSpaceFlowReq; | Lcom/bapis/bilibili/app/dynamic/v2/OpusSpaceFlowResp; | not-tested |
| /bilibili.app.dynamic.v2.Opus/OpusTranslate | Lcom/bapis/bilibili/app/dynamic/v2/OpusDetailReq; | Lcom/bapis/bilibili/app/dynamic/v2/OpusDetailResp; | not-tested |
| /bilibili.app.dynamic.v2.Opus/SignResources | Lcom/bapis/bilibili/app/dynamic/v2/SignResourcesReq; | Lcom/bapis/bilibili/app/dynamic/v2/SignResourcesResp; | not-tested |
| /bilibili.app.dynamic.v2.Opus/SunflowerParse | Lcom/bapis/bilibili/app/dynamic/v2/SunflowerParseReq; | Lcom/bapis/bilibili/app/dynamic/v2/SunflowerParseRsp; | not-tested |
| /bilibili.app.topic.v1.Topic/ReportUserCloseFeedCard | Lcom/bapis/bilibili/app/topic/v1/ReportUserCloseFeedCardReq; | Lcom/google/protobuf/Empty; | not-tested |
| /bilibili.app.topic.v1.Topic/ReportUserRatingFeedCardChoice | Lcom/bapis/bilibili/app/topic/v1/ReportUserRatingFeedCardChoiceReq; | Lcom/google/protobuf/Empty; | not-tested |
| /bilibili.app.topic.v1.Topic/SetTopTopicRes | Lcom/bapis/bilibili/app/topic/v1/SetTopTopicResReq; | Lcom/bapis/bilibili/app/topic/v1/SetTopTopicResReply; | not-tested |
| /bilibili.app.topic.v1.Topic/TopicDetailsAll | Lcom/bapis/bilibili/app/topic/v1/TopicDetailsAllReq; | Lcom/bapis/bilibili/app/topic/v1/TopicDetailsAllReply; | not-tested |
| /bilibili.app.topic.v1.Topic/TopicDetailsFold | Lcom/bapis/bilibili/app/topic/v1/TopicDetailsFoldReq; | Lcom/bapis/bilibili/app/topic/v1/TopicDetailsFoldReply; | not-tested |
| /bilibili.app.topic.v1.Topic/TopicMergedResource | Lcom/bapis/bilibili/app/topic/v1/TopicMergedResourceReq; | Lcom/bapis/bilibili/app/topic/v1/TopicMergedResourceReply; | not-tested |
| /bilibili.app.topic.v1.Topic/TopicReserveButtonClick | Lcom/bapis/bilibili/app/topic/v1/TopicReserveButtonClickReq; | Lcom/bapis/bilibili/app/topic/v1/TopicReserveButtonClickReply; | not-tested |
| /bilibili.app.topic.v1.Topic/TopicSetDetails | Lcom/bapis/bilibili/app/topic/v1/TopicSetDetailsReq; | Lcom/bapis/bilibili/app/topic/v1/TopicSetDetailsReply; | not-tested |
| /bilibili.main.dynamic.campus.v1.Campus/ActionReport | Lcom/bapis/bilibili/dynamic/interfaces/campus/v1/ActionReportReq; | Lcom/bapis/bilibili/dynamic/interfaces/campus/v1/ActionReportReply; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/AddArticleCollection | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/AddArticleCollectionReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/AddArticleCollectionRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/AddDynamicReport | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/AddDynamicReportReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/AddDynamicReportRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/AddOpusArticleDraft | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/AddOpusArticleDraftReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/AddOpusArticleDraftRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/ArticleCollectionAddable | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleCollectionAddableReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleCollectionAddableRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/ArticleCollectionDetail | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleCollectionDetailReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleCollectionDetailRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/ArticleCollectionList | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleCollectionListReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleCollectionListRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/ArticleCollectionOperation | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleCollectionOperationReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleCollectionOperationRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/ArticleHomePageCategories | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleHomePageCategoriesReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleHomePageCategoriesRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/ArticleInCollectionSort | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleInCollectionSortReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleInCollectionSortRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/ArticleRecommends | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleRecommendsReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleRecommendsRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/ArticleRecommendsPlus | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleRecommendsPlusReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleRecommendsPlusRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/AtList | Lcom/bapis/bilibili/dynamic/common/AtListReq; | Lcom/bapis/bilibili/dynamic/common/AtListRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/AtSearch | Lcom/bapis/bilibili/dynamic/common/AtSearchReq; | Lcom/bapis/bilibili/dynamic/common/AtListRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/AttachCardButton | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/AttachCardButtonReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/AttachCardButtonRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/Config | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ConfigReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ConfigRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/CreateDyn | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/CreateDynReq; | Lcom/bapis/bilibili/dynamic/common/CreateResp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/CreateInitCheck | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/CreateInitCheckReq; | Lcom/bapis/bilibili/dynamic/common/CreateCheckResp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/CreateOpus | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/CreateOpusReq; | Lcom/bapis/bilibili/dynamic/common/CreateResp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/CreateOpusInitCheck | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/CreateOpusInitCheckReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/CreateOpusInitCheckRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/CreatePageInfos | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/CreatePageInfosReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/CreatePageInfosRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/CreatePermissionButtonClick | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/CreatePermissionButtonClickReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/CreatePermissionButtonClickRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/CreatePlusButtonClick | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/CreatePlusButtonClickReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/CreatePlusButtonClickRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/DelArticleCollection | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/DelArticleCollectionReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/DelArticleCollectionRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/DelArticleDraft | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/DelArticleDraftReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/DelArticleDraftRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/DynamicButtonClick | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/DynamicButtonClickReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/DynamicButtonClickRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/DynamicRepost | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/DynamicRepostReq; | Lcom/bapis/bilibili/dynamic/common/CreateResp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/DynamicThumb | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/DynamicThumbReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/DynamicThumbRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/DynMetricsActiveReport | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/DynMetricsActiveReportReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/DynMetricsActiveReportRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/DynPrivatePubSetting | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/DynPrivatePubSettingReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/DynPrivatePubSettingRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/EditArticleCollection | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/EditArticleCollectionReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/EditArticleCollectionRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/EditDyn | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/EditDynReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/EditDynRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/EditOpus | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/EditOpusReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/EditOpusRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/GetEditDynInfo | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/GetEditDynInfoReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/GetEditDynInfoRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/GetEditDynInfoWeb | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/GetEditDynInfoWebReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/GetEditDynInfoWebRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/GetUidByName | Lcom/bapis/bilibili/dynamic/common/GetUidByNameReq; | Lcom/bapis/bilibili/dynamic/common/GetUidByNameRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/GoodsAttachCardPreview | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/GoodsAttachCardPreviewReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/GoodsAttachCardPreviewRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/HomeBubbleReport | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/HomeBubbleReportReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/HomeBubbleReportRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/HotSearch | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/HotSearchReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/HotSearchRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/ICreateGoodsReplySync | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ICreateGoodsReplySyncReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ICreateResp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/InitCheckTribee | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/InitCheckTribeeReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/CreateCheckTribeeResp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/InitCheckTribeeWeb | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/InitCheckTribeeReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/CreateCheckTribeeWebResp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/NearbyPoiList | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/NearbyPoiListReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/NearbyPoiListRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/OpusArticleDraftList | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/OpusArticleDraftListReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/OpusArticleDraftListRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/OpusArticleDraftView | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/OpusArticleDraftViewReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/OpusArticleDraftViewRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/RecommendPoi | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/RecommendPoiReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/RecommendPoiRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/ReprintOpusToTribee | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ReprintOpusToTribeeReq; | Lcom/bapis/bilibili/dynamic/common/CreateResp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/ReserveButtonClick | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ReserveButtonClickReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ReserveButtonClickResp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/RmDyn | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/RmDynReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/RmDynRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/RmSpaceTop | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/RmSpaceTopReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/RmSpaceTopRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/SearchPoiList | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/SearchPoiListReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/SearchPoiListRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/SetSpaceTop | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/SetSpaceTopReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/SetSpaceTopRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/SubmitCheck | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/SubmitCheckReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/SubmitCheckRsp; | not-tested |
| /bilibili.main.dynamic.feed.v1.Feed/Suggest | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/SuggestReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/SuggestRsp; | not-tested |
| /bilibili.main.dynamic.vote.v1.Vote/NewDoVote | Lcom/bapis/bilibili/dynamic/interfaces/vote/v1/NewDoVoteReq; | Lcom/bapis/bilibili/dynamic/interfaces/vote/v1/NewDoVoteRsp; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category dynamic --limit 10
node bin/bili-apis.mjs show "ID"
```
