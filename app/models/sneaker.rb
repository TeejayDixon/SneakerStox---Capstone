class Sneaker < ApplicationRecord

  has_many :sales
  has_many :order_sneakers
  has_many :orders, through: :order_sneakers

  
end
