# 登录与账号安全

登录、票据、实名、验证码及账号安全。分类来自名称推断，具体作用以对应方法实现和运行结果为准。

共 66 条 HTTP 声明、11 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)

## HTTP

参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。

| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |
| --- | --- | --- | --- | --- | --- |
| classes11.dex:32382:GET | GET | https://api.bilibili.com/x/member/app/up/realname | Query:up_mid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/app/authorspace/api/AuthorRealNameInfo;&gt;;&gt;; | not-tested |
| classes14.dex:65027:GET | GET | http://wap.cmpassport.com/openapi/wabpGetUseInfo? | QueryMap:(内容未知) | LlC0/a&lt;Lcom/alibaba/fastjson/JSONObject;&gt;; | not-tested |
| classes16.dex:9136:GET | GET | https://api.bilibili.com/x/safecenter/user/info | Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/accountinfo/model/UserSafeInfo;&gt;;&gt;; | not-tested |
| classes16.dex:17589:POST | POST | https://api.bilibili.com/x/internal/gaia-gateway/ExClimbCongLing | Query:access_key, Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes16.dex:17599:POST | POST | https://api.bilibili.com/x/internal/gaia-gateway/ExClimbKunLun | Query:access_key, Body:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/String;&gt;;&gt;; | not-tested |
| classes16.dex:23143:GET | GET | https://passport.bilibili.com/api/v2/oauth2/access_token | Query:code, Query:grant_type, Query:local_id, Query:bili_local_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/accounts/model/AuthInfo;&gt;;&gt;; | not-tested |
| classes16.dex:23144:POST | POST | https://passport.bilibili.com/x/passport-login/oauth2/access_token | Query:code, Query:grant_type, FieldMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/accounts/model/AuthInfo;&gt;;&gt;; | not-tested |
| classes16.dex:23145:GET | GET | https://passport.bilibili.com/x/passport-login/authorize/agreement | Query:app_subid, Query:target_appkey | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/accounts/model/AuthorizeAgreement;&gt;;&gt;; | not-tested |
| classes16.dex:23146:POST | POST | https://passport.bilibili.com/api/oauth2/authorizeByApp | Field:access_token, Field:target_subid, Field:target_appkey, Field:package, Field:signature | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/accounts/model/AuthorizeCode;&gt;;&gt;; | not-tested |
| classes16.dex:23147:POST | POST | https://passport.bilibili.com/x/passport-login/batch/revoke | Field:access_key, Field:refresh_token, Field:mid, Field:session, Field:need_delete_account_info, Field:is_self_revoke, Field:revoke_api, FieldMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/accounts/model/LogoutResultInfo;&gt;;&gt;; | not-tested |
| classes16.dex:23148:POST | POST | https://passport.bilibili.com/x/safecenter/sns/bind | Field:access_key, Field:appid, Field:sns_type, Field:code | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes16.dex:23149:POST | POST | https://passport.bilibili.com/x/passport-login/confirm/refresh | Field:access_key, Field:refresh_token, Field:mid, Field:session, FieldMap:(内容未知), Field:revoke_api | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes16.dex:23150:POST | POST | https://passport.bilibili.com/x/passport-login/confirm/refresh | Field:access_key, Field:refresh_token, Field:mid, Field:session, FieldMap:(内容未知), Field:revoke_api, Field:sts | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes16.dex:23151:POST | POST | https://passport.bilibili.com/x/passport-login/fast/login | Field:mid, Field:fast_login_token, Field:device_meta, Field:dt, Field:login_session_id, Field:spm_id, Field:device_tourist_id, Field:extend, FieldMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/accounts/model/AuthInfo;&gt;;&gt;; | not-tested |
| classes16.dex:23152:POST | POST | https://passport.bilibili.com/x/passport-user/guest/reg | Field:dt, Field:device_info | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/accounts/GuestId;&gt;;&gt;; | not-tested |
| classes16.dex:23153:GET | GET | https://passport.bilibili.com/x/passport-login/web/key |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/accounts/model/AuthKey;&gt;;&gt;; | not-tested |
| classes16.dex:23154:POST | POST | https://passport.bilibili.com/x/passport-login/type | Field:mid, Field:md5_fast_login_token, Field:first_boot, Field:oaid, FieldMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/accounts/model/TInfoLogin;&gt;;&gt;; | not-tested |
| classes16.dex:23155:GET | GET | https://passport.bilibili.com/x/passport-login/timestamp |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/accounts/model/ServerTimestamp;&gt;;&gt;; | not-tested |
| classes16.dex:23156:POST | POST | https://passport.bilibili.com/x/passport-login/oauth2/login | Field:username, Field:password, Field:device_meta, Field:dt, Field:from_pv, Field:from_url, Field:login_session_id, Field:spm_id, Field:device_tourist_id, Field:extend, FieldMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/accounts/model/AuthInfo;&gt;;&gt;; | not-tested |
| classes16.dex:23157:POST | POST | https://passport.bilibili.com/x/passport-login/login/intl/sns | Field:app_id, Field:sns_type, Field:code, Field:device_meta, Field:dt, Field:login_session_id, Field:spm_id, Field:device_tourist_id, Field:extend, Field:code_secret, Field:extend_code | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/accounts/model/ThirdPartyResult;&gt;;&gt;; | not-tested |
| classes16.dex:23158:POST | POST | https://passport.bilibili.com/x/passport-quick-login/login | Field:token, Field:carrier, Field:carrier_ver, Field:auth_code, Field:device_meta, Field:dt, Field:from_pv, Field:from_url, Field:login_session_id, Field:spm_id, Field:device_tourist_id, Field:extend, FieldMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/accounts/model/AInfoQuick;&gt;;&gt;; | not-tested |
| classes16.dex:23159:POST | POST | https://passport.bilibili.com/x/passport-login/login/sms | Field:cid, Field:tel, Field:code, Field:captcha_key, Field:device_meta, Field:dt, Field:scene, Field:from_pv, Field:from_url, Field:login_session_id, Field:spm_id, Field:device_tourist_id, Field:sns_platform, Field:sns_app_id, Field:sns_openid, Field:extend, FieldMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/accounts/model/AuthInfo;&gt;;&gt;; | not-tested |
| classes16.dex:23160:GET | GET | https://passport.bilibili.com/x/passport-login/oauth2/info | Query:access_key, QueryMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/accounts/model/OAuthInfo;&gt;;&gt;; | not-tested |
| classes16.dex:23161:POST | POST | https://passport.bilibili.com/x/passport-tv-login/qrcode/auth_code | Field:login_session_id, Field:spm_id, Field:device_tourist_id, Field:extend, FieldMap:(内容未知), Field:gourl, Field:code, Field:app_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/accounts/model/QrCodeInfo;&gt;;&gt;; | not-tested |
| classes16.dex:23162:POST | POST | https://passport.bilibili.com/x/passport-tv-login/qrcode/poll | Field:auth_code, Field:device_meta, Field:dt, Field:login_session_id, Field:spm_id, Field:device_tourist_id, Field:extend, FieldMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/accounts/model/QrCodeAuthInfo;&gt;;&gt;; | not-tested |
| classes16.dex:23163:POST | POST | https://passport.bilibili.com/x/passport-login/oauth2/refresh_token | Field:access_key, Field:refresh_token, Field:sts, FieldMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/accounts/model/AuthInfo;&gt;;&gt;; | not-tested |
| classes16.dex:23164:POST | POST | https://passport.bilibili.com/x/passport-user/reg/sms | Field:cid, Field:tel, Field:code, Field:captcha_key, Field:device_meta, Field:dt, Field:scene, Field:from_pv, Field:from_url, Field:login_session_id, Field:spm_id, Field:device_tourist_id, Field:sns_platform, Field:sns_app_id, Field:sns_openid, Field:extend, FieldMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/accounts/model/CodeInfo;&gt;;&gt;; | not-tested |
| classes16.dex:23165:POST | POST | https://passport.bilibili.com/x/passport-login/sms/send | Field:cid, Field:tel, Field:login_session_id, Field:spm_id, Field:device_tourist_id, Field:extend, FieldMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/accounts/model/SmsInfo;&gt;;&gt;; | not-tested |
| classes16.dex:23166:POST | POST | https://passport.bilibili.com/api/v2/oauth2/login | Field:username, Field:password, Field:captcha | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/accounts/model/AuthInfo;&gt;;&gt;; | not-tested |
| classes16.dex:23167:POST | POST | https://passport.bilibili.com/x/passport-login/revoke | Field:access_key, Field:mid, Field:session, Field:revoke_type, FieldMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes16.dex:23168:POST | POST | https://passport.bilibili.com/x/passport-login/revoke | Field:access_key, Field:mid, Field:session, FieldMap:(内容未知), Field:revoke_api, Field:revoke_type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes16.dex:23169:POST | POST | https://passport.bilibili.com/x/passport-login/account/switch | Field:access_key, Field:need_switch_access_key, Field:need_switch_refresh_token, Field:device_meta, Field:dt, Field:login_session_id, Field:spm_id, Field:device_tourist_id, Field:extend, FieldMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/accounts/model/AuthInfo;&gt;;&gt;; | not-tested |
| classes16.dex:23170:POST | POST | https://passport.bilibili.com/x/safecenter/sns/unBind | Field:access_key, Field:appid, Field:sns_type | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes16.dex:23736:GET | GET | https://passport.bilibili.com/x/passport-login/country |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/accountsui/CountryCodeHelper$CountryBean;&gt;;&gt;; | not-tested |
| classes16.dex:43706:GET | GET | /x/vas/playlet/open_api/auth/openid | Query:mid, Query:app_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/fasthybrid/playlet/native/repository/service/OpenIdResponse;&gt;;&gt;; | not-tested |
| classes16.dex:46761:GET | GET | https://api.bilibili.com/x/member/realname/apply/status | Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes16.dex:57261:GET | GET | https://api.bilibili.com/x/member/account_switch/user/infos | Query:mids, QueryMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/accounts/model/SimpleAccountInfoBean;&gt;;&gt;; | not-tested |
| classes16.dex:63259:GET | GET | https://api.bilibili.com/x/member/realname/apply/status | Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/alibaba/fastjson/JSONObject;&gt;;&gt;; | not-tested |
| classes17.dex:1027:POST | POST | https://passport.bilibili.com/x/passport-login/authorize | Field:scene, Field:access_key, Field:package, Field:target_appkey, Field:signature | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/projection/internal/api/model/ProjectionAuthorizeCodeResponse;&gt;;&gt;; | not-tested |
| classes17.dex:31115:POST | POST | https://passport.bilibili.com/x/passport-login/authorize | Field:access_key, Field:target_appkey, Field:signature, Field:package, Field:app_subid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/projection/internal/api/AuthorizeCode;&gt;;&gt;; | not-tested |
| classes20.dex:1538:GET | GET | https://api.bilibili.com/x/member/realname/teen/age/check | Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/teenagersmode/model/TeenagersModeAgeCheck;&gt;;&gt;; | not-tested |
| classes30.dex:7104:POST | POST | https://passport.bilibili.com/x/safecenter/net_code/face/verify | Query:appKey, Query:tmp_code, Query:biz_seq, Query:cert_pwd_data, Query:photo_data, Query:idcard_auth_data, Query:local_id, Query:device_platform, Query:device_name, Query:device_id, Query:buvid | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/wauth/Bean/WAuthVerifyBean;&gt;;&gt;; | not-tested |
| classes30.dex:30556:POST | POST | https://api.bilibili.com/x/member/realname/alipay/apply | Query:access_key, Field:real_name, Field:card_num, Field:capture, Field:img_token | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/api/bean/ZhiMaAuthBizBean;&gt;;&gt;; | not-tested |
| classes30.dex:30557:POST | POST | https://api.bilibili.com/x/member/realname/tel/capture | Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes30.dex:30558:GET | GET | https://api.bilibili.com/x/member/realname/change/check | Query:last_digits | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/api/bean/CheckIDCradBean;&gt;;&gt;; | not-tested |
| classes30.dex:30559:GET | GET | https://api.bilibili.com/x/member/realname/change/gray |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/api/bean/ModifyAllowBean;&gt;;&gt;; | not-tested |
| classes30.dex:30560:GET | GET | https://api.bilibili.com/x/member/realname/change/condition | Query:action | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/api/bean/ModifyStatusBean;&gt;;&gt;; | not-tested |
| classes30.dex:30561:GET | GET | https://api.bilibili.com/x/member/realname/alipay/confirm | Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/api/bean/ConfirmZhiMaBean;&gt;;&gt;; | not-tested |
| classes30.dex:30562:GET | GET | https://api.bilibili.com/x/member/realname/captcha/confirm | Query:access_key, Query:remote, QueryMap:(内容未知) | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/api/bean/ConfirmGeeBean;&gt;;&gt;; | not-tested |
| classes30.dex:30563:GET | GET | https://api.bilibili.com/x/member/realname/captcha/confirm | Query:access_key, Query:remote | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/api/bean/ConfirmGeeBean;&gt;;&gt;; | not-tested |
| classes30.dex:30565:GET | GET | https://api.bilibili.com/x/member/realname/apply/status | Query:access_key, Query:tmp_code | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/api/bean/ApplyStatusBean;&gt;;&gt;; | not-tested |
| classes30.dex:30566:GET | GET | https://api.bilibili.com/x/member/realname/channel | Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Ltv/danmaku/bili/api/bean/ChannelBean;&gt;;&gt;;&gt;; | not-tested |
| classes30.dex:30568:GET | GET | https://api.bilibili.com/x/member/realname/v2/card/types | Query:scene, Query:tmp_code | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Ltv/danmaku/bili/api/bean/CardTypeBean;&gt;;&gt;;&gt;; | not-tested |
| classes30.dex:30569:GET | GET | https://api.bilibili.com/x/member/realname/change/reasons |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/api/bean/ModifyReasonsData;&gt;;&gt;; | not-tested |
| classes30.dex:30570:GET | GET | https://api.bilibili.com/x/member/realname/captcha | Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/api/bean/CaptchaGeeBean;&gt;;&gt;; | not-tested |
| classes30.dex:30572:GET | GET | https://api.bilibili.com/x/member/realname/tel/info | Query:access_key | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/api/bean/TelInfoBean;&gt;;&gt;; | not-tested |
| classes30.dex:30574:POST | POST | http://api.bilibili.com/x/member/realname/upload | Query:access_key, Part:img | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/api/bean/CardPictureBean;&gt;;&gt;; | not-tested |
| classes30.dex:31645:POST | POST | https://api.bilibili.com/x/account-oauth2/v1/authorize | Query:client_id, Query:scopes, Query:package, Query:signature, Query:session_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/auth/api/AuthLoginResponse;&gt;;&gt;; | not-tested |
| classes30.dex:31646:GET | GET | https://api.bilibili.com/x/account-oauth2/v1/scope | Query:client_id, Query:session_id | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/auth/ScopeInfoResponse;&gt;;&gt;; | not-tested |
| classes30.dex:34745:GET | GET | https://passport.bilibili.com/x/passport-login/country |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ltv/danmaku/bili/fullscreen/data/AvailableCountryCode;&gt;;&gt;; | not-tested |
| classes30.dex:40803:GET | GET | https://api.bilibili.com/x/safecenter/key |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/lib/accounts/model/AuthKey;&gt;;&gt;; | not-tested |
| classes30.dex:40804:POST | POST | https://api.bilibili.com/x/safecenter/pwd/supplement | Field:access_key, Field:pwd | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes33.dex:7607:GET | GET | http://api.bilibili.com/x/member/realname/v2/card/types | Query:scene | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/util/List&lt;Lcom/bilibili/bilibililive/ui/auth/bean/BLiveCardTypeBean;&gt;;&gt;;&gt;; | not-tested |
| classes35.dex:22799:POST | POST | https://api.bilibili.com/x/silverbullet-proxy/web/recaptcha/sms/check | Query:token, Query:code | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Ljava/lang/Void;&gt;;&gt;; | not-tested |
| classes35.dex:22800:GET | GET | https://api.bilibili.com/x/silverbullet-proxy/web/recaptcha/hide/tel |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/upper/api/bean/manuscript/EncodeMobileBean;&gt;;&gt;; | not-tested |
| classes35.dex:22801:POST | POST | https://api.bilibili.com/x/silverbullet-proxy/web/recaptcha/sms/send |  | LlC0/a&lt;Lcom/bilibili/okretro/GeneralResponse&lt;Lcom/bilibili/upper/api/bean/manuscript/VerifyCodeBean;&gt;;&gt;; | not-tested |

