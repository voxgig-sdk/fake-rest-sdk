# Typed models for the FakeRest SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Category:
    count: Optional[int] = None
    id: Optional[int] = None
    name: Optional[str] = None


@dataclass
class CategoryListMatch:
    count: Optional[int] = None
    id: Optional[int] = None
    name: Optional[str] = None


@dataclass
class Comment:
    avatar: Optional[str] = None
    body: Optional[str] = None
    created_at: Optional[str] = None
    device_info: Optional[dict] = None
    email: Optional[str] = None
    id: Optional[int] = None
    is_verified: Optional[bool] = None
    like: Optional[int] = None
    location: Optional[str] = None
    name: Optional[str] = None
    parent_comment_id: Optional[int] = None
    post_id: Optional[int] = None
    website: Optional[str] = None


@dataclass
class CommentListMatch:
    post_id: int


@dataclass
class CommentCreateData:
    avatar: Optional[str] = None
    body: Optional[str] = None
    created_at: Optional[str] = None
    device_info: Optional[dict] = None
    email: Optional[str] = None
    id: Optional[int] = None
    is_verified: Optional[bool] = None
    like: Optional[int] = None
    location: Optional[str] = None
    name: Optional[str] = None
    parent_comment_id: Optional[int] = None
    post_id: Optional[int] = None
    website: Optional[str] = None


@dataclass
class Post:
    body: Optional[str] = None
    category: Optional[str] = None
    cover_image: Optional[str] = None
    created_at: Optional[str] = None
    featured: Optional[bool] = None
    id: Optional[int] = None
    like: Optional[int] = None
    meta_description: Optional[str] = None
    published: Optional[bool] = None
    read_time: Optional[int] = None
    tag: Optional[list] = None
    title: Optional[str] = None
    user_id: Optional[int] = None
    view: Optional[int] = None


@dataclass
class PostLoadMatch:
    id: int


@dataclass
class PostListMatch:
    body: Optional[str] = None
    category: Optional[str] = None
    cover_image: Optional[str] = None
    created_at: Optional[str] = None
    featured: Optional[bool] = None
    id: Optional[int] = None
    like: Optional[int] = None
    meta_description: Optional[str] = None
    published: Optional[bool] = None
    read_time: Optional[int] = None
    tag: Optional[list] = None
    title: Optional[str] = None
    user_id: Optional[int] = None
    view: Optional[int] = None


@dataclass
class PostCreateData:
    body: Optional[str] = None
    category: Optional[str] = None
    cover_image: Optional[str] = None
    created_at: Optional[str] = None
    featured: Optional[bool] = None
    id: Optional[int] = None
    like: Optional[int] = None
    meta_description: Optional[str] = None
    published: Optional[bool] = None
    read_time: Optional[int] = None
    tag: Optional[list] = None
    title: Optional[str] = None
    user_id: Optional[int] = None
    view: Optional[int] = None


@dataclass
class Product:
    brand: Optional[str] = None
    category: Optional[str] = None
    description: Optional[str] = None
    id: Optional[int] = None
    name: Optional[str] = None
    price: Optional[float] = None
    rating: Optional[float] = None
    review: Optional[int] = None
    sku: Optional[str] = None
    stock: Optional[int] = None


@dataclass
class ProductLoadMatch:
    id: int


@dataclass
class ProductListMatch:
    brand: Optional[str] = None
    category: Optional[str] = None
    description: Optional[str] = None
    id: Optional[int] = None
    name: Optional[str] = None
    price: Optional[float] = None
    rating: Optional[float] = None
    review: Optional[int] = None
    sku: Optional[str] = None
    stock: Optional[int] = None


@dataclass
class Todo:
    completed: Optional[bool] = None
    created_at: Optional[str] = None
    due_date: Optional[str] = None
    id: Optional[int] = None
    priority: Optional[str] = None
    title: Optional[str] = None
    user_id: Optional[int] = None


@dataclass
class TodoListMatch:
    completed: Optional[bool] = None
    created_at: Optional[str] = None
    due_date: Optional[str] = None
    id: Optional[int] = None
    priority: Optional[str] = None
    title: Optional[str] = None
    user_id: Optional[int] = None


@dataclass
class User:
    address: Optional[dict] = None
    company: Optional[dict] = None
    email: Optional[str] = None
    id: Optional[int] = None
    name: Optional[str] = None
    phone: Optional[str] = None
    username: Optional[str] = None
    website: Optional[str] = None


@dataclass
class UserLoadMatch:
    id: int


@dataclass
class UserListMatch:
    address: Optional[dict] = None
    company: Optional[dict] = None
    email: Optional[str] = None
    id: Optional[int] = None
    name: Optional[str] = None
    phone: Optional[str] = None
    username: Optional[str] = None
    website: Optional[str] = None


@dataclass
class UserCreateData:
    address: Optional[dict] = None
    company: Optional[dict] = None
    email: Optional[str] = None
    id: Optional[int] = None
    name: Optional[str] = None
    phone: Optional[str] = None
    username: Optional[str] = None
    website: Optional[str] = None


@dataclass
class UserUpdateData:
    id: int


@dataclass
class UserRemoveMatch:
    id: int

