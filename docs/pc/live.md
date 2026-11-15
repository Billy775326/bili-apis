# 直播

[返回 PC 功能导航](README.md) · [验证边界](validation.md)

参数名来自网页实发请求或本次客户端样本，不等于完整必填参数约定。响应字段仅记录实际观察到的 data 第一层字段；具体类型和样本断言见目录 JSON。

| 名称/别名 | 方法与 URL | 参数名 | 验证结果 |
| --- | --- | --- | --- |
| /xlive/general-interface/v1/content/get | GET https://api.live.bilibili.com/xlive/general-interface/v1/content/get | key, t | 已观察请求，尚无通过样本 |
| /xlive/general-interface/v1/content/getRevenueMd5 | GET https://api.live.bilibili.com/xlive/general-interface/v1/content/getRevenueMd5 | t | 已观察请求，尚无通过样本 |
| /xlive/web-interface/v1/webMain/getMoreRecList | GET https://api.live.bilibili.com/xlive/web-interface/v1/webMain/getMoreRecList | platform, web_location, x-bili-device-req-json, x-bili-locale-json | 已观察请求，尚无通过样本 |
| /xlive/web-room/v1/index/getInfoByRoom | GET https://api.live.bilibili.com/xlive/web-room/v1/index/getInfoByRoom | room_id, w_rid, web_location, wts | 存在风控返回 |
| /xlive/web-room/v1/index/getIpInfo | GET https://api.live.bilibili.com/xlive/web-room/v1/index/getIpInfo |  | 已观察请求，尚无通过样本 |
| /xlive/web-room/v1/index/getRoomBaseInfo | GET https://api.live.bilibili.com/xlive/web-room/v1/index/getRoomBaseInfo | req_biz, room_ids, use_cache | 已观察请求，尚无通过样本 |
| 直播间播放信息 (live.roomPlayInfo) | GET https://api.live.bilibili.com/xlive/web-room/v2/index/getRoomPlayInfo | codec, dolby, eotf, format, mask, no_playurl, panorama, platform, protocol, qn, room_id, supported_drms, w_rid, web_location, wts | 独立 HTTP 样本通过；浏览器样本通过 |

## 查看证据

```sh
node bin/bili-web.mjs list --category live --all --limit 100
node bin/bili-web.mjs show ID_OR_ALIAS
```
