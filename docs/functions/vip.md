# 大会员与装扮

大会员、权益、装扮及数字藏品。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 43 条 HTTP 声明、10 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes11.dex:32380:GET | GET | https://api.bilibili.com/x/garb/digital/actList | Query:mid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/ui/nft/data/DigitalActList;&gt;;&gt;; | not-tested |
| classes11.dex:32381:POST | POST | https://api.bilibili.com/x/garb/digital/collection | Field:mid, Field:page_size, Field:use_scene, Field:act_type, Field:act_id, Field:next_start_point | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/ui/nft/data/DigitalCollection;&gt;;&gt;; | not-tested |
| classes11.dex:32384:GET | GET | https://api.bilibili.com/x/vas/digital/space_info | Query:nft_id, Query:vmid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/BiliDigitalInfo;&gt;;&gt;; | not-tested |
| classes11.dex:32385:GET | GET | https://api.bilibili.com/x/garb/digital/grant/remindInfo | Query:mid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/ui/nft/data/RemindInfo;&gt;;&gt;; | not-tested |
| classes11.dex:42762:GET | GET | https://api.bilibili.com/x/garb/v1/trade/panel/emoji | Query:access_key, Query:item_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/emoticon/model/EmoticonPayInfo;&gt;;&gt;; | not-tested |
| classes14.dex:22068:POST | POST | http://api.bilibili.com/x/garb/right/echo/background_bind | Field:bg_id, Field:biz_id | Ljava/lang/Object; | not-tested |
| classes14.dex:22069:GET | GET | http://api.bilibili.com/x/garb/right/echo/background_list | Query:biz_id | Ljava/lang/Object; | not-tested |
| classes14.dex:47186:GET | GET | /x/vas/smelt/card/tutorial |  | Ljava/lang/Object; | not-tested |
| classes14.dex:47187:GET | GET | /x/vas/dlc_act/card/splash_info | Query:act_id, Query:card_type_id, Query:screen_width, Query:screen_height | Ljava/lang/Object; | not-tested |
| classes14.dex:47188:GET | GET | /x/vas/smelt/card/property_info | Query:vmid, Query:card_id | Ljava/lang/Object; | not-tested |
| classes14.dex:47189:GET | GET | /x/vas/nftcard/isallowtransfer | Query:act_id, Query:card_id | Ljava/lang/Object; | not-tested |
| classes14.dex:47190:POST | POST | /x/vas/smelt/my_decompose/lock | Body:(内容未知) | Ljava/lang/Object; | not-tested |
| classes14.dex:47191:GET | GET | /x/vas/dlc_act/card_right/usage | Query:act_id, Query:card_id, Query:card_type_id | Ljava/lang/Object; | not-tested |
| classes14.dex:49686:GET | GET | /x/vas/dlc_act/card/widget_info_v2 | Query:raw | Ljava/lang/Object; | not-tested |
| classes15.dex:64592:POST | POST | https://api.bilibili.com/x/vip/ads/material/report | Body:(内容未知) | Lqm1/a; | not-tested |
| classes17.dex:31117:POST | POST | https://api.bilibili.com/x/vip/ads/material/report | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/response/b&lt;Lkotlin/Unit;&gt;;&gt;; | not-tested |
| classes17.dex:46943:POST | POST | https://api.bilibili.com/x/vip/privilege/remind | Field:rights_type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/module/vip/combine/VipPrivilege;&gt;;&gt;; | not-tested |
| classes17.dex:46944:GET | GET | https://api.bilibili.com/x/vip/vip_privilege/info | Query:privilege_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/vip/PrivilegeInfo;&gt;;&gt;; | not-tested |
| classes17.dex:46953:GET | GET | https://api.bilibili.com/x/vip/coupon/list | Query:access_key, Query:id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/module/vip/choosecoupon/VipCouponGeneralInfo;&gt;;&gt;; | not-tested |
| classes17.dex:46954:GET | GET | https://api.bilibili.com/x/vip/coupon/list/v3 | Query:pid, Query:discount_id, Query:scene | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/module/vip/choosecoupon/VipCouponGeneralInfo;&gt;;&gt;; | not-tested |
| classes17.dex:46955:GET | GET | https://api.bilibili.com/x/vip/v1/frozenTime | Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Integer;&gt;;&gt;; | not-tested |
| classes17.dex:46957:POST | POST | https://api.bilibili.com/x/vip/v1/unfrozen | Field:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes17.dex:46958:POST | POST | https://api.bilibili.com/x/vip/coupon/unlock | Query:access_key, Query:coupon_token | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes18.dex:6109:POST | POST | https://api.bilibili.com/x/vip/ads/material/report | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/response/b&lt;Lkotlin/Unit;&gt;;&gt;; | not-tested |
| classes18.dex:24257:POST | POST | https://api.bilibili.com/x/vip/gsm/privilege/callback | Field:result_code, Field:status | Ljava/lang/Object; | not-tested |
| classes18.dex:24258:POST | POST | https://api.bilibili.com/x/vip/gsm/activity/report_act | Query:promos, Query:platform | Ljava/lang/Object; | not-tested |
| classes18.dex:24259:POST | POST | https://api.bilibili.com/x/vip/gsm/activity/preload | Query:platform | Ljava/lang/Object; | not-tested |
| classes18.dex:24260:POST | POST | https://api.bilibili.com/x/vip/gsm/privilege/verify | Query:access_key | Ljava/lang/Object; | not-tested |
| classes18.dex:45774:POST | POST | https://api.bilibili.com/x/vip/hd/trial_modify | Field:modify_type, Field:biz_type, Field:st_uuid, Field:aid | Ljava/lang/Object; | not-tested |
| classes20.dex:24349:POST | POST | https://api.bilibili.com/x/vip/user/unsign_probability/hand | Field:probs | Ljava/lang/Object; | not-tested |
| classes20.dex:36734:POST | POST | https://api.bilibili.com/x/vip/ads/material/report | Body:(内容未知) | Ljava/lang/Object; | not-tested |
| classes23.dex:19900:POST | POST | https://api.bilibili.com/x/vip/ads/material/report | Body:(内容未知) | Ljava/lang/Object; | not-tested |
| classes30.dex:47442:POST | POST | http://api.bilibili.com/x/garb/comment/bg/edit | Field:mid, Field:card_type_id, Field:card_id, Field:act_id | LlC0/a&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; | not-tested |
| classes30.dex:47443:GET | GET | http://api.bilibili.com/x/garb/digital/card/detail | Query:mid, Query:vmid, Query:card_id, Query:use_scene | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/garb/api/DigitalCardDetail;&gt;;&gt;; | not-tested |
| classes30.dex:47444:POST | POST | http://api.bilibili.com/x/vas/dlc_act/lottery/draw_item | Field:act_id, Field:mid, Field:lottery_id, Field:lottery_num, Field:biz_info | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/garb/api/BillDLCRespInfo;&gt;;&gt;; | not-tested |
| classes30.dex:47445:GET | GET | http://api.bilibili.com/x/vas/nftcard/isallowtransfer | Query:act_id, Query:card_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/garb/api/BiliNftTransfer;&gt;;&gt;; | not-tested |
| classes30.dex:47446:GET | GET | http://api.bilibili.com/x/vas/nftcard/carddetail | Query:act_id, Query:card_type_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/garb/api/BiliCardDetail;&gt;;&gt;; | not-tested |
| classes30.dex:47447:GET | GET | http://api.bilibili.com/x/vas/dlc_act/act/card/detail | Query:act_id, Query:card_type_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/garb/api/BiliCardDetail;&gt;;&gt;; | not-tested |
| classes30.dex:47448:GET | GET | http://api.bilibili.com/x/vas/nftcard/drawcard | Query:act_id, Query:mid, Query:round_index | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/garb/api/BiliDrawCard;&gt;;&gt;; | not-tested |
| classes30.dex:47823:POST | POST | https://api.bilibili.com/x/garb/v1/user/equip/unload | Field:access_key, Field:part | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes30.dex:48013:GET | GET | https://api.bilibili.com/x/vas/dlc_act/card/splash_info | Query:act_id, Query:card_type_id, Query:screen_width, Query:screen_height | Ljava/lang/Object; | not-tested |
| classes30.dex:48014:POST | POST | https://api.bilibili.com/x/vas/smelt/my_decompose/lock | Body:(内容未知) | Ljava/lang/Object; | not-tested |
| classes30.dex:51524:POST | POST | https://api.bilibili.com/x/vip/ads/material/report | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |

