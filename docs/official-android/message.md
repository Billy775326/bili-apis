# 私信与客服

会话、私信和客服通信。分类根据路由、域名与声明类名称推断，未验证业务行为。

官方 Android 9.19.0：37 条 HTTP 声明、79 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。

[返回分类](README.md) · [与 Play 对比](comparison.md)

## HTTP

参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。

| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |
| --- | --- | --- | --- | --- |
| classes18.dex:27621:POST | POST | http://api.bilibili.com/pgc/freya/im/pure/msg | Field:room_id, Field:seq_id, Field:backward, Field:size | Ljava/lang/Object; |
| classes18.dex:27623:POST | POST | http://api.bilibili.com/pgc/freya/im/action | FieldMap:(内容未知) | Ljava/lang/Object; |
| classes18.dex:27640:GET | GET | http://api.bilibili.com/pgc/freya/im/msg/first_tips | Query:room_id, Query:start_seq_id | Ljava/lang/Object; |
| classes18.dex:27641:GET | GET | http://api.bilibili.com/pgc/freya/im/msg/pulls | Query:room_id, Query:start_seq_id, Query:end_seq_id | Ljava/lang/Object; |
| classes18.dex:27643:POST | POST | http://api.bilibili.com/pgc/freya/im/msg/send | Field:room_id, Field:content_type, Field:content, Field:req_id | Ljava/lang/Object; |
| classes18.dex:27646:POST | POST | http://api.bilibili.com/pgc/freya/im/msg/remove | Field:msg_id | Ljava/lang/Object; |
| classes9.dex:20191:POST | POST | https://api.vc.bilibili.com/impolyer/get-nft-status | Field:access_key, Field:mids, Field:status, Field:source | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/Map&lt;Ljava/lang/String;Lcom/bilibili/bplus/im/entity/NFTAvatarInfo;&gt;;&gt;;&gt;; |
| classes9.dex:20192:GET | GET | https://api.vc.bilibili.com/x/im/feed/info | Query:aids, Query:article_ids, Query:ep_ids, Query:am_ids | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/im/entity/FeedInfo;&gt;;&gt;; |
| classes9.dex:20193:GET | GET | https://api.vc.bilibili.com/link_alloc/v1/alloc/list |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; |
| classes9.dex:20196:POST | POST | https://api.vc.bilibili.com/link_friend/v1/link_friend/apply_friend | Field:uid, Field:friend_uid, Field:verify_text | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes9.dex:20201:POST | POST | https://api.vc.bilibili.com/x/im/recommend_card/check_status | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/im/entity/FollowRecommendCardResp;&gt;;&gt;; |
| classes9.dex:20203:GET | GET | https://api.vc.bilibili.com/x/im/anti_disturb/clean_disturb_session |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes9.dex:20206:POST | POST | https://api.vc.bilibili.com/link_friend/v1/link_friend/friend_apply_ack | Field:apply_id, Field:op_code, Field:reply_content | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes9.dex:20208:POST | POST | https://api.vc.bilibili.com/link_alloc/v1/alloc/list | Field:group_id | Lcom/bilibili/okretro/call/BiliCall&lt;Ljava/lang/Void;&gt;; |
| classes9.dex:20209:GET | GET | https://api.vc.bilibili.com/auto_reply_svr/v1/auto_reply_svr/show_toast?type=2 |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/im/entity/AutoReplyConfig;&gt;;&gt;; |
| classes9.dex:20221:POST | POST | https://api.vc.bilibili.com/link_search/v1/link_search/search | Field:what, Query:flag | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/im/entity/SearchInfo;&gt;;&gt;; |
| classes9.dex:20223:GET | GET | https://api.vc.bilibili.com/x/im/client_config |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes9.dex:20225:GET | GET | https://api.vc.bilibili.com/user/v1/user/details | Query:uids | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes9.dex:20226:GET | GET | https://api.vc.bilibili.com/x/im/user_infos | Query:uids, Query:style | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/bplus/im/entity/UserCard;&gt;;&gt;;&gt;; |
| classes9.dex:20227:GET | GET | https://customerservice.bilibili.com/x/custom/msg_svr/v1/video_sign | Query:key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes9.dex:20230:GET | GET | https://api.vc.bilibili.com/user/v1/UserRoom/isAnchor | Query:uid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/im/entity/LiveRoomStatus;&gt;;&gt;; |
| classes9.dex:20235:GET | GET | https://api.vc.bilibili.com/auto_reply_svr/v1/auto_reply_svr/record_toast_status?type=2 |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes9.dex:20241:GET | GET | https://api.vc.bilibili.com/link_alloc/v1/alloc/get_list |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; |
| classes9.dex:20246:POST | POST | https://api.vc.bilibili.com/x/im/anti_disturb/set_disturb | Field:selected_id, Field:is_open | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes9.dex:20252:POST | POST | https://api.vc.bilibili.com/link_friend/v1/link_friend/remove_friend | Field:friend_uid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes9.dex:20254:POST | POST | https://customerservice.bilibili.com/x/custom/call_svr/v1/upload_bfs | Part:biz, Part:timestamp, Part:rnd, Query:access_key, Part:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes9.dex:20255:POST | POST | https://api.vc.bilibili.com/api/v1/image/upload | Part:timestamp, Part:rnd, Query:access_key, Part:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes9.dex:20257:POST | POST | https://customerservice.bilibili.com/x/custom/msg_svr/v1/upload | Part:biz, Part:timestamp, Part:rnd, Part:mid, Part:filename, Query:access_key, Part:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes9.dex:20265:POST | POST | https://message.bilibili.com/api/notify/clear.up_unread.do |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes9.dex:20266:GET | GET | https://message.bilibili.com/api/notify/del.notify.list.do | Query:id, Query:type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes9.dex:29588:POST | POST | https://api.bilibili.com/x/msgfeed/del | Field:id, Field:tp | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes9.dex:29589:GET | GET | https://api.bilibili.com/x/msgfeed/at | Query:id, Query:at_time | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/privateletter/model/AtNoticeListResponse;&gt;;&gt;; |
| classes9.dex:29590:GET | GET | https://api.bilibili.com/x/msgfeed/like | Query:id, Query:like_time | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/privateletter/model/LikeNoticeResponse;&gt;;&gt;; |
| classes9.dex:29591:GET | GET | https://api.bilibili.com/x/msgfeed/reply | Query:id, Query:reply_time | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/privateletter/model/ReplyNoticeListResponse;&gt;;&gt;; |
| classes9.dex:32301:GET | GET | http://api.bilibili.com/pgc/freya/com/im/msg/history | Query:room_id, Query:biz_type, Query:report, Query:start_msg_id, Query:page_size | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/chatroomsdk/ChatMsgList;&gt;; |
| classes9.dex:32302:POST | POST | http://api.bilibili.com/pgc/freya/com/im/msg/handle | Field:room_id, Field:biz_type, Field:msg_id, Field:type, Field:report | Lio/reactivex/rxjava3/core/Single&lt;Ljava/lang/String;&gt;; |
| classes9.dex:32307:POST | POST | http://api.bilibili.com/pgc/freya/com/im/msg/send | Field:room_id, Field:biz_type, Field:content_type, Field:content, Field:req_id, Field:report | Lio/reactivex/rxjava3/core/Single&lt;Lcom/bilibili/chatroomsdk/ChatMsgResp;&gt;; |

