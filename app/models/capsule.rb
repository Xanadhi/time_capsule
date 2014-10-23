class Capsule < ActiveRecord::Base
  validates :capsule, presence: true

  belongs_to :user

end