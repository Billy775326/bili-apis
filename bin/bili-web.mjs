#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {BiliWebClient,WEB_READ_ENDPOINTS} from '../src/web-client.mjs';
import {PC_CATEGORIES} from '../src/pc-catalog.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=name=>JSON.parse(fs.readFileSync(path.join(root,name),'utf8').replace(/^\uFEFF/,''));
try{
 const [command='stats',...args]=process.argv.slice(2);
 if(command==='help'||command==='--help')console.log('bili-web stats\nbili-web list [--category NAME] [--query TEXT] [--all] [--offset N] [--limit N]\nbili-web show ID_OR_ALIAS\nbili-web candidates [--query TEXT] [--offset N] [--limit N]\nbili-web call ALIAS key=value ...\nOnly call sends requests: reviewed HTTPS GET endpoints, with optional BILI_COOKIE from the local environment.');
 else if(command==='call'){
  const [name,...pairs]=args;if(!name)throw Error('call requires a PC read alias');const params=Object.create(null);
  for(const pair of pairs){const at=pair.indexOf('=');if(at<1)throw Error('Parameters must use key=value');const key=pair.slice(0,at);if(!/^[A-Za-z_][A-Za-z0-9_]*$/.test(key)||Object.hasOwn(params,key))throw Error('Invalid or duplicate parameter name');params[key]=pair.slice(at+1);}
  const client=new BiliWebClient({cookie:process.env.BILI_COOKIE||''});console.log(JSON.stringify(await client.call(name,params),null,2));
 }else{
  const catalog=read('catalog/pc-web.json');let result;
  if(command==='stats'){if(args.length)throw Error('stats takes no options');result={scope:catalog.scope,...catalog.summary,client_read_aliases:Object.keys(WEB_READ_ENDPOINTS).length};}
  else if(command==='show'){
   if(args.length!==1)throw Error('show requires one ID or alias');const row=catalog.endpoints.find(e=>e.id===args[0]||e.aliases.includes(args[0]));if(!row)throw Error('No matching PC endpoint');result={...row,samples:catalog.observations.filter(o=>row.observations.includes(o.id))};
  }else if(command==='list'||command==='candidates'){
   const options={offset:0,limit:20,query:'',all:false};for(let i=0;i<args.length;i++){const flag=args[i];if(flag==='--all'&&command==='list'){options.all=true;continue;}if(!['--category','--query','--offset','--limit'].includes(flag)||args[i+1]===undefined)throw Error('Unknown or incomplete option: '+flag);const key=flag.slice(2),value=args[++i];options[key]=['offset','limit'].includes(key)?Number(value):value;}
   if(!Number.isSafeInteger(options.offset)||options.offset<0||!Number.isSafeInteger(options.limit)||options.limit<1||options.limit>1000)throw Error('offset must be nonnegative; limit must be 1..1000');
   if(options.category&&!Object.hasOwn(PC_CATEGORIES,options.category))throw Error('Unknown PC category');
   const rows=command==='candidates'?read('catalog/pc-candidates.json').candidates:catalog.endpoints;
   const selected=rows.filter(e=>(command==='candidates'||options.all||e.verification.anonymous_case_passed)&&(!options.category||e.category===options.category)&&JSON.stringify(e).toLowerCase().includes(options.query.toLowerCase()));
   result={total:selected.length,offset:options.offset,limit:options.limit,next_offset:options.offset+options.limit<selected.length?options.offset+options.limit:null,entries:selected.slice(options.offset,options.offset+options.limit)};
  }else throw Error('Unknown PC command: '+command);
  console.log(JSON.stringify(result,null,2));
 }
}catch(error){console.error(error.message);process.exitCode=1;}
