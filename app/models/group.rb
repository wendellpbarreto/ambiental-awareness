class Group < ActiveRecord::Base
	has_many :sensors

	def get_sensor_by_highest_value
		sensors.sort_by(&:latest_state_value).first
	end
end
