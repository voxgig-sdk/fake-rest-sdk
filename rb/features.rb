# FakeRest SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module FakeRestFeatures
  def self.make_feature(name)
    case name
    when "base"
      FakeRestBaseFeature.new
    when "test"
      FakeRestTestFeature.new
    else
      FakeRestBaseFeature.new
    end
  end
end
