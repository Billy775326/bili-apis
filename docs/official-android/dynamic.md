# 动态与话题

动态流、图文、话题和校园。分类根据路由、域名与声明类名称推断，未验证业务行为。

官方 Android 9.19.0：72 条 HTTP 声明、149 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。

[返回分类](README.md) · [与 Play 对比](comparison.md)

## HTTP

参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。

| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |
| --- | --- | --- | --- | --- |
| classes12.dex:55281:GET | GET | https://app.bilibili.com/x/v2/region/dynamic/list | Query:rid, Query:channel, Query:pull, Query:ctime | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/ogv/opbase/BangumiUgcVideoV2;&gt;; |
| classes12.dex:63533:GET | GET | https://app.bilibili.com/x/bplus/geo | Query:lat, Query:lng | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/location/api/MapInfo;&gt;;&gt;; |
| classes14.dex:32357:POST | POST | https://app.bilibili.com/x/topic/fav/sub/cancel | Field:topic_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:32359:GET | GET | https://app.bilibili.com/x/topic/fav/sub/list | Query:page_size, Query:page_num, Query:offset, Query:from | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/topic/RspCollectionTopic;&gt;;&gt;; |
| classes18.dex:29933:GET | GET | https://app.bilibili.com/x/topic/pub/is_existed | Query:topic | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/topix/model/TopicTitleCheckResult;&gt;;&gt;; |
| classes18.dex:29934:GET | GET | https://app.bilibili.com/x/topic/pub/endpoint | Query:scene | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/topix/model/TopicCreateLimit;&gt;;&gt;; |
| classes18.dex:29937:POST | POST | https://app.bilibili.com/x/topic/create/submit | Field:topic_name, Field:description, Field:scene, Field:submit_topic_type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/topix/model/TopicCreationResult;&gt;;&gt;; |
| classes18.dex:29938:GET | GET | https://app.bilibili.com/x/topic/pub/search?page_size=20 | Query:keywords, Query:offset, Query:upload_id, Query:from_topic_id, Query:from_topic_name, Query:from, Query:content | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/topix/model/TopicSearchResult;&gt;;&gt;; |
| classes18.dex:29939:GET | GET | https://app.bilibili.com/x/topic/pub/search?page_size=20&from=center | Query:keywords, Query:offset | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/topix/model/TopicSearchResult;&gt;;&gt;; |
| classes18.dex:29940:GET | GET | https://app.bilibili.com/x/topic/vert/center?source=app&page_size=20 | Query:offset, Query:scene | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/topix/center/TopixCenterData;&gt;;&gt;; |
| classes18.dex:29941:POST | POST | https://app.bilibili.com/x/topic/dislike | Field:topic_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes18.dex:29942:GET | GET | https://app.bilibili.com/x/topic/vert/online | Query:topic_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/topix/model/TopixDynamicOnline;&gt;;&gt;; |
| classes18.dex:29943:GET | GET | https://app.bilibili.com/x/topic/pub/events | Query:show_mids, Query:new_pub_num | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/topix/model/TopixDynamicPubEvent;&gt;;&gt;; |
| classes18.dex:29944:POST | POST | https://app.bilibili.com/x/topic/fav/sub/add | Field:topic_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes18.dex:29945:POST | POST | https://app.bilibili.com/x/topic/fav/sub/cancel | Field:topic_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes18.dex:29946:POST | POST | https://app.bilibili.com/x/topic/like | Field:up_mid, Field:topic_id, Field:action | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes18.dex:29947:POST | POST | https://app.bilibili.com/x/topic/fav/sub/add | Field:topic_set_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes18.dex:29948:POST | POST | https://app.bilibili.com/x/topic/fav/sub/cancel | Field:topic_set_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes18.dex:29949:GET | GET | https://app.bilibili.com/x/topic/timeline | Query:topic_id, Query:offset | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/topix/detail/timeline/TopicTimelineFloatRsp;&gt;;&gt;; |
| classes18.dex:46168:GET | GET | https://api.vc.bilibili.com/dynamic_mix/v1/dynamic_mix/at_list | Query:uid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/upper/api/bean/atuser/AtUserListBean;&gt;;&gt;; |
| classes18.dex:46169:GET | GET | https://api.vc.bilibili.com/dynamic_mix/v1/dynamic_mix/at_search | Query:uid, Query:keyword | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/upper/api/bean/atuser/AtUserListBean;&gt;;&gt;; |
| classes18.dex:46170:GET | GET | https://api.vc.bilibili.com/dynamic_mix/v1/dynamic_mix/name_to_uid | Query:names, Query:teenagers_mode | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/upper/api/bean/atuser/AtUserIdListBean;&gt;;&gt;; |
| classes19.dex:13251:GET | GET | https://app.bilibili.com/x/v2/feed/index/dynamic/story | QueryMap:(内容未知), Query:aid, Query:pull, Query:scene, Query:topic_id, Query:circle_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/video/story/api/StoryFeedResponse;&gt;; |
| classes28.dex:45590:POST | POST | https://api.bilibili.com/x/v2/fav/topic/add | Query:access_key, Query:tpid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes28.dex:45591:GET | GET | https://api.bilibili.com/event/getlist | Query:access_key, Query:page, Query:pageSize | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/topic/api/BiliTopicList;&gt;;&gt;; |
| classes28.dex:45592:GET | GET | https://api.bilibili.com/topic/getlist | Query:access_key, Query:page, Query:pageSize | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/topic/api/BiliTopicList;&gt;;&gt;; |
| classes28.dex:45593:GET | GET | https://api.bilibili.com/x/v2/fav/topic/favoured | Query:access_key, Query:tpid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/topic/api/FavouredStatus;&gt;;&gt;; |
| classes28.dex:45594:POST | POST | https://api.bilibili.com/x/v2/fav/topic/del | Query:access_key, Query:tpid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:14922:POST | POST | https://api.vc.bilibili.com/dynamic_repost/v1/dynamic_repost/reply | Field:access_key, Field:uid, Field:share_uid, Field:type, Field:rid, Field:content, Field:repost_code, Field:ctrl, Field:extension, Field:source | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/comment2/attachment/BiliDynamicSender$ResultData;&gt;;&gt;; |
| classes5.dex:14923:POST | POST | https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/create_act_draw | Field:access_key, Field:oid, Field:type, Field:rp_id, Field:extension, Field:pictures, Field:from | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/comment2/attachment/BiliDynamicSender$ResultData;&gt;;&gt;; |
| classes5.dex:14924:POST | POST | https://api.vc.bilibili.com/api/v1/drawImage/upload | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/comment2/attachment/BiliDynamicSender$UploadImage;&gt;;&gt;; |
| classes5.dex:14925:POST | POST | https://api.bilibili.com/x/dynamic/feed/draw/upload_bfs | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/comment2/attachment/BiliDynamicSender$UploadImage;&gt;;&gt;; |
| classes8.dex:252:GET | GET | https://api.bilibili.com/x/dynamic/topic/stats | Query:topic_id, Query:topic_name | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/net/entity/TopicActiveStatsEntity;&gt;;&gt;; |
| classes8.dex:33157:GET | GET | https://api.bilibili.com/x/dynamic/feed/attach/attachcardpreview | Query:biz_type, Query:biz_id, Query:mid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/AttachCardPreview;&gt;;&gt;; |
| classes8.dex:33158:GET | GET | https://api.bilibili.com/x/dynamic/feed/attach/preview | Query:biz_id, Query:biz_type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/AttachPreview;&gt;;&gt;; |
| classes8.dex:33159:GET | GET | https://api.bilibili.com/x/dynamic/feed/attach/reservepreview | Query:reserve_id, Query:mid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/ReserveCardPreview;&gt;;&gt;; |
| classes8.dex:33160:GET | GET | https://api.bilibili.com/x/dynamic/feed/attach/ugcpreview | Query:ugc_id, Query:mid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/AttachUgcPreview;&gt;;&gt;; |
| classes8.dex:33162:POST | POST | https://api.vc.bilibili.com/promo_svr/v1/promo_svr/fetch_task | Field:order_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes8.dex:33163:POST | POST | https://api.vc.bilibili.com/dynamic_repost/v1/dynamic_repost/pre_judge | Field:uid, Field:dynamic_id, Field:content, Field:texts, Field:dynamic_type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/net/entity/CheckResult;&gt;;&gt;; |
| classes8.dex:33164:POST | POST | https://api.vc.bilibili.com/dynamic_repost/v1/dynamic_repost/pre_judge | Field:uid, Field:dynamic_id, Field:content, Field:texts, Field:type, Field:rid, Field:share_id, Field:share_mode | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/net/entity/CheckResult;&gt;;&gt;; |
| classes8.dex:33165:GET | GET | https://api.vc.bilibili.com/dynamic_mix/v1/dynamic_mix/name_to_uid | Query:names, Query:teenagers_mode | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/net/entity/UserInfo;&gt;;&gt;; |
| classes8.dex:33166:POST | POST | https://api.vc.bilibili.com/vote_svr/v1/vote_svr/do_vote | Field:vote_id, Field:status, Field:votes[] | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/EmptyData;&gt;;&gt;; |
| classes8.dex:33167:POST | POST | https://api.bilibili.com/x/dynamic/feed/block/add | Query:mid, Query:fid, Query:type, Query:action, Query:biz_value | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/EmptyData;&gt;;&gt;; |
| classes8.dex:33168:GET | GET | https://api.vc.bilibili.com/topic_svr/v1/topic_svr/fetch_ogv | Query:topic_id, Query:topic_name | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/FetchTopicOgv;&gt;;&gt;; |
| classes8.dex:33172:GET | GET | https://app.bilibili.com/x/topic/pub/rcmd/search | Query:keywords, Query:upload_id, Query:from_topic_id, Query:from_topic_name | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/net/entity/response/TopicItems;&gt;;&gt;; |
| classes8.dex:33173:GET | GET | https://api.vc.bilibili.com/topic_svr/v1/topic_svr/fetch_dynamics_v2 | Query:device_id, Query:topic_id, Query:topic_name, Query:offset, Query:is_frontpage, Query:types, Query:sortby, Query:from_spmid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/TopicFollowingInfo;&gt;;&gt;; |
| classes8.dex:33174:GET | GET | https://api.vc.bilibili.com/topic_svr/v1/topic_svr/fetch_dynamics_v2 | Query:access_key, Query:offset, Query:from_spmid, QueryMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/TopicFollowingInfo;&gt;;&gt;; |
| classes8.dex:33175:POST | POST | https://api.vc.bilibili.com/topic_svr/v1/topic_svr/topic_component_types | Field:topic_id, Field:topic_name | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/TopicWebBean;&gt;;&gt;; |
| classes8.dex:33176:GET | GET | https://api.vc.bilibili.com/vote_svr/v1/vote_svr/vote_info | Query:vote_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/VoteInfo;&gt;;&gt;; |
| classes8.dex:33177:POST | POST | https://api.vc.bilibili.com/dynamic_like/v1/dynamic_like/thumb | Field:uid, Field:dynamic_id, Field:type, Field:rid, Field:spec_type, Field:up | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/net/entity/FollowingLikeState;&gt;;&gt;; |
| classes8.dex:33178:POST | POST | https://api.vc.bilibili.com/dynamic_like/v1/dynamic_like/no_interest | Query:uid, Query:dynamic_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/RecommendFollowingInfo;&gt;;&gt;; |
| classes8.dex:33180:POST | POST | https://api.vc.bilibili.com/dynamic_report/v1/dynamic_report/rcmd_report | Field:report_type, Field:uid, Field:dynamic_id, Field:count | Lcom/bilibili/okretro/call/BiliCall&lt;Lokhttp3/ResponseBody;&gt;; |
| classes8.dex:33181:POST | POST | https://api.vc.bilibili.com/dynamic_repost/v1/dynamic_repost/repost | Field:uid, Field:dynamic_id, Field:type, Field:rid, Field:content, Field:ctrl, Field:at_uids, Field:spec_type, Field:repost_code, Field:extension, Field:sync_comment, Field:up_choose_comment | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/net/entity/response/TransmitResp;&gt;;&gt;; |
| classes8.dex:33182:GET | GET | https://api.vc.bilibili.com/dynamic_topic/v1/topic/followTopics | Query:size, Query:page | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/cardBean/FollowingTopic;&gt;;&gt;; |
| classes8.dex:33183:POST | POST | https://api.vc.bilibili.com/dynamic_topic/v1/topic/setTopTopic | Field:top_list | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes8.dex:33184:POST | POST | https://app.bilibili.com/x/topic/pub/upload | Query:topic_id, Query:request_id, Query:upload_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes8.dex:33185:GET | GET | https://app.bilibili.com/x/topic/vert/search | Query:keywords, Query:page_num, Query:offset | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/TopicRecommendData;&gt;;&gt;; |
| classes8.dex:33186:POST | POST | https://api.vc.bilibili.com/topic_svr/v1/topic_svr/up_act_pin | Query:pid, Query:dynamic_id, Query:op_type, Query:force, Query:scenary_from | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/UpActPinReply;&gt;;&gt;; |
| classes8.dex:33188:POST | POST | https://api.vc.bilibili.com/api/v1/drawImage/upload | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/net/entity/response/FollowingUploadImageResponse;&gt;;&gt;; |
| classes8.dex:33189:POST | POST | https://api.bilibili.com/x/dynamic/feed/draw/upload_bfs | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/net/entity/response/FollowingUploadImageResponse;&gt;;&gt;; |
| classes8.dex:33190:POST | POST | https://api.bilibili.com/x/station/upload_bfs | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/net/entity/response/FollowingUploadImageResponse;&gt;;&gt;; |
| classes8.dex:44437:POST | POST | https://app.bilibili.com/x/topic/report | Field:topic_id, Field:reason | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes8.dex:44438:POST | POST | https://app.bilibili.com/x/topic/resource/report | Field:topic_id, Field:res_id, Field:res_type, Field:reason | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes9.dex:20211:GET | GET | https://api.vc.bilibili.com/link_dynamic/v1/dynamic/fans_group | Query:owner_uid, Query:group_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/im/entity/UpClipAndLiveInfo;&gt;;&gt;; |
| classes9.dex:20244:GET | GET | https://api.vc.bilibili.com/link_dynamic/v1/dynamic/owner_dynamic | Query:owner_uid, Query:group_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/im/entity/PushCardModel;&gt;;&gt;; |
| classes9.dex:20256:POST | POST | https://api.bilibili.com/x/dynamic/feed/draw/upload_bfs | Part:biz, Part:timestamp, Part:rnd, Query:access_key, Part:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes9.dex:46713:POST | POST | https://app.bilibili.com/x/topic/fav/sub/cancel | Field:topic_set_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes9.dex:52843:GET | GET | https://app.bilibili.com/x/bplus/draw/search/all | Query:uid, Query:keyword, Query:lat, Query:lng | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/tagsearch/model/TagAll;&gt;;&gt;; |
| classes9.dex:52844:GET | GET | https://app.bilibili.com/x/bplus/draw/search/locations | Query:uid, Query:keyword, Query:lat, Query:lng, Query:page, Query:page_size | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/tagsearch/model/TagLocationWrapper;&gt;;&gt;; |
| classes9.dex:52845:GET | GET | https://app.bilibili.com/x/bplus/draw/search/topics | Query:uid, Query:keyword, Query:page, Query:page_size | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/tagsearch/model/TagTopicWrapper;&gt;;&gt;; |
| classes9.dex:52846:GET | GET | https://app.bilibili.com/x/bplus/draw/search/users | Query:uid, Query:keyword, Query:page, Query:page_size | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/tagsearch/model/TagUserWrapper;&gt;;&gt;; |
| classes9.dex:52847:GET | GET | https://app.bilibili.com/x/bplus/draw/search/items | Query:uid, Query:keyword, Query:page, Query:page_size | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/tagsearch/model/TagProductWrapper;&gt;;&gt;; |

