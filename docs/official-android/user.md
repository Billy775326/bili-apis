# 用户与空间

用户资料、个人空间、主页和我的页面。分类根据路由、域名与声明类名称推断，未验证业务行为。

官方 Android 9.19.0：79 条 HTTP 声明、7 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。

[返回分类](README.md) · [与 Play 对比](comparison.md)

## HTTP

参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。

| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |
| --- | --- | --- | --- | --- |
| classes10.dex:50725:GET | GET | https://app.bilibili.com/x/v2/account/myinfo | Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/accountinfo/model/AccountInfo;&gt;;&gt;; |
| classes12.dex:63792:POST | POST | https://api.bilibili.com/x/member/app/pendant/equip?status=2 | Field:pid | Ljava/lang/Object; |
| classes18.dex:27078:GET | GET | https://app.bilibili.com/x/v2/account/teenagers/timer/get | Query:access_key, Query:device_token | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/teenagersmode/model/TeenagersModeGetTime;&gt;;&gt;; |
| classes18.dex:27079:POST | POST | https://app.bilibili.com/x/v2/account/teenagers/timer/set | Field:access_key, Field:time, Field:device_token | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes18.dex:27080:POST | POST | https://app.bilibili.com/x/v2/account/teenagers/update | Field:access_key, Field:device_token, Field:teenagers_status, Field:pwd, Field:wsxcde, Field:device_model, Field:sync, Field:from | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes19.dex:13249:GET | GET | https://app.bilibili.com/x/v2/feed/index/space/story/cursor | QueryMap:(内容未知), Query:need_translate, Query:reply_down_style | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/video/story/api/StorySpaceResponse;&gt;; |
| classes28.dex:15174:GET | GET | https://app.bilibili.com/x/v2/account/mine | Query:access_key, Query:bili_link_new, Query:from, Query:creative_info | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/main2/api/AccountMine;&gt;;&gt;; |
| classes28.dex:15175:GET | GET | https://app.bilibili.com/x/v2/account/mine | Query:access_key, Query:bili_link_new, Query:from, Query:creative_info | Lcom/bilibili/okretro/call/BiliCall&lt;Ltv/danmaku/bili/ui/main2/api/MineResponse&lt;Ltv/danmaku/bili/ui/main2/api/AccountMineV2;&gt;;&gt;; |
| classes28.dex:38393:POST | POST | http://api.bilibili.com/x/member/app/face/digitalKit/update | Part:digital_kit_id, Part:face | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; |
| classes28.dex:43823:GET | GET | https://api.bilibili.com/x/member/app/birthday/changed |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/personinfo/api/BirthdayModified;&gt;;&gt;; |
| classes28.dex:43824:GET | GET | https://api.bilibili.com/x/member/app/nickfree | Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes28.dex:43825:GET | GET | https://api.bilibili.com/x/member/app/point/flag | Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/personinfo/api/PointFlagBean;&gt;;&gt;; |
| classes28.dex:43826:POST | POST | https://api.bilibili.com/x/member/app/birthday/update | Query:access_key, Field:birthday | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes28.dex:43827:POST | POST | https://api.bilibili.com/x/member/app/sex/update | Query:access_key, Field:sex | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes28.dex:43828:POST | POST | https://api.bilibili.com/x/member/app/sign/update | Query:access_key, Field:user_sign | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes28.dex:43829:POST | POST | https://api.bilibili.com/x/member/app/uname/update | Query:access_key, Field:uname | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/personinfo/api/PersonInfoModifyNameBean;&gt;;&gt;; |
| classes28.dex:43830:GET | GET | https://api.bilibili.com/x/member/app/school |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/personinfo/api/BiliSchool;&gt;;&gt;; |
| classes28.dex:43831:POST | POST | https://api.bilibili.com/x/member/app/face/update | Query:access_key, Part:face | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; |
| classes28.dex:59467:POST | POST | https://app.bilibili.com/x/v2/account/bili_link/report | Field:id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/projection/internal/api/GlobalLinkActSubmitResponse;&gt;;&gt;; |
| classes33.dex:61295:GET | GET | https://app.bilibili.com/x/v2/space/brand/content | Query:spmid, Query:from_spmid, Query:access_key, Query:vmid, Query:ad_extra | Ljava/lang/Object; |
| classes5.dex:4424:POST | POST | https://api.bilibili.com/x/member/app/face/nft/update | Field:mid, Field:nft_id | Ljava/lang/Object; |
| classes5.dex:7625:POST | POST | https://api.bilibili.com/x/garb-digital/space/like | Field:mid, Field:nft_id, Field:action, Field:from | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliDigitalInfo$NftLikeData;&gt;;&gt;; |
| classes5.dex:7628:POST | POST | https://api.bilibili.com/x/member/app/face/digitalKit/update | Field:width, Field:height, Field:upper_left_x, Field:upper_left_y, Field:digital_kit_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; |
| classes5.dex:7801:GET | GET | https://app.bilibili.com/x/v2/space/photo/top/list | Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceHeadList;&gt;;&gt;; |
| classes5.dex:7802:GET | GET | https://app.bilibili.com/x/v2/space/search | Query:keyword, Query:vmid, Query:highlight, Query:is_title, Query:pn, Query:ps | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/AuthorVideoList;&gt;;&gt;; |
| classes5.dex:7803:GET | GET | https://app.bilibili.com/x/v2/space/media/home | Query:mid, Query:page_num, Query:page_size | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/AuthorMediaHome;&gt;;&gt;; |
| classes5.dex:7804:GET | GET | https://app.bilibili.com/x/v2/space/media/season | Query:mid, Query:page_num, Query:page_size | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/AuthorMediaSeasonSeriesData;&gt;;&gt;; |
| classes5.dex:7805:GET | GET | https://app.bilibili.com/x/v2/space/media/series | Query:mid, Query:page_num, Query:page_size | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/AuthorMediaSeasonSeriesData;&gt;;&gt;; |
| classes5.dex:7806:GET | GET | https://app.bilibili.com/x/polymer/space/seasons_series_list_mobile | Query:mid, Query:page_num, Query:page_size | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/AuthorSeasonSeriesList;&gt;;&gt;; |
| classes5.dex:7807:POST | POST | https://app.bilibili.com/x/v2/space/reserve | Query:sid, Query:reserve_total | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliReservationCardUpdate;&gt;;&gt;; |
| classes5.dex:7808:POST | POST | https://app.bilibili.com/x/v2/space/reserve/cancel | Query:sid, Query:reserve_total | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliReservationCardUpdate;&gt;;&gt;; |
| classes5.dex:7809:POST | POST | https://app.bilibili.com/x/v2/space/reserve/shareInfo | Query:dyn_id, Query:share_id, Query:share_mode | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliShareInfo$Wrapper;&gt;;&gt;; |
| classes5.dex:7810:POST | POST | https://app.bilibili.com/x/v2/space/reserve/upCancel | Query:sid, Query:oid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:7811:POST | POST | https://app.bilibili.com/x/v2/space/photo/top/set | Query:access_key, Query:id, Query:type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:7812:POST | POST | https://app.bilibili.com/x/v2/space/archive/switch | Query:aid, Query:guest_hide_state | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/AuthorArchiveSwitchResponse;&gt;;&gt;; |
| classes5.dex:8032:POST | POST | https://app.bilibili.com/x/v2/space/attention/mark | Field:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:8033:POST | POST | https://app.bilibili.com/x/v2/space/coin/cancel | FieldMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:8034:POST | POST | https://app.bilibili.com/x/v2/space/garb/dress | Field:access_key, Field:garb_id, Field:image_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:8035:POST | POST | https://app.bilibili.com/x/v2/space/topphoto/reset | Field:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:8036:POST | POST | https://app.bilibili.com/x/v2/space/garb/take_off | Field:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:8037:GET | GET | https://app.bilibili.com/x/v2/space/garb/detail | Query:access_key, Query:vmid, Query:garb_id, Query:image_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceHeader$GarbDetail;&gt;;&gt;; |
| classes5.dex:8038:GET | GET | https://app.bilibili.com/x/v2/space/garb/list | Query:access_key, Query:vmid, Query:ps, Query:pn | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceHeader$GarbList;&gt;;&gt;; |
| classes5.dex:8039:GET | GET | https://app.bilibili.com/x/v2/space/upper/recmd?device=android | Query:access_key, Query:vmid, Query:page_num | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceRecommendUpperInfo;&gt;;&gt;; |
| classes5.dex:8040:GET | GET | https://api.bilibili.com/x/space/setting/app | Query:mid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliUserSpaceSettingResponse;&gt;;&gt;; |
| classes5.dex:8042:GET | GET | https://app.bilibili.com/x/v2/space/archive/charging | Query:vmid, Query:ps, Query:pn, Query:sort | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceVideoList;&gt;;&gt;; |
| classes5.dex:8043:GET | GET | https://app.bilibili.com/x/v2/space/archive/cheese | Query:vmid, Query:season_id, Query:sort | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceVideoList;&gt;;&gt;; |
| classes5.dex:8044:GET | GET | https://app.bilibili.com/x/v2/space/series | Query:vmid, Query:next, Query:series_id, Query:ps, Query:sort | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceVideoList;&gt;;&gt;; |
| classes5.dex:8045:GET | GET | https://app.bilibili.com/x/v2/space/archive | Query:vmid, Query:pn, Query:ps, Query:order | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceVideoList;&gt;;&gt;; |
| classes5.dex:8046:GET | GET | https://app.bilibili.com/x/v2/space/photo/arc/list | Query:pn, Query:ps | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceVideoList;&gt;;&gt;; |
| classes5.dex:8047:GET | GET | https://app.bilibili.com/x/v2/space/archive/cursor | Query:vmid, Query:ps, Query:order, Query:sort, Query:aid, Query:from_view_aid, Query:include_cursor | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceVideoListV2;&gt;;&gt;; |
| classes5.dex:8048:GET | GET | https://app.bilibili.com/x/v2/space/bangumi | Query:access_key, Query:vmid, Query:pn, Query:ps | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceSeason;&gt;;&gt;; |
| classes5.dex:8049:GET | GET | https://app.bilibili.com/x/v2/space/contribute | Query:access_key, Query:vmid, Query:pn, Query:ps | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceContributeList;&gt;;&gt;; |
| classes5.dex:8050:GET | GET | https://app.bilibili.com/x/v2/space/digital/extra/info | Query:nft_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliDigitalInfo$Detail;&gt;;&gt;; |
| classes5.dex:8051:GET | GET | https://app.bilibili.com/x/v2/space/coinarc | Query:access_key, Query:vmid, Query:pn, Query:ps | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceVideoList;&gt;;&gt;; |
| classes5.dex:8052:GET | GET | https://app.bilibili.com/x/v2/space/likearc | Query:access_key, Query:vmid, Query:pn, Query:ps | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceVideoList;&gt;;&gt;; |
| classes5.dex:8053:GET | GET | https://app.bilibili.com/x/v2/space/season/videos | Query:next, Query:ps, Query:season_id, Query:sort, Query:vmid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceVideoList;&gt;;&gt;; |
| classes5.dex:8054:GET | GET | https://app.bilibili.com/x/v2/space | Query:access_key, Query:vmid, Query:name, Query:from, Query:ad_extra, Query:from_view_aid, Query:local_time | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpace;&gt;;&gt;; |
| classes5.dex:8055:GET | GET | https://app.bilibili.com/x/v2/space/season | Query:access_key, Query:vmid, Query:pn, Query:ps | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliSpaceUgcSeasonList;&gt;;&gt;; |
| classes5.dex:8056:POST | POST | https://app.bilibili.com/x/v2/space/report | Query:access_key, Query:mid, Query:reason | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:8057:POST | POST | https://app.bilibili.com/x/v2/space/digital/bind | Field:item_id, Field:nft_id, Field:img_url, Field:card_id, Field:space_bg_type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; |
| classes5.dex:8058:POST | POST | https://api.bilibili.com/x/space/privacy/batch/modify | Query:access_key, FieldMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:8059:POST | POST | https://app.bilibili.com/x/v2/space/photo/top/upload | Query:access_key, Part:img_file | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliPostTopPicture;&gt;;&gt;; |
| classes5.dex:9187:GET | GET | https://app.bilibili.com/x/v2/space | Query:vmid, Query:name, Query:from, Query:ad_extra, Query:from_view_aid, Query:local_time | Lcom/bilibili/okretro/call/BiliCall&lt;Lokhttp3/ResponseBody;&gt;; |
| classes5.dex:10680:POST | POST | https://app.bilibili.com/x/polymer/games/space/remove | Field:game_base_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lkotlin/Unit;&gt;;&gt;; |
| classes5.dex:10681:GET | GET | https://app.bilibili.com/x/v2/space/game | Query:vmid, Query:pn, Query:ps | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/ui/pages/game/AuthorGamesWrapper;&gt;;&gt;; |
| classes5.dex:23350:GET | GET | https://app.bilibili.com/x/v2/account/mode/status | Query:access_key, Query:buvid, Query:device_token | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/app/comm/restrict/lessonsmode/core/ModeStatus;&gt;;&gt;;&gt;; |
| classes5.dex:23351:POST | POST | https://app.bilibili.com/x/v2/account/lessons/update | Field:access_key, Field:buvid, Field:pwd, Field:lessons_status, Field:device_model, Field:from | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:46295:GET | GET | https://app.bilibili.com/x/v2/account/nft/setting/button |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/list/avatarcommon/api/AccountNFTButton;&gt;;&gt;; |
| classes5.dex:57830:POST | POST | https://app.bilibili.com/x/v2/account/config/set | Field:buvid, Field:access_key, Field:ad_special, Field:sensor_access | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:61898:POST | POST | https://api.bilibili.com/x/member/app/face/update | Query:access_key, Part:face | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; |
| classes6.dex:13536:GET | GET | https://api.bilibili.com/x/member/app/nickfree |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/biligame/api/BiligameApiResponse&lt;Lcom/bilibili/biligame/api/site/NickFree;&gt;;&gt;; |
| classes6.dex:13537:POST | POST | https://api.bilibili.com/x/member/app/uname/update | Query:uname, Query:source | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/biligame/api/BiligameApiResponse&lt;Lcom/bilibili/biligame/api/site/NickName;&gt;;&gt;; |
| classes6.dex:43252:GET | GET | https://member.bilibili.com/x/app/v1/user/profiles |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/studio/centerplus/network/entity/UpperProfiles;&gt;;&gt;; |
| classes9.dex:20224:GET | GET | https://api.vc.bilibili.com/account/v1/user/cards | Query:uids | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/bplus/im/entity/UserCard;&gt;;&gt;;&gt;; |
| classes9.dex:34012:GET | GET | https://app.bilibili.com/x/v2/space/article | Query:access_key, Query:vmid, Query:pn, Query:ps | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/column/api/response/ColumnAuthorList;&gt;;&gt;; |
| classes9.dex:44915:GET | GET | https://app.bilibili.com/x/v2/space/article | Query:access_Key, Query:vmid, Query:pn, Query:ps | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/column/api/response/BaseListItemData&lt;Lcom/bilibili/column/api/response/Column;&gt;;&gt;;&gt;; |
| classes9.dex:45652:GET | GET | https://member.bilibili.com/x/app/up/info | Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/im/router/UpperShownRequester$UpperInfo;&gt;;&gt;; |
| classes9.dex:62928:GET | GET | https://app.bilibili.com/x/v2/space/subcomic | Query:vmid, Query:ps, Query:pn | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lhpt;&gt;;&gt;; |
| classes9.dex:62929:GET | GET | https://app.bilibili.com/x/v2/space/comic | Query:vmid, Query:ps, Query:pn | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lipt;&gt;;&gt;; |

