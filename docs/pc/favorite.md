# 公开收藏夹

[返回 PC 功能导航](README.md) · [验证边界](validation.md)

参数名来自网页实发请求或本次客户端样本，不等于完整必填参数约定。响应字段仅记录实际观察到的 data 第一层字段；具体类型和样本断言见目录 JSON。

| 名称/别名 | 方法与 URL | 参数名 | 验证结果 |
| --- | --- | --- | --- |
| 公开收藏夹列表 (favorite.folders) | GET https://api.bilibili.com/x/v3/fav/folder/created/list | pn, ps, up_mid, web_location, x-bili-device-req-json, x-bili-locale-json | 本轮：本轮字段用例通过；历史累计：独立 HTTP 样本通过 |

## 查看证据

```sh
node bin/bili-web.mjs list --category favorite --all --limit 100
node bin/bili-web.mjs show ID_OR_ALIAS
```
