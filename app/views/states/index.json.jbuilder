json.array!(@states) do |state|
  json.extract! state, :id, :value, :sensor_id
  json.url state_url(state, format: :json)
end
