# 登录状态

[返回 PC 功能导航](README.md) · [验证边界](validation.md)

参数名来自网页实发请求或本次客户端样本，不等于完整必填参数约定。响应字段仅记录实际观察到的 data 第一层字段；具体类型和样本断言见目录 JSON。

| 名称/别名 | 方法与 URL | 参数名 | 验证结果 |
| --- | --- | --- | --- |
| /x/web-interface/nav | GET https://api.bilibili.com/x/web-interface/nav | jsonp | 存在未登录返回 |
| /x/passport-login/web/cookie/info | GET https://passport.bilibili.com/x/passport-login/web/cookie/info | web_location, x-bili-device-req-json, x-bili-locale-json | 存在未登录返回 |

## 查看证据

```sh
node bin/bili-web.mjs list --category auth --all --limit 100
node bin/bili-web.mjs show ID_OR_ALIAS
```
