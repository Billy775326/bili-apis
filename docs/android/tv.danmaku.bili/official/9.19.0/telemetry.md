# 埋点与诊断

<!-- android-edition:start -->
包名：`tv.danmaku.bili` · 渠道：Official Android 64-bit · 版本：9.19.0（9190400）。

[全部版本](../../../README.md) · [本包文档](README.md) · [网页接口](../../../../pc/README.md) · [基线元数据](../../../../../catalog/android/tv.danmaku.bili/official/9.19.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

上报、探测和质量诊断。分类根据路由、域名与声明类名称推断，未验证业务行为。

官方 Android 9.19.0：4 条 HTTP 声明、10 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。

[返回分类](README.md) · [与 Play 对比](comparison.md)

## HTTP

参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。

| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |
| --- | --- | --- | --- | --- |
| classes14.dex:5449:GET | GET | https://api.bilibili.com/open/monitor/err/collect | Query:product, Query:event, Query:code, Query:ext_json, Query:sub_event | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/okretro/BaseResponse;&gt;;&gt;; |
| classes7.dex:57977:POST | POST | http://livetest.bilibili.co/dataflow/log | FieldMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; |
| classes7.dex:62043:POST | POST | https://data.bilivideo.com/log/mobile/android/df6sh | Field:room_id, Field:play_url, Field:auty, Field:tils, Field:udse, Field:daqs, Field:p2p, Field:caton, Field:appkey, Field:build | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bililive/playerheartbeat/bean/PlayerHeartBeatInfo;&gt;;&gt;; |
| classes7.dex:62044:POST | POST | https://data.bilivideo.com/log/mobile/android/df6sh | Field:room_id, Field:play_url, Field:auty, Field:tils, Field:reye, Field:urcs, Field:nsti, Field:edno, Field:udse, Field:daqs, Field:p2p, Field:caton, Field:appkey, Field:build | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bililive/playerheartbeat/bean/PlayerHeartBeatInfo;&gt;;&gt;; |

## gRPC

请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。

| 路由 | 请求类型候选 | 响应类型候选 |
| --- | --- | --- |
| /bilibili.api.probe.v1.Probe/TestCode | Lcom/bapis/bilibili/api/probe/v1/CodeReq; | Lcom/bapis/bilibili/api/probe/v1/CodeReply; |
| /bilibili.api.probe.v1.Probe/TestReq | Lcom/bapis/bilibili/api/probe/v1/ProbeReq; | Lcom/bapis/bilibili/api/probe/v1/ProbeReply; |
| /bilibili.api.probe.v1.Probe/TestStream | Lcom/bapis/bilibili/api/probe/v1/ProbeStreamReq; | Lcom/bapis/bilibili/api/probe/v1/ProbeStreamReply; |
| /bilibili.api.probe.v1.Probe/TestSub | Lcom/bapis/bilibili/api/probe/v1/ProbeSubReq; | Lcom/bapis/bilibili/api/probe/v1/ProbeSubReply; |
| /bilibili.api.probe.v1.ProbeService/Echo | Lcom/bapis/bilibili/api/probe/v1/SimpleMessage; | Lcom/bapis/bilibili/api/probe/v1/SimpleMessage; |
| /bilibili.api.probe.v1.ProbeService/EchoBody | Lcom/bapis/bilibili/api/probe/v1/SimpleMessage; | Lcom/bapis/bilibili/api/probe/v1/SimpleMessage; |
| /bilibili.api.probe.v1.ProbeService/EchoDelete | Lcom/bapis/bilibili/api/probe/v1/SimpleMessage; | Lcom/bapis/bilibili/api/probe/v1/SimpleMessage; |
| /bilibili.api.probe.v1.ProbeService/EchoError | Lcom/bapis/bilibili/api/probe/v1/ErrorMessage; | Lcom/bapis/bilibili/api/probe/v1/ErrorMessage; |
| /bilibili.api.probe.v1.ProbeService/EchoPatch | Lcom/bapis/bilibili/api/probe/v1/DynamicMessageUpdate; | Lcom/bapis/bilibili/api/probe/v1/DynamicMessageUpdate; |
| /bilibili.app.click.v1.Click/HeartBeat | Lcom/bapis/bilibili/app/click/v1/HeartBeatReq; | Lcom/bapis/bilibili/app/click/v1/HeartBeatReply; |

```sh
node bin/bili-apis.mjs --edition official list --category telemetry --limit 10
node bin/bili-apis.mjs --edition official show "ID"
```
