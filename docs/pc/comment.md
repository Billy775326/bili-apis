# 评论与楼中楼

[功能导航](README.md) · [使用场景](usage.md) · [匿名快照](current.md) · [先前浏览器矩阵](full-validation.md) · [最新直接 HTTP](web-validation.md) · [受控私信](message.md)

本模块有 3 个读取别名，3 个通过匿名快照相关匿名 HTTP 字段用例。

## 接口列表

| 接口 | 用途 | 匿名快照状态 |
| --- | --- | --- |
| [评论主列表](#comment-main) | 读取视频普通评论及游标；匿名快照核对首屏和一次下一页。 | ✅ 匿名快照 HTTP 字段用例通过 |
| [楼中楼回复](#comment-replies) | 读取某条根评论下的楼中楼回复，并核对根评论及稿件身份。 | ✅ 匿名快照 HTTP 字段用例通过 |
| [评论区说明](#comment-subject) | 读取评论区的说明元数据。 | ✅ 匿名快照 HTTP 字段用例通过 |

## JavaScript 初始化

在仓库根目录的 `.mjs` 文件中使用以下初始化。环境和错误处理见[客户端说明](client.md)。

```js
import { BiliWebClient } from './src/web-client.mjs';
const client = new BiliWebClient();
```

<a id="comment-main"></a>

## 评论主列表

读取视频普通评论及游标；匿名快照核对首屏和一次下一页。

- 客户端别名：`comment.main`
- 请求：`GET https://api.bilibili.com/x/v2/reply/wbi/main`
- 匿名快照：✅ 匿名快照 HTTP 字段用例通过
- 登录态浏览器：字段用例通过；[完整矩阵](full-validation.md)
- 最新 Node HTTP：field-case-passed；[网页逐项结果](web-validation.md)
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：客户端自动取得公开 nav 数据并添加签名参数。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| oid | string 或 number | 是 | 无 | 资源 ID；本项目视频评论和笔记样本使用 aid |
| type | number 或数字字符串 | 否 | 1 | 资源或列表类型；取值按当前封装默认值 |
| mode | number 或数字字符串 | 否 | 3 | 评论模式；匿名快照仅核对默认值 3 |
| pagination_str | string | 否 | "{\"offset\":\"\"}" | JSON 字符串；首屏为空 offset，下一页使用服务端返回的游标 |
| plat | number 或数字字符串 | 否 | 1 | 评论请求平台参数，匿名快照默认 1 |
| web_location | number 或数字字符串 | 否 | 1315875 | 网页入口参数；不代表可以解除风控 |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call comment.main oid=10001
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('comment.main', {"oid":"10001"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.replies | 普通评论；不能用 top_replies 代替 |
| data.top_replies | 置顶评论，可能为空或 null |
| data.cursor.is_end | 是否明确结束 |
| data.cursor.pagination_reply.next_offset | 下一页游标，只在本地消费 |

### 使用说明

下一页请原样消费服务端游标并使用 JSON.stringify({ offset: nextOffset })；不要自行猜测页码或把游标写入公开文档。普通评论和置顶评论分别判断，历史其他视频仍有失败。

[匿名快照记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show comment.main
```

<a id="comment-replies"></a>

## 楼中楼回复

读取某条根评论下的楼中楼回复，并核对根评论及稿件身份。

- 客户端别名：`comment.replies`
- 请求：`GET https://api.bilibili.com/x/v2/reply/reply`
- 匿名快照：✅ 匿名快照 HTTP 字段用例通过
- 登录态浏览器：字段用例通过；[完整矩阵](full-validation.md)
- 最新 Node HTTP：field-case-passed；[网页逐项结果](web-validation.md)
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：此别名未启用 WBI 自动签名。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| oid | string 或 number | 是 | 无 | 资源 ID；本项目视频评论和笔记样本使用 aid |
| root | string 或 number | 是 | 无 | 根评论 ID，从评论响应的 rpid_str 取得 |
| type | number 或数字字符串 | 否 | 1 | 资源或列表类型；取值按当前封装默认值 |
| pn | number 或数字字符串 | 否 | 1 | 页码；客户端样本从 1 开始 |
| ps | number 或数字字符串 | 否 | 10 | 请求每页数量，不保证服务端实际返回相同条数 |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call comment.replies oid=10001 root=40001
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('comment.replies', {"oid":"10001","root":"40001"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.root.rpid_str / data.root.oid_str | 根评论和稿件身份 |
| data.replies | 楼中楼回复列表 |
| data.page | 分页元数据 |

### 使用说明

root 建议使用响应的 rpid_str 字符串；oid 必须与该根评论所属视频一致。

[匿名快照记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show comment.replies
```

<a id="comment-subject"></a>

## 评论区说明

读取评论区的说明元数据。

- 客户端别名：`comment.subject`
- 请求：`GET https://api.bilibili.com/x/v2/reply/subject/description`
- 匿名快照：✅ 匿名快照 HTTP 字段用例通过
- 登录态浏览器：字段用例通过；[完整矩阵](full-validation.md)
- 最新 Node HTTP：field-case-passed；[网页逐项结果](web-validation.md)
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：此别名未启用 WBI 自动签名。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| oid | string 或 number | 是 | 无 | 资源 ID；本项目视频评论和笔记样本使用 aid |
| type | number 或数字字符串 | 否 | 1 | 资源或列表类型；取值按当前封装默认值 |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call comment.subject oid=10001
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('comment.subject', {"oid":"10001"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.base | 评论区说明对象 |

[匿名快照记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show comment.subject
```
