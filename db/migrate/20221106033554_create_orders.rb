class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :amount
      t.string :order_address
      t.string :order_email
      t.string :order_date
      t.string :order_status
      t.integer :quantity

      t.timestamps
    end
  end
end
