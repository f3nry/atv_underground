class CreateCgEntries < ActiveRecord::Migration
  def change
    create_table :cg_entries do |t|
      t.float :arm
      t.float :weight
      t.integer :aircraft_id

      t.timestamps
    end
  end
end
