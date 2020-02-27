FactoryBot.define do
  factory :message do
    chat {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/public/images/test.jpg")}
    user
    group
  end
end