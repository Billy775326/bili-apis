# 直播

[功能导航](README.md) · [使用场景](usage.md) · [匿名快照](current.md) · [先前浏览器矩阵](full-validation.md) · [最新直接 HTTP](web-validation.md)

本模块有 4 个读取别名，3 个通过匿名快照相关匿名 HTTP 字段用例。

## 接口列表

| 接口 | 用途 | 匿名快照状态 |
| --- | --- | --- |
| [直播间播放信息](#live-roomPlayInfo) | 读取 网页 直播间状态及播放元数据，不监听直播弹幕。 | ✅ 匿名快照 HTTP 字段用例通过 |
| [直播间基础信息](#live-roomBaseInfo) | 读取指定直播间的基础信息映射。 | ✅ 匿名快照 HTTP 字段用例通过 |
| [直播推荐](#live-recommendations) | 读取 网页 直播推荐房间列表。 | ✅ 匿名快照 HTTP 字段用例通过 |
| [直播间综合信息](#live-roomInfo) | 读取直播间综合信息；匿名快照返回 -352。 | ⚠️ 风控或限速 |

## JavaScript 初始化

在仓库根目录的 `.mjs` 文件中使用以下初始化。环境和错误处理见[客户端说明](client.md)。

```js
import { BiliWebClient } from './src/web-client.mjs';
const client = new BiliWebClient();
```

<a id="live-roomPlayInfo"></a>

## 直播间播放信息

读取 网页 直播间状态及播放元数据，不监听直播弹幕。

- 客户端别名：`live.roomPlayInfo`
- 请求：`GET https://api.live.bilibili.com/xlive/web-room/v2/index/getRoomPlayInfo`
- 匿名快照：✅ 匿名快照 HTTP 字段用例通过
- 登录态浏览器：字段用例通过；[完整矩阵](full-validation.md)
- 最新 Node HTTP：field-case-passed；[网页逐项结果](web-validation.md)
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：此别名未启用 WBI 自动签名。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| room_id | string 或 number | 是 | 无 | 实际直播房间号；短号行为未核对 |
| protocol | string | 否 | "0,1" | 支持的播放协议代码列表 |
| format | string | 否 | "0,1,2" | 支持的媒体封装代码列表 |
| codec | string | 否 | "0,1" | 支持的编码代码列表 |
| qn | number 或数字字符串 | 否 | 0 | 期望清晰度代码；实际清晰度查看响应字段 |
| platform | string | 否 | "web" | 网页平台标记，默认 web |
| ptype | number 或数字字符串 | 否 | 8 | 直播播放请求类型标记 |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call live.roomPlayInfo room_id=50001
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('live.roomPlayInfo', {"room_id":"50001"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.room_id | 实际直播房间号 |
| data.live_status | 直播状态代码 |
| data.playurl_info | 观察到的播放元数据，不保证正在直播或可播放 |

### 使用说明

请区分实际房间号和短号；房间未开播时不保证有播放资源。

[匿名快照记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show live.roomPlayInfo
```

<a id="live-roomBaseInfo"></a>

## 直播间基础信息

读取指定直播间的基础信息映射。

- 客户端别名：`live.roomBaseInfo`
- 请求：`GET https://api.live.bilibili.com/xlive/web-room/v1/index/getRoomBaseInfo`
- 匿名快照：✅ 匿名快照 HTTP 字段用例通过
- 登录态浏览器：字段用例通过；[完整矩阵](full-validation.md)
- 最新 Node HTTP：field-case-passed；[网页逐项结果](web-validation.md)
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：此别名未启用 WBI 自动签名。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| room_ids | string | 是 | 无 | 目标房间号字符串；匿名快照只核对单个房间 |
| req_biz | string | 否 | "web_room_componet" | 房间基础信息的调用场景参数，默认值来自封装 |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call live.roomBaseInfo room_ids=50001
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('live.roomBaseInfo', {"room_ids":"50001"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.by_room_ids | 按房间号索引的基础信息 |
| data.by_uids | 响应中观察到的主播映射 |

### 使用说明

目前文档示例和身份断言仅针对单个 room_ids 值；多房间输入未验证。

[匿名快照记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show live.roomBaseInfo
```

<a id="live-recommendations"></a>

## 直播推荐

读取 网页 直播推荐房间列表。

- 客户端别名：`live.recommendations`
- 请求：`GET https://api.live.bilibili.com/xlive/web-interface/v1/webMain/getMoreRecList`
- 匿名快照：✅ 匿名快照 HTTP 字段用例通过
- 登录态浏览器：字段用例通过；[完整矩阵](full-validation.md)
- 最新 Node HTTP：field-case-passed；[网页逐项结果](web-validation.md)
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
node bin/bili-web.mjs call live.recommendations
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('live.recommendations');
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.recommend_room_list | 推荐房间列表 |

[匿名快照记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show live.recommendations
```

<a id="live-roomInfo"></a>

## 直播间综合信息

读取直播间综合信息；匿名快照返回 -352。

- 客户端别名：`live.roomInfo`
- 请求：`GET https://api.live.bilibili.com/xlive/web-room/v1/index/getInfoByRoom`
- 匿名快照：⚠️ 风控或限速
- 登录态浏览器：字段用例通过；[完整矩阵](full-validation.md)
- 最新 Node HTTP：field-case-passed；[网页逐项结果](web-validation.md)
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：客户端自动取得公开 nav 数据并添加签名参数。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| room_id | string 或 number | 是 | 无 | 实际直播房间号；短号行为未核对 |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call live.roomInfo room_id=50001
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('live.roomInfo', {"room_id":"50001"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.room_info.room_id | 客户端预期核对的房间号 |
| data.room_info.live_status | 客户端预期状态；匿名快照未取得成功业务响应 |

### 匿名快照限制

- HTTP 200 / 业务码 -352。

[匿名快照记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show live.roomInfo
```

## 其他网页观察请求

以下地址只保留网页观测，尚无本仓库客户端调用封装；配置、票据和辅助 POST 的出现不代表已验证主动调用。

| 方法 | URL | 观察到的参数名 |
| --- | --- | --- |
| GET | https://api.live.bilibili.com/xlive/general-interface/v1/content/get | key, t |
| GET | https://api.live.bilibili.com/xlive/general-interface/v1/content/getRevenueMd5 | t |
| GET | https://api.live.bilibili.com/xlive/web-room/v1/index/getIpInfo |  |
