

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"brand":{"a":true,"h":"Brand","n":"brand","r":false,"t":"`$STRING`","key$":"brand","index$":0},"category":{"a":true,"h":"Category","n":"category","r":false,"t":"`$STRING`","key$":"category","index$":1},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":3},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":4},"price":{"a":true,"fo":"float","h":"Price","n":"price","r":false,"t":"`$NUMBER`","key$":"price","index$":5},"rating":{"a":true,"fo":"float","h":"Rating","n":"rating","r":false,"t":"`$NUMBER`","key$":"rating","index$":6},"reviews":{"a":true,"h":"Reviews","n":"reviews","r":false,"t":"`$INTEGER`","key$":"reviews","index$":7},"sku":{"a":true,"h":"Sku","n":"sku","r":false,"t":"`$STRING`","key$":"sku","index$":8},"stock":{"a":true,"h":"Stock","n":"stock","r":false,"t":"`$INTEGER`","key$":"stock","index$":9}},"id":{"field":"id","name":"id"},"name":"product","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/products","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/products","q":{},"r":{},"s":[{"lit":"api"},{"lit":"products"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/products/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/products/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"api"},{"lit":"products"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"product","name__orig":"product","Name":"Product","name_":"product","name-":"product","NAME":"PRODUCT","index$":3}, {"active":true,"entity":"product","key$":"BasicProductFlow","kind":"basic","name":"BasicProductFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"product_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"product_ref01","srcdatavar":"product_ref01_data","suffix":"_dt0"},"m":{"id":"product01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-product_ref01"}}],"index$":1}]}, 'Product', {"GET /api/products":{"protocol":"http","operationId":"getAllProducts","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"id":{"type":"integer","example":1,"key$":"id"},"name":{"type":"string","example":"Awesome Product","key$":"name"},"description":{"type":"string","example":"High-quality product...","key$":"description"},"price":{"type":"number","format":"float","example":299.99,"key$":"price"},"category":{"type":"string","example":"electronics","key$":"category"},"brand":{"type":"string","example":"TechCorp","key$":"brand"},"sku":{"type":"string","example":"TC-AP-001","key$":"sku"},"stock":{"type":"integer","example":45,"key$":"stock"},"rating":{"type":"number","format":"float","example":4.3,"key$":"rating"},"reviews":{"type":"integer","example":127,"key$":"reviews"}},"x-ref":"#/components/schemas/Product","index$":0}}}}}},"parameters":[],"securitySource":"unspecified"},"GET /api/products/{id}":{"protocol":"http","operationId":"getProductById","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"id":{"type":"integer","example":1,"key$":"id"},"name":{"type":"string","example":"Awesome Product","key$":"name"},"description":{"type":"string","example":"High-quality product...","key$":"description"},"price":{"type":"number","format":"float","example":299.99,"key$":"price"},"category":{"type":"string","example":"electronics","key$":"category"},"brand":{"type":"string","example":"TechCorp","key$":"brand"},"sku":{"type":"string","example":"TC-AP-001","key$":"sku"},"stock":{"type":"integer","example":45,"key$":"stock"},"rating":{"type":"number","format":"float","example":4.3,"key$":"rating"},"reviews":{"type":"integer","example":127,"key$":"reviews"}},"x-ref":"#/components/schemas/Product","index$":0}}}}},"parameters":[{"name":"id","in":"path","required":true,"description":"Product ID","schema":{"type":"integer"},"index$":0}],"securitySource":"unspecified"}})
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
  
