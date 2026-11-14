# Repository instructions

- Use a focused task branch and Conventional Commit subjects in English. No release tags or package publishing without explicit approval.
- Preserve source APK, DEX and engine artifacts outside Git. Never commit binaries, decompiled application bodies, cookies, credentials, account data or device identifiers.
- Separate observed metadata, decompiler-derived facts, string candidates and runtime verification. Never describe static inventory as live API validation.
- Keep source artifact hashes and exact DEX/member locations. Changes to extraction must retain malformed-input handling, coverage and provenance.
- Run `node --test tests/*.test.mjs` for parser/catalog changes. Rebuild affected outputs against the pinned input and review all generated differences.
- Input configuration comes from CLI flags or explicit environment variables; do not hardcode personal machine paths in shared scripts.
- Publish focused catalogs and parameter schemas, not full third-party decompiled source. Restrict examples to synthetic data.
