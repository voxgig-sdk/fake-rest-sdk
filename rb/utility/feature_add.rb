# FakeRest SDK utility: feature_add
module FakeRestUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
