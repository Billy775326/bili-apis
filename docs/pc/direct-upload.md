# 直接 HTTP 上传与投稿

本页提供独立 Node HTTP 客户端 `BiliUploadClient`。上传、封面、投稿与状态读回均直接发送 HTTP 请求，不依赖 DOM、文件选择器、模拟点击、浏览器弹窗或页面脚本。

本次真实验证使用专用测试号与自生成 15 秒 MP4，**UI 操作 0 次、人工确认 0 次**。初始化、分片地址、字节 PUT、合并、封面和投稿成功；后续直接 GET 确认稿件归属、视频资源标识、AI 声明与 15 秒时长，公开详情也已可读。[完整脱敏证据](../../evidence/pc-direct-upload-validation.json)

[功能导航](README.md) · [写操作记录](write-validation.md) · [固定目录矩阵](full-validation.md)

## 与此前 UI 测试的区别

此前的投稿通过官方网页完成，用户曾手动关闭确认弹窗。这只能作为“人工辅助 UI 成功及请求观察”，不能证明独立接口或无人值守流程成功；历史记录已补充这一限制。

本次仅用 CDP 从用户已登录的专用隔离浏览器读取会话到 Node 内存，未执行页面脚本、按钮、文件控件或弹窗处理。HTTP 客户端本身无需 Chrome，调用者也可以从自己的本地会话管理器传入 Cookie。

该实测证明这条 HTTP 链路可以在没有页面确认操作的情况下完成。它不说明所有确认都能忽略：服务端的 CSRF、参数类型、验证码与权限检查仍然生效；客户端遇到验证或业务拒绝会停止。

## 环境与最小调用

在仓库根目录使用 Node.js 24.11 或更新版本。客户端无第三方运行时依赖；完整离线测试需要安装项目开发依赖。

```js
import fs from 'node:fs';
import { BiliUploadClient } from './src/pc-upload-client.mjs';

const client = new BiliUploadClient({ cookie: process.env.BILI_COOKIE });
const session = await client.session();
const preflight = await client.creatorPreflight();
// 从真实预检/分区响应选择适用参数，不把示例数字当成自己的有效分区。
const video = await client.uploadVideo(fs.readFileSync('./my-test.mp4'));
const cover = await client.uploadCover(fs.readFileSync('./my-cover.png'));
console.log({ uploadedBytes: video.bytes, parts: video.parts });
```

`BILI_COOKIE` 只在本机环境设置；不要写进示例、Git、聊天或命令参数。默认 User-Agent 是研究客户端标识，可通过构造参数 `userAgent` 指定调用者自己的正常请求标识。在线实测使用与现有隔离会话一致的 Chrome User-Agent；不能承诺任意环境默认值都会被服务端接受。

上例会真实上传视频和封面，但尚未投稿。`video.filename/cid`、`cover.url` 是后续投稿输入，只保留在调用者内存或忽略目录。响应观察回调仅包含阶段、无查询参数的地址、状态码、字段名和响应 SHA-256。

## 可执行完整示例

模板中的分区和声明 ID 为合成占位值，必须根据当前接口响应替换。文件内容应属于你或已获授权。

在本地忽略目录创建配置，例如 `.local/upload-config.json`：

```json
{
  "video": ".local/my-test.mp4",
  "cover": ".local/my-cover.png",
  "title": "API synthetic test",
  "desc": "Owned synthetic clip for direct HTTP API validation.",
  "tag": "接口测试",
  "tid": 1,
  "humanType2": 1,
  "creationStatementId": 1
}
```

执行前让本地进程能读取 `BILI_COOKIE`。示例先验证登录与声明是否可选，再上传、投稿并从创作者接口核对所有者及视频标识。

```sh
node examples/pc-upload.mjs --help
node examples/pc-upload.mjs --run --config .local/upload-config.json --checkpoint .local/unique-upload.json
```

示例要求明确传入 `--run`，默认无参数只显示用法。checkpoint 必须位于 `.local` 且尚不存在；它会保存本次上传结果和投稿阶段，不含 Cookie、CSRF 或上传 token。若发布请求超时或进程退出，重新运行会因 checkpoint 已存在而停止，不能以“再点一次”的方式制造重复稿件。先读取 checkpoint 中的结果与 `creatorVideo(aid)` 状态，再决定后续操作；示例不自动恢复或删除稿件。

在线验证驱动使用相同 `BiliUploadClient` 方法，但完整示例 CLI 没有再次在线投稿，以免制造额外测试稿件。CLI 的无参数/帮助/重复 checkpoint 行为另做离线检查。

## 方法、参数与返回

| 方法 | 输入与限制 | 返回 / 成功判据 |
| --- | --- | --- |
| session() | 构造时传入本地授权 cookie | 已登录且 mid 为有效数值；mid 供调用者核对所有权 |
| creatorPreflight() | GET /x/vupre/web/archive/pre | 原始 data；包含当前可选 neutral_mark.mark_list 等配置 |
| uploadVideo(bytes, options) | Uint8Array；1 字节–32 MiB；name 默认为 synthetic-api-test.mp4，仅接受安全 MP4 文件名 | cid、filename、bytes、parts、sha256；服务端决定分片大小，实际 ETag 参与合并 |
| uploadCover(bytes) | PNG 字节；1 字节–4 MiB | url；官方图片域名，规范为 HTTPS |
| publish(parameters) | 单视频、非空 title、正整数 tid、videos[0].filename；其余字段由调用者按真实预检配置提供 | 原始投稿 data，本次包含 aid、bvid；并不代表已经审核通过 |
| creatorVideo(aid) | 正整数，自有稿件 ID | 原始创作者 data，核对 archive.mid/aid/bvid 和 videos[].cid/filename |
| videoDetail(bvid) | BV + 10 位字母数字 | 原始公开详情 data；审核或传播延迟可能返回 -404 |

