"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'FakeRest',
        slug: "fake-rest",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://fake-rest-api-mobile-apps.vercel.app",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            category: {},
            comment: {},
            post: {},
            product: {},
            todo: {},
            user: {},
        }
    };
    entity = {
        "category": {
            "fields": [
                {
                    "name": "count",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "category",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/products/categories",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "products"
                                },
                                {
                                    "lit": "categories"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "products",
                                "categories"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "comment": {
            "fields": [
                {
                    "format": "uri",
                    "name": "avatar",
                    "type": "`$STRING`"
                },
                {
                    "name": "body",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "createdAt",
                    "type": "`$STRING`"
                },
                {
                    "name": "deviceInfo",
                    "type": "`$OBJECT`"
                },
                {
                    "format": "email",
                    "name": "email",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "isVerified",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "likes",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "location",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "type": "`$STRING`"
                },
                {
                    "name": "parentCommentId",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "postId",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "uri",
                    "name": "website",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "comment",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/api/comments",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "comments"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "comments"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "post_id",
                                        "orig": "post_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/posts/{postId}/comments",
                            "rename": {
                                "param": {
                                    "postId": "post_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "posts"
                                },
                                {
                                    "var": "post_id"
                                },
                                {
                                    "lit": "comments"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "post_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "posts",
                                "{post_id}",
                                "comments"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/comments",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "comments"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "comments"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "post"
                    ]
                ]
            }
        },
        "post": {
            "fields": [
                {
                    "name": "body",
                    "type": "`$STRING`"
                },
                {
                    "name": "category",
                    "type": "`$STRING`"
                },
                {
                    "format": "uri",
                    "name": "coverImage",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "createdAt",
                    "type": "`$STRING`"
                },
                {
                    "name": "featured",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "likes",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "metaDescription",
                    "type": "`$STRING`"
                },
                {
                    "name": "published",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "readTime",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "tags",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "title",
                    "type": "`$STRING`"
                },
                {
                    "name": "userId",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "views",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "post",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/api/posts",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "posts"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "posts"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/posts",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "posts"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "posts"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/posts/{id}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "posts"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "posts",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "product": {
            "fields": [
                {
                    "name": "brand",
                    "type": "`$STRING`"
                },
                {
                    "name": "category",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "type": "`$STRING`"
                },
                {
                    "format": "float",
                    "name": "price",
                    "type": "`$NUMBER`"
                },
                {
                    "format": "float",
                    "name": "rating",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "reviews",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "sku",
                    "type": "`$STRING`"
                },
                {
                    "name": "stock",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "product",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/products",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "products"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "products"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/products/{id}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "products"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "products",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "todo": {
            "fields": [
                {
                    "name": "completed",
                    "type": "`$BOOLEAN`"
                },
                {
                    "format": "date-time",
                    "name": "createdAt",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "dueDate",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "priority",
                    "type": "`$STRING`"
                },
                {
                    "name": "title",
                    "type": "`$STRING`"
                },
                {
                    "name": "userId",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "todo",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "completed",
                                        "orig": "completed",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "user_id",
                                        "orig": "user_id",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/todos",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "todos"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "completed",
                                    "limit",
                                    "page",
                                    "user_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "todos"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "user": {
            "fields": [
                {
                    "name": "address",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "company",
                    "type": "`$OBJECT`"
                },
                {
                    "format": "email",
                    "name": "email",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "type": "`$STRING`"
                },
                {
                    "name": "phone",
                    "type": "`$STRING`"
                },
                {
                    "name": "username",
                    "type": "`$STRING`"
                },
                {
                    "name": "website",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "user",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/api/users",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "users"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "users"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/users",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "users"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "users"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/users/{id}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "users"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "users",
                                "{id}"
                            ]
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/api/users/{id}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "users"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "users",
                                "{id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/api/users/{id}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "users"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "users",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map