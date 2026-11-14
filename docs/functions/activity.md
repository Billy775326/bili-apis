# 活动与预约

运营活动、抽奖、预约和签到。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 37 条 HTTP 声明、4 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes10.dex:58678:GET | GET | https://api.bilibili.com/x/custom_activity/cny2026/redpacket/list | Query:room_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes10.dex:58679:GET | GET | https://api.bilibili.com/x/custom_activity/cny2026/redpacket/result | Query:room_id, Query:packet_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes10.dex:58680:POST | POST | https://api.bilibili.com/x/custom_activity/cny2026/redpacket/join | Field:cny_red_packet_ts, Field:token, Field:packet_id, Field:room_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bililive/videoliveplayer/net/beans/gateway/roominfo/LiveCNYRedPacketJoin;&gt;;&gt;; | not-tested |
| classes11.dex:19845:POST | POST | https://api.bilibili.com/x/activity/reserve/cancel | Field:access_key, Field:sid, Field:csrf | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes11.dex:19846:POST | POST | https://api.bilibili.com/x/new-reserve/reserve/multi_cancel | Field:access_key, Field:sids, Field:csrf | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes11.dex:19847:GET | GET | https://api.bilibili.com/x/activity/reserve/following | Query:access_key, Query:sid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes11.dex:19848:GET | GET | https://api.bilibili.com/x/new-reserve/reserve/multi_info | Query:access_key, Query:sids | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes11.dex:19849:POST | POST | https://api.bilibili.com/x/activity/reserve | Field:access_key, Field:sid, Field:csrf | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes11.dex:19850:POST | POST | https://api.bilibili.com/x/new-reserve/reserve/multi_add | Field:access_key, Field:sids, Field:csrf | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes12.dex:1976:POST | POST | https://app.bilibili.com/x/v2/activity/follow | Field:goto, Field:fid, Field:type, Field:from_spmid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; | not-tested |
| classes12.dex:1977:POST | POST | https://app.bilibili.com/x/v2/activity/follow | Field:goto, Field:fid, Field:type, Field:from_spmid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; | not-tested |
| classes12.dex:1978:POST | POST | https://app.bilibili.com/x/v2/activity/follow | Field:goto, Field:fid, Field:group_id, Field:item_id, Field:type, Field:from_spmid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes12.dex:40276:POST | POST | https://app.bilibili.com/x/v2/activity/receive | Query:access_key, Query:goto, Query:fid, Query:state, Query:from_spmid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/ActivityReceiveResp;&gt;;&gt;; | not-tested |
| classes12.dex:40277:POST | POST | https://app.bilibili.com/x/v2/activity/follow | Query:access_key, Query:goto, Query:fid, Query:type, Query:from_spmid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse;&gt;; | not-tested |
| classes12.dex:40278:GET | GET | https://app.bilibili.com/x/v2/activity/tab | Query:access_key, Query:page_id, Query:tab_id, Query:tab_module_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/following/event/model/EventBottomTabHostAllInfo;&gt;;&gt;; | not-tested |
| classes12.dex:40279:GET | GET | https://app.bilibili.com/x/v2/activity/supernatant | Query:access_key, Query:page_id, QueryMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/following/event/model/FollowingEventTopic;&gt;;&gt;; | not-tested |
| classes12.dex:40280:GET | GET | https://app.bilibili.com/x/v2/activity/like/list | Query:access_key, Query:sid, Query:sort_type, Query:offset, Query:module_id, Query:dy_offset, Query:from_spmid, Query:primary_page_id, QueryMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/following/event/model/FollowingEventTopic;&gt;;&gt;; | not-tested |
| classes12.dex:40281:GET | GET | https://app.bilibili.com/x/v2/activity/like/list | Query:access_key, Query:offset, Query:from_spmid, Query:primary_page_id, QueryMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/following/event/model/FollowingEventTopic;&gt;;&gt;; | not-tested |
| classes12.dex:40282:GET | GET | https://app.bilibili.com/x/v2/activity/detail | Query:module_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/following/event/model/FollowingVideoEventPageConfig;&gt;;&gt;; | not-tested |
| classes12.dex:40283:GET | GET | https://app.bilibili.com/x/v2/activity/menu | Query:access_key, Query:page_id, Query:https_url_req, Query:tab_from | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/following/event/model/FollowingEventTopic;&gt;;&gt;; | not-tested |
| classes12.dex:40284:GET | GET | https://app.bilibili.com/x/v2/activity/base | Query:page_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/cardBean/JoinComponentBean;&gt;;&gt;; | not-tested |
| classes12.dex:40285:GET | GET | https://app.bilibili.com/x/v2/activity/inline | Query:access_key, Query:page_id, Query:https_url_req | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/following/event/model/FollowingEventTopic;&gt;;&gt;; | not-tested |
| classes12.dex:40286:GET | GET | https://app.bilibili.com/x/v2/activity/index | Query:access_key, Query:page_id, Query:offset, Query:activity_from, Query:dynamic_id, Query:share_origin, Query:tab_id, Query:tab_module_id, Query:from_spmid, Query:https_url_req, Query:current_tab | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/following/event/model/FollowingEventTopic;&gt;;&gt;; | not-tested |
| classes15.dex:32463:GET | GET | http://api.bilibili.com/x/activity/like/check | Query:sid | LlC0/a&lt;Lcom/bilibili/biligame/api/BiligameApiResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes17.dex:46952:POST | POST | https://api.bilibili.com/x/coupon/code/exchange | Field:access_key, Field:token, Field:code, Field:verify | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/module/vip/choosecoupon/VipCouponItemInfo;&gt;;&gt;; | not-tested |
| classes17.dex:46956:GET | GET | https://api.bilibili.com/x/coupon/code/verify | Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/module/vip/choosecoupon/VipExchangeVerifyCode;&gt;;&gt;; | not-tested |
| classes18.dex:42363:POST | POST | https://api.bilibili.com/x/new-reserve/reserve/cancel | Field:access_key, Field:sid, Field:csrf, Field:business | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes18.dex:42365:POST | POST | https://api.bilibili.com/x/new-reserve/reserve/add | Field:access_key, Field:sid, Field:csrf, Field:business | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes30.dex:31440:GET | GET | https://api.bilibili.com/x/operational_activity/cny/task_process/notify | Query:is_widget | LlC0/a&lt;Lkotlin/Unit;&gt;; | not-tested |
| classes30.dex:41384:POST | POST | https://api.bilibili.com/x/activity/reserve | Field:access_key, Field:sid, Field:csrf | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; | not-tested |
| classes30.dex:49214:POST | POST | https://api.bilibili.com/x/fission/check/watchword | Field:clipboard | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/main/usergrow/WatchWordResult;&gt;;&gt;; | not-tested |
| classes7.dex:62138:POST | POST | https://api.bilibili.com/x/checkin-plat/favor/cancel | Field:mid, Field:checkin_id, Field:checkin_type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes7.dex:62139:POST | POST | https://api.bilibili.com/x/checkin-plat/favor/delete | Field:mid, Field:checkin_id, Field:checkin_type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes7.dex:62140:GET | GET | https://api.bilibili.com/x/checkin-plat/favor/checkinDetail | Query:mid, Query:checkin_type, Query:checkin_id, Query:checkin_status, Query:offset | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/checkin/CheckInHistory;&gt;;&gt;; | not-tested |
| classes7.dex:62141:GET | GET | https://api.bilibili.com/x/checkin-plat/favor/list | Query:mid, Query:checkin_status, Query:offset | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/checkin/CheckInData;&gt;;&gt;; | not-tested |
| classes7.dex:62142:GET | GET | https://api.bilibili.com/x/checkin-plat/favor/getReminder | Query:mid, Query:checkin_type, Query:checkin_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/checkin/CheckInNotice;&gt;;&gt;; | not-tested |
| classes7.dex:62143:POST | POST | https://api.bilibili.com/x/checkin-plat/favor/setReminder | Field:mid, Field:checkin_type, Field:checkin_id, Field:reminder_status, Field:push_time | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |

## gRPC

请求/响应角色默认仍为静态候选；View/View 已有单独实现核对。表格不代表已建立连接或验证认证。

| 路由 | 请求类型候选 | 响应类型候选 | 线上抽查 |
| --- | --- | --- | --- |
| /bilibili.account.fission.v1.Fission/Entrance | Lcom/bapis/bilibili/account/fission/v1/EntranceReq; | Lcom/bapis/bilibili/account/fission/v1/EntranceReply; | not-tested |
| /bilibili.account.fission.v1.Fission/Privacy | Lcom/bapis/bilibili/account/fission/v1/PrivacyReq; | Lcom/bapis/bilibili/account/fission/v1/PrivacyReply; | not-tested |
| /bilibili.account.fission.v1.Fission/Window | Lcom/bapis/bilibili/account/fission/v1/WindowReq; | Lcom/bapis/bilibili/account/fission/v1/WindowReply; | not-tested |
| /bilibili.app.growth.v1.Growth/ReportAttribution | Lcom/bapis/bilibili/app/growth/v1/ReportAttributionReq; | Lcom/bapis/bilibili/app/growth/v1/ReportAttributionResp; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category activity --limit 10
node bin/bili-apis.mjs show "ID"
```
