import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { readJson } from "../src/catalog.mjs";
const read = (name) => readJson(path.join("catalog", name + ".json")),
  dex = read("dex-routes"),
  dc = read("coverage-dex-routes"),
  resource = read("resource-routes"),
  rc = read("coverage-resource-routes"),
  grpc = read("coverage-grpc-audit"),
  native = read("coverage-native");
const cell = (x) =>
  String(x ?? "")
    .replaceAll("|", "\\|")
    .replaceAll("\r", " ")
    .replaceAll("\n", " ");
const write = (name, lines) =>
  fs.writeFileSync(path.join("docs", name), lines.join("\n").trimEnd() + "\n");
const resolved = dex.dynamic_url_callers.filter((c) => c.route),
  staticResources = resource.declarations.filter(
    (d) => typeof d.path === "string" && !d.computed,
  ),
  resourcePairs = new Set(
    staticResources.map((d) => (d.method ?? "?") + " " + d.path),
  );
const files = [
  "dex-routes",
  "coverage-dex-routes",
  "resource-routes",
  "coverage-resource-routes",
  "grpc-audit",
  "coverage-grpc-audit",
  "grpc-additional",
  "native",
  "coverage-native",
];
const summary = {
  schema_version: 1,
  artifact: dex.artifact,
  sources: files.map((name) => ({
    file: "catalog/" + name + ".json",
    json_stringify_sha256: crypto
      .createHash("sha256")
      .update(JSON.stringify(read(name)))
      .digest("hex"),
  })),
  dynamic_url: {
    declarations: dc.dynamic_url_declarations,
    caller_sites: dc.dynamic_url_call_sites,
    resolved_sites: dc.dynamic_url_resolved_sites,
    unresolved_sites: dc.dynamic_url_unresolved_sites,
  },
  dex_arguments: {
    verified_url_setter_occurrences: dex.route_argument_candidates.filter(
      (r) => r.sink_kind === "verified-url-setter",
    ).length,
    verified_url_setter_unique_values: new Set(
      dex.route_argument_candidates
        .filter((r) => r.sink_kind === "verified-url-setter")
        .map((r) => r.value),
    ).size,
    observations: dc.route_argument_occurrences,
    unique_values: dc.unique_route_argument_values,
    not_matching_core_catalog_values: dc.new_url_or_path_values.length,
    interpretation:
      "Route-shaped argument values, including logs/pages/URI construction; not new callable API count.",
  },
  resources: {
    declarations: resource.declarations.length,
    static_path_observations: staticResources.length,
    unique_method_path_pairs: resourcePairs.size,
    computed_paths: resource.declarations.length - staticResources.length,
    nested_zip_archives: rc.counts.nested_archives,
    parser_status_counts: rc.counts.by_status,
  },
  grpc_audit: {
    descriptor_definitions: grpc.method_descriptor_return_definitions,
    classifications: grpc.descriptor_classifications,
    known_routes_referenced: grpc.unique_routes_referenced_from_method_bodies,
    additional_broadcast_paths: grpc.broadcast_dispatch_path_candidates,
    outside_associated_messages:
      grpc.associated_types_outside_existing_message_catalog,
    outside_fields: grpc.outside_message_wire_fields,
  },
  native: {
    libraries: native.parsed_libraries,
    java_native_methods: native.java_native_methods,
    jni_layout_candidates: native.jni_table_candidates,
    url_candidates: native.url_candidates,
  },
  limitations: [
    "Evidence categories can overlap; observation counts must not be added as unique network APIs.",
    "All results are static. Dynamic URL values, computed JavaScript, native call graphs and live server state remain unverified.",
  ],
};
fs.writeFileSync(
  "catalog/discovery-summary.json",
  JSON.stringify(summary, null, 2) + "\n",
);
write("discovery.md", [
  "# 第二轮接口深挖",
  "",
  "本轮继续分析同一份 Play 版 6.8.0 安装包。原有 2,325 条 HTTP 声明和 604 个 gRPC 路由保留；新增内容按调用点、语法观察、广播路径与 native 线索分组，不能相加为新增接口数量。",
  "",
  `- DEX：扫描 ${dc.code_methods_scanned} 个代码方法；${dc.dynamic_url_declarations} 个动态 URL 声明找到 ${dc.dynamic_url_call_sites} 个直接调用位置，${resolved.length} 处恢复常量 URL，另 ${dc.dynamic_url_unresolved_sites} 处保留未知。`,
  `- 寄存器关联：${dc.route_argument_occurrences} 条观察、${dc.unique_route_argument_values} 个去重值，${dc.new_url_or_path_values.length} 个值未匹配既有目录；其中也包含日志、页面、protobuf 类型名和 URI 构造，不能冒充可调用接口。`,
  `- H5/嵌套资源：${resource.declarations.length} 条语法观察，${staticResources.length} 条静态路径，${resourcePairs.size} 组去重方法/路径；${resource.declarations.length - staticResources.length} 条路径仍为计算值，展开 ${rc.counts.nested_archives} 个内嵌 ZIP。`,
  `- gRPC：全部 ${grpc.method_descriptor_return_definitions} 个描述符定义和所有已知路由引用已分类；新增广播消息分发路径候选与关联消息详见审计 JSON，未增加已确认 RPC 数量。`,
  `- native：检查 ${native.parsed_libraries} 个 arm64 库，记录 ${native.java_native_methods} 个 native 方法声明（含随包 SDK）、${native.jni_table_candidates} 个 JNI 表布局候选、${native.url_candidates} 条平台 URL 字符串。`,
  "",
  "## 已恢复的动态 URL 调用位置",
  "",
  "| 方法 | URL | DEX / 方法索引 / 指令位置 | 既有目录关系 |",
  "| --- | --- | --- | --- |",
  ...resolved.map(
    (c) =>
      `| ${cell(c.http_method)} | ${cell(c.route.value)} | ${cell(c.source.dex)} / ${c.source.method_index} / ${c.source.code_unit_offset} | ${cell(c.known_route_match)} |`,
  ),
  "",
  "这些是原方法调用中的静态参数关系，不表示请求已执行，也不表示相同 URL 是新发现的服务端接口。",
  "",
  "## 可复核材料",
  "",
  "[DEX 调用与路径](../catalog/dex-routes.json) · [资源请求](../catalog/resource-routes.json) · [gRPC 审计](../catalog/grpc-audit.json) · [广播路径](../catalog/grpc-additional.json) · [native/JNI](../catalog/native.json) · [汇总及来源哈希](../catalog/discovery-summary.json)。",
  "",
  "## 尚未覆盖",
  "",
  "13 处动态 URL 调用和计算型 JavaScript 地址仍需结合调用方、服务器配置或受控运行时观察。Opaque Lynx bundle 尚未解码；严格 JSON 解析失败的资源保留错误原因。JNI 表布局只说明静态指针结构，不证明 RegisterNatives 被调用或对应 Java 类已绑定。native 签名实现、反射/下载代码和服务端新增接口仍不能据此穷尽。",
]);
write("resource-routes.md", [
  "# 资源请求语法观察",
  "",
  "仅表示 JS/JSON/HTML 中出现请求形态；包装器绑定和执行路径未统一验证，配置对象与调用语法可能重复描述同一请求。",
  "",
  "| 方法 | 路径/计算状态 | 语法类别 | 成员 | UTF-8 字节偏移 |",
  "| --- | --- | --- | --- | --- |",
  ...resource.declarations.map(
    (r) =>
      `| ${cell(r.method)} | ${cell(r.path ?? "计算值")} | ${cell(r.kind)} | ${cell(r.member)} | ${r.source_byte_offset ?? ""} |`,
  ),
]);
write("native.md", [
  "# Native 与 JNI 边界",
  "",
  `共检查 ${native.parsed_libraries} 个 ELF64 little-endian AArch64 库。JNI 表布局和导出名称不是 HTTP/gRPC 接口。全部候选与来源见 [native.json](../catalog/native.json)，未解析重定位及覆盖状态见 [coverage-native.json](../catalog/coverage-native.json)。`,
  "",
  "## 解析范围",
  "",
  "读取节、装载段、符号、RELA、Android APS2 和标准/Android RELR，恢复可静态解释的指针。JNI 候选要求名称与签名指针位于可读静态数据中，函数指针落在可执行装载段；与 Java native 声明只按名称/签名列候选，不推断运行时注册和类绑定。",
  "",
  "LibBili 的 Map 签名封装先构造 TreeMap 再调用 native s/so；此处没有恢复签名算法或请求密钥。[局部核对](../evidence/round2-implementation.json)。",
  "",
  "## 格式参考",
  "",
  "- [Android bionic packed relocation iterator](https://android.googlesource.com/platform/bionic/+/master/linker/linker_reloc_iterators.h)：核对 APS2 分组偏移、类型和加数语义，解析器以独立 JavaScript 实现。",
  "- [LLVM ELF 常量](https://llvm.org/doxygen/BinaryFormat_2ELF_8h_source.html)：核对旧 Android RELR 节类型。",
]);
console.log(JSON.stringify(summary));

const coverageText = fs
  .readFileSync("docs/coverage.md", "utf8")
  .replace(/\n<!-- discovery:start -->[\s\S]*<!-- discovery:end -->\n?/, "");
fs.writeFileSync(
  "docs/coverage.md",
  coverageText.trimEnd() +
    "\n\n<!-- discovery:start -->\n## ?????\n\n?????????????? URL ??????????gRPC ??????? native/JNI ?????? [?????](discovery.md)???????????????????????????\n<!-- discovery:end -->\n",
);
