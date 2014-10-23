class User <ActiveRecord::Base
  validates :name, presence: true
  validates :password, presence: true
  validates :email, presence: true, uniqueness: true
  validate :email, :valid_email

  has_many :capsules

  def valid_email
    unless email =~ /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
      errors.add(:email, "is not an email")
    end
  end

end