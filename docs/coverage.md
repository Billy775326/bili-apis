# 提取范围与覆盖边界

分析对象：com.bilibili.app.in 6.8.0 (9180200)。基础 APK SHA-256：e70979a2d21d650c0b8ba0916616b8799ecbf89397b7c83282766e68f76c77ad。

- HTTP 扫描 37 个 DEX、321318 个类定义、1733948 个方法定义。识别 2325 条声明，2038 组动词/路径。
- gRPC 扫描所有供应 DEX 的类；检查 1190 个返回 MethodDescriptor 的方法定义，识别 604 个静态字符串构造器、604 个路由。
- Protobuf 仅包含 com.bapis 下直接继承 GeneratedMessageLite 的 4216 个消息；已解出全部 4216 个 RawMessageInfo，4216 个消息的编号交叉核对通过。
- 三个 APK 共 28925 个 ZIP 成员，逐成员哈希与 CRC 检查；19962 个文本/native 成员进入 URL 扫描，找到 409 条字符串候选。

## 未覆盖或未验证

- 相对 URL、动态 @Url、拦截器的改写、反射、native 动态路由、运行时下载代码和服务端新增接口无法据此穷尽。
- Native 仅扫描 ELF64 little-endian 的已分配非可执行数据节，不等于分析 native 调用图；过大或不支持的成员逐项记录原因。
- HTTP 参数映射来自注解，公共参数和认证可能在拦截器补充；泛型类型不是完整 JSON 响应 schema。
- gRPC 只有静态 descriptor 构造得到的路由，所有请求/响应角色未统一提升为已核实。
- 所有条目均未做线上调用验证；没有运行 App，也没有发送发帖、评论、私信或账号操作。
- 完整 APK 的 REA/JADX 加载达到 120 秒限制；局部方法核对使用保留原始 DEX 字节的派生 APK，不能把派生副本当作原包或签名验证结果。

详细边界与原始位置：
[HTTP 覆盖](../catalog/coverage-http.json) · [gRPC 覆盖](../catalog/coverage-grpc.json) · [资源覆盖](../catalog/coverage-artifacts.json) · [输入哈希](../evidence/inputs.json)。

## HTTP model graph

4792 reachable app model definitions, 26677 fields, 83 external framework descriptors and 0 unresolved app descriptors. Generic signatures, field references and app superclasses are followed; custom serializers, dynamic subtypes and reflection are outside coverage.

<!-- discovery:start -->
## ?????

?????????????? URL ??????????gRPC ??????? native/JNI ?????? [?????](discovery.md)???????????????????????????
<!-- discovery:end -->
