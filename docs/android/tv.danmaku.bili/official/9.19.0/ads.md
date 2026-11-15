# 广告

<!-- android-edition:start -->
包名：`tv.danmaku.bili` · 渠道：Official Android 64-bit · 版本：9.19.0（9190400）。

[全部版本](../../../README.md) · [本包文档](README.md) · [网页接口](../../../../pc/README.md) · [基线元数据](../../../../../catalog/android/tv.danmaku.bili/official/9.19.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

广告投放、转化和商业组件。分类根据路由、域名与声明类名称推断，未验证业务行为。

官方 Android 9.19.0：19 条 HTTP 声明、0 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。

[返回分类](README.md) · [与 Play 对比](comparison.md)

## HTTP

参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。

| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |
| --- | --- | --- | --- | --- |
| classes13.dex:57682:POST | POST | bce/sunspot/facade/public/api/mini_game/search | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/ad/reward/bean/RewardAdData;&gt;;&gt;; |
| classes13.dex:57683:POST | POST | bce/sunspot/facade/public/api/mini_game/iaa_component | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/ad/reward/bean/RewardAdData;&gt;;&gt;; |
| classes3.dex:52505:GET | GET | https://cm.bilibili.com/mgk/api/open_api/v1/landing_pages/%7Bpage_id%7D | Path:page_id, Query:access_key, Query:unicom_free, Query:mid, Query:buvid, QueryMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/adcommon/data/model/AdIMaxBean;&gt;;&gt;; |
| classes3.dex:52506:POST | POST | https://cm.bilibili.com/mgk/api/open_api/v1/archive | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/adcommon/data/model/IMaxLike;&gt;;&gt;; |
| classes3.dex:56913:POST | POST | https://cm.bilibili.com/cm/api/conversion/mobile/v2 | Body:(内容未知), Header:Content-Encoding | Lcom/bilibili/okretro/call/BiliCall&lt;Lokhttp3/ResponseBody;&gt;; |
| classes33.dex:60170:GET | GET | https://cm.bilibili.com/bce/sunspot/facade/public/api/story/live/goods | Query:live_room_id, Query:ad_extra, Query:access_key | Ljava/lang/Object; |
| classes36.dex:64087:POST | POST | https://cm.bilibili.com/activity/api/app_api/v1/arc_heat/report | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/adcommon/data/model/TrendingInteractionResponse;&gt;;&gt;; |
| classes4.dex:47530:GET | GET | https://cm.bilibili.com/cmoon/api/open_api/live/activity/participation | Query:activity_id, Query:room_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/ad/adview/liveroom/answer/fragment/network/AdAnswerBaseResponse&lt;Lcom/bilibili/ad/adview/liveroom/answer/fragment/network/CategoryBean;&gt;;&gt;; |
| classes4.dex:47531:GET | GET | https://cm.bilibili.com/cmoon/api/open_api/live/activity/info | Query:room_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/ad/adview/liveroom/answer/fragment/network/AdAnswerBaseResponse&lt;Lcom/bilibili/ad/adview/liveroom/answer/fragment/network/LotteryBean;&gt;;&gt;; |
| classes4.dex:47532:POST | POST | https://cm.bilibili.com/cmoon/api/open_api/live/activity/answer | Body:(内容未知), Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/ad/adview/liveroom/answer/fragment/network/AdAnswerBaseResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes4.dex:54367:GET | GET | https://cm.bilibili.com/bce/sunspot/facade/public/api/live/search | QueryMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/ad/adview/liveroom/card/model/AdLiveCardModel;&gt;;&gt;; |
| classes4.dex:56944:POST | POST | https://cm.bilibili.com/mgk/api/open_api/v1/form_data/phone | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/ad/adview/comment/form/model/PhoneNumberModel;&gt;;&gt;; |
| classes4.dex:56945:POST | POST | https://cm.bilibili.com/mgk/api/open_api/v1/form/ttcode | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes4.dex:56946:POST | POST | https://cm.bilibili.com/mgk/api/open_api/v1/form_data/page/%7Bpage_id%7D | Path:page_id, QueryMap:(内容未知), Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/ad/adview/comment/form/model/SubmitResultModel;&gt;;&gt;; |
| classes4.dex:56947:POST | POST | https://cm.bilibili.com/mgk/api/open_api/v1/wechat/package/data/page/%7Bpage_id%7D | Path:page_id, QueryMap:(内容未知), Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/ad/adview/comment/form/model/SubmitResultModel;&gt;;&gt;; |
| classes5.dex:54537:GET | GET | https://cm.bilibili.com/bce/sunspot/facade/public/comment/detail | Query:aid, Query:mid, Query:up_mid, Query:comment_id, Query:ad_extra, Query:is_story, Query:comment_upmid, Query:comment_type, Query:comment_oid, Query:spmid, Query:from_spmid, Query:item_ids, Query:season_id, Query:ep_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; |
| classes9.dex:53684:GET | GET | https://cm.bilibili.com/dwp/api/openApi/v1/window/list | Query:source_type, Query:name_like, Query:uid, Query:page, Query:size | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/tagsearch/model/ItemCardVOList;&gt;;&gt;; |
| classes9.dex:53685:GET | GET | https://cm.bilibili.com/dwp/api/openApi/v1/window/goods/verify | Query:access_key, Query:item_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Integer;&gt;;&gt;; |
| classes9.dex:53686:GET | GET | https://cm.bilibili.com/dwp/api/openApi/v1/window/authority | Query:uid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/tagsearch/model/Authority;&gt;;&gt;; |

## gRPC

请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。

| 路由 | 请求类型候选 | 响应类型候选 |
| --- | --- | --- |

```sh
node bin/bili-apis.mjs --edition official list --category ads --limit 10
node bin/bili-apis.mjs --edition official show "ID"
```
