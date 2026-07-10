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
---@field created_at? string
---@field device_info? table
---@field email? string
---@field id? number
---@field is_verified? boolean
---@field like? number
---@field location? string
---@field name? string
---@field parent_comment_id? number
---@field post_id? number
---@field website? string

---@class CommentListMatch
---@field post_id? number

---@class CommentCreateData
---@field avatar? string
---@field body? string
---@field created_at? string
---@field device_info? table
---@field email? string
---@field id? number
---@field is_verified? boolean
---@field like? number
---@field location? string
---@field name? string
---@field parent_comment_id? number
---@field post_id? number
---@field website? string

---@class Post
---@field body? string
---@field category? string
---@field cover_image? string
---@field created_at? string
---@field featured? boolean
---@field id? number
---@field like? number
---@field meta_description? string
---@field published? boolean
---@field read_time? number
---@field tag? table
---@field title? string
---@field user_id? number
---@field view? number

---@class PostLoadMatch
---@field id number

---@class PostListMatch
---@field body? string
---@field category? string
---@field cover_image? string
---@field created_at? string
---@field featured? boolean
---@field id? number
---@field like? number
---@field meta_description? string
---@field published? boolean
---@field read_time? number
---@field tag? table
---@field title? string
---@field user_id? number
---@field view? number

---@class PostCreateData
---@field body? string
---@field category? string
---@field cover_image? string
---@field created_at? string
---@field featured? boolean
---@field id? number
---@field like? number
---@field meta_description? string
---@field published? boolean
---@field read_time? number
---@field tag? table
---@field title? string
---@field user_id? number
---@field view? number

---@class Product
---@field brand? string
---@field category? string
---@field description? string
---@field id? number
---@field name? string
---@field price? number
---@field rating? number
---@field review? number
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
---@field review? number
---@field sku? string
---@field stock? number

---@class Todo
---@field completed? boolean
---@field created_at? string
---@field due_date? string
---@field id? number
---@field priority? string
---@field title? string
---@field user_id? number

---@class TodoListMatch
---@field completed? boolean
---@field created_at? string
---@field due_date? string
---@field id? number
---@field priority? string
---@field title? string
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

---@class UserRemoveMatch
---@field id number

local M = {}

return M
