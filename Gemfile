source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.0.1'
gem 'sqlite3'
gem 'puma', '~> 3.0'

gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'jquery-rails'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'

gem 'react_webpack_rails'
gem 'rwr-react_router'
gem 'bootstrap-sass'

gem 'devise'

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'pry-rails'
  gem 'pry-rescue'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'factory_girl_rails'
  gem 'ffaker'
  gem 'rails-controller-testing'
  gem 'rspec-rails'
  gem 'shoulda-matchers'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem 'rwr-view_helpers', '~> 0.1.1'
gem 'rwr-redux'
