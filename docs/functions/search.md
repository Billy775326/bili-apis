# 搜索

综合搜索、搜索建议和结果。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 7 条 HTTP 声明、23 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes13.dex:32043:GET | GET | http://app.bilibili.com/x/v2/search/live | Query:type, Query:keyword, Query:pn, Query:ps, Query:order | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bililive/videoliveplayer/net/beans/BiliLiveMasterSearchResult;&gt;;&gt;; | not-tested |
| classes18.dex:3226:GET | GET | /media/api/search/series/list | Query:season_type | Lqm1/s&lt;Ljava/util/List&lt;Lcom/bilibili/ogv/misc/seasonlist/BangumiSeasonListPrevious;&gt;;&gt;; | not-tested |
| classes18.dex:28874:GET | GET | https://app.bilibili.com/x/v2/search/channel2 | Query:access_key, Query:keyword, Query:pn, Query:ps | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;LnE0/d;&gt;;&gt;; | business-error |
| classes21.dex:15992:GET | GET | https://app.bilibili.com/x/v2/search/square | Query:access_key, Query:ad_extra, Query:from, Query:show, Query:limit, Query:event_id, Query:avid, Query:query, Query:user_act, Query:history_words | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/search2/api/SearchSquareType;&gt;;&gt;;&gt;; | not-tested |
| classes21.dex:15993:GET | GET | https://app.bilibili.com/x/v2/search/recommend | Query:access_key, Query:from, Query:show, Query:event_id, Query:avid, Query:query, Query:user_act, Query:dislike, Query:history_words | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/search2/api/SearchReferral;&gt;;&gt;; | not-tested |
| classes21.dex:15994:GET | GET | https://app.bilibili.com/x/v2/search/episodes | Query:access_key, Query:season_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/search2/api/Episode;&gt;;&gt;;&gt;; | not-tested |
| classes21.dex:15995:GET | GET | https://app.bilibili.com/x/v2/search/episodes_new | Query:access_key, Query:season_id, Query:pn, Query:ps | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/search2/api/EpisodesNewItem;&gt;;&gt;; | not-tested |

## gRPC

请求/响应角色默认仍为静态候选；View/View 已有单独实现核对。表格不代表已建立连接或验证认证。

