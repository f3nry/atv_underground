class AddOrganizationId < ActiveRecord::Migration
  def up
    add_column :aircrafts, :organization_id, :integer
    add_column :models, :organization_id, :integer
  end

  def down
    remove_column :aircrafts, :organization_id
    remove_column :models, :organization_id
  end
end
