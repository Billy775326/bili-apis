import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {gzipSync,gunzipSync} from 'node:zlib';
import {loadCatalog,readJson} from '../src/catalog.mjs';
import {compareAndroidCatalogs} from '../src/android-comparison.mjs';
import {FUNCTION_CATEGORIES,classifyFunction,isEndpoint,parameterSummary} from '../src/functions.mjs';
const root=process.cwd(),directory=path.join(root,'catalog/official-android'),docs=path.join(root,'docs/official-android');
const names=['artifacts','coverage-artifacts','coverage-dex-routes','coverage-grpc-audit','coverage-grpc','coverage-http-models','coverage-http','coverage-native','coverage-resource-routes','dex-routes','grpc-additional','grpc-audit','grpc','http-models','http','messages','native','resource-routes'];
const hash=b=>createHash('sha256').update(b).digest('hex');
const expected=readJson(path.join(root,'evidence/official-android/inputs.json')).artifact;
const args=process.argv.slice(2);
if(args.length && (args.length!==2||args[0]!=='--import'))throw Error('Usage: node scripts/build-official-android.mjs [--import EXTRACTED_CATALOG_DIRECTORY]');
if(args.length){
 fs.mkdirSync(directory,{recursive:true});const source=path.resolve(args[1]),artifact=readJson(path.join(source,'http.json')).artifact,files=[];
 if(artifact.sha256!==expected.sha256)throw Error('Official import differs from the pinned evidence baseline');
 for(const name of names){
  const filename=name+'.json',raw=fs.readFileSync(path.join(source,filename)),data=JSON.parse(raw.toString('utf8').replace(/^\uFEFF/,''));
  const identities=data.artifact?[data.artifact.sha256]:(data.archives||data.input_archives||[]).map(a=>a.sha256);
  if(identities.length&&identities.some(id=>id!==artifact.sha256))throw Error('Mixed APK identity: '+filename);
  const compact=Buffer.from(JSON.stringify(data)+'\n'),packed=gzipSync(compact,{level:9});
  fs.writeFileSync(path.join(directory,filename+'.gz'),packed);
  files.push({name:filename+'.gz',bytes:packed.length,sha256:hash(packed),uncompressed_bytes:compact.length,uncompressed_sha256:hash(compact),source_pretty_json_sha256:hash(raw)});
 }
 fs.writeFileSync(path.join(directory,'manifest.json'),JSON.stringify({schema_version:1,artifact,encoding:'gzip of compact UTF-8 JSON; original extraction metadata retained without source bodies or APK binaries',scope:'All files are static extraction outputs. Coverage files without a standalone artifact field are bound by this manifest to the companion pinned extractor inputs.',files},null,2)+'\n');
}
const manifest=readJson(path.join(directory,'manifest.json'));
if(manifest.artifact.sha256!==expected.sha256)throw Error('Official manifest differs from pinned evidence');
const readOfficial=name=>{
 const filename=name+'.json.gz',record=manifest.files.find(e=>e.name===filename),packed=fs.readFileSync(path.join(directory,filename));
 if(!record||packed.length!==record.bytes||hash(packed)!==record.sha256)throw Error('Official catalog hash mismatch: '+filename);
 const bytes=gunzipSync(packed,{maxOutputLength:64*1024*1024});
 if(bytes.length!==record.uncompressed_bytes||hash(bytes)!==record.uncompressed_sha256)throw Error('Official unpacked catalog hash mismatch: '+filename);
 return JSON.parse(bytes.toString('utf8'));
};
for(const name of names)readOfficial(name);
const official=Object.fromEntries(['http','grpc','messages'].map(n=>[n,readOfficial(n)])),play=Object.fromEntries(['http','grpc','messages'].map(n=>[n,readJson(path.join(root,'catalog',n+'.json'))]));
if(official.http.artifact.sha256!==expected.sha256)throw Error('Official catalog differs from pinned evidence');
const comparison=compareAndroidCatalogs(play,official);
const entries=loadCatalog(root,{edition:'official'}).filter(isEndpoint),groups=FUNCTION_CATEGORIES.map(c=>({...c,entries:entries.filter(e=>classifyFunction(e).category===c.id)}));
fs.writeFileSync(path.join(directory,'comparison.json'),JSON.stringify(comparison,null,2)+'\n');
const cell=x=>String(x??'').replaceAll('|','\\|').replaceAll('\n',' ').replaceAll('\r',' ').replaceAll('<','&lt;').replaceAll('>','&gt;');
fs.mkdirSync(docs,{recursive:true});
for(const g of groups){
 const http=g.entries.filter(e=>e.kind==='http'),grpc=g.entries.filter(e=>e.kind==='grpc');
 const lines=[`# ${g.title}`,'',g.description+'。分类根据路由、域名与声明类名称推断，未验证业务行为。','',`官方 Android 9.19.0：${http.length} 条 HTTP 声明、${grpc.length} 条 gRPC 路由；全部为静态证据，线上状态为 not-tested。`,'','[返回分类](README.md) · [与 Play 对比](comparison.md)','','## HTTP','','参数为注解位置和名称；不代表默认值、必填性或完整请求体。BaseUrl 拼接只是候选，完整证据通过 CLI 查询。','','| ID | 方法 | 路径或 URL 候选 | 参数位置与名称 | Java 返回类型 |','| --- | --- | --- | --- | --- |',...http.map(e=>`| ${cell(e.id)} | ${cell(e.http_method)} | ${cell(e.resolved_url_candidate||e.path||'动态 @Url')} | ${cell(parameterSummary(e).map(p=>p.location+':'+(p.name??'(内容未知)')).join(', '))} | ${cell(e.generic_signature?.slice(e.generic_signature.indexOf(')')+1)||e.return_type)} |`),'','## gRPC','','请求/响应类型默认根据描述符构造顺序推断。单项 REA 复核不推广到其他路由，也不证明连接或认证可用。','','| 路由 | 请求类型候选 | 响应类型候选 |','| --- | --- | --- |',...grpc.map(e=>`| ${cell(e.id)} | ${cell(e.request_type_candidate)} | ${cell(e.response_type_candidate)} |`),'','```sh',`node bin/bili-apis.mjs --edition official list --category ${g.id} --limit 10`,'node bin/bili-apis.mjs --edition official show "ID"','```',''];
 fs.writeFileSync(path.join(docs,g.id+'.md'),lines.join('\n'));
}
const hc=readOfficial('coverage-http'),gc=readOfficial('coverage-grpc');
const index=['# 官方 Android 静态接口目录','','面向研究官方 Android 安装包的读者，独立保存 9.19.0 的声明、参数模型及位置证据。网页接口仍为[仓库主入口](../../README.md)；App 声明不会自动加入网页客户端。','','安装包来自[哔哩哔哩官方下载页](https://app.bilibili.com/)的 Android 64 位链接；包名 `tv.danmaku.bili`，versionCode `9190400`，minSdk 24、targetSdk 35。URL 中 latest 会变化，本基线以哈希固定。','',`APK SHA-256：\`${official.http.artifact.sha256}\`。`,'','[复现步骤与补充检查边界](reproduce.md) · [来源与 36 个 DEX 哈希](../../evidence/official-android/inputs.json) · [下载记录](../../evidence/official-android/download.json) · [清单摘要](../../evidence/official-android/manifest.json) · [证书提取](../../evidence/official-android/certificate.json) · [REA 复核](../../evidence/official-android/rea.json) · [静态差异](comparison.md)','','证书 SHA-256 与已有 Play 基线一致；仅提取证书元数据并对照指纹，未做 APK 密码学签名验证。工具未运行 App，未访问账号或发送 App 接口请求。','','## 覆盖与验证边界','',`- 36 个主 DEX：${hc.class_definitions_scanned.toLocaleString('en-US')} 个类、${hc.method_definitions_scanned.toLocaleString('en-US')} 个方法定义；HTTP ${hc.http_declarations} 条声明、${hc.unique_verb_path_pairs} 个原始方法/路径组合。静态比较排除空动态路由、去除查询值并解析 BaseUrl 后，得到 ${comparison.http.official_count} 个键，两种计数不可相加。`,`- HTTP 可达模型 5,300 个、30,586 个字段；Protobuf ${gc.message_classes} 个消息、${gc.decoded_wire_fields} 个字段，${gc.field_number_cross_checks_matched} 次字段编号交叉核对一致。`,`- gRPC ${gc.unique_methods} 条路由。资源、DEX 字符串与 native URL 候选另列，不加总为可调用接口。`,'- 26,669 个 APK 成员完成哈希/CRC 检查；94 个 ELF 库解析；8 个嵌套 ZIP 的 309 个子成员未发现 DEX/JVM/ZIP/ELF 载荷。','- 44 个动态 URL 声明、50 个直接调用点，5 个调用点恢复常量 URL（4 个去重 URL），45 个调用点未解析；computed 资源请求 219 条，不能补造成固定地址。','- 不透明 Lynx bundle、严格 JSON 解析失败的资源、native 间接调用与未解析重定位、动态下载代码仍有覆盖缺口；原始覆盖记录保留全部限制。','- 线上验证全部为 not-tested。Play 的运行时或静态语义核对不自动沿用到此 APK；网页 验证也不作为 App 验证。','','## 按功能查找','','共 2,514 条 HTTP 声明、625 条 gRPC 路由。重复声明保留，分类仅用于导航。','','| 功能 | HTTP 声明 | gRPC 路由 |','| --- | ---: | ---: |',...groups.map(g=>`| [${g.title}](${g.id}.md) | ${g.entries.filter(e=>e.kind==='http').length} | ${g.entries.filter(e=>e.kind==='grpc').length} |`),'','## 查询与复现','','需要 Node.js 24.11 或更新版本；查询离线执行，无须安装开发依赖。完整元数据压缩保存，CLI 自动解压并校验压缩包和 JSON 哈希，返回原始字段和位置。','','```sh','node bin/bili-apis.mjs --edition official stats','node bin/bili-apis.mjs --edition official list --kind http --category search --limit 10','node bin/bili-apis.mjs --edition official list --kind message --query ViewReq --limit 5','node scripts/build-official-android.mjs','npm test','```','','复现提取时，将相同 SHA-256 的 APK 放入本地忽略目录，依次执行已有 pin/unpack/http/model/grpc/audit/resource/native 提取工具；需要开发依赖、下载记录及本地 APK。每个提取器的参数见源码。将生成目录发布为压缩元数据：','','```sh','node scripts/build-official-android.mjs --import .local/official-android/catalog','```','','[压缩元数据清单与完整性哈希](../../catalog/official-android/manifest.json)提供每个 JSON 的独立下载入口名、字节数、压缩与解压 SHA-256；未提交 APK、DEX、库文件或反编译正文。',''];
fs.writeFileSync(path.join(docs,'README.md'),index.join('\n'));
const diff=['# 官方 Android 与 Play 静态差异','','比较 Play 6.8.0（com.bilibili.app.in，versionCode 9180200）与官方 9.19.0（tv.danmaku.bili，versionCode 9190400）。**版本与发行渠道同时不同，不能归因为单一渠道差异，也不代表后端上线或下线。**','','[返回官方版入口](README.md) · [完整逐项差异 JSON](../../catalog/official-android/comparison.json) · [比较规则](../../src/android-comparison.mjs)','','| 项目 | Play | 官方版 | 共同 | 仅官方 | 仅 Play | 共同项变化 |','| --- | ---: | ---: | ---: | ---: | ---: | --- |',`| 规范化 HTTP 静态路由 | ${comparison.http.play_count} | ${comparison.http.official_count} | ${comparison.http.common_count} | ${comparison.http.added_count} | ${comparison.http.removed_count} | ${comparison.http.changed_count} 个命名注解绑定集合 |`,`| gRPC 路由 ID | ${comparison.grpc.play_count} | ${comparison.grpc.official_count} | ${comparison.grpc.common_count} | ${comparison.grpc.added_count} | ${comparison.grpc.removed_count} | ${comparison.grpc.changed_count} 个候选类型 |`,`| Protobuf 消息 | ${comparison.protobuf.play_count} | ${comparison.protobuf.official_count} | ${comparison.protobuf.common_count} | ${comparison.protobuf.added_count} | ${comparison.protobuf.removed_count} | ${comparison.protobuf.changed_count} 个线格式布局 |`,'','HTTP 比较保留域名和端口，忽略查询值与片段，空动态 URL 排除；同一键下的命名注解绑定取并集。参数名变化不是完整请求 schema 的兼容性判定。Protobuf 不比较 DEX 偏移，缺少布局保留未知。','','12 个共同消息共增加 44 个字段编号；未发现已有编号删除或字段类型/标志变化。新增 285 个消息，不表示其他协议或服务已经全部覆盖。','','## 新增 gRPC 路由','','```text',...comparison.grpc.added,'```','','## 资源与 native 观察','','资源中新增已知方法和路径 `POST /x/vupre/app/reason/feedback/submit`，见官方资源目录中的源成员、哈希和字节位置；未发送该写请求。','','`lib/arm64-v8a/libbili.so` 与 Play 库字节一致，11 个 LibBili native 方法签名一致。仅观察到 JNI_OnLoad 导出，未恢复运行时注册映射；字节一致不能证明认证、设备环境或服务端行为一致。','','## 仅见于官方的 HTTP 键','','```text',...comparison.http.added,'```','','## 仅见于 Play 的 HTTP 键','','```text',...comparison.http.removed,'```',''];
fs.writeFileSync(path.join(docs,'comparison.md'),diff.join('\n'));
console.log(JSON.stringify({declarations:entries.length,categories:groups.length,compressed_files:names.length,comparison:{http:comparison.http.added_count,grpc:comparison.grpc.added_count,messages:comparison.protobuf.added_count}}));
