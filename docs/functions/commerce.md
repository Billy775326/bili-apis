# 商城与票务

商品、会员购、票务及交易入口。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 13 条 HTTP 声明、0 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes10.dex:62001:POST | POST | https://mall.bilibili.com/mall-c/cart/na/sku/new | Query:access_key, Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/ad/adview/mall/model/CartDataBean;&gt;;&gt;; | not-tested |
| classes16.dex:49737:GET | GET | https://show.bilibili.com/api/ticket/district/dl |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/fasthybrid/runtime/component/nativeview/picker/MallCommonData;&gt;;&gt;; | not-tested |
| classes17.dex:3208:GET | GET | https://show.bilibili.com/api/ticket/district/dl |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/fasthybrid/uimodule/widget/picker/MallCommonData;&gt;;&gt;; | not-tested |
| classes17.dex:56449:POST | POST | https://mall.bilibili.com/mall-c/picture/image | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes18.dex:55568:POST | POST | https://mall.bilibili.com/mall-c-search/user/ar/list | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/opd/app/bizcommon/mallcommon/arentrance/data/ARListBean;&gt;;&gt;; | not-tested |
| classes19.dex:51403:POST | POST | https://show.bilibili.com/api/ticket/buyerinfo/add | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/mall/data/page/buyer/edit/BuyerEditResultBean;&gt;;&gt;; | not-tested |
| classes19.dex:51404:POST | POST | https://show.bilibili.com/api/ticket/buyerinfo/delete | Query:id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/mall/data/page/buyer/edit/BuyerEditResultBean;&gt;;&gt;; | not-tested |
| classes19.dex:51405:GET | GET | https://show.bilibili.com/api/ticket/buyerinfo/idtypes | Query:src | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/mall/data/page/buyer/BuyerIdTypeDataBean;&gt;;&gt;; | not-tested |
| classes19.dex:51406:POST | POST | https://show.bilibili.com/api/ticket/buyerinfo/query | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/mall/data/page/buyer/edit/BuyerItemInfoDataBean;&gt;;&gt;; | not-tested |
| classes19.dex:51407:POST | POST | https://show.bilibili.com/api/ticket/buyerinfo/update | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/mall/data/page/buyer/edit/BuyerEditResultBean;&gt;;&gt;; | not-tested |
| classes19.dex:64876:POST | POST | https://show.bilibili.com/api/ticket/upload/imageUpload | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/mall/data/page/create/submit/customer/UploadPhotoBean;&gt;;&gt;; | not-tested |
| classes19.dex:65104:POST | POST | https://show.bilibili.com/api/ticket/upload/imageUpload | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/mall/data/page/create/submit/customer/UploadPhotoBean;&gt;;&gt;; | not-tested |
| classes37.dex:10750:POST | POST | https://mall.bilibili.com/mall-c/picture/image | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category commerce --limit 10
node bin/bili-apis.mjs show "ID"
```
