# FakeRest TypeScript SDK



The TypeScript SDK for the FakeRest API — a type-safe, entity-oriented client with full async/await support.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/fake-rest-sdk/releases](https://github.com/voxgig-sdk/fake-rest-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { FakeRestSDK } from '@voxgig-sdk/fake-rest'

const client = new FakeRestSDK()
```

### 2. List categorys

```ts
const result = await client.category.list()

if (result.ok) {
  for (const item of result.data) {
    console.log(item.id, item.name)
  }
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = FakeRestSDK.test()

const result = await client.category.load({ id: 'test01' })
// result.ok === true
// result.data contains mock response data
```

You can also use the instance method:

```ts
const client = new FakeRestSDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.category

// First call sets internal match
await entity.load({ id: 'example' })

// Subsequent calls reuse the stored match
const data = entity.data()
console.log(data.id) // 'example'
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new FakeRestSDK({
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
FAKE_REST_TEST_LIVE=TRUE
```

Then run:

```bash
cd ts && npm test
```


## Reference

### FakeRestSDK

#### Constructor

```ts
new FakeRestSDK(options?: {
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Category(data?)` | `CategoryEntity` | Create a Category entity instance. |
| `Comment(data?)` | `CommentEntity` | Create a Comment entity instance. |
| `Post(data?)` | `PostEntity` | Create a Post entity instance. |
| `Product(data?)` | `ProductEntity` | Create a Product entity instance. |
| `Todo(data?)` | `TodoEntity` | Create a Todo entity instance. |
| `User(data?)` | `UserEntity` | Create a User entity instance. |
| `tester(testopts?, sdkopts?)` | `FakeRestSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `FakeRestSDK.test(testopts?, sdkopts?)` | `FakeRestSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Result>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Result>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Result>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Result>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<Result>` | Remove an entity. |
| `data` | `data(data?): any` | Get or set entity data. |
| `match` | `match(match?): any` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): FakeRestSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Result shape

All entity operations return a Result object:

```ts
{
  ok: boolean      // true if the HTTP status is 2xx
  status: number   // HTTP status code
  headers: object  // response headers
  data: any        // parsed JSON response body
}
```

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Category

| Field | Description |
| --- | --- |
| `count` |  |
| `id` |  |
| `name` |  |

Operations: list.

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

Operations: create, list.

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

Operations: create, list, load.

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

Operations: list, load.

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

Operations: list.

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

Operations: create, list, load, remove, update.

API path: `/api/users`



## Entities


### Category

Create an instance: `const category = client.category`

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

```ts
const categorys = await client.category.list()
```


### Comment

Create an instance: `const comment = client.comment`

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

```ts
const comments = await client.comment.list()
```

#### Example: Create

```ts
const comment = await client.comment.create({
})
```


### Post

Create an instance: `const post = client.post`

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

```ts
const post = await client.post.load({ id: 'post_id' })
```

#### Example: List

```ts
const posts = await client.post.list()
```

#### Example: Create

```ts
const post = await client.post.create({
})
```


### Product

Create an instance: `const product = client.product`

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

```ts
const product = await client.product.load({ id: 'product_id' })
```

#### Example: List

```ts
const products = await client.product.list()
```


### Todo

Create an instance: `const todo = client.todo`

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

```ts
const todos = await client.todo.list()
```


### User

Create an instance: `const user = client.user`

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

```ts
const user = await client.user.load({ id: 'user_id' })
```

#### Example: List

```ts
const users = await client.user.list()
```

#### Example: Create

```ts
const user = await client.user.create({
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
error is returned to the caller.

An unexpected exception triggers the `PreUnexpected` hook before
propagating.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
fake-rest/
├── src/
│   ├── FakeRestSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { FakeRestSDK } from '@voxgig-sdk/fake-rest'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const category = client.category
await category.load({ id: "example_id" })

// category.data() now returns the loaded category data
// category.match() returns { id: "example_id" }
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
