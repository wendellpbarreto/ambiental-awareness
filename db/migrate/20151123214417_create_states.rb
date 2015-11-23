class CreateStates < ActiveRecord::Migration
  def change
    create_table :states do |t|
      t.string :value
      t.references :sensor, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
