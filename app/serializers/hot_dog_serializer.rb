class HotDogSerializer < ActiveModel::Serializer
  attributes :id, :name, :dog_style, :image, :toppings, :condiments, :restaurant_id, :user_id
end
