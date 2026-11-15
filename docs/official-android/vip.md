# 大会员与装扮

大会员、权益、装扮及数字藏品。分类根据路由、域名与声明类名称推断，未验证业务行为。

官方 Android 9.19.0：45 条 HTTP 声明、10 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。

[返回分类](README.md) · [与 Play 对比](comparison.md)

## HTTP

参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。

| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |
| --- | --- | --- | --- | --- |
| classes10.dex:6063:GET | GET | /x/vas/smelt/card/tutorial |  | Ljava/lang/Object; |
| classes10.dex:6064:GET | GET | /x/vas/dlc_act/card/splash_info | Query:act_id, Query:card_type_id, Query:screen_width, Query:screen_height | Ljava/lang/Object; |
| classes10.dex:6065:GET | GET | /x/vas/smelt/card/property_info | Query:vmid, Query:card_id | Ljava/lang/Object; |
| classes10.dex:6066:GET | GET | /x/vas/nftcard/isallowtransfer | Query:act_id, Query:card_id | Ljava/lang/Object; |
| classes10.dex:6067:POST | POST | /x/vas/smelt/my_decompose/lock | Body:(内容未知) | Ljava/lang/Object; |
| classes10.dex:6068:GET | GET | /x/vas/dlc_act/card_right/usage | Query:act_id, Query:card_id, Query:card_type_id | Ljava/lang/Object; |
| classes10.dex:53330:GET | GET | /x/vas/dlc_act/card/widget_info_v2 | Query:raw | Ljava/lang/Object; |
| classes12.dex:5652:POST | POST | https://api.bilibili.com/x/vip/ads/material/report | Body:(内容未知) | Lm6x; |
| classes12.dex:13572:POST | POST | https://api.bilibili.com/x/vip/ads/material/report | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/response/BiliApiResponse&lt;Lkotlin/Unit;&gt;;&gt;; |
| classes12.dex:30179:POST | POST | https://api.bilibili.com/x/vip/privilege/remind | Field:rights_type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/module/vip/combine/VipPrivilege;&gt;;&gt;; |
| classes12.dex:30337:GET | GET | https://api.bilibili.com/x/vip/coupon/list | Query:access_key, Query:id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/module/vip/choosecoupon/VipCouponGeneralInfo;&gt;;&gt;; |
| classes12.dex:30338:GET | GET | https://api.bilibili.com/x/vip/coupon/list/v3 | Query:pid, Query:discount_id, Query:scene | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/module/vip/choosecoupon/VipCouponGeneralInfo;&gt;;&gt;; |
| classes12.dex:30339:GET | GET | https://api.bilibili.com/x/vip/v1/frozenTime | Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Integer;&gt;;&gt;; |
| classes12.dex:30341:POST | POST | https://api.bilibili.com/x/vip/v1/unfrozen | Field:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes12.dex:30342:POST | POST | https://api.bilibili.com/x/vip/coupon/unlock | Query:access_key, Query:coupon_token | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes12.dex:58924:GET | GET | https://api.bilibili.com/x/vip/vip_privilege/info | Query:privilege_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/vip/PrivilegeInfo;&gt;;&gt;; |
| classes14.dex:28586:POST | POST | https://api.bilibili.com/x/vip/hd/trial_modify | Field:modify_type, Field:biz_type, Field:st_uuid, Field:aid | Ljava/lang/Object; |
| classes14.dex:52184:POST | POST | https://api.bilibili.com/x/vip/ads/material/report | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/response/BiliApiResponse&lt;Lkotlin/Unit;&gt;;&gt;; |
| classes16.dex:16361:POST | POST | https://api.bilibili.com/x/vip/ads/material/report | Body:(内容未知) | Ljava/lang/Object; |
| classes18.dex:27305:POST | POST | https://api.bilibili.com/x/vip/user/unsign_probability/hand | Field:probs | Ljava/lang/Object; |
| classes19.dex:13245:POST | POST | https://api.bilibili.com/x/vip/ads/material/report | Body:(内容未知) | Ljava/lang/Object; |
| classes28.dex:14364:POST | POST | https://api.bilibili.com/x/vip/ads/material/report | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes28.dex:38386:POST | POST | http://api.bilibili.com/x/garb/comment/bg/edit | Field:mid, Field:card_type_id, Field:card_id, Field:act_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; |
| classes28.dex:38387:GET | GET | http://api.bilibili.com/x/garb/digital/card/detail | Query:mid, Query:vmid, Query:card_id, Query:use_scene | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/garb/api/DigitalCardDetail;&gt;;&gt;; |
| classes28.dex:38388:POST | POST | http://api.bilibili.com/x/vas/dlc_act/lottery/draw_item | Field:act_id, Field:mid, Field:lottery_id, Field:lottery_num, Field:biz_info | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/garb/api/BillDLCRespInfo;&gt;;&gt;; |
| classes28.dex:38389:GET | GET | http://api.bilibili.com/x/vas/nftcard/isallowtransfer | Query:act_id, Query:card_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/garb/api/BiliNftTransfer;&gt;;&gt;; |
| classes28.dex:38390:GET | GET | http://api.bilibili.com/x/vas/nftcard/carddetail | Query:act_id, Query:card_type_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/garb/api/BiliCardDetail;&gt;;&gt;; |
| classes28.dex:38391:GET | GET | http://api.bilibili.com/x/vas/dlc_act/act/card/detail | Query:act_id, Query:card_type_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/garb/api/BiliCardDetail;&gt;;&gt;; |
| classes28.dex:38392:GET | GET | http://api.bilibili.com/x/vas/nftcard/drawcard | Query:act_id, Query:mid, Query:round_index | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/garb/api/BiliDrawCard;&gt;;&gt;; |
| classes28.dex:38699:POST | POST | https://api.bilibili.com/x/garb/v1/user/equip/unload | Field:access_key, Field:part | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes28.dex:38884:GET | GET | https://api.bilibili.com/x/vas/dlc_act/card/splash_info | Query:act_id, Query:card_type_id, Query:screen_width, Query:screen_height | Ljava/lang/Object; |
| classes28.dex:38885:POST | POST | https://api.bilibili.com/x/vas/smelt/my_decompose/lock | Body:(内容未知) | Ljava/lang/Object; |
| classes32.dex:59978:POST | POST | https://api.bilibili.com/x/vip/gsm/activity/preload | Query:platform | Ljava/lang/Object; |
| classes32.dex:59979:POST | POST | https://api.bilibili.com/x/vip/gsm/privilege/callback | Field:result_code, Field:status | Ljava/lang/Object; |
| classes32.dex:59980:POST | POST | https://api.bilibili.com/x/vip/gsm/activity/report_act | Query:promos, Query:platform | Ljava/lang/Object; |
| classes32.dex:59981:POST | POST | https://api.bilibili.com/x/vip/gsm/privilege/verify | Query:access_key | Ljava/lang/Object; |
| classes5.dex:7622:GET | GET | https://api.bilibili.com/x/garb/digital/actList | Query:mid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/ui/nft/data/DigitalActList;&gt;;&gt;; |
| classes5.dex:7623:POST | POST | https://api.bilibili.com/x/garb/digital/collection | Field:mid, Field:page_size, Field:use_scene, Field:act_type, Field:act_id, Field:next_start_point | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/ui/nft/data/DigitalCollection;&gt;;&gt;; |
| classes5.dex:7626:GET | GET | https://api.bilibili.com/x/vas/digital/space_info | Query:nft_id, Query:vmid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliDigitalInfo;&gt;;&gt;; |
| classes5.dex:7627:GET | GET | https://api.bilibili.com/x/garb/digital/grant/remindInfo | Query:mid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/ui/nft/data/RemindInfo;&gt;;&gt;; |
| classes5.dex:17476:GET | GET | https://api.bilibili.com/x/garb/v1/trade/query | Query:access_key, Query:order_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/emoticon/model/EmoticonOrderStatus;&gt;;&gt;; |
| classes5.dex:17480:GET | GET | https://api.bilibili.com/x/garb/v1/trade/panel/emoji | Query:access_key, Query:item_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/emoticon/model/EmoticonPayInfo;&gt;;&gt;; |
| classes5.dex:17484:POST | POST | https://api.bilibili.com/x/garb/v1/trade/create | Field:access_key, Field:item_id, Field:currency, Field:add_month | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/emoticon/model/EmoticonPurchase;&gt;;&gt;; |
| classes9.dex:19800:POST | POST | http://api.bilibili.com/x/garb/right/echo/background_bind | Field:bg_id, Field:biz_id | Ljava/lang/Object; |
| classes9.dex:19801:GET | GET | http://api.bilibili.com/x/garb/right/echo/background_list | Query:biz_id | Ljava/lang/Object; |