| 路由 | 请求类型候选 | 响应类型候选 | 线上抽查 |
| --- | --- | --- | --- |
| /bilibili.app.interface.v1.Search/DefaultWords | Lcom/bapis/bilibili/app/interfaces/v1/DefaultWordsReq; | Lcom/bapis/bilibili/app/interfaces/v1/DefaultWordsReply; | not-tested |
| /bilibili.app.interface.v1.Search/Suggest3 | Lcom/bapis/bilibili/app/interfaces/v1/SuggestionResult3Req; | Lcom/bapis/bilibili/app/interfaces/v1/SuggestionResult3Reply; | not-tested |
| /bilibili.app.search.v2.Search/CancelChatTask | Lcom/bapis/bilibili/app/search/v2/CancelChatTaskReq; | Lcom/bapis/bilibili/app/search/v2/CancelChatTaskReply; | not-tested |
| /bilibili.app.search.v2.Search/GetChatAuth | Lcom/bapis/bilibili/app/search/v2/GetChatAuthReq; | Lcom/bapis/bilibili/app/search/v2/GetChatAuthReply; | not-tested |
| /bilibili.app.search.v2.Search/GetChatResult | Lcom/bapis/bilibili/app/search/v2/GetChatResultReq; | Lcom/bapis/bilibili/broadcast/message/main/ChatResult; | not-tested |
| /bilibili.app.search.v2.Search/GetChatResultV2 | Lcom/bapis/bilibili/app/search/v2/GetChatResultReq; | Lcom/bapis/bilibili/broadcast/message/main/ChatResultV2; | not-tested |
| /bilibili.app.search.v2.Search/GetSearchLike | Lcom/bapis/bilibili/app/search/v2/GetSearchLikeReq; | Lcom/bapis/bilibili/app/search/v2/GetSearchLikeReply; | not-tested |
| /bilibili.app.search.v2.Search/QueryRecComment | Lcom/bapis/bilibili/app/search/v2/QueryRecAfterClickReq; | Lcom/bapis/bilibili/app/search/v2/QueryRecAfterClickReply; | not-tested |
| /bilibili.app.search.v2.Search/RelatedSearchFeedback | Lcom/bapis/bilibili/app/search/v2/RelatedSearchFeedbackReq; | Lcom/bapis/bilibili/app/search/v2/RelatedSearchFeedbackReply; | not-tested |
| /bilibili.app.search.v2.Search/SearchDelFollow | Lcom/bapis/bilibili/app/search/v2/SearchDelFollowRequest; | Lcom/bapis/bilibili/app/search/v2/SearchDelFollowResponse; | not-tested |
| /bilibili.app.search.v2.Search/SearchEgg | Lcom/bapis/bilibili/app/search/v2/SearchEggReq; | Lcom/bapis/bilibili/app/search/v2/SearchEggReply; | not-tested |
| /bilibili.app.search.v2.Search/SearchFollow | Lcom/bapis/bilibili/app/search/v2/SearchFollowRequest; | Lcom/bapis/bilibili/app/search/v2/SearchFollowResponse; | not-tested |
| /bilibili.app.search.v2.Search/SearchLike | Lcom/bapis/bilibili/app/search/v2/SearchLikeReq; | Lcom/bapis/bilibili/app/search/v2/SearchLikeReply; | not-tested |
| /bilibili.app.search.v2.Search/SearchShortUrl | Lcom/bapis/bilibili/app/search/v2/SearchShortUrlReq; | Lcom/bapis/bilibili/app/search/v2/SearchShortUrlReply; | not-tested |
| /bilibili.app.search.v2.Search/SubmitChatTask | Lcom/bapis/bilibili/app/search/v2/SubmitChatTaskReq; | Lcom/bapis/bilibili/app/search/v2/SubmitChatTaskReply; | not-tested |
| /bilibili.polymer.app.search.v1.Search/SearchAddReserve | Lcom/bapis/bilibili/polymer/app/search/v1/ReserveRequest; | Lcom/bapis/bilibili/polymer/app/search/v1/ReserveResponse; | not-tested |
| /bilibili.polymer.app.search.v1.Search/SearchAll | Lcom/bapis/bilibili/polymer/app/search/v1/SearchAllRequest; | Lcom/bapis/bilibili/polymer/app/search/v1/SearchAllResponse; | not-tested |
| /bilibili.polymer.app.search.v1.Search/SearchByType | Lcom/bapis/bilibili/polymer/app/search/v1/SearchByTypeRequest; | Lcom/bapis/bilibili/polymer/app/search/v1/SearchByTypeResponse; | not-tested |
| /bilibili.polymer.app.search.v1.Search/SearchComic | Lcom/bapis/bilibili/polymer/app/search/v1/SearchComicRequest; | Lcom/bapis/bilibili/polymer/app/search/v1/SearchComicResponse; | not-tested |
| /bilibili.polymer.app.search.v1.Search/SearchDelReserve | Lcom/bapis/bilibili/polymer/app/search/v1/ReserveRequest; | Lcom/bapis/bilibili/polymer/app/search/v1/ReserveResponse; | not-tested |
| /bilibili.polymer.app.search.v1.Search/SearchOGV | Lcom/bapis/bilibili/polymer/app/search/v1/SearchOGVReq; | Lcom/bapis/bilibili/polymer/app/search/v1/SearchOGVReply; | not-tested |
| /bilibili.polymer.app.search.v1.Search/SearchReserve | Lcom/bapis/bilibili/polymer/app/search/v1/SearchReserveRequest; | Lcom/bapis/bilibili/polymer/app/search/v1/SearchReserveResponse; | not-tested |
| /bilibili.polymer.app.search.v1.Search/SearchReserveCancel | Lcom/bapis/bilibili/polymer/app/search/v1/SearchReserveRequest; | Lcom/bapis/bilibili/polymer/app/search/v1/SearchReserveResponse; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category search --limit 10
node bin/bili-apis.mjs show "ID"
```
