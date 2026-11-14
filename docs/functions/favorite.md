# 收藏与稍后再看

收藏夹、收藏内容和待播放列表。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 85 条 HTTP 声明、2 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes10.dex:63538:POST | POST | https://api.bilibili.com/x/v3/fav/recommend/deal | Field:add, Field:item_id, Field:content_id, Field:content_type, Field:up_mid, Field:comment_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lkotlin/Unit;&gt;;&gt;; | not-tested |
| classes11.dex:43331:POST | POST | https://api.bilibili.com/x/v3/fav/resource/deal | Query:rid, Query:type, Query:add_media_ids, Query:spmid, Query:from_spmid, Query:action_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes11.dex:43332:POST | POST | https://api.bilibili.com/x/v3/fav/resource/deal | Query:rid, Query:type, Query:add_media_ids | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes11.dex:43333:POST | POST | https://api.bilibili.com/x/v3/fav/resource/unfav-all | Query:rid, Query:type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes11.dex:43334:POST | POST | https://api.bilibili.com/x/v3/fav/resource/unfav-all | Query:rid, Query:type, Query:spmid, Query:from_spmid, Query:action_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes12.dex:45896:POST | POST | https://api.bilibili.com/x/v3/fav/resource/deal | Field:rid, Field:type, Field:add_media_ids, Field:from_spmid, Field:spmid, Field:action_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes12.dex:45901:POST | POST | https://api.bilibili.com/x/v3/fav/resource/unfav-all | Field:rid, Field:type, Field:from_spmid, Field:spmid, Field:action_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes13.dex:52267:POST | POST | https://api.bilibili.com/x/v3/fav/resource/clean | Field:media_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes13.dex:52268:POST | POST | https://api.bilibili.com/x/v3/fav/tab/up-fav | Field:resources, Field:tar_media_ids, Field:action, Field:media_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/widget/favorite/FavoriteChangeResponse;&gt;;&gt;; | not-tested |
| classes13.dex:52269:POST | POST | https://api.bilibili.com/x/v3/fav/resource/batch-deal | Field:access_key, Field:resources, Field:add_media_ids, Field:del_media_ids, Field:from, Field:extra, Field:from_spmid, Field:spmid, Field:action_id, Header:x-bili-gaia-vtoken | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/google/gson/j;&gt;;&gt;; | not-tested |
| classes13.dex:52270:GET | GET | https://api.bilibili.com/x/v3/fav/folder/created/list-all | Query:access_key, Query:up_mid, Query:rid, Query:type, Query:show_season, Query:extra | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/widget/favorite/PlaySetPageData;&gt;;&gt;; | not-tested |
| classes13.dex:52271:POST | POST | https://api.bilibili.com/x/v3/fav/resource/unfav-all | Field:rid, Field:type, Field:from_spmid, Field:spmid, Field:action_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/google/gson/j;&gt;;&gt;; | not-tested |
| classes13.dex:52272:POST | POST | https://api.bilibili.com/x/v3/fav/resource/sort | Field:sort, Field:media_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes14.dex:2379:GET | GET | https://app.bilibili.com/x/v2/favorite/article | Query:access_key, Query:pn, Query:ps | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/column/api/response/BaseListItemsData&lt;Lcom/bilibili/column/api/response/ColumnFavorite;&gt;;&gt;;&gt;; | not-tested |
| classes14.dex:38900:POST | POST | https://api.bilibili.com/x/article/favorites/del | Field:access_key, Field:id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes16.dex:22259:POST | POST | https://api.bilibili.com/x/v3/fav/resource/deal | Query:rid, Query:type, Query:add_media_ids, Field:from_spmid, Field:from, Field:action_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes18.dex:45762:GET | GET | https://api.bilibili.com/x/v3/fav/recommend/items | Query:content_id, Query:content_type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playerbizcommonv2/danmaku/input/panel/commandsdetail/mark/MarkGoodsList;&gt;;&gt;; | not-tested |
| classes18.dex:61711:GET | GET | https://api.bilibili.com/x/v3/fav/recommend/items | Query:content_id, Query:content_type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playerbizcommon/input/panels/commandsdetail/mark/MarkGoodsList;&gt;;&gt;; | not-tested |
| classes21.dex:37195:POST | POST | https://api.bilibili.com/x/v3/fav/statistics/count | Field:rid, Field:r_type, Field:cnt_type, Field:sid, Field:stype | Ljava/lang/Object; | not-tested |
| classes21.dex:37196:POST | POST | https://api.bilibili.com/x/v1/medialist/history | Field:upper_mid, Field:oid, Field:desc, Field:dt, Field:biz_id, Field:type, Field:otype | Ljava/lang/Object; | not-tested |
| classes21.dex:38999:POST | POST | https://api.bilibili.com/x/v3/fav/folder/unfav | Field:media_id, Field:from_spmid, Field:spmid, Field:action_id | Ljava/lang/Object; | not-tested |
| classes21.dex:39000:POST | POST | https://api.bilibili.com/x/v3/fav/folder/fav | Field:media_id, Field:from_spmid, Field:spmid, Field:action_id, Header:x-bili-gaia-vtoken | Ljava/lang/Object; | not-tested |
| classes21.dex:39001:POST | POST | https://api.bilibili.com/x/v3/fav/thump/up | Field:rid, Field:thumb_type, Field:type, Field:up_mid, Field:from_spmid, Field:spmid, Field:action_id, Header:x-bili-gaia-vtoken | Ljava/lang/Object; | not-tested |
| classes21.dex:39886:GET | GET | https://api.bilibili.com/x/v1/medialist/info | Query:media_id, Query:type, Query:biz_id | Ljava/lang/Object; | not-tested |
| classes30.dex:45787:POST | POST | https://api.bilibili.com/x/v3/fav/folder/add_top | Field:fid, Field:add_top | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/okretro/BaseResponse;&gt;;&gt;; | not-tested |
| classes30.dex:45788:POST | POST | https://api.bilibili.com/x/v3/fav/tab/clean_invalid | Field:fid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/okretro/BaseResponse;&gt;;&gt;; | not-tested |
| classes30.dex:45789:POST | POST | https://api.bilibili.com/x/v3/fav/tab/red_dot/clean | Field:tab_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/okretro/BaseResponse;&gt;;&gt;; | not-tested |
| classes30.dex:45790:POST | POST | https://api.bilibili.com/x/v3/fav/tab/dels | Field:resources, Field:media_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/okretro/BaseResponse;&gt;;&gt;; | not-tested |
| classes30.dex:45791:GET | GET | https://api.bilibili.com/x/v3/fav/tab/my_fav | Query:cover_more | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;LGM1/c;&gt;;&gt;; | not-tested |
| classes30.dex:45792:GET | GET | https://api.bilibili.com/x/v3/fav/tab/fav | Query:start_oid, Query:start_otype, Query:tab_id, Query:start_score, Query:page_type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;LGM1/g;&gt;;&gt;; | not-tested |
| classes30.dex:45793:GET | GET | https://api.bilibili.com/x/v3/fav/tab | Query:tab_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;LGM1/h;&gt;;&gt;; | not-tested |
| classes30.dex:45794:GET | GET | https://api.bilibili.com/x/v3/fav/folder/resources | Query:media_id, Query:pn | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;LGM1/g;&gt;;&gt;; | not-tested |
| classes30.dex:45795:GET | GET | https://api.bilibili.com/x/v3/fav/tab/fol | Query:tab_id, Query:start_oid, Query:start_otype, Query:start_score, Query:page_type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;LGM1/j;&gt;;&gt;; | not-tested |
| classes30.dex:45796:POST | POST | https://api.bilibili.com/x/v3/fav/tab/report | Field:tab_id, Field:resources, Field:action | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/okretro/BaseResponse;&gt;;&gt;; | not-tested |
| classes30.dex:56628:POST | POST | https://api.bilibili.com/x/v2/history/toview/add | Field:aid, Field:from, Field:spmid, Field:toview_version | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/watchlater/data/WatchLaterAddToast;&gt;;&gt;; | not-tested |
| classes30.dex:56629:POST | POST | https://api.bilibili.com/x/v3/fav/toview/adds | Field:resources, Field:toview_version, Field:spmid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/watchlater/data/WatchLaterAddToast;&gt;;&gt;; | not-tested |
| classes30.dex:56630:POST | POST | https://api.bilibili.com/x/v2/history/toview/clear | Field:clean_type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/okretro/BaseResponse;&gt;;&gt;; | not-tested |
| classes30.dex:56631:POST | POST | https://api.bilibili.com/x/v2/history/toview/v2/dels | Field:resources | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/okretro/BaseResponse;&gt;;&gt;; | not-tested |
| classes30.dex:56632:GET | GET | https://api.bilibili.com/x/v2/history/toview/v2/list | Query:start_key, Query:asc, Query:sort_field, Query:split_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/watchlater/data/WatchLaterResponse;&gt;;&gt;; | not-tested |
| classes30.dex:57646:POST | POST | https://api.bilibili.com/x/v2/history/toview/add | Field:access_key, Field:aid, Field:from | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes30.dex:57647:POST | POST | https://api.bilibili.com/x/v2/history/toview/del | Field:access_key, Field:aid, Field:viewed | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes30.dex:65029:GET | GET | https://app.bilibili.com/x/v2/favorite/topic | Query:access_key, Query:pn, Query:ps | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/favorite/api/FavTopicData;&gt;;&gt;; | not-tested |
| classes30.dex:65030:GET | GET | https://app.bilibili.com/x/v2/favorite/second/tab | Query:access_key, Query:tab | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/favorite/api/FavSecondTabData;&gt;;&gt;; | not-tested |
| classes7.dex:62338:GET | GET | https://app.bilibili.com/x/v2/favorite/channel | Query:ps, Query:offset | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/channel/RspCollectionChannel;&gt;;&gt;; | not-tested |
| classes7.dex:62364:POST | POST | https://api.bilibili.com/x/v3/fav/resource/copy | Query:mid, Query:resources, Query:src_media_id, Query:tar_media_id | LlC0/a&lt;Lcom/bilibili/playset/api/GeneralMsgResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes7.dex:62365:POST | POST | https://api.bilibili.com/x/v2/history/toview/copy | Field:resources, Field:tar_media_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes7.dex:62366:POST | POST | https://api.bilibili.com/x/v3/fav/resource/move | Query:src_media_id, Query:tar_media_id, Query:resources | LlC0/a&lt;Lcom/bilibili/playset/api/GeneralMsgResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes7.dex:62367:POST | POST | https://api.bilibili.com/x/v2/history/toview/move | Field:resources, Field:tar_media_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes7.dex:62368:GET | GET | https://api.bilibili.com/x/v3/fav/resource/infos | Query:resources | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/playset/api/MultitypeMedia;&gt;;&gt;;&gt;; | not-tested |
| classes7.dex:62369:GET | GET | https://api.bilibili.com/x/v3/fav/resource/infos | Query:resources, Query:folder_mid, Query:folder_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/ArrayList&lt;Lcom/bilibili/playset/api/MultitypeMedia;&gt;;&gt;;&gt;; | not-tested |
| classes7.dex:62370:POST | POST | https://api.bilibili.com/x/v3/fav/tab/clean_invalid | Field:fid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/okretro/BaseResponse;&gt;;&gt;; | not-tested |
| classes7.dex:62371:POST | POST | https://api.bilibili.com/x/v3/fav/resource/clean | Query:media_id | LlC0/a&lt;Lcom/bilibili/playset/api/GeneralMsgResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes7.dex:62372:POST | POST | https://api.bilibili.com/x/v3/fav/folder/add | Field:access_key, Field:title, Field:intro, Field:cover, Field:privacy, Header:x-bili-gaia-vtoken | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/api/PlaySet;&gt;;&gt;; | not-tested |
| classes7.dex:62373:POST | POST | https://api.bilibili.com/x/v3/fav/tab/dels | Query:resources, Query:media_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/okretro/BaseResponse;&gt;;&gt;; | not-tested |
| classes7.dex:62374:POST | POST | https://api.bilibili.com/x/v3/fav/resource/batch-del | Query:resources, Query:media_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes7.dex:62376:POST | POST | https://api.bilibili.com/x/v3/fav/folder/del | Query:media_ids | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes7.dex:62378:POST | POST | https://api.bilibili.com/x/v3/fav/season/unfav | Query:season_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes7.dex:62380:POST | POST | https://api.bilibili.com/x/v3/fav/folder/edit | Field:access_key, Field:title, Field:intro, Field:cover, Field:privacy, Field:media_id, Header:x-bili-gaia-vtoken | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/api/PlaySet;&gt;;&gt;; | not-tested |
| classes7.dex:62381:POST | POST | https://api.bilibili.com/x/v3/fav/resource/batch-deal | Query:access_key, Query:resources, Query:add_media_ids, Query:del_media_ids, Query:from, Query:extra, Query:from_spmid, Query:spmid, Query:action_id, Header:x-bili-gaia-vtoken | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes7.dex:62382:POST | POST | https://api.bilibili.com/x/v3/fav/folder/fav | Query:media_id, Query:from_spmid, Query:spmid, Query:action_id, Header:x-bili-gaia-vtoken | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes7.dex:62383:GET | GET | https://api.bilibili.com/x/v3/fav/folder/created/list | Query:access_key, Query:up_mid, Query:pn, Query:ps, Query:rid, Query:type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/api/PlaySetPageData;&gt;;&gt;; | not-tested |
| classes7.dex:62384:GET | GET | https://api.bilibili.com/x/v3/fav/folder/created/list-all | Query:pn, Query:ps, Query:is_space, Query:up_mid | LlC0/a&lt;Lcom/bilibili/playset/api/GeneralMsgResponse&lt;Lcom/bilibili/playset/api/PlaySetPageData;&gt;;&gt;; | not-tested |
| classes7.dex:62385:GET | GET | https://api.bilibili.com/x/v3/fav/folder/created/list-all | Query:access_key, Query:up_mid, Query:rid, Query:type, Query:show_season, Query:extra | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/api/PlaySetPageData;&gt;;&gt;; | not-tested |
| classes7.dex:62386:GET | GET | https://api.bilibili.com/x/v3/fav/folder/collected/list | Query:access_key, Query:up_mid, Query:pn, Query:ps | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/api/PlaySetPageData;&gt;;&gt;; | not-tested |
| classes7.dex:62387:GET | GET | https://api.bilibili.com/x/v3/fav/folder/resources | Query:media_id, Query:pn | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/api/d;&gt;;&gt;; | not-tested |
| classes7.dex:62388:GET | GET | https://api.bilibili.com/x/v3/fav/resource/ids | Query:media_id, Query:pn | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/playset/playlist/entity/MediaId;&gt;;&gt;;&gt;; | not-tested |
| classes7.dex:62389:GET | GET | https://api.bilibili.com/x/v3/fav/resource/ids | Query:media_id, Query:pn, Query:sort | LlC0/a&lt;Lcom/bilibili/playset/api/GeneralMsgResponse&lt;Ljava/util/List&lt;Lcom/bilibili/playset/playlist/entity/MediaId;&gt;;&gt;;&gt;; | not-tested |
| classes7.dex:62390:GET | GET | https://api.bilibili.com/x/v3/fav/folder/space/v2 | Query:up_mid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/api/PlaySetGroups;&gt;;&gt;; | not-tested |
| classes7.dex:62393:GET | GET | https://api.bilibili.com/x/v3/fav/folder/space | Query:access_key, Query:up_mid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/playset/api/PlaySetGroup;&gt;;&gt;;&gt;; | not-tested |
| classes7.dex:62394:GET | GET | https://api.bilibili.com/x/v3/fav/folder/info | Query:media_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/api/MultitypePlaylist$Info;&gt;;&gt;; | not-tested |
| classes7.dex:62396:GET | GET | https://api.bilibili.com/x/v3/fav/folder/whitelist | Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Integer;&gt;;&gt;; | not-tested |
| classes7.dex:62397:POST | POST | https://api.bilibili.com/x/v3/fav/thump/up | Query:rid, Query:thumb_type, Query:type, Query:up_mid, Query:from_spmid, Query:spmid, Query:action_id, Header:x-bili-gaia-vtoken | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes7.dex:62398:GET | GET | https://api.bilibili.com/x/v3/fav/folder/clean-state | Query:media_id | LlC0/a&lt;Lcom/bilibili/playset/api/GeneralMsgResponse&lt;Ljava/lang/Integer;&gt;;&gt;; | not-tested |
| classes7.dex:62399:GET | GET | https://api.bilibili.com/x/v3/fav/resource/list | Query:media_id, Query:pn, Query:ps | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/api/PlaySetGroups$DefaultFolderGroup;&gt;;&gt;; | not-tested |
| classes7.dex:62400:GET | GET | https://api.bilibili.com/x/v3/fav/resource/list | Query:media_id, Query:pn, Query:ps, Query:type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/playlist/entity/PlaylistDetailBean;&gt;;&gt;; | not-tested |
| classes7.dex:62401:POST | POST | https://api.bilibili.com/x/v3/fav/statistics/count | Query:rid, Query:r_type, Query:cnt_type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes7.dex:62402:GET | GET | https://api.bilibili.com/x/v3/fav/resource/list | Query:media_id, Query:pn, Query:ps, Query:keyword, Query:type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/playlist/entity/PlaylistDetailBean;&gt;;&gt;; | not-tested |
| classes7.dex:62403:GET | GET | https://api.bilibili.com/x/v3/fav/tab/fav/search | Query:keyword, Query:start_oid, Query:start_otype, Query:search_count, Query:pn, Query:count, Query:media_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;LlJ0/b;&gt;;&gt;; | not-tested |
| classes7.dex:62404:POST | POST | https://api.bilibili.com/x/v3/fav/resource/sort | Query:sort, Query:media_id | LlC0/a&lt;Lcom/bilibili/playset/api/GeneralMsgResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes7.dex:62405:POST | POST | https://api.bilibili.com/x/v3/fav/folder/add_top | Field:fid, Field:add_top | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes7.dex:62406:POST | POST | https://api.bilibili.com/x/v3/fav/folder/unfav | Query:media_id, Query:from_spmid, Query:spmid, Query:action_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes7.dex:62407:POST | POST | https://api.bilibili.com/x/v3/fav/folder/unfav | Query:access_key, Query:media_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes7.dex:62622:POST | POST | https://api.bilibili.com/x/v3/fav/kid-playlist/create |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/baby/api/BabyPlaylistCreateResult;&gt;;&gt;; | not-tested |
| classes7.dex:62623:POST | POST | https://api.bilibili.com/x/v3/fav/kid-playlist/import |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/baby/api/BabyPlaylistImportResult;&gt;;&gt;; | not-tested |
| classes7.dex:62624:GET | GET | https://api.bilibili.com/x/v3/fav/kid-playlist/info |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/baby/api/BabyPlaylistInfo;&gt;;&gt;; | not-tested |

## gRPC

请求/响应角色默认仍为静态候选；View/View 已有单独实现核对。表格不代表已建立连接或验证认证。

| 路由 | 请求类型候选 | 响应类型候选 | 线上抽查 |
| --- | --- | --- | --- |
| /bilibili.polymer.list.v1.List/CheckAccount | Lcom/bapis/bilibili/polymer/list/CheckAccountReq; | Lcom/bapis/bilibili/polymer/list/CheckAccountReply; | not-tested |
| /bilibili.polymer.list.v1.List/FavoriteTab | Lcom/bapis/bilibili/polymer/list/FavoriteTabReq; | Lcom/bapis/bilibili/polymer/list/FavoriteTabReply; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category favorite --limit 10
node bin/bili-apis.mjs show "ID"
```
