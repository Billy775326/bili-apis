# 播放与在线人数

[功能导航](README.md) · [使用场景](usage.md) · [匿名快照](current.md) · [登录态全量矩阵](full-validation.md)

本模块有 4 个读取别名，4 个通过匿名快照相关匿名 HTTP 字段用例。

## 接口列表

| 接口 | 用途 | 匿名快照状态 |
| --- | --- | --- |
| [在线观看人数](#video-online) | 读取目标稿件及分 P 的在线人数显示信息。 | ✅ 匿名快照 HTTP 字段用例通过 |
| [播放器与字幕信息](#playback-info) | 读取播放器及字幕元数据。 | ✅ 匿名快照 HTTP 字段用例通过 |
| [播放地址元数据](#playback-url) | 读取播放资源元数据；本项目没有验证媒体下载或权益。 | ✅ 匿名快照 HTTP 字段用例通过 |
| [广播连接配置](#playback-broadcastServers) | 读取网页广播连接的域名、节点和端口配置，不建立连接。 | ✅ 匿名快照 HTTP 字段用例通过 |

## JavaScript 初始化

在仓库根目录的 `.mjs` 文件中使用以下初始化。环境和错误处理见[客户端说明](client.md)。

```js
import { BiliWebClient } from './src/web-client.mjs';
const client = new BiliWebClient();
```

<a id="video-online"></a>

## 在线观看人数

读取目标稿件及分 P 的在线人数显示信息。

- 客户端别名：`video.online`
- 请求：`GET https://api.bilibili.com/x/player/online/total`
- 匿名快照：✅ 匿名快照 HTTP 字段用例通过
- 登录态浏览器：字段用例通过；[完整矩阵](full-validation.md)
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：此别名未启用 WBI 自动签名。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| aid | string 或 number | 是 | 无 | 视频稿件 ID，可由 video.detail 的 data.aid 取得 |
| cid | string 或 number | 是 | 无 | 分 P 内容 ID，可由 video.detail 或 video.pages 取得 |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call video.online aid=10001 cid=20001
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('video.online', {"aid":"10001","cid":"20001"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.total | 显示人数，样本为字符串 |
| data.show_switch | 显示配置 |

[匿名快照记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show video.online
```

<a id="playback-info"></a>

## 播放器与字幕信息

读取播放器及字幕元数据。

- 客户端别名：`playback.info`
- 请求：`GET https://api.bilibili.com/x/player/wbi/v2`
- 匿名快照：✅ 匿名快照 HTTP 字段用例通过
- 登录态浏览器：字段用例通过；[完整矩阵](full-validation.md)
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：客户端自动取得公开 nav 数据并添加签名参数。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| aid | string 或 number | 是 | 无 | 视频稿件 ID，可由 video.detail 的 data.aid 取得 |
| cid | string 或 number | 是 | 无 | 分 P 内容 ID，可由 video.detail 或 video.pages 取得 |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call playback.info aid=10001 cid=20001
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('playback.info', {"aid":"10001","cid":"20001"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.aid / data.cid | 用于核对请求目标 |
| data.subtitle | 字幕元数据，不等于已下载字幕 |

[匿名快照记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show playback.info
```

<a id="playback-url"></a>

## 播放地址元数据

读取播放资源元数据；本项目没有验证媒体下载或权益。

- 客户端别名：`playback.url`
- 请求：`GET https://api.bilibili.com/x/player/wbi/playurl`
- 匿名快照：✅ 匿名快照 HTTP 字段用例通过
- 登录态浏览器：字段用例通过；[完整矩阵](full-validation.md)
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：客户端自动取得公开 nav 数据并添加签名参数。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| bvid | string | 是 | 无 | BV 形式的视频标识；示例值需替换 |
| cid | string 或 number | 是 | 无 | 分 P 内容 ID，可由 video.detail 或 video.pages 取得 |
| qn | number 或数字字符串 | 否 | 32 | 期望清晰度代码；实际清晰度查看响应字段 |
| fnval | number 或数字字符串 | 否 | 16 | 播放器能力标记；匿名快照默认 16 |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call playback.url bvid=BV1EXAMPLE01 cid=20001
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('playback.url', {"bvid":"BV1EXAMPLE01","cid":"20001"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.quality | 实际返回清晰度代码 |
| data.dash.video / data.durl | 播放资源列表；返回形式以实际响应为准 |

### 使用说明

只核对播放元数据字段；没有测试媒体下载、会员内容或地区权益。

[匿名快照记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show playback.url
```

<a id="playback-broadcastServers"></a>

## 广播连接配置

读取网页广播连接的域名、节点和端口配置，不建立连接。

- 客户端别名：`playback.broadcastServers`
- 请求：`GET https://api.bilibili.com/x/web-interface/broadcast/servers`
- 匿名快照：✅ 匿名快照 HTTP 字段用例通过
- 登录态浏览器：字段用例通过；[完整矩阵](full-validation.md)
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：此别名未启用 WBI 自动签名。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| platform | string | 否 | "web" | 网页平台标记，默认 web |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call playback.broadcastServers
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('playback.broadcastServers');
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.domain | 广播服务域名 |
| data.nodes | 节点列表 |

[匿名快照记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show playback.broadcastServers
```

## 其他网页观察请求

以下地址只保留网页观测，尚无本仓库客户端调用封装；配置、票据和辅助 POST 的出现不代表已验证主动调用。

| 方法 | URL | 观察到的参数名 |
| --- | --- | --- |
| GET | https://api.bilibili.com/x/esports/stats/player/kda/rank | season_id, top |
| GET | https://api.bilibili.com/x/esports/stats/player/mvp/rank | season_id, top |
| GET | https://api.bilibili.com/x/v2/dm/wbi/web/seg.so | oid, pe, pid, ps, pull_mode, segment_index, type, w_rid, web_location, wts, x-bili-device-req-json, x-bili-locale-json |
| GET | https://api.bilibili.com/x/v2/dm/web/view | duration, oid, pid, type, w_rid, web_location, without_subtitle, wts, x-bili-device-req-json, x-bili-locale-json |
| GET | https://api.bilibili.com/x/v2/subtitle/web/view | arc_video_language, context_ext, cur_production_type, oid, pid, playlist_switch, type, w_rid, web_location, wts, x-bili-device-req-json, x-bili-locale-json |
