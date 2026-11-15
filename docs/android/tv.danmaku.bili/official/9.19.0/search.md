# 搜索

<!-- android-edition:start -->
包名：`tv.danmaku.bili` · 渠道：Official Android 64-bit · 版本：9.19.0（9190400）。

[全部版本](../../../README.md) · [本包文档](README.md) · [网页接口](../../../../pc/README.md) · [基线元数据](../../../../../catalog/android/tv.danmaku.bili/official/9.19.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

综合搜索、搜索建议和结果。分类根据路由、域名与声明类名称推断，未验证业务行为。

官方 Android 9.19.0：9 条 HTTP 声明、23 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。

[返回分类](README.md) · [与 Play 对比](comparison.md)

## HTTP

参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。

| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |
| --- | --- | --- | --- | --- |
| classes12.dex:42440:GET | GET | /media/api/search/series/list | Query:season_type | Lio/reactivex/rxjava3/core/Single&lt;Ljava/util/List&lt;Lcom/bilibili/ogv/misc/seasonlist/BangumiSeasonListPrevious;&gt;;&gt;; |
| classes14.dex:14412:GET | GET | https://app.bilibili.com/x/v2/search/channel2 | Query:access_key, Query:keyword, Query:pn, Query:ps | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcro;&gt;;&gt;; |
| classes15.dex:12468:GET | GET | https://app.bilibili.com/x/v2/search/square | Query:access_key, Query:ad_extra, Query:from, Query:show, Query:limit, Query:event_id, Query:avid, Query:query, Query:user_act, Query:history_words | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/search2/api/SearchSquareType;&gt;;&gt;;&gt;; |
| classes15.dex:12469:GET | GET | https://app.bilibili.com/x/v2/search/recommend | Query:access_key, Query:from, Query:show, Query:event_id, Query:avid, Query:query, Query:user_act, Query:dislike, Query:history_words | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/search2/api/SearchReferral;&gt;;&gt;; |
| classes15.dex:12470:GET | GET | https://app.bilibili.com/x/v2/search/episodes | Query:access_key, Query:season_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/search2/api/Episode;&gt;;&gt;;&gt;; |
| classes15.dex:12471:GET | GET | https://app.bilibili.com/x/v2/search/episodes_new | Query:access_key, Query:season_id, Query:pn, Query:ps | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/search2/api/EpisodesNewItem;&gt;;&gt;; |
| classes15.dex:12472:GET | GET | https://app.bilibili.com/x/v2/search/live | Query:type, Query:keyword, Query:pn, Query:ps, Query:order | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/search2/result/vertical/live/data/BiliLiveMasterSearchResult;&gt;;&gt;; |
| classes15.dex:12473:GET | GET | https://app.bilibili.com/x/v2/search/recommend/noresult | Query:access_key, Query:pn, Query:ps, Query:keyword | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/search2/api/SearchResultAll;&gt;;&gt;; |
| classes7.dex:23111:GET | GET | http://app.bilibili.com/x/v2/search/live | Query:type, Query:keyword, Query:pn, Query:ps, Query:order | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bililive/videoliveplayer/net/beans/BiliLiveMasterSearchResult;&gt;;&gt;; |

## gRPC

请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。

| 路由 | 请求类型候选 | 响应类型候选 |
| --- | --- | --- |
| /bilibili.app.interface.v1.Search/DefaultWords | Lcom/bapis/bilibili/app/interfaces/v1/DefaultWordsReq; | Lcom/bapis/bilibili/app/interfaces/v1/DefaultWordsReply; |
| /bilibili.app.interface.v1.Search/Suggest3 | Lcom/bapis/bilibili/app/interfaces/v1/SuggestionResult3Req; | Lcom/bapis/bilibili/app/interfaces/v1/SuggestionResult3Reply; |
| /bilibili.app.search.v2.Search/CancelChatTask | Lcom/bapis/bilibili/app/search/v2/CancelChatTaskReq; | Lcom/bapis/bilibili/app/search/v2/CancelChatTaskReply; |
| /bilibili.app.search.v2.Search/GetChatAuth | Lcom/bapis/bilibili/app/search/v2/GetChatAuthReq; | Lcom/bapis/bilibili/app/search/v2/GetChatAuthReply; |
| /bilibili.app.search.v2.Search/GetChatResult | Lcom/bapis/bilibili/app/search/v2/GetChatResultReq; | Lcom/bapis/bilibili/broadcast/message/main/ChatResult; |
| /bilibili.app.search.v2.Search/GetChatResultV2 | Lcom/bapis/bilibili/app/search/v2/GetChatResultReq; | Lcom/bapis/bilibili/broadcast/message/main/ChatResultV2; |
| /bilibili.app.search.v2.Search/GetSearchLike | Lcom/bapis/bilibili/app/search/v2/GetSearchLikeReq; | Lcom/bapis/bilibili/app/search/v2/GetSearchLikeReply; |
| /bilibili.app.search.v2.Search/QueryRecComment | Lcom/bapis/bilibili/app/search/v2/QueryRecAfterClickReq; | Lcom/bapis/bilibili/app/search/v2/QueryRecAfterClickReply; |
| /bilibili.app.search.v2.Search/RelatedSearchFeedback | Lcom/bapis/bilibili/app/search/v2/RelatedSearchFeedbackReq; | Lcom/bapis/bilibili/app/search/v2/RelatedSearchFeedbackReply; |
| /bilibili.app.search.v2.Search/SearchDelFollow | Lcom/bapis/bilibili/app/search/v2/SearchDelFollowRequest; | Lcom/bapis/bilibili/app/search/v2/SearchDelFollowResponse; |
| /bilibili.app.search.v2.Search/SearchEgg | Lcom/bapis/bilibili/app/search/v2/SearchEggReq; | Lcom/bapis/bilibili/app/search/v2/SearchEggReply; |
| /bilibili.app.search.v2.Search/SearchFollow | Lcom/bapis/bilibili/app/search/v2/SearchFollowRequest; | Lcom/bapis/bilibili/app/search/v2/SearchFollowResponse; |
| /bilibili.app.search.v2.Search/SearchLike | Lcom/bapis/bilibili/app/search/v2/SearchLikeReq; | Lcom/bapis/bilibili/app/search/v2/SearchLikeReply; |
| /bilibili.app.search.v2.Search/SearchShortUrl | Lcom/bapis/bilibili/app/search/v2/SearchShortUrlReq; | Lcom/bapis/bilibili/app/search/v2/SearchShortUrlReply; |
| /bilibili.app.search.v2.Search/SubmitChatTask | Lcom/bapis/bilibili/app/search/v2/SubmitChatTaskReq; | Lcom/bapis/bilibili/app/search/v2/SubmitChatTaskReply; |
| /bilibili.polymer.app.search.v1.Search/SearchAddReserve | Lcom/bapis/bilibili/polymer/app/search/v1/ReserveRequest; | Lcom/bapis/bilibili/polymer/app/search/v1/ReserveResponse; |
| /bilibili.polymer.app.search.v1.Search/SearchAll | Lcom/bapis/bilibili/polymer/app/search/v1/SearchAllRequest; | Lcom/bapis/bilibili/polymer/app/search/v1/SearchAllResponse; |
| /bilibili.polymer.app.search.v1.Search/SearchByType | Lcom/bapis/bilibili/polymer/app/search/v1/SearchByTypeRequest; | Lcom/bapis/bilibili/polymer/app/search/v1/SearchByTypeResponse; |
| /bilibili.polymer.app.search.v1.Search/SearchComic | Lcom/bapis/bilibili/polymer/app/search/v1/SearchComicRequest; | Lcom/bapis/bilibili/polymer/app/search/v1/SearchComicResponse; |
| /bilibili.polymer.app.search.v1.Search/SearchDelReserve | Lcom/bapis/bilibili/polymer/app/search/v1/ReserveRequest; | Lcom/bapis/bilibili/polymer/app/search/v1/ReserveResponse; |
| /bilibili.polymer.app.search.v1.Search/SearchOGV | Lcom/bapis/bilibili/polymer/app/search/v1/SearchOGVReq; | Lcom/bapis/bilibili/polymer/app/search/v1/SearchOGVReply; |
| /bilibili.polymer.app.search.v1.Search/SearchReserve | Lcom/bapis/bilibili/polymer/app/search/v1/SearchReserveRequest; | Lcom/bapis/bilibili/polymer/app/search/v1/SearchReserveResponse; |
| /bilibili.polymer.app.search.v1.Search/SearchReserveCancel | Lcom/bapis/bilibili/polymer/app/search/v1/SearchReserveRequest; | Lcom/bapis/bilibili/polymer/app/search/v1/SearchReserveResponse; |

```sh
node bin/bili-apis.mjs --edition official list --category search --limit 10
node bin/bili-apis.mjs --edition official show "ID"
```
