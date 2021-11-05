class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :avg_rating, :all_condiments_toppings
  has_many :hot_dogs

  def avg_rating
    reviews = self.object.reviews.select do |rev|
      rev.rating
    end
    ratings = reviews.map(&:rating)
    ratings.then{ |r| r.sum.to_f / r.size }.to_s
  end

  def all_condiments_toppings
    all_condiments + all_toppings
  end

  private

  def all_condiments
    self.object.hot_dogs.map(&:condiments).join(", ")
  end

  def all_toppings
    self.object.hot_dogs.map(&:toppings).join(", ")
  end

end
