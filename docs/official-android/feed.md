# 推荐与分区

推荐流、热门、排行、频道和分区。分类根据路由、域名与声明类名称推断，未验证业务行为。

官方 Android 9.19.0：52 条 HTTP 声明、27 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。

[返回分类](README.md) · [与 Play 对比](comparison.md)

## HTTP

参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。

| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |
| --- | --- | --- | --- | --- |
| classes14.dex:14406:GET | GET | https://app.bilibili.com/x/v2/channel/multiple | Query:access_key, Query:channel_id, Query:sort, Query:offset, Query:spmid, Query:pn, Query:from, Query:theme | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/api/modelv2/channel/ChannelDetailResponse;&gt;;&gt;; |
| classes14.dex:14407:GET | GET | https://app.bilibili.com/x/v2/channel/selected | Query:access_key, Query:channel_id, Query:sort, Query:offset, Query:spmid, Query:pn, Query:from, Query:theme | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/api/modelv2/channel/ChannelDetailResponse;&gt;;&gt;; |
| classes14.dex:14408:GET | GET | https://app.bilibili.com/x/v2/channel/share | Query:id, Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/api/model/ChannelShareInfo;&gt;;&gt;; |
| classes14.dex:14409:GET | GET | https://app.bilibili.com/x/channel/feed/index | Query:channel_id, Query:channel_name, Query:pull, Query:login_event, Query:display_id, Query:access_key, Query:from_spmid, Query:from_page | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/api/modelv2/ChannelFeedV2;&gt;;&gt;; |
| classes14.dex:14410:GET | GET | https://app.bilibili.com/x/channel/feed/tab | Query:channel_id, Query:channel_name, Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/api/model/Channel;&gt;;&gt;; |
| classes14.dex:14411:GET | GET | https://app.bilibili.com/x/v2/channel/detail | Query:channel_id, Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/api/model/ChannelV2;&gt;;&gt;; |
| classes14.dex:14413:POST | POST | https://app.bilibili.com/x/channel/add | Field:channel_id, Field:from, Field:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes14.dex:14414:POST | POST | https://app.bilibili.com/x/channel/cancel | Field:channel_id, Field:from, Field:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes14.dex:15684:GET | GET | https://app.bilibili.com/x/v2/channel/list | Query:access_key, Query:type, Query:offset | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lpdo;&gt;;&gt;; |
| classes14.dex:15685:GET | GET | https://app.bilibili.com/x/v2/channel/tab3 | Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/ArrayList&lt;Lcom/bilibili/pegasus/api/model/ChannelCategoryItem;&gt;;&gt;;&gt;; |
| classes14.dex:15686:GET | GET | https://app.bilibili.com/x/v2/channel/home2 | Query:offset_new, Query:offset_rcmd, Query:spmid, Query:auto_refresh, Query:pn | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lsgo;&gt;;&gt;; |
| classes14.dex:15687:GET | GET | https://app.bilibili.com/x/v2/channel/square2 | Query:offset_new, Query:offset_rcmd, Query:spmid, Query:auto_refresh, Query:pn | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Ls7e;&gt;;&gt;;&gt;; |
| classes14.dex:15688:GET | GET | https://app.bilibili.com/x/v2/channel/red | Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/channelv2/api/ChannelRedPointerData;&gt;;&gt;; |
| classes14.dex:15689:GET | GET | https://app.bilibili.com/x/v2/channel/recommend2 | Query:offset, Query:spmid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lxfw1;&gt;;&gt;; |
| classes14.dex:15690:GET | GET | https://app.bilibili.com/x/v2/channel/mine | Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lyoo;&gt;;&gt;; |
| classes14.dex:15691:POST | POST | https://app.bilibili.com/x/v2/channel/sort | Field:access_key, Field:action, Field:stick, Field:normal | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; |
| classes14.dex:22608:GET | GET | https://app.bilibili.com/x/v2/feed/uinterest/more |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/recommendlabel/data/RecommendLabelMoreResponse;&gt;;&gt;; |
| classes14.dex:22609:GET | GET | https://app.bilibili.com/x/v2/feed/uinterest | Query:need_all_label | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/recommendlabel/data/RecommendLabelResponse;&gt;;&gt;; |
| classes14.dex:22610:POST | POST | https://app.bilibili.com/x/v2/feed/uinterest/mng | Field:fixed_label, Field:unfixed_label, Field:changed_label, Field:action | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/okretro/BaseResponse;&gt;;&gt;; |
| classes14.dex:32356:POST | POST | https://app.bilibili.com/x/channel/cancel | Field:channel_id, Field:from, Field:from_spmid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:40635:GET | GET | https://app.bilibili.com/x/v2/channel/baike/feed | Query:bid, Query:nid, Query:vertical, Query:offset, Query:version | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/channelv2/detail/tab/baike/model/ChannelBaikeFeedResponse;&gt;;&gt;; |
| classes14.dex:40636:GET | GET | https://app.bilibili.com/x/v2/channel/baike/nav | Query:bid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/channelv2/detail/tab/baike/model/ChannelBaikeNavigationResponse;&gt;;&gt;; |
| classes14.dex:41456:GET | GET | https://app.bilibili.com/x/v2/feed/index | Query:window_size_type, Query:raw_window_size_type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/api/modelv2/PegasusFeedResponse;&gt;;&gt;; |
| classes14.dex:41457:GET | GET | https://app.bilibili.com/x/v2/feed/index/tab | Query:access_key, Query:id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/api/model/PromoOperationTab;&gt;;&gt;; |
| classes14.dex:43692:GET | GET | https://app.bilibili.com/x/v2/feed/nf | Query:goto, Query:id, Query:up_id, Query:up_name, Query:jumpgoto, Query:video_mode, Query:column, Query:tname, Query:from, Query:is_second_panel, Query:old_pegasus, Query:title, Query:translated_status, Query:dislike_info | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/feedbackdialog/model/NegativeFeedbackResponse;&gt;;&gt;; |
| classes14.dex:44687:GET | GET | https://app.bilibili.com/x/v2/feed/index | Query:idx, Query:pull, Query:login_event, Query:open_event, Query:banner_hash, Query:interest_result, Query:flush, Query:interest_id, Query:splash_id, Query:splash_ids, Query:splash_creative_id, Query:interest_pos_ids, Query:cny_info, Query:clipboard_video_id, Query:clipboard_unique_k, Query:window_size_type, Query:raw_window_size_type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/data/base/PegasusResponse;&gt;;&gt;; |
| classes14.dex:44688:GET | GET | https://app.bilibili.com/x/v2/feed/index/interest | Query:oaid, Query:cny_info, Query:action | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lt6v0;&gt;;&gt;; |
| classes14.dex:44689:GET | GET | https://app.bilibili.com/x/v2/feed/second/interest | Query:oaid, Query:interest_id, Query:interest_result, Query:interest_type, Query:device_type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lt6v0;&gt;;&gt;; |
| classes14.dex:44690:GET | GET | https://app.bilibili.com/x/v2/feed/index | Query:idx, Query:pull, Query:flush, Query:banner_hash, Query:window_size_type, Query:raw_window_size_type, Query:supplement_action | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/data/base/PegasusResponse;&gt;;&gt;; |
| classes14.dex:54029:GET | GET | https://app.bilibili.com/x/v2/feed/index/vertical/tab | Query:pull, Query:offset, Query:channel_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/verticaltab/api/model/VerticalTabFeedResponse;&gt;;&gt;; |
| classes14.dex:56578:GET | GET | https://app.bilibili.com/x/v2/feed/nf | Query:goto, Query:id, Query:up_id, Query:up_name, Query:jumpgoto, Query:video_mode, Query:column, Query:tname, Query:from, Query:is_second_panel, Query:title | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/pegasus/data/feedback/NegativeFeedbackResponse;&gt;;&gt;; |
| classes19.dex:13250:GET | GET | https://app.bilibili.com/x/v2/feed/index/story | QueryMap:(内容未知), Query:aid, Query:cid, Query:bvid, Query:epid, Query:trackid, Query:story_param, Query:pull, Query:request_from, Query:contain, Query:ogv_style, Query:creative_id, Query:feed_status, Query:goto, Query:material_no, Query:questionaire_info, Query:open_event, Query:need_translate, Query:reply_down_style, Query:room_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/video/story/api/StoryFeedResponse;&gt;; |
| classes19.dex:13252:GET | GET | https://app.bilibili.com/x/v2/feed/index/story/refresh | QueryMap:(内容未知), Query:id, Query:goto, Query:trackid, Query:scene | Ljava/lang/Object; |
| classes19.dex:13253:GET | GET | https://app.bilibili.com/x/v2/feed/index/relate/story | QueryMap:(内容未知), Query:aid, Query:trackid, Query:spmid, Query:from_spmid, Query:view_attribute, Query:season_id, Query:arc_attribute, Query:need_translate, Query:reply_down_style, Query:goto | Ljava/lang/Object; |
| classes19.dex:13255:GET | GET | https://app.bilibili.com/x/v2/feed/index/story/trans | Query:aid, Query:cid, Query:trackid, Query:goto, Query:translation_status | Ljava/lang/Object; |
| classes19.dex:57317:GET | GET | https://app.bilibili.com/x/feed/dislike/cancel | QueryMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Ljava/lang/String;&gt;; |
| classes19.dex:57318:GET | GET | https://app.bilibili.com/x/feed/dislike | QueryMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Ljava/lang/String;&gt;; |
| classes19.dex:57319:GET | GET | https://app.bilibili.com/x/v2/feed/nf | Query:goto, Query:id, Query:title, Query:from, Query:up_name, Query:dislike_info, Query:is_second_panel | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/dislikefeedback/remote/NfResponse;&gt;;&gt;; |
| classes27.dex:56969:GET | GET | https://app.bilibili.com/x/v2/region/index | Query:ver | Lcom/bilibili/okretro/call/BiliCall&lt;Ltv/danmaku/bili/category/CategoryMeta;&gt;; |
| classes28.dex:13386:GET | GET | https://app.bilibili.com/x/v2/feed/coldstart |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; |
| classes3.dex:61022:GET | GET | https://app.bilibili.com/x/v2/feed/index/story/game/status | Query:game_base_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/adcommon/data/model/AdGameGiftModule;&gt;;&gt;; |
| classes36.dex:52819:GET | GET | https://app.bilibili.com/x/feed/dislike/cancel | QueryMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Ljava/lang/Void;&gt;; |
| classes36.dex:52821:GET | GET | https://app.bilibili.com/x/feed/dislike | QueryMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Ljava/lang/Void;&gt;; |
| classes36.dex:58862:GET | GET | https://app.bilibili.com/x/v2/feed/index/story/cart | QueryMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/adcommon/data/model/DmAdvert;&gt;;&gt;; |
| classes5.dex:17989:GET | GET | https://app.bilibili.com/x/feed/dislike/cancel | QueryMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Ljava/lang/String;&gt;; |
| classes5.dex:17990:GET | GET | https://app.bilibili.com/x/feed/dislike | QueryMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Ljava/lang/String;&gt;; |
| classes5.dex:60223:POST | POST | https://app.bilibili.com/x/channel/add | Field:channel_id, Field:from, Field:from_spmid, Field:model_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes5.dex:60224:POST | POST | https://app.bilibili.com/x/channel/cancel | Field:channel_id, Field:from, Field:from_spmid, Field:model_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes8.dex:33187:POST | POST | https://api.vc.bilibili.com/feed/v1/feed/isFollowed | Field:follow | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/net/entity/FollowStatus;&gt;;&gt;; |
| classes9.dex:34017:GET | GET | https://api.bilibili.com/x/article/rank/categories |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/column/api/response/ColumnRankCategory;&gt;;&gt;;&gt;; |
| classes9.dex:34018:GET | GET | https://api.bilibili.com/x/article/rank/list | Query:access_key, Query:cid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/column/api/response/ColumnRank;&gt;;&gt;;&gt;; |
| classes9.dex:44916:GET | GET | https://app.bilibili.com/x/feed/upper/article | Query:access_key, Query:pn, Query:ps | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/column/api/response/ColumnFeedList;&gt;;&gt;; |

