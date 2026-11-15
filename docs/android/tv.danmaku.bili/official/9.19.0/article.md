# 专栏与阅读

<!-- android-edition:start -->
包名：`tv.danmaku.bili` · 渠道：Official Android 64-bit · 版本：9.19.0（9190400）。

[全部版本](../../../README.md) · [本包文档](README.md) · [网页接口](../../../../pc/README.md) · [基线元数据](../../../../../catalog/android/tv.danmaku.bili/official/9.19.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

专栏文章和阅读功能。分类根据路由、域名与声明类名称推断，未验证业务行为。

官方 Android 9.19.0：20 条 HTTP 声明、0 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。

[返回分类](README.md) · [与 Play 对比](comparison.md)

## HTTP

参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。

| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |
| --- | --- | --- | --- | --- |
| classes15.dex:46013:GET | GET | https://api.bilibili.com/x/article/categories |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/search2/api/Column$Category;&gt;;&gt;;&gt;; |
| classes15.dex:56860:POST | POST | https://api.bilibili.com/x/article/like | Query:access_key, Field:id, Field:type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes8.dex:33171:GET | GET | https://api.bilibili.com/x/article/conf |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/net/entity/response/ColumnConfig;&gt;;&gt;; |
| classes9.dex:13861:GET | GET | https://api.bilibili.com/x/article/edit_times | Query:id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followinglist/opus/manager/ArticleEditTime;&gt;;&gt;; |
| classes9.dex:34003:POST | POST | https://api.bilibili.com/x/article/addshare | Field:access_key, Field:id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes9.dex:34004:POST | POST | https://api.bilibili.com/x/article/complaints | Header:x-bili-gaia-vtoken, Query:access_key, Field:aid, Field:cid, Field:images, Field:reason | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes9.dex:34005:GET | GET | https://api.bilibili.com/x/article/categories |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/column/api/response/Column$Category;&gt;;&gt;;&gt;; |
| classes9.dex:34006:GET | GET | https://api.bilibili.com/x/article/list/articles | Query:access_key, Query:id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/column/api/response/ColumnArticleList;&gt;;&gt;; |
| classes9.dex:34007:GET | GET | https://api.bilibili.com/x/article/view | Query:access_key, Query:id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/column/api/response/ColumnDetailData;&gt;; |
| classes9.dex:34008:GET | GET | https://api.bilibili.com/x/article/viewinfo | Query:access_key, Query:id, Query:from | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/column/api/response/ColumnDetailUserInfo;&gt;; |
| classes9.dex:34009:GET | GET | https://api.bilibili.com/x/article/edit_times | Query:id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/column/api/response/ArticleEditTime;&gt;;&gt;; |
| classes9.dex:34010:GET | GET | https://api.bilibili.com/x/article/listinfo | Query:id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/column/api/response/ColumnArticleList;&gt;;&gt;; |
| classes9.dex:34013:GET | GET | https://api.bilibili.com/x/article/recommends | Query:access_key, Query:cid, Query:pn, Query:ps, Query:aids, Query:sort, Query:from | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/column/api/response/ColumnRecommendData;&gt;; |
| classes9.dex:34014:GET | GET | https://api.bilibili.com/x/article/recommends/plus | Query:access_key, Query:cid, Query:pn, Query:ps, Query:aids, Query:sort, Query:from | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/column/api/response/ColumnHomeTabData;&gt;; |
| classes9.dex:34015:GET | GET | https://api.bilibili.com/x/article/home | Query:access_key, Query:cid, Query:pn, Query:ps, Query:aids | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/column/api/response/ColumnHomeTabData;&gt;; |
| classes9.dex:34016:GET | GET | https://api.bilibili.com/x/article/hotspots | Query:id, Query:pn, Query:ps, Query:aids, Query:sort | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/column/api/response/ColumnHotSpotsData;&gt;; |
| classes9.dex:34019:POST | POST | https://api.bilibili.com/x/article/like | Query:access_key, Field:id, Field:type, Field:from_spmid, Field:spmid, Field:action_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes9.dex:34020:GET | GET | https://api.bilibili.com/x/article/sentinel/config |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes9.dex:34023:GET | GET | https://api.bilibili.com/x/article/addview | Query:access_key, Query:page, Query:from | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes9.dex:34607:GET | GET | https://api.bilibili.com/x/article/is_author | Query:access_key, Query:mid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/column/api/response/UserState;&gt;; |

## gRPC

请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。

| 路由 | 请求类型候选 | 响应类型候选 |
| --- | --- | --- |

```sh
node bin/bili-apis.mjs --edition official list --category article --limit 10
node bin/bili-apis.mjs --edition official show "ID"
```