## gRPC

请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。

| 路由 | 请求类型候选 | 响应类型候选 |
| --- | --- | --- |
| /bilibili.app.interface.v1.Space/SearchArchive | Lcom/bapis/bilibili/app/interfaces/v1/SearchArchiveReq; | Lcom/bapis/bilibili/app/interfaces/v1/SearchArchiveReply; |
| /bilibili.app.interface.v1.Space/SearchDynamic | Lcom/bapis/bilibili/app/interfaces/v1/SearchDynamicReq; | Lcom/bapis/bilibili/app/interfaces/v1/SearchDynamicReply; |
| /bilibili.app.interface.v1.Space/SearchTab | Lcom/bapis/bilibili/app/interfaces/v1/SearchTabReq; | Lcom/bapis/bilibili/app/interfaces/v1/SearchTabReply; |
| /bilibili.app.interface.v1.Space/UpdateReserveStartTime | Lcom/bapis/bilibili/app/interfaces/v1/UpdateReserveStartTimeReq; | Lcom/bapis/bilibili/app/interfaces/v1/UpdateReserveStartTimeReply; |
| /bilibili.app.mine.v1.Mine/DeviceFeature | Lcom/bapis/bilibili/app/mine/v1/DeviceFeatureReq; | Lcom/bapis/bilibili/app/mine/v1/DeviceFeatureResp; |
| /bilibili.app.mine.v1.Mine/DisplayReport | Lcom/bapis/bilibili/app/mine/v1/DisplayReportReq; | Lcom/google/protobuf/Empty; |
| /bilibili.app.mine.v1.Mine/PubModule | Lcom/bapis/bilibili/app/mine/v1/PubModuleReq; | Lcom/bapis/bilibili/app/mine/v1/PubModuleResp; |

```sh
node bin/bili-apis.mjs --edition official list --category user --limit 10
node bin/bili-apis.mjs --edition official show "ID"
```
