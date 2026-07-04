# FakeRest Python SDK



The Python SDK for the FakeRest API — an entity-oriented client following Pythonic conventions.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/fake-rest-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
from fakerest_sdk import FakeRestSDK

client = FakeRestSDK()
```

### 2. List category records

`list()` returns a `list` of records (each a `dict`) and raises on
error — iterate it directly.

```python
try:
    categorys = client.Category().list({})
    for category in categorys:
        print(category)
except Exception as err:
    print(f"list failed: {err}")
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    print(result["err"])     # error value
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = FakeRestSDK.test()

# Entity ops return the bare record and raise on error.
category = client.Category().load({"id": "test01"})
# category contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = FakeRestSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### FakeRestSDK

```python
from fakerest_sdk import FakeRestSDK

client = FakeRestSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = FakeRestSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### FakeRestSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `Category` | `(data) -> CategoryEntity` | Create a Category entity instance. |
| `Comment` | `(data) -> CommentEntity` | Create a Comment entity instance. |
| `Post` | `(data) -> PostEntity` | Create a Post entity instance. |
| `Product` | `(data) -> ProductEntity` | Create a Product entity instance. |
| `Todo` | `(data) -> TodoEntity` | Create a Todo entity instance. |
| `User` | `(data) -> UserEntity` | Create an User entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the bare result data (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

### Entities

#### Category

| Field | Description |
| --- | --- |
| `count` |  |
| `id` |  |
| `name` |  |

Operations: List.

API path: `/api/products/categories`

#### Comment

| Field | Description |
| --- | --- |
| `avatar` |  |
| `body` |  |
| `created_at` |  |
| `device_info` |  |
| `email` |  |
| `id` |  |
| `is_verified` |  |
| `like` |  |
| `location` |  |
| `name` |  |
| `parent_comment_id` |  |
| `post_id` |  |
| `website` |  |

Operations: Create, List.

API path: `/api/comments`

#### Post

| Field | Description |
| --- | --- |
| `body` |  |
| `category` |  |
| `cover_image` |  |
| `created_at` |  |
| `featured` |  |
| `id` |  |
| `like` |  |
| `meta_description` |  |
| `published` |  |
| `read_time` |  |
| `tag` |  |
| `title` |  |
| `user_id` |  |
| `view` |  |

Operations: Create, List, Load.

API path: `/api/posts`

#### Product

| Field | Description |
| --- | --- |
| `brand` |  |
| `category` |  |
| `description` |  |
| `id` |  |
| `name` |  |
| `price` |  |
| `rating` |  |
| `review` |  |
| `sku` |  |
| `stock` |  |

Operations: List, Load.

API path: `/api/products`

#### Todo

| Field | Description |
| --- | --- |
| `completed` |  |
| `created_at` |  |
| `due_date` |  |
| `id` |  |
| `priority` |  |
| `title` |  |
| `user_id` |  |

Operations: List.

API path: `/api/todos`

#### User

| Field | Description |
| --- | --- |
| `address` |  |
| `company` |  |
| `email` |  |
| `id` |  |
| `name` |  |
| `phone` |  |
| `username` |  |
| `website` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/users`



## Entities


### Category

Create an instance: `category = client.Category()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | ``$INTEGER`` |  |
| `id` | ``$INTEGER`` |  |
| `name` | ``$STRING`` |  |

#### Example: List

```python
categorys = client.Category().list({})
```


### Comment

Create an instance: `comment = client.Comment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar` | ``$STRING`` |  |
| `body` | ``$STRING`` |  |
| `created_at` | ``$STRING`` |  |
| `device_info` | ``$OBJECT`` |  |
| `email` | ``$STRING`` |  |
| `id` | ``$INTEGER`` |  |
| `is_verified` | ``$BOOLEAN`` |  |
| `like` | ``$INTEGER`` |  |
| `location` | ``$STRING`` |  |
| `name` | ``$STRING`` |  |
| `parent_comment_id` | ``$INTEGER`` |  |
| `post_id` | ``$INTEGER`` |  |
| `website` | ``$STRING`` |  |

#### Example: List

```python
comments = client.Comment().list({})
```

#### Example: Create

```python
comment = client.Comment().create({
})
```


### Post

Create an instance: `post = client.Post()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `body` | ``$STRING`` |  |
| `category` | ``$STRING`` |  |
| `cover_image` | ``$STRING`` |  |
| `created_at` | ``$STRING`` |  |
| `featured` | ``$BOOLEAN`` |  |
| `id` | ``$INTEGER`` |  |
| `like` | ``$INTEGER`` |  |
| `meta_description` | ``$STRING`` |  |
| `published` | ``$BOOLEAN`` |  |
| `read_time` | ``$INTEGER`` |  |
| `tag` | ``$ARRAY`` |  |
| `title` | ``$STRING`` |  |
| `user_id` | ``$INTEGER`` |  |
| `view` | ``$INTEGER`` |  |

#### Example: Load

```python
post = client.Post().load({"id": "post_id"})
```

#### Example: List

```python
posts = client.Post().list({})
```

#### Example: Create

```python
post = client.Post().create({
})
```


### Product

Create an instance: `product = client.Product()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `brand` | ``$STRING`` |  |
| `category` | ``$STRING`` |  |
| `description` | ``$STRING`` |  |
| `id` | ``$INTEGER`` |  |
| `name` | ``$STRING`` |  |
| `price` | ``$NUMBER`` |  |
| `rating` | ``$NUMBER`` |  |
| `review` | ``$INTEGER`` |  |
| `sku` | ``$STRING`` |  |
| `stock` | ``$INTEGER`` |  |

#### Example: Load

```python
product = client.Product().load({"id": "product_id"})
```

#### Example: List

```python
products = client.Product().list({})
```


### Todo

Create an instance: `todo = client.Todo()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed` | ``$BOOLEAN`` |  |
| `created_at` | ``$STRING`` |  |
| `due_date` | ``$STRING`` |  |
| `id` | ``$INTEGER`` |  |
| `priority` | ``$STRING`` |  |
| `title` | ``$STRING`` |  |
| `user_id` | ``$INTEGER`` |  |

#### Example: List

```python
todos = client.Todo().list({})
```


### User

Create an instance: `user = client.User()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | ``$OBJECT`` |  |
| `company` | ``$OBJECT`` |  |
| `email` | ``$STRING`` |  |
| `id` | ``$INTEGER`` |  |
| `name` | ``$STRING`` |  |
| `phone` | ``$STRING`` |  |
| `username` | ``$STRING`` |  |
| `website` | ``$STRING`` |  |

#### Example: Load

```python
user = client.User().load({"id": "user_id"})
```

#### Example: List

```python
users = client.User().list({})
```

#### Example: Create

```python
user = client.User().create({
})
```


## Explanation

### The operation pipeline

Every entity operation (load, list, create, update, remove) follows a
six-stage pipeline. Each stage fires a feature hook before executing:

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

If any stage returns an error, the pipeline short-circuits and the
error is returned to the caller as the second element in the return tuple.

### Features and hooks

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── fakerest_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`fakerest_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```python
category = client.Category()
category.load({"id": "example_id"})

# category.data_get() now returns the loaded category data
# category.match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
