# 漫画

漫画阅读、漫画资产和漫画专用接口。分类根据路由、域名与声明类名称推断，未验证业务行为。

官方 Android 9.19.0：9 条 HTTP 声明、0 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。

[返回分类](README.md) · [与 Play 对比](comparison.md)

## HTTP

参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。

| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |
| --- | --- | --- | --- | --- |
| classes14.dex:51850:POST | POST | https://manga.bilibili.com/twirp/pay.v1.Pay/CreatePayAndConsumeOrder | Field:pay_amount, Field:business_type, Field:business_info, Field:return_url, Field:comic_id, Field:ep_id, Field:with_ord_scope, Field:start_ord, Field:limit, Field:chapter_id, Field:track_id, Field:outer_track_id | Ljava/lang/Object; |
| classes14.dex:51851:POST | POST | https://manga.bilibili.com/twirp/community.v1.Pink/ReportRestoreScene | Field:oaid, Field:imei, Field:android_id, Field:scene, Field:comic_id, Field:ep_id, Field:is_install_bilicomic, Field:uri | Ljava/lang/Object; |
| classes14.dex:51852:POST | POST | https://manga.bilibili.com/twirp/pay.v1.Pay/GetBCoinLevel | Field:coin_diff | Ljava/lang/Object; |
| classes14.dex:51853:POST | POST | https://manga.bilibili.com/twirp/pay.v1.Pay/GetOrderState | Field:order_id, Field:order_ctime | Ljava/lang/Object; |
| classes14.dex:51854:POST | POST | https://manga.bilibili.com/twirp/column.v1.ColumnPay/GetComic | Field:comic_id, Field:ep_id, Field:is_install_bilicomic, Field:track_id | Ljava/lang/Object; |
| classes9.dex:5187:POST | POST | https://manga.bilibili.com/twirp/community.v1.Pink/ComicReadConversionPopupReport | Field:action | Ljava/lang/Object; |
| classes9.dex:5188:POST | POST | https://manga.bilibili.com/twirp/community.v1.Pink/ComicReadConversionPopup | Field:comic_id, Field:ep_id, Field:read_ep_count, Field:switch_ep_count | Ljava/lang/Object; |
| classes9.dex:59623:POST | POST | https://manga.bilibili.com/twirp/comic.v1.Comic/GetABFlags | Field:names | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lqot;&gt;;&gt;; |
| classes9.dex:59624:POST | POST | https://manga.bilibili.com/twirp/comic.v1.MainStation/ListFavorite | Field:access_key, Field:page_size, Field:page_num, Field:track_url | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/comic/response/ComicFavorite;&gt;;&gt;;&gt;; |

## gRPC

请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。

| 路由 | 请求类型候选 | 响应类型候选 |
| --- | --- | --- |

```sh
node bin/bili-apis.mjs --edition official list --category comic --limit 10
node bin/bili-apis.mjs --edition official show "ID"
```
