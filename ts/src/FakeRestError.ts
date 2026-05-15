
import { Context } from './Context'


class FakeRestError extends Error {

  isFakeRestError = true

  sdk = 'FakeRest'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  FakeRestError
}

