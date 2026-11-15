# 支付与充电

订单、支付、付费内容及充电。分类根据路由、域名与声明类名称推断，未验证业务行为。

官方 Android 9.19.0：60 条 HTTP 声明、0 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。

[返回分类](README.md) · [与 Play 对比](comparison.md)

## HTTP

参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。

| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |
| --- | --- | --- | --- | --- |
| classes10.dex:41557:POST | POST | https://pay.bilibili.com/payplatform/pay/queryChannelList | Body:(内容未知), Header:Cookie, Header:oaid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/bilipay/domain/bean/cashier/CashierInfo;&gt;;&gt;; |
| classes10.dex:41558:POST | POST | https://pay.bilibili.com/payplatform/pay/pay | Body:(内容未知), Header:Cookie | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/bilipay/domain/bean/cashier/ChannelPayInfo;&gt;;&gt;; |
| classes10.dex:41559:POST | POST | https://pay.bilibili.com/paywallet/recharge/getRechargePanel | Body:(内容未知), Header:Cookie | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/bilipay/domain/bean/recharge/RechargePanelInfo;&gt;;&gt;; |
| classes10.dex:41560:POST | POST | https://pay.bilibili.com/payplatform/pay/query | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/bilipay/domain/bean/cashier/ResultQueryPay;&gt;;&gt;; |
| classes10.dex:41561:POST | POST | https://pay.bilibili.com/paywallet/recharge/queryOrder | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/bilipay/domain/bean/cashier/ResultQueryRecharge;&gt;;&gt;; |
| classes10.dex:41562:POST | POST | https://pay.bilibili.com/payplatform/fund/out/recharge/req | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/bilipay/domain/bean/recharge/AssetsRechargeParamResultInfo;&gt;;&gt;; |
| classes10.dex:41563:POST | POST | https://pay.bilibili.com/paywallet/recharge/requestServiceRecharge | Body:(内容未知), Header:Cookie | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/bilipay/domain/bean/recharge/QuickRechargeParamResultInfo;&gt;;&gt;; |
| classes10.dex:41564:POST | POST | https://pay.bilibili.com/paywallet/recharge/requestRecharge | Body:(内容未知), Header:Cookie | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/bilipay/domain/bean/recharge/RechargeParamResultInfo;&gt;;&gt;; |
| classes10.dex:50011:POST | POST | https://pay.bilibili.com/paywallet/wallet/listForUserPays | Body:(内容未知), Header:Cookie | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/biliwallet/domain/bean/wallet/ResultConsumeListBean;&gt;;&gt;; |
| classes10.dex:50012:POST | POST | https://pay.bilibili.com/paywallet/coupon/listForUserCoupons | Body:(内容未知), Header:Cookie | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/biliwallet/domain/bean/wallet/ResultCouponListBean;&gt;;&gt;; |
| classes10.dex:50013:POST | POST | https://pay.bilibili.com/paywallet/wallet/listForUserRecharges | Body:(内容未知), Header:Cookie | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/biliwallet/domain/bean/wallet/ResultRechargeListBean;&gt;;&gt;; |
| classes10.dex:50014:POST | POST | https://pay.bilibili.com/paywallet/wallet/getUserWallet | Body:(内容未知), Header:Cookie | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/biliwallet/domain/bean/wallet/ResultWalletPanelBean;&gt;;&gt;; |
| classes10.dex:50015:POST | POST | https://pay.bilibili.com/paywallet/wallet/getWalletPage/v2 | Body:(内容未知), Header:Cookie | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/biliwallet/domain/bean/walletv2/ResultMineWalletPanelBean;&gt;;&gt;; |
| classes10.dex:50016:POST | POST | https://pay.bilibili.com/payplatform/pay/qryForPayscoreDetail | Body:(内容未知), Header:Cookie | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/biliwallet/domain/bean/walletv2/WxQueryStringBean;&gt;;&gt;; |
| classes10.dex:54327:POST | POST | https://pay.bilibili.com/paywallet/recharge/getRechargePanel/v2 | Body:(内容未知), Header:Cookie | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/bilipay/domain/bean/recharge/RechargePanelInfo;&gt;;&gt;; |
| classes10.dex:54328:POST | POST | https://pay.bilibili.com/payplatform/cashier/bp/recharge/queryParam | Body:(内容未知), Header:Cookie | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/bilipay/domain/bean/recharge/ConvenientRechargeParamResultInfo;&gt;;&gt;; |
| classes10.dex:54329:POST | POST | https://pay.bilibili.com/paywallet/recharge/queryOrder | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/bilipay/domain/bean/cashier/ResultQueryRecharge;&gt;;&gt;; |
| classes10.dex:54330:POST | POST | https://pay.bilibili.com/paywallet/recharge/requestRecharge | Body:(内容未知), Header:Cookie | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/lib/bilipay/domain/api/PaymentResponse&lt;Lcom/bilibili/lib/bilipay/domain/bean/recharge/RechargeParamResultInfo;&gt;;&gt;; |
| classes12.dex:95:POST | POST | https://api.bilibili.com/pgc/pay/api/season/order/check | Field:season_type, Field:order_id | Ljava/lang/Object; |
| classes12.dex:97:POST | POST | https://api.bilibili.com/pgc/pay/api/season/order/create | Field:season_id, Field:season_type, Field:coupon_token, Field:is_quick, Field:demand_ep_id, Field:ep_count, Field:pay_channel, Field:pay_channel_id, Field:section | Ljava/lang/Object; |
| classes12.dex:99:POST | POST | https://api.bilibili.com/pgc/pay/api/season/exchange | Field:coupon_token, Field:otype, Field:season_id, Field:episode_id | Ljava/lang/Object; |
| classes12.dex:30192:GET | GET | https://api.bilibili.com/x/vip/v1/order/status | Query:order_no, Query:app_id, Query:payment_scenario | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/call/rxjava/RxGeneralResponse&lt;Lcom/bilibili/module/vip/mall/VipPayResultInfo;&gt;;&gt;; |
| classes12.dex:30194:POST | POST | https://api.bilibili.com/x/vip/order/create | Query:accessKey, Query:with_fail_dialog, FieldMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes13.dex:49452:POST | POST | https://api.bilibili.com/pgc/pay/iaa/ad/redeem | Body:(内容未知) | Ljava/lang/Object; |
| classes13.dex:49453:POST | POST | https://api.bilibili.com/pgc/pay/iaa/play/start | Body:(内容未知) | Ljava/lang/Object; |
| classes13.dex:49454:POST | POST | https://api.bilibili.com/pgc/pay/iaa/ad/request | Body:(内容未知) | Ljava/lang/Object; |
| classes15.dex:19834:GET | GET | https://api.bilibili.com/pugv/pay/api/my/coupons/new/v2 | Query:season_id | Ljava/lang/Object; |
| classes15.dex:19835:POST | POST | https://api.bilibili.com/pugv/pay/api/receive/coupon | Field:batch_token, Field:csource, Field:season_id, Field:spmid, Field:from_spmid | Ljava/lang/Object; |
| classes32.dex:59269:GET | GET | https://api.bilibili.com/x/ugcpay/v1/reply/validate | Query:bp_num, Query:up_mid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/comm/charge/api/ChargeOrderState;&gt;;&gt;; |
| classes32.dex:59270:GET | GET | https://api.bilibili.com/x/ugcpay/v2/trade/elec/panel | Query:elec_level, Query:elec_scene | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/comm/charge/api/PayLevel;&gt;;&gt;; |
| classes32.dex:59271:GET | GET | https://api.bilibili.com/x/ugcpay/v1/up/reply/validate | Query:up_mid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/comm/charge/api/ChargeOrderState;&gt;;&gt;; |
| classes32.dex:59272:GET | GET | https://api.bilibili.com/x/ugcpay-rank/v1/elec/month/up | QueryMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/comm/charge/api/ChargeRankResult;&gt;;&gt;; |
| classes32.dex:59273:GET | GET | https://api.bilibili.com/x/ugcpay-rank/v1/elec/month | Query:up_mid, Query:av_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/comm/charge/api/ChargeRankResultForVideo;&gt;;&gt;; |
| classes32.dex:59274:POST | POST | https://api.bilibili.com/x/upower/ad/range/refresh | Field:up_mid, Field:cid | Ljava/lang/Object; |
| classes5.dex:39339:POST | POST | https://api.bilibili.com/x/ugcpay/v3/trade/elec/create | FieldMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/comm/charge/api/PayOrderResponse;&gt;;&gt;; |
| classes5.dex:39340:POST | POST | https://api.bilibili.com/x/ugcpay/v1/trade/elec/message | FieldMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:39342:GET | GET | https://api.bilibili.com/x/ugcpay/v1/trade | Query:access_key, Query:order_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/comm/charge/api/ChargeOrderResult;&gt;;&gt;; |
| classes5.dex:43564:GET | GET | https://api.bilibili.com/x/ugcpay/v2/trade/elec/panel | Query:access_key, Query:mid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/gemini/ugc/feature/ChargePanel;&gt;;&gt;; |
| classes8.dex:45860:POST | POST | https://pay.bilibili.com/payplatform/pay/shield/send/verificationcode | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/bilipay/api/PaymentResponse&lt;Lcom/bilibili/bilipay/entity/CaptchaEntity;&gt;;&gt;; |
| classes8.dex:45861:POST | POST | https://pay.bilibili.com/payplatform/pay/contract | Body:(内容未知), Header:Cookie | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/bilipay/api/PaymentResponse&lt;Lcom/bilibili/bilipay/base/entity/ChannelPayInfo;&gt;;&gt;; |
| classes8.dex:45862:POST | POST | https://pay.bilibili.com/payplatform/pay/merge/pay | Body:(内容未知), Header:Cookie | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/bilipay/api/PaymentResponse&lt;Lcom/bilibili/bilipay/base/entity/ChannelPayInfo;&gt;;&gt;; |
| classes8.dex:45863:POST | POST | https://pay.bilibili.com/payplatform/pay/queryChannelList | Body:(内容未知), Header:Cookie, Header:oaid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/bilipay/api/PaymentResponse&lt;Lcom/bilibili/bilipay/entity/CashierInfo;&gt;;&gt;; |
| classes8.dex:45864:POST | POST | https://pay.bilibili.com/payplatform/pay/pay | Body:(内容未知), Header:Cookie | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/bilipay/api/PaymentResponse&lt;Lcom/bilibili/bilipay/base/entity/ChannelPayInfo;&gt;;&gt;; |
| classes8.dex:45865:POST | POST | https://pay.bilibili.com/payplatform/pay/quickpay | Body:(内容未知), Header:Cookie | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/bilipay/api/PaymentResponse&lt;Lcom/bilibili/bilipay/base/entity/ChannelPayInfo;&gt;;&gt;; |
| classes8.dex:45866:POST | POST | https://pay.bilibili.com/payplatform/pay/v2/contract/query | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/bilipay/api/PaymentResponse&lt;Lcom/bilibili/bilipay/entity/ResultQueryContact;&gt;;&gt;; |
| classes8.dex:45867:POST | POST | https://pay.bilibili.com/payplatform/pay/queryMainOrder | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/bilipay/api/PaymentResponse&lt;Lcom/bilibili/bilipay/entity/ResultQueryPay;&gt;;&gt;; |
| classes8.dex:45868:POST | POST | https://pay.bilibili.com/payplatform/pay/query | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/bilipay/api/PaymentResponse&lt;Lcom/bilibili/bilipay/entity/ResultQueryPay;&gt;;&gt;; |
| classes9.dex:32993:POST | POST | https://api.bilibili.com/pugv/pay/api/order/check | Field:order_id, Field:access_key | Ljava/lang/Object; |
| classes9.dex:32994:POST | POST | https://api.bilibili.com/pugv/pay/api/order/create/v2 | Field:season_id, Field:source, Field:coupon_token, Field:pay_channel, Field:pay_channel_id, Field:real_channel, Field:is_deduct_bp, Field:csource, Field:msource, Field:product_id, Field:product_type, Field:search_id, Field:search_query, Field:report_params, Field:promotion_id | Ljava/lang/Object; |
| classes9.dex:32995:POST | POST | https://api.bilibili.com/pugv/pay/api/change/class/android | Field:source, Field:csource, Field:pay_channel, Field:pay_channel_id, Field:real_channel, Field:is_deduct_bp, Field:change_id, Field:report_params, Field:promotion_id | Ljava/lang/Object; |
| classes9.dex:32996:POST | POST | https://api.bilibili.com/pugv/pay/api/season/free | Field:source, Field:csource, Field:product_id, Field:product_type, Field:search_id, Field:search_query, Field:msource, Field:report_params | Ljava/lang/Object; |
| classes9.dex:32997:POST | POST | https://api.bilibili.com/pugv/pay/api/pay/dialog/new/v2 | Field:season_id, Field:batch_token, Field:is_receive, Field:sdk_version, Field:access_key, Field:csource, Field:product_id, Field:product_type, Field:spmid, Field:from_spmid, Field:scene_mark, Field:search_id, Field:search_query, Field:oaid | Ljava/lang/Object; |
| classes9.dex:32998:POST | POST | https://api.bilibili.com/pugv/pay/api/change/class/dialog/android | Field:sdk_version, Field:change_id, Field:search_id, Field:search_query, Field:oaid | Ljava/lang/Object; |
| classes9.dex:32999:POST | POST | https://api.bilibili.com/pugv/pay/api/order/create/large/pay | Field:season_id, Field:source, Field:coupon_token, Field:csource, Field:msource, Field:product_id, Field:product_type, Field:search_id, Field:search_query, Field:report_params | Ljava/lang/Object; |
| classes9.dex:33623:POST | POST | https://api.bilibili.com/pugv/pay/api/order/create | Field:season_id, Field:source, Field:coupon_token, Field:access_key, Field:csource, Field:msource, Field:product_id, Field:product_type, Field:search_id, Field:search_query, Field:report_params | Ljava/lang/Object; |
| classes9.dex:33624:POST | POST | https://api.bilibili.com/pugv/pay/api/pay/dialog/new | Field:season_id, Field:batch_token, Field:is_receive, Field:sdk_version, Field:access_key, Field:csource, Field:product_id, Field:product_type, Field:spmid, Field:from_spmid, Field:search_id, Field:search_query | Ljava/lang/Object; |
| classes9.dex:33625:GET | GET | https://api.bilibili.com/pugv/pay/api/package/check | Query:pack_id, Query:batch_token | Ljava/lang/Object; |
| classes9.dex:33725:GET | GET | https://api.bilibili.com/pugv/pay/api/share/paid | Query:season_id | Ljava/lang/Object; |
| classes9.dex:54835:GET | GET | /x/upower/echo/info | Query:up_mid | Ljava/lang/Object; |
| classes9.dex:62148:GET | GET | /x/upower/echo/shortcut/info | Query:ai_mid, Query:msg_key | Ljava/lang/Object; |

## gRPC

请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。

| 路由 | 请求类型候选 | 响应类型候选 |
| --- | --- | --- |

```sh
node bin/bili-apis.mjs --edition official list --category payment --limit 10
node bin/bili-apis.mjs --edition official show "ID"
```
