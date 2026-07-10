// Typed models for the FakeRest SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Category {
  count?: number
  id?: number
  name?: string
}

export interface CategoryListMatch {
  count?: number
  id?: number
  name?: string
}

export interface Comment {
  avatar?: string
  body?: string
  created_at?: string
  device_info?: Record<string, any>
  email?: string
  id?: number
  is_verified?: boolean
  like?: number
  location?: string
  name?: string
  parent_comment_id?: number
  post_id?: number
  website?: string
}

export interface CommentListMatch {
  post_id?: number
}

export interface CommentCreateData {
  avatar?: string
  body?: string
  created_at?: string
  device_info?: Record<string, any>
  email?: string
  id?: number
  is_verified?: boolean
  like?: number
  location?: string
  name?: string
  parent_comment_id?: number
  post_id?: number
  website?: string
}

export interface Post {
  body?: string
  category?: string
  cover_image?: string
  created_at?: string
  featured?: boolean
  id?: number
  like?: number
  meta_description?: string
  published?: boolean
  read_time?: number
  tag?: any[]
  title?: string
  user_id?: number
  view?: number
}

export interface PostLoadMatch {
  id: number
}

export interface PostListMatch {
  body?: string
  category?: string
  cover_image?: string
  created_at?: string
  featured?: boolean
  id?: number
  like?: number
  meta_description?: string
  published?: boolean
  read_time?: number
  tag?: any[]
  title?: string
  user_id?: number
  view?: number
}

export interface PostCreateData {
  body?: string
  category?: string
  cover_image?: string
  created_at?: string
  featured?: boolean
  id?: number
  like?: number
  meta_description?: string
  published?: boolean
  read_time?: number
  tag?: any[]
  title?: string
  user_id?: number
  view?: number
}

export interface Product {
  brand?: string
  category?: string
  description?: string
  id?: number
  name?: string
  price?: number
  rating?: number
  review?: number
  sku?: string
  stock?: number
}

export interface ProductLoadMatch {
  id: number
}

export interface ProductListMatch {
  brand?: string
  category?: string
  description?: string
  id?: number
  name?: string
  price?: number
  rating?: number
  review?: number
  sku?: string
  stock?: number
}

export interface Todo {
  completed?: boolean
  created_at?: string
  due_date?: string
  id?: number
  priority?: string
  title?: string
  user_id?: number
}

export interface TodoListMatch {
  completed?: boolean
  created_at?: string
  due_date?: string
  id?: number
  priority?: string
  title?: string
  user_id?: number
}

export interface User {
  address?: Record<string, any>
  company?: Record<string, any>
  email?: string
  id?: number
  name?: string
  phone?: string
  username?: string
  website?: string
}

export interface UserLoadMatch {
  id: number
}

export interface UserListMatch {
  address?: Record<string, any>
  company?: Record<string, any>
  email?: string
  id?: number
  name?: string
  phone?: string
  username?: string
  website?: string
}

export interface UserCreateData {
  address?: Record<string, any>
  company?: Record<string, any>
  email?: string
  id?: number
  name?: string
  phone?: string
  username?: string
  website?: string
}

export interface UserUpdateData {
  id: number
}

export interface UserRemoveMatch {
  id: number
}

