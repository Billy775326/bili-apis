// Pinned APK baselines. Web APIs have a separate catalog and CLI.
export const ANDROID_EDITIONS = Object.freeze([
  Object.freeze({edition: 'play', channel: 'Google Play', package_name: 'com.bilibili.app.in', version_name: '6.8.0', version_code: 9180200, artifact_sha256: 'e70979a2d21d650c0b8ba0916616b8799ecbf89397b7c83282766e68f76c77ad', catalog_directory: 'catalog/android/com.bilibili.app.in/play/6.8.0', docs_directory: 'docs/android/com.bilibili.app.in/play/6.8.0', manifest_evidence: 'evidence/play-manifest.json', extraction_inputs: 'evidence/inputs.json', encoding: 'json'}),
  Object.freeze({edition: 'official', channel: 'Official Android 64-bit', package_name: 'tv.danmaku.bili', version_name: '9.19.0', version_code: 9190400, artifact_sha256: 'c3ea50c7773267f252e441b5c1aebf7574492223b2bb1568d7a7093d1f8eb59c', catalog_directory: 'catalog/android/tv.danmaku.bili/official/9.19.0', docs_directory: 'docs/android/tv.danmaku.bili/official/9.19.0', manifest_evidence: 'evidence/official-android/manifest.json', extraction_inputs: 'evidence/official-android/inputs.json', encoding: 'json.gz'}),
]);

export function resolveAndroidEdition({edition, packageName, version} = {}) {
  if (edition !== undefined && !ANDROID_EDITIONS.some(e => e.edition === edition))
    throw Error('edition must be play or official');
  const selected = ANDROID_EDITIONS.filter(e =>
    (edition === undefined || e.edition === edition) &&
    (packageName === undefined || e.package_name === packageName) &&
    (version === undefined || e.version_name === version));
  if (!selected.length) throw Error('No matching Android package/channel/version baseline');
  if (selected.length > 1 && (packageName !== undefined || version !== undefined))
    throw Error('Ambiguous Android baseline; specify --edition, --package and --version');
  return selected.length === 1 ? selected[0] : ANDROID_EDITIONS[0];
}
