# 推荐与热门

[返回 PC 功能导航](README.md) · [验证边界](validation.md)

参数名来自网页实发请求或本次客户端样本，不等于完整必填参数约定。响应字段仅记录实际观察到的 data 第一层字段；具体类型和样本断言见目录 JSON。

| 名称/别名 | 方法与 URL | 参数名 | 验证结果 |
| --- | --- | --- | --- |
| 番剧推荐 (home.ogv) | GET https://api.bilibili.com/x/web-interface/index/ogv/rcmd | brush, fresh_type, request_cnt, season_type, web_location, x-bili-device-req-json, x-bili-locale-json | 本轮：请求失败；历史累计：浏览器样本通过 |
| 热门视频 (home.popular) | GET https://api.bilibili.com/x/web-interface/popular | pn, ps, w_rid, web_location, wts | 本轮：本轮字段用例通过；历史累计：独立 HTTP 样本通过；浏览器样本通过 |
| 首页推荐 (home.recommendations) | GET https://api.bilibili.com/x/web-interface/wbi/index/top/feed/rcmd | brush, device, domestic_other_ps, domestic_zh_ps, feed_version, fetch_row, fresh_idx, fresh_idx_1h, fresh_type, homepage_ver, last_showlist, last_y_num, overseas_other_ps, overseas_zh_ps, ps, screen, tt_exp, uniq_id, w_rid, web_location, wts, x-bili-device-req-json, x-bili-locale-json, y_num | 本轮：本轮字段用例通过；历史累计：独立 HTTP 样本通过；浏览器样本通过 |

## 查看证据

```sh
node bin/bili-web.mjs list --category feed --all --limit 100
node bin/bili-web.mjs show ID_OR_ALIAS
```
