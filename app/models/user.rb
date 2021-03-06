class User < ApplicationRecord
  has_many :hot_dogs
  has_many :restaurants, through: :hot_dogs
  has_many :comments
  has_many :reviews, dependent: :destroy

  has_secure_password

  validates :username, :password, presence: true
  validates :username, uniqueness: true
end
