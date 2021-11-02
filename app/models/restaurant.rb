class Restaurant < ApplicationRecord
  has_many :hot_dogs
  has_many :users, through: :hot_dogs
  has_many :comments
  has_many :reviews
end
