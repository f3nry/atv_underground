class CreateMomentEntries < ActiveRecord::Migration
  def change
    create_table :moment_entries do |t|
      t.float :weight
      t.float :moment
      t.integer :aircraft_id

      t.timestamps
    end
  end
end
