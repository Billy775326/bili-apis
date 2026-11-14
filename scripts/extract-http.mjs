import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { pathToFileURL } from "node:url";
import { readDex } from "../src/dex.mjs";
const routeType =
  /^L(?:retrofit2?|com\/bilibili\/okretro)\/http\/(GET|POST|PUT|DELETE|HEAD|OPTIONS|PATCH|HTTP);$/;
const relevant = (a) =>
  /^L(?:retrofit2?\/|com\/bilibili\/okretro\/|dalvik\/annotation\/Signature;)/.test(
    a.type,
  );
/** Retains declaration identity; does not infer hosts, defaults or execution. */
export function extractHttpDeclarations(dex) {
  const endpoints = [],
    unknown = [];
  const annotationTypes = {};
  let methodCount = 0;
  for (const cls of dex.classes) {
    for (const definition of cls.definedMethods) {
      methodCount++;
      const method = dex.methods[definition.methodIndex];
      for (const annotation of definition.annotations)
        annotationTypes[annotation.type] =
          (annotationTypes[annotation.type] ?? 0) + 1;
      const routes = definition.annotations.filter((a) =>
        routeType.test(a.type),
      );
      if (!routes.length) {
        for (const a of definition.annotations)
          if (/http|route|request/i.test(a.type) && !relevant(a))
            unknown.push({
              declaring_class: cls.descriptor,
              method_name: method.name,
              annotation_type: a.type,
            });
        continue;
      }
      for (const route of routes) {
        const kind = route.type.match(routeType)[1],
          httpMethod = kind === "HTTP" ? (route.elements.method ?? null) : kind,
          routePath =
            kind === "HTTP"
              ? (route.elements.path ?? "")
              : (route.elements.value ?? "");
        let absoluteUrl = null,
          host = null;
        if (typeof routePath === "string" && /^https?:\/\//i.test(routePath)) {
          try {
            const parsed = new URL(routePath);
            absoluteUrl = routePath;
            host = parsed.hostname;
          } catch {}
        }
        const baseAnnotations = [
          ...cls.annotations
            .filter((a) => a.type === "Lretrofit2/http/BaseUrl;")
            .map((a) => ({ source: "class", value: a.elements.value })),
          ...definition.annotations
            .filter((a) => a.type === "Lretrofit2/http/BaseUrl;")
            .map((a) => ({ source: "method", value: a.elements.value })),
        ];
        const bases = [
          ...new Set(
            baseAnnotations
              .map((a) => a.value)
              .filter((v) => typeof v === "string"),
          ),
        ];
        const dynamicUrl = definition.parameterAnnotations.some((as) =>
          as.some((a) => a.type.endsWith("/Url;")),
        );
        const resolved = [];
        if (!dynamicUrl && typeof routePath === "string") {
          for (const base of bases) {
            try {
              const parsedBase = new URL(base);
              if (!["http:", "https:"].includes(parsedBase.protocol)) continue;
              const parsed = new URL(routePath, parsedBase);
              if (["http:", "https:"].includes(parsed.protocol))
                resolved.push(parsed.href);
            } catch {}
          }
        }
        const resolvedUrls = [...new Set(resolved)];
        const generic = definition.annotations.find(
          (a) => a.type === "Ldalvik/annotation/Signature;",
        );
        endpoints.push({
          id: `${dex.name}:${method.index}:${kind}`,
          dex: dex.name,
          method_index: method.index,
          class_def_index: cls.index,
          declaring_class: cls.descriptor,
          method_name: method.name,
          method_descriptor: method.descriptor,
          http_method: httpMethod,
          path: routePath,
          absolute_url: absoluteUrl,
          host,
          base_url_annotations: baseAnnotations,
          base_url: bases.length === 1 ? bases[0] : null,
          base_url_ambiguous: bases.length > 1,
          resolved_url_candidates: resolvedUrls,
          resolved_url_candidate:
            resolvedUrls.length === 1 ? resolvedUrls[0] : null,
          host_candidate:
            resolvedUrls.length === 1
              ? new URL(resolvedUrls[0]).hostname
              : null,
          url_resolution_scope:
            "Derived URL-resolution candidate from explicit BaseUrl annotation; interceptor rewrites and precedence are unverified",
          return_type: method.returnType,
          generic_signature: Array.isArray(generic?.elements.value)
            ? generic.elements.value.join("")
            : null,
          parameters: method.parameters.map((descriptor, position) => ({
            position,
            descriptor,
            annotations: (definition.parameterAnnotationCountMismatch
              ? []
              : (definition.parameterAnnotations[position] ?? [])
            ).filter(relevant),
          })),
          parameter_annotation_alignment:
            definition.parameterAnnotationCountMismatch
              ? "mismatch"
              : definition.parameterAnnotations.length
                ? "exact"
                : "none",
          unmapped_parameter_annotations:
            definition.parameterAnnotationCountMismatch
              ? definition.parameterAnnotations.map((a) => a.filter(relevant))
              : null,
          method_annotations: definition.annotations.filter(relevant),
          class_annotations: cls.annotations.filter(relevant),
          request_interceptors: [...cls.annotations, ...definition.annotations]
            .filter(
              (a) =>
                a.type === "Lcom/bilibili/okretro/anno/RequestInterceptor;",
            )
            .map((a) => a.elements.value),
          verification: "static-declaration",
        });
      }
    }
  }
  return {
    endpoints,
    class_count: dex.classes.length,
    defined_method_count: methodCount,
    annotation_types: annotationTypes,
    unrecognized_route_like_annotations: unknown,
  };
}
export function extractAll(inputDirectory, provenance) {
  const expected = new Map(provenance.dex_files.map((f) => [f.name, f])),
    names = fs
      .readdirSync(inputDirectory)
      .filter((f) => /^classes\d*\.dex$/.test(f))
      .sort();
  if (names.length !== expected.size)
    throw Error("DEX input count differs from provenance");
  const endpoints = [],
    dexFiles = [],
    annotationTypes = {},
    unknown = [];
  let classes = 0,
    methods = 0;
  for (const name of names) {
    const bytes = fs.readFileSync(path.join(inputDirectory, name)),
      sha256 = crypto.createHash("sha256").update(bytes).digest("hex");
    if (expected.get(name)?.sha256 !== sha256)
      throw Error(`DEX hash mismatch: ${name}`);
    const parsed = extractHttpDeclarations(readDex(bytes, name));
    endpoints.push(...parsed.endpoints);
    classes += parsed.class_count;
    methods += parsed.defined_method_count;
    for (const [type, count] of Object.entries(parsed.annotation_types))
      annotationTypes[type] = (annotationTypes[type] ?? 0) + count;
    unknown.push(
      ...parsed.unrecognized_route_like_annotations.map((x) => ({
        dex: name,
        ...x,
      })),
    );
    dexFiles.push({
      name,
      sha256,
      size: bytes.length,
      class_count: parsed.class_count,
      defined_method_count: parsed.defined_method_count,
      http_declarations: parsed.endpoints.length,
    });
  }
  const limitations = [
    "Only static, recognized Retrofit HTTP verb/HTTP annotations are classified as HTTP declarations.",
    "Dynamic URL and map parameters remain dynamic; default values, auth headers, interceptors and response field schemas require implementation tracing.",
    "Parameter annotation alignment mismatches are preserved without assuming index alignment.",
    "Native libraries, assets, reflection, downloaded code and runtime server state are outside this extraction.",
    "BaseUrl annotation values are observed; resolved URLs are standard URL-resolution candidates, not proven runtime hosts or precedence.",
    "No endpoint has been contacted; HTTP status and current availability are unverified.",
  ];
  return {
    catalog: {
      schema_version: 1,
      artifact: provenance.artifact,
      method:
        "All class_data method definitions and annotations in every provenance-checked DEX",
      limitations,
      dex_files: dexFiles,
      endpoints,
    },
    coverage: {
      schema_version: 1,
      artifact: provenance.artifact,
      dex_files_scanned: names.length,
      class_definitions_scanned: classes,
      method_definitions_scanned: methods,
      http_declarations: endpoints.length,
      unique_verb_path_pairs: new Set(
        endpoints.map((e) => JSON.stringify([e.http_method, e.path])),
      ).size,
      absolute_url_declarations: endpoints.filter(
        (e) => e.absolute_url !== null,
      ).length,
      relative_or_dynamic_declarations: endpoints.filter(
        (e) => e.absolute_url === null,
      ).length,
      dynamic_url_declarations: endpoints.filter((e) =>
        e.parameters.some((p) =>
          p.annotations.some((a) => a.type.endsWith("/Url;")),
        ),
      ).length,
      parameter_annotation_mismatches: endpoints.filter(
        (e) => e.parameter_annotation_alignment === "mismatch",
      ).length,
      method_annotation_types: annotationTypes,
      unrecognized_route_like_annotations: unknown,
      limitations,
    },
  };
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href
) {
  const [input, provenancePath, outputDirectory = "catalog"] =
    process.argv.slice(2);
  if (!input || !provenancePath)
    throw Error(
      "Usage: node scripts/extract-http.mjs DEX_DIRECTORY PROVENANCE_JSON [OUTPUT_DIRECTORY]",
    );
  const provenance = JSON.parse(
    fs.readFileSync(provenancePath, "utf8").replace(/^\uFEFF/, ""),
  );
  const { catalog, coverage } = extractAll(input, provenance);
  fs.mkdirSync(outputDirectory, { recursive: true });
  fs.writeFileSync(
    path.join(outputDirectory, "http.json"),
    JSON.stringify(catalog, null, 2) + "\n",
  );
  fs.writeFileSync(
    path.join(outputDirectory, "coverage-http.json"),
    JSON.stringify(coverage, null, 2) + "\n",
  );
  console.log(
    JSON.stringify({
      http_declarations: coverage.http_declarations,
      unique_routes: coverage.unique_verb_path_pairs,
      classes: coverage.class_definitions_scanned,
      methods: coverage.method_definitions_scanned,
      annotation_types: Object.entries(coverage.method_annotation_types).filter(
        ([type]) => /retrofit|okretro/.test(type),
      ),
      unknown_annotations: coverage.unrecognized_route_like_annotations.length,
    }),
  );
}
