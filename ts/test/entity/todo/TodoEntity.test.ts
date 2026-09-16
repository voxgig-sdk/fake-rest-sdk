

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { FakeRestSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('TodoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FAKE_REST_TEST_LIVE=TRUE.
  afterEach(liveDelay('FAKE_REST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = FakeRestSDK.test()
    const ent = testsdk.Todo()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FAKE_REST_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'todo.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"completed","req":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"format":"date-time","name":"createdAt","req":false,"type":"`$STRING`","index$":1},{"active":true,"format":"date-time","name":"dueDate","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"id","req":false,"type":"`$INTEGER`","index$":3},{"active":true,"name":"priority","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"title","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"userId","req":false,"type":"`$INTEGER`","index$":6}],"id":{"field":"id","name":"id"},"name":"todo","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"completed","orig":"completed","reqd":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"kind":"query","name":"user_id","orig":"user_id","reqd":false,"type":"`$INTEGER`","index$":3}]},"contract":{"id":"GET /api/todos","json":"{\"operationId\":\"getAllTodos\",\"parameters\":[{\"description\":\"Filter todos by user ID (range 1-100)\",\"in\":\"query\",\"name\":\"userId\",\"schema\":{\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Filter todos by completion status\",\"in\":\"query\",\"name\":\"completed\",\"schema\":{\"type\":\"boolean\"}},{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"_page\",\"schema\":{\"type\":\"integer\"}},{\"description\":\"Number of items per page\",\"in\":\"query\",\"name\":\"_limit\",\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"completed\":{\"example\":false,\"type\":\"boolean\"},\"createdAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"dueDate\":{\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"type\":\"integer\"},\"priority\":{\"enum\":[\"low\",\"medium\",\"high\"],\"example\":\"high\",\"type\":\"string\"},\"title\":{\"example\":\"Complete project documentation\",\"type\":\"string\"},\"userId\":{\"example\":1,\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/todos","segments":[{"lit":"api"},{"lit":"todos"}],"select":{"exist":["completed","limit","page","user_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"todo","name__orig":"todo","Name":"Todo","name_":"todo","name-":"todo","NAME":"TODO","index$":4}, {"active":true,"entity":"todo","key$":"BasicTodoFlow","kind":"basic","name":"BasicTodoFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"todo_ref01"}}],"index$":0}]}, 'Todo')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let todo_ref01_data = Object.values(setup.data.existing.todo)[0] as any

    // LIST
    const todo_ref01_ent = client.Todo()
    const todo_ref01_match: any = {}

    const todo_ref01_list = (await todo_ref01_ent.list(todo_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/todo/TodoTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = FakeRestSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['todo01','todo02','todo03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FAKE_REST_TEST_TODO_ENTID': idmap,
    'FAKE_REST_TEST_LIVE': 'FALSE',
    'FAKE_REST_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FAKE_REST_TEST_TODO_ENTID']

  const live = 'TRUE' === env.FAKE_REST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FAKE_REST_TEST_TODO_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new FakeRestSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
