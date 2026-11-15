# 其他网页请求

[功能导航](README.md) · [使用场景](usage.md) · [本轮验证](current.md)

本模块有 2 个读取别名，1 个通过本轮相关匿名 HTTP 字段用例。

## 接口列表

| 接口 | 用途 | 本轮状态 |
| --- | --- | --- |
| [公开笔记](#note-publicList) | 读取公开视频的公开笔记列表；本轮 page 为 null，未通过。 | ⚠️ 字段断言未通过 |
| [笔记入口状态](#note-availability) | 读取稿件的笔记入口状态。 | ✅ 本轮匿名 HTTP 字段用例通过 |

## JavaScript 初始化

在仓库根目录的 `.mjs` 文件中使用以下初始化。环境和错误处理见[客户端说明](client.md)。

```js
import { BiliWebClient } from './src/web-client.mjs';
const client = new BiliWebClient();
```

<a id="note-publicList"></a>

## 公开笔记

读取公开视频的公开笔记列表；本轮 page 为 null，未通过。

- 客户端别名：`note.publicList`
- 请求：`GET https://api.bilibili.com/x/note/publish/list/archive`
- 验证：⚠️ 字段断言未通过
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：此别名未启用 WBI 自动签名。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| oid | string 或 number | 是 | 无 | 资源 ID；本项目视频评论和笔记样本使用 aid |
| oid_type | number 或数字字符串 | 否 | 0 | 笔记资源类型，本轮仅使用默认值 0 |
| pn | number 或数字字符串 | 否 | 1 | 页码；客户端样本从 1 开始 |
| ps | number 或数字字符串 | 否 | 3 | 请求每页数量，不保证服务端实际返回相同条数 |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call note.publicList oid=10001
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('note.publicList', {"oid":"10001"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.list | 笔记列表；本轮为 null |
| data.page | 预期分页对象；本轮为 null |
| data.show_public_note | 展示标志 |

### 本轮限制

- HTTP 200 / 业务码 0；未通过断言：note-page。

[本轮验证记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show note.publicList
```

<a id="note-availability"></a>

## 笔记入口状态

读取稿件的笔记入口状态。

- 客户端别名：`note.availability`
- 请求：`GET https://api.bilibili.com/x/note/is_forbid`
- 验证：✅ 本轮匿名 HTTP 字段用例通过
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：此别名未启用 WBI 自动签名。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| aid | string 或 number | 是 | 无 | 视频稿件 ID，可由 video.detail 的 data.aid 取得 |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call note.availability aid=10001
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('note.availability', {"aid":"10001"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.forbid_note_entrance | 是否关闭笔记入口 |

[本轮验证记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show note.availability
```

## 其他网页观察请求

以下地址只保留网页观测，尚无本仓库客户端调用封装；配置、票据和辅助 POST 的出现不代表已验证主动调用。

| 方法 | URL | 观察到的参数名 |
| --- | --- | --- |
| GET | https://api.bilibili.com/x/activity_components/eva_operation/object | object_id |
| GET | https://api.bilibili.com/x/activity_components/exchange/list | rewards_id, score_id |
| GET | https://api.bilibili.com/x/activity_components/exchange/merry_go_round | num, score_id |
| GET | https://api.bilibili.com/x/esports/component/contests | division, sid |
| GET | https://api.bilibili.com/x/esports/contest/series/detail | series_id |
| GET | https://api.bilibili.com/x/esports/contest/team/detail | team_ids |
| GET | https://api.bilibili.com/x/esports/season/series/knockout_match | series_id |
| GET | https://api.bilibili.com/x/esports/stats/hero2/rank | season_id, top |
| GET | https://api.bilibili.com/x/task/totalv2 | task_ids, web_location |
| GET | https://api.bilibili.com/x/web-interface/relation | mid |
