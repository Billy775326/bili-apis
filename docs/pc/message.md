# 网页私信：发送、受控读取与撤回

本页记录专用测试号到一个用户控制的个人号之间的直接 HTTP 验证。两轮共发送两条临时标记文本，均已由测试号撤回并在收件侧确认撤回事件。第二轮完整验证了发送侧、收件侧的消息 key、双方身份和随机正文。全程 UI 操作与人工确认均为 0。

[功能导航](README.md) · [网页逐项矩阵](web-validation.md) · [脱敏线上证据](../../evidence/web-message-validation.json)

个人号只作为受控收件人：读取登录身份，并请求这一对账号会话的最新一条消息；没有读取会话列表、翻页、访问其他联系人会话、发送个人号消息、改设置、删除会话或调用已读确认接口。会话凭据仅在本机内存使用。

## 已验证与未通过

| 功能 | 方法与路径（主机 api.vc.bilibili.com） | 本次结果 |
| --- | --- | --- |
| 发送文本 | POST /web_im/v1/web_im/send_msg，msg_type=1 | 业务码 0，返回精确 msg_key；第二轮双方读回同一标记正文 |
| 最新单条读取 | GET /svr_sync/v1/svr_sync/fetch_session_msgs | 固定 talker_id 为受控对方、session_type=1、size=1；身份及消息 key/正文匹配 |
| 撤回自有消息 | POST /web_im/v1/web_im/send_msg，msg_type=5 | 业务码 0；收件侧读取 msg_type=5 且 content 指向本次原消息 key |
| 消息精确详情（实验性） | POST /x/im/sync_msg_svr/v1/fetch_msg_detail | 多次返回 -400，**未通过**；不得将离线替身测试当作线上成功 |

撤回确认只证明已读回服务端撤回事件，不表示消息内容已从所有存储中物理删除。没有删除会话；收件侧可能保留撤回提示。

第一轮已发送并撤回，但详情读取失败，未作为正文投递通过。修正表单数组字段后详情仍失败。随后只取受控会话的最新一条，确认第一轮撤回事件；在这一读取方式通过后才进行第二轮独立测试，正文投递和撤回均通过。全部失败记录保留。

## 客户端与环境

在仓库根目录使用 Node.js 24.11 或更新版本，无第三方运行时依赖。使用 `src/web-message-client.mjs` 的 `BiliMessageClient`；默认不会连接浏览器或发送消息。

```js
import { BiliMessageClient } from './src/web-message-client.mjs';
import { wbiKeysFromNav } from './src/wbi.mjs';

// nav 来自调用者自己的授权登录态；此处省略会话获取，不在代码中写真实 Cookie。
const clientOptions = {
  cookie: process.env.BILI_COOKIE,
  ownerUid: '1001', // 合成占位值：应与当前会话真实 UID 一致
  peerUid: '1002',  // 合成占位值：替换为已获授权的受控收件人
  wbiKeys: wbiKeysFromNav(nav)
};
const client = new BiliMessageClient(clientOptions);
```

在线驱动只从用户已登录的两份隔离配置取得会话，不操作网页控件。公开仓库不附带会话、账号标识、原始消息或一次性私有驱动；调用者需自行提供授权会话与正确 WBI 数据。在线实测使用与隔离浏览器一致的 User-Agent，不能承诺所有默认客户端环境均可通过风控。

| 构造参数 | 默认值 / 约束 |
| --- | --- |
| cookie | 必填；包含本地授权会话与 bili_jct，不允许换行 |
| ownerUid / peerUid | 必填；两个不同的正整数十进制标识，可用精确字符串；ownerUid 必须对应登录账号 |
| wbiKeys | 来自当前公开 nav 的 imgKey/subKey，不能复用长期固定签名 |
| userAgent | bili-apis-message/0.0.0；本次在线使用会话浏览器的正常 UA |
| deviceId | 本次客户端自行生成的 UUID v4；仅内存，不代表设备硬件标识 |
| nowSeconds | 默认当前 UTC Unix 秒；仅用于时间与 WBI |
| timeoutMs | 默认 15000 毫秒，范围 1–60000 |
| fetchImpl / onObservation | 默认 Node fetch / 空回调；观察只含阶段、状态、字段名和响应哈希 |

### 调用与返回

