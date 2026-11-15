# 弹幕与字幕

<!-- android-edition:start -->
包名：`com.bilibili.app.in` · 渠道：Google Play · 版本：6.8.0（9180200）。

[全部版本](../../../../README.md) · [本包文档](../README.md) · [网页接口](../../../../../pc/README.md) · [基线元数据](../../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

视频弹幕、弹幕配置和字幕。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 27 条 HTTP 声明、8 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes11.dex:16046:GET | GET | https://api.bilibili.com/x/v2/dm/ad | QueryMap:(内容未知), Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/adcommon/data/model/DmAdvert;&gt;;&gt;; | not-tested |
| classes14.dex:2168:POST | POST | https://api.bilibili.com/x/v2/dm/post | Field:access_key, Field:type, Field:oid, Field:msg, Field:aid, Field:progress, Field:color, Field:fontsize, Field:pool, Field:mode, Field:rnd, Field:plat, Field:parent_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes14.dex:2169:POST | POST | https://api.bilibili.com/x/v2/dm/thumbup/add | Field:access_key, Field:oid, Field:dmid, Field:op | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes17.dex:33779:POST | POST | https://api.bilibili.com/x/v2/dm/post | Query:access_key, Query:aid, Query:oid, Query:spmid, Query:from_spmid, FieldMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/projection/internal/utils/ProjectionDanmakuSendHelper$DanmakuSendResponse;&gt;;&gt;; | not-tested |
| classes18.dex:45737:GET | GET | https://api.bilibili.com/x/v2/dm/thumbup/stats | Query:access_key, Query:oid, Query:ids | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes18.dex:45738:POST | POST | https://api.bilibili.com/x/v2/dm/thumbup/add | Field:access_key, Field:oid, Field:spmid, Field:from_spmid, Field:dmid, Field:op | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes18.dex:45761:GET | GET | https://api.bilibili.com/x/v2/dm/panel | Query:pid, Query:oid, Query:type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playerbizcommonv2/api/DanmakuColorfulPanelInfo;&gt;;&gt;; | not-tested |
| classes18.dex:61710:GET | GET | https://api.bilibili.com/x/v2/dm/panel | Query:pid, Query:oid, Query:type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playerbizcommon/api/DanmakuColorfulPanelInfo;&gt;;&gt;; | not-tested |
| classes21.dex:41815:GET | GET | https://api.bilibili.com/x/v2/dm/qoe/show | Query:access_key, Query:aid, Query:cid | Ljava/lang/Object; | not-tested |
| classes30.dex:4916:GET | GET | https://api.bilibili.com/x/v2/dm/command/panel | Query:access_key, Query:aid, Query:oid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/biliplayerv2/service/interact/core/command/CommandsPanel;&gt;;&gt;; | not-tested |
| classes30.dex:63179:POST | POST | https://api.bilibili.com/x/v2/dm/command/del | Query:access_key, Query:aid, Query:oid, Query:plat, Query:dmid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes30.dex:63180:POST | POST | https://api.bilibili.com/x/v2/dm/exposure/report | Query:from, Query:mid, Query:aid, Query:cid | LlC0/a&lt;Ljava/lang/Void;&gt;; | not-tested |
| classes30.dex:63181:POST | POST | https://api.bilibili.com/x/v2/dm/recall | Field:access_key, Field:cid, Field:dmid, Field:type | LlC0/a&lt;Ltv/danmaku/biliplayerv2/service/interact/core/api/InteractApiResponse;&gt;; | not-tested |
| classes30.dex:63182:POST | POST | https://api.bilibili.com/x/v2/dm/subtitle/report/v2/add | Field:cid, Field:aid, Field:subtitle_type, Field:subtitle_id, Field:tag_id, Field:reason, Field:content, Field:description, Field:row_id, Field:from, Field:to | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes30.dex:63183:POST | POST | https://api.bilibili.com/x/v2/dm/command/post | Query:access_key, Query:aid, Query:cid, Query:plat, Query:progress, Query:type, Query:data, Query:auto_create, Query:count_down | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/biliplayerv2/service/interact/biz/sender/ChronosDanmakuSender$CommandDanmakuSendResponse;&gt;;&gt;; | not-tested |
| classes30.dex:63184:POST | POST | https://api.bilibili.com/x/v2/dm/post2 | Field:access_key, Field:scene, Field:spmid, Field:from_spmid, Field:post_type, Field:text, Field:cmd | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/biliplayerv2/service/interact/biz/sender/ChronosDanmakuSender$CommandDanmakuSendResponse;&gt;;&gt;; | not-tested |
| classes30.dex:63926:POST | POST | https://api.bilibili.com/x/dm/filter/user/add | Field:access_key, Field:type, Field:filter | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes30.dex:63927:GET | GET | https://api.bilibili.com/x/dm/up/banned/users | Query:access_key, Query:aid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Ljava/lang/String;&gt;;&gt;;&gt;; | not-tested |
| classes30.dex:63928:POST | POST | https://api.bilibili.com/x/dm/report/cmd/add | Field:access_key, Field:cid, Field:spmid, Field:from_spmid, Field:dmid, Field:reason | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes30.dex:63929:POST | POST | https://api.bilibili.com/x/dm/filter/user/del | Field:access_key, Field:ids | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes30.dex:63930:GET | GET | https://api.bilibili.com/x/dm/filter/user | Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;LwQ1/d&lt;Ltv/danmaku/biliplayerv2/widget/function/danmaku/filter/UserKeywordItem;&gt;;&gt;;&gt;; | not-tested |
| classes30.dex:63931:POST | POST | https://api.bilibili.com/x/dm/report/add | Field:access_key, Field:cid, Field:spmid, Field:from_spmid, Field:dmid, Field:reason, Field:block, Field:action_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes30.dex:63932:POST | POST | https://api.bilibili.com/x/v2/dm/filter/up/black | Field:type, Field:oid, Field:dmid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes30.dex:63933:POST | POST | https://api.bilibili.com/x/dm/assist/del | Field:access_key, Field:cid, Field:dmids | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes30.dex:64502:POST | POST | https://api.bilibili.com/x/v2/dm/post | Query:access_key, Query:aid, Query:oid, Query:spmid, Query:from_spmid, FieldMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/biliplayerv2/service/interact/biz/sender/DanmakuSendResponse;&gt;;&gt;; | not-tested |
| classes30.dex:64503:POST | POST | https://api.bilibili.com/x/v2/dm/post2 | Field:access_key, Field:scene, Field:spmid, Field:from_spmid, Field:post_type, Field:text, Field:cmd, FieldMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/biliplayerv2/service/interact/biz/sender/DanmakuSendResponse;&gt;;&gt;; | not-tested |
| classes30.dex:64504:POST | POST | https://api.bilibili.com/x/v2/dm/subject/state/update | Field:access_key, Field:type, Field:aid, Field:state | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |

## gRPC

请求/响应角色默认仍为静态候选；View/View 已有单独实现核对。表格不代表已建立连接或验证认证。

| 路由 | 请求类型候选 | 响应类型候选 | 线上抽查 |
| --- | --- | --- | --- |
| /bilibili.community.service.dm.v1.DM/DmExpoReport | Lcom/bapis/bilibili/community/service/dm/v1/DmExpoReportReq; | Lcom/bapis/bilibili/community/service/dm/v1/DmExpoReportRes; | not-tested |
| /bilibili.community.service.dm.v1.DM/DmPlayerConfig | Lcom/bapis/bilibili/community/service/dm/v1/DmPlayerConfigReq; | Lcom/bapis/bilibili/community/service/dm/v1/Response; | not-tested |
| /bilibili.community.service.dm.v1.DM/DmSegCache | Lcom/bapis/bilibili/community/service/dm/v1/DmSegCacheReq; | Lcom/bapis/bilibili/community/service/dm/v1/DmSegMobileReply; | not-tested |
| /bilibili.community.service.dm.v1.DM/DmSegMobile | Lcom/bapis/bilibili/community/service/dm/v1/DmSegMobileReq; | Lcom/bapis/bilibili/community/service/dm/v1/DmSegMobileReply; | not-tested |
| /bilibili.community.service.dm.v1.DM/DmSegOtt | Lcom/bapis/bilibili/community/service/dm/v1/DmSegOttReq; | Lcom/bapis/bilibili/community/service/dm/v1/DmSegOttReply; | not-tested |
| /bilibili.community.service.dm.v1.DM/DmSegSDK | Lcom/bapis/bilibili/community/service/dm/v1/DmSegSDKReq; | Lcom/bapis/bilibili/community/service/dm/v1/DmSegSDKReply; | not-tested |
| /bilibili.community.service.dm.v1.DM/DmView | Lcom/bapis/bilibili/community/service/dm/v1/DmViewReq; | Lcom/bapis/bilibili/community/service/dm/v1/DmViewReply; | not-tested |
| /bilibili.subtitle.Subtitle/SubtitleView | Lcom/bapis/bilibili/subtitle/SubtitleViewReq; | Lcom/bapis/bilibili/subtitle/SubtitleViewReply; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category danmaku --limit 10
node bin/bili-apis.mjs show "ID"
```
