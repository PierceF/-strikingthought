class Blog < ApplicationRecord
  belongs_to :user
  has_many :categories, through: :blogs_categories
end
