# FakeRest PHP SDK Reference

Complete API reference for the FakeRest PHP SDK.


## FakeRestSDK

### Constructor

```php
require_once __DIR__ . '/fakerest_sdk.php';

$client = new FakeRestSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `FakeRestSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = FakeRestSDK::test();
```


### Instance Methods

#### `Category($data = null)`

Create a new `CategoryEntity` instance. Pass `null` for no initial data.

#### `Comment($data = null)`

Create a new `CommentEntity` instance. Pass `null` for no initial data.

#### `Post($data = null)`

Create a new `PostEntity` instance. Pass `null` for no initial data.

#### `Product($data = null)`

Create a new `ProductEntity` instance. Pass `null` for no initial data.

#### `Todo($data = null)`

Create a new `TodoEntity` instance. Pass `null` for no initial data.

#### `User($data = null)`

Create a new `UserEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): FakeRestUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## CategoryEntity

```php
$category = $client->Category();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | No |  |
| `id` | `int` | No |  |
| `name` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Category()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CategoryEntity`

Create a new `CategoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CommentEntity

```php
$comment = $client->Comment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar` | `string` | No |  |
| `body` | `string` | No |  |
| `createdAt` | `string` | No |  |
| `deviceInfo` | `array` | No |  |
| `email` | `string` | No |  |
| `id` | `int` | No |  |
| `isVerified` | `bool` | No |  |
| `likes` | `int` | No |  |
| `location` | `string` | No |  |
| `name` | `string` | No |  |
| `parentCommentId` | `int` | No |  |
| `postId` | `int` | No |  |
| `website` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Comment()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Comment()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CommentEntity`

Create a new `CommentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PostEntity

```php
$post = $client->Post();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `string` | No |  |
| `category` | `string` | No |  |
| `coverImage` | `string` | No |  |
| `createdAt` | `string` | No |  |
| `featured` | `bool` | No |  |
| `id` | `int` | No |  |
| `likes` | `int` | No |  |
| `metaDescription` | `string` | No |  |
| `published` | `bool` | No |  |
| `readTime` | `int` | No |  |
| `tags` | `array` | No |  |
| `title` | `string` | No |  |
| `userId` | `int` | No |  |
| `views` | `int` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Post()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Post()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Post()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PostEntity`

Create a new `PostEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProductEntity

```php
$product = $client->Product();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `brand` | `string` | No |  |
| `category` | `string` | No |  |
| `description` | `string` | No |  |
| `id` | `int` | No |  |
| `name` | `string` | No |  |
| `price` | `float` | No |  |
| `rating` | `float` | No |  |
| `reviews` | `int` | No |  |
| `sku` | `string` | No |  |
| `stock` | `int` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Product()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Product()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProductEntity`

Create a new `ProductEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TodoEntity

```php
$todo = $client->Todo();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed` | `bool` | No |  |
| `createdAt` | `string` | No |  |
| `dueDate` | `string` | No |  |
| `id` | `int` | No |  |
| `priority` | `string` | No |  |
| `title` | `string` | No |  |
| `userId` | `int` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Todo()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TodoEntity`

Create a new `TodoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserEntity

```php
$user = $client->User();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `array` | No |  |
| `company` | `array` | No |  |
| `email` | `string` | No |  |
| `id` | `int` | No |  |
| `name` | `string` | No |  |
| `phone` | `string` | No |  |
| `username` | `string` | No |  |
| `website` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->User()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->User()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->User()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->User()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->User()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserEntity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new FakeRestSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

