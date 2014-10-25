class Capsule < ActiveRecord::Base
  validates :letter, presence: true
  belongs_to :user

end