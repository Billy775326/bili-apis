# 待细分

现有名称不足以可靠归类的声明。分类根据路由、域名与声明类名称推断，未验证业务行为。

官方 Android 9.19.0：49 条 HTTP 声明、12 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。

[返回分类](README.md) · [与 Play 对比](comparison.md)

## HTTP

参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。

| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |
| --- | --- | --- | --- | --- |
| classes12.dex:54299:GET | GET | /api/fall?platform=android&pagesize=10 | Query:cursor, Query:wid | Lio/reactivex/rxjava3/core/Single&lt;Ljava/util/List&lt;Lcom/bilibili/ogv/misc/editorrecommend/BangumiRecommend;&gt;;&gt;; |
| classes12.dex:54300:GET | GET | /appindex/follow_index_fall?platform=android | Query:cursor, Query:area | Lio/reactivex/rxjava3/core/Single&lt;Ljava/util/List&lt;Lcom/bilibili/ogv/misc/editorrecommend/BangumiRecommend;&gt;;&gt;; |
| classes15.dex:40478:POST | POST | https://member.bilibili.com/x/app/growth/credit/receive | Field:access_key, Field:task_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes15.dex:40480:POST | POST | https://member.bilibili.com/x/app/inspiration/fav | Field:id, Field:fav | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes15.dex:40499:POST | POST | https://member.bilibili.com/x/app/up/draft | Field:access_key, Field:draft | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes15.dex:43765:GET | GET | https://api.bilibili.com/x/laser/app/query | Query:access_key, Query:source_type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/userfeedback/laserreport/LogReportService$LogDate;&gt;;&gt;; |
| classes15.dex:43766:POST | POST | https://api.bilibili.com/x/laser/app/update | Field:platform, Field:access_key, Field:task_state, Field:reason | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes18.dex:31637:POST | POST | https://api.bilibili.com/x/v1/contract/add_message | Field:aid, Field:up_mid, Field:source, Field:scene, Field:content, Field:is_add_reply | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/upguardian/api/UpGuardianAddMessage;&gt;;&gt;; |
| classes18.dex:31638:POST | POST | https://api.bilibili.com/x/v1/contract/expose | Field:aid, Field:cid, Field:action, Field:up_mid, Field:source, Field:scene, Field:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes18.dex:31639:GET | GET | https://api.bilibili.com/x/v1/contract/layer_info | Query:up_mid, Query:source, Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/upguardian/api/UpGuardianLayerInfo;&gt;;&gt;; |
| classes18.dex:32396:GET | GET | https://member.bilibili.com/x/app/newpubinfo | Query:mid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/upper/api/bean/archive/ArchiveEntranceIconBeanNew;&gt;;&gt;; |
| classes18.dex:32413:POST | POST | https://member.bilibili.com/x/app/danmu/transferV2 | Query:access_key, Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes18.dex:39818:GET | GET | https://member.bilibili.com/xx/xxx/xx | Query:mid, Query:biz_code, Query:extra | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/upper/feat/gamefactory/model/GameBindInfo;&gt;;&gt;; |
| classes18.dex:61077:GET | GET | https://member.bilibili.com/x/app/cooperate/v3/view | Query:access_key, Query:id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/studio/videoeditor/capturev3/followtogether/FtMaterialAidCidBeanV3;&gt;;&gt;; |
| classes21.dex:45772:POST | POST | https://shop.bilibili.com/mall-merchant-c/merchant/rtc/user/recover | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/mall/data/page/shop/call/RobSelLineVoBean;&gt;;&gt;; |
| classes21.dex:45773:POST | POST | https://shop.bilibili.com/mall-merchant-c/merchant/rtc/user/call | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/mall/data/page/shop/call/RobSelLineVoBean;&gt;;&gt;; |
| classes21.dex:45774:POST | POST | https://shop.bilibili.com/mall-merchant-c/merchant/rtc/room/event | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes21.dex:48718:GET | GET | 动态 @Url | Url:(内容未知), Query:orderId | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/mall/data/page/order/list/bean/OrderListShareDataBean;&gt;;&gt;; |
| classes21.dex:48719:GET | GET | 动态 @Url | Url:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/mall/data/page/order/list/bean/OrderListShareDataBean;&gt;;&gt;; |
| classes21.dex:53772:POST | POST | 动态 @Url | Url:(内容未知), Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes21.dex:53773:POST | POST | 动态 @Url | Url:(内容未知), Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/mall/data/support/picupload/BFSRespData;&gt;;&gt;; |
| classes21.dex:53774:POST | POST | 动态 @Url | Url:(内容未知), Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/mall/data/support/picupload/DynamicPicRespData;&gt;;&gt;; |
| classes21.dex:61776:POST | POST | 动态 @Url | Url:(内容未知), Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/mall/data/support/picupload/Text2ImgRespData;&gt;;&gt;; |
| classes24.dex:60899:POST | POST | https://live-open.biliapi.com/v1/InteractGateway/CreateChannel | Body:(内容未知), HeaderMap:(内容未知) | Ljava/lang/Object; |
| classes24.dex:60900:POST | POST | https://live-open.biliapi.com/v1/InteractGateway/JoinChannel | Body:(内容未知), HeaderMap:(内容未知) | Ljava/lang/Object; |
| classes24.dex:60901:POST | POST | https://live-open.biliapi.com/v1/InteractGateway/LeaveChannel | Body:(内容未知), HeaderMap:(内容未知) | Ljava/lang/Object; |
| classes26.dex:55560:GET | GET | https://api.bilibili.com/x/member/web/content/check | Query:content, Query:scene | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/api/bean/AuthContentCheckBean;&gt;;&gt;; |
| classes26.dex:55563:GET | GET | https://api.bilibili.com/x/member/faceid/realname/conf | Query:tmp_code | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/api/bean/AuthConfBean;&gt;;&gt;; |
| classes26.dex:55568:GET | GET | https://api.bilibili.com/x/member/faceid/realname/override/summary | Query:request_id, Query:override_mid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/api/bean/OverrideSummary;&gt;;&gt;; |
| classes26.dex:55570:POST | POST | https://api.bilibili.com/x/member/faceid/realname/override | Query:request_id, Query:override_mid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes27.dex:7305:GET | GET | https://app.bilibili.com/x/v2/show/widget/up |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/appwidget/upcard/data/UpCardWidgetData;&gt;;&gt;; |
| classes28.dex:23553:GET | GET | https://api.bilibili.com/x/pandora/popup | Query:access_key, Query:business, Query:spmid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/pandora/PandoraBean;&gt;;&gt;; |
| classes28.dex:45485:POST | POST | https://club.bilibili.com/api/add.skin.order.do | Query:access_key, Field:id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/theme/api/OrderResult;&gt;;&gt;; |
| classes28.dex:45486:POST | POST | https://club.bilibili.com/api/cancel.skin.order.do | Query:access_key, Field:id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/theme/api/OrderResult;&gt;;&gt;; |
| classes28.dex:45487:GET | GET | https://club.bilibili.com/api/query.skin.list.do | Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Ltv/danmaku/bili/ui/theme/api/BiliSkinList;&gt;; |
| classes5.dex:9188:POST | POST | 动态 @Url | Url:(内容未知), HeaderMap:(内容未知), Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lokhttp3/ResponseBody;&gt;; |
| classes5.dex:9189:POST | POST | 动态 @Url | Url:(内容未知), HeaderMap:(内容未知), Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lokhttp3/ResponseBody;&gt;; |
| classes5.dex:39341:GET | GET | http://elec.bilibili.com/api/elec.list.do | Query:goods_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/comm/charge/api/ChargeTheme;&gt;; |
| classes6.dex:57112:POST | POST | 动态 @Url | Url:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/studio/comm/api/bean/UpperRealTimeOffsetBean;&gt;;&gt;; |
| classes7.dex:47116:POST | POST | 动态 @Url | Url:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bililive/realtime/forc/timeoffset/LiveRealTimeOffsetBean;&gt;;&gt;; |
| classes7.dex:48363:GET | GET | 动态 @Url | Url:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Ljava/lang/String;&gt;; |
| classes7.dex:52130:POST | POST | https://bvc-ost-oss.bilivideo.com/api/bban2/v0/dialing/task/result | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; |
| classes7.dex:57000:POST | POST | 动态 @Url | Url:(内容未知), Field:sid, Field:csrf | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes8.dex:36244:OPTIONS | OPTIONS | 动态 @Url | Url:(内容未知), HeaderMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lokhttp3/ResponseBody;&gt;; |
| classes8.dex:36245:GET | GET | 动态 @Url | Url:(内容未知), HeaderMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lokhttp3/ResponseBody;&gt;; |
| classes8.dex:36246:POST | POST | 动态 @Url | Url:(内容未知), HeaderMap:(内容未知), Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lokhttp3/ResponseBody;&gt;; |
| classes8.dex:45859:POST | POST | 动态 @Url | Body:(内容未知), Url:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/bilipay/api/PaymentResponse&lt;Lcom/google/gson/JsonObject;&gt;;&gt;; |
| classes9.dex:47495:GET | GET | https://customerservice.bilibili.com/x/custom/call_svr/v1/shop_info | Query:shop_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/im/entity/CustomerUserNameInfo;&gt;;&gt;; |
| classes9.dex:50810:POST | POST | https://api.bilibili.com/x/community/cosmo/interface/simple_action | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |

