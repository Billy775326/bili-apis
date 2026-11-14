# 待细分

现有名称不足以可靠归类的声明。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 33 条 HTTP 声明、12 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes10.dex:63894:POST | POST | https://live-open.biliapi.com/v1/InteractGateway/LeaveChannel | Body:(内容未知), HeaderMap:(内容未知) | Ljava/lang/Object; | not-tested |
| classes10.dex:63895:POST | POST | https://live-open.biliapi.com/v1/InteractGateway/JoinChannel | Body:(内容未知), HeaderMap:(内容未知) | Ljava/lang/Object; | not-tested |
| classes10.dex:63896:POST | POST | https://live-open.biliapi.com/v1/InteractGateway/CreateChannel | Body:(内容未知), HeaderMap:(内容未知) | Ljava/lang/Object; | not-tested |
| classes11.dex:34313:POST | POST | 动态 @Url | Url:(内容未知), HeaderMap:(内容未知), Body:(内容未知) | LlC0/a&lt;Lokhttp3/ResponseBody;&gt;; | not-tested |
| classes11.dex:34314:POST | POST | 动态 @Url | Url:(内容未知), HeaderMap:(内容未知), Body:(内容未知) | LlC0/a&lt;Lokhttp3/ResponseBody;&gt;; | not-tested |
| classes12.dex:5969:POST | POST | 动态 @Url | Body:(内容未知), Url:(内容未知) | LlC0/a&lt;Lcom/bilibili/bilipay/api/PaymentResponse&lt;Lcom/google/gson/j;&gt;;&gt;; | not-tested |
| classes13.dex:59053:POST | POST | 动态 @Url | Url:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bililive/realtime/forc/timeoffset/LiveRealTimeOffsetBean;&gt;;&gt;; | not-tested |
| classes13.dex:65345:POST | POST | 动态 @Url | Url:(内容未知), Field:sid, Field:csrf | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes14.dex:43217:OPTIONS | OPTIONS | 动态 @Url | Url:(内容未知), HeaderMap:(内容未知) | LlC0/a&lt;Lokhttp3/ResponseBody;&gt;; | not-tested |
| classes14.dex:43218:GET | GET | 动态 @Url | Url:(内容未知), HeaderMap:(内容未知) | LlC0/a&lt;Lokhttp3/ResponseBody;&gt;; | not-tested |
| classes14.dex:43219:POST | POST | 动态 @Url | Url:(内容未知), HeaderMap:(内容未知), Body:(内容未知) | LlC0/a&lt;Lokhttp3/ResponseBody;&gt;; | not-tested |
| classes18.dex:64968:GET | GET | /appindex/follow_index_fall?platform=android | Query:cursor, Query:area | Lqm1/s&lt;Ljava/util/List&lt;Lcom/bilibili/ogv/misc/editorrecommend/BangumiRecommend;&gt;;&gt;; | not-tested |
| classes18.dex:64969:GET | GET | /api/fall?platform=android&pagesize=10 | Query:cursor, Query:wid | Lqm1/s&lt;Ljava/util/List&lt;Lcom/bilibili/ogv/misc/editorrecommend/BangumiRecommend;&gt;;&gt;; | not-tested |
| classes20.dex:3106:GET | GET | https://member.bilibili.com/x/app/cooperate/v3/view | Query:access_key, Query:id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/studio/videoeditor/capturev3/followtogether/FtMaterialAidCidBeanV3;&gt;;&gt;; | not-tested |
| classes20.dex:29794:POST | POST | https://api.bilibili.com/x/v1/contract/add_message | Field:aid, Field:up_mid, Field:source, Field:scene, Field:content, Field:is_add_reply | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/upguardian/api/UpGuardianAddMessage;&gt;;&gt;; | not-tested |
| classes20.dex:29795:POST | POST | https://api.bilibili.com/x/v1/contract/expose | Field:aid, Field:cid, Field:action, Field:up_mid, Field:source, Field:scene, Field:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes20.dex:29796:GET | GET | https://api.bilibili.com/x/v1/contract/layer_info | Query:up_mid, Query:source, Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/upguardian/api/UpGuardianLayerInfo;&gt;;&gt;; | not-tested |
| classes20.dex:30151:GET | GET | https://api.bilibili.com/x/laser/app/query | Query:access_key, Query:source_type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/userfeedback/laserreport/LogReportService$LogDate;&gt;;&gt;; | not-tested |
| classes20.dex:30152:POST | POST | https://api.bilibili.com/x/laser/app/update | Field:platform, Field:access_key, Field:task_state, Field:reason | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes22.dex:63721:POST | POST | 动态 @Url | Url:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/studio/comm/api/bean/UpperRealTimeOffsetBean;&gt;;&gt;; | not-tested |
| classes30.dex:30564:GET | GET | https://api.bilibili.com/x/member/web/content/check | Query:content, Query:scene | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/api/bean/AuthContentCheckBean;&gt;;&gt;; | not-tested |
| classes30.dex:30567:GET | GET | https://api.bilibili.com/x/member/faceid/realname/conf | Query:tmp_code | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/api/bean/AuthConfBean;&gt;;&gt;; | not-tested |
| classes30.dex:30571:GET | GET | https://api.bilibili.com/x/member/faceid/realname/override/summary | Query:request_id, Query:override_mid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/api/bean/OverrideSummary;&gt;;&gt;; | not-tested |
| classes30.dex:30573:POST | POST | https://api.bilibili.com/x/member/faceid/realname/override | Query:request_id, Query:override_mid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes30.dex:31364:GET | GET | https://app.bilibili.com/x/v2/show/widget/up |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/appwidget/upcard/data/UpCardWidgetData;&gt;;&gt;; | not-tested |
| classes30.dex:54219:GET | GET | https://api.bilibili.com/x/pandora/popup | Query:access_key, Query:business, Query:spmid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/pandora/PandoraBean;&gt;;&gt;; | not-tested |
| classes30.dex:56230:POST | POST | https://club.bilibili.com/api/add.skin.order.do | Query:access_key, Field:id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/theme/api/OrderResult;&gt;;&gt;; | not-tested |
| classes30.dex:56231:POST | POST | https://club.bilibili.com/api/cancel.skin.order.do | Query:access_key, Field:id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/theme/api/OrderResult;&gt;;&gt;; | not-tested |
| classes30.dex:56232:GET | GET | https://club.bilibili.com/api/query.skin.list.do | Query:access_key | LlC0/a&lt;Ltv/danmaku/bili/ui/theme/api/BiliSkinList;&gt;; | not-tested |
| classes35.dex:16798:GET | GET | https://member.bilibili.com/x/app/h5/mission/type/v2 | Query:access_key, Query:tid, Query:from | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/studio/module/publish/bean/ValidActsBean;&gt;;&gt;; | not-tested |
| classes35.dex:22761:GET | GET | https://member.bilibili.com/x/app/newpubinfo | Query:mid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/upper/api/bean/archive/ArchiveEntranceIconBeanNew;&gt;;&gt;; | not-tested |
| classes35.dex:22777:POST | POST | https://member.bilibili.com/x/app/danmu/transferV2 | Query:access_key, Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes35.dex:22797:POST | POST | https://member.bilibili.com/x/app/up/draft | Field:access_key, Field:draft | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |

