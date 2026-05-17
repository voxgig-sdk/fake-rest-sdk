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

func TestCommentEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Comment(nil)
		if ent == nil {
			t.Fatal("expected non-nil CommentEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := commentBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "comment." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set FAKEREST_TEST_COMMENT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		commentRef01Ent := client.Comment(nil)
		commentRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "comment"}, setup.data), "comment_ref01"))
		commentRef01Data["post_id"] = setup.idmap["post01"]

		commentRef01DataResult, err := commentRef01Ent.Create(commentRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		commentRef01Data = core.ToMapAny(commentRef01DataResult)
		if commentRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if commentRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		commentRef01Match := map[string]any{}

		commentRef01ListResult, err := commentRef01Ent.List(commentRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		commentRef01List, commentRef01ListOk := commentRef01ListResult.([]any)
		if !commentRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", commentRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(commentRef01List), map[string]any{"id": commentRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

	})
}

func commentBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "comment", "CommentTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read comment test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse comment test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"comment01", "comment02", "comment03", "post01", "post02", "post03"},
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
	entidEnvRaw := os.Getenv("FAKEREST_TEST_COMMENT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"FAKEREST_TEST_COMMENT_ENTID": idmap,
		"FAKEREST_TEST_LIVE":      "FALSE",
		"FAKEREST_TEST_EXPLAIN":   "FALSE",
		"FAKEREST_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["FAKEREST_TEST_COMMENT_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["FAKEREST_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["FAKEREST_APIKEY"],
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
