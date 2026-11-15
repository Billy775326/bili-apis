# Bilibili PC 网页接口

面向 PC 网页数据读取与接口研究：依据网站实际请求、官方前端脚本及独立 HTTP 样本整理功能目录，并提供可调用的只读客户端。

当前记录 82 组请求地址，19 组有匿名字段样本通过；其中 17 组在独立 HTTP 客户端通过。其余请求的风控、登录和错误状态保留原样，不能保证所有接口或所有输入可用。

## 按功能查找

[功能导航](docs/pc/README.md) · [验证记录与限制](docs/pc/validation.md) · [客户端参数](docs/pc/client.md) · [完整 JSON](catalog/pc-web.json)

| 功能 | 本轮可读取的内容 |
| --- | --- |
| 视频 | 详情、内嵌统计、分 P、相关视频、标签 |
| 搜索 | 综合搜索、视频搜索、默认搜索词 |
| 评论 | 置顶评论、楼中楼；普通评论与下一页样本未通过 |
| 播放 | 播放器信息、播放地址元数据、在线人数 |
| 用户与内容 | 关注/粉丝数、公开收藏夹、热门动态、热门视频 |
| 直播 | PC 直播间播放信息 |

用户资料等存在浏览器成功而独立 HTTP 被风控的情况，详情见验证记录。登录、写操作及特殊账号权益没有测试。

## 快速开始

需要 Node.js 24.11 或更新版本。在仓库根目录执行：

```sh
node bin/bili-web.mjs stats
node bin/bili-web.mjs list --category search
node bin/bili-web.mjs call video.detail bvid=[REDACTED_VIDEO]
node bin/bili-web.mjs call search.videos keyword=bilibili page=1
```

查询已生成目录及调用客户端无需安装依赖；只有 `call` 会发送请求。WBI 使用当前公开 nav 数据生成；不需要模拟器或 App 签名。

## 证据与范围

网页请求记录和脚本字符串候选分开保存。候选数量不作为可用接口数；完整响应、Cookie、签名、浏览器状态与第三方脚本正文留在本地忽略目录。公开证据包含字段、断言、来源 URL、时间和哈希。

功能组织参考 [cv-cat/DouYin_Spider](https://github.com/cv-cat/DouYin_Spider) 的模块思路；接口定义和本轮验证来自 Bilibili PC 网站。

[历史 Android 研究入口](docs/android-archive.md)保留原始来源与旧 CLI，当前 PC 目录不导入 APK 声明。项目仍处于未发布研究阶段，版本 `0.0.0` 不提供稳定兼容承诺。

[更新日志](CHANGELOG.md)
