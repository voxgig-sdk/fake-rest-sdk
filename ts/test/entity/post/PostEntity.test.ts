

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


describe('PostEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FAKE_REST_TEST_LIVE=TRUE.
  afterEach(liveDelay('FAKE_REST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = FakeRestSDK.test()
    const ent = testsdk.Post()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FAKE_REST_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'post.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"body","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"category","req":false,"type":"`$STRING`","index$":1},{"active":true,"format":"uri","name":"coverImage","req":false,"type":"`$STRING`","index$":2},{"active":true,"format":"date-time","name":"createdAt","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"featured","req":false,"type":"`$BOOLEAN`","index$":4},{"active":true,"name":"id","req":false,"type":"`$INTEGER`","index$":5},{"active":true,"name":"likes","req":false,"type":"`$INTEGER`","index$":6},{"active":true,"name":"metaDescription","req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"published","req":false,"type":"`$BOOLEAN`","index$":8},{"active":true,"name":"readTime","req":false,"type":"`$INTEGER`","index$":9},{"active":true,"name":"tags","req":false,"type":"`$ARRAY`","index$":10},{"active":true,"name":"title","req":false,"type":"`$STRING`","index$":11},{"active":true,"name":"userId","req":false,"type":"`$INTEGER`","index$":12},{"active":true,"name":"views","req":false,"type":"`$INTEGER`","index$":13}],"id":{"field":"id","name":"id"},"name":"post","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /api/posts","json":"{\"operationId\":\"createPost\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"body\":{\"type\":\"string\"},\"category\":{\"type\":\"string\"},\"coverImage\":{\"format\":\"uri\",\"type\":\"string\"},\"featured\":{\"type\":\"boolean\"},\"metaDescription\":{\"type\":\"string\"},\"published\":{\"type\":\"boolean\"},\"readTime\":{\"type\":\"integer\"},\"tags\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"title\":{\"type\":\"string\"},\"userId\":{\"type\":\"integer\"}},\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"allOf\":[{\"properties\":{\"body\":{\"example\":\"quia et suscipit suscipit recusandae...\",\"type\":\"string\"},\"category\":{\"example\":\"technology\",\"type\":\"string\"},\"createdAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"type\":\"integer\"},\"likes\":{\"example\":89,\"type\":\"integer\"},\"published\":{\"example\":true,\"type\":\"boolean\"},\"tags\":{\"example\":[\"sample\",\"test\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"title\":{\"example\":\"sunt aut facere repellat\",\"type\":\"string\"},\"userId\":{\"example\":1,\"type\":\"integer\"},\"views\":{\"example\":1247,\"type\":\"integer\"}},\"type\":\"object\"},{\"properties\":{\"coverImage\":{\"format\":\"uri\",\"type\":\"string\"},\"featured\":{\"type\":\"boolean\"},\"metaDescription\":{\"type\":\"string\"},\"readTime\":{\"type\":\"integer\"},\"slug\":{\"type\":\"string\"},\"updatedAt\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}]}}},\"description\":\"Post created successfully\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/posts","segments":[{"lit":"api"},{"lit":"posts"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /api/posts","json":"{\"operationId\":\"getAllPosts\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"body\":{\"example\":\"quia et suscipit suscipit recusandae...\",\"type\":\"string\"},\"category\":{\"example\":\"technology\",\"type\":\"string\"},\"createdAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"type\":\"integer\"},\"likes\":{\"example\":89,\"type\":\"integer\"},\"published\":{\"example\":true,\"type\":\"boolean\"},\"tags\":{\"example\":[\"sample\",\"test\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"title\":{\"example\":\"sunt aut facere repellat\",\"type\":\"string\"},\"userId\":{\"example\":1,\"type\":\"integer\"},\"views\":{\"example\":1247,\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/posts","segments":[{"lit":"api"},{"lit":"posts"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /api/posts/{id}","json":"{\"operationId\":\"getPostById\",\"parameters\":[{\"description\":\"Post ID\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"body\":{\"example\":\"quia et suscipit suscipit recusandae...\",\"type\":\"string\"},\"category\":{\"example\":\"technology\",\"type\":\"string\"},\"createdAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"type\":\"integer\"},\"likes\":{\"example\":89,\"type\":\"integer\"},\"published\":{\"example\":true,\"type\":\"boolean\"},\"tags\":{\"example\":[\"sample\",\"test\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"title\":{\"example\":\"sunt aut facere repellat\",\"type\":\"string\"},\"userId\":{\"example\":1,\"type\":\"integer\"},\"views\":{\"example\":1247,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/posts/{id}","segments":[{"lit":"api"},{"lit":"posts"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"post","name__orig":"post","Name":"Post","name_":"post","name-":"post","NAME":"POST","index$":2}, {"active":true,"entity":"post","key$":"BasicPostFlow","kind":"basic","name":"BasicPostFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"post_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"post_ref01"}}],"index$":1},{"active":true,"data":{},"input":{"ref":"post_ref01","srcdatavar":"post_ref01_data","suffix":"_dt0"},"match":{"id":"post01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-post_ref01"}}],"index$":2}]}, 'Post')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const post_ref01_ent = client.Post()
    let post_ref01_data = setup.data.new.post['post_ref01']

    post_ref01_data = (await post_ref01_ent.create(post_ref01_data)).data()
    assert(null != post_ref01_data.id)


    // LIST
    const post_ref01_match: any = {}

    const post_ref01_list = (await post_ref01_ent.list(post_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(post_ref01_list, { id: post_ref01_data.id })))


    // LOAD
    const post_ref01_match_dt0: any = {}
    post_ref01_match_dt0.id = post_ref01_data.id
    const post_ref01_data_dt0 = (await post_ref01_ent.load(post_ref01_match_dt0)).data()
    assert(post_ref01_data_dt0.id === post_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/post/PostTestData.json')

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
    ['post01','post02','post03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FAKE_REST_TEST_POST_ENTID': idmap,
    'FAKE_REST_TEST_LIVE': 'FALSE',
    'FAKE_REST_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FAKE_REST_TEST_POST_ENTID']

  const live = 'TRUE' === env.FAKE_REST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FAKE_REST_TEST_POST_ENTID']
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
  
