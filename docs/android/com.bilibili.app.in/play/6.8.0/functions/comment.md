# 评论与回复

<!-- android-edition:start -->
包名：`com.bilibili.app.in` · 渠道：Google Play · 版本：6.8.0（9180200）。

[全部版本](../../../../README.md) · [本包文档](../README.md) · [网页接口](../../../../../pc/README.md) · [基线元数据](../../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

评论列表、楼中楼和评论操作。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 20 条 HTTP 声明、22 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes11.dex:41444:POST | POST | https://api.bilibili.com/x/v2/reply/del | Field:access_key, Field:oid, Field:type, Field:rpid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes11.dex:41445:POST | POST | https://api.bilibili.com/x/v2/reply/del/combo | Field:access_key, Field:oid, Field:type, Field:rpid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes11.dex:41446:POST | POST | https://api.bilibili.com/x/v2/reply/lottery/del | Field:access_key, Field:oid, Field:type, Field:lottery_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes11.dex:41447:POST | POST | https://api.bilibili.com/x/v2/reply/hate | Field:access_key, Field:oid, Field:type, Field:rpid, Field:action, Field:scene, Field:ordering, Field:spmid, Field:from_spmid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes11.dex:41448:GET | GET | https://api.bilibili.com/x/v2/reply/reply/cursor | QueryMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/comment2/model/BiliCommentDetail;&gt;;&gt;; | not-tested |
| classes11.dex:41449:GET | GET | https://api.bilibili.com/x/v2/reply/log | Query:oid, Query:type, Query:pn, Query:ps | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/comment2/model/BiliCommentDeleteHistory;&gt;;&gt;; | not-tested |
| classes11.dex:41450:GET | GET | https://api.bilibili.com/x/v2/reply/msg_feed_list | QueryMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/comment2/model/BiliCommentFeed;&gt;;&gt;; | not-tested |
| classes11.dex:41451:POST | POST | https://api.bilibili.com/x/v2/reply/action | Field:access_key, Field:oid, Field:type, Field:rpid, Field:action, Field:from, Field:scene, Field:ordering, Field:spmid, Field:from_spmid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/comment2/model/BiliCommentLikeAction;&gt;;&gt;; | not-tested |
| classes11.dex:41452:POST | POST | https://api.bilibili.com/x/v2/reply/likebiz/nft | Field:oid, Field:type, Field:rpid, Field:action, Field:id, Field:from | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/comment2/model/BiliCommentNftLikeInfo;&gt;;&gt;; | not-tested |
| classes11.dex:41453:POST | POST | https://api.bilibili.com/x/v2/reply/add | FieldMap:(内容未知), Header:x-bili-gaia-vtoken | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/comment2/model/BiliCommentAddResult;&gt;;&gt;; | not-tested |
| classes11.dex:41454:POST | POST | https://api.bilibili.com/x/v2/reply/top | Field:access_key, Field:oid, Field:type, Field:rpid, Field:action | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes5.dex:61300:POST | POST | https://api.bilibili.com/x/v2/reply/del/combo | Field:access_key, Field:oid, Field:type, Field:rpid, Field:spmid, Field:extend_content, Field:track_id, Field:scm_action_id, Field:container_uuid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comment3/data/api/BlockAndDeleteResponse;&gt;;&gt;; | not-tested |
| classes5.dex:61301:POST | POST | https://api.bilibili.com/x/v2/reply/del | Field:access_key, Field:oid, Field:type, Field:rpid, Field:track_id, Field:scm_action_id, Field:container_uuid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes5.dex:61302:POST | POST | https://api.bilibili.com/x/v2/reply/hate | Field:access_key, Field:oid, Field:type, Field:rpid, Field:action, Field:scene, Field:ordering, Field:from_spmid, Field:spmid, Field:track_id, Field:scm_action_id, Field:container_uuid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comment3/data/api/DislikeResponse;&gt;;&gt;; | not-tested |
| classes5.dex:61303:POST | POST | https://api.bilibili.com/x/v2/reply/quiz/edit | Field:biz_code, Field:id, Field:action, Field:answer | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes5.dex:61304:GET | GET | https://api.bilibili.com/x/v2/reply/subject/status | Query:access_key, Query:oid, Query:type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comment3/data/api/GetCommentSubjectStatusResponse;&gt;;&gt;; | not-tested |
| classes5.dex:61305:POST | POST | https://api.bilibili.com/x/v2/reply/action | Field:access_key, Field:oid, Field:type, Field:rpid, Field:action, Field:scene, Field:ordering, Field:from_spmid, Field:spmid, Field:track_id, Field:scm_action_id, Field:container_uuid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comment3/data/api/LikeResponse;&gt;;&gt;; | not-tested |
| classes5.dex:61306:POST | POST | https://api.bilibili.com/x/v2/reply/likebiz/nft | Field:oid, Field:type, Field:rpid, Field:action, Field:id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comment3/data/api/LikeNftResponse;&gt;;&gt;; | not-tested |
| classes5.dex:61307:POST | POST | https://api.bilibili.com/x/v2/reply/subject/modify | Field:access_key, Field:oid, Field:type, Field:action | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comment3/data/api/ModifyCommentSubjectStatusResponse;&gt;;&gt;; | not-tested |
| classes5.dex:61309:POST | POST | https://api.bilibili.com/x/v2/reply/top | Field:access_key, Field:oid, Field:type, Field:rpid, Field:action, Field:track_id, Field:scm_action_id, Field:container_uuid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |

## gRPC

请求/响应角色默认仍为静态候选；View/View 已有单独实现核对。表格不代表已建立连接或验证认证。

| 路由 | 请求类型候选 | 响应类型候选 | 线上抽查 |
| --- | --- | --- | --- |
| /bilibili.main.community.reply.v1.Reply/AddReply | Lcom/bapis/bilibili/main/community/reply/v1/AddReplyReq; | Lcom/bapis/bilibili/main/community/reply/v1/AddReplyResp; | not-tested |
| /bilibili.main.community.reply.v1.Reply/AnswerQuestion | Lcom/bapis/bilibili/main/community/reply/v1/AnswerQuestionReq; | Lcom/bapis/bilibili/main/community/reply/v1/AnswerQuestionResp; | not-tested |
| /bilibili.main.community.reply.v1.Reply/AtSearch | Lcom/bapis/bilibili/main/community/reply/v1/AtSearchReq; | Lcom/bapis/bilibili/main/community/reply/v1/AtSearchReply; | not-tested |
| /bilibili.main.community.reply.v1.Reply/DetailList | Lcom/bapis/bilibili/main/community/reply/v1/DetailListReq; | Lcom/bapis/bilibili/main/community/reply/v1/DetailListReply; | not-tested |
| /bilibili.main.community.reply.v1.Reply/DialogList | Lcom/bapis/bilibili/main/community/reply/v1/DialogListReq; | Lcom/bapis/bilibili/main/community/reply/v1/DialogListReply; | not-tested |
| /bilibili.main.community.reply.v1.Reply/DoVote | Lcom/bapis/bilibili/main/community/reply/v1/DoVoteReq; | Lcom/bapis/bilibili/main/community/reply/v1/DoVoteResp; | not-tested |
| /bilibili.main.community.reply.v1.Reply/FoldList | Lcom/bapis/bilibili/main/community/reply/v1/FoldListReq; | Lcom/bapis/bilibili/main/community/reply/v1/FoldListResp; | not-tested |
| /bilibili.main.community.reply.v1.Reply/HotspotPage | Lcom/bapis/bilibili/main/community/reply/v1/HotspotPageReq; | Lcom/bapis/bilibili/main/community/reply/v1/HotspotPageResp; | not-tested |
| /bilibili.main.community.reply.v1.Reply/MainList | Lcom/bapis/bilibili/main/community/reply/v1/MainListReq; | Lcom/bapis/bilibili/main/community/reply/v1/MainListReply; | not-tested |
| /bilibili.main.community.reply.v1.Reply/PictureList | Lcom/bapis/bilibili/main/community/reply/v1/PictureListReq; | Lcom/bapis/bilibili/main/community/reply/v1/PictureListResp; | not-tested |
| /bilibili.main.community.reply.v1.Reply/PreviewList | Lcom/bapis/bilibili/main/community/reply/v1/PreviewListReq; | Lcom/bapis/bilibili/main/community/reply/v1/PreviewListReply; | not-tested |
| /bilibili.main.community.reply.v1.Reply/QuizShare | Lcom/bapis/bilibili/main/community/reply/v1/QuizShareReq; | Lcom/bapis/bilibili/main/community/reply/v1/QuizShareReply; | not-tested |
| /bilibili.main.community.reply.v1.Reply/ReplyInfo | Lcom/bapis/bilibili/main/community/reply/v1/ReplyInfoReq; | Lcom/bapis/bilibili/main/community/reply/v1/ReplyInfoReply; | not-tested |
| /bilibili.main.community.reply.v1.Reply/SearchItem | Lcom/bapis/bilibili/main/community/reply/v1/SearchItemReq; | Lcom/bapis/bilibili/main/community/reply/v1/SearchItemReply; | not-tested |
| /bilibili.main.community.reply.v1.Reply/SearchItemPreHook | Lcom/bapis/bilibili/main/community/reply/v1/SearchItemPreHookReq; | Lcom/bapis/bilibili/main/community/reply/v1/SearchItemPreHookReply; | not-tested |
| /bilibili.main.community.reply.v1.Reply/ShareRepliesInfo | Lcom/bapis/bilibili/main/community/reply/v1/ShareRepliesInfoReq; | Lcom/bapis/bilibili/main/community/reply/v1/ShareRepliesInfoResp; | not-tested |
| /bilibili.main.community.reply.v1.Reply/ShareReplyMaterial | Lcom/bapis/bilibili/main/community/reply/v1/ShareReplyMaterialReq; | Lcom/bapis/bilibili/main/community/reply/v1/ShareReplyMaterialResp; | not-tested |
| /bilibili.main.community.reply.v1.Reply/SuggestEmotes | Lcom/bapis/bilibili/main/community/reply/v1/SuggestEmotesReq; | Lcom/bapis/bilibili/main/community/reply/v1/SuggestEmotesResp; | not-tested |
| /bilibili.main.community.reply.v1.Reply/TranslateReply | Lcom/bapis/bilibili/main/community/reply/v1/TranslateReplyReq; | Lcom/bapis/bilibili/main/community/reply/v1/TranslateReplyResp; | not-tested |
| /bilibili.main.community.reply.v1.Reply/UpdateSingleReplyNotificationConfig | Lcom/bapis/bilibili/main/community/reply/v1/UpdateSingleReplyNotificationConfigReq; | Lcom/bapis/bilibili/main/community/reply/v1/UpdateSingleReplyNotificationConfigResp; | not-tested |
| /bilibili.main.community.reply.v1.Reply/UserCallback | Lcom/bapis/bilibili/main/community/reply/v1/UserCallbackReq; | Lcom/bapis/bilibili/main/community/reply/v1/UserCallbackReply; | not-tested |
| /bilibili.main.community.reply.v2.Reply/SubjectDescription | Lcom/bapis/bilibili/main/community/reply/v2/SubjectDescriptionReq; | Lcom/bapis/bilibili/main/community/reply/v2/SubjectDescriptionReply; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category comment --limit 10
node bin/bili-apis.mjs show "ID"
```
