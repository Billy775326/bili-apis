import fs from "node:fs";
import path from "node:path";
import { readJson } from "../src/catalog.mjs";
const read = (n) => readJson(path.join("catalog/android/com.bilibili.app.in/play/6.8.0", n + ".json"));
const http = read("http"),
  grpc = read("grpc"),
  messages = read("messages"),
  artifacts = read("artifacts"),
  hc = read("coverage-http"),
  gc = read("coverage-grpc"),
  ac = read("coverage-artifacts");
const cell = (v) =>
  String(v ?? "")
    .replaceAll("|", "\\|")
    .replaceAll("\r", " ")
    .replaceAll("\n", " ");
function write(file, lines) {
  fs.mkdirSync("docs/android/com.bilibili.app.in/play/6.8.0", { recursive: true });
  fs.writeFileSync(path.join("docs/android/com.bilibili.app.in/play/6.8.0", file), lines.join("\n").trimEnd() + "\n");
}
write("http.md", [
  "# HTTP 声明目录",
  "",
  `共 ${http.endpoints.length} 条声明，去重动词/路径 ${hc.unique_verb_path_pairs} 组。来源为 DEX 方法注解；BaseUrl 拼接结果为候选，不包含拦截器运行时改写。参数注解、泛型返回类型及来源索引见 [JSON](../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/http.json)。`,
  "",
  "| ID | 方法 | 路径 | BaseUrl 声明 | 参数注解 |",
  "| --- | --- | --- | --- | --- |",
  ...http.endpoints.map(
    (e) =>
      `| ${cell(e.id)} | ${cell(e.http_method)} | ${cell(e.path ?? "动态 URL")} | ${cell(e.base_url)} | ${cell(e.parameters.flatMap((p) => p.annotations.map((a) => a.type.split("/").at(-1).replace(";", "") + ":" + (a.elements?.value ?? "map/body/dynamic"))).join(", "))} |`,
  ),
]);
write("grpc.md", [
  "# gRPC 方法目录",
  "",
  `共 ${grpc.methods.length} 个静态 MethodDescriptor 路由。请求/响应角色默认按 getDefaultInstance 调用顺序列为候选，已人工核对的 View/View 见 [实现核对](implementation.md)。[原始位置及声明](../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/grpc.json)。`,
  "",
  "| 路由 | 请求类型候选 | 响应类型候选 |",
  "| --- | --- | --- |",
  ...grpc.methods.map(
    (e) =>
      `| ${cell(e.id)} | ${cell(e.request_type_candidate)} | ${cell(e.response_type_candidate)} |`,
  ),
]);
write("messages.md", [
  "# Protobuf 消息索引",
  "",
  `共 ${messages.messages.length} 个消息，${gc.decoded_wire_fields} 个字段。RawMessageInfo 字段编号已与 FIELD_NUMBER 常量交叉核对；Java 字段名不等于原始 proto 源字段名，原始枚举语义、选项和完整响应契约没有恢复。[字段元数据 JSON](../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/messages.json)。`,
  "",
  "| 消息描述符 | 解析字段数 | 编号交叉核对 |",
  "| --- | --- | --- |",
  ...messages.messages.map(
    (m) =>
      `| ${cell(m.descriptor)} | ${m.wire_layout?.field_count ?? "未知"} | ${cell(m.field_number_cross_check)} |`,
  ),
]);
write("coverage.md", [
  "# 提取范围与覆盖边界",
  "",
  `分析对象：com.bilibili.app.in 6.8.0 (9180200)。基础 APK SHA-256：${http.artifact.sha256}。`,
  "",
  `- HTTP 扫描 ${hc.dex_files_scanned} 个 DEX、${hc.class_definitions_scanned} 个类定义、${hc.method_definitions_scanned} 个方法定义。识别 ${http.endpoints.length} 条声明，${hc.unique_verb_path_pairs} 组动词/路径。`,
  `- gRPC 扫描所有供应 DEX 的类；检查 ${gc.method_descriptor_definitions} 个返回 MethodDescriptor 的方法定义，识别 ${gc.descriptor_builders} 个静态字符串构造器、${gc.unique_methods} 个路由。`,
  `- Protobuf 仅包含 com.bapis 下直接继承 GeneratedMessageLite 的 ${gc.message_classes} 个消息；已解出全部 ${gc.decoded_message_layouts} 个 RawMessageInfo，${gc.field_number_cross_checks_matched} 个消息的编号交叉核对通过。`,
  `- 三个 APK 共 ${ac.counts.members} 个 ZIP 成员，逐成员哈希与 CRC 检查；${ac.counts.scanned} 个文本/native 成员进入 URL 扫描，找到 ${artifacts.candidates.length} 条字符串候选。`,
  "",
  "## 未覆盖或未验证",
  "",
  "- 相对 URL、动态 @Url、拦截器的改写、反射、native 动态路由、运行时下载代码和服务端新增接口无法据此穷尽。",
  "- Native 仅扫描 ELF64 little-endian 的已分配非可执行数据节，不等于分析 native 调用图；过大或不支持的成员逐项记录原因。",
  "- HTTP 参数映射来自注解，公共参数和认证可能在拦截器补充；泛型类型不是完整 JSON 响应 schema。",
  "- gRPC 只有静态 descriptor 构造得到的路由，所有请求/响应角色未统一提升为已核实。",
  "- 所有条目均未做线上调用验证；没有运行 App，也没有发送发帖、评论、私信或账号操作。",
  "- 完整 APK 的 REA/JADX 加载达到 120 秒限制；局部方法核对使用保留原始 DEX 字节的派生 APK，不能把派生副本当作原包或签名验证结果。",
  "",
  "详细边界与原始位置：",
  "[HTTP 覆盖](../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/coverage-http.json) · [gRPC 覆盖](../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/coverage-grpc.json) · [资源覆盖](../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/coverage-artifacts.json) · [输入哈希](../../../../../evidence/inputs.json)。",
]);
console.log(
  JSON.stringify({
    http: http.endpoints.length,
    grpc: grpc.methods.length,
    messages: messages.messages.length,
    artifacts: artifacts.candidates.length,
  }),
);

const modelCatalog = read("http-models"),
  modelCoverage = read("coverage-http-models");
write("http-models.md", [
  "# HTTP model index",
  "",
  String(modelCoverage.model_definitions) +
    " reachable model definitions; " +
    String(modelCoverage.fields) +
    " DEX fields. These are field inventories, not verified JSON schemas. See [format](catalog-format.md) and [metadata](../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/http-models.json).",
  "",
  "| Descriptor | Fields | DEX |",
  "| --- | --- | --- |",
  ...modelCatalog.models.map(
    (m) =>
      "| " +
      cell(m.descriptor) +
      " | " +
      m.fields.length +
      " | " +
      cell(m.dex) +
      " |",
  ),
]);
const coverageFile = "docs/android/com.bilibili.app.in/play/6.8.0/coverage.md";
fs.appendFileSync(
  coverageFile,
  "\n## HTTP model graph\n\n" +
    modelCoverage.model_definitions +
    " reachable app model definitions, " +
    modelCoverage.fields +
    " fields, " +
    modelCoverage.external_descriptors +
    " external framework descriptors and " +
    modelCoverage.unresolved_descriptors +
    " unresolved app descriptors. Generic signatures, field references and app superclasses are followed; custom serializers, dynamic subtypes and reflection are outside coverage.\n",
);
