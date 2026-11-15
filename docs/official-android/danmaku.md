# 弹幕与字幕

视频弹幕、弹幕配置和字幕。分类根据路由、域名与声明类名称推断，未验证业务行为。

官方 Android 9.19.0：34 条 HTTP 声明、8 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。

[返回分类](README.md) · [与 Play 对比](comparison.md)

## HTTP

参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。

| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |
| --- | --- | --- | --- | --- |
| classes14.dex:28556:GET | GET | https://api.bilibili.com/x/v2/dm/thumbup/stats | Query:access_key, Query:oid, Query:ids | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:28557:POST | POST | https://api.bilibili.com/x/v2/dm/thumbup/add | Field:access_key, Field:oid, Field:spmid, Field:from_spmid, Field:dmid, Field:op | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes14.dex:54685:GET | GET | https://api.bilibili.com/x/v2/dm/panel | Query:pid, Query:oid, Query:type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playerbizcommonv2/api/DanmakuColorfulPanelInfo;&gt;;&gt;; |
| classes14.dex:55709:GET | GET | https://api.bilibili.com/x/v2/dm/panel | Query:pid, Query:oid, Query:type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playerbizcommon/api/DanmakuColorfulPanelInfo;&gt;;&gt;; |
| classes14.dex:58904:POST | POST | https://api.bilibili.com/x/dm/filter/user/add | Field:access_key, Field:type, Field:filter | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:58905:POST | POST | https://api.bilibili.com/x/dm/filter/user/add | Field:access_key, Field:type, Field:filter, Field:comment | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:58906:POST | POST | https://api.bilibili.com/x/dm/assist/banned | Field:access_key, Field:cid, Field:dmids | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:58907:POST | POST | https://api.bilibili.com/x/dm/filter/user/add2 | Field:access_key, Field:type, Field:filters, Field:filters | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Ltv/danmaku/biliplayerv2/widget/function/danmaku/filter/UserKeywordItem;&gt;;&gt;;&gt;; |
| classes14.dex:58908:GET | GET | https://api.bilibili.com/x/dm/up/banned/users | Query:access_key, Query:aid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Ljava/lang/String;&gt;;&gt;;&gt;; |
| classes14.dex:58909:POST | POST | https://api.bilibili.com/x/dm/report/cmd/add | Field:access_key, Field:cid, Field:spmid, Field:from_spmid, Field:dmid, Field:reason | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:58910:POST | POST | https://api.bilibili.com/x/dm/filter/user/del | Field:access_key, Field:ids | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:58911:GET | GET | https://api.bilibili.com/x/dm/filter/user | Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lwfj&lt;Ltv/danmaku/biliplayerv2/widget/function/danmaku/filter/UserKeywordItem;&gt;;&gt;;&gt;; |
| classes14.dex:58912:POST | POST | https://api.bilibili.com/x/dm/report/add | Field:access_key, Field:cid, Field:spmid, Field:from_spmid, Field:dmid, Field:reason, Field:block, Field:action_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:58913:POST | POST | https://api.bilibili.com/x/v2/dm/subtitle/report/add | Field:access_key, Field:oid, Field:subtitle_id, Field:tid, Field:from, Field:to, Field:content | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:58914:POST | POST | https://api.bilibili.com/x/dm/up/banned/del | Field:access_key, Field:aid, Field:hashes | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:58915:POST | POST | https://api.bilibili.com/x/v2/dm/filter/up/black | Field:type, Field:oid, Field:dmid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:58916:POST | POST | https://api.bilibili.com/x/dm/assist/del | Field:access_key, Field:cid, Field:dmids | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes15.dex:34095:GET | GET | https://api.bilibili.com/x/v2/dm/qoe/show | Query:access_key, Query:aid, Query:cid | Ljava/lang/Object; |
| classes28.dex:11373:POST | POST | https://api.bilibili.com/x/v2/dm/post | Query:access_key, Query:aid, Query:oid, Query:spmid, Query:from_spmid, FieldMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/projection/internal/utils/ProjectionDanmakuSendHelper$DanmakuSendResponse;&gt;;&gt;; |
| classes28.dex:11374:POST | POST | https://api.bilibili.com/x/v2/dm/subject/state/update | Field:access_key, Field:type, Field:aid, Field:state | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes28.dex:24128:POST | POST | https://api.bilibili.com/x/v2/dm/post | Query:access_key, Query:aid, Query:oid, Query:spmid, Query:from_spmid, FieldMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/biliplayerv2/service/interact/biz/sender/DanmakuSendResponse;&gt;;&gt;; |
| classes28.dex:24129:POST | POST | https://api.bilibili.com/x/v2/dm/post2 | Field:access_key, Field:scene, Field:spmid, Field:from_spmid, Field:post_type, Field:text, Field:cmd, FieldMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/biliplayerv2/service/interact/biz/sender/DanmakuSendResponse;&gt;;&gt;; |
| classes28.dex:24130:POST | POST | https://api.bilibili.com/x/v2/dm/subject/state/update | Field:access_key, Field:type, Field:aid, Field:state | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes28.dex:52563:POST | POST | https://api.bilibili.com/x/v2/dm/command/del | Query:access_key, Query:aid, Query:oid, Query:plat, Query:dmid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes28.dex:52564:POST | POST | https://api.bilibili.com/x/v2/dm/exposure/report | Query:from, Query:mid, Query:aid, Query:cid | Lcom/bilibili/okretro/call/BiliCall&lt;Ljava/lang/Void;&gt;; |
| classes28.dex:52565:GET | GET | https://api.bilibili.com/x/v2/dm/command/panel | Query:access_key, Query:aid, Query:oid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/biliplayerv2/service/interact/core/command/CommandsPanel;&gt;;&gt;; |
| classes28.dex:52566:POST | POST | https://api.bilibili.com/x/v2/dm/recall | Field:access_key, Field:cid, Field:dmid, Field:type | Lcom/bilibili/okretro/call/BiliCall&lt;Ltv/danmaku/biliplayerv2/service/interact/core/api/InteractApiResponse;&gt;; |
| classes28.dex:52567:POST | POST | https://api.bilibili.com/x/v2/dm/subtitle/report/v2/add | Field:cid, Field:aid, Field:subtitle_type, Field:subtitle_id, Field:tag_id, Field:reason, Field:content, Field:description, Field:row_id, Field:from, Field:to | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes28.dex:52568:POST | POST | https://api.bilibili.com/x/v2/dm/command/post | Query:access_key, Query:aid, Query:cid, Query:plat, Query:progress, Query:type, Query:data, Query:auto_create, Query:count_down | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/biliplayerv2/service/interact/biz/sender/ChronosDanmakuSender$CommandDanmakuSendResponse;&gt;;&gt;; |
| classes28.dex:52569:POST | POST | https://api.bilibili.com/x/v2/dm/post2 | Field:access_key, Field:scene, Field:spmid, Field:from_spmid, Field:post_type, Field:text, Field:cmd | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/biliplayerv2/service/interact/biz/sender/ChronosDanmakuSender$CommandDanmakuSendResponse;&gt;;&gt;; |
| classes28.dex:63461:GET | GET | https://api.bilibili.com/x/v2/dm/command/panel | Query:access_key, Query:aid, Query:oid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/biliplayerv2/service/interact/core/command/CommandsPanel;&gt;;&gt;; |
| classes36.dex:49877:GET | GET | https://api.bilibili.com/x/v2/dm/ad | QueryMap:(内容未知), Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/adcommon/data/model/DmAdvert;&gt;;&gt;; |
| classes9.dex:46240:POST | POST | https://api.bilibili.com/x/v2/dm/thumbup/add | Field:access_key, Field:oid, Field:dmid, Field:op | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes9.dex:46241:POST | POST | https://api.bilibili.com/x/v2/dm/post | Field:access_key, Field:type, Field:oid, Field:msg, Field:aid, Field:progress, Field:color, Field:fontsize, Field:pool, Field:mode, Field:rnd, Field:plat, Field:parent_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |

