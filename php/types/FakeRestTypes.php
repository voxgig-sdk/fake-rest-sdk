<?php
declare(strict_types=1);

// Typed models for the FakeRest SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Category entity data model. */
class Category
{
    public ?int $count = null;
    public ?int $id = null;
    public ?string $name = null;
}

/** Request payload for Category#list. */
class CategoryListMatch
{
    public ?int $count = null;
    public ?int $id = null;
    public ?string $name = null;
}

/** Comment entity data model. */
class Comment
{
    public ?string $avatar = null;
    public ?string $body = null;
    public ?string $created_at = null;
    public ?array $device_info = null;
    public ?string $email = null;
    public ?int $id = null;
    public ?bool $is_verified = null;
    public ?int $like = null;
    public ?string $location = null;
    public ?string $name = null;
    public ?int $parent_comment_id = null;
    public ?int $post_id = null;
    public ?string $website = null;
}

/** Request payload for Comment#list. */
class CommentListMatch
{
    public ?int $post_id = null;
}

/** Request payload for Comment#create. */
class CommentCreateData
{
    public ?string $avatar = null;
    public ?string $body = null;
    public ?string $created_at = null;
    public ?array $device_info = null;
    public ?string $email = null;
    public ?int $id = null;
    public ?bool $is_verified = null;
    public ?int $like = null;
    public ?string $location = null;
    public ?string $name = null;
    public ?int $parent_comment_id = null;
    public ?int $post_id = null;
    public ?string $website = null;
}

/** Post entity data model. */
class Post
{
    public ?string $body = null;
    public ?string $category = null;
    public ?string $cover_image = null;
    public ?string $created_at = null;
    public ?bool $featured = null;
    public ?int $id = null;
    public ?int $like = null;
    public ?string $meta_description = null;
    public ?bool $published = null;
    public ?int $read_time = null;
    public ?array $tag = null;
    public ?string $title = null;
    public ?int $user_id = null;
    public ?int $view = null;
}

/** Request payload for Post#load. */
class PostLoadMatch
{
    public int $id;
}

/** Request payload for Post#list. */
class PostListMatch
{
    public ?string $body = null;
    public ?string $category = null;
    public ?string $cover_image = null;
    public ?string $created_at = null;
    public ?bool $featured = null;
    public ?int $id = null;
    public ?int $like = null;
    public ?string $meta_description = null;
    public ?bool $published = null;
    public ?int $read_time = null;
    public ?array $tag = null;
    public ?string $title = null;
    public ?int $user_id = null;
    public ?int $view = null;
}

/** Request payload for Post#create. */
class PostCreateData
{
    public ?string $body = null;
    public ?string $category = null;
    public ?string $cover_image = null;
    public ?string $created_at = null;
    public ?bool $featured = null;
    public ?int $id = null;
    public ?int $like = null;
    public ?string $meta_description = null;
    public ?bool $published = null;
    public ?int $read_time = null;
    public ?array $tag = null;
    public ?string $title = null;
    public ?int $user_id = null;
    public ?int $view = null;
}

/** Product entity data model. */
class Product
{
    public ?string $brand = null;
    public ?string $category = null;
    public ?string $description = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?float $price = null;
    public ?float $rating = null;
    public ?int $review = null;
    public ?string $sku = null;
    public ?int $stock = null;
}

/** Request payload for Product#load. */
class ProductLoadMatch
{
    public int $id;
}

/** Request payload for Product#list. */
class ProductListMatch
{
    public ?string $brand = null;
    public ?string $category = null;
    public ?string $description = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?float $price = null;
    public ?float $rating = null;
    public ?int $review = null;
    public ?string $sku = null;
    public ?int $stock = null;
}

/** Todo entity data model. */
class Todo
{
    public ?bool $completed = null;
    public ?string $created_at = null;
    public ?string $due_date = null;
    public ?int $id = null;
    public ?string $priority = null;
    public ?string $title = null;
    public ?int $user_id = null;
}

/** Request payload for Todo#list. */
class TodoListMatch
{
    public ?bool $completed = null;
    public ?string $created_at = null;
    public ?string $due_date = null;
    public ?int $id = null;
    public ?string $priority = null;
    public ?string $title = null;
    public ?int $user_id = null;
}

/** User entity data model. */
class User
{
    public ?array $address = null;
    public ?array $company = null;
    public ?string $email = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?string $phone = null;
    public ?string $username = null;
    public ?string $website = null;
}

/** Request payload for User#load. */
class UserLoadMatch
{
    public int $id;
}

/** Request payload for User#list. */
class UserListMatch
{
    public ?array $address = null;
    public ?array $company = null;
    public ?string $email = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?string $phone = null;
    public ?string $username = null;
    public ?string $website = null;
}

/** Request payload for User#create. */
class UserCreateData
{
    public ?array $address = null;
    public ?array $company = null;
    public ?string $email = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?string $phone = null;
    public ?string $username = null;
    public ?string $website = null;
}

/** Request payload for User#update. */
class UserUpdateData
{
    public int $id;
}

/** Request payload for User#remove. */
class UserRemoveMatch
{
    public int $id;
}

