# Post entity test

import json
import os
import time

import pytest

from utility.voxgig_struct import voxgig_struct as vs
from fakerest_sdk import FakeRestSDK
from core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestPostEntity:

    def test_should_create_instance(self):
        testsdk = FakeRestSDK.test(None, None)
        ent = testsdk.Post(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _post_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "post." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set FAKEREST_TEST_POST_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        post_ref01_ent = client.Post(None)
        post_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.post"), "post_ref01"))

        post_ref01_data = helpers.to_map(post_ref01_ent.create(post_ref01_data, None))
        assert post_ref01_data is not None
        assert post_ref01_data["id"] is not None

        # LIST
        post_ref01_match = {}

        post_ref01_list_result = post_ref01_ent.list(post_ref01_match, None)
        assert isinstance(post_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(post_ref01_list_result),
            {"id": post_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # LOAD
        post_ref01_match_dt0 = {
            "id": post_ref01_data["id"],
        }
        post_ref01_data_dt0_loaded = post_ref01_ent.load(post_ref01_match_dt0, None)
        post_ref01_data_dt0_load_result = helpers.to_map(post_ref01_data_dt0_loaded)
        assert post_ref01_data_dt0_load_result is not None
        assert post_ref01_data_dt0_load_result["id"] == post_ref01_data["id"]



def _post_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/post/PostTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = FakeRestSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["post01", "post02", "post03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "FAKEREST_TEST_POST_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "FAKEREST_TEST_POST_ENTID": idmap,
        "FAKEREST_TEST_LIVE": "FALSE",
        "FAKEREST_TEST_EXPLAIN": "FALSE",
    })

    idmap_resolved = helpers.to_map(
        env.get("FAKEREST_TEST_POST_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("FAKEREST_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            {
            },
            extra or {},
        ])
        client = FakeRestSDK(helpers.to_map(merged_opts))

    _live = env.get("FAKEREST_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("FAKEREST_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
