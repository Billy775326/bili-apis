# 运营商服务

<!-- android-edition:start -->
包名：`com.bilibili.app.in` · 渠道：Google Play · 版本：6.8.0（9180200）。

[全部版本](../../../../README.md) · [本包文档](../README.md) · [网页接口](../../../../../pc/README.md) · [基线元数据](../../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

免流、流量卡及运营商服务。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 13 条 HTTP 声明、0 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes14.dex:266:GET | GET | https://app.bilibili.com/x/wall/operator/ip/info | Query:usermob | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/fd_service/api/beans/IpIspBean;&gt;;&gt;; | not-tested |
| classes14.dex:51968:POST | POST | https://app.bilibili.com/x/wall/telecom/active/state/log | Query:bid, Query:open_id, Query:code, Query:msg | LlC0/a&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; | not-tested |
| classes14.dex:51969:GET | GET | https://app.bilibili.com/x/wall/telecom/active/state | Query:usermob, Query:captcha | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/fd_service/bean/FreeDataUserInfoBean;&gt;;&gt;; | not-tested |
| classes14.dex:51970:POST | POST | https://card.e.189.cn/openapi/flow/getOpenId.do | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/fd_service/bean/TelUserInfoBean;&gt;; | not-tested |
| classes14.dex:51971:POST | POST | https://app.bilibili.com/x/wall/telecom/card/sms | Field:usermob | LlC0/a&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; | not-tested |
| classes14.dex:51972:GET | GET | https://app.bilibili.com/x/wall/unicom/active/state | Query:auto, Query:usermob, Query:pip, Query:fake_id, Query:need_flow_auto | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes14.dex:51973:POST | POST | https://app.bilibili.com/x/wall/unicom/order/flow/tryout | Query:pip, Query:fake_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes14.dex:51974:GET | GET | https://csapi.bol.wo.cn/videoif/smsNumber.do | Query:userid, Query:vcode | LlC0/a&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; | not-tested |
| classes14.dex:51975:GET | GET | https://csapi.bol.wo.cn/videoif/sendSmsCode.do | Query:userid | LlC0/a&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; | not-tested |
| classes14.dex:51976:GET | GET | https://csapi.bol.wo.cn/videoif/order.do | Query:spid, Query:ordertype, Query:userid, Query:token | LlC0/a&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; | not-tested |
| classes14.dex:52099:GET | GET | https://app.bilibili.com/x/wall/unicom/state | Query:usermob | LlC0/a&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; | not-tested |
| classes14.dex:52100:GET | GET | https://app.bilibili.com/x/wall/operator/ip | Query:usermob, Query:operator, Query:pip, Query:local_result, Query:local_info | LlC0/a&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; | not-tested |
| classes14.dex:65026:GET | GET | https://app.bilibili.com/x/wall/mobile/active/state | Query:usermob | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/fd_service/bean/FreeDataUserInfoBean;&gt;;&gt;; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category operator --limit 10
node bin/bili-apis.mjs show "ID"
```
