# 登录状态

[功能导航](README.md) · [使用场景](usage.md) · [匿名快照](current.md) · [先前浏览器矩阵](full-validation.md) · [最新直接 HTTP](web-validation.md) · [受控私信](message.md)

本模块有 0 个读取别名，0 个通过匿名快照相关匿名 HTTP 字段用例。

## 其他网页观察请求

以下地址只保留网页观测，尚无本仓库客户端调用封装；配置、票据和辅助 POST 的出现不代表已验证主动调用。

| 方法 | URL | 观察到的参数名 |
| --- | --- | --- |
| GET | https://api.bilibili.com/x/web-interface/nav | jsonp |
| GET | https://passport.bilibili.com/x/passport-login/web/cookie/info | web_location, x-bili-device-req-json, x-bili-locale-json |
