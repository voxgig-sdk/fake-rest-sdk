# frozen_string_literal: true

# Typed models for the FakeRest SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Category entity data model.
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
Category = Struct.new(
  :count,
  :id,
  :name,
  keyword_init: true
)

# Request payload for Category#list.
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
CategoryListMatch = Struct.new(
  :count,
  :id,
  :name,
  keyword_init: true
)

# Comment entity data model.
#
# @!attribute [rw] avatar
#   @return [String, nil]
#
# @!attribute [rw] body
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] device_info
#   @return [Hash, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] is_verified
#   @return [Boolean, nil]
#
# @!attribute [rw] like
#   @return [Integer, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] parent_comment_id
#   @return [Integer, nil]
#
# @!attribute [rw] post_id
#   @return [Integer, nil]
#
# @!attribute [rw] website
#   @return [String, nil]
Comment = Struct.new(
  :avatar,
  :body,
  :created_at,
  :device_info,
  :email,
  :id,
  :is_verified,
  :like,
  :location,
  :name,
  :parent_comment_id,
  :post_id,
  :website,
  keyword_init: true
)

# Request payload for Comment#list.
#
# @!attribute [rw] post_id
#   @return [Integer, nil]
CommentListMatch = Struct.new(
  :post_id,
  keyword_init: true
)

# Request payload for Comment#create.
#
# @!attribute [rw] avatar
#   @return [String, nil]
#
# @!attribute [rw] body
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] device_info
#   @return [Hash, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] is_verified
#   @return [Boolean, nil]
#
# @!attribute [rw] like
#   @return [Integer, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] parent_comment_id
#   @return [Integer, nil]
#
# @!attribute [rw] post_id
#   @return [Integer, nil]
#
# @!attribute [rw] website
#   @return [String, nil]
CommentCreateData = Struct.new(
  :avatar,
  :body,
  :created_at,
  :device_info,
  :email,
  :id,
  :is_verified,
  :like,
  :location,
  :name,
  :parent_comment_id,
  :post_id,
  :website,
  keyword_init: true
)

# Post entity data model.
#
# @!attribute [rw] body
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] cover_image
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] featured
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] like
#   @return [Integer, nil]
#
# @!attribute [rw] meta_description
#   @return [String, nil]
#
# @!attribute [rw] published
#   @return [Boolean, nil]
#
# @!attribute [rw] read_time
#   @return [Integer, nil]
#
# @!attribute [rw] tag
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [Integer, nil]
#
# @!attribute [rw] view
#   @return [Integer, nil]
Post = Struct.new(
  :body,
  :category,
  :cover_image,
  :created_at,
  :featured,
  :id,
  :like,
  :meta_description,
  :published,
  :read_time,
  :tag,
  :title,
  :user_id,
  :view,
  keyword_init: true
)

# Request payload for Post#load.
#
# @!attribute [rw] id
#   @return [Integer]
PostLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Post#list.
#
# @!attribute [rw] body
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] cover_image
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] featured
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] like
#   @return [Integer, nil]
#
# @!attribute [rw] meta_description
#   @return [String, nil]
#
# @!attribute [rw] published
#   @return [Boolean, nil]
#
# @!attribute [rw] read_time
#   @return [Integer, nil]
#
# @!attribute [rw] tag
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [Integer, nil]
#
# @!attribute [rw] view
#   @return [Integer, nil]
PostListMatch = Struct.new(
  :body,
  :category,
  :cover_image,
  :created_at,
  :featured,
  :id,
  :like,
  :meta_description,
  :published,
  :read_time,
  :tag,
  :title,
  :user_id,
  :view,
  keyword_init: true
)

