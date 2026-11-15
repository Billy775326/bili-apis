# 受控写操作与状态读回

本页记录专用测试账号上的真实写入验证。用户明确授权账号读写与上传自生成测试视频。默认 Node 读取 SDK 仍只封装 GET；另有[直接 HTTP 上传客户端](direct-upload.md)，已补做上传、封面、投稿及所有权读回。下表中的评论、点赞、收藏和历史清理仍为独立 HTTP 验证脚本，不表示全部写操作已封装进读取 SDK。

[功能导航](README.md) · [82 组目录矩阵](full-validation.md) · [逐步骤证据](../../catalog/pc-full-validation.json)

## 按功能查找

除投稿服务另列域名外，接口主机为 `https://api.bilibili.com`。本次 POST 在隔离 Chrome 内携带账号会话，将 `bili_jct` 对应值写入 `csrf`；Cookie 和 CSRF 值没有导出或提交。参数表只涵盖本次实际输入，不承诺完整服务端契约；资源标识均用字符串。

### 私有收藏夹

| 功能 | 方法与路径 | 本次参数 | 验证及清理 |
| --- | --- | --- | --- |
| 创建私有收藏夹 | POST /x/v3/fav/folder/add | title、intro、privacy=1、csrf | code=0；读回 id、所有者、名称与私有标记 |
| 读取收藏夹 | GET /x/v3/fav/folder/info | media_id | data.id、data.upper.mid、data.title、data.attr；只在浏览器内比较账号与标识 |
| 修改收藏夹 | POST /x/v3/fav/folder/edit | media_id、title、intro、privacy=1、csrf | 改名后读回确认，仍为私有；参数是 media_id |
| 删除新建收藏夹 | POST /x/v3/fav/folder/del | media_ids、platform=web、csrf | code=0；随后 info 返回 11010、无资源数据 |

第一次 CRUD 使用 FormData，收藏内容流程使用 URLSearchParams；本次两种格式均被接受，不推断其他编码。两次新建的临时私有收藏夹均已确认删除，未修改账号原有收藏夹。

### 收藏内容

| 功能 | 方法与路径 | 本次参数 | 验证及清理 |
| --- | --- | --- | --- |
| 列出收藏内容 | GET /x/v3/fav/resource/list | media_id、pn=1、ps=20、platform=web | 核对 info.id 和 medias 内目标视频 |
| 添加自有视频 | POST /x/v3/fav/resource/deal | rid=自有 aid、type=2、add_media_ids=本次新建夹、del_media_ids=空、csrf | code=0 后读回目标存在 |
| 移除测试收藏 | POST /x/v3/fav/resource/deal | rid、type=2、add_media_ids=空、del_media_ids=本次新建夹、csrf | code=0 后读回目标不存在，再删除临时夹 |

### 评论、回复与点赞

| 功能 | 方法与路径 | 本次参数 | 验证及清理 |
| --- | --- | --- | --- |
| 发布测试评论 | POST /x/v2/reply/add | oid=自有 aid、type=1、message=临时标记、plat=1、gaia_source=main_web、csrf | 返回的评论所有者、资源及正文匹配；再 GET 读回 |
| 发布楼中楼 | POST /x/v2/reply/add | 同上，并传 root、parent=刚创建的根评论 | 返回所有者、根评论及正文匹配；GET 确认子回复出现 |
| 读取根评论及回复 | GET /x/v2/reply/reply | oid、type=1、root、pn=1、ps=3 | 核对根评论标识、临时正文和子回复存在性 |
| 删除测试评论/回复 | POST /x/v2/reply/del | oid、type=1、rpid=本次创建资源、csrf | 先删子回复再删根；最终 GET 返回 12006、根节点缺失 |
| 点赞与取消 | POST /x/web-interface/archive/like | bvid=自有视频、like=1 点赞或 2 取消、csrf | 原始未赞；点赞后为 true，取消后恢复 false |
| 读取视频互动状态 | GET /x/web-interface/archive/relation | bvid | 检查 data.like 的布尔状态 |

