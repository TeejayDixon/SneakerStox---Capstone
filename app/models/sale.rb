class Sale < ApplicationRecord
  belongs_to :sneaker
  belongs_to :user

 
  validates :size, presence: true
  validates :condition, presence: true
  validates :price, presence: true
end
