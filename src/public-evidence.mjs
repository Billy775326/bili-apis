export const REDACTED_INPUT='[REDACTED_INPUT]';
const dynamicKeys=new Set(['data_keys','top_level_keys','first_item_keys','response_data_fields']);
/** Egress-only sanitizer. Validate against private originals before calling this. */
export function sanitizePublicEvidence(value){
 function visit(node,key=''){
  if(Array.isArray(node)){const items=node.map(v=>visit(v,key));return dynamicKeys.has(key)?items.filter(v=>typeof v!=='string'||!/^\d+$|^[a-f0-9]{16,}$/i.test(v)):items;}
  if(node&&typeof node==='object'){const out={};if(typeof node.url==='string'&&/^https?:\/\//.test(node.url)){const u=new URL(node.url);if(u.search)out.request_parameter_names=[...new Set(u.searchParams.keys())].sort();}for(const[k,v]of Object.entries(node)){if(k==='title'&&key==='pages'){out[k]=typeof v==='string'?'[REDACTED_PAGE_TITLE]':v;continue;}if(k==='public_input'&&v&&typeof v==='object'&&!Array.isArray(v)){out[k]=Object.fromEntries(Object.keys(v).map(name=>[name,REDACTED_INPUT]));if(Object.keys(v).length)out.input_values_redacted=true;continue;}out[k]=visit(v,k);}return out;}
  if(typeof node!=='string')return node;
  if(/^(?:[A-Za-z]:[\\/]|\/(?:Users|home)\/)/.test(node))return'[REDACTED_LOCAL_PATH]';
  let text=node.replace(/\bBV1(?!EXAMPLE01)[a-zA-Z0-9]{9}\b/g,'[REDACTED_VIDEO]');
  if(/^https?:\/\//.test(text)){let u;try{u=new URL(text);}catch{return text;}u.username='';u.password='';u.search='';u.hash='';if(u.hostname==='space.bilibili.com')u.pathname=u.pathname.replace(/^\/\d+(?=\/|$)/,'/[REDACTED_USER]');if(u.hostname==='live.bilibili.com')u.pathname=u.pathname.replace(/^\/\d+(?=\/|$)/,'/[REDACTED_ROOM]');if(u.hostname==='www.bilibili.com')u.pathname=u.pathname.replace(/\/video\/av\d+/g,'/video/[REDACTED_VIDEO]');return u.href;}
  return text;
 }
 return visit(value);
}
