# 网页配置与辅助请求

[返回 PC 功能导航](README.md) · [验证边界](validation.md)

参数名来自网页实发请求或本次客户端样本，不等于完整必填参数约定。响应字段仅记录实际观察到的 data 第一层字段；具体类型和样本断言见目录 JSON。

| 名称/别名 | 方法与 URL | 参数名 | 验证结果 |
| --- | --- | --- | --- |
| /bapis/bilibili.api.ticket.v1.Ticket/GenWebTicket | POST https://api.bilibili.com/bapis/bilibili.api.ticket.v1.Ticket/GenWebTicket | context[ts], csrf, hexsign, key_id | 已观察请求，尚无通过样本 |
| /x/click-interface/click/now | GET https://api.bilibili.com/x/click-interface/click/now |  | 已观察请求，尚无通过样本 |
| /x/click-interface/click/web/h5 | POST https://api.bilibili.com/x/click-interface/click/web/h5 | w_aid, w_ftime, w_part, w_rid, w_stime, w_type, web_location, wts, aid, cid, csrf, cur_language, device, extra, from_spmid, ftime, lv, mobi_app, outer, part, perfer_type, platform, play_mode, polaris_action_id, refer_url, session, spmid, statistics, stime, sub_type, track_id, type | 已观察请求，尚无通过样本 |
| /x/click-interface/web/heartbeat | POST https://api.bilibili.com/x/click-interface/web/heartbeat | w_aid, w_dt, w_last_play_progress_time, w_played_time, w_real_played_time, w_realtime, w_rid, w_start_ts, w_video_duration, web_location, wts, aid, cid, csrf, cur_language_vt, device, dt, extra, from_spmid, is_auto_qn, last_play_progress_time, max_play_progress_time, mobi_app, outer, perfer_type, platform, play_mode, play_type, played_time, polaris_action_id, quality, real_played_time, realtime, refer_url, session, spmid, start_ts, statistics, sub_type, track_id, type, video_duration | 已观察请求，尚无通过样本 |
| /x/frontend/finger/spi | GET https://api.bilibili.com/x/frontend/finger/spi |  | 已观察请求，尚无通过样本 |
| /x/gaia-vgate/v2/register | POST https://api.bilibili.com/x/gaia-vgate/v2/register | x-bili-locale-json, dm_track, v_voucher | 已观察请求，尚无通过样本 |
| /x/internal/gaia-gateway/ExClimbCongLing | POST https://api.bilibili.com/x/internal/gaia-gateway/ExClimbCongLing | encrypt_payload, header | 已观察请求，尚无通过样本 |
| /x/internal/gaia-gateway/ExClimbWuzhi | POST https://api.bilibili.com/x/internal/gaia-gateway/ExClimbWuzhi | payload | 已观察请求，尚无通过样本 |
| /x/internal/gaia-gateway/ExGetAxe | GET https://api.bilibili.com/x/internal/gaia-gateway/ExGetAxe |  | 已观察请求，尚无通过样本 |
| /x/kv-frontend/namespace/data | GET https://api.bilibili.com/x/kv-frontend/namespace/data | appKey, nscode, unlimit, versionId | 已观察请求，尚无通过样本 |
| /x/vip/ads/materials | GET https://api.bilibili.com/x/vip/ads/materials | buvid, platform, position | 已观察请求，尚无通过样本 |
| /x/web-frontend/risk/config | GET https://api.bilibili.com/x/web-frontend/risk/config |  | 已观察请求，尚无通过样本 |
| /x/web-show/page/header/v2 | GET https://api.bilibili.com/x/web-show/page/header/v2 | category, web_location, x-bili-device-req-json, x-bili-locale-json | 已观察请求，尚无通过样本 |
| /x/web-show/res/locs | GET https://api.bilibili.com/x/web-show/res/locs | ids, pf, w_rid, web_location, wts, x-bili-device-req-json, x-bili-locale-json | 已观察请求，尚无通过样本 |
| /x/web-show/wbi/res/locs | GET https://api.bilibili.com/x/web-show/wbi/res/locs | ids, pf, w_rid, web_location, wts, x-bili-device-req-json, x-bili-locale-json | 已观察请求，尚无通过样本 |

## 查看证据

```sh
node bin/bili-web.mjs list --category auxiliary --all --limit 100
node bin/bili-web.mjs show ID_OR_ALIAS
```
