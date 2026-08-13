# FakeRest SDK configuration


def make_config():
    return {
        "main": {
            "name": "FakeRest",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://fake-rest-api-mobile-apps.vercel.app",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "category": {},
                "comment": {},
                "post": {},
                "product": {},
                "todo": {},
                "user": {},
            },
        },
        "entity": {
      "category": {
        "fields": [
          {
            "active": True,
            "name": "count",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
        ],
        "name": "category",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/products/categories",
                "parts": [
                  "api",
                  "products",
                  "categories",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "comment": {
        "fields": [
          {
            "active": True,
            "name": "avatar",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "body",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "createdAt",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "deviceInfo",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "email",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "isVerified",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "likes",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "location",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "parentCommentId",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "postId",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "website",
            "req": False,
            "type": "`$STRING`",
            "index$": 12,
          },
        ],
        "name": "comment",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/comments",
                "parts": [
                  "api",
                  "comments",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "post_id",
                      "orig": "post_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/posts/{postId}/comments",
                "parts": [
                  "api",
                  "posts",
                  "{post_id}",
                  "comments",
                ],
                "rename": {
                  "param": {
                    "postId": "post_id",
                  },
                },
                "select": {
                  "exist": [
                    "post_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/comments",
                "parts": [
                  "api",
                  "comments",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [
            [
              "post",
            ],
          ],
        },
      },
      "post": {
        "fields": [
          {
            "active": True,
            "name": "body",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "category",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "coverImage",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "createdAt",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "featured",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "likes",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "metaDescription",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "published",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "readTime",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "tags",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "title",
            "req": False,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "userId",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "views",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 13,
          },
        ],
        "name": "post",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/posts",
                "parts": [
                  "api",
                  "posts",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/posts",
                "parts": [
                  "api",
                  "posts",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/posts/{id}",
                "parts": [
                  "api",
                  "posts",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "product": {
        "fields": [
          {
            "active": True,
            "name": "brand",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "category",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "price",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "rating",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "reviews",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "sku",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "stock",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 9,
          },
        ],
        "name": "product",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/products",
                "parts": [
                  "api",
                  "products",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/products/{id}",
                "parts": [
                  "api",
                  "products",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "todo": {
        "fields": [
          {
            "active": True,
            "name": "completed",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "createdAt",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "dueDate",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "priority",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "title",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "userId",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 6,
          },
        ],
        "name": "todo",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "completed",
                      "orig": "completed",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "user_id",
                      "orig": "user_id",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/todos",
                "parts": [
                  "api",
                  "todos",
                ],
                "select": {
                  "exist": [
                    "completed",
                    "limit",
                    "page",
                    "user_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "user": {
        "fields": [
          {
            "active": True,
            "name": "address",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "company",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "email",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "phone",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "username",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "website",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
        ],
        "name": "user",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/users",
                "parts": [
                  "api",
                  "users",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/users",
                "parts": [
                  "api",
                  "users",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/users/{id}",
                "parts": [
                  "api",
                  "users",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/api/users/{id}",
                "parts": [
                  "api",
                  "users",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "PUT",
                "orig": "/api/users/{id}",
                "parts": [
                  "api",
                  "users",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
