# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

temperature_group = Group.create!(name: "Temperature")
air_pollution_group = Group.create!(name: "Air Pollution")
fire_presence_group = Group.create!(name: "Fire Presence")

TMPTSLAT = ['-5.8367954', '-5.8377346', '-5.8409365']
TMPTSLNG = ['-35.2040083', '-35.2006609', '-35.1992876']

AIRPSLAT = ['-5.8404669', '-5.8332732', '-5.837265']
AIRPSLNG = ['-35.1970989', '-35.2067119', '-35.2075058']

FIPRSLAT = ['-5.8322272', '-5.837265', '-5.8419612']
FIPRSLNG = ['-35.2051025', '-35.2086001', '-35.1955753']

3.times do |i| 
	temperature_sensor = Sensor.create!(name: "TMPT.S00#{i}", group: temperature_group, lat: TMPTSLAT[i], lng: TMPTSLNG[i])
	air_pollution_sensor = Sensor.create!(name: "AIRP.S00#{i}", group: air_pollution_group, lat: AIRPSLAT[i], lng: AIRPSLNG[i])
	fire_presence_sensor = Sensor.create!(name: "FIPR.S00#{i}", group: fire_presence_group, lat: FIPRSLAT[i], lng: FIPRSLNG[i])

	10.times do |v|
		a = State.create(value: rand(80) - 40, sensor: temperature_sensor)
		b = State.create(value: rand(500), sensor: air_pollution_sensor)
		c = State.create(value: rand(1), sensor: fire_presence_sensor)
		a.update_attributes(created_at: Time.zone.parse('2012-07-11 21:00'))
		b.update_attributes(created_at: Time.zone.parse('2012-07-11 21:00'))
		c.update_attributes(created_at: Time.zone.parse('2012-07-11 21:00'))

		puts a.created_at
		puts b.created_at
		puts c.created_at
	end
end

