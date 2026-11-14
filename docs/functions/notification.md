# 通知与广播

推送、广播连接和消息通知。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 23 条 HTTP 声明、37 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes12.dex:45911:POST | POST | https://api.bilibili.com/x/v1/tunnel/notify/close | Query:access_key, Query:oid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes14.dex:33419:POST | POST | https://api.bilibili.com/x/msgfeed/notice | Field:id, Field:tp, Field:notice_state | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes15.dex:20414:GET | GET | https://api.bilibili.com/x/push/setting/get2 | Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/preferences/api/PushSettingInfo;&gt;;&gt;; | not-tested |
| classes15.dex:20415:POST | POST | https://api.bilibili.com/x/push/setting/set | Query:access_key, Query:type, Query:value | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes15.dex:31787:GET | GET | https://line3-h5-mobile-api.biligame.com/game/center/h5/game/notice | Query:game_base_id | LlC0/a&lt;Lcom/bilibili/biligame/api/BiligameApiResponse&lt;Ljava/util/List&lt;Lcom/bilibili/biligame/api/NoticeInfo;&gt;;&gt;;&gt;; | not-tested |
| classes15.dex:31794:GET | GET | https://line3-h5-mobile-api.biligame.com/game/center/h5/detail/pop/notice | Query:game_base_id | LlC0/a&lt;Lcom/bilibili/biligame/api/BiligameApiResponse&lt;Lcom/bilibili/biligame/api/bean/gamedetail/GameDetailPopNotice;&gt;;&gt;; | not-tested |
| classes15.dex:31835:GET | GET | https://line3-h5-mobile-api.biligame.com/game/center/h5/game/notice | Query:game_base_id | Lqm1/s&lt;Lcom/bilibili/biligame/api/BiligameApiResponse&lt;Ljava/util/List&lt;Lcom/bilibili/biligame/api/NoticeInfo;&gt;;&gt;;&gt;; | not-tested |
| classes17.dex:34508:POST | POST | https://api.bilibili.com/x/push/token | FieldMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes17.dex:34509:POST | POST | https://api.bilibili.com/x/push/user/isBadgeNoDisturb | FieldMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/push/DisturbInfo;&gt;;&gt;; | not-tested |
| classes17.dex:34510:POST | POST | https://api.bilibili.com/x/push/callback/click | FieldMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes17.dex:34511:POST | POST | https://api.bilibili.com/x/push/callback/fcm | FieldMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes18.dex:32907:POST | POST | https://api.bilibili.com/x/member/v2/notice/close | Query:access_key, Query:uuid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes18.dex:32908:GET | GET | https://api.bilibili.com/x/member/v2/notice | Query:access_key, Query:uuid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/components/AlertMessage;&gt;;&gt;; | not-tested |
| classes18.dex:33355:GET | GET | https://app.bilibili.com/x/v2/notice?plat=0 | Query:channel, Query:type, Query:ver | LlC0/a&lt;Lcom/bilibili/pegasus/components/BiliNotice;&gt;; | not-tested |
| classes18.dex:33889:GET | GET | https://app.bilibili.com/x/v2/notice/package | Query:model | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/components/HDApkInfo;&gt;;&gt;; | not-tested |
| classes20.dex:24747:POST | POST | http://api.bilibili.com/pgc/freya/room/modify/notice | Field:room_id, Field:content | Ljava/lang/Object; | not-tested |
| classes30.dex:21506:GET | GET | https://api.bilibili.com/x/push/broadcast/config |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/push/innerpush/model/InnerPushConfig;&gt;;&gt;; | not-tested |
| classes30.dex:21507:GET | GET | https://api.bilibili.com/x/push/broadcast/display | Query:scene, Query:msgs | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/push/innerpush/model/InnerPushReplayBody;&gt;;&gt;; | not-tested |
| classes30.dex:40167:POST | POST | https://api.bilibili.com/x/push/event/report | Query:event | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/google/protobuf/Any;&gt;;&gt;; | not-tested |
| classes30.dex:40168:POST | POST | https://api.bilibili.com/x/push/popup/report | Query:entrance, Query:system, Query:system_popup | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/google/protobuf/Any;&gt;;&gt;; | not-tested |
| classes30.dex:40169:GET | GET | https://api.bilibili.com/x/push/popup/setting | Query:entrance, Query:system, Query:spmid, Query:system_popup, Query:device_brand, Query:os_version | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/push/pushsetting/model/PushCallBackInfo;&gt;;&gt;; | not-tested |
| classes30.dex:40170:POST | POST | https://api.bilibili.com/x/push/setting/set | Query:access_key, Query:type, Query:value | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes30.dex:40171:POST | POST | https://api.bilibili.com/x/push/settings/set | Query:replace_types, Query:value | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/google/protobuf/Any;&gt;;&gt;; | not-tested |

## gRPC

请求/响应角色默认仍为静态候选；View/View 已有单独实现核对。表格不代表已建立连接或验证认证。