# Request payload for Post#create.
#
# @!attribute [rw] body
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] cover_image
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] featured
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] like
#   @return [Integer, nil]
#
# @!attribute [rw] meta_description
#   @return [String, nil]
#
# @!attribute [rw] published
#   @return [Boolean, nil]
#
# @!attribute [rw] read_time
#   @return [Integer, nil]
#
# @!attribute [rw] tag
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [Integer, nil]
#
# @!attribute [rw] view
#   @return [Integer, nil]
PostCreateData = Struct.new(
  :body,
  :category,
  :cover_image,
  :created_at,
  :featured,
  :id,
  :like,
  :meta_description,
  :published,
  :read_time,
  :tag,
  :title,
  :user_id,
  :view,
  keyword_init: true
)

# Product entity data model.
#
# @!attribute [rw] brand
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] price
#   @return [Float, nil]
#
# @!attribute [rw] rating
#   @return [Float, nil]
#
# @!attribute [rw] review
#   @return [Integer, nil]
#
# @!attribute [rw] sku
#   @return [String, nil]
#
# @!attribute [rw] stock
#   @return [Integer, nil]
Product = Struct.new(
  :brand,
  :category,
  :description,
  :id,
  :name,
  :price,
  :rating,
  :review,
  :sku,
  :stock,
  keyword_init: true
)

# Request payload for Product#load.
#
# @!attribute [rw] id
#   @return [Integer]
ProductLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Product#list.
#
# @!attribute [rw] brand
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] price
#   @return [Float, nil]
#
# @!attribute [rw] rating
#   @return [Float, nil]
#
# @!attribute [rw] review
#   @return [Integer, nil]
#
# @!attribute [rw] sku
#   @return [String, nil]
#
# @!attribute [rw] stock
#   @return [Integer, nil]
ProductListMatch = Struct.new(
  :brand,
  :category,
  :description,
  :id,
  :name,
  :price,
  :rating,
  :review,
  :sku,
  :stock,
  keyword_init: true
)

# Todo entity data model.
#
# @!attribute [rw] completed
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] due_date
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] priority
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [Integer, nil]
Todo = Struct.new(
  :completed,
  :created_at,
  :due_date,
  :id,
  :priority,
  :title,
  :user_id,
  keyword_init: true
)

# Request payload for Todo#list.
#
# @!attribute [rw] completed
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] due_date
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] priority
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [Integer, nil]
TodoListMatch = Struct.new(
  :completed,
  :created_at,
  :due_date,
  :id,
  :priority,
  :title,
  :user_id,
  keyword_init: true
)

# User entity data model.
#
# @!attribute [rw] address
#   @return [Hash, nil]
#
# @!attribute [rw] company
#   @return [Hash, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] phone
#   @return [String, nil]
#
# @!attribute [rw] username
#   @return [String, nil]
#
# @!attribute [rw] website
#   @return [String, nil]
User = Struct.new(
  :address,
  :company,
  :email,
  :id,
  :name,
  :phone,
  :username,
  :website,
  keyword_init: true
)

# Request payload for User#load.
#
# @!attribute [rw] id
#   @return [Integer]
UserLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for User#list.
#
# @!attribute [rw] address
#   @return [Hash, nil]
#
# @!attribute [rw] company
#   @return [Hash, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] phone
#   @return [String, nil]
#
# @!attribute [rw] username
#   @return [String, nil]
#
# @!attribute [rw] website
#   @return [String, nil]
UserListMatch = Struct.new(
  :address,
  :company,
  :email,
  :id,
  :name,
  :phone,
  :username,
  :website,
  keyword_init: true
)

# Request payload for User#create.
#
# @!attribute [rw] address
#   @return [Hash, nil]
#
# @!attribute [rw] company
#   @return [Hash, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] phone
#   @return [String, nil]
#
# @!attribute [rw] username
#   @return [String, nil]
#
# @!attribute [rw] website
#   @return [String, nil]
UserCreateData = Struct.new(
  :address,
  :company,
  :email,
  :id,
  :name,
  :phone,
  :username,
  :website,
  keyword_init: true
)

# Request payload for User#update.
#
# @!attribute [rw] id
#   @return [Integer]
UserUpdateData = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for User#remove.
#
# @!attribute [rw] id
#   @return [Integer]
UserRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

