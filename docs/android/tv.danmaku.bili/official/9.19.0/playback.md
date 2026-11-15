# 播放与连接

<!-- android-edition:start -->
包名：`tv.danmaku.bili` · 渠道：Official Android 64-bit · 版本：9.19.0（9190400）。

[全部版本](../../../README.md) · [本包文档](README.md) · [网页接口](../../../../pc/README.md) · [基线元数据](../../../../../catalog/android/tv.danmaku.bili/official/9.19.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

播放地址、播放器、在线状态和传输。分类根据路由、域名与声明类名称推断，未验证业务行为。

官方 Android 9.19.0：13 条 HTTP 声明、20 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。

[返回分类](README.md) · [与 Play 对比](comparison.md)

## HTTP

参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。

| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |
| --- | --- | --- | --- | --- |
| classes12.dex:13571:GET | GET | https://api.bilibili.com/x/tv/proj_intercept | Query:access_key, Query:playurl_type, Query:aid, Query:cid, Query:season_id, Query:ep_id, Query:room_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/projection/internal/api/model/ProjectionInterceptInfo;&gt;;&gt;; |
| classes12.dex:13573:POST | POST | https://api.bilibili.com/x/tv/projection/report | Field:event_type, Field:event_msg, Field:access_key, Field:video_type, Field:dlna | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes12.dex:13574:GET | GET | https://api.bilibili.com/x/tv/projection/guide_info | Query:android_ver, Query:yst_ver, Query:is_connected, Query:pre_device_brand, Query:pre_device_model, Query:pre_device_login_user_type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/projection/internal/api/model/ProjectionGuidInfo;&gt;;&gt;; |
| classes12.dex:13575:GET | GET | https://api.bilibili.com/x/tv/playurl | Query:video_type, Query:protocol, Query:mobile_access_key, Query:is_proj, Query:playurl_type, Query:object_id, Query:cid, Query:qn, Query:is_h265, Query:is_dolby, Query:live_extra, Query:fnver, Query:fnval, Query:fourk, Query:sys_ver, Query:buvid, Query:access_key, Query:ogv_aid, Query:language | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/projection/internal/api/model/ProjectionPlayUrl;&gt;;&gt;; |
| classes12.dex:13576:POST | POST | https://api.bilibili.com/x/tv/bifrost/report/edge | Field:access_key, Field:edge_device, Field:core_device | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes12.dex:13577:GET | GET | https://api.bilibili.com/x/tv/proj_code/scan | Header:Buvid, Query:access_key, Query:proj_code | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/projection/internal/api/CloudDevices$Device;&gt;;&gt;; |
| classes12.dex:13578:GET | GET | https://api.bilibili.com/x/tv/projection/devices | Query:access_key, Query:video_type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/projection/internal/api/CloudDevices;&gt;;&gt;; |
| classes12.dex:30193:GET | GET | https://api.bilibili.com/x/tv/vip/order/bpay_mobi/info | Query:order_no, Query:app_id, Query:payment_scenario | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/call/rxjava/RxGeneralResponse&lt;Lcom/bilibili/module/vip/mall/VipPayResultInfo;&gt;;&gt;; |
| classes12.dex:30195:POST | POST | https://api.bilibili.com/x/tv/vip/order/bpay_mobi/create?platform=android | Query:accessKey, Query:with_fail_dialog, FieldMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes12.dex:49758:GET | GET | https://app.bilibili.com/x/playurl/proj/activity | Query:access_key, Query:act_type, Query:playurl_type, Query:aid, Query:cid, Query:season_id, Query:ep_id, Query:room_id, Query:partition_id, Query:new_user, Query:player_scene, Query:ott_device | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/projection/internal/api/model/ProjectionOperationConfig;&gt;;&gt;; |
| classes12.dex:56958:POST | POST | https://api.bilibili.com/x/tv/stream/cmd | Field:aid, Field:cid, Field:command, Field:video_type, Field:epid, Field:season_id, Field:seek_ts, Field:ott_buvid, Field:extra, Field:access_key, Field:danmakuSwitchSave, Field:room_id, Field:device_info, Field:by_code, Field:screencast_event | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes28.dex:5706:GET | GET | https://app.bilibili.com/x/playurl/download/num | Query:access_key, Query:num | Lcom/bilibili/okretro/call/BiliCall&lt;Ljava/lang/Void;&gt;; |
| classes6.dex:57172:POST | POST | https://app.bilibili.com/x/playurl/bubble_submit | Field:code, Field:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/projection/internal/api/model/ProjectionRedDotSubmitResponse;&gt;;&gt;; |

## gRPC

请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。

| 路由 | 请求类型候选 | 响应类型候选 |
| --- | --- | --- |
| /bilibili.app.playeronline.v1.PlayerOnline/PlayerOnline | Lcom/bapis/bilibili/app/playeronline/v1/PlayerOnlineReq; | Lcom/bapis/bilibili/app/playeronline/v1/PlayerOnlineReply; |
| /bilibili.app.playeronline.v1.PlayerOnline/PremiereInfo | Lcom/bapis/bilibili/app/playeronline/v1/PremiereInfoReq; | Lcom/bapis/bilibili/app/playeronline/v1/PremiereInfoReply; |
| /bilibili.app.playeronline.v1.PlayerOnline/ReportWatch | Lcom/bapis/bilibili/app/playeronline/v1/ReportWatchReq; | Lcom/bapis/bilibili/app/playeronline/v1/NoReply; |
| /bilibili.app.playerunite.v1.Player/PlayAddition | Lcom/bapis/bilibili/app/playerunite/v1/PlayAdditionReq; | Lcom/bapis/bilibili/app/playerunite/v1/PlayAdditionReply; |
| /bilibili.app.playerunite.v1.Player/PlayHalfChannels | Lcom/bapis/bilibili/app/playerunite/v1/PlayHalfChannelsReq; | Lcom/bapis/bilibili/app/playerunite/v1/PlayHalfChannelsReply; |
| /bilibili.app.playerunite.v1.Player/PlayQnEvent | Lcom/bapis/bilibili/app/playerunite/v1/PlayQnEventReq; | Lcom/bapis/bilibili/app/playerunite/v1/PlayQnEventReply; |
| /bilibili.app.playerunite.v1.Player/PlayViewUnite | Lcom/bapis/bilibili/app/playerunite/v1/PlayViewUniteReq; | Lcom/bapis/bilibili/app/playerunite/v1/PlayViewUniteReply; |
| /bilibili.app.playurl.v1.PlayURL/PlayConf | Lcom/bapis/bilibili/app/playurl/v1/PlayConfReq; | Lcom/bapis/bilibili/app/playurl/v1/PlayConfReply; |
| /bilibili.app.playurl.v1.PlayURL/PlayConfEdit | Lcom/bapis/bilibili/app/playurl/v1/PlayConfEditReq; | Lcom/bapis/bilibili/app/playurl/v1/PlayConfEditReply; |
| /bilibili.app.playurl.v1.PlayURL/PlayURL | Lcom/bapis/bilibili/app/playurl/v1/PlayURLReq; | Lcom/bapis/bilibili/app/playurl/v1/PlayURLReply; |
| /bilibili.app.playurl.v1.PlayURL/PlayView | Lcom/bapis/bilibili/app/playurl/v1/PlayViewReq; | Lcom/bapis/bilibili/app/playurl/v1/PlayViewReply; |
| /bilibili.app.playurl.v1.PlayURL/Project | Lcom/bapis/bilibili/app/playurl/v1/ProjectReq; | Lcom/bapis/bilibili/app/playurl/v1/ProjectReply; |
| /bilibili.p2p.b3.tracker.v1.Register/GetPeerInfo | Lcom/bilibili/lib/p2p/GetPeerInfoRequest; | Lcom/bilibili/lib/p2p/GetPeerInfoResponse; |
| /bilibili.p2p.b3.tracker.v1.Register/Heartbeat | Lcom/bilibili/lib/p2p/HeartbeatRequest; | Lcom/bilibili/lib/p2p/HeartbeatResponse; |
| /bilibili.p2p.b3.tracker.v1.Register/Login | Lcom/bilibili/lib/p2p/LoginRequest; | Lcom/bilibili/lib/p2p/LoginResponse; |
| /bilibili.p2p.b3.tracker.v1.Register/Logout | Lcom/bilibili/lib/p2p/LogoutRequest; | Lcom/bilibili/lib/p2p/LogoutResponse; |
| /bilibili.p2p.b3.tracker.v1.Register/ReleasePeerInfo | Lcom/bilibili/lib/p2p/ReleasePeerInfoRequest; | Lcom/bilibili/lib/p2p/ReleasePeerInfoResponse; |
| /bilibili.p2p.b3.tracker.v1.Register/Report | Lcom/bilibili/lib/p2p/ReportRequest; | Lcom/bilibili/lib/p2p/ReportResponse; |
| /bilibili.p2p.b3.tracker.v1.Register/WatchConnect | Lcom/bilibili/lib/p2p/WatchConnectRequest; | Lcom/bilibili/lib/p2p/WatchConnectResponse; |
| /bilibili.p2p.b3.tracker.v1.Register/WatchHotPush | Lcom/bilibili/lib/p2p/WatchHotPushRequest; | Lcom/bilibili/lib/p2p/WatchHotPushResponse; |

```sh
node bin/bili-apis.mjs --edition official list --category playback --limit 10
node bin/bili-apis.mjs --edition official show "ID"
```
