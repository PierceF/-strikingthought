# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
url = "https://www.goodreads.com/search.xml?key=WRvzIEewNhhZlwTPqmN2fA&q=Ender%27s+Game"
  file      = open(url).read
  document  = Nokogiri::XML(file)
  puts document
