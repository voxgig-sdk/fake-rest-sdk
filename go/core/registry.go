package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCategoryEntityFunc func(client *FakeRestSDK, entopts map[string]any) FakeRestEntity

var NewCommentEntityFunc func(client *FakeRestSDK, entopts map[string]any) FakeRestEntity

var NewPostEntityFunc func(client *FakeRestSDK, entopts map[string]any) FakeRestEntity

var NewProductEntityFunc func(client *FakeRestSDK, entopts map[string]any) FakeRestEntity

var NewTodoEntityFunc func(client *FakeRestSDK, entopts map[string]any) FakeRestEntity

var NewUserEntityFunc func(client *FakeRestSDK, entopts map[string]any) FakeRestEntity

