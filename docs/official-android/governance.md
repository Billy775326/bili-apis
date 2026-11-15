# 社区治理与青少年

举报、治理、反骚扰及青少年设置。分类根据路由、域名与声明类名称推断，未验证业务行为。

官方 Android 9.19.0：21 条 HTTP 声明、12 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。

[返回分类](README.md) · [与 Play 对比](comparison.md)

## HTTP

参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。

| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |
| --- | --- | --- | --- | --- |
| classes10.dex:54853:POST | POST | https://api.bilibili.com/x/report/click/dolby/unite | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Ljava/lang/String;&gt;; |
| classes15.dex:43749:POST | POST | https://api.bilibili.com/x/feedback/upload | Part:(内容未知), Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; |
| classes15.dex:43750:POST | POST | https://api.bilibili.com/x/feedback/boss/upload | Part:buvid, Part:(内容未知), Part:filename, Query:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; |
| classes15.dex:43751:POST | POST | https://api.bilibili.com/x/feedback/add | FieldMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/userfeedback/model/UserFeedbackItem;&gt;;&gt;; |
| classes15.dex:43752:GET | GET | https://api.bilibili.com/x/feedback/platform/tag | Query:tag_id, Query:business | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/userfeedback/model/UserFeedbackTag;&gt;;&gt;;&gt;; |
| classes15.dex:43753:GET | GET | https://api.bilibili.com/x/feedback/reply | QueryMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/userfeedback/model/UserFeedbackItem;&gt;;&gt;;&gt;; |
| classes15.dex:43754:GET | GET | https://api.bilibili.com/x/feedback/tag | Query:type | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/userfeedback/model/UserFeedbackTag;&gt;;&gt;;&gt;; |
| classes27.dex:59277:GET | GET | https://app.bilibili.com/x/v2/anti_addiction/aggregation/status |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/antiaddiction/data/AntiAddictionStatusData;&gt;;&gt;; |
| classes27.dex:59278:GET | GET | https://app.bilibili.com/x/v2/anti_addiction/rule |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/antiaddiction/data/AddictionConfigData;&gt;;&gt;; |
| classes27.dex:59279:POST | POST | https://app.bilibili.com/x/v2/anti_addiction/sleep_remind/set | Query:switch, Query:stime, Query:etime | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Object;&gt;;&gt;; |
| classes28.dex:15173:GET | GET | https://app.bilibili.com/x/v2/family/identity |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/main2/api/FamilyIdentityData;&gt;;&gt;; |
| classes28.dex:15176:GET | GET | https://app.bilibili.com/x/v2/family/teen_guard |  | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/main2/api/TeenGuardData;&gt;;&gt;; |
| classes28.dex:19353:POST | POST | https://api.bilibili.com/x/report/click/android2 | Body:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Ljava/lang/String;&gt;; |
| classes28.dex:19354:POST | POST | https://api.bilibili.com/x/report/heartbeat/mobile | FieldMap:(内容未知) | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes28.dex:59305:GET | GET | https://api.bilibili.com/x/answer/v4/guide | Query:access_key, Query:business, Query:spmid, Query:oid, Query:sid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/ui/answer/api/AnswerGuideData;&gt;;&gt;; |
| classes5.dex:23133:GET | GET | https://app.bilibili.com/x/v2/anti_addiction/aggregation/status | Query:biz_types | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/parentcontrol/mode/AntiAddictionAggregationStatus;&gt;;&gt;; |
| classes5.dex:23134:POST | POST | https://app.bilibili.com/x/v2/family/timelock/pwd/verify | Query:pwd | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/comm/parentcontrol/mode/ParentControlTimeLockPwdVerify;&gt;;&gt;; |
| classes6.dex:13534:GET | GET | https://api.bilibili.com/x/answer/v4/status | Query:mid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/biligame/api/BiligameApiResponse&lt;Lcom/bilibili/biligame/api/site/AnswerStatus;&gt;;&gt;; |
| classes6.dex:13535:GET | GET | https://api.bilibili.com/x/answer/v4/guide | Query:business, Query:spmid, Query:oid, Query:sid, Query:mid | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/biligame/api/BiligameApiResponse&lt;Lcom/bilibili/biligame/api/site/AnswerV4Guide;&gt;;&gt;; |
| classes7.dex:22731:POST | POST | https://space.bilibili.com/api/report/add | Field:mid, Field:reason, Field:access_key | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; |
| classes9.dex:20240:POST | POST | https://api.vc.bilibili.com/report_service/v1/Report/add | Field:biz_code, Field:module, Field:accused_uid, Field:object_id, Field:ip, Field:reason_type, Field:reason_desc, Field:comment, Field:extra, Field:platform | Lcom/bilibili/okretro/call/BiliCall&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/bplus/im/entity/IMReportResult;&gt;;&gt;; |

