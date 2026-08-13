# FakeRest TypeScript SDK



The TypeScript SDK for the FakeRest API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Category()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

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

### 2. List category records

`list()` resolves to an array of Category ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const categorys = await client.Category().list()

for (const category of categorys) {
  console.log(category)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const products = await client.Product().list()
  console.log(products)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
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

if (result instanceof Error) {
  throw result
}
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

const product = await client.Product().list()
// product is the entity, populated with mock response data
// — call product.data() for the record itself
console.log(product)
```

You can also use the instance method:

```ts
const client = new FakeRestSDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Product()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
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
| `User(data?)` | `UserEntity` | Create an User entity instance. |
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
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): FakeRestSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

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
| `createdAt` |  |
| `deviceInfo` |  |
| `email` |  |
| `id` |  |
| `isVerified` |  |
| `likes` |  |
| `location` |  |
| `name` |  |
| `parentCommentId` |  |
| `postId` |  |
| `website` |  |

Operations: create, list.

API path: `/api/comments`

#### Post

| Field | Description |
| --- | --- |
| `body` |  |
| `category` |  |
| `coverImage` |  |
| `createdAt` |  |
| `featured` |  |
| `id` |  |
| `likes` |  |
| `metaDescription` |  |
| `published` |  |
| `readTime` |  |
| `tags` |  |
| `title` |  |
| `userId` |  |
| `views` |  |

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
| `reviews` |  |
| `sku` |  |
| `stock` |  |

Operations: list, load.

API path: `/api/products`

#### Todo

| Field | Description |
| --- | --- |
| `completed` |  |
| `createdAt` |  |
| `dueDate` |  |
| `id` |  |
| `priority` |  |
| `title` |  |
| `userId` |  |

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

Create an instance: `const category = client.Category()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `number` |  |
| `id` | `number` |  |
| `name` | `string` |  |

#### Example: List

```ts
const categorys = await client.Category().list()
```


### Comment

Create an instance: `const comment = client.Comment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar` | `string` |  |
| `body` | `string` |  |
| `createdAt` | `string` |  |
| `deviceInfo` | `Record<string, any>` |  |
| `email` | `string` |  |
| `id` | `number` |  |
| `isVerified` | `boolean` |  |
| `likes` | `number` |  |
| `location` | `string` |  |
| `name` | `string` |  |
| `parentCommentId` | `number` |  |
| `postId` | `number` |  |
| `website` | `string` |  |

#### Example: List

```ts
const comments = await client.Comment().list()
```

#### Example: Create

```ts
const comment = await client.Comment().create({
})
```


### Post

Create an instance: `const post = client.Post()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `body` | `string` |  |
| `category` | `string` |  |
| `coverImage` | `string` |  |
| `createdAt` | `string` |  |
| `featured` | `boolean` |  |
| `id` | `number` |  |
| `likes` | `number` |  |
| `metaDescription` | `string` |  |
| `published` | `boolean` |  |
| `readTime` | `number` |  |
| `tags` | `any[]` |  |
| `title` | `string` |  |
| `userId` | `number` |  |
| `views` | `number` |  |

#### Example: Load

```ts
const post = await client.Post().load({ id: 1 })
```

#### Example: List

```ts
const posts = await client.Post().list()
```

#### Example: Create

```ts
const post = await client.Post().create({
})
```


### Product

Create an instance: `const product = client.Product()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `brand` | `string` |  |
| `category` | `string` |  |
| `description` | `string` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `price` | `number` |  |
| `rating` | `number` |  |
| `reviews` | `number` |  |
| `sku` | `string` |  |
| `stock` | `number` |  |

#### Example: Load

```ts
const product = await client.Product().load({ id: 1 })
```

#### Example: List

```ts
const products = await client.Product().list()
```


### Todo

Create an instance: `const todo = client.Todo()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed` | `boolean` |  |
| `createdAt` | `string` |  |
| `dueDate` | `string` |  |
| `id` | `number` |  |
| `priority` | `string` |  |
| `title` | `string` |  |
| `userId` | `number` |  |

#### Example: List

```ts
const todos = await client.Todo().list()
```


### User

Create an instance: `const user = client.User()`

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
| `address` | `Record<string, any>` |  |
| `company` | `Record<string, any>` |  |
| `email` | `string` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `phone` | `string` |  |
| `username` | `string` |  |
| `website` | `string` |  |

#### Example: Load

```ts
const user = await client.User().load({ id: 1 })
```

#### Example: List

```ts
const users = await client.User().list()
```

#### Example: Create

```ts
const user = await client.User().create({
})
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

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const product = client.Product()
await product.list()

// product.data() now returns the product data from the last `list`
// product.match() returns the last match criteria
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
