# 公开收藏夹

[功能导航](README.md) · [使用场景](usage.md) · [匿名快照](current.md) · [登录态全量矩阵](full-validation.md)

本模块有 1 个读取别名，1 个通过匿名快照相关匿名 HTTP 字段用例。

## 接口列表

| 接口 | 用途 | 匿名快照状态 |
| --- | --- | --- |
| [公开收藏夹列表](#favorite-folders) | 读取用户公开收藏夹列表，不读取登录账号的私人收藏。 | ✅ 匿名快照 HTTP 字段用例通过 |

## JavaScript 初始化

在仓库根目录的 `.mjs` 文件中使用以下初始化。环境和错误处理见[客户端说明](client.md)。

```js
import { BiliWebClient } from './src/web-client.mjs';
const client = new BiliWebClient();
```

<a id="favorite-folders"></a>

## 公开收藏夹列表

读取用户公开收藏夹列表，不读取登录账号的私人收藏。

- 客户端别名：`favorite.folders`
- 请求：`GET https://api.bilibili.com/x/v3/fav/folder/created/list`
- 匿名快照：✅ 匿名快照 HTTP 字段用例通过
- 登录态浏览器：字段用例通过；[完整矩阵](full-validation.md)
- 样本检查时间：`2026-11-15T04:07:52.474Z`（UTC，采集机时钟）
- WBI：此别名未启用 WBI 自动签名。

### 请求参数

必填表示当前客户端要求；默认值是本仓库的封装值，不是完整服务端约定。标识建议使用字符串，避免大整数精度损失。

| 参数 | 建议类型 | 客户端必填 | 客户端默认值 | 说明 |
| --- | --- | --- | --- | --- |
| up_mid | string 或 number | 是 | 无 | 公开收藏夹所属用户 UID |
| pn | number 或数字字符串 | 否 | 1 | 页码；客户端样本从 1 开始 |
| ps | number 或数字字符串 | 否 | 20 | 请求每页数量，不保证服务端实际返回相同条数 |

### 调用示例

以下资源标识均为合成占位值，调用前替换为有权访问的公开资源；它们不是已验证样本的真实 ID。

```sh
node bin/bili-web.mjs call favorite.folders up_mid=30001
```

本页顶部的初始化代码创建 `client` 后：

```js
const result = await client.call('favorite.folders', {"up_mid":"30001"});
console.log(result.data);
```

### 返回字段

字段取自当前客户端断言及归档响应观察，服务端可能增加、缺少或改变字段；未通过项仅列预期检查位置。

| 字段位置 | 说明 |
| --- | --- |
| data.count | 公开收藏夹数 |
| data.list | 收藏夹列表或 null |

[匿名快照记录](current.md) · [错误与会话说明](client.md#错误处理) · [完整位置证据](../../catalog/pc-web.json)

```sh
node bin/bili-web.mjs show favorite.folders
```
