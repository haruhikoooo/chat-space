Rails.application.routes.draw do
  devise_for :users
  root "message#index"
end
