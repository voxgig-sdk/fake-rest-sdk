<?php
declare(strict_types=1);

// Post entity test

require_once __DIR__ . '/../fakerest_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class PostEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = FakeRestSDK::test(null, null);
        $ent = $testsdk->Post(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = post_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "post." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set FAKEREST_TEST_POST_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $post_ref01_ent = $client->Post(null);
        $post_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.post"), "post_ref01"));

        [$post_ref01_data_result, $err] = $post_ref01_ent->create($post_ref01_data, null);
        $this->assertNull($err);
        $post_ref01_data = Helpers::to_map($post_ref01_data_result);
        $this->assertNotNull($post_ref01_data);
        $this->assertNotNull($post_ref01_data["id"]);

        // LIST
        $post_ref01_match = [];

        [$post_ref01_list_result, $err] = $post_ref01_ent->list($post_ref01_match, null);
        $this->assertNull($err);
        $this->assertIsArray($post_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($post_ref01_list_result),
            ["id" => $post_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // LOAD
        $post_ref01_match_dt0 = [
            "id" => $post_ref01_data["id"],
        ];
        [$post_ref01_data_dt0_loaded, $err] = $post_ref01_ent->load($post_ref01_match_dt0, null);
        $this->assertNull($err);
        $post_ref01_data_dt0_load_result = Helpers::to_map($post_ref01_data_dt0_loaded);
        $this->assertNotNull($post_ref01_data_dt0_load_result);
        $this->assertEquals($post_ref01_data_dt0_load_result["id"], $post_ref01_data["id"]);

    }
}

function post_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/post/PostTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = FakeRestSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["post01", "post02", "post03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("FAKEREST_TEST_POST_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "FAKEREST_TEST_POST_ENTID" => $idmap,
        "FAKEREST_TEST_LIVE" => "FALSE",
        "FAKEREST_TEST_EXPLAIN" => "FALSE",
        "FAKEREST_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["FAKEREST_TEST_POST_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["FAKEREST_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
                "apikey" => $env["FAKEREST_APIKEY"],
            ],
            $extra ?? [],
        ]);
        $client = new FakeRestSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["FAKEREST_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["FAKEREST_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
