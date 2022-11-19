class WishitemsController < ApplicationController

skip_before_action :authorize, only: :create


def index 
  wishitems = WishItem.all
  render json: wishitems 
end

def create 
  wishitems = WishItem.create!(wish_params)
  render json: wishitems, status: :created
end

def update
  wishitems.update!(params[:rating])
  render json: wishitems
end

def destroy
  WishItem.destroy(params[:id])
  head :no_content
end


private 

def wish_params
  params.permit(:sneakers_id, :user_id)
end


end