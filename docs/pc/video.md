# 视频详情与关联内容

[功能导航](README.md) · [使用场景](usage.md) · [本轮验证](current.md)

本模块有 5 个读取别名，5 个通过本轮相关匿名 HTTP 字段用例。

## 接口列表

| 接口 | 用途 | 本轮状态 |
| --- | --- | --- |
| [视频详情及内嵌统计](#video-detail) | 读取单个视频详情、稿件和分 P 标识及内嵌统计。 | ✅ 本轮匿名 HTTP 字段用例通过 |
| [分 P 列表](#video-pages) | 读取视频的分 P 列表，取得播放接口需要的 cid。 | ✅ 本轮匿名 HTTP 字段用例通过 |
| [相关视频](#video-related) | 读取与目标视频相关的推荐条目。 | ✅ 本轮匿名 HTTP 字段用例通过 |
| [视频标签](#video-tags) | 读取目标视频的标签列表。 | ✅ 本轮匿名 HTTP 字段用例通过 |
| [视频详情聚合](#video-detailBundle) | 读取详情、相关推荐等聚合信息；历史和本轮结果存在差异。 | ✅ 本轮匿名 HTTP 字段用例通过 |

## JavaScript 初始化

在仓库根目录的 `.mjs` 文件中使用以下初始化。环境和错误处理见[客户端说明](client.md)。

```js
import { BiliWebClient } from './src/web-client.mjs';
const client = new BiliWebClient();
```

<a id="video-detail"></a>

## 视频详情及内嵌统计

读取单个视频详情、稿件和分 P 标识及内嵌统计。

- 客户端别名：`video.detail`
- 请求：`GET https://api.bilibili.com/x/web-interface/view`
- 验证：✅ 本轮匿名 HTTP 字段用例通过
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：此别名未启用 WBI 自动签名。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| bvid | string | 是 | 无 | BV 形式的视频标识；示例值需替换 |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call video.detail bvid=BV1EXAMPLE01
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('video.detail', {"bvid":"BV1EXAMPLE01"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.bvid | 视频 BV 标识 |
| data.aid / data.cid | 稿件和默认分 P 标识 |
| data.pages | 分 P 列表 |
| data.stat | 视频统计，字段随服务端变化 |

[本轮验证记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show video.detail
```

<a id="video-pages"></a>

## 分 P 列表

读取视频的分 P 列表，取得播放接口需要的 cid。

- 客户端别名：`video.pages`
- 请求：`GET https://api.bilibili.com/x/player/pagelist`
- 验证：✅ 本轮匿名 HTTP 字段用例通过
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：此别名未启用 WBI 自动签名。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| bvid | string | 是 | 无 | BV 形式的视频标识；示例值需替换 |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call video.pages bvid=BV1EXAMPLE01
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('video.pages', {"bvid":"BV1EXAMPLE01"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data[] | 分 P 列表 |
| data[].cid / data[].page | 内容标识与分 P 序号 |

[本轮验证记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show video.pages
```

<a id="video-related"></a>

## 相关视频

读取与目标视频相关的推荐条目。

- 客户端别名：`video.related`
- 请求：`GET https://api.bilibili.com/x/web-interface/archive/related`
- 验证：✅ 本轮匿名 HTTP 字段用例通过
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：此别名未启用 WBI 自动签名。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| bvid | string | 是 | 无 | BV 形式的视频标识；示例值需替换 |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call video.related bvid=BV1EXAMPLE01
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('video.related', {"bvid":"BV1EXAMPLE01"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data[] | 关联视频列表 |
| data[].bvid / data[].title | 关联稿件标识与标题 |

[本轮验证记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show video.related
```

<a id="video-tags"></a>

## 视频标签

读取目标视频的标签列表。

- 客户端别名：`video.tags`
- 请求：`GET https://api.bilibili.com/x/tag/archive/tags`
- 验证：✅ 本轮匿名 HTTP 字段用例通过
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：此别名未启用 WBI 自动签名。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| bvid | string | 是 | 无 | BV 形式的视频标识；示例值需替换 |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call video.tags bvid=BV1EXAMPLE01
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('video.tags', {"bvid":"BV1EXAMPLE01"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data[] | 标签列表 |
| data[].tag_name | 标签名称 |

[本轮验证记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show video.tags
```

<a id="video-detailBundle"></a>

## 视频详情聚合

读取详情、相关推荐等聚合信息；历史和本轮结果存在差异。

- 客户端别名：`video.detailBundle`
- 请求：`GET https://api.bilibili.com/x/web-interface/wbi/view/detail`
- 验证：✅ 本轮匿名 HTTP 字段用例通过
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：客户端自动取得公开 nav 数据并添加签名参数。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| aid | string 或 number | 是 | 无 | 视频稿件 ID，可由 video.detail 的 data.aid 取得 |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call video.detailBundle aid=10001
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('video.detailBundle', {"aid":"10001"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.View | 视频详情对象 |
| data.Related | 关联视频列表 |

[本轮验证记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show video.detailBundle
```

## 其他网页观察请求

以下地址只保留网页观测，尚无本仓库客户端调用封装；配置、票据和辅助 POST 的出现不代表已验证主动调用。

| 方法 | URL | 观察到的参数名 |
| --- | --- | --- |
| GET | https://api.bilibili.com/x/web-interface/archive/stat | bvid |
