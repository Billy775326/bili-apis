# 第二轮接口深挖

<!-- android-edition:start -->
包名：`com.bilibili.app.in` · 渠道：Google Play · 版本：6.8.0（9180200）。

[全部版本](../../../README.md) · [本包文档](README.md) · [网页接口](../../../../pc/README.md) · [基线元数据](../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

本轮继续分析同一份 Play 版 6.8.0 安装包。原有 2,325 条 HTTP 声明和 604 个 gRPC 路由保留；新增内容按调用点、语法观察、广播路径与 native 线索分组，不能相加为新增接口数量。

- DEX：扫描 1647254 个代码方法；18 个动态 URL 声明找到 20 个直接调用位置，7 处恢复常量 URL，另 13 处保留未知。
- 寄存器关联：1392 条观察、765 个去重值，671 个值未匹配既有目录；其中也包含日志、页面、protobuf 类型名和 URI 构造，不能冒充可调用接口。
- H5/嵌套资源：290 条语法观察，72 条静态路径，45 组去重方法/路径；218 条路径仍为计算值，展开 9 个内嵌 ZIP。
- gRPC：全部 1190 个描述符定义和所有已知路由引用已分类；新增广播消息分发路径候选与关联消息详见审计 JSON，未增加已确认 RPC 数量。
- native：检查 113 个 arm64 库，记录 4977 个 native 方法声明（含随包 SDK）、1062 个 JNI 表布局候选、14 条平台 URL 字符串。

## 已恢复的动态 URL 调用位置

| 方法 | URL | DEX / 方法索引 / 指令位置 | 既有目录关系 |
| --- | --- | --- | --- |
| POST | https://api.bilibili.com/x/activity/reserve | classes12.dex / 64080 / 21 | absolute-url |
| POST | https://core.bilivideo.com/live-delay/measure/time | classes13.dex / 56336 / 13 | none |
| POST | https://core.bilivideo.com/live-delay/measure/time | classes22.dex / 65400 / 68 | none |
| POST | https://core.bilivideo.com/live-delay/measure/time | classes33.dex / 377 / 22 | none |
| GET | http://api.bilibili.com/x/member/web/content/check | classes33.dex / 3320 / 85 | path-only |
| POST | https://core.bilivideo.com/live-delay/measure/time | classes33.dex / 25591 / 22 | none |
| GET | http://api.bilibili.com/x/member/web/content/check | classes33.dex / 32499 / 79 | path-only |

这些是原方法调用中的静态参数关系，不表示请求已执行，也不表示相同 URL 是新发现的服务端接口。

## 可复核材料

[DEX 调用与路径](../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/dex-routes.json) · [资源请求](../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/resource-routes.json) · [gRPC 审计](../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/grpc-audit.json) · [广播路径](../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/grpc-additional.json) · [native/JNI](../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/native.json) · [汇总及来源哈希](../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/discovery-summary.json)。

## 尚未覆盖

13 处动态 URL 调用和计算型 JavaScript 地址仍需结合调用方、服务器配置或受控运行时观察。Opaque Lynx bundle 尚未解码；严格 JSON 解析失败的资源保留错误原因。JNI 表布局只说明静态指针结构，不证明 RegisterNatives 被调用或对应 Java 类已绑定。native 签名实现、反射/下载代码和服务端新增接口仍不能据此穷尽。
