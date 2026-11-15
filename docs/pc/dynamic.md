# 动态

[功能导航](README.md) · [使用场景](usage.md) · [匿名快照](current.md) · [先前浏览器矩阵](full-validation.md) · [最新直接 HTTP](web-validation.md)

本模块有 2 个读取别名，1 个通过匿名快照相关匿名 HTTP 字段用例。

## 接口列表

| 接口 | 用途 | 匿名快照状态 |
| --- | --- | --- |
| [热门动态](#dynamic-hot) | 读取热门动态条目及返回的游标元数据。 | ✅ 匿名快照 HTTP 字段用例通过 |
| [动态横幅](#dynamic-banner) | 读取动态页横幅；匿名快照返回成功业务码但缺少预期数组。 | ⚠️ 字段断言未通过 |

## JavaScript 初始化

在仓库根目录的 `.mjs` 文件中使用以下初始化。环境和错误处理见[客户端说明](client.md)。

```js
import { BiliWebClient } from './src/web-client.mjs';
const client = new BiliWebClient();
```

<a id="dynamic-hot"></a>

## 热门动态

读取热门动态条目及返回的游标元数据。

- 客户端别名：`dynamic.hot`
- 请求：`GET https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/hot`
- 匿名快照：✅ 匿名快照 HTTP 字段用例通过
- 登录态浏览器：字段用例通过；[完整矩阵](full-validation.md)
- 最新 Node HTTP：field-case-passed；[网页逐项结果](web-validation.md)
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：此别名未启用 WBI 自动签名。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| page | number 或数字字符串 | 否 | 1 | 页码；仅承诺已记录样本 |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call dynamic.hot
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('dynamic.hot');
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.items | 动态条目 |
| data.offset | 分页游标元数据；完整遍历未验证 |

[匿名快照记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show dynamic.hot
```

<a id="dynamic-banner"></a>

## 动态横幅

读取动态页横幅；匿名快照返回成功业务码但缺少预期数组。

- 客户端别名：`dynamic.banner`
- 请求：`GET https://api.bilibili.com/x/dynamic/feed/dyn/banner`
- 匿名快照：⚠️ 字段断言未通过
- 登录态浏览器：response-assertion-failed；[完整矩阵](full-validation.md)
- 最新 Node HTTP：response-assertion-failed；[网页逐项结果](web-validation.md)
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：此别名未启用 WBI 自动签名。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

当前封装没有必填或默认查询参数。

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call dynamic.banner
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('dynamic.banner');
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.banners | 预期数组；匿名快照字段缺失，未通过 |

### 匿名快照限制

- HTTP 200 / 业务码 0；未通过断言：banner-list。

[匿名快照记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show dynamic.banner
```
