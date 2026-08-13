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
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] deviceInfo
#   @return [Hash, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] isVerified
#   @return [Boolean, nil]
#
# @!attribute [rw] likes
#   @return [Integer, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] parentCommentId
#   @return [Integer, nil]
#
# @!attribute [rw] postId
#   @return [Integer, nil]
#
# @!attribute [rw] website
#   @return [String, nil]
Comment = Struct.new(
  :avatar,
  :body,
  :createdAt,
  :deviceInfo,
  :email,
  :id,
  :isVerified,
  :likes,
  :location,
  :name,
  :parentCommentId,
  :postId,
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
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] deviceInfo
#   @return [Hash, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] isVerified
#   @return [Boolean, nil]
#
# @!attribute [rw] likes
#   @return [Integer, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] parentCommentId
#   @return [Integer, nil]
#
# @!attribute [rw] postId
#   @return [Integer, nil]
#
# @!attribute [rw] website
#   @return [String, nil]
CommentCreateData = Struct.new(
  :avatar,
  :body,
  :createdAt,
  :deviceInfo,
  :email,
  :id,
  :isVerified,
  :likes,
  :location,
  :name,
  :parentCommentId,
  :postId,
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
# @!attribute [rw] coverImage
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] featured
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] likes
#   @return [Integer, nil]
#
# @!attribute [rw] metaDescription
#   @return [String, nil]
#
# @!attribute [rw] published
#   @return [Boolean, nil]
#
# @!attribute [rw] readTime
#   @return [Integer, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] userId
#   @return [Integer, nil]
#
# @!attribute [rw] views
#   @return [Integer, nil]
Post = Struct.new(
  :body,
  :category,
  :coverImage,
  :createdAt,
  :featured,
  :id,
  :likes,
  :metaDescription,
  :published,
  :readTime,
  :tags,
  :title,
  :userId,
  :views,
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
# @!attribute [rw] coverImage
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] featured
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] likes
#   @return [Integer, nil]
#
# @!attribute [rw] metaDescription
#   @return [String, nil]
#
# @!attribute [rw] published
#   @return [Boolean, nil]
#
# @!attribute [rw] readTime
#   @return [Integer, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] userId
#   @return [Integer, nil]
#
# @!attribute [rw] views
#   @return [Integer, nil]
PostListMatch = Struct.new(
  :body,
  :category,
  :coverImage,
  :createdAt,
  :featured,
  :id,
  :likes,
  :metaDescription,
  :published,
  :readTime,
  :tags,
  :title,
  :userId,
  :views,
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
# @!attribute [rw] coverImage
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] featured
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] likes
#   @return [Integer, nil]
#
# @!attribute [rw] metaDescription
#   @return [String, nil]
#
# @!attribute [rw] published
#   @return [Boolean, nil]
#
# @!attribute [rw] readTime
#   @return [Integer, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] userId
#   @return [Integer, nil]
#
# @!attribute [rw] views
#   @return [Integer, nil]
PostCreateData = Struct.new(
  :body,
  :category,
  :coverImage,
  :createdAt,
  :featured,
  :id,
  :likes,
  :metaDescription,
  :published,
  :readTime,
  :tags,
  :title,
  :userId,
  :views,
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
# @!attribute [rw] reviews
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
  :reviews,
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
# @!attribute [rw] reviews
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
  :reviews,
  :sku,
  :stock,
  keyword_init: true
)

# Todo entity data model.
#
# @!attribute [rw] completed
#   @return [Boolean, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] dueDate
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
# @!attribute [rw] userId
#   @return [Integer, nil]
Todo = Struct.new(
  :completed,
  :createdAt,
  :dueDate,
  :id,
  :priority,
  :title,
  :userId,
  keyword_init: true
)

# Request payload for Todo#list.
#
# @!attribute [rw] completed
#   @return [Boolean, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] dueDate
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
# @!attribute [rw] userId
#   @return [Integer, nil]
TodoListMatch = Struct.new(
  :completed,
  :createdAt,
  :dueDate,
  :id,
  :priority,
  :title,
  :userId,
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
UserUpdateData = Struct.new(
  :id,
  :address,
  :company,
  :email,
  :name,
  :phone,
  :username,
  :website,
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

