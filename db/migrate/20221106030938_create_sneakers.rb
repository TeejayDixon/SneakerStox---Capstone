class CreateSneakers < ActiveRecord::Migration[7.0]
  def change
    create_table :sneakers do |t|
      t.string :sku
      t.string :brand
      t.string :name
      t.string :colorway
      t.string :gender
      t.string :silhouette
      t.string :releaseYear
      t.string :releaseDate
      t.integer :retailPrice
      t.integer :estimatedMarketValue
      t.string :story
      t.string :image
      t.string :links

      t.timestamps
    end
  end
end
