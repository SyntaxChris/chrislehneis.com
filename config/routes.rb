Rails.application.routes.draw do
  root 'welcome#index'
  get 'welcome/index'
  match 'contact' => 'welcome#create', :as => 'contact', :via => :post
end
