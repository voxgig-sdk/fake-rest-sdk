# FakeRest SDK feature factory

from fakerest_sdk.feature.base_feature import FakeRestBaseFeature
from fakerest_sdk.feature.ratelimit_feature import FakeRestRatelimitFeature
from fakerest_sdk.feature.retry_feature import FakeRestRetryFeature
from fakerest_sdk.feature.test_feature import FakeRestTestFeature
from fakerest_sdk.feature.timeout_feature import FakeRestTimeoutFeature


_FEATURES = {
    "base": lambda: FakeRestBaseFeature(),
    "ratelimit": lambda: FakeRestRatelimitFeature(),
    "retry": lambda: FakeRestRetryFeature(),
    "test": lambda: FakeRestTestFeature(),
    "timeout": lambda: FakeRestTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
