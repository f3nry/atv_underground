class AddModelIdToAircraft < ActiveRecord::Migration
  def change
    add_column :aircrafts, :model_id, :integer
  end
end
