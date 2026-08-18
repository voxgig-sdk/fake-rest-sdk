-- FakeRest SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "FakeRest",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://fake-rest-api-mobile-apps.vercel.app",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["category"] = {},
        ["comment"] = {},
        ["post"] = {},
        ["product"] = {},
        ["todo"] = {},
        ["user"] = {},
      },
    },
    entity = {
      ["category"] = {
        ["fields"] = {
          {
            ["name"] = "count",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "category",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/products/categories",
                ["parts"] = {
                  "api",
                  "products",
                  "categories",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["comment"] = {
        ["fields"] = {
          {
            ["name"] = "avatar",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "body",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "createdAt",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "deviceInfo",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "email",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "isVerified",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "likes",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "location",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "parentCommentId",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "postId",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "website",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "comment",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/comments",
                ["parts"] = {
                  "api",
                  "comments",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "post_id",
                      ["orig"] = "post_id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/posts/{postId}/comments",
                ["parts"] = {
                  "api",
                  "posts",
                  "{post_id}",
                  "comments",
                },
                ["rename"] = {
                  ["param"] = {
                    ["postId"] = "post_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "post_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/comments",
                ["parts"] = {
                  "api",
                  "comments",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "post",
            },
          },
        },
      },
      ["post"] = {
        ["fields"] = {
          {
            ["name"] = "body",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "category",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "coverImage",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "createdAt",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "featured",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "likes",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "metaDescription",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "published",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "readTime",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "tags",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "title",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "userId",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "views",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "post",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/posts",
                ["parts"] = {
                  "api",
                  "posts",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/posts",
                ["parts"] = {
                  "api",
                  "posts",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/posts/{id}",
                ["parts"] = {
                  "api",
                  "posts",
                  "{id}",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["product"] = {
        ["fields"] = {
          {
            ["name"] = "brand",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "category",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "price",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "rating",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "reviews",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "sku",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "stock",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "product",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/products",
                ["parts"] = {
                  "api",
                  "products",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/products/{id}",
                ["parts"] = {
                  "api",
                  "products",
                  "{id}",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["todo"] = {
        ["fields"] = {
          {
            ["name"] = "completed",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "createdAt",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "dueDate",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "priority",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "userId",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "todo",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "completed",
                      ["orig"] = "completed",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "user_id",
                      ["orig"] = "user_id",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/todos",
                ["parts"] = {
                  "api",
                  "todos",
                },
                ["select"] = {
                  ["exist"] = {
                    "completed",
                    "limit",
                    "page",
                    "user_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["user"] = {
        ["fields"] = {
          {
            ["name"] = "address",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "company",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "email",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "phone",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "username",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "website",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "user",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/users",
                ["parts"] = {
                  "api",
                  "users",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/users",
                ["parts"] = {
                  "api",
                  "users",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/users/{id}",
                ["parts"] = {
                  "api",
                  "users",
                  "{id}",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/api/users/{id}",
                ["parts"] = {
                  "api",
                  "users",
                  "{id}",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/api/users/{id}",
                ["parts"] = {
                  "api",
                  "users",
                  "{id}",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
