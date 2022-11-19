Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :sales
  resources :sneakers, only: [:index, :show]
  resources :users
 

post '/login', to: 'sessions#create'  
get '/me', to: 'users#show'
delete '/logout', to: 'sessions#destroy'
post '/signup', to: 'users#create'
get '/sessions/current', to: 'sessions#current'
post '/create-payment-intent', to: 'ordersneakers#paymentintent'
delete '/sneakers/destroy', to: 'ordersneakers#destroy'
post '/wishlist', to: 'wishitems#create'
get '/wishitems', to: 'wishitems#index'
get '/wishitems/user', to: "wishitems#index"
delete '/wishitems/destroy', to: 'wishitems#destroy'
patch '/wishitems/rating', to: 'wishitems#update'









end
