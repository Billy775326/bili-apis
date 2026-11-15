# 播放与在线人数

[返回 PC 功能导航](README.md) · [验证边界](validation.md)

参数名来自网页实发请求或本次客户端样本，不等于完整必填参数约定。响应字段仅记录实际观察到的 data 第一层字段；具体类型和样本断言见目录 JSON。

| 名称/别名 | 方法与 URL | 参数名 | 验证结果 |
| --- | --- | --- | --- |
| /x/esports/stats/player/kda/rank | GET https://api.bilibili.com/x/esports/stats/player/kda/rank | season_id, top | 已观察请求，尚无通过样本 |
| /x/esports/stats/player/mvp/rank | GET https://api.bilibili.com/x/esports/stats/player/mvp/rank | season_id, top | 已观察请求，尚无通过样本 |
| 在线观看人数 (video.online) | GET https://api.bilibili.com/x/player/online/total | aid, bvid, cid, ts | 本轮：本轮字段用例通过；历史累计：独立 HTTP 样本通过；浏览器样本通过 |
| 播放地址元数据 (playback.url) | GET https://api.bilibili.com/x/player/wbi/playurl | app_id, avid, bvid, cid, client_attr, dm_cover_img_str, dm_img_inter, dm_img_list, dm_img_str, fnval, fnver, fourk, from_client, gaia_source, isGaiaAvoided, is_main_page, need_fragment, qn, session, version_name, w_rid, web_location, wts | 本轮：本轮字段用例通过；历史累计：独立 HTTP 样本通过；浏览器样本通过 |
| 播放器与字幕信息 (playback.info) | GET https://api.bilibili.com/x/player/wbi/v2 | aid, cid, dm_cover_img_str, dm_img_inter, dm_img_list, dm_img_str, isGaiaAvoided, w_rid, web_location, wts, x-bili-device-req-json, x-bili-locale-json | 本轮：本轮字段用例通过；历史累计：独立 HTTP 样本通过；浏览器样本通过 |
| /x/v2/dm/wbi/web/seg.so | GET https://api.bilibili.com/x/v2/dm/wbi/web/seg.so | oid, pe, pid, ps, pull_mode, segment_index, type, w_rid, web_location, wts, x-bili-device-req-json, x-bili-locale-json | 已观察请求，尚无通过样本 |
| /x/v2/dm/web/view | GET https://api.bilibili.com/x/v2/dm/web/view | duration, oid, pid, type, w_rid, web_location, without_subtitle, wts, x-bili-device-req-json, x-bili-locale-json | 已观察请求，尚无通过样本 |
| /x/v2/subtitle/web/view | GET https://api.bilibili.com/x/v2/subtitle/web/view | arc_video_language, context_ext, cur_production_type, oid, pid, playlist_switch, type, w_rid, web_location, wts, x-bili-device-req-json, x-bili-locale-json | 已观察请求，尚无通过样本 |
| 广播连接配置 (playback.broadcastServers) | GET https://api.bilibili.com/x/web-interface/broadcast/servers | platform | 本轮：本轮字段用例通过；历史累计：独立 HTTP 样本通过；浏览器样本通过 |

## 查看证据

```sh
node bin/bili-web.mjs list --category playback --all --limit 100
node bin/bili-web.mjs show ID_OR_ALIAS
```
