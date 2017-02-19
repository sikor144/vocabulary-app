Rails.application.routes.draw do
  devise_for :users
  get 'react_examples/component', to: 'react_examples#component', as: :component
  root to: 'home#index'
end
