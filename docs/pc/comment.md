# 评论与楼中楼

[返回 PC 功能导航](README.md) · [验证边界](validation.md)

参数名来自网页实发请求或本次客户端样本，不等于完整必填参数约定。响应字段仅记录实际观察到的 data 第一层字段；具体类型和样本断言见目录 JSON。

| 名称/别名 | 方法与 URL | 参数名 | 验证结果 |
| --- | --- | --- | --- |
| 楼中楼回复 (comment.replies) | GET https://api.bilibili.com/x/v2/reply/reply | oid, root | 独立 HTTP 样本通过 |
| /x/v2/reply/subject/description | GET https://api.bilibili.com/x/v2/reply/subject/description | oid, type, web_location, x-bili-locale-json | 已观察请求，尚无通过样本 |
| 评论主列表 (comment.main) | GET https://api.bilibili.com/x/v2/reply/wbi/main | extra, mode, oid, pagination_str, plat, seek_rpid, type, w_rid, web_location, wts, x-bili-locale-json | 独立 HTTP 样本通过；浏览器样本通过；存在字段/分页断言失败 |

## 查看证据

```sh
node bin/bili-web.mjs list --category comment --all --limit 100
node bin/bili-web.mjs show ID_OR_ALIAS
```
