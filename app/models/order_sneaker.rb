class OrderSneaker < ApplicationRecord
  belongs_to :sneaker
  belongs_to :order


  validates :name, :estimatedMarketValue, presence: true 
  validates :estimatedMarketValue, numericality: {only_integer: true} 
end
