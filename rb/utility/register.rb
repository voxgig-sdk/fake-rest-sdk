# FakeRest SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

FakeRestUtility.registrar = ->(u) {
  u.clean = FakeRestUtilities::Clean
  u.done = FakeRestUtilities::Done
  u.make_error = FakeRestUtilities::MakeError
  u.feature_add = FakeRestUtilities::FeatureAdd
  u.feature_hook = FakeRestUtilities::FeatureHook
  u.feature_init = FakeRestUtilities::FeatureInit
  u.fetcher = FakeRestUtilities::Fetcher
  u.make_fetch_def = FakeRestUtilities::MakeFetchDef
  u.make_context = FakeRestUtilities::MakeContext
  u.make_options = FakeRestUtilities::MakeOptions
  u.make_request = FakeRestUtilities::MakeRequest
  u.make_response = FakeRestUtilities::MakeResponse
  u.make_result = FakeRestUtilities::MakeResult
  u.make_point = FakeRestUtilities::MakePoint
  u.make_spec = FakeRestUtilities::MakeSpec
  u.make_url = FakeRestUtilities::MakeUrl
  u.param = FakeRestUtilities::Param
  u.prepare_auth = FakeRestUtilities::PrepareAuth
  u.prepare_body = FakeRestUtilities::PrepareBody
  u.prepare_headers = FakeRestUtilities::PrepareHeaders
  u.prepare_method = FakeRestUtilities::PrepareMethod
  u.prepare_params = FakeRestUtilities::PrepareParams
  u.prepare_path = FakeRestUtilities::PreparePath
  u.prepare_query = FakeRestUtilities::PrepareQuery
  u.result_basic = FakeRestUtilities::ResultBasic
  u.result_body = FakeRestUtilities::ResultBody
  u.result_headers = FakeRestUtilities::ResultHeaders
  u.transform_request = FakeRestUtilities::TransformRequest
  u.transform_response = FakeRestUtilities::TransformResponse
}
