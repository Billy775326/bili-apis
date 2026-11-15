# 搜索

[功能导航](README.md) · [使用场景](usage.md) · [本轮验证](current.md)

本模块有 4 个读取别名，4 个通过本轮相关匿名 HTTP 字段用例。

## 接口列表

| 接口 | 用途 | 本轮状态 |
| --- | --- | --- |
| [视频搜索](#search-videos) | 按关键词读取视频搜索结果。 | ✅ 本轮匿名 HTTP 字段用例通过 |
| [综合搜索](#search-all) | 按关键词读取综合搜索结果；结果可能按内容类型分组。 | ✅ 本轮匿名 HTTP 字段用例通过 |
| [默认搜索词](#search-default) | 读取当前默认搜索词及展示文案。 | ✅ 本轮匿名 HTTP 字段用例通过 |
| [搜索建议](#search-suggest) | 读取输入关键词的搜索建议。 | ✅ 本轮匿名 HTTP 字段用例通过 |

## JavaScript 初始化

在仓库根目录的 `.mjs` 文件中使用以下初始化。环境和错误处理见[客户端说明](client.md)。

```js
import { BiliWebClient } from './src/web-client.mjs';
const client = new BiliWebClient();
```

<a id="search-videos"></a>

## 视频搜索

按关键词读取视频搜索结果。

- 客户端别名：`search.videos`
- 请求：`GET https://api.bilibili.com/x/web-interface/wbi/search/type`
- 验证：✅ 本轮匿名 HTTP 字段用例通过
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：客户端自动取得公开 nav 数据并添加签名参数。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| keyword | string | 是 | 无 | 搜索关键词 |
| search_type | string | 否 | "video" | 搜索分类；视频搜索封装默认 video |
| page | number 或数字字符串 | 否 | 1 | 页码；仅承诺已记录样本 |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call search.videos keyword=bilibili
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('search.videos', {"keyword":"bilibili"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.page | 返回页码 |
| data.result | 视频搜索结果列表 |
| data.numResults / data.numPages | 响应中观察到的条数和页数元数据 |

### 使用说明

本轮只核对首页样本；page 参数可传递，不代表所有页码或结果总数均已验证。

[本轮验证记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show search.videos
```

<a id="search-all"></a>

## 综合搜索

按关键词读取综合搜索结果；结果可能按内容类型分组。

- 客户端别名：`search.all`
- 请求：`GET https://api.bilibili.com/x/web-interface/wbi/search/all/v2`
- 验证：✅ 本轮匿名 HTTP 字段用例通过
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：客户端自动取得公开 nav 数据并添加签名参数。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| keyword | string | 是 | 无 | 搜索关键词 |
| page | number 或数字字符串 | 否 | 1 | 页码；仅承诺已记录样本 |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call search.all keyword=bilibili
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('search.all', {"keyword":"bilibili"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.page | 返回页码 |
| data.result | 综合搜索结果列表或分组 |
| data.numResults / data.numPages | 响应中观察到的条数和页数元数据 |

### 使用说明

本轮只核对首页样本；综合结果的分组结构与视频搜索不同。

[本轮验证记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show search.all
```

<a id="search-default"></a>

## 默认搜索词

读取当前默认搜索词及展示文案。

- 客户端别名：`search.default`
- 请求：`GET https://api.bilibili.com/x/web-interface/wbi/search/default`
- 验证：✅ 本轮匿名 HTTP 字段用例通过
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：客户端自动取得公开 nav 数据并添加签名参数。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

当前封装没有必填或默认查询参数。

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call search.default
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('search.default');
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.name | 默认搜索词 |
| data.show_name | 展示文案 |

[本轮验证记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show search.default
```

<a id="search-suggest"></a>

## 搜索建议

读取输入关键词的搜索建议。

- 客户端别名：`search.suggest`
- 请求：`GET https://api.bilibili.com/x/web-interface/suggest`
- 验证：✅ 本轮匿名 HTTP 字段用例通过
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：此别名未启用 WBI 自动签名。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| term | string | 是 | 无 | 搜索建议关键词 |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call search.suggest term=bilibili
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('search.suggest', {"term":"[REDACTED_INPUT]"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.result.tag | 建议条目列表 |
| data.result.tag[].value | 建议词 |

[本轮验证记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show search.suggest
```
