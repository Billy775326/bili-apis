import fs from 'node:fs';
import crypto from 'node:crypto';
import {parse} from '@babel/parser';
const args=process.argv.slice(2),options={};for(let i=0;i<args.length;i+=2){if(!['--capture','--output'].includes(args[i])||!args[i+1])throw Error('Use --capture FILE --output FILE');options[args[i].slice(2)]=args[i+1];}if(!options.capture||!options.output)throw Error('Capture and output are required');
const names=new Set(['DmWebViewReply','DmSegConfig','DmSegMobileReply','DanmakuElem','DmColorful','SubtitleViewReply']);
const out={schema_version:1,scope:'Focused protobuf field metadata parsed from a served official PC player script; not an Android route import.',sources:[],messages:[]};
const capture=JSON.parse(fs.readFileSync(options.capture,'utf8').replace(/^\uFEFF/,''));
const asset=capture.assets.find(a=>a.url.includes('/player/main/core.')&&fs.readFileSync(a.local_file,'utf8').includes('DmWebViewReply'));
if(!asset)throw Error('No primary PC protobuf schema source');
const bytes=fs.readFileSync(asset.local_file);if(bytes.length>6*1024*1024||crypto.createHash('sha256').update(bytes).digest('hex')!==asset.sha256)throw Error('Source provenance or size mismatch');
const text=bytes.toString('utf8'),ast=parse(text,{sourceType:'unambiguous',allowReturnOutsideFunction:true}),stack=[ast],seen=new Set();
function walk(node,prefix=[]){
 if(!node||typeof node!=='object')return;
 if(node.fields){
  const name=prefix.at(-1);
  if(names.has(name)||name?.toLowerCase().includes('subtitle')){
   const full=prefix.join('.');
   if(!seen.has(full)){seen.add(full);out.messages.push({name,full_name:full,fields:Object.entries(node.fields).map(([name,s])=>({name,id:s.id,type:s.type,rule:s.rule||null})).sort((a,b)=>a.id-b.id)});}
  }
 }
 for(const[k,v]of Object.entries(node.nested||{}))walk(v,[...prefix,k]);
}
while(stack.length){
 const n=stack.pop();if(!n||typeof n!=='object')continue;
 if(n.type==='StringLiteral'&&n.value.startsWith('{')&&n.value.includes('"fields"')&&(n.value.includes('DmWebViewReply')||n.value.includes('Subtitle'))){
  let parsed;try{parsed=JSON.parse(n.value);}catch{continue;}
  out.sources.push({url:asset.url,sha256:asset.sha256,source_utf16_offset:n.start,source_byte_offset:Buffer.byteLength(text.slice(0,n.start))});walk(parsed);
 }
 for(const[k,v]of Object.entries(n)){if(['loc','start','end','extra'].includes(k))continue;if(Array.isArray(v))stack.push(...v);else if(v&&typeof v==='object')stack.push(v);}
}
if(!out.messages.some(m=>m.name==='DmWebViewReply')||!out.messages.some(m=>m.name==='DmSegMobileReply'))throw Error('Expected schemas not parsed');
fs.writeFileSync(options.output,JSON.stringify(out,null,2)+'\n');console.log(JSON.stringify({sources:out.sources.length,messages:out.messages.length,fields:out.messages.reduce((n,m)=>n+m.fields.length,0)}));
