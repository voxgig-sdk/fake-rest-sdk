
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FakeRestSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = FakeRestSDK.test()
    equal(testsdk instanceof FakeRestSDK, true,
      'FakeRestSDK.test() must return a client synchronously')
  })

})