## gRPC

请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。

| 路由 | 请求类型候选 | 响应类型候选 |
| --- | --- | --- |
| /bilibili.community.service.dm.v1.DM/DmExpoReport | Lcom/bapis/bilibili/community/service/dm/v1/DmExpoReportReq; | Lcom/bapis/bilibili/community/service/dm/v1/DmExpoReportRes; |
| /bilibili.community.service.dm.v1.DM/DmPlayerConfig | Lcom/bapis/bilibili/community/service/dm/v1/DmPlayerConfigReq; | Lcom/bapis/bilibili/community/service/dm/v1/Response; |
| /bilibili.community.service.dm.v1.DM/DmSegCache | Lcom/bapis/bilibili/community/service/dm/v1/DmSegCacheReq; | Lcom/bapis/bilibili/community/service/dm/v1/DmSegMobileReply; |
| /bilibili.community.service.dm.v1.DM/DmSegMobile | Lcom/bapis/bilibili/community/service/dm/v1/DmSegMobileReq; | Lcom/bapis/bilibili/community/service/dm/v1/DmSegMobileReply; |
| /bilibili.community.service.dm.v1.DM/DmSegOtt | Lcom/bapis/bilibili/community/service/dm/v1/DmSegOttReq; | Lcom/bapis/bilibili/community/service/dm/v1/DmSegOttReply; |
| /bilibili.community.service.dm.v1.DM/DmSegSDK | Lcom/bapis/bilibili/community/service/dm/v1/DmSegSDKReq; | Lcom/bapis/bilibili/community/service/dm/v1/DmSegSDKReply; |
| /bilibili.community.service.dm.v1.DM/DmView | Lcom/bapis/bilibili/community/service/dm/v1/DmViewReq; | Lcom/bapis/bilibili/community/service/dm/v1/DmViewReply; |
| /bilibili.subtitle.Subtitle/SubtitleView | Lcom/bapis/bilibili/subtitle/SubtitleViewReq; | Lcom/bapis/bilibili/subtitle/SubtitleViewReply; |

```sh
node bin/bili-apis.mjs --edition official list --category danmaku --limit 10
node bin/bili-apis.mjs --edition official show "ID"
```
