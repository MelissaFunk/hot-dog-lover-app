class CreateHotDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :hot_dogs do |t|
      t.string :name
      t.string :dog_style
      t.belongs_to :restaurant, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
