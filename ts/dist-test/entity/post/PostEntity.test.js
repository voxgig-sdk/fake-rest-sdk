"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('PostEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when FAKE_REST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('FAKE_REST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.FakeRestSDK.test();
        const ent = testsdk.Post();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.FAKE_REST_TEST_LIVE;
        for (const op of ['create', 'list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'post.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "body": { "a": true, "h": "Body", "n": "body", "r": false, "t": "`$STRING`", "key$": "body", "index$": 0 }, "category": { "a": true, "h": "Category", "n": "category", "r": false, "t": "`$STRING`", "key$": "category", "index$": 1 }, "coverImage": { "a": true, "fo": "uri", "h": "Cover Image", "n": "coverImage", "r": false, "t": "`$STRING`", "key$": "coverImage", "index$": 2 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": false, "t": "`$STRING`", "key$": "createdAt", "index$": 3 }, "featured": { "a": true, "h": "Featured", "n": "featured", "r": false, "t": "`$BOOLEAN`", "key$": "featured", "index$": 4 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 5 }, "likes": { "a": true, "h": "Likes", "n": "likes", "r": false, "t": "`$INTEGER`", "key$": "likes", "index$": 6 }, "metaDescription": { "a": true, "h": "Meta Description", "n": "metaDescription", "r": false, "t": "`$STRING`", "key$": "metaDescription", "index$": 7 }, "published": { "a": true, "h": "Published", "n": "published", "r": false, "t": "`$BOOLEAN`", "key$": "published", "index$": 8 }, "readTime": { "a": true, "h": "Read Time", "n": "readTime", "r": false, "t": "`$INTEGER`", "key$": "readTime", "index$": 9 }, "tags": { "a": true, "h": "Tags", "n": "tags", "r": false, "t": "`$ARRAY`", "key$": "tags", "index$": 10 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "t": "`$STRING`", "key$": "title", "index$": 11 }, "userId": { "a": true, "h": "User Id", "n": "userId", "r": false, "t": "`$INTEGER`", "key$": "userId", "index$": 12 }, "views": { "a": true, "h": "Views", "n": "views", "r": false, "t": "`$INTEGER`", "key$": "views", "index$": 13 } }, "id": { "field": "id", "name": "id" }, "name": "post", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/posts", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/posts", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "posts" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/posts", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/api/posts", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "posts" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/posts/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/posts/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "posts" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "post", "name__orig": "post", "Name": "Post", "name_": "post", "name-": "post", "NAME": "POST", "index$": 2 }, { "active": true, "entity": "post", "key$": "BasicPostFlow", "kind": "basic", "name": "BasicPostFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "post_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "post_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "post_ref01", "srcdatavar": "post_ref01_data", "suffix": "_dt0" }, "m": { "id": "post01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-post_ref01" } }], "index$": 2 }] }, 'Post', { "POST /api/posts": { "protocol": "http", "operationId": "createPost", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "title": { "type": "string", "key$": "title" }, "body": { "type": "string", "key$": "body" }, "userId": { "type": "integer", "key$": "userId" }, "tags": { "type": "array", "items": { "type": "string" }, "key$": "tags" }, "category": { "type": "string", "key$": "category" }, "published": { "type": "boolean", "key$": "published" }, "featured": { "type": "boolean", "key$": "featured" }, "readTime": { "type": "integer", "key$": "readTime" }, "metaDescription": { "type": "string", "key$": "metaDescription" }, "coverImage": { "type": "string", "format": "uri", "key$": "coverImage" } }, "x-ref": "#/components/schemas/PostInput", "index$": 1 } } } }, "responses": { "201": { "description": "Post created successfully", "content": { "application/json": { "schema": { "allOf": [{ "type": "object", "properties": { "id": { "type": "integer", "example": 1, "key$": "id" }, "title": { "type": "string", "example": "sunt aut facere repellat", "key$": "title" }, "body": { "type": "string", "example": "quia et suscipit suscipit recusandae...", "key$": "body" }, "userId": { "type": "integer", "example": 1, "key$": "userId" }, "tags": { "type": "array", "items": { "type": "string" }, "example": ["sample", "test"], "key$": "tags" }, "category": { "type": "string", "example": "technology", "key$": "category" }, "published": { "type": "boolean", "example": true, "key$": "published" }, "views": { "type": "integer", "example": 1247, "key$": "views" }, "likes": { "type": "integer", "example": 89, "key$": "likes" }, "createdAt": { "type": "string", "format": "date-time", "key$": "createdAt" } }, "x-ref": "#/components/schemas/Post" }, { "type": "object", "properties": { "featured": { "type": "boolean" }, "readTime": { "type": "integer" }, "metaDescription": { "type": "string" }, "coverImage": { "type": "string", "format": "uri" }, "slug": { "type": "string" }, "updatedAt": { "type": "string", "format": "date-time" } } }], "x-ref": "#/components/schemas/PostWithMetadata" } } } } }, "parameters": [], "securitySource": "unspecified" }, "GET /api/posts": { "protocol": "http", "operationId": "getAllPosts", "responses": { "200": { "description": "Successful response", "content": { "application/json": { "schema": { "type": "array", "items": { "type": "object", "properties": { "id": { "type": "integer", "example": 1, "key$": "id" }, "title": { "type": "string", "example": "sunt aut facere repellat", "key$": "title" }, "body": { "type": "string", "example": "quia et suscipit suscipit recusandae...", "key$": "body" }, "userId": { "type": "integer", "example": 1, "key$": "userId" }, "tags": { "type": "array", "items": { "type": "string" }, "example": ["sample", "test"], "key$": "tags" }, "category": { "type": "string", "example": "technology", "key$": "category" }, "published": { "type": "boolean", "example": true, "key$": "published" }, "views": { "type": "integer", "example": 1247, "key$": "views" }, "likes": { "type": "integer", "example": 89, "key$": "likes" }, "createdAt": { "type": "string", "format": "date-time", "key$": "createdAt" } }, "x-ref": "#/components/schemas/Post", "index$": 0 } } } } } }, "parameters": [], "securitySource": "unspecified" }, "GET /api/posts/{id}": { "protocol": "http", "operationId": "getPostById", "responses": { "200": { "description": "Successful response", "content": { "application/json": { "schema": { "type": "object", "properties": { "id": { "type": "integer", "example": 1, "key$": "id" }, "title": { "type": "string", "example": "sunt aut facere repellat", "key$": "title" }, "body": { "type": "string", "example": "quia et suscipit suscipit recusandae...", "key$": "body" }, "userId": { "type": "integer", "example": 1, "key$": "userId" }, "tags": { "type": "array", "items": { "type": "string" }, "example": ["sample", "test"], "key$": "tags" }, "category": { "type": "string", "example": "technology", "key$": "category" }, "published": { "type": "boolean", "example": true, "key$": "published" }, "views": { "type": "integer", "example": 1247, "key$": "views" }, "likes": { "type": "integer", "example": 89, "key$": "likes" }, "createdAt": { "type": "string", "format": "date-time", "key$": "createdAt" } }, "x-ref": "#/components/schemas/Post", "index$": 0 } } } } }, "parameters": [{ "name": "id", "in": "path", "required": true, "description": "Post ID", "schema": { "type": "integer" }, "index$": 0 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const post_ref01_ent = client.Post();
        let post_ref01_data = setup.data.new.post['post_ref01'];
        post_ref01_data = (await post_ref01_ent.create(post_ref01_data)).data();
        (0, node_assert_1.default)(null != post_ref01_data.id);
        // LIST
        const post_ref01_match = {};
        const post_ref01_list = (await post_ref01_ent.list(post_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(post_ref01_list, { id: post_ref01_data.id })));
        // LOAD
        const post_ref01_match_dt0 = {};
        post_ref01_match_dt0.id = post_ref01_data.id;
        const post_ref01_data_dt0 = (await post_ref01_ent.load(post_ref01_match_dt0)).data();
        (0, node_assert_1.default)(post_ref01_data_dt0.id === post_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/post/PostTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.FakeRestSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['post01', 'post02', 'post03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'FAKE_REST_TEST_POST_ENTID': idmap,
        'FAKE_REST_TEST_LIVE': 'FALSE',
        'FAKE_REST_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['FAKE_REST_TEST_POST_ENTID'];
    const live = 'TRUE' === env.FAKE_REST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['FAKE_REST_TEST_POST_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.FakeRestSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.FAKE_REST_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=PostEntity.test.js.map