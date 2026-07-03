package voxgigfakerestsdk

import (
	"github.com/voxgig-sdk/fake-rest-sdk/go/core"
	"github.com/voxgig-sdk/fake-rest-sdk/go/entity"
	"github.com/voxgig-sdk/fake-rest-sdk/go/feature"
	_ "github.com/voxgig-sdk/fake-rest-sdk/go/utility"
)

// Type aliases preserve external API.
type FakeRestSDK = core.FakeRestSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type FakeRestEntity = core.FakeRestEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type FakeRestError = core.FakeRestError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCategoryEntityFunc = func(client *core.FakeRestSDK, entopts map[string]any) core.FakeRestEntity {
		return entity.NewCategoryEntity(client, entopts)
	}
	core.NewCommentEntityFunc = func(client *core.FakeRestSDK, entopts map[string]any) core.FakeRestEntity {
		return entity.NewCommentEntity(client, entopts)
	}
	core.NewPostEntityFunc = func(client *core.FakeRestSDK, entopts map[string]any) core.FakeRestEntity {
		return entity.NewPostEntity(client, entopts)
	}
	core.NewProductEntityFunc = func(client *core.FakeRestSDK, entopts map[string]any) core.FakeRestEntity {
		return entity.NewProductEntity(client, entopts)
	}
	core.NewTodoEntityFunc = func(client *core.FakeRestSDK, entopts map[string]any) core.FakeRestEntity {
		return entity.NewTodoEntity(client, entopts)
	}
	core.NewUserEntityFunc = func(client *core.FakeRestSDK, entopts map[string]any) core.FakeRestEntity {
		return entity.NewUserEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewFakeRestSDK = core.NewFakeRestSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewFakeRestSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *FakeRestSDK  { return NewFakeRestSDK(nil) }
func Test() *FakeRestSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
