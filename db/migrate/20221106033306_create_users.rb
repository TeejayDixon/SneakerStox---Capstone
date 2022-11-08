class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :full_name
      t.string :username
      t.string :password_digest
      t.string :email
      t.string :shipping_address
      t.string :phone
      t.string :billing_address
      t.string :profile_picture

      t.timestamps
    end
  end
end