## gRPC

请求/响应角色默认仍为静态候选；View/View 已有单独实现核对。表格不代表已建立连接或验证认证。

| 路由 | 请求类型候选 | 响应类型候选 | 线上抽查 |
| --- | --- | --- | --- |
| /bilibili.account.interface.v1.AccountInterfaceV1/AccountProfile | Lcom/bapis/bilibili/account/interfaces/v1/AccountProfileReq; | Lcom/bapis/bilibili/account/interfaces/v1/AccountProfileReply; | not-tested |
| /bilibili.account.interface.v1.AccountInterfaceV1/MidByName | Lcom/bapis/bilibili/account/interfaces/v1/MidByNameReq; | Lcom/bapis/bilibili/account/interfaces/v1/MidByNameReply; | not-tested |
| /bilibili.account.interface.v1.AccountInterfaceV1/UnameMessage | Lcom/bapis/bilibili/account/interfaces/v1/UnameMessageReq; | Lcom/bapis/bilibili/account/interfaces/v1/UnameMessageReply; | not-tested |
| /bilibili.account.interface.v1.AccountInterfaceV1/UpdateHandle | Lcom/bapis/bilibili/account/interfaces/v1/UpdateHandleReq; | Lcom/bapis/bilibili/account/interfaces/v1/UpdateHandleReply; | not-tested |
| /bilibili.account.interface.v1.AccountInterfaceV1/UpdateNameV2 | Lcom/bapis/bilibili/account/interfaces/v1/UpdateNameReq; | Lcom/bapis/bilibili/account/interfaces/v1/UpdateNameReply; | not-tested |
| /bilibili.api.ticket.v1.Ticket/GenWebTicket | Lcom/bapis/bilibili/api/ticket/v1/GenWebTicketRequest; | Lcom/bapis/bilibili/api/ticket/v1/GenWebTicketResponse; | not-tested |
| /bilibili.api.ticket.v1.Ticket/GetTicket | Lcom/bapis/bilibili/api/ticket/v1/GetTicketRequest; | Lcom/bapis/bilibili/api/ticket/v1/GetTicketResponse; | not-tested |
| /bilibili.gaia.gw.Gaia/ExClimbAppleTrees | Lcom/bapis/bilibili/gaia/gw/GaiaEncryptMsgReq; | Lcom/bapis/bilibili/gaia/gw/UploadAppListReply; | not-tested |
| /bilibili.gaia.gw.Gaia/ExFetchPublicKey | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/gaia/gw/FetchPublicKeyReply; | not-tested |
| /bilibili.gaia.gw.Gaia/ExGetAxe | Lcom/google/protobuf/Empty; | Lcom/bapis/bilibili/gaia/gw/FetchPublicKeyReply; | not-tested |
| /bilibili.gaia.gw.Gaia/ExUploadAppList | Lcom/bapis/bilibili/gaia/gw/GaiaEncryptMsgReq; | Lcom/bapis/bilibili/gaia/gw/UploadAppListReply; | not-tested |

## 定位原始证据

使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：

```sh
node bin/bili-apis.mjs list --category auth --limit 10
node bin/bili-apis.mjs show "ID"
```
