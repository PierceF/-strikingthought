class Category < ApplicationRecord
  has_many :categories_blog
  has_many :blogs, through: :categories_blog
end
