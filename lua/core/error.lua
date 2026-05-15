-- FakeRest SDK error

local FakeRestError = {}
FakeRestError.__index = FakeRestError


function FakeRestError.new(code, msg, ctx)
  local self = setmetatable({}, FakeRestError)
  self.is_sdk_error = true
  self.sdk = "FakeRest"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function FakeRestError:error()
  return self.msg
end


function FakeRestError:__tostring()
  return self.msg
end


return FakeRestError
