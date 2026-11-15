# 推荐与分区

<!-- android-edition:start -->
包名：`com.bilibili.app.in` · 渠道：Google Play · 版本：6.8.0（9180200）。

[全部版本](../../../../README.md) · [本包文档](../README.md) · [网页接口](../../../../../pc/README.md) · [基线元数据](../../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

推荐流、热门、排行、频道和分区。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 43 条 HTTP 声明、27 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes10.dex:64101:GET | GET | https://app.bilibili.com/x/v2/feed/nf | Query:goto, Query:id, Query:up_id, Query:up_name, Query:jumpgoto, Query:video_mode, Query:column, Query:tname, Query:from, Query:is_second_panel, Query:title | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/data/feedback/NegativeFeedbackResponse;&gt;;&gt;; | not-tested |
| classes11.dex:21397:GET | GET | https://app.bilibili.com/x/feed/dislike/cancel | QueryMap:(内容未知) | LlC0/a&lt;Ljava/lang/Void;&gt;; | not-tested |
| classes11.dex:21399:GET | GET | https://app.bilibili.com/x/feed/dislike | QueryMap:(内容未知) | LlC0/a&lt;Ljava/lang/Void;&gt;; | not-tested |
| classes11.dex:43322:GET | GET | https://app.bilibili.com/x/feed/dislike/cancel | QueryMap:(内容未知) | LlC0/a&lt;Ljava/lang/String;&gt;; | not-tested |
| classes11.dex:43323:GET | GET | https://app.bilibili.com/x/feed/dislike | QueryMap:(内容未知) | LlC0/a&lt;Ljava/lang/String;&gt;; | not-tested |
| classes11.dex:57807:POST | POST | https://app.bilibili.com/x/channel/cancel | Field:channel_id, Field:from, Field:from_spmid, Field:model_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes11.dex:57808:POST | POST | https://app.bilibili.com/x/channel/add | Field:channel_id, Field:from, Field:from_spmid, Field:model_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes11.dex:59785:GET | GET | https://app.bilibili.com/x/v2/feed/index/story/game/status | Query:game_base_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/adcommon/data/model/AdGameGiftModule;&gt;;&gt;; | not-tested |
| classes18.dex:8096:GET | GET | https://app.bilibili.com/x/v2/feed/nf | Query:goto, Query:id, Query:up_id, Query:up_name, Query:jumpgoto, Query:video_mode, Query:column, Query:tname, Query:from, Query:is_second_panel, Query:old_pegasus, Query:title, Query:translated_status, Query:dislike_info | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/feedbackdialog/model/NegativeFeedbackResponse;&gt;;&gt;; | not-tested |
| classes18.dex:8361:GET | GET | https://app.bilibili.com/x/v2/feed/index/vertical/tab | Query:pull, Query:offset, Query:channel_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/verticaltab/api/model/VerticalTabFeedResponse;&gt;;&gt;; | not-tested |
| classes18.dex:28868:GET | GET | https://app.bilibili.com/x/v2/channel/multiple | Query:access_key, Query:channel_id, Query:sort, Query:offset, Query:spmid, Query:pn, Query:from, Query:theme | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/api/modelv2/channel/ChannelDetailResponse;&gt;;&gt;; | not-tested |
| classes18.dex:28869:GET | GET | https://app.bilibili.com/x/v2/channel/selected | Query:access_key, Query:channel_id, Query:sort, Query:offset, Query:spmid, Query:pn, Query:from, Query:theme | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/api/modelv2/channel/ChannelDetailResponse;&gt;;&gt;; | not-tested |
| classes18.dex:28870:GET | GET | https://app.bilibili.com/x/v2/channel/share | Query:id, Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/api/model/ChannelShareInfo;&gt;;&gt;; | not-tested |
| classes18.dex:28871:GET | GET | https://app.bilibili.com/x/channel/feed/index | Query:channel_id, Query:channel_name, Query:pull, Query:login_event, Query:display_id, Query:access_key, Query:from_spmid, Query:from_page | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/api/modelv2/ChannelFeedV2;&gt;;&gt;; | not-tested |
| classes18.dex:28872:GET | GET | https://app.bilibili.com/x/channel/feed/tab | Query:channel_id, Query:channel_name, Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/api/model/Channel;&gt;;&gt;; | not-tested |
| classes18.dex:28873:GET | GET | https://app.bilibili.com/x/v2/channel/detail | Query:channel_id, Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/api/model/ChannelV2;&gt;;&gt;; | not-tested |
| classes18.dex:29498:GET | GET | https://app.bilibili.com/x/v2/feed/index | Query:window_size_type, Query:raw_window_size_type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/api/modelv2/PegasusFeedResponse;&gt;;&gt;; | not-tested |
| classes18.dex:29499:GET | GET | https://app.bilibili.com/x/v2/feed/index/tab | Query:access_key, Query:id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/api/model/PromoOperationTab;&gt;;&gt;; | not-tested |
| classes18.dex:30706:GET | GET | https://app.bilibili.com/x/v2/channel/list | Query:access_key, Query:type, Query:offset | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;LlE0/b;&gt;;&gt;; | not-tested |
| classes18.dex:30707:GET | GET | https://app.bilibili.com/x/v2/channel/tab3 | Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/ArrayList&lt;Lcom/bilibili/pegasus/api/model/ChannelCategoryItem;&gt;;&gt;;&gt;; | not-tested |
| classes18.dex:30708:GET | GET | https://app.bilibili.com/x/v2/channel/home2 | Query:offset_new, Query:offset_rcmd, Query:spmid, Query:auto_refresh, Query:pn | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;LmE0/c;&gt;;&gt;; | not-tested |
| classes18.dex:30709:GET | GET | https://app.bilibili.com/x/v2/channel/recommend2 | Query:offset, Query:spmid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;LmE0/d;&gt;;&gt;; | not-tested |
| classes18.dex:30710:GET | GET | https://app.bilibili.com/x/v2/channel/mine | Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;LlE0/f;&gt;;&gt;; | not-tested |
| classes18.dex:30711:POST | POST | https://app.bilibili.com/x/v2/channel/sort | Field:access_key, Field:action, Field:stick, Field:normal | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; | not-tested |
| classes18.dex:38673:GET | GET | https://app.bilibili.com/x/v2/feed/uinterest/more |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/recommendlabel/data/RecommendLabelMoreResponse;&gt;;&gt;; | not-tested |
| classes18.dex:38674:GET | GET | https://app.bilibili.com/x/v2/feed/uinterest | Query:need_all_label | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/recommendlabel/data/RecommendLabelResponse;&gt;;&gt;; | not-tested |
| classes18.dex:38675:POST | POST | https://app.bilibili.com/x/v2/feed/uinterest/mng | Field:fixed_label, Field:unfixed_label, Field:changed_label, Field:action | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/okretro/BaseResponse;&gt;;&gt;; | not-tested |
| classes18.dex:39073:GET | GET | https://app.bilibili.com/x/v2/feed/second/interest | Query:oaid, Query:interest_id, Query:interest_result, Query:interest_type, Query:device_type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;LoF0/d;&gt;;&gt;; | not-tested |
| classes18.dex:39074:GET | GET | https://app.bilibili.com/x/v2/feed/index | Query:idx, Query:pull, Query:login_event, Query:open_event, Query:banner_hash, Query:interest_result, Query:flush, Query:interest_id, Query:splash_id, Query:splash_ids, Query:splash_creative_id, Query:interest_pos_ids, Query:cny_info, Query:clipboard_video_id, Query:clipboard_unique_k, Query:window_size_type, Query:raw_window_size_type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;LiF0/g;&gt;;&gt;; | not-tested |
| classes18.dex:39075:GET | GET | https://app.bilibili.com/x/v2/feed/index/interest | Query:oaid, Query:cny_info, Query:action | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;LoF0/d;&gt;;&gt;; | not-tested |
| classes18.dex:64176:GET | GET | https://app.bilibili.com/x/v2/channel/baike/feed | Query:bid, Query:nid, Query:vertical, Query:offset, Query:version | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/channelv2/detail/tab/baike/model/ChannelBaikeFeedResponse;&gt;;&gt;; | not-tested |
| classes18.dex:64177:GET | GET | https://app.bilibili.com/x/v2/channel/baike/nav | Query:bid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/channelv2/detail/tab/baike/model/ChannelBaikeNavigationResponse;&gt;;&gt;; | not-tested |
| classes20.dex:36736:GET | GET | https://app.bilibili.com/x/v2/feed/index/story | QueryMap:(内容未知), Query:aid, Query:cid, Query:bvid, Query:epid, Query:trackid, Query:story_param, Query:pull, Query:request_from, Query:contain, Query:ogv_style, Query:creative_id, Query:feed_status, Query:goto, Query:material_no, Query:questionaire_info, Query:open_event, Query:need_translate, Query:reply_down_style, Query:room_id | LlC0/a&lt;Lcom/bilibili/video/story/api/StoryFeedResponse;&gt;; | not-tested |
| classes20.dex:36738:GET | GET | https://app.bilibili.com/x/v2/feed/index/story/refresh | QueryMap:(内容未知), Query:id, Query:goto, Query:trackid, Query:scene | Ljava/lang/Object; | not-tested |
| classes20.dex:36739:GET | GET | https://app.bilibili.com/x/v2/feed/index/relate/story | QueryMap:(内容未知), Query:aid, Query:trackid, Query:spmid, Query:from_spmid, Query:view_attribute, Query:season_id, Query:arc_attribute, Query:need_translate, Query:reply_down_style, Query:goto | Ljava/lang/Object; | not-tested |
| classes20.dex:36741:GET | GET | https://app.bilibili.com/x/v2/feed/index/story/trans | Query:aid, Query:cid, Query:trackid, Query:goto, Query:translation_status | Ljava/lang/Object; | not-tested |
| classes30.dex:3403:GET | GET | https://app.bilibili.com/x/feed/dislike | QueryMap:(内容未知) | LlC0/a&lt;Ljava/lang/String;&gt;; | not-tested |
| classes30.dex:3404:GET | GET | https://app.bilibili.com/x/v2/feed/nf | Query:goto, Query:id, Query:title, Query:from, Query:up_name, Query:dislike_info, Query:is_second_panel | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/dislikefeedback/remote/NfResponse;&gt;;&gt;; | not-tested |
| classes30.dex:3405:GET | GET | https://app.bilibili.com/x/feed/dislike/cancel | QueryMap:(内容未知) | LlC0/a&lt;Ljava/lang/String;&gt;; | not-tested |
| classes30.dex:32464:GET | GET | https://app.bilibili.com/x/v2/region/index | Query:ver | LlC0/a&lt;Ltv/danmaku/bili/category/CategoryMeta;&gt;; | business-error |
| classes30.dex:40775:GET | GET | https://app.bilibili.com/x/v2/feed/coldstart |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; | not-tested |
| classes7.dex:62336:POST | POST | https://app.bilibili.com/x/channel/cancel | Field:channel_id, Field:from, Field:from_spmid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes7.dex:65444:GET | GET | https://app.bilibili.com/x/v2/feed/index/story/cart | QueryMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/adcommon/data/model/DmAdvert;&gt;;&gt;; | not-tested |

## gRPC

请求/响应角色默认仍为静态候选；View/View 已有单独实现核对。表格不代表已建立连接或验证认证。

| 路由 | 请求类型候选 | 响应类型候选 | 线上抽查 |
| --- | --- | --- | --- |
| /bilibili.app.home.v1.Home/HomePopup | Lcom/bapis/bilibili/app/home/v1/HomePopupReq; | Lcom/bapis/bilibili/app/home/v1/HomePopupRes; | not-tested |
| /bilibili.app.home.v1.Home/MineSelectionContent | Lcom/bapis/bilibili/app/home/v1/MineSelectionContentReq; | Lcom/bapis/bilibili/app/home/v1/MineSelectionContentRes; | not-tested |
| /bilibili.app.home.v1.Home/MineSelectionOptionItems | Lcom/bapis/bilibili/app/home/v1/MineSelectionOptionItemsReq; | Lcom/bapis/bilibili/app/home/v1/MineSelectionOptionItemsRes; | not-tested |
| /bilibili.app.home.v1.Home/MineSelectionOptionUpdate | Lcom/bapis/bilibili/app/home/v1/MineSelectionOptionUpdateReq; | Lcom/bapis/bilibili/app/home/v1/MineSelectionOptionUpdateRes; | not-tested |
| /bilibili.app.home.v1.Home/Recent | Lcom/bapis/bilibili/app/home/v1/RecentReq; | Lcom/bapis/bilibili/app/home/v1/RecentRes; | not-tested |
| /bilibili.app.home.v1.Home/RemoveVideo | Lcom/bapis/bilibili/app/home/v1/RemoveVideoReq; | Lcom/bapis/bilibili/app/home/v1/RemoveVideoRes; | not-tested |
| /bilibili.app.home.v1.Home/TopLeftTab | Lcom/bapis/bilibili/app/home/v1/TopLeftTabReq; | Lcom/bapis/bilibili/app/home/v1/TopLeftTabRes; | not-tested |
| /bilibili.app.home.v1.Home/TopLeftTabUpdate | Lcom/bapis/bilibili/app/home/v1/TopLeftTabUpdateReq; | Lcom/bapis/bilibili/app/home/v1/TopLeftTabUpdateRes; | not-tested |
| /bilibili.app.show.v1.AppShow/GetActProgress | Lcom/bapis/bilibili/app/show/gateway/v1/GetActProgressReq; | Lcom/bapis/bilibili/app/show/gateway/v1/GetActProgressReply; | not-tested |
| /bilibili.app.show.v1.Mixture/BceCreative | Lcom/bapis/bilibili/app/show/mixture/v1/BceCreativeReq; | Lcom/bapis/bilibili/app/show/mixture/v1/BceCreativeReply; | not-tested |
| /bilibili.app.show.v1.Mixture/ChannelRedirect | Lcom/bapis/bilibili/app/show/mixture/v1/ChannelRedirectReq; | Lcom/bapis/bilibili/app/show/mixture/v1/ChannelRedirectReply; | not-tested |
| /bilibili.app.show.v1.Mixture/Clarity | Lcom/bapis/bilibili/app/show/mixture/v1/ClarityReq; | Lcom/bapis/bilibili/app/show/mixture/v1/ClarityReply; | not-tested |
| /bilibili.app.show.v1.Mixture/RegionIndex | Lcom/bapis/bilibili/app/show/mixture/v1/RegionIndexReq; | Lcom/bapis/bilibili/app/show/mixture/v1/RegionIndexReply; | not-tested |
| /bilibili.app.show.v1.Mixture/RegionList | Lcom/bapis/bilibili/app/show/mixture/v1/RegionListReq; | Lcom/bapis/bilibili/app/show/mixture/v1/RegionListReply; | not-tested |
| /bilibili.app.show.v1.Mixture/RegionShortcut | Lcom/bapis/bilibili/app/show/mixture/v1/RegionShortcutReq; | Lcom/bapis/bilibili/app/show/mixture/v1/RegionShortcutReply; | not-tested |
| /bilibili.app.show.v1.Mixture/Widget | Lcom/bapis/bilibili/app/show/mixture/v1/WidgetReq; | Lcom/bapis/bilibili/app/show/mixture/v1/WidgetReply; | not-tested |
| /bilibili.app.show.v1.Mixture/WidgetGuide | Lcom/bapis/bilibili/app/show/mixture/v1/WidgetGuideReq; | Lcom/bapis/bilibili/app/show/mixture/v1/WidgetGuideReply; | not-tested |
| /bilibili.app.show.v1.Mixture/WidgetGuideUpdate | Lcom/bapis/bilibili/app/show/mixture/v1/WidgetGuideUpdateReq; | Lcom/bapis/bilibili/app/show/mixture/v1/EmptyReply; | not-tested |
| /bilibili.app.show.v1.Popular/Index | Lcom/bapis/bilibili/app/show/popular/v1/PopularResultReq; | Lcom/bapis/bilibili/app/show/popular/v1/PopularReply; | not-tested |
| /bilibili.app.show.v1.Rank/RankAll | Lcom/bapis/bilibili/app/show/rank/v1/RankAllResultReq; | Lcom/bapis/bilibili/app/show/rank/v1/RankListReply; | not-tested |
| /bilibili.app.show.v1.Rank/RankRegion | Lcom/bapis/bilibili/app/show/rank/v1/RankRegionResultReq; | Lcom/bapis/bilibili/app/show/rank/v1/RankListReply; | not-tested |
| /bilibili.app.show.v1.Rank/RankRegionList | Lcom/bapis/bilibili/app/show/rank/v1/RankRegionListReq; | Lcom/bapis/bilibili/app/show/rank/v1/RankRegionListReply; | not-tested |
| /bilibili.app.story.v1.Story/AIAudio | Lcom/bapis/bilibili/app/story/v1/AIAudioReq; | Lcom/bapis/bilibili/app/story/v1/AIAudioReply; | not-tested |
| /bilibili.app.story.v1.Story/ArchiveStatus | Lcom/bapis/bilibili/app/story/v1/ArchiveStatusReq; | Lcom/bapis/bilibili/app/story/v1/ArchiveStatusReply; | not-tested |
| /bilibili.app.story.v1.Story/BgmPlay | Lcom/bapis/bilibili/app/story/v1/BgmPlayReq; | Lcom/bapis/bilibili/app/story/v1/BgmPlayReply; | not-tested |
| /bilibili.app.story.v1.Story/BottomDiversionEntrance | Lcom/bapis/bilibili/app/story/v1/BottomDiversionEntranceReq; | Lcom/bapis/bilibili/app/story/v1/BottomDiversionEntranceReply; | not-tested |
| /bilibili.app.story.v1.Story/Rerank | Lcom/bapis/bilibili/app/story/v1/RerankReq; | Lcom/bapis/bilibili/app/story/v1/RerankReply; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category feed --limit 10
node bin/bili-apis.mjs show "ID"
```
