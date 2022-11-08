class CategoryOption < ApplicationRecord
  belongs_to :sneaker_id
  belongs_to :categories_id
end
