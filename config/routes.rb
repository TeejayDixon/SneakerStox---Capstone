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





end
