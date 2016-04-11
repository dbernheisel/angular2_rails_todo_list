# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

[
  'Do the Polar Plunge',
  'Hike to the Top of Mount Haleakala',
  'Go to Thailand for Their Nation-Wide Water Fight',
  'Take Your Picture with a Tiger',
  'Write a Book',
  'Go On the Conan Show',
  'Go Skydiving',
  'Join in the Biggest Food Fight in the World',
  'Go on a 21-Day Juice Fast',
  'Visit "The Palm Jumeirah"',
  'Jump Off a Waterfall',
  'Climb "The Heavenly Stairs"',
  'Be in Chicago on St. Patrick’s Day',
  'Go on a Hot Air Balloon Ride',
  'Go Underwater in Australia’s "Cage of Death"',
  'Get Your Hair Groomed By a Monkey'
].each do |t|
  Todo.create!(task: t)
end

Todo.first.update(completed: true)