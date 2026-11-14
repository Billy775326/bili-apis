# 表情与贴纸

表情包和表情面板。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 15 条 HTTP 声明、0 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes11.dex:42758:POST | POST | https://api.bilibili.com/x/emote/package/add | Field:access_key, Field:business, Field:package_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes11.dex:42759:GET | GET | https://api.bilibili.com/x/emote/badge/status | Query:access_key, Query:business, Query:badge | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/emoticon/model/EmoticonBadgeStatus;&gt;;&gt;; | not-tested |
| classes11.dex:42760:GET | GET | https://api.bilibili.com/x/emote/user/panel | Query:access_key, Query:business, Query:up_mid, Query:aid, Query:hash_value | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/emoticon/model/EmoticonPackagesDetailData;&gt;;&gt;; | not-tested |
| classes11.dex:42761:GET | GET | https://api.bilibili.com/x/emote/package | Query:access_key, Query:business, Query:ids | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/emoticon/model/EmoticonPackagesDetailData;&gt;;&gt;; | not-tested |
| classes11.dex:42763:GET | GET | https://api.bilibili.com/x/emote/creation/package/list | Query:business, Query:up_mid, Query:aid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/emoticon/model/UpperEmoticonPackageList;&gt;;&gt;; | not-tested |
| classes11.dex:42764:GET | GET | https://api.bilibili.com/x/emote/up/list | Query:business, Query:mid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/app/comm/emoticon/model/Emote;&gt;;&gt;;&gt;; | not-tested |
| classes11.dex:42765:POST | POST | https://api.bilibili.com/x/emote/package/remove | Field:access_key, Field:business, Field:package_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes11.dex:42766:POST | POST | https://api.bilibili.com/x/emote/user/recommend/remove | Field:business, Field:package_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes11.dex:42767:POST | POST | https://api.bilibili.com/x/emote/badge/multi/update | Field:access_key, Field:package_id, Field:emote_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes11.dex:42768:POST | POST | https://api.bilibili.com/x/emote/badge/update | Field:access_key, Field:business, Field:badge | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes11.dex:42769:POST | POST | https://api.bilibili.com/x/emote/package/sort | Field:access_key, Field:business, Field:sort | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes11.dex:63092:GET | GET | https://api.bilibili.com/x/emote/v2/user/packages | Query:access_key, Query:business | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/emoticon/model/EmoticonSettingsData;&gt;;&gt;; | not-tested |
| classes11.dex:63093:GET | GET | https://api.bilibili.com/x/emote/package/more | Query:access_key, Query:business | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/emoticon/model/EmoticonSettingsData;&gt;;&gt;; | not-tested |
| classes11.dex:63094:GET | GET | https://api.bilibili.com/x/emote/package/pay | Query:access_key, Query:business, Query:ps, Query:pn | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/emoticon/model/EmoticonSettingsData;&gt;;&gt;; | not-tested |
| classes11.dex:63095:GET | GET | https://api.bilibili.com/x/emote/package/search | Query:business, Query:name, Query:ps, Query:pn | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/emoticon/model/EmoticonSettingsData;&gt;;&gt;; | business-error |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category emote --limit 10
node bin/bili-apis.mjs show "ID"
```
