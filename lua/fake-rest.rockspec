package = "voxgig-sdk-fake-rest"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/fake-rest-sdk.git"
}
description = {
  summary = "FakeRest SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["fake-rest_sdk"] = "fake-rest_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
