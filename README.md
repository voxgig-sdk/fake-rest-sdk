# FakeRest SDK

Fake REST API client, generated from the OpenAPI spec.

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## Try it

**TypeScript**
```bash
npm install fake-rest
```

**Python**
```bash
pip install fake-rest-sdk
```

**PHP**
```bash
composer require voxgig/fake-rest-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/fake-rest-sdk/go
```

**Ruby**
```bash
gem install fake-rest-sdk
```

**Lua**
```bash
luarocks install fake-rest-sdk
```

## Quickstart

### TypeScript

```ts
import { FakeRestSDK } from 'fake-rest'

const client = new FakeRestSDK({
  apikey: process.env.FAKE-REST_APIKEY,
})

// List all categorys
const categorys = await client.Category().list()
console.log(categorys.data)
```

See the [TypeScript README](ts/README.md) for the full guide.

## Surfaces

| Surface | Path |
| --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | `go-cli/` |
| **MCP server** | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o fake-rest-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "fake-rest": {
      "command": "/abs/path/to/fake-rest-mcp"
    }
  }
}
```

## Entities

The API exposes 6 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Category** |  | `/api/products/categories` |
| **Comment** |  | `/api/comments` |
| **Post** |  | `/api/posts` |
| **Product** |  | `/api/products` |
| **Todo** |  | `/api/todos` |
| **User** |  | `/api/users` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
import os
from fakerest_sdk import FakeRestSDK

client = FakeRestSDK({
    "apikey": os.environ.get("FAKE-REST_APIKEY"),
})

# List all categorys
categorys, err = client.Category().list()
print(categorys)
```

### PHP

```php
<?php
require_once 'fakerest_sdk.php';

$client = new FakeRestSDK([
    "apikey" => getenv("FAKE-REST_APIKEY"),
]);

// List all categorys
[$categorys, $err] = $client->Category()->list();
print_r($categorys);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/fake-rest-sdk/go"

client := sdk.NewFakeRestSDK(map[string]any{
    "apikey": os.Getenv("FAKE-REST_APIKEY"),
})

// List all categorys
categorys, err := client.Category(nil).List(nil, nil)
fmt.Println(categorys)
```

### Ruby

```ruby
require_relative "FakeRest_sdk"

client = FakeRestSDK.new({
  "apikey" => ENV["FAKE-REST_APIKEY"],
})

# List all categorys
categorys, err = client.Category().list
puts categorys
```

### Lua

```lua
local sdk = require("fake-rest_sdk")

local client = sdk.new({
  apikey = os.getenv("FAKE-REST_APIKEY"),
})

-- List all categorys
local categorys, err = client:Category():list()
print(categorys)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = FakeRestSDK.test()
const result = await client.Category().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = FakeRestSDK.test()
result, err = client.Category().load({"id": "test01"})
```

### PHP

```php
$client = FakeRestSDK::test();
[$result, $err] = $client->Category()->load(["id" => "test01"]);
```

### Golang

```go
client := sdk.Test()
result, err := client.Category(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = FakeRestSDK.test
result, err = client.Category().load({ "id" => "test01" })
```

### Lua

```lua
local client = sdk.test()
local result, err = client:Category():load({ id = "test01" })
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

---

Generated from the Fake REST API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
