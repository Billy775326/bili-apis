# 配置与资源

资源、启动、实验、隐私和通用配置。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 32 条 HTTP 声明、12 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes14.dex:40714:GET | GET | https://app.bilibili.com/x/resource/broadcast/servers?platform=android |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/comm/bbc/service/f;&gt;;&gt;; | not-tested |
| classes15.dex:20378:GET | GET | https://app.bilibili.com/x/v2/display/zone | Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/preferences/utils/Zone;&gt;;&gt;; | not-tested |
| classes15.dex:61720:GET | GET | https://app.bilibili.com/x/resource/abtest/abserver | Query:buvid, Query:device, Query:access_key, Query:brand, Query:model, Query:osver | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lnn/e;&gt;;&gt;; | not-tested |
| classes16.dex:4453:POST | POST | https://app.bilibili.com/x/resource/fingerprint | Query:access_key, Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/biliid/internal/fingerprint/sync/http/FingerprintResponse;&gt;;&gt;; | not-tested |
| classes16.dex:36532:GET | GET | https://app.bilibili.com/x/resource/ip |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/dblconfig/IpAddressInfo;&gt;;&gt;; | not-tested |
| classes16.dex:61486:GET | GET | https://app.bilibili.com/x/v2/param | Query:ver | LlC0/a&lt;Lcom/bilibili/lib/config/ConfigData;&gt;; | not-tested |
| classes17.dex:6132:GET | GET | https://app.bilibili.com/x/resource/dolby/config | Query:brand, Query:model | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/media/dolby/DolbyVisionConfigResponse;&gt;;&gt;; | not-tested |
| classes17.dex:12359:GET | GET | https://app.bilibili.com/x/resource/peak/download | QueryMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes18.dex:7809:GET | GET | https://app.bilibili.com/x/resource/abtest/batch |  | Ljava/lang/Object; | not-tested |
| classes18.dex:42364:POST | POST | https://app.bilibili.com/x/resource/entrance/infoc | Field:access_key, Field:up_mid, Field:business, Field:network | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes21.dex:15991:GET | GET | https://app.bilibili.com/x/resource/static | Query:ver | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/search2/api/SearchEasterEggConfig;&gt;;&gt;; | not-tested |
| classes21.dex:39887:GET | GET | https://api.bilibili.com/x/v2/medialist/resource/list | Query:type, Query:biz_id, Query:oid, Query:offset, Query:desc, Query:direction, Query:with_current, Query:from, Query:sort_field, Query:otype, Query:use_pn, Query:pn, Query:only_un_view, Query:asc, Query:ps, Query:preview | Ljava/lang/Object; | not-tested |
| classes30.dex:21103:GET | GET | https://app.bilibili.com/x/resource/deeplink/huawei | Query:oaid, Query:bundle | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/main/deeplink/DelayDeepLink;&gt;;&gt;; | not-tested |
| classes30.dex:21111:GET | GET | https://app.bilibili.com/x/resource/deeplink/ai | Query:origin_link, Query:first_launch_timestamp | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/main/deeplink/RedirectDeeplink;&gt;;&gt;; | not-tested |
| classes30.dex:31306:GET | GET | https://app.bilibili.com/x/resource/widget/android | Query:style | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/appwidget/hotword/data/HotWordWidgetData;&gt;;&gt;; | not-tested |
| classes30.dex:43561:GET | GET | https://app.bilibili.com/x/v2/splash/show | Query:access_key, Query:width, Query:height, Query:ad_extra, Query:network, Query:topview_ids | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/splash/ad/model/SplashShowResponse;&gt;;&gt;; | not-tested |
| classes30.dex:43562:GET | GET | https://app.bilibili.com/x/v2/splash/list | Query:loaded_creative_list, Query:client_keep_ids, Query:open_event | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/splash/ad/model/SplashListResponse;&gt;;&gt;; | not-tested |
| classes30.dex:47822:GET | GET | https://app.bilibili.com/x/resource/show/skin | Query:access_key, Query:is_free_theme | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/garb/model/GarbData;&gt;;&gt;; | not-tested |
| classes30.dex:48926:GET | GET | https://app.bilibili.com/x/resource/top/activity |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/main/event/model/EventEntranceModel;&gt;;&gt;; | not-tested |
| classes30.dex:49189:GET | GET | https://app.bilibili.com/x/resource/pop/up |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/main/opdialog/OpBizDialogHelper$OpDialogInfo;&gt;;&gt;; | not-tested |
| classes30.dex:53256:GET | GET | https://app.bilibili.com/x/resource/show/tab/bubble | Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes30.dex:53257:GET | GET | https://app.bilibili.com/x/resource/show/tab/v2 | Query:access_key, Query:ver, Query:interest_result | LlC0/a&lt;Ltv/danmaku/bili/ui/main2/resource/MainResourceManager$TabResponse;&gt;; | not-tested |
| classes30.dex:53258:POST | POST | https://app.bilibili.com/x/resource/show/click | Field:id, Field:ver, Field:type | LlC0/a&lt;Ljava/lang/Void;&gt;; | not-tested |
| classes30.dex:53407:GET | GET | https://app.bilibili.com/x/resource/ip |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/main2/resource/IpAddressInfo;&gt;;&gt;; | not-tested |
| classes30.dex:55248:GET | GET | https://app.bilibili.com/x/v2/splash/brand/list | Query:access_key, Query:mobi_app, Query:build, Query:device, Query:network, Query:screen_width, Query:screen_height, Query:selected | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/splash/brand/model/BrandSplashData;&gt;;&gt;; | not-tested |
| classes30.dex:55249:GET | GET | https://app.bilibili.com/x/v2/splash/brand/config/page | Query:access_key, Query:mobi_app, Query:build, Query:device, Query:network, Query:screen_width, Query:screen_height, Query:source, Query:last_splash_biz_id, Query:group_no, Query:splash_type, Query:keyword | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/splash/brand/modelv2/BrandSplashSettingMoreData;&gt;;&gt;; | not-tested |
| classes30.dex:55250:GET | GET | https://app.bilibili.com/x/v2/splash/brand/config | Query:access_key, Query:mobi_app, Query:build, Query:device, Query:network, Query:screen_width, Query:screen_height | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/splash/brand/modelv2/BrandSplashSettingData;&gt;;&gt;; | not-tested |
| classes30.dex:55251:POST | POST | https://app.bilibili.com/x/v2/splash/brand/save | Field:access_key, Field:network, Field:id, Field:vip_splash_id, Field:dlc_splash_id, Field:device | LlC0/a&lt;Ljava/lang/Void;&gt;; | not-tested |
| classes30.dex:56123:GET | GET | https://app.bilibili.com/x/v2/splash/event/list2 | Query:device, Query:network, Query:screen_width, Query:screen_height | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/splash/event/EventSplashDataList;&gt;;&gt;; | not-tested |
| classes30.dex:56439:GET | GET | https://app.bilibili.com/x/v2/display/zone | Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/preferences/utils/Zone;&gt;;&gt;; | not-tested |
| classes30.dex:64753:GET | GET | https://app.bilibili.com/x/resource/deeplink/button | Query:schema | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/deeplinkbutton/api/DeepLinkButtonInfo;&gt;;&gt;; | not-tested |
| classes5.dex:60811:GET | GET | https://app.bilibili.com/x/resource/abtest/batch |  | Ljava/lang/Object; | not-tested |

