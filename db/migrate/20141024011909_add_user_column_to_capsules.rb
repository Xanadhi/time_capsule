class AddUserColumnToCapsules < ActiveRecord::Migration
  def change
    change_table :capsules do |t|
      t.belongs_to :user
    end
  end
end
