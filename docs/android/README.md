# Android 接口：按包名、渠道及版本选择

这里分别归档 Google Play 和官方 Android 两个 APK 的静态接口及文档。网页接口及其直接 HTTP 验证保留在[网页功能目录](../pc/README.md)，不与 APK 声明混合计数。

| 包名 | 渠道 | 版本（versionCode） | HTTP 声明 | gRPC 路由 | 文档 | 接口数据 |
| --- | --- | --- | ---: | ---: | --- | --- |
| `com.bilibili.app.in` | Google Play | 6.8.0（9180200） | 2325 | 604 | [功能与来源](com.bilibili.app.in/play/6.8.0/README.md) | [基线与目录](../../catalog/android/com.bilibili.app.in/play/6.8.0/edition.json) |
| `tv.danmaku.bili` | Official Android 64-bit | 9.19.0（9190400） | 2514 | 625 | [功能与来源](tv.danmaku.bili/official/9.19.0/README.md) | [基线与目录](../../catalog/android/tv.danmaku.bili/official/9.19.0/edition.json) |

## 查询接口

在仓库根目录运行；以下命令只读取本地元数据，不会请求 Bilibili。默认仍为 Play 6.8.0。选择项必须放在命令前，不存在或不一致的包名、渠道、版本会报错，不会回退到另一包。

```sh
node bin/bili-apis.mjs editions
node bin/bili-apis.mjs --edition play --package com.bilibili.app.in --version 6.8.0 stats
node bin/bili-apis.mjs --edition official --package tv.danmaku.bili --version 9.19.0 list --category video --kind http --limit 10
node bin/bili-web.mjs list --current-http --limit 100
```

两个包可能出现相同路径或 ID，查询结果的 `source_edition` 标明来源包与版本。CLI 的旧 `--edition play|official` 参数仍可用；原始 DEX 位置、哈希、声明 ID、参数与类型保持原样。

## 数据、证据与生成

```text
catalog/android/<package>/<channel>/<version>/   分开的接口及模型数据
docs/android/<package>/<channel>/<version>/      对应版本的功能与实现文档
catalog/android/editions.json                    机器可读版本索引
docs/pc/ 与 catalog/pc-*.json                    独立网页目录与验证
```

APK 包名与版本依据二进制 AndroidManifest.xml；完整 APK、DEX 与原始运行数据不进入 Git。历史 `evidence/` 路径保留以维持提取结果中的来源引用，具体清单由每版 `edition.json` 的 `manifest_evidence`、`extraction_inputs` 指定。

Play 分析含基础包和两个配置分包；官方版为官方 Android 64 位包。渠道与版本同时不同，对比结果不能单独归因于 Play／官方渠道差异。[两基线对比](tv.danmaku.bili/official/9.19.0/comparison.md)。

旧 `docs/functions/`、`docs/official-android/` 与 Android 根文档保留跳转。旧 `catalog/*.json`（Android）和 `catalog/official-android/` 数据路径已迁移，直接读取这些路径的脚本应使用版本索引或 `loadCatalog`；网页文件路径保持兼容。

```sh
npm run android:docs
npm run docs:generate
npm test
npm run privacy:check
```

Android 文档命令会重建两个基线的文档、版本索引及每页的包名版本标识；全部使用已保存目录，不运行 App、不做线上验证。
