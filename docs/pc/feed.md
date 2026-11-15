# 推荐与热门

[功能导航](README.md) · [使用场景](usage.md) · [本轮验证](current.md)

本模块有 3 个读取别名，2 个通过本轮相关匿名 HTTP 字段用例。

## 接口列表

| 接口 | 用途 | 本轮状态 |
| --- | --- | --- |
| [热门视频](#home-popular) | 读取热门视频列表。 | ✅ 本轮匿名 HTTP 字段用例通过 |
| [番剧推荐](#home-ogv) | 读取番剧推荐请求；本轮两次受控参数样本均返回 -400。 | ⚠️ 请求失败 |
| [首页推荐](#home-recommendations) | 读取首页推荐视频条目。 | ✅ 本轮匿名 HTTP 字段用例通过 |

## JavaScript 初始化

在仓库根目录的 `.mjs` 文件中使用以下初始化。环境和错误处理见[客户端说明](client.md)。

```js
import { BiliWebClient } from './src/web-client.mjs';
const client = new BiliWebClient();
```

<a id="home-popular"></a>

## 热门视频

读取热门视频列表。

- 客户端别名：`home.popular`
- 请求：`GET https://api.bilibili.com/x/web-interface/popular`
- 验证：✅ 本轮匿名 HTTP 字段用例通过
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：此别名未启用 WBI 自动签名。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| pn | number 或数字字符串 | 否 | 1 | 页码；客户端样本从 1 开始 |
| ps | number 或数字字符串 | 否 | 20 | 请求每页数量，不保证服务端实际返回相同条数 |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call home.popular
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('home.popular');
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.list | 热门视频条目 |
| data.no_more | 是否没有更多条目 |

[本轮验证记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show home.popular
```

<a id="home-ogv"></a>

## 番剧推荐

读取番剧推荐请求；本轮两次受控参数样本均返回 -400。

- 客户端别名：`home.ogv`
- 请求：`GET https://api.bilibili.com/x/web-interface/index/ogv/rcmd`
- 验证：⚠️ 请求失败
- 样本检查时间：`2026-11-15T04:09:22.254Z`（UTC，采集机时钟）
- WBI：此别名未启用 WBI 自动签名。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| season_type | number 或数字字符串 | 否 | 1 | 推荐内容类型；本轮 HTTP 仍返回 -400 |
| request_cnt | number 或数字字符串 | 否 | 5 | 推荐请求数量参数 |
| brush | number 或数字字符串 | 否 | 0 | 推荐刷新参数，其他取值未核对 |
| fresh_type | number 或数字字符串 | 否 | 0 | 推荐刷新类型，其他取值未核对 |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call home.ogv
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('home.ogv');
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.items | 预期条目列表；本轮未取得成功业务响应 |

### 使用说明

默认参数补充参考官方网页脚本，但独立 HTTP 仍未通过；保留失败记录。

### 本轮限制

- HTTP 200 / 业务码 -400。

[本轮验证记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show home.ogv
```

<a id="home-recommendations"></a>

## 首页推荐

读取首页推荐视频条目。

- 客户端别名：`home.recommendations`
- 请求：`GET https://api.bilibili.com/x/web-interface/wbi/index/top/feed/rcmd`
- 验证：✅ 本轮匿名 HTTP 字段用例通过
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：客户端自动取得公开 nav 数据并添加签名参数。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| ps | number 或数字字符串 | 否 | 3 | 请求每页数量，不保证服务端实际返回相同条数 |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call home.recommendations
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('home.recommendations');
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.item | 推荐视频条目 |
| data.item[].bvid | 推荐稿件标识 |

[本轮验证记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show home.recommendations
```
