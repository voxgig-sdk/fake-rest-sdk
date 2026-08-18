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
    createdAt: str
    deviceInfo: dict
    email: str
    id: int
    isVerified: bool
    likes: int
    location: str
    name: str
    parentCommentId: int
    postId: int
    website: str


class CommentListMatch(TypedDict, total=False):
    avatar: str
    body: str
    createdAt: str
    deviceInfo: dict
    email: str
    id: int
    isVerified: bool
    likes: int
    location: str
    name: str
    parentCommentId: int
    postId: int
    website: str


class CommentCreateData(TypedDict, total=False):
    avatar: str
    body: str
    createdAt: str
    deviceInfo: dict
    email: str
    id: int
    isVerified: bool
    likes: int
    location: str
    name: str
    parentCommentId: int
    postId: int
    website: str


class Post(TypedDict, total=False):
    body: str
    category: str
    coverImage: str
    createdAt: str
    featured: bool
    id: int
    likes: int
    metaDescription: str
    published: bool
    readTime: int
    tags: list
    title: str
    userId: int
    views: int


class PostLoadMatch(TypedDict):
    id: int


class PostListMatch(TypedDict, total=False):
    body: str
    category: str
    coverImage: str
    createdAt: str
    featured: bool
    id: int
    likes: int
    metaDescription: str
    published: bool
    readTime: int
    tags: list
    title: str
    userId: int
    views: int


class PostCreateData(TypedDict, total=False):
    body: str
    category: str
    coverImage: str
    createdAt: str
    featured: bool
    id: int
    likes: int
    metaDescription: str
    published: bool
    readTime: int
    tags: list
    title: str
    userId: int
    views: int


class Product(TypedDict, total=False):
    brand: str
    category: str
    description: str
    id: int
    name: str
    price: float
    rating: float
    reviews: int
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
    reviews: int
    sku: str
    stock: int


class Todo(TypedDict, total=False):
    completed: bool
    createdAt: str
    dueDate: str
    id: int
    priority: str
    title: str
    userId: int


class TodoListMatch(TypedDict, total=False):
    completed: bool
    createdAt: str
    dueDate: str
    id: int
    priority: str
    title: str
    userId: int


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


class UserUpdateDataRequired(TypedDict):
    id: int


class UserUpdateData(UserUpdateDataRequired, total=False):
    address: dict
    company: dict
    email: str
    name: str
    phone: str
    username: str
    website: str


class UserRemoveMatch(TypedDict):
    id: int
