# 历史记录

观看、搜索及其他历史记录。分类根据路由、域名与声明类名称推断，未验证业务行为。

官方 Android 9.19.0：12 条 HTTP 声明、9 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。

[返回分类](README.md) · [与 Play 对比](comparison.md)

## HTTP

参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。

| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |
| --- | --- | --- | --- | --- |
| classes11.dex:59352:POST | POST | https://api.bilibili.com/x/v2/history/report | Query:type, Field:access_key, FieldMap:(内容未知), Field:cid, Field:aid, Field:duration, Field:progress, Field:device_ts, Field:start_ts, Field:scene | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; |
| classes11.dex:60653:POST | POST | https://api.bilibili.com/x/v2/history/report | Query:type, Field:access_key, FieldMap:(内容未知), Field:cid, Field:aid, Field:duration, Field:progress, Field:device_ts, Field:start_ts, Field:scene | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; |
| classes15.dex:47540:POST | POST | https://api.bilibili.com/x/v2/history/report_list | Field:access_key, Field:cid, Field:aid, Field:parent_type, Field:parent_id, Field:source | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; |
| classes15.dex:47541:POST | POST | https://api.bilibili.com/x/v2/history/report | Field:access_key, FieldMap:(内容未知), Field:cid, Field:aid, Field:source, Field:duration, Field:progress, Field:type, Field:device_ts, Field:start_ts, Field:scene | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; |
| classes15.dex:47542:POST | POST | https://api.bilibili.com/x/v2/history/report_scene | Field:access_key, FieldMap:(内容未知), Field:cid, Field:aid, Field:source, Field:duration, Field:progress, Field:type, Field:device_ts, Field:start_ts, Field:scene, Field:report_scene | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; |
| classes28.dex:22286:POST | POST | https://api.bilibili.com/x/v2/history/report | Field:access_key, Field:cid, Field:aid, Field:sid, Field:epid, Field:source, Field:duration, Field:progress, Field:type, Field:sub_type, Field:realtime, Field:device_ts, Field:start_ts | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; |
| classes28.dex:46798:GET | GET | https://api.bilibili.com/x/v2/history/toview | Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/videopage/common/watchlater/api/WatchLaterList;&gt;;&gt;; |
| classes35.dex:539:POST | POST | https://api.bilibili.com/x/v2/history/report | Field:cid, Field:aid, Field:sid, Field:epid, Field:source, Field:duration, Field:progress, Field:type, Field:sub_type, Field:realtime, Field:device_ts, Field:start_ts | Lm6x; |
| classes5.dex:34967:GET | GET | https://api.bilibili.com/x/v2/history/shadow |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Boolean;&gt;;&gt;; |
| classes5.dex:34968:POST | POST | https://api.bilibili.com/x/v2/history/shadow/set | Field:switch | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:45346:POST | POST | https://api.bilibili.com/x/v2/history/report | Field:cid, Field:aid, Field:sid, Field:epid, Field:progress, Field:type, Field:sub_type, Field:realtime, Field:device_ts, Field:start_ts, Field:duration, Field:source | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; |
| classes9.dex:50811:POST | POST | https://api.bilibili.com/x/v2/history/report | FieldMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; |

## gRPC

请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。

| 路由 | 请求类型候选 | 响应类型候选 |
| --- | --- | --- |
| /bilibili.app.interface.v1.History/Clear | Lcom/bapis/bilibili/app/interfaces/v1/ClearReq; | Lcom/bapis/bilibili/app/interfaces/v1/NoReply; |
| /bilibili.app.interface.v1.History/Cursor | Lcom/bapis/bilibili/app/interfaces/v1/CursorReq; | Lcom/bapis/bilibili/app/interfaces/v1/CursorReply; |
| /bilibili.app.interface.v1.History/CursorV2 | Lcom/bapis/bilibili/app/interfaces/v1/CursorV2Req; | Lcom/bapis/bilibili/app/interfaces/v1/CursorV2Reply; |
| /bilibili.app.interface.v1.History/Delete | Lcom/bapis/bilibili/app/interfaces/v1/DeleteReq; | Lcom/bapis/bilibili/app/interfaces/v1/NoReply; |
| /bilibili.app.interface.v1.History/HistoryItems | Lcom/bapis/bilibili/app/interfaces/v1/HistoryItemsReq; | Lcom/bapis/bilibili/app/interfaces/v1/HistoryItemsReply; |
| /bilibili.app.interface.v1.History/HistoryTab | Lcom/bapis/bilibili/app/interfaces/v1/HistoryTabReq; | Lcom/bapis/bilibili/app/interfaces/v1/HistoryTabReply; |
| /bilibili.app.interface.v1.History/HistoryTabV2 | Lcom/bapis/bilibili/app/interfaces/v1/HistoryTabReq; | Lcom/bapis/bilibili/app/interfaces/v1/HistoryTabReply; |
| /bilibili.app.interface.v1.History/LatestHistory | Lcom/bapis/bilibili/app/interfaces/v1/LatestHistoryReq; | Lcom/bapis/bilibili/app/interfaces/v1/LatestHistoryReply; |
| /bilibili.app.interface.v1.History/Search | Lcom/bapis/bilibili/app/interfaces/v1/SearchReq; | Lcom/bapis/bilibili/app/interfaces/v1/SearchReply; |

```sh
node bin/bili-apis.mjs --edition official list --category history --limit 10
node bin/bili-apis.mjs --edition official show "ID"
```
