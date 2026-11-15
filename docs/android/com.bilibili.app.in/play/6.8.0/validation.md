# 验证状态与线上抽查

<!-- android-edition:start -->
包名：`com.bilibili.app.in` · 渠道：Google Play · 版本：6.8.0（9180200）。

[全部版本](../../../README.md) · [本包文档](README.md) · [网页接口](../../../../pc/README.md) · [基线元数据](../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

## 已完成与未覆盖

- 静态核对：原 APK/DEX 哈希、Retrofit 注解、gRPC 描述符和 Protobuf 字段编号交叉检查；部分方法另有派生 APK 的 REA 实现核对。
- 离线测试与 CI：验证提取器边界、目录引用和查询行为。测试通过不等于接口可以调用。
- 线上抽查：只对下表的原目录 GET 声明发送匿名 HTTPS 请求，不带 Cookie、access_key、appkey、签名或设备标识；不自动重试、不跟随重定向。
- 未测试：全部其他声明、gRPC 认证及通信、完整 Android 参数/签名链、账号接口、写操作、分页完整性及 Play App 的真实流量。

抽查使用通用研究客户端，未模拟 Play App 的全部请求上下文；成功也只证明本次参数下的匿名 HTTPS 行为。不能把它推广到所有接口或完整 App 兼容。

## 结果判定

| 状态 | 含义 |
| --- | --- |
| not-tested | 未发送线上请求 |
| business-success | HTTP 成功、JSON 业务码为 0，且指定数据结构检查通过 |
| business-error | 有数字业务码且非 0；HTTP 200 仍可能是认证、参数或风控错误 |
| http-error | HTTP 非 2xx |
| unexpected-response | JSON、业务码或数据结构不符合本次检查预期 |
| transport-error | DNS、连接、TLS、超时或大小限制等阻止获取响应 |

## 本次匿名样本

[脱敏证据 JSON](../../../../../evidence/live-checks.json) · [复测计划](../../../../../scripts/check-live.mjs)

原始响应正文、Cookie、会话头和个人内容不写入仓库。记录只保留时间、声明 ID、脱敏参数名、状态码、数据类型/键名及响应正文哈希。

| 观测 ID | 声明 ID | UTC 时间 | HTTP | 业务码 | 结果 |
| --- | --- | --- | ---: | ---: | --- |
| region-index:2026-11-14T13:36:22.812Z | classes30.dex:32464:GET | 2026-11-14T13:36:22.812Z | 200 | -400 | business-error |
| emote-search:2026-11-14T13:36:23.199Z | classes11.dex:63095:GET | 2026-11-14T13:36:23.199Z | 200 | -101 | business-error |
| search-channel:2026-11-14T13:36:23.466Z | classes18.dex:28874:GET | 2026-11-14T13:36:23.466Z | 200 | -400 | business-error |
| public-space:2026-11-14T13:36:23.718Z | classes11.dex:32804:GET | 2026-11-14T13:36:23.718Z | 200 | -400 | business-error |
| live-room-brief:2026-11-14T13:36:23.899Z | classes.dex:53424:GET | 2026-11-14T13:36:23.899Z | 200 | 0 | business-success |
| history-anonymous:2026-11-14T13:36:24.843Z | classes15.dex:18407:GET | 2026-11-14T13:36:24.843Z | 200 | -101 | business-error |

观测总数 6，结果计数：{"business-error":5,"business-success":1}。失败保留原状，不通过补造参数、重试或降低断言改写为成功。

## 手动复测

复测会发送上述六个只读 GET 请求，覆盖上次证据文件；生成文档不会联网，CI 不运行线上请求。先用 git 保存希望保留的历史观测，再执行：

```sh
node scripts/check-live.mjs --run
npm run android:play:docs
```
