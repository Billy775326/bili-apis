# 私信与客服

会话、私信和客服通信。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 26 条 HTTP 声明、79 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes14.dex:22558:GET | GET | https://api.vc.bilibili.com/x/im/feed/info | Query:aids, Query:article_ids, Query:ep_ids, Query:am_ids | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/im/entity/FeedInfo;&gt;;&gt;; | not-tested |
| classes14.dex:22564:POST | POST | https://api.vc.bilibili.com/x/im/recommend_card/check_status | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/im/entity/FollowRecommendCardResp;&gt;;&gt;; | not-tested |
| classes14.dex:22568:GET | GET | https://api.vc.bilibili.com/auto_reply_svr/v1/auto_reply_svr/show_toast?type=2 |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/im/entity/AutoReplyConfig;&gt;;&gt;; | not-tested |
| classes14.dex:22576:GET | GET | https://api.vc.bilibili.com/x/im/client_config |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes14.dex:22577:GET | GET | https://api.vc.bilibili.com/user/v1/user/details | Query:uids | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes14.dex:22578:GET | GET | https://api.vc.bilibili.com/x/im/user_infos | Query:uids, Query:style | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/bplus/im/entity/UserCard;&gt;;&gt;;&gt;; | not-tested |
| classes14.dex:22579:GET | GET | https://customerservice.bilibili.com/x/custom/msg_svr/v1/video_sign | Query:key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes14.dex:22582:GET | GET | https://api.vc.bilibili.com/auto_reply_svr/v1/auto_reply_svr/record_toast_status?type=2 |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes14.dex:22593:POST | POST | https://customerservice.bilibili.com/x/custom/call_svr/v1/upload_bfs | Part:biz, Part:timestamp, Part:rnd, Query:access_key, Part:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes14.dex:22594:POST | POST | https://api.vc.bilibili.com/api/v1/image/upload | Part:timestamp, Part:rnd, Query:access_key, Part:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes14.dex:22596:POST | POST | https://customerservice.bilibili.com/x/custom/msg_svr/v1/upload | Part:biz, Part:timestamp, Part:rnd, Part:mid, Part:filename, Query:access_key, Part:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes14.dex:22601:POST | POST | https://message.bilibili.com/api/notify/clear.up_unread.do |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes14.dex:22604:GET | GET | https://customerservice.bilibili.com/x/custom/call_svr/v1/shop_info | Query:shop_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/im/entity/CustomerUserNameInfo;&gt;;&gt;; | not-tested |
| classes14.dex:33420:POST | POST | https://api.bilibili.com/x/msgfeed/del | Field:id, Field:tp | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes14.dex:33421:GET | GET | https://api.bilibili.com/x/msgfeed/at | Query:id, Query:at_time | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/privateletter/model/AtNoticeListResponse;&gt;;&gt;; | not-tested |
| classes14.dex:33422:GET | GET | https://api.bilibili.com/x/msgfeed/like | Query:id, Query:like_time | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/privateletter/model/LikeNoticeResponse;&gt;;&gt;; | not-tested |
| classes14.dex:33423:GET | GET | https://api.bilibili.com/x/msgfeed/reply | Query:id, Query:reply_time | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/privateletter/model/ReplyNoticeListResponse;&gt;;&gt;; | not-tested |
| classes14.dex:36774:GET | GET | http://api.bilibili.com/pgc/freya/com/im/msg/history | Query:room_id, Query:biz_type, Query:report, Query:start_msg_id, Query:page_size | Lqm1/s&lt;Lcom/bilibili/chatroomsdk/ChatMsgList;&gt;; | not-tested |
| classes14.dex:36775:POST | POST | http://api.bilibili.com/pgc/freya/com/im/msg/handle | Field:room_id, Field:biz_type, Field:msg_id, Field:type, Field:report | Lqm1/s&lt;Ljava/lang/String;&gt;; | not-tested |
| classes14.dex:36780:POST | POST | http://api.bilibili.com/pgc/freya/com/im/msg/send | Field:room_id, Field:biz_type, Field:content_type, Field:content, Field:req_id, Field:report | Lqm1/s&lt;Lcom/bilibili/chatroomsdk/ChatMsgResp;&gt;; | not-tested |
| classes20.dex:24726:POST | POST | http://api.bilibili.com/pgc/freya/im/pure/msg | Field:room_id, Field:seq_id, Field:backward, Field:size | Ljava/lang/Object; | not-tested |
| classes20.dex:24728:POST | POST | http://api.bilibili.com/pgc/freya/im/action | FieldMap:(内容未知) | Ljava/lang/Object; | not-tested |
| classes20.dex:24745:GET | GET | http://api.bilibili.com/pgc/freya/im/msg/first_tips | Query:room_id, Query:start_seq_id | Ljava/lang/Object; | not-tested |
| classes20.dex:24746:GET | GET | http://api.bilibili.com/pgc/freya/im/msg/pulls | Query:room_id, Query:start_seq_id, Query:end_seq_id | Ljava/lang/Object; | not-tested |
| classes20.dex:24748:POST | POST | http://api.bilibili.com/pgc/freya/im/msg/send | Field:room_id, Field:content_type, Field:content, Field:req_id | Ljava/lang/Object; | not-tested |
| classes20.dex:24751:POST | POST | http://api.bilibili.com/pgc/freya/im/msg/remove | Field:msg_id | Ljava/lang/Object; | not-tested |