## gRPC

请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。

| 路由 | 请求类型候选 | 响应类型候选 |
| --- | --- | --- |
| /bilibili.app.interface.v1.Teenagers/EnableOverseasTeenagersMode | Lcom/bapis/bilibili/app/interfaces/v1/EnableOverseasTeenagersModeReq; | Lcom/bapis/bilibili/app/interfaces/v1/EnableOverseasTeenagersModeReply; |
| /bilibili.app.interface.v1.Teenagers/FacialRecognitionVerify | Lcom/bapis/bilibili/app/interfaces/v1/FacialRecognitionVerifyReq; | Lcom/bapis/bilibili/app/interfaces/v1/FacialRecognitionVerifyReply; |
| /bilibili.app.interface.v1.Teenagers/ModeStatus | Lcom/bapis/bilibili/app/interfaces/v1/ModeStatusReq; | Lcom/bapis/bilibili/app/interfaces/v1/ModeStatusReply; |
| /bilibili.app.interface.v1.Teenagers/ModifyPwd | Lcom/bapis/bilibili/app/interfaces/v1/ModifyPwdReq; | Lcom/bapis/bilibili/app/interfaces/v1/ModifyPwdReply; |
| /bilibili.app.interface.v1.Teenagers/SetTeenagersModelAge | Lcom/bapis/bilibili/app/interfaces/v1/SetTeenagersModelAgeReq; | Lcom/bapis/bilibili/app/interfaces/v1/SetTeenagersModelAgeReply; |
| /bilibili.app.interface.v1.Teenagers/UpdateStatus | Lcom/bapis/bilibili/app/interfaces/v1/UpdateStatusReq; | Lcom/bapis/bilibili/app/interfaces/v1/UpdateStatusReply; |
| /bilibili.app.interface.v1.Teenagers/VerifyPwd | Lcom/bapis/bilibili/app/interfaces/v1/VerifyPwdReq; | Lcom/bapis/bilibili/app/interfaces/v1/VerifyPwdReply; |
| /bilibili.community.service.cert.v1.FieldCert/FieldCertPopAction | Lcom/bapis/bilibili/community/service/cert/v1/FieldCertPopActionReq; | Lcom/bapis/bilibili/community/service/cert/v1/FieldCertPopActionRsp; |
| /bilibili.community.service.cert.v1.FieldCert/FieldCertPopRecord | Lcom/bapis/bilibili/community/service/cert/v1/FieldCertPopRecordReq; | Lcom/bapis/bilibili/community/service/cert/v1/FieldCertPopRecordRsp; |
| /bilibili.community.service.govern.v1.Qoe/QoeReport | Lcom/bapis/bilibili/community/service/govern/v1/QoeReportReq; | Lcom/google/protobuf/Empty; |
| /bilibili.polymer.community.govern.v1.AntiHarassmentService/LoadAntiHarassmentSettings | Lcom/bapis/bilibili/polymer/community/govern/v1/LoadAntiHarassmentSettingsReq; | Lcom/bapis/bilibili/polymer/community/govern/v1/LoadAntiHarassmentSettingsRsp; |
| /bilibili.polymer.community.govern.v1.AntiHarassmentService/StoreAntiHarassmentSettings | Lcom/bapis/bilibili/polymer/community/govern/v1/StoreAntiHarassmentSettingsReq; | Lcom/bapis/bilibili/polymer/community/govern/v1/StoreAntiHarassmentSettingsRsp; |

```sh
node bin/bili-apis.mjs --edition official list --category governance --limit 10
node bin/bili-apis.mjs --edition official show "ID"
```
