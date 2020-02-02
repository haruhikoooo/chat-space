Rails.application.routes.draw do
  get 'message/index'

  root "message#index"
end
