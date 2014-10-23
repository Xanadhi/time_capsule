class AddCapsules < ActiveRecord::Migration
  def change
    create_table :capsules do |t|
      t.text    :letter
      t.boolean :pending
      t.boolean :sent
      t.timestamps
    end
  end
end
