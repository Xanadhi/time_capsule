FactoryGirl.define do 
  factory :capsule do
    letter   { Faker::Lorem.paragraphs(2).join() }
  end
end