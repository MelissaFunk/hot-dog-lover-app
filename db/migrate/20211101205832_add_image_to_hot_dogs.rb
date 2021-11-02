class AddImageToHotDogs < ActiveRecord::Migration[6.1]
  def change
    add_column :hot_dogs, :image, :string
  end
end
