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
(0, node_test_1.describe)('TodoEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when FAKE_REST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('FAKE_REST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.FakeRestSDK.test();
        const ent = testsdk.Todo();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.FAKE_REST_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'todo.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "completed": { "a": true, "h": "Completed", "n": "completed", "r": false, "t": "`$BOOLEAN`", "key$": "completed", "index$": 0 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": false, "t": "`$STRING`", "key$": "createdAt", "index$": 1 }, "dueDate": { "a": true, "fo": "date-time", "h": "Due Date", "n": "dueDate", "r": false, "t": "`$STRING`", "key$": "dueDate", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 3 }, "priority": { "a": true, "h": "Priority", "n": "priority", "r": false, "t": "`$STRING`", "key$": "priority", "index$": 4 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "t": "`$STRING`", "key$": "title", "index$": 5 }, "userId": { "a": true, "h": "User Id", "n": "userId", "r": false, "t": "`$INTEGER`", "key$": "userId", "index$": 6 } }, "id": { "field": "id", "name": "id" }, "name": "todo", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/todos", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "completed", "or": "completed", "r": false, "t": "`$BOOLEAN`", "index$": 0 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "user_id", "or": "user_id", "r": false, "t": "`$INTEGER`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/api/todos", "q": { "exist": ["completed", "limit", "page", "user_id"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "todos" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "todo", "name__orig": "todo", "Name": "Todo", "name_": "todo", "name-": "todo", "NAME": "TODO", "index$": 4 }, { "active": true, "entity": "todo", "key$": "BasicTodoFlow", "kind": "basic", "name": "BasicTodoFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "todo_ref01" } }], "index$": 0 }] }, 'Todo', { "GET /api/todos": { "protocol": "http", "operationId": "getAllTodos", "responses": { "200": { "description": "Successful response", "content": { "application/json": { "schema": { "type": "array", "items": { "type": "object", "properties": { "id": { "type": "integer", "example": 1, "key$": "id" }, "userId": { "type": "integer", "example": 1, "key$": "userId" }, "title": { "type": "string", "example": "Complete project documentation", "key$": "title" }, "completed": { "type": "boolean", "example": false, "key$": "completed" }, "priority": { "type": "string", "enum": ["low", "medium", "high"], "example": "high", "key$": "priority" }, "dueDate": { "type": "string", "format": "date-time", "key$": "dueDate" }, "createdAt": { "type": "string", "format": "date-time", "key$": "createdAt" } }, "x-ref": "#/components/schemas/Todo", "index$": 0 } } } } } }, "parameters": [{ "name": "userId", "in": "query", "description": "Filter todos by user ID (range 1-100)", "schema": { "type": "integer", "minimum": 1, "maximum": 100 }, "index$": 0 }, { "name": "completed", "in": "query", "description": "Filter todos by completion status", "schema": { "type": "boolean" }, "index$": 1 }, { "name": "_page", "in": "query", "description": "Page number for pagination", "schema": { "type": "integer" }, "index$": 2 }, { "name": "_limit", "in": "query", "description": "Number of items per page", "schema": { "type": "integer" }, "index$": 3 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let todo_ref01_data = Object.values(setup.data.existing.todo)[0];
        // LIST
        const todo_ref01_ent = client.Todo();
        const todo_ref01_match = {};
        const todo_ref01_list = (await todo_ref01_ent.list(todo_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/todo/TodoTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.FakeRestSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['todo01', 'todo02', 'todo03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'FAKE_REST_TEST_TODO_ENTID': idmap,
        'FAKE_REST_TEST_LIVE': 'FALSE',
        'FAKE_REST_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['FAKE_REST_TEST_TODO_ENTID'];
    const live = 'TRUE' === env.FAKE_REST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['FAKE_REST_TEST_TODO_ENTID'];
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
//# sourceMappingURL=TodoEntity.test.js.map