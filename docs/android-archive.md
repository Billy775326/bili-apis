# Bilibili Play 版接口目录

从 `com.bilibili.app.in` 6.8.0（9180200）的完整基础 APK 和两个配置分包提取 HTTP/gRPC 接口声明、参数元数据与资源线索，供接口研究、定位请求代码及后续客户端实现使用。

这是该安装包的静态接口目录，不是经过线上验证的完整 SDK，也无法保证包含服务端全部接口。

## 按功能查找与验证

[功能分类导航](functions/README.md)覆盖全部 2,929 条 HTTP 声明和 gRPC 路由，按直播、视频、搜索、评论、用户、动态、私信、登录、创作等分类，保留参数、返回类型、原始 ID 和逐项验证状态。分类按名称推断，可在 JSON 中查看命中依据。

[线上抽查记录](validation.md)：本次六个匿名 GET 请求中，一个返回业务码 0 并通过最小数据结构检查，三个返回 -400，两个返回 -101；全部 HTTP 200。其余接口没有线上验证。离线测试和 CI 通过不能代表接口可调用。

功能导航参考 [cv-cat/DouYin_Spider](https://github.com/cv-cat/DouYin_Spider) 的模块组织；当前交付仍为 APK 证据目录，认证、签名和可调用封装尚待实现。

## 已提取内容

| 内容                 |  数量 | 入口                                                                        |
| -------------------- | ----: | --------------------------------------------------------------------------- |
| HTTP 方法声明        | 2,325 | [可读目录](http.md) · [完整参数 JSON](../catalog/http.json)               |
| gRPC 方法路由        |   604 | [可读目录](grpc.md) · [来源与类型候选](../catalog/grpc.json)              |
| HTTP 可达模型        | 4,792 | [26,677 个字段元数据](../catalog/http-models.json)                             |
| Protobuf 消息        | 4,216 | [类型索引](messages.md) · [20,621 个字段元数据](../catalog/messages.json) |
| 资源/native URL 候选 |   409 | [候选与成员位置](../catalog/artifacts.json)                                    |

HTTP 按动词/路径去重为 2,038 组，未按域名区分。目录保留所有声明，避免把同路径的不同参数和返回类型合并丢失。18 条 `@Url` 动态声明保留动态状态。

[覆盖范围](coverage.md) · [实现核对](implementation.md) · [数据格式](catalog-format.md) · [来源哈希](../evidence/inputs.json) · [更新日志](../CHANGELOG.md)

## 第二轮深挖

[深挖结果及已恢复调用位置](discovery.md) · [资源请求观察](resource-routes.md) · [Native/JNI 边界](native.md)

- 18 个动态 URL 声明找到 20 个直接调用位置，7 处恢复常量 URL；另 13 处仍未知。
- DEX 寄存器关联观察 1,392 条，去重为 765 个值，其中 671 个值未匹配原目录；另核对了 19 处 URL 设置器调用（17 个去重值）。这些值包含日志、页面和 URI 构造，不能作为新增接口数量。
- H5 及 9 个嵌套 ZIP 中找到 290 条请求语法观察，72 条为静态路径，218 条路径仍为计算值。
- gRPC 全量审计解释了 1,190 个描述符定义；增加 4 个广播分发路径候选及 17 个关联消息类型，没有增加已确认 RPC 数量。
- 113 个 native 库的元数据补充了 4,977 个 native 方法声明（含 SDK）、1,062 个 JNI 表布局候选和 14 条平台 URL 字符串。

## 查询接口与字段

需要 Node.js 24.11 或更新版本。目录查询无第三方运行时依赖；资源提取与完整测试需安装锁定的开发依赖。在仓库根目录执行：

```sh
node bin/bili-apis.mjs stats
node bin/bili-apis.mjs categories
node bin/bili-apis.mjs list --category comment --kind http --limit 10
node bin/bili-apis.mjs list --kind http --query search --limit 10
node bin/bili-apis.mjs list --kind grpc --query PlayView --limit 10
node bin/bili-apis.mjs list --kind message --query ViewReq --limit 2
node bin/bili-apis.mjs list --kind http-model --query Search --limit 2
node bin/bili-apis.mjs list --kind dynamic-url --query measure --limit 10
node bin/bili-apis.mjs list --kind dex-route --query verified-url-setter --limit 10
node bin/bili-apis.mjs list --kind resource-route --query reply --limit 10
node bin/bili-apis.mjs list --kind native-jni --query sign --limit 5
node bin/bili-apis.mjs show /bilibili.app.viewunite.v1.View/View
```

输出为 JSON。列表返回总匹配数、当前位置和 `next_offset`；用 `--offset` 继续分页。CLI 只查询本地目录，不发送接口请求。

## 复现提取

先自行准备哈希匹配的基础 APK 和配置 APK；[下载来源及归档哈希](../evidence/download.json)、[基础 APK 哈希](../evidence/base-apk.json) 已记录。项目不分发安装包、引擎或完整反编译源码。

以下 `inputs/` 为示例目录。在仓库根目录执行，使用与记录一致的安装包：

```sh
npm ci --ignore-scripts
node scripts/unpack-dex.mjs inputs/com.bilibili.app.in.apk .local/dex evidence/inputs.json
node scripts/extract-http.mjs .local/dex evidence/inputs.json catalog
node scripts/extract-grpc.mjs .local/dex evidence/inputs.json catalog
node scripts/extract-http-models.mjs .local/dex evidence/inputs.json catalog/http.json catalog
node scripts/extract-artifacts.mjs --apk inputs/com.bilibili.app.in.apk --apk inputs/config.arm64_v8a.apk --apk inputs/config.xxhdpi.apk
node scripts/extract-dex-routes.mjs .local/dex evidence/inputs.json catalog/http.json catalog
node scripts/audit-grpc.mjs .local/dex evidence/inputs.json catalog
node scripts/extract-native.mjs .local/dex evidence/inputs.json inputs/config.arm64_v8a.apk catalog
node scripts/extract-resource-routes.mjs --apk inputs/com.bilibili.app.in.apk --apk inputs/config.arm64_v8a.apk --apk inputs/config.xxhdpi.apk
npm run docs:generate
node --test tests/*.test.mjs
```

解包器核对原 APK 和每个 DEX 的哈希，拒绝覆盖内容不同的现有文件。提取后的 DEX 集合必须与来源清单一致。资源扫描的内存预算和不支持格式逐项记录在覆盖文件。

## 证据与兼容性

HTTP 参数来自 Retrofit 注解，`BaseUrl` 的 URL 拼接仅为语法候选，拦截器仍可改写。gRPC 请求/响应类型默认是描述符构造中的类型候选，只有明确核对的路由另有实现证据。Protobuf 保留 RawMessageInfo 字段类型 ID 和独立的字段编号常量，不把 Java 字段名冒充原始 proto 定义。

完整 APK 的 REA 加载超时；局部方法核对使用记录了映射和哈希的派生副本。所有核心目录仍从原始 37 个 DEX 生成。Native 签名入口已定位，算法、运行时认证、服务端分页和错误语义尚未验证。

项目处于研究阶段；`schema_version: 1` 表示目录格式，包版本 `0.0.0` 是未发布占位。应用升级可能改变名称、索引和协议，旧目录不能自动代表新版本。

## 官方 Android 补充基线

[官方 Android 9.19.0](official-android/README.md)提供独立功能分类、压缩元数据和与 Play 的静态比较。使用 `node bin/bili-apis.mjs --edition official stats` 查询，省略 edition 时继续读取历史 Play 目录。
