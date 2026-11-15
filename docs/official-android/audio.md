# 音频与音乐

音频、音乐和听视频。分类根据路由、域名与声明类名称推断，未验证业务行为。

官方 Android 9.19.0：6 条 HTTP 声明、33 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。

[返回分类](README.md) · [与 Play 对比](comparison.md)

## HTTP

参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。

| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |
| --- | --- | --- | --- | --- |
| classes12.dex:50099:GET | GET | https://api.bilibili.com/audio/music-service/app/createcenter/songs/delete/%7Bsong_id%7D | Path:song_id, Query:mid, Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes12.dex:50100:GET | GET | https://api.bilibili.com/audio/music-service/app/createcenter/songs/query/new | Query:mid, Query:access_key, Query:page_index, Query:page_size, Query:ctime, Query:collection_num, Query:play_num | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/music/podcast/legacy/data/ContributionPage;&gt;;&gt;; |
| classes12.dex:50101:GET | GET | https://api.bilibili.com/audio/music-service/app/createcenter/songs/query/new | Query:mid, Query:access_key, Query:page_index, Query:page_size, Query:status, Query:ctime, Query:collection_num, Query:play_num | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/music/podcast/legacy/data/ContributionPage;&gt;;&gt;; |
| classes12.dex:65246:GET | GET | https://api.bilibili.com/audio/music-service-c/songs/internal/upsongslist/v3 | Query:uid, Query:pageIndex, Query:pageSize | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/music/podcast/legacy/upspace/AudioResponse;&gt;;&gt;; |
| classes18.dex:43533:GET | GET | https://api.bilibili.com/audio/music-service-c/songs/playing | Query:access_key, Query:song_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/studio/videoeditor/capturev3/data/MusicDetailsEntry;&gt;;&gt;; |
| classes18.dex:48651:GET | GET | https://www.bilibili.com/audio/music-service-c/url | Query:access_key, QueryMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/studio/videoeditor/bgm/BgmDynamic;&gt;;&gt;; |

## gRPC

请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。

