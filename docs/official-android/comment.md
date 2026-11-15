# 评论与回复

评论列表、楼中楼和评论操作。分类根据路由、域名与声明类名称推断，未验证业务行为。

官方 Android 9.19.0：29 条 HTTP 声明、22 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。

[返回分类](README.md) · [与 Play 对比](comparison.md)

## HTTP

参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。

| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |
| --- | --- | --- | --- | --- |
| classes14.dex:28558:GET | GET | https://api.bilibili.com/x/v2/dm/reply/list | Query:access_key, Query:type, Query:aid, Query:oid, Query:parent_id, Query:target_id, Query:pn, Query:ps, Query:teenagers_mode, Query:lessons_mode | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playerbizcommonv2/danmaku/data/PlayerDanmukuReplyListInfo;&gt;;&gt;; |
| classes5.dex:16308:POST | POST | https://api.bilibili.com/x/v2/reply/del | Field:access_key, Field:oid, Field:type, Field:rpid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:16309:POST | POST | https://api.bilibili.com/x/v2/reply/del/combo | Field:access_key, Field:oid, Field:type, Field:rpid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes5.dex:16310:POST | POST | https://api.bilibili.com/x/v2/reply/lottery/del | Field:access_key, Field:oid, Field:type, Field:lottery_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:16311:POST | POST | https://api.bilibili.com/x/v2/reply/hate | Field:access_key, Field:oid, Field:type, Field:rpid, Field:action, Field:scene, Field:ordering, Field:spmid, Field:from_spmid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:16312:GET | GET | https://api.bilibili.com/x/v2/reply/reply/cursor | QueryMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/comment2/model/BiliCommentDetail;&gt;;&gt;; |
| classes5.dex:16313:GET | GET | https://api.bilibili.com/x/v2/reply/folded | QueryMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/comment2/model/BiliCommentCursorList;&gt;;&gt;; |
| classes5.dex:16314:GET | GET | https://api.bilibili.com/x/v2/reply/subject/status | Query:access_key, Query:oid, Query:type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; |
| classes5.dex:16315:GET | GET | https://api.bilibili.com/x/v2/reply/log | Query:oid, Query:type, Query:pn, Query:ps | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/comment2/model/BiliCommentDeleteHistory;&gt;;&gt;; |
| classes5.dex:16316:GET | GET | https://api.bilibili.com/x/v2/reply/msg_feed_list | QueryMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/comment2/model/BiliCommentFeed;&gt;;&gt;; |
| classes5.dex:16317:GET | GET | https://api.bilibili.com/x/v2/reply/reply/folded | QueryMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/comment2/model/BiliCommentCursorList;&gt;;&gt;; |
| classes5.dex:16318:GET | GET | https://api.bilibili.com/x/v2/reply/topics | Query:oid, Query:type, Query:mid, Query:message | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/comment2/model/BiliCommentTopic;&gt;;&gt;; |
| classes5.dex:16319:POST | POST | https://api.bilibili.com/x/v2/reply/action | Field:access_key, Field:oid, Field:type, Field:rpid, Field:action, Field:from, Field:scene, Field:ordering, Field:spmid, Field:from_spmid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/comment2/model/BiliCommentLikeAction;&gt;;&gt;; |
| classes5.dex:16320:POST | POST | https://api.bilibili.com/x/v2/reply/likebiz/nft | Field:oid, Field:type, Field:rpid, Field:action, Field:id, Field:from | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/comment2/model/BiliCommentNftLikeInfo;&gt;;&gt;; |
| classes5.dex:16321:POST | POST | https://api.bilibili.com/x/v2/reply/subject/modify | Field:access_key, Field:oid, Field:type, Field:action | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; |
| classes5.dex:16322:POST | POST | https://api.bilibili.com/x/v2/reply/add | FieldMap:(内容未知), Header:x-bili-gaia-vtoken | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/comment2/model/BiliCommentAddResult;&gt;;&gt;; |
| classes5.dex:16323:POST | POST | https://api.bilibili.com/x/v2/reply/recommend | Field:access_key, Field:oid, Field:type, Field:rpid, Field:kind, Field:extra | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:16324:POST | POST | https://api.bilibili.com/x/v2/reply/report | Field:access_key, Field:oid, Field:type, Field:rpid, Field:reason, Field:content | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:16325:POST | POST | https://api.bilibili.com/x/v2/reply/top | Field:access_key, Field:oid, Field:type, Field:rpid, Field:action | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:27323:POST | POST | https://api.bilibili.com/x/v2/reply/del/combo | Field:access_key, Field:oid, Field:type, Field:rpid, Field:spmid, Field:extend_content, Field:track_id, Field:scm_action_id, Field:container_uuid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comment3/data/api/BlockAndDeleteResponse;&gt;;&gt;; |
| classes5.dex:27324:POST | POST | https://api.bilibili.com/x/v2/reply/del | Field:access_key, Field:oid, Field:type, Field:rpid, Field:track_id, Field:scm_action_id, Field:container_uuid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:27325:POST | POST | https://api.bilibili.com/x/v2/reply/hate | Field:access_key, Field:oid, Field:type, Field:rpid, Field:action, Field:scene, Field:ordering, Field:from_spmid, Field:spmid, Field:track_id, Field:scm_action_id, Field:container_uuid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comment3/data/api/DislikeResponse;&gt;;&gt;; |
| classes5.dex:27326:POST | POST | https://api.bilibili.com/x/v2/reply/quiz/edit | Field:biz_code, Field:id, Field:action, Field:answer | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:27327:GET | GET | https://api.bilibili.com/x/v2/reply/subject/status | Query:access_key, Query:oid, Query:type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comment3/data/api/GetCommentSubjectStatusResponse;&gt;;&gt;; |
| classes5.dex:27328:POST | POST | https://api.bilibili.com/x/v2/reply/action | Field:access_key, Field:oid, Field:type, Field:rpid, Field:action, Field:scene, Field:ordering, Field:from_spmid, Field:spmid, Field:track_id, Field:scm_action_id, Field:container_uuid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comment3/data/api/LikeResponse;&gt;;&gt;; |
| classes5.dex:27329:POST | POST | https://api.bilibili.com/x/v2/reply/likebiz/nft | Field:oid, Field:type, Field:rpid, Field:action, Field:id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comment3/data/api/LikeNftResponse;&gt;;&gt;; |
| classes5.dex:27330:POST | POST | https://api.bilibili.com/x/v2/reply/subject/modify | Field:access_key, Field:oid, Field:type, Field:action | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comment3/data/api/ModifyCommentSubjectStatusResponse;&gt;;&gt;; |
| classes5.dex:27332:POST | POST | https://api.bilibili.com/x/v2/reply/top | Field:access_key, Field:oid, Field:type, Field:rpid, Field:action, Field:track_id, Field:scm_action_id, Field:container_uuid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:27333:POST | POST | https://api.bilibili.com/x/v2/reply/recommend | Field:access_key, Field:oid, Field:type, Field:rpid, Field:kind, Field:extra | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |

