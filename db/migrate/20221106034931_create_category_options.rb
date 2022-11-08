class CreateCategoryOptions < ActiveRecord::Migration[7.0]
  def change
    create_table :category_options do |t|
      t.string :releaseYear
      t.string :brand
      t.string :silhouette
      t.string :colorway
      t.references :sneaker, null: false, foreign_key: true
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
