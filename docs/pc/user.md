# 用户与空间

[功能导航](README.md) · [使用场景](usage.md) · [匿名快照](current.md) · [先前浏览器矩阵](full-validation.md) · [最新直接 HTTP](web-validation.md) · [受控私信](message.md)

本模块有 10 个读取别名，8 个通过匿名快照相关匿名 HTTP 字段用例。

## 接口列表

| 接口 | 用途 | 匿名快照状态 |
| --- | --- | --- |
| [公开用户资料](#user-info) | 读取公开用户资料；匿名快照因同类风控停止而跳过。 | ⏭ 匿名快照跳过 |
| [用户投稿列表](#user-uploads) | 读取用户投稿列表；匿名快照返回 HTTP 412，尚未通过。 | ⚠️ 风控或限速 |
| [空间合集与系列](#user-collections) | 读取公开空间的合集与系列列表。 | ✅ 匿名快照 HTTP 字段用例通过 |
| [空间内容计数](#user-counters) | 读取公开空间的投稿、专栏等内容计数。 | ✅ 匿名快照 HTTP 字段用例通过 |
| [空间公告](#user-notice) | 读取公开空间公告文本，允许空文本。 | ✅ 匿名快照 HTTP 字段用例通过 |
| [代表作](#user-masterpieces) | 读取空间代表作列表，允许合法空列表。 | ✅ 匿名快照 HTTP 字段用例通过 |
| [公开追番](#user-followedBangumi) | 读取目标空间可公开的追番列表。 | ✅ 匿名快照 HTTP 字段用例通过 |
| [最近游戏列表](#user-games) | 读取空间最近游戏列表及条数元数据。 | ✅ 匿名快照 HTTP 字段用例通过 |
| [空间专栏](#user-articles) | 读取空间专栏列表及分页元数据。 | ✅ 匿名快照 HTTP 字段用例通过 |
| [空间公开设置](#user-settings) | 读取空间公开展示设置，不修改账号配置。 | ✅ 匿名快照 HTTP 字段用例通过 |

## JavaScript 初始化

在仓库根目录的 `.mjs` 文件中使用以下初始化。环境和错误处理见[客户端说明](client.md)。

```js
import { BiliWebClient } from './src/web-client.mjs';
const client = new BiliWebClient();
```

<a id="user-info"></a>

## 公开用户资料

读取公开用户资料；匿名快照因同类风控停止而跳过。

- 客户端别名：`user.info`
- 请求：`GET https://api.bilibili.com/x/space/wbi/acc/info`
- 匿名快照：⏭ 匿名快照跳过
- 登录态浏览器：字段用例通过；[完整矩阵](full-validation.md)
- 最新 Node HTTP：field-case-passed；[网页逐项结果](web-validation.md)
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：客户端自动取得公开 nav 数据并添加签名参数。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| mid | string 或 number | 是 | 无 | 公开用户 UID |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call user.info mid=30001
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('user.info', {"mid":"30001"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.mid | 预期核对的用户标识 |
| data.name / data.face | 预期公开昵称与头像；匿名快照未请求 |

### 匿名快照限制

- HTTP 未请求 / 业务码 未知；same-category-risk-response。

[匿名快照记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show user.info
```

<a id="user-uploads"></a>

## 用户投稿列表

读取用户投稿列表；匿名快照返回 HTTP 412，尚未通过。

- 客户端别名：`user.uploads`
- 请求：`GET https://api.bilibili.com/x/space/wbi/arc/search`
- 匿名快照：⚠️ 风控或限速
- 登录态浏览器：字段用例通过；[完整矩阵](full-validation.md)
- 最新 Node HTTP：field-case-passed；[网页逐项结果](web-validation.md)
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：客户端自动取得公开 nav 数据并添加签名参数。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| mid | string 或 number | 是 | 无 | 公开用户 UID |
| pn | number 或数字字符串 | 否 | 1 | 页码；客户端样本从 1 开始 |
| ps | number 或数字字符串 | 否 | 25 | 请求每页数量，不保证服务端实际返回相同条数 |
| order | string | 否 | "pubdate" | 排序参数；投稿封装默认 pubdate，其他值未核对 |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call user.uploads mid=30001
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('user.uploads', {"mid":"30001"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.list.vlist | 客户端预期核对的稿件列表 |
| data.page | 客户端预期分页对象；匿名快照未取得成功业务响应 |

### 匿名快照限制

- HTTP 412 / 业务码 -412。

[匿名快照记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show user.uploads
```

<a id="user-collections"></a>

## 空间合集与系列

读取公开空间的合集与系列列表。

- 客户端别名：`user.collections`
- 请求：`GET https://api.bilibili.com/x/polymer/web-space/home/seasons_series`
- 匿名快照：✅ 匿名快照 HTTP 字段用例通过
- 登录态浏览器：字段用例通过；[完整矩阵](full-validation.md)
- 最新 Node HTTP：field-case-passed；[网页逐项结果](web-validation.md)
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：此别名未启用 WBI 自动签名。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| mid | string 或 number | 是 | 无 | 公开用户 UID |
| page_num | number 或数字字符串 | 否 | 1 | 页码，客户端默认 1 |
| page_size | number 或数字字符串 | 否 | 10 | 请求每页数量 |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call user.collections mid=30001
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('user.collections', {"mid":"30001"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.items_lists.seasons_list | 合集列表 |
| data.items_lists.series_list | 系列列表 |

[匿名快照记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show user.collections
```

<a id="user-counters"></a>

## 空间内容计数

读取公开空间的投稿、专栏等内容计数。

- 客户端别名：`user.counters`
- 请求：`GET https://api.bilibili.com/x/space/navnum`
- 匿名快照：✅ 匿名快照 HTTP 字段用例通过
- 登录态浏览器：字段用例通过；[完整矩阵](full-validation.md)
- 最新 Node HTTP：field-case-passed；[网页逐项结果](web-validation.md)
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：此别名未启用 WBI 自动签名。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| mid | string 或 number | 是 | 无 | 公开用户 UID |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call user.counters mid=30001
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('user.counters', {"mid":"30001"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.video / data.article | 视频与专栏计数 |

[匿名快照记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show user.counters
```

<a id="user-notice"></a>

## 空间公告

读取公开空间公告文本，允许空文本。

- 客户端别名：`user.notice`
- 请求：`GET https://api.bilibili.com/x/space/notice`
- 匿名快照：✅ 匿名快照 HTTP 字段用例通过
- 登录态浏览器：字段用例通过；[完整矩阵](full-validation.md)
- 最新 Node HTTP：field-case-passed；[网页逐项结果](web-validation.md)
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：此别名未启用 WBI 自动签名。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| mid | string 或 number | 是 | 无 | 公开用户 UID |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call user.notice mid=30001
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('user.notice', {"mid":"30001"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data | 空间公告字符串 |

[匿名快照记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show user.notice
```

<a id="user-masterpieces"></a>

## 代表作

读取空间代表作列表，允许合法空列表。

- 客户端别名：`user.masterpieces`
- 请求：`GET https://api.bilibili.com/x/space/masterpiece`
- 匿名快照：✅ 匿名快照 HTTP 字段用例通过
- 登录态浏览器：字段用例通过；[完整矩阵](full-validation.md)
- 最新 Node HTTP：field-case-passed；[网页逐项结果](web-validation.md)
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：此别名未启用 WBI 自动签名。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| vmid | string 或 number | 是 | 无 | 目标公开用户 UID |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call user.masterpieces vmid=30001
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('user.masterpieces', {"vmid":"30001"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data[] | 代表作列表，可为空 |
| data[].aid / data[].bvid | 非空条目的稿件标识 |

[匿名快照记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show user.masterpieces
```

<a id="user-followedBangumi"></a>

## 公开追番

读取目标空间可公开的追番列表。

- 客户端别名：`user.followedBangumi`
- 请求：`GET https://api.bilibili.com/x/space/bangumi/follow/list`
- 匿名快照：✅ 匿名快照 HTTP 字段用例通过
- 登录态浏览器：字段用例通过；[完整矩阵](full-validation.md)
- 最新 Node HTTP：field-case-passed；[网页逐项结果](web-validation.md)
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：客户端自动取得公开 nav 数据并添加签名参数。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| vmid | string 或 number | 是 | 无 | 目标公开用户 UID |
| type | number 或数字字符串 | 否 | 1 | 资源或列表类型；取值按当前封装默认值 |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call user.followedBangumi vmid=30001
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('user.followedBangumi', {"vmid":"30001"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.list | 公开追番列表 |
| data.total | 总条数元数据 |

[匿名快照记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show user.followedBangumi
```

<a id="user-games"></a>

## 最近游戏列表

读取空间最近游戏列表及条数元数据。

- 客户端别名：`user.games`
- 请求：`GET https://api.bilibili.com/x/space/lastplaygame/v2`
- 匿名快照：✅ 匿名快照 HTTP 字段用例通过
- 登录态浏览器：字段用例通过；[完整矩阵](full-validation.md)
- 最新 Node HTTP：field-case-passed；[网页逐项结果](web-validation.md)
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：客户端自动取得公开 nav 数据并添加签名参数。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| mid | string 或 number | 是 | 无 | 公开用户 UID |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call user.games mid=30001
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('user.games', {"mid":"30001"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.list | 游戏列表 |
| data.total_count | 总条数元数据 |

[匿名快照记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show user.games
```

<a id="user-articles"></a>

## 空间专栏

读取空间专栏列表及分页元数据。

- 客户端别名：`user.articles`
- 请求：`GET https://api.bilibili.com/x/space/wbi/article`
- 匿名快照：✅ 匿名快照 HTTP 字段用例通过
- 登录态浏览器：response-assertion-failed；[完整矩阵](full-validation.md)
- 最新 Node HTTP：field-case-passed；[网页逐项结果](web-validation.md)
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：客户端自动取得公开 nav 数据并添加签名参数。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| mid | string 或 number | 是 | 无 | 公开用户 UID |
| pn | number 或数字字符串 | 否 | 1 | 页码；客户端样本从 1 开始 |
| ps | number 或数字字符串 | 否 | 10 | 请求每页数量，不保证服务端实际返回相同条数 |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call user.articles mid=30001
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('user.articles', {"mid":"30001"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.articles | 专栏列表 |
| data.count | 条数元数据 |

[匿名快照记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show user.articles
```

<a id="user-settings"></a>

## 空间公开设置

读取空间公开展示设置，不修改账号配置。

- 客户端别名：`user.settings`
- 请求：`GET https://api.bilibili.com/x/space/setting`
- 匿名快照：✅ 匿名快照 HTTP 字段用例通过
- 登录态浏览器：字段用例通过；[完整矩阵](full-validation.md)
- 最新 Node HTTP：field-case-passed；[网页逐项结果](web-validation.md)
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：此别名未启用 WBI 自动签名。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| mid | string 或 number | 是 | 无 | 公开用户 UID |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call user.settings mid=30001
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('user.settings', {"mid":"30001"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.privacy | 公开展示配置 |
| data.index_order | 空间版块顺序 |

[匿名快照记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show user.settings
```

## 其他网页观察请求

以下地址只保留网页观测，尚无本仓库客户端调用封装；配置、票据和辅助 POST 的出现不代表已验证主动调用。

| 方法 | URL | 观察到的参数名 |
| --- | --- | --- |
| GET | https://api.bilibili.com/x/space/coin/video | vmid, web_location, x-bili-device-req-json, x-bili-locale-json |
| GET | https://api.bilibili.com/x/space/like/video | vmid, web_location, x-bili-device-req-json, x-bili-locale-json |
| GET | https://api.bilibili.com/x/space/reservation | vmid, w_rid, web_location, wts, x-bili-device-req-json, x-bili-locale-json |
| GET | https://api.bilibili.com/x/space/upstat | mid, web_location, x-bili-device-req-json, x-bili-locale-json |
| GET | https://api.bilibili.com/x/space/v2/myinfo | web_location, x-bili-device-req-json, x-bili-locale-json |
| GET | https://api.bilibili.com/x/space/wbi/acc/relation | mid, w_rid, web_location, wts, x-bili-device-req-json, x-bili-locale-json |
