Rails.application.routes.draw do
  namespace :api do
    resources :todos, except: [:new, :edit]
  end
end
