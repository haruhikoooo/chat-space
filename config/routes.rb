Rails.application.routes.draw do
  devise_for :users
  root "groups#index"

  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:index, :new, :create, :edit, :update] do
    resources :message, only: [:index, :create]
    namespace :api do
      resources :message, only: :index, defaults: { format: 'json' }
    end
  end
end
