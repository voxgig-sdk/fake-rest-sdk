# FakeRest SDK utility: prepare_body
require_relative 'media'
module FakeRestUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return FakeRestUtilities.raw_body(ctx.reqdata) if FakeRestUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
