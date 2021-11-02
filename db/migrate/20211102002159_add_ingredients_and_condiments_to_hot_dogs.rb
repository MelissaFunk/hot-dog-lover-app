class AddIngredientsAndCondimentsToHotDogs < ActiveRecord::Migration[6.1]
  def change
    add_column :hot_dogs, :toppings, :string
    add_column :hot_dogs, :condiments, :string
  end
end
