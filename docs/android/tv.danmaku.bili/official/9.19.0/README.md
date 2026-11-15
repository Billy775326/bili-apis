# 官方 Android 静态接口目录

<!-- android-edition:start -->
包名：`tv.danmaku.bili` · 渠道：Official Android 64-bit · 版本：9.19.0（9190400）。

[全部版本](../../../README.md) · [本包文档](README.md) · [网页接口](../../../../pc/README.md) · [基线元数据](../../../../../catalog/android/tv.danmaku.bili/official/9.19.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

面向研究官方 Android 安装包的读者，独立保存 9.19.0 的声明、参数模型及位置证据。网页接口仍为[仓库主入口](../../../../../README.md)；App 声明不会自动加入网页客户端。

安装包来自[哔哩哔哩官方下载页](https://app.bilibili.com/)的 Android 64 位链接；包名 `tv.danmaku.bili`，versionCode `9190400`，minSdk 24、targetSdk 35。URL 中 latest 会变化，本基线以哈希固定。

APK SHA-256：`c3ea50c7773267f252e441b5c1aebf7574492223b2bb1568d7a7093d1f8eb59c`。

[复现步骤与补充检查边界](reproduce.md) · [来源与 36 个 DEX 哈希](../../../../../evidence/official-android/inputs.json) · [下载记录](../../../../../evidence/official-android/download.json) · [清单摘要](../../../../../evidence/official-android/manifest.json) · [证书提取](../../../../../evidence/official-android/certificate.json) · [REA 复核](../../../../../evidence/official-android/rea.json) · [静态差异](comparison.md)

证书 SHA-256 与已有 Play 基线一致；仅提取证书元数据并对照指纹，未做 APK 密码学签名验证。工具未运行 App，未访问账号或发送 App 接口请求。

## 覆盖与验证边界

- 36 个主 DEX：351,897 个类、1,877,410 个方法定义；HTTP 2514 条声明、2158 个原始方法/路径组合。静态比较排除空动态路由、去除查询值并解析 BaseUrl 后，得到 2143 个键，两种计数不可相加。
- HTTP 可达模型 5,300 个、30,586 个字段；Protobuf 4501 个消息、22208 个字段，4501 次字段编号交叉核对一致。
- gRPC 625 条路由。资源、DEX 字符串与 native URL 候选另列，不加总为可调用接口。
- 26,669 个 APK 成员完成哈希/CRC 检查；94 个 ELF 库解析；8 个嵌套 ZIP 的 309 个子成员未发现 DEX/JVM/ZIP/ELF 载荷。
- 44 个动态 URL 声明、50 个直接调用点，5 个调用点恢复常量 URL（4 个去重 URL），45 个调用点未解析；computed 资源请求 219 条，不能补造成固定地址。
- 不透明 Lynx bundle、严格 JSON 解析失败的资源、native 间接调用与未解析重定位、动态下载代码仍有覆盖缺口；原始覆盖记录保留全部限制。
- 线上验证全部为 not-tested。Play 的运行时或静态语义核对不自动沿用到此 APK；网页 验证也不作为 App 验证。

## 按功能查找

共 2,514 条 HTTP 声明、625 条 gRPC 路由。重复声明保留，分类仅用于导航。

| 功能 | HTTP 声明 | gRPC 路由 |
| --- | ---: | ---: |
| [视频详情与互动](../../../../official-android/video.md) | 34 | 37 |
| [播放与连接](../../../../official-android/playback.md) | 13 | 20 |
| [搜索](../../../../official-android/search.md) | 9 | 23 |
| [推荐与分区](../../../../official-android/feed.md) | 52 | 27 |
| [评论与回复](../../../../official-android/comment.md) | 29 | 22 |
| [弹幕与字幕](../../../../official-android/danmaku.md) | 34 | 8 |
| [用户与空间](../../../../official-android/user.md) | 79 | 7 |
| [关注与关系](../../../../official-android/relation.md) | 53 | 2 |
| [收藏与稍后再看](../../../../official-android/favorite.md) | 93 | 2 |
| [历史记录](../../../../official-android/history.md) | 12 | 9 |
| [动态与话题](../../../../official-android/dynamic.md) | 72 | 149 |
| [兴趣社区](../../../../official-android/tribee.md) | 0 | 86 |
| [专栏与阅读](../../../../official-android/article.md) | 20 | 0 |
| [笔记](../../../../official-android/notes.md) | 5 | 0 |
| [音频与音乐](../../../../official-android/audio.md) | 6 | 33 |
| [直播](../../../../official-android/live.md) | 364 | 0 |
| [私信与客服](../../../../official-android/message.md) | 37 | 79 |
| [通知与广播](../../../../official-android/notification.md) | 26 | 37 |
| [创作与投稿](../../../../official-android/creator.md) | 193 | 0 |
| [登录与账号安全](../../../../official-android/auth.md) | 68 | 11 |
| [番剧影视与课程](../../../../official-android/pgc.md) | 146 | 10 |
| [漫画](../../../../official-android/comic.md) | 9 | 0 |
| [大会员与装扮](../../../../official-android/vip.md) | 45 | 10 |
| [支付与充电](../../../../official-android/payment.md) | 60 | 0 |
| [商城与票务](../../../../official-android/commerce.md) | 200 | 2 |
| [游戏](../../../../official-android/game.md) | 516 | 1 |
| [小程序与开放平台](../../../../official-android/miniapp.md) | 123 | 0 |
| [分享](../../../../official-android/sharing.md) | 17 | 0 |
| [活动与预约](../../../../official-android/activity.md) | 42 | 4 |
| [表情与贴纸](../../../../official-android/emote.md) | 16 | 0 |
| [运营商服务](../../../../official-android/operator.md) | 14 | 0 |
| [广告](../../../../official-android/ads.md) | 19 | 0 |
| [社区治理与青少年](../../../../official-android/governance.md) | 21 | 12 |
| [埋点与诊断](../../../../official-android/telemetry.md) | 4 | 10 |
| [配置与资源](../../../../official-android/config.md) | 34 | 12 |
| [待细分](../../../../official-android/other.md) | 49 | 12 |

## 查询与复现

需要 Node.js 24.11 或更新版本；查询离线执行，无须安装开发依赖。完整元数据压缩保存，CLI 自动解压并校验压缩包和 JSON 哈希，返回原始字段和位置。

```sh
node bin/bili-apis.mjs --edition official stats
node bin/bili-apis.mjs --edition official list --kind http --category search --limit 10
node bin/bili-apis.mjs --edition official list --kind message --query ViewReq --limit 5
node scripts/build-official-android.mjs
npm test
```

复现提取时，将相同 SHA-256 的 APK 放入本地忽略目录，依次执行已有 pin/unpack/http/model/grpc/audit/resource/native 提取工具；需要开发依赖、下载记录及本地 APK。每个提取器的参数见源码。将生成目录发布为压缩元数据：

```sh
node scripts/build-official-android.mjs --import .local/official-android/catalog
```

[压缩元数据清单与完整性哈希](../../../../../catalog/android/tv.danmaku.bili/official/9.19.0/manifest.json)提供每个 JSON 的独立下载入口名、字节数、压缩与解压 SHA-256；未提交 APK、DEX、库文件或反编译正文。
