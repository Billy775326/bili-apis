# 播放与连接

播放地址、播放器、在线状态和传输。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 11 条 HTTP 声明、20 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes17.dex:1026:GET | GET | https://app.bilibili.com/x/playurl/proj/activity | Query:access_key, Query:act_type, Query:playurl_type, Query:aid, Query:cid, Query:season_id, Query:ep_id, Query:room_id, Query:partition_id, Query:new_user, Query:player_scene, Query:ott_device | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/projection/internal/api/model/ProjectionOperationConfig;&gt;;&gt;; | not-tested |
| classes17.dex:1028:POST | POST | https://app.bilibili.com/x/playurl/bubble_submit | Field:code, Field:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/projection/internal/api/model/ProjectionRedDotSubmitResponse;&gt;;&gt;; | not-tested |
| classes17.dex:31012:POST | POST | https://api.bilibili.com/x/tv/stream/cmd | Field:aid, Field:cid, Field:command, Field:video_type, Field:epid, Field:season_id, Field:seek_ts, Field:ott_buvid, Field:extra, Field:access_key, Field:danmakuSwitchSave, Field:room_id, Field:device_info, Field:by_code, Field:screencast_event | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes17.dex:31116:GET | GET | https://api.bilibili.com/x/tv/proj_intercept | Query:access_key, Query:playurl_type, Query:aid, Query:cid, Query:season_id, Query:ep_id, Query:room_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/projection/internal/api/model/ProjectionInterceptInfo;&gt;;&gt;; | not-tested |
| classes17.dex:31118:POST | POST | https://api.bilibili.com/x/tv/projection/report | Field:event_type, Field:event_msg, Field:access_key, Field:video_type, Field:dlna | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes17.dex:31119:GET | GET | https://api.bilibili.com/x/tv/projection/guide_info | Query:android_ver, Query:yst_ver, Query:is_connected, Query:pre_device_brand, Query:pre_device_model, Query:pre_device_login_user_type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/projection/internal/api/model/ProjectionGuidInfo;&gt;;&gt;; | not-tested |
| classes17.dex:31120:GET | GET | https://api.bilibili.com/x/tv/playurl | Query:video_type, Query:protocol, Query:mobile_access_key, Query:is_proj, Query:playurl_type, Query:object_id, Query:cid, Query:qn, Query:is_h265, Query:is_dolby, Query:live_extra, Query:fnver, Query:fnval, Query:fourk, Query:sys_ver, Query:buvid, Query:access_key, Query:ogv_aid, Query:language | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/projection/internal/api/model/ProjectionPlayUrl;&gt;;&gt;; | not-tested |
| classes17.dex:31121:POST | POST | https://api.bilibili.com/x/tv/bifrost/report/edge | Field:access_key, Field:edge_device, Field:core_device | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes17.dex:31122:GET | GET | https://api.bilibili.com/x/tv/projection/devices | Query:access_key, Query:video_type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/projection/internal/api/CloudDevices;&gt;;&gt;; | not-tested |
| classes17.dex:31123:GET | GET | https://api.bilibili.com/x/tv/proj_code/scan | Header:Buvid, Query:access_key, Query:proj_code | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/projection/internal/api/CloudDevices$Device;&gt;;&gt;; | not-tested |
| classes30.dex:54111:GET | GET | https://app.bilibili.com/x/playurl/download/num | Query:access_key, Query:num | LlC0/a&lt;Ljava/lang/Void;&gt;; | not-tested |

## gRPC

请求/响应角色默认仍为静态候选；View/View 已有单独实现核对。表格不代表已建立连接或验证认证。

