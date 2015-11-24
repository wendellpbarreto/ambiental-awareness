class Sensor < ActiveRecord::Base
  belongs_to :group
  has_many :states

  def latest_state
  	states.order(created_at: :desc).first
  end

  def latest_state_value
    latest_state.value
  end

  def states_dates_to_json
    result = []
    states.each do |state|
      result.push(state.created_at.strftime("%d/%b %H:%M").upcase)
    end
    puts result
    result.to_json
  end

  def states_values_to_json
    result = []
    states.each do |state|
      result.push(state.value.to_i)
    end
    puts result
    result.to_json
  end
end