## gRPC

请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。

| 路由 | 请求类型候选 | 响应类型候选 |
| --- | --- | --- |
| /bilibili.broadcast.message.im.Notify/WatchNotify | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/im/NotifyRsp; |
| /bilibili.im.customer.interface.v1.CustomerInterface/ClickReport | Lcom/bapis/bilibili/im/customer/interfaces/ClickReportReq; | Lcom/bapis/bilibili/im/customer/interfaces/ClickReportRsp; |
| /bilibili.im.customer.interface.v1.CustomerInterface/CloseConversation | Lcom/bapis/bilibili/im/customer/interfaces/CloseConversationReq; | Lcom/bapis/bilibili/im/customer/interfaces/CloseConversationRsp; |
| /bilibili.im.customer.interface.v1.CustomerInterface/CustomerPreEvaluate | Lcom/bapis/bilibili/im/customer/interfaces/PreEvaluateReq; | Lcom/bapis/bilibili/im/customer/interfaces/PreEvaluateRsp; |
| /bilibili.im.customer.interface.v1.CustomerInterface/CustomerUpdateAck | Lcom/bapis/bilibili/im/customer/interfaces/UpdateAckReq; | Lcom/bapis/bilibili/im/customer/interfaces/Empty; |
| /bilibili.im.customer.interface.v1.CustomerInterface/CustomerWindowOptions | Lcom/bapis/bilibili/im/customer/interfaces/WindowOptionsReq; | Lcom/bapis/bilibili/im/customer/interfaces/WindowOptionsRsp; |
| /bilibili.im.customer.interface.v1.CustomerInterface/CustomerWindowOptionsV2 | Lcom/bapis/bilibili/im/customer/interfaces/WindowOptionsV2Req; | Lcom/bapis/bilibili/im/customer/interfaces/WindowOptionsV2Rsp; |
| /bilibili.im.customer.interface.v1.CustomerInterface/FinishParagraphsRender | Lcom/bapis/bilibili/im/customer/interfaces/FinishParagraphsRenderReq; | Lcom/bapis/bilibili/im/customer/interfaces/FinishParagraphsRenderRsp; |
| /bilibili.im.customer.interface.v1.CustomerInterface/GetCustomerSessDetail | Lcom/bapis/bilibili/im/customer/interfaces/GetSessDetailReq; | Lcom/bapis/bilibili/im/customer/interfaces/GetSessDetailRsp; |
| /bilibili.im.customer.interface.v1.CustomerInterface/GetCustomerSessions | Lcom/bapis/bilibili/im/customer/interfaces/GetSessionsReq; | Lcom/bapis/bilibili/im/customer/interfaces/SessionsRsp; |
| /bilibili.im.customer.interface.v1.CustomerInterface/GetNewCustomerSessions | Lcom/bapis/bilibili/im/customer/interfaces/GetNewSessionsReq; | Lcom/bapis/bilibili/im/customer/interfaces/SessionsRsp; |
| /bilibili.im.customer.interface.v1.CustomerInterface/GetShopCfg | Lcom/bapis/bilibili/im/customer/interfaces/ShopCfgReq; | Lcom/bapis/bilibili/im/customer/interfaces/ShopCfgRsp; |
| /bilibili.im.customer.interface.v1.CustomerInterface/GetShopInfo | Lcom/bapis/bilibili/im/customer/interfaces/ShopInfoReq; | Lcom/bapis/bilibili/im/customer/interfaces/ShopInfoRsp; |
| /bilibili.im.customer.interface.v1.CustomerInterface/GetUserSettings | Lcom/bapis/bilibili/im/customer/interfaces/GetUserSettingsReq; | Lcom/bapis/bilibili/im/customer/interfaces/GetUserSettingsRsp; |
| /bilibili.im.customer.interface.v1.CustomerInterface/HeartBeat | Lcom/bapis/bilibili/im/customer/interfaces/SendHeartBeatReq; | Lcom/bapis/bilibili/im/customer/interfaces/Empty; |
| /bilibili.im.customer.interface.v1.CustomerInterface/OutCustomerQueue | Lcom/bapis/bilibili/im/customer/interfaces/OutCustomerQueueReq; | Lcom/bapis/bilibili/im/customer/interfaces/Empty; |
| /bilibili.im.customer.interface.v1.CustomerInterface/PopResultUpdate | Lcom/bapis/bilibili/im/customer/interfaces/PopResultUpdateReq; | Lcom/bapis/bilibili/im/customer/interfaces/PopResultUpdateRsp; |
| /bilibili.im.customer.interface.v1.CustomerInterface/RemoveSession | Lcom/bapis/bilibili/im/customer/interfaces/RemoveSessionReq; | Lcom/bapis/bilibili/im/customer/interfaces/Empty; |
| /bilibili.im.customer.interface.v1.CustomerInterface/SendCustomerMsg | Lcom/bapis/bilibili/im/customer/interfaces/SendMsgReq; | Lcom/bapis/bilibili/im/customer/interfaces/SendMsgRsp; |
| /bilibili.im.customer.interface.v1.CustomerInterface/SetTop | Lcom/bapis/bilibili/im/customer/interfaces/SetTopReq; | Lcom/bapis/bilibili/im/customer/interfaces/Empty; |
| /bilibili.im.customer.interface.v1.CustomerInterface/SetUserSettings | Lcom/bapis/bilibili/im/customer/interfaces/SetUserSettingsReq; | Lcom/bapis/bilibili/im/customer/interfaces/SetUserSettingsRsp; |
| /bilibili.im.customer.interface.v1.CustomerInterface/SyncFetchCustomerSessionMsgs | Lcom/bapis/bilibili/im/customer/interfaces/SessionMsgReq; | Lcom/bapis/bilibili/im/customer/interfaces/SessionMsgRsp; |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/ClearBubbleMsg | Lcom/bapis/bilibili/im/gateway/interfaces/v1/ClearBubbleMsgReq; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/ClearBubbleMsgRsp; |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/ClearMessageToast | Lcom/bapis/bilibili/im/gateway/interfaces/v1/ClearMessageToastReq; | Lcom/google/protobuf/Empty; |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/DelMsg | Lcom/bapis/bilibili/im/gateway/interfaces/v1/DelMsgReq; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/DelMsgRsp; |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/DelMsgCard | Lcom/bapis/bilibili/im/gateway/interfaces/v1/DelMsgCardReq; | Lcom/google/protobuf/Empty; |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/GetAIInfo | Lcom/bapis/bilibili/im/gateway/interfaces/v1/ReqGetAIInfo; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/RspGetAIInfo; |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/GetBubbleMsg | Lcom/bapis/bilibili/im/gateway/interfaces/v1/GetBubbleMsgReq; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/GetBubbleMsgRsp; |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/GetSessions | Lcom/bapis/bilibili/im/gateway/interfaces/v1/ReqGetSessions; | Lcom/bapis/bilibili/im/interfaces/v1/RspSessions; |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/GetSystemNotice | Lcom/bapis/bilibili/im/gateway/interfaces/v1/ReqGetSystemNotice; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/RspGetSystemNotice; |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/GetTotalUnread | Lcom/bapis/bilibili/im/gateway/interfaces/v1/GetTotalUnreadReq; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/GetTotalUnreadRsp; |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/HarmonyTotalUnread | Lcom/bapis/bilibili/im/gateway/interfaces/v1/GetTotalUnreadReq; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/HarmonyTotalUnreadRsp; |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/MessageToast | Lcom/bapis/bilibili/im/gateway/interfaces/v1/MessageToastReq; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/MessageToastRsp; |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/MsgFeedAction | Lcom/bapis/bilibili/im/gateway/interfaces/v1/MsgFeedActionReq; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/MsgFeedActionRsp; |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/MsgFeedMsgList | Lcom/bapis/bilibili/im/gateway/interfaces/v1/MsgListReq; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/MsgListRsp; |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/NewSessions | Lcom/bapis/bilibili/im/gateway/interfaces/v1/ReqNewSessions; | Lcom/bapis/bilibili/im/interfaces/v1/RspSessions; |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/Prompt | Lcom/bapis/bilibili/im/gateway/interfaces/v1/PromptReq; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/PromptRsp; |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/QuickLink | Lcom/bapis/bilibili/im/gateway/interfaces/v1/QuickLinkReq; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/QuickLinkRsp; |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/RemoveSession | Lcom/bapis/bilibili/im/gateway/interfaces/v1/ReqRemoveSession; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/DummyRsp; |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/SetMsgFeedNotice | Lcom/bapis/bilibili/im/gateway/interfaces/v1/SetMsgFeedNoticeReq; | Lcom/google/protobuf/Empty; |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/SetTop | Lcom/bapis/bilibili/im/gateway/interfaces/v1/ReqSetTop; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/DummyRsp; |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/SingleInbox | Lcom/bapis/bilibili/im/gateway/interfaces/v1/ReqSingleInbox; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/RspSingleInbox; |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/UpdateTotalUnread | Lcom/google/protobuf/Empty; | Lcom/google/protobuf/Empty; |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/UpdateTotalUnreadV2 | Lcom/bapis/bilibili/im/interfaces/v1/ReqUpdateTotalUnread; | Lcom/google/protobuf/Empty; |
| /bilibili.im.interface.v1.ImInterface/AckAssisMsg | Lcom/bapis/bilibili/im/interfaces/v1/ReqAckAssisMsg; | Lcom/bapis/bilibili/im/interfaces/v1/DummyRsp; |
| /bilibili.im.interface.v1.ImInterface/AckSessions | Lcom/bapis/bilibili/im/interfaces/v1/ReqAckSessions; | Lcom/bapis/bilibili/im/interfaces/v1/RspSessions; |
| /bilibili.im.interface.v1.ImInterface/BatchGetMsgDetail | Lcom/bapis/bilibili/im/interfaces/v1/ReqGetMsg; | Lcom/bapis/bilibili/im/interfaces/v1/RspGetMsg; |
| /bilibili.im.interface.v1.ImInterface/BatchRmDustbin | Lcom/bapis/bilibili/im/interfaces/v1/DummyReq; | Lcom/bapis/bilibili/im/interfaces/v1/DummyRsp; |
| /bilibili.im.interface.v1.ImInterface/BatchRmSessions | Lcom/bapis/bilibili/im/interfaces/v1/ReqBatRmSess; | Lcom/bapis/bilibili/im/interfaces/v1/DummyRsp; |
| /bilibili.im.interface.v1.ImInterface/BatchSessDetail | Lcom/bapis/bilibili/im/interfaces/v1/ReqSessionDetails; | Lcom/bapis/bilibili/im/interfaces/v1/RspSessionDetails; |
| /bilibili.im.interface.v1.ImInterface/BatchUpdateDustbinAck | Lcom/bapis/bilibili/im/interfaces/v1/DummyReq; | Lcom/bapis/bilibili/im/interfaces/v1/DummyRsp; |
| /bilibili.im.interface.v1.ImInterface/CloseClearUnreadUI | Lcom/bapis/bilibili/im/interfaces/v1/ReqCloseClearUnreadUI; | Lcom/bapis/bilibili/im/interfaces/v1/RspCloseClearUnreadUI; |
| /bilibili.im.interface.v1.ImInterface/GetDiscussListInImPage | Lcom/bapis/bilibili/im/interfaces/v1/ReqGetDiscussListInImPage; | Lcom/bapis/bilibili/im/interfaces/v1/RspGetDiscussListInImPage; |
| /bilibili.im.interface.v1.ImInterface/GetLiveInfo | Lcom/bapis/bilibili/im/interfaces/v1/ReqLiveInfo; | Lcom/bapis/bilibili/im/interfaces/v1/RspLiveInfo; |
| /bilibili.im.interface.v1.ImInterface/GetSessions | Lcom/bapis/bilibili/im/interfaces/v1/ReqGetSessions; | Lcom/bapis/bilibili/im/interfaces/v1/RspSessions; |
| /bilibili.im.interface.v1.ImInterface/GetSpecificSessions | Lcom/bapis/bilibili/im/interfaces/v1/ReqGetSpecificSessions; | Lcom/bapis/bilibili/im/interfaces/v1/RspSessions; |
| /bilibili.im.interface.v1.ImInterface/GetTotalUnread | Lcom/bapis/bilibili/im/interfaces/v1/ReqTotalUnread; | Lcom/bapis/bilibili/im/interfaces/v1/RspTotalUnread; |
| /bilibili.im.interface.v1.ImInterface/GetUserCosmoState | Lcom/bapis/bilibili/im/interfaces/v1/GetUserCosmoStateReq; | Lcom/bapis/bilibili/im/interfaces/v1/GetUserCosmoStateRsp; |
| /bilibili.im.interface.v1.ImInterface/GroupAssisMsg | Lcom/bapis/bilibili/im/interfaces/v1/ReqGroupAssisMsg; | Lcom/bapis/bilibili/im/interfaces/v1/RspSessionMsg; |
| /bilibili.im.interface.v1.ImInterface/LikeMsg | Lcom/bapis/bilibili/im/interfaces/v1/ReqLikeMsg; | Lcom/bapis/bilibili/im/interfaces/v1/DummyRsp; |
| /bilibili.im.interface.v1.ImInterface/MsgHasLike | Lcom/bapis/bilibili/im/interfaces/v1/ReqMsgHasLike; | Lcom/bapis/bilibili/im/interfaces/v1/RspMsgHasLike; |
| /bilibili.im.interface.v1.ImInterface/MyGroupUnread | Lcom/bapis/bilibili/im/interfaces/v1/DummyReq; | Lcom/bapis/bilibili/im/interfaces/v1/RspMyGroupUnread; |
| /bilibili.im.interface.v1.ImInterface/NewSessions | Lcom/bapis/bilibili/im/interfaces/v1/ReqNewSessions; | Lcom/bapis/bilibili/im/interfaces/v1/RspSessions; |
| /bilibili.im.interface.v1.ImInterface/RemoveSession | Lcom/bapis/bilibili/im/interfaces/v1/ReqRemoveSession; | Lcom/bapis/bilibili/im/interfaces/v1/DummyRsp; |
| /bilibili.im.interface.v1.ImInterface/SendMsg | Lcom/bapis/bilibili/im/interfaces/v1/ReqSendMsg; | Lcom/bapis/bilibili/im/interfaces/v1/RspSendMsg; |
| /bilibili.im.interface.v1.ImInterface/SessionDetail | Lcom/bapis/bilibili/im/interfaces/v1/ReqSessionDetail; | Lcom/bapis/bilibili/im/type/SessionInfo; |
| /bilibili.im.interface.v1.ImInterface/SetTop | Lcom/bapis/bilibili/im/interfaces/v1/ReqSetTop; | Lcom/bapis/bilibili/im/interfaces/v1/DummyRsp; |
| /bilibili.im.interface.v1.ImInterface/ShareList | Lcom/bapis/bilibili/im/interfaces/v1/ReqShareList; | Lcom/bapis/bilibili/im/interfaces/v1/RspShareList; |
| /bilibili.im.interface.v1.ImInterface/ShowClearUnreadUI | Lcom/bapis/bilibili/im/interfaces/v1/ReqShowClearUnreadUI; | Lcom/bapis/bilibili/im/interfaces/v1/RspShowClearUnreadUI; |
| /bilibili.im.interface.v1.ImInterface/SingleUnread | Lcom/bapis/bilibili/im/interfaces/v1/ReqSingleUnread; | Lcom/bapis/bilibili/im/interfaces/v1/RspSingleUnread; |
| /bilibili.im.interface.v1.ImInterface/SpecificSingleUnread | Lcom/bapis/bilibili/im/interfaces/v1/ReqSpecificSingleUnread; | Lcom/bapis/bilibili/im/interfaces/v1/RspSpecificSingleUnread; |
| /bilibili.im.interface.v1.ImInterface/SyncAck | Lcom/bapis/bilibili/im/interfaces/v1/ReqSyncAck; | Lcom/bapis/bilibili/im/interfaces/v1/RspSyncAck; |
| /bilibili.im.interface.v1.ImInterface/SyncFetchSessionMsgs | Lcom/bapis/bilibili/im/interfaces/v1/ReqSessionMsg; | Lcom/bapis/bilibili/im/interfaces/v1/RspSessionMsg; |
| /bilibili.im.interface.v1.ImInterface/SyncRelation | Lcom/bapis/bilibili/im/interfaces/v1/ReqRelationSync; | Lcom/bapis/bilibili/im/interfaces/v1/RspRelationSync; |
| /bilibili.im.interface.v1.ImInterface/UpdateAck | Lcom/bapis/bilibili/im/interfaces/v1/ReqUpdateAck; | Lcom/bapis/bilibili/im/interfaces/v1/DummyRsp; |
| /bilibili.im.interface.v1.ImInterface/UpdateIntercept | Lcom/bapis/bilibili/im/interfaces/v1/ReqUpdateIntercept; | Lcom/bapis/bilibili/im/interfaces/v1/DummyRsp; |
| /bilibili.im.interface.v1.ImInterface/UpdateTotalUnread | Lcom/bapis/bilibili/im/interfaces/v1/ReqUpdateTotalUnread; | Lcom/bapis/bilibili/im/interfaces/v1/RspUpdateTotalUnread; |
| /bilibili.im.interface.v1.ImInterface/UpdateUnflwRead | Lcom/bapis/bilibili/im/interfaces/v1/DummyReq; | Lcom/bapis/bilibili/im/interfaces/v1/DummyRsp; |
| /bilibili.im.interface.v1.ImInterface/UpdateUserCosmoState | Lcom/bapis/bilibili/im/interfaces/v1/UpdateUserCosmoStateReq; | Lcom/bapis/bilibili/im/interfaces/v1/UpdateUserCosmoStateRsp; |

```sh
node bin/bili-apis.mjs --edition official list --category message --limit 10
node bin/bili-apis.mjs --edition official show "ID"
```
