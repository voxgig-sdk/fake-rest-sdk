package core

type FakeRestError struct {
	IsFakeRestError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewFakeRestError(code string, msg string, ctx *Context) *FakeRestError {
	return &FakeRestError{
		IsFakeRestError: true,
		Sdk:              "FakeRest",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *FakeRestError) Error() string {
	return e.Msg
}