## gRPC

请求/响应角色默认仍为静态候选；View/View 已有单独实现核对。表格不代表已建立连接或验证认证。

| 路由 | 请求类型候选 | 响应类型候选 | 线上抽查 |
| --- | --- | --- | --- |
| /bilibili.app.interface.v1.Media/MediaComment | Lcom/bapis/bilibili/app/interfaces/v1/MediaCommentReq; | Lcom/bapis/bilibili/app/interfaces/v1/MediaCommentReply; | not-tested |
| /bilibili.app.interface.v1.Media/MediaDetail | Lcom/bapis/bilibili/app/interfaces/v1/MediaDetailReq; | Lcom/bapis/bilibili/app/interfaces/v1/MediaDetailReply; | not-tested |
| /bilibili.app.interface.v1.Media/MediaFollow | Lcom/bapis/bilibili/app/interfaces/v1/MediaFollowReq; | Lcom/bapis/bilibili/app/interfaces/v1/MediaFollowReply; | not-tested |
| /bilibili.app.interface.v1.Media/MediaRelation | Lcom/bapis/bilibili/app/interfaces/v1/MediaRelationReq; | Lcom/bapis/bilibili/app/interfaces/v1/MediaRelationReply; | not-tested |
| /bilibili.app.interface.v1.Media/MediaTab | Lcom/bapis/bilibili/app/interfaces/v1/MediaTabReq; | Lcom/bapis/bilibili/app/interfaces/v1/MediaTabReply; | not-tested |
| /bilibili.app.interface.v1.Media/MediaVideo | Lcom/bapis/bilibili/app/interfaces/v1/MediaVideoReq; | Lcom/bapis/bilibili/app/interfaces/v1/MediaVideoReply; | not-tested |
| /bilibili.polymer.chronos.v1.ChronosService/ObtainChronosPackage | Lcom/bapis/bilibili/polymer/chronos/v1/ObtainChronosPackageReq; | Lcom/bapis/bilibili/polymer/chronos/v1/ObtainChronosPackageRsp; | not-tested |
| /bilibili.polymer.chronos.v1.ChronosService/ObtainChronosPackageV2 | Lcom/bapis/bilibili/polymer/chronos/v1/ObtainChronosPackageV2Req; | Lcom/bapis/bilibili/polymer/chronos/v1/ObtainChronosPackageRsp; | not-tested |
| /bilibili.polymer.contract.v1.Contract/AddContract | Lcom/bapis/bilibili/polymer/contract/AddContractReq; | Lcom/google/protobuf/Empty; | not-tested |
| /bilibili.polymer.contract.v1.Contract/AddContractV2 | Lcom/bapis/bilibili/polymer/contract/AddContractReq; | Lcom/bapis/bilibili/polymer/contract/AddContractReply; | not-tested |
| /bilibili.polymer.contract.v1.Contract/ContractConfig | Lcom/bapis/bilibili/polymer/contract/ContractConfigReq; | Lcom/bapis/bilibili/polymer/contract/ContractConfigReply; | not-tested |
| /bilibili.vega.deneb.v1.VegaDenebRPC/MessagePulls | Lcom/bapis/bilibili/vega/deneb/v1/MessagePullsReq; | Lcom/bapis/bilibili/vega/deneb/v1/MessagePullsReply; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category other --limit 10
node bin/bili-apis.mjs show "ID"
```
