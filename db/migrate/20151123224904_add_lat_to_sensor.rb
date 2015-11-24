class AddLatToSensor < ActiveRecord::Migration
  def change
  	add_column :sensors, :lat, :decimal, {:precision=>10, :scale=>6}
	add_column :sensors, :lng, :decimal, {:precision=>10, :scale=>6}
  end
end
