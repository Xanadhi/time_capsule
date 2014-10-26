require 'active_record'
require 'factory_girl'
require 'faker'
require 'pry'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'db/db.sqlite3'
)

require_relative 'app/models/user'
require_relative 'app/models/capsule'
require_relative 'factories/user'
require_relative 'factories/capsule'