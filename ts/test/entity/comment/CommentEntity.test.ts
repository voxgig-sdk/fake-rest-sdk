

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


describe('CommentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FAKE_REST_TEST_LIVE=TRUE.
  afterEach(liveDelay('FAKE_REST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = FakeRestSDK.test()
    const ent = testsdk.Comment()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FAKE_REST_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'comment.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"uri","name":"avatar","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"body","req":false,"type":"`$STRING`","index$":1},{"active":true,"format":"date-time","name":"createdAt","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"deviceInfo","req":false,"type":"`$OBJECT`","index$":3},{"active":true,"format":"email","name":"email","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"id","req":false,"type":"`$INTEGER`","index$":5},{"active":true,"name":"isVerified","req":false,"type":"`$BOOLEAN`","index$":6},{"active":true,"name":"likes","req":false,"type":"`$INTEGER`","index$":7},{"active":true,"name":"location","req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":9},{"active":true,"name":"parentCommentId","req":false,"type":"`$INTEGER`","index$":10},{"active":true,"name":"postId","req":false,"type":"`$INTEGER`","index$":11},{"active":true,"format":"uri","name":"website","req":false,"type":"`$STRING`","index$":12}],"id":{"field":"id","name":"id"},"name":"comment","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /api/comments","json":"{\"operationId\":\"createComment\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"avatar\":{\"format\":\"uri\",\"type\":\"string\"},\"body\":{\"type\":\"string\"},\"deviceInfo\":{\"properties\":{\"device\":{\"type\":\"string\"},\"platform\":{\"type\":\"string\"},\"version\":{\"type\":\"string\"}},\"type\":\"object\"},\"email\":{\"format\":\"email\",\"type\":\"string\"},\"isVerified\":{\"type\":\"boolean\"},\"location\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"parentCommentId\":{\"nullable\":true,\"type\":\"integer\"},\"postId\":{\"type\":\"integer\"},\"website\":{\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"allOf\":[{\"properties\":{\"body\":{\"example\":\"laudantium enim quasi est quidem magnam...\",\"type\":\"string\"},\"createdAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"email\":{\"example\":\"Eliseo@gardner.biz\",\"format\":\"email\",\"type\":\"string\"},\"id\":{\"example\":1,\"type\":\"integer\"},\"likes\":{\"example\":23,\"type\":\"integer\"},\"name\":{\"example\":\"id labore ex et quam laborum\",\"type\":\"string\"},\"postId\":{\"example\":1,\"type\":\"integer\"}},\"type\":\"object\"},{\"properties\":{\"avatar\":{\"format\":\"uri\",\"type\":\"string\"},\"deviceInfo\":{\"properties\":{\"device\":{\"type\":\"string\"},\"platform\":{\"type\":\"string\"},\"version\":{\"type\":\"string\"}},\"type\":\"object\"},\"isVerified\":{\"type\":\"boolean\"},\"location\":{\"type\":\"string\"},\"parentCommentId\":{\"nullable\":true,\"type\":\"integer\"},\"replies\":{\"type\":\"integer\"},\"updatedAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"website\":{\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"}]}}},\"description\":\"Comment created successfully\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/comments","segments":[{"lit":"api"},{"lit":"comments"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"post_id","orig":"post_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /api/posts/{postId}/comments","json":"{\"operationId\":\"getPostComments\",\"parameters\":[{\"description\":\"Post ID\",\"in\":\"path\",\"name\":\"postId\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"body\":{\"example\":\"laudantium enim quasi est quidem magnam...\",\"type\":\"string\"},\"createdAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"email\":{\"example\":\"Eliseo@gardner.biz\",\"format\":\"email\",\"type\":\"string\"},\"id\":{\"example\":1,\"type\":\"integer\"},\"likes\":{\"example\":23,\"type\":\"integer\"},\"name\":{\"example\":\"id labore ex et quam laborum\",\"type\":\"string\"},\"postId\":{\"example\":1,\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/posts/{postId}/comments","rename":{"param":{"postId":"post_id"}},"segments":[{"lit":"api"},{"lit":"posts"},{"var":"post_id"},{"lit":"comments"}],"select":{"exist":["post_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{},"contract":{"id":"GET /api/comments","json":"{\"operationId\":\"getAllComments\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"body\":{\"example\":\"laudantium enim quasi est quidem magnam...\",\"type\":\"string\"},\"createdAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"email\":{\"example\":\"Eliseo@gardner.biz\",\"format\":\"email\",\"type\":\"string\"},\"id\":{\"example\":1,\"type\":\"integer\"},\"likes\":{\"example\":23,\"type\":\"integer\"},\"name\":{\"example\":\"id labore ex et quam laborum\",\"type\":\"string\"},\"postId\":{\"example\":1,\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/comments","segments":[{"lit":"api"},{"lit":"comments"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["post"]]},"key$":"comment","name__orig":"comment","Name":"Comment","name_":"comment","name-":"comment","NAME":"COMMENT","index$":1}, {"active":true,"entity":"comment","key$":"BasicCommentFlow","kind":"basic","name":"BasicCommentFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"comment_ref01"},"match":{"post_id":"post01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"comment_ref01"}}],"index$":1}]}, 'Comment')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const comment_ref01_ent = client.Comment()
    let comment_ref01_data = setup.data.new.comment['comment_ref01']
    comment_ref01_data['post_id'] = setup.idmap['post01']

    comment_ref01_data = (await comment_ref01_ent.create(comment_ref01_data)).data()
    assert(null != comment_ref01_data.id)


    // LIST
    const comment_ref01_match: any = {}

    const comment_ref01_list = (await comment_ref01_ent.list(comment_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(comment_ref01_list, { id: comment_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/comment/CommentTestData.json')

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
    ['comment01','comment02','comment03','post01','post02','post03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FAKE_REST_TEST_COMMENT_ENTID': idmap,
    'FAKE_REST_TEST_LIVE': 'FALSE',
    'FAKE_REST_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FAKE_REST_TEST_COMMENT_ENTID']

  const live = 'TRUE' === env.FAKE_REST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FAKE_REST_TEST_COMMENT_ENTID']
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
  
