# 配置与资源

<!-- android-edition:start -->
包名：`tv.danmaku.bili` · 渠道：Official Android 64-bit · 版本：9.19.0（9190400）。

[全部版本](../../../README.md) · [本包文档](README.md) · [网页接口](../../../../pc/README.md) · [基线元数据](../../../../../catalog/android/tv.danmaku.bili/official/9.19.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

资源、启动、实验、隐私和通用配置。分类根据路由、域名与声明类名称推断，未验证业务行为。

官方 Android 9.19.0：34 条 HTTP 声明、12 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。

[返回分类](README.md) · [与 Play 对比](comparison.md)

## HTTP

参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。

| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |
| --- | --- | --- | --- | --- |
| classes10.dex:33564:GET | GET | https://app.bilibili.com/x/resource/ip |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/dblconfig/IpAddressInfo;&gt;;&gt;; |
| classes10.dex:39204:POST | POST | https://app.bilibili.com/x/resource/fingerprint | Query:access_key, Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/biliid/internal/fingerprint/sync/http/FingerprintResponse;&gt;;&gt;; |
| classes10.dex:55697:GET | GET | https://app.bilibili.com/x/v2/param | Query:ver | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/lib/config/ConfigData;&gt;; |
| classes11.dex:47034:GET | GET | https://app.bilibili.com/x/resource/dolby/config | Query:brand, Query:model | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/media/dolby/DolbyVisionConfigResponse;&gt;;&gt;; |
| classes12.dex:62122:GET | GET | https://app.bilibili.com/x/resource/peak/download | QueryMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:5498:GET | GET | https://app.bilibili.com/x/resource/abtest/batch |  | Ljava/lang/Object; |
| classes14.dex:7178:POST | POST | https://app.bilibili.com/x/resource/entrance/infoc | Field:access_key, Field:up_mid, Field:business, Field:network | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes14.dex:26195:POST | POST | https://app.bilibili.com/x/resource/entrance/infoc | Field:access_key, Field:up_mid, Field:business, Field:network | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes15.dex:12467:GET | GET | https://app.bilibili.com/x/resource/static | Query:ver | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/search2/api/SearchEasterEggConfig;&gt;;&gt;; |
| classes15.dex:46659:GET | GET | https://api.bilibili.com/x/v2/medialist/resource/list | Query:type, Query:biz_id, Query:oid, Query:offset, Query:desc, Query:direction, Query:with_current, Query:from, Query:sort_field, Query:otype, Query:use_pn, Query:pn, Query:only_un_view, Query:asc, Query:ps, Query:preview | Ljava/lang/Object; |
| classes27.dex:50411:GET | GET | https://app.bilibili.com/x/resource/widget/android | Query:style | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/appwidget/hotword/data/HotWordWidgetData;&gt;;&gt;; |
| classes28.dex:5167:GET | GET | https://app.bilibili.com/x/resource/deeplink/button | Query:schema | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/deeplinkbutton/api/DeepLinkButtonInfo;&gt;;&gt;; |
| classes28.dex:14727:GET | GET | https://app.bilibili.com/x/resource/deeplink/ai | Query:origin_link, Query:first_launch_timestamp | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/main/deeplink/RedirectDeeplink;&gt;;&gt;; |
| classes28.dex:15096:GET | GET | https://app.bilibili.com/x/v2/splash/event/list2 | Query:device, Query:network, Query:screen_width, Query:screen_height | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/splash/event/EventSplashDataList;&gt;;&gt;; |
| classes28.dex:23681:GET | GET | https://app.bilibili.com/x/v2/display/zone | Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/preferences/utils/Zone;&gt;;&gt;; |
| classes28.dex:24798:GET | GET | https://app.bilibili.com/x/resource/deeplink/huawei | Query:oaid, Query:bundle | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/main/deeplink/DelayDeepLink;&gt;;&gt;; |
| classes28.dex:25008:GET | GET | https://app.bilibili.com/x/v2/splash/list | Query:loaded_creative_list, Query:client_keep_ids, Query:open_event | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/splash/ad/model/SplashListResponse;&gt;;&gt;; |
| classes28.dex:25009:GET | GET | https://app.bilibili.com/x/v2/splash/show | Query:access_key, Query:width, Query:height, Query:ad_extra, Query:network, Query:topview_ids | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/splash/ad/model/SplashShowResponse;&gt;;&gt;; |
| classes28.dex:38698:GET | GET | https://app.bilibili.com/x/resource/show/skin | Query:access_key, Query:is_free_theme | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/garb/model/GarbData;&gt;;&gt;; |
| classes28.dex:39784:GET | GET | https://app.bilibili.com/x/resource/pop/up |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/main/opdialog/OpBizDialogHelper$OpDialogInfo;&gt;;&gt;; |
| classes28.dex:39810:GET | GET | https://app.bilibili.com/x/resource/fission/check/new | Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/main/usergrow/UserGrowStatus;&gt;;&gt;; |
| classes28.dex:42924:GET | GET | https://app.bilibili.com/x/resource/show/tab/bubble | Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes28.dex:42925:GET | GET | https://app.bilibili.com/x/resource/show/tab/v2 | Query:access_key, Query:ver, Query:interest_result | Lcom/bilibili/okretro/call/BiliCall&lt;Ltv/danmaku/bili/ui/main2/resource/MainResourceManager$TabResponse;&gt;; |
| classes28.dex:42926:POST | POST | https://app.bilibili.com/x/resource/show/click | Field:id, Field:ver, Field:type | Lcom/bilibili/okretro/call/BiliCall&lt;Ljava/lang/Void;&gt;; |
| classes28.dex:43062:GET | GET | https://app.bilibili.com/x/resource/ip |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/main2/resource/IpAddressInfo;&gt;;&gt;; |
| classes28.dex:44616:GET | GET | https://app.bilibili.com/x/v2/splash/brand/list | Query:access_key, Query:mobi_app, Query:build, Query:device, Query:network, Query:screen_width, Query:screen_height, Query:selected | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/splash/brand/model/BrandSplashData;&gt;;&gt;; |
| classes28.dex:44617:GET | GET | https://app.bilibili.com/x/v2/splash/brand/config/page | Query:access_key, Query:mobi_app, Query:build, Query:device, Query:network, Query:screen_width, Query:screen_height, Query:source, Query:last_splash_biz_id, Query:group_no, Query:splash_type, Query:keyword | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/splash/brand/modelv2/BrandSplashSettingMoreData;&gt;;&gt;; |
| classes28.dex:44618:GET | GET | https://app.bilibili.com/x/v2/splash/brand/config | Query:access_key, Query:mobi_app, Query:build, Query:device, Query:network, Query:screen_width, Query:screen_height | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/splash/brand/modelv2/BrandSplashSettingData;&gt;;&gt;; |
| classes28.dex:44619:POST | POST | https://app.bilibili.com/x/v2/splash/brand/save | Field:access_key, Field:network, Field:id, Field:vip_splash_id, Field:dlc_splash_id, Field:device | Lcom/bilibili/okretro/call/BiliCall&lt;Ljava/lang/Void;&gt;; |
| classes28.dex:60090:GET | GET | https://app.bilibili.com/x/resource/top/activity |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/main/event/model/EventEntranceModel;&gt;;&gt;; |
| classes32.dex:62197:GET | GET | https://app.bilibili.com/x/resource/broadcast/servers?platform=android |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljgf;&gt;;&gt;; |
| classes5.dex:4388:GET | GET | https://app.bilibili.com/x/resource/abtest/abserver | Query:buvid, Query:device, Query:access_key, Query:brand, Query:model, Query:osver | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljvy1;&gt;;&gt;; |
| classes5.dex:36687:GET | GET | https://app.bilibili.com/x/v2/display/zone | Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/preferences/utils/Zone;&gt;;&gt;; |
| classes5.dex:57876:GET | GET | https://app.bilibili.com/x/resource/abtest/batch |  | Ljava/lang/Object; |

## gRPC

请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。

| 路由 | 请求类型候选 | 响应类型候选 |
| --- | --- | --- |
| /bilibili.app.distribution.v1.Distribution/GetUserPreference | Lcom/bapis/bilibili/app/distribution/GetUserPreferenceReq; | Lcom/bapis/bilibili/app/distribution/GetUserPreferenceReply; |
| /bilibili.app.distribution.v1.Distribution/SetUserPreference | Lcom/bapis/bilibili/app/distribution/SetUserPreferenceReq; | Lcom/bapis/bilibili/app/distribution/SetUserPreferenceReply; |
| /bilibili.app.distribution.v1.Distribution/UserPreference | Lcom/bapis/bilibili/app/distribution/UserPreferenceReq; | Lcom/bapis/bilibili/app/distribution/UserPreferenceReply; |
| /bilibili.app.overseas.app.v1.Banner/ReportEvent | Lcom/bapis/bilibili/app/overseas/app/v1/ReportBannerEventReq; | Lcom/google/protobuf/Empty; |
| /bilibili.app.resource.privacy.v1.Privacy/PrivacyConfig | Lcom/bapis/bilibili/app/resource/privacy/v1/NoArgRequest; | Lcom/bapis/bilibili/app/resource/privacy/v1/PrivacyConfigReply; |
| /bilibili.app.resource.privacy.v1.Privacy/SetPrivacyConfig | Lcom/bapis/bilibili/app/resource/privacy/v1/SetPrivacyConfigRequest; | Lcom/bapis/bilibili/app/resource/privacy/v1/NoReply; |
| /bilibili.app.resource.v1.LegacyResource/Download | Lcom/bapis/bilibili/app/resource/v1/DownloadReq; | Lcom/bapis/bilibili/app/resource/v1/DownloadReply; |
| /bilibili.app.resource.v1.Module/List | Lcom/bapis/bilibili/app/resource/v1/ListReq; | Lcom/bapis/bilibili/app/resource/v1/ListReply; |
| /bilibili.app.resource.v1.Module/ManualList | Lcom/bapis/bilibili/app/resource/v1/ManualListReq; | Lcom/bapis/bilibili/app/resource/v1/ListReply; |
| /bilibili.app.translation.v1.Translation/TranslationBatch | Lcom/bapis/bilibili/app/translation/v1/TranslationBatchReq; | Lcom/bapis/bilibili/app/translation/v1/TranslationBatchReply; |
| /bilibili.app.translation.v1.Translation/TranslationSimple | Lcom/bapis/bilibili/app/translation/v1/TranslationSimpleReq; | Lcom/bapis/bilibili/app/translation/v1/TranslationSimpleReply; |
| /bilibili.app.wall.v1.Wall/RuleInfo | Lcom/bapis/bilibili/app/wall/v1/RuleRequest; | Lcom/bapis/bilibili/app/wall/v1/RulesReply; |

```sh
node bin/bili-apis.mjs --edition official list --category config --limit 10
node bin/bili-apis.mjs --edition official show "ID"
```
