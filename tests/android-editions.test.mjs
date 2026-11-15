import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
import {ANDROID_EDITIONS, resolveAndroidEdition} from '../src/android-editions.mjs';
import {readJson, loadCatalog, summarize} from '../src/catalog.mjs';
const root = fileURLToPath(new URL('../', import.meta.url));
const read = file => readJson(path.join(root, file));
const cli = args => spawnSync(process.execPath, ['bin/bili-apis.mjs', ...args], {cwd:root, encoding:'utf8', timeout:15000});

test('package/channel/version selection never falls back across pinned APK baselines', () => {
  assert.equal(resolveAndroidEdition().edition, 'play');
  for (const e of ANDROID_EDITIONS) {
    for (const selectors of [{edition:e.edition}, {packageName:e.package_name}, {version:e.version_name}, {edition:e.edition,packageName:e.package_name,version:e.version_name}])
      assert.equal(resolveAndroidEdition(selectors), e);
  }
  for (const selectors of [{packageName:'example.invalid'}, {version:'0.0.0'}, {edition:'play',packageName:'tv.danmaku.bili'}, {edition:'official',version:'6.8.0'}, {packageName:'../../catalog'}])
    assert.throws(() => resolveAndroidEdition(selectors), /No matching/);
});

test('published edition inventories match binary manifest identities, source hashes and isolated catalogs', () => {
  const inventory=read('catalog/android/editions.json');
  assert.equal(inventory.editions.length, 2);
  const directories = new Set();
  for (const e of ANDROID_EDITIONS) {
    const identity=read(e.manifest_evidence), record=inventory.editions.find(r=>r.edition===e.edition);
    for (const key of ['package_name','version_name','version_code']) assert.equal(identity[key], e[key]);
    assert.equal(identity.artifact_sha256,e.artifact_sha256);
    assert.equal(read(e.extraction_inputs).artifact.sha256,e.artifact_sha256);
    assert.deepEqual(read(e.catalog_directory+'/edition.json'), {schema_version:1,...record});
    const entries=loadCatalog(root,{packageName:e.package_name,version:e.version_name});
    assert.deepEqual(record.counts, summarize(entries).counts);
    assert.ok(entries.length>0);
    assert.ok(entries.every(r=>r.source_edition.package_name===e.package_name&&r.source_edition.version_name===e.version_name));
    directories.add(e.catalog_directory);
  }
  assert.equal(directories.size, 2);
  assert.ok(!fs.existsSync(path.join(root,'catalog/http.json')));
  assert.ok(fs.existsSync(path.join(root,'catalog/pc-web.json')));
});

test('CLI package/version selectors work independently and reject conflicts before emitting data', () => {
  const result=cli(['--package','tv.danmaku.bili','--version','9.19.0','list','--kind','http','--limit','1']);
  assert.equal(result.status,0,result.stderr);
  const data=JSON.parse(result.stdout);
  assert.equal(data.total,2514);
  assert.equal(data.baseline.edition,'official');
  assert.equal(data.entries[0].source_edition.package_name,'tv.danmaku.bili');
  for (const args of [
    ['--edition','play','--package','tv.danmaku.bili','stats'],
    ['--version','0.0.0','stats'], ['--package'],
    ['--version','6.8.0','--version','9.19.0','stats'],
    ['stats','--package','tv.danmaku.bili'],
  ]) {
    const invalid=cli(args); assert.notEqual(invalid.status,0); assert.equal(invalid.stdout,'');
  }
  const list=cli(['editions']); assert.equal(list.status,0,list.stderr);
  assert.deepEqual(JSON.parse(list.stdout).map(e=>e.package_name),ANDROID_EDITIONS.map(e=>e.package_name));
});

function markdownFiles(dir) {
  return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>{
    const file=path.join(dir,e.name);return e.isDirectory()?markdownFiles(file):e.name.endsWith('.md')?[file]:[];
  });
}
test('each APK documentation page identifies its package/version and all local documentation links resolve', () => {
  for (const e of ANDROID_EDITIONS) {
    const files=markdownFiles(path.join(root,e.docs_directory)); assert.ok(files.length>30);
    for (const file of files) {
      const text=fs.readFileSync(file,'utf8');
      assert.ok(text.includes('<!-- android-edition:start -->'),file);
      assert.ok(text.includes('包名：`'+e.package_name+'`'),file);
      assert.ok(text.includes('版本：'+e.version_name+'（'+e.version_code+'）'),file);
    }
  }
  for (const file of [path.join(root,'README.md'),...markdownFiles(path.join(root,'docs'))]) {
    for (const match of fs.readFileSync(file,'utf8').matchAll(/\]\(([^)\s]+)\)/g)) {
      if (/^(?:[a-z]+:|#|\/)/i.test(match[1])) continue;
      assert.ok(fs.existsSync(path.resolve(path.dirname(file),match[1].split(/[#?]/)[0])),path.relative(root,file)+': '+match[1]);
    }
  }
});

test('edition navigation check is stable and does not modify published files', () => {
  const files=[...markdownFiles(path.join(root,'docs/android')),path.join(root,'catalog/android/editions.json'),...ANDROID_EDITIONS.map(e=>path.join(root,e.catalog_directory,'edition.json'))];
  const snapshots=files.map(file=>[file,fs.readFileSync(file)]);
  const result=spawnSync(process.execPath,['scripts/build-android-editions.mjs','--check'],{cwd:root,encoding:'utf8',timeout:15000});
  assert.equal(result.status,0,result.stderr);
  for (const [file,bytes] of snapshots) assert.deepEqual(fs.readFileSync(file),bytes,path.relative(root,file));
});
