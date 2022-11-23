class OrdersneakersController < ApplicationController

skip_before_action :authorize, only: :create

Stripe.api_key = 'sk_test_51M0WIqLjIBu8f788z3QZZ603Zb7xYeFz2GaFoWu9NsJXtNb5S9DN4J1o3XLx3vAZaC5vpyYV4uFjc5WNNZadGoRb00QWn9MWER'



     def create
  
        payment_intent = Stripe::PaymentIntent.create(
            amount: params[:amount],
            currency: 'usd',
            automatic_payment_methods: {
              enabled: true,
            },
        )  
                 
    puts payment_intent
    render json: {
      clientSecret: payment_intent["client_secret"],
    }
  end
end
 


