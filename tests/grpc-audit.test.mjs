import test from "node:test";
import assert from "node:assert/strict";
import {
  resolveDescriptorOrigins,
  decodeAnnotatedMethod,
  findInheritedMessageType,
  classifyTransportMethod,
  classifyFullNameLiteral,
} from "../src/grpc-audit.mjs";
import { instructions } from "../src/grpc.mjs";
test("descriptor reachability distinguishes builders, wrappers and unresolved methods", () => {
  const nodes = [
    {
      key: "builder",
      direct_routes: ["/demo.api.Service/Read"],
      descriptor_calls: [],
    },
    {
      key: "delegate",
      direct_routes: [],
      descriptor_calls: [{ key: "builder" }],
    },
    { key: "second", descriptor_calls: [{ key: "delegate" }] },
    { key: "other", descriptor_calls: [] },
  ];
  const result = resolveDescriptorOrigins(nodes);
  assert.equal(result[0].classification, "catalogued-builder");
  assert.equal(result[1].classification, "static-reference-to-builder");
  assert.deepEqual(result[2].reachable_route_candidates, [
    "/demo.api.Service/Read",
  ]);
  assert.equal(result[3].classification, "unresolved-descriptor-method");
});
test("cycles terminate and do not invent a route; missing definitions remain explicit", () => {
  const result = resolveDescriptorOrigins([
    { key: "a", descriptor_calls: [{ key: "b" }] },
    { key: "b", descriptor_calls: [{ key: "a" }, { key: "missing" }] },
  ]);
  assert.deepEqual(result[0].reachable_route_candidates, []);
  assert.deepEqual(result[0].missing_method_definitions, ["missing"]);
  assert.throws(
    () => resolveDescriptorOrigins([{ key: "a" }, { key: "a" }]),
    /Duplicate/,
  );
});
test("direct route annotations require a full service and method identity", () => {
  assert.equal(
    decodeAnnotatedMethod({ elements: { fullMethodName: "View" } }),
    null,
  );
  assert.deepEqual(
    decodeAnnotatedMethod({
      elements: {
        fullMethodName: "demo.api.Service/Read",
        requestType: "Ldemo/Req;",
        responseType: "Ldemo/Resp;",
      },
    }),
    {
      id: "/demo.api.Service/Read",
      request_type: "Ldemo/Req;",
      response_type: "Ldemo/Resp;",
      method_type: null,
    },
  );
});
test("message ancestry preserves missing and cyclic superclass coverage", () => {
  const classes = new Map([
    ["Ldemo/Req;", { superType: "Ldemo/Base;" }],
    [
      "Ldemo/Base;",
      { superType: "Lcom/google/protobuf/GeneratedMessageLite;" },
    ],
    ["Lcycle/A;", { superType: "Lcycle/B;" }],
    ["Lcycle/B;", { superType: "Lcycle/A;" }],
  ]);
  assert.equal(
    findInheritedMessageType("Ldemo/Req;", classes).status,
    "protobuf-supertype",
  );
  assert.equal(findInheritedMessageType("Lcycle/A;", classes).status, "cycle");
  assert.equal(
    findInheritedMessageType("Lmissing;", classes).status,
    "unresolved-supertype",
  );
});
test("middleware methods are separated from actual RPC reference sites", () => {
  assert.equal(
    classifyTransportMethod({
      reachable_route_candidates: ["/demo.api.Service/Read"],
    }),
    "rpc-descriptor-reference",
  );
  assert.equal(
    classifyTransportMethod({
      transport_calls: [{ target: "Llib/MossService;->addMiddleware(Lx;)V" }],
    }),
    "middleware-or-lifecycle",
  );
  assert.equal(
    classifyTransportMethod({
      transport_calls: [{ target: "Llib/MossService;->customCall()V" }],
    }),
    "unresolved-rpc-candidate",
  );
});
test("optional instruction observer sees validated instruction boundaries without changing events", () => {
  const b = Buffer.alloc(4 + 16 + 6);
  b.writeUInt32LE(3, 4 + 12);
  b.writeUInt16LE(0x0062, 20);
  b.writeUInt16LE(7, 22);
  b.writeUInt16LE(0x0011, 24);
  const seen = [],
    baseline = instructions(b, 4);
  assert.deepEqual(
    instructions(b, 4, (x) => seen.push(x)),
    baseline,
  );
  assert.deepEqual(
    seen.map((x) => [x.opcode, x.width, x.code_unit_offset, x.byte_offset]),
    [
      [0x62, 2, 0, 20],
      [0x11, 1, 2, 24],
    ],
  );
  const short = Buffer.alloc(4 + 16 + 2);
  short.writeUInt32LE(1, 16);
  short.writeUInt16LE(0x001b, 20);
  let called = 0;
  assert.throws(() => instructions(short, 4, () => called++), /Truncated/);
  assert.equal(called, 0);
});

test("full-name-shaped MIME and store text are excluded while broadcast paths remain candidates", () => {
  assert.equal(
    classifyFullNameLiteral("vnd.android.document/directory"),
    "android-mime-type",
  );
  assert.equal(
    classifyFullNameLiteral("play.google.com/store"),
    "store-url-text",
  );
  assert.equal(
    classifyFullNameLiteral(
      "/bilibili.broadcast.message.reply.Reply/SubjectNotice",
    ),
    "broadcast-message-dispatch-path",
  );
  assert.equal(
    classifyFullNameLiteral("unknown.api.Service/Call"),
    "unclassified-full-name-shaped-literal",
  );
  assert.equal(classifyFullNameLiteral("/x/v2/reply"), "not-full-name-shaped");
});
