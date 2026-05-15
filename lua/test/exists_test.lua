-- ProjectName SDK exists test

local sdk = require("fake-rest_sdk")

describe("FakeRestSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
