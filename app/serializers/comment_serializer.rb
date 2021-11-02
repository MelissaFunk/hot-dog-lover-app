class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_id, :restaurant_id
end
