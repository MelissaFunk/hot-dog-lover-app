Rails.application.routes.draw do
  resources :hot_dogs, only: [:create]
  resources :comments, only: [:create]
  resources :reviews, only: [:create]
  resources :users, only: [:index, :create, :update]
  resources :restaurants, only: [:index, :show]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'
  get '/favorites/:id', to: 'users#favorites'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end  
