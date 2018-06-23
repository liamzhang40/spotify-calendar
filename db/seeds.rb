# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Event.destroy_all

user = User.create!(first_name: "hardcoded", last_name: "user", email: "demo@gmail.com")

30.times do
  start_time = Faker::Time.between(Date.today.at_beginning_of_month, Date.today.end_of_month)
  end_time = Faker::Time.between(start_time.beginning_of_day, start_time.end_of_day)
  Event.create!(
    user_id: user.id,
    start_time: start_time,
    end_time: end_time,
    description: Faker::LeagueOfLegends.quote
  )
end