## gRPC

请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。

| 路由 | 请求类型候选 | 响应类型候选 |
| --- | --- | --- |
| /bilibili.app.home.v1.Home/HomePopup | Lcom/bapis/bilibili/app/home/v1/HomePopupReq; | Lcom/bapis/bilibili/app/home/v1/HomePopupRes; |
| /bilibili.app.home.v1.Home/MineSelectionContent | Lcom/bapis/bilibili/app/home/v1/MineSelectionContentReq; | Lcom/bapis/bilibili/app/home/v1/MineSelectionContentRes; |
| /bilibili.app.home.v1.Home/MineSelectionOptionItems | Lcom/bapis/bilibili/app/home/v1/MineSelectionOptionItemsReq; | Lcom/bapis/bilibili/app/home/v1/MineSelectionOptionItemsRes; |
| /bilibili.app.home.v1.Home/MineSelectionOptionUpdate | Lcom/bapis/bilibili/app/home/v1/MineSelectionOptionUpdateReq; | Lcom/bapis/bilibili/app/home/v1/MineSelectionOptionUpdateRes; |
| /bilibili.app.home.v1.Home/Recent | Lcom/bapis/bilibili/app/home/v1/RecentReq; | Lcom/bapis/bilibili/app/home/v1/RecentRes; |
| /bilibili.app.home.v1.Home/RemoveVideo | Lcom/bapis/bilibili/app/home/v1/RemoveVideoReq; | Lcom/bapis/bilibili/app/home/v1/RemoveVideoRes; |
| /bilibili.app.home.v1.Home/TopLeftTab | Lcom/bapis/bilibili/app/home/v1/TopLeftTabReq; | Lcom/bapis/bilibili/app/home/v1/TopLeftTabRes; |
| /bilibili.app.home.v1.Home/TopLeftTabUpdate | Lcom/bapis/bilibili/app/home/v1/TopLeftTabUpdateReq; | Lcom/bapis/bilibili/app/home/v1/TopLeftTabUpdateRes; |
| /bilibili.app.show.v1.AppShow/GetActProgress | Lcom/bapis/bilibili/app/show/gateway/v1/GetActProgressReq; | Lcom/bapis/bilibili/app/show/gateway/v1/GetActProgressReply; |
| /bilibili.app.show.v1.Mixture/BceCreative | Lcom/bapis/bilibili/app/show/mixture/v1/BceCreativeReq; | Lcom/bapis/bilibili/app/show/mixture/v1/BceCreativeReply; |
| /bilibili.app.show.v1.Mixture/ChannelRedirect | Lcom/bapis/bilibili/app/show/mixture/v1/ChannelRedirectReq; | Lcom/bapis/bilibili/app/show/mixture/v1/ChannelRedirectReply; |
| /bilibili.app.show.v1.Mixture/Clarity | Lcom/bapis/bilibili/app/show/mixture/v1/ClarityReq; | Lcom/bapis/bilibili/app/show/mixture/v1/ClarityReply; |
| /bilibili.app.show.v1.Mixture/RegionIndex | Lcom/bapis/bilibili/app/show/mixture/v1/RegionIndexReq; | Lcom/bapis/bilibili/app/show/mixture/v1/RegionIndexReply; |
| /bilibili.app.show.v1.Mixture/RegionList | Lcom/bapis/bilibili/app/show/mixture/v1/RegionListReq; | Lcom/bapis/bilibili/app/show/mixture/v1/RegionListReply; |
| /bilibili.app.show.v1.Mixture/RegionShortcut | Lcom/bapis/bilibili/app/show/mixture/v1/RegionShortcutReq; | Lcom/bapis/bilibili/app/show/mixture/v1/RegionShortcutReply; |
| /bilibili.app.show.v1.Mixture/Widget | Lcom/bapis/bilibili/app/show/mixture/v1/WidgetReq; | Lcom/bapis/bilibili/app/show/mixture/v1/WidgetReply; |
| /bilibili.app.show.v1.Mixture/WidgetGuide | Lcom/bapis/bilibili/app/show/mixture/v1/WidgetGuideReq; | Lcom/bapis/bilibili/app/show/mixture/v1/WidgetGuideReply; |
| /bilibili.app.show.v1.Mixture/WidgetGuideUpdate | Lcom/bapis/bilibili/app/show/mixture/v1/WidgetGuideUpdateReq; | Lcom/bapis/bilibili/app/show/mixture/v1/EmptyReply; |
| /bilibili.app.show.v1.Popular/Index | Lcom/bapis/bilibili/app/show/popular/v1/PopularResultReq; | Lcom/bapis/bilibili/app/show/popular/v1/PopularReply; |
| /bilibili.app.show.v1.Rank/RankAll | Lcom/bapis/bilibili/app/show/rank/v1/RankAllResultReq; | Lcom/bapis/bilibili/app/show/rank/v1/RankListReply; |
| /bilibili.app.show.v1.Rank/RankRegion | Lcom/bapis/bilibili/app/show/rank/v1/RankRegionResultReq; | Lcom/bapis/bilibili/app/show/rank/v1/RankListReply; |
| /bilibili.app.show.v1.Rank/RankRegionList | Lcom/bapis/bilibili/app/show/rank/v1/RankRegionListReq; | Lcom/bapis/bilibili/app/show/rank/v1/RankRegionListReply; |
| /bilibili.app.story.v1.Story/AIAudio | Lcom/bapis/bilibili/app/story/v1/AIAudioReq; | Lcom/bapis/bilibili/app/story/v1/AIAudioReply; |
| /bilibili.app.story.v1.Story/ArchiveStatus | Lcom/bapis/bilibili/app/story/v1/ArchiveStatusReq; | Lcom/bapis/bilibili/app/story/v1/ArchiveStatusReply; |
| /bilibili.app.story.v1.Story/BgmPlay | Lcom/bapis/bilibili/app/story/v1/BgmPlayReq; | Lcom/bapis/bilibili/app/story/v1/BgmPlayReply; |
| /bilibili.app.story.v1.Story/BottomDiversionEntrance | Lcom/bapis/bilibili/app/story/v1/BottomDiversionEntranceReq; | Lcom/bapis/bilibili/app/story/v1/BottomDiversionEntranceReply; |
| /bilibili.app.story.v1.Story/Rerank | Lcom/bapis/bilibili/app/story/v1/RerankReq; | Lcom/bapis/bilibili/app/story/v1/RerankReply; |

```sh
node bin/bili-apis.mjs --edition official list --category feed --limit 10
node bin/bili-apis.mjs --edition official show "ID"
```
