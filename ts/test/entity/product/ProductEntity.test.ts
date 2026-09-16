

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


describe('ProductEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FAKE_REST_TEST_LIVE=TRUE.
  afterEach(liveDelay('FAKE_REST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = FakeRestSDK.test()
    const ent = testsdk.Product()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FAKE_REST_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'product.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"brand","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"category","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"description","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"id","req":false,"type":"`$INTEGER`","index$":3},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":4},{"active":true,"format":"float","name":"price","req":false,"type":"`$NUMBER`","index$":5},{"active":true,"format":"float","name":"rating","req":false,"type":"`$NUMBER`","index$":6},{"active":true,"name":"reviews","req":false,"type":"`$INTEGER`","index$":7},{"active":true,"name":"sku","req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"stock","req":false,"type":"`$INTEGER`","index$":9}],"id":{"field":"id","name":"id"},"name":"product","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /api/products","json":"{\"operationId\":\"getAllProducts\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"brand\":{\"example\":\"TechCorp\",\"type\":\"string\"},\"category\":{\"example\":\"electronics\",\"type\":\"string\"},\"description\":{\"example\":\"High-quality product...\",\"type\":\"string\"},\"id\":{\"example\":1,\"type\":\"integer\"},\"name\":{\"example\":\"Awesome Product\",\"type\":\"string\"},\"price\":{\"example\":299.99,\"format\":\"float\",\"type\":\"number\"},\"rating\":{\"example\":4.3,\"format\":\"float\",\"type\":\"number\"},\"reviews\":{\"example\":127,\"type\":\"integer\"},\"sku\":{\"example\":\"TC-AP-001\",\"type\":\"string\"},\"stock\":{\"example\":45,\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/products","segments":[{"lit":"api"},{"lit":"products"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /api/products/{id}","json":"{\"operationId\":\"getProductById\",\"parameters\":[{\"description\":\"Product ID\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"brand\":{\"example\":\"TechCorp\",\"type\":\"string\"},\"category\":{\"example\":\"electronics\",\"type\":\"string\"},\"description\":{\"example\":\"High-quality product...\",\"type\":\"string\"},\"id\":{\"example\":1,\"type\":\"integer\"},\"name\":{\"example\":\"Awesome Product\",\"type\":\"string\"},\"price\":{\"example\":299.99,\"format\":\"float\",\"type\":\"number\"},\"rating\":{\"example\":4.3,\"format\":\"float\",\"type\":\"number\"},\"reviews\":{\"example\":127,\"type\":\"integer\"},\"sku\":{\"example\":\"TC-AP-001\",\"type\":\"string\"},\"stock\":{\"example\":45,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/products/{id}","segments":[{"lit":"api"},{"lit":"products"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"product","name__orig":"product","Name":"Product","name_":"product","name-":"product","NAME":"PRODUCT","index$":3}, {"active":true,"entity":"product","key$":"BasicProductFlow","kind":"basic","name":"BasicProductFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"product_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"product_ref01","srcdatavar":"product_ref01_data","suffix":"_dt0"},"match":{"id":"product01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-product_ref01"}}],"index$":1}]}, 'Product')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let product_ref01_data = Object.values(setup.data.existing.product)[0] as any

    // LIST
    const product_ref01_ent = client.Product()
    const product_ref01_match: any = {}

    const product_ref01_list = (await product_ref01_ent.list(product_ref01_match)).map((e: any) => e.data())


    // LOAD
    const product_ref01_match_dt0: any = {}
    product_ref01_match_dt0.id = product_ref01_data.id
    const product_ref01_data_dt0 = (await product_ref01_ent.load(product_ref01_match_dt0)).data()
    assert(product_ref01_data_dt0.id === product_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/product/ProductTestData.json')

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
    ['product01','product02','product03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FAKE_REST_TEST_PRODUCT_ENTID': idmap,
    'FAKE_REST_TEST_LIVE': 'FALSE',
    'FAKE_REST_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FAKE_REST_TEST_PRODUCT_ENTID']

  const live = 'TRUE' === env.FAKE_REST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FAKE_REST_TEST_PRODUCT_ENTID']
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
  