## gRPC

请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。

| 路由 | 请求类型候选 | 响应类型候选 |
| --- | --- | --- |
| /bilibili.pangu.gallery.v1.GalleryInterface/AgreePolicy | Lcom/bapis/bilibili/pangu/gallery/v1/AgreePolicyReq; | Lcom/bapis/bilibili/pangu/gallery/v1/AgreePolicyReply; |
| /bilibili.pangu.gallery.v1.GalleryInterface/BasicInfo | Lcom/bapis/bilibili/pangu/gallery/v1/BasicInfoReq; | Lcom/bapis/bilibili/pangu/gallery/v1/BasicInfoReply; |
| /bilibili.pangu.gallery.v1.GalleryInterface/GetBanners | Lcom/bapis/bilibili/pangu/gallery/v1/GetBannersReq; | Lcom/bapis/bilibili/pangu/gallery/v1/GetBannersReply; |
| /bilibili.pangu.gallery.v1.GalleryInterface/GetLastPolicy | Lcom/bapis/bilibili/pangu/gallery/v1/GetLastPolicyReq; | Lcom/bapis/bilibili/pangu/gallery/v1/GetLastPolicyReply; |
| /bilibili.pangu.gallery.v1.GalleryInterface/ListNFTByMid | Lcom/bapis/bilibili/pangu/gallery/v1/ListNFTByMidReq; | Lcom/bapis/bilibili/pangu/gallery/v1/ListNFTByMidReply; |
| /bilibili.pangu.gallery.v1.GalleryInterface/ListOrderByMid | Lcom/bapis/bilibili/pangu/gallery/v1/ListOrderByMidReq; | Lcom/bapis/bilibili/pangu/gallery/v1/ListOrderByMidReply; |
| /bilibili.pangu.gallery.v1.GalleryInterface/MinePage | Lcom/bapis/bilibili/pangu/gallery/v1/MinePageReq; | Lcom/bapis/bilibili/pangu/gallery/v1/MinePageReply; |
| /bilibili.pangu.gallery.v1.GalleryInterface/Ping | Lcom/google/protobuf/Empty; | Lcom/google/protobuf/Empty; |
| /bilibili.pangu.gallery.v1.GalleryInterface/UserCheck | Lcom/bapis/bilibili/pangu/gallery/v1/UserCheckReq; | Lcom/bapis/bilibili/pangu/gallery/v1/UserCheckReply; |
| /bilibili.pangu.gallery.v1.GalleryInterface/UserInfo | Lcom/bapis/bilibili/pangu/gallery/v1/GetUserInfoReq; | Lcom/bapis/bilibili/pangu/gallery/v1/GetUserInfoReply; |

```sh
node bin/bili-apis.mjs --edition official list --category vip --limit 10
node bin/bili-apis.mjs --edition official show "ID"
```