POST 使用 URLSearchParams。第一轮即时读回出现延迟：评论创建后短暂返回 12006，点赞/取消后的即时状态也不一致。这些失败保留在 `interaction-results.json` 对应证据中；后续清理复查确认已恢复。第二轮以 1.5、2.5、4 秒为上限的只读轮询确认评论、回复与点赞的状态变化，然后删除全部临时评论并取消测试点赞。没有通过重复写入“修复”延迟，也没有对其他用户视频发评论。

### 历史记录

| 功能 | 方法与路径 | 本次参数 | 验证及清理 |
| --- | --- | --- | --- |
| 读取历史游标 | GET /x/web-interface/history/cursor | ps=20、type=archive | 仅输出自有测试视频是否出现，不公开其他历史条目 |
| 单条删除 | POST /x/v2/history/delete | kid=history.business + '_' + 该项 kid、jsonp=jsonp、csrf | 删除前核对自有视频 bvid/aid；code=0，读回不存在 |

正常视频页触发 H5、heartbeat 和 exposure 上报，业务码均为 0，历史记录从不存在变为存在。播放器 `currentTime=0`、`duration=null`，因此只证明初始化、上报应答与历史状态变化，未证实媒体实际播放。随后仅删除本次新增的一条历史记录，未清空或改动原有历史。

单条删除参数来源为官方历史网页脚本，URL、SHA-256 与代码片段见矩阵的 `history_delete_source`。不能将历史变化归因于某一个上报接口，也不能把辅助 POST 应答算作媒体播放验证。

### 早期 UI 上传与投稿（人工辅助观察）

本节保留此前测试。用户曾手动关闭确认弹窗，属于人工辅助 UI 流程，不能作为独立 HTTP 上传成功或无人值守成功证据。新的直接 HTTP 验证与可调用客户端见[直接上传文档](direct-upload.md)。

由官方投稿 UI 上传自生成的 15 秒、640×360 合成动画及配套封面，不读取摄像头、麦克风或屏幕；选择 AI 生成内容声明。没有使用第三方素材。

| 阶段 | 方法与 URL | 实际观察与业务验证 |
| --- | --- | --- |
| 文件/封面上传 | POST https://member.bilibili.com/upload/file | 正常 UI 发起，code=0；没有导出上传凭据 |
| 初始化分片 | POST https://member.bilibili.com/upload/multipart/new | code=0；后续 UI 流程继续 |
| 上传分片 | POST https://member.bilibili.com/upload/multipart/part | code=0 |
| 完成分片 | POST https://member.bilibili.com/upload/multipart/complete | code=0，UI 显示上传完成 |
| 提交投稿 | POST https://member.bilibili.com/x/vu/web/add/v3 | code=0，返回新 aid/bvid；详情读回所有者匹配、稿件 state=0 |

这些请求使用官方 UI 构造的表单、JSON 及上传上下文，当时尚未实现独立上传客户端，也未将签名 URL、文件路径、稿件标识或完整请求体公开。第一次提交因缺封面被 UI 拦住，没有发出投稿请求；补充封面后的提交成功。合成视频 SHA-256：`ec24381e3b36abe906478918a8375743a9f01748875388c188b484a4e4038f90`。

## 测试资源最终状态

- 两条合成测试视频暂留在专用账号：早期 UI 测试一条、后续直接 HTTP 测试一条；没有测试视频删除。
- 临时私有收藏夹、测试收藏、根评论和楼中楼均已删除；点赞恢复未赞。
- 本次视频新增的历史记录已单条删除，读回确认不存在。
- 隔离 Chrome 登录资料仍只保存在本地忽略目录，未复制到公开产物。

## 尚未覆盖

私信页面仅做正常读取观察，没有第二个受控收件账号，因此没有发送私信。未执行支付、充电、赠礼、付费购买、兑换、关注、直播开播或账号安全设置变更。创作者高级功能、直播权限、会员与地区权益仍缺相应测试资源。573 条前端静态候选仍是候选，不能将其记为线上验证成功。

公开证据保存响应哈希、状态和谓词，不包含完整私有响应；没有原始流量的读者不能独立重建全部测试。在线结果对应本次时间与样本，离线测试验证工具行为，不代替再次在线复测。
