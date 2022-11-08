class CreateOrderSneakers < ActiveRecord::Migration[7.0]
  def change
    create_table :order_sneakers do |t|
      t.references :sneaker, null: false, foreign_key: true
      t.references :order, null: false, foreign_key: true
      t.integer :price
      t.string :sku
      t.integer :quantity

      t.timestamps
    end
  end
end
