# FakeRest SDK feature factory

from fakerest_sdk.feature.base_feature import FakeRestBaseFeature
from fakerest_sdk.feature.test_feature import FakeRestTestFeature


def _make_feature(name):
    features = {
        "base": lambda: FakeRestBaseFeature(),
        "test": lambda: FakeRestTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
