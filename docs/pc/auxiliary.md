# 网页配置与辅助请求

[功能导航](README.md) · [使用场景](usage.md) · [本轮验证](current.md)

本模块有 0 个读取别名，0 个通过本轮相关匿名 HTTP 字段用例。

## 其他网页观察请求

以下地址只保留网页观测，尚无本仓库客户端调用封装；配置、票据和辅助 POST 的出现不代表已验证主动调用。

| 方法 | URL | 观察到的参数名 |
| --- | --- | --- |
| POST | https://api.bilibili.com/bapis/bilibili.api.ticket.v1.Ticket/GenWebTicket | context[ts], csrf, hexsign, key_id |
| GET | https://api.bilibili.com/x/click-interface/click/now |  |
| POST | https://api.bilibili.com/x/click-interface/click/web/h5 | w_aid, w_ftime, w_part, w_rid, w_stime, w_type, web_location, wts, aid, cid, csrf, cur_language, device, extra, from_spmid, ftime, lv, mobi_app, outer, part, perfer_type, platform, play_mode, polaris_action_id, refer_url, session, spmid, statistics, stime, sub_type, track_id, type |
| POST | https://api.bilibili.com/x/click-interface/web/heartbeat | w_aid, w_dt, w_last_play_progress_time, w_played_time, w_real_played_time, w_realtime, w_rid, w_start_ts, w_video_duration, web_location, wts, aid, cid, csrf, cur_language_vt, device, dt, extra, from_spmid, is_auto_qn, last_play_progress_time, max_play_progress_time, mobi_app, outer, perfer_type, platform, play_mode, play_type, played_time, polaris_action_id, quality, real_played_time, realtime, refer_url, session, spmid, start_ts, statistics, sub_type, track_id, type, video_duration |
| GET | https://api.bilibili.com/x/frontend/finger/spi |  |
| POST | https://api.bilibili.com/x/gaia-vgate/v2/register | x-bili-locale-json, dm_track, v_voucher |
| POST | https://api.bilibili.com/x/internal/gaia-gateway/ExClimbCongLing | encrypt_payload, header |
| POST | https://api.bilibili.com/x/internal/gaia-gateway/ExClimbWuzhi | payload |
| GET | https://api.bilibili.com/x/internal/gaia-gateway/ExGetAxe |  |
| GET | https://api.bilibili.com/x/kv-frontend/namespace/data | appKey, nscode, unlimit, versionId |
| GET | https://api.bilibili.com/x/vip/ads/materials | buvid, platform, position |
| GET | https://api.bilibili.com/x/web-frontend/risk/config |  |
| GET | https://api.bilibili.com/x/web-show/page/header/v2 | category, web_location, x-bili-device-req-json, x-bili-locale-json |
| GET | https://api.bilibili.com/x/web-show/res/locs | ids, pf, w_rid, web_location, wts, x-bili-device-req-json, x-bili-locale-json |
| GET | https://api.bilibili.com/x/web-show/wbi/res/locs | ids, pf, w_rid, web_location, wts, x-bili-device-req-json, x-bili-locale-json |