## gRPC

请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。

| 路由 | 请求类型候选 | 响应类型候选 |
| --- | --- | --- |
| /bilibili.main.community.reply.v1.Reply/AddReply | Lcom/bapis/bilibili/main/community/reply/v1/AddReplyReq; | Lcom/bapis/bilibili/main/community/reply/v1/AddReplyResp; |
| /bilibili.main.community.reply.v1.Reply/AnswerQuestion | Lcom/bapis/bilibili/main/community/reply/v1/AnswerQuestionReq; | Lcom/bapis/bilibili/main/community/reply/v1/AnswerQuestionResp; |
| /bilibili.main.community.reply.v1.Reply/AtSearch | Lcom/bapis/bilibili/main/community/reply/v1/AtSearchReq; | Lcom/bapis/bilibili/main/community/reply/v1/AtSearchReply; |
| /bilibili.main.community.reply.v1.Reply/DetailList | Lcom/bapis/bilibili/main/community/reply/v1/DetailListReq; | Lcom/bapis/bilibili/main/community/reply/v1/DetailListReply; |
| /bilibili.main.community.reply.v1.Reply/DialogList | Lcom/bapis/bilibili/main/community/reply/v1/DialogListReq; | Lcom/bapis/bilibili/main/community/reply/v1/DialogListReply; |
| /bilibili.main.community.reply.v1.Reply/DoVote | Lcom/bapis/bilibili/main/community/reply/v1/DoVoteReq; | Lcom/bapis/bilibili/main/community/reply/v1/DoVoteResp; |
| /bilibili.main.community.reply.v1.Reply/FoldList | Lcom/bapis/bilibili/main/community/reply/v1/FoldListReq; | Lcom/bapis/bilibili/main/community/reply/v1/FoldListResp; |
| /bilibili.main.community.reply.v1.Reply/HotspotPage | Lcom/bapis/bilibili/main/community/reply/v1/HotspotPageReq; | Lcom/bapis/bilibili/main/community/reply/v1/HotspotPageResp; |
| /bilibili.main.community.reply.v1.Reply/MainList | Lcom/bapis/bilibili/main/community/reply/v1/MainListReq; | Lcom/bapis/bilibili/main/community/reply/v1/MainListReply; |
| /bilibili.main.community.reply.v1.Reply/PictureList | Lcom/bapis/bilibili/main/community/reply/v1/PictureListReq; | Lcom/bapis/bilibili/main/community/reply/v1/PictureListResp; |
| /bilibili.main.community.reply.v1.Reply/PreviewList | Lcom/bapis/bilibili/main/community/reply/v1/PreviewListReq; | Lcom/bapis/bilibili/main/community/reply/v1/PreviewListReply; |
| /bilibili.main.community.reply.v1.Reply/QuizShare | Lcom/bapis/bilibili/main/community/reply/v1/QuizShareReq; | Lcom/bapis/bilibili/main/community/reply/v1/QuizShareReply; |
| /bilibili.main.community.reply.v1.Reply/ReplyInfo | Lcom/bapis/bilibili/main/community/reply/v1/ReplyInfoReq; | Lcom/bapis/bilibili/main/community/reply/v1/ReplyInfoReply; |
| /bilibili.main.community.reply.v1.Reply/SearchItem | Lcom/bapis/bilibili/main/community/reply/v1/SearchItemReq; | Lcom/bapis/bilibili/main/community/reply/v1/SearchItemReply; |
| /bilibili.main.community.reply.v1.Reply/SearchItemPreHook | Lcom/bapis/bilibili/main/community/reply/v1/SearchItemPreHookReq; | Lcom/bapis/bilibili/main/community/reply/v1/SearchItemPreHookReply; |
| /bilibili.main.community.reply.v1.Reply/ShareRepliesInfo | Lcom/bapis/bilibili/main/community/reply/v1/ShareRepliesInfoReq; | Lcom/bapis/bilibili/main/community/reply/v1/ShareRepliesInfoResp; |
| /bilibili.main.community.reply.v1.Reply/ShareReplyMaterial | Lcom/bapis/bilibili/main/community/reply/v1/ShareReplyMaterialReq; | Lcom/bapis/bilibili/main/community/reply/v1/ShareReplyMaterialResp; |
| /bilibili.main.community.reply.v1.Reply/SuggestEmotes | Lcom/bapis/bilibili/main/community/reply/v1/SuggestEmotesReq; | Lcom/bapis/bilibili/main/community/reply/v1/SuggestEmotesResp; |
| /bilibili.main.community.reply.v1.Reply/TranslateReply | Lcom/bapis/bilibili/main/community/reply/v1/TranslateReplyReq; | Lcom/bapis/bilibili/main/community/reply/v1/TranslateReplyResp; |
| /bilibili.main.community.reply.v1.Reply/UpdateSingleReplyNotificationConfig | Lcom/bapis/bilibili/main/community/reply/v1/UpdateSingleReplyNotificationConfigReq; | Lcom/bapis/bilibili/main/community/reply/v1/UpdateSingleReplyNotificationConfigResp; |
| /bilibili.main.community.reply.v1.Reply/UserCallback | Lcom/bapis/bilibili/main/community/reply/v1/UserCallbackReq; | Lcom/bapis/bilibili/main/community/reply/v1/UserCallbackReply; |
| /bilibili.main.community.reply.v2.Reply/SubjectDescription | Lcom/bapis/bilibili/main/community/reply/v2/SubjectDescriptionReq; | Lcom/bapis/bilibili/main/community/reply/v2/SubjectDescriptionReply; |

```sh
node bin/bili-apis.mjs --edition official list --category comment --limit 10
node bin/bili-apis.mjs --edition official show "ID"
```
