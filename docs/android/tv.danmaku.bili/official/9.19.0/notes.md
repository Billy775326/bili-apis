# 笔记

<!-- android-edition:start -->
包名：`tv.danmaku.bili` · 渠道：Official Android 64-bit · 版本：9.19.0（9190400）。

[全部版本](../../../README.md) · [本包文档](README.md) · [网页接口](../../../../pc/README.md) · [基线元数据](../../../../../catalog/android/tv.danmaku.bili/official/9.19.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

观看笔记和笔记发布管理。分类根据路由、域名与声明类名称推断，未验证业务行为。

官方 Android 9.19.0：5 条 HTTP 声明、0 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。

[返回分类](README.md) · [与 Play 对比](comparison.md)

## HTTP

参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。

| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |
| --- | --- | --- | --- | --- |
| classes14.dex:32390:POST | POST | https://api.bilibili.com/x/note/del | Field:note_ids | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:32392:POST | POST | https://api.bilibili.com/x/note/publish/del | Field:cvids | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:32407:GET | GET | https://api.bilibili.com/x/note/list | Query:ps, Query:pn | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/note/RspNoteList;&gt;;&gt;; |
| classes14.dex:32408:GET | GET | https://api.bilibili.com/x/note/publish/list/archive | Query:oid, Query:oid_type, Query:ps, Query:pn | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/note/RspNoteListByOid;&gt;;&gt;; |
| classes14.dex:32411:GET | GET | https://api.bilibili.com/x/note/publish/list/user | Query:ps, Query:pn | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/note/RspNoteList;&gt;;&gt;; |

## gRPC

请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。

| 路由 | 请求类型候选 | 响应类型候选 |
| --- | --- | --- |

```sh
node bin/bili-apis.mjs --edition official list --category notes --limit 10
node bin/bili-apis.mjs --edition official show "ID"
```
