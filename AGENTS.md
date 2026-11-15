# Repository instructions

- Use a focused task branch and Conventional Commit subjects in English. No release tags or package publishing without explicit approval.
- Preserve source APK, DEX and engine artifacts outside Git. Never commit binaries, decompiled application bodies, cookies, credentials, account data or device identifiers.
- Separate observed metadata, decompiler-derived facts, string candidates and runtime verification. Never describe static inventory as live API validation.
- Keep source artifact hashes and exact DEX/member locations. Changes to extraction must retain malformed-input handling, coverage and provenance.
- Run `node --test tests/*.test.mjs` for parser/catalog changes. Rebuild affected outputs against the pinned input and review all generated differences.
- Input configuration comes from CLI flags or explicit environment variables; do not hardcode personal machine paths in shared scripts.
- Publish focused catalogs and parameter schemas, not full third-party decompiled source. Restrict examples to synthetic data.

- Public evidence must omit all real request input values and page titles, including public account/video/room samples. Run assertions before the egress sanitizer; keep result codes, checks and hashes unchanged. Never publish real account, message or upload identifiers. Use explicit local resources for live tests and synthetic examples only.
- Run `npm run privacy:check` before publishing. This scans tracked files, including decompressed catalogs; provide a private local denylist for account-specific checks when available. See `docs/privacy.md`. Shared history cleanup requires explicit authorization after a concrete preview.

- Android catalog and documentation paths are catalog/android/<package>/<edition>/<version>/ and docs/android/<package>/<edition>/<version>/. Maintain src/android-editions.mjs and regenerate the edition index with npm run android:docs. Preserve old documentation redirects and historical evidence references. Web catalogs and runtime validation stay separate; channel and version differences must not be conflated.
