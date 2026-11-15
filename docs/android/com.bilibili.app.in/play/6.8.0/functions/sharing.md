# 分享

<!-- android-edition:start -->
包名：`com.bilibili.app.in` · 渠道：Google Play · 版本：6.8.0（9180200）。

[全部版本](../../../../README.md) · [本包文档](../README.md) · [网页接口](../../../../../pc/README.md) · [基线元数据](../../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

分享渠道、海报、短链和分享回调。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 17 条 HTTP 声明、0 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes11.dex:1059:POST | POST | https://api.bilibili.com/x/share/placard | FieldMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/supermenu/share/pic/PosterData;&gt;;&gt;; | not-tested |
| classes15.dex:8441:GET | GET | https://api.bilibili.com/x/share/guide | QueryMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/gemini/ugc/feature/share/ShareIconResult;&gt;;&gt;; | not-tested |
| classes16.dex:3372:GET | GET | https://api.bilibili.com/x/share/download | Query:share_id, Query:share_origin, Query:oid, Query:sid, Query:spm_id, Query:object_extra_fields, Query:panel_type, Query:share_session_id, Query:action_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/downloadshare/api/DownloadShareInfo;&gt;;&gt;; | not-tested |
| classes17.dex:36410:POST | POST | https://api.bilibili.com/x/share/click | Field:access_key, Field:share_id, Field:oid, Field:share_mode, Field:share_origin, Field:share_channel, Field:sid, Field:tag, Field:share_title, Field:share_content, Field:share_pattern, Field:buvid, Field:spm_id, Field:from_spmid, Field:from, Field:tid, Field:object_extra_fields, Field:platform, Field:panel_type, Field:share_session_id, Query:action_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/sharewrapper/online/api/ShareClickResult;&gt;;&gt;; | not-tested |
| classes17.dex:36411:GET | GET | https://api.bilibili.com/x/share/channels | Query:access_key, Query:share_id, Query:oid, Query:share_origin, Query:sid, Query:buvid, Query:spm_id, Query:from_spmid, Query:object_extra_fields, Query:platform, Query:panel_type, Query:share_session_id, Query:triggerparameter, Query:action_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/sharewrapper/online/api/ShareChannels;&gt;;&gt;; | not-tested |
| classes17.dex:36412:POST | POST | https://api.bilibili.com/x/share/placard | Field:share_id, Field:oid, Field:buvid, Field:share_origin, Field:sid, Query:action_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/sharewrapper/online/api/PlacardData;&gt;;&gt;; | not-tested |
| classes17.dex:36413:POST | POST | https://api.bilibili.com/x/share/quickWord | Field:share_id, Field:oid, Field:share_origin, Field:sid, Field:buvid, Field:access_key, Field:platform, Field:spm_id, Field:from_spmid, Field:object_extra_fields, Field:share_channel, Field:panel_type, Field:share_session_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/sharewrapper/online/api/QuickWordData;&gt;;&gt;; | not-tested |
| classes17.dex:36414:POST | POST | https://api.bilibili.com/x/share/finish | Field:link, Field:success, Field:spm_id, Field:from_spmid, Field:object_extra_fields, Field:panel_type, Field:share_session_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/sharewrapper/online/api/FinishResult;&gt;;&gt;; | not-tested |
| classes17.dex:36415:POST | POST | https://api.bilibili.com/x/share/finish | Field:link, Field:success, Field:spm_id, Field:from_spmid, Field:object_extra_fields, Field:share_id, Field:oid, Field:sid, Field:share_origin, Field:share_channel, Field:panel_type, Field:share_session_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/sharewrapper/online/api/FinishResult;&gt;;&gt;; | not-tested |
| classes17.dex:36416:POST | POST | https://api.bilibili.com/x/share/word | Field:share_id, Field:oid, Field:share_origin, Field:sid, Field:buvid, Field:access_key, Field:platform, Field:spm_id, Field:from_spmid, Field:object_extra_fields, Field:panel_type, Field:share_session_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/sharewrapper/online/api/WordShareData;&gt;;&gt;; | not-tested |
| classes20.dex:36733:GET | GET | https://api.bilibili.com/x/share/isFirstShare | Query:need_complete | Ljava/lang/Object; | not-tested |
| classes23.dex:14155:GET | GET | https://api.bilibili.com/x/share/isFirstShare | Query:need_complete | Ljava/lang/Object; | not-tested |
| classes30.dex:21228:GET | GET | https://api.bilibili.com/x/share/url2info | Query:url, Query:device | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/main/imagerecognize/ImageUrlInfo;&gt;;&gt;; | not-tested |
| classes30.dex:45411:GET | GET | https://api.bilibili.com/x/share/clipboardRules |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/clipboard/RegexData;&gt;;&gt;; | not-tested |
| classes30.dex:45412:GET | GET | https://api.bilibili.com/x/share/clipboardMeta | Query:access_key, Query:start_pattern, Query:business, Query:data, Query:first_launch_timestamp | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/clipboard/ClipboardResult;&gt;;&gt;; | not-tested |
| classes30.dex:49215:GET | GET | https://api.bilibili.com/x/share/clipboard | Query:word | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/main/usergrow/ShareWordResult;&gt;;&gt;; | not-tested |
| classes33.dex:7625:POST | POST | https://api.bilibili.com/x/share/quickWord | Field:share_id, Field:oid, Field:buvid, Field:platform, Field:share_channel, Field:share_origin | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/sharewrapper/online/api/QuickWordData;&gt;;&gt;; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category sharing --limit 10
node bin/bili-apis.mjs show "ID"
```
