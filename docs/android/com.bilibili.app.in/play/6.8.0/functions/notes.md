# 笔记

<!-- android-edition:start -->
包名：`com.bilibili.app.in` · 渠道：Google Play · 版本：6.8.0（9180200）。

[全部版本](../../../../README.md) · [本包文档](../README.md) · [网页接口](../../../../../pc/README.md) · [基线元数据](../../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

观看笔记和笔记发布管理。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 5 条 HTTP 声明、0 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes7.dex:62375:POST | POST | https://api.bilibili.com/x/note/del | Field:note_ids | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes7.dex:62377:POST | POST | https://api.bilibili.com/x/note/publish/del | Field:cvids | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes7.dex:62391:GET | GET | https://api.bilibili.com/x/note/list | Query:ps, Query:pn | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/note/RspNoteList;&gt;;&gt;; | not-tested |
| classes7.dex:62392:GET | GET | https://api.bilibili.com/x/note/publish/list/archive | Query:oid, Query:oid_type, Query:ps, Query:pn | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/note/RspNoteListByOid;&gt;;&gt;; | not-tested |
| classes7.dex:62395:GET | GET | https://api.bilibili.com/x/note/publish/list/user | Query:ps, Query:pn | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/playset/note/RspNoteList;&gt;;&gt;; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category notes --limit 10
node bin/bili-apis.mjs show "ID"
```
