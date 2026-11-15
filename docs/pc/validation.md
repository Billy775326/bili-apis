# PC 网页验证记录

## 执行范围

- 使用全新隔离的桌面 Chrome 配置读取 PC 首页、热门、搜索、普通视频、空间、动态和直播页面；没有使用既有浏览器登录资料。
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
| comment.main | {"oid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:cursor-object, 通过:comment-list, 通过:visible-comment-or-empty-thread |
| comment.replies | {} |  /  | skipped (dependent-public-resource-unavailable) |  |
| playback.info | {"aid":"[REDACTED_INPUT]","cid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:requested-aid-cid, 通过:subtitle-metadata |
| playback.url | {"bvid":"[REDACTED_INPUT]","cid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:quality-number, 通过:playback-resource-list |
| favorite.folders | {"up_mid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:collection-count, 通过:collection-list |
| dynamic.hot | {"page":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:dynamic-items, 通过:pagination-offset |
| user.uploads | {"mid":"[REDACTED_INPUT]","pn":"[REDACTED_INPUT]","ps":"[REDACTED_INPUT]","order":"[REDACTED_INPUT]"} |  /  | skipped (same-category-risk-response) |  |
| live.roomPlayInfo | {"room_id":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:requested-room, 通过:live-status |
| comment.replies | {"oid":"[REDACTED_INPUT]","root":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:reply-list, 通过:pagination |
| comment.main | {"oid":"[REDACTED_INPUT]"} | 200 / 0 | response-assertion-failed | 通过:numeric-business-code-zero, 通过:cursor-object, 通过:comment-list, 失败:next-page-or-explicit-end, 失败:visible-comment-or-empty-thread |
| video.online | {"aid":"[REDACTED_INPUT]","cid":"[REDACTED_INPUT]","bvid":"[REDACTED_INPUT]"} | 200 / 0 | anonymous-read-case-passed | 通过:numeric-business-code-zero, 通过:online-counter, 通过:display-switch |
| comment.main | {"oid":"[REDACTED_INPUT]","web_location":"[REDACTED_INPUT]"} | 200 / 0 | response-assertion-failed | 通过:numeric-business-code-zero, 通过:cursor-object, 通过:comment-list, 通过:visible-comment-or-empty-thread, 失败:ordinary-comment-rows-present |

用例结果计数：{"anonymous-read-case-passed":17,"request-failed":1,"risk-or-rate-response":2,"skipped":2,"response-assertion-failed":2}。这是用例数，不是去重接口数量；相同评论地址的首屏与下一页分别记录。

## 已知限制

- 评论主列表的独立 HTTP 样本能读取置顶评论，但普通评论为空，下一页也没有评论或明确结束标记；对照官方组件的 web_location 参数后仍未通过普通评论条数断言。另一个浏览器活动视频样本能读取普通评论，内容与客户端环境差异尚未定位，不能承诺匿名抓取全部评论。
- 用户资料和详情聚合存在浏览器成功、独立 HTTP 返回 -352 的环境差异；原因尚未定位。用户投稿列表出现 HTTP 412/被同类风控停止，不能称为已通过。
- `/x/web-interface/archive/stat` 的本次独立请求返回 404。读取客户端不暴露该路径；视频统计可使用已通过的 `video.detail` 响应 `data.stat`。
- 播放接口只检查返回的质量字段与资源列表，没有验证媒体下载、字幕内容或付费/地区权益。
- 登录、个人收藏与历史、私信、发布、关注、点赞、删除、支付等操作没有验证。
- 一次补充普通视频页观察曾发生 CDP 页面检查超时；未将那次失败算为通过。观测器现保留检查点及诊断；后续普通视频页观察的结果独立记录。

## 来源与覆盖

| 浏览器运行 | 页面 | 完整性 |
| --- | ---: | --- |
| Chrome/141.0.7390.108 / desktop:431c5f4cbae21ea6 | 8 | 完成计划 |
| Chrome/141.0.7390.108 / desktop:60ecac9e2a7ed5bc | 1 | 完成计划 |

前端脚本扫描：109 份资源，109 份完成解析，0 份超出预算，0 份解析失败。模板拼接、运行时路由和未访问页面仍可能遗漏。

时间戳来自采集机时钟，以 ISO 8601 UTC（Z）记录，不作为服务器时间。完整字段断言、解码后的响应正文哈希和页面上下文见 [目录 JSON](../../catalog/pc-web.json)；原始正文只在本地忽略目录中，公开汇总不提供独立复核全部原始流量的条件。
