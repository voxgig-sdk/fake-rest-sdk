import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "category",
    "accessor": "Category",
    "op": "list",
    "method": "GET",
    "path": "/api/products/categories",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "name": "Electronics",
        "count": 15
      }
    ],
    "idField": "id"
  },
  {
    "entity": "comment",
    "accessor": "Comment",
    "op": "create",
    "method": "POST",
    "path": "/api/comments",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 201,
    "sample": {
      "id": 1,
      "postId": 1,
      "name": "id labore ex et quam laborum",
      "email": "Eliseo@gardner.biz",
      "body": "laudantium enim quasi est quidem magnam...",
      "likes": 23,
      "createdAt": "2026-01-01T00:00:00Z",
      "parentCommentId": 1,
      "isVerified": true,
      "avatar": "x",
      "website": "x",
      "location": "x",
      "replies": 1,
      "deviceInfo": {
        "platform": "x",
        "version": "x",
        "device": "x"
      },
      "updatedAt": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "comment",
    "accessor": "Comment",
    "op": "list",
    "method": "GET",
    "path": "/api/posts/{postId}/comments",
    "args": [
      {
        "name": "post_id",
        "wire": "postId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "postId": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam...",
        "likes": 23,
        "createdAt": "2026-01-01T00:00:00Z"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "comment",
    "accessor": "Comment",
    "op": "list",
    "method": "GET",
    "path": "/api/comments",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "postId": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam...",
        "likes": 23,
        "createdAt": "2026-01-01T00:00:00Z"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "post",
    "accessor": "Post",
    "op": "create",
    "method": "POST",
    "path": "/api/posts",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 201,
    "sample": {
      "id": 1,
      "title": "sunt aut facere repellat",
      "body": "quia et suscipit suscipit recusandae...",
      "userId": 1,
      "tags": [
        "sample",
        "test"
      ],
      "category": "technology",
      "published": true,
      "views": 1247,
      "likes": 89,
      "createdAt": "2026-01-01T00:00:00Z",
      "featured": true,
      "readTime": 1,
      "metaDescription": "x",
      "coverImage": "x",
      "slug": "x",
      "updatedAt": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "post",
    "accessor": "Post",
    "op": "list",
    "method": "GET",
    "path": "/api/posts",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "title": "sunt aut facere repellat",
        "body": "quia et suscipit suscipit recusandae...",
        "userId": 1,
        "tags": [
          "sample",
          "test"
        ],
        "category": "technology",
        "published": true,
        "views": 1247,
        "likes": 89,
        "createdAt": "2026-01-01T00:00:00Z"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "post",
    "accessor": "Post",
    "op": "load",
    "method": "GET",
    "path": "/api/posts/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "title": "sunt aut facere repellat",
      "body": "quia et suscipit suscipit recusandae...",
      "userId": 1,
      "tags": [
        "sample",
        "test"
      ],
      "category": "technology",
      "published": true,
      "views": 1247,
      "likes": 89,
      "createdAt": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "product",
    "accessor": "Product",
    "op": "list",
    "method": "GET",
    "path": "/api/products",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "name": "Awesome Product",
        "description": "High-quality product...",
        "price": 299.99,
        "category": "electronics",
        "brand": "TechCorp",
        "sku": "TC-AP-001",
        "stock": 45,
        "rating": 4.3,
        "reviews": 127
      }
    ],
    "idField": "id"
  },
  {
    "entity": "product",
    "accessor": "Product",
    "op": "load",
    "method": "GET",
    "path": "/api/products/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "Awesome Product",
      "description": "High-quality product...",
      "price": 299.99,
      "category": "electronics",
      "brand": "TechCorp",
      "sku": "TC-AP-001",
      "stock": 45,
      "rating": 4.3,
      "reviews": 127
    },
    "idField": "id"
  },
  {
    "entity": "todo",
    "accessor": "Todo",
    "op": "list",
    "method": "GET",
    "path": "/api/todos",
    "args": [],
    "select": {
      "completed": "v1",
      "limit": "v1",
      "page": "v1",
      "user_id": "v1"
    },
    "headers": [],
    "query": [
      "userId",
      "completed",
      "_page",
      "_limit"
    ],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "userId": 1,
        "title": "Complete project documentation",
        "completed": false,
        "priority": "high",
        "dueDate": "2026-01-01T00:00:00Z",
        "createdAt": "2026-01-01T00:00:00Z"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "create",
    "method": "POST",
    "path": "/api/users",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 201,
    "sample": {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "phone": "1-770-736-8031",
      "website": "hildegard.org",
      "address": {
        "street": "Kulas Light",
        "suite": "x",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "x",
          "lng": "x"
        }
      },
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "x"
      },
      "avatar": "x",
      "createdAt": "2026-01-01T00:00:00Z",
      "updatedAt": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "list",
    "method": "GET",
    "path": "/api/users",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "phone": "1-770-736-8031",
        "website": "hildegard.org",
        "address": {
          "street": "Kulas Light",
          "suite": "x",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "x",
            "lng": "x"
          }
        },
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "x"
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "load",
    "method": "GET",
    "path": "/api/users/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "phone": "1-770-736-8031",
      "website": "hildegard.org",
      "address": {
        "street": "Kulas Light",
        "suite": "x",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "x",
          "lng": "x"
        }
      },
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/users/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "update",
    "method": "PUT",
    "path": "/api/users/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "phone": "1-770-736-8031",
      "website": "hildegard.org",
      "address": {
        "street": "Kulas Light",
        "suite": "x",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "x",
          "lng": "x"
        }
      },
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "x"
      },
      "avatar": "x",
      "createdAt": "2026-01-01T00:00:00Z",
      "updatedAt": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
