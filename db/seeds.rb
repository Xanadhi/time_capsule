require_relative '../configuration'

10.times do |y|
  FactoryGirl.create(:user)
end

10.times do |x|
  FactoryGirl.create(:capsule)
end

User.all.each do |user|
  5.times do 
    capsule = FactoryGirl.build :capsule
    capsule.user_id = user.id
    capsule.save
  end
end