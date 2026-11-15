# HTTP 声明目录

<!-- android-edition:start -->
包名：`com.bilibili.app.in` · 渠道：Google Play · 版本：6.8.0（9180200）。

[全部版本](../../../README.md) · [本包文档](README.md) · [网页接口](../../../../pc/README.md) · [基线元数据](../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

共 2325 条声明，去重动词/路径 2038 组。来源为 DEX 方法注解；BaseUrl 拼接结果为候选，不包含拦截器运行时改写。参数注解、泛型返回类型及来源索引见 [JSON](../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/http.json)。

| ID | 方法 | 路径 | BaseUrl 声明 | 参数注解 |
| --- | --- | --- | --- | --- |
| classes.dex:53424:GET | GET | /xlive/play-gateway/room/brief | https://api.live.bilibili.com | Query:room_id |
| classes.dex:53425:GET | GET | /xlive/app-room/v2/index/getRoomPlayInfo | https://api.live.bilibili.com | Query:room_id, Query:no_playurl, Query:qn, Query:free_type, Query:http, Query:dolby, Query:network, Query:mask, Query:media_type, Query:only_video, Query:play_type, Query:protocol, Query:format, Query:codec, Query:device_name, Query:eotf, Query:special_scenario, Query:supported_drms, Header:X-Live-Room-Password, Header:X-Live-Room-B-Staff-Token |
| classes10.dex:19:POST | POST | mgk/api/open_api/v1/form_data/phone | https://cm.bilibili.com/ | Body:map/body/dynamic |
| classes10.dex:20:POST | POST | mgk/api/open_api/v1/form/ttcode | https://cm.bilibili.com/ | Body:map/body/dynamic |
| classes10.dex:21:POST | POST | mgk/api/open_api/v1/form_data/page/{page_id} | https://cm.bilibili.com/ | Path:page_id, QueryMap:map/body/dynamic, Body:map/body/dynamic |
| classes10.dex:22:POST | POST | mgk/api/open_api/v1/wechat/package/data/page/{page_id} | https://cm.bilibili.com/ | Path:page_id, QueryMap:map/body/dynamic, Body:map/body/dynamic |
| classes10.dex:4426:POST | POST | /xlive/app-room/v1/dM/pin | https://api.live.bilibili.com | Field:action, Field:room_id, Field:id_str, Field:msg |
| classes10.dex:4687:POST | POST | /xlive/app-ucenter/v1/follow_card/follow_card/AddFollowCardShowTime | https://api.live.bilibili.com | Field:uid, Field:room_id |
| classes10.dex:4729:GET | GET | /x/v2/space/brand/content | https://app.bilibili.com | Query:spmid, Query:from_spmid, Query:access_key, Query:vmid, Query:ad_extra |
| classes10.dex:52191:GET | GET | personal-mgk/api/open_api/v1/comment/component/check/permission | https://b.bilibili.com/ | QueryMap:map/body/dynamic |
| classes10.dex:53255:GET | GET | live/activity/participation | https://cm.bilibili.com/cmoon/api/open_api/ | Query:activity_id, Query:room_id |
| classes10.dex:53256:GET | GET | live/activity/info | https://cm.bilibili.com/cmoon/api/open_api/ | Query:room_id |
| classes10.dex:53257:POST | POST | live/activity/answer | https://cm.bilibili.com/cmoon/api/open_api/ | Body:map/body/dynamic, Query:access_key |
| classes10.dex:53600:GET | GET | /bce/sunspot/facade/public/api/live/search | https://cm.bilibili.com | QueryMap:map/body/dynamic |
| classes10.dex:53609:GET | GET | /xlive/app-ucenter/v1/ad/adLiveGame/getAdLiveGameMaterial | https://api.live.bilibili.com | QueryMap:map/body/dynamic |
| classes10.dex:53610:GET | GET | /xlive/e-commerce-interface/v1/ecommerce-user/report_blue_v_card_click | https://api.live.bilibili.com | Query:ruid, Query:creative_id |
| classes10.dex:53684:GET | GET | game/live/large_card_material | https://line3-h5-mobile-api.biligame.com/ | QueryMap:map/body/dynamic |
| classes10.dex:53685:POST | POST | game/live/live_card/clicked_record | https://line3-h5-mobile-api.biligame.com/ | QueryMap:map/body/dynamic |
| classes10.dex:58678:GET | GET | /x/custom_activity/cny2026/redpacket/list | https://api.bilibili.com | Query:room_id |
| classes10.dex:58679:GET | GET | /x/custom_activity/cny2026/redpacket/result | https://api.bilibili.com | Query:room_id, Query:packet_id |
| classes10.dex:58680:POST | POST | /x/custom_activity/cny2026/redpacket/join | https://api.bilibili.com | Field:cny_red_packet_ts, Field:token, Field:packet_id, Field:room_id |
| classes10.dex:58681:GET | GET | /xlive/app-ucenter/v1/dMReport/ForReason | https://api.live.bilibili.com |  |
| classes10.dex:58682:POST | POST | /xlive/app-ucenter/v1/dMReport/Report | https://api.live.bilibili.com | Field:roomid, Field:tuid, Field:msg, Field:reason, Field:reason_id, Field:danmaku_ts, Field:danmaku_sign, Field:file_id, Field:dm_type, Field:id_str |
| classes10.dex:58683:POST | POST | /xlive/app-ucenter/v1/banned/AddShieldKeyword | https://api.live.bilibili.com | Field:keyword |
| classes10.dex:58684:POST | POST | /xlive/app-ucenter/v1/banned/AddShieldUser | https://api.live.bilibili.com | Field:shield_uid |
| classes10.dex:58685:POST | POST | /xlive/app-ucenter/v1/banned/DelShieldUser | https://api.live.bilibili.com | Field:shield_uid |
| classes10.dex:58686:POST | POST | /xlive/app-ucenter/v1/banned/GetShieldKeywordList | https://api.live.bilibili.com |  |
| classes10.dex:58687:GET | GET | /xlive/app-ucenter/v1/banned/GetShieldUserList | https://api.live.bilibili.com |  |
| classes10.dex:58688:POST | POST | /xlive/app-ucenter/v1/banned/DelShieldKeyword | https://api.live.bilibili.com | Field:keyword |
| classes10.dex:58697:POST | POST | /xlive/app-room/v1/dm/interaction/doVote | https://api.live.bilibili.com | Field:room_id, Field:interaction_id, Field:option_id, Field:vote_id, Field:msg, Field:rnd, Field:live_id |
| classes10.dex:58698:GET | GET | /xlive/app-room/v1/dm/interaction/detail | https://api.live.bilibili.com | Query:id |
| classes10.dex:58699:POST | POST | /xlive/app-room/v2/multiUserConn/BidUp | https://api.live.bilibili.com | Field:room_id, Field:ruid, Field:conn_type, Field:add_amount |
| classes10.dex:58700:GET | GET | /xlive/app-room/v2/multiUserConn/ApplicationList | https://api.live.bilibili.com | Query:room_id |
| classes10.dex:58701:GET | GET | /xlive/app-room/v2/multiUserConn/PreBidUp | https://api.live.bilibili.com | Query:ruid, Query:room_id, Query:conn_type |
| classes10.dex:58702:POST | POST | /xlive/app-room/v2/multiUserConn/Apply | https://api.live.bilibili.com | Field:room_id, Field:apply_type, Field:msg, Field:jumpfrom, Field:track_id, Field:pay_amount, Field:action_id |
| classes10.dex:58843:GET | GET | /xlive/app-interface/v2/index/myFollowing | https://api.live.bilibili.com | Query:build, Query:platform |
| classes10.dex:58844:POST | POST | /xlive/app-interface/v2/index/removeViewHistory | https://api.live.bilibili.com | Field:build, Field:kids, Field:platform |
| classes10.dex:58845:GET | GET | /xlive/app-interface/v2/index/viewHistory | https://api.live.bilibili.com | Query:build, Query:next, Query:page_size, Query:platform |
| classes10.dex:58896:POST | POST | /xlive/app-room/v1/universalInteract/Handle | https://api.live.bilibili.com | Field:peer_uid, Field:biz_session_id, Field:action, Field:action_type, Field:source, Field:room_id |
| classes10.dex:58897:GET | GET | /xlive/app-room/v1/multiVoice/MultiVoiceApplicationList | https://api.live.bilibili.com | Query:anchor_uid |
| classes10.dex:58898:POST | POST | /xlive/app-room/v2/multiVoice/ApplicationReply | https://api.live.bilibili.com | Field:uid, Field:mid, Field:reply_type, Header:X-Event-TraceID |
| classes10.dex:58899:POST | POST | /xlive/app-room/v2/multiVoice/Application | https://api.live.bilibili.com | Field:event, Field:uid, Field:want_position, Field:cdn, Header:X-Event-TraceID |
| classes10.dex:58900:POST | POST | /xlive/app-room/v1/multiVoice/UpdateLiveRoomSingleUnread | https://api.live.bilibili.com | Field:talker_id |
| classes10.dex:58901:POST | POST | /xlive/app-blink/v1/preLive/CreateRoom | https://api.live.bilibili.com | Field:scene |
| classes10.dex:58902:GET | GET | /xlive/app-room/v1/multiVoice/GetPeipeiIdentity | https://api.live.bilibili.com |  |
| classes10.dex:58903:GET | GET | /xlive/app-room/v1/multiVoice/InvitationList | https://api.live.bilibili.com | Query:mid |
| classes10.dex:58904:POST | POST | /xlive/app-room/v2/multiVoice/Invitation | https://api.live.bilibili.com | Field:uid, Field:mid, Field:want_position, Header:X-Event-TraceID |
| classes10.dex:58905:GET | GET | /xlive/app-room/v1/multiVoice/QueryChatList | https://api.live.bilibili.com | Query:max_sess_ts, Query:room_id |
| classes10.dex:58906:POST | POST | /xlive/app-room/v1/universalInteract/Kick | https://api.live.bilibili.com | Field:biz_session_id, Field:peer_uid, Field:anchor_uid, Field:room_id, Header:X-Event-TraceID |
| classes10.dex:58907:POST | POST | /xlive/app-room/v2/universalInteract/SwitchSpotlight | https://api.live.bilibili.com | Field:biz_session_id, Field:switch_mode, Field:spotlight_uid, Field:room_id |
| classes10.dex:58908:POST | POST | /xlive/pk-interface/multiVoice/MVVideoInviteFeedback | https://api.live.bilibili.com | Field:biz_session_id, Field:room_id, Field:inviter_uid, Field:action |
| classes10.dex:58940:GET | GET | /xlive/app-room/v1/masterInfo/get_master_info | https://api.live.bilibili.com | Query:uid |
| classes10.dex:58941:GET | GET | /xlive/app-ucenter/v2/livePanel/tabs | https://api.live.bilibili.com | Query:room_id, Query:room_type, Query:panel_type, Query:is_entry_room |
| classes10.dex:58942:GET | GET | /xlive/app-ucenter/v1/official_room/officialRoom/GetOfficialRoomEvent | https://api.live.bilibili.com | Query:room_id |
| classes10.dex:58943:GET | GET | /xlive/app-room/v1/dM/gethistory | https://api.live.bilibili.com | Query:room_id, Query:scene, Header:X-Live-Room-Password, Query:room_type |
| classes10.dex:58944:POST | POST | /xlive/app-room/v1/dm/interaction/doPlacement | https://api.live.bilibili.com | Field:interaction_id, Field:room_id, Field:type, Field:sub_type, Field:relative_id |
| classes10.dex:58945:GET | GET | /xlive/app-room/v1/index/getInfoByUser | https://api.live.bilibili.com | Query:room_id, Query:from, Query:task_id, Query:jump_from, Query:support_type, Query:not_mock_enter_effect, Query:action, Query:share_reflow, Header:X-Live-Room-Password |
| classes10.dex:58946:POST | POST | /xlive/app-ucenter/v1/guide/guide/setUserGuideStatus | https://api.live.bilibili.com | Field:uid, Field:guide_type |
| classes10.dex:58947:POST | POST | /xlive/app-ucenter/v2/livePanel/AckIconMessage | https://api.live.bilibili.com | Field:biz_id, Field:uid, Field:icon_widget, Field:widget_id |
| classes10.dex:58976:POST | POST | /xlive/open-interface/v2/rtc/getJoinToken | https://api.live.bilibili.com | Body:map/body/dynamic |
| classes10.dex:62001:POST | POST | mall-c/cart/na/sku/new | https://mall.bilibili.com/ | Query:access_key, Body:map/body/dynamic |
| classes10.dex:63538:POST | POST | /x/v3/fav/recommend/deal | https://api.bilibili.com | Field:add, Field:item_id, Field:content_id, Field:content_type, Field:up_mid, Field:comment_id |
| classes10.dex:63894:POST | POST | /v1/InteractGateway/LeaveChannel | https://live-open.biliapi.com | Body:map/body/dynamic, HeaderMap:map/body/dynamic |
| classes10.dex:63895:POST | POST | /v1/InteractGateway/JoinChannel | https://live-open.biliapi.com | Body:map/body/dynamic, HeaderMap:map/body/dynamic |
| classes10.dex:63896:POST | POST | /v1/InteractGateway/CreateChannel | https://live-open.biliapi.com | Body:map/body/dynamic, HeaderMap:map/body/dynamic |
| classes10.dex:64101:GET | GET | /x/v2/feed/nf | https://app.bilibili.com | Query:goto, Query:id, Query:up_id, Query:up_name, Query:jumpgoto, Query:video_mode, Query:column, Query:tname, Query:from, Query:is_second_panel, Query:title |
| classes11.dex:1005:POST | POST | /x/member/app/face/update | https://api.bilibili.com | Query:access_key, Part:face |
| classes11.dex:1006:GET | GET | /x/v2/account/nft/setting/button | https://app.bilibili.com |  |
| classes11.dex:1059:POST | POST | /x/share/placard | https://api.bilibili.com | FieldMap:map/body/dynamic |
| classes11.dex:1451:POST | POST | /x/member/app/face/nft/update | https://api.bilibili.com | Field:mid, Field:nft_id |
| classes11.dex:2921:GET | GET | pugv/app/season/page | https://api.bilibili.com | Query:mid, Query:pn, Query:ps |
| classes11.dex:9543:POST | POST | /x/v2/history/report | https://api.bilibili.com | Field:cid, Field:aid, Field:sid, Field:epid, Field:progress, Field:type, Field:sub_type, Field:realtime, Field:device_ts, Field:start_ts, Field:duration, Field:source |
| classes11.dex:13745:POST | POST | cm/api/conversion/mobile/v2 | https://cm.bilibili.com/ | Body:map/body/dynamic, Header:Content-Encoding |
| classes11.dex:16046:GET | GET | /x/v2/dm/ad | https://api.bilibili.com | QueryMap:map/body/dynamic, Query:access_key |
| classes11.dex:18931:POST | POST | activity/api/app_api/v1/arc_heat/report | https://cm.bilibili.com/ | Body:map/body/dynamic |
| classes11.dex:19845:POST | POST | /x/activity/reserve/cancel | https://api.bilibili.com | Field:access_key, Field:sid, Field:csrf |
| classes11.dex:19846:POST | POST | /x/new-reserve/reserve/multi_cancel | https://api.bilibili.com | Field:access_key, Field:sids, Field:csrf |
| classes11.dex:19847:GET | GET | /x/activity/reserve/following | https://api.bilibili.com | Query:access_key, Query:sid |
| classes11.dex:19848:GET | GET | /x/new-reserve/reserve/multi_info | https://api.bilibili.com | Query:access_key, Query:sids |
| classes11.dex:19849:POST | POST | /x/activity/reserve | https://api.bilibili.com | Field:access_key, Field:sid, Field:csrf |
| classes11.dex:19850:POST | POST | /x/new-reserve/reserve/multi_add | https://api.bilibili.com | Field:access_key, Field:sids, Field:csrf |
| classes11.dex:21397:GET | GET | /x/feed/dislike/cancel | https://app.bilibili.com | QueryMap:map/body/dynamic |
| classes11.dex:21398:POST | POST | /x/v2/view/ad/dislike/cancel | https://app.bilibili.com | QueryMap:map/body/dynamic |
| classes11.dex:21399:GET | GET | /x/feed/dislike | https://app.bilibili.com | QueryMap:map/body/dynamic |
| classes11.dex:21400:POST | POST | /x/v2/view/ad/dislike | https://app.bilibili.com | FieldMap:map/body/dynamic |
| classes11.dex:22387:GET | GET | mgk/api/open_api/v1/landing_pages/{page_id} | https://cm.bilibili.com/ | Path:page_id, Query:access_key, Query:unicom_free, Query:mid, Query:buvid, QueryMap:map/body/dynamic |
| classes11.dex:22388:POST | POST | mgk/api/open_api/v1/archive | https://cm.bilibili.com/ | Body:map/body/dynamic |
| classes11.dex:24094:POST | POST | /pgc/pay/iaa/play/start | https://api.bilibili.com | Body:map/body/dynamic |
| classes11.dex:24095:POST | POST | /pgc/pay/iaa/ad/request | https://api.bilibili.com | Body:map/body/dynamic |
| classes11.dex:24096:POST | POST | /pgc/pay/iaa/ad/redeem | https://api.bilibili.com | Body:map/body/dynamic |
| classes11.dex:32380:GET | GET | /x/garb/digital/actList | https://api.bilibili.com | Query:mid |
| classes11.dex:32381:POST | POST | /x/garb/digital/collection | https://api.bilibili.com | Field:mid, Field:page_size, Field:use_scene, Field:act_type, Field:act_id, Field:next_start_point |
| classes11.dex:32382:GET | GET | /x/member/app/up/realname | https://api.bilibili.com | Query:up_mid |
| classes11.dex:32383:POST | POST | /x/garb-digital/space/like | https://api.bilibili.com | Field:mid, Field:nft_id, Field:action, Field:from |
| classes11.dex:32384:GET | GET | /x/vas/digital/space_info | https://api.bilibili.com | Query:nft_id, Query:vmid |
| classes11.dex:32385:GET | GET | /x/garb/digital/grant/remindInfo | https://api.bilibili.com | Query:mid |
| classes11.dex:32386:POST | POST | /x/member/app/face/digitalKit/update | https://api.bilibili.com | Field:width, Field:height, Field:upper_left_x, Field:upper_left_y, Field:digital_kit_id |
| classes11.dex:32559:GET | GET | /x/v2/space/photo/top/list | https://app.bilibili.com | Query:access_key |
| classes11.dex:32560:GET | GET | /x/v2/space/media/home | https://app.bilibili.com | Query:mid, Query:page_num, Query:page_size |
| classes11.dex:32561:GET | GET | /x/v2/space/media/season | https://app.bilibili.com | Query:mid, Query:page_num, Query:page_size |
| classes11.dex:32562:GET | GET | /x/v2/space/media/series | https://app.bilibili.com | Query:mid, Query:page_num, Query:page_size |
| classes11.dex:32563:GET | GET | /x/polymer/space/seasons_series_list_mobile | https://app.bilibili.com | Query:mid, Query:page_num, Query:page_size |
| classes11.dex:32564:POST | POST | /x/v2/space/reserve | https://app.bilibili.com | Query:sid, Query:reserve_total |
| classes11.dex:32565:POST | POST | /x/v2/space/reserve/cancel | https://app.bilibili.com | Query:sid, Query:reserve_total |
| classes11.dex:32566:POST | POST | /x/v2/space/reserve/shareInfo | https://app.bilibili.com | Query:dyn_id, Query:share_id, Query:share_mode |
| classes11.dex:32567:POST | POST | /x/v2/space/reserve/upCancel | https://app.bilibili.com | Query:sid, Query:oid |
| classes11.dex:32568:POST | POST | /x/v2/space/photo/top/set | https://app.bilibili.com | Query:access_key, Query:id, Query:type |
| classes11.dex:32569:POST | POST | /x/v2/space/archive/switch | https://app.bilibili.com | Query:aid, Query:guest_hide_state |
| classes11.dex:32790:POST | POST | /x/v2/space/attention/mark | https://app.bilibili.com | Field:access_key |
| classes11.dex:32791:POST | POST | /x/v2/space/coin/cancel | https://app.bilibili.com | FieldMap:map/body/dynamic |
| classes11.dex:32792:POST | POST | /x/v2/space/garb/dress | https://app.bilibili.com | Field:access_key, Field:garb_id, Field:image_id |
| classes11.dex:32793:POST | POST | /x/v2/space/topphoto/reset | https://app.bilibili.com | Field:access_key |
| classes11.dex:32794:POST | POST | /x/v2/space/garb/take_off | https://app.bilibili.com | Field:access_key |
| classes11.dex:32795:GET | GET | /x/v2/space/garb/detail | https://app.bilibili.com | Query:access_key, Query:vmid, Query:garb_id, Query:image_id |
| classes11.dex:32796:GET | GET | /x/v2/space/garb/list | https://app.bilibili.com | Query:access_key, Query:vmid, Query:ps, Query:pn |
| classes11.dex:32797:GET | GET | /x/v2/space/upper/recmd?device=android | https://app.bilibili.com | Query:access_key, Query:vmid, Query:page_num |
| classes11.dex:32798:GET | GET | https://api.bilibili.com/x/space/setting/app | https://app.bilibili.com | Query:mid |
| classes11.dex:32799:POST | POST | /x/v2/view/like | https://app.bilibili.com | FieldMap:map/body/dynamic |
| classes11.dex:32800:GET | GET | /x/v2/space/archive/charging | https://app.bilibili.com | Query:vmid, Query:ps, Query:pn, Query:sort |
| classes11.dex:32801:GET | GET | /x/v2/space/archive/cheese | https://app.bilibili.com | Query:vmid, Query:season_id, Query:sort |
| classes11.dex:32802:GET | GET | /x/v2/space/series | https://app.bilibili.com | Query:vmid, Query:next, Query:series_id, Query:ps, Query:sort |
| classes11.dex:32803:GET | GET | /x/v2/space/photo/arc/list | https://app.bilibili.com | Query:pn, Query:ps |
| classes11.dex:32804:GET | GET | /x/v2/space/archive/cursor | https://app.bilibili.com | Query:vmid, Query:ps, Query:order, Query:sort, Query:aid, Query:from_view_aid, Query:include_cursor |
| classes11.dex:32805:GET | GET | /x/v2/space/bangumi | https://app.bilibili.com | Query:access_key, Query:vmid, Query:pn, Query:ps |
| classes11.dex:32806:GET | GET | /x/v2/space/contribute | https://app.bilibili.com | Query:access_key, Query:vmid, Query:pn, Query:ps |
| classes11.dex:32807:GET | GET | /x/v2/space/digital/extra/info | https://app.bilibili.com | Query:nft_id |
| classes11.dex:32808:GET | GET | /x/v2/space/coinarc | https://app.bilibili.com | Query:access_key, Query:vmid, Query:pn, Query:ps |
| classes11.dex:32809:GET | GET | /x/v2/space/likearc | https://app.bilibili.com | Query:access_key, Query:vmid, Query:pn, Query:ps |
| classes11.dex:32810:GET | GET | /x/v2/space/season/videos | https://app.bilibili.com | Query:next, Query:ps, Query:season_id, Query:sort, Query:vmid |
| classes11.dex:32811:GET | GET | /x/v2/space | https://app.bilibili.com | Query:access_key, Query:vmid, Query:name, Query:from, Query:ad_extra, Query:from_view_aid, Query:local_time |
| classes11.dex:32812:GET | GET | /x/v2/space/season | https://app.bilibili.com | Query:access_key, Query:vmid, Query:pn, Query:ps |
| classes11.dex:32813:POST | POST | /x/v2/space/report | https://app.bilibili.com | Query:access_key, Query:mid, Query:reason |
| classes11.dex:32814:POST | POST | /x/v2/space/digital/bind | https://app.bilibili.com | Field:item_id, Field:nft_id, Field:img_url, Field:card_id, Field:space_bg_type |
| classes11.dex:32815:POST | POST | https://api.bilibili.com/x/space/privacy/batch/modify | https://app.bilibili.com | Query:access_key, FieldMap:map/body/dynamic |
| classes11.dex:32816:POST | POST | https://app.bilibili.com/x/v2/space/photo/top/upload | https://app.bilibili.com | Query:access_key, Part:img_file |
| classes11.dex:34312:GET | GET | https://app.bilibili.com/x/v2/space |  | Query:vmid, Query:name, Query:from, Query:ad_extra, Query:from_view_aid, Query:local_time |
| classes11.dex:34313:POST | POST |  |  | Url:map/body/dynamic, HeaderMap:map/body/dynamic, Body:map/body/dynamic |
| classes11.dex:34314:POST | POST |  |  | Url:map/body/dynamic, HeaderMap:map/body/dynamic, Body:map/body/dynamic |
| classes11.dex:36317:POST | POST | x/polymer/games/space/remove | https://app.bilibili.com | Field:game_base_id |
| classes11.dex:36318:GET | GET | x/v2/space/game | https://app.bilibili.com | Query:vmid, Query:pn, Query:ps |
| classes11.dex:39820:POST | POST | /dynamic_svr/v1/dynamic_svr/create_act_draw | https://api.vc.bilibili.com | Field:access_key, Field:oid, Field:type, Field:rp_id, Field:extension, Field:pictures, Field:from |
| classes11.dex:39821:POST | POST | /dynamic_repost/v1/dynamic_repost/reply | https://api.vc.bilibili.com | Field:access_key, Field:uid, Field:share_uid, Field:type, Field:rid, Field:content, Field:repost_code, Field:ctrl, Field:extension, Field:source |
| classes11.dex:39822:POST | POST | /api/v1/drawImage/upload | https://api.vc.bilibili.com | Body:map/body/dynamic |
| classes11.dex:39823:POST | POST | https://api.bilibili.com/x/dynamic/feed/draw/upload_bfs | https://api.vc.bilibili.com | Body:map/body/dynamic |
| classes11.dex:41444:POST | POST | /x/v2/reply/del | https://api.bilibili.com | Field:access_key, Field:oid, Field:type, Field:rpid |
| classes11.dex:41445:POST | POST | /x/v2/reply/del/combo | https://api.bilibili.com | Field:access_key, Field:oid, Field:type, Field:rpid |
| classes11.dex:41446:POST | POST | /x/v2/reply/lottery/del | https://api.bilibili.com | Field:access_key, Field:oid, Field:type, Field:lottery_id |
| classes11.dex:41447:POST | POST | /x/v2/reply/hate | https://api.bilibili.com | Field:access_key, Field:oid, Field:type, Field:rpid, Field:action, Field:scene, Field:ordering, Field:spmid, Field:from_spmid |
| classes11.dex:41448:GET | GET | /x/v2/reply/reply/cursor | https://api.bilibili.com | QueryMap:map/body/dynamic |
| classes11.dex:41449:GET | GET | /x/v2/reply/log | https://api.bilibili.com | Query:oid, Query:type, Query:pn, Query:ps |
| classes11.dex:41450:GET | GET | /x/v2/reply/msg_feed_list | https://api.bilibili.com | QueryMap:map/body/dynamic |
| classes11.dex:41451:POST | POST | /x/v2/reply/action | https://api.bilibili.com | Field:access_key, Field:oid, Field:type, Field:rpid, Field:action, Field:from, Field:scene, Field:ordering, Field:spmid, Field:from_spmid |
| classes11.dex:41452:POST | POST | /x/v2/reply/likebiz/nft | https://api.bilibili.com | Field:oid, Field:type, Field:rpid, Field:action, Field:id, Field:from |
| classes11.dex:41453:POST | POST | /x/v2/reply/add | https://api.bilibili.com | FieldMap:map/body/dynamic, Header:x-bili-gaia-vtoken |
| classes11.dex:41454:POST | POST | /x/v2/reply/top | https://api.bilibili.com | Field:access_key, Field:oid, Field:type, Field:rpid, Field:action |
| classes11.dex:42758:POST | POST | /x/emote/package/add | https://api.bilibili.com | Field:access_key, Field:business, Field:package_id |
| classes11.dex:42759:GET | GET | /x/emote/badge/status | https://api.bilibili.com | Query:access_key, Query:business, Query:badge |
| classes11.dex:42760:GET | GET | /x/emote/user/panel | https://api.bilibili.com | Query:access_key, Query:business, Query:up_mid, Query:aid, Query:hash_value |
| classes11.dex:42761:GET | GET | /x/emote/package | https://api.bilibili.com | Query:access_key, Query:business, Query:ids |
| classes11.dex:42762:GET | GET | /x/garb/v1/trade/panel/emoji | https://api.bilibili.com | Query:access_key, Query:item_id |
| classes11.dex:42763:GET | GET | /x/emote/creation/package/list | https://api.bilibili.com | Query:business, Query:up_mid, Query:aid |
| classes11.dex:42764:GET | GET | /x/emote/up/list | https://api.bilibili.com | Query:business, Query:mid |
| classes11.dex:42765:POST | POST | /x/emote/package/remove | https://api.bilibili.com | Field:access_key, Field:business, Field:package_id |
| classes11.dex:42766:POST | POST | /x/emote/user/recommend/remove | https://api.bilibili.com | Field:business, Field:package_id |
| classes11.dex:42767:POST | POST | /x/emote/badge/multi/update | https://api.bilibili.com | Field:access_key, Field:package_id, Field:emote_id |
| classes11.dex:42768:POST | POST | /x/emote/badge/update | https://api.bilibili.com | Field:access_key, Field:business, Field:badge |
| classes11.dex:42769:POST | POST | /x/emote/package/sort | https://api.bilibili.com | Field:access_key, Field:business, Field:sort |
| classes11.dex:43322:GET | GET | /x/feed/dislike/cancel | https://app.bilibili.com | QueryMap:map/body/dynamic |
| classes11.dex:43323:GET | GET | /x/feed/dislike | https://app.bilibili.com | QueryMap:map/body/dynamic |
| classes11.dex:43324:POST | POST | /x/v2/view/like | https://app.bilibili.com | Field:aid, Field:like, Field:spmid, Field:from_spmid, Field:from, Field:action_id, Field:track_id, Field:extend_fields |
| classes11.dex:43325:POST | POST | /x/v2/view/like/nologin | https://app.bilibili.com | Field:aid, Field:like, Field:spmid, Field:from_spmid, Field:from, Field:action, Field:action_id, Field:track_id, Field:extend_fields |
| classes11.dex:43331:POST | POST | /x/v3/fav/resource/deal | https://api.bilibili.com | Query:rid, Query:type, Query:add_media_ids, Query:spmid, Query:from_spmid, Query:action_id |
| classes11.dex:43332:POST | POST | /x/v3/fav/resource/deal | https://api.bilibili.com | Query:rid, Query:type, Query:add_media_ids |
| classes11.dex:43333:POST | POST | /x/v3/fav/resource/unfav-all | https://api.bilibili.com | Query:rid, Query:type |
| classes11.dex:43334:POST | POST | /x/v3/fav/resource/unfav-all | https://api.bilibili.com | Query:rid, Query:type, Query:spmid, Query:from_spmid, Query:action_id |
| classes11.dex:48992:GET | GET | /x/v2/anti_addiction/aggregation/status | https://app.bilibili.com | Query:biz_types |
| classes11.dex:49300:POST | POST | x/v2/account/lessons/update | https://app.bilibili.com | Field:access_key, Field:buvid, Field:pwd, Field:lessons_status, Field:device_model, Field:from |
| classes11.dex:57520:POST | POST | bce/sunspot/facade/public/api/mini_game/search |  | Body:map/body/dynamic |
| classes11.dex:57521:POST | POST | bce/sunspot/facade/public/api/mini_game/iaa_component |  | Body:map/body/dynamic |
| classes11.dex:57807:POST | POST | /x/channel/cancel | https://app.bilibili.com | Field:channel_id, Field:from, Field:from_spmid, Field:model_id |
| classes11.dex:57808:POST | POST | /x/channel/add | https://app.bilibili.com | Field:channel_id, Field:from, Field:from_spmid, Field:model_id |
| classes11.dex:59785:GET | GET | /x/v2/feed/index/story/game/status | https://app.bilibili.com | Query:game_base_id |
| classes11.dex:63092:GET | GET | /x/emote/v2/user/packages | https://api.bilibili.com | Query:access_key, Query:business |
| classes11.dex:63093:GET | GET | /x/emote/package/more | https://api.bilibili.com | Query:access_key, Query:business |
| classes11.dex:63094:GET | GET | /x/emote/package/pay | https://api.bilibili.com | Query:access_key, Query:business, Query:ps, Query:pn |
| classes11.dex:63095:GET | GET | /x/emote/package/search | https://api.bilibili.com | Query:business, Query:name, Query:ps, Query:pn |
| classes12.dex:1976:POST | POST | /x/v2/activity/follow | https://app.bilibili.com | Field:goto, Field:fid, Field:type, Field:from_spmid |
| classes12.dex:1977:POST | POST | /x/v2/activity/follow | https://app.bilibili.com | Field:goto, Field:fid, Field:type, Field:from_spmid |
| classes12.dex:1978:POST | POST | /x/v2/activity/follow | https://app.bilibili.com | Field:goto, Field:fid, Field:group_id, Field:item_id, Field:type, Field:from_spmid |
| classes12.dex:2379:POST | POST | /xlive/data-interface/v1/heartbeat/mobileHeartBeat | https://live-trace.bilibili.com | Field:platform, Field:uuid, Field:buvid, Field:seq_id, Field:room_id, Field:parent_id, Field:area_id, Field:timestamp, Field:secret_key, Field:client_sign, Field:watch_time, Field:up_id, Field:up_level, Field:jump_from, Field:gu_id, Field:play_type, Field:play_url, Field:s_time, Field:data_behavior_id, Field:data_source_id, Field:up_session, Field:visit_id, Field:watch_status, Field:click_id, Field:session_id, Field:player_type, Field:client_ts |
| classes12.dex:2380:POST | POST | /xlive/data-interface/v1/heartbeat/mobileEntry | https://live-trace.bilibili.com | Field:platform, Field:uuid, Field:buvid, Field:seq_id, Field:room_id, Field:parent_id, Field:area_id, Field:client_ts, Field:is_patch, Field:heart_beat, Field:up_id |
| classes12.dex:5961:POST | POST | /payplatform/pay/queryChannelList | https://pay.bilibili.com | Body:map/body/dynamic, Header:Cookie, Header:oaid |
| classes12.dex:5962:POST | POST | /payplatform/pay/pay | https://pay.bilibili.com | Body:map/body/dynamic, Header:Cookie |
| classes12.dex:5963:POST | POST | /payplatform/pay/query | https://pay.bilibili.com | Body:map/body/dynamic |
| classes12.dex:5964:POST | POST | /payplatform/pay/merge/pay | https://pay.bilibili.com | Body:map/body/dynamic, Header:Cookie |
| classes12.dex:5965:POST | POST | /payplatform/pay/contract | https://pay.bilibili.com | Body:map/body/dynamic, Header:Cookie |
| classes12.dex:5966:POST | POST | /payplatform/pay/quickpay | https://pay.bilibili.com | Body:map/body/dynamic, Header:Cookie |
| classes12.dex:5967:POST | POST | /payplatform/pay/v2/contract/query | https://pay.bilibili.com | Body:map/body/dynamic |
| classes12.dex:5968:POST | POST | /payplatform/pay/queryMainOrder | https://pay.bilibili.com | Body:map/body/dynamic |
| classes12.dex:5969:POST | POST |  | https://pay.bilibili.com | Body:map/body/dynamic, Url:map/body/dynamic |
| classes12.dex:5970:POST | POST | payplatform/pay/shield/send/verificationcode | https://pay.bilibili.com | Body:map/body/dynamic |
| classes12.dex:6211:GET | GET | /xlive/app-ucenter/v2/card/anchor | https://api.live.bilibili.com | Query:uid, Query:room_owner_uid, Query:entry_from |
| classes12.dex:7755:GET | GET | /xlive/app-ucenter/v2/title/GetNewAnimationInfo | https://api.live.bilibili.com | Query:uid, Query:is_need_eliminated, Query:id |
| classes12.dex:9360:POST | POST | /payplatform/iapfront/api/googlepay/purchase/verify | https://pay.bilibili.com | Body:map/body/dynamic |
| classes12.dex:9361:POST | POST | /payplatform/iapfront/api/googlepay/one/artificial | https://pay.bilibili.com | Body:map/body/dynamic |
| classes12.dex:9362:POST | POST | /payplatform/iapfront/api/googlepay/verify/consume | https://pay.bilibili.com | Body:map/body/dynamic |
| classes12.dex:10540:GET | GET | /xlive/app-interface/v2/index/feedback | https://api.live.bilibili.com | Query:room_id, Query:id, Query:id_type, Query:type, Query:page, Query:index, Query:card_type, Query:source, Query:from_spmid, Query:spmid, Query:goto, Query:track_id, Query:reason_id, Query:action_id, Query:state, Query:req_version |
| classes12.dex:21121:GET | GET | /xlive/app-room/v1/giftPanel/giftMessageV2 | https://api.live.bilibili.com | Query:room_id, Query:target_id, Query:gift_id, Query:price, Query:coin_type, Query:is_fans_club_ticket, Query:gift_attrs, Query:anchor_guest, Query:upgrade_original_gift_id |
| classes12.dex:21122:GET | GET | /xlive/app-room/v1/giftPanel/giftSource | https://api.live.bilibili.com | Query:gift_id |
| classes12.dex:21123:POST | POST | /xlive/app-room/v1/giftPopup/giftPopupVerify | https://api.live.bilibili.com | Field:room_id, Field:popup_type |
| classes12.dex:21124:POST | POST | /xlive/lottery-interface/v1/storm/Join | https://api.live.bilibili.com | Field:id |
| classes12.dex:21125:POST | POST | /xlive/gift-interface/v1/gift/setGiftTop | https://api.live.bilibili.com | Query:gift_id, Query:action |
| classes12.dex:22755:GET | GET | /xlive/lottery-interface/v1/lottery/getLotteryInfo | https://api.live.bilibili.com | Query:roomid, Query:need_guard |
| classes12.dex:22756:GET | GET | /xlive/lottery-interface/v1/red_pocket/get_result | https://api.live.bilibili.com | Query:id, Query:serverHash |
| classes12.dex:22757:GET | GET | /xlive/app-room/v1/index/getRoomPostEntryInfo | https://api.live.bilibili.com | Query:room_id |
| classes12.dex:22758:POST | POST | /xlive/lottery-interface/v1/red_pocket/join | https://api.live.bilibili.com | Field:roomId, Field:id, Field:spm_id, Field:jump_from, Field:session_id |
| classes12.dex:25830:POST | POST | /xlive/general-interface/v1/superChat/ackForAudit | https://api.live.bilibili.com | Field:ids |
| classes12.dex:25831:GET | GET | /av/v1/SuperChat/getMessage | https://api.live.bilibili.com | Query:order_id |
| classes12.dex:25832:GET | GET | /av/v1/SuperChat/forMsgReason | https://api.live.bilibili.com |  |
| classes12.dex:25833:POST | POST | /av/v1/SuperChat/remove | https://api.live.bilibili.com | Field:id |
| classes12.dex:25834:POST | POST | /av/v1/SuperChat/report | https://api.live.bilibili.com | Field:id, Field:roomid, Field:reason, Field:token, Field:ts |
| classes12.dex:25835:GET | GET | /av/v1/SuperChat/messageTranslate | https://api.live.bilibili.com | Query:room_id, Query:ruid, Query:parent_area_id, Query:area_id, Query:msg |
| classes12.dex:30116:GET | GET | /xlive/open-interface/v1/fetch_client_resource | https://api.live.bilibili.com | Query:business, Query:customize |
| classes12.dex:40276:POST | POST | x/v2/activity/receive | https://app.bilibili.com | Query:access_key, Query:goto, Query:fid, Query:state, Query:from_spmid |
| classes12.dex:40277:POST | POST | x/v2/activity/follow | https://app.bilibili.com | Query:access_key, Query:goto, Query:fid, Query:type, Query:from_spmid |
| classes12.dex:40278:GET | GET | /x/v2/activity/tab | https://app.bilibili.com | Query:access_key, Query:page_id, Query:tab_id, Query:tab_module_id |
| classes12.dex:40279:GET | GET | x/v2/activity/supernatant | https://app.bilibili.com | Query:access_key, Query:page_id, QueryMap:map/body/dynamic |
| classes12.dex:40280:GET | GET | x/v2/activity/like/list | https://app.bilibili.com | Query:access_key, Query:sid, Query:sort_type, Query:offset, Query:module_id, Query:dy_offset, Query:from_spmid, Query:primary_page_id, QueryMap:map/body/dynamic |
| classes12.dex:40281:GET | GET | x/v2/activity/like/list | https://app.bilibili.com | Query:access_key, Query:offset, Query:from_spmid, Query:primary_page_id, QueryMap:map/body/dynamic |
| classes12.dex:40282:GET | GET | /x/v2/activity/detail | https://app.bilibili.com | Query:module_id |
| classes12.dex:40283:GET | GET | x/v2/activity/menu | https://app.bilibili.com | Query:access_key, Query:page_id, Query:https_url_req, Query:tab_from |
| classes12.dex:40284:GET | GET | /x/v2/activity/base | https://app.bilibili.com | Query:page_id |
| classes12.dex:40285:GET | GET | /x/v2/activity/inline | https://app.bilibili.com | Query:access_key, Query:page_id, Query:https_url_req |
| classes12.dex:40286:GET | GET | /x/v2/activity/index | https://app.bilibili.com | Query:access_key, Query:page_id, Query:offset, Query:activity_from, Query:dynamic_id, Query:share_origin, Query:tab_id, Query:tab_module_id, Query:from_spmid, Query:https_url_req, Query:current_tab |
| classes12.dex:45896:POST | POST | https://api.bilibili.com/x/v3/fav/resource/deal | https://api.vc.bilibili.com | Field:rid, Field:type, Field:add_media_ids, Field:from_spmid, Field:spmid, Field:action_id |
| classes12.dex:45897:GET | GET | https://api.bilibili.com/x/dynamic/feed/attach/attachcardpreview | https://api.vc.bilibili.com | Query:biz_type, Query:biz_id, Query:mid |
| classes12.dex:45898:GET | GET | https://api.bilibili.com/x/dynamic/feed/attach/preview | https://api.vc.bilibili.com | Query:biz_id, Query:biz_type |
| classes12.dex:45899:GET | GET | https://api.bilibili.com/x/dynamic/feed/attach/reservepreview | https://api.vc.bilibili.com | Query:reserve_id, Query:mid |
| classes12.dex:45900:GET | GET | https://api.bilibili.com/x/dynamic/feed/attach/ugcpreview | https://api.vc.bilibili.com | Query:ugc_id, Query:mid |
| classes12.dex:45901:POST | POST | https://api.bilibili.com/x/v3/fav/resource/unfav-all | https://api.vc.bilibili.com | Field:rid, Field:type, Field:from_spmid, Field:spmid, Field:action_id |
| classes12.dex:45902:POST | POST | /dynamic_repost/v1/dynamic_repost/pre_judge | https://api.vc.bilibili.com | Field:uid, Field:dynamic_id, Field:content, Field:texts, Field:dynamic_type |
| classes12.dex:45903:POST | POST | https://api.bilibili.com/x/dynamic/feed/block/add | https://api.vc.bilibili.com | Query:mid, Query:fid, Query:type, Query:action, Query:biz_value |
| classes12.dex:45904:GET | GET | /topic_svr/v1/topic_svr/fetch_ogv | https://api.vc.bilibili.com | Query:topic_id, Query:topic_name |
| classes12.dex:45905:POST | POST | https://api.bilibili.com/x/relation/modify | https://api.vc.bilibili.com | Field:fid, Field:act, Field:re_src |
| classes12.dex:45906:POST | POST | https://api.bilibili.com/x/relation/batch/modify | https://api.vc.bilibili.com | Field:fids, Field:act, Field:re_src, Field:csrf |
| classes12.dex:45907:GET | GET | https://app.bilibili.com/x/topic/pub/rcmd/search | https://api.vc.bilibili.com | Query:keywords, Query:upload_id, Query:from_topic_id, Query:from_topic_name |
| classes12.dex:45908:GET | GET | /topic_svr/v1/topic_svr/fetch_dynamics_v2 | https://api.vc.bilibili.com | Query:device_id, Query:topic_id, Query:topic_name, Query:offset, Query:is_frontpage, Query:types, Query:sortby, Query:from_spmid |
| classes12.dex:45909:GET | GET | /topic_svr/v1/topic_svr/fetch_dynamics_v2 | https://api.vc.bilibili.com | Query:access_key, Query:offset, Query:from_spmid, QueryMap:map/body/dynamic |
| classes12.dex:45910:POST | POST | /topic_svr/v1/topic_svr/topic_component_types | https://api.vc.bilibili.com | Field:topic_id, Field:topic_name |
| classes12.dex:45911:POST | POST | https://api.bilibili.com/x/v1/tunnel/notify/close | https://api.vc.bilibili.com | Query:access_key, Query:oid |
| classes12.dex:45912:POST | POST | /dynamic_report/v1/dynamic_report/rcmd_report | https://api.vc.bilibili.com | Field:report_type, Field:uid, Field:dynamic_id, Field:count |
| classes12.dex:45913:GET | GET | /dynamic_topic/v1/topic/followTopics | https://api.vc.bilibili.com | Query:size, Query:page |
| classes12.dex:45914:POST | POST | /dynamic_topic/v1/topic/setTopTopic | https://api.vc.bilibili.com | Field:top_list |
| classes12.dex:45915:POST | POST | https://app.bilibili.com/x/topic/pub/upload | https://api.vc.bilibili.com | Query:topic_id, Query:request_id, Query:upload_id |
| classes12.dex:45916:GET | GET | https://app.bilibili.com/x/topic/vert/search | https://api.vc.bilibili.com | Query:keywords, Query:page_num, Query:offset |
| classes12.dex:45917:POST | POST | /api/v1/drawImage/upload | https://api.vc.bilibili.com | Body:map/body/dynamic |
| classes12.dex:45918:POST | POST | https://api.bilibili.com/x/dynamic/feed/draw/upload_bfs | https://api.vc.bilibili.com | Body:map/body/dynamic |
| classes12.dex:45919:POST | POST | https://api.bilibili.com/x/station/upload_bfs | https://api.vc.bilibili.com | Body:map/body/dynamic |
| classes12.dex:45932:GET | GET | /x/dynamic/topic/stats | https://api.bilibili.com | Query:topic_id, Query:topic_name |
| classes12.dex:46185:POST | POST | /pgc/app/follow/add | https://api.bilibili.com | Query:season_id |
| classes12.dex:46186:POST | POST | /pgc/app/follow/del | https://api.bilibili.com | Query:season_id |
| classes12.dex:46187:POST | POST | /x/topic/resource/report | https://app.bilibili.com | Field:topic_id, Field:res_id, Field:res_type, Field:reason |
| classes12.dex:46188:POST | POST | /x/topic/report | https://app.bilibili.com | Field:topic_id, Field:reason |
| classes12.dex:52415:GET | GET | /x/article/edit_times | https://api.bilibili.com | Query:id |
| classes12.dex:52416:POST | POST | /x/article/creative/article/withdraw | https://api.bilibili.com | Query:access_key, Query:aid |
| classes12.dex:61871:GET | GET | /xlive/web-ucenter/v2/emoticon/GetEmoticons | https://api.live.bilibili.com | Query:room_id |
| classes12.dex:61872:GET | GET | /xlive/web-ucenter/v2/emoticon/GetDmInputBoxEmoticons | https://api.live.bilibili.com | Query:room_id |
| classes12.dex:62540:POST | POST | /xlive/rdata-interface/v1/heartbeat/mobileHeartBeat | https://live-trace.bilibili.com | Field:hb |
| classes13.dex:354:GET | GET | /xlive/app-room/v1/videoConnection/getConnectionRoomInfo | https://api.live.bilibili.com | Query:room_id, Query:uid |
| classes13.dex:2273:GET | GET | /xlive/pk-interface/v1/battle/getInfoById | https://api.live.bilibili.com | Query:pk_id, Query:room_id, Query:pk_version |
| classes13.dex:2771:GET | GET | /mall-cbp/web/xlive/e-commerce-interface/v1/ecommerce-user/get_shopping_latest_goods_info | https://mall.bilibili.com | Query:mid, Query:room_id, Query:item_id |
| classes13.dex:2773:GET | GET | /mall-cbp/web/xlive/e-commerce-interface/v1/ecommerce-user/get_room_exclusive_coupon_detail | https://mall.bilibili.com | Query:ruid, Query:track_id, Query:autoReceive, Query:couponCate |
| classes13.dex:2774:GET | GET | /mall-cbp/web/xlive/e-commerce-interface/v1/ecommerce-user/fetch_room_exclusive_coupon | https://mall.bilibili.com | Query:ruid, Query:couponCate, Query:track_id |
| classes13.dex:10092:GET | GET | /xlive/pk-interface/v1/pk/getRelationByUids | https://api.live.bilibili.com | Query:target_uids |
| classes13.dex:10629:GET | GET | /xlive/general-interface/v1/rank/getOnlineGoldRank | https://api.live.bilibili.com | Query:roomId, Query:ruid, Query:page, Query:pageSize |
| classes13.dex:11532:POST | POST | /xlive/app-ucenter/v1/like_info_v3/like/likeReportV3 | https://api.live.bilibili.com | Query:room_id, Query:anchor_id, Query:uid, Query:click_time |
| classes13.dex:13600:POST | POST | /log/mobile/android/df6sh | https://data.bilivideo.com | Field:room_id, Field:play_url, Field:auty, Field:tils, Field:udse, Field:daqs, Field:p2p, Field:caton, Field:appkey, Field:build |
| classes13.dex:13601:POST | POST | /log/mobile/android/df6sh | https://data.bilivideo.com | Field:room_id, Field:play_url, Field:auty, Field:tils, Field:reye, Field:urcs, Field:nsti, Field:edno, Field:udse, Field:daqs, Field:p2p, Field:caton, Field:appkey, Field:build |
| classes13.dex:17569:POST | POST | /xlive/open-interface/v1/dm/message_ack | https://api.live.bilibili.com | Field:terminal, Field:sequence |
| classes13.dex:19789:POST | POST | /xlive/app-blink/v2/universalInteract/CancelMatchInvite | https://api.live.bilibili.com |  |
| classes13.dex:19790:GET | GET | /xlive/general-interface/v1/battle/cancel | https://api.live.bilibili.com | Query:room_id, Query:battle_type, Query:sub_type, Header:X-Event-TraceID, Query:need_warn |
| classes13.dex:19791:POST | POST | /xlive/app-blink/v2/universalInteract/Connect | https://api.live.bilibili.com | Field:peer_uid, Field:business_label, Field:cancel_current, Field:invited_type, Field:match_hall_id |
| classes13.dex:19792:POST | POST | /xlive/pk-interface/v1/pk/dismissReunionOpponent | https://api.live.bilibili.com | Field:pk_id |
| classes13.dex:19793:POST | POST | /xlive/pk-interface/v1/battle/pkScoreMultiDraw | https://api.live.bilibili.com | Query:room_id, Query:pk_id, Query:card_no |
| classes13.dex:19794:POST | POST | /xlive/general-interface/v2/pk/exit | https://api.live.bilibili.com | Field:stop_pk, Field:anchor_uid |
| classes13.dex:19795:GET | GET | /xlive/app-blink/v2/universalInteract/BatchRecommendList | https://api.live.bilibili.com | Query:label_map |
| classes13.dex:19796:GET | GET | /xlive/general-interface/v2/pk/checkEscape | https://api.live.bilibili.com | Query:room_id, Query:pk_id |
| classes13.dex:19797:GET | GET | /xlive/general-interface/v2/pk/inPkPanel | https://api.live.bilibili.com | Query:room_id |
| classes13.dex:19798:GET | GET | /xlive/pk-interface/v1/battle/pkPanel | https://api.live.bilibili.com | Query:room_id, Query:device, Query:pk_info, Query:live_model |
| classes13.dex:19799:GET | GET | /xlive/general-interface/v2/pk/audience | https://api.live.bilibili.com | Query:room_id, Query:pk_id |
| classes13.dex:19800:GET | GET | /xlive/pk-interface/v1/battle/getInfoById | https://api.live.bilibili.com | Query:pk_id, Query:room_id, Query:pk_version, Query:is_anchor |
| classes13.dex:19801:GET | GET | /xlive/pk-interface/v1/battle/conditionList | https://api.live.bilibili.com | Query:room_id |
| classes13.dex:19802:GET | GET | /xlive/pk-interface/v1/battle/pkRecordList | https://api.live.bilibili.com | Query:room_id, Query:pk_type, Query:mid |
| classes13.dex:19803:GET | GET | /xlive/pk-interface/v1/pk/info | https://api.live.bilibili.com | Query:pk_id, Query:room_id |
| classes13.dex:19804:GET | GET | /xlive/app-blink/v2/universalInteract/GetMatchSelect | https://api.live.bilibili.com |  |
| classes13.dex:19805:POST | POST | /xlive/app-blink/v2/universalInteract/MatchList | https://api.live.bilibili.com | Field:type, Field:parent_area_id_list, Field:level_list, Field:last_id |
| classes13.dex:19806:GET | GET | /xlive/general-interface/v1/battle/pkPreCheck | https://api.live.bilibili.com | Query:room_id, Query:pk_version, Query:uid, Header:X-Event-TraceID |
| classes13.dex:19807:GET | GET | /xlive/pk-interface/v1/battle/GetPkTaskWidget | https://api.live.bilibili.com | Query:room_id |
| classes13.dex:19808:GET | GET | /xlive/pk-interface/v1/pk/getRelationByUids | https://api.live.bilibili.com | Query:target_uids |
| classes13.dex:19809:GET | GET | /xlive/pk-interface/v1/pk/getRelayTargetConf | https://api.live.bilibili.com |  |
| classes13.dex:19810:GET | GET | /xlive/app-blink/v2/universalInteract/RecommendList | https://api.live.bilibili.com | Query:session_id, Query:label |
| classes13.dex:19811:POST | POST | /xlive/app-blink/v1/universalInteract/Handle | https://api.live.bilibili.com | Field:peer_uid, Field:biz_session_id, Field:action, Field:action_type, Field:source, Field:room_id |
| classes13.dex:19812:POST | POST | /xlive/app-room/v1/universalInteract/Handle | https://api.live.bilibili.com | Field:peer_uid, Field:biz_session_id, Field:action, Field:action_type, Field:source, Field:room_id |
| classes13.dex:19813:POST | POST | /xlive/pk-interface/v1/pk/nextRelay | https://api.live.bilibili.com |  |
| classes13.dex:19814:GET | GET | /xlive/pk-interface/v1/battle/pkUserRecHandle | https://api.live.bilibili.com | Query:invited_id, Query:type, Query:uid, Query:token, Query:checkbox_checked |
| classes13.dex:19815:POST | POST | /xlive/pk-interface/v1/battle/setCondition | https://api.live.bilibili.com | Query:room_id, Query:condition_type, Query:condition_value |
| classes13.dex:19816:GET | GET | /xlive/app-blink/v2/universalInteract/Search | https://api.live.bilibili.com | Query:search, Query:page, Query:label |
| classes13.dex:19817:POST | POST | /xlive/general-interface/v2/pk/crossPkMemberSelect | https://api.live.bilibili.com | Query:room_id, Query:anchor_uid, Query:biz_session_id, Query:pk_members |
| classes13.dex:19818:POST | POST | /xlive/pk-interface/v1/pk/setRelayTargetConf | https://api.live.bilibili.com | Field:relay_target_type, Field:relay_target_votes |
| classes13.dex:19819:POST | POST | /xlive/general-interface/v2/pk/startMutiPK | https://api.live.bilibili.com | Field:biz_session_id, Field:mutipk_type, Field:invite_uid, Field:invited_type, Field:invited_type_label, Field:anchor_uid, Field:score_mode, Field:invite_uids |
| classes13.dex:19820:GET | GET | /xlive/pk-interface/v1/battle/join | https://api.live.bilibili.com | Query:room_id, Query:battle_type, Header:X-Event-TraceID, Query:theme_id |
| classes13.dex:19821:POST | POST | /xlive/general-interface/v2/pk/startMutiPK | https://api.live.bilibili.com | Field:biz_session_id, Field:mutipk_type, Field:invite_uid, Field:invited_type, Field:invited_type_label, Field:anchor_uid, Field:pk_duration, Field:min_val |
| classes13.dex:19822:POST | POST | /xlive/general-interface/v2/pk/pkPlayTextSwitch | https://api.live.bilibili.com | Field:room_id, Field:pk_id |
| classes13.dex:19823:GET | GET | /xlive/revenue/v1/wallet/myWallet | https://api.live.bilibili.com | Query:need_bp |
| classes13.dex:19824:GET | GET | /xlive/app-room/v1/gift/NeedTipRecharge | https://api.live.bilibili.com | Query:from, Query:needGold |
| classes13.dex:19825:POST | POST | /pay/v2/Pay/buyGold | https://api.live.bilibili.com | Field:coin_num |
| classes13.dex:19826:POST | POST | /xlive/app-room/v1/gift/TipRechargeAction | https://api.live.bilibili.com | Field:from, Field:action |
| classes13.dex:20581:POST | POST | /xlive/app-blink/v2/multiVoice/MVEndPK | https://api.live.bilibili.com | Field:room_id, Field:anchor_uid, Field:pk_id, Field:biz_session_id, Header:X-Event-TraceID |
| classes13.dex:20582:GET | GET | /xlive/app-blink/v1/multiVoice/MVModeInfo | https://api.live.bilibili.com | Query:room_id, Query:anchor_uid, Query:mode |
| classes13.dex:20583:POST | POST | /xlive/app-blink/v2/multiVoice/MVStartPK | https://api.live.bilibili.com | Field:room_id, Field:anchor_uid, Field:duration, Field:mode, Field:anchor_join, Field:biz_session_id, Header:X-Event-TraceID |
| classes13.dex:20584:POST | POST | /xlive/app-room/v2/multiVoice/MVEndPK | https://api.live.bilibili.com | Field:room_id, Field:anchor_uid, Field:pk_id, Field:biz_session_id, Header:X-Event-TraceID |
| classes13.dex:20585:GET | GET | /xlive/app-room/v1/multiVoice/MVModeInfo | https://api.live.bilibili.com | Query:room_id, Query:anchor_uid, Query:mode |
| classes13.dex:20586:POST | POST | /xlive/app-room/v2/multiVoice/MVStartPK | https://api.live.bilibili.com | Field:room_id, Field:anchor_uid, Field:duration, Field:mode, Field:anchor_join, Field:biz_session_id, Header:X-Event-TraceID |
| classes13.dex:20590:GET | GET | /xlive/pk-interface/multiVoice/getPositionLabel | https://api.live.bilibili.com | Query:position, Query:room_id |
| classes13.dex:20591:POST | POST | /xlive/pk-interface/multiVoice/submitLabel | https://api.live.bilibili.com | Field:label_version, Field:room_id, Field:position_label_list |
| classes13.dex:20592:GET | GET | /xlive/app-room/v1/multiVoice/QueryPeiPeiConf | https://api.live.bilibili.com |  |
| classes13.dex:20593:POST | POST | /xlive/app-room/v1/multiVoice/SetPeiPeiConf | https://api.live.bilibili.com | Field:display_online |
| classes13.dex:20875:GET | GET | /xlive/app-blink/v1/material/ListMaterialsV3 | https://api.live.bilibili.com | Query:mtp, Query:material_source, Query:device |
| classes13.dex:22542:GET | GET | /xlive/lottery-interface/v1/popularityRedPocket/RedPocketGetWinners | https://api.live.bilibili.com | Query:lot_id, Query:write_off_only |
| classes13.dex:22543:GET | GET | /xlive/lottery-interface/v1/popularityRedPocket/RedPocketDetail | https://api.live.bilibili.com | Query:room_id, Query:ruid, Query:rp_type |
| classes13.dex:22544:GET | GET | /xlive/lottery-interface/v1/popularityRedPocket/RedPocketHistory | https://api.live.bilibili.com | Query:page, Query:page_size, Query:rp_type |
| classes13.dex:22545:POST | POST | /xlive/lottery-interface/v1/popularityRedPocket/RedPocketDraw | https://api.live.bilibili.com | Field:room_id, Field:ruid, Field:lot_id, Field:spm_id, Field:jump_from, Field:session_id |
| classes13.dex:22546:POST | POST | /xlive/lottery-interface/v1/popularityRedPocket/SendRedPocket | https://api.live.bilibili.com | Field:ruid, Field:room_id, Field:red_pocket_id, Field:danmu_msg, Field:live_statistics, Field:context_type, Field:context_id, Field:parent_area_id, Field:area_id, Field:duration, Field:battery_info |
| classes13.dex:23128:GET | GET | /xlive/general-interface/v1/medal/CheckMedalEmoji | https://api.live.bilibili.com | Query:emoji_id, Query:emoji_level, Query:identity, Query:ruid |
| classes13.dex:23129:POST | POST | /xlive/revenue/v2/gift/sendGoldMultiUser | https://api.live.bilibili.com | Field:ruid, Field:receive_users, Field:gift_id, Field:gift_num, Field:price, Field:biz_code, Field:biz_id, Field:storm_beat_id, Field:live_statistics |
| classes13.dex:23729:GET | GET | /xlive/lottery-interface/v1/Anchor/AwardRecord | https://api.live.bilibili.com | Query:next_id, Query:month, Query:uid |
| classes13.dex:23730:GET | GET | /lottery/v1/Award/award_list | https://api.live.bilibili.com | Query:page |
| classes13.dex:23731:GET | GET | /xlive/lottery-interface/v1/anchor/GetUserAwardRecord | https://api.live.bilibili.com | Query:page, Query:page_size |
| classes13.dex:23732:GET | GET | /xlive/general-interface/v1/guardBenefit/WinListByUser | https://api.live.bilibili.com | Query:page, Query:page_size |
| classes13.dex:23733:POST | POST | /fans_medal/v2/medal/get | https://api.live.bilibili.com | Field:uid, Field:source |
| classes13.dex:23734:GET | GET | /userext/v1/RedAlarm/view | https://api.live.bilibili.com | Query:module, Query:erase |
| classes13.dex:23735:GET | GET | /xlive/revenue/v2/giftStream/payRecord | https://api.live.bilibili.com | Query:coin_type, Query:page_size |
| classes13.dex:23736:GET | GET | /xlive/revenue/v2/giftStream/payRecord | https://api.live.bilibili.com | Query:coin_type, Query:page_size, QueryMap:map/body/dynamic |
| classes13.dex:23737:GET | GET | /lottery/v1/Storm/getMyBeats | https://api.live.bilibili.com |  |
| classes13.dex:23738:POST | POST | /lottery/v1/Award/award_receive | https://api.live.bilibili.com | Field:id, Field:room_id |
| classes13.dex:23739:POST | POST | /lottery/v1/Award/award_receive | https://api.live.bilibili.com | Field:id, Field:uid |
| classes13.dex:23740:GET | GET | /xlive/app-ucenter/v1/user/get_user_info | https://api.live.bilibili.com |  |
| classes13.dex:23741:GET | GET | /xlive/general-interface/v1/guard/GuardCardRefresh | https://api.live.bilibili.com | Query:uid |
| classes13.dex:23742:POST | POST | /fans_medal/v1/medal/rename | https://api.live.bilibili.com | Field:uid, Field:medal_name, Field:source |
| classes13.dex:23743:POST | POST | /fans_medal/v1/medal/open | https://api.live.bilibili.com | Field:uid, Field:medal_name, Field:source |
| classes13.dex:23744:POST | POST | /live_user/v1/UserSetting/set_vip_status | https://api.live.bilibili.com | Field:status |
| classes13.dex:23745:POST | POST | /lottery/v1/Storm/setMyBeats | https://api.live.bilibili.com | Field:id, Field:content |
| classes13.dex:23746:POST | POST | /lottery/v1/Award/award_receive | https://api.live.bilibili.com | FieldMap:map/body/dynamic |
| classes13.dex:28650:GET | GET | /lottery/v1/Storm/appGetAllBeats | https://api.live.bilibili.com |  |
| classes13.dex:28651:POST | POST | /xlive/revenue/v2/gift/sendBagMultiUser | https://api.live.bilibili.com | Field:ruid, Field:receive_users, Field:gift_id, Field:gift_num, Field:biz_code, Field:biz_id, Field:storm_beat_id, Field:bag_id, Field:live_statistics, Field:all_flag, Field:request_action_id |
| classes13.dex:28652:POST | POST | /xlive/revenue/v2/gift/sendGoldMultiUser | https://api.live.bilibili.com | Field:ruid, Field:receive_users, Field:gift_id, Field:gift_num, Field:price, Field:biz_code, Field:biz_id, Field:storm_beat_id, Field:live_statistics, Field:request_action_id |
| classes13.dex:28653:POST | POST | xlive/revenue/v2/interactive_pay/send | https://api.live.bilibili.com | Field:room_id, Field:anchor_id, Field:receiver_uid, Field:gift_id, Field:gift_num, Field:price, Field:context_id, Field:gift_scene, Field:live_statistics, Field:biz_code, Field:biz_id, Field:request_action_id |
| classes13.dex:28654:POST | POST | /xlive/revenue/v2/gift/sendSilverMultiUser | https://api.live.bilibili.com | Field:ruid, Field:receive_users, Field:gift_id, Field:gift_num, Field:price, Field:biz_code, Field:biz_id, Field:storm_beat_id, Field:live_statistics, Field:request_action_id |
| classes13.dex:31707:GET | GET | /xlive/app-room/v1/index/getDanmuInfo | https://api.live.bilibili.com | Query:room_id, Query:free_type, Query:is_anchor |
| classes13.dex:31708:GET | GET | /xlive/app-ucenter/v1/dMReport/ForReason | https://api.live.bilibili.com |  |
| classes13.dex:31709:POST | POST | /xlive/app-ucenter/v1/dMReport/Report | https://api.live.bilibili.com | Field:roomid, Field:tuid, Field:msg, Field:reason, Field:reason_id, Field:danmaku_ts, Field:danmaku_sign, Field:file_id, Field:dm_type, Field:id_str |
| classes13.dex:31710:POST | POST | https://space.bilibili.com/api/report/add | https://api.live.bilibili.com | Field:mid, Field:reason, Field:access_key |
| classes13.dex:31711:POST | POST | /xlive/app-room/v1/dM/sendmsg | https://api.live.bilibili.com | FieldMap:map/body/dynamic |
| classes13.dex:31712:POST | POST | /xlive/web-ucenter/v1/interact/likeInteract | https://api.live.bilibili.com | Field:roomid, Field:live_status, Field:av_id |
| classes13.dex:31713:POST | POST | /xlive/app-room/v1/dM/SendVoiceDmMsg | https://api.live.bilibili.com | FieldMap:map/body/dynamic |
| classes13.dex:31714:POST | POST | xlive/app-room/v1/dM/asr | https://api.live.bilibili.com | Query:room_id, Part:map/body/dynamic |
| classes13.dex:32027:GET | GET | /xlive/app-interface/v2/index/feedback | https://api.live.bilibili.com | Query:room_id, Query:id, Query:id_type, Query:type, Query:page, Query:index, Query:card_type, Query:source, Query:from_spmid, Query:spmid, Query:goto, Query:track_id, Query:reason_id, Query:action_id, Query:state, Query:req_version |
| classes13.dex:32028:GET | GET | /xlive/app-interface/v2/index/getAreaList | https://api.live.bilibili.com |  |
| classes13.dex:32029:GET | GET | /room/v1/Area/getList | https://api.live.bilibili.com | Query:parent_id, Query:source_id, Query:need_entrance |
| classes13.dex:32030:GET | GET | /room/v3/Area/getRoomList | https://api.live.bilibili.com | Query:parent_area_id, Query:cate_id, Query:area_id, Query:sort_type, Query:page, Query:page_size, Query:tag_version, Query:device_name, Query:qn, Query:https_url_req, Query:network |
| classes13.dex:32031:GET | GET | /xlive/app-interface/v2/second/getList | https://api.live.bilibili.com | Query:is_refresh, Query:parent_area_id, Query:cate_id, Query:area_id, Query:sort_type, Query:page, Query:page_size, Query:tag_version, Query:device_name, Query:qn, Query:https_url_req, Query:network, Query:vajra_business_key, Query:fnval |
| classes13.dex:32032:GET | GET | /room/v1/AppIndex/getAreas | https://api.live.bilibili.com | Query:scale |
| classes13.dex:32033:GET | GET | /xlive/app-interface/v2/index/feed | https://api.live.bilibili.com | Query:login_event, Query:is_refresh, Query:page, Query:relation_page, Query:scale, Query:device_name, Query:qn, Query:ad_extra, Query:network, Query:https_url_req, Query:out_ad_name, Query:module_select, Query:fnval, Query:is_switch, Query:has_play_window |
| classes13.dex:32034:GET | GET | /xlive/app-interface/v2/second/getList | https://api.live.bilibili.com | Query:is_refresh, Query:parent_area_id, Query:cate_id, Query:sort_type, Query:page, Query:page_size, Query:tag_version, Query:device_name, Query:qn, Query:https_url_req, Query:network, Query:vajra_business_key, Query:room_id, Query:source |
| classes13.dex:32035:GET | GET | /room/v1/Area/getRoomList | https://api.live.bilibili.com | Query:parent_area_id, Query:cate_id, Query:area_id, Query:sort_type, Query:page, Query:page_size |
| classes13.dex:32036:GET | GET | /room/v3/Area/getTeenRoomList | https://api.live.bilibili.com | Query:sort_type, Query:page_size, Query:page, Query:platform, Query:device, Query:build, Query:qn, Query:device_name, Query:https_url_req |
| classes13.dex:32037:GET | GET | /xlive/app-interface/v2/index/getHotRankList | https://api.live.bilibili.com | Query:page, Query:page_size, Query:fnval |
| classes13.dex:32038:GET | GET | /xlive/app-interface/v2/index/getUserFeat | https://api.live.bilibili.com | Query:uid |
| classes13.dex:32039:GET | GET | /xlive/app-interface/v2/index/feedV3 | https://api.live.bilibili.com | Query:is_refresh, Query:page, Query:exist_ids, Query:fnval, Query:network, Query:login_event |
| classes13.dex:32040:GET | GET | /xlive/app-interface/v2/second/playTogetherSearch | https://api.live.bilibili.com | Query:keyword, Query:page_size, Query:offset |
| classes13.dex:32041:POST | POST | /xlive/app-ucenter/v1/activity/subscription | https://api.live.bilibili.com | Field:aid, Field:type, Field:status |
| classes13.dex:32042:GET | GET | /xlive/app-interface/v2/search_live | https://api.live.bilibili.com | QueryMap:map/body/dynamic |
| classes13.dex:32043:GET | GET | http://app.bilibili.com/x/v2/search/live | https://api.live.bilibili.com | Query:type, Query:keyword, Query:pn, Query:ps, Query:order |
| classes13.dex:32504:GET | GET | /xlive/anchor-team/v1/info | https://api.live.bilibili.com | Query:room_id, Query:need_more |
| classes13.dex:32505:GET | GET | /xlive/anchor-team/v1/pk/info | https://api.live.bilibili.com | Query:room_id |
| classes13.dex:32506:GET | GET | /live_user/v1/BarrageSetting/get | https://api.live.bilibili.com | Query:roomid |
| classes13.dex:32507:GET | GET | xlive/app-room/v1/dM/GetAll | https://api.live.bilibili.com | Query:roomid |
| classes13.dex:32508:GET | GET | /xlive/app-room/v1/card/card_glory_info | https://api.live.bilibili.com | Query:uid |
| classes13.dex:32509:GET | GET | /xlive/web-ucenter/v1/emoticon/GetEmoticonGuide | https://api.live.bilibili.com | Query:room_id |
| classes13.dex:32510:GET | GET | /xlive/app-interface/v2/second/get_fav_tag | https://api.live.bilibili.com |  |
| classes13.dex:32511:GET | GET | /xlive/app-ucenter/v2/card/user | https://api.live.bilibili.com | Query:uid, Query:ruid, Query:close_mystery, Query:mystery_special, Query:mystery_name, Query:canal, Query:source |
| classes13.dex:32512:GET | GET | /xlive/app-room/v1/index/getInfoByRoom | https://api.live.bilibili.com | Query:room_id, Header:X-Live-Room-Password, Query:hardware_info, QueryMap:map/body/dynamic, Query:gaia_vtoken, Query:jump_from, Query:network |
| classes13.dex:32513:GET | GET | /xlive/app-room/v1/index/getOffLiveList | https://api.live.bilibili.com | Query:room_id, Query:area_id, Query:qn, Query:device_name, Query:https_url_req, Query:network |
| classes13.dex:32514:GET | GET | /xlive/app-room/v1/index/getProgressBarInfo | https://api.live.bilibili.com | Query:roomid |
| classes13.dex:32515:GET | GET | /xlive/open-interface/v1/fetch_resource | https://api.live.bilibili.com | Query:hash |
| classes13.dex:32516:GET | GET | /xlive/app-interface/v1/config/getConf | https://api.live.bilibili.com | Query:key |
| classes13.dex:32517:GET | GET | /room/v1/Room/getBannedInfo | https://api.live.bilibili.com | Query:roomid |
| classes13.dex:32518:GET | GET | /xlive/app-room/v2/index/getRoomPlayInfo | https://api.live.bilibili.com | Query:room_id, Query:no_playurl, Query:qn, Query:free_type, Query:http, Query:dolby, Query:network, Query:mask, Query:media_type, Query:only_video, Query:play_type, Query:protocol, Query:format, Query:codec, Query:device_name, Query:eotf, Query:special_scenario, Query:supported_drms, Header:X-Live-Room-Password, Header:X-Live-Room-B-Staff-Token |
| classes13.dex:32519:GET | GET | /xlive/app-ucenter/v1/room/GetInfo | https://api.live.bilibili.com | Query:uId |
| classes13.dex:32520:GET | GET | /xlive/app-interface/v2/topic/getList | https://api.live.bilibili.com | Query:topic_id, Query:entry_type, Query:offset, Query:type_offset, Query:landing_room_id, Query:network, Query:page, Query:platform |
| classes13.dex:32521:GET | GET | /xlive/app-room/v1/index/GetUserExtraInfo | https://api.live.bilibili.com | Query:room_id, Query:area_id, Query:parent_area_id |
| classes13.dex:32522:POST | POST | /xlive/app-room/v1/index/roomReportAction | https://api.live.bilibili.com | Field:room_id, Field:type, Field:scene |
| classes13.dex:32523:GET | GET | /xlive/app-interface/v2/room/recList | https://api.live.bilibili.com | Query:is_refresh, Query:page, Query:landing_room_id, Query:exist_ids, Query:parent_area_id, Query:area_id, Query:virtual_area_id, Query:virtual_parent_area_id, Query:device_name, Query:qn, Query:fnval, Query:scale, Query:network, Query:https_url_req, Query:jump_from, Query:is_first_install, Query:rank_conf_id, Query:need_init_data, Query:reclist_offset, Query:reclist_sort_type, Query:reclist_real_area_id, Query:reclist_real_parent_area_id, Query:second_page, Query:second_page_size |
| classes13.dex:32524:GET | GET |  | https://api.live.bilibili.com | Url:map/body/dynamic |
| classes13.dex:32525:POST | POST | /xlive/app-ucenter/v1/banned/AddSilentUser | https://api.live.bilibili.com | Field:room_id, Field:tuid, Field:msg, Field:msg_time, Field:hour, Field:type, Field:live_id |
| classes13.dex:32526:POST | POST | /xlive/app-ucenter/v1/banned/DelSilentUser | https://api.live.bilibili.com | Field:room_id, Field:tuid |
| classes13.dex:32527:POST | POST | /xlive/app-room/v1/index/roomEntryAction | https://api.live.bilibili.com | Field:room_id, Field:platform, Field:jumpFrom, Field:noHistory |
| classes13.dex:32528:POST | POST | /xlive/anchor-team/v1/select_member | https://api.live.bilibili.com | Field:room_id, Field:target_ruid |
| classes13.dex:32529:POST | POST | /live_user/v1/BarrageSetting/set | https://api.live.bilibili.com | FieldMap:map/body/dynamic |
| classes13.dex:32530:POST | POST | xlive/app-room/v1/dM/AjaxSetConfig | https://api.live.bilibili.com | FieldMap:map/body/dynamic |
| classes13.dex:32531:POST | POST | /xlive/app-interface/v2/second/set_fav_tag | https://api.live.bilibili.com | Field:tags |
| classes13.dex:32532:POST | POST | /xlive/app-room/v1/index/TrigerInteract | https://api.live.bilibili.com | Field:roomid, Field:interact_type |
| classes13.dex:32533:GET | GET | /xlive/app-room/v1/index/verifyRoomPwd | https://api.live.bilibili.com | Query:room_id, Query:pwd |
| classes13.dex:32534:GET | GET | /xlive/app-room/v1/voiceConn/applicationList | https://api.live.bilibili.com | Query:room_id, Query:uid |
| classes13.dex:32535:GET | GET | /xlive/app-room/v1/voiceConn/endVoiceConn | https://api.live.bilibili.com | Query:room_id, Query:voice_channel, Header:X-Event-TraceID |
| classes13.dex:32536:POST | POST | /xlive/app-room/v1/voiceConn/userApplication | https://api.live.bilibili.com | Field:apply_type, Field:category, Field:uid, Field:room_id, Field:msg, Field:jumpfrom, Field:track_id, Field:action_id, Field:pay_amount, Field:ruid, Header:X-Event-TraceID |
| classes13.dex:34486:GET | GET | /xlive/app-ucenter/v1/user_title/GetTitles | https://api.live.bilibili.com | Query:data_version |
| classes13.dex:34487:POST | POST | /xlive/app-ucenter/v1/user_title/WearTitle | https://api.live.bilibili.com | Field:title, Field:effect_id, Field:room_id |
| classes13.dex:37223:GET | GET | /xlive/open-interface/v1/rtc/getAsrProxyServer | https://api.live.bilibili.com | Query:lang, Query:biz, Query:ctx |
| classes13.dex:37224:GET | GET | /xlive/app-blink/v2/universalInteract/LayoutData | https://api.live.bilibili.com | Query:layout_id |
| classes13.dex:37225:GET | GET | /xlive/app-room/v2/universalInteract/LayoutData | https://api.live.bilibili.com | Query:layout_id |
| classes13.dex:37226:GET | GET | /xlive/app-blink/v2/universalInteract/UniversalInfo | https://api.live.bilibili.com | Query:biz_session_id, Query:room_id |
| classes13.dex:37227:GET | GET | /xlive/app-room/v2/universalInteract/UniversalInfo | https://api.live.bilibili.com | Query:biz_session_id, Query:room_id |
| classes13.dex:37228:GET | GET | /xlive/app-room/v2/universalInteract/UniversalInfoForAudience | https://api.live.bilibili.com | Query:biz_session_id, Query:room_id |
| classes13.dex:37229:POST | POST | /xlive/app-blink/v1/universalInteract/Mute | https://api.live.bilibili.com | Field:biz_session_id, Field:target_uid, Field:mute_control_type, Field:connect_type, Field:active, Field:room_id |
| classes13.dex:37230:POST | POST | /xlive/app-room/v1/universalInteract/Mute | https://api.live.bilibili.com | Field:biz_session_id, Field:target_uid, Field:mute_control_type, Field:connect_type, Field:active, Field:room_id, Field:anchor_uid |
| classes13.dex:37231:POST | POST | /xlive/app-blink/v1/universalInteract/Quit | https://api.live.bilibili.com | Header:X-Event-TraceID |
| classes13.dex:37232:POST | POST | /xlive/app-room/v1/universalInteract/Quit | https://api.live.bilibili.com | Header:X-Event-TraceID |
| classes13.dex:37233:POST | POST | /xlive/app-room/v2/multiUserConn/VideoControl | https://api.live.bilibili.com | Field:biz_session_id, Field:room_id, Field:enabled, Field:video_content_type |
| classes13.dex:37331:GET | GET |  |  | Url:map/body/dynamic |
| classes13.dex:37795:GET | GET | /xlive/open-interface/v1/get_ab | https://api.live.bilibili.com | Query:keys |
| classes13.dex:38022:GET | GET | /xlive/revenue/v1/payLimit/getConfig | https://api.live.bilibili.com |  |
| classes13.dex:38023:POST | POST | /xlive/revenue/v1/payLimit/updateConfig | https://api.live.bilibili.com | Field:user_switch, Field:price |
| classes13.dex:38379:POST | POST | /api/bban2/v0/dialing/task/result | https://bvc-ost-oss.bilivideo.com | Body:map/body/dynamic |
| classes13.dex:38888:POST | POST | /xlive/app-ucenter/v1/conf/SetConf | https://api.live.bilibili.com | Field:type, Field:content, Field:target_id |
| classes13.dex:38889:GET | GET | /xlive/guard-interface/v1/guard/getGloryRender | https://api.live.bilibili.com | Query:ruid, Query:room_id |
| classes13.dex:38890:GET | GET | /xlive/app-room/v2/guardTab/topListNew | https://api.live.bilibili.com | Query:ruid, Query:roomid, Query:page, Query:page_size, Query:typ |
| classes13.dex:40140:POST | POST | /xlive/app-ucenter/v2/schedule/AddReserve | https://api.live.bilibili.com | Field:sid, Field:uid, Field:anchor_id, Field:oid, Field:from, Field:typ |
| classes13.dex:40141:POST | POST | /xlive/app-ucenter/v2/schedule/ClosePicture | https://api.live.bilibili.com | Field:uid, Field:anchor_id, Field:report_type |
| classes13.dex:40142:POST | POST | /xlive/app-ucenter/v2/schedule/DelReserve | https://api.live.bilibili.com | Field:sid, Field:uid, Field:anchor_id |
| classes13.dex:40143:GET | GET | /xlive/app-ucenter/v2/schedule/GetReserveCalendarInfo | https://api.live.bilibili.com | Query:sid |
| classes13.dex:40144:GET | GET | /xlive/app-ucenter/v2/schedule/GetReserveInfo | https://api.live.bilibili.com | Query:uid, Query:report_type, Query:anchor_id |
| classes13.dex:40352:GET | GET | /xlive/e-commerce-interface/v1/ecommerce-user/get_all_group_on_live | https://api.live.bilibili.com | Query:room_id, Query:ruid |
| classes13.dex:40353:GET | GET | /xlive/e-commerce-interface/v1/ecommerce-user/get_gobuy_pack_jump_url | https://api.live.bilibili.com | Query:ruid, Query:mid, Query:origin_url, Query:goods_id, Query:track_id, Query:jump_from |
| classes13.dex:40354:GET | GET | /xlive/e-commerce-interface/v1/ecommerce-user/get_reserve_calendar_info | https://api.live.bilibili.com | Query:sid, Query:ruid, Query:goods_id |
| classes13.dex:40355:GET | GET | /xlive/e-commerce-interface/v1/ecommerce-user/get_shopping_assistant_list | https://api.live.bilibili.com | Query:ruid |
| classes13.dex:40356:GET | GET | /xlive/e-commerce-interface/v1/ecommerce-user/get_shopping_cart_status | https://api.live.bilibili.com | Query:room_id, Query:ruid |
| classes13.dex:40357:GET | GET | /xlive/e-commerce-interface/v1/ecommerce-user/get_shopping_cart_list | https://api.live.bilibili.com | Query:room_id, Query:ruid, Query:page, Query:page_size, Query:group_id, Query:search_word, Query:jump_source, Query:new_version |
| classes13.dex:40358:GET | GET | /xlive/e-commerce-interface/v1/ecommerce-user/get_shopping_info | https://api.live.bilibili.com | Query:room_id, Query:ruid, Query:new_version, Query:track_id |
| classes13.dex:40359:GET | GET | /xlive/e-commerce-interface/v1/ecommerce-user/user_get_goods_record_info | https://api.live.bilibili.com | Query:ruid, Query:room_id, Query:goods_id, Query:only_stream_url |
| classes13.dex:40360:GET | GET | /xlive/e-commerce-interface/v1/ecommerce-user/get_goods_list_by_goods_id | https://api.live.bilibili.com | Query:room_id, Query:ruid, Query:goods_id, Query:page_size, Query:new_version |
| classes13.dex:40361:GET | GET | /xlive/e-commerce-interface/v1/ecommerce-user/get_taobao_jump_url | https://api.live.bilibili.com | Query:room_id, Query:ruid, Query:goods_id, Query:risk_token, Query:track_id, Query:jump_from |
| classes13.dex:40362:GET | GET | /xlive/e-commerce-interface/v1/ecommerce-user/get_up_shopping_relation_info | https://api.live.bilibili.com | Query:ruid |
| classes13.dex:40363:GET | GET | /xlive/e-commerce-interface/v1/ecommerce-user/user_goto_buy | https://api.live.bilibili.com | Query:ruid, Query:goods_id |
| classes13.dex:40364:GET | GET | /xlive/e-commerce-interface/v1/ecommerce-user/user_hot_buy | https://api.live.bilibili.com | Query:ruid, Query:room_id, Query:goods_id |
| classes13.dex:40365:POST | POST | /xlive/e-commerce-interface/v1/ecommerce-user/subscribe_goods_live | https://api.live.bilibili.com | Field:uid, Field:goods_id, Field:ruid, Field:sid, Field:is_add |
| classes13.dex:52267:POST | POST | /x/v3/fav/resource/clean | https://api.bilibili.com | Field:media_id |
| classes13.dex:52268:POST | POST | /x/v3/fav/tab/up-fav | https://api.bilibili.com | Field:resources, Field:tar_media_ids, Field:action, Field:media_id |
| classes13.dex:52269:POST | POST | /x/v3/fav/resource/batch-deal | https://api.bilibili.com | Field:access_key, Field:resources, Field:add_media_ids, Field:del_media_ids, Field:from, Field:extra, Field:from_spmid, Field:spmid, Field:action_id, Header:x-bili-gaia-vtoken |
| classes13.dex:52270:GET | GET | /x/v3/fav/folder/created/list-all | https://api.bilibili.com | Query:access_key, Query:up_mid, Query:rid, Query:type, Query:show_season, Query:extra |
| classes13.dex:52271:POST | POST | /x/v3/fav/resource/unfav-all | https://api.bilibili.com | Field:rid, Field:type, Field:from_spmid, Field:spmid, Field:action_id |
| classes13.dex:52272:POST | POST | /x/v3/fav/resource/sort | https://api.bilibili.com | Field:sort, Field:media_id |
| classes13.dex:52675:POST | POST | /x/relation/tag/special/add | https://api.bilibili.com | Field:access_key, Field:fid |
| classes13.dex:52676:POST | POST | /x/relation/tags/addUsers | https://api.bilibili.com | Field:access_key, Field:fids, Field:tagids |
| classes13.dex:52677:POST | POST | /x/relation/modify | https://api.bilibili.com | Query:access_key, Query:fid, Query:act, Query:re_src, Query:spmid, Query:from_spmid, Query:from_scmid, Query:extend_content, Query:action_id |
| classes13.dex:52678:POST | POST | /x/relation/tag/create | https://api.bilibili.com | Field:access_key, Field:tag |
| classes13.dex:52679:POST | POST | /x/relation/tag/special/del | https://api.bilibili.com | Field:access_key, Field:fid |
| classes13.dex:52680:GET | GET | /x/relation/blacks | https://api.bilibili.com | Query:access_key |
| classes13.dex:52681:GET | GET | /x/relation/tag/user | https://api.bilibili.com | Query:access_key, Query:fid |
| classes13.dex:52682:GET | GET | /x/relation | https://api.bilibili.com | Query:access_key, Query:fid |
| classes13.dex:52683:GET | GET | /x/relation/tag/m/tags | https://api.bilibili.com | Query:access_key |
| classes13.dex:52684:POST | POST | /x/relation/tag/update | https://api.bilibili.com | Field:access_key, Field:tagid, Field:name |
| classes13.dex:59053:POST | POST |  | https://api.live.bilibili.com | Url:map/body/dynamic |
| classes13.dex:60589:GET | GET | /live/getRoundPlayVideo | https://api.live.bilibili.com | Query:room_id |
| classes13.dex:60649:GET | GET | /xlive/open-interface/v2/tracker/conf | https://api.live.bilibili.com | QueryMap:map/body/dynamic |
| classes13.dex:60650:GET | GET | /xlive/app-room/v2/index/getRoomPlayInfo | https://api.live.bilibili.com | Query:room_id, Query:no_playurl, Query:qn, Query:free_type, Query:http, Query:dolby, Query:network, Query:mask, Query:media_type, Query:only_video, Query:play_type, Query:protocol, Query:format, Query:codec, Query:device_name, Query:special_scenario, Query:supported_drms, Query:eotf, Header:X-Live-Room-Password, Header:X-Live-Room-B-Staff-Token, Query:req_reason, Query:cam_id |
| classes13.dex:60651:GET | GET | /xlive/app-interface/v2/index/getRoomBaseInfo | https://api.live.bilibili.com | Query:ids |
| classes13.dex:60681:GET | GET | /xlive/general-interface/v1/content/get | https://api.live.bilibili.com | Query:key |
| classes13.dex:61190:POST | POST | /xlive/general-interface/v1/govern/CheckContent | https://api.live.bilibili.com | Field:content |
| classes13.dex:61191:POST | POST | /xlive/lottery-interface/v1/Anchor/GiveAddressInfo | https://api.live.bilibili.com | Field:address_id, Field:source, Field:id, Field:uid, Field:recipient, Field:phone, Field:address |
| classes13.dex:61793:POST | POST | /xlive/app-ucenter/v1/internalRoom/Bind | https://api.live.bilibili.com | Field:room_id, Field:token, Field:uid |
| classes13.dex:61794:POST | POST | /xlive/app-ucenter/v1/internalRoom/Auth | https://api.live.bilibili.com | Field:room_id, Field:live_token, Field:uid |
| classes13.dex:61796:POST | POST | /xlive/open-interface/v1/verifycode/Getcode | https://api.live.bilibili.com | Query:path, Query:show, Query:Referer |
| classes13.dex:61797:POST | POST | /xlive/open-interface/v1/verifycode/Verifycode | https://api.live.bilibili.com | Query:path, Query:data, Query:type, Query:Referer |
| classes13.dex:62105:GET | GET | /av/v1/PayLive/liveValidate | https://api.live.bilibili.com | Query:room_id |
| classes13.dex:62106:GET | GET | /av/v1/PayLive/buyValidate | https://api.live.bilibili.com | Query:goods_id |
| classes13.dex:62107:GET | GET | /xlive/app-ucenter/v1/payPlay/getInfo | https://api.live.bilibili.com | Query:room_id |
| classes13.dex:62811:GET | GET | /xlive/app-room/v1/giftPanel/roomGiftList | https://api.live.bilibili.com | Query:room_id, Query:ruid, Query:area_parent_id, Query:area_id, Query:source, Query:attr, Query:receive_users, Query:base_version, Query:scene |
| classes13.dex:62812:GET | GET | /xlive/app-room/v1/studio/getStudioList | https://api.live.bilibili.com | Query:room_id |
| classes13.dex:62813:GET | GET | /xlive/app-room/v1/giftPanel/tabRoomGiftList | https://api.live.bilibili.com | Query:room_id, Query:area_parent_id, Query:area_id, Query:source, Query:tab_id, Query:receive_users |
| classes13.dex:62814:GET | GET | /xlive/app-room/v1/gift/bag_list | https://api.live.bilibili.com | Query:room_id, Query:receive_users |
| classes13.dex:62815:GET | GET | /xlive/general-interface/v1/fullScSpecialEffect/GetEffectConfListV2 | https://api.live.bilibili.com | Query:room_id, Query:area_parent_id, Query:area_id, Query:source, Query:base_version |
| classes13.dex:62816:GET | GET | /xlive/app-room/v1/giftPanel/getGiftDetail | https://api.live.bilibili.com | Query:gift_ids, Query:room_id, Query:area_parent_id, Query:area_id, Query:source |
| classes13.dex:63279:GET | GET | /xlive/app-room/v1/dM/GetDMConfigByGroup | https://api.live.bilibili.com | Query:room_id, Query:room_type |
| classes13.dex:63593:GET | GET | /xlive/general-interface/v1/rank/queryContributionRank | https://api.live.bilibili.com | Query:room_id, Query:ruid, Query:type, Query:switch, Query:scene |
| classes13.dex:63594:GET | GET | /xlive/open-interface/v1/app_abtest | https://api.live.bilibili.com | Query:keys |
| classes13.dex:64184:GET | GET | /fans_medal/v2/FansMedal/live_check_gain | https://api.live.bilibili.com | Query:uid, Query:target_id |
| classes13.dex:64185:GET | GET | /xlive/app-ucenter/v1/fansMedal/user_medal_info | https://api.live.bilibili.com | Query:uid, Query:up_uid |
| classes13.dex:64705:GET | GET | /xlive/app-room/v1/stickers/getStickers | https://api.live.bilibili.com | Query:id |
| classes13.dex:65102:GET | GET | /xlive/revenue/v1/wallet/getCurrencyData | https://api.live.bilibili.com |  |
| classes13.dex:65341:POST | POST | /xlive/app-ucenter/v1/roomAdmin/dismiss | https://api.live.bilibili.com | Field:uid |
| classes13.dex:65342:POST | POST | /xlive/app-ucenter/v1/roomAdmin/appoint | https://api.live.bilibili.com | Field:uid |
| classes13.dex:65343:POST | POST | xlive/app-ucenter/v2/xbanned/banned/AddBlack | https://api.live.bilibili.com | Field:tuid, Field:anchor_id |
| classes13.dex:65344:POST | POST | /xlive/general-interface/v1/redAlarm/remove | https://api.live.bilibili.com | Query:module, Query:ruid, Query:room_id |
| classes13.dex:65345:POST | POST |  | https://api.live.bilibili.com | Url:map/body/dynamic, Field:sid, Field:csrf |
| classes14.dex:266:GET | GET | /x/wall/operator/ip/info | https://app.bilibili.com | Query:usermob |
| classes14.dex:2168:POST | POST | x/v2/dm/post | https://api.bilibili.com | Field:access_key, Field:type, Field:oid, Field:msg, Field:aid, Field:progress, Field:color, Field:fontsize, Field:pool, Field:mode, Field:rnd, Field:plat, Field:parent_id |
| classes14.dex:2169:POST | POST | /x/v2/dm/thumbup/add | https://api.bilibili.com | Field:access_key, Field:oid, Field:dmid, Field:op |
| classes14.dex:2378:GET | GET | /x/v2/space/article | https://app.bilibili.com | Query:access_Key, Query:vmid, Query:pn, Query:ps |
| classes14.dex:2379:GET | GET | /x/v2/favorite/article | https://app.bilibili.com | Query:access_key, Query:pn, Query:ps |
| classes14.dex:3308:POST | POST | /twirp/community.v1.Pink/ComicReadConversionPopupReport | https://manga.bilibili.com | Field:action |
| classes14.dex:3309:POST | POST | /twirp/community.v1.Pink/ComicReadConversionPopup | https://manga.bilibili.com | Field:comic_id, Field:ep_id, Field:read_ep_count, Field:switch_ep_count |
| classes14.dex:4306:GET | GET | /x/bplus/draw/search/users | https://app.bilibili.com | Query:uid, Query:keyword, Query:page, Query:page_size |
| classes14.dex:4307:GET | GET | /x/bplus/draw/search/items | https://app.bilibili.com | Query:uid, Query:keyword, Query:page, Query:page_size |
| classes14.dex:4308:GET | GET | /x/bplus/draw/search/all | https://app.bilibili.com | Query:uid, Query:keyword, Query:lat, Query:lng |
| classes14.dex:4309:GET | GET | /x/bplus/draw/search/locations | https://app.bilibili.com | Query:uid, Query:keyword, Query:lat, Query:lng, Query:page, Query:page_size |
| classes14.dex:4310:GET | GET | /x/bplus/draw/search/topics | https://app.bilibili.com | Query:uid, Query:keyword, Query:page, Query:page_size |
| classes14.dex:4313:GET | GET | /dwp/api/openApi/v1/window/authority | https://cm.bilibili.com | Query:uid |
| classes14.dex:4314:GET | GET | /dwp/api/openApi/v1/window/list | https://cm.bilibili.com | Query:source_type, Query:name_like, Query:uid, Query:page, Query:size |
| classes14.dex:10337:POST | POST | client/mobile/push/download_snapshot_push | https://gpapi.biligame.net/game-report/ | Query:download_snapshot |
| classes14.dex:10338:POST | POST | client/mobile/push/download_push | https://gpapi.biligame.net/game-report/ | Query:game_base_id, Query:push_type, Query:push_time |
| classes14.dex:10544:POST | POST | user/download_event_report | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:event_type |
| classes14.dex:10545:GET | GET | api/h5/game/center/user/gametoken/link | https://line3-h5-mobile-api.biligame.com/ | Query:game_base_id, Query:device_id |
| classes14.dex:19312:POST | POST | /x/v2/history/report | https://api.bilibili.com | FieldMap:map/body/dynamic |
| classes14.dex:19398:POST | POST | /x/topic/fav/sub/cancel | https://app.bilibili.com | Field:topic_set_id |
| classes14.dex:22068:POST | POST | /x/garb/right/echo/background_bind | http://api.bilibili.com | Field:bg_id, Field:biz_id |
| classes14.dex:22069:GET | GET | /x/garb/right/echo/background_list | http://api.bilibili.com | Query:biz_id |
| classes14.dex:22336:GET | GET | /x/upower/echo/info |  | Query:up_mid |
| classes14.dex:22526:GET | GET | /x/upower/echo/shortcut/info |  | Query:ai_mid, Query:msg_key |
| classes14.dex:22558:GET | GET | /x/im/feed/info | https://api.vc.bilibili.com | Query:aids, Query:article_ids, Query:ep_ids, Query:am_ids |
| classes14.dex:22559:POST | POST | /link_group/v1/group/appoint_admin | https://api.vc.bilibili.com | Field:group_id, Field:admin_id |
| classes14.dex:22560:POST | POST | /link_group/v1/member/buy_medal | https://api.vc.bilibili.com | Field:master_uid, Field:coin_type |
| classes14.dex:22561:POST | POST | /link_group/v1/group/fire_admin | https://api.vc.bilibili.com | Field:group_id, Field:admin_id |
| classes14.dex:22562:POST | POST | /link_group/v1/group/create_friend_group_check | https://api.vc.bilibili.com |  |
| classes14.dex:22563:POST | POST | /link_group/v1/group/create_check | https://api.vc.bilibili.com | Field:type |
| classes14.dex:22564:POST | POST | /x/im/recommend_card/check_status | https://api.vc.bilibili.com | Body:map/body/dynamic |
| classes14.dex:22565:POST | POST | /link_group/v1/group/create | https://api.vc.bilibili.com | Field:name, Field:type, Field:level, Field:face, Field:notice |
| classes14.dex:22566:POST | POST | /link_group/v1/group/disband | https://api.vc.bilibili.com | Field:group_id |
| classes14.dex:22567:POST | POST | /link_group/v1/member/exit | https://api.vc.bilibili.com | Field:group_id |
| classes14.dex:22568:GET | GET | /auto_reply_svr/v1/auto_reply_svr/show_toast?type=2 | https://api.vc.bilibili.com |  |
| classes14.dex:22569:GET | GET | /link_group/v1/member/available_groups | https://api.vc.bilibili.com | Query:master_uid |
| classes14.dex:22570:GET | GET | /link_group/v1/group/detail | https://api.vc.bilibili.com | Query:group_id |
| classes14.dex:22571:GET | GET | /link_group/v1/group/member_list | https://api.vc.bilibili.com | Query:group_id |
| classes14.dex:22572:GET | GET | /link_setting/v1/link_setting/get_sys_setting | https://api.vc.bilibili.com |  |
| classes14.dex:22573:GET | GET | /link_setting/v1/link_setting/get_session_ss | https://api.vc.bilibili.com | Query:talker_uid |
| classes14.dex:22574:GET | GET | /link_setting/v1/link_setting/get_msg_dnd | https://api.vc.bilibili.com | Query:own_uid, Query:uids_str, Query:group_ids_str |
| classes14.dex:22575:POST | POST | /link_setting/v1/link_setting/get | https://api.vc.bilibili.com | Field:show_unfollowed_msg, Field:msg_notify |
| classes14.dex:22576:GET | GET | /x/im/client_config | https://api.vc.bilibili.com |  |
| classes14.dex:22577:GET | GET | /user/v1/user/details | https://api.vc.bilibili.com | Query:uids |
| classes14.dex:22578:GET | GET | /x/im/user_infos | https://api.vc.bilibili.com | Query:uids, Query:style |
| classes14.dex:22579:GET | GET | https://customerservice.bilibili.com/x/custom/msg_svr/v1/video_sign | https://api.vc.bilibili.com | Query:key |
| classes14.dex:22580:GET | GET | /link_setting/v1/link_setting/is_limit | https://api.vc.bilibili.com | Query:uid, Query:type |
| classes14.dex:22581:POST | POST | /link_group/v1/group/join_apply_v2 | https://api.vc.bilibili.com | Field:group_id |
| classes14.dex:22582:GET | GET | auto_reply_svr/v1/auto_reply_svr/record_toast_status?type=2 | https://api.vc.bilibili.com |  |
| classes14.dex:22583:POST | POST | /link_group/v1/member/remove | https://api.vc.bilibili.com | Field:group_id, Field:member_uids |
| classes14.dex:22584:POST | POST | /link_group/v1/group/join_reply | https://api.vc.bilibili.com | Field:apply_id, Field:reply_type |
| classes14.dex:22585:GET | GET | /link_setting/v1/link_setting/bilibili_uid | https://api.vc.bilibili.com |  |
| classes14.dex:22586:GET | GET | /link_dynamic/v1/dynamic/owner_dynamic | https://api.vc.bilibili.com | Query:owner_uid, Query:group_id |
| classes14.dex:22587:POST | POST | /link_setting/v1/link_setting/set_msg_dnd | https://api.vc.bilibili.com | Field:dnd_uid, Field:dnd_group_id, Field:uid, Field:setting |
| classes14.dex:22588:POST | POST | /link_setting/v1/link_setting/set_push_ss | https://api.vc.bilibili.com | Field:talker_uid, Field:setting |
| classes14.dex:22589:POST | POST | /link_setting/v1/link_setting/set | https://api.vc.bilibili.com | FieldMap:map/body/dynamic |
| classes14.dex:22590:GET | GET | /link_setting/v1/link_setting/sign_in | https://api.vc.bilibili.com | Query:owner_id, Query:group_id |
| classes14.dex:22591:POST | POST | /link_group/v1/group/disable_fans_group | https://api.vc.bilibili.com |  |
| classes14.dex:22592:POST | POST | /link_group/v1/group/update | https://api.vc.bilibili.com | Field:group_id, Field:name, Field:notice, Field:face |
| classes14.dex:22593:POST | POST | https://customerservice.bilibili.com/x/custom/call_svr/v1/upload_bfs | https://api.vc.bilibili.com | Part:biz, Part:timestamp, Part:rnd, Query:access_key, Part:map/body/dynamic |
| classes14.dex:22594:POST | POST | /api/v1/image/upload | https://api.vc.bilibili.com | Part:timestamp, Part:rnd, Query:access_key, Part:map/body/dynamic |
| classes14.dex:22595:POST | POST | https://api.bilibili.com/x/dynamic/feed/draw/upload_bfs | https://api.vc.bilibili.com | Part:biz, Part:timestamp, Part:rnd, Query:access_key, Part:map/body/dynamic |
| classes14.dex:22596:POST | POST | https://customerservice.bilibili.com/x/custom/msg_svr/v1/upload | https://api.vc.bilibili.com | Part:biz, Part:timestamp, Part:rnd, Part:mid, Part:filename, Query:access_key, Part:map/body/dynamic |
| classes14.dex:22597:GET | GET | /userext/v1/user/detail | https://api.live.bilibili.com | Query:wallet |
| classes14.dex:22598:GET | GET | /fans_medal/v1/fans_medal/details | https://api.live.bilibili.com | Query:uids, Query:master_id |
| classes14.dex:22599:GET | GET | /x/relation/followings/simple | https://api.bilibili.com |  |
| classes14.dex:22600:GET | GET | /x/relation/tag/special | https://api.bilibili.com |  |
| classes14.dex:22601:POST | POST | api/notify/clear.up_unread.do | https://message.bilibili.com |  |
| classes14.dex:22604:GET | GET | /x/custom/call_svr/v1/shop_info | https://customerservice.bilibili.com/ | Query:shop_id |
| classes14.dex:24955:POST | POST | /x/relation/modify | http://api.bilibili.com | Query:access_key, Query:fid, Query:act, Query:re_src |
| classes14.dex:24956:GET | GET | /x/relation/fans | http://api.bilibili.com | Query:access_key, Query:vmid, Query:pn, Query:ps, Query:re_version, Query:scene |
| classes14.dex:24957:GET | GET | /x/relation/followings | http://api.bilibili.com | Query:access_key, Query:vmid, Query:pn, Query:ps, Query:re_version, Query:scene |
| classes14.dex:33168:GET | GET | /x/app/v3/material/camera/pre | https://member.bilibili.com |  |
| classes14.dex:33419:POST | POST | /x/msgfeed/notice | https://api.bilibili.com | Field:id, Field:tp, Field:notice_state |
| classes14.dex:33420:POST | POST | /x/msgfeed/del | https://api.bilibili.com | Field:id, Field:tp |
| classes14.dex:33421:GET | GET | /x/msgfeed/at | https://api.bilibili.com | Query:id, Query:at_time |
| classes14.dex:33422:GET | GET | /x/msgfeed/like | https://api.bilibili.com | Query:id, Query:like_time |
| classes14.dex:33423:GET | GET | /x/msgfeed/reply | https://api.bilibili.com | Query:id, Query:reply_time |
| classes14.dex:36645:GET | GET | /pgc/freya/label/config | http://api.bilibili.com |  |
| classes14.dex:36646:POST | POST | /pgc/freya/label/update | http://api.bilibili.com | Field:update_range, Field:sex, Field:birthday, Field:label_ids, Field:match_sex |
| classes14.dex:36774:GET | GET | /pgc/freya/com/im/msg/history | http://api.bilibili.com | Query:room_id, Query:biz_type, Query:report, Query:start_msg_id, Query:page_size |
| classes14.dex:36775:POST | POST | /pgc/freya/com/im/msg/handle | http://api.bilibili.com | Field:room_id, Field:biz_type, Field:msg_id, Field:type, Field:report |
| classes14.dex:36776:POST | POST | /pgc/freya/com/room/join | http://api.bilibili.com | Field:room_id, Field:biz_type, Field:report, Field:is_visitor |
| classes14.dex:36777:POST | POST | /pgc/freya/com/room/leave | http://api.bilibili.com | Field:room_id, Field:biz_type, Field:report, Field:is_visitor |
| classes14.dex:36778:POST | POST | /pgc/freya/com/room/report | http://api.bilibili.com | Field:room_id, Field:event_id, Field:biz_type, Field:report |
| classes14.dex:36780:POST | POST | /pgc/freya/com/im/msg/send | http://api.bilibili.com | Field:room_id, Field:biz_type, Field:content_type, Field:content, Field:req_id, Field:report |
| classes14.dex:37665:POST | POST | /pugv/app/favorite/attention/add | https://api.bilibili.com | Field:season_id, Field:from_spmid, Field:csource |
| classes14.dex:37666:POST | POST | /pugv/app/favorite/add | https://api.bilibili.com | Field:season_id, Field:from_spmid, Field:spmid, Field:action_id |
| classes14.dex:37667:POST | POST | pugv/app/favorite/del | https://api.bilibili.com | Field:season_id, Field:from_spmid, Field:spmid, Field:action_id |
| classes14.dex:37675:POST | POST | /pugv/pay/api/change/class/dialog/android | https://api.bilibili.com | Field:sdk_version, Field:change_id, Field:search_id, Field:search_query, Field:oaid |
| classes14.dex:37676:POST | POST | /pugv/pay/api/change/class/android | https://api.bilibili.com | Field:source, Field:csource, Field:pay_channel, Field:pay_channel_id, Field:real_channel, Field:is_deduct_bp, Field:change_id, Field:report_params, Field:promotion_id |
| classes14.dex:37677:POST | POST | /pugv/pay/api/order/create/large/pay | https://api.bilibili.com | Field:season_id, Field:source, Field:coupon_token, Field:csource, Field:msource, Field:product_id, Field:product_type, Field:search_id, Field:search_query, Field:report_params |
| classes14.dex:37678:POST | POST | /pugv/pay/api/order/check | https://api.bilibili.com | Field:order_id, Field:access_key |
| classes14.dex:37679:POST | POST | /pugv/pay/api/season/free | https://api.bilibili.com | Field:source, Field:csource, Field:product_id, Field:product_type, Field:search_id, Field:search_query, Field:msource, Field:report_params |
| classes14.dex:37680:POST | POST | /pugv/pay/api/order/create/v2 | https://api.bilibili.com | Field:season_id, Field:source, Field:coupon_token, Field:pay_channel, Field:pay_channel_id, Field:real_channel, Field:is_deduct_bp, Field:csource, Field:msource, Field:product_id, Field:product_type, Field:search_id, Field:search_query, Field:report_params, Field:promotion_id |
| classes14.dex:37681:POST | POST | /pugv/pay/api/pay/dialog/new/v2 | https://api.bilibili.com | Field:season_id, Field:batch_token, Field:is_receive, Field:sdk_version, Field:access_key, Field:csource, Field:product_id, Field:product_type, Field:spmid, Field:from_spmid, Field:scene_mark, Field:search_id, Field:search_query, Field:oaid |
| classes14.dex:38441:POST | POST | /pugv/pay/api/order/create | https://api.bilibili.com | Field:season_id, Field:source, Field:coupon_token, Field:access_key, Field:csource, Field:msource, Field:product_id, Field:product_type, Field:search_id, Field:search_query, Field:report_params |
| classes14.dex:38442:POST | POST | /pugv/pay/api/pay/dialog/new | https://api.bilibili.com | Field:season_id, Field:batch_token, Field:is_receive, Field:sdk_version, Field:access_key, Field:csource, Field:product_id, Field:product_type, Field:spmid, Field:from_spmid, Field:search_id, Field:search_query |
| classes14.dex:38443:GET | GET | /pugv/pay/api/package/check | https://api.bilibili.com | Query:pack_id, Query:batch_token |
| classes14.dex:38575:POST | POST | /pugv/view/api/del_following | https://api.bilibili.com | Field:seasonId, Field:mid |
| classes14.dex:38576:GET | GET | /pugv/pay/api/share/paid | https://api.bilibili.com | Query:season_id |
| classes14.dex:38888:POST | POST | /x/article/complaints | https://api.bilibili.com | Header:x-bili-gaia-vtoken, Query:access_key, Field:aid, Field:cid, Field:images, Field:reason |
| classes14.dex:38889:GET | GET | /x/article/categories | https://api.bilibili.com |  |
| classes14.dex:38890:GET | GET | x/article/list/articles | https://api.bilibili.com | Query:access_key, Query:id |
| classes14.dex:38891:GET | GET | /x/article/viewinfo | https://api.bilibili.com | Query:access_key, Query:id, Query:from |
| classes14.dex:38892:GET | GET | /x/article/edit_times | https://api.bilibili.com | Query:id |
| classes14.dex:38893:GET | GET | x/article/listinfo | https://api.bilibili.com | Query:id |
| classes14.dex:38894:GET | GET | /x/article/recommends | https://api.bilibili.com | Query:access_key, Query:cid, Query:pn, Query:ps, Query:aids, Query:sort, Query:from |
| classes14.dex:38895:GET | GET | /x/article/recommends/plus | https://api.bilibili.com | Query:access_key, Query:cid, Query:pn, Query:ps, Query:aids, Query:sort, Query:from |
| classes14.dex:38896:GET | GET | x/article/hotspots | https://api.bilibili.com | Query:id, Query:pn, Query:ps, Query:aids, Query:sort |
| classes14.dex:38897:POST | POST | /x/article/like | https://api.bilibili.com | Query:access_key, Field:id, Field:type, Field:from_spmid, Field:spmid, Field:action_id |
| classes14.dex:38898:GET | GET | /x/article/sentinel/config | https://api.bilibili.com |  |
| classes14.dex:38899:POST | POST | /x/relation/modify | https://api.bilibili.com | Query:access_key, Field:fid, Field:act, Field:re_src |
| classes14.dex:38900:POST | POST | /x/article/favorites/del | https://api.bilibili.com | Field:access_key, Field:id |
| classes14.dex:38901:GET | GET | /x/article/addview | https://api.bilibili.com | Query:access_key, Query:page, Query:from |
| classes14.dex:38902:POST | POST | /x/article/creative/upload/image | https://api.bilibili.com | Query:access_key, Part:map/body/dynamic |
| classes14.dex:39512:POST | POST | /x/article/creative/article/delete | https://api.bilibili.com | Query:access_key, Query:aid |
| classes14.dex:39513:GET | GET | /x/article/creative/article/list | https://api.bilibili.com | Query:access_key, Query:pn, Query:ps, Query:sort, Query:group |
| classes14.dex:39514:GET | GET | /x/article/is_author | https://api.bilibili.com | Query:access_key, Query:mid |
| classes14.dex:39515:POST | POST | /x/article/creative/article/withdraw | https://api.bilibili.com | Query:access_key, Query:aid |
| classes14.dex:39538:POST | POST | /x/article/creative/draft/delete | https://api.bilibili.com | Query:access_key, Query:aid |
| classes14.dex:39539:GET | GET | /x/article/creative/draft/list | https://api.bilibili.com | Query:access_key, Query:pn, Query:ps |
| classes14.dex:39822:POST | POST | /x/v2/view/report/upload | https://app.bilibili.com | Query:access_key, Part:aid, Part:mid, Part:map/body/dynamic |
| classes14.dex:40714:GET | GET | /x/resource/broadcast/servers?platform=android | https://app.bilibili.com |  |
| classes14.dex:40738:POST | POST | https://api.bilibili.com/x/ugcpay/v3/trade/elec/create | http://elec.bilibili.com | FieldMap:map/body/dynamic |
| classes14.dex:40739:POST | POST | https://api.bilibili.com/x/ugcpay/v1/trade/elec/message | http://elec.bilibili.com | FieldMap:map/body/dynamic |
| classes14.dex:40740:GET | GET | https://api.bilibili.com/x/ugcpay/v1/trade | http://elec.bilibili.com | Query:access_key, Query:order_id |
| classes14.dex:40760:GET | GET | /x/ugcpay/v1/reply/validate | https://api.bilibili.com | Query:bp_num, Query:up_mid |
| classes14.dex:40761:GET | GET | /x/ugcpay/v2/trade/elec/panel | https://api.bilibili.com | Query:elec_level, Query:elec_scene |
| classes14.dex:40762:GET | GET | /x/ugcpay/v1/up/reply/validate | https://api.bilibili.com | Query:up_mid |
| classes14.dex:40763:GET | GET | /x/ugcpay-rank/v1/elec/month/up | https://api.bilibili.com | QueryMap:map/body/dynamic |
| classes14.dex:40764:GET | GET | /x/ugcpay-rank/v1/elec/month | https://api.bilibili.com | Query:up_mid, Query:av_id |
| classes14.dex:40765:POST | POST | /x/upower/ad/range/refresh | https://api.bilibili.com | Field:up_mid, Field:cid |
| classes14.dex:43217:OPTIONS | OPTIONS |  |  | Url:map/body/dynamic, HeaderMap:map/body/dynamic |
| classes14.dex:43218:GET | GET |  |  | Url:map/body/dynamic, HeaderMap:map/body/dynamic |
| classes14.dex:43219:POST | POST |  |  | Url:map/body/dynamic, HeaderMap:map/body/dynamic, Body:map/body/dynamic |
| classes14.dex:47186:GET | GET | /x/vas/smelt/card/tutorial |  |  |
| classes14.dex:47187:GET | GET | /x/vas/dlc_act/card/splash_info |  | Query:act_id, Query:card_type_id, Query:screen_width, Query:screen_height |
| classes14.dex:47188:GET | GET | /x/vas/smelt/card/property_info |  | Query:vmid, Query:card_id |
| classes14.dex:47189:GET | GET | /x/vas/nftcard/isallowtransfer |  | Query:act_id, Query:card_id |
| classes14.dex:47190:POST | POST | /x/vas/smelt/my_decompose/lock |  | Body:map/body/dynamic |
| classes14.dex:47191:GET | GET | /x/vas/dlc_act/card_right/usage |  | Query:act_id, Query:card_id, Query:card_type_id |
| classes14.dex:49686:GET | GET | /x/vas/dlc_act/card/widget_info_v2 |  | Query:raw |
| classes14.dex:51968:POST | POST | /x/wall/telecom/active/state/log | https://app.bilibili.com | Query:bid, Query:open_id, Query:code, Query:msg |
| classes14.dex:51969:GET | GET | /x/wall/telecom/active/state | https://app.bilibili.com | Query:usermob, Query:captcha |
| classes14.dex:51970:POST | POST | https://card.e.189.cn/openapi/flow/getOpenId.do | https://app.bilibili.com | Body:map/body/dynamic |
| classes14.dex:51971:POST | POST | /x/wall/telecom/card/sms | https://app.bilibili.com | Field:usermob |
| classes14.dex:51972:GET | GET | https://app.bilibili.com/x/wall/unicom/active/state | https://csapi.bol.wo.cn | Query:auto, Query:usermob, Query:pip, Query:fake_id, Query:need_flow_auto |
| classes14.dex:51973:POST | POST | https://app.bilibili.com/x/wall/unicom/order/flow/tryout | https://csapi.bol.wo.cn | Query:pip, Query:fake_id |
| classes14.dex:51974:GET | GET | /videoif/smsNumber.do | https://csapi.bol.wo.cn | Query:userid, Query:vcode |
| classes14.dex:51975:GET | GET | /videoif/sendSmsCode.do | https://csapi.bol.wo.cn | Query:userid |
| classes14.dex:51976:GET | GET | https://csapi.bol.wo.cn/videoif/order.do | https://csapi.bol.wo.cn | Query:spid, Query:ordertype, Query:userid, Query:token |
| classes14.dex:52099:GET | GET | /x/wall/unicom/state | https://app.bilibili.com | Query:usermob |
| classes14.dex:52100:GET | GET | /x/wall/operator/ip | https://app.bilibili.com | Query:usermob, Query:operator, Query:pip, Query:local_result, Query:local_info |
| classes14.dex:58802:GET | GET | /x/article/creative/draft/count | https://api.bilibili.com | Query:access_key |
| classes14.dex:62059:GET | GET | /x/app/up/info | https://member.bilibili.com | Query:access_key |
| classes14.dex:63117:POST | POST | /twirp/comic.v1.MainStation/ListFavorite | https://manga.bilibili.com | Field:access_key, Field:page_size, Field:page_num, Field:track_url |
| classes14.dex:63118:POST | POST | /twirp/comic.v1.Comic/GetABFlags | https://manga.bilibili.com | Field:names |
| classes14.dex:63119:GET | GET | /x/v2/space/comic | https://app.bilibili.com | Query:vmid, Query:ps, Query:pn |
| classes14.dex:63120:GET | GET | /x/v2/space/subcomic | https://app.bilibili.com | Query:vmid, Query:ps, Query:pn |
| classes14.dex:65026:GET | GET | /x/wall/mobile/active/state | https://app.bilibili.com | Query:usermob |
| classes14.dex:65027:GET | GET | http://wap.cmpassport.com/openapi/wabpGetUseInfo? | https://app.bilibili.com | QueryMap:map/body/dynamic |
| classes15.dex:848:POST | POST | /x/v2/account/config/set | https://app.bilibili.com | Field:buvid, Field:access_key, Field:ad_special, Field:sensor_access |
| classes15.dex:1218:POST | POST | /xlive/app-ucenter/v1/conf/SetConf | https://api.live.bilibili.com | Field:type, Field:content, Field:target_id |
| classes15.dex:2153:GET | GET | detail/multi/game_card | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_ids |
| classes15.dex:8441:GET | GET | /x/share/guide | https://api.bilibili.com | QueryMap:map/body/dynamic |
| classes15.dex:12342:GET | GET | /xlive/app-room/v1/index/shareConf | https://api.live.bilibili.com | Query:room_id, Query:target_platform |
| classes15.dex:12530:POST | POST | /pgc/freya/share/invite | http://api.bilibili.com | Field:room_id |
| classes15.dex:17108:GET | GET | /x/ugcpay/v2/trade/elec/panel | https://api.bilibili.com | Query:access_key, Query:mid |
| classes15.dex:18407:GET | GET | x/v2/history/shadow | https://api.bilibili.com |  |
| classes15.dex:18408:POST | POST | x/v2/history/shadow/set | https://api.bilibili.com | Field:switch |
| classes15.dex:20378:GET | GET | /x/v2/display/zone | https://app.bilibili.com | Query:access_key |
| classes15.dex:20414:GET | GET | /x/push/setting/get2 | https://api.bilibili.com | Query:access_key |
| classes15.dex:20415:POST | POST | /x/push/setting/set | https://api.bilibili.com | Query:access_key, Query:type, Query:value |
| classes15.dex:23771:GET | GET | /pgc/view/v2/app/season | https://api.bilibili.com | QueryMap:map/body/dynamic |
| classes15.dex:23772:GET | GET | /pgc/view/v2/story/season | https://api.bilibili.com | QueryMap:map/body/dynamic |
| classes15.dex:23773:POST | POST | /pgc/report/dolby | https://api.bilibili.com | Body:map/body/dynamic |
| classes15.dex:23776:POST | POST | /pgc/season/share/complete | https://api.bilibili.com | Field:share_channel, Field:share_trace_id, Field:from, Field:season_id, Field:ep_id, Field:from_temp |
| classes15.dex:23777:POST | POST | /pgc/season/share/click | https://api.bilibili.com | Field:share_channel, Field:share_trace_id, Field:from, Field:season_id, Field:ep_id |
| classes15.dex:24083:POST | POST | /x/v2/history/report | https://api.bilibili.com | Field:cid, Field:aid, Field:sid, Field:epid, Field:source, Field:duration, Field:progress, Field:type, Field:sub_type, Field:realtime, Field:device_ts, Field:start_ts |
| classes15.dex:27842:GET | GET | /sponsor/api/point | https://bangumi.bilibili.com | Query:amount |
| classes15.dex:28855:GET | GET | /xlive/app-room/v1/giftPanel/giftMessageV2 | https://api.live.bilibili.com | Query:room_id, Query:target_id, Query:gift_id, Query:price, Query:coin_type, Query:is_fans_club_ticket, Query:gift_attrs, Query:anchor_guest, Query:upgrade_original_gift_id |
| classes15.dex:28856:POST | POST | /xlive/general-interface/v1/redAlarm/remove | https://api.live.bilibili.com | Query:module, Query:ruid, Query:room_id |
| classes15.dex:30736:GET | GET | activity/center/home | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30737:POST | POST | user/relationship/add_block | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:fid, Query:spmid |
| classes15.dex:30738:GET | GET | tag/user/follow/category/add | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:sdk_type, Query:category_id |
| classes15.dex:30739:POST | POST | comment/add | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:grade, Query:comment_type, Query:content, Query:device_type, Query:dynamic_repost, Query:game_name, Query:icon, Query:url, Query:extra_stars, Query:desc_text, Query:av_ids, Query:need_risk_control, Query:challenge, Query:validate, Query:seccode, Query:userid, Query:gs, Query:token, Query:captcha_code, Query:account_change, Query:show_play_duration |
| classes15.dex:30740:GET | GET | tag/user/follow/category/add | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:category_id |
| classes15.dex:30741:POST | POST | comment/reply/add | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:content, Query:comment_no, Query:reply_type, Query:to_uid, Query:to_user_name, Query:to_reply_no, Query:need_risk_control, Query:challenge, Query:validate, Query:seccode, Query:userid, Query:gs, Query:token, Query:captcha_code |
| classes15.dex:30742:GET | GET | news/article/view | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:article_id |
| classes15.dex:30743:POST | POST | detail/order_and_receive_benefit | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:source, Query:challenge, Query:validate, Query:seccode, Query:userid, Query:gs, Query:token, Query:captcha_code, Query:bgame_from, Query:source_from, Query:from_game, Query:page_id, Query:btn_id, Query:real_url, Query:source_game_center, Query:extra |
| classes15.dex:30744:POST | POST | detail/order/v2 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:challenge, Query:validate, Query:seccode, Query:userid, Query:gs, Query:source, Query:bgame_from, Query:source_from, Query:from_game, Query:page_id, Query:btn_id, Query:real_url, Query:source_game_center, Query:extra |
| classes15.dex:30745:POST | POST | detail/captcha_order/v2 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:token, Query:captcha_code, Query:source, Query:bgame_from, Query:source_from, Query:from_game, Query:page_id, Query:btn_id, Query:real_url, Query:source_game_center |
| classes15.dex:30746:POST | POST | detail/order/v3 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:source, Query:challenge, Query:validate, Query:seccode, Query:userid, Query:gs, Query:token, Query:captcha_code, Query:bgame_from, Query:source_from, Query:from_game, Query:page_id, Query:btn_id, Query:real_url, Query:source_game_center, Query:extra |
| classes15.dex:30747:POST | POST | detail/order_auto_download | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:source, Query:challenge, Query:validate, Query:seccode, Query:userid, Query:gs, Query:token, Query:captcha_code, Query:bgame_from, Query:source_from, Query:from_game, Query:page_id, Query:btn_id, Query:real_url, Query:source_game_center, Query:extra |
| classes15.dex:30748:POST | POST | cancel_book/v2 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_ids, Query:bgame_from, Query:source_from |
| classes15.dex:30749:GET | GET | detail/order/recommend/status | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:30750:GET | GET | detail/user/clear_panel_notification | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:biz_type |
| classes15.dex:30751:GET | GET | message/user/tab/red_point/clear | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:message_type |
| classes15.dex:30752:POST | POST | user/cloud_game/recent_play/list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30753:POST | POST | news/article/favorite | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:article_id, Query:status |
| classes15.dex:30754:POST | POST | wiki/subscribe | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:wiki_link, Query:wiki_title, Query:game_base_id, Query:subscribe_status |
| classes15.dex:30755:POST | POST | comment/report | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Field:game_base_id, Field:comment_no |
| classes15.dex:30756:POST | POST | comment/report | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:comment_no, Query:report_type, Query:report_name, Query:report_msg |
| classes15.dex:30757:POST | POST | comment/delete | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:comment_no |
| classes15.dex:30758:GET | GET | desktop_widget/recommend_games | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size |
| classes15.dex:30759:GET | GET | desktop_widget/refresh | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:rank_adjust |
| classes15.dex:30760:GET | GET | small/game/follow/list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size |
| classes15.dex:30761:GET | GET | user/order/auto_download_status/game_list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30762:GET | GET | detail/game_card/v2 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:channel_id, Query:channel_extra, Query:source_from |
| classes15.dex:30763:GET | GET | detail/game_card/v2 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:channel_id, Query:channel_extra, Query:source_from |
| classes15.dex:30764:GET | GET | small/game/guess/like | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size |
| classes15.dex:30765:GET | GET | small/game/recent/play | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size |
| classes15.dex:30766:GET | GET | comment/uper/video_list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size |
| classes15.dex:30767:GET | GET | user/played/game_pkg_list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size |
| classes15.dex:30768:GET | GET | tag/total/category/list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size |
| classes15.dex:30769:GET | GET | home/recommend_video | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:from, Query:buvid, Query:first_time, Query:game_base_id |
| classes15.dex:30770:GET | GET | comment/user/my_message/attitude/page | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num |
| classes15.dex:30771:GET | GET | home/book/page | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size, Query:sort_type |
| classes15.dex:30772:GET | GET | home/book/page/config | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30773:GET | GET | home/download/notify | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30774:GET | GET | user/payment/cashier/config | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:product_id, Query:sdk_type_id |
| classes15.dex:30775:GET | GET | user/payment/cashier/coupon_list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:product_id, Query:sdk_type_id, Query:order_amount |
| classes15.dex:30776:GET | GET | tag/top/category/list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:sdk_type |
| classes15.dex:30777:GET | GET | tag/category/game_list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:sdk_type, Query:category_id, Query:tag_id, Query:page_num, Query:page_size, Query:sort_type, Query:filter_type |
| classes15.dex:30778:GET | GET | tag/category/tag_list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:sdk_type, Query:category_id |
| classes15.dex:30779:GET | GET | tag/category/guess_like_list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30780:GET | GET | user/cloud_game/recent/play/v2 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size, Query:keyword |
| classes15.dex:30781:POST | POST | comment/detail | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:comment_no |
| classes15.dex:30782:GET | GET | comment/history/list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:comment_no, Query:count |
| classes15.dex:30783:GET | GET | top_charts/get/copywriting | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:key |
| classes15.dex:30784:GET | GET | cps_migration/panel | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:30785:GET | GET | cps_migration/pegasus/card | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30786:GET | GET | tag/user/follow/all/category/list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30787:GET | GET | discover/banner | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30788:GET | GET | tag/category/list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30789:GET | GET | discover/rank | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30790:GET | GET | discover/total/page/v2 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size |
| classes15.dex:30791:POST | POST | user/download | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Field:pkg_name_list |
| classes15.dex:30792:POST | POST | user/download/v2 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Field:game_channel_list |
| classes15.dex:30793:POST | POST | comment/switch | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:30794:GET | GET | user/entrance_list_v2 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30795:GET | GET | tag/user/follow/category/list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:sdk_type, Query:page_num |
| classes15.dex:30796:GET | GET | home/recommend_game/list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30797:GET | GET | user/follow/game_list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size |
| classes15.dex:30798:GET | GET | user/relationship/follower_list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:vmid, Query:pn, Query:ps |
| classes15.dex:30799:GET | GET | user/relationship/following_list?re_version=&order=des | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:vmid, Query:pn, Query:ps |
| classes15.dex:30800:GET | GET | gift/forum_gift | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num |
| classes15.dex:30801:GET | GET | user/game_download/free/get_pay_url | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:30802:GET | GET | discover/get_future_start_test_list_detail | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size, Query:strategy, Query:is_new_start_test |
| classes15.dex:30803:GET | GET | book/game/detail | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:30804:GET | GET | user/game_download/get_crypto_url | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:30805:GET | GET | home/land_page_list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:module_id, Query:page_num, Query:page_size |
| classes15.dex:30806:GET | GET | discover/collection/gamelist | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:collection_id, Query:page_num, Query:page_size, Query:filter_type |
| classes15.dex:30807:GET | GET | tag/game/list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:tag_id, Query:page_num, Query:page_size, Query:sort_type |
| classes15.dex:30808:GET | GET | search/gift | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:keyword |
| classes15.dex:30809:GET | GET | user/related_game_list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30810:GET | GET | gift/user_expired_gift | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:need_vip_gift |
| classes15.dex:30811:GET | GET | home/ad/current/v2 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30812:GET | GET | home/recent_new/gamelist | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30813:GET | GET | message/user/home_bell/red_point | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30814:GET | GET | discover/activity/page_list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_number, Query:page_size |
| classes15.dex:30815:GET | GET | comment/hot/page | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size |
| classes15.dex:30816:GET | GET | comment/hot | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30817:GET | GET | home/hot/game/list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size |
| classes15.dex:30818:GET | GET | home/hot_client_game_list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size |
| classes15.dex:30819:GET | GET | message/bulletin | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30820:GET | GET | user/played/pkg_list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size |
| classes15.dex:30821:GET | GET | user/favorite/strategy | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size |
| classes15.dex:30822:GET | GET | user/favorite/wiki | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size |
| classes15.dex:30823:GET | GET | message/user/my_game/page | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num |
| classes15.dex:30824:GET | GET | user/myinfo | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30825:GET | GET | home/new/game/list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size |
| classes15.dex:30826:POST | POST | user/download/notify/status | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30827:GET | GET | game/book_game_recommend | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:30828:GET | GET | detail/user/panel_v2 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:30829:GET | GET | user/payment/switch | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30830:GET | GET | game/module/get_module | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:30831:GET | GET | home/subscribe_game/list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30832:GET | GET | wechat/qrcode/info | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30833:GET | GET | top_charts/top_b_index | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size |
| classes15.dex:30834:GET | GET | top_charts/mobile_hot | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size |
| classes15.dex:30835:GET | GET | top_charts/tag_ranks | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30836:GET | GET | top_charts/tag_rank/list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:tag_id, Query:rank_type |
| classes15.dex:30837:GET | GET | top_charts/hottest | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size |
| classes15.dex:30838:GET | GET | top_charts/get_ranking_name | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30839:GET | GET | top_charts/top_new | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size |
| classes15.dex:30840:GET | GET | top_charts/top_order | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size |
| classes15.dex:30841:GET | GET | top_charts/get_start_test_list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size, Query:strategy |
| classes15.dex:30842:GET | GET | top_charts/top_rating | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size |
| classes15.dex:30843:GET | GET | discover/get_recent_start_test_list_detail | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:strategy, Query:is_new_start_test |
| classes15.dex:30844:GET | GET | home/recent_new/gamelist/v2 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size |
| classes15.dex:30845:GET | GET | home/recommend_game_detail | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:30846:GET | GET | search/key | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30847:GET | GET | discover/recommend_game_user | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size |
| classes15.dex:30848:GET | GET | detail/order/related_booked | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:30849:GET | GET | search/game_name | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:keyword |
| classes15.dex:30850:POST | POST | comment/reply/page | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:comment_no, Query:page_num |
| classes15.dex:30851:GET | GET | comment/user/my_message/page | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num |
| classes15.dex:30852:GET | GET | revisit_guide/status | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30853:GET | GET | search/page | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:keyword, Query:page_num, Query:page_size |
| classes15.dex:30854:GET | GET | search/page | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:keyword, Query:page_num, Query:page_size |
| classes15.dex:30855:GET | GET | search/module_type | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:keyword |
| classes15.dex:30856:GET | GET | search/operator/gamelist | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:keyword |
| classes15.dex:30857:GET | GET | search/related/gamelist | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:keyword |
| classes15.dex:30858:GET | GET | search/surprise | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:keyword |
| classes15.dex:30859:GET | GET | search/resource | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30860:GET | GET | top_charts/{rank_type} | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Path:rank_type, Query:page_num, Query:page_size |
| classes15.dex:30861:GET | GET | search/rank_list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30862:GET | GET | search/recommend/v2 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30863:GET | GET | search/wiki | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:keyword, Query:page_offset, Query:page_num, Query:page_size |
| classes15.dex:30864:GET | GET | search/wiki/v2 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:keyword, Query:page_offset, Query:page_num, Query:page_size |
| classes15.dex:30865:GET | GET | home/smallgame/list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size |
| classes15.dex:30866:GET | GET | discover/get_start_test_list_v2 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30867:GET | GET | news/article/detail | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:article_id |
| classes15.dex:30868:GET | GET | search/strategy/article/page/v3 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:keyword, Query:page_num, Query:page_size |
| classes15.dex:30869:GET | GET | news/strategy/page | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size |
| classes15.dex:30870:GET | GET | message/user/system_notice/page | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num |
| classes15.dex:30871:GET | GET | message/user/tab/red_point | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30872:GET | GET | topic/list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_number, Query:page_size |
| classes15.dex:30873:GET | GET | discover/followed_up_play/list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size |
| classes15.dex:30874:GET | GET | user/update/gameinfo | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_ids |
| classes15.dex:30875:GET | GET | user/identity_card | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:uid, Query:game_base_id, Query:need_steam |
| classes15.dex:30876:GET | GET | comment/user/my_comment/page | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num |
| classes15.dex:30877:POST | POST | user/followed | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Field:uid |
| classes15.dex:30878:GET | GET | user/space/info | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:uid |
| classes15.dex:30879:GET | GET | home/collection/list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:collection_id, Query:collection_type, Query:page_num, Query:page_size |
| classes15.dex:30880:GET | GET | home/collection/top | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:collection_id, Query:collection_type |
| classes15.dex:30881:GET | GET | wiki/home/page/info | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:30882:POST | POST | message/wiki/reply/list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num |
| classes15.dex:30883:POST | POST | message/wiki_red_point | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:message_tab |
| classes15.dex:30884:GET | GET | wechat/official/info | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:30885:GET | GET | user/played_tab/red_dot | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30886:GET | GET | activity/center/hot_activities | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:last_index, Query:page_size |
| classes15.dex:30887:GET | GET | wiki/subscribe_status | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:wiki_link |
| classes15.dex:30888:POST | POST | message/delete | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:message_tab, Query:message_no |
| classes15.dex:30889:POST | POST | comment/modify | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:comment_no, Query:grade, Query:comment_type, Query:content, Query:av_ids, Query:need_risk_control, Query:challenge, Query:validate, Query:seccode, Query:userid, Query:gs, Query:token, Query:captcha_code, Query:show_play_duration |
| classes15.dex:30890:POST | POST | comment/attitude/modify | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:comment_no, Query:evaluate_status, Query:target_uid |
| classes15.dex:30891:POST | POST | user/follow/game | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Field:game_base_id, Field:act, Field:spmid, Field:from_spmid, Field:extend_content |
| classes15.dex:30892:POST | POST | user/relationship/modify_stat | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Field:fid, Field:act, Field:re_src, Field:spmid, Field:from_spmid, Field:extend_content |
| classes15.dex:30893:POST | POST | user/download/notify/switch | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:switch_status |
| classes15.dex:30894:POST | POST | comment/reply/attitude/modify | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:comment_no, Query:reply_no, Query:evaluate_status |
| classes15.dex:30895:GET | GET | user/switch/modify | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:switch_type, Query:switch_status |
| classes15.dex:30896:GET | GET | home/notice_game_report | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:notice_id |
| classes15.dex:30897:POST | POST | act/version/auto_download/switch | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:activity_id, Query:download_status |
| classes15.dex:30898:GET | GET | detail/order/auto_download/status | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:reserve_type |
| classes15.dex:30899:GET | GET | detail/order/auto_download/status/v2 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:reserve_type |
| classes15.dex:30900:POST | POST | detail/presale/auto/reserve | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Field:game_base_id |
| classes15.dex:30901:GET | GET | detail/user/panel_notification | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30902:GET | GET | user/payment/check | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:local_order_id, Query:submit_order_id |
| classes15.dex:30903:POST | POST | user/pc_push_download | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Field:game_base_id |
| classes15.dex:30904:GET | GET | user/query_realname_info | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:pay_money, Query:sdk_type_id |
| classes15.dex:30905:POST | POST | comment/user/my_message/attitude/read | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:message_no |
| classes15.dex:30906:GET | GET | message/bulletin/read | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:bulletin_no |
| classes15.dex:30907:POST | POST | comment/user/my_message/read | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:message_no |
| classes15.dex:30908:POST | POST | message/wiki/reply/read | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:message_no |
| classes15.dex:30909:POST | POST | message/wiki_red_point/clear | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:message_tab |
| classes15.dex:30910:GET | GET | my/red_point | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30911:POST | POST | comment/reply/report | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:comment_no, Query:reply_no, Query:report_type, Query:report_name, Query:report_msg |
| classes15.dex:30912:GET | GET | user/auto_download/guide/report | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:30913:GET | GET | user/played/report | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:30914:POST | POST | comment/report/reasons | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30915:GET | GET | user/played/smallgame/report | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:app_id, Query:virtual_app_Id, Query:full_applet_id |
| classes15.dex:30916:GET | GET | user/relationship/home_report | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30917:POST | POST | tag/user/follow/category/save | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Field:category_id_list |
| classes15.dex:30918:GET | GET | small/game/lading/game_list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:tab_type, Query:tab_id, Query:page_num, Query:page_size |
| classes15.dex:30919:GET | GET | small/game/tab_list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30920:POST | POST | my/red_point/snooze | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30921:POST | POST | my/red_point/snooze | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Field:trigger_type, Field:target_record_id |
| classes15.dex:30922:POST | POST | home/subscribe_game/sort | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:operate_type, Query:sort_game_id |
| classes15.dex:30923:GET | GET | home/fetch_notice_game | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30924:POST | POST | user/submit_realname_info | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:real_name, Query:id_card, Query:sdk_type_id |
| classes15.dex:30925:POST | POST | user/payment/submit/v2 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:pay_amount, Query:original_price, Query:discount, Query:pay_route_id, Query:redirect, Query:product_id, Query:sdk_type_id, Query:report_extra |
| classes15.dex:30926:POST | POST | user/payment/submit/v3 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:pay_amount, Query:original_price, Query:discount, Query:pay_route_id, Query:redirect, Query:product_id, Query:sdk_type_id, Query:coupon_no, Query:order_amount, Query:pay_api_version, Query:report_extra |
| classes15.dex:30927:GET | GET | user/order/auto_download/switch | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:switch_status |
| classes15.dex:30928:GET | GET | topic/test/detail | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:type |
| classes15.dex:30929:GET | GET | user/report | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:30930:POST | POST | act/version/reserve | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_version_id, Query:reserve_for_pc, Query:challenge, Query:validate, Query:seccode, Query:userid, Query:gs, Query:token, Query:captcha_code |
| classes15.dex:30931:GET | GET | desktop_widget/guide | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:brand, Query:os_version |
| classes15.dex:30943:POST | POST | act/version/cancel_reserve | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:activity_id, Query:reserve_for_pc |
| classes15.dex:30944:POST | POST | user/book_list/delete | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Field:game_base_id |
| classes15.dex:30945:GET | GET | user/book/gamelist/V3 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:filter_type |
| classes15.dex:30946:GET | GET | top_charts/top_order | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size |
| classes15.dex:30947:GET | GET | top_charts/update_time | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:rank_type |
| classes15.dex:30948:GET | GET | act/version/reserve_game_list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:31021:POST | POST | /h5/game/guide/retention/claim_record | https://line3-h5-mobile-api.biligame.com/ | Query:type |
| classes15.dex:31022:POST | POST | api/cloud_game/v2/game/pass/redeem | https://line3-h5-mobile-api.biligame.com/ | Field:uid, Field:ticket_id |
| classes15.dex:31023:GET | GET | h5/game/guide/retention/active | https://line3-h5-mobile-api.biligame.com/ | Query:game_base_id, Query:scene |
| classes15.dex:31024:POST | POST | h5/game/guide/send_award | https://line3-h5-mobile-api.biligame.com/ | Body:map/body/dynamic |
| classes15.dex:31168:POST | POST | game/center/h5/user/remove_downloaded | https://line3-h5-mobile-api.biligame.com/ | Field:game_base_id |
| classes15.dex:31169:POST | POST | game/center/h5/user/remove/play/v2 | https://line3-h5-mobile-api.biligame.com/ | Field:game_base_id |
| classes15.dex:31170:POST | POST | api/h5/game/center/user/growth_plan/remind/expose | https://line3-h5-mobile-api.biligame.com/ | Field:remind_instance_id |
| classes15.dex:31171:GET | GET | game/center/h5/user/downloaded | https://line3-h5-mobile-api.biligame.com/ | Query:page_num, Query:page_size |
| classes15.dex:31172:GET | GET | game/center/h5/my/growthplan/base | https://line3-h5-mobile-api.biligame.com/ |  |
| classes15.dex:31173:GET | GET | game/center/h5/my/growthplan/benefits | https://line3-h5-mobile-api.biligame.com/ |  |
| classes15.dex:31174:GET | GET | game/center/h5/user/played | https://line3-h5-mobile-api.biligame.com/ | Query:page_num, Query:page_size |
| classes15.dex:31175:GET | GET | game/center/h5/user/played_game | https://line3-h5-mobile-api.biligame.com/ | Query:page_num, Query:page_size, Query:user_applist_access_authority, Query:filter_removed_played_game |
| classes15.dex:31176:GET | GET | game/center/h5/user/purchased/gamelist | https://line3-h5-mobile-api.biligame.com/ |  |
| classes15.dex:31177:GET | GET | game/center/h5/my/get_mine_position_config/v2 | https://line3-h5-mobile-api.biligame.com/ |  |
| classes15.dex:31178:GET | GET | game/center/h5/currency_mall/user_page/query_entrance | https://line3-h5-mobile-api.biligame.com/ |  |
| classes15.dex:31179:GET | GET | https://line3-h5-mobile-api.biligame.com/api/game/steam/entrance | https://line3-h5-mobile-api.biligame.com/ |  |
| classes15.dex:31180:GET | GET | game/center/h5/my/game_tab_config | https://line3-h5-mobile-api.biligame.com/ |  |
| classes15.dex:31181:GET | GET | game/center/h5/user/move/cps_game | https://line3-h5-mobile-api.biligame.com/ | Query:game_base_id, Query:action |
| classes15.dex:31340:POST | POST | landing_page/detail/list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:page, Query:page_size, Query:from_page, Query:from_module, Query:av_id, Query:hit_mark_hot_exp, Query:channel_id, Query:entrance_scene, Query:brand |
| classes15.dex:31341:GET | GET | home/land_page_list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:module_id, Query:page_num, Query:page_size |
| classes15.dex:31342:GET | GET | act/version/detail | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:game_version_id |
| classes15.dex:31343:GET | GET | home/tab | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:reddot_type |
| classes15.dex:31344:GET | GET | landing_page/recent_user/page | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:event_type, Query:cursor |
| classes15.dex:31345:POST | POST | landing_page/expose/report | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:aid, Query:page |
| classes15.dex:31346:POST | POST | landing_page/detail/info | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:channel_id, Query:hit_mark_hot_exp, Query:need_introduction, Query:need_benefit, Query:brand, Query:half_detail_style, Query:material_id, Query:biz_scene |
| classes15.dex:31347:GET | GET | small/game/home/list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size |
| classes15.dex:31348:GET | GET | user/small/game_center/report | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:31350:POST | POST | /game/center/h5/comment/user/system_message/clear_point | https://line3-h5-mobile-api.biligame.com/ | Query:reddot_type, Query:delivery_token, Query:business_type, Query:notification_id, Query:game_base_id, Query:activity_id |
| classes15.dex:31351:POST | POST | api/h5/game/center/user/growth_plan/remind/expose | https://line3-h5-mobile-api.biligame.com/ | Field:remind_instance_id |
| classes15.dex:31352:POST | POST | game/center/h5/gift/game_center_return_gift | https://line3-h5-mobile-api.biligame.com/ | Query:reddot_type |
| classes15.dex:31353:GET | GET | api/h5/game/center/home/v2/feed | https://line3-h5-mobile-api.biligame.com/ | Query:session_id, Query:cursor_id, Query:reddot_type |
| classes15.dex:31354:GET | GET | /api/h5/game/center/home/v2/tag_feed | https://line3-h5-mobile-api.biligame.com/ | Query:session_id, Query:cursor_id, Query:reddot_type |
| classes15.dex:31355:GET | GET | game/center/h5/latest_tab/calendar | https://line3-h5-mobile-api.biligame.com/ | Query:filter_events |
| classes15.dex:31356:GET | GET | game/center/h5/latest_tab/feed | https://line3-h5-mobile-api.biligame.com/ | Query:page_offset, Query:page_size |
| classes15.dex:31357:GET | GET | game/center/h5/latest_tab/feed/v2 | https://line3-h5-mobile-api.biligame.com/ | Query:load_mode, Query:date_cursor, Query:page_size, Query:filter_events |
| classes15.dex:31358:GET | GET | game/abtest/get_entrance_exp_info | https://line3-h5-mobile-api.biligame.com/ |  |
| classes15.dex:31359:GET | GET | /api/small_game/node_reminder/benefits | https://line3-h5-mobile-api.biligame.com/ | Query:game_base_id |
| classes15.dex:31360:POST | POST | /api/small_game/node_reminder/click | https://line3-h5-mobile-api.biligame.com/ | Field:game_base_id |
| classes15.dex:31361:GET | GET | /api/small_game/recall_gift/half_screen | https://line3-h5-mobile-api.biligame.com/ | Query:source |
| classes15.dex:31362:POST | POST | /api/small_game/recall_gift/claim | https://line3-h5-mobile-api.biligame.com/ | Field:gop_game_id, Field:game_base_id, Field:gift_id, Field:source |
| classes15.dex:31363:GET | GET | game/center/h5/user/played_tab_info | https://line3-h5-mobile-api.biligame.com/ | Query:red_type |
| classes15.dex:31364:GET | GET | game/center/h5/user/played_tab/popup_info | https://line3-h5-mobile-api.biligame.com/ | Query:type |
| classes15.dex:31365:POST | POST | game/center/h5/user/played_tab/red_dot/clear | https://line3-h5-mobile-api.biligame.com/ | Query:gift_info_ids, Query:coupon_ids, Query:creator_activity_ids |
| classes15.dex:31366:POST | POST | game/center/h5/user/played_tab/shield/report | https://line3-h5-mobile-api.biligame.com/ | Query:module_type, Query:id, Query:game_base_id, Query:event_type, Query:sub_type, Query:event_timestamp |
| classes15.dex:31443:GET | GET | abtest/get_all_exp_info | https://line3-h5-mobile-api.biligame.com/game/ |  |
| classes15.dex:31545:GET | GET | discover/bottom_config | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:31546:GET | GET | discover/tab_list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:31547:POST | POST | discover/click_report | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:config_id |
| classes15.dex:31761:POST | POST | sourcefrom/popup/close | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Field:game_base_id |
| classes15.dex:31762:GET | GET | detail/forum/hot_posts | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31763:GET | GET | comment/user/ban_state | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:31764:GET | GET | game/order_reward | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31765:GET | GET | game/order_reward/v2 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31766:GET | GET | comment/selection/summary | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:phase, Query:device_type |
| classes15.dex:31767:GET | GET | detail/game_entrance_info | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31768:GET | GET | comment/user/commented_games | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:31769:POST | POST | gift/all | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31770:GET | GET | comment/five_figures | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31771:GET | GET | detail/following_list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31772:GET | GET | detail/following_list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:page_num, Query:page_size |
| classes15.dex:31773:GET | GET | comment/user/forbid_state | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:31774:GET | GET | official/info | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:uid |
| classes15.dex:31775:GET | GET | detail/content | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31776:GET | GET | detail/gameinfo/v2 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:source_code |
| classes15.dex:31777:GET | GET | detail/gameinfo/v2 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:source_code, Query:channel_id, Query:entrance_scene |
| classes15.dex:31778:GET | GET | detail/get_archive | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31779:GET | GET | detail/get_game_base_info | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31780:GET | GET | detail/account | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31781:GET | GET | detail/character | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31782:GET | GET | detail/hot_video | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:buvid, Query:from |
| classes15.dex:31783:GET | GET | activity/center/participating_activities | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:31784:GET | GET | sourcefrom/info | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:source_code |
| classes15.dex:31785:GET | GET | sourcefrom/list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:31786:GET | GET | comment/getLive | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:page_num, Query:page_size |
| classes15.dex:31787:GET | GET | game/notice | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31788:GET | GET | game/change/official/notify | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31789:GET | GET | news/strategy/game/supreme/game_base_id | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:page_num, Query:page_size |
| classes15.dex:31790:GET | GET | detail/online_activity/list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:query_from |
| classes15.dex:31791:GET | GET | detail/operator/gamelist | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:operator_id, Query:game_base_id, Query:page_num, Query:page_size |
| classes15.dex:31792:GET | GET | detail/operator/gamelist | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:operator_id, Query:game_base_id, Query:page_num, Query:page_size |
| classes15.dex:31793:GET | GET | platform/grade | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31794:GET | GET | detail/pop/notice | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31795:GET | GET | detail/secret/recruit/gameinfo | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:source_code, Query:entrance_scene |
| classes15.dex:31796:GET | GET | detail/top_rank | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31797:GET | GET | comment/recommend | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31798:POST | POST | news/strategy/model/recommend/v2 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:strategy_id |
| classes15.dex:31799:GET | GET | game/mini_book_game | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:app_id |
| classes15.dex:31800:GET | GET | detail/related | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31801:GET | GET | gift/activity/get_sign_activity_by_game | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31802:GET | GET | game/benefit/activities | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31803:GET | GET | home/source_from | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:source_code |
| classes15.dex:31804:POST | POST | news/strategy/game/detail_by_game | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31805:POST | POST | news/strategy/game/page | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:strategy_id, Query:strategy_category_id, Query:page_num, Query:page_size |
| classes15.dex:31806:GET | GET | news/strategy/game_wiki | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31807:GET | GET | gift/top3 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31808:GET | GET | comment/up_user_comment | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:page_num, Query:page_size |
| classes15.dex:31809:POST | POST | comment/user/my_comment | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Field:game_base_id, Query:phase |
| classes15.dex:31810:GET | GET | comment/user/entrance/guide | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31811:GET | GET | https://line3-h5-mobile-api.biligame.com/api/h5/game/center/user/level/info | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:31812:GET | GET | comment/getVideo | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:page_num, Query:page_size |
| classes15.dex:31813:GET | GET | detail/game_video | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:buvid, Query:from, Query:first_time |
| classes15.dex:31814:POST | POST | news/strategy/game/category/save | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:strategy_id, Query:strategy_category_ids |
| classes15.dex:31815:GET | GET | gift/activity/sign_activity_detail | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:activity_id |
| classes15.dex:31816:POST | POST | gift/activity/sign_in | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:activity_id |
| classes15.dex:31817:POST | POST | detail/recruit_secret_agreement/submit | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:recruit_id, Query:questionnaire_id |
| classes15.dex:31818:POST | POST | detail/test_recruit/accept_secret_agreement | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:recruit_id |
| classes15.dex:31819:GET | GET | game/order_reward | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31820:GET | GET | landing_page/list/detail/page | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:source_code, Query:channel_id, Query:entrance_scene, Query:page, Query:page_size, Query:from_page, Query:from_module, Query:av_id, Query:hit_mark_hot_exp, Query:brand |
| classes15.dex:31821:GET | GET | detail/benefit | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:need_vip_gift |
| classes15.dex:31822:GET | GET | detail/module/config | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:source_code |
| classes15.dex:31823:GET | GET | detail/share_image | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31824:GET | GET | user/landing/page/detail/version/switch | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:status |
| classes15.dex:31825:GET | GET | detail/game_activity | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31826:GET | GET | detail/game_activity/v2 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31827:GET | GET | official/info | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:uid |
| classes15.dex:31828:GET | GET | detail/content/v2 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31829:GET | GET | detail/gameinfo/v3 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31830:GET | GET | detail/game_intro | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31831:GET | GET | detail/account | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31832:GET | GET | detail/character | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31833:GET | GET | detail/toolbox/get_game_toolbox | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31834:GET | GET | detail/hot_video | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:buvid, Query:from |
| classes15.dex:31835:GET | GET | game/notice | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:31836:GET | GET | comment/recommend | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:is_show_reply, Query:page_size, Query:hit_mark_hot_exp |
| classes15.dex:31837:GET | GET | detail/related | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:32236:GET | GET | /disaster/game/center/h5/user/download/v2/{game_base_id} | https://line3-statics-h5-mobile-api.biligame.net | Path:game_base_id |
| classes15.dex:32251:POST | POST | api/h5/game/center/user/task/complete/backup/condition | https://line3-h5-mobile-api.biligame.com/ | Query:task_id, Query:cid |
| classes15.dex:32252:GET | GET | find_game/condition_list | https://line3-h5-mobile-api.biligame.com/ |  |
| classes15.dex:32253:POST | POST | find_game/game_count | https://line3-h5-mobile-api.biligame.com/ | Query:category_id, Query:tag_id_list, Query:sort_type, Query:game_status_list, Query:publish_time_section, Query:grade_section |
| classes15.dex:32254:POST | POST | find_game/search | https://line3-h5-mobile-api.biligame.com/ | Query:category_id, Query:tag_id_list, Query:sort_type, Query:game_status_list, Query:publish_time_section, Query:grade_section, Query:page_num, Query:page_size |
| classes15.dex:32255:GET | GET | api/h5/game/center/user/coupon/draw_all | https://line3-h5-mobile-api.biligame.com/ |  |
| classes15.dex:32256:GET | GET | api/h5/game/center/user/coupon/receive_all | https://line3-h5-mobile-api.biligame.com/ |  |
| classes15.dex:32257:POST | POST | api/h5/game/center/user/task/list | https://line3-h5-mobile-api.biligame.com/ |  |
| classes15.dex:32258:POST | POST | api/h5/game/center/user/task/get/reward | https://line3-h5-mobile-api.biligame.com/ | Query:task_id, Query:challenge, Query:validate, Query:seccode, Query:userid, Query:token, Query:gs, Query:captcha_code |
| classes15.dex:32259:GET | GET | game/center/h5/main_game/info | https://line3-h5-mobile-api.biligame.com/ | Query:game_base_id |
| classes15.dex:32260:POST | POST | api/h5/game/center/user/coupon/receive | https://line3-h5-mobile-api.biligame.com/ | Body:map/body/dynamic, Query:pool_id, Query:coupon_id |
| classes15.dex:32261:POST | POST | api/h5/game/center/user/coupon/receive/v2 | https://line3-h5-mobile-api.biligame.com/ | Body:map/body/dynamic, Query:pool_id, Query:coupon_id |
| classes15.dex:32262:POST | POST | api/h5/game/center/user/task/report/action | https://line3-h5-mobile-api.biligame.com/ | Query:action, Query:scene, Query:game_base_id, Query:ref_id, Query:duration |
| classes15.dex:32263:POST | POST | api/h5/game/center/user/sign_in/sign_in | https://line3-h5-mobile-api.biligame.com/ | Query:type |
| classes15.dex:32264:POST | POST | /api/h5/game/center/user/sign_in/calendar | https://line3-h5-mobile-api.biligame.com/ | Query:type, Query:start_date, Query:end_date |
| classes15.dex:32265:POST | POST | api/h5/game/center/user/sign_in/info | https://line3-h5-mobile-api.biligame.com/ | Query:type |
| classes15.dex:32269:GET | GET | cdkey/assets | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:order_no, Query:page_num, Query:page_size |
| classes15.dex:32270:GET | GET | cdkey/order/status | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:order_no, Query:game_base_id |
| classes15.dex:32271:POST | POST | cdkey/submit | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Field:game_base_id, Field:product_id, Field:quantity, Field:pay_money, Field:money, Field:pay_channel, Field:pay_scene, Field:redirect_url |
| classes15.dex:32331:POST | POST | v2/user/balance | https://line3-h5-mobile-api.biligame.com/api/cloud_game/ | Query:user_id |
| classes15.dex:32332:POST | POST | v2/game/microclient/detail | https://line3-h5-mobile-api.biligame.com/api/cloud_game/ | Field:game_base_id |
| classes15.dex:32463:GET | GET | activity/like/check | http://api.bilibili.com/x/ | Query:sid |
| classes15.dex:32548:POST | POST | api/game/steam/auth/triage | https://line3-h5-mobile-api.biligame.com/ | Query:scene_type, Query:url, Query:source_from |
| classes15.dex:32549:POST | POST | api/game/steam/user/upload/bind | https://line3-h5-mobile-api.biligame.com/ | Query:steam_cookie, Query:source_from |
| classes15.dex:32550:POST | POST | api/game/steam/user/upload/wishlist | https://line3-h5-mobile-api.biligame.com/ | Query:app_id, Query:callback_url, Query:source_from |
| classes15.dex:32551:POST | POST | detail/receive_benefit | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:challenge, Query:validate, Query:seccode, Query:userid, Query:gs |
| classes15.dex:32552:GET | GET | gift/gift_info | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:gift_info_id, Query:gift_vip_type |
| classes15.dex:32553:GET | GET | gift/home/v2 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size, Query:need_vip_gift, Query:need_available |
| classes15.dex:32554:GET | GET | gift/user_gift | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:need_vip_gift |
| classes15.dex:32555:GET | GET | gift/recommend/list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:filter_game_base_id, Query:page_num, Query:page_size, Query:need_vip_gift |
| classes15.dex:32556:GET | GET | game/benefit/gifts | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:32557:POST | POST | gift/all | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:need_vip_gift |
| classes15.dex:32558:POST | POST | gift/multi_get_gift_code/v2 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:gift_info_ids, Query:vip_gift_info_ids, Query:challenge, Query:validate, Query:seccode, Query:userid, Query:gs |
| classes15.dex:32559:POST | POST | gift/get_gift_code/v4 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:gift_info_id, Query:is_vip_gift, Query:challenge, Query:validate, Query:seccode, Query:userid, Query:gs, Query:need_reserve_first |
| classes15.dex:32696:GET | GET | x/answer/v4/status | https://api.bilibili.com/ | Query:mid |
| classes15.dex:32697:GET | GET | x/answer/v4/guide | https://api.bilibili.com/ | Query:business, Query:spmid, Query:oid, Query:sid, Query:mid |
| classes15.dex:32698:GET | GET | x/member/app/nickfree | https://api.bilibili.com/ |  |
| classes15.dex:32699:POST | POST | x/member/app/uname/update | https://api.bilibili.com/ | Query:uname, Query:source |
| classes15.dex:32846:POST | POST | api/voucher-touch/claim | https://line3-h5-mobile-api.biligame.com/ | Body:map/body/dynamic |
| classes15.dex:32847:GET | GET | api/voucher-touch/list | https://line3-h5-mobile-api.biligame.com/ | Query:sdk_type, Query:page_size, Query:cursor |
| classes15.dex:32848:GET | GET | api/voucher-touch/popup | https://line3-h5-mobile-api.biligame.com/ | Query:from_red_point_type, Query:sdk_type |
| classes15.dex:36326:GET | GET | history/game_clear | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:36327:GET | GET | history/game_delete | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_ids |
| classes15.dex:36328:GET | GET | history/game_list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:page_num, Query:page_size, Query:key_word, Query:button_flag |
| classes15.dex:36329:POST | POST | history/game_report | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:38665:POST | POST | comment/add | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:grade, Query:comment_type, Query:content, Query:device_type, Query:dynamic_repost, Query:game_name, Query:icon, Query:url, Query:extra_stars, Query:desc_text, Query:av_ids, Query:need_risk_control, Query:challenge, Query:validate, Query:seccode, Query:userid, Query:gs, Query:token, Query:captcha_code, Query:account_change, Query:show_play_duration |
| classes15.dex:38666:POST | POST | comment/reply/add | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:content, Query:comment_no, Query:reply_type, Query:to_uid, Query:to_user_name, Query:to_reply_no, Query:need_risk_control, Query:challenge, Query:validate, Query:seccode, Query:userid, Query:gs, Query:token, Query:captcha_code |
| classes15.dex:38667:GET | GET | detail/close_comment_notice | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:id |
| classes15.dex:38668:POST | POST | comment/delete | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:comment_no |
| classes15.dex:38669:POST | POST | comment/reply/delete | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:comment_no, Query:reply_no |
| classes15.dex:38670:POST | POST | user/authorization/edit | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:scene, Query:status, Query:auth_type |
| classes15.dex:38671:GET | GET | detail/comment_notice | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:38672:GET | GET | comment/history/grade/list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:38673:GET | GET | comment/selection/summary | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:phase, Query:device_type |
| classes15.dex:38674:POST | POST | comment/detail | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:comment_no |
| classes15.dex:38675:GET | GET | comment/display/config | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:38676:GET | GET | comment/module/config | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:38677:GET | GET | comment/page | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:page_num, Query:rank_type, Query:select_type, Query:phase, Query:reply_num, Query:device_type, Query:mark_hot_filter_list, Query:hit_mark_hot_exp |
| classes15.dex:38678:POST | POST | comment/video/config | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:38679:POST | POST | comment/switch | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:38680:GET | GET | comment/five_figures | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:38681:GET | GET | anti_interception/keyword_list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ |  |
| classes15.dex:38682:POST | POST | comment/reply/page | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:comment_no, Query:page_num |
| classes15.dex:38683:POST | POST | comment/user/my_comment | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Field:game_base_id, Query:phase |
| classes15.dex:38684:POST | POST | comment/growth_level/config/save | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:show_growth_level, Query:growth_level_scene |
| classes15.dex:38685:POST | POST | comment/modify | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:comment_no, Query:grade, Query:comment_type, Query:content, Query:av_ids, Query:need_risk_control, Query:challenge, Query:validate, Query:seccode, Query:userid, Query:gs, Query:token, Query:captcha_code, Query:show_play_duration |
| classes15.dex:38686:POST | POST | comment/attitude/modify | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:comment_no, Query:evaluate_status, Query:target_uid |
| classes15.dex:38687:POST | POST | comment/reply/attitude/modify | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:comment_no, Query:reply_no, Query:evaluate_status, Query:target_uid |
| classes15.dex:38688:POST | POST | comment/mark_hot/expose/report | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:comment_nos |
| classes15.dex:47734:GET | GET | gift/list | https://line3-h5-mobile-api.biligame.com/game/asset/ | Query:game_base_id |
| classes15.dex:47735:POST | POST | gift/inform/read | https://line3-h5-mobile-api.biligame.com/game/asset/ | Query:game_base_id |
| classes15.dex:47736:GET | GET | gift/check | https://line3-h5-mobile-api.biligame.com/game/asset/ | Query:game_base_id, Query:receiver_uid, Query:gift_id |
| classes15.dex:47737:POST | POST | gift/send | https://line3-h5-mobile-api.biligame.com/game/asset/ | Query:receiver_uid, Query:gift_id |
| classes15.dex:48897:POST | POST | game/center/h5/addr/user/address/create | https://line3-h5-mobile-api.biligame.com/ | Query:username, Query:phone, Query:province, Query:city, Query:district, Query:detail_address, Query:is_default |
| classes15.dex:48898:GET | GET | game/center/h5/addr/allSort | https://line3-h5-mobile-api.biligame.com/ |  |
| classes15.dex:48900:POST | POST | game/center/h5/currency_mall/lottery/bind_address | https://line3-h5-mobile-api.biligame.com/ | Query:address_id, Query:award_id |
| classes15.dex:48901:POST | POST | game/center/h5/addr/user/address/delete | https://line3-h5-mobile-api.biligame.com/ | Query:address_id |
| classes15.dex:48902:POST | POST | game/center/h5/currency_mall/lottery/draw | https://line3-h5-mobile-api.biligame.com/ | Query:pool_id, Query:currency_amount, Query:challenge, Query:validate, Query:seccode, Query:userid, Query:token, Query:gs, Query:captcha_code |
| classes15.dex:48903:POST | POST | game/center/h5/currency_mall/exchange/exchange | https://line3-h5-mobile-api.biligame.com/ | Query:goods_id, Query:currency_amount, Query:challenge, Query:validate, Query:seccode, Query:userid, Query:token, Query:gs, Query:captcha_code, Query:address_id |
| classes15.dex:48904:GET | GET | game/center/h5/currency_mall/exchange/goods/query_detail | https://line3-h5-mobile-api.biligame.com/ | Query:goods_id |
| classes15.dex:48905:GET | GET | game/center/h5/currency_mall/exchange/goods/query_list | https://line3-h5-mobile-api.biligame.com/ | Query:goods_type, Query:sort_type |
| classes15.dex:48906:GET | GET | game/center/h5/currency_mall/exchange/query_records | https://line3-h5-mobile-api.biligame.com/ | Query:page_number, Query:page_size |
| classes15.dex:48907:GET | GET | game/center/h5/currency_mall/lottery/carousel_awards | https://line3-h5-mobile-api.biligame.com/ | Query:pool_id |
| classes15.dex:48908:GET | GET | game/center/h5/currency_mall/lottery/query_pools | https://line3-h5-mobile-api.biligame.com/ |  |
| classes15.dex:48909:GET | GET | game/center/h5/currency_mall/lottery/query_records | https://line3-h5-mobile-api.biligame.com/ | Query:page_number, Query:page_size |
| classes15.dex:48910:POST | POST | api/h5/game/center/user/currency/balance | https://line3-h5-mobile-api.biligame.com/ | Query:type |
| classes15.dex:48911:GET | GET | game/center/h5/currency_mall/query_tabs | https://line3-h5-mobile-api.biligame.com/ |  |
| classes15.dex:48912:POST | POST | api/h5/game/center/user/currency/flow | https://line3-h5-mobile-api.biligame.com/ | Query:page_num, Query:page_size, Query:flow_type, Query:type |
| classes15.dex:48913:GET | GET | game/center/h5/addr/geocoder/location | https://line3-h5-mobile-api.biligame.com/ | Query:location |
| classes15.dex:48914:POST | POST | game/center/h5/addr/user/address/update | https://line3-h5-mobile-api.biligame.com/ | Query:address_id, Query:username, Query:phone, Query:province, Query:city, Query:district, Query:detail_address, Query:is_default |
| classes15.dex:48915:GET | GET | game/center/h5/addr/user/address/list | https://line3-h5-mobile-api.biligame.com/ |  |
| classes15.dex:50936:POST | POST | community/strategy/detail/evaluate | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:uid, Query:content_id, Query:evaluate_status, Query:reason |
| classes15.dex:50937:GET | GET | community/strategy/content_list/v2 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:directory_id |
| classes15.dex:50938:GET | GET | community/strategy/detail/v2 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:50939:GET | GET | community/strategy/extend_content_list/v2 | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id, Query:directory_id, Query:page_num, Query:page_size |
| classes15.dex:56803:GET | GET | switch | https://line3-h5-mobile-api.biligame.com/api/common/ |  |
| classes15.dex:56804:GET | GET | client_preload_info | https://line3-h5-mobile-api.biligame.com/api/common/ |  |
| classes15.dex:56805:GET | GET | copywriting/config | https://line3-h5-mobile-api.biligame.com/api/common/ | Query:m_keys |
| classes15.dex:56806:GET | GET | teenager/manager | https://line3-h5-mobile-api.biligame.com/api/common/ |  |
| classes15.dex:56807:GET | GET | captcha/start_captcha/v2 | https://line3-h5-mobile-api.biligame.com/api/common/ | Query:geet_scene, Query:source_from |
| classes15.dex:56808:GET | GET | reserve_text | https://line3-h5-mobile-api.biligame.com/api/common/ | Query:game_base_id |
| classes15.dex:57620:POST | POST | game/center/h5/game/download_pkg/list | https://line3-h5-mobile-api.biligame.com/ | QueryMap:map/body/dynamic |
| classes15.dex:57801:POST | POST | /pgc/pay/api/sponsor/order/check | https://api.bilibili.com | Field:order_id, Field:season_type |
| classes15.dex:57878:POST | POST | cps/mobile_bili_live | https://ad-bili-data.biligame.com/ | FieldMap:map/body/dynamic |
| classes15.dex:58080:GET | GET | player/check | https://api.bilibili.com/pgc/ | Query:season_id, Query:ep_id |
| classes15.dex:61317:POST | POST | api/game/steam/privacy/public | https://line3-h5-mobile-api.biligame.com/ |  |
| classes15.dex:61720:GET | GET | /x/resource/abtest/abserver | https://app.bilibili.com | Query:buvid, Query:device, Query:access_key, Query:brand, Query:model, Query:osver |
| classes15.dex:61830:GET | GET | user/coupon/list | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:display_state |
| classes15.dex:61831:GET | GET | game/benefit/coupons | https://line3-h5-mobile-api.biligame.com/game/center/h5/ | Query:game_base_id |
| classes15.dex:64592:POST | POST | /x/vip/ads/material/report | https://api.bilibili.com | Body:map/body/dynamic |
| classes15.dex:64926:GET | GET | /fans_medal/v2/FansMedal/live_check_gain | https://api.live.bilibili.com | Query:uid, Query:target_id |
| classes16.dex:3372:GET | GET | /x/share/download | https://api.bilibili.com | Query:share_id, Query:share_origin, Query:oid, Query:sid, Query:spm_id, Query:object_extra_fields, Query:panel_type, Query:share_session_id, Query:action_id |
| classes16.dex:4249:GET | GET | api/miniapp/info/main | https://miniapp.bilibili.com/ | Query:appId, Query:vAppId |
| classes16.dex:4453:POST | POST | /x/resource/fingerprint | https://app.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes16.dex:5354:GET | GET | api/applet/login | https://miniapp.bilibili.com/ | Query:appId, Query:vAppId |
| classes16.dex:5355:GET | GET | api/applet/user_info/get | https://miniapp.bilibili.com/ | Query:withCredentials, Query:vAppId, Query:appId, Query:token, Query:lang |
| classes16.dex:5356:GET | GET | api/applet/session/check | https://miniapp.bilibili.com/ | Query:appId, Query:vAppId, Query:token |
| classes16.dex:5357:GET | GET | api/miniapp/game/player/count | https://miniapp.bilibili.com/ |  |
| classes16.dex:6536:GET | GET | /open/open_api/v1/miniapp/up/info | https://miniapp.bilibili.com |  |
| classes16.dex:6537:GET | GET | /open/open_api/v1/miniapp/up/relation | https://miniapp.bilibili.com | Query:access_key |
| classes16.dex:6538:GET | GET | /open/open_api/v1/miniapp/up/archives | https://miniapp.bilibili.com | Query:page, Query:size |
| classes16.dex:6549:GET | GET | /open/open_api/v1/miniapp/common/qr-code | https://miniapp.bilibili.com | Query:path, Query:size, Query:access_key |
| classes16.dex:7492:POST | POST | /paywallet/recharge/requestRecharge | https://pay.bilibili.com | Body:map/body/dynamic, Header:Cookie |
| classes16.dex:7493:POST | POST | /paywallet/recharge/getRechargePanel | https://pay.bilibili.com | Body:map/body/dynamic, Header:Cookie |
| classes16.dex:7494:POST | POST | /paywallet/recharge/queryOrder | https://pay.bilibili.com | Body:map/body/dynamic |
| classes16.dex:7495:POST | POST | /payplatform/pay/queryChannelList | https://pay.bilibili.com | Body:map/body/dynamic, Header:Cookie, Header:oaid |
| classes16.dex:7496:POST | POST | /payplatform/pay/pay | https://pay.bilibili.com | Body:map/body/dynamic, Header:Cookie |
| classes16.dex:7497:POST | POST | /payplatform/pay/query | https://pay.bilibili.com | Body:map/body/dynamic |
| classes16.dex:7498:POST | POST | /paywallet/recharge/requestServiceRecharge | https://pay.bilibili.com | Body:map/body/dynamic, Header:Cookie |
| classes16.dex:7499:POST | POST | /payplatform/fund/out/recharge/req | https://pay.bilibili.com | Body:map/body/dynamic |
| classes16.dex:9136:GET | GET | https://api.bilibili.com/x/safecenter/user/info | https://app.bilibili.com | Query:access_key |
| classes16.dex:9137:GET | GET | /x/v2/account/myinfo | https://app.bilibili.com | Query:access_key |
| classes16.dex:12395:GET | GET | api/miniapp/configs | https://miniapp.bilibili.com/ | Query:buildType, Query:appId, Query:vAppId, Query:storageId, Header:APPLET-BUILD-TYPE, Header:APPLET-ID |
| classes16.dex:12396:GET | GET | api/miniapp/configs/global | https://miniapp.bilibili.com/ |  |
| classes16.dex:12398:GET | GET | /api/miniapp/model/system/info | https://miniapp.bilibili.com/ | Query:phoneBrand, Query:phoneModel |
| classes16.dex:17589:POST | POST | x/internal/gaia-gateway/ExClimbCongLing | https://api.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes16.dex:17599:POST | POST | x/internal/gaia-gateway/ExClimbKunLun | https://api.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes16.dex:22259:POST | POST | /x/v3/fav/resource/deal | https://api.bilibili.com | Query:rid, Query:type, Query:add_media_ids, Field:from_spmid, Field:from, Field:action_id |
| classes16.dex:22260:POST | POST | /x/v2/view/like/nologin | https://app.bilibili.com | Field:aid, Field:like, Field:spmid, Field:from_spmid, Field:from, Field:action, Field:action_id |
| classes16.dex:22261:POST | POST | /x/v2/view/like | https://app.bilibili.com | Field:aid, Field:like, Field:spmid, Field:from_spmid, Field:from, Field:action_id |
| classes16.dex:23143:GET | GET | /api/v2/oauth2/access_token | https://passport.bilibili.com | Query:code, Query:grant_type, Query:local_id, Query:bili_local_id |
| classes16.dex:23144:POST | POST | /x/passport-login/oauth2/access_token | https://passport.bilibili.com | Query:code, Query:grant_type, FieldMap:map/body/dynamic |
| classes16.dex:23145:GET | GET | /x/passport-login/authorize/agreement | https://passport.bilibili.com | Query:app_subid, Query:target_appkey |
| classes16.dex:23146:POST | POST | /api/oauth2/authorizeByApp | https://passport.bilibili.com | Field:access_token, Field:target_subid, Field:target_appkey, Field:package, Field:signature |
| classes16.dex:23147:POST | POST | /x/passport-login/batch/revoke | https://passport.bilibili.com | Field:access_key, Field:refresh_token, Field:mid, Field:session, Field:need_delete_account_info, Field:is_self_revoke, Field:revoke_api, FieldMap:map/body/dynamic |
| classes16.dex:23148:POST | POST | /x/safecenter/sns/bind | https://passport.bilibili.com | Field:access_key, Field:appid, Field:sns_type, Field:code |
| classes16.dex:23149:POST | POST | /x/passport-login/confirm/refresh | https://passport.bilibili.com | Field:access_key, Field:refresh_token, Field:mid, Field:session, FieldMap:map/body/dynamic, Field:revoke_api |
| classes16.dex:23150:POST | POST | /x/passport-login/confirm/refresh | https://passport.bilibili.com | Field:access_key, Field:refresh_token, Field:mid, Field:session, FieldMap:map/body/dynamic, Field:revoke_api, Field:sts |
| classes16.dex:23151:POST | POST | /x/passport-login/fast/login | https://passport.bilibili.com | Field:mid, Field:fast_login_token, Field:device_meta, Field:dt, Field:login_session_id, Field:spm_id, Field:device_tourist_id, Field:extend, FieldMap:map/body/dynamic |
| classes16.dex:23152:POST | POST | /x/passport-user/guest/reg | https://passport.bilibili.com | Field:dt, Field:device_info |
| classes16.dex:23153:GET | GET | /x/passport-login/web/key | https://passport.bilibili.com |  |
| classes16.dex:23154:POST | POST | /x/passport-login/type | https://passport.bilibili.com | Field:mid, Field:md5_fast_login_token, Field:first_boot, Field:oaid, FieldMap:map/body/dynamic |
| classes16.dex:23155:GET | GET | /x/passport-login/timestamp | https://passport.bilibili.com |  |
| classes16.dex:23156:POST | POST | /x/passport-login/oauth2/login | https://passport.bilibili.com | Field:username, Field:password, Field:device_meta, Field:dt, Field:from_pv, Field:from_url, Field:login_session_id, Field:spm_id, Field:device_tourist_id, Field:extend, FieldMap:map/body/dynamic |
| classes16.dex:23157:POST | POST | /x/passport-login/login/intl/sns | https://passport.bilibili.com | Field:app_id, Field:sns_type, Field:code, Field:device_meta, Field:dt, Field:login_session_id, Field:spm_id, Field:device_tourist_id, Field:extend, Field:code_secret, Field:extend_code |
| classes16.dex:23158:POST | POST | /x/passport-quick-login/login | https://passport.bilibili.com | Field:token, Field:carrier, Field:carrier_ver, Field:auth_code, Field:device_meta, Field:dt, Field:from_pv, Field:from_url, Field:login_session_id, Field:spm_id, Field:device_tourist_id, Field:extend, FieldMap:map/body/dynamic |
| classes16.dex:23159:POST | POST | /x/passport-login/login/sms | https://passport.bilibili.com | Field:cid, Field:tel, Field:code, Field:captcha_key, Field:device_meta, Field:dt, Field:scene, Field:from_pv, Field:from_url, Field:login_session_id, Field:spm_id, Field:device_tourist_id, Field:sns_platform, Field:sns_app_id, Field:sns_openid, Field:extend, FieldMap:map/body/dynamic |
| classes16.dex:23160:GET | GET | /x/passport-login/oauth2/info | https://passport.bilibili.com | Query:access_key, QueryMap:map/body/dynamic |
| classes16.dex:23161:POST | POST | /x/passport-tv-login/qrcode/auth_code | https://passport.bilibili.com | Field:login_session_id, Field:spm_id, Field:device_tourist_id, Field:extend, FieldMap:map/body/dynamic, Field:gourl, Field:code, Field:app_id |
| classes16.dex:23162:POST | POST | /x/passport-tv-login/qrcode/poll | https://passport.bilibili.com | Field:auth_code, Field:device_meta, Field:dt, Field:login_session_id, Field:spm_id, Field:device_tourist_id, Field:extend, FieldMap:map/body/dynamic |
| classes16.dex:23163:POST | POST | /x/passport-login/oauth2/refresh_token | https://passport.bilibili.com | Field:access_key, Field:refresh_token, Field:sts, FieldMap:map/body/dynamic |
| classes16.dex:23164:POST | POST | /x/passport-user/reg/sms | https://passport.bilibili.com | Field:cid, Field:tel, Field:code, Field:captcha_key, Field:device_meta, Field:dt, Field:scene, Field:from_pv, Field:from_url, Field:login_session_id, Field:spm_id, Field:device_tourist_id, Field:sns_platform, Field:sns_app_id, Field:sns_openid, Field:extend, FieldMap:map/body/dynamic |
| classes16.dex:23165:POST | POST | /x/passport-login/sms/send | https://passport.bilibili.com | Field:cid, Field:tel, Field:login_session_id, Field:spm_id, Field:device_tourist_id, Field:extend, FieldMap:map/body/dynamic |
| classes16.dex:23166:POST | POST | /api/v2/oauth2/login | https://passport.bilibili.com | Field:username, Field:password, Field:captcha |
| classes16.dex:23167:POST | POST | /x/passport-login/revoke | https://passport.bilibili.com | Field:access_key, Field:mid, Field:session, Field:revoke_type, FieldMap:map/body/dynamic |
| classes16.dex:23168:POST | POST | /x/passport-login/revoke | https://passport.bilibili.com | Field:access_key, Field:mid, Field:session, FieldMap:map/body/dynamic, Field:revoke_api, Field:revoke_type |
| classes16.dex:23169:POST | POST | /x/passport-login/account/switch | https://passport.bilibili.com | Field:access_key, Field:need_switch_access_key, Field:need_switch_refresh_token, Field:device_meta, Field:dt, Field:login_session_id, Field:spm_id, Field:device_tourist_id, Field:extend, FieldMap:map/body/dynamic |
| classes16.dex:23170:POST | POST | /x/safecenter/sns/unBind | https://passport.bilibili.com | Field:access_key, Field:appid, Field:sns_type |
| classes16.dex:23736:GET | GET | /x/passport-login/country | https://passport.bilibili.com |  |
| classes16.dex:25615:POST | POST | /paywallet/recharge/requestRecharge | https://pay.bilibili.com | Body:map/body/dynamic, Header:Cookie |
| classes16.dex:25616:POST | POST | /paywallet/recharge/getRechargePanel/v2 | https://pay.bilibili.com | Body:map/body/dynamic, Header:Cookie |
| classes16.dex:25617:POST | POST | /paywallet/recharge/queryOrder | https://pay.bilibili.com | Body:map/body/dynamic |
| classes16.dex:25618:POST | POST | /payplatform/cashier/bp/recharge/queryParam | https://pay.bilibili.com | Body:map/body/dynamic, Header:Cookie |
| classes16.dex:36532:GET | GET | /x/resource/ip | https://app.bilibili.com |  |
| classes16.dex:37313:GET | GET | /open/open_api/v1/miniapp/client/subs/setting/messages | https://miniapp.bilibili.com | Query:access_key |
| classes16.dex:37314:POST | POST | /open/open_api/v1/miniapp/client/subs/sub | https://miniapp.bilibili.com | Body:map/body/dynamic, Query:access_key |
| classes16.dex:37315:POST | POST | /open/open_api/v1/miniapp/client/subs/user_status | https://miniapp.bilibili.com | Body:map/body/dynamic, Query:access_key |
| classes16.dex:37393:POST | POST | /game/center/h5/small/game/relation/setting/update | https://line3-h5-mobile-api.biligame.com | Body:map/body/dynamic, Query:access_key |
| classes16.dex:37956:GET | GET | open/open_api/v1/miniapp/live-link/token | https://miniapp.bilibili.com/ | Query:gameId, Query:offerId, Query:salerId, Query:tencentEnv, Query:useSdk |
| classes16.dex:38684:GET | GET | /open/open_api/v1/miniapp/ad/position/query | https://miniapp.bilibili.com | Query:app_id, Query:v_app_id, Query:ad_unit_id |
| classes16.dex:38685:POST | POST | /open/open_api/v1/miniapp/client/ad/query | https://miniapp.bilibili.com | Query:app_id, Query:v_app_id, Query:access_key, Body:map/body/dynamic |
| classes16.dex:39286:POST | POST | api/miniapp/follow_up/follow | https://miniapp.bilibili.com | Body:map/body/dynamic, Query:access_key |
| classes16.dex:39287:POST | POST | /api/cloud/user/all/single/follow | https://miniapp.bilibili.com | Body:map/body/dynamic, Query:access_key |
| classes16.dex:39288:POST | POST | /api/miniapp/up/follow | https://miniapp.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes16.dex:39289:GET | GET | /api/miniapp/up/follow | https://miniapp.bilibili.com | Query:appId, Query:vAppId |
| classes16.dex:39290:GET | GET | /api/miniapp/game/follow/status | https://miniapp.bilibili.com | Query:access_key |
| classes16.dex:39291:GET | GET | /api/miniapp/follow_up/info | https://miniapp.bilibili.com | Query:access_key |
| classes16.dex:39453:GET | GET | /open/open_api/v1/miniapp/cloud-storage/get | https://miniapp.bilibili.com | Query:keys, Query:access_key |
| classes16.dex:39454:POST | POST | /open/open_api/v1/miniapp/cloud-storage/delete | https://miniapp.bilibili.com | Body:map/body/dynamic, Query:access_key |
| classes16.dex:39455:POST | POST | /open/open_api/v1/miniapp/cloud-storage/set | https://miniapp.bilibili.com | Body:map/body/dynamic, Query:access_key |
| classes16.dex:40105:POST | POST | /x/relation/modify | https://api.bilibili.com | Query:access_key, Query:fid, Query:act, Query:re_src, Query:spmid |
| classes16.dex:40106:GET | GET | /x/relation | https://api.bilibili.com | Query:access_key, Query:fid |
| classes16.dex:40107:GET | GET | /x/relation/stat | https://api.bilibili.com | Query:vmid |
| classes16.dex:40244:POST | POST | /x/v2/history/report | https://api.bilibili.com | Query:type, Field:access_key, FieldMap:map/body/dynamic, Field:cid, Field:aid, Field:duration, Field:progress, Field:device_ts, Field:start_ts, Field:scene |
| classes16.dex:42302:GET | GET | api/applet/login | https://miniapp.bilibili.com/ | Query:appId, Query:vAppId |
| classes16.dex:42303:GET | GET | open/open_api/v1/miniapp/client/user/jscode2session | https://miniapp.bilibili.com/ | Query:js_code, Query:app_id |
| classes16.dex:42522:POST | POST | /x/v2/history/report | https://api.bilibili.com | Query:type, Field:access_key, FieldMap:map/body/dynamic, Field:cid, Field:aid, Field:duration, Field:progress, Field:device_ts, Field:start_ts, Field:scene |
| classes16.dex:43224:POST | POST | open/open_api/v1/miniapp/payment/exchange_pay_info | https://miniapp.bilibili.com/ | Body:map/body/dynamic, Query:access_key |
| classes16.dex:43331:POST | POST | /x/relation/modify | https://api.bilibili.com | Query:access_key, Query:fid, Query:act, Query:re_src, Query:spmid |
| classes16.dex:43332:GET | GET | /x/relation | https://api.bilibili.com | Query:access_key, Query:fid |
| classes16.dex:43333:GET | GET | /x/relation/stat | https://api.bilibili.com | Query:vmid |
| classes16.dex:43514:GET | GET | c/open-template-web/incentive/checkGrantable | https://miniapp.bilibili.com/ | Query:scene, Query:incentiveType |
| classes16.dex:43515:POST | POST | c/open-template-web/incentive/consume | https://miniapp.bilibili.com/ | Body:map/body/dynamic |
| classes16.dex:43516:GET | GET | c/open-template-web/incentive/balance | https://miniapp.bilibili.com/ |  |
| classes16.dex:43517:POST | POST | c/open-template-web/incentive/grant | https://miniapp.bilibili.com/ | Body:map/body/dynamic |
| classes16.dex:43627:POST | POST | open/open_api/v1/miniapp/client/iap/trade/coin/consume | https://miniapp.bilibili.com/ | Body:map/body/dynamic |
| classes16.dex:43628:POST | POST | open/open_api/v1/miniapp/client/iap/trade/order | https://miniapp.bilibili.com/ | Body:map/body/dynamic |
| classes16.dex:43629:GET | GET | open/open_api/v1/miniapp/client/iap/common/agreements | https://miniapp.bilibili.com/ |  |
| classes16.dex:43630:GET | GET | open/open_api/v1/miniapp/client/iap/trade/coin/product | https://miniapp.bilibili.com/ | Query:pid, Query:cid, Query:assets_id |
| classes16.dex:43631:GET | GET | open/open_api/v2/miniapp/client/iap/trade/products | https://miniapp.bilibili.com/ | Query:pid, Query:cid, Query:assets_id |
| classes16.dex:43632:GET | GET | open/open_api/v1/miniapp/client/iap/user/auto-unlock | https://miniapp.bilibili.com/ |  |
| classes16.dex:43633:GET | GET | open/open_api/v1/miniapp/client/iap/trade/assets/coins | https://miniapp.bilibili.com/ |  |
| classes16.dex:43701:POST | POST | open/open_api/v1/miniapp/ab/assign | https://miniapp.bilibili.com/ | Body:map/body/dynamic |
| classes16.dex:43706:GET | GET | /x/vas/playlet/open_api/auth/openid |  | Query:mid, Query:app_id |
| classes16.dex:43711:GET | GET | open/open_api/v1/miniapp/client/applet/copyright/protection | https://miniapp.bilibili.com/ |  |
| classes16.dex:43714:GET | GET | open/open_api/v1/miniapp/client/season/query | https://miniapp.bilibili.com/ | Query:season_id, Query:open_id, Query:planting_info, Query:sourcefrom |
| classes16.dex:43722:GET | GET | c/open-template-web/miniapp/configs | https://miniapp.bilibili.com/ |  |
| classes16.dex:43733:GET | GET | c/open-template-web/price-assets/content/detail | https://miniapp.bilibili.com/ | Query:assetsId, Query:contentId |
| classes16.dex:43737:GET | GET | open/open_api/v1/miniapp/client/season/recommend/v2 | https://miniapp.bilibili.com/ | Query:season_id, Query:cursor, Query:size, Query:open_id, Query:app_id |
| classes16.dex:43753:POST | POST | open/open_api/v1/miniapp/client/season/unlock/progress | https://miniapp.bilibili.com/ | Body:map/body/dynamic |
| classes16.dex:43754:POST | POST | open/open_api/v1/miniapp/client/season/unlock | https://miniapp.bilibili.com/ | Body:map/body/dynamic |
| classes16.dex:44391:GET | GET | api/miniapp/configs | https://miniapp.bilibili.com/ | Query:buildType, Query:appId, Query:vAppId, Query:storageId |
| classes16.dex:44670:POST | POST | /open/open_api/v1/miniapp/data/submit/activation | https://miniapp.bilibili.com | Query:app_id, Query:v_app_id, Query:access_key, Body:map/body/dynamic |
| classes16.dex:44671:POST | POST | /open/open_api/v1/miniapp/data/submit/event | https://miniapp.bilibili.com | Query:app_id, Query:v_app_id, Query:access_key, Body:map/body/dynamic |
| classes16.dex:44672:GET | GET | /api/miniapp/report/use | https://miniapp.bilibili.com | Query:appId, Query:vAppId, Query:lifeEvent, Query:platform |
| classes16.dex:44673:POST | POST | /open/open_api/v1/miniapp/user/access | https://miniapp.bilibili.com | Query:app_id, Query:v_app_id, Query:app_type, Query:access_key |
| classes16.dex:44674:GET | GET | /game/center/h5/small/game/advertising_position | https://line3-h5-mobile-api.biligame.com | Query:app_id, Query:ad_unit_id |
| classes16.dex:44675:GET | GET | /game/center/h5/user/smallgame/iaa_ad_style_exp | https://line3-h5-mobile-api.biligame.com | Query:app_id |
| classes16.dex:44940:GET | GET | api/applet/login | https://miniapp.bilibili.com/ | Query:appId, Query:vAppId |
| classes16.dex:44941:GET | GET | api/applet/user_info/get | https://miniapp.bilibili.com/ | Query:withCredentials, Query:vAppId, Query:appId, Query:token, Query:lang |
| classes16.dex:44942:GET | GET | api/applet/session/check | https://miniapp.bilibili.com/ | Query:appId, Query:vAppId, Query:token |
| classes16.dex:45004:GET | GET | /open/open_api/v1/miniapp/ad/position/query | https://miniapp.bilibili.com | Query:app_id, Query:v_app_id, Query:ad_unit_id |
| classes16.dex:45005:POST | POST | /open/open_api/v1/miniapp/client/ad/query | https://miniapp.bilibili.com | Query:app_id, Query:v_app_id, Query:access_key, Body:map/body/dynamic |
| classes16.dex:45873:POST | POST | /open/open_api/v1/miniapp/data/submit/event | https://miniapp.bilibili.com/ | Query:app_id, Query:v_app_id, Query:access_key, Body:map/body/dynamic |
| classes16.dex:46145:POST | POST | /api/cloud/user/all/single/follow | https://miniapp.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes16.dex:46146:POST | POST | /api/miniapp/follow_up/follow | https://miniapp.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes16.dex:46147:POST | POST | /api/miniapp/up/follow | https://miniapp.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes16.dex:46148:GET | GET | /api/miniapp/up/follow | https://miniapp.bilibili.com | Query:access_key, Query:appId, Query:vAppId |
| classes16.dex:46149:GET | GET | /api/miniapp/game/follow/status | https://miniapp.bilibili.com | Query:access_key |
| classes16.dex:46150:GET | GET | /api/miniapp/follow_up/info | https://miniapp.bilibili.com | Query:access_key |
| classes16.dex:46588:POST | POST | /open/open_api/v1/miniapp/client/subs/sub | https://miniapp.bilibili.com | Body:map/body/dynamic, Query:access_key |
| classes16.dex:46589:POST | POST | /open/open_api/v1/miniapp/client/subs/user_status | https://miniapp.bilibili.com | Body:map/body/dynamic, Query:access_key |
| classes16.dex:46760:GET | GET | open/open_api/v1/miniapp/phone/preauth | https://miniapp.bilibili.com/ | Query:app_id, Query:access_key |
| classes16.dex:46761:GET | GET | /x/member/realname/apply/status | https://api.bilibili.com | Query:access_key |
| classes16.dex:47162:POST | POST | open/open_api/v1/miniapp/payment/exchange_pay_info | https://miniapp.bilibili.com/ | Body:map/body/dynamic, Query:access_key |
| classes16.dex:47583:GET | GET | /open/open_api/v1/miniapp/live-link/token | https://miniapp.bilibili.com | Query:gameId, Query:offerId, Query:salerId, Query:tencentEnv, Query:useSdk |
| classes16.dex:47615:GET | GET | /open/open_api/v1/miniapp/up/info | https://miniapp.bilibili.com |  |
| classes16.dex:47616:GET | GET | /open/open_api/v1/miniapp/up/relation | https://miniapp.bilibili.com | Query:access_key |
| classes16.dex:47617:GET | GET | /open/open_api/v1/miniapp/up/archives | https://miniapp.bilibili.com | Query:page, Query:size |
| classes16.dex:47618:GET | GET | /open/open_api/v1/miniapp/cloud-storage/get | https://miniapp.bilibili.com | Query:keys, Query:access_key |
| classes16.dex:47619:GET | GET | /open/open_api/v1/miniapp/common/qr-code | https://miniapp.bilibili.com | Query:path, Query:size, Query:access_key |
| classes16.dex:47620:POST | POST | /open/open_api/v1/miniapp/cloud-storage/delete | https://miniapp.bilibili.com | Body:map/body/dynamic, Query:access_key |
| classes16.dex:47621:POST | POST | /open/open_api/v1/miniapp/cloud-storage/set | https://miniapp.bilibili.com | Body:map/body/dynamic, Query:access_key |
| classes16.dex:49737:GET | GET | api/ticket/district/dl | https://show.bilibili.com/ |  |
| classes16.dex:49965:GET | GET | /api/video/view/info | https://miniapp.bilibili.com | Query:id, Query:page |
| classes16.dex:49966:GET | GET | /api/video/link/permission/check | https://miniapp.bilibili.com |  |
| classes16.dex:51180:POST | POST | /open/open_api/v1/miniapp/data/submit/activation | https://miniapp.bilibili.com | Query:app_id, Query:v_app_id, Query:access_key, Body:map/body/dynamic |
| classes16.dex:51181:POST | POST | /open/open_api/v1/miniapp/user/access | https://miniapp.bilibili.com | Query:app_id, Query:v_app_id, Query:app_type, Query:access_key |
| classes16.dex:52037:GET | GET | api/miniapp/configs/global | https://miniapp.bilibili.com/ | Query:biz_from |
| classes16.dex:52460:GET | GET | api/miniapp/info/main | https://miniapp.bilibili.com/ | Query:appId, Query:vAppId |
| classes16.dex:52941:GET | GET | api/miniapp/configs | https://miniapp.bilibili.com/ | Query:buildType, Query:appId, Query:vAppId, Query:storageId, Header:APPLET-BUILD-TYPE, Header:APPLET-ID |
| classes16.dex:53738:POST | POST | /x/v2/view/like | https://api.bilibili.com | Query:access_key, Field:aid, Field:like, Field:spmid, Field:from_spmid, Field:action_id, Field:extend_fields |
| classes16.dex:53739:POST | POST | /x/v2/view/like/nologin | https://api.bilibili.com | Field:aid, Field:like, Field:spmid, Field:from_spmid, Field:action, Field:action_id, Field:extend_fields |
| classes16.dex:53740:POST | POST | /x/relation/modify | https://api.bilibili.com | Query:access_key, Query:fid, Query:act, Query:re_src, Query:spmid |
| classes16.dex:53741:GET | GET | /x/relation | https://api.bilibili.com | Query:access_key, Query:fid |
| classes16.dex:53742:GET | GET | /x/relation/stat | https://api.bilibili.com | Query:vmid |
| classes16.dex:53743:POST | POST | https://miniapp.bilibili.com/open/open_api/v1/miniapp/data/submit/share | https://api.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes16.dex:53816:GET | GET | open/open_api/v1/miniapp/season/recommend | https://miniapp.bilibili.com/ | Query:from_season_id, Query:page, Query:size |
| classes16.dex:53817:GET | GET | open/open_api/v1/miniapp/season/query | https://miniapp.bilibili.com/ | Query:season_id, Query:episode_id |
| classes16.dex:57261:GET | GET | /x/member/account_switch/user/infos | https://api.bilibili.com | Query:mids, QueryMap:map/body/dynamic |
| classes16.dex:57660:POST | POST | /paywallet/wallet/listForUserRecharges | https://pay.bilibili.com | Body:map/body/dynamic, Header:Cookie |
| classes16.dex:57661:POST | POST | /paywallet/wallet/listForUserPays | https://pay.bilibili.com | Body:map/body/dynamic, Header:Cookie |
| classes16.dex:57662:POST | POST | /paywallet/coupon/listForUserCoupons | https://pay.bilibili.com | Body:map/body/dynamic, Header:Cookie |
| classes16.dex:57663:POST | POST | /paywallet/wallet/getWalletPage/v2 | https://pay.bilibili.com | Body:map/body/dynamic, Header:Cookie |
| classes16.dex:61486:GET | GET | /x/v2/param | https://app.bilibili.com | Query:ver |
| classes16.dex:61954:POST | POST | open/open_api/v1/miniapp/payment/exchange_pay_info | https://miniapp.bilibili.com/ | Body:map/body/dynamic, Query:access_key |
| classes16.dex:62871:GET | GET | open/open_api/v1/miniapp/phone/preauth | https://miniapp.bilibili.com/ | Query:app_id, Query:access_key |
| classes16.dex:63259:GET | GET | /x/member/realname/apply/status | https://api.bilibili.com | Query:access_key |
| classes17.dex:1022:POST | POST | /x/v2/account/bili_link/report | https://app.bilibili.com | Field:id |
| classes17.dex:1026:GET | GET | /x/playurl/proj/activity | https://app.bilibili.com | Query:access_key, Query:act_type, Query:playurl_type, Query:aid, Query:cid, Query:season_id, Query:ep_id, Query:room_id, Query:partition_id, Query:new_user, Query:player_scene, Query:ott_device |
| classes17.dex:1027:POST | POST | /x/passport-login/authorize | https://passport.bilibili.com | Field:scene, Field:access_key, Field:package, Field:target_appkey, Field:signature |
| classes17.dex:1028:POST | POST | /x/playurl/bubble_submit | https://app.bilibili.com | Field:code, Field:access_key |
| classes17.dex:3208:GET | GET | api/ticket/district/dl | https://show.bilibili.com/ |  |
| classes17.dex:3310:GET | GET | audio/music-service/app/createcenter/songs/delete/{song_id} | https://api.bilibili.com/ | Path:song_id, Query:mid, Query:access_key |
| classes17.dex:3311:GET | GET | audio/music-service/app/createcenter/songs/query/new | https://api.bilibili.com/ | Query:mid, Query:access_key, Query:page_index, Query:page_size, Query:status, Query:ctime, Query:collection_num, Query:play_num |
| classes17.dex:3312:GET | GET | audio/music-service/app/createcenter/songs/query/new | https://api.bilibili.com/ | Query:mid, Query:access_key, Query:page_index, Query:page_size, Query:ctime, Query:collection_num, Query:play_num |
| classes17.dex:3313:GET | GET | audio/music-service-c/songs/internal/upsongslist/v3 | https://api.bilibili.com/ | Query:uid, Query:pageIndex, Query:pageSize |
| classes17.dex:5270:POST | POST | /x/v2/view/like/nologin | https://app.bilibili.com | Field:aid, Field:like, Field:spmid, Field:from_spmid, Field:action, Field:action_id, Field:extend_fields |
| classes17.dex:5271:POST | POST | /x/v2/view/like | https://app.bilibili.com | Field:aid, Field:like, Field:spmid, Field:from_spmid, Field:action_id, Field:extend_fields |
| classes17.dex:6132:GET | GET | x/resource/dolby/config | https://app.bilibili.com | Query:brand, Query:model |
| classes17.dex:6624:GET | GET | /x/bplus/geo | https://app.bilibili.com | Query:lat, Query:lng |
| classes17.dex:7174:GET | GET | /x/vupre/app/profile | https://member.bilibili.com | Query:scene, Header:X-Event-TraceID |
| classes17.dex:12359:GET | GET | /x/resource/peak/download | https://app.bilibili.com | QueryMap:map/body/dynamic |
| classes17.dex:17672:GET | GET | /api/video/view/info | https://miniapp.bilibili.com | Query:id, Query:page |
| classes17.dex:17673:GET | GET | /api/video/link/permission/check | https://miniapp.bilibili.com |  |
| classes17.dex:19341:GET | GET | open/open_api/v1/miniapp/season/query | https://miniapp.bilibili.com/ | Query:season_id, Query:episode_id, Query:planting_info |
| classes17.dex:19342:GET | GET | open/open_api/v1/miniapp/season/recommend | https://miniapp.bilibili.com/ | Query:from_season_id, Query:page, Query:size |
| classes17.dex:19343:POST | POST | open/open_api/v1/miniapp/arc/ext | https://miniapp.bilibili.com/ | Query:access_key, Body:map/body/dynamic |
| classes17.dex:19344:POST | POST | open/open_api/v1/miniapp/data/submit/share | https://miniapp.bilibili.com/ | Query:access_key, Body:map/body/dynamic |
| classes17.dex:25787:GET | GET | /x/creative-tool/v1/DeviceModelBiz/GetMobileTypeLevelKV | https://member.bilibili.com | QueryMap:map/body/dynamic |
| classes17.dex:25788:POST | POST | /x/creative-tool/v1/DeviceModelData/UploadType | https://member.bilibili.com | Body:map/body/dynamic |
| classes17.dex:31012:POST | POST | /x/tv/stream/cmd | https://api.bilibili.com | Field:aid, Field:cid, Field:command, Field:video_type, Field:epid, Field:season_id, Field:seek_ts, Field:ott_buvid, Field:extra, Field:access_key, Field:danmakuSwitchSave, Field:room_id, Field:device_info, Field:by_code, Field:screencast_event |
| classes17.dex:31115:POST | POST | /x/passport-login/authorize | https://passport.bilibili.com | Field:access_key, Field:target_appkey, Field:signature, Field:package, Field:app_subid |
| classes17.dex:31116:GET | GET | /x/tv/proj_intercept | https://api.bilibili.com | Query:access_key, Query:playurl_type, Query:aid, Query:cid, Query:season_id, Query:ep_id, Query:room_id |
| classes17.dex:31117:POST | POST | /x/vip/ads/material/report | https://api.bilibili.com | Body:map/body/dynamic |
| classes17.dex:31118:POST | POST | /x/tv/projection/report | https://api.bilibili.com | Field:event_type, Field:event_msg, Field:access_key, Field:video_type, Field:dlna |
| classes17.dex:31119:GET | GET | /x/tv/projection/guide_info | https://api.bilibili.com | Query:android_ver, Query:yst_ver, Query:is_connected, Query:pre_device_brand, Query:pre_device_model, Query:pre_device_login_user_type |
| classes17.dex:31120:GET | GET | /x/tv/playurl | https://api.bilibili.com | Query:video_type, Query:protocol, Query:mobile_access_key, Query:is_proj, Query:playurl_type, Query:object_id, Query:cid, Query:qn, Query:is_h265, Query:is_dolby, Query:live_extra, Query:fnver, Query:fnval, Query:fourk, Query:sys_ver, Query:buvid, Query:access_key, Query:ogv_aid, Query:language |
| classes17.dex:31121:POST | POST | /x/tv/bifrost/report/edge | https://api.bilibili.com | Field:access_key, Field:edge_device, Field:core_device |
| classes17.dex:31122:GET | GET | /x/tv/projection/devices | https://api.bilibili.com | Query:access_key, Query:video_type |
| classes17.dex:31123:GET | GET | /x/tv/proj_code/scan | https://api.bilibili.com | Header:Buvid, Query:access_key, Query:proj_code |
| classes17.dex:33779:POST | POST | /x/v2/dm/post | https://api.bilibili.com | Query:access_key, Query:aid, Query:oid, Query:spmid, Query:from_spmid, FieldMap:map/body/dynamic |
| classes17.dex:34508:POST | POST | /x/push/token | https://api.bilibili.com | FieldMap:map/body/dynamic |
| classes17.dex:34509:POST | POST | /x/push/user/isBadgeNoDisturb | https://api.bilibili.com | FieldMap:map/body/dynamic |
| classes17.dex:34510:POST | POST | /x/push/callback/click | https://api.bilibili.com | FieldMap:map/body/dynamic |
| classes17.dex:34511:POST | POST | /x/push/callback/fcm | https://api.bilibili.com | FieldMap:map/body/dynamic |
| classes17.dex:36410:POST | POST | /x/share/click | https://api.bilibili.com | Field:access_key, Field:share_id, Field:oid, Field:share_mode, Field:share_origin, Field:share_channel, Field:sid, Field:tag, Field:share_title, Field:share_content, Field:share_pattern, Field:buvid, Field:spm_id, Field:from_spmid, Field:from, Field:tid, Field:object_extra_fields, Field:platform, Field:panel_type, Field:share_session_id, Query:action_id |
| classes17.dex:36411:GET | GET | /x/share/channels | https://api.bilibili.com | Query:access_key, Query:share_id, Query:oid, Query:share_origin, Query:sid, Query:buvid, Query:spm_id, Query:from_spmid, Query:object_extra_fields, Query:platform, Query:panel_type, Query:share_session_id, Query:triggerparameter, Query:action_id |
| classes17.dex:36412:POST | POST | /x/share/placard | https://api.bilibili.com | Field:share_id, Field:oid, Field:buvid, Field:share_origin, Field:sid, Query:action_id |
| classes17.dex:36413:POST | POST | /x/share/quickWord | https://api.bilibili.com | Field:share_id, Field:oid, Field:share_origin, Field:sid, Field:buvid, Field:access_key, Field:platform, Field:spm_id, Field:from_spmid, Field:object_extra_fields, Field:share_channel, Field:panel_type, Field:share_session_id |
| classes17.dex:36414:POST | POST | /x/share/finish | https://api.bilibili.com | Field:link, Field:success, Field:spm_id, Field:from_spmid, Field:object_extra_fields, Field:panel_type, Field:share_session_id |
| classes17.dex:36415:POST | POST | /x/share/finish | https://api.bilibili.com | Field:link, Field:success, Field:spm_id, Field:from_spmid, Field:object_extra_fields, Field:share_id, Field:oid, Field:sid, Field:share_origin, Field:share_channel, Field:panel_type, Field:share_session_id |
| classes17.dex:36416:POST | POST | /x/share/word | https://api.bilibili.com | Field:share_id, Field:oid, Field:share_origin, Field:sid, Field:buvid, Field:access_key, Field:platform, Field:spm_id, Field:from_spmid, Field:object_extra_fields, Field:panel_type, Field:share_session_id |
| classes17.dex:46943:POST | POST | /x/vip/privilege/remind | https://api.bilibili.com | Field:rights_type |
| classes17.dex:46944:GET | GET | /x/vip/vip_privilege/info | https://api.bilibili.com | Query:privilege_key |
| classes17.dex:46952:POST | POST | x/coupon/code/exchange | https://api.bilibili.com | Field:access_key, Field:token, Field:code, Field:verify |
| classes17.dex:46953:GET | GET | /x/vip/coupon/list | https://api.bilibili.com | Query:access_key, Query:id |
| classes17.dex:46954:GET | GET | /x/vip/coupon/list/v3 | https://api.bilibili.com | Query:pid, Query:discount_id, Query:scene |
| classes17.dex:46955:GET | GET | x/vip/v1/frozenTime | https://api.bilibili.com | Query:access_key |
| classes17.dex:46956:GET | GET | x/coupon/code/verify | https://api.bilibili.com | Query:access_key |
| classes17.dex:46957:POST | POST | x/vip/v1/unfrozen | https://api.bilibili.com | Field:access_key |
| classes17.dex:46958:POST | POST | /x/vip/coupon/unlock | https://api.bilibili.com | Query:access_key, Query:coupon_token |
| classes17.dex:56449:POST | POST | picture/image | https://mall.bilibili.com/mall-c/ | Body:map/body/dynamic |
| classes17.dex:56450:POST | POST | api/miniapp/file/upload | https://miniapp.bilibili.com/ | Body:map/body/dynamic |
| classes18.dex:3226:GET | GET | /media/api/search/series/list |  | Query:season_type |
| classes18.dex:5065:GET | GET | /x/v2/region/dynamic/list | https://app.bilibili.com | Query:rid, Query:channel, Query:pull, Query:ctime |
| classes18.dex:5629:POST | POST | /review/api/long/del |  | Field:media_id, Field:review_id |
| classes18.dex:5630:POST | POST | /review/api/short/del |  | Field:media_id, Field:review_id |
| classes18.dex:5631:GET | GET | /pgc/review/gateway//synthesize/feed | https://api.bilibili.com | Query:media_id, Query:type, Query:oid, Query:otype, Query:cursor, Query:ps, Query:source_type |
| classes18.dex:5632:GET | GET | /pgc/review/gateway//synthesize/tags | https://api.bilibili.com | Query:media_id |
| classes18.dex:5633:POST | POST | /pgc/review/action/like | https://api.bilibili.com | Field:media_id, Field:review_id, Field:review_type |
| classes18.dex:6109:POST | POST | /x/vip/ads/material/report | https://api.bilibili.com | Body:map/body/dynamic |
| classes18.dex:6540:GET | GET | /pgc/season/index/result | https://api.bilibili.com | QueryMap:map/body/dynamic |
| classes18.dex:6541:GET | GET | /pgc/season/index/condition | https://api.bilibili.com | QueryMap:map/body/dynamic, Query:type |
| classes18.dex:6817:GET | GET | /open/monitor/err/collect | https://api.bilibili.com | Query:product, Query:event, Query:code, Query:ext_json, Query:sub_event |
| classes18.dex:7809:GET | GET | /x/resource/abtest/batch | https://app.bilibili.com |  |
| classes18.dex:8096:GET | GET | /x/v2/feed/nf | https://app.bilibili.com | Query:goto, Query:id, Query:up_id, Query:up_name, Query:jumpgoto, Query:video_mode, Query:column, Query:tname, Query:from, Query:is_second_panel, Query:old_pegasus, Query:title, Query:translated_status, Query:dislike_info |
| classes18.dex:8361:GET | GET | /x/v2/feed/index/vertical/tab | https://app.bilibili.com | Query:pull, Query:offset, Query:channel_id |
| classes18.dex:8966:POST | POST | /x/article/like | https://api.bilibili.com | Query:access_key, Field:id, Field:type |
| classes18.dex:17620:POST | POST | /pgc/app/follow/watched/close |  | Query:access_key, Query:follow_type |
| classes18.dex:17621:POST | POST | /pgc/app/follow/series/close |  | Query:access_key, Query:follow_type |
| classes18.dex:17622:POST | POST | /pgc/app/follow/unwatch/close |  | Query:access_key, Query:follow_type |
| classes18.dex:17623:GET | GET | /pgc/app/follow/movable |  | Query:access_key, Query:status, Query:follow_type |
| classes18.dex:17624:GET | GET | /pgc/app/follow/v2/{type} |  | Path:type, Query:ps, Query:pn, Query:status, Query:from_spmid, Query:spmid |
| classes18.dex:17625:GET | GET | /pgc/app/follow/series/info |  | Query:access_key, Query:follow_type |
| classes18.dex:17933:GET | GET | /pgc/season/character/get | https://api.bilibili.com | Query:id |
| classes18.dex:17934:GET | GET | /pgc/season/character/seasons | https://api.bilibili.com | Query:character_id, Query:order_type, Query:pn, Query:ps |
| classes18.dex:18024:POST | POST | /sponsor/api/v2/pay/comment |  | FieldMap:map/body/dynamic |
| classes18.dex:18029:GET | GET | /sponsor/get_season_by_sponsor |  | Query:page, Query:page_size, Query:index_type, Query:index_sort |
| classes18.dex:18030:GET | GET | /sponsor/api/v2/rank/total |  | QueryMap:map/body/dynamic |
| classes18.dex:18031:GET | GET | /sponsor/api/v2/rank/week |  | QueryMap:map/body/dynamic |
| classes18.dex:18162:GET | GET | /pgc/app/timeline |  | Query:type, Query:night_mode, Query:filter_type, Query:is_new |
| classes18.dex:18364:POST | POST | /pgc/operation/playlist/fav/del |  | Field:pid |
| classes18.dex:18365:GET | GET | /pgc/operation/playlist/list |  | Query:pn, Query:ps |
| classes18.dex:18906:GET | GET | /pgc/page/exchange | https://api.bilibili.com | Query:oid, Query:type |
| classes18.dex:18907:GET | GET | /pgc/page/module/mine | https://api.bilibili.com | Query:page, Query:tab_id, Query:fnver, Query:fnval, Query:fourk, Query:qn, Query:teenagers_mode |
| classes18.dex:18908:GET | GET | /pgc/page/tab | https://api.bilibili.com | Query:parent_tab_name, Query:hide_rcmd_tab |
| classes18.dex:18909:GET | GET | /pgc/season/rank/list | https://api.bilibili.com | Query:season_type, Query:style_id |
| classes18.dex:18910:GET | GET | /pgc/page/guess/bangumi | https://api.bilibili.com | Query:page_no, Query:page_size |
| classes18.dex:18911:GET | GET | /pgc/page/guess/cinema | https://api.bilibili.com | Query:page_no, Query:page_size |
| classes18.dex:18912:GET | GET | /pgc/page | https://api.bilibili.com | Query:name, Query:tab_id, Query:cursor, Query:type, Query:fnver, Query:fnval, Query:fourk, Query:qn, Query:ad_extra, Query:teenagers_mode |
| classes18.dex:18913:GET | GET | /pgc/page | https://api.bilibili.com | Query:name, Query:tab_id, Query:cursor, Query:is_refresh, Query:type, Query:fnver, Query:fnval, Query:fourk, Query:qn, Query:ad_extra, Query:teenagers_mode |
| classes18.dex:19528:POST | POST | /pgc/app/follow/topic/fav/add | https://api.bilibili.com | Query:set_id |
| classes18.dex:19529:POST | POST | /pgc/app/follow/topic/fav/cancel | https://api.bilibili.com | Query:set_id |
| classes18.dex:20265:POST | POST | /pgc/activity/deliver/task/complete | https://api.bilibili.com | Query:position, Query:task_id, Query:token, Query:timestamp, Query:task_sign, Query:win_id |
| classes18.dex:21054:POST | POST | pgc/pay/api/season/order/create | https://api.bilibili.com | Field:season_id, Field:season_type, Field:coupon_token, Field:is_quick, Field:demand_ep_id, Field:ep_count, Field:pay_channel, Field:pay_channel_id, Field:section |
| classes18.dex:21055:POST | POST | /pgc/pay/api/sponsor/order/create | https://api.bilibili.com | Field:season_id, Field:season_type, Field:money, Field:is_quick |
| classes18.dex:21056:POST | POST | /pgc/pay/api/season/exchange | https://api.bilibili.com | Field:coupon_token, Field:otype, Field:season_id, Field:episode_id |
| classes18.dex:21057:POST | POST | /pgc/pay/api/season/order/check | https://api.bilibili.com | Field:season_type, Field:order_id |
| classes18.dex:21058:POST | POST | /pgc/pay/api/sponsor/order/check | https://api.bilibili.com | Field:order_id, Field:season_type |
| classes18.dex:21059:POST | POST | /x/member/app/pendant/equip?status=2 | https://api.bilibili.com | Field:pid |
| classes18.dex:21255:GET | GET | /pgc/player/api/cache/reserve/verify | http://api.bilibili.com | Query:ep_ids |
| classes18.dex:21256:GET | GET | /pgc/player/api/cache/reserve/verify | http://api.bilibili.com | Query:ep_ids |
| classes18.dex:22767:POST | POST | /pgc/review/short/modify | https://api.bilibili.com | Query:review_id, Query:media_id, Query:score, Query:share_feed, Query:content, Query:code |
| classes18.dex:22768:GET | GET | /pgc/review/app/user | https://api.bilibili.com | Query:media_id |
| classes18.dex:22769:POST | POST | /pgc/review/short/post | https://api.bilibili.com | Query:media_id, Query:score, Query:share_feed, Query:content, Query:code |
| classes18.dex:24157:GET | GET | /pgc/card/locate_ep | https://api.bilibili.com | Query:oid, Query:otype |
| classes18.dex:24257:POST | POST | /x/vip/gsm/privilege/callback | https://api.bilibili.com | Field:result_code, Field:status |
| classes18.dex:24258:POST | POST | /x/vip/gsm/activity/report_act | https://api.bilibili.com | Query:promos, Query:platform |
| classes18.dex:24259:POST | POST | /x/vip/gsm/activity/preload | https://api.bilibili.com | Query:platform |
| classes18.dex:24260:POST | POST | /x/vip/gsm/privilege/verify | https://api.bilibili.com | Query:access_key |
| classes18.dex:25044:GET | GET | /pgc/vega/deneb/nodes/get | http://api.bilibili.com |  |
| classes18.dex:28587:POST | POST | /x/v2/view/coin/add | https://app.bilibili.com | Field:access_key, Field:aid, Field:upid, Field:multiply, Field:avtype, Field:from, Field:select_like, Field:from_spmid, Field:spmid, Field:track_id, Field:goto, Field:source, Field:token, Field:action_id |
| classes18.dex:28868:GET | GET | /x/v2/channel/multiple | https://app.bilibili.com | Query:access_key, Query:channel_id, Query:sort, Query:offset, Query:spmid, Query:pn, Query:from, Query:theme |
| classes18.dex:28869:GET | GET | /x/v2/channel/selected | https://app.bilibili.com | Query:access_key, Query:channel_id, Query:sort, Query:offset, Query:spmid, Query:pn, Query:from, Query:theme |
| classes18.dex:28870:GET | GET | /x/v2/channel/share | https://app.bilibili.com | Query:id, Query:access_key |
| classes18.dex:28871:GET | GET | /x/channel/feed/index | https://app.bilibili.com | Query:channel_id, Query:channel_name, Query:pull, Query:login_event, Query:display_id, Query:access_key, Query:from_spmid, Query:from_page |
| classes18.dex:28872:GET | GET | /x/channel/feed/tab | https://app.bilibili.com | Query:channel_id, Query:channel_name, Query:access_key |
| classes18.dex:28873:GET | GET | /x/v2/channel/detail | https://app.bilibili.com | Query:channel_id, Query:access_key |
| classes18.dex:28874:GET | GET | /x/v2/search/channel2 | https://app.bilibili.com | Query:access_key, Query:keyword, Query:pn, Query:ps |
| classes18.dex:29498:GET | GET | /x/v2/feed/index | https://app.bilibili.com | Query:window_size_type, Query:raw_window_size_type |
| classes18.dex:29499:GET | GET | /x/v2/feed/index/tab | https://app.bilibili.com | Query:access_key, Query:id |
| classes18.dex:30706:GET | GET | x/v2/channel/list | https://app.bilibili.com | Query:access_key, Query:type, Query:offset |
| classes18.dex:30707:GET | GET | x/v2/channel/tab3 | https://app.bilibili.com | Query:access_key |
| classes18.dex:30708:GET | GET | x/v2/channel/home2 | https://app.bilibili.com | Query:offset_new, Query:offset_rcmd, Query:spmid, Query:auto_refresh, Query:pn |
| classes18.dex:30709:GET | GET | x/v2/channel/recommend2 | https://app.bilibili.com | Query:offset, Query:spmid |
| classes18.dex:30710:GET | GET | x/v2/channel/mine | https://app.bilibili.com | Query:access_key |
| classes18.dex:30711:POST | POST | x/v2/channel/sort | https://app.bilibili.com | Field:access_key, Field:action, Field:stick, Field:normal |
| classes18.dex:32907:POST | POST | /x/member/v2/notice/close | https://api.bilibili.com | Query:access_key, Query:uuid |
| classes18.dex:32908:GET | GET | /x/member/v2/notice | https://api.bilibili.com | Query:access_key, Query:uuid |
| classes18.dex:33355:GET | GET | /x/v2/notice?plat=0 | https://app.bilibili.com | Query:channel, Query:type, Query:ver |
| classes18.dex:33889:GET | GET | /x/v2/notice/package | https://app.bilibili.com | Query:model |
| classes18.dex:38673:GET | GET | /x/v2/feed/uinterest/more | https://app.bilibili.com |  |
| classes18.dex:38674:GET | GET | /x/v2/feed/uinterest | https://app.bilibili.com | Query:need_all_label |
| classes18.dex:38675:POST | POST | /x/v2/feed/uinterest/mng | https://app.bilibili.com | Field:fixed_label, Field:unfixed_label, Field:changed_label, Field:action |
| classes18.dex:39073:GET | GET | /x/v2/feed/second/interest | https://app.bilibili.com | Query:oaid, Query:interest_id, Query:interest_result, Query:interest_type, Query:device_type |
| classes18.dex:39074:GET | GET | /x/v2/feed/index | https://app.bilibili.com | Query:idx, Query:pull, Query:login_event, Query:open_event, Query:banner_hash, Query:interest_result, Query:flush, Query:interest_id, Query:splash_id, Query:splash_ids, Query:splash_creative_id, Query:interest_pos_ids, Query:cny_info, Query:clipboard_video_id, Query:clipboard_unique_k, Query:window_size_type, Query:raw_window_size_type |
| classes18.dex:39075:GET | GET | /x/v2/feed/index/interest | https://app.bilibili.com | Query:oaid, Query:cny_info, Query:action |
| classes18.dex:41823:GET | GET | /x/stein/edgeinfo_v2 | https://api.bilibili.com | Query:access_key, Query:edge_id, Query:aid, Query:graph_version, Query:delay, Query:screen, Query:portal, Query:choices, Query:cursor |
| classes18.dex:41824:POST | POST | /x/stein/mark | https://api.bilibili.com | Query:access_key, Query:aid, Query:mark |
| classes18.dex:42363:POST | POST | /x/new-reserve/reserve/cancel | https://api.bilibili.com | Field:access_key, Field:sid, Field:csrf, Field:business |
| classes18.dex:42364:POST | POST | https://app.bilibili.com/x/resource/entrance/infoc | https://api.bilibili.com | Field:access_key, Field:up_mid, Field:business, Field:network |
| classes18.dex:42365:POST | POST | /x/new-reserve/reserve/add | https://api.bilibili.com | Field:access_key, Field:sid, Field:csrf, Field:business |
| classes18.dex:45737:GET | GET | /x/v2/dm/thumbup/stats | https://api.bilibili.com | Query:access_key, Query:oid, Query:ids |
| classes18.dex:45738:POST | POST | /x/v2/dm/thumbup/add | https://api.bilibili.com | Field:access_key, Field:oid, Field:spmid, Field:from_spmid, Field:dmid, Field:op |
| classes18.dex:45761:GET | GET | /x/v2/dm/panel | https://api.bilibili.com | Query:pid, Query:oid, Query:type |
| classes18.dex:45762:GET | GET | /x/v3/fav/recommend/items | https://api.bilibili.com | Query:content_id, Query:content_type |
| classes18.dex:45766:POST | POST | /x/v2/history/report_scene | https://api.bilibili.com | Field:access_key, FieldMap:map/body/dynamic, Field:cid, Field:aid, Field:source, Field:duration, Field:progress, Field:type, Field:device_ts, Field:start_ts, Field:scene, Field:report_scene |
| classes18.dex:45767:POST | POST | /x/v2/history/report | https://api.bilibili.com | Field:access_key, FieldMap:map/body/dynamic, Field:cid, Field:aid, Field:source, Field:duration, Field:progress, Field:type, Field:device_ts, Field:start_ts, Field:scene |
| classes18.dex:45768:POST | POST | /x/v2/history/report_list | https://api.bilibili.com | Field:access_key, Field:cid, Field:aid, Field:parent_type, Field:parent_id, Field:source |
| classes18.dex:45774:POST | POST | /x/vip/hd/trial_modify | https://api.bilibili.com | Field:modify_type, Field:biz_type, Field:st_uuid, Field:aid |
| classes18.dex:55568:POST | POST | mall-c-search/user/ar/list | https://mall.bilibili.com | Body:map/body/dynamic |
| classes18.dex:55712:POST | POST | /x/v2/view/share/complete | https://app.bilibili.com | Field:access_key, Field:oid, Field:type, Field:share_channel, Field:share_trace_id, Field:from, Field:season_id, Field:ep_id, Field:up_id, Field:parent_area_id, Field:area_id |
| classes18.dex:55713:POST | POST | /x/v2/view/share/click | https://app.bilibili.com | Field:access_key, Field:oid, Field:type, Field:share_channel, Field:share_trace_id, Field:from, Field:season_id, Field:ep_id, Field:up_id, Field:parent_area_id, Field:area_id, Field:spmid, Field:from_spmid |
| classes18.dex:61254:POST | POST | /x/v2/view/dislike | https://app.bilibili.com | Field:access_key, Field:aid, Field:dislike, Field:spmid, Field:from_spmid, Field:from, Field:action_id |
| classes18.dex:61255:POST | POST | /x/v2/view/like | https://app.bilibili.com | Field:access_key, Field:aid, Field:like, Field:ogv_type, Field:from_spmid, Field:from, Field:spmid, Field:track_id, Field:goto, Field:source, Field:token, Field:action_id |
| classes18.dex:61256:POST | POST | /x/v2/view/like/triple | https://app.bilibili.com | Field:access_key, Field:aid, Field:from_spmid, Field:from, Field:spmid, Field:track_id, Field:goto, Field:source, Field:token, Field:action_id |
| classes18.dex:61257:POST | POST | /x/v2/view/like/nologin | https://app.bilibili.com | Field:aid, Field:like, Field:action, Field:from_spmid, Field:from, Field:spmid, Field:track_id, Field:goto, Field:source, Field:token, Field:action_id |
| classes18.dex:61372:POST | POST | /twirp/column.v1.ColumnPay/GetComic | https://manga.bilibili.com | Field:comic_id, Field:ep_id, Field:is_install_bilicomic, Field:track_id |
| classes18.dex:61373:POST | POST | /twirp/pay.v1.Pay/GetBCoinLevel | https://manga.bilibili.com | Field:coin_diff |
| classes18.dex:61374:POST | POST | /twirp/pay.v1.Pay/GetOrderState | https://manga.bilibili.com | Field:order_id, Field:order_ctime |
| classes18.dex:61375:POST | POST | /twirp/pay.v1.Pay/CreatePayAndConsumeOrder | https://manga.bilibili.com | Field:pay_amount, Field:business_type, Field:business_info, Field:return_url, Field:comic_id, Field:ep_id, Field:with_ord_scope, Field:start_ord, Field:limit, Field:chapter_id, Field:track_id, Field:outer_track_id |
| classes18.dex:61376:POST | POST | /twirp/community.v1.Pink/ReportRestoreScene | https://manga.bilibili.com | Field:oaid, Field:imei, Field:android_id, Field:scene, Field:comic_id, Field:ep_id, Field:is_install_bilicomic, Field:uri |
| classes18.dex:61710:GET | GET | /x/v2/dm/panel | https://api.bilibili.com | Query:pid, Query:oid, Query:type |
| classes18.dex:61711:GET | GET | /x/v3/fav/recommend/items | https://api.bilibili.com | Query:content_id, Query:content_type |
| classes18.dex:62684:POST | POST | /x/report/click/dolby/unite | https://api.bilibili.com | Body:map/body/dynamic |
| classes18.dex:64176:GET | GET | /x/v2/channel/baike/feed | https://app.bilibili.com | Query:bid, Query:nid, Query:vertical, Query:offset, Query:version |
| classes18.dex:64177:GET | GET | /x/v2/channel/baike/nav | https://app.bilibili.com | Query:bid |
| classes18.dex:64968:GET | GET | /appindex/follow_index_fall?platform=android |  | Query:cursor, Query:area |
| classes18.dex:64969:GET | GET | /api/fall?platform=android&pagesize=10 |  | Query:cursor, Query:wid |
| classes19.dex:51403:POST | POST | /api/ticket/buyerinfo/add | https://show.bilibili.com | Body:map/body/dynamic |
| classes19.dex:51404:POST | POST | /api/ticket/buyerinfo/delete | https://show.bilibili.com | Query:id |
| classes19.dex:51405:GET | GET | /api/ticket/buyerinfo/idtypes | https://show.bilibili.com | Query:src |
| classes19.dex:51406:POST | POST | /api/ticket/buyerinfo/query | https://show.bilibili.com | Body:map/body/dynamic |
| classes19.dex:51407:POST | POST | /api/ticket/buyerinfo/update | https://show.bilibili.com | Body:map/body/dynamic |
| classes19.dex:64876:POST | POST | api/ticket/upload/imageUpload | https://show.bilibili.com | Body:map/body/dynamic |
| classes19.dex:65104:POST | POST | api/ticket/upload/imageUpload | https://show.bilibili.com | Body:map/body/dynamic |
| classes20.dex:1538:GET | GET | /x/member/realname/teen/age/check | https://api.bilibili.com | Query:access_key |
| classes20.dex:2662:GET | GET | /pgc/season/freya/search | https://api.bilibili.com | Query:keyword, Query:page_no, Query:page_size |
| classes20.dex:2663:GET | GET | /pgc/freya/page/tab | https://api.bilibili.com | Query:type |
| classes20.dex:2664:GET | GET | /pgc/freya/page/choose | https://api.bilibili.com | Query:choose_type, Query:season_type, Query:page_version, Query:page_no, Query:page_size |
| classes20.dex:2665:GET | GET | /pgc/page/freya/square | https://api.bilibili.com | Query:page_name, Query:season_id, Query:ep_id, Query:module_title, Query:season_type, Query:full_screen, Query:room_id, Query:from_spmid |
| classes20.dex:2666:GET | GET | /pgc/page/freya/feed | https://api.bilibili.com | Query:wid, Query:cursor, Query:page_name, Query:season_id, Query:season_type, Query:full_screen, Query:room_id, Query:from_spmid |
| classes20.dex:3100:GET | GET | x/app/v3/material/camera/pre | https://member.bilibili.com | Query:access_key |
| classes20.dex:3101:GET | GET | /x/vupre/app/material/target | https://member.bilibili.com | Query:access_key |
| classes20.dex:3102:GET | GET | x/app/v3/material/camera/sticker | https://member.bilibili.com | Query:access_key, Query:devicelevel |
| classes20.dex:3103:GET | GET | x/app/v3/material/pre | https://member.bilibili.com | Query:access_key |
| classes20.dex:3105:GET | GET | /x/app/bgm/view | https://member.bilibili.com | Query:access_key, Query:sid |
| classes20.dex:3106:GET | GET | /x/app/cooperate/v3/view | https://member.bilibili.com | Query:access_key, Query:id |
| classes20.dex:5447:POST | POST | /xlive/general-interface/v1/superChat/uploadImage | https://api.live.bilibili.com | Part:map/body/dynamic |
| classes20.dex:6354:GET | GET | /x/app/archive/xcodeConf | https://member.bilibili.com | Query:access_key, Query:device_name, Query:scene |
| classes20.dex:6867:GET | GET | /audio/music-service-c/songs/playing | https://api.bilibili.com | Query:access_key, Query:song_id |
| classes20.dex:6868:GET | GET | /x/app/v3/material/editor/pre | https://member.bilibili.com | Query:access_key |
| classes20.dex:6869:GET | GET | /audio/music-service-c/url | https://www.bilibili.com | Query:access_key, QueryMap:map/body/dynamic |
| classes20.dex:6870:GET | GET | /x/vupre/app/reserve/check | https://member.bilibili.com | Query:title, Query:time |
| classes20.dex:6871:GET | GET | /x/vupre/app/reserve/list | https://member.bilibili.com | Query:access_key |
| classes20.dex:6872:POST | POST | /x/app/material/fav | https://member.bilibili.com | Field:access_key, Field:type, Field:state, Field:oid |
| classes20.dex:6873:GET | GET | /x/app/bgm/search | https://member.bilibili.com | Query:access_key, Query:kw, Query:ps, Query:pn |
| classes20.dex:6874:GET | GET | /x/app/bgm/v2/pre | https://member.bilibili.com | Query:access_key |
| classes20.dex:6875:GET | GET | /v2/bcut/pink/smart_template | https://member.bilibili.com | Query:tag, Query:template_id, Query:ratio, Query:source_type, Query:scene, Query:sdk_type, Query:aurora_version, Query:montage_version |
| classes20.dex:6876:GET | GET | /v2/bcut/pink/pic2video | https://member.bilibili.com | Query:tag, Query:template_id, Query:ratio, Query:source_type, Query:scene, Query:sdk_type, Query:aurora_version, Query:montage_version |
| classes20.dex:6877:GET | GET | /x/creative-tool/material/views | https://member.bilibili.com | Query:ids, Query:biz, Query:sdk_type, Query:aurora_version, Query:montage_version |
| classes20.dex:6899:GET | GET | /x/app/v3/material/editor/pre | https://member.bilibili.com | Query:access_key, Query:sdk_type, Query:montage_version, Query:aurora_version |
| classes20.dex:6900:GET | GET | /x/vupre/app/editor/tab | https://member.bilibili.com | Query:access_key |
| classes20.dex:19975:GET | GET | /x/app/bgm/v2/pre | https://member.bilibili.com | Query:access_key, Query:from |
| classes20.dex:19976:GET | GET | /x/app/bgm/check/state | https://member.bilibili.com | Query:access_key, Query:sids |
| classes20.dex:19977:GET | GET | /x/app/bgm/v2/list | https://member.bilibili.com | Query:access_key, Query:tid, Query:ps, Query:pn, Query:version |
| classes20.dex:20103:GET | GET | /x/app/bgm/v2/fav | https://member.bilibili.com | Query:access_key |
| classes20.dex:20104:POST | POST | /x/app/material/fav | https://member.bilibili.com | Field:access_key, Field:type, Field:state, Field:oid |
| classes20.dex:22452:POST | POST | /x/vu/app/add | https://member.bilibili.com | Query:access_key, Body:map/body/dynamic, Header:X-Event-TraceID |
| classes20.dex:24066:GET | GET | /x/v2/account/teenagers/timer/get | https://app.bilibili.com | Query:access_key, Query:device_token |
| classes20.dex:24067:POST | POST | /x/v2/account/teenagers/timer/set | https://app.bilibili.com | Field:access_key, Field:time, Field:device_token |
| classes20.dex:24068:POST | POST | /x/v2/account/teenagers/update | https://app.bilibili.com | Field:access_key, Field:device_token, Field:teenagers_status, Field:pwd, Field:wsxcde, Field:device_model, Field:sync, Field:from |
| classes20.dex:24348:GET | GET | /pgc/vipinfo/get | https://api.bilibili.com | Query:mid |
| classes20.dex:24349:POST | POST | x/vip/user/unsign_probability/hand | https://api.bilibili.com | Field:probs |
| classes20.dex:24718:POST | POST | /pgc/freya/room/active | http://api.bilibili.com | Field:room_id |
| classes20.dex:24719:POST | POST | /pgc/freya/room/relation | http://api.bilibili.com | Field:fid, Field:room_id, Field:action |
| classes20.dex:24720:POST | POST | /pgc/freya/room/create | http://api.bilibili.com | Field:season_id, Field:episode_id, Field:is_open, Field:vega_abtest, Field:from_type, Field:sex_type, Field:ext |
| classes20.dex:24721:POST | POST | /pgc/freya/com/interact/pre/create_channel | http://api.bilibili.com | Field:room_id, Field:biz_type, Field:interact_sdk_version, Field:extend |
| classes20.dex:24722:POST | POST | /pgc/freya/room/heartbeat | http://api.bilibili.com | Field:room_id, Field:mid, Field:season_id, Field:episode_id, Field:type, Field:play_status, Field:vega_abtest, Field:ts |
| classes20.dex:24723:GET | GET | /pgc/freya/label/ban_accredit | http://api.bilibili.com | Query:is_ban |
| classes20.dex:24724:GET | GET | /pgc/freya/com/freya_emote/list | http://api.bilibili.com | Query:room_id, Query:biz_type |
| classes20.dex:24725:GET | GET | /pgc/freya/room/recommend/result | http://api.bilibili.com | Query:match_id |
| classes20.dex:24726:POST | POST | /pgc/freya/im/pure/msg | http://api.bilibili.com | Field:room_id, Field:seq_id, Field:backward, Field:size |
| classes20.dex:24727:POST | POST | /pgc/freya/upos/sign | http://api.bilibili.com | Field:msg_id |
| classes20.dex:24728:POST | POST | /pgc/freya/im/action | http://api.bilibili.com | FieldMap:map/body/dynamic |
| classes20.dex:24729:POST | POST | /pgc/freya/room/join | http://api.bilibili.com | Field:room_id, Field:vega_abtest, Field:mid, Field:is_merge, Field:from_type, Field:season_id, Field:episode_id, Field:ext |
| classes20.dex:24730:POST | POST | /pgc/freya/com/interact/pre/join_channel | http://api.bilibili.com | Field:room_id, Field:biz_type, Field:channel_id, Field:interact_sdk_version, Field:extend |
| classes20.dex:24731:POST | POST | /pgc/freya/room/kickout | http://api.bilibili.com | Field:room_id, Field:mid, Field:is_com |
| classes20.dex:24732:POST | POST | /pgc/freya/room/leave | http://api.bilibili.com | Field:room_id, Field:is_com |
| classes20.dex:24733:POST | POST | /pgc/freya/com/interact/pre/leave_channel | http://api.bilibili.com | Field:room_id, Field:biz_type, Field:channel_id, Field:interact_sdk_version, Field:extend |
| classes20.dex:24734:POST | POST | /pgc/freya/room/match | http://api.bilibili.com | Field:season_id, Field:episode_id, Field:fail_fast, Field:from_type, Field:season_type, Field:vega_abtest, Field:ext |
| classes20.dex:24735:POST | POST | /pgc/freya/room/modify/progress | http://api.bilibili.com | Field:is_com, Field:room_id, Field:status, Field:progress |
| classes20.dex:24736:POST | POST | /pgc/freya/room/modify/info | http://api.bilibili.com | Field:room_id, Field:is_open |
| classes20.dex:24737:POST | POST | /pgc/freya/room/modify/season | http://api.bilibili.com | Field:is_com, Field:room_id, Field:season_id, Field:episode_id |
| classes20.dex:24738:POST | POST | /pgc/freya/room/report | http://api.bilibili.com | Field:room_id, Field:event_id, Field:biz_type, Field:report |
| classes20.dex:24739:GET | GET | /pgc/freya/room/ext | http://api.bilibili.com | Query:room_id |
| classes20.dex:24740:GET | GET | /pgc/freya/room/info | http://api.bilibili.com | Query:room_id |
| classes20.dex:24741:POST | POST | /pgc/freya/share/live/share/card | http://api.bilibili.com | Field:room_id |
| classes20.dex:24742:GET | GET | /pgc/freya/label/user_dialog | http://api.bilibili.com | Query:age_type, Query:version |
| classes20.dex:24743:GET | GET | /pgc/freya/label/info | http://api.bilibili.com | Query:room_id, Query:mid |
| classes20.dex:24744:GET | GET | /pgc/freya/room/double/accompany/share | http://api.bilibili.com | Query:room_id, Query:the_other |
| classes20.dex:24745:GET | GET | /pgc/freya/im/msg/first_tips | http://api.bilibili.com | Query:room_id, Query:start_seq_id |
| classes20.dex:24746:GET | GET | /pgc/freya/im/msg/pulls | http://api.bilibili.com | Query:room_id, Query:start_seq_id, Query:end_seq_id |
| classes20.dex:24747:POST | POST | /pgc/freya/room/modify/notice | http://api.bilibili.com | Field:room_id, Field:content |
| classes20.dex:24748:POST | POST | /pgc/freya/im/msg/send | http://api.bilibili.com | Field:room_id, Field:content_type, Field:content, Field:req_id |
| classes20.dex:24749:POST | POST | /pgc/freya/com/freya_emote/send | http://api.bilibili.com | Field:room_id, Field:emote_id, Field:biz_type |
| classes20.dex:24750:POST | POST | /pgc/freya/room/recommend/match | http://api.bilibili.com | Field:season_type, Field:from_type, Field:vega_abtest, Field:match_sex |
| classes20.dex:24751:POST | POST | /pgc/freya/im/msg/remove | http://api.bilibili.com | Field:msg_id |
| classes20.dex:27478:GET | GET | /x/topic/pub/is_existed | https://app.bilibili.com | Query:topic |
| classes20.dex:27479:GET | GET | /x/topic/pub/endpoint | https://app.bilibili.com | Query:scene |
| classes20.dex:27480:POST | POST | /x/v2/relation/esport/cancel | https://app.bilibili.com | Query:access_key, Query:match_id |
| classes20.dex:27481:POST | POST | /x/v2/relation/esport/add | https://app.bilibili.com | Query:access_key, Query:match_id |
| classes20.dex:27482:POST | POST | /x/topic/create/submit | https://app.bilibili.com | Field:topic_name, Field:description, Field:scene, Field:submit_topic_type |
| classes20.dex:27483:GET | GET | /x/topic/pub/search?page_size=20 | https://app.bilibili.com | Query:keywords, Query:offset, Query:upload_id, Query:from_topic_id, Query:from_topic_name, Query:from, Query:content |
| classes20.dex:27484:GET | GET | /x/topic/pub/search?page_size=20&from=center | https://app.bilibili.com | Query:keywords, Query:offset |
| classes20.dex:27485:GET | GET | /x/topic/vert/center?source=app&page_size=20 | https://app.bilibili.com | Query:offset, Query:scene |
| classes20.dex:27486:POST | POST | /x/topic/dislike | https://app.bilibili.com | Field:topic_id |
| classes20.dex:27487:GET | GET | /x/topic/vert/online | https://app.bilibili.com | Query:topic_id |
| classes20.dex:27488:GET | GET | /x/topic/pub/events | https://app.bilibili.com | Query:show_mids, Query:new_pub_num |
| classes20.dex:27489:POST | POST | /x/topic/fav/sub/add | https://app.bilibili.com | Field:topic_id |
| classes20.dex:27490:POST | POST | /x/topic/fav/sub/cancel | https://app.bilibili.com | Field:topic_id |
| classes20.dex:27491:POST | POST | /x/topic/like | https://app.bilibili.com | Field:up_mid, Field:topic_id, Field:action |
| classes20.dex:27492:POST | POST | /x/topic/fav/sub/add | https://app.bilibili.com | Field:topic_set_id |
| classes20.dex:27493:POST | POST | /x/topic/fav/sub/cancel | https://app.bilibili.com | Field:topic_set_id |
| classes20.dex:27494:GET | GET | /x/topic/timeline | https://app.bilibili.com | Query:topic_id, Query:offset |
| classes20.dex:29794:POST | POST | /x/v1/contract/add_message | https://api.bilibili.com | Field:aid, Field:up_mid, Field:source, Field:scene, Field:content, Field:is_add_reply |
| classes20.dex:29795:POST | POST | /x/v1/contract/expose | https://api.bilibili.com | Field:aid, Field:cid, Field:action, Field:up_mid, Field:source, Field:scene, Field:access_key |
| classes20.dex:29796:GET | GET | /x/v1/contract/layer_info | https://api.bilibili.com | Query:up_mid, Query:source, Query:access_key |
| classes20.dex:30137:POST | POST | /x/feedback/upload | https://api.bilibili.com | Part:map/body/dynamic, Query:access_key |
| classes20.dex:30138:POST | POST | /x/feedback/boss/upload | https://api.bilibili.com | Part:buvid, Part:map/body/dynamic, Part:filename, Query:access_key |
| classes20.dex:30139:POST | POST | /x/feedback/add | https://api.bilibili.com | FieldMap:map/body/dynamic |
| classes20.dex:30140:GET | GET | /x/feedback/platform/tag | https://api.bilibili.com | Query:tag_id, Query:business |
| classes20.dex:30141:GET | GET | /x/feedback/tag | https://api.bilibili.com | Query:type |
| classes20.dex:30151:GET | GET | /x/laser/app/query | https://api.bilibili.com | Query:access_key, Query:source_type |
| classes20.dex:30152:POST | POST | /x/laser/app/update | https://api.bilibili.com | Field:platform, Field:access_key, Field:task_state, Field:reason |
| classes20.dex:36733:GET | GET | /x/share/isFirstShare | https://api.bilibili.com | Query:need_complete |
| classes20.dex:36734:POST | POST | /x/vip/ads/material/report | https://api.bilibili.com | Body:map/body/dynamic |
| classes20.dex:36735:GET | GET | /x/v2/feed/index/space/story/cursor | https://app.bilibili.com | QueryMap:map/body/dynamic, Query:need_translate, Query:reply_down_style |
| classes20.dex:36736:GET | GET | /x/v2/feed/index/story | https://app.bilibili.com | QueryMap:map/body/dynamic, Query:aid, Query:cid, Query:bvid, Query:epid, Query:trackid, Query:story_param, Query:pull, Query:request_from, Query:contain, Query:ogv_style, Query:creative_id, Query:feed_status, Query:goto, Query:material_no, Query:questionaire_info, Query:open_event, Query:need_translate, Query:reply_down_style, Query:room_id |
| classes20.dex:36737:GET | GET | /x/v2/feed/index/dynamic/story | https://app.bilibili.com | QueryMap:map/body/dynamic, Query:aid, Query:pull, Query:scene, Query:topic_id, Query:circle_id |
| classes20.dex:36738:GET | GET | /x/v2/feed/index/story/refresh | https://app.bilibili.com | QueryMap:map/body/dynamic, Query:id, Query:goto, Query:trackid, Query:scene |
| classes20.dex:36739:GET | GET | /x/v2/feed/index/relate/story | https://app.bilibili.com | QueryMap:map/body/dynamic, Query:aid, Query:trackid, Query:spmid, Query:from_spmid, Query:view_attribute, Query:season_id, Query:arc_attribute, Query:need_translate, Query:reply_down_style, Query:goto |
| classes20.dex:36740:POST | POST | /x/v2/view/user/action/add | https://app.bilibili.com | Field:uid, Field:action, Field:item_id, Field:item_type, Field:extra |
| classes20.dex:36741:GET | GET | /x/v2/feed/index/story/trans | https://app.bilibili.com | Query:aid, Query:cid, Query:trackid, Query:goto, Query:translation_status |
| classes20.dex:47339:GET | GET |  | https://live.bilibili.com | Url:map/body/dynamic, QueryMap:map/body/dynamic |
| classes20.dex:47340:POST | POST |  | https://live.bilibili.com | Url:map/body/dynamic, FieldMap:map/body/dynamic |
| classes20.dex:47341:POST | POST |  | https://live.bilibili.com | Url:map/body/dynamic, Body:map/body/dynamic |
| classes20.dex:58656:GET | GET | /xlive/quiz-main/v1/quiz/GetPicShare | https://quiz.bilibili.com | Query:uid |
| classes20.dex:64923:POST | POST | /x/vu/app/cover/up | https://member.bilibili.com | Query:access_key, Part:map/body/dynamic |
| classes21.dex:1008:POST | POST | /xlive/app-ucenter/v1/like_info_v3/like/likeReportV3 | https://api.live.bilibili.com | Field:room_id, Field:anchor_id, Field:uid, Field:click_time |
| classes21.dex:1279:GET | GET | /pgc/web/playlist/id | https://api.bilibili.com | Query:season_id, Query:query_type, Query:from_scene |
| classes21.dex:1280:GET | GET | /pgc/web/playlist/v2 | https://api.bilibili.com | Query:id, Query:from_scene |
| classes21.dex:15988:POST | POST | /x/v2/relation/esport/add | https://app.bilibili.com | Query:access_key, Query:match_id |
| classes21.dex:15989:POST | POST | /x/v2/relation/esport/cancel | https://app.bilibili.com | Query:access_key, Query:match_id |
| classes21.dex:15990:POST | POST | https://api.bilibili.com/pgc/app/follow/add | https://app.bilibili.com | Query:access_key, Query:season_id |
| classes21.dex:15991:GET | GET | /x/resource/static | https://app.bilibili.com | Query:ver |
| classes21.dex:15992:GET | GET | x/v2/search/square | https://app.bilibili.com | Query:access_key, Query:ad_extra, Query:from, Query:show, Query:limit, Query:event_id, Query:avid, Query:query, Query:user_act, Query:history_words |
| classes21.dex:15993:GET | GET | /x/v2/search/recommend | https://app.bilibili.com | Query:access_key, Query:from, Query:show, Query:event_id, Query:avid, Query:query, Query:user_act, Query:dislike, Query:history_words |
| classes21.dex:15994:GET | GET | x/v2/search/episodes | https://app.bilibili.com | Query:access_key, Query:season_id |
| classes21.dex:15995:GET | GET | x/v2/search/episodes_new | https://app.bilibili.com | Query:access_key, Query:season_id, Query:pn, Query:ps |
| classes21.dex:15996:POST | POST | https://api.bilibili.com/pgc/app/follow/del | https://app.bilibili.com | Query:access_key, Query:season_id |
| classes21.dex:20578:GET | GET | /x/article/categories | https://api.bilibili.com |  |
| classes21.dex:23631:GET | GET | /pugv/view/app/view_additional_info | https://api.bilibili.com | Query:season_id |
| classes21.dex:23751:GET | GET | /pugv/view/app/season/consult | https://api.bilibili.com | Query:csource, Query:from_spm_id, Query:season_id |
| classes21.dex:23865:GET | GET | /pugv/app/course/download | https://api.bilibili.com | Query:file_id, Query:season_id, Query:section_id, Query:episode_id |
| classes21.dex:23866:GET | GET | /pugv/view/app/live/jump | https://api.bilibili.com | Query:ep_id |
| classes21.dex:24250:GET | GET | /pugv/view/html5/credential/detail | https://api.bilibili.com | Query:season_id |
| classes21.dex:24251:POST | POST | /pugv/view/html5/credential/unlock | https://api.bilibili.com | Query:season_id |
| classes21.dex:24507:GET | GET | /pugv/view/app/activity/share | https://api.bilibili.com | Query:season_id |
| classes21.dex:25278:GET | GET | /pugv/pay/api/my/coupons/new/v2 | https://api.bilibili.com | Query:season_id |
| classes21.dex:25279:POST | POST | /pugv/pay/api/receive/coupon | https://api.bilibili.com | Field:batch_token, Field:csource, Field:season_id, Field:spmid, Field:from_spmid |
| classes21.dex:25369:GET | GET | /pugv/view/app/query/combine/season | https://api.bilibili.com | Query:season_id |
| classes21.dex:26533:POST | POST | /pugv/view/study/check/share | https://api.bilibili.com | Query:season_id, Query:study_time, Query:ep_id |
| classes21.dex:26534:POST | POST | /pugv/view/study/submit_ending | https://api.bilibili.com | Query:season_id, Query:study_time, Query:ep_id, Query:timestamp |
| classes21.dex:26898:GET | GET | /pugv/adclick/linkreport | https://api.bilibili.com | Query:trackid, Query:accountid, Query:campaignid, Query:unitid, Query:crid, Query:os, Query:idfa, Query:caid, Query:aaid, Query:androidid, Query:oaid, Query:ts, Query:shopid, Query:upmid, Query:uid, Query:seasonid, Query:seriesid, Query:upid, Query:pkg_id, Query:report_scene, Query:source_type, Query:model |
| classes21.dex:29073:POST | POST | /pgc/freya/room/create | http://api.bilibili.com | Field:season_id, Field:episode_id, Field:is_open, Field:vega_abtest, Field:from_type, Field:sex_type, Field:ext, Field:access_key |
| classes21.dex:29074:GET | GET | /pgc/freya/share/ogv/link | http://api.bilibili.com | Query:season_id, Query:episode_id, Query:season_type, Query:age_type, Query:version |
| classes21.dex:29568:POST | POST | /pgc/activity/action-report | https://api.bilibili.com | Query:activity_id, Query:action_type, Query:component_id, Query:season_id, Query:ep_id |
| classes21.dex:29569:POST | POST | /pgc/activity/deliver/task/complete | https://api.bilibili.com | Query:position, Query:task_id, Query:token, Query:timestamp, Query:task_sign |
| classes21.dex:29570:POST | POST | /pgc/activity/deliver/material/receive | https://api.bilibili.com | Query:season_id, Query:season_type, Query:ep_id, Query:activity_code, Query:spmid, Query:from_spmid, Query:ads_info, Query:from_scene |
| classes21.dex:29571:POST | POST | /pgc/activity/receiveAward | https://api.bilibili.com | Query:activity_id, Query:season_id, Query:ep_id, QueryMap:map/body/dynamic |
| classes21.dex:29572:POST | POST | /pgc/activity/report-in-one | https://api.bilibili.com | Query:win_id, Query:code, Query:action |
| classes21.dex:29573:POST | POST | /pgc/activity/deliver/material/receive-activity | https://api.bilibili.com | Query:season_id, Query:ep_id, QueryMap:map/body/dynamic |
| classes21.dex:30327:GET | GET | /pgc/season/character/seasons | http://api.bilibili.com | Query:character_id, Query:order_type, Query:pn, Query:ps |
| classes21.dex:30328:GET | GET | /pgc/season/character/get | http://api.bilibili.com | Query:id |
| classes21.dex:30839:POST | POST | /pgc/freya/chat/greeting | http://api.bilibili.com | FieldMap:map/body/dynamic |
| classes21.dex:30840:GET | GET | /pgc/freya/chat/room/ext | http://api.bilibili.com | Query:room_id, Query:oid |
| classes21.dex:30841:GET | GET | /pgc/freya/chat/user/info | http://api.bilibili.com | Query:chat_id, Query:mid |
| classes21.dex:33097:GET | GET | /pgc/view/v2/app/media | http://api.bilibili.com | Query:media_id |
| classes21.dex:33436:POST | POST | /pgc/view/activity/guide/bar/operation | https://api.bilibili.com | Query:season_id, Query:season_type, Query:reserve_id, Query:operation_flag |
| classes21.dex:33437:GET | GET | /pgc/view/activity/guide/bar/info | https://api.bilibili.com | Query:season_id, Query:season_type |
| classes21.dex:33958:GET | GET | /pgc/view/v2/app/eps | https://api.bilibili.com | Query:season_id |
| classes21.dex:34483:GET | GET | player/check | https://api.bilibili.com/pgc/ | Query:season_id, Query:ep_id, Query:access_key |
| classes21.dex:35132:GET | GET | /sponsor/api/point | https://bangumi.bilibili.com | Query:amount |
| classes21.dex:36115:GET | GET | /pgc/season/player/ogv/cards | https://api.bilibili.com | Query:ep_id, Query:scene_type |
| classes21.dex:36116:POST | POST | /pgc/season/player/click/card | https://api.bilibili.com | Field:unique_id, Field:ep_id, Field:is_selected, Field:season_id, Field:biz_type, Field:win_id |
| classes21.dex:36117:GET | GET | /pgc/season/player/frequency/control | https://api.bilibili.com | Query:season_id, Query:ep_id, Query:card_type, Query:biz_type, Query:win_id |
| classes21.dex:37195:POST | POST | x/v3/fav/statistics/count | https://api.bilibili.com | Field:rid, Field:r_type, Field:cnt_type, Field:sid, Field:stype |
| classes21.dex:37196:POST | POST | /x/v1/medialist/history | https://api.bilibili.com | Field:upper_mid, Field:oid, Field:desc, Field:dt, Field:biz_id, Field:type, Field:otype |
| classes21.dex:38999:POST | POST | x/v3/fav/folder/unfav | https://api.bilibili.com | Field:media_id, Field:from_spmid, Field:spmid, Field:action_id |
| classes21.dex:39000:POST | POST | x/v3/fav/folder/fav | https://api.bilibili.com | Field:media_id, Field:from_spmid, Field:spmid, Field:action_id, Header:x-bili-gaia-vtoken |
| classes21.dex:39001:POST | POST | x/v3/fav/thump/up | https://api.bilibili.com | Field:rid, Field:thumb_type, Field:type, Field:up_mid, Field:from_spmid, Field:spmid, Field:action_id, Header:x-bili-gaia-vtoken |
| classes21.dex:39886:GET | GET | x/v1/medialist/info | https://api.bilibili.com | Query:media_id, Query:type, Query:biz_id |
| classes21.dex:39887:GET | GET | x/v2/medialist/resource/list | https://api.bilibili.com | Query:type, Query:biz_id, Query:oid, Query:offset, Query:desc, Query:direction, Query:with_current, Query:from, Query:sort_field, Query:otype, Query:use_pn, Query:pn, Query:only_un_view, Query:asc, Query:ps, Query:preview |
| classes21.dex:41815:GET | GET | /x/v2/dm/qoe/show | https://api.bilibili.com | Query:access_key, Query:aid, Query:cid |
| classes21.dex:44680:GET | GET | /x/v2/view/upper/recmd | https://app.bilibili.com | QueryMap:map/body/dynamic |
| classes22.dex:647:GET | GET | /x/app/material/tts/list | https://member.bilibili.com | Query:access_key |
| classes22.dex:2080:GET | GET | /x/app/material/common/mwc/list | https://member.bilibili.com | Query:biz, Query:material_type, Query:apply_for |
| classes22.dex:2395:GET | GET | /x/creative-tool/v1/bigplus/GetVideoAIStatus | https://member.bilibili.com | Query:aid, Query:mid |
| classes22.dex:4380:GET | GET | /x/app/material/smart_template/bgm/pre | https://member.bilibili.com | Query:sids |
| classes22.dex:5358:GET | GET | /x/app/bgm/v3/fav | https://member.bilibili.com | Query:pn, Query:ps |
| classes22.dex:5359:GET | GET | /x/app/material/recommend/bgm/detail | https://member.bilibili.com | Query:sids |
| classes22.dex:42170:GET | GET | /x/app/archive/tab/bubble | https://member.bilibili.com | Query:exclusion |
| classes22.dex:43576:POST | POST | /x/vupre/app/archive/tag/topic/asr_upload | https://member.bilibili.com | Body:map/body/dynamic |
| classes22.dex:43632:POST | POST | /x/vupre/app/archive/types/predict | https://member.bilibili.com | Query:title, Query:filename, Query:upload_id |
| classes22.dex:43633:GET | GET | /x/vupre/app/archive/types/upload | https://member.bilibili.com | Query:zip_url, Query:filename, Query:track_id |
| classes22.dex:44184:POST | POST | x/creative-tool/sensitive-word/check | https://member.bilibili.com | Body:map/body/dynamic |
| classes22.dex:48073:GET | GET | /x/app/material/recommend/bgm/list | https://member.bilibili.com | Query:upload_id, Query:zip_url, Query:upfrom, Query:platform, Query:content_tags, Query:pn, Query:topn, Query:track_id |
| classes22.dex:48074:GET | GET | /x/app/material/recommend/bgm/polling | https://member.bilibili.com | Query:upload_id, Query:zip_url, Query:upfrom, Query:platform, Query:content_tags, Query:track_id |
| classes22.dex:48566:GET | GET | /x/mvp/material/views/v3 | https://member.bilibili.com | Query:ids, Query:apply_for, Query:type, Query:access_key, Query:sdk_type, Query:montage_version, Query:aurora_version |
| classes22.dex:49572:GET | GET | /xlive/app-blink/v1/reportIndex/EventList | https://api.live.bilibili.com |  |
| classes22.dex:49573:POST | POST | /xlive/app-blink/v1/reportIndex/EventAction | https://api.live.bilibili.com | Field:event |
| classes22.dex:58892:GET | GET | /x/app/v1/user/profiles | https://member.bilibili.com |  |
| classes22.dex:58893:GET | GET | /x/vupre/app/archive/pre/v2 | https://member.bilibili.com | Query:access_key |
| classes22.dex:60241:GET | GET | /x/material/bcut/views | https://member.bilibili.com | Query:ids, Query:apply_for, Query:type, Query:access_key, Query:sdk_type, Query:montage_version, Query:aurora_version |
| classes22.dex:60243:GET | GET | /x/material/bgm/view | https://member.bilibili.com | Query:access_key, QueryMap:map/body/dynamic |
| classes22.dex:60244:GET | GET | /x/material/bgm/play | https://member.bilibili.com | Query:access_key, QueryMap:map/body/dynamic |
| classes22.dex:63718:GET | GET | /x/creative-tool/common/abtest | https://member.bilibili.com | Query:ab_variables, Query:mid, Query:ab_extra |
| classes22.dex:63719:GET | GET | /x/app/archive/content/strategies | https://member.bilibili.com | Query:mid |
| classes22.dex:63720:GET | GET | /x/app/archive/resource/content/strategies | https://member.bilibili.com | Query:mid |
| classes22.dex:63721:POST | POST |  | https://api.live.bilibili.com | Url:map/body/dynamic |
| classes22.dex:64554:GET | GET | x/creative-tool/ai-title/style | https://member.bilibili.com | Query:tag, Query:prompt_type |
| classes23.dex:12869:GET | GET | /x/v2/view/dots | https://app.bilibili.com | Query:aid |
| classes23.dex:14155:GET | GET | /x/share/isFirstShare | https://api.bilibili.com | Query:need_complete |
| classes23.dex:19900:POST | POST | /x/vip/ads/material/report | https://api.bilibili.com | Body:map/body/dynamic |
| classes30.dex:3403:GET | GET | /x/feed/dislike | https://app.bilibili.com | QueryMap:map/body/dynamic |
| classes30.dex:3404:GET | GET | /x/v2/feed/nf | https://app.bilibili.com | Query:goto, Query:id, Query:title, Query:from, Query:up_name, Query:dislike_info, Query:is_second_panel |
| classes30.dex:3405:GET | GET | /x/feed/dislike/cancel | https://app.bilibili.com | QueryMap:map/body/dynamic |
| classes30.dex:4259:POST | POST | /x/tag/archive/report | https://api.bilibili.com | Field:access_key, Field:aid, Field:tag_id, Field:reason |
| classes30.dex:4916:GET | GET | /x/v2/dm/command/panel | https://api.bilibili.com | Query:access_key, Query:aid, Query:oid |
| classes30.dex:7104:POST | POST | /x/safecenter/net_code/face/verify | https://passport.bilibili.com | Query:appKey, Query:tmp_code, Query:biz_seq, Query:cert_pwd_data, Query:photo_data, Query:idcard_auth_data, Query:local_id, Query:device_platform, Query:device_name, Query:device_id, Query:buvid |
| classes30.dex:21103:GET | GET | /x/resource/deeplink/huawei | https://app.bilibili.com | Query:oaid, Query:bundle |
| classes30.dex:21111:GET | GET | /x/resource/deeplink/ai | https://app.bilibili.com | Query:origin_link, Query:first_launch_timestamp |
| classes30.dex:21228:GET | GET | /x/share/url2info | https://api.bilibili.com | Query:url, Query:device |
| classes30.dex:21506:GET | GET | /x/push/broadcast/config | https://api.bilibili.com |  |
| classes30.dex:21507:GET | GET | /x/push/broadcast/display | https://api.bilibili.com | Query:scene, Query:msgs |
| classes30.dex:25901:GET | GET | /x/answer/v4/guide | https://api.bilibili.com | Query:access_key, Query:business, Query:spmid, Query:oid, Query:sid |
| classes30.dex:30473:GET | GET | /x/v2/anti_addiction/aggregation/status | https://app.bilibili.com |  |
| classes30.dex:30474:GET | GET | /x/v2/anti_addiction/rule | https://app.bilibili.com |  |
| classes30.dex:30475:POST | POST | /x/v2/anti_addiction/sleep_remind/set | https://app.bilibili.com | Query:switch, Query:stime, Query:etime |
| classes30.dex:30556:POST | POST | /x/member/realname/alipay/apply | https://api.bilibili.com | Query:access_key, Field:real_name, Field:card_num, Field:capture, Field:img_token |
| classes30.dex:30557:POST | POST | /x/member/realname/tel/capture | https://api.bilibili.com | Query:access_key |
| classes30.dex:30558:GET | GET | /x/member/realname/change/check | https://api.bilibili.com | Query:last_digits |
| classes30.dex:30559:GET | GET | /x/member/realname/change/gray | https://api.bilibili.com |  |
| classes30.dex:30560:GET | GET | /x/member/realname/change/condition | https://api.bilibili.com | Query:action |
| classes30.dex:30561:GET | GET | /x/member/realname/alipay/confirm | https://api.bilibili.com | Query:access_key |
| classes30.dex:30562:GET | GET | /x/member/realname/captcha/confirm | https://api.bilibili.com | Query:access_key, Query:remote, QueryMap:map/body/dynamic |
| classes30.dex:30563:GET | GET | /x/member/realname/captcha/confirm | https://api.bilibili.com | Query:access_key, Query:remote |
| classes30.dex:30564:GET | GET | x/member/web/content/check | https://api.bilibili.com | Query:content, Query:scene |
| classes30.dex:30565:GET | GET | /x/member/realname/apply/status | https://api.bilibili.com | Query:access_key, Query:tmp_code |
| classes30.dex:30566:GET | GET | /x/member/realname/channel | https://api.bilibili.com | Query:access_key |
| classes30.dex:30567:GET | GET | /x/member/faceid/realname/conf | https://api.bilibili.com | Query:tmp_code |
| classes30.dex:30568:GET | GET | /x/member/realname/v2/card/types | https://api.bilibili.com | Query:scene, Query:tmp_code |
| classes30.dex:30569:GET | GET | /x/member/realname/change/reasons | https://api.bilibili.com |  |
| classes30.dex:30570:GET | GET | /x/member/realname/captcha | https://api.bilibili.com | Query:access_key |
| classes30.dex:30571:GET | GET | /x/member/faceid/realname/override/summary | https://api.bilibili.com | Query:request_id, Query:override_mid |
| classes30.dex:30572:GET | GET | /x/member/realname/tel/info | https://api.bilibili.com | Query:access_key |
| classes30.dex:30573:POST | POST | /x/member/faceid/realname/override | https://api.bilibili.com | Query:request_id, Query:override_mid |
| classes30.dex:30574:POST | POST | http://api.bilibili.com/x/member/realname/upload | https://api.bilibili.com | Query:access_key, Part:img |
| classes30.dex:31306:GET | GET | /x/resource/widget/android | https://app.bilibili.com | Query:style |
| classes30.dex:31364:GET | GET | /x/v2/show/widget/up | https://app.bilibili.com |  |
| classes30.dex:31440:GET | GET | /x/operational_activity/cny/task_process/notify | https://api.bilibili.com | Query:is_widget |
| classes30.dex:31645:POST | POST | /x/account-oauth2/v1/authorize | https://api.bilibili.com | Query:client_id, Query:scopes, Query:package, Query:signature, Query:session_id |
| classes30.dex:31646:GET | GET | /x/account-oauth2/v1/scope | https://api.bilibili.com | Query:client_id, Query:session_id |
| classes30.dex:32464:GET | GET | /x/v2/region/index | https://app.bilibili.com | Query:ver |
| classes30.dex:34745:GET | GET | /x/passport-login/country | https://passport.bilibili.com |  |
| classes30.dex:40167:POST | POST | /x/push/event/report | https://api.bilibili.com | Query:event |
| classes30.dex:40168:POST | POST | /x/push/popup/report | https://api.bilibili.com | Query:entrance, Query:system, Query:system_popup |
| classes30.dex:40169:GET | GET | /x/push/popup/setting | https://api.bilibili.com | Query:entrance, Query:system, Query:spmid, Query:system_popup, Query:device_brand, Query:os_version |
| classes30.dex:40170:POST | POST | /x/push/setting/set | https://api.bilibili.com | Query:access_key, Query:type, Query:value |
| classes30.dex:40171:POST | POST | /x/push/settings/set | https://api.bilibili.com | Query:replace_types, Query:value |
| classes30.dex:40775:GET | GET | /x/v2/feed/coldstart | https://app.bilibili.com |  |
| classes30.dex:40803:GET | GET | /x/safecenter/key | https://api.bilibili.com |  |
| classes30.dex:40804:POST | POST | /x/safecenter/pwd/supplement | https://api.bilibili.com | Field:access_key, Field:pwd |
| classes30.dex:41384:POST | POST | /x/activity/reserve | https://api.bilibili.com | Field:access_key, Field:sid, Field:csrf |
| classes30.dex:43561:GET | GET | /x/v2/splash/show | https://app.bilibili.com | Query:access_key, Query:width, Query:height, Query:ad_extra, Query:network, Query:topview_ids |
| classes30.dex:43562:GET | GET | /x/v2/splash/list | https://app.bilibili.com | Query:loaded_creative_list, Query:client_keep_ids, Query:open_event |
| classes30.dex:45411:GET | GET | x/share/clipboardRules | https://api.bilibili.com |  |
| classes30.dex:45412:GET | GET | x/share/clipboardMeta | https://api.bilibili.com | Query:access_key, Query:start_pattern, Query:business, Query:data, Query:first_launch_timestamp |
| classes30.dex:45615:POST | POST | pugv/app/favorite/del | https://api.bilibili.com | Query:access_key, Query:season_id |
| classes30.dex:45616:GET | GET | pugv/app/favorite/page | https://api.bilibili.com | Query:access_key, Query:pn, Query:ps |
| classes30.dex:45787:POST | POST | /x/v3/fav/folder/add_top | https://api.bilibili.com | Field:fid, Field:add_top |
| classes30.dex:45788:POST | POST | /x/v3/fav/tab/clean_invalid | https://api.bilibili.com | Field:fid |
| classes30.dex:45789:POST | POST | /x/v3/fav/tab/red_dot/clean | https://api.bilibili.com | Field:tab_id |
| classes30.dex:45790:POST | POST | /x/v3/fav/tab/dels | https://api.bilibili.com | Field:resources, Field:media_id |
| classes30.dex:45791:GET | GET | /x/v3/fav/tab/my_fav | https://api.bilibili.com | Query:cover_more |
| classes30.dex:45792:GET | GET | /x/v3/fav/tab/fav | https://api.bilibili.com | Query:start_oid, Query:start_otype, Query:tab_id, Query:start_score, Query:page_type |
| classes30.dex:45793:GET | GET | /x/v3/fav/tab | https://api.bilibili.com | Query:tab_id |
| classes30.dex:45794:GET | GET | /x/v3/fav/folder/resources | https://api.bilibili.com | Query:media_id, Query:pn |
| classes30.dex:45795:GET | GET | /x/v3/fav/tab/fol | https://api.bilibili.com | Query:tab_id, Query:start_oid, Query:start_otype, Query:start_score, Query:page_type |
| classes30.dex:45796:POST | POST | /x/v3/fav/tab/report | https://api.bilibili.com | Field:tab_id, Field:resources, Field:action |
| classes30.dex:47442:POST | POST | /x/garb/comment/bg/edit | http://api.bilibili.com | Field:mid, Field:card_type_id, Field:card_id, Field:act_id |
| classes30.dex:47443:GET | GET | /x/garb/digital/card/detail | http://api.bilibili.com | Query:mid, Query:vmid, Query:card_id, Query:use_scene |
| classes30.dex:47444:POST | POST | /x/vas/dlc_act/lottery/draw_item | http://api.bilibili.com | Field:act_id, Field:mid, Field:lottery_id, Field:lottery_num, Field:biz_info |
| classes30.dex:47445:GET | GET | /x/vas/nftcard/isallowtransfer | http://api.bilibili.com | Query:act_id, Query:card_id |
| classes30.dex:47446:GET | GET | /x/vas/nftcard/carddetail | http://api.bilibili.com | Query:act_id, Query:card_type_id |
| classes30.dex:47447:GET | GET | /x/vas/dlc_act/act/card/detail | http://api.bilibili.com | Query:act_id, Query:card_type_id |
| classes30.dex:47448:GET | GET | /x/vas/nftcard/drawcard | http://api.bilibili.com | Query:act_id, Query:mid, Query:round_index |
| classes30.dex:47822:GET | GET | x/resource/show/skin | https://app.bilibili.com | Query:access_key, Query:is_free_theme |
| classes30.dex:47823:POST | POST | https://api.bilibili.com/x/garb/v1/user/equip/unload | https://app.bilibili.com | Field:access_key, Field:part |
| classes30.dex:48013:GET | GET | /x/vas/dlc_act/card/splash_info | https://api.bilibili.com | Query:act_id, Query:card_type_id, Query:screen_width, Query:screen_height |
| classes30.dex:48014:POST | POST | /x/vas/smelt/my_decompose/lock | https://api.bilibili.com | Body:map/body/dynamic |
| classes30.dex:48926:GET | GET | /x/resource/top/activity | https://app.bilibili.com |  |
| classes30.dex:49189:GET | GET | /x/resource/pop/up | https://app.bilibili.com |  |
| classes30.dex:49214:POST | POST | https://api.bilibili.com/x/fission/check/watchword | https://app.bilibili.com | Field:clipboard |
| classes30.dex:49215:GET | GET | https://api.bilibili.com/x/share/clipboard | https://app.bilibili.com | Query:word |
| classes30.dex:50339:GET | GET | /x/v2/family/teen_guard | https://app.bilibili.com |  |
| classes30.dex:50340:GET | GET | /x/v2/account/mine | https://app.bilibili.com | Query:access_key, Query:bili_link_new, Query:from, Query:creative_info |
| classes30.dex:50341:GET | GET | /x/v2/family/identity | https://app.bilibili.com |  |
| classes30.dex:50342:GET | GET | /x/v2/account/mine | https://app.bilibili.com | Query:access_key, Query:bili_link_new, Query:from, Query:creative_info |
| classes30.dex:51524:POST | POST | /x/vip/ads/material/report | https://api.bilibili.com | Body:map/body/dynamic |
| classes30.dex:53256:GET | GET | /x/resource/show/tab/bubble | https://app.bilibili.com | Query:access_key |
| classes30.dex:53257:GET | GET | /x/resource/show/tab/v2 | https://app.bilibili.com | Query:access_key, Query:ver, Query:interest_result |
| classes30.dex:53258:POST | POST | /x/resource/show/click | https://app.bilibili.com | Field:id, Field:ver, Field:type |
| classes30.dex:53407:GET | GET | /x/resource/ip | https://app.bilibili.com |  |
| classes30.dex:54110:POST | POST | /pgc/player/api/v2/cache/play | https://api.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes30.dex:54111:GET | GET | /x/playurl/download/num | https://app.bilibili.com | Query:access_key, Query:num |
| classes30.dex:54219:GET | GET | x/pandora/popup | https://api.bilibili.com | Query:access_key, Query:business, Query:spmid |
| classes30.dex:54430:GET | GET | /x/member/app/birthday/changed | https://api.bilibili.com |  |
| classes30.dex:54431:GET | GET | /x/member/app/nickfree | https://api.bilibili.com | Query:access_key |
| classes30.dex:54432:GET | GET | /x/member/app/point/flag | https://api.bilibili.com | Query:access_key |
| classes30.dex:54433:POST | POST | /x/member/app/birthday/update | https://api.bilibili.com | Query:access_key, Field:birthday |
| classes30.dex:54434:POST | POST | /x/member/app/sex/update | https://api.bilibili.com | Query:access_key, Field:sex |
| classes30.dex:54435:POST | POST | /x/member/app/sign/update | https://api.bilibili.com | Query:access_key, Field:user_sign |
| classes30.dex:54436:POST | POST | /x/member/app/uname/update | https://api.bilibili.com | Query:access_key, Field:uname |
| classes30.dex:54437:GET | GET | /x/member/app/school | https://api.bilibili.com |  |
| classes30.dex:55248:GET | GET | /x/v2/splash/brand/list | https://app.bilibili.com | Query:access_key, Query:mobi_app, Query:build, Query:device, Query:network, Query:screen_width, Query:screen_height, Query:selected |
| classes30.dex:55249:GET | GET | /x/v2/splash/brand/config/page | https://app.bilibili.com | Query:access_key, Query:mobi_app, Query:build, Query:device, Query:network, Query:screen_width, Query:screen_height, Query:source, Query:last_splash_biz_id, Query:group_no, Query:splash_type, Query:keyword |
| classes30.dex:55250:GET | GET | /x/v2/splash/brand/config | https://app.bilibili.com | Query:access_key, Query:mobi_app, Query:build, Query:device, Query:network, Query:screen_width, Query:screen_height |
| classes30.dex:55251:POST | POST | /x/v2/splash/brand/save | https://app.bilibili.com | Field:access_key, Field:network, Field:id, Field:vip_splash_id, Field:dlc_splash_id, Field:device |
| classes30.dex:56123:GET | GET | /x/v2/splash/event/list2 | https://app.bilibili.com | Query:device, Query:network, Query:screen_width, Query:screen_height |
| classes30.dex:56178:GET | GET | /x/tag/subscribe/tags | https://api.bilibili.com | QueryMap:map/body/dynamic, Query:access_key |
| classes30.dex:56230:POST | POST | /api/add.skin.order.do | https://club.bilibili.com | Query:access_key, Field:id |
| classes30.dex:56231:POST | POST | /api/cancel.skin.order.do | https://club.bilibili.com | Query:access_key, Field:id |
| classes30.dex:56232:GET | GET | /api/query.skin.list.do | https://club.bilibili.com | Query:access_key |
| classes30.dex:56335:POST | POST | /x/v2/fav/topic/add | https://api.bilibili.com | Query:access_key, Query:tpid |
| classes30.dex:56336:GET | GET | /event/getlist | https://api.bilibili.com | Query:access_key, Query:page, Query:pageSize |
| classes30.dex:56337:GET | GET | /topic/getlist | https://api.bilibili.com | Query:access_key, Query:page, Query:pageSize |
| classes30.dex:56338:GET | GET | /x/v2/fav/topic/favoured | https://api.bilibili.com | Query:access_key, Query:tpid |
| classes30.dex:56339:POST | POST | /x/v2/fav/topic/del | https://api.bilibili.com | Query:access_key, Query:tpid |
| classes30.dex:56439:GET | GET | /x/v2/display/zone | https://app.bilibili.com | Query:access_key |
| classes30.dex:56598:POST | POST | /x/v2/history/report | https://api.bilibili.com | Field:access_key, Field:cid, Field:aid, Field:sid, Field:epid, Field:source, Field:duration, Field:progress, Field:type, Field:sub_type, Field:realtime, Field:device_ts, Field:start_ts |
| classes30.dex:56628:POST | POST | /x/v2/history/toview/add | https://api.bilibili.com | Field:aid, Field:from, Field:spmid, Field:toview_version |
| classes30.dex:56629:POST | POST | /x/v3/fav/toview/adds | https://api.bilibili.com | Field:resources, Field:toview_version, Field:spmid |
| classes30.dex:56630:POST | POST | /x/v2/history/toview/clear | https://api.bilibili.com | Field:clean_type |
| classes30.dex:56631:POST | POST | /x/v2/history/toview/v2/dels | https://api.bilibili.com | Field:resources |
| classes30.dex:56632:GET | GET | /x/v2/history/toview/v2/list | https://api.bilibili.com | Query:start_key, Query:asc, Query:sort_field, Query:split_key |
| classes30.dex:57646:POST | POST | /x/v2/history/toview/add | https://api.bilibili.com | Field:access_key, Field:aid, Field:from |
| classes30.dex:57647:POST | POST | /x/v2/history/toview/del | https://api.bilibili.com | Field:access_key, Field:aid, Field:viewed |
| classes30.dex:57648:GET | GET | /x/v2/history/toview | https://api.bilibili.com | Query:access_key |
| classes30.dex:59363:POST | POST | /x/report/click/android2 | https://api.bilibili.com | Body:map/body/dynamic |
| classes30.dex:59364:POST | POST | /x/report/heartbeat/mobile | https://api.bilibili.com | FieldMap:map/body/dynamic |
| classes30.dex:63179:POST | POST | /x/v2/dm/command/del | https://api.bilibili.com | Query:access_key, Query:aid, Query:oid, Query:plat, Query:dmid |
| classes30.dex:63180:POST | POST | /x/v2/dm/exposure/report | https://api.bilibili.com | Query:from, Query:mid, Query:aid, Query:cid |
| classes30.dex:63181:POST | POST | /x/v2/dm/recall | https://api.bilibili.com | Field:access_key, Field:cid, Field:dmid, Field:type |
| classes30.dex:63182:POST | POST | /x/v2/dm/subtitle/report/v2/add | https://api.bilibili.com | Field:cid, Field:aid, Field:subtitle_type, Field:subtitle_id, Field:tag_id, Field:reason, Field:content, Field:description, Field:row_id, Field:from, Field:to |
| classes30.dex:63183:POST | POST | /x/v2/dm/command/post | https://api.bilibili.com | Query:access_key, Query:aid, Query:cid, Query:plat, Query:progress, Query:type, Query:data, Query:auto_create, Query:count_down |
| classes30.dex:63184:POST | POST | /x/v2/dm/post2 | https://api.bilibili.com | Field:access_key, Field:scene, Field:spmid, Field:from_spmid, Field:post_type, Field:text, Field:cmd |
| classes30.dex:63926:POST | POST | /x/dm/filter/user/add | https://api.bilibili.com | Field:access_key, Field:type, Field:filter |
| classes30.dex:63927:GET | GET | /x/dm/up/banned/users | https://api.bilibili.com | Query:access_key, Query:aid |
| classes30.dex:63928:POST | POST | x/dm/report/cmd/add | https://api.bilibili.com | Field:access_key, Field:cid, Field:spmid, Field:from_spmid, Field:dmid, Field:reason |
| classes30.dex:63929:POST | POST | /x/dm/filter/user/del | https://api.bilibili.com | Field:access_key, Field:ids |
| classes30.dex:63930:GET | GET | /x/dm/filter/user | https://api.bilibili.com | Query:access_key |
| classes30.dex:63931:POST | POST | /x/dm/report/add | https://api.bilibili.com | Field:access_key, Field:cid, Field:spmid, Field:from_spmid, Field:dmid, Field:reason, Field:block, Field:action_id |
| classes30.dex:63932:POST | POST | /x/v2/dm/filter/up/black | https://api.bilibili.com | Field:type, Field:oid, Field:dmid |
| classes30.dex:63933:POST | POST | x/dm/assist/del | https://api.bilibili.com | Field:access_key, Field:cid, Field:dmids |
| classes30.dex:64502:POST | POST | /x/v2/dm/post | https://api.bilibili.com | Query:access_key, Query:aid, Query:oid, Query:spmid, Query:from_spmid, FieldMap:map/body/dynamic |
| classes30.dex:64503:POST | POST | /x/v2/dm/post2 | https://api.bilibili.com | Field:access_key, Field:scene, Field:spmid, Field:from_spmid, Field:post_type, Field:text, Field:cmd, FieldMap:map/body/dynamic |
| classes30.dex:64504:POST | POST | /x/v2/dm/subject/state/update | https://api.bilibili.com | Field:access_key, Field:type, Field:aid, Field:state |
| classes30.dex:64753:GET | GET | /x/resource/deeplink/button | https://app.bilibili.com | Query:schema |
| classes30.dex:65029:GET | GET | /x/v2/favorite/topic | https://app.bilibili.com | Query:access_key, Query:pn, Query:ps |
| classes30.dex:65030:GET | GET | /x/v2/favorite/second/tab | https://app.bilibili.com | Query:access_key, Query:tab |
| classes33.dex:1395:GET | GET | /xlive/lottery-interface/v1/Anchor/Info | https://api.live.bilibili.com | Query:roomid |
| classes33.dex:6677:GET | GET | https://api.live.bilibili.com/xlive/app-blink/v1/index/getAnchorUsedClick | http://api.bilibili.com |  |
| classes33.dex:6678:GET | GET | https://api.live.bilibili.com/xlive/app-blink/v1/index/getSpreadSwitch | http://api.bilibili.com |  |
| classes33.dex:7600:POST | POST | /xlive/app-blink/v2/universalInteract/AddMatchInvite | https://api.live.bilibili.com | Field:match_type, Field:content |
| classes33.dex:7601:POST | POST | /xlive/general-interface/v1/battle/cancel | https://api.live.bilibili.com | Field:room_id, Field:biz_type, Field:connection_type |
| classes33.dex:7602:POST | POST | /xlive/app-blink/v2/universalInteract/Connect | https://api.live.bilibili.com | Field:peer_uid, Field:business_label, Field:cancel_current, Field:invited_type, Field:invited_type_label, Header:X-Event-TraceID |
| classes33.dex:7603:GET | GET | /xlive/app-blink/v1/stickers/getAnchorDynamicStickers | https://api.live.bilibili.com | Query:room_id, Query:uid |
| classes33.dex:7604:GET | GET | /xlive/revenue/v1/giftStream/getAnchorStatistics | https://api.live.bilibili.com | Query:req_type |
| classes33.dex:7605:POST | POST | /xlive/app-ucenter/v1/labs/AppointConfig | https://api.live.bilibili.com | Field:keys |
| classes33.dex:7606:GET | GET | /xlive/app-blink/v2/universalInteract/BatchRecommendList | https://api.live.bilibili.com | Query:label_map |
| classes33.dex:7607:GET | GET | http://api.bilibili.com/x/member/realname/v2/card/types | https://api.live.bilibili.com | Query:scene |
| classes33.dex:7608:GET | GET | /xlive/app-blink/v1/universalInteract/InConnPanel | https://api.live.bilibili.com |  |
| classes33.dex:7609:GET | GET | /xlive/app-blink/v2/anchorCustomize/GetCustomizedButtonInfo | https://api.live.bilibili.com | Query:room_id |
| classes33.dex:7610:GET | GET | /xlive/app-ucenter/v2/xbanned/banned/GetDmSendConfig | https://api.live.bilibili.com | Query:room_id |
| classes33.dex:7611:GET | GET | /xlive/app-blink/v1/stickers/getDynamicStickers | https://api.live.bilibili.com | Query:room_id, Query:uid |
| classes33.dex:7612:GET | GET | /xlive/app-blink/v1/index/GetEncryptRoomInfo | https://api.live.bilibili.com | Query:source |
| classes33.dex:7613:GET | GET | /xlive/app-blink/v1/index/GetEncryptRoomPassword | https://api.live.bilibili.com |  |
| classes33.dex:7614:GET | GET | /xlive/app-blink/v1/upStreamConfig/GetKeyFrameIntervalConfig | https://api.live.bilibili.com | Query:sub_area_id |
| classes33.dex:7615:GET | GET | /xlive/app-blink/v2/universalInteract/Config | https://api.live.bilibili.com |  |
| classes33.dex:7616:GET | GET | /xlive/mcn-interface/v1/prompter/GetMyPrompterPermission | https://api.live.bilibili.com |  |
| classes33.dex:7617:GET | GET | /xlive/general-interface/v2/pk/groupInfo | https://api.live.bilibili.com | Query:biz_session_id |
| classes33.dex:7618:GET | GET | /xlive/app-blink/v1/preLive/PreLiveBizCheck | https://api.live.bilibili.com |  |
| classes33.dex:7619:GET | GET | https://api.bilibili.com/x/relation | https://api.live.bilibili.com | Query:fid |
| classes33.dex:7620:GET | GET | /xlive/app-blink/v2/universalInteract/HistoryList | https://api.live.bilibili.com |  |
| classes33.dex:7621:GET | GET | /xlive/app-blink/v2/universalInteract/InteractList | https://api.live.bilibili.com |  |
| classes33.dex:7622:GET | GET | /xlive/app-blink/v2/universalInteract/Search | https://api.live.bilibili.com | Query:search, Query:page |
| classes33.dex:7623:POST | POST | /xlive/app-blink/v1/universalInteract/Handle | https://api.live.bilibili.com | Field:peer_uid, Field:biz_session_id, Field:action, Field:action_type, Header:X-Event-TraceID, Field:source |
| classes33.dex:7624:POST | POST | /xlive/app-blink/v1/stickers/postDynamicStickerText | https://api.live.bilibili.com | Field:room_id, Field:sticker_id, Field:text, Field:uid, Field:status, Field:screen_orientation |
| classes33.dex:7625:POST | POST | https://api.bilibili.com/x/share/quickWord | https://api.live.bilibili.com | Field:share_id, Field:oid, Field:buvid, Field:platform, Field:share_channel, Field:share_origin |
| classes33.dex:7626:POST | POST | /xlive/devicelog/v1/upload | https://api.live.bilibili.com | Field:app_id, Field:buvid, Field:os_version, Field:network_type, Field:uid, Field:mobile_logs |
| classes33.dex:7627:POST | POST | /xlive/app-blink/v1/preLive/ReportFaceRecognition | https://api.live.bilibili.com | Field:live_mode, Field:room_id, Field:face_auth_code, Field:face_auth_message, Field:scene, Field:area_v2_id |
| classes33.dex:7628:POST | POST | /xlive/app-blink/v2/universalInteract/ResetScore | https://api.live.bilibili.com |  |
| classes33.dex:7629:POST | POST | /xlive/app-blink/v2/anchorCustomize/SetCustomizedButton | https://api.live.bilibili.com | Field:room_id, Field:biz_id, Field:op_source |
| classes33.dex:7630:POST | POST | /xlive/app-ucenter/v2/xbanned/banned/SetDmSendConfig | https://api.live.bilibili.com | Field:room_id, Field:allow_send_dm, Field:dm_send_type, Field:dm_send_threshold, Field:operator_uid |
| classes33.dex:7631:POST | POST | /xlive/app-blink/v1/index/SetEncrypt | https://api.live.bilibili.com |  |
| classes33.dex:7632:POST | POST | /xlive/app-blink/v1/index/SetEncryptRoomInfo | https://api.live.bilibili.com | Field:password, Field:expire_time, Query:source |
| classes33.dex:7633:POST | POST | /xlive/mcn-interface/v1/prompter/SetPrompterPermission | https://api.live.bilibili.com | Field:enabled |
| classes33.dex:7634:POST | POST | /xlive/pk-interface/v1/battle/join | https://api.live.bilibili.com | Field:room_id, Field:biz_type, Field:connection_type |
| classes33.dex:7635:POST | POST | /xlive/app-blink/v2/universalInteract/SwitchSpotlight | https://api.live.bilibili.com | Field:biz_session_id, Field:switch_mode, Field:spotlight_uid |
| classes33.dex:7636:POST | POST | /xlive/app-blink/v1/stickers/updateAnchorDynamicStickers | https://api.live.bilibili.com | Field:room_id, Field:uid, Field:screen_orientation, Field:dynamic_stickers |
| classes33.dex:7637:POST | POST | /xlive/app-ucenter/v1/labs/EditPlugs | https://api.live.bilibili.com | Field:key, Field:status |
| classes33.dex:7638:POST | POST | /xlive/app-blink/v2/universalInteract/ConfigModify | https://api.live.bilibili.com | FieldMap:map/body/dynamic |
| classes33.dex:7639:POST | POST | /xlive/general-interface/v2/pk/groupUpdate | https://api.live.bilibili.com | Field:uid, Field:group_id |
| classes33.dex:7640:POST | POST | /xlive/app-blink/v1/index/VerifyEncryptRoomPassword | https://api.live.bilibili.com | Field:password |
| classes33.dex:7641:GET | GET | /xlive/app-blink/v1/newEntrance/getLiveIconInfos | https://api.live.bilibili.com | Query:room_id, Query:platform, Query:build, Query:device, Query:live_model, Query:mobiApp |
| classes33.dex:7642:POST | POST | /xlive/app-blink/v1/preLive/AcceptReach | https://api.live.bilibili.com | Query:reach_type |
| classes33.dex:7643:GET | GET | /xlive/app-blink/v1/voiceConn/rejectVoiceConn | https://api.live.bilibili.com | Query:type, Query:uid, Query:category, Query:room_id, Header:X-Event-TraceID |
| classes33.dex:7644:POST | POST | /xlive/app-blink/v1/liveTagService/AddLiveTag | https://api.live.bilibili.com | Query:tag_content |
| classes33.dex:7645:POST | POST | /xlive/app-ucenter/v1/roomAdmin/appoint | https://api.live.bilibili.com | Field:uid, Field:admin_level |
| classes33.dex:7646:POST | POST | /xlive/app-ucenter/v1/banned/AddSilentUser | https://api.live.bilibili.com | Field:room_id, Field:tuid, Field:msg, Field:msg_time, Field:hour, Field:type |
| classes33.dex:7647:POST | POST | /xlive/app-ucenter/v2/xbanned/banned/AddBlack | https://api.live.bilibili.com | Field:tuid, Field:anchor_id, Field:spmid |
| classes33.dex:7648:GET | GET | /xlive/app-blink/v1/voiceConn/searchUser | https://api.live.bilibili.com | Query:uid |
| classes33.dex:7649:POST | POST | /xlive/app-blink/v1/topic/BindLiveTopic | https://api.live.bilibili.com | FieldMap:map/body/dynamic |
| classes33.dex:7650:GET | GET | /xlive/open-interface/v1/boss_upload_resource | https://api.live.bilibili.com | Query:dir |
| classes33.dex:7651:GET | GET | /live_stream/v1/UpStreamExt/pause_by_room | https://api.live.bilibili.com | Query:room_id |
| classes33.dex:7652:GET | GET | /xlive/app-blink/v1/index/checkCanVirtual | https://api.live.bilibili.com |  |
| classes33.dex:7653:GET | GET |  | https://api.live.bilibili.com | Url:map/body/dynamic, Query:content, Query:scene |
| classes33.dex:7654:GET | GET | /xlive/app-blink/v1/index/CanAnchorEncryptRoom | https://api.live.bilibili.com |  |
| classes33.dex:7655:GET | GET | /xlive/app-blink/v1/index/appointmentBeforeLiveCheck | https://api.live.bilibili.com |  |
| classes33.dex:7656:POST | POST | /xlive/app-blink/v1/stickers/postStickerText | https://api.live.bilibili.com | Field:sticker_id, Field:text |
| classes33.dex:7657:POST | POST | /xlive/app-blink/v1/report/BlinkClientStatusReport | https://api.live.bilibili.com | Field:change_attr, Field:beauty |
| classes33.dex:7658:GET | GET | /xlive/app-blink/v1/index/ConvertVideoBackgroundUrl | https://api.live.bilibili.com | Query:boss_video_url |
| classes33.dex:7659:POST | POST | /xlive/app-blink/v1/preLive/CreateRoom | https://api.live.bilibili.com | Field:liveMode, Field:needCheck, Field:scene |
| classes33.dex:7660:POST | POST | /xlive/app-ucenter/v1/banned/DelSilentUser | https://api.live.bilibili.com | Field:room_id, Field:tuid |
| classes33.dex:7661:POST | POST | /xlive/app-blink/v1/liveTagService/DeleteLiveTag | https://api.live.bilibili.com | Query:tag_id |
| classes33.dex:7662:GET | GET | /xlive/app-blink/v1/activity/GetActivityV2 | https://api.live.bilibili.com | QueryMap:map/body/dynamic |
| classes33.dex:7663:GET | GET | /xlive/app-blink/v1/upStreamConfig/CanUseH265Encoder | https://api.live.bilibili.com |  |
| classes33.dex:7664:POST | POST | https://api.bilibili.com/x/relation/modify | https://api.live.bilibili.com | Field:fid, Field:act, Field:re_src, Field:spm_id, Field:extend_content |
| classes33.dex:7665:POST | POST | /xlive/app-blink/v1/preLive/generateAiTitle | https://api.live.bilibili.com | Query:title |
| classes33.dex:7666:GET | GET | /xlive/app-blink/v1/activity/GetWidgetBannerSortedList | https://api.live.bilibili.com | QueryMap:map/body/dynamic |
| classes33.dex:7667:GET | GET | /xlive/app-blink/v1/preLive/getAiTitleConfig | https://api.live.bilibili.com |  |
| classes33.dex:7668:GET | GET | /xlive/app-blink/v1/preLive/getAiTitleResult | https://api.live.bilibili.com | Query:task_id |
| classes33.dex:7669:GET | GET | /xlive/app-blink/v1/index/areaListForLive | https://api.live.bilibili.com | Query:room_id, Query:search_name, Query:device, Query:live_mode, Query:current_area_id |
| classes33.dex:7670:GET | GET | /xlive/app-blink/v1/anchorBenefits/GetAnchorBenefitsEntranceInfo | https://api.live.bilibili.com |  |
| classes33.dex:7671:GET | GET | /xlive/app-ucenter/v1/official_room/officialRoom/GetAnchorShowInfo | https://api.live.bilibili.com | Query:anchor_id |
| classes33.dex:7672:GET | GET | /xlive/app-blink/v1/index/getAnchorSwitch | https://api.live.bilibili.com | Query:switch_keys |
| classes33.dex:7673:GET | GET | /xlive/anchor-task-interface/api/v1/GetAnchorTaskCenterPendantInfo | https://api.live.bilibili.com |  |
| classes33.dex:7674:GET | GET | /xlive/app-blink/v1/index/GetBackground | https://api.live.bilibili.com | Query:live_model |
| classes33.dex:7675:GET | GET | /xlive/app-blink/v1/index/GetBackground | https://api.live.bilibili.com | Query:live_model, Query:bg_id, Header:X-Event-TraceID |
| classes33.dex:7676:GET | GET | /xlive/app-blink/v1/music/bgmPlay | https://api.live.bilibili.com | Query:sid |
| classes33.dex:7677:GET | GET | client/v1/Game/getCallList | https://api.live.bilibili.com |  |
| classes33.dex:7678:GET | GET | /xlive/app-blink/v1/roomBg/AvailableBgList | https://api.live.bilibili.com |  |
| classes33.dex:7679:GET | GET | /xlive/general-interface/v1/rank/queryContributionRank | https://api.live.bilibili.com | Query:room_id, Query:ruid, Query:page_size, Query:type, Query:switch, Query:scene |
| classes33.dex:7680:GET | GET | /room/v1/Danmu/getConf | https://api.live.bilibili.com | Query:room_id |
| classes33.dex:7681:GET | GET | /xlive/app-room/v1/index/getDanmuInfo | https://api.live.bilibili.com | QueryMap:map/body/dynamic |
| classes33.dex:7682:GET | GET | /xlive/app-blink/v1/material/ListMaterialsV3 | https://api.live.bilibili.com | Query:mtp, Query:device, Query:material_source |
| classes33.dex:7683:GET | GET | /xlive/app-room/v2/guardTab/topListNew | https://api.live.bilibili.com | Query:ruid, Query:roomid, Query:page, Query:page_size, Query:typ |
| classes33.dex:7684:GET | GET | /xlive/app-ucenter/v1/highlight/statistics | https://api.live.bilibili.com | Query:room_id, Query:live_key, Query:highlight_id |
| classes33.dex:7685:GET | GET | /xlive/app-ucenter/v1/highlight/ready | https://api.live.bilibili.com | Query:room_id, Query:live_key |
| classes33.dex:7686:GET | GET | /xlive/app-blink/v1/index/getIndexData | https://api.live.bilibili.com | Query:gap_date, Query:module, Query:location, Query:position, Query:build |
| classes33.dex:7687:GET | GET | /xlive/app-blink/v1/upStreamConfig/GetUpStreamConfig | https://api.live.bilibili.com | Query:room_id |
| classes33.dex:7688:GET | GET | /xlive/app-blink/v1/liveTagService/GetLiveTags | https://api.live.bilibili.com |  |
| classes33.dex:7689:GET | GET | /xlive/app-blink/v1/topic/GetLiveTopic | https://api.live.bilibili.com | Query:topic_id |
| classes33.dex:7690:GET | GET | /xlive/guard-interface/v1/guard/GuardTechoAnchorNotice | https://api.live.bilibili.com |  |
| classes33.dex:7691:GET | GET | /xlive/app-blink/v1/clarity/HitClarityV2 | https://api.live.bilibili.com | QueryMap:map/body/dynamic |
| classes33.dex:7692:GET | GET | /xlive/app-blink/v1/record/getSwitch | https://api.live.bilibili.com |  |
| classes33.dex:7693:GET | GET | /xlive/app-ucenter/v1/like_info_v3/like/getLikeInfov3 | https://api.live.bilibili.com | Query:room_id, Query:anchor_id |
| classes33.dex:7694:GET | GET | /xlive/app-blink/v1/index/getMessageNum | https://api.live.bilibili.com |  |
| classes33.dex:7695:GET | GET | /xlive/pk-interface/v1/battle/pkRecordList | https://api.live.bilibili.com | Query:room_id, Query:pk_type, Query:mid |
| classes33.dex:7696:GET | GET | /xlive/general-interface/v1/paylive/getPayliveInfoForAnchor | https://api.live.bilibili.com |  |
| classes33.dex:7697:GET | GET | /xlive/app-blink/v1/playTogether/PlayTogetherAnchorSwitch | https://api.live.bilibili.com | QueryMap:map/body/dynamic |
| classes33.dex:7698:GET | GET | /xlive/app-blink/v1/popConf/getPopConfV2 | https://api.live.bilibili.com | Query:uid, Query:source, Query:place |
| classes33.dex:7699:GET | GET | /xlive/app-blink/v2/preLiveIcon/GetPreLiveIcon | https://api.live.bilibili.com | QueryMap:map/body/dynamic |
| classes33.dex:7700:GET | GET | /xlive/app-blink/v1/preLive/GetCoverAdviceAndQualityScore | https://api.live.bilibili.com | Query:cover_url, Query:judge_bubble |
| classes33.dex:7701:GET | GET | /xlive/app-blink/v1/index/GetPrivilegeMange | https://api.live.bilibili.com | Query:live_model |
| classes33.dex:7702:POST | POST |  | https://api.live.bilibili.com | Url:map/body/dynamic |
| classes33.dex:7703:GET | GET | /xlive/app-blink/v1/preLive/GetReach | https://api.live.bilibili.com | Query:reach_type |
| classes33.dex:7704:GET | GET | /xlive/app-blink/v1/live/GetUpStreamRtmp | https://api.live.bilibili.com | Query:room_id, Query:free_flow, Query:area_v2, Query:recommend_ip, Query:backup_stream, Query:backup_stream_type, Query:stream_biz, Query:dolby_vision |
| classes33.dex:7705:GET | GET | /xlive/app-blink/v1/room/GetRoomContentAuditInfo | https://api.live.bilibili.com | Query:room_id, Query:content_type |
| classes33.dex:7706:GET | GET | /xlive/app-room/v1/dM/gethistory | https://api.live.bilibili.com | Query:room_id |
| classes33.dex:7707:GET | GET | /xlive/app-blink/v1/room/GetInfo | https://api.live.bilibili.com | Query:live_advice |
| classes33.dex:7708:GET | GET | /xlive/app-blink/v1/schedule/GetSchedule | https://api.live.bilibili.com | Query:scheduleId |
| classes33.dex:7709:GET | GET | /xlive/app-ucenter/v1/roomAdmin/senior_switch | https://api.live.bilibili.com | Query:anchor_id |
| classes33.dex:7710:POST | POST | /xlive/e-commerce-interface/v1/ecommerce-anchor/anchor_inner_operating_id | https://api.live.bilibili.com |  |
| classes33.dex:7711:GET | GET | /xlive/app-blink/v1/upStreamConfig/GetUpStreamSpeedTestInfo | https://api.live.bilibili.com | Query:room_id, Query:platform, Query:build, Query:area_v2_id, Query:free_tab |
| classes33.dex:7712:GET | GET |  | https://api.live.bilibili.com | Url:map/body/dynamic, QueryMap:map/body/dynamic |
| classes33.dex:7713:GET | GET | /xlive/app-blink/v1/stickers/getStickers | https://api.live.bilibili.com | Query:id |
| classes33.dex:7714:GET | GET | /xlive/app-blink/v1/index/getSubAreaInfoByID | https://api.live.bilibili.com | Query:sub_area_id |
| classes33.dex:7715:GET | GET | /av/v1/SuperChat/getMessage | https://api.live.bilibili.com | Query:order_id |
| classes33.dex:7716:GET | GET | /av/v1/SuperChat/getMessageList | https://api.live.bilibili.com | Query:room_id, Query:ruid |
| classes33.dex:7717:GET | GET | /av/v1/SuperChat/forMsgReason | https://api.live.bilibili.com |  |
| classes33.dex:7718:GET | GET | /xlive/app-ucenter/v2/card/user | https://api.live.bilibili.com | Query:uid, Query:ruid, Query:close_mystery, Query:mystery_special, Query:mystery_name, Query:role |
| classes33.dex:7719:GET | GET | /xlive/app-blink/v1/preLive/GetVisibleMode | https://api.live.bilibili.com |  |
| classes33.dex:7720:GET | GET | /xlive/app-blink/v1/voiceConn/config | https://api.live.bilibili.com | Query:room_id |
| classes33.dex:7721:GET | GET | /xlive/app-blink/v1/voiceConn/applicationList | https://api.live.bilibili.com | Query:room_id, Query:anchor |
| classes33.dex:7722:GET | GET | /xlive/app-room/v2/wish/GetWishInfo | https://api.live.bilibili.com | Query:anchor_id, Query:room_id, Query:is_anchor |
| classes33.dex:7723:GET | GET | /xlive/app-blink/v1/voiceConn/startVoiceConn | https://api.live.bilibili.com | Query:uid, Query:room_id, Header:X-Event-TraceID |
| classes33.dex:7724:GET | GET | /xlive/app-blink/v1/popConf/postPopStatus | https://api.live.bilibili.com | Query:uid, Query:activity_id, Query:source, Query:place, Query:conf_id |
| classes33.dex:7725:GET | GET | /xlive/app-blink/v1/preLive/PreLive | https://api.live.bilibili.com | QueryMap:map/body/dynamic |
| classes33.dex:7726:POST | POST | /xlive/general-interface/v1/paylive/prepareGuardPaylive | https://api.live.bilibili.com | Field:free_mat_type, Field:free_mat_uri, Field:free_mat_format |
| classes33.dex:7727:POST | POST | /xlive/general-interface/v1/paylive/preparePaylive | https://api.live.bilibili.com | Body:map/body/dynamic |
| classes33.dex:7728:GET | GET | /xlive/general-interface/v1/paylive/queryPayliveStatus | https://api.live.bilibili.com |  |
| classes33.dex:7729:POST | POST | /xlive/app-blink/v1/xInteract/ReconnectLink | https://api.live.bilibili.com | Query:channel_id |
| classes33.dex:7730:GET | GET | /xlive/app-blink/v2/preLiveIcon/ReportPreLiveIconRedDotClick | https://api.live.bilibili.com | QueryMap:map/body/dynamic |
| classes33.dex:7731:POST | POST | /xlive/app-ucenter/v1/roomAdmin/dismiss | https://api.live.bilibili.com | Field:uid |
| classes33.dex:7732:POST | POST | /av/v1/SuperChat/remove | https://api.live.bilibili.com | Field:id |
| classes33.dex:7733:POST | POST | /xlive/app-ucenter/v2/xbanned/banned/DelBlack | https://api.live.bilibili.com | Field:tuid, Field:anchor_id, Field:spmid |
| classes33.dex:7734:POST | POST | /av/v1/SuperChat/report | https://api.live.bilibili.com | Field:id, Field:roomid, Field:reason, Field:token, Field:ts |
| classes33.dex:7735:GET | GET | /av/v1/VideoConnection/getBlack | https://api.live.bilibili.com | Query:page |
| classes33.dex:7736:POST | POST | /xlive/app-blink/v1/preLive/SaveVisibleMode | https://api.live.bilibili.com | Field:visible_mode, Field:upower_privilege_type |
| classes33.dex:7737:GET | GET | /xlive/app-blink/v1/music/bgmSearch | https://api.live.bilibili.com | Query:kw, Query:pn, Query:ps |
| classes33.dex:7738:GET | GET | /av/v1/VideoConnection/onlineSearch | https://api.live.bilibili.com | Query:search, Query:type, Query:page |
| classes33.dex:7739:POST | POST | /xlive/app-ucenter/v1/highlight/modify | https://api.live.bilibili.com | Query:room_id, Query:live_key, Query:action, Query:show_type |
| classes33.dex:7740:POST | POST | /room/v1/Room/startLive | https://api.live.bilibili.com | Field:room_id, Field:area_v2, Field:type, Field:freeFlow, Field:live_type, Field:recommend_ip, Field:voice_background, Header:X-Event-TraceID, Field:backup_stream, Field:backup_stream_type, Field:stream_biz, Field:recommend_protocol, Field:dolby_vision |
| classes33.dex:7741:POST | POST | /room/v1/Room/stopLive | https://api.live.bilibili.com | Field:room_id, Header:X-Event-TraceID |
| classes33.dex:7742:GET | GET | /xlive/app-blink/v1/voiceConn/endVoiceConn | https://api.live.bilibili.com | Query:voice_channel, Query:room_id, Header:X-Event-TraceID |
| classes33.dex:7743:POST | POST | /xlive/app-blink/v1/voiceConn/setRoomSwitch | https://api.live.bilibili.com | Query:room_id, Query:status |
| classes33.dex:7744:POST | POST | /xlive/app-blink/v1/voiceReportDM/GenVoiceReportDM | https://api.live.bilibili.com | Field:text, Field:dm_type, Field:voice, Field:volume, Field:pitch_rate, Field:speech_rate |
| classes33.dex:7745:POST | POST | /room_ex/v1/RoomNews/update | https://api.live.bilibili.com | Field:roomid, Field:uid, Field:content |
| classes33.dex:7746:POST | POST | /xlive/app-blink/v1/index/updateAnchorSwitch | https://api.live.bilibili.com | Field:switch_keys_to_open, Field:switch_keys_to_close |
| classes33.dex:7747:POST | POST | /xlive/app-blink/v1/index/UpdateBackground | https://api.live.bilibili.com | Field:bg_id, Field:bg_url, Field:live_model, Field:select_status, Field:background_type, Field:video_url, Field:is_default |
| classes33.dex:7748:GET | GET | /xlive/app-blink/v1/roomBg/UpdateActiveBg | https://api.live.bilibili.com | Query:id |
| classes33.dex:7749:POST | POST | /xlive/app-blink/v1/preLive/UpdatePreLiveInfo | https://api.live.bilibili.com | QueryMap:map/body/dynamic |
| classes33.dex:7750:POST | POST | /xlive/app-blink/v1/preLive/UpdatePreLiveInfo | https://api.live.bilibili.com | QueryMap:map/body/dynamic |
| classes33.dex:7751:POST | POST | /xlive/app-blink/v1/preLive/UpdateLocationStatus | https://api.live.bilibili.com | Query:status |
| classes33.dex:7752:POST | POST | /xlive/app-blink/v1/index/updateTemporaryConf | https://api.live.bilibili.com | Field:join_slide |
| classes33.dex:7753:POST | POST | /xlive/pk-interface/v1/battle/addUserConf | https://api.live.bilibili.com | Field:action, Field:black_uid |
| classes33.dex:7754:POST | POST | /xlive/app-blink/v1/voiceConn/setConfig | https://api.live.bilibili.com | Field:room_id, Field:type, Field:guard, Field:users, Field:medal_start, Field:upower_identity_id, Field:pay_base_price, Field:allow_bid, Field:bid_base_price, Field:bid_step |
| classes33.dex:7755:GET | GET |  | https://api.live.bilibili.com | Url:map/body/dynamic, Query:type |
| classes33.dex:10924:GET | GET | /xlive/app-blink/v1/reportIndex/EventList | https://api.live.bilibili.com |  |
| classes33.dex:11594:GET | GET | /byp/api/interface/tts/task/result | http://pre-ai.bilibili.co | Query:task_id |
| classes33.dex:11595:POST | POST | /byp/api/interface/tts/task/run | http://pre-ai.bilibili.co | Body:map/body/dynamic |
| classes33.dex:11596:POST | POST | /byp/api/interface/tts/task | http://pre-ai.bilibili.co | Body:map/body/dynamic |
| classes33.dex:13137:GET | GET | /xlive/app-blink/v1/preLiveAiCover/CheckAiCoverEligibility | https://api.live.bilibili.com | Query:uid |
| classes33.dex:13138:POST | POST | /xlive/app-blink/v1/preLiveAiCover/GenerateAiCover | https://api.live.bilibili.com | Field:image_url, Field:style_id, Field:content |
| classes33.dex:13139:GET | GET | /xlive/app-blink/v1/preLiveAiCover/GetAiCoverTaskStatus | https://api.live.bilibili.com | Query:task_id |
| classes33.dex:13140:GET | GET | /xlive/app-blink/v1/material/ListCoverMaterialsCategory | https://api.live.bilibili.com | Query:montage_version, Query:aurora_version, Query:mtp, Query:material_source |
| classes33.dex:13141:GET | GET | /xlive/app-blink/v1/material/ListCoverMaterials | https://api.live.bilibili.com | Query:montage_version, Query:aurora_version, Query:mtp, Query:material_source, Query:cat_id, Query:page_size, Query:max_rank |
| classes33.dex:13142:GET | GET | /xlive/app-blink/v1/material/GetCoverMaterialDetailById | https://api.live.bilibili.com | Query:ids |
| classes33.dex:13143:GET | GET | /xlive/app-blink/v1/preLiveAiCover/ListAiCoverMyTasks | https://api.live.bilibili.com | Query:page, Query:limit |
| classes33.dex:13144:GET | GET | /xlive/app-blink/v1/preLiveAiCover/ListAiCoverStyles | https://api.live.bilibili.com | Query:uid |
| classes33.dex:19603:POST | POST | /xlive/app-blink/v1/room/AnnounceCommit | https://api.live.bilibili.com | Field:type, Field:content |
| classes33.dex:19604:GET | GET | /xlive/app-blink/v1/room/AnnounceInfo | https://api.live.bilibili.com |  |
| classes33.dex:19605:POST | POST | /xlive/app-blink/v2/multiVoice/CreateChannel | https://api.live.bilibili.com | Field:cdn, Header:X-Event-TraceID |
| classes33.dex:19606:GET | GET | /xlive/app-blink/v1/multiVoice/MultiVoiceApplicationList | https://api.live.bilibili.com |  |
| classes33.dex:19607:GET | GET | /xlive/app-blink/v2/universalInteract/UniversalInfo | https://api.live.bilibili.com | Query:biz_session_id, Query:room_id |
| classes33.dex:19608:GET | GET | /xlive/app-blink/v1/multiVoice/InvitationList | https://api.live.bilibili.com |  |
| classes33.dex:19609:GET | GET | /xlive/app-blink/v2/multiVoice/GetMvRoomConfig | https://api.live.bilibili.com |  |
| classes33.dex:19610:POST | POST | /xlive/app-blink/v2/multiVoice/Invitation | https://api.live.bilibili.com | Field:uid, Field:want_position, Field:biz_session_id, Header:X-Event-TraceID |
| classes33.dex:19611:POST | POST | /xlive/app-blink/v1/universalInteract/Dissolve | https://api.live.bilibili.com | Field:uid |
| classes33.dex:19612:POST | POST | /xlive/app-blink/v2/multiVoice/PreCheck | https://api.live.bilibili.com | Field:uid, Header:X-Event-TraceID |
| classes33.dex:19613:POST | POST | /xlive/app-blink/v1/universalInteract/Kick | https://api.live.bilibili.com | Field:biz_session_id, Field:peer_uid, Header:X-Event-TraceID |
| classes33.dex:19614:POST | POST | /xlive/app-blink/v2/multiVoice/ApplicationReply | https://api.live.bilibili.com | Field:uid, Field:reply_type, Header:X-Event-TraceID |
| classes33.dex:19615:POST | POST | /xlive/app-blink/v2/multiVoice/SetMvRoomConfig | https://api.live.bilibili.com | Field:cond_type, Field:gift_switch, Field:label_switch, Field:member_can_update_label |
| classes33.dex:19616:POST | POST | /xlive/pk-interface/multiVoice/UpdateAsrSwitch | https://api.live.bilibili.com | Field:switch |
| classes33.dex:20975:POST | POST | /xlive/app-blink/v1/music/addFav | https://api.live.bilibili.com | Query:sid, Query:tp |
| classes33.dex:20977:GET | GET | /xlive/app-blink/v1/music/bgmFav | https://api.live.bilibili.com |  |
| classes33.dex:20978:GET | GET | /xlive/app-blink/v1/music/bgmList | https://api.live.bilibili.com | Query:tid, Query:pn, Query:ps |
| classes33.dex:20979:GET | GET | /xlive/app-blink/v1/music/bgmPre | https://api.live.bilibili.com |  |
| classes33.dex:20980:POST | POST | /xlive/app-blink/v1/music/delFav | https://api.live.bilibili.com | Query:sid, Query:tp |
| classes33.dex:25236:GET | GET | /xlive/app-blink/v1/live/GetQualityData | https://api.live.bilibili.com | Query:streamName, Query:key, Query:freeTab |
| classes33.dex:25237:POST | POST | /xlive/app-blink/v1/live/QualityCallback | https://api.live.bilibili.com | Body:map/body/dynamic |
| classes33.dex:26171:GET | GET | /xlive/virtual-interface/v1/xvtuber/GetLatestUseModel | https://api.live.bilibili.com | Query:compress_level |
| classes33.dex:26172:GET | GET | /xlive/virtual-interface/v1/virtualModel/getVirtualModelById | https://api.live.bilibili.com | Query:compress_level, Query:build, Query:model_id, Query:source, Query:source_id, Query:file_type, Query:model_type |
| classes33.dex:26173:GET | GET | /xlive/virtual-interface/v1/virtualModel/getVirtualModelList | https://api.live.bilibili.com | Query:compress_level, Query:unity_version, Query:model_type, Query:source |
| classes33.dex:26174:GET | GET | /xlive/virtual-interface/v1/virtual3d/Get3DPlayResourceEntity | https://api.live.bilibili.com | Query:model_id |
| classes33.dex:26175:POST | POST | /xlive/virtual-interface/v1/virtual3d/Get3DPlayResourceList | https://api.live.bilibili.com | Body:map/body/dynamic |
| classes33.dex:26176:POST | POST | /xlive/virtual-interface/v1/xvtuber/LatestAction | https://api.live.bilibili.com | Field:model_id, Field:virtual_id, Field:virtual_name, Field:action |
| classes33.dex:26177:GET | GET | /xlive/virtual-interface/v1/duration/heartbeat | https://api.live.bilibili.com | Query:app_type, Query:duration, Query:extend, Query:platform_type |
| classes33.dex:26178:POST | POST | /xlive/virtual-interface/v1/xvtuber/UpdateModelPreview | https://api.live.bilibili.com | Field:virtual_id, Field:preview_url |
| classes33.dex:26179:POST | POST | /xlive/app-blink/v1/index/updateVirtualDate | https://api.live.bilibili.com | Body:map/body/dynamic |
| classes33.dex:27667:GET | GET | /xlive/app-blink/v1/index/getVirtualDateNum | https://api.live.bilibili.com |  |
| classes33.dex:27668:POST | POST | /xlive/app-blink/v1/index/saveVirtualData | https://api.live.bilibili.com | Field:virtual_name, Field:virtual_path |
| classes33.dex:34475:GET | GET | /xlive/app-blink/v1/index/getNoticeResult | https://api.live.bilibili.com | Query:room_id, Query:from, Query:flag |
| classes35.dex:75:GET | GET | /v2/bcut/pink/ip/list | https://member.bilibili.com |  |
| classes35.dex:76:GET | GET | /x/material/bgm/play | https://member.bilibili.com | Query:sid |
| classes35.dex:77:GET | GET | /x/material/pink/bgm/list | https://member.bilibili.com | Query:tid, Query:ps, Query:pn, Query:version |
| classes35.dex:78:GET | GET | /v2/bcut/pink/material/list | https://member.bilibili.com | Query:ids |
| classes35.dex:79:GET | GET | /x/material/pink/list | https://member.bilibili.com | Query:apply_for, Query:cat_id, Query:tp, Query:ps, Query:max_rank, Query:version, Query:vertical |
| classes35.dex:80:GET | GET | /x/material/pink/cats | https://member.bilibili.com | Query:apply_for, Query:tp |
| classes35.dex:81:GET | GET | /v2/bcut/pink/bcut-sole | https://member.bilibili.com |  |
| classes35.dex:82:GET | GET | /x/material/pink/pre | https://member.bilibili.com | Query:apply_for, Query:tp, Query:material_id, Query:need_category |
| classes35.dex:83:GET | GET | /x/material/pink/bgm/pre | https://member.bilibili.com | Query:from |
| classes35.dex:84:GET | GET | /v2/bcut/pink/theme/info | https://member.bilibili.com | Query:ids |
| classes35.dex:201:GET | GET | /x/bcut/app/aliyuntoken | https://member.bilibili.com |  |
| classes35.dex:249:GET | GET | /x/app/gfactory/bind/info | https://member.bilibili.com | Query:mid, Query:biz_code, Query:extra |
| classes35.dex:250:GET | GET | /x/app/gfactory/mission/info | https://member.bilibili.com | Query:mid, Query:biz_code |
| classes35.dex:251:GET | GET | /x/app/gfactory/material | https://member.bilibili.com | Query:mid, Query:biz_code, Query:pn, Query:ps, Query:time_index |
| classes35.dex:252:GET | GET | /x/app/gfactory/mission/award | https://member.bilibili.com | Query:mid, Query:receive_id, Query:task_uuid, Query:biz_code |
| classes35.dex:253:GET | GET | /x/app/gfactory/tab/bubble | https://member.bilibili.com | Query:mid |
| classes35.dex:494:GET | GET | /x/vupre/app/archive/list/white | https://member.bilibili.com |  |
| classes35.dex:1243:GET | GET | /x/mvp/material/list | https://member.bilibili.com | Query:access_key, Query:type, Query:rec_material_id, Query:rec_material_type |
| classes35.dex:1628:GET | GET | /x/material/bcut/v2/list | https://member.bilibili.com | Query:type, Query:cat_id, Query:sdk_type, Query:montage_version, Query:aurora_version |
| classes35.dex:2500:POST | POST | /x/vupre/app/archive/material/game | https://member.bilibili.com | Query:mid, Query:token |
| classes35.dex:3293:GET | GET | /x/material/bgm/play | https://member.bilibili.com | Query:access_key, QueryMap:map/body/dynamic |
| classes35.dex:3582:GET | GET | x/creative-tool/ai-collection/main | https://member.bilibili.com | Query:pids, Query:sdk_type, Query:aurora_version, Query:montage_version, Query:ai_story_entrance_style2 |
| classes35.dex:3754:GET | GET | /x/material/bcut/views?&type=27 | https://member.bilibili.com | Query:access_key, Query:ids |
| classes35.dex:5435:GET | GET | /x/creative-tool/story-video/role-scene/match | https://member.bilibili.com | Query:format_json, Query:id |
| classes35.dex:5436:GET | GET | /x/creative-tool/story-video/play/detail | https://member.bilibili.com | Query:id, Query:play_id, Query:play_type, Query:story_play_type |
| classes35.dex:5437:GET | GET | /dynamic_mix/v1/dynamic_mix/at_search | https://api.vc.bilibili.com | Query:uid, Query:keyword |
| classes35.dex:5438:GET | GET | /dynamic_mix/v1/dynamic_mix/name_to_uid | https://api.vc.bilibili.com | Query:names, Query:teenagers_mode |
| classes35.dex:5439:GET | GET | /dynamic_mix/v1/dynamic_mix/at_list | https://api.vc.bilibili.com | Query:uid |
| classes35.dex:5440:GET | GET | /x/material/pink/text_video/materials/list | https://member.bilibili.com | Query:rec_material_id, Query:rec_material_type, Query:tp, Query:sub_build, Query:cat_id, Query:max_rank, Query:ps |
| classes35.dex:5441:GET | GET | /x/material/pink/text_video/materials/cats | https://member.bilibili.com | Query:rec_material_id, Query:rec_material_type, Query:tp, Query:sub_build |
| classes35.dex:5442:GET | GET | /x/risk/archive/del | https://member.bilibili.com | Query:aid, Query:platform |
| classes35.dex:5443:GET | GET | /x/vupre/app/topic/type/check | https://member.bilibili.com | Query:topic_id, Query:type_id |
| classes35.dex:5444:GET | GET | /x/vupre/app/topic/info | https://member.bilibili.com | Query:topic_id |
| classes35.dex:5445:GET | GET | /x/vupre/app/topic/tag/check | https://member.bilibili.com | Query:tag |
| classes35.dex:5446:GET | GET | x/vupre/app/topic/type/v2 | https://member.bilibili.com | Query:type_id, Query:title, Query:filename, Query:desc, Query:upload_id, Query:ps, Query:pn, Query:platform, Query:track_id, Query:build, Query:mobi_app, Query:type_pid |
| classes35.dex:5447:GET | GET | /x/vupre/app/topic/type | https://member.bilibili.com | Query:type_id, Query:title, Query:filename, Query:desc, Query:upload_id, Query:ps, Query:pn |
| classes35.dex:5448:GET | GET | /x/vupre/app/topic/search | https://member.bilibili.com | Query:keywords, Query:page_num, Query:page_size, Query:offset |
| classes35.dex:5449:GET | GET | /x/creative-tool/material/views | https://member.bilibili.com | Query:ids, Query:sdk_type, Query:aurora_version, Query:montage_version |
| classes35.dex:5450:GET | GET | /x/mvp/material/template/remixlist | https://member.bilibili.com | Query:access_key, Query:cat_id, Query:ps, Query:page_no, Query:version, Query:filter_material_ids, Query:supported_ability, Query:aurora_version, Query:sdk_type, Query:montage_version |
| classes35.dex:5452:GET | GET | /x/mvp/material/template/pre | https://member.bilibili.com | Query:access_key, Query:material_id, Query:version, Query:supported_ability, Query:aurora_version, Query:sdk_type, Query:montage_version |
| classes35.dex:6280:GET | GET | /x/creative-tool/story-video/material/list | https://member.bilibili.com | Query:cat_id, Query:size, Query:max_rank |
| classes35.dex:6281:GET | GET | /x/creative-tool/story-video/material/category | https://member.bilibili.com |  |
| classes35.dex:6282:GET | GET | x/creative-tool/ai-story/style/list | https://member.bilibili.com | Query:activity_id, Query:biz |
| classes35.dex:6283:GET | GET | x/creative-tool/story-video/play/list | https://member.bilibili.com | Query:pn, Query:ps, Query:cat_id |
| classes35.dex:6284:GET | GET | x/creative-tool/ai-creation/home/index | https://member.bilibili.com |  |
| classes35.dex:11766:POST | POST | x/creative-tool/rubick-interface/task | https://member.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes35.dex:11767:GET | GET | x/creative-tool/intelligent-title/style | https://member.bilibili.com | Query:access_key |
| classes35.dex:11768:GET | GET | x/creative-tool/rubick-interface/task/result | https://member.bilibili.com | Query:access_key, Query:task_id, Query:model_id |
| classes35.dex:13343:POST | POST | /x/vupre/mvp/archive/types/predict | https://member.bilibili.com | Query:access_key, Query:title, Query:filename, Query:upload_id |
| classes35.dex:13541:POST | POST | /x/bcut/draftbox/draft/save?biz_type=3 | https://member.bilibili.com | Field:upos_uri, Field:uid, Field:build, Field:buvid |
| classes35.dex:13598:GET | GET | /x/material/bcut/v2/pre | https://member.bilibili.com | Query:access_key, Query:apply_for, Query:tp, Query:material_id, Query:need_category, Query:sdk_type, Query:montage_version, Query:aurora_version |
| classes35.dex:14314:POST | POST | v2/bcut/vchange/launch | https://member.bilibili.com | Body:map/body/dynamic |
| classes35.dex:14315:GET | GET | v2/bcut/vchange/result | https://member.bilibili.com | Query:job_id |
| classes35.dex:14395:GET | GET | /v2/bcut/remix/music | https://member.bilibili.com | Query:ps, Query:pn |
| classes35.dex:14396:GET | GET | /x/material/bgm/bcut/pre | https://member.bilibili.com | Query:access_key, Query:from |
| classes35.dex:14397:GET | GET | /x/material/bgm/bcut/check/state | https://member.bilibili.com | Query:access_key, Query:sids |
| classes35.dex:14398:POST | POST | /x/bcut/app/material/bgm/rec_list | https://member.bilibili.com | Query:access_key, Body:map/body/dynamic, Query:buvid |
| classes35.dex:14399:GET | GET | /x/bcut/app/material/bgm/recommend/list | https://member.bilibili.com | Query:pn, Query:ps, Query:scene |
| classes35.dex:14400:POST | POST | /x/mvp/material/batch/fav | https://member.bilibili.com | Field:access_key, Field:type, Field:state, Field:oids |
| classes35.dex:14708:POST | POST | v2/bcut/caption/intelligent/create | https://member.bilibili.com | Field:params |
| classes35.dex:14709:GET | GET | v2/bcut/caption/recommend/get | https://member.bilibili.com | Query:filename, Query:mid, Query:title, Query:upload_id, Query:upfrom, Query:boss_key, Query:sdk_type, Query:montage_version, Query:aurora_version |
| classes35.dex:14711:GET | GET | v2/bcut/caption/intelligent/get | https://member.bilibili.com | Query:image, Query:caption_task_id, Query:ic_id |
| classes35.dex:15583:POST | POST | x/bcut/rubick-interface/task | https://member.bilibili.com | Body:map/body/dynamic |
| classes35.dex:15584:GET | GET | x/bcut/app/rough-cut/get | https://member.bilibili.com | Query:task_id, Query:model_id |
| classes35.dex:16781:POST | POST | /x/vupre/mvp/reserve/add | https://member.bilibili.com | Field:access_key, Field:sid |
| classes35.dex:16782:GET | GET | /x/vupre/mvp/topic/tag/check | https://member.bilibili.com | Query:tag |
| classes35.dex:16783:GET | GET | /x/material/bcut/up/template/del | https://member.bilibili.com | Query:access_key, Query:ids |
| classes35.dex:16784:POST | POST | /x/bcut/draftbox/draft/save?biz_type=3 | https://member.bilibili.com | Field:upos_uri, Field:uid, Field:build, Field:buvid |
| classes35.dex:16785:POST | POST | /v2/bcut/experiment/publish-page | https://member.bilibili.com | Query:type, Query:access_key |
| classes35.dex:16786:GET | GET | /x/vupre/mvp/archive/tags | https://member.bilibili.com | Query:access_key, Query:typeid, Query:from, Query:title, Query:filename, Query:desc, Query:cover, Query:upload_id, Query:mid |
| classes35.dex:16787:GET | GET | /x/mvp/arc/types | https://member.bilibili.com | Query:access_key |
| classes35.dex:16788:GET | GET | /x/bcut/app/videoconf | https://member.bilibili.com | Query:game_names |
| classes35.dex:16789:GET | GET | /x/vupre/mvp/archive/human/type2/list | https://member.bilibili.com | Query:access_key |
| classes35.dex:16790:GET | GET | /x/mvp/arc/desc/format | https://member.bilibili.com | Query:typeid, Query:copyright |
| classes35.dex:16791:GET | GET | /x/mvp/arc/pre | https://member.bilibili.com | Query:access_key |
| classes35.dex:16792:POST | POST | /x/bcut/app/pre/subjects | https://member.bilibili.com | Field:features, Field:materials |
| classes35.dex:16793:GET | GET | /x/material/bcut/v2/cover-template/by-tag | https://member.bilibili.com | Query:tag_id, Query:partition_id |
| classes35.dex:16794:POST | POST | /x/bcut/app/cover-title/split | https://member.bilibili.com | Field:model_id, Field:raw_data |
| classes35.dex:16795:GET | GET | /x/bcut/riskcontrol/publish | https://member.bilibili.com | Query:access_key, Query:avid, Query:is_add_success, Query:brand |
| classes35.dex:16796:GET | GET | /x/vupre/mvp/topic/type | https://member.bilibili.com | Query:access_key, Query:type_id, Query:title, Query:filename, Query:desc, Query:upload_id, Query:ps, Query:pn |
| classes35.dex:16797:GET | GET | /x/vupre/mvp/topic/type/v2 | https://member.bilibili.com | Query:access_key, Query:upload_id, Query:title, Query:type_id, Query:ps, Query:pn, Query:track_id, Query:zip_url, Query:mobi_app, Query:type_pid |
| classes35.dex:16798:GET | GET | /x/app/h5/mission/type/v2 | https://member.bilibili.com | Query:access_key, Query:tid, Query:from |
| classes35.dex:16799:POST | POST | x/creative-tool/rubick-interface/task | https://member.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes35.dex:16800:POST | POST | /x/vu/h5/activity/add | https://member.bilibili.com | Query:access_key, Query:device, Query:platform, Query:build, Query:video_sign, Body:map/body/dynamic |
| classes35.dex:16801:GET | GET | /x/vupre/mvp/topic/search | https://member.bilibili.com | Query:keywords, Query:page_num, Query:page_size, Query:offset |
| classes35.dex:18099:POST | POST | /v2/bcut/playstyle/generate | https://member.bilibili.com | Query:access_key, Query:id, Query:resource_addr |
| classes35.dex:18100:GET | GET | /v2/bcut/playstyle/result | https://member.bilibili.com | Query:access_key, Query:playstyleid |
| classes35.dex:22751:POST | POST | /x/vu/app/add | https://member.bilibili.com | Query:access_key, Header:X-Event-TraceID, Body:map/body/dynamic |
| classes35.dex:22752:POST | POST | /x2/creative/app/season/section/episodes/add | https://member.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes35.dex:22753:GET | GET | /x/vupre/app/archive/pre | https://member.bilibili.com | Query:access_key, Query:relation_from |
| classes35.dex:22754:POST | POST | /x/vupre/app/archive/videocheck | https://member.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes35.dex:22755:POST | POST | /x2/creative/app/season/switch | https://member.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes35.dex:22756:POST | POST | /x/vu/app/edit/full | https://member.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes35.dex:22757:POST | POST | /x/vu/app/edit/visibility | https://member.bilibili.com | Query:access_key, Query:aid, Query:is_only_self |
| classes35.dex:22758:POST | POST | /x/vupre/app/ttvup/permission | https://member.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes35.dex:22759:GET | GET | /x/vupre/app/archive/adorder/list/v2 | https://member.bilibili.com |  |
| classes35.dex:22760:GET | GET | /x/vupre/app/adorder/info | https://member.bilibili.com | Query:adorder_id, Query:adorder_type |
| classes35.dex:22761:GET | GET | /x/app/newpubinfo | https://member.bilibili.com | Query:mid |
| classes35.dex:22762:GET | GET | x/vupre/app/archive/human/type2/list | https://member.bilibili.com | Query:mid |
| classes35.dex:22763:GET | GET | /x/app/archive/tag/info | https://member.bilibili.com | Query:tag_name |
| classes35.dex:22764:GET | GET | x/vupre/app/archive/tags | https://member.bilibili.com | Query:typeid, Query:from, Query:title, Query:filename, Query:desc, Query:cover, Query:upload_id |
| classes35.dex:22765:GET | GET | /x/vupre/app/white | https://member.bilibili.com | Query:access_key |
| classes35.dex:22766:GET | GET | /x/vupre/app/ad/game/list | https://member.bilibili.com | Query:keyword, Query:letter, Query:pn, Query:ps |
| classes35.dex:22767:GET | GET | /x/app/detail/archive | https://member.bilibili.com | Query:aid |
| classes35.dex:22768:GET | GET | /x/app/detail/audit | https://member.bilibili.com | Query:aid |
| classes35.dex:22769:GET | GET | /x/app/detail/xcode | https://member.bilibili.com | Query:aid, Query:cid |
| classes35.dex:22770:GET | GET | /x/app/detail/videos | https://member.bilibili.com | Query:mode, Query:aid, Query:pn, Query:ps |
| classes35.dex:22771:GET | GET | /x/vupre/app/archive/pre | https://member.bilibili.com | Query:access_key |
| classes35.dex:22772:GET | GET | /x/creative-tool/v1/bigplus/GetMaterialOperation | https://member.bilibili.com | Query:filtered_types |
| classes35.dex:22773:GET | GET | /x/app/archive/operations | https://member.bilibili.com | Query:mid |
| classes35.dex:22774:GET | GET | /x/vupre/app/archive/view | https://member.bilibili.com | Query:access_key, Query:aid |
| classes35.dex:22775:GET | GET | /x/vupre/app/archive/dm | https://member.bilibili.com | Query:access_key, Query:cid |
| classes35.dex:22776:GET | GET | /x/vupre/app/archive/desc/format | https://member.bilibili.com | Query:access_key, Query:typeid, Query:copyright |
| classes35.dex:22777:POST | POST | /x/app/danmu/transferV2 | https://member.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes35.dex:22778:POST | POST | /x/vu/app/cover/up | https://member.bilibili.com | Query:access_key, Header:X-Event-TraceID, Part:map/body/dynamic |
| classes35.dex:22779:GET | GET | /x/article/creative/app/pre | https://api.bilibili.com | Query:access_key |
| classes35.dex:22780:POST | POST | /x/app/newcomer/task/accept | https://member.bilibili.com | Field:task_id |
| classes35.dex:22781:POST | POST | /x/app/archive/delete | https://member.bilibili.com | Field:access_key, Field:aid, Field:sms_code |
| classes35.dex:22782:GET | GET | /x/app/appeal/v2/permit | https://member.bilibili.com | Query:aid |
| classes35.dex:22783:GET | GET | /x/vupre/app/archive/complete | https://member.bilibili.com | Query:aid, Query:dtime, Query:adorder_id, Query:adorder_type, Query:relation_from, Query:source, Query:video_base_info |
| classes35.dex:22784:GET | GET | /x/app/archive/list/pre | https://member.bilibili.com | Query:source |
| classes35.dex:22785:GET | GET | /x2/creative/h5/act/clock/v3/arcpage | https://member.bilibili.com | Query:access_key |
| classes35.dex:22786:GET | GET | /x/vupre/app/limit/reasons | https://member.bilibili.com | Query:aid |
| classes35.dex:22787:GET | GET | /x/app/archives | https://member.bilibili.com | Query:access_key, QueryMap:map/body/dynamic |
| classes35.dex:22788:GET | GET | x/app/archive/music/tort  | https://member.bilibili.com | Query:aid |
| classes35.dex:22789:GET | GET |  /x/app/limited/desc  | https://member.bilibili.com | Query:aid |
| classes35.dex:22790:GET | GET | /x/app/pagetip/list | https://member.bilibili.com | Query:access_key, Query:page |
| classes35.dex:22791:GET | GET | x/app/archive/failcode | https://member.bilibili.com | Query:aid |
| classes35.dex:22792:GET | GET | /x/app/index/v4 | https://member.bilibili.com | Query:access_key, Query:coop, Query:resource_id_list, Query:text_id_list |
| classes35.dex:22793:POST | POST | /x/app/limited/open | https://member.bilibili.com | Field:aid |
| classes35.dex:22794:POST | POST | /x/app/openscreen/submit | https://member.bilibili.com | Query:access_key, Field:id |
| classes35.dex:22795:POST | POST | /x/app/pagetip/submit | https://member.bilibili.com | Query:access_key, Field:id |
| classes35.dex:22796:GET | GET | /c/spark/app/inspiration/rotate | https://member.bilibili.com | Query:category_id, Query:tail_id, Query:resource_id_list, Query:text_id_list |
| classes35.dex:22797:POST | POST | /x/app/up/draft | https://member.bilibili.com | Field:access_key, Field:draft |
| classes35.dex:22798:POST | POST | /x/vupre/app/reason/feedback/submit | https://member.bilibili.com | Field:aid, Field:reason_id, Field:solve, Field:reason, Field:reason_detail |
| classes35.dex:22799:POST | POST | /x/silverbullet-proxy/web/recaptcha/sms/check | https://api.bilibili.com | Query:token, Query:code |
| classes35.dex:22800:GET | GET | /x/silverbullet-proxy/web/recaptcha/hide/tel | https://api.bilibili.com |  |
| classes35.dex:22801:POST | POST | /x/silverbullet-proxy/web/recaptcha/sms/send | https://api.bilibili.com |  |
| classes35.dex:32236:POST | POST | /x2/creative/app/season/section/add | https://member.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes35.dex:32237:POST | POST | /x2/creative/app/season/section/add | https://member.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes35.dex:32238:POST | POST | /x2/creative/app/season/section/episodes/add | https://member.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes35.dex:32239:POST | POST | /x2/creative/app/season/section/edit | https://member.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes35.dex:32240:POST | POST | /x2/creative/app/season/section/episode/del | https://member.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes35.dex:32241:POST | POST | /x2/creative/app/season/del | https://member.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes35.dex:32242:POST | POST | /x2/creative/app/season/edit | https://member.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes35.dex:32243:POST | POST | /x2/creative/app/season/edit | https://member.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes35.dex:32244:GET | GET | /x2/creative/app/seasons | https://member.bilibili.com | Query:pn, Query:ps, Query:order, Query:source |
| classes35.dex:32245:GET | GET | /x2/creative/app/season/sort/config | https://member.bilibili.com |  |
| classes35.dex:32246:GET | GET | /x2/creative/app/season | https://member.bilibili.com | Query:id |
| classes35.dex:32247:GET | GET | /x2/creative/app/season/section | https://member.bilibili.com | Query:id, Query:sort |
| classes35.dex:32248:GET | GET | /x2/creative/app/season/archives/sp | https://member.bilibili.com | Query:pn, Query:ps, Query:mode, Query:season_id, Query:keyword |
| classes35.dex:32249:POST | POST | /x2/creative/app/season/add | https://member.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes35.dex:32250:POST | POST | /x2/creative/app/season/add | https://member.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes35.dex:32251:POST | POST | /x2/creative/app/season/sort/submit | https://member.bilibili.com | Field:season_ids |
| classes35.dex:32252:POST | POST | /x2/creative/app/season/sort/switch | https://member.bilibili.com | Field:sort_mode |
| classes35.dex:33032:POST | POST | /x/app/staff/add | https://member.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes35.dex:33033:POST | POST | /x/app/staff/del | https://member.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes35.dex:33034:POST | POST | /x/app/staff/edit | https://member.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes35.dex:33035:GET | GET | /x/app/staff/archive | https://member.bilibili.com | Query:aid, Query:app_oversea |
| classes35.dex:33036:GET | GET | /x/vupre/app/staff/pre | https://member.bilibili.com | Query:access_key |
| classes35.dex:33037:GET | GET | /x/app/staff/user/search | https://member.bilibili.com | Query:kw |
| classes35.dex:33038:POST | POST | /x/app/staff/reorder | https://member.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes35.dex:33039:POST | POST | /x/app/staff/apply/submit/v2 | https://member.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes35.dex:33231:POST | POST | /x/app/cards/submit | https://member.bilibili.com | Query:aid, Query:cid, Query:type, Query:permanent, Query:cards |
| classes35.dex:33232:GET | GET | /x/app/cards/task/cancel | https://member.bilibili.com | Query:cid |
| classes35.dex:33233:POST | POST | x/app/cards/task/create | https://member.bilibili.com | Query:cid, Query:duration, Query:asr_text |
| classes35.dex:33234:GET | GET | /x/app/cards/task/result | https://member.bilibili.com | Query:cid |
| classes35.dex:33235:GET | GET | /x/app/cards/list | https://member.bilibili.com | Query:aid, Query:cid, Query:type |
| classes35.dex:33236:GET | GET | /x/app/cards/video/playerurl | https://member.bilibili.com | Query:cid, Query:mid |
| classes35.dex:33237:GET | GET | /x/app/cards/chapter/tip/hide | https://member.bilibili.com | Query:cid |
| classes35.dex:35157:POST | POST | x/creative-tool/valor/report/gen | https://member.bilibili.com | Field:hero_id, Field:hero_icon, Field:kill_cnt, Field:dead_cnt, Field:assist_cnt, Field:game_result, Field:mvp_cnt, Field:lose_mvp, Field:branch_evaluate, Field:game_time, Field:hero_triple_kill_cnt, Field:hero_quadra_kill_cnt, Field:hero_penta_kill_cnt, Field:used_time, Field:desk_id, Field:desk_seq, Field:relay_entity, Field:version, Field:hero_name, Field:valor_type, Field:game_year |
| classes35.dex:35158:GET | GET | x/creative-tool/valor/query/bind | https://member.bilibili.com |  |
| classes35.dex:35159:GET | GET | x/creative-tool/valor/actual/list | https://member.bilibili.com | Query:access_key |
| classes35.dex:35160:GET | GET | x/creative-tool/valor/report/list | https://member.bilibili.com | Query:access_key |
| classes35.dex:35161:GET | GET | x/creative-tool/valor/report/view | https://member.bilibili.com | Query:desk_id, Query:desk_seq, Query:relay_entity, Query:version, Query:sdk_type, Query:aurora_version, Query:montage_version |
| classes35.dex:35162:GET | GET | x/creative-tool/material/entrance | https://member.bilibili.com |  |
| classes35.dex:35163:GET | GET | x/creative-tool/valor/click/record | https://member.bilibili.com |  |
| classes35.dex:35164:GET | GET | x/creative-tool/valor/click/contribute | https://member.bilibili.com | Query:access_key |
| classes35.dex:42338:GET | GET | /x/material/bcut/v2/template/detail?tp=26 | https://member.bilibili.com | Query:material_id, Query:access_key |
| classes35.dex:42339:GET | GET | x/app/material/common/mwc/list | https://member.bilibili.com | Query:access_key, Query:biz, Query:apply_for, Query:material_type, Query:sdk_type, Query:montage_version, Query:aurora_version |
| classes35.dex:42340:GET | GET | /x/vupre/app/cover/template/content | https://member.bilibili.com | Query:type_id |
| classes35.dex:42953:GET | GET | /x/material/bcut/views | https://member.bilibili.com | Query:ids, Query:apply_for, Query:type, Query:access_key, Query:sdk_type, Query:montage_version, Query:aurora_version |
| classes35.dex:42955:GET | GET | /x/material/bgm/view | https://member.bilibili.com | Query:access_key, QueryMap:map/body/dynamic |
| classes35.dex:42956:GET | GET | /x/material/bgm/play | https://member.bilibili.com | Query:access_key, QueryMap:map/body/dynamic |
| classes35.dex:43244:GET | GET | /x/creative-tool/ai-collection/query/materials | https://member.bilibili.com | Query:pid, Query:sdk_type, Query:montage_version, Query:aurora_version |
| classes35.dex:43888:GET | GET | /x/material/bcut/v2/list | https://member.bilibili.com | Query:access_key, Query:vertical, Query:apply_for, Query:cat_id, Query:tp, Query:ps, Query:max_rank, Query:version, Query:sdk_type, Query:montage_version, Query:aurora_version |
| classes35.dex:43889:GET | GET | /x/material/bcut/v2/pre | https://member.bilibili.com | Query:apply_for, Query:tp, Query:access_key, Query:need_category, Query:material_id, Query:sdk_type, Query:montage_version, Query:aurora_version |
| classes35.dex:43890:GET | GET | /x/material/bcut/views | https://member.bilibili.com | Query:access_key, Query:ids |
| classes35.dex:43891:GET | GET | /x/material/bcut/up/template/list | https://member.bilibili.com | Query:access_key, Query:pn, Query:ps, Query:start_time, Query:end_time, Query:supported_ability, Query:aurora_version, Query:montage_version |
| classes35.dex:43892:GET | GET | /x/material/bcut/up/template/list | https://member.bilibili.com | Query:access_key, Query:audit_state, Query:pn, Query:ps, Query:start_time, Query:end_time, Query:supported_ability, Query:aurora_version, Query:montage_version |
| classes35.dex:48041:POST | POST | x/creative-tool/pic-text/audit | https://member.bilibili.com | Query:access_key, Body:map/body/dynamic |
| classes35.dex:49046:POST | POST | /x/bcut/app/videogen/segment | https://member.bilibili.com | Body:map/body/dynamic |
| classes35.dex:49047:POST | POST | /x/bcut/app/videogen/segment/report | https://member.bilibili.com | Query:access_key, Query:segment_list, Query:material_id, Query:material_type, Query:query_id, Query:segment_type |
| classes37.dex:722:POST | POST | /mini/api/click | https://game-attribute.biligame.com | Query:access_key, Query:app_id, Body:map/body/dynamic |
| classes37.dex:2408:GET | GET | /game/center/h5/small/game/advertising_position | https://line3-h5-mobile-api.biligame.com | Query:app_id, Query:ad_unit_id |
| classes37.dex:2935:POST | POST | /game/center/h5/small/game/relation/auth | https://line3-h5-mobile-api.biligame.com | Body:map/body/dynamic, Query:access_key |
| classes37.dex:2937:GET | GET | /game/center/h5/small/game/relation/chain/list | https://line3-h5-mobile-api.biligame.com | Query:app_id, Query:relation_type, Query:access_key |
| classes37.dex:2938:GET | GET | /game/center/h5/small/game/setting | https://line3-h5-mobile-api.biligame.com | Query:app_id, Query:access_key |
| classes37.dex:3074:GET | GET | /game/center/h5/small/game/benefits/query | https://line1-h5-mobile-api.biligame.com | Query:app_id, Query:scene, Query:content_id |
| classes37.dex:3075:POST | POST | /game/center/h5/small/game/benefits/report | https://line1-h5-mobile-api.biligame.com | Query:app_id, Body:map/body/dynamic |
| classes37.dex:3801:POST | POST | api/miniapp/game/follow | https://miniapp.bilibili.com/ | Body:map/body/dynamic, Query:access_key |
| classes37.dex:3802:GET | GET | api/miniapp/game/follow/status | https://miniapp.bilibili.com/ | Query:access_key |
| classes37.dex:4043:POST | POST | open/open_api/v1/miniapp/payment/exchange_pay_info | https://miniapp.bilibili.com/ | Body:map/body/dynamic, Query:access_key |
| classes37.dex:4278:GET | GET | /game/center/h5/small/game/mini_game_center_exp | https://line3-h5-mobile-api.biligame.com | Query:sdk_type, Query:build_type, Query:app_id, Query:channel |
| classes37.dex:5961:GET | GET | api/miniapp/configs | https://miniapp.bilibili.com/ | Query:buildType, Query:appId, Query:vAppId, Query:storageId, Header:APPLET-BUILD-TYPE, Header:APPLET-ID |
| classes37.dex:7279:GET | GET | api/miniapp/info/main | https://miniapp.bilibili.com/ | Query:appId, Query:vAppId |
| classes37.dex:7342:GET | GET | api/miniapp/game_alert/check | https://miniapp.bilibili.com/ | Query:app_id, Query:engine_static_version, Query:engine_dynamic_version |
| classes37.dex:7343:POST | POST | api/miniapp/game_alert/expose | https://miniapp.bilibili.com/ | Body:map/body/dynamic |
| classes37.dex:7708:POST | POST | api/miniapp/can_pay | https://miniapp.bilibili.com/ | Body:map/body/dynamic, Query:access_key |
| classes37.dex:7709:GET | GET | api/miniapp/playtime_event | https://miniapp.bilibili.com/ |  |
| classes37.dex:7710:GET | GET | api/miniapp/check_realname | https://miniapp.bilibili.com/ |  |
| classes37.dex:7711:GET | GET | api/miniapp/confirm_auth | https://miniapp.bilibili.com/ |  |
| classes37.dex:7712:POST | POST | api/miniapp/realname_auth | https://miniapp.bilibili.com/ | Body:map/body/dynamic, Query:access_key |
| classes37.dex:7713:POST | POST | api/miniapp/heartbeat | https://miniapp.bilibili.com/ | Body:map/body/dynamic, Query:access_key |
| classes37.dex:7714:POST | POST | api/miniapp/realname_auth/user_authorization | https://miniapp.bilibili.com/ | Body:map/body/dynamic, Query:access_key |
| classes37.dex:8219:GET | GET | /game/center/h5/small/game/game_ext | https://line3-h5-mobile-api.biligame.com | Query:app_id |
| classes37.dex:8223:GET | GET | api/miniapp/configs/global | https://miniapp.bilibili.com/ | Query:biz_from |
| classes37.dex:8294:POST | POST | /game/center/h5/user/played/smallgame/report/dev | https://line3-h5-mobile-api.biligame.com | Query:access_key, Body:map/body/dynamic |
| classes37.dex:8295:GET | GET | /game/center/h5/user/played/smallgame/report/v2 | https://line3-h5-mobile-api.biligame.com | Query:app_id, Query:sdk_type |
| classes37.dex:8339:GET | GET | /game/center/h5/small/game/setting | https://line3-h5-mobile-api.biligame.com | Query:app_id, Query:sdk_type |
| classes37.dex:8340:POST | POST | /game/center/h5/small/game/relation/setting/update | https://line3-h5-mobile-api.biligame.com | Body:map/body/dynamic, Query:access_key |
| classes37.dex:8341:GET | GET | /game/center/h5/small/game/notice_switch | https://line3-h5-mobile-api.biligame.com | Query:app_id, Query:switch_status, Query:sdk_type |
| classes37.dex:9262:GET | GET | /game/center/h5/small/game/user_setting | https://line3-h5-mobile-api.biligame.com | Query:sdk_type, Query:access_key |
| classes37.dex:9263:POST | POST | /game/center/h5/small/game/save_user_setting | https://line3-h5-mobile-api.biligame.com | Body:map/body/dynamic, Query:access_key |
| classes37.dex:10750:POST | POST | picture/image | https://mall.bilibili.com/mall-c/ | Body:map/body/dynamic |
| classes37.dex:10751:POST | POST | api/miniapp/file/upload | https://miniapp.bilibili.com/ | Body:map/body/dynamic |
| classes37.dex:11818:POST | POST | /open/open_api/v1/miniapp/data/submit/event | https://miniapp.bilibili.com | Query:app_id, Query:v_app_id, Query:access_key, Body:map/body/dynamic |
| classes5.dex:260:POST | POST | /pgc/app/follow/add | https://api.bilibili.com | Query:access_key, Query:season_id, Query:season_type, Query:reserve_id, Query:flag |
| classes5.dex:261:POST | POST | /pgc/app/follow/del | https://api.bilibili.com | Query:access_key, Query:season_id, Query:season_type |
| classes5.dex:262:POST | POST | /pgc/app/follow/status/update | https://api.bilibili.com | Query:access_key, Query:season_id, Query:status |
| classes5.dex:2008:GET | GET | /bce/sunspot/facade/public/comment/detail | https://cm.bilibili.com | Query:aid, Query:mid, Query:up_mid, Query:comment_id, Query:ad_extra, Query:is_story, Query:comment_upmid, Query:comment_type, Query:comment_oid, Query:spmid, Query:from_spmid, Query:item_ids, Query:season_id, Query:ep_id |
| classes5.dex:60811:GET | GET | /x/resource/abtest/batch | https://app.bilibili.com |  |
| classes5.dex:61300:POST | POST | /x/v2/reply/del/combo | https://api.bilibili.com | Field:access_key, Field:oid, Field:type, Field:rpid, Field:spmid, Field:extend_content, Field:track_id, Field:scm_action_id, Field:container_uuid |
| classes5.dex:61301:POST | POST | /x/v2/reply/del | https://api.bilibili.com | Field:access_key, Field:oid, Field:type, Field:rpid, Field:track_id, Field:scm_action_id, Field:container_uuid |
| classes5.dex:61302:POST | POST | /x/v2/reply/hate | https://api.bilibili.com | Field:access_key, Field:oid, Field:type, Field:rpid, Field:action, Field:scene, Field:ordering, Field:from_spmid, Field:spmid, Field:track_id, Field:scm_action_id, Field:container_uuid |
| classes5.dex:61303:POST | POST | /x/v2/reply/quiz/edit | https://api.bilibili.com | Field:biz_code, Field:id, Field:action, Field:answer |
| classes5.dex:61304:GET | GET | /x/v2/reply/subject/status | https://api.bilibili.com | Query:access_key, Query:oid, Query:type |
| classes5.dex:61305:POST | POST | /x/v2/reply/action | https://api.bilibili.com | Field:access_key, Field:oid, Field:type, Field:rpid, Field:action, Field:scene, Field:ordering, Field:from_spmid, Field:spmid, Field:track_id, Field:scm_action_id, Field:container_uuid |
| classes5.dex:61306:POST | POST | /x/v2/reply/likebiz/nft | https://api.bilibili.com | Field:oid, Field:type, Field:rpid, Field:action, Field:id |
| classes5.dex:61307:POST | POST | /x/v2/reply/subject/modify | https://api.bilibili.com | Field:access_key, Field:oid, Field:type, Field:action |
| classes5.dex:61308:POST | POST | /x/relation/modify | https://api.bilibili.com | Query:access_key, Query:fid, Query:act, Query:re_src, Query:spmid, Query:extend_content, Query:track_id, Query:scm_action_id, Query:container_uuid |
| classes5.dex:61309:POST | POST | /x/v2/reply/top | https://api.bilibili.com | Field:access_key, Field:oid, Field:type, Field:rpid, Field:action, Field:track_id, Field:scm_action_id, Field:container_uuid |
| classes5.dex:63727:POST | POST | /x/relation/modify | https://api.bilibili.com | Field:fid, Field:act, Field:re_src, Field:spmid |
| classes5.dex:63728:POST | POST | /pgc/season/episode/like/triple | https://api.bilibili.com | Field:ep_id, Field:is_follow, Field:access_key, Field:track_id |
| classes7.dex:60059:GET | GET | /bce/sunspot/facade/public/api/story/live/goods | https://cm.bilibili.com | Query:live_room_id, Query:ad_extra, Query:access_key |
| classes7.dex:62138:POST | POST | /x/checkin-plat/favor/cancel | https://api.bilibili.com | Field:mid, Field:checkin_id, Field:checkin_type |
| classes7.dex:62139:POST | POST | /x/checkin-plat/favor/delete | https://api.bilibili.com | Field:mid, Field:checkin_id, Field:checkin_type |
| classes7.dex:62140:GET | GET | /x/checkin-plat/favor/checkinDetail | https://api.bilibili.com | Query:mid, Query:checkin_type, Query:checkin_id, Query:checkin_status, Query:offset |
| classes7.dex:62141:GET | GET | /x/checkin-plat/favor/list | https://api.bilibili.com | Query:mid, Query:checkin_status, Query:offset |
| classes7.dex:62142:GET | GET | /x/checkin-plat/favor/getReminder | https://api.bilibili.com | Query:mid, Query:checkin_type, Query:checkin_id |
| classes7.dex:62143:POST | POST | /x/checkin-plat/favor/setReminder | https://api.bilibili.com | Field:mid, Field:checkin_type, Field:checkin_id, Field:reminder_status, Field:push_time |
| classes7.dex:62336:POST | POST | /x/channel/cancel | https://app.bilibili.com | Field:channel_id, Field:from, Field:from_spmid |
| classes7.dex:62337:POST | POST | /x/topic/fav/sub/cancel | https://app.bilibili.com | Field:topic_id |
| classes7.dex:62338:GET | GET | /x/v2/favorite/channel | https://app.bilibili.com | Query:ps, Query:offset |
| classes7.dex:62339:GET | GET | /x/topic/fav/sub/list | https://app.bilibili.com | Query:page_size, Query:page_num, Query:offset, Query:from |
| classes7.dex:62364:POST | POST | /x/v3/fav/resource/copy | https://api.bilibili.com | Query:mid, Query:resources, Query:src_media_id, Query:tar_media_id |
| classes7.dex:62365:POST | POST | /x/v2/history/toview/copy | https://api.bilibili.com | Field:resources, Field:tar_media_id |
| classes7.dex:62366:POST | POST | /x/v3/fav/resource/move | https://api.bilibili.com | Query:src_media_id, Query:tar_media_id, Query:resources |
| classes7.dex:62367:POST | POST | /x/v2/history/toview/move | https://api.bilibili.com | Field:resources, Field:tar_media_id |
| classes7.dex:62368:GET | GET | /x/v3/fav/resource/infos | https://api.bilibili.com | Query:resources |
| classes7.dex:62369:GET | GET | /x/v3/fav/resource/infos | https://api.bilibili.com | Query:resources, Query:folder_mid, Query:folder_id |
| classes7.dex:62370:POST | POST | /x/v3/fav/tab/clean_invalid | https://api.bilibili.com | Field:fid |
| classes7.dex:62371:POST | POST | /x/v3/fav/resource/clean | https://api.bilibili.com | Query:media_id |
| classes7.dex:62372:POST | POST | /x/v3/fav/folder/add | https://api.bilibili.com | Field:access_key, Field:title, Field:intro, Field:cover, Field:privacy, Header:x-bili-gaia-vtoken |
| classes7.dex:62373:POST | POST | /x/v3/fav/tab/dels | https://api.bilibili.com | Query:resources, Query:media_id |
| classes7.dex:62374:POST | POST | /x/v3/fav/resource/batch-del | https://api.bilibili.com | Query:resources, Query:media_id |
| classes7.dex:62375:POST | POST | /x/note/del | https://api.bilibili.com | Field:note_ids |
| classes7.dex:62376:POST | POST | /x/v3/fav/folder/del | https://api.bilibili.com | Query:media_ids |
| classes7.dex:62377:POST | POST | /x/note/publish/del | https://api.bilibili.com | Field:cvids |
| classes7.dex:62378:POST | POST | /x/v3/fav/season/unfav | https://api.bilibili.com | Query:season_id |
| classes7.dex:62379:POST | POST | /x/tag/subscribe/cancel | https://api.bilibili.com | Field:tag_id |
| classes7.dex:62380:POST | POST | /x/v3/fav/folder/edit | https://api.bilibili.com | Field:access_key, Field:title, Field:intro, Field:cover, Field:privacy, Field:media_id, Header:x-bili-gaia-vtoken |
| classes7.dex:62381:POST | POST | /x/v3/fav/resource/batch-deal | https://api.bilibili.com | Query:access_key, Query:resources, Query:add_media_ids, Query:del_media_ids, Query:from, Query:extra, Query:from_spmid, Query:spmid, Query:action_id, Header:x-bili-gaia-vtoken |
| classes7.dex:62382:POST | POST | /x/v3/fav/folder/fav | https://api.bilibili.com | Query:media_id, Query:from_spmid, Query:spmid, Query:action_id, Header:x-bili-gaia-vtoken |
| classes7.dex:62383:GET | GET | /x/v3/fav/folder/created/list | https://api.bilibili.com | Query:access_key, Query:up_mid, Query:pn, Query:ps, Query:rid, Query:type |
| classes7.dex:62384:GET | GET | /x/v3/fav/folder/created/list-all | https://api.bilibili.com | Query:pn, Query:ps, Query:is_space, Query:up_mid |
| classes7.dex:62385:GET | GET | /x/v3/fav/folder/created/list-all | https://api.bilibili.com | Query:access_key, Query:up_mid, Query:rid, Query:type, Query:show_season, Query:extra |
| classes7.dex:62386:GET | GET | /x/v3/fav/folder/collected/list | https://api.bilibili.com | Query:access_key, Query:up_mid, Query:pn, Query:ps |
| classes7.dex:62387:GET | GET | /x/v3/fav/folder/resources | https://api.bilibili.com | Query:media_id, Query:pn |
| classes7.dex:62388:GET | GET | /x/v3/fav/resource/ids | https://api.bilibili.com | Query:media_id, Query:pn |
| classes7.dex:62389:GET | GET | /x/v3/fav/resource/ids | https://api.bilibili.com | Query:media_id, Query:pn, Query:sort |
| classes7.dex:62390:GET | GET | /x/v3/fav/folder/space/v2 | https://api.bilibili.com | Query:up_mid |
| classes7.dex:62391:GET | GET | /x/note/list | https://api.bilibili.com | Query:ps, Query:pn |
| classes7.dex:62392:GET | GET | /x/note/publish/list/archive | https://api.bilibili.com | Query:oid, Query:oid_type, Query:ps, Query:pn |
| classes7.dex:62393:GET | GET | /x/v3/fav/folder/space | https://api.bilibili.com | Query:access_key, Query:up_mid |
| classes7.dex:62394:GET | GET | /x/v3/fav/folder/info | https://api.bilibili.com | Query:media_id |
| classes7.dex:62395:GET | GET | /x/note/publish/list/user | https://api.bilibili.com | Query:ps, Query:pn |
| classes7.dex:62396:GET | GET | /x/v3/fav/folder/whitelist | https://api.bilibili.com | Query:access_key |
| classes7.dex:62397:POST | POST | /x/v3/fav/thump/up | https://api.bilibili.com | Query:rid, Query:thumb_type, Query:type, Query:up_mid, Query:from_spmid, Query:spmid, Query:action_id, Header:x-bili-gaia-vtoken |
| classes7.dex:62398:GET | GET | /x/v3/fav/folder/clean-state | https://api.bilibili.com | Query:media_id |
| classes7.dex:62399:GET | GET | /x/v3/fav/resource/list | https://api.bilibili.com | Query:media_id, Query:pn, Query:ps |
| classes7.dex:62400:GET | GET | /x/v3/fav/resource/list | https://api.bilibili.com | Query:media_id, Query:pn, Query:ps, Query:type |
| classes7.dex:62401:POST | POST | /x/v3/fav/statistics/count | https://api.bilibili.com | Query:rid, Query:r_type, Query:cnt_type |
| classes7.dex:62402:GET | GET | /x/v3/fav/resource/list | https://api.bilibili.com | Query:media_id, Query:pn, Query:ps, Query:keyword, Query:type |
| classes7.dex:62403:GET | GET | /x/v3/fav/tab/fav/search | https://api.bilibili.com | Query:keyword, Query:start_oid, Query:start_otype, Query:search_count, Query:pn, Query:count, Query:media_id |
| classes7.dex:62404:POST | POST | /x/v3/fav/resource/sort | https://api.bilibili.com | Query:sort, Query:media_id |
| classes7.dex:62405:POST | POST | /x/v3/fav/folder/add_top | https://api.bilibili.com | Field:fid, Field:add_top |
| classes7.dex:62406:POST | POST | x/v3/fav/folder/unfav | https://api.bilibili.com | Query:media_id, Query:from_spmid, Query:spmid, Query:action_id |
| classes7.dex:62407:POST | POST | x/v3/fav/folder/unfav | https://api.bilibili.com | Query:access_key, Query:media_id |
| classes7.dex:62622:POST | POST | /x/v3/fav/kid-playlist/create | https://api.bilibili.com |  |
| classes7.dex:62623:POST | POST | /x/v3/fav/kid-playlist/import | https://api.bilibili.com |  |
| classes7.dex:62624:GET | GET | /x/v3/fav/kid-playlist/info | https://api.bilibili.com |  |
| classes7.dex:65444:GET | GET | /x/v2/feed/index/story/cart | https://app.bilibili.com | QueryMap:map/body/dynamic |
