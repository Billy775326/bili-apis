import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validationRow, buildValidationMatrix, jsonDigest } from '../src/validation-matrix.mjs';
import { readJson, loadCatalog } from '../src/catalog.mjs';

test('GET effect hints and POST queries do not become executable test cases', () => {
  const get = validationRow({id:'g',kind:'http',http_method:'GET',path:'/videoif/sendSmsCode.do'},'auth');
  const post = validationRow({id:'p',kind:'http',http_method:'POST',path:'/query/search'},'search');
  assert.equal(get.external_effect,'name-suggests-possible-effect');
  assert.equal(post.external_effect,'unknown');
  for (const row of [get,post]) { assert.equal(row.operation_review,'not-reviewed'); assert.equal(row.full_validation,'not-validated'); assert.deepEqual(row.case_ids,[]); }
});
test('sample success is preserved without upgrading full validation or app fidelity', () => {
  const row = validationRow({id:'x',kind:'http',http_method:'GET',path:'/x'},'other',[{endpoint_id:'x',outcome:'business-success',observation_id:'obs'}]);
  assert.equal(row.anonymous_samples[0].outcome,'business-success');
  assert.equal(row.full_validation,'not-validated'); assert.equal(row.app_request_fidelity,'not-verified');
});
test('request maps, dynamic URLs, authentication names and gRPC retain specific gaps', () => {
  const row = validationRow({id:'x',kind:'http',parameters:[{annotations:[{type:'Lretrofit2/http/QueryMap;'},{type:'Lretrofit2/http/Url;'},{type:'Lretrofit2/http/Header;',elements:{value:'Authorization'}}]}]},'other');
  for (const key of ['runtime-map-body-or-header-values','runtime-dynamic-url','auth-session-requirement-to-be-determined']) assert.ok(row.requirements.includes(key));
  const rpc = validationRow({id:'/a.S/Read',kind:'grpc'},'other');assert.ok(rpc.requirements.includes('grpc-authority-and-metadata'));
});
test('committed validation matrix covers every declaration once and pins all source JSON', () => {
  const files=['catalog/http.json','catalog/grpc.json','catalog/functions.json','evidence/live-checks.json'];
  const sources=Object.fromEntries(files.map(f=>[f,readJson(f)]));
  const actual=buildValidationMatrix(loadCatalog(process.cwd()),sources['catalog/functions.json'],sources['evidence/live-checks.json'],Object.fromEntries(files.map(f=>[f,jsonDigest(sources[f])])));
  assert.deepEqual(readJson('catalog/validation-matrix.json'),actual);
  assert.equal(actual.summary.declarations,actual.summary.http+actual.summary.grpc);
  assert.equal(actual.summary.fully_validated,0);assert.equal(actual.summary.with_anonymous_sample,6);
});
