# Bilibili APIs

Bilibili 网页数据读取与接口研究项目。面向需要读取公开视频、搜索、评论、空间与直播信息的开发者，提供按功能组织的接口说明、Node.js 只读客户端及验证记录。

当前封装 **39 个 网页 只读别名**；匿名快照 **33 个地址**通过相关匿名 HTTP 字段用例。网页观察目录共 82 组方法与 URL，包含这些读取地址；不能将所有观察都算作可调用接口。

登录态固定目录覆盖 **82 组方法/URL**：65 组字段通过，3 组仅 Protobuf 结构通过，其余状态单列。[按功能查看全量矩阵](docs/pc/full-validation.md) · [受控写操作及清理](docs/pc/write-validation.md) · [直接 HTTP 上传](docs/pc/direct-upload.md)

最新直接 HTTP：固定目录 82 组，66 组字段通过、3 组仅二进制结构通过；全部已发现方法/地址共 137 组，未执行项单列。[网页接口逐项验证与缺口](docs/pc/web-validation.md)

## 功能特性

- **视频与搜索**：视频详情及统计、分 P、相关视频、标签、综合搜索、视频搜索、搜索建议。
- **评论读取**：普通评论、置顶评论、楼中楼；匿名快照公开视频的首屏与一次下一页通过。
- **空间与内容**：关注/粉丝统计、公开合集、公告、专栏、追番、代表作、公开收藏夹、热门动态。
- **推荐与直播**：热门视频、首页推荐、直播播放元数据、房间基础信息和直播推荐。
- **接口调用**：命令行与 JavaScript 两种入口；WBI 由客户端处理，默认匿名、不自动重试。
- **直接 HTTP 上传（实验性）**：独立视频分片、封面、投稿和所有权读回客户端；本次真实测试无 UI 操作或人工确认，见[使用文档](docs/pc/direct-upload.md)。
- **研究资料**：独立保留官方 Android 与 Play 静态目录、参数模型和差异报告。

部分读取地址仍受风控、返回结构或参数限制，具体状态见[匿名快照验证结果](docs/pc/current.md)。登录态读取、投稿、评论、点赞、收藏与历史清理另有[真实验证记录](docs/pc/full-validation.md)；默认读取 SDK 继续只读；另有独立的[实验性直接上传客户端](docs/pc/direct-upload.md)。私信发送及支付未验证。

## 快速开始

### 运行环境

Node.js 24.11 或更新版本。查询目录和调用客户端无需安装第三方运行时依赖；运行提取工具及完整测试需要 `npm ci --ignore-scripts`。

### 获取项目

```sh
git clone https://github.com/Billy775326/bili-apis.git
cd bili-apis
```

仓库访问权限以你的 GitHub 账号为准。

### 查询和调用

```sh
# 本地查询，不发送 API 请求
node bin/bili-web.mjs list --current-http --limit 100

# 请求三条热门视频；此命令会发送匿名 HTTPS GET
node bin/bili-web.mjs call home.popular pn=1 ps=3

# 从热门列表选取公开视频，串联详情和分 P 请求
node examples/pc-read.mjs
```

## 按功能查找

| 功能 | 接口入口 | 示例 |
| --- | --- | --- |
| 视频 | [详情、分 P、相关视频、标签](docs/pc/video.md) | video.detail |
| 播放 | [播放地址与播放器](docs/pc/playback.md) | playback.url |
| 搜索 | [视频、综合搜索和搜索建议](docs/pc/search.md) | search.videos |
| 评论 | [评论列表与楼中楼](docs/pc/comment.md) | comment.main |
| 用户空间 | [合集、公告、追番、专栏等](docs/pc/user.md) | user.collections |
| 关注与粉丝 | [公开统计](docs/pc/relation.md) | user.relationStats |
| 收藏 | [公开收藏夹](docs/pc/favorite.md) | favorite.folders |
| 动态 | [热门动态](docs/pc/dynamic.md) | dynamic.hot |
| 推荐 | [热门与首页推荐](docs/pc/feed.md) | home.popular |
| 直播 | [房间状态和推荐](docs/pc/live.md) | live.roomBaseInfo |

## 文档与示例

- [完整接口索引](docs/pc/README.md)：每项包含用途、请求参数、调用示例、返回字段和验证状态。
- [按场景使用](docs/pc/usage.md)：热门视频到详情、搜索、评论下一页、空间和直播。
- [客户端配置与错误处理](docs/pc/client.md)：会话、超时、WBI、失败和调用入口。
- [匿名快照验证](docs/pc/current.md)与[历史验证](docs/pc/validation.md)：明确通过、失败、风控和跳过。

## 项目结构

```text
bin/                  命令行入口：bili-web 与 Android 目录查询
src/web-client.mjs    网页 匿名 GET 客户端及读取别名
src/pc-cases.mjs      字段断言
examples/             可执行的 网页 读取示例
docs/pc/              功能文档、使用场景及验证结果
catalog/              脱敏目录、静态候选与 Android 元数据
evidence/             来源哈希与脱敏验证记录
scripts/              提取、复测和文档生成
tests/                离线测试
```

## Android 研究资料

[官方 Android 静态目录与 Play 对比](docs/official-android/README.md) · [历史 Play 目录与旧 CLI](docs/android-archive.md)。这些是独立静态证据，不自动作为网页可用性验证，也不导入 网页 客户端。

## 验证与维护

样本通过只覆盖记录的输入和字段；未保证所有视频、完整分页、登录角色、付费内容或未来版本。完整响应、账号 Cookie、动态签名及第三方脚本正文均留在本地忽略目录。

```sh
npm ci --ignore-scripts
npm test
npm run docs:generate
```

入口与接口详情页由 `scripts/build-pc-docs.mjs` 和 `scripts/pc-reference-docs.mjs` 生成；接口说明模板与参数释义在后者维护，验证数字来自已保存目录。生成文档不会发送 API 请求。

文档组织参考 [cv-cat/DouYin_Spider](https://github.com/cv-cat/DouYin_Spider) 的功能清单、快速开始和模块入口，以及其 API 方法对用途和参数的说明；Bilibili 的接口、客户端实现和验证结论由本仓库独立整理。

项目处于未发布研究阶段，版本 `0.0.0` 尚无稳定兼容承诺。[更新日志](CHANGELOG.md)
