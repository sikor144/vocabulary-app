Rails.application.routes.draw do
  # get 'react_examples/component', to: 'react_examples#component', as: :component
  devise_for :users

  namespace :api do
    resources :vocabulary_sets, defaults: { format: :json } do
      member do
        post :add_term
        delete :delete_term
      end
    end
  end

  resources :vocabulary_sets do
    resources :terms
  end

  root to: 'vocabulary_sets#index'
end
