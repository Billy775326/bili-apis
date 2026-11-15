# 网页验证记录

[本轮 HTTP 结果](current.md)单独区分当前结果；下方包括历史用例，不能作为全部接口当前可用的计数。

## 执行范围

- 使用全新隔离的桌面 Chrome 配置读取 网页 首页、热门、搜索、普通视频、空间、动态和直播页面；没有使用既有浏览器登录资料。
- 独立 HTTP 客户端仅对列出的公开资源发送受限速的 GET；不自动重试，遇风控保留结果并停止同类队列。
- 正常网页可能自动请求配置、票据、埋点等辅助服务；这些观察不等于客户端支持主动执行对应 POST。读取 SDK 只提供审阅过的 GET 别名。
- 不提交 Cookie、WBI 动态密钥/签名、完整响应、原始网页脚本、评论正文或浏览器配置。游标只保留在本地原始样本中。

## 结果

| 客户端用例 | 公开输入 | HTTP / 业务码 | 结果 | 断言 |
| --- | --- | --- | --- | --- |
| home.popular | {"pn":"[REDACTED_INPUT]","ps":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:popular-list, 通过:end-marker |
| video.detail | {"bvid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:requested-bvid, 通过:positive-aid-cid, 通过:pages-array |
| video.pages | {"bvid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:page-list, 通过:page-identities |
| video.stats | {"bvid":"[REDACTED_INPUT]"} | 404 /  | request-failed |  |
| video.related | {"bvid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:related-array, 通过:related-card-shape |
| video.tags | {"bvid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:tag-array, 通过:tag-field-shape |
| user.relationStats | {"vmid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:requested-mid, 通过:relation-counters |
| user.info | {"mid":"[REDACTED_INPUT]"} | 200 / -352 | risk-or-rate-response |  |
| search.default | {} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:default-search-text |
| search.videos | {"keyword":"[REDACTED_INPUT]","page":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:search-results, 通过:requested-page |
| search.all | {"keyword":"[REDACTED_INPUT]","page":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:search-results, 通过:requested-page |
| video.detailBundle | {"aid":"[REDACTED_INPUT]"} | 200 / -352 | risk-or-rate-response |  |
| comment.main | {"oid":"[REDACTED_INPUT]"} | 200 / 0 | response-assertion-failed | 通过:numeric-business-code-zero, 通过:cursor-object, 通过:comment-list, 失败:ordinary-comments-or-explicit-empty, 通过:visible-comment-or-empty-thread |
| comment.replies | {} |  /  | skipped (dependent-public-resource-unavailable) |  |
| playback.info | {"aid":"[REDACTED_INPUT]","cid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:requested-aid-cid, 通过:subtitle-metadata |
| playback.url | {"bvid":"[REDACTED_INPUT]","cid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:quality-number, 通过:playback-resource-list |
| favorite.folders | {"up_mid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:collection-count, 通过:collection-list |
| dynamic.hot | {"page":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:dynamic-items, 通过:pagination-offset |
| user.uploads | {"mid":"[REDACTED_INPUT]","pn":"[REDACTED_INPUT]","ps":"[REDACTED_INPUT]","order":"[REDACTED_INPUT]"} |  /  | skipped (same-category-risk-response) |  |
| live.roomPlayInfo | {"room_id":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:requested-room, 通过:live-status |
| comment.replies | {"oid":"[REDACTED_INPUT]","root":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:reply-list, 通过:pagination, 通过:requested-root, 通过:requested-root-oid |
| comment.main | {"oid":"[REDACTED_INPUT]"} | 200 / 0 | response-assertion-failed | 通过:numeric-business-code-zero, 通过:cursor-object, 通过:comment-list, 失败:next-page-or-explicit-end, 失败:ordinary-comments-or-explicit-empty, 失败:visible-comment-or-empty-thread |
| video.online | {"aid":"[REDACTED_INPUT]","cid":"[REDACTED_INPUT]","bvid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:online-counter, 通过:display-switch |
| comment.main | {"oid":"[REDACTED_INPUT]","web_location":"[REDACTED_INPUT]"} | 200 / 0 | response-assertion-failed | 通过:numeric-business-code-zero, 通过:cursor-object, 通过:comment-list, 通过:visible-comment-or-empty-thread, 失败:ordinary-comment-rows-present, 失败:ordinary-comments-or-explicit-empty |
| home.popular | {"pn":"[REDACTED_INPUT]","ps":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:popular-list, 通过:end-marker |
| video.detail | {"bvid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:requested-bvid, 通过:positive-aid-cid, 通过:pages-array |
| video.pages | {"bvid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:page-list, 通过:page-identities |
| video.related | {"bvid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:related-array, 通过:related-card-shape |
| video.tags | {"bvid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:tag-array, 通过:tag-field-shape |
| user.relationStats | {"vmid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:requested-mid, 通过:relation-counters |
| search.default | {} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:default-search-text |
| search.suggest | {"term":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:suggestion-list, 通过:suggestion-entries |
| search.videos | {"keyword":"[REDACTED_INPUT]","page":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:search-results, 通过:requested-page |
| search.all | {"keyword":"[REDACTED_INPUT]","page":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:search-results, 通过:requested-page |
| comment.subject | {"oid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:subject-base |
| comment.main | {"oid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:ordinary-comments-or-explicit-empty, 通过:cursor-object, 通过:comment-list, 通过:visible-comment-or-empty-thread |
| comment.replies | {"oid":"[REDACTED_INPUT]","root":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:reply-list, 通过:pagination, 通过:requested-root, 通过:requested-root-oid |
| video.online | {"aid":"[REDACTED_INPUT]","cid":"[REDACTED_INPUT]","bvid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:online-counter, 通过:display-switch |
| playback.info | {"aid":"[REDACTED_INPUT]","cid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:requested-aid-cid, 通过:subtitle-metadata |
| playback.url | {"bvid":"[REDACTED_INPUT]","cid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:quality-number, 通过:playback-resource-list |
| playback.broadcastServers | {} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:broadcast-domain, 通过:broadcast-nodes |
| favorite.folders | {"up_mid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:collection-count, 通过:collection-list |
| dynamic.hot | {"page":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:dynamic-items, 通过:pagination-offset |
| dynamic.banner | {} | 200 / 0 | response-assertion-failed | 通过:numeric-business-code-zero, 失败:banner-list |
| user.collections | {"mid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:collection-lists |
| user.counters | {"mid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:public-content-counters |
| user.notice | {"mid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:notice-text |
| user.masterpieces | {"vmid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:masterpiece-array, 通过:masterpiece-identities |
| user.followedBangumi | {"vmid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:follow-list, 通过:follow-total |
| user.games | {"mid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:game-list, 通过:game-total |
| user.articles | {"mid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:article-list, 通过:article-count |
| user.settings | {"mid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:privacy-settings, 通过:index-order |
| live.roomPlayInfo | {"room_id":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:requested-room, 通过:live-status |
| live.roomBaseInfo | {"room_ids":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:requested-room-key |
| live.recommendations | {} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:room-recommendations |
| live.roomInfo | {"room_id":"[REDACTED_INPUT]"} | 200 / -352 | risk-or-rate-response |  |
| note.publicList | {"oid":"[REDACTED_INPUT]"} | 200 / 0 | response-assertion-failed | 通过:numeric-business-code-zero, 通过:public-note-list, 失败:note-page, 通过:public-note-display |
| note.availability | {"aid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:note-entrance-flag |
| home.ogv | {} | 200 / -400 | request-failed |  |
| home.recommendations | {} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:recommended-items, 通过:recommended-video-identities |
| video.detailBundle | {"aid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:requested-aid, 通过:related-array |
| user.uploads | {"mid":"[REDACTED_INPUT]","pn":"[REDACTED_INPUT]","ps":"[REDACTED_INPUT]","order":"[REDACTED_INPUT]"} | 412 / -412 | risk-or-rate-response |  |
| user.info | {"mid":"[REDACTED_INPUT]"} |  /  | skipped (same-category-risk-response) |  |
| comment.main | {"oid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:ordinary-comments-or-explicit-empty, 通过:cursor-object, 通过:comment-list, 通过:visible-comment-or-empty-thread, 通过:next-page-new-ordinary-comments-or-explicit-end |
| home.ogv | {} | 200 / -400 | request-failed |  |

用例结果计数：{"anonymous-read-case-passed":50,"request-failed":3,"risk-or-rate-response":4,"response-assertion-failed":5,"skipped":3}。这是用例数，不是去重接口数量；相同评论地址的首屏与下一页分别记录。

## 已知限制

- 历史视频样本只有置顶评论且分页失败；本轮另一公开视频的普通评论、楼中楼与下一页通过。通过条件现在包含普通评论或明确空列表结束标记，不能保证所有视频。
- 用户资料和详情聚合历史存在浏览器成功而独立 HTTP 返回 -352 的差异；本轮详情聚合通过，投稿列表返回 HTTP 412，后续用户资料被同类风控停止。直播间综合信息返回 -352。
- `/x/web-interface/archive/stat` 的本次独立请求返回 404。读取客户端不暴露该路径；视频统计可使用已通过的 `video.detail` 响应 `data.stat`。
- 播放接口只检查返回的质量字段与资源列表，没有验证媒体下载、字幕内容或付费/地区权益。
- 下表是早期匿名验证；后续登录态、临时收藏、历史、发布及互动验证见 [全量矩阵](full-validation.md)。私信发送、支付等仍未验证。
- 历史和本轮浏览器均有 CDP 超时记录；本轮保留五个页面观察后终止，完成和部分记录分别标注。

## 来源与覆盖

| 浏览器运行 | 页面 | 完整性 |
| --- | ---: | --- |
| Chrome/141.0.7390.108 / desktop:431c5f4cbae21ea6 | 8 | 完成计划 |
| Chrome/141.0.7390.108 / desktop:60ecac9e2a7ed5bc | 1 | 完成计划 |
| Chrome/141.0.7390.108 / desktop:48e8fdd776493e5e | 5 | 部分记录 |

前端脚本扫描：115 份资源，115 份完成解析，0 份超出预算，0 份解析失败。模板拼接、运行时路由和未访问页面仍可能遗漏。

时间戳来自采集机时钟，以 ISO 8601 UTC（Z）记录，不作为服务器时间。完整字段断言、解码后的响应正文哈希和页面上下文见 [目录 JSON](../../catalog/pc-web.json)；原始正文只在本地忽略目录中，公开汇总不提供独立复核全部原始流量的条件。
