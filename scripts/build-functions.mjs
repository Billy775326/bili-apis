import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {loadCatalog,readJson} from '../src/catalog.mjs';
import {FUNCTION_CATEGORIES,classifyFunction,isEndpoint,parameterSummary,resultStatus} from '../src/functions.mjs';
const root=process.cwd(),entries=loadCatalog(root).filter(isEndpoint);
const livePath=path.join(root,'evidence/live-checks.json');
const live=fs.existsSync(livePath)?readJson(livePath):{observations:[]};
const digest=file=>createHash('sha256').update(JSON.stringify(readJson(path.join(root,file)))).digest('hex');
const cell=value=>String(value??'').replaceAll('|','\\|').replaceAll('\n',' ').replaceAll('\r',' ').replaceAll('<','&lt;').replaceAll('>','&gt;');
const rows=entries.map(e=>({id:e.id,kind:e.kind,...classifyFunction(e),method:e.http_method||e.method,path:e.path??(e.kind==='grpc'?e.id:null),url_candidate:e.resolved_url_candidate??null,
 parameters:e.kind==='http'?parameterSummary(e):null,
 return_type:e.kind==='http'?(e.generic_signature?.slice(e.generic_signature.indexOf(')')+1)||e.return_type):null,
 request_type_candidate:e.request_type_candidate??null,response_type_candidate:e.response_type_candidate??null,
 verification:resultStatus(e,live.observations)}));
