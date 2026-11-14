# 关注与关系

关注、粉丝、关系分组和黑名单。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 37 条 HTTP 声明、2 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes12.dex:45905:POST | POST | https://api.bilibili.com/x/relation/modify | Field:fid, Field:act, Field:re_src | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes12.dex:45906:POST | POST | https://api.bilibili.com/x/relation/batch/modify | Field:fids, Field:act, Field:re_src, Field:csrf | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/BatchConcerned&lt;Ljava/util/List&lt;Ljava/lang/Long;&gt;;&gt;;&gt;;&gt;; | not-tested |
| classes13.dex:52675:POST | POST | https://api.bilibili.com/x/relation/tag/special/add | Field:access_key, Field:fid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes13.dex:52676:POST | POST | https://api.bilibili.com/x/relation/tags/addUsers | Field:access_key, Field:fids, Field:tagids | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes13.dex:52677:POST | POST | https://api.bilibili.com/x/relation/modify | Query:access_key, Query:fid, Query:act, Query:re_src, Query:spmid, Query:from_spmid, Query:from_scmid, Query:extend_content, Query:action_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes13.dex:52678:POST | POST | https://api.bilibili.com/x/relation/tag/create | Field:access_key, Field:tag | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/relation/api/AttentionGroup;&gt;;&gt;; | not-tested |
| classes13.dex:52679:POST | POST | https://api.bilibili.com/x/relation/tag/special/del | Field:access_key, Field:fid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes13.dex:52680:GET | GET | https://api.bilibili.com/x/relation/blacks | Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/relation/api/AttentionList;&gt;;&gt;; | not-tested |
| classes13.dex:52681:GET | GET | https://api.bilibili.com/x/relation/tag/user | Query:access_key, Query:fid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/Map&lt;Ljava/lang/String;Ljava/lang/String;&gt;;&gt;;&gt;; | not-tested |
| classes13.dex:52682:GET | GET | https://api.bilibili.com/x/relation | Query:access_key, Query:fid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/relation/api/Attention;&gt;;&gt;; | not-tested |
| classes13.dex:52683:GET | GET | https://api.bilibili.com/x/relation/tag/m/tags | Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/relation/api/AllGroup;&gt;;&gt;; | not-tested |
| classes13.dex:52684:POST | POST | https://api.bilibili.com/x/relation/tag/update | Field:access_key, Field:tagid, Field:name | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes14.dex:22599:GET | GET | https://api.bilibili.com/x/relation/followings/simple |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/google/gson/j;&gt;;&gt;; | not-tested |
| classes14.dex:22600:GET | GET | https://api.bilibili.com/x/relation/tag/special |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Ljava/lang/Long;&gt;;&gt;;&gt;; | not-tested |
| classes14.dex:24955:POST | POST | http://api.bilibili.com/x/relation/modify | Query:access_key, Query:fid, Query:act, Query:re_src | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes14.dex:24956:GET | GET | http://api.bilibili.com/x/relation/fans | Query:access_key, Query:vmid, Query:pn, Query:ps, Query:re_version, Query:scene | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/im/contacts/AttentionList;&gt;;&gt;; | not-tested |
| classes14.dex:24957:GET | GET | http://api.bilibili.com/x/relation/followings | Query:access_key, Query:vmid, Query:pn, Query:ps, Query:re_version, Query:scene | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/im/contacts/AttentionList;&gt;;&gt;; | not-tested |
| classes14.dex:38899:POST | POST | https://api.bilibili.com/x/relation/modify | Query:access_key, Field:fid, Field:act, Field:re_src | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes16.dex:40105:POST | POST | https://api.bilibili.com/x/relation/modify | Query:access_key, Query:fid, Query:act, Query:re_src, Query:spmid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes16.dex:40106:GET | GET | https://api.bilibili.com/x/relation | Query:access_key, Query:fid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/fasthybrid/container/playlet/RelationBean;&gt;;&gt;; | not-tested |
| classes16.dex:40107:GET | GET | https://api.bilibili.com/x/relation/stat | Query:vmid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/fasthybrid/container/playlet/RelationStatBean;&gt;;&gt;; | not-tested |
| classes16.dex:43331:POST | POST | https://api.bilibili.com/x/relation/modify | Query:access_key, Query:fid, Query:act, Query:re_src, Query:spmid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes16.dex:43332:GET | GET | https://api.bilibili.com/x/relation | Query:access_key, Query:fid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/fasthybrid/playlet/native/reporter/RelationBean;&gt;;&gt;; | not-tested |
| classes16.dex:43333:GET | GET | https://api.bilibili.com/x/relation/stat | Query:vmid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/fasthybrid/playlet/native/reporter/RelationStatBean;&gt;;&gt;; | not-tested |
| classes16.dex:53740:POST | POST | https://api.bilibili.com/x/relation/modify | Query:access_key, Query:fid, Query:act, Query:re_src, Query:spmid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes16.dex:53741:GET | GET | https://api.bilibili.com/x/relation | Query:access_key, Query:fid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/fasthybrid/runtime/playlet/RuntimeRelation;&gt;;&gt;; | not-tested |
| classes16.dex:53742:GET | GET | https://api.bilibili.com/x/relation/stat | Query:vmid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/fasthybrid/runtime/playlet/RuntimeRelationStat;&gt;;&gt;; | not-tested |
| classes20.dex:27480:POST | POST | https://app.bilibili.com/x/v2/relation/esport/cancel | Query:access_key, Query:match_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes20.dex:27481:POST | POST | https://app.bilibili.com/x/v2/relation/esport/add | Query:access_key, Query:match_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes21.dex:15988:POST | POST | https://app.bilibili.com/x/v2/relation/esport/add | Query:access_key, Query:match_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes21.dex:15989:POST | POST | https://app.bilibili.com/x/v2/relation/esport/cancel | Query:access_key, Query:match_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes30.dex:56178:GET | GET | https://api.bilibili.com/x/tag/subscribe/tags | QueryMap:(内容未知), Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Ltv/danmaku/bili/ui/tag/api/Tagv2;&gt;;&gt;;&gt;; | not-tested |
| classes33.dex:7619:GET | GET | https://api.bilibili.com/x/relation | Query:fid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bilibililive/api/entity/RelationBean;&gt;;&gt;; | not-tested |
| classes33.dex:7664:POST | POST | https://api.bilibili.com/x/relation/modify | Field:fid, Field:act, Field:re_src, Field:spm_id, Field:extend_content | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Ljava/lang/Void;&gt;;&gt;;&gt;; | not-tested |
| classes5.dex:61308:POST | POST | https://api.bilibili.com/x/relation/modify | Query:access_key, Query:fid, Query:act, Query:re_src, Query:spmid, Query:extend_content, Query:track_id, Query:scm_action_id, Query:container_uuid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes5.dex:63727:POST | POST | https://api.bilibili.com/x/relation/modify | Field:fid, Field:act, Field:re_src, Field:spmid | Lqm1/a; | not-tested |
| classes7.dex:62379:POST | POST | https://api.bilibili.com/x/tag/subscribe/cancel | Field:tag_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |

## gRPC

请求/响应角色默认仍为静态候选；View/View 已有单独实现核对。表格不代表已建立连接或验证认证。

| 路由 | 请求类型候选 | 响应类型候选 | 线上抽查 |
| --- | --- | --- | --- |
| /bilibili.relation.interface.v1.RelationInterface/AtSearch | Lcom/bapis/bilibili/relation/interfaces/AtSearchReq; | Lcom/bapis/bilibili/relation/interfaces/AtSearchReply; | not-tested |
| /bilibili.relation.interface.v1.RelationInterface/ModifyRelation | Lcom/bapis/bilibili/relation/interfaces/FollowingReq; | Lcom/bapis/bilibili/relation/interfaces/ModifyRelationReply; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category relation --limit 10
node bin/bili-apis.mjs show "ID"
```
