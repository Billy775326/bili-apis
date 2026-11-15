# 搜索

[返回 PC 功能导航](README.md) · [验证边界](validation.md)

参数名来自网页实发请求或本次客户端样本，不等于完整必填参数约定。响应字段仅记录实际观察到的 data 第一层字段；具体类型和样本断言见目录 JSON。

| 名称/别名 | 方法与 URL | 参数名 | 验证结果 |
| --- | --- | --- | --- |
| 搜索建议 (search.suggest) | GET https://api.bilibili.com/x/web-interface/suggest | highlight, spmid, term, web_location, x-bili-device-req-json, x-bili-locale-json | 本轮：本轮字段用例通过；历史累计：独立 HTTP 样本通过 |
| 综合搜索 (search.all) | GET https://api.bilibili.com/x/web-interface/wbi/search/all/v2 | keyword, page, w_rid, wts | 本轮：本轮字段用例通过；历史累计：独立 HTTP 样本通过 |
| 默认搜索词 (search.default) | GET https://api.bilibili.com/x/web-interface/wbi/search/default | w_rid, web_location, wts, x-bili-device-req-json, x-bili-locale-json | 本轮：本轮字段用例通过；历史累计：独立 HTTP 样本通过；浏览器样本通过 |
| 视频搜索 (search.videos) | GET https://api.bilibili.com/x/web-interface/wbi/search/type | keyword, page, search_type, w_rid, wts | 本轮：本轮字段用例通过；历史累计：独立 HTTP 样本通过 |

## 查看证据

```sh
node bin/bili-web.mjs list --category search --all --limit 100
node bin/bili-web.mjs show ID_OR_ALIAS
```
