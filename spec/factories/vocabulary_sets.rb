FactoryGirl.define do
  factory :vocabulary_set do
    name { FFaker::Product.product_name }
    user
  end
end
