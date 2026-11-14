import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readJson} from '../src/catalog.mjs';

test('emulator report pins the actual installed APK set to the original research inputs',()=>{
 const report=readJson('evidence/mumu-environment.json'),inputs=readJson('evidence/inputs.json'),archives=readJson('catalog/resource-routes.json').archives;
 assert.equal(report.environment.package_name,'com.bilibili.app.in');assert.equal(report.environment.version_name,'6.8.0');assert.equal(report.environment.version_code,9180200);
 assert.equal(report.environment.installed_apks.length,archives.length);
 for(const apk of report.environment.installed_apks)assert.equal(apk.sha256,archives.find(a=>a.filename===apk.filename)?.sha256);
 assert.equal(report.environment.installed_apks.find(a=>a.filename===inputs.artifact.filename).sha256,inputs.artifact.sha256);
});
test('UI-only observations cannot be counted as HTTP or gRPC validation',()=>{
 const report=readJson('evidence/mumu-environment.json');
 assert.equal(report.verification.new_fully_validated_api_declarations,0);
 for(const o of report.observations){assert.equal(o.result,'ui-observed');assert.deepEqual(o.mapped_api_ids,[]);assert.equal(o.http_status,null);assert.equal(o.business_code,null);assert.ok(o.checks.length);assert.ok(o.checks.every(c=>typeof c.passed==='boolean'));assert.equal(o.local_evidence.raw_artifacts_committed,false);for(const k of ['ui_xml_sha256','screen_png_sha256'])assert.match(o.local_evidence[k],/^[a-f0-9]{64}$/);}
 assert.equal(report.verification.ui_cases,report.observations.length);
});
