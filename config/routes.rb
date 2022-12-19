Rails.application.routes.draw do
  resources :hot_dogs, only: [:create]
  resources :comments, only: [:index, :create]
  resources :reviews, only: [:index, :create]
  resources :users, only: [:index, :create, :update]
  resources :restaurants, only: [:index, :show]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'
  get '/favorites/:id', to: 'users#favorites'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end     
   