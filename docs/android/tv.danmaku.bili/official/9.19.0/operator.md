# 运营商服务

<!-- android-edition:start -->
包名：`tv.danmaku.bili` · 渠道：Official Android 64-bit · 版本：9.19.0（9190400）。

[全部版本](../../../README.md) · [本包文档](README.md) · [网页接口](../../../../pc/README.md) · [基线元数据](../../../../../catalog/android/tv.danmaku.bili/official/9.19.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

免流、流量卡及运营商服务。分类根据路由、域名与声明类名称推断，未验证业务行为。

官方 Android 9.19.0：14 条 HTTP 声明、0 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。

[返回分类](README.md) · [与 Play 对比](comparison.md)

## HTTP

参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。

| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |
| --- | --- | --- | --- | --- |
| classes10.dex:9662:POST | POST | https://app.bilibili.com/x/wall/telecom/active/state/log | Query:bid, Query:open_id, Query:code, Query:msg | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; |
| classes10.dex:9663:GET | GET | https://app.bilibili.com/x/wall/telecom/active/state | Query:usermob, Query:captcha | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/fd_service/bean/FreeDataUserInfoBean;&gt;;&gt;; |
| classes10.dex:9664:POST | POST | https://card.e.189.cn/openapi/flow/getOpenId.do | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/fd_service/bean/TelUserInfoBean;&gt;; |
| classes10.dex:9665:POST | POST | https://app.bilibili.com/x/wall/telecom/card/sms | Field:usermob | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; |
| classes10.dex:9666:GET | GET | https://app.bilibili.com/x/wall/unicom/active/state | Query:auto, Query:usermob, Query:pip, Query:fake_id, Query:need_flow_auto | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes10.dex:9667:POST | POST | https://app.bilibili.com/x/wall/unicom/order/flow/tryout | Query:pip, Query:fake_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes10.dex:9668:GET | GET | https://csapi.bol.wo.cn/videoif/smsNumber.do | Query:userid, Query:vcode | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; |
| classes10.dex:9669:GET | GET | https://csapi.bol.wo.cn/videoif/sendSmsCode.do | Query:userid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; |
| classes10.dex:9670:GET | GET | https://csapi.bol.wo.cn/videoif/order.do | Query:spid, Query:ordertype, Query:userid, Query:token | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; |
| classes10.dex:50717:GET | GET | https://app.bilibili.com/x/wall/mobile/active/state | Query:usermob | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/fd_service/bean/FreeDataUserInfoBean;&gt;;&gt;; |
| classes10.dex:51174:GET | GET | https://app.bilibili.com/x/wall/operator/ip | Query:usermob, Query:operator, Query:pip, Query:local_result, Query:local_info | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; |
| classes10.dex:51175:GET | GET | https://app.bilibili.com/x/wall/unicom/state | Query:usermob | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; |
| classes10.dex:51176:GET | GET | https://app.bilibili.com/x/wall/unicom/userstate | Query:usermob | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; |
| classes10.dex:58506:GET | GET | https://app.bilibili.com/x/wall/operator/ip/info | Query:usermob | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/fd_service/api/beans/IpIspBean;&gt;;&gt;; |

## gRPC

请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。

| 路由 | 请求类型候选 | 响应类型候选 |
| --- | --- | --- |

```sh
node bin/bili-apis.mjs --edition official list --category operator --limit 10
node bin/bili-apis.mjs --edition official show "ID"
```
