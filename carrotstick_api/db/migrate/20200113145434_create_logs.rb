class CreateLogs < ActiveRecord::Migration[6.0]
  def change
    create_table :logs do |t|
      t.integer :habit_id
      t.date :check_in
      t.timestamps
    end
  end
end
