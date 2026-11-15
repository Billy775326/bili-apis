# 专栏与阅读

<!-- android-edition:start -->
包名：`com.bilibili.app.in` · 渠道：Google Play · 版本：6.8.0（9180200）。

[全部版本](../../../../README.md) · [本包文档](../README.md) · [网页接口](../../../../../pc/README.md) · [基线元数据](../../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

专栏文章和阅读功能。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 16 条 HTTP 声明、0 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes12.dex:52415:GET | GET | https://api.bilibili.com/x/article/edit_times | Query:id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followinglist/opus/manager/ArticleEditTime;&gt;;&gt;; | not-tested |
| classes14.dex:38888:POST | POST | https://api.bilibili.com/x/article/complaints | Header:x-bili-gaia-vtoken, Query:access_key, Field:aid, Field:cid, Field:images, Field:reason | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes14.dex:38889:GET | GET | https://api.bilibili.com/x/article/categories |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/column/api/response/Column$Category;&gt;;&gt;;&gt;; | not-tested |
| classes14.dex:38890:GET | GET | https://api.bilibili.com/x/article/list/articles | Query:access_key, Query:id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/column/api/response/ColumnArticleList;&gt;;&gt;; | not-tested |
| classes14.dex:38891:GET | GET | https://api.bilibili.com/x/article/viewinfo | Query:access_key, Query:id, Query:from | LlC0/a&lt;Lcom/bilibili/column/api/response/ColumnDetailUserInfo;&gt;; | not-tested |
| classes14.dex:38892:GET | GET | https://api.bilibili.com/x/article/edit_times | Query:id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/column/api/response/ArticleEditTime;&gt;;&gt;; | not-tested |
| classes14.dex:38893:GET | GET | https://api.bilibili.com/x/article/listinfo | Query:id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/column/api/response/ColumnArticleList;&gt;;&gt;; | not-tested |
| classes14.dex:38894:GET | GET | https://api.bilibili.com/x/article/recommends | Query:access_key, Query:cid, Query:pn, Query:ps, Query:aids, Query:sort, Query:from | LlC0/a&lt;Lcom/bilibili/column/api/response/ColumnRecommendData;&gt;; | not-tested |
| classes14.dex:38895:GET | GET | https://api.bilibili.com/x/article/recommends/plus | Query:access_key, Query:cid, Query:pn, Query:ps, Query:aids, Query:sort, Query:from | LlC0/a&lt;Lcom/bilibili/column/api/response/ColumnHomeTabData;&gt;; | not-tested |
| classes14.dex:38896:GET | GET | https://api.bilibili.com/x/article/hotspots | Query:id, Query:pn, Query:ps, Query:aids, Query:sort | LlC0/a&lt;Lcom/bilibili/column/api/response/ColumnHotSpotsData;&gt;; | not-tested |
| classes14.dex:38897:POST | POST | https://api.bilibili.com/x/article/like | Query:access_key, Field:id, Field:type, Field:from_spmid, Field:spmid, Field:action_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes14.dex:38898:GET | GET | https://api.bilibili.com/x/article/sentinel/config |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes14.dex:38901:GET | GET | https://api.bilibili.com/x/article/addview | Query:access_key, Query:page, Query:from | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes14.dex:39514:GET | GET | https://api.bilibili.com/x/article/is_author | Query:access_key, Query:mid | LlC0/a&lt;Lcom/bilibili/column/api/response/UserState;&gt;; | not-tested |
| classes18.dex:8966:POST | POST | https://api.bilibili.com/x/article/like | Query:access_key, Field:id, Field:type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes21.dex:20578:GET | GET | https://api.bilibili.com/x/article/categories |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/search2/api/Column$Category;&gt;;&gt;;&gt;; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category article --limit 10
node bin/bili-apis.mjs show "ID"
```
