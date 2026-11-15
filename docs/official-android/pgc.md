# 番剧影视与课程

番剧、影视、课堂及一起看。分类根据路由、域名与声明类名称推断，未验证业务行为。

官方 Android 9.19.0：146 条 HTTP 声明、10 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。

[返回分类](README.md) · [与 Play 对比](comparison.md)

## HTTP

参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。

| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |
| --- | --- | --- | --- | --- |
| classes12.dex:96:POST | POST | https://api.bilibili.com/pgc/pay/api/sponsor/order/check | Field:order_id, Field:season_type | Ljava/lang/Object; |
| classes12.dex:98:POST | POST | https://api.bilibili.com/pgc/pay/api/sponsor/order/create | Field:season_id, Field:season_type, Field:money, Field:is_quick | Ljava/lang/Object; |
| classes12.dex:35768:POST | POST | /pgc/app/follow/watched/close | Query:access_key, Query:follow_type | Lm6x; |
| classes12.dex:35769:POST | POST | /pgc/app/follow/series/close | Query:access_key, Query:follow_type | Lm6x; |
| classes12.dex:35770:POST | POST | /pgc/app/follow/unwatch/close | Query:access_key, Query:follow_type | Lm6x; |
| classes12.dex:35771:GET | GET | /pgc/app/follow/movable | Query:access_key, Query:status, Query:follow_type | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/ogv/misc/follow/api/entity/FollowMovableList;&gt;; |
| classes12.dex:35772:GET | GET | /pgc/app/follow/v2/{type} | Path:type, Query:ps, Query:pn, Query:status, Query:from_spmid, Query:spmid | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/ogv/misc/follow/api/entity/BangumiMineFollowV2;&gt;; |
| classes12.dex:35773:GET | GET | /pgc/app/follow/series/info | Query:access_key, Query:follow_type | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/ogv/misc/follow/api/entity/BangumiSeries;&gt;; |
| classes12.dex:36141:POST | POST | /sponsor/api/v2/pay/comment | FieldMap:(内容未知) | Lm6x; |
| classes12.dex:36146:GET | GET | /sponsor/get_season_by_sponsor | Query:page, Query:page_size, Query:index_type, Query:index_sort | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/ogv/misc/sponsor/BangumiCategoryIndex;&gt;; |
| classes12.dex:36147:GET | GET | /sponsor/api/v2/rank/total | QueryMap:(内容未知) | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/ogv/misc/sponsor/BangumiSponsorRank;&gt;; |
| classes12.dex:36148:GET | GET | /sponsor/api/v2/rank/week | QueryMap:(内容未知) | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/ogv/misc/sponsor/BangumiSponsorRank;&gt;; |
| classes12.dex:36253:GET | GET | /pgc/app/timeline | Query:type, Query:night_mode, Query:filter_type, Query:is_new | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/ogv/misc/timeline/ui/entity/BangumiTimelineEntity;&gt;; |
| classes12.dex:36400:POST | POST | /pgc/operation/playlist/fav/del | Field:pid | Lm6x; |
| classes12.dex:36401:GET | GET | /pgc/operation/playlist/list | Query:pn, Query:ps | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/ogv/misc/topicplaylist/TopicPlayListVo;&gt;; |
| classes12.dex:36945:POST | POST | https://api.bilibili.com/pgc/activity/deliver/task/complete | Query:position, Query:task_id, Query:token, Query:timestamp, Query:task_sign | Lm6x; |
| classes12.dex:36946:GET | GET | https://api.bilibili.com/pgc/page/exchange | Query:oid, Query:type | Lio/reactivex/rxjava3/core/Single&lt;Ljava/util/List&lt;Lcom/bilibili/ogv/opbase/CommonCard;&gt;;&gt;; |
| classes12.dex:36947:GET | GET | https://api.bilibili.com/pgc/page/module/mine | Query:page, Query:tab_id, Query:fnver, Query:fnval, Query:fourk, Query:qn, Query:teenagers_mode | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/ogv/opbase/ModuleMine;&gt;; |
| classes12.dex:36948:GET | GET | https://api.bilibili.com/pgc/page/tab | Query:parent_tab_name, Query:hide_rcmd_tab | Lio/reactivex/rxjava3/core/Single&lt;Ljava/util/List&lt;Lcom/bilibili/ogv/operation/api/OperationPageTabVo;&gt;;&gt;; |
| classes12.dex:36949:GET | GET | https://api.bilibili.com/pgc/season/rank/list | Query:season_type, Query:style_id | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/ogv/operation/entrance/rank/BangumiRankInfoVo;&gt;; |
| classes12.dex:36950:GET | GET | https://api.bilibili.com/pgc/season/rank/v2/list | Query:oid, Query:rank_id, Query:from_spmid, Query:action_id | Ljava/lang/Object; |
| classes12.dex:36951:GET | GET | https://api.bilibili.com/pgc/season/rank/tabs | Query:index_id | Lio/reactivex/rxjava3/core/Single&lt;Ljava/util/List&lt;Ljava/lang/Object;&gt;;&gt;; |
| classes12.dex:36952:GET | GET | https://api.bilibili.com/pgc/page/guess/bangumi | Query:page_no, Query:page_size | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/ogv/opbase/HomeRecommendPage;&gt;; |
| classes12.dex:36953:GET | GET | https://api.bilibili.com/pgc/page/guess/cinema | Query:page_no, Query:page_size | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/ogv/opbase/HomeRecommendPage;&gt;; |
| classes12.dex:36954:GET | GET | https://api.bilibili.com/pgc/page | Query:name, Query:tab_id, Query:cursor, Query:type, Query:fnver, Query:fnval, Query:fourk, Query:qn, Query:ad_extra, Query:teenagers_mode | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/ogv/opbase/HomeRecommendPage;&gt;; |
| classes12.dex:36955:GET | GET | https://api.bilibili.com/pgc/page | Query:name, Query:tab_id, Query:cursor, Query:is_refresh, Query:type, Query:fnver, Query:fnval, Query:fourk, Query:qn, Query:ad_extra, Query:teenagers_mode | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/ogv/opbase/HomeRecommendPage;&gt;; |
| classes12.dex:37392:POST | POST | https://api.bilibili.com/pgc/app/follow/topic/fav/add | Query:set_id | Lm6x; |
| classes12.dex:37393:POST | POST | https://api.bilibili.com/pgc/app/follow/topic/fav/cancel | Query:set_id | Lm6x; |
| classes12.dex:37668:POST | POST | https://api.bilibili.com/pgc/activity/deliver/task/complete | Query:position, Query:task_id, Query:token, Query:timestamp, Query:task_sign, Query:win_id | Ljava/lang/Object; |
| classes12.dex:39368:POST | POST | https://api.bilibili.com/pgc/review/short/modify | Query:review_id, Query:media_id, Query:score, Query:share_feed, Query:content, Query:code | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/ogv/review/detailpage/ReviewResult;&gt;; |
| classes12.dex:39369:GET | GET | https://api.bilibili.com/pgc/review/app/user | Query:media_id | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/ogv/pub/review/bean/ReviewPublishInfo;&gt;; |
| classes12.dex:39370:POST | POST | https://api.bilibili.com/pgc/review/short/post | Query:media_id, Query:score, Query:share_feed, Query:content, Query:code | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/ogv/review/detailpage/ReviewResult;&gt;; |
| classes12.dex:49322:POST | POST | https://api.bilibili.com/pgc/review/action/like | Field:media_id, Field:review_id, Field:review_type | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/ogv/review/detailpage/ReviewLikeStatus;&gt;; |
| classes12.dex:50212:POST | POST | https://api.bilibili.com/pgc/app/follow/add | Query:access_key, Query:season_id, Query:season_type, Query:reserve_id, Query:flag | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/ogv/community/bean/BangumiFollowStatus;&gt;; |
| classes12.dex:50213:POST | POST | https://api.bilibili.com/pgc/app/follow/del | Query:access_key, Query:season_id, Query:season_type | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/ogv/community/bean/BangumiFollowStatus;&gt;; |
| classes12.dex:50214:POST | POST | https://api.bilibili.com/pgc/app/follow/status/update | Query:access_key, Query:season_id, Query:status | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/ogv/community/bean/BangumiFollowStatus;&gt;; |
| classes12.dex:52423:GET | GET | http://api.bilibili.com/pgc/player/api/cache/reserve/verify | Query:ep_ids | Ljava/lang/Object; |
| classes12.dex:52424:GET | GET | http://api.bilibili.com/pgc/player/api/cache/reserve/verify | Query:ep_ids | Lio/reactivex/rxjava3/core/Single&lt;Ljava/util/List&lt;Lcom/bilibili/ogv/pub/reserve/ReserveVerify;&gt;;&gt;; |
| classes12.dex:52526:GET | GET | https://api.bilibili.com/pgc/season/index/condition | QueryMap:(内容未知), Query:type | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/ogv/operation/entrance/indexpage/BangumiCategoryCondition;&gt;; |
| classes12.dex:52527:GET | GET | https://api.bilibili.com/pgc/season/index/result | QueryMap:(内容未知) | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/ogv/operation/entrance/indexpage/BangumiCategoryResult;&gt;; |
| classes12.dex:53480:POST | POST | /review/api/long/del | Field:media_id, Field:review_id | Ljava/lang/Object; |
| classes12.dex:53481:POST | POST | /review/api/short/del | Field:media_id, Field:review_id | Ljava/lang/Object; |
| classes12.dex:62959:GET | GET | https://api.bilibili.com/pgc/review/gateway//synthesize/feed | Query:media_id, Query:type, Query:oid, Query:otype, Query:cursor, Query:ps, Query:source_type | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/ogv/review/detailpage/ReviewFeed;&gt;; |
| classes12.dex:62960:GET | GET | https://api.bilibili.com/pgc/review/gateway//synthesize/tags | Query:media_id | Lio/reactivex/rxjava3/core/Single&lt;Ljava/util/List&lt;Lcom/bilibili/ogv/review/data/ReviewTag;&gt;;&gt;; |
| classes12.dex:63081:POST | POST | https://api.bilibili.com/pgc/pay/api/sponsor/order/check | Field:order_id, Field:season_type | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/bangumi/data/common/api/BangumiApiResponse&lt;Lcom/bilibili/bangumi/data/page/newpay/SponsorCheckResult;&gt;;&gt;; |
| classes12.dex:65327:GET | GET | https://api.bilibili.com/pgc/season/character/get | Query:id | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/ogv/misc/roledetail/roledetailapi/PersonInfoVo;&gt;; |
| classes12.dex:65328:GET | GET | https://api.bilibili.com/pgc/season/character/seasons | Query:character_id, Query:order_type, Query:pn, Query:ps | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/ogv/misc/roledetail/roledetailapi/PersonRelateContentVo;&gt;; |
| classes13.dex:59152:POST | POST | https://api.bilibili.com/pgc/report/dolby | Body:(内容未知) | Lm6x; |
| classes15.dex:3440:GET | GET | https://api.bilibili.com/pugv/view/app/query/combine/season | Query:season_id | Ljava/lang/Object; |
| classes15.dex:3895:POST | POST | https://api.bilibili.com/pugv/view/study/submit_ending | Query:season_id, Query:study_time, Query:ep_id, Query:timestamp | Ljava/lang/Object; |
| classes15.dex:3896:POST | POST | https://api.bilibili.com/pugv/view/study/check/share | Query:season_id, Query:study_time, Query:ep_id | Ljava/lang/Object; |
| classes15.dex:8234:GET | GET | https://bangumi.bilibili.com/sponsor/api/point | Query:amount | Ljava/lang/Object; |
| classes15.dex:12466:POST | POST | https://api.bilibili.com/pgc/app/follow/add | Query:access_key, Query:season_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/search2/api/SearchPgcFavoriteResult;&gt;;&gt;; |
| classes15.dex:12474:POST | POST | https://api.bilibili.com/pgc/app/follow/del | Query:access_key, Query:season_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/search2/api/SearchPgcFavoriteResult;&gt;;&gt;; |
| classes15.dex:18400:GET | GET | https://api.bilibili.com/pugv/view/app/view_additional_info | Query:season_id | Ljava/lang/Object; |
| classes15.dex:18516:GET | GET | https://api.bilibili.com/pugv/view/app/season/consult | Query:csource, Query:from_spm_id, Query:season_id | Ljava/lang/Object; |
| classes15.dex:18612:GET | GET | https://api.bilibili.com/pugv/app/course/download | Query:file_id, Query:season_id, Query:section_id, Query:episode_id | Ljava/lang/Object; |
| classes15.dex:18613:GET | GET | https://api.bilibili.com/pugv/view/app/live/jump | Query:ep_id | Ljava/lang/Object; |
| classes15.dex:18942:GET | GET | https://api.bilibili.com/pugv/view/html5/credential/detail | Query:season_id | Ljava/lang/Object; |
| classes15.dex:18943:POST | POST | https://api.bilibili.com/pugv/view/html5/credential/unlock | Query:season_id | Ljava/lang/Object; |
| classes15.dex:19175:GET | GET | https://api.bilibili.com/pugv/view/app/activity/share | Query:season_id | Ljava/lang/Object; |
| classes15.dex:21185:GET | GET | https://api.bilibili.com/pugv/adclick/linkreport | Query:trackid, Query:accountid, Query:campaignid, Query:unitid, Query:crid, Query:os, Query:idfa, Query:caid, Query:aaid, Query:androidid, Query:oaid, Query:ts, Query:shopid, Query:upmid, Query:uid, Query:seasonid, Query:seriesid, Query:upid, Query:pkg_id, Query:report_scene, Query:source_type, Query:model | Ljava/lang/Object; |
| classes15.dex:23089:POST | POST | http://api.bilibili.com/pgc/freya/room/create | Field:season_id, Field:episode_id, Field:is_open, Field:vega_abtest, Field:from_type, Field:sex_type, Field:ext, Field:access_key | Ljava/lang/Object; |
| classes15.dex:23090:GET | GET | http://api.bilibili.com/pgc/freya/share/ogv/link | Query:season_id, Query:episode_id, Query:season_type, Query:age_type, Query:version | Ljava/lang/Object; |
| classes15.dex:23541:POST | POST | https://api.bilibili.com/pgc/activity/deliver/task/complete | Query:position, Query:task_id, Query:token, Query:timestamp, Query:task_sign | Ljava/lang/Object; |
| classes15.dex:23542:POST | POST | https://api.bilibili.com/pgc/activity/deliver/material/receive-activity | Query:season_id, Query:ep_id, QueryMap:(内容未知) | Ljava/lang/Object; |
| classes15.dex:23543:POST | POST | https://api.bilibili.com/pgc/activity/deliver/material/receive | Query:season_id, Query:season_type, Query:ep_id, Query:activity_code, Query:spmid, Query:from_spmid, Query:ads_info, Query:from_scene | Ljava/lang/Object; |
| classes15.dex:23544:POST | POST | https://api.bilibili.com/pgc/activity/receiveAward | Query:activity_id, Query:season_id, Query:ep_id, QueryMap:(内容未知) | Ljava/lang/Object; |
| classes15.dex:23545:POST | POST | https://api.bilibili.com/pgc/activity/action-report | Query:activity_id, Query:action_type, Query:component_id, Query:season_id, Query:ep_id | Ljava/lang/Object; |
| classes15.dex:23546:POST | POST | https://api.bilibili.com/pgc/activity/report-in-one | Query:win_id, Query:code, Query:action | Ljava/lang/Object; |
| classes15.dex:24620:POST | POST | http://api.bilibili.com/pgc/freya/chat/greeting | FieldMap:(内容未知) | Ljava/lang/Object; |
| classes15.dex:24621:GET | GET | http://api.bilibili.com/pgc/freya/chat/room/ext | Query:room_id, Query:oid | Ljava/lang/Object; |
| classes15.dex:24622:GET | GET | http://api.bilibili.com/pgc/freya/chat/user/info | Query:chat_id, Query:mid | Ljava/lang/Object; |
| classes15.dex:26563:POST | POST | https://api.bilibili.com/pgc/view/activity/guide/bar/operation | Query:season_id, Query:season_type, Query:reserve_id, Query:operation_flag | Ljava/lang/Object; |
| classes15.dex:26564:GET | GET | https://api.bilibili.com/pgc/view/activity/guide/bar/info | Query:season_id, Query:season_type | Ljava/lang/Object; |
| classes15.dex:27898:GET | GET | https://bangumi.bilibili.com/sponsor/api/point | Query:amount | Ljava/lang/Object; |
| classes15.dex:28774:GET | GET | https://api.bilibili.com/pgc/season/player/ogv/cards | Query:ep_id, Query:scene_type | Ljava/lang/Object; |
| classes15.dex:28775:POST | POST | https://api.bilibili.com/pgc/season/player/click/card | Field:unique_id, Field:ep_id, Field:is_selected, Field:season_id, Field:biz_type, Field:win_id | Ljava/lang/Object; |
| classes15.dex:28776:GET | GET | https://api.bilibili.com/pgc/season/player/frequency/control | Query:season_id, Query:ep_id, Query:card_type, Query:biz_type, Query:win_id | Ljava/lang/Object; |
| classes15.dex:47270:GET | GET | http://api.bilibili.com/pgc/view/v2/app/media | Query:media_id | Ljava/lang/Object; |
| classes15.dex:47823:GET | GET | http://api.bilibili.com/pgc/season/character/get | Query:id | Ljava/lang/Object; |
| classes15.dex:47824:GET | GET | http://api.bilibili.com/pgc/season/character/seasons | Query:character_id, Query:order_type, Query:pn, Query:ps | Ljava/lang/Object; |
| classes15.dex:48004:GET | GET | https://api.bilibili.com/pgc/view/v2/app/eps | Query:season_id | Ljava/lang/Object; |
| classes15.dex:48881:GET | GET | https://api.bilibili.com/pgc/web/playlist/v2 | Query:id, Query:from_scene | Ljava/lang/Object; |
| classes15.dex:48882:GET | GET | https://api.bilibili.com/pgc/web/playlist/id | Query:season_id, Query:query_type, Query:from_scene | Ljava/lang/Object; |
| classes15.dex:61565:GET | GET | https://api.bilibili.com/pgc/player/check | Query:season_id, Query:ep_id, Query:access_key | Ljava/lang/Object; |
| classes18.dex:27304:GET | GET | https://api.bilibili.com/pgc/vipinfo/get | Query:mid | Ljava/lang/Object; |
| classes18.dex:27613:POST | POST | http://api.bilibili.com/pgc/freya/room/active | Field:room_id | Ljava/lang/Object; |
| classes18.dex:27614:POST | POST | http://api.bilibili.com/pgc/freya/room/relation | Field:fid, Field:room_id, Field:action | Ljava/lang/Object; |
| classes18.dex:27615:POST | POST | http://api.bilibili.com/pgc/freya/room/create | Field:season_id, Field:episode_id, Field:is_open, Field:vega_abtest, Field:from_type, Field:sex_type, Field:ext | Ljava/lang/Object; |
| classes18.dex:27616:POST | POST | http://api.bilibili.com/pgc/freya/com/interact/pre/create_channel | Field:room_id, Field:biz_type, Field:interact_sdk_version, Field:extend | Ljava/lang/Object; |
| classes18.dex:27617:POST | POST | http://api.bilibili.com/pgc/freya/room/heartbeat | Field:room_id, Field:mid, Field:season_id, Field:episode_id, Field:type, Field:play_status, Field:vega_abtest, Field:ts | Ljava/lang/Object; |
| classes18.dex:27618:GET | GET | http://api.bilibili.com/pgc/freya/label/ban_accredit | Query:is_ban | Ljava/lang/Object; |
| classes18.dex:27619:GET | GET | http://api.bilibili.com/pgc/freya/com/freya_emote/list | Query:room_id, Query:biz_type | Ljava/lang/Object; |
| classes18.dex:27620:GET | GET | http://api.bilibili.com/pgc/freya/room/recommend/result | Query:match_id | Ljava/lang/Object; |
| classes18.dex:27622:POST | POST | http://api.bilibili.com/pgc/freya/upos/sign | Field:msg_id | Ljava/lang/Object; |
| classes18.dex:27624:POST | POST | http://api.bilibili.com/pgc/freya/room/join | Field:room_id, Field:vega_abtest, Field:mid, Field:is_merge, Field:from_type, Field:season_id, Field:episode_id, Field:ext | Ljava/lang/Object; |
| classes18.dex:27625:POST | POST | http://api.bilibili.com/pgc/freya/com/interact/pre/join_channel | Field:room_id, Field:biz_type, Field:channel_id, Field:interact_sdk_version, Field:extend | Ljava/lang/Object; |
| classes18.dex:27626:POST | POST | http://api.bilibili.com/pgc/freya/room/kickout | Field:room_id, Field:mid, Field:is_com | Ljava/lang/Object; |
| classes18.dex:27627:POST | POST | http://api.bilibili.com/pgc/freya/room/leave | Field:room_id, Field:is_com | Ljava/lang/Object; |
| classes18.dex:27628:POST | POST | http://api.bilibili.com/pgc/freya/com/interact/pre/leave_channel | Field:room_id, Field:biz_type, Field:channel_id, Field:interact_sdk_version, Field:extend | Ljava/lang/Object; |
| classes18.dex:27629:POST | POST | http://api.bilibili.com/pgc/freya/room/match | Field:season_id, Field:episode_id, Field:fail_fast, Field:from_type, Field:season_type, Field:vega_abtest, Field:ext | Ljava/lang/Object; |
| classes18.dex:27630:POST | POST | http://api.bilibili.com/pgc/freya/room/modify/progress | Field:is_com, Field:room_id, Field:status, Field:progress | Ljava/lang/Object; |
| classes18.dex:27631:POST | POST | http://api.bilibili.com/pgc/freya/room/modify/info | Field:room_id, Field:is_open | Ljava/lang/Object; |
| classes18.dex:27632:POST | POST | http://api.bilibili.com/pgc/freya/room/modify/season | Field:is_com, Field:room_id, Field:season_id, Field:episode_id | Ljava/lang/Object; |
| classes18.dex:27633:POST | POST | http://api.bilibili.com/pgc/freya/room/report | Field:room_id, Field:event_id, Field:biz_type, Field:report | Ljava/lang/Object; |
| classes18.dex:27634:GET | GET | http://api.bilibili.com/pgc/freya/room/ext | Query:room_id | Ljava/lang/Object; |
| classes18.dex:27635:GET | GET | http://api.bilibili.com/pgc/freya/room/info | Query:room_id | Ljava/lang/Object; |
| classes18.dex:27636:POST | POST | http://api.bilibili.com/pgc/freya/share/live/share/card | Field:room_id | Ljava/lang/Object; |
| classes18.dex:27637:GET | GET | http://api.bilibili.com/pgc/freya/label/user_dialog | Query:age_type, Query:version | Ljava/lang/Object; |
| classes18.dex:27638:GET | GET | http://api.bilibili.com/pgc/freya/label/info | Query:room_id, Query:mid | Ljava/lang/Object; |
| classes18.dex:27639:GET | GET | http://api.bilibili.com/pgc/freya/room/double/accompany/share | Query:room_id, Query:the_other | Ljava/lang/Object; |
| classes18.dex:27644:POST | POST | http://api.bilibili.com/pgc/freya/com/freya_emote/send | Field:room_id, Field:emote_id, Field:biz_type | Ljava/lang/Object; |
| classes18.dex:27645:POST | POST | http://api.bilibili.com/pgc/freya/room/recommend/match | Field:season_type, Field:from_type, Field:vega_abtest, Field:match_sex | Ljava/lang/Object; |
| classes18.dex:64251:GET | GET | https://api.bilibili.com/pgc/freya/page/choose | Query:choose_type, Query:season_type, Query:page_version, Query:page_no, Query:page_size | Ljava/lang/Object; |
| classes18.dex:64252:GET | GET | https://api.bilibili.com/pgc/freya/page/tab | Query:type | Ljava/lang/Object; |
| classes18.dex:64253:GET | GET | https://api.bilibili.com/pgc/page/freya/feed | Query:wid, Query:cursor, Query:page_name, Query:season_id, Query:season_type, Query:full_screen, Query:room_id, Query:from_spmid | Ljava/lang/Object; |
| classes18.dex:64254:GET | GET | https://api.bilibili.com/pgc/page/freya/square | Query:page_name, Query:season_id, Query:ep_id, Query:module_title, Query:season_type, Query:full_screen, Query:room_id, Query:from_spmid | Ljava/lang/Object; |
| classes18.dex:64255:GET | GET | https://api.bilibili.com/pgc/season/freya/search | Query:keyword, Query:page_no, Query:page_size | Ljava/lang/Object; |
| classes19.dex:13246:POST | POST | https://api.bilibili.com/pgc/app/follow/add | Query:access_key, Query:season_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/video/story/api/result/bangumi/StorySeasonFollowResult;&gt;;&gt;; |
| classes19.dex:13247:POST | POST | https://api.bilibili.com/pgc/app/follow/del | Query:access_key, Query:season_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/video/story/api/result/bangumi/StorySeasonFollowResult;&gt;;&gt;; |
| classes24.dex:61548:POST | POST | http://api.bilibili.com/pgc/freya/share/invite | Field:room_id | Ljava/lang/Object; |
| classes28.dex:7916:GET | GET | https://api.bilibili.com/pgc/view/v2/story/season | QueryMap:(内容未知) | Ljava/lang/Object; |
| classes28.dex:7917:GET | GET | https://api.bilibili.com/pgc/view/v2/app/season | QueryMap:(内容未知) | Ljava/lang/Object; |
| classes28.dex:36820:POST | POST | https://api.bilibili.com/pugv/app/favorite/del | Query:access_key, Query:season_id | Lm6x; |
| classes28.dex:36821:GET | GET | https://api.bilibili.com/pugv/app/favorite/page | Query:access_key, Query:pn, Query:ps | Lio/reactivex/rxjava3/core/Single&lt;Ltv/danmaku/bili/ui/favorite/cheesesupport/CheeseList;&gt;; |
| classes28.dex:63573:POST | POST | https://api.bilibili.com/pgc/player/api/v2/cache/play | Query:access_key, Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Ltv/danmaku/bili/ui/offline/api/OgvApiResponseV2;&gt;; |
| classes32.dex:63269:GET | GET | https://api.bilibili.com/pgc/card/locate_ep | Query:oid, Query:otype | Ljava/lang/Object; |
| classes33.dex:56757:GET | GET | http://api.bilibili.com/pgc/vega/deneb/nodes/get |  | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/ogvvega/tunnel/VegaDenebNode;&gt;; |
| classes35.dex:64855:POST | POST | https://api.bilibili.com/pgc/season/share/click | Field:share_channel, Field:share_trace_id, Field:from, Field:season_id, Field:ep_id | Lm6x; |
| classes35.dex:64856:POST | POST | https://api.bilibili.com/pgc/season/share/complete | Field:share_channel, Field:share_trace_id, Field:from, Field:season_id, Field:ep_id, Field:from_temp | Lm6x; |
| classes5.dex:59802:GET | GET | https://api.bilibili.com/pugv/app/season/page | Query:mid, Query:pn, Query:ps | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/app/authorspace/ui/pages/cheesesupport/CheeseList;&gt;; |
| classes6.dex:53337:GET | GET | https://api.bilibili.com/pgc/player/check | Query:season_id, Query:ep_id | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/bangumi/data/page/detail/BangumiPlayerCheck;&gt;; |
| classes8.dex:45021:POST | POST | https://api.bilibili.com/pgc/app/follow/add | Query:season_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/PgcAddReply;&gt;;&gt;; |
| classes8.dex:45022:POST | POST | https://api.bilibili.com/pgc/app/follow/del | Query:season_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/PgcAddReply;&gt;;&gt;; |
| classes9.dex:32196:GET | GET | http://api.bilibili.com/pgc/freya/label/config |  | Ljava/lang/Object; |
| classes9.dex:32197:POST | POST | http://api.bilibili.com/pgc/freya/label/update | Field:update_range, Field:sex, Field:birthday, Field:label_ids, Field:match_sex | Ljava/lang/Object; |
| classes9.dex:32303:POST | POST | http://api.bilibili.com/pgc/freya/com/room/join | Field:room_id, Field:biz_type, Field:report, Field:is_visitor | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/chatroomsdk/JoinInfo;&gt;; |
| classes9.dex:32304:POST | POST | http://api.bilibili.com/pgc/freya/com/room/leave | Field:room_id, Field:biz_type, Field:report, Field:is_visitor | Lm6x; |
| classes9.dex:32305:POST | POST | http://api.bilibili.com/pgc/freya/com/room/report | Field:room_id, Field:event_id, Field:biz_type, Field:report | Lm6x; |
| classes9.dex:33724:POST | POST | https://api.bilibili.com/pugv/view/api/del_following | Field:seasonId, Field:mid | Ljava/lang/Object; |
| classes9.dex:39862:POST | POST | https://api.bilibili.com/pgc/season/episode/like/triple | Field:ep_id, Field:is_follow, Field:access_key, Field:track_id | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/ogv/community/bean/BangumiPraiseTriple;&gt;; |
| classes9.dex:39863:GET | GET | https://api.bilibili.com/pgc/season/episode/community | Query:ep_id | Lio/reactivex/rxjava3/core/Single&lt;Ljava/lang/Object;&gt;; |
| classes9.dex:62519:POST | POST | https://api.bilibili.com/pugv/app/favorite/del | Field:season_id, Field:from_spmid, Field:spmid, Field:action_id | Ljava/lang/Object; |
| classes9.dex:62520:POST | POST | https://api.bilibili.com/pugv/app/favorite/add | Field:season_id, Field:from_spmid, Field:spmid, Field:action_id | Ljava/lang/Object; |
| classes9.dex:62521:POST | POST | https://api.bilibili.com/pugv/app/favorite/attention/add | Field:season_id, Field:from_spmid, Field:csource | Ljava/lang/Object; |

