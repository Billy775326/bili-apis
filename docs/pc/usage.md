# 按场景使用 PC 接口

先阅读[运行环境与错误处理](client.md)。下方资源 ID 都是合成占位值，需要替换；`bilibili` 是公开测试关键词。执行示例会发出匿名 GET，代码不自动重试或循环抓取全部数据。

## 从热门视频取得详情和分 P

在仓库根目录运行：

```sh
node examples/pc-read.mjs
```

[完整示例源码](../../examples/pc-read.mjs)依次调用 `home.popular`、`video.detail` 和 `video.pages`，从实际热门响应取出视频标识，只打印标识与分 P 数量。查询失败会保留错误，不将错误页面当作数据。

以下是**合成输出示意，不是真实服务端响应**：

```json
{
  "bvid": "BV1EXAMPLE01",
  "aid": 10001,
  "cid": 20001,
  "page_count": 1
}
```

## 搜索视频

在仓库根目录创建 `.mjs` 文件；以下每个 JavaScript 场景可以单独使用。

```js
import { BiliWebClient } from './src/web-client.mjs';
const client = new BiliWebClient();
const response = await client.call('search.videos', {
  keyword: 'bilibili',
  page: 1,
});
console.log(response.data.page, response.data.result);
```

`search.videos` 和 `search.all` 分别是视频搜索和综合搜索。客户端会处理 WBI；本轮只有首屏字段样本通过，不能据此承诺全部搜索页都可读取。[搜索接口详解](search.md)。

## 评论首屏和一次下一页

以下 BVID 为合成占位值。先替换成公开视频标识，再将 `data.aid` 作为评论 `oid`。

```js
import { BiliWebClient } from './src/web-client.mjs';
const client = new BiliWebClient();
const video = await client.call('video.detail', { bvid: 'BV1EXAMPLE01' });
const first = await client.call('comment.main', { oid: video.data.aid });
console.log(first.data.replies); // 普通评论，top_replies 是另一组置顶评论
const cursor = first.data.cursor;
const nextOffset = cursor?.pagination_reply?.next_offset;
if (cursor?.is_end === false && nextOffset) {
  const next = await client.call('comment.main', {
    oid: video.data.aid,
    pagination_str: JSON.stringify({ offset: nextOffset }),
  });
  console.log(next.data.replies);
}
```

服务端游标只在进程内传递，不手工拼造或公开。若响应没有普通评论，也没有明确的空列表结束状态，应检查限制，不能把置顶评论当作整页成功。本轮一个视频的首屏及一次下一页通过，历史其他视频有失败；完整遍历尚未验证。[评论接口详解](comment.md)。

## 空间合集、公告与公开收藏夹

`30001` 是合成 UID，占位值需替换。公开内容为空或不可见不等于有权读取私人内容。

```js
import { BiliWebClient } from './src/web-client.mjs';
const client = new BiliWebClient();
const mid = '30001';
const collections = await client.call('user.collections', { mid });
const notice = await client.call('user.notice', { mid });
const folders = await client.call('favorite.folders', { up_mid: mid });
console.log(collections.data.items_lists, notice.data, folders.data.list);
```

[用户空间](user.md) · [公开收藏夹](favorite.md) · [关注和粉丝统计](relation.md)。投稿列表本轮返回 412；用户资料因同类风控停止而跳过，不能将这些未通过项计入可用列表。

## 直播房间基础信息

`50001` 是合成房间号，占位值需替换；当前单房间示例使用实际房间号。

```js
import { BiliWebClient } from './src/web-client.mjs';
const client = new BiliWebClient();
const roomId = '50001';
const response = await client.call('live.roomBaseInfo', { room_ids: roomId });
console.log(response.data.by_room_ids[roomId]);
```

房间基础信息和播放元数据不等于已建立直播连接。项目尚未实现弹幕实时监听、发言或送礼；直播间综合信息本轮返回 -352。[直播接口详解](live.md)。

## 查找本轮通过的接口

以下命令离线读取已保存目录，不发出 API 请求：

```sh
node bin/bili-web.mjs list --current-http --limit 100
node bin/bili-web.mjs list --current-http --category search
node bin/bili-web.mjs show search.videos
```

`--current-http` 只显示本轮每个地址的相关用例全部通过的项；默认 `list` 也可能显示历史通过项。`--all` 查看所有观察请求。[本轮验证](current.md)保留失败与跳过。
