class CreateBlogsCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :blogs_categories do |t|
      t.references :blog, null: false, foreign_key: true
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
