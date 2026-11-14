# 全量验证准备状态

纳入 2929 条声明，其中 HTTP 2325、gRPC 604。现有 6 条有匿名样本，完整场景验证为 0；不能将最小 JSON 检查算成完整接口验证。

[逐项验证矩阵](../catalog/validation-matrix.json) · [资源与操作范围](validation-resources.md) · [已有抽查](validation.md)

矩阵仅用于计划，不发送请求，也不由 HTTP 方法自动决定是否可以执行。每条默认未审核，资源与权限标签是待核对提示。相同路径的不同声明保留原 ID，避免忽略参数、域名和拦截器差异。

| 准备项提示 | 涉及声明数 |
| --- | ---: |
| reviewed-case-with-inputs-and-assertions | 2929 |
| play-app-request-context-for-app-fidelity | 2929 |
| live-room-and-streamer-permissions-if-required | 525 |
| runtime-map-body-or-header-values | 313 |
| path-template-values | 7 |
| possible-external-effect-review | 523 |
| auth-session-requirement-to-be-determined | 542 |
| sandbox-or-explicit-order-and-buyer-scope | 13 |
| test-collection | 87 |
| entitled-content-if-required | 150 |
| sandbox-or-explicit-budget-and-order-scope | 59 |
| entitled-test-account-if-required | 53 |
| interactive-login-and-verification-by-owner | 77 |
| runtime-dynamic-url | 18 |
| owned-test-dynamic | 211 |
| owned-test-post-and-comment | 42 |
| two-test-accounts | 39 |
| creator-account | 240 |
| owned-test-draft-and-media | 240 |
| two-test-accounts-and-consenting-recipient | 105 |
| grpc-authority-and-metadata | 604 |
| protobuf-role-and-field-values | 604 |
| rpc-stream-lifecycle-if-required | 604 |

## 完成判据

- review operation effects and ownership before execution
- record artifact/version and exact test case with protected inputs stored locally
- assert transport, business semantics and relevant response fields
- check authentication roles, errors, pagination or streaming when applicable
- for writes check resulting state and cleanup; do not alter existing user data
- retain evidence or a specific untested blocker; never count a denied request as successful positive validation

“全量”指对每条目录声明保留验证结果或具体未覆盖原因，不承诺所有静态库声明都有当前可访问的服务端实现。一次业务错误只验证该错误路径，无法证明合法参数下可以正常调用。

## 更新计划

在仓库根目录执行以下命令仅重新生成计划，不联网：

```sh
node scripts/build-validation-matrix.mjs
```

矩阵是从静态目录生成的计划产物。此阶段不在其中手工填写测试结果；后续执行结果应追加至独立、带来源哈希的证据文件，再由生成器关联，避免重建覆盖实测记录。
