import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {ZipReader} from '../src/zip.mjs';
import {manifestIdentity} from '../src/android-manifest.mjs';
const [apk,receiptPath,output]=process.argv.slice(2);if(!apk||!receiptPath||!output)throw Error('Usage: node scripts/pin-official-android.mjs APK DOWNLOAD_JSON OUTPUT_DIRECTORY');
const receipt=JSON.parse(fs.readFileSync(receiptPath,'utf8').replace(/^\uFEFF/,'')),hash=crypto.createHash('sha256');for await(const b of fs.createReadStream(apk))hash.update(b);if(hash.digest('hex')!==receipt.sha256||fs.statSync(apk).size!==receipt.received_bytes)throw Error('Official download hash/size mismatch');
const zip=new ZipReader(apk);try{
 const manifestEntry=zip.entries.find(e=>e.name==='AndroidManifest.xml');if(!manifestEntry)throw Error('APK has no binary manifest');const bytes=zip.readEntry(manifestEntry,8*1024*1024),manifest=manifestIdentity(bytes);
 if(manifest.package_name!=='tv.danmaku.bili')throw Error('Official mainland package identity mismatch: '+manifest.package_name);
 const dex=[];for(const e of zip.entries.filter(e=>/^classes\d*\.dex$/.test(e.name)).sort((a,b)=>a.name.localeCompare(b.name))){const bytes=zip.readEntry(e,64*1024*1024);if(bytes.toString('ascii',0,4)!=='dex\n')throw Error('Unsupported DEX carrier '+e.name);dex.push({name:e.name,size:bytes.length,sha256:crypto.createHash('sha256').update(bytes).digest('hex'),string_count:bytes.readUInt32LE(56)});}
 if(!dex.length)throw Error('No root DEX files');fs.mkdirSync(output,{recursive:true});
 const inputs={schema_version:1,artifact:{filename:path.basename(apk),sha256:receipt.sha256,size:receipt.received_bytes,package_name:manifest.package_name,version_name:manifest.version_name,version_code:manifest.version_code,distribution:'official Android 64-bit'},dex_files:dex,scope:'Pinned original APK and all root classes*.dex. Downloaded modules, nested bytecode and runtime behavior are separate coverage questions.'};
 fs.writeFileSync(path.join(output,'inputs.json'),JSON.stringify(inputs,null,2)+'\n');fs.writeFileSync(path.join(output,'manifest.json'),JSON.stringify({artifact_sha256:receipt.sha256,manifest_sha256:crypto.createHash('sha256').update(bytes).digest('hex'),...manifest},null,2)+'\n');
 const nested=zip.entries.filter(e=>!/^classes\d*\.dex$/.test(e.name)&&/\.(?:dex|apk|jar|zip)$/i.test(e.name)).map(e=>({name:e.name,size:e.size}));fs.writeFileSync(path.join(output,'archive-summary.json'),JSON.stringify({artifact_sha256:receipt.sha256,members:zip.entries.length,root_dex_files:dex.length,root_dex_bytes:dex.reduce((n,e)=>n+e.size,0),native_members:zip.entries.filter(e=>/^lib\/.+\.so$/.test(e.name)).map(e=>({name:e.name,size:e.size})),nested_bytecode_or_archive_members:nested},null,2)+'\n');console.log(JSON.stringify({identity:manifest,root_dex_files:dex.length,root_dex_bytes:dex.reduce((n,e)=>n+e.size,0),members:zip.entries.length,nested_carriers:nested.length}));
}finally{zip.close();}
