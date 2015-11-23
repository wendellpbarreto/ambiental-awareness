class CreateSensors < ActiveRecord::Migration
  def change
    create_table :sensors do |t|
      t.string :name
      t.references :group, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
