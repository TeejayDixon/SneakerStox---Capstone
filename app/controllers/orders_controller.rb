class OrdersController < ApplicationController

def index 
  orders = Order.all 
  render json: order 
end

def create
  orders = Order.create!(order_params) 
end

def updated
  orders = Order.update
end

def show

end

def destroy 

end

private

def order_params
  params.permit(:quantity, :user_id, :ordersneakers_id)
end

end
