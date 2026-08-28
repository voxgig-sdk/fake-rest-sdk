-- Typed models for the FakeRest SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Category
---@field count? number
---@field id? number
---@field name? string

---@class CategoryListMatch
---@field count? number
---@field id? number
---@field name? string

---@class Comment
---@field avatar? string
---@field body? string
---@field createdAt? string
---@field deviceInfo? table
---@field email? string
---@field id? number
---@field isVerified? boolean
---@field likes? number
---@field location? string
---@field name? string
---@field parentCommentId? number
---@field postId? number
---@field website? string

---@class CommentListMatch
---@field avatar? string
---@field body? string
---@field createdAt? string
---@field deviceInfo? table
---@field email? string
---@field id? number
---@field isVerified? boolean
---@field likes? number
---@field location? string
---@field name? string
---@field parentCommentId? number
---@field postId? number
---@field website? string

---@class CommentCreateData
---@field avatar? string
---@field body? string
---@field createdAt? string
---@field deviceInfo? table
---@field email? string
---@field id? number
---@field isVerified? boolean
---@field likes? number
---@field location? string
---@field name? string
---@field parentCommentId? number
---@field postId? number
---@field website? string

---@class Post
---@field body? string
---@field category? string
---@field coverImage? string
---@field createdAt? string
---@field featured? boolean
---@field id? number
---@field likes? number
---@field metaDescription? string
---@field published? boolean
---@field readTime? number
---@field tags? table
---@field title? string
---@field userId? number
---@field views? number

---@class PostLoadMatch
---@field id number

---@class PostListMatch
---@field body? string
---@field category? string
---@field coverImage? string
---@field createdAt? string
---@field featured? boolean
---@field id? number
---@field likes? number
---@field metaDescription? string
---@field published? boolean
---@field readTime? number
---@field tags? table
---@field title? string
---@field userId? number
---@field views? number

---@class PostCreateData
---@field body? string
---@field category? string
---@field coverImage? string
---@field createdAt? string
---@field featured? boolean
---@field id? number
---@field likes? number
---@field metaDescription? string
---@field published? boolean
---@field readTime? number
---@field tags? table
---@field title? string
---@field userId? number
---@field views? number

---@class Product
---@field brand? string
---@field category? string
---@field description? string
---@field id? number
---@field name? string
---@field price? number
---@field rating? number
---@field reviews? number
---@field sku? string
---@field stock? number

---@class ProductLoadMatch
---@field id number

---@class ProductListMatch
---@field brand? string
---@field category? string
---@field description? string
---@field id? number
---@field name? string
---@field price? number
---@field rating? number
---@field reviews? number
---@field sku? string
---@field stock? number

---@class Todo
---@field completed? boolean
---@field createdAt? string
---@field dueDate? string
---@field id? number
---@field priority? string
---@field title? string
---@field userId? number

---@class TodoListMatch
---@field completed? boolean
---@field limit? number
---@field page? number
---@field user_id? number

---@class User
---@field address? table
---@field company? table
---@field email? string
---@field id? number
---@field name? string
---@field phone? string
---@field username? string
---@field website? string

---@class UserLoadMatch
---@field id number

---@class UserListMatch
---@field address? table
---@field company? table
---@field email? string
---@field id? number
---@field name? string
---@field phone? string
---@field username? string
---@field website? string

---@class UserCreateData
---@field address? table
---@field company? table
---@field email? string
---@field id? number
---@field name? string
---@field phone? string
---@field username? string
---@field website? string

---@class UserUpdateData
---@field id number
---@field address? table
---@field company? table
---@field email? string
---@field name? string
---@field phone? string
---@field username? string
---@field website? string

---@class UserRemoveMatch
---@field id number

local M = {}

return M
