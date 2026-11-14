# 漫画

漫画阅读、漫画资产和漫画专用接口。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 9 条 HTTP 声明、0 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes14.dex:3308:POST | POST | https://manga.bilibili.com/twirp/community.v1.Pink/ComicReadConversionPopupReport | Field:action | Ljava/lang/Object; | not-tested |
| classes14.dex:3309:POST | POST | https://manga.bilibili.com/twirp/community.v1.Pink/ComicReadConversionPopup | Field:comic_id, Field:ep_id, Field:read_ep_count, Field:switch_ep_count | Ljava/lang/Object; | not-tested |
| classes14.dex:63117:POST | POST | https://manga.bilibili.com/twirp/comic.v1.MainStation/ListFavorite | Field:access_key, Field:page_size, Field:page_num, Field:track_url | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/comic/response/ComicFavorite;&gt;;&gt;;&gt;; | not-tested |
| classes14.dex:63118:POST | POST | https://manga.bilibili.com/twirp/comic.v1.Comic/GetABFlags | Field:names | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Loa0/a;&gt;;&gt;; | not-tested |
| classes18.dex:61372:POST | POST | https://manga.bilibili.com/twirp/column.v1.ColumnPay/GetComic | Field:comic_id, Field:ep_id, Field:is_install_bilicomic, Field:track_id | Ljava/lang/Object; | not-tested |
| classes18.dex:61373:POST | POST | https://manga.bilibili.com/twirp/pay.v1.Pay/GetBCoinLevel | Field:coin_diff | Ljava/lang/Object; | not-tested |
| classes18.dex:61374:POST | POST | https://manga.bilibili.com/twirp/pay.v1.Pay/GetOrderState | Field:order_id, Field:order_ctime | Ljava/lang/Object; | not-tested |
| classes18.dex:61375:POST | POST | https://manga.bilibili.com/twirp/pay.v1.Pay/CreatePayAndConsumeOrder | Field:pay_amount, Field:business_type, Field:business_info, Field:return_url, Field:comic_id, Field:ep_id, Field:with_ord_scope, Field:start_ord, Field:limit, Field:chapter_id, Field:track_id, Field:outer_track_id | Ljava/lang/Object; | not-tested |
| classes18.dex:61376:POST | POST | https://manga.bilibili.com/twirp/community.v1.Pink/ReportRestoreScene | Field:oaid, Field:imei, Field:android_id, Field:scene, Field:comic_id, Field:ep_id, Field:is_install_bilicomic, Field:uri | Ljava/lang/Object; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category comic --limit 10
node bin/bili-apis.mjs show "ID"
```
