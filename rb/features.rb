# FakeRest SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module FakeRestFeatures
  def self.make_feature(name)
    case name
    when "base"
      FakeRestBaseFeature.new
    when "ratelimit"
      FakeRestRatelimitFeature.new
    when "retry"
      FakeRestRetryFeature.new
    when "test"
      FakeRestTestFeature.new
    when "timeout"
      FakeRestTimeoutFeature.new
    else
      FakeRestBaseFeature.new
    end
  end
end
