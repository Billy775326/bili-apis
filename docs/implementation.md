# 实现核对与证据

## 视频详情 gRPC 描述符

REA/JADX 对原包 `classes7.dex` 的未修改副本反编译 `com.bapis.bilibili.app.viewunite.v1.E2.getViewMethod()`，确认服务/方法为 `/bilibili.app.viewunite.v1.View/View`，类型为 UNARY；返回泛型及独立 marshaller 赋值分别对应 `ViewReq` 和 `ViewReply`。

这是已核对的静态构造关系，未做线上调用验证。其他路由保留类型候选，不将单个方法核对泛化为全部 604 个方法均已验证。

## 公共 HTTP 参数与签名边界

REA/JADX 对 `classes18.dex` 的未修改副本反编译 `qC0.a`：

- `addCommonParam(Map)` 的默认路径写入 `platform=android`、`mobi_app`、`appkey`、`build`、`channel`、`c_locale`、`s_locale`，并合并其他参数。账号存在时可补充 access key，其键由另一常量提供，本次未推断该常量值。
- 配置的 `netPublicParamFactory` 可以替代默认公共参数路径，不能将上述字段当作所有请求必填参数。
- `intercept` 先添加请求头；GET 补充 URL 公共参数，POST 尝试补充请求体，失败时回到 URL 参数路径。
- `signQuery(Map)` 委托 `LibBili.h(Map)`。此处只定位签名调用边界，没有恢复 native 签名算法，也没有导入账号或重放认证请求。

## 原始来源与派生副本

[核对摘要](../evidence/implementation-review.json) 保留父 Evidence ID、方法签名、反编译文本哈希和结论。完整反编译文本仅保存在本机忽略目录，不随仓库发布。

[View 副本来源](../evidence/focused-artifact.json) 和 [拦截器副本来源](../evidence/auth-focused-artifact.json) 记录原 APK 哈希、原 DEX 哈希、成员映射及副本哈希。这些副本移除了其他 DEX/资源，属于未签名的分析片段；不能当作可安装原包或完整调用图。

[完整包超时记录](../evidence/full-apk-timeout.json) 记录 REA 的 120 秒加载限制。原始 APK 和分包均未被修改。
