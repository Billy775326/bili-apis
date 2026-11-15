# 社区治理与青少年

<!-- android-edition:start -->
包名：`com.bilibili.app.in` · 渠道：Google Play · 版本：6.8.0（9180200）。

[全部版本](../../../../README.md) · [本包文档](../README.md) · [网页接口](../../../../../pc/README.md) · [基线元数据](../../../../../../catalog/android/com.bilibili.app.in/play/6.8.0/edition.json)。

本页归属上述 APK 基线；静态声明、候选与已记录的少量 HTTP 抽查分别标注，不代表网页或 App 已全量验证。
<!-- android-edition:end -->

举报、治理、反骚扰及青少年设置。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 18 条 HTTP 声明、12 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes11.dex:48992:GET | GET | https://app.bilibili.com/x/v2/anti_addiction/aggregation/status | Query:biz_types | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/parentcontrol/mode/AntiAddictionAggregationStatus;&gt;;&gt;; | not-tested |
| classes13.dex:31710:POST | POST | https://space.bilibili.com/api/report/add | Field:mid, Field:reason, Field:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes15.dex:32696:GET | GET | https://api.bilibili.com/x/answer/v4/status | Query:mid | LlC0/a&lt;Lcom/bilibili/biligame/api/BiligameApiResponse&lt;Lcom/bilibili/biligame/api/site/AnswerStatus;&gt;;&gt;; | not-tested |
| classes15.dex:32697:GET | GET | https://api.bilibili.com/x/answer/v4/guide | Query:business, Query:spmid, Query:oid, Query:sid, Query:mid | LlC0/a&lt;Lcom/bilibili/biligame/api/BiligameApiResponse&lt;Lcom/bilibili/biligame/api/site/AnswerV4Guide;&gt;;&gt;; | not-tested |
| classes18.dex:62684:POST | POST | https://api.bilibili.com/x/report/click/dolby/unite | Body:(内容未知) | LlC0/a&lt;Ljava/lang/String;&gt;; | not-tested |
| classes20.dex:30137:POST | POST | https://api.bilibili.com/x/feedback/upload | Part:(内容未知), Query:access_key | LlC0/a&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; | not-tested |
| classes20.dex:30138:POST | POST | https://api.bilibili.com/x/feedback/boss/upload | Part:buvid, Part:(内容未知), Part:filename, Query:access_key | LlC0/a&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; | not-tested |
| classes20.dex:30139:POST | POST | https://api.bilibili.com/x/feedback/add | FieldMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/userfeedback/model/UserFeedbackItem;&gt;;&gt;; | not-tested |
| classes20.dex:30140:GET | GET | https://api.bilibili.com/x/feedback/platform/tag | Query:tag_id, Query:business | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/userfeedback/model/UserFeedbackTag;&gt;;&gt;;&gt;; | not-tested |
| classes20.dex:30141:GET | GET | https://api.bilibili.com/x/feedback/tag | Query:type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/userfeedback/model/UserFeedbackTag;&gt;;&gt;;&gt;; | not-tested |
| classes30.dex:25901:GET | GET | https://api.bilibili.com/x/answer/v4/guide | Query:access_key, Query:business, Query:spmid, Query:oid, Query:sid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/answer/api/AnswerGuideData;&gt;;&gt;; | not-tested |
| classes30.dex:30473:GET | GET | https://app.bilibili.com/x/v2/anti_addiction/aggregation/status |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/antiaddiction/data/AntiAddictionStatusData;&gt;;&gt;; | not-tested |
| classes30.dex:30474:GET | GET | https://app.bilibili.com/x/v2/anti_addiction/rule |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/antiaddiction/data/AddictionConfigData;&gt;;&gt;; | not-tested |
| classes30.dex:30475:POST | POST | https://app.bilibili.com/x/v2/anti_addiction/sleep_remind/set | Query:switch, Query:stime, Query:etime | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; | not-tested |
| classes30.dex:50339:GET | GET | https://app.bilibili.com/x/v2/family/teen_guard |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/main2/api/TeenGuardData;&gt;;&gt;; | not-tested |
| classes30.dex:50341:GET | GET | https://app.bilibili.com/x/v2/family/identity |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/main2/api/FamilyIdentityData;&gt;;&gt;; | not-tested |
| classes30.dex:59363:POST | POST | https://api.bilibili.com/x/report/click/android2 | Body:(内容未知) | LlC0/a&lt;Ljava/lang/String;&gt;; | not-tested |
| classes30.dex:59364:POST | POST | https://api.bilibili.com/x/report/heartbeat/mobile | FieldMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |

