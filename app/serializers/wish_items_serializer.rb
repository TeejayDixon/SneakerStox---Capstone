class WishItemsSerializer < ActiveModel::Serializer
  attributes :id, :sneaker_id
  has_one :sneaker
end
