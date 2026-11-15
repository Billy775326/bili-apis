# 音频与音乐

<!-- android-edition:start -->
包名：`com.bilibili.app.in` · 渠道：Google Play · 版本：6.8.0（9180200）。

[全部版本](../../../../README.md) · [本包文档](../README.md) · [网页接口](../../../../../pc/README.md) · [基线元数据](../../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

音频、音乐和听视频。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 6 条 HTTP 声明、33 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes17.dex:3310:GET | GET | https://api.bilibili.com/audio/music-service/app/createcenter/songs/delete/%7Bsong_id%7D | Path:song_id, Query:mid, Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes17.dex:3311:GET | GET | https://api.bilibili.com/audio/music-service/app/createcenter/songs/query/new | Query:mid, Query:access_key, Query:page_index, Query:page_size, Query:status, Query:ctime, Query:collection_num, Query:play_num | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/music/podcast/legacy/data/ContributionPage;&gt;;&gt;; | not-tested |
| classes17.dex:3312:GET | GET | https://api.bilibili.com/audio/music-service/app/createcenter/songs/query/new | Query:mid, Query:access_key, Query:page_index, Query:page_size, Query:ctime, Query:collection_num, Query:play_num | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/music/podcast/legacy/data/ContributionPage;&gt;;&gt;; | not-tested |
| classes17.dex:3313:GET | GET | https://api.bilibili.com/audio/music-service-c/songs/internal/upsongslist/v3 | Query:uid, Query:pageIndex, Query:pageSize | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/music/podcast/legacy/upspace/AudioResponse;&gt;;&gt;; | not-tested |
| classes20.dex:6867:GET | GET | https://api.bilibili.com/audio/music-service-c/songs/playing | Query:access_key, Query:song_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/studio/videoeditor/capturev3/data/MusicDetailsEntry;&gt;;&gt;; | not-tested |
| classes20.dex:6869:GET | GET | https://www.bilibili.com/audio/music-service-c/url | Query:access_key, QueryMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/studio/videoeditor/bgm/BgmDynamic;&gt;;&gt;; | not-tested |

## gRPC

请求/响应角色默认仍为静态候选；View/View 已有单独实现核对。表格不代表已建立连接或验证认证。

| 路由 | 请求类型候选 | 响应类型候选 | 线上抽查 |
| --- | --- | --- | --- |
| /bilibili.app.listener.v1.Listener/BKArcDetails | Lcom/bapis/bilibili/app/listener/v1/BKArcDetailsReq; | Lcom/bapis/bilibili/app/listener/v1/BKArcDetailsResp; | not-tested |
| /bilibili.app.listener.v1.Listener/CoinAdd | Lcom/bapis/bilibili/app/listener/v1/CoinAddReq; | Lcom/bapis/bilibili/app/listener/v1/CoinAddResp; | not-tested |
| /bilibili.app.listener.v1.Listener/Event | Lcom/bapis/bilibili/app/listener/v1/EventReq; | Lcom/bapis/bilibili/app/listener/v1/EventResp; | not-tested |
| /bilibili.app.listener.v1.Listener/FavFolderCreate | Lcom/bapis/bilibili/app/listener/v1/FavFolderCreateReq; | Lcom/bapis/bilibili/app/listener/v1/FavFolderCreateResp; | not-tested |
| /bilibili.app.listener.v1.Listener/FavFolderDelete | Lcom/bapis/bilibili/app/listener/v1/FavFolderDeleteReq; | Lcom/bapis/bilibili/app/listener/v1/FavFolderDeleteResp; | not-tested |
| /bilibili.app.listener.v1.Listener/FavFolderDetail | Lcom/bapis/bilibili/app/listener/v1/FavFolderDetailReq; | Lcom/bapis/bilibili/app/listener/v1/FavFolderDetailResp; | not-tested |
| /bilibili.app.listener.v1.Listener/FavFolderList | Lcom/bapis/bilibili/app/listener/v1/FavFolderListReq; | Lcom/bapis/bilibili/app/listener/v1/FavFolderListResp; | not-tested |
| /bilibili.app.listener.v1.Listener/FavItemAdd | Lcom/bapis/bilibili/app/listener/v1/FavItemAddReq; | Lcom/bapis/bilibili/app/listener/v1/FavItemAddResp; | not-tested |
| /bilibili.app.listener.v1.Listener/FavItemBatch | Lcom/bapis/bilibili/app/listener/v1/FavItemBatchReq; | Lcom/bapis/bilibili/app/listener/v1/FavItemBatchResp; | not-tested |
| /bilibili.app.listener.v1.Listener/FavItemDel | Lcom/bapis/bilibili/app/listener/v1/FavItemDelReq; | Lcom/bapis/bilibili/app/listener/v1/FavItemDelResp; | not-tested |
| /bilibili.app.listener.v1.Listener/FavoredInAnyFolders | Lcom/bapis/bilibili/app/listener/v1/FavoredInAnyFoldersReq; | Lcom/bapis/bilibili/app/listener/v1/FavoredInAnyFoldersResp; | not-tested |
| /bilibili.app.listener.v1.Listener/Medialist | Lcom/bapis/bilibili/app/listener/v1/MedialistReq; | Lcom/bapis/bilibili/app/listener/v1/MedialistResp; | not-tested |
| /bilibili.app.listener.v1.Listener/PickCardDetail | Lcom/bapis/bilibili/app/listener/v1/PickCardDetailReq; | Lcom/bapis/bilibili/app/listener/v1/PickCardDetailResp; | not-tested |
| /bilibili.app.listener.v1.Listener/PickFeed | Lcom/bapis/bilibili/app/listener/v1/PickFeedReq; | Lcom/bapis/bilibili/app/listener/v1/PickFeedResp; | not-tested |
| /bilibili.app.listener.v1.Listener/Ping | Lcom/google/protobuf/Empty; | Lcom/google/protobuf/Empty; | not-tested |
| /bilibili.app.listener.v1.Listener/PlayActionReport | Lcom/bapis/bilibili/app/listener/v1/PlayActionReportReq; | Lcom/google/protobuf/Empty; | not-tested |
| /bilibili.app.listener.v1.Listener/PlayHistory | Lcom/bapis/bilibili/app/listener/v1/PlayHistoryReq; | Lcom/bapis/bilibili/app/listener/v1/PlayHistoryResp; | not-tested |
| /bilibili.app.listener.v1.Listener/PlayHistoryAdd | Lcom/bapis/bilibili/app/listener/v1/PlayHistoryAddReq; | Lcom/google/protobuf/Empty; | not-tested |
| /bilibili.app.listener.v1.Listener/PlayHistoryDel | Lcom/bapis/bilibili/app/listener/v1/PlayHistoryDelReq; | Lcom/google/protobuf/Empty; | not-tested |
| /bilibili.app.listener.v1.Listener/Playlist | Lcom/bapis/bilibili/app/listener/v1/PlaylistReq; | Lcom/bapis/bilibili/app/listener/v1/PlaylistResp; | not-tested |
| /bilibili.app.listener.v1.Listener/PlaylistAdd | Lcom/bapis/bilibili/app/listener/v1/PlaylistAddReq; | Lcom/google/protobuf/Empty; | not-tested |
| /bilibili.app.listener.v1.Listener/PlaylistDel | Lcom/bapis/bilibili/app/listener/v1/PlaylistDelReq; | Lcom/google/protobuf/Empty; | not-tested |
| /bilibili.app.listener.v1.Listener/PlayURL | Lcom/bapis/bilibili/app/listener/v1/PlayURLReq; | Lcom/bapis/bilibili/app/listener/v1/PlayURLResp; | not-tested |
| /bilibili.app.listener.v1.Listener/RcmdPlaylist | Lcom/bapis/bilibili/app/listener/v1/RcmdPlaylistReq; | Lcom/bapis/bilibili/app/listener/v1/RcmdPlaylistResp; | not-tested |
| /bilibili.app.listener.v1.Listener/ThumbUp | Lcom/bapis/bilibili/app/listener/v1/ThumbUpReq; | Lcom/bapis/bilibili/app/listener/v1/ThumbUpResp; | not-tested |
| /bilibili.app.listener.v1.Listener/TripleLike | Lcom/bapis/bilibili/app/listener/v1/TripleLikeReq; | Lcom/bapis/bilibili/app/listener/v1/TripleLikeResp; | not-tested |
| /bilibili.app.listener.v1.Music/Click | Lcom/bapis/bilibili/app/listener/v1/ClickReq; | Lcom/bapis/bilibili/app/listener/v1/ClickResp; | not-tested |
| /bilibili.app.listener.v1.Music/FavTabShow | Lcom/bapis/bilibili/app/listener/v1/FavTabShowReq; | Lcom/bapis/bilibili/app/listener/v1/FavTabShowResp; | not-tested |
| /bilibili.app.listener.v1.Music/MainFavMusicMenuList | Lcom/bapis/bilibili/app/listener/v1/MainFavMusicMenuListReq; | Lcom/bapis/bilibili/app/listener/v1/MainFavMusicMenuListResp; | not-tested |
| /bilibili.app.listener.v1.Music/MainFavMusicSubTabList | Lcom/bapis/bilibili/app/listener/v1/MainFavMusicSubTabListReq; | Lcom/bapis/bilibili/app/listener/v1/MainFavMusicSubTabListResp; | not-tested |
| /bilibili.app.listener.v1.Music/MenuDelete | Lcom/bapis/bilibili/app/listener/v1/MenuDeleteReq; | Lcom/bapis/bilibili/app/listener/v1/MenuDeleteResp; | not-tested |
| /bilibili.app.listener.v1.Music/MenuEdit | Lcom/bapis/bilibili/app/listener/v1/MenuEditReq; | Lcom/bapis/bilibili/app/listener/v1/MenuEditResp; | not-tested |
| /bilibili.app.listener.v1.Music/MenuSubscribe | Lcom/bapis/bilibili/app/listener/v1/MenuSubscribeReq; | Lcom/bapis/bilibili/app/listener/v1/MenuSubscribeResp; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category audio --limit 10
node bin/bili-apis.mjs show "ID"
```
