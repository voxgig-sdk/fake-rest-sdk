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
  createdAt?: string
  deviceInfo?: Record<string, any>
  email?: string
  id?: number
  isVerified?: boolean
  likes?: number
  location?: string
  name?: string
  parentCommentId?: number
  postId?: number
  website?: string
}

export interface CommentListMatch {
  post_id?: number
}

export interface CommentCreateData {
  avatar?: string
  body?: string
  createdAt?: string
  deviceInfo?: Record<string, any>
  email?: string
  id?: number
  isVerified?: boolean
  likes?: number
  location?: string
  name?: string
  parentCommentId?: number
  postId?: number
  website?: string
}

export interface Post {
  body?: string
  category?: string
  coverImage?: string
  createdAt?: string
  featured?: boolean
  id?: number
  likes?: number
  metaDescription?: string
  published?: boolean
  readTime?: number
  tags?: any[]
  title?: string
  userId?: number
  views?: number
}

export interface PostLoadMatch {
  id: number
}

export interface PostListMatch {
  body?: string
  category?: string
  coverImage?: string
  createdAt?: string
  featured?: boolean
  id?: number
  likes?: number
  metaDescription?: string
  published?: boolean
  readTime?: number
  tags?: any[]
  title?: string
  userId?: number
  views?: number
}

export interface PostCreateData {
  body?: string
  category?: string
  coverImage?: string
  createdAt?: string
  featured?: boolean
  id?: number
  likes?: number
  metaDescription?: string
  published?: boolean
  readTime?: number
  tags?: any[]
  title?: string
  userId?: number
  views?: number
}

export interface Product {
  brand?: string
  category?: string
  description?: string
  id?: number
  name?: string
  price?: number
  rating?: number
  reviews?: number
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
  reviews?: number
  sku?: string
  stock?: number
}

export interface Todo {
  completed?: boolean
  createdAt?: string
  dueDate?: string
  id?: number
  priority?: string
  title?: string
  userId?: number
}

export interface TodoListMatch {
  completed?: boolean
  createdAt?: string
  dueDate?: string
  id?: number
  priority?: string
  title?: string
  userId?: number
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
  address?: Record<string, any>
  company?: Record<string, any>
  email?: string
  name?: string
  phone?: string
  username?: string
  website?: string
}

export interface UserRemoveMatch {
  id: number
}

