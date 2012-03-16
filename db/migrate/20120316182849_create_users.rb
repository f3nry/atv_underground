class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.integer :organization_id
      t.string :name
      t.string :username

      t.timestamps
    end
  end
end
