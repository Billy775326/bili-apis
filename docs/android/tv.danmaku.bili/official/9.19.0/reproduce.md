# 复现官方 Android 静态提取

<!-- android-edition:start -->
包名：`tv.danmaku.bili` · 渠道：Official Android 64-bit · 版本：9.19.0（9190400）。

[全部版本](../../../README.md) · [本包文档](README.md) · [网页接口](../../../../pc/README.md) · [基线元数据](../../../../../catalog/android/tv.danmaku.bili/official/9.19.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

适用于 Windows PowerShell、Node.js 24.11 或更新版本。在仓库根目录执行；需要已安装依赖。`npm.cmd` 可避开 PowerShell 对 npm.ps1 的脚本策略限制。

APK、DEX、native 选中类和反编译正文留在 `.local/`。这些命令只读取 APK，不运行应用或发送 App 接口请求。

准备与 [inputs.json](../../../../../evidence/official-android/inputs.json) SHA-256 相同的 APK，保存为 `.local/official-reproduce/official64.apk`。官方下载链接的 latest 会变化，其他哈希不能复现本基线。下方复制的是本次下载的历史收据，用来核对固定输入，不代表进行了一次新下载。

```powershell
npm.cmd ci --ignore-scripts
$analysisRoot = Join-Path (Get-Location) '.local/official-reproduce'
New-Item -ItemType Directory -Path $analysisRoot -Force | Out-Null
Copy-Item evidence/official-android/download.json (Join-Path $analysisRoot 'download.json')
node scripts/pin-official-android.mjs "$analysisRoot/official64.apk" "$analysisRoot/download.json" "$analysisRoot/evidence"
node scripts/unpack-dex.mjs "$analysisRoot/official64.apk" "$analysisRoot/dex" "$analysisRoot/evidence/inputs.json"
Push-Location $analysisRoot
try {
    New-Item -ItemType Directory -Path '.local' -Force | Out-Null
    node ../../scripts/extract-http.mjs dex evidence/inputs.json catalog
    node ../../scripts/extract-http-models.mjs dex evidence/inputs.json catalog/http.json catalog
    node ../../scripts/extract-dex-routes.mjs dex evidence/inputs.json catalog/http.json catalog
    node ../../scripts/extract-grpc.mjs dex evidence/inputs.json catalog
    node ../../scripts/audit-grpc.mjs dex evidence/inputs.json catalog
    node ../../scripts/extract-artifacts.mjs --apk official64.apk --output catalog/artifacts.json --coverage catalog/coverage-artifacts.json
    node ../../scripts/extract-resource-routes.mjs --apk official64.apk --output catalog/resource-routes.json --coverage catalog/coverage-resource-routes.json
    node ../../scripts/extract-native.mjs dex evidence/inputs.json official64.apk catalog
} finally {
    Pop-Location
}
```

成功判据是每个命令退出码为 0，生成目录的 artifact 和 DEX 哈希对应原始输入。PowerShell 不会因外部命令非零自动退出；遇到错误应先处理错误，再继续后续命令。运行 `node bin/bili-apis.mjs --edition official stats` 可查看仓库已发布元数据，不会读取上述新输出。

生成分类文档和完整压缩目录：

```powershell
node scripts/build-official-android.mjs --import .local/official-reproduce/catalog
node scripts/build-android-editions.mjs
npm.cmd test
```

导入命令会覆盖本仓库的 `catalog/android/tv.danmaku.bili/official/9.19.0/` 和 `docs/android/tv.danmaku.bili/official/9.19.0/` 生成文件，应在任务分支使用并审核差异；它不会发版。压缩文件清单记录提取输出原始 JSON 哈希及压缩/解压内容哈希。

## 单次补充检查

本次证书、REA 及嵌套载荷魔数盘点是额外检查，上面的通用提取命令不会重新产生这三项补充收据：

- [证书摘要](../../../../../evidence/official-android/certificate.json)只解析 APK 签名块中的证书元数据，未验证密码学签名或内容摘要。
- [REA 摘要](../../../../../evidence/official-android/rea.json)记录全包超时及小包成功结果；[派生映射](../../../../../evidence/official-android/rea-derived.json)记录原始成员和派生 APK 哈希。工具使用已安装的 REA 6.4.0/JADX 引擎，按实际 tools/list 参数调用；默认命名空间类在该引擎下显示为 `defpackage.sap2`。完整反编译正文不纳入 Git。
- `coverage-resource-routes.json.gz` 中的 `nested_carrier_inventory` 是 8 个原始 ZIP 的 309 个子成员额外 CRC、哈希和魔数检查记录；通用资源提取器仍保留自身语法解析范围。通用命令重跑会缺少这项补充盘点，不能据此声称该检查已复做。

比较由 [android-comparison.mjs](../../../../../src/android-comparison.mjs)从两份静态快照确定性生成。版本与渠道同时变化，差异不能直接解释为渠道特性或服务端可用性。
