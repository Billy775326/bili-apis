# 埋点与诊断

上报、探测和质量诊断。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 3 条 HTTP 声明、10 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes13.dex:13600:POST | POST | https://data.bilivideo.com/log/mobile/android/df6sh | Field:room_id, Field:play_url, Field:auty, Field:tils, Field:udse, Field:daqs, Field:p2p, Field:caton, Field:appkey, Field:build | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bililive/playerheartbeat/bean/PlayerHeartBeatInfo;&gt;;&gt;; | not-tested |
| classes13.dex:13601:POST | POST | https://data.bilivideo.com/log/mobile/android/df6sh | Field:room_id, Field:play_url, Field:auty, Field:tils, Field:reye, Field:urcs, Field:nsti, Field:edno, Field:udse, Field:daqs, Field:p2p, Field:caton, Field:appkey, Field:build | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bililive/playerheartbeat/bean/PlayerHeartBeatInfo;&gt;;&gt;; | not-tested |
| classes18.dex:6817:GET | GET | https://api.bilibili.com/open/monitor/err/collect | Query:product, Query:event, Query:code, Query:ext_json, Query:sub_event | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/okretro/BaseResponse;&gt;;&gt;; | not-tested |

## gRPC

请求/响应角色默认仍为静态候选；View/View 已有单独实现核对。表格不代表已建立连接或验证认证。

| 路由 | 请求类型候选 | 响应类型候选 | 线上抽查 |
| --- | --- | --- | --- |
| /bilibili.api.probe.v1.Probe/TestCode | Lcom/bapis/bilibili/api/probe/v1/CodeReq; | Lcom/bapis/bilibili/api/probe/v1/CodeReply; | not-tested |
| /bilibili.api.probe.v1.Probe/TestReq | Lcom/bapis/bilibili/api/probe/v1/ProbeReq; | Lcom/bapis/bilibili/api/probe/v1/ProbeReply; | not-tested |
| /bilibili.api.probe.v1.Probe/TestStream | Lcom/bapis/bilibili/api/probe/v1/ProbeStreamReq; | Lcom/bapis/bilibili/api/probe/v1/ProbeStreamReply; | not-tested |
| /bilibili.api.probe.v1.Probe/TestSub | Lcom/bapis/bilibili/api/probe/v1/ProbeSubReq; | Lcom/bapis/bilibili/api/probe/v1/ProbeSubReply; | not-tested |
| /bilibili.api.probe.v1.ProbeService/Echo | Lcom/bapis/bilibili/api/probe/v1/SimpleMessage; | Lcom/bapis/bilibili/api/probe/v1/SimpleMessage; | not-tested |
| /bilibili.api.probe.v1.ProbeService/EchoBody | Lcom/bapis/bilibili/api/probe/v1/SimpleMessage; | Lcom/bapis/bilibili/api/probe/v1/SimpleMessage; | not-tested |
| /bilibili.api.probe.v1.ProbeService/EchoDelete | Lcom/bapis/bilibili/api/probe/v1/SimpleMessage; | Lcom/bapis/bilibili/api/probe/v1/SimpleMessage; | not-tested |
| /bilibili.api.probe.v1.ProbeService/EchoError | Lcom/bapis/bilibili/api/probe/v1/ErrorMessage; | Lcom/bapis/bilibili/api/probe/v1/ErrorMessage; | not-tested |
| /bilibili.api.probe.v1.ProbeService/EchoPatch | Lcom/bapis/bilibili/api/probe/v1/DynamicMessageUpdate; | Lcom/bapis/bilibili/api/probe/v1/DynamicMessageUpdate; | not-tested |
| /bilibili.app.click.v1.Click/HeartBeat | Lcom/bapis/bilibili/app/click/v1/HeartBeatReq; | Lcom/bapis/bilibili/app/click/v1/HeartBeatReply; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category telemetry --limit 10
node bin/bili-apis.mjs show "ID"
```
