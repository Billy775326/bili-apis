# 收藏与稍后再看

<!-- android-edition:start -->
包名：`tv.danmaku.bili` · 渠道：Official Android 64-bit · 版本：9.19.0（9190400）。

[全部版本](../../../README.md) · [本包文档](README.md) · [网页接口](../../../../pc/README.md) · [基线元数据](../../../../../catalog/android/tv.danmaku.bili/official/9.19.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

收藏夹、收藏内容和待播放列表。分类根据路由、域名与声明类名称推断，未验证业务行为。

官方 Android 9.19.0：93 条 HTTP 声明、2 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。

[返回分类](README.md) · [与 Play 对比](comparison.md)

## HTTP

参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。

| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |
| --- | --- | --- | --- | --- |
| classes10.dex:52392:POST | POST | https://api.bilibili.com/x/v3/fav/resource/deal | Query:rid, Query:type, Query:add_media_ids, Query:spmid, Query:from_spmid, Query:action_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes14.dex:32358:GET | GET | https://app.bilibili.com/x/v2/favorite/channel | Query:ps, Query:offset | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/channel/RspCollectionChannel;&gt;;&gt;; |
| classes14.dex:32378:POST | POST | https://api.bilibili.com/x/v3/fav/resource/batch-add | Query:resources, Query:media_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/playset/api/GeneralMsgResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:32379:POST | POST | https://api.bilibili.com/x/v3/fav/resource/copy | Query:mid, Query:resources, Query:src_media_id, Query:tar_media_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/playset/api/GeneralMsgResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:32380:POST | POST | https://api.bilibili.com/x/v2/history/toview/copy | Field:resources, Field:tar_media_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes14.dex:32381:POST | POST | https://api.bilibili.com/x/v3/fav/resource/move | Query:src_media_id, Query:tar_media_id, Query:resources | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/playset/api/GeneralMsgResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:32382:POST | POST | https://api.bilibili.com/x/v2/history/toview/move | Field:resources, Field:tar_media_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes14.dex:32383:GET | GET | https://api.bilibili.com/x/v3/fav/resource/infos | Query:resources | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/playset/api/MultitypeMedia;&gt;;&gt;;&gt;; |
| classes14.dex:32384:GET | GET | https://api.bilibili.com/x/v3/fav/resource/infos | Query:resources, Query:folder_mid, Query:folder_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/ArrayList&lt;Lcom/bilibili/playset/api/MultitypeMedia;&gt;;&gt;;&gt;; |
| classes14.dex:32385:POST | POST | https://api.bilibili.com/x/v3/fav/tab/clean_invalid | Field:fid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/okretro/BaseResponse;&gt;;&gt;; |
| classes14.dex:32386:POST | POST | https://api.bilibili.com/x/v3/fav/resource/clean | Query:media_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/playset/api/GeneralMsgResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:32387:POST | POST | https://api.bilibili.com/x/v3/fav/folder/add | Field:access_key, Field:title, Field:intro, Field:cover, Field:privacy, Header:x-bili-gaia-vtoken | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/api/PlaySet;&gt;;&gt;; |
| classes14.dex:32388:POST | POST | https://api.bilibili.com/x/v3/fav/tab/dels | Query:resources, Query:media_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/okretro/BaseResponse;&gt;;&gt;; |
| classes14.dex:32389:POST | POST | https://api.bilibili.com/x/v3/fav/resource/batch-del | Query:resources, Query:media_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:32391:POST | POST | https://api.bilibili.com/x/v3/fav/folder/del | Query:media_ids | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:32393:POST | POST | https://api.bilibili.com/x/v3/fav/season/unfav | Query:season_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:32395:POST | POST | https://api.bilibili.com/x/v3/fav/folder/edit | Field:access_key, Field:title, Field:intro, Field:cover, Field:privacy, Field:media_id, Header:x-bili-gaia-vtoken | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/api/PlaySet;&gt;;&gt;; |
| classes14.dex:32396:POST | POST | https://api.bilibili.com/x/v3/fav/resource/batch-deal | Query:access_key, Query:resources, Query:add_media_ids, Query:del_media_ids, Query:from, Query:extra, Query:from_spmid, Query:spmid, Query:action_id, Header:x-bili-gaia-vtoken | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes14.dex:32397:POST | POST | https://api.bilibili.com/x/v3/fav/folder/fav | Query:media_id, Query:from_spmid, Query:spmid, Query:action_id, Header:x-bili-gaia-vtoken | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:32398:POST | POST | https://api.bilibili.com/x/v3/fav/resource/deal | Query:access_key, Query:rid, Query:type, Query:add_media_ids, Query:del_media_ids, Query:from_spmid, Query:spmid, Query:action_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes14.dex:32399:GET | GET | https://api.bilibili.com/x/v3/fav/folder/created/list | Query:access_key, Query:up_mid, Query:pn, Query:ps, Query:rid, Query:type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/api/PlaySetPageData;&gt;;&gt;; |
| classes14.dex:32400:GET | GET | https://api.bilibili.com/x/v3/fav/folder/created/list-all | Query:pn, Query:ps, Query:is_space, Query:up_mid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/playset/api/GeneralMsgResponse&lt;Lcom/bilibili/playset/api/PlaySetPageData;&gt;;&gt;; |
| classes14.dex:32401:GET | GET | https://api.bilibili.com/x/v3/fav/folder/created/list-all | Query:access_key, Query:up_mid, Query:rid, Query:type, Query:show_season, Query:extra | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/api/PlaySetPageData;&gt;;&gt;; |
| classes14.dex:32402:GET | GET | https://api.bilibili.com/x/v3/fav/folder/collected/list | Query:access_key, Query:up_mid, Query:pn, Query:ps | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/api/PlaySetPageData;&gt;;&gt;; |
| classes14.dex:32403:GET | GET | https://api.bilibili.com/x/v3/fav/folder/resources | Query:media_id, Query:pn | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lebd0;&gt;;&gt;; |
| classes14.dex:32404:GET | GET | https://api.bilibili.com/x/v3/fav/resource/ids | Query:media_id, Query:pn | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/playset/playlist/entity/MediaId;&gt;;&gt;;&gt;; |
| classes14.dex:32405:GET | GET | https://api.bilibili.com/x/v3/fav/resource/ids | Query:media_id, Query:pn, Query:sort | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/playset/api/GeneralMsgResponse&lt;Ljava/util/List&lt;Lcom/bilibili/playset/playlist/entity/MediaId;&gt;;&gt;;&gt;; |
| classes14.dex:32406:GET | GET | https://api.bilibili.com/x/v3/fav/folder/space/v2 | Query:up_mid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/api/PlaySetGroups;&gt;;&gt;; |
| classes14.dex:32409:GET | GET | https://api.bilibili.com/x/v3/fav/folder/space | Query:access_key, Query:up_mid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/playset/api/PlaySetGroup;&gt;;&gt;;&gt;; |
| classes14.dex:32410:GET | GET | https://api.bilibili.com/x/v3/fav/folder/info | Query:media_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/api/MultitypePlaylist$Info;&gt;;&gt;; |
| classes14.dex:32412:GET | GET | https://api.bilibili.com/x/v3/fav/folder/whitelist | Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Integer;&gt;;&gt;; |
| classes14.dex:32413:POST | POST | https://api.bilibili.com/x/v3/fav/thump/up | Query:rid, Query:thumb_type, Query:type, Query:up_mid, Query:from_spmid, Query:spmid, Query:action_id, Header:x-bili-gaia-vtoken | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:32415:GET | GET | https://api.bilibili.com/x/v3/fav/folder/clean-state | Query:media_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/playset/api/GeneralMsgResponse&lt;Ljava/lang/Integer;&gt;;&gt;; |
| classes14.dex:32416:GET | GET | https://api.bilibili.com/x/v3/fav/resource/list | Query:media_id, Query:pn, Query:ps | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/api/PlaySetGroups$DefaultFolderGroup;&gt;;&gt;; |
| classes14.dex:32417:GET | GET | https://api.bilibili.com/x/v3/fav/resource/list | Query:media_id, Query:pn, Query:ps, Query:type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/playlist/entity/PlaylistDetailBean;&gt;;&gt;; |
| classes14.dex:32418:POST | POST | https://api.bilibili.com/x/v3/fav/statistics/count | Query:rid, Query:r_type, Query:cnt_type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:32419:GET | GET | https://api.bilibili.com/x/v3/fav/resource/list | Query:media_id, Query:pn, Query:ps, Query:keyword, Query:type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/playlist/entity/PlaylistDetailBean;&gt;;&gt;; |
| classes14.dex:32420:GET | GET | https://api.bilibili.com/x/v3/fav/tab/fav/search | Query:keyword, Query:start_oid, Query:start_otype, Query:search_count, Query:pn, Query:count, Query:media_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ldws;&gt;;&gt;; |
| classes14.dex:32421:POST | POST | https://api.bilibili.com/x/v3/fav/resource/sort | Query:sort, Query:media_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/playset/api/GeneralMsgResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:32422:POST | POST | https://api.bilibili.com/x/v3/fav/folder/add_top | Field:fid, Field:add_top | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:32423:POST | POST | https://api.bilibili.com/x/v3/fav/folder/unfav | Query:media_id, Query:from_spmid, Query:spmid, Query:action_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:32424:POST | POST | https://api.bilibili.com/x/v3/fav/folder/unfav | Query:access_key, Query:media_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:32520:POST | POST | https://api.bilibili.com/x/v3/fav/kid-playlist/create |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/baby/api/BabyPlaylistCreateResult;&gt;;&gt;; |
| classes14.dex:32521:POST | POST | https://api.bilibili.com/x/v3/fav/kid-playlist/import |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/baby/api/BabyPlaylistImportResult;&gt;;&gt;; |
| classes14.dex:32522:GET | GET | https://api.bilibili.com/x/v3/fav/kid-playlist/info |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/baby/api/BabyPlaylistInfo;&gt;;&gt;; |
| classes14.dex:35345:POST | POST | https://api.bilibili.com/x/v3/fav/resource/clean | Field:media_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:35346:POST | POST | https://api.bilibili.com/x/v3/fav/tab/up-fav | Field:resources, Field:tar_media_ids, Field:action, Field:media_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/widget/favorite/FavoriteChangeResponse;&gt;;&gt;; |
| classes14.dex:35347:POST | POST | https://api.bilibili.com/x/v3/fav/resource/batch-deal | Field:access_key, Field:resources, Field:add_media_ids, Field:del_media_ids, Field:from, Field:extra, Field:from_spmid, Field:spmid, Field:action_id, Header:x-bili-gaia-vtoken | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/google/gson/JsonObject;&gt;;&gt;; |
| classes14.dex:35348:GET | GET | https://api.bilibili.com/x/v3/fav/folder/created/list-all | Query:access_key, Query:up_mid, Query:rid, Query:type, Query:show_season, Query:extra | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/widget/favorite/PlaySetPageData;&gt;;&gt;; |
| classes14.dex:35349:POST | POST | https://api.bilibili.com/x/v3/fav/resource/unfav-all | Field:rid, Field:type, Field:from_spmid, Field:spmid, Field:action_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/google/gson/JsonObject;&gt;;&gt;; |
| classes14.dex:35350:POST | POST | https://api.bilibili.com/x/v3/fav/resource/sort | Field:sort, Field:media_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:54686:GET | GET | https://api.bilibili.com/x/v3/fav/recommend/items | Query:content_id, Query:content_type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playerbizcommonv2/danmaku/input/panel/commandsdetail/mark/MarkGoodsList;&gt;;&gt;; |
| classes14.dex:55710:GET | GET | https://api.bilibili.com/x/v3/fav/recommend/items | Query:content_id, Query:content_type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playerbizcommon/input/panels/commandsdetail/mark/MarkGoodsList;&gt;;&gt;; |
| classes15.dex:29743:POST | POST | https://api.bilibili.com/x/v3/fav/statistics/count | Field:rid, Field:r_type, Field:cnt_type, Field:sid, Field:stype | Ljava/lang/Object; |
| classes15.dex:29744:POST | POST | https://api.bilibili.com/x/v1/medialist/history | Field:upper_mid, Field:oid, Field:desc, Field:dt, Field:biz_id, Field:type, Field:otype | Ljava/lang/Object; |
| classes15.dex:30335:POST | POST | https://api.bilibili.com/x/v3/fav/folder/fav | Field:media_id, Field:from_spmid, Field:spmid, Field:action_id, Header:x-bili-gaia-vtoken | Ljava/lang/Object; |
| classes15.dex:30336:POST | POST | https://api.bilibili.com/x/v3/fav/thump/up | Field:rid, Field:thumb_type, Field:type, Field:up_mid, Field:from_spmid, Field:spmid, Field:action_id, Header:x-bili-gaia-vtoken | Ljava/lang/Object; |
| classes15.dex:30337:POST | POST | https://api.bilibili.com/x/v3/fav/folder/unfav | Field:media_id, Field:from_spmid, Field:spmid, Field:action_id | Ljava/lang/Object; |
| classes15.dex:46660:GET | GET | https://api.bilibili.com/x/v1/medialist/info | Query:media_id, Query:type, Query:biz_id | Ljava/lang/Object; |
| classes19.dex:13242:POST | POST | https://api.bilibili.com/x/v2/fav/video/add | FieldMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; |
| classes19.dex:13248:POST | POST | https://api.bilibili.com/x/v3/fav/resource/unfav-all | Field:access_key, Field:rid, Field:type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; |
| classes28.dex:36968:POST | POST | https://api.bilibili.com/x/v3/fav/folder/add_top | Field:fid, Field:add_top | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/okretro/BaseResponse;&gt;;&gt;; |
| classes28.dex:36969:POST | POST | https://api.bilibili.com/x/v3/fav/tab/clean_invalid | Field:fid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/okretro/BaseResponse;&gt;;&gt;; |
| classes28.dex:36970:POST | POST | https://api.bilibili.com/x/v3/fav/tab/red_dot/clean | Field:tab_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/okretro/BaseResponse;&gt;;&gt;; |
| classes28.dex:36971:POST | POST | https://api.bilibili.com/x/v3/fav/tab/dels | Field:resources, Field:media_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/okretro/BaseResponse;&gt;;&gt;; |
| classes28.dex:36972:GET | GET | https://api.bilibili.com/x/v3/fav/tab/my_fav | Query:cover_more | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;La4d0;&gt;;&gt;; |
| classes28.dex:36973:GET | GET | https://api.bilibili.com/x/v3/fav/tab/fav | Query:start_oid, Query:start_otype, Query:tab_id, Query:start_score, Query:page_type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ldbd0;&gt;;&gt;; |
| classes28.dex:36974:GET | GET | https://api.bilibili.com/x/v3/fav/tab | Query:tab_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljbd0;&gt;;&gt;; |
| classes28.dex:36975:GET | GET | https://api.bilibili.com/x/v3/fav/folder/resources | Query:media_id, Query:pn | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ldbd0;&gt;;&gt;; |
| classes28.dex:36976:GET | GET | https://api.bilibili.com/x/v3/fav/tab/fol | Query:tab_id, Query:start_oid, Query:start_otype, Query:start_score, Query:page_type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lkmf0;&gt;;&gt;; |
| classes28.dex:36977:POST | POST | https://api.bilibili.com/x/v3/fav/tab/report | Field:tab_id, Field:resources, Field:action | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/okretro/BaseResponse;&gt;;&gt;; |
| classes28.dex:45771:POST | POST | https://api.bilibili.com/x/v2/history/toview/add | Field:aid, Field:from, Field:spmid, Field:toview_version | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/watchlater/data/WatchLaterAddToast;&gt;;&gt;; |
| classes28.dex:45772:POST | POST | https://api.bilibili.com/x/v2/history/toview/add | Field:resources, Field:spm_id, Field:toview_version | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/watchlater/data/WatchLaterAddToast;&gt;;&gt;; |
| classes28.dex:45773:POST | POST | https://api.bilibili.com/x/v3/fav/toview/adds | Field:resources, Field:toview_version, Field:spmid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/watchlater/data/WatchLaterAddToast;&gt;;&gt;; |
| classes28.dex:45774:POST | POST | https://api.bilibili.com/x/v2/history/toview/clear | Field:clean_type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/okretro/BaseResponse;&gt;;&gt;; |
| classes28.dex:45775:POST | POST | https://api.bilibili.com/x/v2/history/toview/v2/dels | Field:resources | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/okretro/BaseResponse;&gt;;&gt;; |
| classes28.dex:45776:GET | GET | https://api.bilibili.com/x/v2/history/toview/v2/list | Query:start_key, Query:asc, Query:sort_field, Query:split_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/watchlater/data/WatchLaterResponse;&gt;;&gt;; |
| classes28.dex:46795:POST | POST | https://api.bilibili.com/x/v2/history/toview/add | Field:access_key, Field:aid, Field:from | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes28.dex:46796:POST | POST | https://api.bilibili.com/x/v2/history/toview/clear | Field:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Ljava/lang/Void;&gt;; |
| classes28.dex:46797:POST | POST | https://api.bilibili.com/x/v2/history/toview/del | Field:access_key, Field:aid, Field:viewed | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes28.dex:59873:GET | GET | https://app.bilibili.com/x/v2/favorite/topic | Query:access_key, Query:pn, Query:ps | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/favorite/api/FavTopicData;&gt;;&gt;; |
| classes28.dex:59874:GET | GET | https://app.bilibili.com/x/v2/favorite/second/tab | Query:access_key, Query:tab | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/favorite/api/FavSecondTabData;&gt;;&gt;; |
| classes4.dex:51109:POST | POST | https://api.bilibili.com/x/v3/fav/resource/deal | Query:rid, Query:type, Query:add_media_ids | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes4.dex:51110:POST | POST | https://api.bilibili.com/x/v3/fav/resource/deal | Query:rid, Query:type, Query:add_media_ids, Query:spmid, Query:from_spmid, Query:action_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes4.dex:51112:POST | POST | https://api.bilibili.com/x/v3/fav/resource/unfav-all | Query:rid, Query:type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes4.dex:51113:POST | POST | https://api.bilibili.com/x/v3/fav/resource/unfav-all | Query:rid, Query:type, Query:spmid, Query:from_spmid, Query:action_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes4.dex:62646:POST | POST | https://api.bilibili.com/x/v3/fav/recommend/deal | Field:add, Field:item_id, Field:content_id, Field:content_type, Field:up_mid, Field:comment_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lkotlin/Unit;&gt;;&gt;; |
| classes8.dex:33156:POST | POST | https://api.bilibili.com/x/v3/fav/resource/deal | Field:rid, Field:type, Field:add_media_ids, Field:from_spmid, Field:spmid, Field:action_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes8.dex:33161:POST | POST | https://api.bilibili.com/x/v3/fav/resource/unfav-all | Field:rid, Field:type, Field:from_spmid, Field:spmid, Field:action_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes9.dex:34002:POST | POST | https://api.bilibili.com/x/article/favorites/add | Field:access_key, Field:id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes9.dex:34011:GET | GET | https://api.bilibili.com/x/article/favorites/list | Query:access_key, Query:pn, Query:ps | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/column/api/response/ColumnFavoriteData;&gt;;&gt;; |
| classes9.dex:34022:POST | POST | https://api.bilibili.com/x/article/favorites/del | Field:access_key, Field:id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes9.dex:44914:GET | GET | https://app.bilibili.com/x/v2/favorite/article | Query:access_key, Query:pn, Query:ps | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/column/api/response/BaseListItemsData&lt;Lcom/bilibili/column/api/response/ColumnFavorite;&gt;;&gt;;&gt;; |

## gRPC

请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。

| 路由 | 请求类型候选 | 响应类型候选 |
| --- | --- | --- |
| /bilibili.polymer.list.v1.List/CheckAccount | Lcom/bapis/bilibili/polymer/list/CheckAccountReq; | Lcom/bapis/bilibili/polymer/list/CheckAccountReply; |
| /bilibili.polymer.list.v1.List/FavoriteTab | Lcom/bapis/bilibili/polymer/list/FavoriteTabReq; | Lcom/bapis/bilibili/polymer/list/FavoriteTabReply; |

```sh
node bin/bili-apis.mjs --edition official list --category favorite --limit 10
node bin/bili-apis.mjs --edition official show "ID"
```