构造参数：`cookie` 必填；`timeoutMs` 默认 30000，范围 1–180000 毫秒；`fetchImpl` 默认 Node 全局 fetch；`onObservation` 默认空函数；`userAgent` 默认 `bili-apis-direct-upload/0.0.0`。视频暂不支持流式大文件、断点续传、并发竞速、多 P 或自动上传重试。

### 分片上传

主机为 `https://member.bilibili.com`。

| 阶段 | 方法与路径 | 本次请求字段 |
| --- | --- | --- |
| 初始化 | POST /upload/multipart/new | JSON：profile=ugcfx/bup、init_params={}、name、size |
| 获取分片地址 | POST /upload/multipart/part | JSON：uri、upload_token、part_number（从 1 开始） |
| 发送字节 | 返回地址及 method，本次为 PUT | 本片原始字节；不携带账号 Cookie，不记录签名 URL；保存响应 ETag 到内存 |
| 合并 | POST /upload/multipart/complete | JSON：uri、upload_token、parts[].part_number/etag、upload_params.biz_id/profile |

分片地址限制为审阅过的 Bilibili 上传域名及 HTTPS，不跟随重定向，不把账号 Cookie 转发到对象存储。任一分片失败或缺少 ETag 都停止，不发送合并请求。

本次真实文件仅占一个分片；多分片字节顺序、ETag 汇总及中途失败停止使用离线替身验证，没有用线上大文件冒充覆盖。

### 封面

`POST /x/vu/web/cover/up` 使用 multipart，字段为 `cover` 和 `csrf`。**cover 是 `data:image/png;base64,...` 字符串，不是 File/Blob 文件部分。** 客户端从 PNG 字节自行编码；服务端返回的官方 `hdslb.com/biliimg.com` 图片地址会规范为 HTTPS。

### 投稿

`POST /x/vu/web/add/v3` 使用 JSON，请求查询包含 `csrf`、`web_location=333.1024`、`t`；客户端同时在 JSON 中放置 CSRF。下面仅展示数据形状，资源标识均为合成占位值，不能直接作为有效投稿发送。

```js
const parameters = {
  title: 'API synthetic test',
  copyright: 1,
  tid: 1,
  human_type2: 1,
  tag: '接口测试',
  desc: 'Owned synthetic clip for API validation.',
  cover: 'https://archive.biliimg.com/SYNTHETIC.png',
  videos: [{ filename: 'SYNTHETIC_FILENAME', title: 'API test', desc: '', cid: 1 }],
  creation_statement: { id: 1 },
  interactive: 0,
  recreate: -1,
  up_close_reply: false,
  up_close_danmu: false
};
```

实际调用应将 `cover`、`videos`、分区及声明替换为上传和真实配置响应得到的值。原型字段表不是完整服务端 Schema；本次只承诺已记录样本，不承诺所有分区、角色、会员权益或未来版本。

## 本次失败与修正

| 观察 | 后续动作与结论 |
| --- | --- |
| 二进制封面 multipart 返回 -400 | 根据官方调用链改成 data URL 字符串后 code=0 |
| 封面 code=0，客户端拒绝返回地址 | 补充官方 biliimg 域与 HTTP→HTTPS 规范；相同响应哈希保留 |
| 投稿 JSON 仅传 body CSRF，返回 -111 | 按官方 CSRF 中间件补 query CSRF 后进入参数检查 |
| 投稿返回 21001 | 读取新版 human_type2 并对齐 Content-Type 后仍失败；这些尝试不能算修复成功 |
| 评论/弹幕开关由数字 0 改为布尔 false | 下一次投稿 code=0；加入错误类型在网络前拒绝的回归测试 |
| 刚投稿后公开详情 -404 | 保留初次失败；后续创作者及公开 GET 均成功，稿件 state=0、duration=15 |

对明确拒绝的请求，仅在找到具体输入差异后进行显式修正测试；客户端本身没有自动重试逻辑。对传输超时等结果未知的投稿应先读回确认，不能直接再次发布。

## 证据、资源状态与范围

- [直接 HTTP 线上证据](../../evidence/pc-direct-upload-validation.json)：保存请求顺序、哈希、初始失败和最终状态。
- [官方协议来源](../../evidence/pc-upload-protocol.json)：上传子应用的脚本 URL、SHA-256、字段位置及 UTF-16/字节偏移。
- 自有账号中暂留两条合成测试视频：此前 UI 生成的一条、本次直接 HTTP 生成的一条；本次没有测试删除稿件。
- 源脚本正文、会话和真实稿件标识不提交。脱敏哈希不能替代原始流量，读者无法只凭公开材料重建账号现场。
- 本次只验证上传、投稿与元数据读回，没有下载媒体或证明播放器实际播放，也没有测试验证码、特殊权限或付费流程。

生成器只离线读取已有材料：

```sh
node scripts/extract-pc-upload-protocol.mjs --manifest .local/pc-direct-upload/assets.json --output evidence/pc-upload-protocol.json
node scripts/build-pc-direct-upload-validation.mjs --input .local/pc-direct-upload/direct-results.json
npm test
npm run docs:generate
```
