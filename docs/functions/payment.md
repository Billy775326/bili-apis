# 支付与充电

订单、支付、付费内容及充电。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 59 条 HTTP 声明、0 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes11.dex:24094:POST | POST | https://api.bilibili.com/pgc/pay/iaa/play/start | Body:(内容未知) | Ljava/lang/Object; | not-tested |
| classes11.dex:24095:POST | POST | https://api.bilibili.com/pgc/pay/iaa/ad/request | Body:(内容未知) | Ljava/lang/Object; | not-tested |
| classes11.dex:24096:POST | POST | https://api.bilibili.com/pgc/pay/iaa/ad/redeem | Body:(内容未知) | Ljava/lang/Object; | not-tested |
| classes12.dex:5961:POST | POST | https://pay.bilibili.com/payplatform/pay/queryChannelList | Body:(内容未知), Header:Cookie, Header:oaid | LlC0/a&lt;Lcom/bilibili/bilipay/api/PaymentResponse&lt;Lcom/bilibili/bilipay/entity/CashierInfo;&gt;;&gt;; | not-tested |
| classes12.dex:5962:POST | POST | https://pay.bilibili.com/payplatform/pay/pay | Body:(内容未知), Header:Cookie | LlC0/a&lt;Lcom/bilibili/bilipay/api/PaymentResponse&lt;Lcom/bilibili/bilipay/base/entity/ChannelPayInfo;&gt;;&gt;; | not-tested |
| classes12.dex:5963:POST | POST | https://pay.bilibili.com/payplatform/pay/query | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/bilipay/api/PaymentResponse&lt;Lcom/bilibili/bilipay/entity/ResultQueryPay;&gt;;&gt;; | not-tested |
| classes12.dex:5964:POST | POST | https://pay.bilibili.com/payplatform/pay/merge/pay | Body:(内容未知), Header:Cookie | LlC0/a&lt;Lcom/bilibili/bilipay/api/PaymentResponse&lt;Lcom/bilibili/bilipay/base/entity/ChannelPayInfo;&gt;;&gt;; | not-tested |
| classes12.dex:5965:POST | POST | https://pay.bilibili.com/payplatform/pay/contract | Body:(内容未知), Header:Cookie | LlC0/a&lt;Lcom/bilibili/bilipay/api/PaymentResponse&lt;Lcom/bilibili/bilipay/base/entity/ChannelPayInfo;&gt;;&gt;; | not-tested |
| classes12.dex:5966:POST | POST | https://pay.bilibili.com/payplatform/pay/quickpay | Body:(内容未知), Header:Cookie | LlC0/a&lt;Lcom/bilibili/bilipay/api/PaymentResponse&lt;Lcom/bilibili/bilipay/base/entity/ChannelPayInfo;&gt;;&gt;; | not-tested |
| classes12.dex:5967:POST | POST | https://pay.bilibili.com/payplatform/pay/v2/contract/query | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/bilipay/api/PaymentResponse&lt;Lcom/bilibili/bilipay/entity/ResultQueryContact;&gt;;&gt;; | not-tested |
| classes12.dex:5968:POST | POST | https://pay.bilibili.com/payplatform/pay/queryMainOrder | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/bilipay/api/PaymentResponse&lt;Lcom/bilibili/bilipay/entity/ResultQueryPay;&gt;;&gt;; | not-tested |
| classes12.dex:5970:POST | POST | https://pay.bilibili.com/payplatform/pay/shield/send/verificationcode | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/bilipay/api/PaymentResponse&lt;Lcom/bilibili/bilipay/entity/CaptchaEntity;&gt;;&gt;; | not-tested |
| classes12.dex:9360:POST | POST | https://pay.bilibili.com/payplatform/iapfront/api/googlepay/purchase/verify | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/bilipay/api/PaymentResponse&lt;Lcom/bilibili/bilipay/google/play/iap/VerifyConsumeResult;&gt;;&gt;; | not-tested |
| classes12.dex:9361:POST | POST | https://pay.bilibili.com/payplatform/iapfront/api/googlepay/one/artificial | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/bilipay/api/PaymentResponse&lt;Lcom/bilibili/bilipay/google/play/iap/ArtificialResult;&gt;;&gt;; | not-tested |
| classes12.dex:9362:POST | POST | https://pay.bilibili.com/payplatform/iapfront/api/googlepay/verify/consume | Body:(内容未知) | LlC0/a&lt;Lcom/google/gson/j;&gt;; | not-tested |
| classes14.dex:22336:GET | GET | /x/upower/echo/info | Query:up_mid | Ljava/lang/Object; | not-tested |
| classes14.dex:22526:GET | GET | /x/upower/echo/shortcut/info | Query:ai_mid, Query:msg_key | Ljava/lang/Object; | not-tested |
| classes14.dex:37675:POST | POST | https://api.bilibili.com/pugv/pay/api/change/class/dialog/android | Field:sdk_version, Field:change_id, Field:search_id, Field:search_query, Field:oaid | Ljava/lang/Object; | not-tested |
| classes14.dex:37676:POST | POST | https://api.bilibili.com/pugv/pay/api/change/class/android | Field:source, Field:csource, Field:pay_channel, Field:pay_channel_id, Field:real_channel, Field:is_deduct_bp, Field:change_id, Field:report_params, Field:promotion_id | Ljava/lang/Object; | not-tested |
| classes14.dex:37677:POST | POST | https://api.bilibili.com/pugv/pay/api/order/create/large/pay | Field:season_id, Field:source, Field:coupon_token, Field:csource, Field:msource, Field:product_id, Field:product_type, Field:search_id, Field:search_query, Field:report_params | Ljava/lang/Object; | not-tested |
| classes14.dex:37678:POST | POST | https://api.bilibili.com/pugv/pay/api/order/check | Field:order_id, Field:access_key | Ljava/lang/Object; | not-tested |
| classes14.dex:37679:POST | POST | https://api.bilibili.com/pugv/pay/api/season/free | Field:source, Field:csource, Field:product_id, Field:product_type, Field:search_id, Field:search_query, Field:msource, Field:report_params | Ljava/lang/Object; | not-tested |
| classes14.dex:37680:POST | POST | https://api.bilibili.com/pugv/pay/api/order/create/v2 | Field:season_id, Field:source, Field:coupon_token, Field:pay_channel, Field:pay_channel_id, Field:real_channel, Field:is_deduct_bp, Field:csource, Field:msource, Field:product_id, Field:product_type, Field:search_id, Field:search_query, Field:report_params, Field:promotion_id | Ljava/lang/Object; | not-tested |
| classes14.dex:37681:POST | POST | https://api.bilibili.com/pugv/pay/api/pay/dialog/new/v2 | Field:season_id, Field:batch_token, Field:is_receive, Field:sdk_version, Field:access_key, Field:csource, Field:product_id, Field:product_type, Field:spmid, Field:from_spmid, Field:scene_mark, Field:search_id, Field:search_query, Field:oaid | Ljava/lang/Object; | not-tested |
| classes14.dex:38441:POST | POST | https://api.bilibili.com/pugv/pay/api/order/create | Field:season_id, Field:source, Field:coupon_token, Field:access_key, Field:csource, Field:msource, Field:product_id, Field:product_type, Field:search_id, Field:search_query, Field:report_params | Ljava/lang/Object; | not-tested |
| classes14.dex:38442:POST | POST | https://api.bilibili.com/pugv/pay/api/pay/dialog/new | Field:season_id, Field:batch_token, Field:is_receive, Field:sdk_version, Field:access_key, Field:csource, Field:product_id, Field:product_type, Field:spmid, Field:from_spmid, Field:search_id, Field:search_query | Ljava/lang/Object; | not-tested |
| classes14.dex:38443:GET | GET | https://api.bilibili.com/pugv/pay/api/package/check | Query:pack_id, Query:batch_token | Ljava/lang/Object; | not-tested |
| classes14.dex:38576:GET | GET | https://api.bilibili.com/pugv/pay/api/share/paid | Query:season_id | Ljava/lang/Object; | not-tested |
| classes14.dex:40738:POST | POST | https://api.bilibili.com/x/ugcpay/v3/trade/elec/create | FieldMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/comm/charge/api/PayOrderResponse;&gt;;&gt;; | not-tested |
| classes14.dex:40739:POST | POST | https://api.bilibili.com/x/ugcpay/v1/trade/elec/message | FieldMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes14.dex:40740:GET | GET | https://api.bilibili.com/x/ugcpay/v1/trade | Query:access_key, Query:order_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/comm/charge/api/ChargeOrderResult;&gt;;&gt;; | not-tested |
| classes14.dex:40760:GET | GET | https://api.bilibili.com/x/ugcpay/v1/reply/validate | Query:bp_num, Query:up_mid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/comm/charge/api/ChargeOrderState;&gt;;&gt;; | not-tested |
| classes14.dex:40761:GET | GET | https://api.bilibili.com/x/ugcpay/v2/trade/elec/panel | Query:elec_level, Query:elec_scene | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/comm/charge/api/PayLevel;&gt;;&gt;; | not-tested |
| classes14.dex:40762:GET | GET | https://api.bilibili.com/x/ugcpay/v1/up/reply/validate | Query:up_mid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/comm/charge/api/ChargeOrderState;&gt;;&gt;; | not-tested |
| classes14.dex:40763:GET | GET | https://api.bilibili.com/x/ugcpay-rank/v1/elec/month/up | QueryMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/comm/charge/api/ChargeRankResult;&gt;;&gt;; | not-tested |
| classes14.dex:40764:GET | GET | https://api.bilibili.com/x/ugcpay-rank/v1/elec/month | Query:up_mid, Query:av_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/comm/charge/api/ChargeRankResultForVideo;&gt;;&gt;; | not-tested |
| classes14.dex:40765:POST | POST | https://api.bilibili.com/x/upower/ad/range/refresh | Field:up_mid, Field:cid | Ljava/lang/Object; | not-tested |
| classes15.dex:17108:GET | GET | https://api.bilibili.com/x/ugcpay/v2/trade/elec/panel | Query:access_key, Query:mid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/gemini/ugc/feature/ChargePanel;&gt;;&gt;; | not-tested |
| classes16.dex:7492:POST | POST | https://pay.bilibili.com/paywallet/recharge/requestRecharge | Body:(内容未知), Header:Cookie | LlC0/a&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/bilipay/domain/bean/recharge/RechargeParamResultInfo;&gt;;&gt;; | not-tested |
| classes16.dex:7493:POST | POST | https://pay.bilibili.com/paywallet/recharge/getRechargePanel | Body:(内容未知), Header:Cookie | LlC0/a&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/bilipay/domain/bean/recharge/RechargePanelInfo;&gt;;&gt;; | not-tested |
| classes16.dex:7494:POST | POST | https://pay.bilibili.com/paywallet/recharge/queryOrder | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/bilipay/domain/bean/cashier/ResultQueryRecharge;&gt;;&gt;; | not-tested |
| classes16.dex:7495:POST | POST | https://pay.bilibili.com/payplatform/pay/queryChannelList | Body:(内容未知), Header:Cookie, Header:oaid | LlC0/a&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/bilipay/domain/bean/cashier/CashierInfo;&gt;;&gt;; | not-tested |
| classes16.dex:7496:POST | POST | https://pay.bilibili.com/payplatform/pay/pay | Body:(内容未知), Header:Cookie | LlC0/a&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/bilipay/domain/bean/cashier/ChannelPayInfo;&gt;;&gt;; | not-tested |
| classes16.dex:7497:POST | POST | https://pay.bilibili.com/payplatform/pay/query | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/bilipay/domain/bean/cashier/ResultQueryPay;&gt;;&gt;; | not-tested |
| classes16.dex:7498:POST | POST | https://pay.bilibili.com/paywallet/recharge/requestServiceRecharge | Body:(内容未知), Header:Cookie | LlC0/a&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/bilipay/domain/bean/recharge/QuickRechargeParamResultInfo;&gt;;&gt;; | not-tested |
| classes16.dex:7499:POST | POST | https://pay.bilibili.com/payplatform/fund/out/recharge/req | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/bilipay/domain/bean/recharge/AssetsRechargeParamResultInfo;&gt;;&gt;; | not-tested |
| classes16.dex:25615:POST | POST | https://pay.bilibili.com/paywallet/recharge/requestRecharge | Body:(内容未知), Header:Cookie | LlC0/a&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/bilipay/domain/bean/recharge/RechargeParamResultInfo;&gt;;&gt;; | not-tested |
| classes16.dex:25616:POST | POST | https://pay.bilibili.com/paywallet/recharge/getRechargePanel/v2 | Body:(内容未知), Header:Cookie | LlC0/a&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/bilipay/domain/bean/recharge/RechargePanelInfo;&gt;;&gt;; | not-tested |
| classes16.dex:25617:POST | POST | https://pay.bilibili.com/paywallet/recharge/queryOrder | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/bilipay/domain/bean/cashier/ResultQueryRecharge;&gt;;&gt;; | not-tested |
| classes16.dex:25618:POST | POST | https://pay.bilibili.com/payplatform/cashier/bp/recharge/queryParam | Body:(内容未知), Header:Cookie | LlC0/a&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/bilipay/domain/bean/recharge/ConvenientRechargeParamResultInfo;&gt;;&gt;; | not-tested |
| classes16.dex:57660:POST | POST | https://pay.bilibili.com/paywallet/wallet/listForUserRecharges | Body:(内容未知), Header:Cookie | LlC0/a&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/biliwallet/domain/bean/wallet/ResultRechargeListBean;&gt;;&gt;; | not-tested |
| classes16.dex:57661:POST | POST | https://pay.bilibili.com/paywallet/wallet/listForUserPays | Body:(内容未知), Header:Cookie | LlC0/a&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/biliwallet/domain/bean/wallet/ResultConsumeListBean;&gt;;&gt;; | not-tested |
| classes16.dex:57662:POST | POST | https://pay.bilibili.com/paywallet/coupon/listForUserCoupons | Body:(内容未知), Header:Cookie | LlC0/a&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/biliwallet/domain/bean/wallet/ResultCouponListBean;&gt;;&gt;; | not-tested |
| classes16.dex:57663:POST | POST | https://pay.bilibili.com/paywallet/wallet/getWalletPage/v2 | Body:(内容未知), Header:Cookie | LlC0/a&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/biliwallet/domain/bean/walletv2/ResultMineWalletPanelBean;&gt;;&gt;; | not-tested |
| classes18.dex:21054:POST | POST | https://api.bilibili.com/pgc/pay/api/season/order/create | Field:season_id, Field:season_type, Field:coupon_token, Field:is_quick, Field:demand_ep_id, Field:ep_count, Field:pay_channel, Field:pay_channel_id, Field:section | Ljava/lang/Object; | not-tested |
| classes18.dex:21056:POST | POST | https://api.bilibili.com/pgc/pay/api/season/exchange | Field:coupon_token, Field:otype, Field:season_id, Field:episode_id | Ljava/lang/Object; | not-tested |
| classes18.dex:21057:POST | POST | https://api.bilibili.com/pgc/pay/api/season/order/check | Field:season_type, Field:order_id | Ljava/lang/Object; | not-tested |
| classes21.dex:25278:GET | GET | https://api.bilibili.com/pugv/pay/api/my/coupons/new/v2 | Query:season_id | Ljava/lang/Object; | not-tested |
| classes21.dex:25279:POST | POST | https://api.bilibili.com/pugv/pay/api/receive/coupon | Field:batch_token, Field:csource, Field:season_id, Field:spmid, Field:from_spmid | Ljava/lang/Object; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category payment --limit 10
node bin/bili-apis.mjs show "ID"
```
