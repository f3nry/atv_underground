class CreateAircrafts < ActiveRecord::Migration
  def change
    create_table :aircrafts do |t|
      t.string :tail_number
      t.float :bow
      t.float :cg
      t.float :moment

      t.timestamps
    end
  end
end
