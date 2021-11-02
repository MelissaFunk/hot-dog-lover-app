class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :image, :hours
end
