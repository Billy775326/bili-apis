# Native 与 JNI 边界

<!-- android-edition:start -->
包名：`com.bilibili.app.in` · 渠道：Google Play · 版本：6.8.0（9180200）。

[全部版本](../../../README.md) · [本包文档](README.md) · [网页接口](../../../../pc/README.md) · [基线元数据](../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

共检查 113 个 ELF64 little-endian AArch64 库。JNI 表布局和导出名称不是 HTTP/gRPC 接口。全部候选与来源见 [native.json](../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/native.json)，未解析重定位及覆盖状态见 [coverage-native.json](../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/coverage-native.json)。

## 解析范围

读取节、装载段、符号、RELA、Android APS2 和标准/Android RELR，恢复可静态解释的指针。JNI 候选要求名称与签名指针位于可读静态数据中，函数指针落在可执行装载段；与 Java native 声明只按名称/签名列候选，不推断运行时注册和类绑定。

LibBili 的 Map 签名封装先构造 TreeMap 再调用 native s/so；此处没有恢复签名算法或请求密钥。[局部核对](../../../../../evidence/round2-implementation.json)。

## 格式参考

- [Android bionic packed relocation iterator](https://android.googlesource.com/platform/bionic/+/master/linker/linker_reloc_iterators.h)：核对 APS2 分组偏移、类型和加数语义，解析器以独立 JavaScript 实现。
- [LLVM ELF 常量](https://llvm.org/doxygen/BinaryFormat_2ELF_8h_source.html)：核对旧 Android RELR 节类型。
