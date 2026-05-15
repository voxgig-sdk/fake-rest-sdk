# FakeRest SDK exists test

require "minitest/autorun"
require_relative "../FakeRest_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = FakeRestSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
