# Typed models for the FakeRest SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Category(TypedDict, total=False):
    count: int
    id: int
    name: str


class CategoryListMatch(TypedDict, total=False):
    count: int
    id: int
    name: str


class Comment(TypedDict, total=False):
    avatar: str
    body: str
    created_at: str
    device_info: dict
    email: str
    id: int
    is_verified: bool
    like: int
    location: str
    name: str
    parent_comment_id: int
    post_id: int
    website: str


class CommentListMatch(TypedDict):
    post_id: int


class CommentCreateData(TypedDict, total=False):
    avatar: str
    body: str
    created_at: str
    device_info: dict
    email: str
    id: int
    is_verified: bool
    like: int
    location: str
    name: str
    parent_comment_id: int
    post_id: int
    website: str


class Post(TypedDict, total=False):
    body: str
    category: str
    cover_image: str
    created_at: str
    featured: bool
    id: int
    like: int
    meta_description: str
    published: bool
    read_time: int
    tag: list
    title: str
    user_id: int
    view: int


class PostLoadMatch(TypedDict):
    id: int


class PostListMatch(TypedDict, total=False):
    body: str
    category: str
    cover_image: str
    created_at: str
    featured: bool
    id: int
    like: int
    meta_description: str
    published: bool
    read_time: int
    tag: list
    title: str
    user_id: int
    view: int


class PostCreateData(TypedDict, total=False):
    body: str
    category: str
    cover_image: str
    created_at: str
    featured: bool
    id: int
    like: int
    meta_description: str
    published: bool
    read_time: int
    tag: list
    title: str
    user_id: int
    view: int


class Product(TypedDict, total=False):
    brand: str
    category: str
    description: str
    id: int
    name: str
    price: float
    rating: float
    review: int
    sku: str
    stock: int


class ProductLoadMatch(TypedDict):
    id: int


class ProductListMatch(TypedDict, total=False):
    brand: str
    category: str
    description: str
    id: int
    name: str
    price: float
    rating: float
    review: int
    sku: str
    stock: int


class Todo(TypedDict, total=False):
    completed: bool
    created_at: str
    due_date: str
    id: int
    priority: str
    title: str
    user_id: int


class TodoListMatch(TypedDict, total=False):
    completed: bool
    created_at: str
    due_date: str
    id: int
    priority: str
    title: str
    user_id: int


class User(TypedDict, total=False):
    address: dict
    company: dict
    email: str
    id: int
    name: str
    phone: str
    username: str
    website: str


class UserLoadMatch(TypedDict):
    id: int


class UserListMatch(TypedDict, total=False):
    address: dict
    company: dict
    email: str
    id: int
    name: str
    phone: str
    username: str
    website: str


class UserCreateData(TypedDict, total=False):
    address: dict
    company: dict
    email: str
    id: int
    name: str
    phone: str
    username: str
    website: str


class UserUpdateData(TypedDict):
    id: int


class UserRemoveMatch(TypedDict):
    id: int
