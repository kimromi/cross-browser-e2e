require 'selenium-webdriver'
require 'capybara'
require 'capybara/rspec'

Capybara.register_driver :selenium_safari do |app|
  options = Selenium::WebDriver::Safari::Options.new
  Capybara::Selenium::Driver.new(app, browser: :safari, options: options)
end

Capybara.default_max_wait_time = 3
Capybara.default_driver = :selenium_safari
Capybara.app_host = 'https://www.youtube.com/'

RSpec.configure do |config|
  config.include Capybara::DSL
end
