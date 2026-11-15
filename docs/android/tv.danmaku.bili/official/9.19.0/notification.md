# 通知与广播

<!-- android-edition:start -->
包名：`tv.danmaku.bili` · 渠道：Official Android 64-bit · 版本：9.19.0（9190400）。

[全部版本](../../../README.md) · [本包文档](README.md) · [网页接口](../../../../pc/README.md) · [基线元数据](../../../../../catalog/android/tv.danmaku.bili/official/9.19.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

推送、广播连接和消息通知。分类根据路由、域名与声明类名称推断，未验证业务行为。

官方 Android 9.19.0：26 条 HTTP 声明、37 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。

[返回分类](README.md) · [与 Play 对比](comparison.md)

## HTTP

参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。

| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |
| --- | --- | --- | --- | --- |
| classes12.dex:45966:POST | POST | https://api.bilibili.com/x/push/user/isBadgeNoDisturb | FieldMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/push/DisturbInfo;&gt;;&gt;; |
| classes12.dex:45967:POST | POST | https://api.bilibili.com/x/push/callback/fcm | FieldMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes12.dex:45968:POST | POST | https://api.bilibili.com/x/push/callback/click | FieldMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes12.dex:45969:POST | POST | https://api.bilibili.com/x/push/token | FieldMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes14.dex:17388:POST | POST | https://api.bilibili.com/x/member/v2/notice/close | Query:access_key, Query:uuid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes14.dex:17389:GET | GET | https://api.bilibili.com/x/member/v2/notice | Query:access_key, Query:uuid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/components/AlertMessage;&gt;;&gt;; |
| classes14.dex:18169:GET | GET | https://app.bilibili.com/x/v2/notice/package | Query:model | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/components/HDApkInfo;&gt;;&gt;; |
| classes14.dex:38914:GET | GET | https://app.bilibili.com/x/v2/notice?plat=0 | Query:channel, Query:type, Query:ver | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/pegasus/components/BiliNotice;&gt;; |
| classes18.dex:27642:POST | POST | http://api.bilibili.com/pgc/freya/room/modify/notice | Field:room_id, Field:content | Ljava/lang/Object; |
| classes28.dex:23928:GET | GET | https://api.bilibili.com/x/push/broadcast/config |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/push/innerpush/model/InnerPushConfig;&gt;;&gt;; |
| classes28.dex:23929:GET | GET | https://api.bilibili.com/x/push/broadcast/display | Query:scene, Query:msgs | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/push/innerpush/model/InnerPushReplayBody;&gt;;&gt;; |
| classes28.dex:32686:POST | POST | https://api.bilibili.com/x/push/event/report | Query:event | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/google/protobuf/Any;&gt;;&gt;; |
| classes28.dex:32687:POST | POST | https://api.bilibili.com/x/push/popup/report | Query:entrance, Query:system, Query:system_popup | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/google/protobuf/Any;&gt;;&gt;; |
| classes28.dex:32688:GET | GET | https://api.bilibili.com/x/push/popup/setting | Query:entrance, Query:system, Query:spmid, Query:system_popup, Query:device_brand, Query:os_version | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/push/pushsetting/model/PushCallBackInfo;&gt;;&gt;; |
| classes28.dex:32689:POST | POST | https://api.bilibili.com/x/push/setting/set | Query:access_key, Query:type, Query:value | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes28.dex:32690:POST | POST | https://api.bilibili.com/x/push/settings/set | Query:replace_types, Query:value | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/google/protobuf/Any;&gt;;&gt;; |
| classes5.dex:36708:GET | GET | https://api.bilibili.com/x/push/setting/get | Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/preferences/api/PreferencePushSettingInfo;&gt;;&gt;; |
| classes5.dex:36709:GET | GET | https://api.bilibili.com/x/push/setting/get2 | Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/preferences/api/PushSettingInfo;&gt;;&gt;; |
| classes5.dex:36710:POST | POST | https://api.bilibili.com/x/push/setting/set | Query:access_key, Query:type, Query:value | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:36711:POST | POST | https://api.bilibili.com/x/push/setting/set | Query:access_key, Query:type, Query:value | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes6.dex:12576:GET | GET | https://line3-h5-mobile-api.biligame.com/game/center/h5/game/notice | Query:game_base_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/biligame/api/BiligameApiResponse&lt;Ljava/util/List&lt;Lcom/bilibili/biligame/api/NoticeInfo;&gt;;&gt;;&gt;; |
| classes6.dex:12583:GET | GET | https://line3-h5-mobile-api.biligame.com/game/center/h5/detail/pop/notice | Query:game_base_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/biligame/api/BiligameApiResponse&lt;Lcom/bilibili/biligame/api/bean/gamedetail/GameDetailPopNotice;&gt;;&gt;; |
| classes6.dex:12624:GET | GET | https://line3-h5-mobile-api.biligame.com/game/center/h5/game/notice | Query:game_base_id | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/biligame/api/BiligameApiResponse&lt;Ljava/util/List&lt;Lcom/bilibili/biligame/api/NoticeInfo;&gt;;&gt;;&gt;; |
| classes6.dex:13172:GET | GET | https://line3-h5-mobile-api.biligame.com/api/cloud_game/v2/notice/current |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/biligame/api/BiligameApiResponse&lt;Lcom/bilibili/biligame/api/bean/BiligameCloudGameNoticeBean;&gt;;&gt;; |
| classes8.dex:33179:POST | POST | https://api.bilibili.com/x/v1/tunnel/notify/close | Query:access_key, Query:oid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes9.dex:29587:POST | POST | https://api.bilibili.com/x/msgfeed/notice | Field:id, Field:tp, Field:notice_state | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |

## gRPC

请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。

| 路由 | 请求类型候选 | 响应类型候选 |
| --- | --- | --- |
| /bilibili.broadcast.message.account.Account/AccountNotify | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/account/AccountNotifyReply; |
| /bilibili.broadcast.message.archive.VideoUp/VideoData | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/archive/VideoDataReply; |
| /bilibili.broadcast.message.bgroup.BGroup/AppEventStream | Lcom/bapis/bilibili/broadcast/message/bgroup/AppEventMessage; | Lcom/google/protobuf/Empty; |
| /bilibili.broadcast.message.dialing.DialingTask/DialingTask | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/dialing/DialingTaskMessage; |
| /bilibili.broadcast.message.main.NativePage/WatchNotify | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/main/NativePageEvent; |
| /bilibili.broadcast.message.main.Resource/TopActivity | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/main/TopActivityReply; |
| /bilibili.broadcast.message.main.Search/ChatResultPush | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/main/ChatResult; |
| /bilibili.broadcast.message.main.Search/ChatResultPushV2 | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/main/ChatResultV2; |
| /bilibili.broadcast.message.push.PushUpStream/PushUpStream | Lcom/bapis/bilibili/broadcast/message/push/UpStreamMessage; | Lcom/google/protobuf/Empty; |
| /bilibili.broadcast.message.search.Search/SearchGeneratorPush | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/search/SearchGeneratorResult; |
| /bilibili.broadcast.message.tv.Tv/Account | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/AccountNotify; |
| /bilibili.broadcast.message.tv.Tv/CommonPush | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/CommonPushNotify; |
| /bilibili.broadcast.message.tv.Tv/Esports | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/EsportsNotify; |
| /bilibili.broadcast.message.tv.Tv/FeedClientSmart | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/FeedClientSmartNotify; |
| /bilibili.broadcast.message.tv.Tv/LiveBottom | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/LiveBottomConfNotify; |
| /bilibili.broadcast.message.tv.Tv/LiveCommonMsg | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/LiveCommonNotify; |
| /bilibili.broadcast.message.tv.Tv/LiveSkip | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/LiveSkipNotify; |
| /bilibili.broadcast.message.tv.Tv/LiveStatus | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/LiveStatusNotify; |
| /bilibili.broadcast.message.tv.Tv/MainRedDot | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/MainRedDotReply; |
| /bilibili.broadcast.message.tv.Tv/NotifyPop | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/NotifyPopReply; |
| /bilibili.broadcast.message.tv.Tv/OgvPayOrder | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/OgvPayOrderReply; |
| /bilibili.broadcast.message.tv.Tv/Proj | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/ProjReply; |
| /bilibili.broadcast.message.tv.Tv/ProjCore | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/ProjReply; |
| /bilibili.broadcast.message.tv.Tv/ProjLiveEvent | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/ProjLiveEventNotify; |
| /bilibili.broadcast.message.tv.Tv/Publicity | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/PublicityNotify; |
| /bilibili.broadcast.message.tv.Tv/ViewerNumMsg | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/LiveViewerMsgNotify; |
| /bilibili.broadcast.v1.Broadcast/Auth | Lcom/bapis/bilibili/broadcast/v1/AuthReq; | Lcom/bapis/bilibili/broadcast/v1/AuthResp; |
| /bilibili.broadcast.v1.Broadcast/Heartbeat | Lcom/bapis/bilibili/broadcast/v1/HeartbeatReq; | Lcom/bapis/bilibili/broadcast/v1/HeartbeatResp; |
| /bilibili.broadcast.v1.Broadcast/MessageAck | Lcom/bapis/bilibili/broadcast/v1/MessageAckReq; | Lcom/google/protobuf/Empty; |
| /bilibili.broadcast.v1.Broadcast/Subscribe | Lcom/bapis/bilibili/broadcast/v1/TargetPath; | Lcom/google/protobuf/Empty; |
| /bilibili.broadcast.v1.Broadcast/Unsubscribe | Lcom/bapis/bilibili/broadcast/v1/TargetPath; | Lcom/google/protobuf/Empty; |
| /bilibili.broadcast.v1.BroadcastRoom/Enter | Lcom/bapis/bilibili/broadcast/v1/RoomReq; | Lcom/bapis/bilibili/broadcast/v1/RoomResp; |
| /bilibili.broadcast.v1.BroadcastTunnel/CreateTunnel | Lcom/bapis/bilibili/broadcast/v1/BroadcastFrame; | Lcom/bapis/bilibili/broadcast/v1/BroadcastFrame; |
| /bilibili.broadcast.v1.Laser/WatchLogUploadEvent | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/v1/LaserLogUploadResp; |
| /bilibili.broadcast.v1.ModManager/WatchResource | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/v1/ModResourceResp; |
| /bilibili.broadcast.v1.Push/WatchMessage | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/v1/PushMessageResp; |
| /bilibili.broadcast.v2.Laser/WatchEvent | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/v2/LaserEventResp; |

```sh
node bin/bili-apis.mjs --edition official list --category notification --limit 10
node bin/bili-apis.mjs --edition official show "ID"
```
