import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {BiliWebClient} from '../src/web-client.mjs';

/** Resolve public input at runtime; no hardcoded account, video or credentials. */
export async function readPublicVideo(client = new BiliWebClient()) {
 const popular = await client.call('home.popular', {pn:1,ps:3});
 const target = popular.data?.list?.find(item=>typeof item.bvid==='string');
 if (!target) throw Error('No public video was returned by the popular list');
 const detail = await client.call('video.detail', {bvid:target.bvid});
 const pages = await client.call('video.pages', {bvid:target.bvid});
 if (detail.data?.bvid!==target.bvid || !Array.isArray(pages.data)) throw Error('Unexpected video or page response');
 return {bvid:detail.data.bvid,aid:detail.data.aid,cid:detail.data.cid,page_count:pages.data.length};
}
if (process.argv[1] && path.resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
 try { console.log(JSON.stringify(await readPublicVideo(),null,2)); }
 catch (error) { console.error(error.message); process.exitCode=1; }
}