## gRPC

请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。

| 路由 | 请求类型候选 | 响应类型候选 |
| --- | --- | --- |
| /bilibili.app.interface.v1.Media/MediaComment | Lcom/bapis/bilibili/app/interfaces/v1/MediaCommentReq; | Lcom/bapis/bilibili/app/interfaces/v1/MediaCommentReply; |
| /bilibili.app.interface.v1.Media/MediaDetail | Lcom/bapis/bilibili/app/interfaces/v1/MediaDetailReq; | Lcom/bapis/bilibili/app/interfaces/v1/MediaDetailReply; |
| /bilibili.app.interface.v1.Media/MediaFollow | Lcom/bapis/bilibili/app/interfaces/v1/MediaFollowReq; | Lcom/bapis/bilibili/app/interfaces/v1/MediaFollowReply; |
| /bilibili.app.interface.v1.Media/MediaRelation | Lcom/bapis/bilibili/app/interfaces/v1/MediaRelationReq; | Lcom/bapis/bilibili/app/interfaces/v1/MediaRelationReply; |
| /bilibili.app.interface.v1.Media/MediaTab | Lcom/bapis/bilibili/app/interfaces/v1/MediaTabReq; | Lcom/bapis/bilibili/app/interfaces/v1/MediaTabReply; |
| /bilibili.app.interface.v1.Media/MediaVideo | Lcom/bapis/bilibili/app/interfaces/v1/MediaVideoReq; | Lcom/bapis/bilibili/app/interfaces/v1/MediaVideoReply; |
| /bilibili.polymer.chronos.v1.ChronosService/ObtainChronosPackage | Lcom/bapis/bilibili/polymer/chronos/v1/ObtainChronosPackageReq; | Lcom/bapis/bilibili/polymer/chronos/v1/ObtainChronosPackageRsp; |
| /bilibili.polymer.chronos.v1.ChronosService/ObtainChronosPackageV2 | Lcom/bapis/bilibili/polymer/chronos/v1/ObtainChronosPackageV2Req; | Lcom/bapis/bilibili/polymer/chronos/v1/ObtainChronosPackageRsp; |
| /bilibili.polymer.contract.v1.Contract/AddContract | Lcom/bapis/bilibili/polymer/contract/AddContractReq; | Lcom/google/protobuf/Empty; |
| /bilibili.polymer.contract.v1.Contract/AddContractV2 | Lcom/bapis/bilibili/polymer/contract/AddContractReq; | Lcom/bapis/bilibili/polymer/contract/AddContractReply; |
| /bilibili.polymer.contract.v1.Contract/ContractConfig | Lcom/bapis/bilibili/polymer/contract/ContractConfigReq; | Lcom/bapis/bilibili/polymer/contract/ContractConfigReply; |
| /bilibili.vega.deneb.v1.VegaDenebRPC/MessagePulls | Lcom/bapis/bilibili/vega/deneb/v1/MessagePullsReq; | Lcom/bapis/bilibili/vega/deneb/v1/MessagePullsReply; |

```sh
node bin/bili-apis.mjs --edition official list --category other --limit 10
node bin/bili-apis.mjs --edition official show "ID"
```
