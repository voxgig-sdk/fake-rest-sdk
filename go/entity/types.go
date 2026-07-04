// Typed models for the FakeRest SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Category is the typed data model for the category entity.
type Category struct {
	Count *int `json:"count,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

// CategoryListMatch mirrors the category fields as an all-optional match
// filter (Go analog of Partial<Category>).
type CategoryListMatch struct {
	Count *int `json:"count,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

// Comment is the typed data model for the comment entity.
type Comment struct {
	Avatar *string `json:"avatar,omitempty"`
	Body *string `json:"body,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DeviceInfo *map[string]any `json:"device_info,omitempty"`
	Email *string `json:"email,omitempty"`
	Id *int `json:"id,omitempty"`
	IsVerified *bool `json:"is_verified,omitempty"`
	Like *int `json:"like,omitempty"`
	Location *string `json:"location,omitempty"`
	Name *string `json:"name,omitempty"`
	ParentCommentId *int `json:"parent_comment_id,omitempty"`
	PostId *int `json:"post_id,omitempty"`
	Website *string `json:"website,omitempty"`
}

// CommentListMatch is the typed request payload for Comment.ListTyped.
type CommentListMatch struct {
	PostId int `json:"post_id"`
}

// CommentCreateData mirrors the comment fields as an all-optional match
// filter (Go analog of Partial<Comment>).
type CommentCreateData struct {
	Avatar *string `json:"avatar,omitempty"`
	Body *string `json:"body,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DeviceInfo *map[string]any `json:"device_info,omitempty"`
	Email *string `json:"email,omitempty"`
	Id *int `json:"id,omitempty"`
	IsVerified *bool `json:"is_verified,omitempty"`
	Like *int `json:"like,omitempty"`
	Location *string `json:"location,omitempty"`
	Name *string `json:"name,omitempty"`
	ParentCommentId *int `json:"parent_comment_id,omitempty"`
	PostId *int `json:"post_id,omitempty"`
	Website *string `json:"website,omitempty"`
}

// Post is the typed data model for the post entity.
type Post struct {
	Body *string `json:"body,omitempty"`
	Category *string `json:"category,omitempty"`
	CoverImage *string `json:"cover_image,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Featured *bool `json:"featured,omitempty"`
	Id *int `json:"id,omitempty"`
	Like *int `json:"like,omitempty"`
	MetaDescription *string `json:"meta_description,omitempty"`
	Published *bool `json:"published,omitempty"`
	ReadTime *int `json:"read_time,omitempty"`
	Tag *[]any `json:"tag,omitempty"`
	Title *string `json:"title,omitempty"`
	UserId *int `json:"user_id,omitempty"`
	View *int `json:"view,omitempty"`
}

// PostLoadMatch is the typed request payload for Post.LoadTyped.
type PostLoadMatch struct {
	Id int `json:"id"`
}

// PostListMatch mirrors the post fields as an all-optional match
// filter (Go analog of Partial<Post>).
type PostListMatch struct {
	Body *string `json:"body,omitempty"`
	Category *string `json:"category,omitempty"`
	CoverImage *string `json:"cover_image,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Featured *bool `json:"featured,omitempty"`
	Id *int `json:"id,omitempty"`
	Like *int `json:"like,omitempty"`
	MetaDescription *string `json:"meta_description,omitempty"`
	Published *bool `json:"published,omitempty"`
	ReadTime *int `json:"read_time,omitempty"`
	Tag *[]any `json:"tag,omitempty"`
	Title *string `json:"title,omitempty"`
	UserId *int `json:"user_id,omitempty"`
	View *int `json:"view,omitempty"`
}

// PostCreateData mirrors the post fields as an all-optional match
// filter (Go analog of Partial<Post>).
type PostCreateData struct {
	Body *string `json:"body,omitempty"`
	Category *string `json:"category,omitempty"`
	CoverImage *string `json:"cover_image,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Featured *bool `json:"featured,omitempty"`
	Id *int `json:"id,omitempty"`
	Like *int `json:"like,omitempty"`
	MetaDescription *string `json:"meta_description,omitempty"`
	Published *bool `json:"published,omitempty"`
	ReadTime *int `json:"read_time,omitempty"`
	Tag *[]any `json:"tag,omitempty"`
	Title *string `json:"title,omitempty"`
	UserId *int `json:"user_id,omitempty"`
	View *int `json:"view,omitempty"`
}

// Product is the typed data model for the product entity.
type Product struct {
	Brand *string `json:"brand,omitempty"`
	Category *string `json:"category,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Price *float64 `json:"price,omitempty"`
	Rating *float64 `json:"rating,omitempty"`
	Review *int `json:"review,omitempty"`
	Sku *string `json:"sku,omitempty"`
	Stock *int `json:"stock,omitempty"`
}

// ProductLoadMatch is the typed request payload for Product.LoadTyped.
type ProductLoadMatch struct {
	Id int `json:"id"`
}

// ProductListMatch mirrors the product fields as an all-optional match
// filter (Go analog of Partial<Product>).
type ProductListMatch struct {
	Brand *string `json:"brand,omitempty"`
	Category *string `json:"category,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Price *float64 `json:"price,omitempty"`
	Rating *float64 `json:"rating,omitempty"`
	Review *int `json:"review,omitempty"`
	Sku *string `json:"sku,omitempty"`
	Stock *int `json:"stock,omitempty"`
}

// Todo is the typed data model for the todo entity.
type Todo struct {
	Completed *bool `json:"completed,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DueDate *string `json:"due_date,omitempty"`
	Id *int `json:"id,omitempty"`
	Priority *string `json:"priority,omitempty"`
	Title *string `json:"title,omitempty"`
	UserId *int `json:"user_id,omitempty"`
}

// TodoListMatch mirrors the todo fields as an all-optional match
// filter (Go analog of Partial<Todo>).
type TodoListMatch struct {
	Completed *bool `json:"completed,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DueDate *string `json:"due_date,omitempty"`
	Id *int `json:"id,omitempty"`
	Priority *string `json:"priority,omitempty"`
	Title *string `json:"title,omitempty"`
	UserId *int `json:"user_id,omitempty"`
}

// User is the typed data model for the user entity.
type User struct {
	Address *map[string]any `json:"address,omitempty"`
	Company *map[string]any `json:"company,omitempty"`
	Email *string `json:"email,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Phone *string `json:"phone,omitempty"`
	Username *string `json:"username,omitempty"`
	Website *string `json:"website,omitempty"`
}

// UserLoadMatch is the typed request payload for User.LoadTyped.
type UserLoadMatch struct {
	Id int `json:"id"`
}

// UserListMatch mirrors the user fields as an all-optional match
// filter (Go analog of Partial<User>).
type UserListMatch struct {
	Address *map[string]any `json:"address,omitempty"`
	Company *map[string]any `json:"company,omitempty"`
	Email *string `json:"email,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Phone *string `json:"phone,omitempty"`
	Username *string `json:"username,omitempty"`
	Website *string `json:"website,omitempty"`
}

// UserCreateData mirrors the user fields as an all-optional match
// filter (Go analog of Partial<User>).
type UserCreateData struct {
	Address *map[string]any `json:"address,omitempty"`
	Company *map[string]any `json:"company,omitempty"`
	Email *string `json:"email,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Phone *string `json:"phone,omitempty"`
	Username *string `json:"username,omitempty"`
	Website *string `json:"website,omitempty"`
}

// UserUpdateData is the typed request payload for User.UpdateTyped.
type UserUpdateData struct {
	Id int `json:"id"`
}

// UserRemoveMatch is the typed request payload for User.RemoveTyped.
type UserRemoveMatch struct {
	Id int `json:"id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
