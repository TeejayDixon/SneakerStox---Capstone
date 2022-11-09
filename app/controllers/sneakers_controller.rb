class SneakersController < ApplicationController

def index 
  sneakers = Sneaker.all 
  render json: sneakers 
end

def show 
  sneakers = Sneaker.find(params[:id])
  render json: sneakers
end





 
end
