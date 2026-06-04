package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/fake-rest-sdk/go"
	"github.com/voxgig-sdk/fake-rest-sdk/go/core"

	vs "github.com/voxgig-sdk/fake-rest-sdk/go/utility/struct"
)

func TestPostEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Post(nil)
		if ent == nil {
			t.Fatal("expected non-nil PostEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := postBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "post." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set FAKEREST_TEST_POST_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		postRef01Ent := client.Post(nil)
		postRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "post"}, setup.data), "post_ref01"))

		postRef01DataResult, err := postRef01Ent.Create(postRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		postRef01Data = core.ToMapAny(postRef01DataResult)
		if postRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if postRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		postRef01Match := map[string]any{}

		postRef01ListResult, err := postRef01Ent.List(postRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		postRef01List, postRef01ListOk := postRef01ListResult.([]any)
		if !postRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", postRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(postRef01List), map[string]any{"id": postRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// LOAD
		postRef01MatchDt0 := map[string]any{
			"id": postRef01Data["id"],
		}
		postRef01DataDt0Loaded, err := postRef01Ent.Load(postRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		postRef01DataDt0LoadResult := core.ToMapAny(postRef01DataDt0Loaded)
		if postRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if postRef01DataDt0LoadResult["id"] != postRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func postBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "post", "PostTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read post test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse post test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"post01", "post02", "post03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("FAKEREST_TEST_POST_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"FAKEREST_TEST_POST_ENTID": idmap,
		"FAKEREST_TEST_LIVE":      "FALSE",
		"FAKEREST_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["FAKEREST_TEST_POST_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["FAKEREST_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
			},
			extra,
		})
		client = sdk.NewFakeRestSDK(core.ToMapAny(mergedOpts))
	}

	live := env["FAKEREST_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["FAKEREST_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
