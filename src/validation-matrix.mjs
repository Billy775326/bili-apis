import { createHash } from 'node:crypto';

const MUTATION_HINT = /(?:^|[/.\-_])(?:add|del|delete|remove|create|update|edit|modify|publish|send|follow|unfollow|cancel|pay|buy|order|recharge|withdraw|upload|join|leave|kick|ban|report|reserve|consume|exchange|equip|commit|submit)(?:[/.\-_]|$)|sendSms|sendMsg|requestRecharge|CreateOrder|Delete|Publish|SendMessage|AddReply/i;
const AUTH_NAMES = /^(?:access_key|access_token|authorization|cookie|csrf|csrf_token|bili_jct|sessdata|refresh_token|token)$/i;
const ROLE_HINTS = {
  creator: ['creator-account', 'owned-test-draft-and-media'],
  live: ['live-room-and-streamer-permissions-if-required'],
  message: ['two-test-accounts-and-consenting-recipient'],
  relation: ['two-test-accounts'],
  comment: ['owned-test-post-and-comment'],
  favorite: ['test-collection'],
  dynamic: ['owned-test-dynamic'],
  vip: ['entitled-test-account-if-required'],
  pgc: ['entitled-content-if-required'],
  payment: ['sandbox-or-explicit-budget-and-order-scope'],
  commerce: ['sandbox-or-explicit-order-and-buyer-scope'],
  auth: ['interactive-login-and-verification-by-owner'],
};

export function validationRow(entry, category, observations = []) {
  const annotations = (entry.parameters || []).flatMap(p => p.annotations || []);
  const names = annotations.map(a => a.type.split('/').at(-1).replace(';', ''));
  const parameters = annotations.flatMap(a => typeof a.elements?.value === 'string' ? [a.elements.value] : []);
  const route = entry.kind === 'grpc' ? entry.id : (entry.resolved_url_candidate || entry.path || '');
  const sampled = observations.filter(o => o.endpoint_id === entry.id);
  const requirements = ['reviewed-case-with-inputs-and-assertions', 'play-app-request-context-for-app-fidelity'];
  if (entry.kind === 'grpc') requirements.push('grpc-authority-and-metadata', 'protobuf-role-and-field-values', 'rpc-stream-lifecycle-if-required');
  if (names.some(n => ['QueryMap', 'FieldMap', 'Body', 'Part', 'HeaderMap'].includes(n))) requirements.push('runtime-map-body-or-header-values');
  if (names.includes('Url')) requirements.push('runtime-dynamic-url');
  if (names.includes('Path')) requirements.push('path-template-values');
  if (parameters.some(n => AUTH_NAMES.test(n))) requirements.push('auth-session-requirement-to-be-determined');
  requirements.push(...(ROLE_HINTS[category] || []));
  if (MUTATION_HINT.test(route)) requirements.push('possible-external-effect-review');
  return {
    endpoint_id: entry.id,
    kind: entry.kind,
    category,
    http_method: entry.http_method || null,
    method_or_path: route || null,
    operation_review: 'not-reviewed',
    external_effect: MUTATION_HINT.test(route) ? 'name-suggests-possible-effect' : 'unknown',
    requirements: [...new Set(requirements)],
    requirement_basis: 'Planning hints from metadata and category; not proof that authentication, privilege or a write is required. GET is not assumed read-only, POST is not assumed a write.',
    full_validation: 'not-validated',
    app_request_fidelity: 'not-verified',
    anonymous_samples: sampled.map(o => ({ observation_id: o.observation_id, outcome: o.outcome })),
    case_ids: [],
    blocker: null,
  };
}

export function buildValidationMatrix(entries, functions, live, sourceDigests) {
  const categories = new Map(functions.endpoints.map(e => [e.id, e.category]));
  const endpoints = entries.filter(e => ['http', 'grpc'].includes(e.kind)).map(e => {
    if (!categories.has(e.id)) throw Error('Missing function classification: ' + e.id);
    return validationRow(e, categories.get(e.id), live.observations);
  });
  if (new Set(endpoints.map(e => e.endpoint_id)).size !== endpoints.length) throw Error('Duplicate validation endpoint ID');
  const requirements = {};
  for (const row of endpoints) for (const key of row.requirements) requirements[key] = (requirements[key] || 0) + 1;
  return {
    schema_version: 1,
    source_json_stringify_sha256: sourceDigests,
    scope: 'All pinned HTTP declarations and gRPC descriptors, including duplicate declarations. Planning only; no automatic requests. Unresolved resource/native candidates remain outside confirmed-declaration accounting.',
    acceptance: ['review operation effects and ownership before execution', 'record artifact/version and exact test case with protected inputs stored locally', 'assert transport, business semantics and relevant response fields', 'check authentication roles, errors, pagination or streaming when applicable', 'for writes check resulting state and cleanup; do not alter existing user data', 'retain evidence or a specific untested blocker; never count a denied request as successful positive validation'],
    summary: {
      declarations: endpoints.length,
      http: endpoints.filter(e => e.kind === 'http').length,
      grpc: endpoints.filter(e => e.kind === 'grpc').length,
      with_anonymous_sample: endpoints.filter(e => e.anonymous_samples.length).length,
      fully_validated: 0,
      operation_review_pending: endpoints.length,
      requirements,
    },
    endpoints,
  };
}

export const jsonDigest = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');
