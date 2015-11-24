class Group < ActiveRecord::Base
	has_many :sensors

	def get_sensor_by_highest_value
		sensors.map(&:latest_state_value).max
	end
end
