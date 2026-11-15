# 动态

[返回 PC 功能导航](README.md) · [验证边界](validation.md)

参数名来自网页实发请求或本次客户端样本，不等于完整必填参数约定。响应字段仅记录实际观察到的 data 第一层字段；具体类型和样本断言见目录 JSON。

| 名称/别名 | 方法与 URL | 参数名 | 验证结果 |
| --- | --- | --- | --- |
| /x/dynamic/feed/dyn/banner | GET https://api.bilibili.com/x/dynamic/feed/dyn/banner | platform, position, web_location | 已观察请求，尚无通过样本 |
| 热门动态 (dynamic.hot) | GET https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/hot | fake_mid, features, page, web_location | 独立 HTTP 样本通过；浏览器样本通过 |

## 查看证据

```sh
node bin/bili-web.mjs list --category dynamic --all --limit 100
node bin/bili-web.mjs show ID_OR_ALIAS
```
