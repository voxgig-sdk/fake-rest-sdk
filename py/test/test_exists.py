# FakeRest SDK exists test

import pytest
from fakerest_sdk import FakeRestSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = FakeRestSDK.test(None, None)
        assert testsdk is not None
