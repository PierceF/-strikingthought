class Blog < ApplicationRecord
  belongs_to :user
  has_many :categories_blog
  has_many :categories, through: :categories_blog
  # has_and_belongs_to_many :categories
end
