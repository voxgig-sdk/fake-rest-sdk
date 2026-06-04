# FakeRest SDK

Realistic JSON mock data for testing mobile apps and web projects, with no signup or auth

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Fake REST API

Fake REST API is a free testing service that serves realistic JSON data for prototyping mobile apps and web projects. It is operated by Sethu Premkumar and hosted on [Vercel](https://fake-rest-api-mobile-apps.vercel.app).

What you get from the API:

- Users with contact information, addresses, and company details
- Posts (blog content with metadata)
- Products (e-commerce items with pricing and categories)
- Todos filterable by user and completion status
- Comments linked to posts

No authentication or signup is required, and CORS is enabled, so the endpoints can be called directly from a browser. No rate limit is documented, but treat the service as best-effort for development use only.

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

## 30-second quickstart

### TypeScript

```ts
import { FakeRestSDK } from 'fake-rest'

const client = new FakeRestSDK({})

// List all categorys
const categorys = await client.Category().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

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
| **Category** | Product categories, exposed via the products endpoints (e.g. `GET /api/products/categories`). | `/api/products/categories` |
| **Comment** | User feedback attached to posts, supporting list, fetch-by-post, and create operations. | `/api/comments` |
| **Post** | Blog-style posts with metadata, supporting list, fetch-by-id, and create operations. | `/api/posts` |
| **Product** | E-commerce items with pricing and inventory fields, plus a categories listing. | `/api/products` |
| **Todo** | Task items with completion status, filterable by user id and completion state. | `/api/todos` |
| **User** | User profiles with contact information, addresses, and company details, supporting full CRUD (`GET`, `POST`, `PUT`, `DELETE` on `/api/users`). | `/api/users` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from fakerest_sdk import FakeRestSDK

client = FakeRestSDK({})

# List all categorys
categorys, err = client.Category(None).list(None, None)
```

### PHP

```php
<?php
require_once 'fakerest_sdk.php';

$client = new FakeRestSDK([]);

// List all categorys
[$categorys, $err] = $client->Category(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/fake-rest-sdk/go"

client := sdk.NewFakeRestSDK(map[string]any{})

// List all categorys
categorys, err := client.Category(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "FakeRest_sdk"

client = FakeRestSDK.new({})

# List all categorys
categorys, err = client.Category(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("fake-rest_sdk")

local client = sdk.new({})

-- List all categorys
local categorys, err = client:Category(nil):list(nil, nil)
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
client = FakeRestSDK.test(None, None)
result, err = client.Category(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = FakeRestSDK::test(null, null);
[$result, $err] = $client->Category(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Category(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = FakeRestSDK.test(nil, nil)
result, err = client.Category(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Category(nil):load(
  { id = "test01" }, nil
)
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

## Using the Fake REST API

- Upstream: [https://fake-rest-api-mobile-apps.vercel.app](https://fake-rest-api-mobile-apps.vercel.app)

- No explicit license is published on the homepage or community catalogue.
- Service is provided free of charge for testing and development; treat the data as sample/mock content.
- Contact the operator (Sethu Premkumar) for any reuse questions.

---

Generated from the Fake REST API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
