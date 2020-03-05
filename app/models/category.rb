class Category < ApplicationRecord
  has_many :blogs, through: :blogs_categories
end