```js
// 下面会产生真实外部影响，只应针对已获授权的受控收件人执行。
const sent = await client.sendText('API synthetic message test');
const latest = await client.latestPeerMessage();
// 先核对 latest.messages 中的 key、双方身份和本次正文，再继续。
await client.revokeOwnMessage(sent.msgKey);
```

| 方法 | 输入 | 返回与约束 |
| --- | --- | --- |
| sendText(text) | 非空文本，最多 1000 UTF-8 字节 | msgKey 精确字符串、seqno 字符串或 null；本次发送响应未返回序号，不能据此重发 |
| latestPeerMessage() | 无额外目标参数 | 原始 data；只能读取构造时指定 peer，固定 size=1。超过一条、缺少 messages 数组或身份不属于该账号对时拒绝 |
| revokeOwnMessage(msgKey) | 仅使用本次发送返回的精确 key | 原始撤回应答 data；需要另外读回撤回事件，不能只凭 code=0 宣称清理完成 |
| fetchMessage({msgKey, seqno}) | 指定消息 key，序号可省略 | 实验性；当前线上 -400，尚不能作为可用读取能力推荐 |

客户端不提供会话列表、历史翻页、群发、群聊、媒体消息或自动重试。手机认证、陌生人限制、风控等业务错误会直接停止；未知结果的发送必须先检查已有检查点和收件状态，不能自动重发。在线驱动在每次写入前保存本地防重复检查点，收到消息 key 后保留精确 key，以便清理。

## 请求格式

发送与撤回均为 `application/x-www-form-urlencoded`：

| 字段 | 文本发送 | 撤回 |
| --- | --- | --- |
| msg[sender_uid] | 发送方登录 UID | 同一发送方 |
| msg[receiver_type] / msg[receiver_id] | 1 / 受控对方 UID | 同一受控对方 |
| msg[msg_type] | 1 | 5 |
| msg[content] | JSON 字符串，形如 {"content":"synthetic text"} | 原消息 key 字符串 |
| msg[msg_status] / msg[msg_source] / msg[new_face_version] | 0 / 0 / 0 | 本次不传 |
| msg[dev_id] / msg[timestamp] | 客户端 UUID / 当前 Unix 秒 | 同上 |
| from_firework / build / mobi_app / csrf | 0 / 0 / web / 本机会话值 | 同上 |

查询参数包含 `w_sender_uid`、`w_receiver_id`、`w_dev_id`、`statistics`、`csrf`，随后生成 WBI 的 `wts/w_rid`。CSRF、Cookie、设备 ID、完整签名 URL 不进入观察报告。

最新单条 GET 的查询为 `talker_id`、`session_type=1`、`size=1`、`sender_device_id=1`、`build=0`、`mobi_app=web`、统计及 WBI 参数。size=1 只覆盖本次单消息验证，不证明分页正确。

官方表单转换将数组编码为重复的 `msg_details[]` 字段，每项是单个 JSON 对象。精确详情接口按此修正后仍返回 -400，原因未定位，不靠改成功判据将其算为通过。

## 64 位标识与错误处理

消息 key 可能超过 JavaScript 安全整数范围。`parseMessageJson` 使用 Node JSON reviver 的原始数值文本，把超出安全整数的十进制整数保留为字符串；若无法保留精度则失败。不能先用普通 JSON.parse 舍入再 String()。

`BiliMessageError` 提供 stage、kind、httpStatus、businessCode，异常不包含 Cookie、消息正文或服务端原始响应。HTTP 重定向、风控、认证要求、传输失败、非 JSON 和过大响应均停止，不自动重试发送。每次响应上限 1 MiB。

## 证据与复现范围

[线上证据](../../evidence/web-message-validation.json)保留两轮结果、发送/读取/撤回哈希、未通过详情请求以及官方脚本 URL、SHA-256、UTF-16/字节偏移。官方资产 URL 中的 message-pc 是服务端实际文件路径，不作为接口适用范围描述。

```sh
node scripts/build-web-message-validation.mjs --local .local/web-message-validation
npm test
npm run docs:generate
```

汇总和文档生成均为离线操作。公开材料不提供独立重建真实账号现场的条件；单账号对通过不承诺任意收件人、权限、地区、历史、群聊或未来版本均可用。
