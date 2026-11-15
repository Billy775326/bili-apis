# PC 只读客户端

需要 Node.js 24.11 或更新版本。运行客户端和查询已生成目录无需第三方运行时依赖；前端脚本提取及完整测试需 `npm ci --ignore-scripts`。

## 直接调用

```sh
node bin/bili-web.mjs call video.detail bvid=[REDACTED_VIDEO]
node bin/bili-web.mjs call search.videos keyword=bilibili page=1
node bin/bili-web.mjs call home.popular pn=1 ps=3
```

```js
import { BiliWebClient } from './src/web-client.mjs';
const client = new BiliWebClient();
const { data: video } = await client.call('video.detail', { bvid: '[REDACTED_VIDEO]' });
console.log(video.stat);
const comments = await client.call('comment.main', { oid: video.aid });
```

仅 `call` 联网；`stats`、`list`、`show`、`candidates` 读取本地目录。默认 `list` 显示至少一个匿名字段样本通过的地址；`--all` 可查看已观察但受限或未验证的请求。

## 别名与客户端参数

客户端必填项是该封装的参数约束，不表示服务端不支持其他组合。支持附加有限标量参数；完整服务端缺省值、错误和边界未恢复。

| 别名 | 名称 | 客户端必填 | 客户端缺省参数 | WBI | 独立 HTTP 状态 |
| --- | --- | --- | --- | --- |
| video.detail | 视频详情及内嵌统计 | bvid | {} | 未启用 | 样本通过 |
| video.pages | 分 P 列表 | bvid | {} | 未启用 | 样本通过 |
| video.related | 相关视频 | bvid | {} | 未启用 | 样本通过 |
| video.tags | 视频标签 | bvid | {} | 未启用 | 样本通过 |
| video.detailBundle | 视频详情聚合 | aid | {} | 启用 | 未通过或未执行 |
| video.online | 在线观看人数 | aid, cid | {} | 未启用 | 样本通过 |
| playback.info | 播放器与字幕信息 | aid, cid | {} | 启用 | 样本通过 |
| playback.url | 播放地址元数据 | bvid, cid | {"qn":32,"fnval":16} | 启用 | 样本通过 |
| search.videos | 视频搜索 | keyword | {"search_type":"video","page":1} | 启用 | 样本通过 |
| search.all | 综合搜索 | keyword | {"page":1} | 启用 | 样本通过 |
| search.default | 默认搜索词 |  | {} | 启用 | 样本通过 |
| comment.main | 评论主列表 | oid | {"type":1,"mode":3,"pagination_str":"{\"offset\":\"\"}","plat":1,"web_location":1315875} | 启用 | 样本通过 |
| comment.replies | 楼中楼回复 | oid, root | {"type":1,"pn":1,"ps":10} | 未启用 | 样本通过 |
| user.info | 公开用户资料 | mid | {} | 启用 | 未通过或未执行 |
| user.relationStats | 关注与粉丝数 | vmid | {} | 未启用 | 样本通过 |
| user.uploads | 用户投稿列表 | mid | {"pn":1,"ps":25,"order":"pubdate"} | 启用 | 未通过或未执行 |
| dynamic.hot | 热门动态 |  | {"page":1} | 未启用 | 样本通过 |
| favorite.folders | 公开收藏夹列表 | up_mid | {"pn":1,"ps":20} | 未启用 | 样本通过 |
| home.popular | 热门视频 |  | {"pn":1,"ps":20} | 未启用 | 样本通过 |
| live.roomPlayInfo | 直播间播放信息 | room_id | {"protocol":"0,1","format":"0,1,2","codec":"0,1","qn":0,"platform":"web","ptype":8} | 未启用 | 样本通过 |

## 会话、签名与失败

默认不携带账号 Cookie。确需会话时可将自己授权的 Cookie 交给构造参数 `cookie`，或在本地进程环境设置 `BILI_COOKIE`；不要将其放入命令参数、提交或聊天。此能力尚未进行真实登录验证。

WBI 从当前公开 nav 响应读取图片文件名，按已读取的官方 PC 脚本进行参数整理与 MD5 计算。调用 nav 取得密钥时允许其未登录业务码，但这不会被当作账号已登录。动态密钥只在内存中缓存；长期运行时若密钥变化，应重新创建客户端。[源码位置和哈希](../../evidence/pc-wbi-source.json)。

签名不保证通过账号、地区或风控检查。客户端设置超时、响应大小限制和手动重定向处理，不重试错误。`BiliWebApiError` 暴露接口别名、HTTP 状态、业务码和错误类别；不在错误消息中附加 Cookie 或完整签名 URL。

## 开发复测

```sh
npm ci --ignore-scripts
node --test tests/*.test.mjs
node scripts/capture-pc-web.mjs --chrome /path/to/chrome --output .local/pc-run
node scripts/check-pc-web.mjs --run --output .local/pc-http --bvid [REDACTED_VIDEO]
```

浏览器路径需替换为本机 Chrome/Chromium 可执行文件。原始输出目录必须在 `.local` 下。每次捕获创建全新配置，结束时关闭本次浏览器。CI 不访问 Bilibili。
