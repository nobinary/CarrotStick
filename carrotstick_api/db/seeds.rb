# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# user = User.all
# habit = Habit.all
# log = Log.all


5.times do
    User.create(
        name: Faker::Hipster.sentence(word_count: 2).chop
        )
end

10.times do
    Habit.create(
        name: Faker::Hipster.sentence(word_count: 2).chop,
        user_id: rand(1..5)
    )
end

Log.create(
    habit_id: rand(1..5),
    check_in: Date.today
    )

p "DB Seeded"
p "#{User.count} users seeded"
p "#{Habit.count} habits seeded"
p "#{Log.count} logs seeded"

