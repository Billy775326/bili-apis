# 其他网页请求

[返回 PC 功能导航](README.md) · [验证边界](validation.md)

参数名来自网页实发请求或本次客户端样本，不等于完整必填参数约定。响应字段仅记录实际观察到的 data 第一层字段；具体类型和样本断言见目录 JSON。

| 名称/别名 | 方法与 URL | 参数名 | 验证结果 |
| --- | --- | --- | --- |
| /x/activity_components/eva_operation/object | GET https://api.bilibili.com/x/activity_components/eva_operation/object | object_id | 已观察请求，尚无通过样本 |
| /x/activity_components/exchange/list | GET https://api.bilibili.com/x/activity_components/exchange/list | rewards_id, score_id | 已观察请求，尚无通过样本 |
| /x/activity_components/exchange/merry_go_round | GET https://api.bilibili.com/x/activity_components/exchange/merry_go_round | num, score_id | 已观察请求，尚无通过样本 |
| /x/esports/component/contests | GET https://api.bilibili.com/x/esports/component/contests | division, sid | 已观察请求，尚无通过样本 |
| /x/esports/contest/series/detail | GET https://api.bilibili.com/x/esports/contest/series/detail | series_id | 已观察请求，尚无通过样本 |
| /x/esports/contest/team/detail | GET https://api.bilibili.com/x/esports/contest/team/detail | team_ids | 已观察请求，尚无通过样本 |
| /x/esports/season/series/knockout_match | GET https://api.bilibili.com/x/esports/season/series/knockout_match | series_id | 已观察请求，尚无通过样本 |
| /x/esports/stats/hero2/rank | GET https://api.bilibili.com/x/esports/stats/hero2/rank | season_id, top | 已观察请求，尚无通过样本 |
| /x/note/is_forbid | GET https://api.bilibili.com/x/note/is_forbid | aid, web_location | 已观察请求，尚无通过样本 |
| /x/note/publish/list/archive | GET https://api.bilibili.com/x/note/publish/list/archive | oid, oid_type, pn, ps, web_location | 已观察请求，尚无通过样本 |
| /x/task/totalv2 | GET https://api.bilibili.com/x/task/totalv2 | task_ids, web_location | 已观察请求，尚无通过样本 |
| /x/web-interface/broadcast/servers | GET https://api.bilibili.com/x/web-interface/broadcast/servers | platform | 已观察请求，尚无通过样本 |
| /x/web-interface/relation | GET https://api.bilibili.com/x/web-interface/relation | mid | 存在未登录返回 |

## 查看证据

```sh
node bin/bili-web.mjs list --category other --all --limit 100
node bin/bili-web.mjs show ID_OR_ALIAS
```