fs.mkdirSync('docs/functions',{recursive:true});
const index=['# 按功能查找接口','','本目录覆盖全部 HTTP 声明和 gRPC 路由。功能分类根据路由、域名和声明类名称推断，优先依据路由/域名，再依据声明类，按公开规则首次命中归类；不是应用业务语义的运行时验证。参数和类型来自原始目录，未恢复的语义保持未知。','','[验证记录](../validation.md) · [分类 JSON](../../catalog/functions.json) · [分类规则](../../src/functions.mjs)','','| 功能 | HTTP 声明 | gRPC 路由 | 线上抽查声明 | 范围 |','| --- | ---: | ---: | ---: | --- |'];
for(const c of FUNCTION_CATEGORIES) {
 const group=rows.filter(e=>e.category===c.id),http=group.filter(e=>e.kind==='http'),grpc=group.filter(e=>e.kind==='grpc');
 index.push(`| [${c.title}](${c.id}.md) | ${http.length} | ${grpc.length} | ${group.filter(e=>e.verification.live!=='not-tested').length} | ${c.description} |`);
 const lines=[`# ${c.title}`,'',c.description+'。分类来自名称推断，具体作用以对应方法实现和运行结果为准。', '',`共 ${http.length} 条 HTTP 声明、${grpc.length} 个 gRPC 路由。[返回功能导航](README.md) · [验证状态含义](../validation.md)`,''];
 if(http.length) lines.push('## HTTP','','参数标注位置及名称；QueryMap/FieldMap/Body 的内容、缺省值和必填性不能仅凭此表确定。泛型签名为 Java 元数据，不是完整 JSON 响应契约。URL 为 BaseUrl 的语法拼接候选。','','| ID | 方法 | 路径或 URL | 参数 | 返回 Java 类型或泛型 | 线上抽查 |','| --- | --- | --- | --- | --- | --- |',...http.map(e=>`| ${cell(e.id)} | ${cell(e.method)} | ${cell(e.url_candidate||e.path||'动态 @Url')} | ${cell(e.parameters.map(p=>p.location+':'+(p.name??'(内容未知)')).join(', '))} | ${cell(e.return_type)} | ${cell(e.verification.live)} |`),'');
 if(grpc.length)lines.push('## gRPC','','请求/响应角色默认仍为静态候选；View/View 已有单独实现核对。表格不代表已建立连接或验证认证。','','| 路由 | 请求类型候选 | 响应类型候选 | 线上抽查 |','| --- | --- | --- | --- |',...grpc.map(e=>`| ${cell(e.id)} | ${cell(e.request_type_candidate)} | ${cell(e.response_type_candidate)} | ${cell(e.verification.live)} |`),'');
 lines.push('## 定位原始证据','','使用任一 ID 查询完整声明、拦截器和原始 DEX 位置：','','```sh',`node bin/bili-apis.mjs list --category ${c.id} --limit 10`,'node bin/bili-apis.mjs show "ID"','```','');
 fs.writeFileSync(`docs/functions/${c.id}.md`,lines.join('\n'));
}
index.push('',`共 ${rows.length} 条声明/路由，每条只计入一个主分类；相同路径的多份声明保留。资源、DEX 字符串、广播事件和 native 候选在[深挖结果](../discovery.md)中单列，不计入功能接口总数。`,'','## 参考与实现边界','','参考 [cv-cat/DouYin_Spider](https://github.com/cv-cat/DouYin_Spider) README 的功能展示和 dy_apis 目录的模块组织（登录、数据接口、创作、私信、直播）。该项目实现的是抖音调用封装，本仓库当前提供 Bilibili Play APK 的证据目录；没有移植其平台专用签名、认证或请求实现。','');
fs.writeFileSync('docs/functions/README.md',index.join('\n'));
fs.writeFileSync('catalog/functions.json',JSON.stringify({schema_version:1,classification:'Ordered path/domain/declaration-class name heuristics; business meaning is inferred, not runtime verified.',source_json_stringify_sha256:{'catalog/http.json':digest('catalog/http.json'),'catalog/grpc.json':digest('catalog/grpc.json'),...(fs.existsSync(livePath)?{'evidence/live-checks.json':digest('evidence/live-checks.json')}:{})},categories:FUNCTION_CATEGORIES.map(c=>({...c,counts:{http:rows.filter(r=>r.category===c.id&&r.kind==='http').length,grpc:rows.filter(r=>r.category===c.id&&r.kind==='grpc').length}})),endpoints:rows},null,2)+'\n');
const counts=Object.fromEntries([...new Set(live.observations.map(r=>r.outcome))].map(k=>[k,live.observations.filter(r=>r.outcome===k).length]));
const validation=['# 验证状态与线上抽查','','## 已完成与未覆盖','','- 静态核对：原 APK/DEX 哈希、Retrofit 注解、gRPC 描述符和 Protobuf 字段编号交叉检查；部分方法另有派生 APK 的 REA 实现核对。','- 离线测试与 CI：验证提取器边界、目录引用和查询行为。测试通过不等于接口可以调用。','- 线上抽查：只对下表的原目录 GET 声明发送匿名 HTTPS 请求，不带 Cookie、access_key、appkey、签名或设备标识；不自动重试、不跟随重定向。','- 未测试：全部其他声明、gRPC 认证及通信、完整 Android 参数/签名链、账号接口、写操作、分页完整性及 Play App 的真实流量。','','抽查使用通用研究客户端，未模拟 Play App 的全部请求上下文；成功也只证明本次参数下的匿名 HTTPS 行为。不能把它推广到所有接口或完整 App 兼容。','','## 结果判定','','| 状态 | 含义 |','| --- | --- |','| not-tested | 未发送线上请求 |','| business-success | HTTP 成功、JSON 业务码为 0，且指定数据结构检查通过 |','| business-error | 有数字业务码且非 0；HTTP 200 仍可能是认证、参数或风控错误 |','| http-error | HTTP 非 2xx |','| unexpected-response | JSON、业务码或数据结构不符合本次检查预期 |','| transport-error | DNS、连接、TLS、超时或大小限制等阻止获取响应 |','','## 本次匿名样本','','[脱敏证据 JSON](../evidence/live-checks.json) · [复测计划](../scripts/check-live.mjs)','','原始响应正文、Cookie、会话头和个人内容不写入仓库。记录只保留时间、声明 ID、公开测试参数、状态码、数据类型/键名及响应正文哈希。','','| 观测 ID | 声明 ID | UTC 时间 | HTTP | 业务码 | 结果 |','| --- | --- | --- | ---: | ---: | --- |',...live.observations.map(r=>`| ${cell(r.observation_id)} | ${cell(r.endpoint_id)} | ${cell(r.started_at)} | ${cell(r.http_status)} | ${cell(r.business_code)} | ${cell(r.outcome)} |`),'',`观测总数 ${live.observations.length}，结果计数：${JSON.stringify(counts)}。失败保留原状，不通过补造参数、重试或降低断言改写为成功。`,'','## 手动复测','','复测会发送上述六个只读 GET 请求，覆盖上次证据文件；生成文档不会联网，CI 不运行线上请求。先用 git 保存希望保留的历史观测，再执行：','','```sh','node scripts/check-live.mjs --run','npm run docs:generate','```',''];
fs.writeFileSync('docs/validation.md',validation.join('\n'));
console.log(JSON.stringify({function_endpoints:rows.length,categories:FUNCTION_CATEGORIES.length,live_observations:live.observations.length}));