## gRPC

请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。

| 路由 | 请求类型候选 | 响应类型候选 |
| --- | --- | --- |
| /bilibili.pgc.gateway.player.v2.PlayURL/PlayView | Lcom/bapis/bilibili/pgc/gateway/player/v2/PlayViewReq; | Lcom/bapis/bilibili/pgc/gateway/player/v2/PlayViewReply; |
| /bilibili.pgc.gateway.player.v2.PlayURL/PlayViewComic | Lcom/bapis/bilibili/pgc/gateway/player/v2/PlayViewReq; | Lcom/bapis/bilibili/pgc/gateway/player/v2/PlayViewReply; |
| /bilibili.pgc.gateway.view.v1.View/PageSectionEpisodes | Lcom/bapis/bilibili/pgc/gateway/view/v1/PageSectionEpisodesReq; | Lcom/bapis/bilibili/pgc/gateway/view/v1/PageSectionEpisodesReply; |
| /bilibili.pgc.gateway.view.v1.View/SeasonSections | Lcom/bapis/bilibili/pgc/gateway/view/v1/SeasonSectionsReq; | Lcom/bapis/bilibili/pgc/gateway/view/v1/SeasonSectionsReply; |
| /bilibili.pgc.gateway.view.v1.View/SeasonSectionsForCache | Lcom/bapis/bilibili/pgc/gateway/view/v1/SeasonSectionsReq; | Lcom/bapis/bilibili/pgc/gateway/view/v1/SeasonSectionsReply; |
| /pgc.gateway.vega.v1.Vega/CreateTunnel | Lcom/bapis/pgc/gateway/vega/v1/VegaFrame; | Lcom/bapis/pgc/gateway/vega/v1/VegaFrame; |
| /pgc.gateway.vega.v1.VegaFrameDoc/Auth | Lcom/bapis/pgc/gateway/vega/v1/AuthReq; | Lcom/bapis/pgc/gateway/vega/v1/AuthResp; |
| /pgc.gateway.vega.v1.VegaFrameDoc/Heartbeat | Lcom/bapis/pgc/gateway/vega/v1/HeartbeatReq; | Lcom/bapis/pgc/gateway/vega/v1/HeartbeatResp; |
| /pgc.gateway.vega.v1.VegaFrameDoc/MessageAck | Lcom/bapis/pgc/gateway/vega/v1/MessageAckReq; | Lcom/google/protobuf/Empty; |
| /pgc.gateway.vega.v1.VegaFrameDoc/Subscribe | Lcom/bapis/pgc/gateway/vega/v1/SubscribeReq; | Lcom/google/protobuf/Empty; |

```sh
node bin/bili-apis.mjs --edition official list --category pgc --limit 10
node bin/bili-apis.mjs --edition official show "ID"
```
