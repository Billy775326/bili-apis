# 番剧影视与课程

<!-- android-edition:start -->
包名：`com.bilibili.app.in` · 渠道：Google Play · 版本：6.8.0（9180200）。

[全部版本](../../../../README.md) · [本包文档](../README.md) · [网页接口](../../../../../pc/README.md) · [基线元数据](../../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

番剧、影视、课堂及一起看。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 140 条 HTTP 声明、10 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes11.dex:2921:GET | GET | https://api.bilibili.com/pugv/app/season/page | Query:mid, Query:pn, Query:ps | Lqm1/s&lt;Lcom/bilibili/app/authorspace/ui/pages/cheesesupport/CheeseList;&gt;; | not-tested |
| classes12.dex:46185:POST | POST | https://api.bilibili.com/pgc/app/follow/add | Query:season_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/PgcAddReply;&gt;;&gt;; | not-tested |
| classes12.dex:46186:POST | POST | https://api.bilibili.com/pgc/app/follow/del | Query:season_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/PgcAddReply;&gt;;&gt;; | not-tested |
| classes14.dex:36645:GET | GET | http://api.bilibili.com/pgc/freya/label/config |  | Ljava/lang/Object; | not-tested |
| classes14.dex:36646:POST | POST | http://api.bilibili.com/pgc/freya/label/update | Field:update_range, Field:sex, Field:birthday, Field:label_ids, Field:match_sex | Ljava/lang/Object; | not-tested |
| classes14.dex:36776:POST | POST | http://api.bilibili.com/pgc/freya/com/room/join | Field:room_id, Field:biz_type, Field:report, Field:is_visitor | Lqm1/s&lt;Lcom/bilibili/chatroomsdk/JoinInfo;&gt;; | not-tested |
| classes14.dex:36777:POST | POST | http://api.bilibili.com/pgc/freya/com/room/leave | Field:room_id, Field:biz_type, Field:report, Field:is_visitor | Lqm1/a; | not-tested |
| classes14.dex:36778:POST | POST | http://api.bilibili.com/pgc/freya/com/room/report | Field:room_id, Field:event_id, Field:biz_type, Field:report | Lqm1/a; | not-tested |
| classes14.dex:37665:POST | POST | https://api.bilibili.com/pugv/app/favorite/attention/add | Field:season_id, Field:from_spmid, Field:csource | Ljava/lang/Object; | not-tested |
| classes14.dex:37666:POST | POST | https://api.bilibili.com/pugv/app/favorite/add | Field:season_id, Field:from_spmid, Field:spmid, Field:action_id | Ljava/lang/Object; | not-tested |
| classes14.dex:37667:POST | POST | https://api.bilibili.com/pugv/app/favorite/del | Field:season_id, Field:from_spmid, Field:spmid, Field:action_id | Ljava/lang/Object; | not-tested |
| classes14.dex:38575:POST | POST | https://api.bilibili.com/pugv/view/api/del_following | Field:seasonId, Field:mid | Ljava/lang/Object; | not-tested |
| classes15.dex:12530:POST | POST | http://api.bilibili.com/pgc/freya/share/invite | Field:room_id | Ljava/lang/Object; | not-tested |
| classes15.dex:23771:GET | GET | https://api.bilibili.com/pgc/view/v2/app/season | QueryMap:(内容未知) | Ljava/lang/Object; | not-tested |
| classes15.dex:23772:GET | GET | https://api.bilibili.com/pgc/view/v2/story/season | QueryMap:(内容未知) | Ljava/lang/Object; | not-tested |
| classes15.dex:23773:POST | POST | https://api.bilibili.com/pgc/report/dolby | Body:(内容未知) | Lqm1/a; | not-tested |
| classes15.dex:23776:POST | POST | https://api.bilibili.com/pgc/season/share/complete | Field:share_channel, Field:share_trace_id, Field:from, Field:season_id, Field:ep_id, Field:from_temp | Lqm1/a; | not-tested |
| classes15.dex:23777:POST | POST | https://api.bilibili.com/pgc/season/share/click | Field:share_channel, Field:share_trace_id, Field:from, Field:season_id, Field:ep_id | Lqm1/a; | not-tested |
| classes15.dex:27842:GET | GET | https://bangumi.bilibili.com/sponsor/api/point | Query:amount | Ljava/lang/Object; | not-tested |
| classes15.dex:57801:POST | POST | https://api.bilibili.com/pgc/pay/api/sponsor/order/check | Field:order_id, Field:season_type | Lqm1/s&lt;Lcom/bilibili/bangumi/data/common/api/BangumiApiResponse&lt;Lcom/bilibili/bangumi/data/page/newpay/SponsorCheckResult;&gt;;&gt;; | not-tested |
| classes15.dex:58080:GET | GET | https://api.bilibili.com/pgc/player/check | Query:season_id, Query:ep_id | Lqm1/s&lt;Lcom/bilibili/bangumi/data/page/detail/BangumiPlayerCheck;&gt;; | not-tested |
| classes18.dex:5629:POST | POST | /review/api/long/del | Field:media_id, Field:review_id | Ljava/lang/Object; | not-tested |
| classes18.dex:5630:POST | POST | /review/api/short/del | Field:media_id, Field:review_id | Ljava/lang/Object; | not-tested |
| classes18.dex:5631:GET | GET | https://api.bilibili.com/pgc/review/gateway//synthesize/feed | Query:media_id, Query:type, Query:oid, Query:otype, Query:cursor, Query:ps, Query:source_type | Lqm1/s&lt;Lcom/bilibili/ogv/review/detailpage/ReviewFeed;&gt;; | not-tested |
| classes18.dex:5632:GET | GET | https://api.bilibili.com/pgc/review/gateway//synthesize/tags | Query:media_id | Lqm1/s&lt;Ljava/util/List&lt;Lcom/bilibili/ogv/review/data/ReviewTag;&gt;;&gt;; | not-tested |
| classes18.dex:5633:POST | POST | https://api.bilibili.com/pgc/review/action/like | Field:media_id, Field:review_id, Field:review_type | Lqm1/s&lt;Lcom/bilibili/ogv/review/detailpage/ReviewLikeStatus;&gt;; | not-tested |
| classes18.dex:6540:GET | GET | https://api.bilibili.com/pgc/season/index/result | QueryMap:(内容未知) | Lqm1/s&lt;Lcom/bilibili/ogv/operation/entrance/indexpage/BangumiCategoryResult;&gt;; | not-tested |
| classes18.dex:6541:GET | GET | https://api.bilibili.com/pgc/season/index/condition | QueryMap:(内容未知), Query:type | Lqm1/s&lt;Lcom/bilibili/ogv/operation/entrance/indexpage/BangumiCategoryCondition;&gt;; | not-tested |
| classes18.dex:17620:POST | POST | /pgc/app/follow/watched/close | Query:access_key, Query:follow_type | Lqm1/a; | not-tested |
| classes18.dex:17621:POST | POST | /pgc/app/follow/series/close | Query:access_key, Query:follow_type | Lqm1/a; | not-tested |
| classes18.dex:17622:POST | POST | /pgc/app/follow/unwatch/close | Query:access_key, Query:follow_type | Lqm1/a; | not-tested |
| classes18.dex:17623:GET | GET | /pgc/app/follow/movable | Query:access_key, Query:status, Query:follow_type | Lqm1/s&lt;Lcom/bilibili/ogv/misc/follow/api/entity/FollowMovableList;&gt;; | not-tested |
| classes18.dex:17624:GET | GET | /pgc/app/follow/v2/{type} | Path:type, Query:ps, Query:pn, Query:status, Query:from_spmid, Query:spmid | Lqm1/s&lt;Lcom/bilibili/ogv/misc/follow/api/entity/BangumiMineFollowV2;&gt;; | not-tested |
| classes18.dex:17625:GET | GET | /pgc/app/follow/series/info | Query:access_key, Query:follow_type | Lqm1/s&lt;Lcom/bilibili/ogv/misc/follow/api/entity/BangumiSeries;&gt;; | not-tested |
| classes18.dex:17933:GET | GET | https://api.bilibili.com/pgc/season/character/get | Query:id | Lqm1/s&lt;Lcom/bilibili/ogv/misc/roledetail/roledetailapi/PersonInfoVo;&gt;; | not-tested |
| classes18.dex:17934:GET | GET | https://api.bilibili.com/pgc/season/character/seasons | Query:character_id, Query:order_type, Query:pn, Query:ps | Lqm1/s&lt;Lcom/bilibili/ogv/misc/roledetail/roledetailapi/PersonRelateContentVo;&gt;; | not-tested |
| classes18.dex:18024:POST | POST | /sponsor/api/v2/pay/comment | FieldMap:(内容未知) | Lqm1/a; | not-tested |
| classes18.dex:18029:GET | GET | /sponsor/get_season_by_sponsor | Query:page, Query:page_size, Query:index_type, Query:index_sort | Lqm1/s&lt;Lcom/bilibili/ogv/misc/sponsor/BangumiCategoryIndex;&gt;; | not-tested |
| classes18.dex:18030:GET | GET | /sponsor/api/v2/rank/total | QueryMap:(内容未知) | Lqm1/s&lt;Lcom/bilibili/ogv/misc/sponsor/BangumiSponsorRank;&gt;; | not-tested |
| classes18.dex:18031:GET | GET | /sponsor/api/v2/rank/week | QueryMap:(内容未知) | Lqm1/s&lt;Lcom/bilibili/ogv/misc/sponsor/BangumiSponsorRank;&gt;; | not-tested |
| classes18.dex:18162:GET | GET | /pgc/app/timeline | Query:type, Query:night_mode, Query:filter_type, Query:is_new | Lqm1/s&lt;Lcom/bilibili/ogv/misc/timeline/ui/entity/BangumiTimelineEntity;&gt;; | not-tested |
| classes18.dex:18364:POST | POST | /pgc/operation/playlist/fav/del | Field:pid | Lqm1/a; | not-tested |
| classes18.dex:18365:GET | GET | /pgc/operation/playlist/list | Query:pn, Query:ps | Lqm1/s&lt;Lcom/bilibili/ogv/misc/topicplaylist/TopicPlayListVo;&gt;; | not-tested |
| classes18.dex:18906:GET | GET | https://api.bilibili.com/pgc/page/exchange | Query:oid, Query:type | Lqm1/s&lt;Ljava/util/List&lt;Lcom/bilibili/ogv/opbase/CommonCard;&gt;;&gt;; | not-tested |
| classes18.dex:18907:GET | GET | https://api.bilibili.com/pgc/page/module/mine | Query:page, Query:tab_id, Query:fnver, Query:fnval, Query:fourk, Query:qn, Query:teenagers_mode | Lqm1/s&lt;Lcom/bilibili/ogv/opbase/ModuleMine;&gt;; | not-tested |
| classes18.dex:18908:GET | GET | https://api.bilibili.com/pgc/page/tab | Query:parent_tab_name, Query:hide_rcmd_tab | Lqm1/s&lt;Ljava/util/List&lt;Lcom/bilibili/ogv/operation/api/OperationPageTabVo;&gt;;&gt;; | not-tested |
| classes18.dex:18909:GET | GET | https://api.bilibili.com/pgc/season/rank/list | Query:season_type, Query:style_id | Lqm1/s&lt;Lcom/bilibili/ogv/operation/entrance/rank/BangumiRankInfoVo;&gt;; | not-tested |
| classes18.dex:18910:GET | GET | https://api.bilibili.com/pgc/page/guess/bangumi | Query:page_no, Query:page_size | Lqm1/s&lt;Lcom/bilibili/ogv/opbase/HomeRecommendPage;&gt;; | not-tested |
| classes18.dex:18911:GET | GET | https://api.bilibili.com/pgc/page/guess/cinema | Query:page_no, Query:page_size | Lqm1/s&lt;Lcom/bilibili/ogv/opbase/HomeRecommendPage;&gt;; | not-tested |
| classes18.dex:18912:GET | GET | https://api.bilibili.com/pgc/page | Query:name, Query:tab_id, Query:cursor, Query:type, Query:fnver, Query:fnval, Query:fourk, Query:qn, Query:ad_extra, Query:teenagers_mode | Lqm1/s&lt;Lcom/bilibili/ogv/opbase/HomeRecommendPage;&gt;; | not-tested |
| classes18.dex:18913:GET | GET | https://api.bilibili.com/pgc/page | Query:name, Query:tab_id, Query:cursor, Query:is_refresh, Query:type, Query:fnver, Query:fnval, Query:fourk, Query:qn, Query:ad_extra, Query:teenagers_mode | Lqm1/s&lt;Lcom/bilibili/ogv/opbase/HomeRecommendPage;&gt;; | not-tested |
| classes18.dex:19528:POST | POST | https://api.bilibili.com/pgc/app/follow/topic/fav/add | Query:set_id | Lqm1/a; | not-tested |
| classes18.dex:19529:POST | POST | https://api.bilibili.com/pgc/app/follow/topic/fav/cancel | Query:set_id | Lqm1/a; | not-tested |
| classes18.dex:20265:POST | POST | https://api.bilibili.com/pgc/activity/deliver/task/complete | Query:position, Query:task_id, Query:token, Query:timestamp, Query:task_sign, Query:win_id | Ljava/lang/Object; | not-tested |
| classes18.dex:21055:POST | POST | https://api.bilibili.com/pgc/pay/api/sponsor/order/create | Field:season_id, Field:season_type, Field:money, Field:is_quick | Ljava/lang/Object; | not-tested |
| classes18.dex:21058:POST | POST | https://api.bilibili.com/pgc/pay/api/sponsor/order/check | Field:order_id, Field:season_type | Ljava/lang/Object; | not-tested |
| classes18.dex:21255:GET | GET | http://api.bilibili.com/pgc/player/api/cache/reserve/verify | Query:ep_ids | Ljava/lang/Object; | not-tested |
| classes18.dex:21256:GET | GET | http://api.bilibili.com/pgc/player/api/cache/reserve/verify | Query:ep_ids | Lqm1/s&lt;Ljava/util/List&lt;Lcom/bilibili/ogv/pub/reserve/ReserveVerify;&gt;;&gt;; | not-tested |
| classes18.dex:22767:POST | POST | https://api.bilibili.com/pgc/review/short/modify | Query:review_id, Query:media_id, Query:score, Query:share_feed, Query:content, Query:code | Lqm1/s&lt;Lcom/bilibili/ogv/review/detailpage/ReviewResult;&gt;; | not-tested |
| classes18.dex:22768:GET | GET | https://api.bilibili.com/pgc/review/app/user | Query:media_id | Lqm1/s&lt;Lcom/bilibili/ogv/pub/review/bean/ReviewPublishInfo;&gt;; | not-tested |
| classes18.dex:22769:POST | POST | https://api.bilibili.com/pgc/review/short/post | Query:media_id, Query:score, Query:share_feed, Query:content, Query:code | Lqm1/s&lt;Lcom/bilibili/ogv/review/detailpage/ReviewResult;&gt;; | not-tested |
| classes18.dex:24157:GET | GET | https://api.bilibili.com/pgc/card/locate_ep | Query:oid, Query:otype | Ljava/lang/Object; | not-tested |
| classes18.dex:25044:GET | GET | http://api.bilibili.com/pgc/vega/deneb/nodes/get |  | Lqm1/s&lt;Lcom/bilibili/ogvvega/tunnel/VegaDenebNode;&gt;; | not-tested |
| classes20.dex:2662:GET | GET | https://api.bilibili.com/pgc/season/freya/search | Query:keyword, Query:page_no, Query:page_size | Ljava/lang/Object; | not-tested |
| classes20.dex:2663:GET | GET | https://api.bilibili.com/pgc/freya/page/tab | Query:type | Ljava/lang/Object; | not-tested |
| classes20.dex:2664:GET | GET | https://api.bilibili.com/pgc/freya/page/choose | Query:choose_type, Query:season_type, Query:page_version, Query:page_no, Query:page_size | Ljava/lang/Object; | not-tested |
| classes20.dex:2665:GET | GET | https://api.bilibili.com/pgc/page/freya/square | Query:page_name, Query:season_id, Query:ep_id, Query:module_title, Query:season_type, Query:full_screen, Query:room_id, Query:from_spmid | Ljava/lang/Object; | not-tested |
| classes20.dex:2666:GET | GET | https://api.bilibili.com/pgc/page/freya/feed | Query:wid, Query:cursor, Query:page_name, Query:season_id, Query:season_type, Query:full_screen, Query:room_id, Query:from_spmid | Ljava/lang/Object; | not-tested |
| classes20.dex:24348:GET | GET | https://api.bilibili.com/pgc/vipinfo/get | Query:mid | Ljava/lang/Object; | not-tested |
| classes20.dex:24718:POST | POST | http://api.bilibili.com/pgc/freya/room/active | Field:room_id | Ljava/lang/Object; | not-tested |
| classes20.dex:24719:POST | POST | http://api.bilibili.com/pgc/freya/room/relation | Field:fid, Field:room_id, Field:action | Ljava/lang/Object; | not-tested |
| classes20.dex:24720:POST | POST | http://api.bilibili.com/pgc/freya/room/create | Field:season_id, Field:episode_id, Field:is_open, Field:vega_abtest, Field:from_type, Field:sex_type, Field:ext | Ljava/lang/Object; | not-tested |
| classes20.dex:24721:POST | POST | http://api.bilibili.com/pgc/freya/com/interact/pre/create_channel | Field:room_id, Field:biz_type, Field:interact_sdk_version, Field:extend | Ljava/lang/Object; | not-tested |
| classes20.dex:24722:POST | POST | http://api.bilibili.com/pgc/freya/room/heartbeat | Field:room_id, Field:mid, Field:season_id, Field:episode_id, Field:type, Field:play_status, Field:vega_abtest, Field:ts | Ljava/lang/Object; | not-tested |
| classes20.dex:24723:GET | GET | http://api.bilibili.com/pgc/freya/label/ban_accredit | Query:is_ban | Ljava/lang/Object; | not-tested |
| classes20.dex:24724:GET | GET | http://api.bilibili.com/pgc/freya/com/freya_emote/list | Query:room_id, Query:biz_type | Ljava/lang/Object; | not-tested |
| classes20.dex:24725:GET | GET | http://api.bilibili.com/pgc/freya/room/recommend/result | Query:match_id | Ljava/lang/Object; | not-tested |
| classes20.dex:24727:POST | POST | http://api.bilibili.com/pgc/freya/upos/sign | Field:msg_id | Ljava/lang/Object; | not-tested |
| classes20.dex:24729:POST | POST | http://api.bilibili.com/pgc/freya/room/join | Field:room_id, Field:vega_abtest, Field:mid, Field:is_merge, Field:from_type, Field:season_id, Field:episode_id, Field:ext | Ljava/lang/Object; | not-tested |
| classes20.dex:24730:POST | POST | http://api.bilibili.com/pgc/freya/com/interact/pre/join_channel | Field:room_id, Field:biz_type, Field:channel_id, Field:interact_sdk_version, Field:extend | Ljava/lang/Object; | not-tested |
| classes20.dex:24731:POST | POST | http://api.bilibili.com/pgc/freya/room/kickout | Field:room_id, Field:mid, Field:is_com | Ljava/lang/Object; | not-tested |
| classes20.dex:24732:POST | POST | http://api.bilibili.com/pgc/freya/room/leave | Field:room_id, Field:is_com | Ljava/lang/Object; | not-tested |
| classes20.dex:24733:POST | POST | http://api.bilibili.com/pgc/freya/com/interact/pre/leave_channel | Field:room_id, Field:biz_type, Field:channel_id, Field:interact_sdk_version, Field:extend | Ljava/lang/Object; | not-tested |
| classes20.dex:24734:POST | POST | http://api.bilibili.com/pgc/freya/room/match | Field:season_id, Field:episode_id, Field:fail_fast, Field:from_type, Field:season_type, Field:vega_abtest, Field:ext | Ljava/lang/Object; | not-tested |
| classes20.dex:24735:POST | POST | http://api.bilibili.com/pgc/freya/room/modify/progress | Field:is_com, Field:room_id, Field:status, Field:progress | Ljava/lang/Object; | not-tested |
| classes20.dex:24736:POST | POST | http://api.bilibili.com/pgc/freya/room/modify/info | Field:room_id, Field:is_open | Ljava/lang/Object; | not-tested |
| classes20.dex:24737:POST | POST | http://api.bilibili.com/pgc/freya/room/modify/season | Field:is_com, Field:room_id, Field:season_id, Field:episode_id | Ljava/lang/Object; | not-tested |
| classes20.dex:24738:POST | POST | http://api.bilibili.com/pgc/freya/room/report | Field:room_id, Field:event_id, Field:biz_type, Field:report | Ljava/lang/Object; | not-tested |
| classes20.dex:24739:GET | GET | http://api.bilibili.com/pgc/freya/room/ext | Query:room_id | Ljava/lang/Object; | not-tested |
| classes20.dex:24740:GET | GET | http://api.bilibili.com/pgc/freya/room/info | Query:room_id | Ljava/lang/Object; | not-tested |
| classes20.dex:24741:POST | POST | http://api.bilibili.com/pgc/freya/share/live/share/card | Field:room_id | Ljava/lang/Object; | not-tested |
| classes20.dex:24742:GET | GET | http://api.bilibili.com/pgc/freya/label/user_dialog | Query:age_type, Query:version | Ljava/lang/Object; | not-tested |
| classes20.dex:24743:GET | GET | http://api.bilibili.com/pgc/freya/label/info | Query:room_id, Query:mid | Ljava/lang/Object; | not-tested |
| classes20.dex:24744:GET | GET | http://api.bilibili.com/pgc/freya/room/double/accompany/share | Query:room_id, Query:the_other | Ljava/lang/Object; | not-tested |
| classes20.dex:24749:POST | POST | http://api.bilibili.com/pgc/freya/com/freya_emote/send | Field:room_id, Field:emote_id, Field:biz_type | Ljava/lang/Object; | not-tested |
| classes20.dex:24750:POST | POST | http://api.bilibili.com/pgc/freya/room/recommend/match | Field:season_type, Field:from_type, Field:vega_abtest, Field:match_sex | Ljava/lang/Object; | not-tested |
| classes21.dex:1279:GET | GET | https://api.bilibili.com/pgc/web/playlist/id | Query:season_id, Query:query_type, Query:from_scene | Ljava/lang/Object; | not-tested |
| classes21.dex:1280:GET | GET | https://api.bilibili.com/pgc/web/playlist/v2 | Query:id, Query:from_scene | Ljava/lang/Object; | not-tested |
| classes21.dex:15990:POST | POST | https://api.bilibili.com/pgc/app/follow/add | Query:access_key, Query:season_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/search2/api/SearchPgcFavoriteResult;&gt;;&gt;; | not-tested |
| classes21.dex:15996:POST | POST | https://api.bilibili.com/pgc/app/follow/del | Query:access_key, Query:season_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/search2/api/SearchPgcFavoriteResult;&gt;;&gt;; | not-tested |
| classes21.dex:23631:GET | GET | https://api.bilibili.com/pugv/view/app/view_additional_info | Query:season_id | Ljava/lang/Object; | not-tested |
| classes21.dex:23751:GET | GET | https://api.bilibili.com/pugv/view/app/season/consult | Query:csource, Query:from_spm_id, Query:season_id | Ljava/lang/Object; | not-tested |
| classes21.dex:23865:GET | GET | https://api.bilibili.com/pugv/app/course/download | Query:file_id, Query:season_id, Query:section_id, Query:episode_id | Ljava/lang/Object; | not-tested |
| classes21.dex:23866:GET | GET | https://api.bilibili.com/pugv/view/app/live/jump | Query:ep_id | Ljava/lang/Object; | not-tested |
| classes21.dex:24250:GET | GET | https://api.bilibili.com/pugv/view/html5/credential/detail | Query:season_id | Ljava/lang/Object; | not-tested |
| classes21.dex:24251:POST | POST | https://api.bilibili.com/pugv/view/html5/credential/unlock | Query:season_id | Ljava/lang/Object; | not-tested |
| classes21.dex:24507:GET | GET | https://api.bilibili.com/pugv/view/app/activity/share | Query:season_id | Ljava/lang/Object; | not-tested |
| classes21.dex:25369:GET | GET | https://api.bilibili.com/pugv/view/app/query/combine/season | Query:season_id | Ljava/lang/Object; | not-tested |
| classes21.dex:26533:POST | POST | https://api.bilibili.com/pugv/view/study/check/share | Query:season_id, Query:study_time, Query:ep_id | Ljava/lang/Object; | not-tested |
| classes21.dex:26534:POST | POST | https://api.bilibili.com/pugv/view/study/submit_ending | Query:season_id, Query:study_time, Query:ep_id, Query:timestamp | Ljava/lang/Object; | not-tested |
| classes21.dex:26898:GET | GET | https://api.bilibili.com/pugv/adclick/linkreport | Query:trackid, Query:accountid, Query:campaignid, Query:unitid, Query:crid, Query:os, Query:idfa, Query:caid, Query:aaid, Query:androidid, Query:oaid, Query:ts, Query:shopid, Query:upmid, Query:uid, Query:seasonid, Query:seriesid, Query:upid, Query:pkg_id, Query:report_scene, Query:source_type, Query:model | Ljava/lang/Object; | not-tested |
| classes21.dex:29073:POST | POST | http://api.bilibili.com/pgc/freya/room/create | Field:season_id, Field:episode_id, Field:is_open, Field:vega_abtest, Field:from_type, Field:sex_type, Field:ext, Field:access_key | Ljava/lang/Object; | not-tested |
| classes21.dex:29074:GET | GET | http://api.bilibili.com/pgc/freya/share/ogv/link | Query:season_id, Query:episode_id, Query:season_type, Query:age_type, Query:version | Ljava/lang/Object; | not-tested |
| classes21.dex:29568:POST | POST | https://api.bilibili.com/pgc/activity/action-report | Query:activity_id, Query:action_type, Query:component_id, Query:season_id, Query:ep_id | Ljava/lang/Object; | not-tested |
| classes21.dex:29569:POST | POST | https://api.bilibili.com/pgc/activity/deliver/task/complete | Query:position, Query:task_id, Query:token, Query:timestamp, Query:task_sign | Ljava/lang/Object; | not-tested |
| classes21.dex:29570:POST | POST | https://api.bilibili.com/pgc/activity/deliver/material/receive | Query:season_id, Query:season_type, Query:ep_id, Query:activity_code, Query:spmid, Query:from_spmid, Query:ads_info, Query:from_scene | Ljava/lang/Object; | not-tested |
| classes21.dex:29571:POST | POST | https://api.bilibili.com/pgc/activity/receiveAward | Query:activity_id, Query:season_id, Query:ep_id, QueryMap:(内容未知) | Ljava/lang/Object; | not-tested |
| classes21.dex:29572:POST | POST | https://api.bilibili.com/pgc/activity/report-in-one | Query:win_id, Query:code, Query:action | Ljava/lang/Object; | not-tested |
| classes21.dex:29573:POST | POST | https://api.bilibili.com/pgc/activity/deliver/material/receive-activity | Query:season_id, Query:ep_id, QueryMap:(内容未知) | Ljava/lang/Object; | not-tested |
| classes21.dex:30327:GET | GET | http://api.bilibili.com/pgc/season/character/seasons | Query:character_id, Query:order_type, Query:pn, Query:ps | Ljava/lang/Object; | not-tested |
| classes21.dex:30328:GET | GET | http://api.bilibili.com/pgc/season/character/get | Query:id | Ljava/lang/Object; | not-tested |
| classes21.dex:30839:POST | POST | http://api.bilibili.com/pgc/freya/chat/greeting | FieldMap:(内容未知) | Ljava/lang/Object; | not-tested |
| classes21.dex:30840:GET | GET | http://api.bilibili.com/pgc/freya/chat/room/ext | Query:room_id, Query:oid | Ljava/lang/Object; | not-tested |
| classes21.dex:30841:GET | GET | http://api.bilibili.com/pgc/freya/chat/user/info | Query:chat_id, Query:mid | Ljava/lang/Object; | not-tested |
| classes21.dex:33097:GET | GET | http://api.bilibili.com/pgc/view/v2/app/media | Query:media_id | Ljava/lang/Object; | not-tested |
| classes21.dex:33436:POST | POST | https://api.bilibili.com/pgc/view/activity/guide/bar/operation | Query:season_id, Query:season_type, Query:reserve_id, Query:operation_flag | Ljava/lang/Object; | not-tested |
| classes21.dex:33437:GET | GET | https://api.bilibili.com/pgc/view/activity/guide/bar/info | Query:season_id, Query:season_type | Ljava/lang/Object; | not-tested |
| classes21.dex:33958:GET | GET | https://api.bilibili.com/pgc/view/v2/app/eps | Query:season_id | Ljava/lang/Object; | not-tested |
| classes21.dex:34483:GET | GET | https://api.bilibili.com/pgc/player/check | Query:season_id, Query:ep_id, Query:access_key | Ljava/lang/Object; | not-tested |
| classes21.dex:35132:GET | GET | https://bangumi.bilibili.com/sponsor/api/point | Query:amount | Ljava/lang/Object; | not-tested |
| classes21.dex:36115:GET | GET | https://api.bilibili.com/pgc/season/player/ogv/cards | Query:ep_id, Query:scene_type | Ljava/lang/Object; | not-tested |
| classes21.dex:36116:POST | POST | https://api.bilibili.com/pgc/season/player/click/card | Field:unique_id, Field:ep_id, Field:is_selected, Field:season_id, Field:biz_type, Field:win_id | Ljava/lang/Object; | not-tested |
| classes21.dex:36117:GET | GET | https://api.bilibili.com/pgc/season/player/frequency/control | Query:season_id, Query:ep_id, Query:card_type, Query:biz_type, Query:win_id | Ljava/lang/Object; | not-tested |
| classes30.dex:45615:POST | POST | https://api.bilibili.com/pugv/app/favorite/del | Query:access_key, Query:season_id | Lqm1/a; | not-tested |
| classes30.dex:45616:GET | GET | https://api.bilibili.com/pugv/app/favorite/page | Query:access_key, Query:pn, Query:ps | Lqm1/s&lt;Ltv/danmaku/bili/ui/favorite/cheesesupport/CheeseList;&gt;; | not-tested |
| classes30.dex:54110:POST | POST | https://api.bilibili.com/pgc/player/api/v2/cache/play | Query:access_key, Body:(内容未知) | LlC0/a&lt;Ltv/danmaku/bili/ui/offline/api/OgvApiResponseV2;&gt;; | not-tested |
| classes5.dex:260:POST | POST | https://api.bilibili.com/pgc/app/follow/add | Query:access_key, Query:season_id, Query:season_type, Query:reserve_id, Query:flag | Lqm1/s&lt;Lcom/bilibili/ogv/community/bean/BangumiFollowStatus;&gt;; | not-tested |
| classes5.dex:261:POST | POST | https://api.bilibili.com/pgc/app/follow/del | Query:access_key, Query:season_id, Query:season_type | Lqm1/s&lt;Lcom/bilibili/ogv/community/bean/BangumiFollowStatus;&gt;; | not-tested |
| classes5.dex:262:POST | POST | https://api.bilibili.com/pgc/app/follow/status/update | Query:access_key, Query:season_id, Query:status | Lqm1/s&lt;Lcom/bilibili/ogv/community/bean/BangumiFollowStatus;&gt;; | not-tested |
| classes5.dex:63728:POST | POST | https://api.bilibili.com/pgc/season/episode/like/triple | Field:ep_id, Field:is_follow, Field:access_key, Field:track_id | Lqm1/s&lt;Lcom/bilibili/ogv/community/bean/BangumiPraiseTriple;&gt;; | not-tested |

## gRPC

请求/响应角色默认仍为静态候选；View/View 已有单独实现核对。表格不代表已建立连接或验证认证。

| 路由 | 请求类型候选 | 响应类型候选 | 线上抽查 |
| --- | --- | --- | --- |
| /bilibili.pgc.gateway.player.v2.PlayURL/PlayView | Lcom/bapis/bilibili/pgc/gateway/player/v2/PlayViewReq; | Lcom/bapis/bilibili/pgc/gateway/player/v2/PlayViewReply; | not-tested |
| /bilibili.pgc.gateway.player.v2.PlayURL/PlayViewComic | Lcom/bapis/bilibili/pgc/gateway/player/v2/PlayViewReq; | Lcom/bapis/bilibili/pgc/gateway/player/v2/PlayViewReply; | not-tested |
| /bilibili.pgc.gateway.view.v1.View/PageSectionEpisodes | Lcom/bapis/bilibili/pgc/gateway/view/v1/PageSectionEpisodesReq; | Lcom/bapis/bilibili/pgc/gateway/view/v1/PageSectionEpisodesReply; | not-tested |
| /bilibili.pgc.gateway.view.v1.View/SeasonSections | Lcom/bapis/bilibili/pgc/gateway/view/v1/SeasonSectionsReq; | Lcom/bapis/bilibili/pgc/gateway/view/v1/SeasonSectionsReply; | not-tested |
| /bilibili.pgc.gateway.view.v1.View/SeasonSectionsForCache | Lcom/bapis/bilibili/pgc/gateway/view/v1/SeasonSectionsReq; | Lcom/bapis/bilibili/pgc/gateway/view/v1/SeasonSectionsReply; | not-tested |
| /pgc.gateway.vega.v1.Vega/CreateTunnel | Lcom/bapis/pgc/gateway/vega/v1/VegaFrame; | Lcom/bapis/pgc/gateway/vega/v1/VegaFrame; | not-tested |
| /pgc.gateway.vega.v1.VegaFrameDoc/Auth | Lcom/bapis/pgc/gateway/vega/v1/AuthReq; | Lcom/bapis/pgc/gateway/vega/v1/AuthResp; | not-tested |
| /pgc.gateway.vega.v1.VegaFrameDoc/Heartbeat | Lcom/bapis/pgc/gateway/vega/v1/HeartbeatReq; | Lcom/bapis/pgc/gateway/vega/v1/HeartbeatResp; | not-tested |
| /pgc.gateway.vega.v1.VegaFrameDoc/MessageAck | Lcom/bapis/pgc/gateway/vega/v1/MessageAckReq; | Lcom/google/protobuf/Empty; | not-tested |
| /pgc.gateway.vega.v1.VegaFrameDoc/Subscribe | Lcom/bapis/pgc/gateway/vega/v1/SubscribeReq; | Lcom/google/protobuf/Empty; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category pgc --limit 10
node bin/bili-apis.mjs show "ID"
```
