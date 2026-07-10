# FakeRest Golang SDK



The Golang SDK for the FakeRest API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Category(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/fake-rest-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/fake-rest-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/fake-rest-sdk/go=../fake-rest-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    sdk "github.com/voxgig-sdk/fake-rest-sdk/go"
)

func main() {
    client := sdk.New()

    // List category records — the value is the array of records itself.
    categorys, err := client.Category(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range categorys.([]any) {
        fmt.Println(item)
    }
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
categorys, err := client.Category(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = categorys
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

category, err := client.Category(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(category) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewFakeRestSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
FAKE_REST_TEST_LIVE=TRUE
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewFakeRestSDK

```go
func NewFakeRestSDK(options map[string]any) *FakeRestSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *FakeRestSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### FakeRestSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Category` | `(data map[string]any) FakeRestEntity` | Create a Category entity instance. |
| `Comment` | `(data map[string]any) FakeRestEntity` | Create a Comment entity instance. |
| `Post` | `(data map[string]any) FakeRestEntity` | Create a Post entity instance. |
| `Product` | `(data map[string]any) FakeRestEntity` | Create a Product entity instance. |
| `Todo` | `(data map[string]any) FakeRestEntity` | Create a Todo entity instance. |
| `User` | `(data map[string]any) FakeRestEntity` | Create an User entity instance. |

### Entity interface (FakeRestEntity)

All entities implement the `FakeRestEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    category, err := client.Category(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // category is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Category

| Field | Description |
| --- | --- |
| `"count"` |  |
| `"id"` |  |
| `"name"` |  |

Operations: List.

API path: `/api/products/categories`

#### Comment

| Field | Description |
| --- | --- |
| `"avatar"` |  |
| `"body"` |  |
| `"created_at"` |  |
| `"device_info"` |  |
| `"email"` |  |
| `"id"` |  |
| `"is_verified"` |  |
| `"like"` |  |
| `"location"` |  |
| `"name"` |  |
| `"parent_comment_id"` |  |
| `"post_id"` |  |
| `"website"` |  |

Operations: Create, List.

API path: `/api/comments`

#### Post

| Field | Description |
| --- | --- |
| `"body"` |  |
| `"category"` |  |
| `"cover_image"` |  |
| `"created_at"` |  |
| `"featured"` |  |
| `"id"` |  |
| `"like"` |  |
| `"meta_description"` |  |
| `"published"` |  |
| `"read_time"` |  |
| `"tag"` |  |
| `"title"` |  |
| `"user_id"` |  |
| `"view"` |  |

Operations: Create, List, Load.

API path: `/api/posts`

#### Product

| Field | Description |
| --- | --- |
| `"brand"` |  |
| `"category"` |  |
| `"description"` |  |
| `"id"` |  |
| `"name"` |  |
| `"price"` |  |
| `"rating"` |  |
| `"review"` |  |
| `"sku"` |  |
| `"stock"` |  |

Operations: List, Load.

API path: `/api/products`

#### Todo

| Field | Description |
| --- | --- |
| `"completed"` |  |
| `"created_at"` |  |
| `"due_date"` |  |
| `"id"` |  |
| `"priority"` |  |
| `"title"` |  |
| `"user_id"` |  |

Operations: List.

API path: `/api/todos`

#### User

| Field | Description |
| --- | --- |
| `"address"` |  |
| `"company"` |  |
| `"email"` |  |
| `"id"` |  |
| `"name"` |  |
| `"phone"` |  |
| `"username"` |  |
| `"website"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/users`



## Entities


### Category

Create an instance: `category := client.Category(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `int` |  |
| `id` | `int` |  |
| `name` | `string` |  |

#### Example: List

```go
categorys, err := client.Category(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(categorys) // the array of records
```


### Comment

Create an instance: `comment := client.Comment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar` | `string` |  |
| `body` | `string` |  |
| `created_at` | `string` |  |
| `device_info` | `map[string]any` |  |
| `email` | `string` |  |
| `id` | `int` |  |
| `is_verified` | `bool` |  |
| `like` | `int` |  |
| `location` | `string` |  |
| `name` | `string` |  |
| `parent_comment_id` | `int` |  |
| `post_id` | `int` |  |
| `website` | `string` |  |

#### Example: List

```go
comments, err := client.Comment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(comments) // the array of records
```

#### Example: Create

```go
result, err := client.Comment(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Post

Create an instance: `post := client.Post(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `body` | `string` |  |
| `category` | `string` |  |
| `cover_image` | `string` |  |
| `created_at` | `string` |  |
| `featured` | `bool` |  |
| `id` | `int` |  |
| `like` | `int` |  |
| `meta_description` | `string` |  |
| `published` | `bool` |  |
| `read_time` | `int` |  |
| `tag` | `[]any` |  |
| `title` | `string` |  |
| `user_id` | `int` |  |
| `view` | `int` |  |

#### Example: Load

```go
post, err := client.Post(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(post) // the loaded record
```

#### Example: List

```go
posts, err := client.Post(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(posts) // the array of records
```

#### Example: Create

```go
result, err := client.Post(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Product

Create an instance: `product := client.Product(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `brand` | `string` |  |
| `category` | `string` |  |
| `description` | `string` |  |
| `id` | `int` |  |
| `name` | `string` |  |
| `price` | `float64` |  |
| `rating` | `float64` |  |
| `review` | `int` |  |
| `sku` | `string` |  |
| `stock` | `int` |  |

#### Example: Load

```go
product, err := client.Product(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(product) // the loaded record
```

#### Example: List

```go
products, err := client.Product(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(products) // the array of records
```


### Todo

Create an instance: `todo := client.Todo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed` | `bool` |  |
| `created_at` | `string` |  |
| `due_date` | `string` |  |
| `id` | `int` |  |
| `priority` | `string` |  |
| `title` | `string` |  |
| `user_id` | `int` |  |

#### Example: List

```go
todos, err := client.Todo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(todos) // the array of records
```


### User

Create an instance: `user := client.User(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `map[string]any` |  |
| `company` | `map[string]any` |  |
| `email` | `string` |  |
| `id` | `int` |  |
| `name` | `string` |  |
| `phone` | `string` |  |
| `username` | `string` |  |
| `website` | `string` |  |

#### Example: Load

```go
user, err := client.User(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(user) // the loaded record
```

#### Example: List

```go
users, err := client.User(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(users) // the array of records
```

#### Example: Create

```go
result, err := client.User(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/fake-rest-sdk/go/
├── fake-rest.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/fake-rest-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
category := client.Category(nil)
category.List(nil, nil)

// category.Data() now returns the category data from the last list
// category.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