| 路由 | 请求类型候选 | 响应类型候选 | 线上抽查 |
| --- | --- | --- | --- |
| /bilibili.broadcast.message.account.Account/AccountNotify | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/account/AccountNotifyReply; | not-tested |
| /bilibili.broadcast.message.archive.VideoUp/VideoData | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/archive/VideoDataReply; | not-tested |
| /bilibili.broadcast.message.bgroup.BGroup/AppEventStream | Lcom/bapis/bilibili/broadcast/message/bgroup/AppEventMessage; | Lcom/google/protobuf/Empty; | not-tested |
| /bilibili.broadcast.message.dialing.DialingTask/DialingTask | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/dialing/DialingTaskMessage; | not-tested |
| /bilibili.broadcast.message.main.NativePage/WatchNotify | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/main/NativePageEvent; | not-tested |
| /bilibili.broadcast.message.main.Resource/TopActivity | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/main/TopActivityReply; | not-tested |
| /bilibili.broadcast.message.main.Search/ChatResultPush | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/main/ChatResult; | not-tested |
| /bilibili.broadcast.message.main.Search/ChatResultPushV2 | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/main/ChatResultV2; | not-tested |
| /bilibili.broadcast.message.push.PushUpStream/PushUpStream | Lcom/bapis/bilibili/broadcast/message/push/UpStreamMessage; | Lcom/google/protobuf/Empty; | not-tested |
| /bilibili.broadcast.message.search.Search/SearchGeneratorPush | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/search/SearchGeneratorResult; | not-tested |
| /bilibili.broadcast.message.tv.Tv/Account | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/AccountNotify; | not-tested |
| /bilibili.broadcast.message.tv.Tv/CommonPush | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/CommonPushNotify; | not-tested |
| /bilibili.broadcast.message.tv.Tv/Esports | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/EsportsNotify; | not-tested |
| /bilibili.broadcast.message.tv.Tv/FeedClientSmart | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/FeedClientSmartNotify; | not-tested |
| /bilibili.broadcast.message.tv.Tv/LiveBottom | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/LiveBottomConfNotify; | not-tested |
| /bilibili.broadcast.message.tv.Tv/LiveCommonMsg | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/LiveCommonNotify; | not-tested |
| /bilibili.broadcast.message.tv.Tv/LiveSkip | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/LiveSkipNotify; | not-tested |
| /bilibili.broadcast.message.tv.Tv/LiveStatus | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/LiveStatusNotify; | not-tested |
| /bilibili.broadcast.message.tv.Tv/MainRedDot | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/MainRedDotReply; | not-tested |
| /bilibili.broadcast.message.tv.Tv/NotifyPop | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/NotifyPopReply; | not-tested |
| /bilibili.broadcast.message.tv.Tv/OgvPayOrder | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/OgvPayOrderReply; | not-tested |
| /bilibili.broadcast.message.tv.Tv/Proj | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/ProjReply; | not-tested |
| /bilibili.broadcast.message.tv.Tv/ProjCore | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/ProjReply; | not-tested |
| /bilibili.broadcast.message.tv.Tv/ProjLiveEvent | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/ProjLiveEventNotify; | not-tested |
| /bilibili.broadcast.message.tv.Tv/Publicity | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/PublicityNotify; | not-tested |
| /bilibili.broadcast.message.tv.Tv/ViewerNumMsg | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/tv/LiveViewerMsgNotify; | not-tested |
| /bilibili.broadcast.v1.Broadcast/Auth | Lcom/bapis/bilibili/broadcast/v1/AuthReq; | Lcom/bapis/bilibili/broadcast/v1/AuthResp; | not-tested |
| /bilibili.broadcast.v1.Broadcast/Heartbeat | Lcom/bapis/bilibili/broadcast/v1/HeartbeatReq; | Lcom/bapis/bilibili/broadcast/v1/HeartbeatResp; | not-tested |
| /bilibili.broadcast.v1.Broadcast/MessageAck | Lcom/bapis/bilibili/broadcast/v1/MessageAckReq; | Lcom/google/protobuf/Empty; | not-tested |
| /bilibili.broadcast.v1.Broadcast/Subscribe | Lcom/bapis/bilibili/broadcast/v1/TargetPath; | Lcom/google/protobuf/Empty; | not-tested |
| /bilibili.broadcast.v1.Broadcast/Unsubscribe | Lcom/bapis/bilibili/broadcast/v1/TargetPath; | Lcom/google/protobuf/Empty; | not-tested |
| /bilibili.broadcast.v1.BroadcastRoom/Enter | Lcom/bapis/bilibili/broadcast/v1/RoomReq; | Lcom/bapis/bilibili/broadcast/v1/RoomResp; | not-tested |
| /bilibili.broadcast.v1.BroadcastTunnel/CreateTunnel | Lcom/bapis/bilibili/broadcast/v1/BroadcastFrame; | Lcom/bapis/bilibili/broadcast/v1/BroadcastFrame; | not-tested |
| /bilibili.broadcast.v1.Laser/WatchLogUploadEvent | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/v1/LaserLogUploadResp; | not-tested |
| /bilibili.broadcast.v1.ModManager/WatchResource | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/v1/ModResourceResp; | not-tested |
| /bilibili.broadcast.v1.Push/WatchMessage | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/v1/PushMessageResp; | not-tested |
| /bilibili.broadcast.v2.Laser/WatchEvent | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/v2/LaserEventResp; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category notification --limit 10
node bin/bili-apis.mjs show "ID"
```