## gRPC

请求/响应角色默认仍为静态候选；View/View 已有单独实现核对。表格不代表已建立连接或验证认证。

| 路由 | 请求类型候选 | 响应类型候选 | 线上抽查 |
| --- | --- | --- | --- |
| /bilibili.app.interface.v1.Teenagers/EnableOverseasTeenagersMode | Lcom/bapis/bilibili/app/interfaces/v1/EnableOverseasTeenagersModeReq; | Lcom/bapis/bilibili/app/interfaces/v1/EnableOverseasTeenagersModeReply; | not-tested |
| /bilibili.app.interface.v1.Teenagers/FacialRecognitionVerify | Lcom/bapis/bilibili/app/interfaces/v1/FacialRecognitionVerifyReq; | Lcom/bapis/bilibili/app/interfaces/v1/FacialRecognitionVerifyReply; | not-tested |
| /bilibili.app.interface.v1.Teenagers/ModeStatus | Lcom/bapis/bilibili/app/interfaces/v1/ModeStatusReq; | Lcom/bapis/bilibili/app/interfaces/v1/ModeStatusReply; | not-tested |
| /bilibili.app.interface.v1.Teenagers/ModifyPwd | Lcom/bapis/bilibili/app/interfaces/v1/ModifyPwdReq; | Lcom/bapis/bilibili/app/interfaces/v1/ModifyPwdReply; | not-tested |
| /bilibili.app.interface.v1.Teenagers/SetTeenagersModelAge | Lcom/bapis/bilibili/app/interfaces/v1/SetTeenagersModelAgeReq; | Lcom/bapis/bilibili/app/interfaces/v1/SetTeenagersModelAgeReply; | not-tested |
| /bilibili.app.interface.v1.Teenagers/UpdateStatus | Lcom/bapis/bilibili/app/interfaces/v1/UpdateStatusReq; | Lcom/bapis/bilibili/app/interfaces/v1/UpdateStatusReply; | not-tested |
| /bilibili.app.interface.v1.Teenagers/VerifyPwd | Lcom/bapis/bilibili/app/interfaces/v1/VerifyPwdReq; | Lcom/bapis/bilibili/app/interfaces/v1/VerifyPwdReply; | not-tested |
| /bilibili.community.service.cert.v1.FieldCert/FieldCertPopAction | Lcom/bapis/bilibili/community/service/cert/v1/FieldCertPopActionReq; | Lcom/bapis/bilibili/community/service/cert/v1/FieldCertPopActionRsp; | not-tested |
| /bilibili.community.service.cert.v1.FieldCert/FieldCertPopRecord | Lcom/bapis/bilibili/community/service/cert/v1/FieldCertPopRecordReq; | Lcom/bapis/bilibili/community/service/cert/v1/FieldCertPopRecordRsp; | not-tested |
| /bilibili.community.service.govern.v1.Qoe/QoeReport | Lcom/bapis/bilibili/community/service/govern/v1/QoeReportReq; | Lcom/google/protobuf/Empty; | not-tested |
| /bilibili.polymer.community.govern.v1.AntiHarassmentService/LoadAntiHarassmentSettings | Lcom/bapis/bilibili/polymer/community/govern/v1/LoadAntiHarassmentSettingsReq; | Lcom/bapis/bilibili/polymer/community/govern/v1/LoadAntiHarassmentSettingsRsp; | not-tested |
| /bilibili.polymer.community.govern.v1.AntiHarassmentService/StoreAntiHarassmentSettings | Lcom/bapis/bilibili/polymer/community/govern/v1/StoreAntiHarassmentSettingsReq; | Lcom/bapis/bilibili/polymer/community/govern/v1/StoreAntiHarassmentSettingsRsp; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category governance --limit 10
node bin/bili-apis.mjs show "ID"
```
