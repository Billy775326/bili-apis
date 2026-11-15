import fs from 'node:fs';
import path from 'node:path';
import { ANDROID_EDITIONS } from '../src/android-editions.mjs';
import { readJson, loadCatalog, summarize } from '../src/catalog.mjs';
const args = process.argv.slice(2);
if (args.length && (args.length !== 1 || args[0] !== '--check')) throw Error('Usage: node scripts/build-android-editions.mjs [--check]');
const checkOnly = args[0] === '--check';
const root = process.cwd();
const write = (file, text) => {
  if (checkOnly) {
    if (!fs.existsSync(file) || fs.readFileSync(file, 'utf8').replaceAll('\r\n', '\n') !== text) throw Error('Generated edition output differs: ' + file);
    return;
  }
  fs.mkdirSync(path.dirname(file), {recursive: true});
  fs.writeFileSync(file, text);
};
const json = (file, data) => write(file, JSON.stringify(data, null, 2) + '\n');
const link = (from, target) => path.posix.relative(path.posix.dirname(from), target);
const editions = ANDROID_EDITIONS.map(baseline => {
  const identity = readJson(path.join(root, baseline.manifest_evidence));
  const inputs = readJson(path.join(root, baseline.extraction_inputs));
  for (const key of ['package_name', 'version_name', 'version_code'])
    if (identity[key] !== baseline[key]) throw Error('Manifest identity mismatch: ' + key);
  if (identity.artifact_sha256 !== baseline.artifact_sha256 || inputs.artifact.sha256 !== baseline.artifact_sha256)
    throw Error('Pinned APK hash mismatch: ' + baseline.edition);
  const summary = summarize(loadCatalog(root, {edition: baseline.edition}));
  return {...baseline, scope: 'APK static extraction; not a web or App runtime availability claim', counts: summary.counts};
});
json('catalog/android/editions.json', {schema_version: 1, editions});
for (const baseline of editions) {
  json(baseline.catalog_directory + '/edition.json', {schema_version: 1, ...baseline});
  const packageIndex = 'docs/android/' + baseline.package_name + '/README.md';
  const channelIndex = 'docs/android/' + baseline.package_name + '/' + baseline.edition + '/README.md';
  const text = '# ' + baseline.package_name + ' · ' + baseline.channel + '\n\n' +
    '以下版本分别保留接口声明、参数模型、来源和覆盖边界；不同包或版本的相同路由仍是不同来源记录。\n\n' +
    `- [${baseline.version_name}（${baseline.version_code}）](${link(packageIndex, baseline.docs_directory + '/README.md')})\n` +
    '- [全部包与网页入口](' + link(packageIndex, 'docs/android/README.md') + ')\n';
  write(packageIndex, text);
  write(channelIndex, '# ' + baseline.channel + ' · ' + baseline.package_name + '\n\n' +
    `- [${baseline.version_name}（${baseline.version_code}）](${link(channelIndex, baseline.docs_directory + '/README.md')})\n` +
    '- [全部包与网页入口](' + link(channelIndex, 'docs/android/README.md') + ')\n');
  function annotate(directory) {
    for (const entry of fs.readdirSync(directory, {withFileTypes: true})) {
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) { annotate(file); continue; }
      if (!entry.name.endsWith('.md')) continue;
      const relative = path.relative(root, file).replaceAll('\\', '/');
      const original = fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, '');
      const body = original.replaceAll('\r\n', '\n').replace(/\n<!-- android-edition:start -->[\s\S]*?<!-- android-edition:end -->\n/g, '');
      const banner = '\n<!-- android-edition:start -->\n' +
        `包名：\`${baseline.package_name}\` · 渠道：${baseline.channel} · 版本：${baseline.version_name}（${baseline.version_code}）。\n\n` +
        '[全部版本](' + link(relative, 'docs/android/README.md') + ') · [本包文档](' + link(relative, baseline.docs_directory + '/README.md') + ') · ' +
        '[网页接口](' + link(relative, 'docs/pc/README.md') + ') · [基线元数据](' + link(relative, baseline.catalog_directory + '/edition.json') + ')。\n\n' +
        '本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。\n<!-- android-edition:end -->\n';
      const end = body.indexOf('\n');
      write(file, end < 0 ? body + '\n' + banner : body.slice(0, end) + '\n' + banner + body.slice(end + 1));
    }
  }
  annotate(baseline.docs_directory);
}
const index = ['# Android 接口：按包名、渠道及版本选择', '',
  '这里分别归档 Google Play 和官方 Android 两个 APK 的静态接口及文档。网页接口及其直接 HTTP 验证保留在[网页功能目录](../pc/README.md)，不与 APK 声明混合计数。', '',
  '| 包名 | 渠道 | 版本（versionCode） | HTTP 声明 | gRPC 路由 | 文档 | 接口数据 |',
  '| --- | --- | --- | ---: | ---: | --- | --- |',
  ...editions.map(e => `| \`${e.package_name}\` | ${e.channel} | ${e.version_name}（${e.version_code}） | ${e.counts.http} | ${e.counts.grpc} | [功能与来源](${link('docs/android/README.md', e.docs_directory + '/README.md')}) | [基线与目录](${link('docs/android/README.md', e.catalog_directory + '/edition.json')}) |`), '',
  '## 查询接口', '', '在仓库根目录运行；以下命令只读取本地元数据，不会请求 Bilibili。默认仍为 Play 6.8.0。选择项必须放在命令前，不存在或不一致的包名、渠道、版本会报错，不会回退到另一包。', '',
  '```sh', 'node bin/bili-apis.mjs editions',
  'node bin/bili-apis.mjs --edition play --package com.bilibili.app.in --version 6.8.0 stats',
  'node bin/bili-apis.mjs --edition official --package tv.danmaku.bili --version 9.19.0 list --category video --kind http --limit 10',
  'node bin/bili-web.mjs list --current-http --limit 100', '```', '',
  '两个包可能出现相同路径或 ID，查询结果的 `source_edition` 标明来源包与版本。CLI 的旧 `--edition play|official` 参数仍可用；原始 DEX 位置、哈希、声明 ID、参数与类型保持原样。', '',
  '## 数据、证据与生成', '', '```text',
  'catalog/android/<package>/<channel>/<version>/   分开的接口及模型数据',
  'docs/android/<package>/<channel>/<version>/      对应版本的功能与实现文档',
  'catalog/android/editions.json                    机器可读版本索引',
  'docs/pc/ 与 catalog/pc-*.json                    独立网页目录与验证', '```', '',
  'APK 包名与版本依据二进制 AndroidManifest.xml；完整 APK、DEX 与原始运行数据不进入 Git。历史 `evidence/` 路径保留以维持提取结果中的来源引用，具体清单由每版 `edition.json` 的 `manifest_evidence`、`extraction_inputs` 指定。', '',
  'Play 分析含基础包和两个配置分包；官方版为官方 Android 64 位包。渠道与版本同时不同，对比结果不能单独归因于 Play／官方渠道差异。[两基线对比](' + link('docs/android/README.md', editions[1].docs_directory + '/comparison.md') + ')。', '',
  '旧 `docs/functions/`、`docs/official-android/` 与 Android 根文档保留跳转。旧 `catalog/*.json`（Android）和 `catalog/official-android/` 数据路径已迁移，直接读取这些路径的脚本应使用版本索引或 `loadCatalog`；网页文件路径保持兼容。', '',
  '```sh', 'npm run android:docs', 'npm run docs:generate', 'npm test', 'npm run privacy:check', '```', '',
  'Android 文档命令会重建两个基线的文档、版本索引及每页的包名版本标识；全部使用已保存目录，不运行 App、不做线上验证。', ''];
write('docs/android/README.md', index.join('\n'));
console.log(JSON.stringify({editions: editions.map(e => ({package_name:e.package_name,channel:e.edition,version:e.version_name,http:e.counts.http,grpc:e.counts.grpc}))}));
