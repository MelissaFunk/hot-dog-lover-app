class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :avg_rating

  def avg_rating
    reviews = self.object.reviews.select do |rev|
      rev.rating
    end
    ratings = reviews.map do |rev|
      rev.rating
    end
    ratings.then{ |r| r.sum.to_f / r.size }
  end
end