## gRPC

请求/响应角色默认仍为静态候选；View/View 已有单独实现核对。表格不代表已建立连接或验证认证。

| 路由 | 请求类型候选 | 响应类型候选 | 线上抽查 |
| --- | --- | --- | --- |
| /bilibili.pangu.gallery.v1.GalleryInterface/AgreePolicy | Lcom/bapis/bilibili/pangu/gallery/v1/AgreePolicyReq; | Lcom/bapis/bilibili/pangu/gallery/v1/AgreePolicyReply; | not-tested |
| /bilibili.pangu.gallery.v1.GalleryInterface/BasicInfo | Lcom/bapis/bilibili/pangu/gallery/v1/BasicInfoReq; | Lcom/bapis/bilibili/pangu/gallery/v1/BasicInfoReply; | not-tested |
| /bilibili.pangu.gallery.v1.GalleryInterface/GetBanners | Lcom/bapis/bilibili/pangu/gallery/v1/GetBannersReq; | Lcom/bapis/bilibili/pangu/gallery/v1/GetBannersReply; | not-tested |
| /bilibili.pangu.gallery.v1.GalleryInterface/GetLastPolicy | Lcom/bapis/bilibili/pangu/gallery/v1/GetLastPolicyReq; | Lcom/bapis/bilibili/pangu/gallery/v1/GetLastPolicyReply; | not-tested |
| /bilibili.pangu.gallery.v1.GalleryInterface/ListNFTByMid | Lcom/bapis/bilibili/pangu/gallery/v1/ListNFTByMidReq; | Lcom/bapis/bilibili/pangu/gallery/v1/ListNFTByMidReply; | not-tested |
| /bilibili.pangu.gallery.v1.GalleryInterface/ListOrderByMid | Lcom/bapis/bilibili/pangu/gallery/v1/ListOrderByMidReq; | Lcom/bapis/bilibili/pangu/gallery/v1/ListOrderByMidReply; | not-tested |
| /bilibili.pangu.gallery.v1.GalleryInterface/MinePage | Lcom/bapis/bilibili/pangu/gallery/v1/MinePageReq; | Lcom/bapis/bilibili/pangu/gallery/v1/MinePageReply; | not-tested |
| /bilibili.pangu.gallery.v1.GalleryInterface/Ping | Lcom/google/protobuf/Empty; | Lcom/google/protobuf/Empty; | not-tested |
| /bilibili.pangu.gallery.v1.GalleryInterface/UserCheck | Lcom/bapis/bilibili/pangu/gallery/v1/UserCheckReq; | Lcom/bapis/bilibili/pangu/gallery/v1/UserCheckReply; | not-tested |
| /bilibili.pangu.gallery.v1.GalleryInterface/UserInfo | Lcom/bapis/bilibili/pangu/gallery/v1/GetUserInfoReq; | Lcom/bapis/bilibili/pangu/gallery/v1/GetUserInfoReply; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category vip --limit 10
node bin/bili-apis.mjs show "ID"
```
