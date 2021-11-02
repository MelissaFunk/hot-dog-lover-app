class RestaurantDetailsSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :image, :url, :description, :avg_rating
  has_many :hot_dogs
  has_many :comments

  def avg_rating
    ratings = self.object.reviews.map do |rev|
      rev.rating
    end
    ratings.then{ |r| r.sum.to_f / r.size }
  end
end
