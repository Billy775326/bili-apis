# 目录格式与证据层级

所有 JSON 顶层均含 `schema_version`；接口声明或模型目录记录基础 APK 和 DEX 哈希，资源目录记录输入 APK、每个 ZIP 成员的哈希及位置。`evidence/inputs.json` 是本次固定输入的来源入口。

## HTTP

`catalog/http.json.endpoints` 一条对应一个 DEX 方法的 HTTP 声明，ID 包含 DEX、method index 和动词。同一路径可以由多个方法声明，不能只按路径去重后丢掉参数。

- `http_method`、`path`、参数注解来自实际 Retrofit 元数据；`method_descriptor` 使用 DEX 原始描述符，`generic_signature` 保留泛型签名。
- `base_url_annotations` 保留方法/类作用域。多个不同值不假定覆盖顺序。`resolved_url_candidate` 仅按 URL 语法拼接，`host_candidate` 不代表运行时最终主机。
- `absolute_url`/`host` 仅表示路径本身包含的绝对 URL。动态 `@Url` 和 Map 参数仍需调用方提供，不虚构固定键。
- `request_interceptors` 表示静态注解选中的拦截器，不自动等于账号认证要求。

## HTTP 模型

`catalog/http-models.json.models` 是从 HTTP 参数/返回描述符及泛型签名出发，沿应用字段、字段泛型和父类可达的模型元数据。字段包含 Java/DEX 类型、访问标记、序列化名称注解、声明位置及枚举常量。框架类型和无法解析的引用另行列出。

这不是完整 JSON Schema：自定义序列化器、反射、动态子类型、缺省值、必填性和字段是否实际输出仍需实现及运行时验证。

## gRPC 与 Protobuf

`catalog/grpc.json.methods` 的 ID 为 `/service/method`。服务名和方法名来自匹配实际参数寄存器的 `MethodDescriptor` 字符串构造指令，记录 code offset、指令 code-unit offset 及字符串索引。

`request_type_candidate`/`response_type_candidate` 来源于同一构造方法内按顺序出现的 `getDefaultInstance` 类型，其他类型角色仍是候选。`evidence/implementation-review.json` 单独记录已经反编译核对的路由，不直接提升全部目录的验证状态。

`catalog/messages.json.messages` 分别保留字段编号常量、Java 存储字段和 RawMessageInfo 的内部字段类型 ID。`type_id` 是生成器内部类别，不是 Protobuf tag 的三位 wire type，也没有重建原始 `.proto` 的包选项、枚举意义及完整字段命名。

## 资源/native 候选

`catalog/artifacts.json.candidates` 记录完整成员名、成员哈希、未压缩内容字节偏移及 native 数据节名。URL 字符串只是一条线索，不能据此推断 HTTP 动词、参数或可达代码。扫描排除查询/fragment 值；这不是执行时抓包。

所有目录均未发送线上请求；`static-declaration`、`dex-method-descriptor`、`static-string-only` 等状态应按对应提取方式理解。
