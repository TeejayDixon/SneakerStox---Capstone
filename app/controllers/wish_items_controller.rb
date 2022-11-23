class WishItemsController < ApplicationController

skip_before_action :authorize, only: :create


def index 

  wishitems = current_user.wish_items
  render json: wishitems, each_serializer: WishItemsSerializer
end

def fav_shoe
  wish = WishItem.create(wish_params)
  render json: wish, status: created
end

private

def wish_params
  params.permit(:sneaker_id, :user_id, :rating)
end

end