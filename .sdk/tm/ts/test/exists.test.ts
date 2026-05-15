
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FakeRestSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await FakeRestSDK.test()
    equal(null !== testsdk, true)
  })

})