| 路由 | 请求类型候选 | 响应类型候选 | 线上抽查 |
| --- | --- | --- | --- |
| /bilibili.app.playeronline.v1.PlayerOnline/PlayerOnline | Lcom/bapis/bilibili/app/playeronline/v1/PlayerOnlineReq; | Lcom/bapis/bilibili/app/playeronline/v1/PlayerOnlineReply; | not-tested |
| /bilibili.app.playeronline.v1.PlayerOnline/PremiereInfo | Lcom/bapis/bilibili/app/playeronline/v1/PremiereInfoReq; | Lcom/bapis/bilibili/app/playeronline/v1/PremiereInfoReply; | not-tested |
| /bilibili.app.playeronline.v1.PlayerOnline/ReportWatch | Lcom/bapis/bilibili/app/playeronline/v1/ReportWatchReq; | Lcom/bapis/bilibili/app/playeronline/v1/NoReply; | not-tested |
| /bilibili.app.playerunite.v1.Player/PlayAddition | Lcom/bapis/bilibili/app/playerunite/v1/PlayAdditionReq; | Lcom/bapis/bilibili/app/playerunite/v1/PlayAdditionReply; | not-tested |
| /bilibili.app.playerunite.v1.Player/PlayHalfChannels | Lcom/bapis/bilibili/app/playerunite/v1/PlayHalfChannelsReq; | Lcom/bapis/bilibili/app/playerunite/v1/PlayHalfChannelsReply; | not-tested |
| /bilibili.app.playerunite.v1.Player/PlayQnEvent | Lcom/bapis/bilibili/app/playerunite/v1/PlayQnEventReq; | Lcom/bapis/bilibili/app/playerunite/v1/PlayQnEventReply; | not-tested |
| /bilibili.app.playerunite.v1.Player/PlayViewUnite | Lcom/bapis/bilibili/app/playerunite/v1/PlayViewUniteReq; | Lcom/bapis/bilibili/app/playerunite/v1/PlayViewUniteReply; | not-tested |
| /bilibili.app.playurl.v1.PlayURL/PlayConf | Lcom/bapis/bilibili/app/playurl/v1/PlayConfReq; | Lcom/bapis/bilibili/app/playurl/v1/PlayConfReply; | not-tested |
| /bilibili.app.playurl.v1.PlayURL/PlayConfEdit | Lcom/bapis/bilibili/app/playurl/v1/PlayConfEditReq; | Lcom/bapis/bilibili/app/playurl/v1/PlayConfEditReply; | not-tested |
| /bilibili.app.playurl.v1.PlayURL/PlayURL | Lcom/bapis/bilibili/app/playurl/v1/PlayURLReq; | Lcom/bapis/bilibili/app/playurl/v1/PlayURLReply; | not-tested |
| /bilibili.app.playurl.v1.PlayURL/PlayView | Lcom/bapis/bilibili/app/playurl/v1/PlayViewReq; | Lcom/bapis/bilibili/app/playurl/v1/PlayViewReply; | not-tested |
| /bilibili.app.playurl.v1.PlayURL/Project | Lcom/bapis/bilibili/app/playurl/v1/ProjectReq; | Lcom/bapis/bilibili/app/playurl/v1/ProjectReply; | not-tested |
| /bilibili.p2p.b3.tracker.v1.Register/GetPeerInfo | Lcom/bilibili/lib/p2p/GetPeerInfoRequest; | Lcom/bilibili/lib/p2p/GetPeerInfoResponse; | not-tested |
| /bilibili.p2p.b3.tracker.v1.Register/Heartbeat | Lcom/bilibili/lib/p2p/HeartbeatRequest; | Lcom/bilibili/lib/p2p/HeartbeatResponse; | not-tested |
| /bilibili.p2p.b3.tracker.v1.Register/Login | Lcom/bilibili/lib/p2p/LoginRequest; | Lcom/bilibili/lib/p2p/LoginResponse; | not-tested |
| /bilibili.p2p.b3.tracker.v1.Register/Logout | Lcom/bilibili/lib/p2p/LogoutRequest; | Lcom/bilibili/lib/p2p/LogoutResponse; | not-tested |
| /bilibili.p2p.b3.tracker.v1.Register/ReleasePeerInfo | Lcom/bilibili/lib/p2p/ReleasePeerInfoRequest; | Lcom/bilibili/lib/p2p/ReleasePeerInfoResponse; | not-tested |
| /bilibili.p2p.b3.tracker.v1.Register/Report | Lcom/bilibili/lib/p2p/ReportRequest; | Lcom/bilibili/lib/p2p/ReportResponse; | not-tested |
| /bilibili.p2p.b3.tracker.v1.Register/WatchConnect | Lcom/bilibili/lib/p2p/WatchConnectRequest; | Lcom/bilibili/lib/p2p/WatchConnectResponse; | not-tested |
| /bilibili.p2p.b3.tracker.v1.Register/WatchHotPush | Lcom/bilibili/lib/p2p/WatchHotPushRequest; | Lcom/bilibili/lib/p2p/WatchHotPushResponse; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category playback --limit 10
node bin/bili-apis.mjs show "ID"
```
