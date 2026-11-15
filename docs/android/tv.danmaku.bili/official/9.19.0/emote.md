# 表情与贴纸

<!-- android-edition:start -->
包名：`tv.danmaku.bili` · 渠道：Official Android 64-bit · 版本：9.19.0（9190400）。

[全部版本](../../../README.md) · [本包文档](README.md) · [网页接口](../../../../pc/README.md) · [基线元数据](../../../../../catalog/android/tv.danmaku.bili/official/9.19.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

表情包和表情面板。分类根据路由、域名与声明类名称推断，未验证业务行为。

官方 Android 9.19.0：16 条 HTTP 声明、0 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。

[返回分类](README.md) · [与 Play 对比](comparison.md)

## HTTP

参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。

| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |
| --- | --- | --- | --- | --- |
| classes5.dex:17475:POST | POST | https://api.bilibili.com/x/emote/package/add | Field:access_key, Field:business, Field:package_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:17477:GET | GET | https://api.bilibili.com/x/emote/badge/status | Query:access_key, Query:business, Query:badge | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/emoticon/model/EmoticonBadgeStatus;&gt;;&gt;; |
| classes5.dex:17478:GET | GET | https://api.bilibili.com/x/emote/user/panel | Query:access_key, Query:business, Query:up_mid, Query:aid, Query:hash_value | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/emoticon/model/EmoticonPackagesDetailData;&gt;;&gt;; |
| classes5.dex:17479:GET | GET | https://api.bilibili.com/x/emote/package | Query:access_key, Query:business, Query:ids | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/emoticon/model/EmoticonPackagesDetailData;&gt;;&gt;; |
| classes5.dex:17481:GET | GET | https://api.bilibili.com/x/emote/setting/panel | Query:access_key, Query:business | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/emoticon/model/EmoticonSettingsData;&gt;;&gt;; |
| classes5.dex:17482:GET | GET | https://api.bilibili.com/x/emote/creation/package/list | Query:business, Query:up_mid, Query:aid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/emoticon/model/UpperEmoticonPackageList;&gt;;&gt;; |
| classes5.dex:17483:GET | GET | https://api.bilibili.com/x/emote/up/list | Query:business, Query:mid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/app/comm/emoticon/model/Emote;&gt;;&gt;;&gt;; |
| classes5.dex:17485:POST | POST | https://api.bilibili.com/x/emote/package/remove | Field:access_key, Field:business, Field:package_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:17486:POST | POST | https://api.bilibili.com/x/emote/user/recommend/remove | Field:business, Field:package_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:17487:POST | POST | https://api.bilibili.com/x/emote/badge/multi/update | Field:access_key, Field:package_id, Field:emote_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:17488:POST | POST | https://api.bilibili.com/x/emote/badge/update | Field:access_key, Field:business, Field:badge | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:17489:POST | POST | https://api.bilibili.com/x/emote/package/sort | Field:access_key, Field:business, Field:sort | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:59976:GET | GET | https://api.bilibili.com/x/emote/package/more | Query:access_key, Query:business | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/emoticon/model/EmoticonSettingsData;&gt;;&gt;; |
| classes5.dex:59977:GET | GET | https://api.bilibili.com/x/emote/package/pay | Query:access_key, Query:business, Query:ps, Query:pn | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/emoticon/model/EmoticonSettingsData;&gt;;&gt;; |
| classes5.dex:59978:GET | GET | https://api.bilibili.com/x/emote/v2/user/packages | Query:access_key, Query:business | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/emoticon/model/EmoticonSettingsData;&gt;;&gt;; |
| classes5.dex:59979:GET | GET | https://api.bilibili.com/x/emote/package/search | Query:business, Query:name, Query:ps, Query:pn | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/emoticon/model/EmoticonSettingsData;&gt;;&gt;; |

## gRPC

请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。

| 路由 | 请求类型候选 | 响应类型候选 |
| --- | --- | --- |

```sh
node bin/bili-apis.mjs --edition official list --category emote --limit 10
node bin/bili-apis.mjs --edition official show "ID"
```
