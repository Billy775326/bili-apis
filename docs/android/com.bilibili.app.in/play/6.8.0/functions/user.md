# 用户与空间

<!-- android-edition:start -->
包名：`com.bilibili.app.in` · 渠道：Google Play · 版本：6.8.0（9180200）。

[全部版本](../../../../README.md) · [本包文档](../README.md) · [网页接口](../../../../../pc/README.md) · [基线元数据](../../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

用户资料、个人空间、主页和我的页面。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 72 条 HTTP 声明、7 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes10.dex:4729:GET | GET | https://app.bilibili.com/x/v2/space/brand/content | Query:spmid, Query:from_spmid, Query:access_key, Query:vmid, Query:ad_extra | Ljava/lang/Object; | not-tested |
| classes11.dex:1005:POST | POST | https://api.bilibili.com/x/member/app/face/update | Query:access_key, Part:face | LlC0/a&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; | not-tested |
| classes11.dex:1006:GET | GET | https://app.bilibili.com/x/v2/account/nft/setting/button |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/list/avatarcommon/api/AccountNFTButton;&gt;;&gt;; | not-tested |
| classes11.dex:1451:POST | POST | https://api.bilibili.com/x/member/app/face/nft/update | Field:mid, Field:nft_id | Ljava/lang/Object; | not-tested |
| classes11.dex:32383:POST | POST | https://api.bilibili.com/x/garb-digital/space/like | Field:mid, Field:nft_id, Field:action, Field:from | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliDigitalInfo$NftLikeData;&gt;;&gt;; | not-tested |
| classes11.dex:32386:POST | POST | https://api.bilibili.com/x/member/app/face/digitalKit/update | Field:width, Field:height, Field:upper_left_x, Field:upper_left_y, Field:digital_kit_id | LlC0/a&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; | not-tested |
| classes11.dex:32559:GET | GET | https://app.bilibili.com/x/v2/space/photo/top/list | Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceHeadList;&gt;;&gt;; | not-tested |
| classes11.dex:32560:GET | GET | https://app.bilibili.com/x/v2/space/media/home | Query:mid, Query:page_num, Query:page_size | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/AuthorMediaHome;&gt;;&gt;; | not-tested |
| classes11.dex:32561:GET | GET | https://app.bilibili.com/x/v2/space/media/season | Query:mid, Query:page_num, Query:page_size | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/AuthorMediaSeasonSeriesData;&gt;;&gt;; | not-tested |
| classes11.dex:32562:GET | GET | https://app.bilibili.com/x/v2/space/media/series | Query:mid, Query:page_num, Query:page_size | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/AuthorMediaSeasonSeriesData;&gt;;&gt;; | not-tested |
| classes11.dex:32563:GET | GET | https://app.bilibili.com/x/polymer/space/seasons_series_list_mobile | Query:mid, Query:page_num, Query:page_size | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/AuthorSeasonSeriesList;&gt;;&gt;; | not-tested |
| classes11.dex:32564:POST | POST | https://app.bilibili.com/x/v2/space/reserve | Query:sid, Query:reserve_total | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliReservationCardUpdate;&gt;;&gt;; | not-tested |
| classes11.dex:32565:POST | POST | https://app.bilibili.com/x/v2/space/reserve/cancel | Query:sid, Query:reserve_total | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliReservationCardUpdate;&gt;;&gt;; | not-tested |
| classes11.dex:32566:POST | POST | https://app.bilibili.com/x/v2/space/reserve/shareInfo | Query:dyn_id, Query:share_id, Query:share_mode | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliShareInfo$Wrapper;&gt;;&gt;; | not-tested |
| classes11.dex:32567:POST | POST | https://app.bilibili.com/x/v2/space/reserve/upCancel | Query:sid, Query:oid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes11.dex:32568:POST | POST | https://app.bilibili.com/x/v2/space/photo/top/set | Query:access_key, Query:id, Query:type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes11.dex:32569:POST | POST | https://app.bilibili.com/x/v2/space/archive/switch | Query:aid, Query:guest_hide_state | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/AuthorArchiveSwitchResponse;&gt;;&gt;; | not-tested |
| classes11.dex:32790:POST | POST | https://app.bilibili.com/x/v2/space/attention/mark | Field:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes11.dex:32791:POST | POST | https://app.bilibili.com/x/v2/space/coin/cancel | FieldMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes11.dex:32792:POST | POST | https://app.bilibili.com/x/v2/space/garb/dress | Field:access_key, Field:garb_id, Field:image_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes11.dex:32793:POST | POST | https://app.bilibili.com/x/v2/space/topphoto/reset | Field:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes11.dex:32794:POST | POST | https://app.bilibili.com/x/v2/space/garb/take_off | Field:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes11.dex:32795:GET | GET | https://app.bilibili.com/x/v2/space/garb/detail | Query:access_key, Query:vmid, Query:garb_id, Query:image_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceHeader$GarbDetail;&gt;;&gt;; | not-tested |
| classes11.dex:32796:GET | GET | https://app.bilibili.com/x/v2/space/garb/list | Query:access_key, Query:vmid, Query:ps, Query:pn | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceHeader$GarbList;&gt;;&gt;; | not-tested |
| classes11.dex:32797:GET | GET | https://app.bilibili.com/x/v2/space/upper/recmd?device=android | Query:access_key, Query:vmid, Query:page_num | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceRecommendUpperInfo;&gt;;&gt;; | not-tested |
| classes11.dex:32798:GET | GET | https://api.bilibili.com/x/space/setting/app | Query:mid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliUserSpaceSettingResponse;&gt;;&gt;; | not-tested |
| classes11.dex:32800:GET | GET | https://app.bilibili.com/x/v2/space/archive/charging | Query:vmid, Query:ps, Query:pn, Query:sort | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceVideoList;&gt;;&gt;; | not-tested |
| classes11.dex:32801:GET | GET | https://app.bilibili.com/x/v2/space/archive/cheese | Query:vmid, Query:season_id, Query:sort | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceVideoList;&gt;;&gt;; | not-tested |
| classes11.dex:32802:GET | GET | https://app.bilibili.com/x/v2/space/series | Query:vmid, Query:next, Query:series_id, Query:ps, Query:sort | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceVideoList;&gt;;&gt;; | not-tested |
| classes11.dex:32803:GET | GET | https://app.bilibili.com/x/v2/space/photo/arc/list | Query:pn, Query:ps | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceVideoList;&gt;;&gt;; | not-tested |
| classes11.dex:32804:GET | GET | https://app.bilibili.com/x/v2/space/archive/cursor | Query:vmid, Query:ps, Query:order, Query:sort, Query:aid, Query:from_view_aid, Query:include_cursor | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceVideoListV2;&gt;;&gt;; | business-error |
| classes11.dex:32805:GET | GET | https://app.bilibili.com/x/v2/space/bangumi | Query:access_key, Query:vmid, Query:pn, Query:ps | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceSeason;&gt;;&gt;; | not-tested |
| classes11.dex:32806:GET | GET | https://app.bilibili.com/x/v2/space/contribute | Query:access_key, Query:vmid, Query:pn, Query:ps | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceContributeList;&gt;;&gt;; | not-tested |
| classes11.dex:32807:GET | GET | https://app.bilibili.com/x/v2/space/digital/extra/info | Query:nft_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliDigitalInfo$Detail;&gt;;&gt;; | not-tested |
| classes11.dex:32808:GET | GET | https://app.bilibili.com/x/v2/space/coinarc | Query:access_key, Query:vmid, Query:pn, Query:ps | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceVideoList;&gt;;&gt;; | not-tested |
| classes11.dex:32809:GET | GET | https://app.bilibili.com/x/v2/space/likearc | Query:access_key, Query:vmid, Query:pn, Query:ps | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceVideoList;&gt;;&gt;; | not-tested |
| classes11.dex:32810:GET | GET | https://app.bilibili.com/x/v2/space/season/videos | Query:next, Query:ps, Query:season_id, Query:sort, Query:vmid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceVideoList;&gt;;&gt;; | not-tested |
| classes11.dex:32811:GET | GET | https://app.bilibili.com/x/v2/space | Query:access_key, Query:vmid, Query:name, Query:from, Query:ad_extra, Query:from_view_aid, Query:local_time | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpace;&gt;;&gt;; | not-tested |
| classes11.dex:32812:GET | GET | https://app.bilibili.com/x/v2/space/season | Query:access_key, Query:vmid, Query:pn, Query:ps | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceUgcSeasonList;&gt;;&gt;; | not-tested |
| classes11.dex:32813:POST | POST | https://app.bilibili.com/x/v2/space/report | Query:access_key, Query:mid, Query:reason | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes11.dex:32814:POST | POST | https://app.bilibili.com/x/v2/space/digital/bind | Field:item_id, Field:nft_id, Field:img_url, Field:card_id, Field:space_bg_type | LlC0/a&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; | not-tested |
| classes11.dex:32815:POST | POST | https://api.bilibili.com/x/space/privacy/batch/modify | Query:access_key, FieldMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes11.dex:32816:POST | POST | https://app.bilibili.com/x/v2/space/photo/top/upload | Query:access_key, Part:img_file | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliPostTopPicture;&gt;;&gt;; | not-tested |
| classes11.dex:34312:GET | GET | https://app.bilibili.com/x/v2/space | Query:vmid, Query:name, Query:from, Query:ad_extra, Query:from_view_aid, Query:local_time | LlC0/a&lt;Lokhttp3/ResponseBody;&gt;; | not-tested |
| classes11.dex:36317:POST | POST | https://app.bilibili.com/x/polymer/games/space/remove | Field:game_base_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lkotlin/Unit;&gt;;&gt;; | not-tested |
| classes11.dex:36318:GET | GET | https://app.bilibili.com/x/v2/space/game | Query:vmid, Query:pn, Query:ps | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/ui/pages/game/AuthorGamesWrapper;&gt;;&gt;; | not-tested |
| classes11.dex:49300:POST | POST | https://app.bilibili.com/x/v2/account/lessons/update | Field:access_key, Field:buvid, Field:pwd, Field:lessons_status, Field:device_model, Field:from | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes14.dex:2378:GET | GET | https://app.bilibili.com/x/v2/space/article | Query:access_Key, Query:vmid, Query:pn, Query:ps | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/column/api/response/BaseListItemData&lt;Lcom/bilibili/column/api/response/Column;&gt;;&gt;;&gt;; | not-tested |
| classes14.dex:62059:GET | GET | https://member.bilibili.com/x/app/up/info | Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/im/router/UpperShownRequester$UpperInfo;&gt;;&gt;; | not-tested |
| classes14.dex:63119:GET | GET | https://app.bilibili.com/x/v2/space/comic | Query:vmid, Query:ps, Query:pn | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Loa0/e;&gt;;&gt;; | not-tested |
| classes14.dex:63120:GET | GET | https://app.bilibili.com/x/v2/space/subcomic | Query:vmid, Query:ps, Query:pn | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Loa0/d;&gt;;&gt;; | not-tested |
| classes15.dex:848:POST | POST | https://app.bilibili.com/x/v2/account/config/set | Field:buvid, Field:access_key, Field:ad_special, Field:sensor_access | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes15.dex:32698:GET | GET | https://api.bilibili.com/x/member/app/nickfree |  | LlC0/a&lt;Lcom/bilibili/biligame/api/BiligameApiResponse&lt;Lcom/bilibili/biligame/api/site/NickFree;&gt;;&gt;; | not-tested |
| classes15.dex:32699:POST | POST | https://api.bilibili.com/x/member/app/uname/update | Query:uname, Query:source | LlC0/a&lt;Lcom/bilibili/biligame/api/BiligameApiResponse&lt;Lcom/bilibili/biligame/api/site/NickName;&gt;;&gt;; | not-tested |
| classes16.dex:9137:GET | GET | https://app.bilibili.com/x/v2/account/myinfo | Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/accountinfo/model/AccountInfo;&gt;;&gt;; | not-tested |
| classes17.dex:1022:POST | POST | https://app.bilibili.com/x/v2/account/bili_link/report | Field:id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/projection/internal/api/GlobalLinkActSubmitResponse;&gt;;&gt;; | not-tested |
| classes18.dex:21059:POST | POST | https://api.bilibili.com/x/member/app/pendant/equip?status=2 | Field:pid | Ljava/lang/Object; | not-tested |
| classes20.dex:24066:GET | GET | https://app.bilibili.com/x/v2/account/teenagers/timer/get | Query:access_key, Query:device_token | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/teenagersmode/model/TeenagersModeGetTime;&gt;;&gt;; | not-tested |
| classes20.dex:24067:POST | POST | https://app.bilibili.com/x/v2/account/teenagers/timer/set | Field:access_key, Field:time, Field:device_token | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes20.dex:24068:POST | POST | https://app.bilibili.com/x/v2/account/teenagers/update | Field:access_key, Field:device_token, Field:teenagers_status, Field:pwd, Field:wsxcde, Field:device_model, Field:sync, Field:from | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes20.dex:36735:GET | GET | https://app.bilibili.com/x/v2/feed/index/space/story/cursor | QueryMap:(内容未知), Query:need_translate, Query:reply_down_style | LlC0/a&lt;Lcom/bilibili/video/story/api/StorySpaceResponse;&gt;; | not-tested |
| classes22.dex:58892:GET | GET | https://member.bilibili.com/x/app/v1/user/profiles |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/studio/centerplus/network/entity/UpperProfiles;&gt;;&gt;; | not-tested |
| classes30.dex:50340:GET | GET | https://app.bilibili.com/x/v2/account/mine | Query:access_key, Query:bili_link_new, Query:from, Query:creative_info | LlC0/a&lt;Ltv/danmaku/bili/ui/main2/api/MineResponse&lt;Ltv/danmaku/bili/ui/main2/api/AccountMineV2;&gt;;&gt;; | not-tested |
| classes30.dex:50342:GET | GET | https://app.bilibili.com/x/v2/account/mine | Query:access_key, Query:bili_link_new, Query:from, Query:creative_info | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/main2/api/AccountMine;&gt;;&gt;; | not-tested |
| classes30.dex:54430:GET | GET | https://api.bilibili.com/x/member/app/birthday/changed |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/personinfo/api/BirthdayModified;&gt;;&gt;; | not-tested |
| classes30.dex:54431:GET | GET | https://api.bilibili.com/x/member/app/nickfree | Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes30.dex:54432:GET | GET | https://api.bilibili.com/x/member/app/point/flag | Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/personinfo/api/PointFlagBean;&gt;;&gt;; | not-tested |
| classes30.dex:54433:POST | POST | https://api.bilibili.com/x/member/app/birthday/update | Query:access_key, Field:birthday | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes30.dex:54434:POST | POST | https://api.bilibili.com/x/member/app/sex/update | Query:access_key, Field:sex | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes30.dex:54435:POST | POST | https://api.bilibili.com/x/member/app/sign/update | Query:access_key, Field:user_sign | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes30.dex:54436:POST | POST | https://api.bilibili.com/x/member/app/uname/update | Query:access_key, Field:uname | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/personinfo/api/PersonInfoModifyNameBean;&gt;;&gt;; | not-tested |
| classes30.dex:54437:GET | GET | https://api.bilibili.com/x/member/app/school |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/personinfo/api/BiliSchool;&gt;;&gt;; | not-tested |

## gRPC

请求/响应角色默认仍为静态候选；View/View 已有单独实现核对。表格不代表已建立连接或验证认证。

| 路由 | 请求类型候选 | 响应类型候选 | 线上抽查 |
| --- | --- | --- | --- |
| /bilibili.app.interface.v1.Space/SearchArchive | Lcom/bapis/bilibili/app/interfaces/v1/SearchArchiveReq; | Lcom/bapis/bilibili/app/interfaces/v1/SearchArchiveReply; | not-tested |
| /bilibili.app.interface.v1.Space/SearchDynamic | Lcom/bapis/bilibili/app/interfaces/v1/SearchDynamicReq; | Lcom/bapis/bilibili/app/interfaces/v1/SearchDynamicReply; | not-tested |
| /bilibili.app.interface.v1.Space/SearchTab | Lcom/bapis/bilibili/app/interfaces/v1/SearchTabReq; | Lcom/bapis/bilibili/app/interfaces/v1/SearchTabReply; | not-tested |
| /bilibili.app.interface.v1.Space/UpdateReserveStartTime | Lcom/bapis/bilibili/app/interfaces/v1/UpdateReserveStartTimeReq; | Lcom/bapis/bilibili/app/interfaces/v1/UpdateReserveStartTimeReply; | not-tested |
| /bilibili.app.mine.v1.Mine/DeviceFeature | Lcom/bapis/bilibili/app/mine/v1/DeviceFeatureReq; | Lcom/bapis/bilibili/app/mine/v1/DeviceFeatureResp; | not-tested |
| /bilibili.app.mine.v1.Mine/DisplayReport | Lcom/bapis/bilibili/app/mine/v1/DisplayReportReq; | Lcom/google/protobuf/Empty; | not-tested |
| /bilibili.app.mine.v1.Mine/PubModule | Lcom/bapis/bilibili/app/mine/v1/PubModuleReq; | Lcom/bapis/bilibili/app/mine/v1/PubModuleResp; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category user --limit 10
node bin/bili-apis.mjs show "ID"
```
