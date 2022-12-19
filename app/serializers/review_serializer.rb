class ReviewSerializer < ActiveModel::Serializer
  attributes :rating, :favorite, :user_id, :restaurant_id
  belongs_to :restaurant
end
