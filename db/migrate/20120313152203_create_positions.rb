class CreatePositions < ActiveRecord::Migration
  def change
    create_table :positions do |t|
      t.string :name
      t.float :moment
      t.integer :aircraft_id

      t.timestamps
    end
  end
end
