# FakeRest SDK utility: make_context
require_relative '../core/context'
module FakeRestUtilities
  MakeContext = ->(ctxmap, basectx) {
    FakeRestContext.new(ctxmap, basectx)
  }
end
