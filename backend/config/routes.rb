Rails.application.routes.draw do
  resources :recipes
  resources :users, only: [:index, :show, :create, :update] do
    post :token, on: :collection
    get :me, on: :collection, :action => :me
    patch :me, on: :collection, :action => :update_me
  end

  get '/common/tags', action: :tags, controller: 'common'
  get '/common/homepage', action: :homepage, controller: 'common'
end