## gRPC

请求/响应角色默认仍为静态候选；View/View 已有单独实现核对。表格不代表已建立连接或验证认证。

| 路由 | 请求类型候选 | 响应类型候选 | 线上抽查 |
| --- | --- | --- | --- |
| /bilibili.app.distribution.v1.Distribution/GetUserPreference | Lcom/bapis/bilibili/app/distribution/GetUserPreferenceReq; | Lcom/bapis/bilibili/app/distribution/GetUserPreferenceReply; | not-tested |
| /bilibili.app.distribution.v1.Distribution/SetUserPreference | Lcom/bapis/bilibili/app/distribution/SetUserPreferenceReq; | Lcom/bapis/bilibili/app/distribution/SetUserPreferenceReply; | not-tested |
| /bilibili.app.distribution.v1.Distribution/UserPreference | Lcom/bapis/bilibili/app/distribution/UserPreferenceReq; | Lcom/bapis/bilibili/app/distribution/UserPreferenceReply; | not-tested |
| /bilibili.app.overseas.app.v1.Banner/ReportEvent | Lcom/bapis/bilibili/app/overseas/app/v1/ReportBannerEventReq; | Lcom/google/protobuf/Empty; | not-tested |
| /bilibili.app.resource.privacy.v1.Privacy/PrivacyConfig | Lcom/bapis/bilibili/app/resource/privacy/v1/NoArgRequest; | Lcom/bapis/bilibili/app/resource/privacy/v1/PrivacyConfigReply; | not-tested |
| /bilibili.app.resource.privacy.v1.Privacy/SetPrivacyConfig | Lcom/bapis/bilibili/app/resource/privacy/v1/SetPrivacyConfigRequest; | Lcom/bapis/bilibili/app/resource/privacy/v1/NoReply; | not-tested |
| /bilibili.app.resource.v1.LegacyResource/Download | Lcom/bapis/bilibili/app/resource/v1/DownloadReq; | Lcom/bapis/bilibili/app/resource/v1/DownloadReply; | not-tested |
| /bilibili.app.resource.v1.Module/List | Lcom/bapis/bilibili/app/resource/v1/ListReq; | Lcom/bapis/bilibili/app/resource/v1/ListReply; | not-tested |
| /bilibili.app.resource.v1.Module/ManualList | Lcom/bapis/bilibili/app/resource/v1/ManualListReq; | Lcom/bapis/bilibili/app/resource/v1/ListReply; | not-tested |
| /bilibili.app.translation.v1.Translation/TranslationBatch | Lcom/bapis/bilibili/app/translation/v1/TranslationBatchReq; | Lcom/bapis/bilibili/app/translation/v1/TranslationBatchReply; | not-tested |
| /bilibili.app.translation.v1.Translation/TranslationSimple | Lcom/bapis/bilibili/app/translation/v1/TranslationSimpleReq; | Lcom/bapis/bilibili/app/translation/v1/TranslationSimpleReply; | not-tested |
| /bilibili.app.wall.v1.Wall/RuleInfo | Lcom/bapis/bilibili/app/wall/v1/RuleRequest; | Lcom/bapis/bilibili/app/wall/v1/RulesReply; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category config --limit 10
node bin/bili-apis.mjs show "ID"
```
