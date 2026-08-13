# FakeRest Lua SDK Reference

Complete API reference for the FakeRest Lua SDK.


## FakeRestSDK

### Constructor

```lua
local sdk = require("fake-rest_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Category(data)`

Create a new `Category` entity instance. Pass `nil` for no initial data.

#### `Comment(data)`

Create a new `Comment` entity instance. Pass `nil` for no initial data.

#### `Post(data)`

Create a new `Post` entity instance. Pass `nil` for no initial data.

#### `Product(data)`

Create a new `Product` entity instance. Pass `nil` for no initial data.

#### `Todo(data)`

Create a new `Todo` entity instance. Pass `nil` for no initial data.

#### `User(data)`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## CategoryEntity

```lua
local category = client:Category(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Category():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CategoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CommentEntity

```lua
local comment = client:Comment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar` | `string` | No |  |
| `body` | `string` | No |  |
| `createdAt` | `string` | No |  |
| `deviceInfo` | `table` | No |  |
| `email` | `string` | No |  |
| `id` | `number` | No |  |
| `isVerified` | `boolean` | No |  |
| `likes` | `number` | No |  |
| `location` | `string` | No |  |
| `name` | `string` | No |  |
| `parentCommentId` | `number` | No |  |
| `postId` | `number` | No |  |
| `website` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Comment():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Comment():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CommentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PostEntity

```lua
local post = client:Post(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `string` | No |  |
| `category` | `string` | No |  |
| `coverImage` | `string` | No |  |
| `createdAt` | `string` | No |  |
| `featured` | `boolean` | No |  |
| `id` | `number` | No |  |
| `likes` | `number` | No |  |
| `metaDescription` | `string` | No |  |
| `published` | `boolean` | No |  |
| `readTime` | `number` | No |  |
| `tags` | `table` | No |  |
| `title` | `string` | No |  |
| `userId` | `number` | No |  |
| `views` | `number` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Post():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Post():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Post():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProductEntity

```lua
local product = client:Product(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `brand` | `string` | No |  |
| `category` | `string` | No |  |
| `description` | `string` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |
| `price` | `number` | No |  |
| `rating` | `number` | No |  |
| `reviews` | `number` | No |  |
| `sku` | `string` | No |  |
| `stock` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Product():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Product():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TodoEntity

```lua
local todo = client:Todo(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed` | `boolean` | No |  |
| `createdAt` | `string` | No |  |
| `dueDate` | `string` | No |  |
| `id` | `number` | No |  |
| `priority` | `string` | No |  |
| `title` | `string` | No |  |
| `userId` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Todo():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TodoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserEntity

```lua
local user = client:User(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `table` | No |  |
| `company` | `table` | No |  |
| `email` | `string` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |
| `phone` | `string` | No |  |
| `username` | `string` | No |  |
| `website` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:User():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:User():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:User():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:User():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:User():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

