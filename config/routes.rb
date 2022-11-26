Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api do
  # Defines the root path route ("/")
  # root "articles#index"
  # resources :sales
  resources :sneakers, only: [:index, :show]
  resources :users
  # resources :wishitems
  
 

post '/login', to: 'sessions#create'  
get '/me', to: 'users#show'
delete '/logout', to: 'sessions#destroy'
post '/signup', to: 'users#create'
get '/sessions/current', to: 'sessions#current'
post '/create-payment-intent', to: 'ordersneakers#create'
post 'orders/neworder', to: 'orders#neworder'
post '/wishitems', to: 'wish_items#fav_shoe'
get '/wishitems', to: 'wish_items#index'
get '/sales', to: 'sales#index'
post '/sales', to: 'sales#sale_shoe'
end







  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
