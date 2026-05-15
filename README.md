# FakeRest SDK



Available for [Golang](go/) and [Lua](lua/) and [PHP](php/) and [Python](py/) and [Ruby](rb/) and [TypeScript](ts/).


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

Each entity supports the following operations where available: **load**, **list**, **create**,
**update**, and **remove**.


## Architecture

### Entity-operation model

Every SDK call follows the same pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

At each stage a feature hook fires (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), allowing features to inspect or modify the pipeline.

### Features

Features are hook-based middleware that extend SDK behaviour.

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

You can add custom features by passing them in the `extend` option at
construction time.

### Direct and Prepare

For endpoints not covered by the entity model, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`, `headers`,
and `body`.


## Quick start

### Golang

```go
import sdk "github.com/voxgig-sdk/fake-rest-sdk"

client := sdk.NewFakeRestSDK(map[string]any{
    "apikey": os.Getenv("FAKE-REST_APIKEY"),
})

// List all categorys
categorys, err := client.Category(nil).List(nil, nil)
```

### Lua

```lua
local sdk = require("fake-rest_sdk")

local client = sdk.new({
  apikey = os.getenv("FAKE-REST_APIKEY"),
})

-- List all categorys
local categorys, err = client:Category(nil):list(nil, nil)
```

### PHP

```php
<?php
require_once 'fakerest_sdk.php';

$client = new FakeRestSDK([
    "apikey" => getenv("FAKE-REST_APIKEY"),
]);

// List all categorys
[$categorys, $err] = $client->Category(null)->list(null, null);
```

### Python

```python
import os
from fakerest_sdk import FakeRestSDK

client = FakeRestSDK({
    "apikey": os.environ.get("FAKE-REST_APIKEY"),
})

# List all categorys
categorys, err = client.Category(None).list(None, None)
```

### Ruby

```ruby
require_relative "FakeRest_sdk"

client = FakeRestSDK.new({
  "apikey" => ENV["FAKE-REST_APIKEY"],
})

# List all categorys
categorys, err = client.Category(nil).list(nil, nil)
```

### TypeScript

```ts
import { FakeRestSDK } from 'fake-rest'

const client = new FakeRestSDK({
  apikey: process.env.FAKE-REST_APIKEY,
})

// List all categorys
const categorys = await client.Category().list()
```


## Testing

Both SDKs provide a test mode that replaces the HTTP transport with an
in-memory mock, so tests run without a network connection.

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Category(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Category(nil):load(
  { id = "test01" }, nil
)
```

### PHP

```php
$client = FakeRestSDK::test(null, null);
[$result, $err] = $client->Category(null)->load(
    ["id" => "test01"], null
);
```

### Python

```python
client = FakeRestSDK.test(None, None)
result, err = client.Category(None).load(
    {"id": "test01"}, None
)
```

### Ruby

```ruby
client = FakeRestSDK.test(nil, nil)
result, err = client.Category(nil).load(
  { "id" => "test01" }, nil
)
```

### TypeScript

```ts
const client = FakeRestSDK.test()
const result = await client.Category().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```


## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
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

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
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

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```


## Language-specific documentation

- [Golang SDK](go/README.md)
- [Lua SDK](lua/README.md)
- [PHP SDK](php/README.md)
- [Python SDK](py/README.md)
- [Ruby SDK](rb/README.md)
- [TypeScript SDK](ts/README.md)

