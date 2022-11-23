class User < ApplicationRecord
  has_many :orders
  has_many :ordersneakers, through: :orders
  has_many :wish_items
  
  has_secure_password

validates :email, 
        presence: true, 
        uniqueness: true,
        length: { maximum: 25 }
        
 
 

end