## gRPC

请求/响应角色默认仍为静态候选；View/View 已有单独实现核对。表格不代表已建立连接或验证认证。

| 路由 | 请求类型候选 | 响应类型候选 | 线上抽查 |
| --- | --- | --- | --- |
| /bilibili.broadcast.message.im.Notify/WatchNotify | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/broadcast/message/im/NotifyRsp; | not-tested |
| /bilibili.im.customer.interface.v1.CustomerInterface/ClickReport | Lcom/bapis/bilibili/im/customer/interfaces/ClickReportReq; | Lcom/bapis/bilibili/im/customer/interfaces/ClickReportRsp; | not-tested |
| /bilibili.im.customer.interface.v1.CustomerInterface/CloseConversation | Lcom/bapis/bilibili/im/customer/interfaces/CloseConversationReq; | Lcom/bapis/bilibili/im/customer/interfaces/CloseConversationRsp; | not-tested |
| /bilibili.im.customer.interface.v1.CustomerInterface/CustomerPreEvaluate | Lcom/bapis/bilibili/im/customer/interfaces/PreEvaluateReq; | Lcom/bapis/bilibili/im/customer/interfaces/PreEvaluateRsp; | not-tested |
| /bilibili.im.customer.interface.v1.CustomerInterface/CustomerUpdateAck | Lcom/bapis/bilibili/im/customer/interfaces/UpdateAckReq; | Lcom/bapis/bilibili/im/customer/interfaces/Empty; | not-tested |
| /bilibili.im.customer.interface.v1.CustomerInterface/CustomerWindowOptions | Lcom/bapis/bilibili/im/customer/interfaces/WindowOptionsReq; | Lcom/bapis/bilibili/im/customer/interfaces/WindowOptionsRsp; | not-tested |
| /bilibili.im.customer.interface.v1.CustomerInterface/CustomerWindowOptionsV2 | Lcom/bapis/bilibili/im/customer/interfaces/WindowOptionsV2Req; | Lcom/bapis/bilibili/im/customer/interfaces/WindowOptionsV2Rsp; | not-tested |
| /bilibili.im.customer.interface.v1.CustomerInterface/FinishParagraphsRender | Lcom/bapis/bilibili/im/customer/interfaces/FinishParagraphsRenderReq; | Lcom/bapis/bilibili/im/customer/interfaces/FinishParagraphsRenderRsp; | not-tested |
| /bilibili.im.customer.interface.v1.CustomerInterface/GetCustomerSessDetail | Lcom/bapis/bilibili/im/customer/interfaces/GetSessDetailReq; | Lcom/bapis/bilibili/im/customer/interfaces/GetSessDetailRsp; | not-tested |
| /bilibili.im.customer.interface.v1.CustomerInterface/GetCustomerSessions | Lcom/bapis/bilibili/im/customer/interfaces/GetSessionsReq; | Lcom/bapis/bilibili/im/customer/interfaces/SessionsRsp; | not-tested |
| /bilibili.im.customer.interface.v1.CustomerInterface/GetNewCustomerSessions | Lcom/bapis/bilibili/im/customer/interfaces/GetNewSessionsReq; | Lcom/bapis/bilibili/im/customer/interfaces/SessionsRsp; | not-tested |
| /bilibili.im.customer.interface.v1.CustomerInterface/GetShopCfg | Lcom/bapis/bilibili/im/customer/interfaces/ShopCfgReq; | Lcom/bapis/bilibili/im/customer/interfaces/ShopCfgRsp; | not-tested |
| /bilibili.im.customer.interface.v1.CustomerInterface/GetShopInfo | Lcom/bapis/bilibili/im/customer/interfaces/ShopInfoReq; | Lcom/bapis/bilibili/im/customer/interfaces/ShopInfoRsp; | not-tested |
| /bilibili.im.customer.interface.v1.CustomerInterface/GetUserSettings | Lcom/bapis/bilibili/im/customer/interfaces/GetUserSettingsReq; | Lcom/bapis/bilibili/im/customer/interfaces/GetUserSettingsRsp; | not-tested |
| /bilibili.im.customer.interface.v1.CustomerInterface/HeartBeat | Lcom/bapis/bilibili/im/customer/interfaces/SendHeartBeatReq; | Lcom/bapis/bilibili/im/customer/interfaces/Empty; | not-tested |
| /bilibili.im.customer.interface.v1.CustomerInterface/OutCustomerQueue | Lcom/bapis/bilibili/im/customer/interfaces/OutCustomerQueueReq; | Lcom/bapis/bilibili/im/customer/interfaces/Empty; | not-tested |
| /bilibili.im.customer.interface.v1.CustomerInterface/PopResultUpdate | Lcom/bapis/bilibili/im/customer/interfaces/PopResultUpdateReq; | Lcom/bapis/bilibili/im/customer/interfaces/PopResultUpdateRsp; | not-tested |
| /bilibili.im.customer.interface.v1.CustomerInterface/RemoveSession | Lcom/bapis/bilibili/im/customer/interfaces/RemoveSessionReq; | Lcom/bapis/bilibili/im/customer/interfaces/Empty; | not-tested |
| /bilibili.im.customer.interface.v1.CustomerInterface/SendCustomerMsg | Lcom/bapis/bilibili/im/customer/interfaces/SendMsgReq; | Lcom/bapis/bilibili/im/customer/interfaces/SendMsgRsp; | not-tested |
| /bilibili.im.customer.interface.v1.CustomerInterface/SetTop | Lcom/bapis/bilibili/im/customer/interfaces/SetTopReq; | Lcom/bapis/bilibili/im/customer/interfaces/Empty; | not-tested |
| /bilibili.im.customer.interface.v1.CustomerInterface/SetUserSettings | Lcom/bapis/bilibili/im/customer/interfaces/SetUserSettingsReq; | Lcom/bapis/bilibili/im/customer/interfaces/SetUserSettingsRsp; | not-tested |
| /bilibili.im.customer.interface.v1.CustomerInterface/SyncFetchCustomerSessionMsgs | Lcom/bapis/bilibili/im/customer/interfaces/SessionMsgReq; | Lcom/bapis/bilibili/im/customer/interfaces/SessionMsgRsp; | not-tested |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/ClearBubbleMsg | Lcom/bapis/bilibili/im/gateway/interfaces/v1/ClearBubbleMsgReq; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/ClearBubbleMsgRsp; | not-tested |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/ClearMessageToast | Lcom/bapis/bilibili/im/gateway/interfaces/v1/ClearMessageToastReq; | Lcom/google/protobuf/Empty; | not-tested |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/DelMsg | Lcom/bapis/bilibili/im/gateway/interfaces/v1/DelMsgReq; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/DelMsgRsp; | not-tested |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/DelMsgCard | Lcom/bapis/bilibili/im/gateway/interfaces/v1/DelMsgCardReq; | Lcom/google/protobuf/Empty; | not-tested |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/GetAIInfo | Lcom/bapis/bilibili/im/gateway/interfaces/v1/ReqGetAIInfo; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/RspGetAIInfo; | not-tested |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/GetBubbleMsg | Lcom/bapis/bilibili/im/gateway/interfaces/v1/GetBubbleMsgReq; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/GetBubbleMsgRsp; | not-tested |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/GetSessions | Lcom/bapis/bilibili/im/gateway/interfaces/v1/ReqGetSessions; | Lcom/bapis/bilibili/im/interfaces/v1/RspSessions; | not-tested |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/GetSystemNotice | Lcom/bapis/bilibili/im/gateway/interfaces/v1/ReqGetSystemNotice; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/RspGetSystemNotice; | not-tested |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/GetTotalUnread | Lcom/bapis/bilibili/im/gateway/interfaces/v1/GetTotalUnreadReq; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/GetTotalUnreadRsp; | not-tested |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/HarmonyTotalUnread | Lcom/bapis/bilibili/im/gateway/interfaces/v1/GetTotalUnreadReq; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/HarmonyTotalUnreadRsp; | not-tested |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/MessageToast | Lcom/bapis/bilibili/im/gateway/interfaces/v1/MessageToastReq; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/MessageToastRsp; | not-tested |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/MsgFeedAction | Lcom/bapis/bilibili/im/gateway/interfaces/v1/MsgFeedActionReq; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/MsgFeedActionRsp; | not-tested |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/MsgFeedMsgList | Lcom/bapis/bilibili/im/gateway/interfaces/v1/MsgListReq; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/MsgListRsp; | not-tested |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/NewSessions | Lcom/bapis/bilibili/im/gateway/interfaces/v1/ReqNewSessions; | Lcom/bapis/bilibili/im/interfaces/v1/RspSessions; | not-tested |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/Prompt | Lcom/bapis/bilibili/im/gateway/interfaces/v1/PromptReq; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/PromptRsp; | not-tested |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/QuickLink | Lcom/bapis/bilibili/im/gateway/interfaces/v1/QuickLinkReq; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/QuickLinkRsp; | not-tested |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/RemoveSession | Lcom/bapis/bilibili/im/gateway/interfaces/v1/ReqRemoveSession; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/DummyRsp; | not-tested |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/SetMsgFeedNotice | Lcom/bapis/bilibili/im/gateway/interfaces/v1/SetMsgFeedNoticeReq; | Lcom/google/protobuf/Empty; | not-tested |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/SetTop | Lcom/bapis/bilibili/im/gateway/interfaces/v1/ReqSetTop; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/DummyRsp; | not-tested |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/SingleInbox | Lcom/bapis/bilibili/im/gateway/interfaces/v1/ReqSingleInbox; | Lcom/bapis/bilibili/im/gateway/interfaces/v1/RspSingleInbox; | not-tested |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/UpdateTotalUnread | Lcom/google/protobuf/Empty; | Lcom/google/protobuf/Empty; | not-tested |
| /bilibili.im.gateway.interface.v1.ImGatewayApi/UpdateTotalUnreadV2 | Lcom/bapis/bilibili/im/interfaces/v1/ReqUpdateTotalUnread; | Lcom/google/protobuf/Empty; | not-tested |
| /bilibili.im.interface.v1.ImInterface/AckAssisMsg | Lcom/bapis/bilibili/im/interfaces/v1/ReqAckAssisMsg; | Lcom/bapis/bilibili/im/interfaces/v1/DummyRsp; | not-tested |
| /bilibili.im.interface.v1.ImInterface/AckSessions | Lcom/bapis/bilibili/im/interfaces/v1/ReqAckSessions; | Lcom/bapis/bilibili/im/interfaces/v1/RspSessions; | not-tested |
| /bilibili.im.interface.v1.ImInterface/BatchGetMsgDetail | Lcom/bapis/bilibili/im/interfaces/v1/ReqGetMsg; | Lcom/bapis/bilibili/im/interfaces/v1/RspGetMsg; | not-tested |
| /bilibili.im.interface.v1.ImInterface/BatchRmDustbin | Lcom/bapis/bilibili/im/interfaces/v1/DummyReq; | Lcom/bapis/bilibili/im/interfaces/v1/DummyRsp; | not-tested |
| /bilibili.im.interface.v1.ImInterface/BatchRmSessions | Lcom/bapis/bilibili/im/interfaces/v1/ReqBatRmSess; | Lcom/bapis/bilibili/im/interfaces/v1/DummyRsp; | not-tested |
| /bilibili.im.interface.v1.ImInterface/BatchSessDetail | Lcom/bapis/bilibili/im/interfaces/v1/ReqSessionDetails; | Lcom/bapis/bilibili/im/interfaces/v1/RspSessionDetails; | not-tested |
| /bilibili.im.interface.v1.ImInterface/BatchUpdateDustbinAck | Lcom/bapis/bilibili/im/interfaces/v1/DummyReq; | Lcom/bapis/bilibili/im/interfaces/v1/DummyRsp; | not-tested |
| /bilibili.im.interface.v1.ImInterface/CloseClearUnreadUI | Lcom/bapis/bilibili/im/interfaces/v1/ReqCloseClearUnreadUI; | Lcom/bapis/bilibili/im/interfaces/v1/RspCloseClearUnreadUI; | not-tested |
| /bilibili.im.interface.v1.ImInterface/GetDiscussListInImPage | Lcom/bapis/bilibili/im/interfaces/v1/ReqGetDiscussListInImPage; | Lcom/bapis/bilibili/im/interfaces/v1/RspGetDiscussListInImPage; | not-tested |
| /bilibili.im.interface.v1.ImInterface/GetLiveInfo | Lcom/bapis/bilibili/im/interfaces/v1/ReqLiveInfo; | Lcom/bapis/bilibili/im/interfaces/v1/RspLiveInfo; | not-tested |
| /bilibili.im.interface.v1.ImInterface/GetSessions | Lcom/bapis/bilibili/im/interfaces/v1/ReqGetSessions; | Lcom/bapis/bilibili/im/interfaces/v1/RspSessions; | not-tested |
| /bilibili.im.interface.v1.ImInterface/GetSpecificSessions | Lcom/bapis/bilibili/im/interfaces/v1/ReqGetSpecificSessions; | Lcom/bapis/bilibili/im/interfaces/v1/RspSessions; | not-tested |
| /bilibili.im.interface.v1.ImInterface/GetTotalUnread | Lcom/bapis/bilibili/im/interfaces/v1/ReqTotalUnread; | Lcom/bapis/bilibili/im/interfaces/v1/RspTotalUnread; | not-tested |
| /bilibili.im.interface.v1.ImInterface/GetUserCosmoState | Lcom/bapis/bilibili/im/interfaces/v1/GetUserCosmoStateReq; | Lcom/bapis/bilibili/im/interfaces/v1/GetUserCosmoStateRsp; | not-tested |
| /bilibili.im.interface.v1.ImInterface/GroupAssisMsg | Lcom/bapis/bilibili/im/interfaces/v1/ReqGroupAssisMsg; | Lcom/bapis/bilibili/im/interfaces/v1/RspSessionMsg; | not-tested |
| /bilibili.im.interface.v1.ImInterface/LikeMsg | Lcom/bapis/bilibili/im/interfaces/v1/ReqLikeMsg; | Lcom/bapis/bilibili/im/interfaces/v1/DummyRsp; | not-tested |
| /bilibili.im.interface.v1.ImInterface/MsgHasLike | Lcom/bapis/bilibili/im/interfaces/v1/ReqMsgHasLike; | Lcom/bapis/bilibili/im/interfaces/v1/RspMsgHasLike; | not-tested |
| /bilibili.im.interface.v1.ImInterface/MyGroupUnread | Lcom/bapis/bilibili/im/interfaces/v1/DummyReq; | Lcom/bapis/bilibili/im/interfaces/v1/RspMyGroupUnread; | not-tested |
| /bilibili.im.interface.v1.ImInterface/NewSessions | Lcom/bapis/bilibili/im/interfaces/v1/ReqNewSessions; | Lcom/bapis/bilibili/im/interfaces/v1/RspSessions; | not-tested |
| /bilibili.im.interface.v1.ImInterface/RemoveSession | Lcom/bapis/bilibili/im/interfaces/v1/ReqRemoveSession; | Lcom/bapis/bilibili/im/interfaces/v1/DummyRsp; | not-tested |
| /bilibili.im.interface.v1.ImInterface/SendMsg | Lcom/bapis/bilibili/im/interfaces/v1/ReqSendMsg; | Lcom/bapis/bilibili/im/interfaces/v1/RspSendMsg; | not-tested |
| /bilibili.im.interface.v1.ImInterface/SessionDetail | Lcom/bapis/bilibili/im/interfaces/v1/ReqSessionDetail; | Lcom/bapis/bilibili/im/type/SessionInfo; | not-tested |
| /bilibili.im.interface.v1.ImInterface/SetTop | Lcom/bapis/bilibili/im/interfaces/v1/ReqSetTop; | Lcom/bapis/bilibili/im/interfaces/v1/DummyRsp; | not-tested |
| /bilibili.im.interface.v1.ImInterface/ShareList | Lcom/bapis/bilibili/im/interfaces/v1/ReqShareList; | Lcom/bapis/bilibili/im/interfaces/v1/RspShareList; | not-tested |
| /bilibili.im.interface.v1.ImInterface/ShowClearUnreadUI | Lcom/bapis/bilibili/im/interfaces/v1/ReqShowClearUnreadUI; | Lcom/bapis/bilibili/im/interfaces/v1/RspShowClearUnreadUI; | not-tested |
| /bilibili.im.interface.v1.ImInterface/SingleUnread | Lcom/bapis/bilibili/im/interfaces/v1/ReqSingleUnread; | Lcom/bapis/bilibili/im/interfaces/v1/RspSingleUnread; | not-tested |
| /bilibili.im.interface.v1.ImInterface/SpecificSingleUnread | Lcom/bapis/bilibili/im/interfaces/v1/ReqSpecificSingleUnread; | Lcom/bapis/bilibili/im/interfaces/v1/RspSpecificSingleUnread; | not-tested |
| /bilibili.im.interface.v1.ImInterface/SyncAck | Lcom/bapis/bilibili/im/interfaces/v1/ReqSyncAck; | Lcom/bapis/bilibili/im/interfaces/v1/RspSyncAck; | not-tested |
| /bilibili.im.interface.v1.ImInterface/SyncFetchSessionMsgs | Lcom/bapis/bilibili/im/interfaces/v1/ReqSessionMsg; | Lcom/bapis/bilibili/im/interfaces/v1/RspSessionMsg; | not-tested |
| /bilibili.im.interface.v1.ImInterface/SyncRelation | Lcom/bapis/bilibili/im/interfaces/v1/ReqRelationSync; | Lcom/bapis/bilibili/im/interfaces/v1/RspRelationSync; | not-tested |
| /bilibili.im.interface.v1.ImInterface/UpdateAck | Lcom/bapis/bilibili/im/interfaces/v1/ReqUpdateAck; | Lcom/bapis/bilibili/im/interfaces/v1/DummyRsp; | not-tested |
| /bilibili.im.interface.v1.ImInterface/UpdateIntercept | Lcom/bapis/bilibili/im/interfaces/v1/ReqUpdateIntercept; | Lcom/bapis/bilibili/im/interfaces/v1/DummyRsp; | not-tested |
| /bilibili.im.interface.v1.ImInterface/UpdateTotalUnread | Lcom/bapis/bilibili/im/interfaces/v1/ReqUpdateTotalUnread; | Lcom/bapis/bilibili/im/interfaces/v1/RspUpdateTotalUnread; | not-tested |
| /bilibili.im.interface.v1.ImInterface/UpdateUnflwRead | Lcom/bapis/bilibili/im/interfaces/v1/DummyReq; | Lcom/bapis/bilibili/im/interfaces/v1/DummyRsp; | not-tested |
| /bilibili.im.interface.v1.ImInterface/UpdateUserCosmoState | Lcom/bapis/bilibili/im/interfaces/v1/UpdateUserCosmoStateReq; | Lcom/bapis/bilibili/im/interfaces/v1/UpdateUserCosmoStateRsp; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category message --limit 10
node bin/bili-apis.mjs show "ID"
```
