Rails.application.routes.draw do

  resources :states
  resources :sensors
  resources :groups

  root 'groups#index'
  
  # mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
end
