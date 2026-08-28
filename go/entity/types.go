// Typed models for the FakeRest SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/fake-rest-sdk/go/core"
)

// Category is the typed data model for the category entity.
type Category struct {
	Count *int `json:"count,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

// CategoryListMatch is the typed request payload for Category.ListTyped.
type CategoryListMatch struct {
	Count *int `json:"count,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

// Comment is the typed data model for the comment entity.
type Comment struct {
	Avatar *string `json:"avatar,omitempty"`
	Body *string `json:"body,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	DeviceInfo *map[string]any `json:"deviceInfo,omitempty"`
	Email *string `json:"email,omitempty"`
	Id *int `json:"id,omitempty"`
	IsVerified *bool `json:"isVerified,omitempty"`
	Likes *int `json:"likes,omitempty"`
	Location *string `json:"location,omitempty"`
	Name *string `json:"name,omitempty"`
	ParentCommentId *int `json:"parentCommentId,omitempty"`
	PostId *int `json:"postId,omitempty"`
	Website *string `json:"website,omitempty"`
}

// CommentListMatch is the typed request payload for Comment.ListTyped.
type CommentListMatch struct {
	Avatar *string `json:"avatar,omitempty"`
	Body *string `json:"body,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	DeviceInfo *map[string]any `json:"deviceInfo,omitempty"`
	Email *string `json:"email,omitempty"`
	Id *int `json:"id,omitempty"`
	IsVerified *bool `json:"isVerified,omitempty"`
	Likes *int `json:"likes,omitempty"`
	Location *string `json:"location,omitempty"`
	Name *string `json:"name,omitempty"`
	ParentCommentId *int `json:"parentCommentId,omitempty"`
	PostId *int `json:"postId,omitempty"`
	Website *string `json:"website,omitempty"`
}

// CommentCreateData is the typed request payload for Comment.CreateTyped.
type CommentCreateData struct {
	Avatar *string `json:"avatar,omitempty"`
	Body *string `json:"body,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	DeviceInfo *map[string]any `json:"deviceInfo,omitempty"`
	Email *string `json:"email,omitempty"`
	Id *int `json:"id,omitempty"`
	IsVerified *bool `json:"isVerified,omitempty"`
	Likes *int `json:"likes,omitempty"`
	Location *string `json:"location,omitempty"`
	Name *string `json:"name,omitempty"`
	ParentCommentId *int `json:"parentCommentId,omitempty"`
	PostId *int `json:"postId,omitempty"`
	Website *string `json:"website,omitempty"`
}

// Post is the typed data model for the post entity.
type Post struct {
	Body *string `json:"body,omitempty"`
	Category *string `json:"category,omitempty"`
	CoverImage *string `json:"coverImage,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Featured *bool `json:"featured,omitempty"`
	Id *int `json:"id,omitempty"`
	Likes *int `json:"likes,omitempty"`
	MetaDescription *string `json:"metaDescription,omitempty"`
	Published *bool `json:"published,omitempty"`
	ReadTime *int `json:"readTime,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	Title *string `json:"title,omitempty"`
	UserId *int `json:"userId,omitempty"`
	Views *int `json:"views,omitempty"`
}

// PostLoadMatch is the typed request payload for Post.LoadTyped.
type PostLoadMatch struct {
	Id int `json:"id"`
}

// PostListMatch is the typed request payload for Post.ListTyped.
type PostListMatch struct {
	Body *string `json:"body,omitempty"`
	Category *string `json:"category,omitempty"`
	CoverImage *string `json:"coverImage,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Featured *bool `json:"featured,omitempty"`
	Id *int `json:"id,omitempty"`
	Likes *int `json:"likes,omitempty"`
	MetaDescription *string `json:"metaDescription,omitempty"`
	Published *bool `json:"published,omitempty"`
	ReadTime *int `json:"readTime,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	Title *string `json:"title,omitempty"`
	UserId *int `json:"userId,omitempty"`
	Views *int `json:"views,omitempty"`
}

// PostCreateData is the typed request payload for Post.CreateTyped.
type PostCreateData struct {
	Body *string `json:"body,omitempty"`
	Category *string `json:"category,omitempty"`
	CoverImage *string `json:"coverImage,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Featured *bool `json:"featured,omitempty"`
	Id *int `json:"id,omitempty"`
	Likes *int `json:"likes,omitempty"`
	MetaDescription *string `json:"metaDescription,omitempty"`
	Published *bool `json:"published,omitempty"`
	ReadTime *int `json:"readTime,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	Title *string `json:"title,omitempty"`
	UserId *int `json:"userId,omitempty"`
	Views *int `json:"views,omitempty"`
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
	Reviews *int `json:"reviews,omitempty"`
	Sku *string `json:"sku,omitempty"`
	Stock *int `json:"stock,omitempty"`
}

// ProductLoadMatch is the typed request payload for Product.LoadTyped.
type ProductLoadMatch struct {
	Id int `json:"id"`
}

// ProductListMatch is the typed request payload for Product.ListTyped.
type ProductListMatch struct {
	Brand *string `json:"brand,omitempty"`
	Category *string `json:"category,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Price *float64 `json:"price,omitempty"`
	Rating *float64 `json:"rating,omitempty"`
	Reviews *int `json:"reviews,omitempty"`
	Sku *string `json:"sku,omitempty"`
	Stock *int `json:"stock,omitempty"`
}

// Todo is the typed data model for the todo entity.
type Todo struct {
	Completed *bool `json:"completed,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	DueDate *string `json:"dueDate,omitempty"`
	Id *int `json:"id,omitempty"`
	Priority *string `json:"priority,omitempty"`
	Title *string `json:"title,omitempty"`
	UserId *int `json:"userId,omitempty"`
}

// TodoListMatch is the typed request payload for Todo.ListTyped.
type TodoListMatch struct {
	Completed *bool `json:"completed,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
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

// UserListMatch is the typed request payload for User.ListTyped.
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

// UserCreateData is the typed request payload for User.CreateTyped.
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
	Address *map[string]any `json:"address,omitempty"`
	Company *map[string]any `json:"company,omitempty"`
	Email *string `json:"email,omitempty"`
	Name *string `json:"name,omitempty"`
	Phone *string `json:"phone,omitempty"`
	Username *string `json:"username,omitempty"`
	Website *string `json:"website,omitempty"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
