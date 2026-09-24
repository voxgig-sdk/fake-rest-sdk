

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"avatar":{"a":true,"fo":"uri","h":"Avatar","n":"avatar","r":false,"t":"`$STRING`","key$":"avatar","index$":0},"body":{"a":true,"h":"Body","n":"body","r":false,"t":"`$STRING`","key$":"body","index$":1},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":false,"t":"`$STRING`","key$":"createdAt","index$":2},"deviceInfo":{"a":true,"h":"Device Info","n":"deviceInfo","r":false,"t":"`$OBJECT`","key$":"deviceInfo","index$":3},"email":{"a":true,"fo":"email","h":"Email","n":"email","r":false,"t":"`$STRING`","key$":"email","index$":4},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":5},"isVerified":{"a":true,"h":"Is Verified","n":"isVerified","r":false,"t":"`$BOOLEAN`","key$":"isVerified","index$":6},"likes":{"a":true,"h":"Likes","n":"likes","r":false,"t":"`$INTEGER`","key$":"likes","index$":7},"location":{"a":true,"h":"Location","n":"location","r":false,"t":"`$STRING`","key$":"location","index$":8},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":9},"parentCommentId":{"a":true,"h":"Parent Comment Id","n":"parentCommentId","r":false,"t":"`$INTEGER`","key$":"parentCommentId","index$":10},"postId":{"a":true,"h":"Post Id","n":"postId","r":false,"t":"`$INTEGER`","key$":"postId","index$":11},"website":{"a":true,"fo":"uri","h":"Website","n":"website","r":false,"t":"`$STRING`","key$":"website","index$":12}},"id":{"field":"id","name":"id"},"name":"comment","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/comments","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/comments","q":{},"r":{},"s":[{"lit":"api"},{"lit":"comments"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/posts/{postId}/comments","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"post_id","or":"post_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/posts/{postId}/comments","q":{"exist":["post_id"]},"r":{"param":{"postId":"post_id"}},"s":[{"lit":"api"},{"lit":"posts"},{"var":"post_id"},{"lit":"comments"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/comments","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/comments","q":{},"r":{},"s":[{"lit":"api"},{"lit":"comments"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.post"]]},"key$":"comment","name__orig":"comment","Name":"Comment","name_":"comment","name-":"comment","NAME":"COMMENT","index$":1}, {"active":true,"entity":"comment","key$":"BasicCommentFlow","kind":"basic","name":"BasicCommentFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"comment_ref01"},"m":{"post_id":"post01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"comment_ref01"}}],"index$":1}]}, 'Comment', {"POST /api/comments":{"protocol":"http","operationId":"createComment","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","key$":"name"},"email":{"type":"string","format":"email","key$":"email"},"body":{"type":"string","key$":"body"},"postId":{"type":"integer","key$":"postId"},"parentCommentId":{"type":"integer","nullable":true,"key$":"parentCommentId"},"isVerified":{"type":"boolean","key$":"isVerified"},"avatar":{"type":"string","format":"uri","key$":"avatar"},"website":{"type":"string","format":"uri","key$":"website"},"location":{"type":"string","key$":"location"},"deviceInfo":{"type":"object","properties":{"platform":{"type":"string"},"version":{"type":"string"},"device":{"type":"string"}},"key$":"deviceInfo"}},"x-ref":"#/components/schemas/CommentInput","index$":1}}}},"responses":{"201":{"description":"Comment created successfully","content":{"application/json":{"schema":{"allOf":[{"type":"object","properties":{"id":{"type":"integer","example":1,"key$":"id"},"postId":{"type":"integer","example":1,"key$":"postId"},"name":{"type":"string","example":"id labore ex et quam laborum","key$":"name"},"email":{"type":"string","format":"email","example":"Eliseo@gardner.biz","key$":"email"},"body":{"type":"string","example":"laudantium enim quasi est quidem magnam...","key$":"body"},"likes":{"type":"integer","example":23,"key$":"likes"},"createdAt":{"type":"string","format":"date-time","key$":"createdAt"}},"x-ref":"#/components/schemas/Comment"},{"type":"object","properties":{"parentCommentId":{"type":"integer","nullable":true},"isVerified":{"type":"boolean"},"avatar":{"type":"string","format":"uri"},"website":{"type":"string","format":"uri"},"location":{"type":"string"},"replies":{"type":"integer"},"deviceInfo":{"type":"object","properties":{"platform":{"type":"string"},"version":{"type":"string"},"device":{"type":"string"}}},"updatedAt":{"type":"string","format":"date-time"}}}],"x-ref":"#/components/schemas/CommentWithMetadata"}}}}},"parameters":[],"securitySource":"unspecified"},"GET /api/posts/{postId}/comments":{"protocol":"http","operationId":"getPostComments","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"id":{"type":"integer","example":1,"key$":"id"},"postId":{"type":"integer","example":1,"key$":"postId"},"name":{"type":"string","example":"id labore ex et quam laborum","key$":"name"},"email":{"type":"string","format":"email","example":"Eliseo@gardner.biz","key$":"email"},"body":{"type":"string","example":"laudantium enim quasi est quidem magnam...","key$":"body"},"likes":{"type":"integer","example":23,"key$":"likes"},"createdAt":{"type":"string","format":"date-time","key$":"createdAt"}},"x-ref":"#/components/schemas/Comment","index$":0}}}}}},"parameters":[{"name":"postId","in":"path","required":true,"description":"Post ID","schema":{"type":"integer"},"index$":0}],"securitySource":"unspecified"},"GET /api/comments":{"protocol":"http","operationId":"getAllComments","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"id":{"type":"integer","example":1,"key$":"id"},"postId":{"type":"integer","example":1,"key$":"postId"},"name":{"type":"string","example":"id labore ex et quam laborum","key$":"name"},"email":{"type":"string","format":"email","example":"Eliseo@gardner.biz","key$":"email"},"body":{"type":"string","example":"laudantium enim quasi est quidem magnam...","key$":"body"},"likes":{"type":"integer","example":23,"key$":"likes"},"createdAt":{"type":"string","format":"date-time","key$":"createdAt"}},"x-ref":"#/components/schemas/Comment","index$":0}}}}}},"parameters":[],"securitySource":"unspecified"}})
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
  