## gRPC

请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。

| 路由 | 请求类型候选 | 响应类型候选 |
| --- | --- | --- |
| /bilibili.app.dynamic.v1.Dynamic/DynDetails | Lcom/bapis/bilibili/app/dynamic/v1/DynDetailsReq; | Lcom/bapis/bilibili/app/dynamic/v1/DynDetailsReply; |
| /bilibili.app.dynamic.v1.Dynamic/DynMixUpListSearch | Lcom/bapis/bilibili/app/dynamic/v1/DynMixUpListSearchReq; | Lcom/bapis/bilibili/app/dynamic/v1/DynMixUpListSearchReply; |
| /bilibili.app.dynamic.v1.Dynamic/DynMixUpListViewMore | Lcom/bapis/bilibili/app/dynamic/v1/NoReq; | Lcom/bapis/bilibili/app/dynamic/v1/DynMixUpListViewMoreReply; |
| /bilibili.app.dynamic.v1.Dynamic/DynOurCity | Lcom/bapis/bilibili/app/dynamic/v1/DynOurCityReq; | Lcom/bapis/bilibili/app/dynamic/v1/DynOurCityReply; |
| /bilibili.app.dynamic.v1.Dynamic/DynOurCitySwitch | Lcom/bapis/bilibili/app/dynamic/v1/DynOurCitySwitchReq; | Lcom/bapis/bilibili/app/dynamic/v1/NoReply; |
| /bilibili.app.dynamic.v1.Dynamic/DynRed | Lcom/bapis/bilibili/app/dynamic/v1/DynRedReq; | Lcom/bapis/bilibili/app/dynamic/v1/DynRedReply; |
| /bilibili.app.dynamic.v1.Dynamic/DynTab | Lcom/bapis/bilibili/app/dynamic/v1/DynTabReq; | Lcom/bapis/bilibili/app/dynamic/v1/DynTabReply; |
| /bilibili.app.dynamic.v1.Dynamic/DynUpdOffset | Lcom/bapis/bilibili/app/dynamic/v1/DynUpdOffsetReq; | Lcom/bapis/bilibili/app/dynamic/v1/NoReply; |
| /bilibili.app.dynamic.v1.Dynamic/DynVideo | Lcom/bapis/bilibili/app/dynamic/v1/DynVideoReq; | Lcom/bapis/bilibili/app/dynamic/v1/DynVideoReqReply; |
| /bilibili.app.dynamic.v1.Dynamic/DynVideoPersonal | Lcom/bapis/bilibili/app/dynamic/v1/DynVideoPersonalReq; | Lcom/bapis/bilibili/app/dynamic/v1/DynVideoPersonalReply; |
| /bilibili.app.dynamic.v1.Dynamic/GeoCoder | Lcom/bapis/bilibili/app/dynamic/v1/GeoCoderReq; | Lcom/bapis/bilibili/app/dynamic/v1/GeoCoderReply; |
| /bilibili.app.dynamic.v1.Dynamic/OurCityClickReport | Lcom/bapis/bilibili/app/dynamic/v1/OurCityClickReportReq; | Lcom/bapis/bilibili/app/dynamic/v1/OurCityClickReportReply; |
| /bilibili.app.dynamic.v1.Dynamic/SVideo | Lcom/bapis/bilibili/app/dynamic/v1/SVideoReq; | Lcom/bapis/bilibili/app/dynamic/v1/SVideoReply; |
| /bilibili.app.dynamic.v2.Campus/WaterFlowRcmd | Lcom/bapis/bilibili/app/dynamic/v2/WaterFlowRcmdReq; | Lcom/bapis/bilibili/app/dynamic/v2/WaterFlowRcmdResp; |
| /bilibili.app.dynamic.v2.Dynamic/AlumniDynamics | Lcom/bapis/bilibili/app/dynamic/v2/AlumniDynamicsReq; | Lcom/bapis/bilibili/app/dynamic/v2/AlumniDynamicsReply; |
| /bilibili.app.dynamic.v2.Dynamic/CampusBillboard | Lcom/bapis/bilibili/app/dynamic/v2/CampusBillBoardReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusBillBoardReply; |
| /bilibili.app.dynamic.v2.Dynamic/CampusBillboardInternal | Lcom/bapis/bilibili/app/dynamic/v2/CampusBillboardInternalReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusBillBoardReply; |
| /bilibili.app.dynamic.v2.Dynamic/CampusEntryTab | Lcom/bapis/bilibili/app/dynamic/v2/CampusEntryTabReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusEntryTabResp; |
| /bilibili.app.dynamic.v2.Dynamic/CampusFeedback | Lcom/bapis/bilibili/app/dynamic/v2/CampusFeedbackReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusFeedbackReply; |
| /bilibili.app.dynamic.v2.Dynamic/CampusHomePages | Lcom/bapis/bilibili/app/dynamic/v2/CampusHomePagesReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusHomePagesReply; |
| /bilibili.app.dynamic.v2.Dynamic/CampusMateLikeList | Lcom/bapis/bilibili/app/dynamic/v2/CampusMateLikeListReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusMateLikeListReply; |
| /bilibili.app.dynamic.v2.Dynamic/CampusMngDetail | Lcom/bapis/bilibili/app/dynamic/v2/CampusMngDetailReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusMngDetailReply; |
| /bilibili.app.dynamic.v2.Dynamic/CampusMngQuizOperate | Lcom/bapis/bilibili/app/dynamic/v2/CampusMngQuizOperateReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusMngQuizOperateReply; |
| /bilibili.app.dynamic.v2.Dynamic/CampusMngSubmit | Lcom/bapis/bilibili/app/dynamic/v2/CampusMngSubmitReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusMngSubmitReply; |
| /bilibili.app.dynamic.v2.Dynamic/CampusRcmd | Lcom/bapis/bilibili/app/dynamic/v2/CampusRcmdReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusRcmdReply; |
| /bilibili.app.dynamic.v2.Dynamic/CampusRcmdFeed | Lcom/bapis/bilibili/app/dynamic/v2/CampusRcmdFeedReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusRcmdFeedReply; |
| /bilibili.app.dynamic.v2.Dynamic/CampusRecommend | Lcom/bapis/bilibili/app/dynamic/v2/CampusRecommendReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusRecommendReply; |
| /bilibili.app.dynamic.v2.Dynamic/CampusRedDot | Lcom/bapis/bilibili/app/dynamic/v2/CampusRedDotReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusRedDotReply; |
| /bilibili.app.dynamic.v2.Dynamic/CampusSquare | Lcom/bapis/bilibili/app/dynamic/v2/CampusSquareReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusSquareReply; |
| /bilibili.app.dynamic.v2.Dynamic/CampusTopicRcmdFeed | Lcom/bapis/bilibili/app/dynamic/v2/CampusTopicRcmdFeedReq; | Lcom/bapis/bilibili/app/dynamic/v2/CampusTopicRcmdFeedReply; |
| /bilibili.app.dynamic.v2.Dynamic/CooperationStaffList | Lcom/bapis/bilibili/app/dynamic/v2/CooperationStaffListReq; | Lcom/bapis/bilibili/app/dynamic/v2/CooperationStaffListResp; |
| /bilibili.app.dynamic.v2.Dynamic/DynAdditionCommonFollow | Lcom/bapis/bilibili/app/dynamic/v2/DynAdditionCommonFollowReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynAdditionCommonFollowReply; |
| /bilibili.app.dynamic.v2.Dynamic/DynAll | Lcom/bapis/bilibili/app/dynamic/v2/DynAllReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynAllReply; |
| /bilibili.app.dynamic.v2.Dynamic/DynAllPersonal | Lcom/bapis/bilibili/app/dynamic/v2/DynAllPersonalReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynAllPersonalReply; |
| /bilibili.app.dynamic.v2.Dynamic/DynAllUpdOffset | Lcom/bapis/bilibili/app/dynamic/v2/DynAllUpdOffsetReq; | Lcom/bapis/bilibili/app/dynamic/v2/NoReply; |
| /bilibili.app.dynamic.v2.Dynamic/DynDetail | Lcom/bapis/bilibili/app/dynamic/v2/DynDetailReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynDetailReply; |
| /bilibili.app.dynamic.v2.Dynamic/DynDetails | Lcom/bapis/bilibili/app/dynamic/v2/DynDetailsReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynDetailsReply; |
| /bilibili.app.dynamic.v2.Dynamic/DynFakeCard | Lcom/bapis/bilibili/app/dynamic/v2/DynFakeCardReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynFakeCardReply; |
| /bilibili.app.dynamic.v2.Dynamic/DynFriend | Lcom/bapis/bilibili/app/dynamic/v2/DynFriendReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynFriendReply; |
| /bilibili.app.dynamic.v2.Dynamic/DynLight | Lcom/bapis/bilibili/app/dynamic/v2/DynLightReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynLightReply; |
| /bilibili.app.dynamic.v2.Dynamic/DynMixUpListSearch | Lcom/bapis/bilibili/app/dynamic/v2/DynMixUpListSearchReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynMixUpListSearchReply; |
| /bilibili.app.dynamic.v2.Dynamic/DynMixUpListViewMore | Lcom/bapis/bilibili/app/dynamic/v2/DynMixUpListViewMoreReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynMixUpListViewMoreReply; |
| /bilibili.app.dynamic.v2.Dynamic/DynRcmdUpExchange | Lcom/bapis/bilibili/app/dynamic/v2/DynRcmdUpExchangeReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynRcmdUpExchangeReply; |
| /bilibili.app.dynamic.v2.Dynamic/DynSearch | Lcom/bapis/bilibili/app/dynamic/v2/DynSearchReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynSearchReply; |
| /bilibili.app.dynamic.v2.Dynamic/DynServerDetails | Lcom/bapis/bilibili/app/dynamic/v2/DynServerDetailsReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynServerDetailsReply; |
| /bilibili.app.dynamic.v2.Dynamic/DynSpace | Lcom/bapis/bilibili/app/dynamic/v2/DynSpaceReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynSpaceRsp; |
| /bilibili.app.dynamic.v2.Dynamic/DynSpaceInternal | Lcom/bapis/bilibili/app/dynamic/v2/DynSpaceReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynSpaceRsp; |
| /bilibili.app.dynamic.v2.Dynamic/DynSpaceSearchDetails | Lcom/bapis/bilibili/app/dynamic/v2/DynSpaceSearchDetailsReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynSpaceSearchDetailsReply; |
| /bilibili.app.dynamic.v2.Dynamic/DynTab | Lcom/bapis/bilibili/app/dynamic/v2/DynTabReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynTabReply; |
| /bilibili.app.dynamic.v2.Dynamic/DynThumb | Lcom/bapis/bilibili/app/dynamic/v2/DynThumbReq; | Lcom/bapis/bilibili/app/dynamic/v2/NoReply; |
| /bilibili.app.dynamic.v2.Dynamic/DynTranslate | Lcom/bapis/bilibili/app/dynamic/v2/DynTranslateReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynTranslateResp; |
| /bilibili.app.dynamic.v2.Dynamic/DynUnLoginRcmd | Lcom/bapis/bilibili/app/dynamic/v2/DynRcmdReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynRcmdReply; |
| /bilibili.app.dynamic.v2.Dynamic/DynVideo | Lcom/bapis/bilibili/app/dynamic/v2/DynVideoReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynVideoReply; |
| /bilibili.app.dynamic.v2.Dynamic/DynVideoPersonal | Lcom/bapis/bilibili/app/dynamic/v2/DynVideoPersonalReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynVideoPersonalReply; |
| /bilibili.app.dynamic.v2.Dynamic/DynVideoUpdOffset | Lcom/bapis/bilibili/app/dynamic/v2/DynVideoUpdOffsetReq; | Lcom/bapis/bilibili/app/dynamic/v2/NoReply; |
| /bilibili.app.dynamic.v2.Dynamic/DynVote | Lcom/bapis/bilibili/app/dynamic/v2/DynVoteReq; | Lcom/bapis/bilibili/app/dynamic/v2/DynVoteReply; |
| /bilibili.app.dynamic.v2.Dynamic/FeedFilter | Lcom/bapis/bilibili/app/dynamic/v2/FeedFilterReq; | Lcom/bapis/bilibili/app/dynamic/v2/FeedFilterReply; |
| /bilibili.app.dynamic.v2.Dynamic/FetchTabSetting | Lcom/bapis/bilibili/app/dynamic/v2/NoReq; | Lcom/bapis/bilibili/app/dynamic/v2/FetchTabSettingReply; |
| /bilibili.app.dynamic.v2.Dynamic/HomeSubscribe | Lcom/bapis/bilibili/app/dynamic/v2/HomeSubscribeReq; | Lcom/bapis/bilibili/app/dynamic/v2/HomeSubscribeReply; |
| /bilibili.app.dynamic.v2.Dynamic/LbsPoi | Lcom/bapis/bilibili/app/dynamic/v2/LbsPoiReq; | Lcom/bapis/bilibili/app/dynamic/v2/LbsPoiReply; |
| /bilibili.app.dynamic.v2.Dynamic/LegacyTopicFeed | Lcom/bapis/bilibili/app/dynamic/v2/LegacyTopicFeedReq; | Lcom/bapis/bilibili/app/dynamic/v2/LegacyTopicFeedReply; |
| /bilibili.app.dynamic.v2.Dynamic/LikeList | Lcom/bapis/bilibili/app/dynamic/v2/LikeListReq; | Lcom/bapis/bilibili/app/dynamic/v2/LikeListReply; |
| /bilibili.app.dynamic.v2.Dynamic/OfficialAccounts | Lcom/bapis/bilibili/app/dynamic/v2/OfficialAccountsReq; | Lcom/bapis/bilibili/app/dynamic/v2/OfficialAccountsReply; |
| /bilibili.app.dynamic.v2.Dynamic/OfficialDynamics | Lcom/bapis/bilibili/app/dynamic/v2/OfficialDynamicsReq; | Lcom/bapis/bilibili/app/dynamic/v2/OfficialDynamicsReply; |
| /bilibili.app.dynamic.v2.Dynamic/QuickConsumeMoreAvatarList | Lcom/bapis/bilibili/app/dynamic/v2/QuickConsumeMoreAvatarListReq; | Lcom/bapis/bilibili/app/dynamic/v2/QuickConsumeMoreAvatarListReply; |
| /bilibili.app.dynamic.v2.Dynamic/ReactionList | Lcom/bapis/bilibili/app/dynamic/v2/ReactionListReq; | Lcom/bapis/bilibili/app/dynamic/v2/ReactionListReply; |
| /bilibili.app.dynamic.v2.Dynamic/RepostList | Lcom/bapis/bilibili/app/dynamic/v2/RepostListReq; | Lcom/bapis/bilibili/app/dynamic/v2/RepostListRsp; |
| /bilibili.app.dynamic.v2.Dynamic/SchoolRecommend | Lcom/bapis/bilibili/app/dynamic/v2/SchoolRecommendReq; | Lcom/bapis/bilibili/app/dynamic/v2/SchoolRecommendReply; |
| /bilibili.app.dynamic.v2.Dynamic/SchoolSearch | Lcom/bapis/bilibili/app/dynamic/v2/SchoolSearchReq; | Lcom/bapis/bilibili/app/dynamic/v2/SchoolSearchReply; |
| /bilibili.app.dynamic.v2.Dynamic/SetDecision | Lcom/bapis/bilibili/app/dynamic/v2/SetDecisionReq; | Lcom/bapis/bilibili/app/dynamic/v2/NoReply; |
| /bilibili.app.dynamic.v2.Dynamic/SetRecentCampus | Lcom/bapis/bilibili/app/dynamic/v2/SetRecentCampusReq; | Lcom/bapis/bilibili/app/dynamic/v2/NoReply; |
| /bilibili.app.dynamic.v2.Dynamic/SubscribeCampus | Lcom/bapis/bilibili/app/dynamic/v2/SubscribeCampusReq; | Lcom/bapis/bilibili/app/dynamic/v2/NoReply; |
| /bilibili.app.dynamic.v2.Dynamic/SubscriptionClick | Lcom/bapis/bilibili/app/dynamic/v2/SubscriptionClickReq; | Lcom/bapis/bilibili/app/dynamic/v2/SubscriptionClickResp; |
| /bilibili.app.dynamic.v2.Dynamic/TopicList | Lcom/bapis/bilibili/app/dynamic/v2/TopicListReq; | Lcom/bapis/bilibili/app/dynamic/v2/TopicListReply; |
| /bilibili.app.dynamic.v2.Dynamic/TopicSquare | Lcom/bapis/bilibili/app/dynamic/v2/TopicSquareReq; | Lcom/bapis/bilibili/app/dynamic/v2/TopicSquareReply; |
| /bilibili.app.dynamic.v2.Dynamic/UnfollowMatch | Lcom/bapis/bilibili/app/dynamic/v2/UnfollowMatchReq; | Lcom/bapis/bilibili/app/dynamic/v2/NoReply; |
| /bilibili.app.dynamic.v2.Dynamic/UpdateTabSetting | Lcom/bapis/bilibili/app/dynamic/v2/UpdateTabSettingReq; | Lcom/bapis/bilibili/app/dynamic/v2/NoReply; |
| /bilibili.app.dynamic.v2.Opus/FeedbackRelatedTribee | Lcom/bapis/bilibili/app/dynamic/v2/FeedbackRelatedTribeeReq; | Lcom/bapis/bilibili/app/dynamic/v2/FeedbackRelatedTribeeRsp; |
| /bilibili.app.dynamic.v2.Opus/ListCreation | Lcom/bapis/bilibili/app/dynamic/v2/ListCreationReq; | Lcom/bapis/bilibili/app/dynamic/v2/ListCreationResp; |
| /bilibili.app.dynamic.v2.Opus/ListFav | Lcom/bapis/bilibili/app/dynamic/v2/ListFavReq; | Lcom/bapis/bilibili/app/dynamic/v2/ListFavResp; |
| /bilibili.app.dynamic.v2.Opus/OpusCollectionDetail | Lcom/bapis/bilibili/app/dynamic/v2/OpusCollectionDetailReq; | Lcom/bapis/bilibili/app/dynamic/v2/OpusCollectionDetailResp; |
| /bilibili.app.dynamic.v2.Opus/OpusDetail | Lcom/bapis/bilibili/app/dynamic/v2/OpusDetailReq; | Lcom/bapis/bilibili/app/dynamic/v2/OpusDetailResp; |
| /bilibili.app.dynamic.v2.Opus/OpusSpaceFlow | Lcom/bapis/bilibili/app/dynamic/v2/OpusSpaceFlowReq; | Lcom/bapis/bilibili/app/dynamic/v2/OpusSpaceFlowResp; |
| /bilibili.app.dynamic.v2.Opus/OpusTranslate | Lcom/bapis/bilibili/app/dynamic/v2/OpusDetailReq; | Lcom/bapis/bilibili/app/dynamic/v2/OpusDetailResp; |
| /bilibili.app.dynamic.v2.Opus/SignResources | Lcom/bapis/bilibili/app/dynamic/v2/SignResourcesReq; | Lcom/bapis/bilibili/app/dynamic/v2/SignResourcesResp; |
| /bilibili.app.dynamic.v2.Opus/SunflowerParse | Lcom/bapis/bilibili/app/dynamic/v2/SunflowerParseReq; | Lcom/bapis/bilibili/app/dynamic/v2/SunflowerParseRsp; |
| /bilibili.app.topic.v1.Topic/ReportUserCloseFeedCard | Lcom/bapis/bilibili/app/topic/v1/ReportUserCloseFeedCardReq; | Lcom/google/protobuf/Empty; |
| /bilibili.app.topic.v1.Topic/ReportUserRatingFeedCardChoice | Lcom/bapis/bilibili/app/topic/v1/ReportUserRatingFeedCardChoiceReq; | Lcom/google/protobuf/Empty; |
| /bilibili.app.topic.v1.Topic/SetTopTopicRes | Lcom/bapis/bilibili/app/topic/v1/SetTopTopicResReq; | Lcom/bapis/bilibili/app/topic/v1/SetTopTopicResReply; |
| /bilibili.app.topic.v1.Topic/TopicDetailsAll | Lcom/bapis/bilibili/app/topic/v1/TopicDetailsAllReq; | Lcom/bapis/bilibili/app/topic/v1/TopicDetailsAllReply; |
| /bilibili.app.topic.v1.Topic/TopicDetailsFold | Lcom/bapis/bilibili/app/topic/v1/TopicDetailsFoldReq; | Lcom/bapis/bilibili/app/topic/v1/TopicDetailsFoldReply; |
| /bilibili.app.topic.v1.Topic/TopicMergedResource | Lcom/bapis/bilibili/app/topic/v1/TopicMergedResourceReq; | Lcom/bapis/bilibili/app/topic/v1/TopicMergedResourceReply; |
| /bilibili.app.topic.v1.Topic/TopicReserveButtonClick | Lcom/bapis/bilibili/app/topic/v1/TopicReserveButtonClickReq; | Lcom/bapis/bilibili/app/topic/v1/TopicReserveButtonClickReply; |
| /bilibili.app.topic.v1.Topic/TopicSetDetails | Lcom/bapis/bilibili/app/topic/v1/TopicSetDetailsReq; | Lcom/bapis/bilibili/app/topic/v1/TopicSetDetailsReply; |
| /bilibili.main.dynamic.campus.v1.Campus/ActionReport | Lcom/bapis/bilibili/dynamic/interfaces/campus/v1/ActionReportReq; | Lcom/bapis/bilibili/dynamic/interfaces/campus/v1/ActionReportReply; |
| /bilibili.main.dynamic.feed.v1.Feed/AddArticleCollection | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/AddArticleCollectionReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/AddArticleCollectionRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/AddDynamicReport | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/AddDynamicReportReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/AddDynamicReportRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/AddOpusArticleDraft | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/AddOpusArticleDraftReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/AddOpusArticleDraftRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/ArticleCollectionAddable | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleCollectionAddableReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleCollectionAddableRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/ArticleCollectionDetail | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleCollectionDetailReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleCollectionDetailRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/ArticleCollectionList | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleCollectionListReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleCollectionListRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/ArticleCollectionOperation | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleCollectionOperationReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleCollectionOperationRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/ArticleHomePageCategories | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleHomePageCategoriesReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleHomePageCategoriesRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/ArticleInCollectionSort | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleInCollectionSortReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleInCollectionSortRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/ArticleRecommends | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleRecommendsReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleRecommendsRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/ArticleRecommendsPlus | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleRecommendsPlusReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ArticleRecommendsPlusRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/AtList | Lcom/bapis/bilibili/dynamic/common/AtListReq; | Lcom/bapis/bilibili/dynamic/common/AtListRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/AtSearch | Lcom/bapis/bilibili/dynamic/common/AtSearchReq; | Lcom/bapis/bilibili/dynamic/common/AtListRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/AttachCardButton | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/AttachCardButtonReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/AttachCardButtonRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/Config | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ConfigReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ConfigRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/CreateDyn | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/CreateDynReq; | Lcom/bapis/bilibili/dynamic/common/CreateResp; |
| /bilibili.main.dynamic.feed.v1.Feed/CreateInitCheck | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/CreateInitCheckReq; | Lcom/bapis/bilibili/dynamic/common/CreateCheckResp; |
| /bilibili.main.dynamic.feed.v1.Feed/CreateOpus | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/CreateOpusReq; | Lcom/bapis/bilibili/dynamic/common/CreateResp; |
| /bilibili.main.dynamic.feed.v1.Feed/CreateOpusInitCheck | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/CreateOpusInitCheckReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/CreateOpusInitCheckRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/CreatePageInfos | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/CreatePageInfosReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/CreatePageInfosRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/CreatePermissionButtonClick | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/CreatePermissionButtonClickReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/CreatePermissionButtonClickRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/CreatePlusButtonClick | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/CreatePlusButtonClickReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/CreatePlusButtonClickRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/DelArticleCollection | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/DelArticleCollectionReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/DelArticleCollectionRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/DelArticleDraft | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/DelArticleDraftReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/DelArticleDraftRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/DynamicButtonClick | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/DynamicButtonClickReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/DynamicButtonClickRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/DynamicRepost | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/DynamicRepostReq; | Lcom/bapis/bilibili/dynamic/common/CreateResp; |
| /bilibili.main.dynamic.feed.v1.Feed/DynamicThumb | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/DynamicThumbReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/DynamicThumbRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/DynMetricsActiveReport | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/DynMetricsActiveReportReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/DynMetricsActiveReportRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/DynPrivatePubSetting | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/DynPrivatePubSettingReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/DynPrivatePubSettingRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/EditArticleCollection | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/EditArticleCollectionReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/EditArticleCollectionRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/EditDyn | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/EditDynReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/EditDynRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/EditOpus | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/EditOpusReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/EditOpusRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/GetEditDynInfo | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/GetEditDynInfoReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/GetEditDynInfoRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/GetEditDynInfoWeb | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/GetEditDynInfoWebReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/GetEditDynInfoWebRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/GetUidByName | Lcom/bapis/bilibili/dynamic/common/GetUidByNameReq; | Lcom/bapis/bilibili/dynamic/common/GetUidByNameRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/GoodsAttachCardPreview | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/GoodsAttachCardPreviewReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/GoodsAttachCardPreviewRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/HomeBubbleReport | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/HomeBubbleReportReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/HomeBubbleReportRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/HotSearch | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/HotSearchReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/HotSearchRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/ICreateGoodsReplySync | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ICreateGoodsReplySyncReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ICreateResp; |
| /bilibili.main.dynamic.feed.v1.Feed/InitCheckTribee | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/InitCheckTribeeReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/CreateCheckTribeeResp; |
| /bilibili.main.dynamic.feed.v1.Feed/InitCheckTribeeWeb | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/InitCheckTribeeReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/CreateCheckTribeeWebResp; |
| /bilibili.main.dynamic.feed.v1.Feed/NearbyPoiList | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/NearbyPoiListReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/NearbyPoiListRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/OpusArticleDraftList | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/OpusArticleDraftListReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/OpusArticleDraftListRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/OpusArticleDraftView | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/OpusArticleDraftViewReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/OpusArticleDraftViewRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/RecommendPoi | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/RecommendPoiReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/RecommendPoiRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/ReprintOpusToTribee | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ReprintOpusToTribeeReq; | Lcom/bapis/bilibili/dynamic/common/CreateResp; |
| /bilibili.main.dynamic.feed.v1.Feed/ReserveButtonClick | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ReserveButtonClickReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/ReserveButtonClickResp; |
| /bilibili.main.dynamic.feed.v1.Feed/RmDyn | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/RmDynReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/RmDynRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/RmSpaceTop | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/RmSpaceTopReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/RmSpaceTopRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/SearchPoiList | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/SearchPoiListReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/SearchPoiListRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/SetSpaceTop | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/SetSpaceTopReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/SetSpaceTopRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/SubmitCheck | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/SubmitCheckReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/SubmitCheckRsp; |
| /bilibili.main.dynamic.feed.v1.Feed/Suggest | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/SuggestReq; | Lcom/bapis/bilibili/dynamic/interfaces/feed/v1/SuggestRsp; |
| /bilibili.main.dynamic.vote.v1.Vote/NewDoVote | Lcom/bapis/bilibili/dynamic/interfaces/vote/v1/NewDoVoteReq; | Lcom/bapis/bilibili/dynamic/interfaces/vote/v1/NewDoVoteRsp; |

```sh
node bin/bili-apis.mjs --edition official list --category dynamic --limit 10
node bin/bili-apis.mjs --edition official show "ID"
```
