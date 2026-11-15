# 关注与关系

关注、粉丝、关系分组和黑名单。分类根据路由、域名与声明类名称推断，未验证业务行为。

官方 Android 9.19.0：53 条 HTTP 声明、2 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。

[返回分类](README.md) · [与 Play 对比](comparison.md)

## HTTP

参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。

| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |
| --- | --- | --- | --- | --- |
| classes11.dex:9564:POST | POST | https://api.bilibili.com/x/relation/modify | Query:access_key, Query:fid, Query:act, Query:re_src, Query:spmid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes11.dex:9565:GET | GET | https://api.bilibili.com/x/relation | Query:access_key, Query:fid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/fasthybrid/container/playlet/RelationBean;&gt;;&gt;; |
| classes11.dex:9566:GET | GET | https://api.bilibili.com/x/relation/stat | Query:vmid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/fasthybrid/container/playlet/RelationStatBean;&gt;;&gt;; |
| classes11.dex:18582:POST | POST | https://api.bilibili.com/x/relation/modify | Query:access_key, Query:fid, Query:act, Query:re_src, Query:spmid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes11.dex:18583:GET | GET | https://api.bilibili.com/x/relation | Query:access_key, Query:fid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/fasthybrid/playlet/native/reporter/RelationBean;&gt;;&gt;; |
| classes11.dex:18584:GET | GET | https://api.bilibili.com/x/relation/stat | Query:vmid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/fasthybrid/playlet/native/reporter/RelationStatBean;&gt;;&gt;; |
| classes11.dex:26932:POST | POST | https://api.bilibili.com/x/relation/modify | Query:access_key, Query:fid, Query:act, Query:re_src, Query:spmid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes11.dex:26933:GET | GET | https://api.bilibili.com/x/relation | Query:access_key, Query:fid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/fasthybrid/runtime/playlet/RuntimeRelation;&gt;;&gt;; |
| classes11.dex:26934:GET | GET | https://api.bilibili.com/x/relation/stat | Query:vmid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/fasthybrid/runtime/playlet/RuntimeRelationStat;&gt;;&gt;; |
| classes14.dex:32394:POST | POST | https://api.bilibili.com/x/tag/subscribe/cancel | Field:tag_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:32414:POST | POST | https://api.bilibili.com/x/relation/modify | Field:fid, Field:act, Field:re_src | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes14.dex:35732:POST | POST | https://api.bilibili.com/x/relation/tag/special/add | Field:access_key, Field:fid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes14.dex:35733:POST | POST | https://api.bilibili.com/x/relation/tags/addUsers | Field:access_key, Field:fids, Field:tagids | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes14.dex:35734:POST | POST | https://api.bilibili.com/x/relation/modify | Query:access_key, Query:fid, Query:act, Query:re_src | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes14.dex:35735:POST | POST | https://api.bilibili.com/x/relation/modify | Query:access_key, Query:fid, Query:act, Query:re_src, Query:spmid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes14.dex:35736:POST | POST | https://api.bilibili.com/x/relation/modify | Query:access_key, Query:fid, Query:act, Query:re_src, Query:spmid, Query:from_spmid, Query:from_scmid, Query:extend_content, Query:action_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes14.dex:35737:POST | POST | https://api.bilibili.com/x/relation/tag/create | Field:access_key, Field:tag | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/relation/api/AttentionGroup;&gt;;&gt;; |
| classes14.dex:35738:POST | POST | https://api.bilibili.com/x/relation/tag/del | Field:access_key, Field:tagid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes14.dex:35739:POST | POST | https://api.bilibili.com/x/relation/tag/special/del | Field:access_key, Field:fid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes14.dex:35740:GET | GET | https://api.bilibili.com/x/relation/blacks | Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/relation/api/AttentionList;&gt;;&gt;; |
| classes14.dex:35741:GET | GET | https://api.bilibili.com/x/relation/followers | Query:access_key, Query:vmid, Query:pn, Query:ps, Query:re_version | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/relation/api/AttentionList;&gt;;&gt;; |
| classes14.dex:35742:GET | GET | https://api.bilibili.com/x/relation/followings | Query:access_key, Query:vmid, Query:pn, Query:ps, Query:re_version | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/relation/api/AttentionList;&gt;;&gt;; |
| classes14.dex:35743:GET | GET | https://api.bilibili.com/x/relation/followings | Query:access_key, Query:vmid, Query:pn, Query:ps, Query:order_type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/relation/api/AttentionList;&gt;;&gt;; |
| classes14.dex:35744:GET | GET | https://api.bilibili.com/x/relation/tag/user | Query:access_key, Query:fid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/Map&lt;Ljava/lang/String;Ljava/lang/String;&gt;;&gt;;&gt;; |
| classes14.dex:35745:GET | GET | https://api.bilibili.com/x/relation | Query:access_key, Query:fid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/relation/api/Attention;&gt;;&gt;; |
| classes14.dex:35746:GET | GET | https://api.bilibili.com/x/relation/tag/m/tags | Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/relation/api/AllGroup;&gt;;&gt;; |
| classes14.dex:35747:GET | GET | https://api.bilibili.com/x/relation/tag | Query:access_key, Query:tagid, Query:pn, Query:ps | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/relation/api/Attention;&gt;;&gt;;&gt;; |
| classes14.dex:35748:POST | POST | https://api.bilibili.com/x/relation/tag/update | Field:access_key, Field:tagid, Field:name | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes15.dex:12464:POST | POST | https://app.bilibili.com/x/v2/relation/esport/add | Query:access_key, Query:match_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes15.dex:12465:POST | POST | https://app.bilibili.com/x/v2/relation/esport/cancel | Query:access_key, Query:match_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes18.dex:29935:POST | POST | https://app.bilibili.com/x/v2/relation/esport/cancel | Query:access_key, Query:match_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes18.dex:29936:POST | POST | https://app.bilibili.com/x/v2/relation/esport/add | Query:access_key, Query:match_id | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes18.dex:32415:POST | POST | https://api.bilibili.com/x/relation/modify | Query:access_key, Query:fid, Query:act, Query:re_src, Query:spmid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes28.dex:45430:GET | GET | https://api.bilibili.com/x/tag/subscribe/tags | QueryMap:(内容未知), Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Ltv/danmaku/bili/ui/tag/api/Tagv2;&gt;;&gt;;&gt;; |
| classes5.dex:27331:POST | POST | https://api.bilibili.com/x/relation/modify | Query:access_key, Query:fid, Query:act, Query:re_src, Query:spmid, Query:extend_content, Query:track_id, Query:scm_action_id, Query:container_uuid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes8.dex:250:GET | GET | https://api.bilibili.com/x/relation/followers | Query:access_key, Query:vmid, Query:pn, Query:ps, Query:re_version | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/net/entity/FansList;&gt;;&gt;; |
| classes8.dex:251:GET | GET | https://api.bilibili.com/x/relation/followers/unread/count | Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/net/entity/FansNewCont;&gt;;&gt;; |
| classes8.dex:253:GET | GET | https://api.bilibili.com/x/relation/followers/unread | Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/net/entity/FansDotShow;&gt;;&gt;; |
| classes8.dex:33169:POST | POST | https://api.bilibili.com/x/relation/modify | Field:fid, Field:act, Field:re_src | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes8.dex:33170:POST | POST | https://api.bilibili.com/x/relation/batch/modify | Field:fids, Field:act, Field:re_src, Field:csrf | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/followingcard/api/entity/BatchConcerned&lt;Ljava/util/List&lt;Ljava/lang/Long;&gt;;&gt;;&gt;;&gt;; |
| classes8.dex:45023:POST | POST | https://api.bilibili.com/x/tag/subscribe/add | Field:tag_id, Field:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes8.dex:45024:POST | POST | https://api.bilibili.com/x/tag/subscribe/cancel | Field:tag_id, Field:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes9.dex:20261:POST | POST | https://api.bilibili.com/x/relation/tag/special/del | Field:fid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes9.dex:20262:GET | GET | https://api.bilibili.com/x/relation/followings/simple |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/google/gson/JsonObject;&gt;;&gt;; |
| classes9.dex:20263:GET | GET | https://api.bilibili.com/x/relation/tag/special |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Ljava/lang/Long;&gt;;&gt;;&gt;; |
| classes9.dex:20264:POST | POST | https://api.bilibili.com/x/relation/tag/special/add | Field:fid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes9.dex:22057:POST | POST | http://api.bilibili.com/x/relation/modify | Query:access_key, Query:fid, Query:act, Query:re_src | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes9.dex:22058:GET | GET | http://api.bilibili.com/x/relation/blacks | Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/im/contacts/AttentionList;&gt;;&gt;; |
| classes9.dex:22059:GET | GET | http://api.bilibili.com/x/relation/fans | Query:access_key, Query:vmid, Query:pn, Query:ps, Query:re_version, Query:scene | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/im/contacts/AttentionList;&gt;;&gt;; |
| classes9.dex:22060:GET | GET | http://api.bilibili.com/x/relation/followings | Query:access_key, Query:vmid, Query:pn, Query:ps, Query:re_version, Query:scene | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/im/contacts/AttentionList;&gt;;&gt;; |
| classes9.dex:22061:GET | GET | http://api.bilibili.com/x/relation | Query:access_key, Query:fid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/im/contacts/Attention;&gt;;&gt;; |
| classes9.dex:34021:POST | POST | https://api.bilibili.com/x/relation/modify | Query:access_key, Field:fid, Field:act, Field:re_src | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; |
| classes9.dex:39861:POST | POST | https://api.bilibili.com/x/relation/modify | Field:fid, Field:act, Field:re_src, Field:spmid | Lm6x; |

## gRPC

请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。

| 路由 | 请求类型候选 | 响应类型候选 |
| --- | --- | --- |
| /bilibili.relation.interface.v1.RelationInterface/AtSearch | Lcom/bapis/bilibili/relation/interfaces/AtSearchReq; | Lcom/bapis/bilibili/relation/interfaces/AtSearchReply; |
| /bilibili.relation.interface.v1.RelationInterface/ModifyRelation | Lcom/bapis/bilibili/relation/interfaces/FollowingReq; | Lcom/bapis/bilibili/relation/interfaces/ModifyRelationReply; |

```sh
node bin/bili-apis.mjs --edition official list --category relation --limit 10
node bin/bili-apis.mjs --edition official show "ID"
```
