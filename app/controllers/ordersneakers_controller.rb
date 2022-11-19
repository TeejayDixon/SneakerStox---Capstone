class OrderSneakersController < ApplicationController

skip_before_action :authorize, only: [:index]

before_action :set_current_user, only: [:create]
before_action :set_current_ordersneakers, only: [:create]

require 'sinatra'
require 'stripe'
# This is your test secret API key.
Stripe.api_key = 'sk_test_51M0WIqLjIBu8f788z3QZZ603Zb7xYeFz2GaFoWu9NsJXtNb5S9DN4J1o3XLx3vAZaC5vpyYV4uFjc5WNNZadGoRb00QWn9MWER'


def index
  ordersneakers = OrderSneaker.all 
  render json: ordersneakers
end

def show
  ordersneakers = OrderSneaker.find(session[:order_id])
  render json: ordersneakers.sneakers
end


def create 
  ordersneakers = OrderSneaker.create!(sneaker_params)
  render json: item
end


def destroy
  user = @current_user
  items = OrderSneaker.where(user_id: user.id)
  items.destroy_all
  head :no_content
end

def update 
  ordersneakers = OrderSneaker.find_by(params[:sneaker_id])
  ordersneakers.update(sneaker_params)
  render json: ordersneakers, status: :accepted
end

def paymentintent
  user = @current_user
  sneakers = OrderSneaker.where(user_id: user.id)
  payment_intent = Stripe::PaymentIntent.create(
    amount: calculate_order_amount(data['items']),
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    }
  )

  render json: {clientSecret: payment_intent['client_secret']} 
  
end


private

def sneaker_params
  params.permit(:sneaker_id, :order_id)
end



end
