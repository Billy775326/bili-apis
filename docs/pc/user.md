# 用户与空间

[返回 PC 功能导航](README.md) · [验证边界](validation.md)

参数名来自网页实发请求或本次客户端样本，不等于完整必填参数约定。响应字段仅记录实际观察到的 data 第一层字段；具体类型和样本断言见目录 JSON。

| 名称/别名 | 方法与 URL | 参数名 | 验证结果 |
| --- | --- | --- | --- |
| 空间合集与系列 (user.collections) | GET https://api.bilibili.com/x/polymer/web-space/home/seasons_series | mid, page_num, page_size, web_location, x-bili-device-req-json, x-bili-locale-json | 本轮：本轮字段用例通过；历史累计：独立 HTTP 样本通过；浏览器样本通过 |
| 公开追番 (user.followedBangumi) | GET https://api.bilibili.com/x/space/bangumi/follow/list | type, vmid, w_rid, web_location, wts, x-bili-device-req-json, x-bili-locale-json | 本轮：本轮字段用例通过；历史累计：独立 HTTP 样本通过；浏览器样本通过 |
| /x/space/coin/video | GET https://api.bilibili.com/x/space/coin/video | vmid, web_location, x-bili-device-req-json, x-bili-locale-json | 已观察请求，尚无通过样本 |
| 最近游戏列表 (user.games) | GET https://api.bilibili.com/x/space/lastplaygame/v2 | mid, w_rid, web_location, wts, x-bili-device-req-json, x-bili-locale-json | 本轮：本轮字段用例通过；历史累计：独立 HTTP 样本通过；浏览器样本通过 |
| /x/space/like/video | GET https://api.bilibili.com/x/space/like/video | vmid, web_location, x-bili-device-req-json, x-bili-locale-json | 已观察请求，尚无通过样本 |
| 代表作 (user.masterpieces) | GET https://api.bilibili.com/x/space/masterpiece | vmid, web_location, x-bili-device-req-json, x-bili-locale-json | 本轮：本轮字段用例通过；历史累计：独立 HTTP 样本通过；浏览器样本通过 |
| 空间内容计数 (user.counters) | GET https://api.bilibili.com/x/space/navnum | mid, web_location, x-bili-device-req-json, x-bili-locale-json | 本轮：本轮字段用例通过；历史累计：独立 HTTP 样本通过；浏览器样本通过 |
| 空间公告 (user.notice) | GET https://api.bilibili.com/x/space/notice | mid, web_location, x-bili-device-req-json, x-bili-locale-json | 本轮：本轮字段用例通过；历史累计：独立 HTTP 样本通过；浏览器样本通过 |
| /x/space/reservation | GET https://api.bilibili.com/x/space/reservation | vmid, w_rid, web_location, wts, x-bili-device-req-json, x-bili-locale-json | 已观察请求，尚无通过样本 |
| 空间公开设置 (user.settings) | GET https://api.bilibili.com/x/space/setting | mid, web_location, x-bili-device-req-json, x-bili-locale-json | 本轮：本轮字段用例通过；历史累计：独立 HTTP 样本通过；浏览器样本通过 |
| /x/space/upstat | GET https://api.bilibili.com/x/space/upstat | mid, web_location, x-bili-device-req-json, x-bili-locale-json | 已观察请求，尚无通过样本 |
| /x/space/v2/myinfo | GET https://api.bilibili.com/x/space/v2/myinfo | web_location, x-bili-device-req-json, x-bili-locale-json | 存在未登录返回 |
| 公开用户资料 (user.info) | GET https://api.bilibili.com/x/space/wbi/acc/info | dm_cover_img_str, dm_img_inter, dm_img_list, dm_img_str, mid, platform, token, w_rid, web_location, wts, x-bili-device-req-json, x-bili-locale-json | 本轮：跳过；历史累计：浏览器样本通过；存在风控返回 |
| /x/space/wbi/acc/relation | GET https://api.bilibili.com/x/space/wbi/acc/relation | mid, w_rid, web_location, wts, x-bili-device-req-json, x-bili-locale-json | 存在未登录返回 |
| 用户投稿列表 (user.uploads) | GET https://api.bilibili.com/x/space/wbi/arc/search | dm_cover_img_str, dm_img_inter, dm_img_list, dm_img_str, index, mid, order, order_avoided, platform, pn, ps, w_rid, web_location, wts, x-bili-device-req-json, x-bili-locale-json | 本轮：风控或限速；历史累计：存在风控返回 |
| 空间专栏 (user.articles) | GET https://api.bilibili.com/x/space/wbi/article | mid, platform, pn, ps, w_rid, web_location, wts, x-bili-device-req-json, x-bili-locale-json | 本轮：本轮字段用例通过；历史累计：独立 HTTP 样本通过；浏览器样本通过 |

## 查看证据

```sh
node bin/bili-web.mjs list --category user --all --limit 100
node bin/bili-web.mjs show ID_OR_ALIAS
```
