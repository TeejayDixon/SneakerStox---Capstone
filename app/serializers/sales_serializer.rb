class SalesSerializer < ActiveModel::Serializer
  attributes :id
  has_one :sneaker
end