| 路由 | 请求类型候选 | 响应类型候选 |
| --- | --- | --- |
| /bilibili.app.listener.v1.Listener/BKArcDetails | Lcom/bapis/bilibili/app/listener/v1/BKArcDetailsReq; | Lcom/bapis/bilibili/app/listener/v1/BKArcDetailsResp; |
| /bilibili.app.listener.v1.Listener/CoinAdd | Lcom/bapis/bilibili/app/listener/v1/CoinAddReq; | Lcom/bapis/bilibili/app/listener/v1/CoinAddResp; |
| /bilibili.app.listener.v1.Listener/Event | Lcom/bapis/bilibili/app/listener/v1/EventReq; | Lcom/bapis/bilibili/app/listener/v1/EventResp; |
| /bilibili.app.listener.v1.Listener/FavFolderCreate | Lcom/bapis/bilibili/app/listener/v1/FavFolderCreateReq; | Lcom/bapis/bilibili/app/listener/v1/FavFolderCreateResp; |
| /bilibili.app.listener.v1.Listener/FavFolderDelete | Lcom/bapis/bilibili/app/listener/v1/FavFolderDeleteReq; | Lcom/bapis/bilibili/app/listener/v1/FavFolderDeleteResp; |
| /bilibili.app.listener.v1.Listener/FavFolderDetail | Lcom/bapis/bilibili/app/listener/v1/FavFolderDetailReq; | Lcom/bapis/bilibili/app/listener/v1/FavFolderDetailResp; |
| /bilibili.app.listener.v1.Listener/FavFolderList | Lcom/bapis/bilibili/app/listener/v1/FavFolderListReq; | Lcom/bapis/bilibili/app/listener/v1/FavFolderListResp; |
| /bilibili.app.listener.v1.Listener/FavItemAdd | Lcom/bapis/bilibili/app/listener/v1/FavItemAddReq; | Lcom/bapis/bilibili/app/listener/v1/FavItemAddResp; |
| /bilibili.app.listener.v1.Listener/FavItemBatch | Lcom/bapis/bilibili/app/listener/v1/FavItemBatchReq; | Lcom/bapis/bilibili/app/listener/v1/FavItemBatchResp; |
| /bilibili.app.listener.v1.Listener/FavItemDel | Lcom/bapis/bilibili/app/listener/v1/FavItemDelReq; | Lcom/bapis/bilibili/app/listener/v1/FavItemDelResp; |
| /bilibili.app.listener.v1.Listener/FavoredInAnyFolders | Lcom/bapis/bilibili/app/listener/v1/FavoredInAnyFoldersReq; | Lcom/bapis/bilibili/app/listener/v1/FavoredInAnyFoldersResp; |
| /bilibili.app.listener.v1.Listener/Medialist | Lcom/bapis/bilibili/app/listener/v1/MedialistReq; | Lcom/bapis/bilibili/app/listener/v1/MedialistResp; |
| /bilibili.app.listener.v1.Listener/PickCardDetail | Lcom/bapis/bilibili/app/listener/v1/PickCardDetailReq; | Lcom/bapis/bilibili/app/listener/v1/PickCardDetailResp; |
| /bilibili.app.listener.v1.Listener/PickFeed | Lcom/bapis/bilibili/app/listener/v1/PickFeedReq; | Lcom/bapis/bilibili/app/listener/v1/PickFeedResp; |
| /bilibili.app.listener.v1.Listener/Ping | Lcom/google/protobuf/Empty; | Lcom/google/protobuf/Empty; |
| /bilibili.app.listener.v1.Listener/PlayActionReport | Lcom/bapis/bilibili/app/listener/v1/PlayActionReportReq; | Lcom/google/protobuf/Empty; |
| /bilibili.app.listener.v1.Listener/PlayHistory | Lcom/bapis/bilibili/app/listener/v1/PlayHistoryReq; | Lcom/bapis/bilibili/app/listener/v1/PlayHistoryResp; |
| /bilibili.app.listener.v1.Listener/PlayHistoryAdd | Lcom/bapis/bilibili/app/listener/v1/PlayHistoryAddReq; | Lcom/google/protobuf/Empty; |
| /bilibili.app.listener.v1.Listener/PlayHistoryDel | Lcom/bapis/bilibili/app/listener/v1/PlayHistoryDelReq; | Lcom/google/protobuf/Empty; |
| /bilibili.app.listener.v1.Listener/Playlist | Lcom/bapis/bilibili/app/listener/v1/PlaylistReq; | Lcom/bapis/bilibili/app/listener/v1/PlaylistResp; |
| /bilibili.app.listener.v1.Listener/PlaylistAdd | Lcom/bapis/bilibili/app/listener/v1/PlaylistAddReq; | Lcom/google/protobuf/Empty; |
| /bilibili.app.listener.v1.Listener/PlaylistDel | Lcom/bapis/bilibili/app/listener/v1/PlaylistDelReq; | Lcom/google/protobuf/Empty; |
| /bilibili.app.listener.v1.Listener/PlayURL | Lcom/bapis/bilibili/app/listener/v1/PlayURLReq; | Lcom/bapis/bilibili/app/listener/v1/PlayURLResp; |
| /bilibili.app.listener.v1.Listener/RcmdPlaylist | Lcom/bapis/bilibili/app/listener/v1/RcmdPlaylistReq; | Lcom/bapis/bilibili/app/listener/v1/RcmdPlaylistResp; |
| /bilibili.app.listener.v1.Listener/ThumbUp | Lcom/bapis/bilibili/app/listener/v1/ThumbUpReq; | Lcom/bapis/bilibili/app/listener/v1/ThumbUpResp; |
| /bilibili.app.listener.v1.Listener/TripleLike | Lcom/bapis/bilibili/app/listener/v1/TripleLikeReq; | Lcom/bapis/bilibili/app/listener/v1/TripleLikeResp; |
| /bilibili.app.listener.v1.Music/Click | Lcom/bapis/bilibili/app/listener/v1/ClickReq; | Lcom/bapis/bilibili/app/listener/v1/ClickResp; |
| /bilibili.app.listener.v1.Music/FavTabShow | Lcom/bapis/bilibili/app/listener/v1/FavTabShowReq; | Lcom/bapis/bilibili/app/listener/v1/FavTabShowResp; |
| /bilibili.app.listener.v1.Music/MainFavMusicMenuList | Lcom/bapis/bilibili/app/listener/v1/MainFavMusicMenuListReq; | Lcom/bapis/bilibili/app/listener/v1/MainFavMusicMenuListResp; |
| /bilibili.app.listener.v1.Music/MainFavMusicSubTabList | Lcom/bapis/bilibili/app/listener/v1/MainFavMusicSubTabListReq; | Lcom/bapis/bilibili/app/listener/v1/MainFavMusicSubTabListResp; |
| /bilibili.app.listener.v1.Music/MenuDelete | Lcom/bapis/bilibili/app/listener/v1/MenuDeleteReq; | Lcom/bapis/bilibili/app/listener/v1/MenuDeleteResp; |
| /bilibili.app.listener.v1.Music/MenuEdit | Lcom/bapis/bilibili/app/listener/v1/MenuEditReq; | Lcom/bapis/bilibili/app/listener/v1/MenuEditResp; |
| /bilibili.app.listener.v1.Music/MenuSubscribe | Lcom/bapis/bilibili/app/listener/v1/MenuSubscribeReq; | Lcom/bapis/bilibili/app/listener/v1/MenuSubscribeResp; |

```sh
node bin/bili-apis.mjs --edition official list --category audio --limit 10
node bin/bili-apis.mjs --edition official show "ID"
```
