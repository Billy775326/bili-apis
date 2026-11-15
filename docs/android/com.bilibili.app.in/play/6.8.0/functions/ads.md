# 广告

<!-- android-edition:start -->
包名：`com.bilibili.app.in` · 渠道：Google Play · 版本：6.8.0（9180200）。

[全部版本](../../../../README.md) · [本包文档](../README.md) · [网页接口](../../../../../pc/README.md) · [基线元数据](../../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

广告投放、转化和商业组件。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 18 条 HTTP 声明、0 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes10.dex:19:POST | POST | https://cm.bilibili.com/mgk/api/open_api/v1/form_data/phone | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/ad/adview/comment/form/model/PhoneNumberModel;&gt;;&gt;; | not-tested |
| classes10.dex:20:POST | POST | https://cm.bilibili.com/mgk/api/open_api/v1/form/ttcode | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes10.dex:21:POST | POST | https://cm.bilibili.com/mgk/api/open_api/v1/form_data/page/%7Bpage_id%7D | Path:page_id, QueryMap:(内容未知), Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/ad/adview/comment/form/model/SubmitResultModel;&gt;;&gt;; | not-tested |
| classes10.dex:22:POST | POST | https://cm.bilibili.com/mgk/api/open_api/v1/wechat/package/data/page/%7Bpage_id%7D | Path:page_id, QueryMap:(内容未知), Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/ad/adview/comment/form/model/SubmitResultModel;&gt;;&gt;; | not-tested |
| classes10.dex:53255:GET | GET | https://cm.bilibili.com/cmoon/api/open_api/live/activity/participation | Query:activity_id, Query:room_id | LlC0/a&lt;Lcom/bilibili/ad/adview/liveroom/answer/fragment/network/AdAnswerBaseResponse&lt;Lcom/bilibili/ad/adview/liveroom/answer/fragment/network/CategoryBean;&gt;;&gt;; | not-tested |
| classes10.dex:53256:GET | GET | https://cm.bilibili.com/cmoon/api/open_api/live/activity/info | Query:room_id | LlC0/a&lt;Lcom/bilibili/ad/adview/liveroom/answer/fragment/network/AdAnswerBaseResponse&lt;Lcom/bilibili/ad/adview/liveroom/answer/fragment/network/LotteryBean;&gt;;&gt;; | not-tested |
| classes10.dex:53257:POST | POST | https://cm.bilibili.com/cmoon/api/open_api/live/activity/answer | Body:(内容未知), Query:access_key | LlC0/a&lt;Lcom/bilibili/ad/adview/liveroom/answer/fragment/network/AdAnswerBaseResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes10.dex:53600:GET | GET | https://cm.bilibili.com/bce/sunspot/facade/public/api/live/search | QueryMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/ad/adview/liveroom/card/model/AdLiveCardModel;&gt;;&gt;; | not-tested |
| classes11.dex:13745:POST | POST | https://cm.bilibili.com/cm/api/conversion/mobile/v2 | Body:(内容未知), Header:Content-Encoding | LlC0/a&lt;Lokhttp3/ResponseBody;&gt;; | not-tested |
| classes11.dex:18931:POST | POST | https://cm.bilibili.com/activity/api/app_api/v1/arc_heat/report | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/adcommon/data/model/TrendingInteractionResponse;&gt;;&gt;; | not-tested |
| classes11.dex:22387:GET | GET | https://cm.bilibili.com/mgk/api/open_api/v1/landing_pages/%7Bpage_id%7D | Path:page_id, Query:access_key, Query:unicom_free, Query:mid, Query:buvid, QueryMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/adcommon/data/model/AdIMaxBean;&gt;;&gt;; | not-tested |
| classes11.dex:22388:POST | POST | https://cm.bilibili.com/mgk/api/open_api/v1/archive | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/adcommon/data/model/IMaxLike;&gt;;&gt;; | not-tested |
| classes11.dex:57520:POST | POST | bce/sunspot/facade/public/api/mini_game/search | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/ad/reward/bean/RewardAdData;&gt;;&gt;; | not-tested |
| classes11.dex:57521:POST | POST | bce/sunspot/facade/public/api/mini_game/iaa_component | Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/ad/reward/bean/RewardAdData;&gt;;&gt;; | not-tested |
| classes14.dex:4313:GET | GET | https://cm.bilibili.com/dwp/api/openApi/v1/window/authority | Query:uid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/tagsearch/model/Authority;&gt;;&gt;; | not-tested |
| classes14.dex:4314:GET | GET | https://cm.bilibili.com/dwp/api/openApi/v1/window/list | Query:source_type, Query:name_like, Query:uid, Query:page, Query:size | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/tagsearch/model/ItemCardVOList;&gt;;&gt;; | not-tested |
| classes5.dex:2008:GET | GET | https://cm.bilibili.com/bce/sunspot/facade/public/comment/detail | Query:aid, Query:mid, Query:up_mid, Query:comment_id, Query:ad_extra, Query:is_story, Query:comment_upmid, Query:comment_type, Query:comment_oid, Query:spmid, Query:from_spmid, Query:item_ids, Query:season_id, Query:ep_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes7.dex:60059:GET | GET | https://cm.bilibili.com/bce/sunspot/facade/public/api/story/live/goods | Query:live_room_id, Query:ad_extra, Query:access_key | Ljava/lang/Object; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category ads --limit 10
node bin/bili-apis.mjs show "ID"
```
