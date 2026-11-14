# 历史记录

观看、搜索及其他历史记录。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 12 条 HTTP 声明、9 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes11.dex:9543:POST | POST | https://api.bilibili.com/x/v2/history/report | Field:cid, Field:aid, Field:sid, Field:epid, Field:progress, Field:type, Field:sub_type, Field:realtime, Field:device_ts, Field:start_ts, Field:duration, Field:source | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; | not-tested |
| classes14.dex:19312:POST | POST | https://api.bilibili.com/x/v2/history/report | FieldMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; | not-tested |
| classes15.dex:18407:GET | GET | https://api.bilibili.com/x/v2/history/shadow |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Boolean;&gt;;&gt;; | business-error |
| classes15.dex:18408:POST | POST | https://api.bilibili.com/x/v2/history/shadow/set | Field:switch | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes15.dex:24083:POST | POST | https://api.bilibili.com/x/v2/history/report | Field:cid, Field:aid, Field:sid, Field:epid, Field:source, Field:duration, Field:progress, Field:type, Field:sub_type, Field:realtime, Field:device_ts, Field:start_ts | Lqm1/a; | not-tested |
| classes16.dex:40244:POST | POST | https://api.bilibili.com/x/v2/history/report | Query:type, Field:access_key, FieldMap:(内容未知), Field:cid, Field:aid, Field:duration, Field:progress, Field:device_ts, Field:start_ts, Field:scene | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; | not-tested |
| classes16.dex:42522:POST | POST | https://api.bilibili.com/x/v2/history/report | Query:type, Field:access_key, FieldMap:(内容未知), Field:cid, Field:aid, Field:duration, Field:progress, Field:device_ts, Field:start_ts, Field:scene | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; | not-tested |
| classes18.dex:45766:POST | POST | https://api.bilibili.com/x/v2/history/report_scene | Field:access_key, FieldMap:(内容未知), Field:cid, Field:aid, Field:source, Field:duration, Field:progress, Field:type, Field:device_ts, Field:start_ts, Field:scene, Field:report_scene | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; | not-tested |
| classes18.dex:45767:POST | POST | https://api.bilibili.com/x/v2/history/report | Field:access_key, FieldMap:(内容未知), Field:cid, Field:aid, Field:source, Field:duration, Field:progress, Field:type, Field:device_ts, Field:start_ts, Field:scene | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; | not-tested |
| classes18.dex:45768:POST | POST | https://api.bilibili.com/x/v2/history/report_list | Field:access_key, Field:cid, Field:aid, Field:parent_type, Field:parent_id, Field:source | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; | not-tested |
| classes30.dex:56598:POST | POST | https://api.bilibili.com/x/v2/history/report | Field:access_key, Field:cid, Field:aid, Field:sid, Field:epid, Field:source, Field:duration, Field:progress, Field:type, Field:sub_type, Field:realtime, Field:device_ts, Field:start_ts | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; | not-tested |
| classes30.dex:57648:GET | GET | https://api.bilibili.com/x/v2/history/toview | Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/videopage/common/watchlater/api/WatchLaterList;&gt;;&gt;; | not-tested |

## gRPC

请求/响应角色默认仍为静态候选；View/View 已有单独实现核对。表格不代表已建立连接或验证认证。

| 路由 | 请求类型候选 | 响应类型候选 | 线上抽查 |
| --- | --- | --- | --- |
| /bilibili.app.interface.v1.History/Clear | Lcom/bapis/bilibili/app/interfaces/v1/ClearReq; | Lcom/bapis/bilibili/app/interfaces/v1/NoReply; | not-tested |
| /bilibili.app.interface.v1.History/Cursor | Lcom/bapis/bilibili/app/interfaces/v1/CursorReq; | Lcom/bapis/bilibili/app/interfaces/v1/CursorReply; | not-tested |
| /bilibili.app.interface.v1.History/CursorV2 | Lcom/bapis/bilibili/app/interfaces/v1/CursorV2Req; | Lcom/bapis/bilibili/app/interfaces/v1/CursorV2Reply; | not-tested |
| /bilibili.app.interface.v1.History/Delete | Lcom/bapis/bilibili/app/interfaces/v1/DeleteReq; | Lcom/bapis/bilibili/app/interfaces/v1/NoReply; | not-tested |
| /bilibili.app.interface.v1.History/HistoryItems | Lcom/bapis/bilibili/app/interfaces/v1/HistoryItemsReq; | Lcom/bapis/bilibili/app/interfaces/v1/HistoryItemsReply; | not-tested |
| /bilibili.app.interface.v1.History/HistoryTab | Lcom/bapis/bilibili/app/interfaces/v1/HistoryTabReq; | Lcom/bapis/bilibili/app/interfaces/v1/HistoryTabReply; | not-tested |
| /bilibili.app.interface.v1.History/HistoryTabV2 | Lcom/bapis/bilibili/app/interfaces/v1/HistoryTabReq; | Lcom/bapis/bilibili/app/interfaces/v1/HistoryTabReply; | not-tested |
| /bilibili.app.interface.v1.History/LatestHistory | Lcom/bapis/bilibili/app/interfaces/v1/LatestHistoryReq; | Lcom/bapis/bilibili/app/interfaces/v1/LatestHistoryReply; | not-tested |
| /bilibili.app.interface.v1.History/Search | Lcom/bapis/bilibili/app/interfaces/v1/SearchReq; | Lcom/bapis/bilibili/app/interfaces/v1/SearchReply; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category history --limit 10
node bin/bili-apis.mjs show "ID"
```
