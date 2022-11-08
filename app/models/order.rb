class Order < ApplicationRecord
  belongs_to :user
  has_many :order_sneakers
  has_many :sneakers, through: :order_sneakers

  validates :order_address, presence: true
  validates :order_email, presence: true 
  validates_format_of :order_email, with: EMAIL_REGEX

end
