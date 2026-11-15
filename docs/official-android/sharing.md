# 分享

分享渠道、海报、短链和分享回调。分类根据路由、域名与声明类名称推断，未验证业务行为。

官方 Android 9.19.0：17 条 HTTP 声明、0 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。

[返回分类](README.md) · [与 Play 对比](comparison.md)

## HTTP

参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。

| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |
| --- | --- | --- | --- | --- |
| classes12.dex:19700:POST | POST | https://api.bilibili.com/x/share/click | Field:access_key, Field:share_id, Field:oid, Field:share_mode, Field:share_origin, Field:share_channel, Field:sid, Field:tag, Field:share_title, Field:share_content, Field:share_pattern, Field:buvid, Field:spm_id, Field:from_spmid, Field:from, Field:tid, Field:object_extra_fields, Field:platform, Field:panel_type, Field:share_session_id, Query:action_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/sharewrapper/online/api/ShareClickResult;&gt;;&gt;; |
| classes12.dex:19701:GET | GET | https://api.bilibili.com/x/share/channels | Query:access_key, Query:share_id, Query:oid, Query:share_origin, Query:sid, Query:buvid, Query:spm_id, Query:from_spmid, Query:object_extra_fields, Query:platform, Query:panel_type, Query:share_session_id, Query:triggerparameter, Query:action_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/sharewrapper/online/api/ShareChannels;&gt;;&gt;; |
| classes12.dex:19702:POST | POST | https://api.bilibili.com/x/share/placard | Field:share_id, Field:oid, Field:buvid, Field:share_origin, Field:sid, Query:action_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/sharewrapper/online/api/PlacardData;&gt;;&gt;; |
| classes12.dex:19703:POST | POST | https://api.bilibili.com/x/share/quickWord | Field:share_id, Field:oid, Field:share_origin, Field:sid, Field:buvid, Field:access_key, Field:platform, Field:spm_id, Field:from_spmid, Field:object_extra_fields, Field:share_channel, Field:panel_type, Field:share_session_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/sharewrapper/online/api/QuickWordData;&gt;;&gt;; |
| classes12.dex:19704:POST | POST | https://api.bilibili.com/x/share/finish | Field:link, Field:success, Field:spm_id, Field:from_spmid, Field:object_extra_fields, Field:panel_type, Field:share_session_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/sharewrapper/online/api/FinishResult;&gt;;&gt;; |
| classes12.dex:19705:POST | POST | https://api.bilibili.com/x/share/finish | Field:link, Field:success, Field:spm_id, Field:from_spmid, Field:object_extra_fields, Field:share_id, Field:oid, Field:sid, Field:share_origin, Field:share_channel, Field:panel_type, Field:share_session_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/sharewrapper/online/api/FinishResult;&gt;;&gt;; |
| classes12.dex:19706:POST | POST | https://api.bilibili.com/x/share/word | Field:share_id, Field:oid, Field:share_origin, Field:sid, Field:buvid, Field:access_key, Field:platform, Field:spm_id, Field:from_spmid, Field:object_extra_fields, Field:panel_type, Field:share_session_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/sharewrapper/online/api/WordShareData;&gt;;&gt;; |
| classes15.dex:38848:GET | GET | https://api.bilibili.com/x/share/isFirstShare | Query:need_complete | Ljava/lang/Object; |
| classes19.dex:13243:GET | GET | https://api.bilibili.com/x/share/guide | QueryMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/video/story/api/ShareIconResult;&gt;;&gt;; |
| classes19.dex:13244:GET | GET | https://api.bilibili.com/x/share/isFirstShare | Query:need_complete | Ljava/lang/Object; |
| classes28.dex:20614:GET | GET | https://api.bilibili.com/x/share/url2info | Query:url, Query:device | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/main/imagerecognize/ImageUrlInfo;&gt;;&gt;; |
| classes28.dex:24991:GET | GET | https://api.bilibili.com/x/share/download | Query:share_id, Query:share_origin, Query:oid, Query:sid, Query:spm_id, Query:object_extra_fields, Query:panel_type, Query:share_session_id, Query:action_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/downloadshare/api/DownloadShareInfo;&gt;;&gt;; |
| classes28.dex:39809:GET | GET | https://api.bilibili.com/x/share/clipboard | Query:word | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/main/usergrow/ShareWordResult;&gt;;&gt;; |
| classes28.dex:63904:GET | GET | https://api.bilibili.com/x/share/clipboardMeta | Query:access_key, Query:start_pattern, Query:business, Query:data, Query:first_launch_timestamp | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/clipboard/ClipboardResult;&gt;;&gt;; |
| classes28.dex:63905:GET | GET | https://api.bilibili.com/x/share/clipboardRules |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/clipboard/RegexData;&gt;;&gt;; |
| classes5.dex:45447:GET | GET | https://api.bilibili.com/x/share/guide | QueryMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/gemini/ugc/feature/share/ShareIconResult;&gt;;&gt;; |
| classes5.dex:55552:POST | POST | https://api.bilibili.com/x/share/placard | FieldMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/supermenu/share/pic/PosterData;&gt;;&gt;; |

## gRPC

请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。

| 路由 | 请求类型候选 | 响应类型候选 |
| --- | --- | --- |

```sh
node bin/bili-apis.mjs --edition official list --category sharing --limit 10
node bin/bili-apis.mjs --edition official show "ID"
```
