# 视频详情与关联内容

[返回 PC 功能导航](README.md) · [验证边界](validation.md)

参数名来自网页实发请求或本次客户端样本，不等于完整必填参数约定。响应字段仅记录实际观察到的 data 第一层字段；具体类型和样本断言见目录 JSON。

| 名称/别名 | 方法与 URL | 参数名 | 验证结果 |
| --- | --- | --- | --- |
| 分 P 列表 (video.pages) | GET https://api.bilibili.com/x/player/pagelist | bvid | 独立 HTTP 样本通过 |
| 视频标签 (video.tags) | GET https://api.bilibili.com/x/tag/archive/tags | bvid | 独立 HTTP 样本通过 |
| 相关视频 (video.related) | GET https://api.bilibili.com/x/web-interface/archive/related | bvid | 独立 HTTP 样本通过 |
| /x/web-interface/archive/stat | GET https://api.bilibili.com/x/web-interface/archive/stat | bvid | 已观察请求，尚无通过样本 |
| 视频详情及内嵌统计 (video.detail) | GET https://api.bilibili.com/x/web-interface/view | bvid | 独立 HTTP 样本通过 |
| 视频详情聚合 (video.detailBundle) | GET https://api.bilibili.com/x/web-interface/wbi/view/detail | aid, dm_cover_img_str, dm_img_inter, dm_img_list, dm_img_str, isGaiaAvoided, need_view, w_rid, web_location, wts | 浏览器样本通过；存在风控返回 |

## 查看证据

```sh
node bin/bili-web.mjs list --category video --all --limit 100
node bin/bili-web.mjs show ID_OR_ALIAS
```
