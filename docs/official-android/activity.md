# 活动与预约

运营活动、抽奖、预约和签到。分类根据路由、域名与声明类名称推断，未验证业务行为。

官方 Android 9.19.0：42 条 HTTP 声明、4 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。

[返回分类](README.md) · [与 Play 对比](comparison.md)

## HTTP

参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。

| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |
| --- | --- | --- | --- | --- |
| classes12.dex:30336:POST | POST | https://api.bilibili.com/x/coupon/code/exchange | Field:access_key, Field:token, Field:code, Field:verify | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/module/vip/choosecoupon/VipCouponItemInfo;&gt;;&gt;; |
| classes12.dex:30340:GET | GET | https://api.bilibili.com/x/coupon/code/verify | Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/module/vip/choosecoupon/VipExchangeVerifyCode;&gt;;&gt;; |
| classes12.dex:47772:GET | GET | https://api.bilibili.com/x/operational_activity/cny/task_process/notify | Query:is_widget | Lcom/bilibili/okretro/call/BiliCall&lt;Lkotlin/Unit;&gt;; |
| classes14.dex:7176:POST | POST | https://api.bilibili.com/x/activity/reserve/cancel | Field:access_key, Field:sid, Field:csrf | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes14.dex:7177:POST | POST | https://api.bilibili.com/x/new-reserve/reserve/multi_cancel | Field:access_key, Field:sids, Field:csrf | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes14.dex:7179:GET | GET | https://api.bilibili.com/x/activity/reserve/following | Query:access_key, Query:sid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes14.dex:7180:GET | GET | https://api.bilibili.com/x/new-reserve/reserve/multi_info | Query:access_key, Query:sids | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes14.dex:7181:POST | POST | https://api.bilibili.com/x/activity/reserve | Field:access_key, Field:sid, Field:csrf | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes14.dex:7182:POST | POST | https://api.bilibili.com/x/new-reserve/reserve/multi_add | Field:access_key, Field:sids, Field:csrf | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes14.dex:26193:POST | POST | https://api.bilibili.com/x/new-reserve/reserve/cancel | Field:access_key, Field:sid, Field:csrf, Field:business | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes14.dex:26194:POST | POST | https://api.bilibili.com/x/new-reserve/reserve/multi_cancel | Field:access_key, Field:sids, Field:csrf | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes14.dex:26196:GET | GET | https://api.bilibili.com/x/activity/reserve/following | Query:access_key, Query:sid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes14.dex:26197:GET | GET | https://api.bilibili.com/x/new-reserve/reserve/multi_info | Query:access_key, Query:sids | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes14.dex:26198:POST | POST | https://api.bilibili.com/x/new-reserve/reserve/add | Field:access_key, Field:sid, Field:csrf, Field:business | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes14.dex:26199:POST | POST | https://api.bilibili.com/x/new-reserve/reserve/multi_add | Field:access_key, Field:sids, Field:csrf | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes14.dex:32167:POST | POST | https://api.bilibili.com/x/checkin-plat/favor/cancel | Field:mid, Field:checkin_id, Field:checkin_type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:32168:POST | POST | https://api.bilibili.com/x/checkin-plat/favor/delete | Field:mid, Field:checkin_id, Field:checkin_type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:32169:GET | GET | https://api.bilibili.com/x/checkin-plat/favor/checkinDetail | Query:mid, Query:checkin_type, Query:checkin_id, Query:checkin_status, Query:offset | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/checkin/CheckInHistory;&gt;;&gt;; |
| classes14.dex:32170:GET | GET | https://api.bilibili.com/x/checkin-plat/favor/list | Query:mid, Query:checkin_status, Query:offset | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/checkin/CheckInData;&gt;;&gt;; |
| classes14.dex:32171:GET | GET | https://api.bilibili.com/x/checkin-plat/favor/getReminder | Query:mid, Query:checkin_type, Query:checkin_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/checkin/CheckInNotice;&gt;;&gt;; |
| classes14.dex:32172:POST | POST | https://api.bilibili.com/x/checkin-plat/favor/setReminder | Field:mid, Field:checkin_type, Field:checkin_id, Field:reminder_status, Field:push_time | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes21.dex:55147:POST | POST | https://api.bilibili.com/x/activity/reserve | Field:access_key, Field:sid, Field:csrf | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; |
| classes24.dex:58009:GET | GET | https://api.bilibili.com/x/custom_activity/cny2026/redpacket/list | Query:room_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes24.dex:58010:GET | GET | https://api.bilibili.com/x/custom_activity/cny2026/redpacket/result | Query:room_id, Query:packet_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes24.dex:58011:POST | POST | https://api.bilibili.com/x/custom_activity/cny2026/redpacket/join | Field:cny_red_packet_ts, Field:token, Field:packet_id, Field:room_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bililive/videoliveplayer/net/beans/gateway/roominfo/LiveCNYRedPacketJoin;&gt;;&gt;; |
| classes28.dex:39808:POST | POST | https://api.bilibili.com/x/fission/check/watchword | Field:clipboard | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/main/usergrow/WatchWordResult;&gt;;&gt;; |
| classes6.dex:59781:GET | GET | http://api.bilibili.com/x/activity/like/check | Query:sid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/biligame/api/BiligameApiResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes8.dex:28792:POST | POST | https://app.bilibili.com/x/v2/activity/receive | Query:access_key, Query:goto, Query:fid, Query:state, Query:from_spmid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/ActivityReceiveResp;&gt;;&gt;; |
| classes8.dex:28793:POST | POST | https://app.bilibili.com/x/v2/activity/follow | Query:access_key, Query:goto, Query:fid, Query:type, Query:from_spmid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse;&gt;; |
| classes8.dex:28794:GET | GET | https://app.bilibili.com/x/v2/activity/tab | Query:access_key, Query:page_id, Query:tab_id, Query:tab_module_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/following/event/model/EventBottomTabHostAllInfo;&gt;;&gt;; |
| classes8.dex:28795:GET | GET | https://app.bilibili.com/x/v2/activity/supernatant | Query:access_key, Query:page_id, QueryMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/following/event/model/FollowingEventTopic;&gt;;&gt;; |
| classes8.dex:28796:GET | GET | https://app.bilibili.com/x/v2/activity/like/list | Query:access_key, Query:sid, Query:sort_type, Query:offset, Query:module_id, Query:dy_offset, Query:from_spmid, Query:primary_page_id, QueryMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/following/event/model/FollowingEventTopic;&gt;;&gt;; |
| classes8.dex:28797:GET | GET | https://app.bilibili.com/x/v2/activity/like/list | Query:access_key, Query:offset, Query:from_spmid, Query:primary_page_id, QueryMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/following/event/model/FollowingEventTopic;&gt;;&gt;; |
| classes8.dex:28798:GET | GET | https://app.bilibili.com/x/v2/activity/detail | Query:module_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/following/event/model/FollowingVideoEventPageConfig;&gt;;&gt;; |
| classes8.dex:28799:GET | GET | https://app.bilibili.com/x/v2/activity/menu | Query:access_key, Query:page_id, Query:https_url_req, Query:tab_from | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/following/event/model/FollowingEventTopic;&gt;;&gt;; |
| classes8.dex:28800:GET | GET | https://app.bilibili.com/x/v2/activity/base | Query:page_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/cardBean/JoinComponentBean;&gt;;&gt;; |
| classes8.dex:28801:GET | GET | https://app.bilibili.com/x/v2/activity/inline | Query:access_key, Query:page_id, Query:https_url_req | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/following/event/model/FollowingEventTopic;&gt;;&gt;; |
| classes8.dex:28802:GET | GET | https://app.bilibili.com/x/v2/activity/index | Query:access_key, Query:page_id, Query:offset, Query:activity_from, Query:dynamic_id, Query:share_origin, Query:tab_id, Query:tab_module_id, Query:from_spmid, Query:https_url_req, Query:current_tab | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/following/event/model/FollowingEventTopic;&gt;;&gt;; |
| classes8.dex:41642:POST | POST | https://app.bilibili.com/x/v2/activity/follow | Field:goto, Field:fid, Field:type, Field:from_spmid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; |
| classes8.dex:41643:POST | POST | https://app.bilibili.com/x/v2/activity/follow | Field:goto, Field:fid, Field:type, Field:from_spmid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; |
| classes8.dex:41644:POST | POST | https://app.bilibili.com/x/v2/activity/follow | Field:goto, Field:fid, Field:group_id, Field:item_id, Field:type, Field:from_spmid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes8.dex:41645:POST | POST | https://app.bilibili.com/x/v2/activity/liked | Field:access_key, Field:sid, Field:lid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |

## gRPC

请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。

| 路由 | 请求类型候选 | 响应类型候选 |
| --- | --- | --- |
| /bilibili.account.fission.v1.Fission/Entrance | Lcom/bapis/bilibili/account/fission/v1/EntranceReq; | Lcom/bapis/bilibili/account/fission/v1/EntranceReply; |
| /bilibili.account.fission.v1.Fission/Privacy | Lcom/bapis/bilibili/account/fission/v1/PrivacyReq; | Lcom/bapis/bilibili/account/fission/v1/PrivacyReply; |
| /bilibili.account.fission.v1.Fission/Window | Lcom/bapis/bilibili/account/fission/v1/WindowReq; | Lcom/bapis/bilibili/account/fission/v1/WindowReply; |
| /bilibili.app.growth.v1.Growth/ReportAttribution | Lcom/bapis/bilibili/app/growth/v1/ReportAttributionReq; | Lcom/bapis/bilibili/app/growth/v1/ReportAttributionResp; |

```sh
node bin/bili-apis.mjs --edition official list --category activity --limit 10
node bin/bili-apis.mjs --edition official show "ID"
```
