class Sale < ApplicationRecord
  belongs_to :sneaker_id
  belongs_to :user_id

 
  validates :size, presence: true
  validates :condition, presence: true
  validates :price, presence: true
end
