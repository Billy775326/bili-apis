# Bilibili Play 版接口目录

从 `com.bilibili.app.in` 6.8.0（9180200）的完整基础 APK 和两个配置分包提取 HTTP/gRPC 接口声明、参数元数据与资源线索，供接口研究、定位请求代码及后续客户端实现使用。

这是该安装包的静态接口目录，不是经过线上验证的完整 SDK，也无法保证包含服务端全部接口。

## 已提取内容

| 内容                 |  数量 | 入口                                                                        |
| -------------------- | ----: | --------------------------------------------------------------------------- |
| HTTP 方法声明        | 2,325 | [可读目录](docs/http.md) · [完整参数 JSON](catalog/http.json)               |
| gRPC 方法路由        |   604 | [可读目录](docs/grpc.md) · [来源与类型候选](catalog/grpc.json)              |
| HTTP 可达模型        | 4,792 | [26,677 个字段元数据](catalog/http-models.json)                             |
| Protobuf 消息        | 4,216 | [类型索引](docs/messages.md) · [20,621 个字段元数据](catalog/messages.json) |
| 资源/native URL 候选 |   409 | [候选与成员位置](catalog/artifacts.json)                                    |

HTTP 按动词/路径去重为 2,038 组，未按域名区分。目录保留所有声明，避免把同路径的不同参数和返回类型合并丢失。18 条 `@Url` 动态声明保留动态状态。

[覆盖范围](docs/coverage.md) · [实现核对](docs/implementation.md) · [数据格式](docs/catalog-format.md) · [来源哈希](evidence/inputs.json) · [更新日志](CHANGELOG.md)

## 查询接口与字段

需要 Node.js 24 或更新版本。仓库运行时没有第三方依赖，在仓库根目录执行：

```sh
node bin/bili-apis.mjs stats
node bin/bili-apis.mjs list --kind http --query search --limit 10
node bin/bili-apis.mjs list --kind grpc --query PlayView --limit 10
node bin/bili-apis.mjs list --kind message --query ViewReq --limit 2
node bin/bili-apis.mjs list --kind http-model --query Search --limit 2
node bin/bili-apis.mjs show /bilibili.app.viewunite.v1.View/View
```

输出为 JSON。列表返回总匹配数、当前位置和 `next_offset`；用 `--offset` 继续分页。CLI 只查询本地目录，不发送接口请求。

## 复现提取

先自行准备哈希匹配的基础 APK 和配置 APK；[下载来源及归档哈希](evidence/download.json)、[基础 APK 哈希](evidence/base-apk.json) 已记录。项目不分发安装包、引擎或完整反编译源码。

以下 `inputs/` 为示例目录。在仓库根目录执行，使用与记录一致的安装包：

```sh
node scripts/unpack-dex.mjs inputs/com.bilibili.app.in.apk .local/dex evidence/inputs.json
node scripts/extract-http.mjs .local/dex evidence/inputs.json catalog
node scripts/extract-grpc.mjs .local/dex evidence/inputs.json catalog
node scripts/extract-http-models.mjs .local/dex evidence/inputs.json catalog/http.json catalog
node scripts/extract-artifacts.mjs --apk inputs/com.bilibili.app.in.apk --apk inputs/config.arm64_v8a.apk --apk inputs/config.xxhdpi.apk
node scripts/build-docs.mjs
node --test tests/*.test.mjs
```

解包器核对原 APK 和每个 DEX 的哈希，拒绝覆盖内容不同的现有文件。提取后的 DEX 集合必须与来源清单一致。资源扫描的内存预算和不支持格式逐项记录在覆盖文件。

## 证据与兼容性

HTTP 参数来自 Retrofit 注解，`BaseUrl` 的 URL 拼接仅为语法候选，拦截器仍可改写。gRPC 请求/响应类型默认是描述符构造中的类型候选，只有明确核对的路由另有实现证据。Protobuf 保留 RawMessageInfo 字段类型 ID 和独立的字段编号常量，不把 Java 字段名冒充原始 proto 定义。

完整 APK 的 REA 加载超时；局部方法核对使用记录了映射和哈希的派生副本。所有核心目录仍从原始 37 个 DEX 生成。Native 签名入口已定位，算法、运行时认证、服务端分页和错误语义尚未验证。

项目处于研究阶段；`schema_version: 1` 表示目录格式，包版本 `0.0.0` 是未发布占位。应用升级可能改变名称、索引和协议，旧目录不能自动代表新版本。
