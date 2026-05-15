# FakeRest SDK utility: make_context

from core.context import FakeRestContext


def make_context_util(ctxmap, basectx):
    return FakeRestContext(ctxmap, basectx)
