class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password, :created_hot_dogs

  def created_hot_dogs
    
  end
end
