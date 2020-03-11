class Book < ApplicationRecord
  has_many :books_user #, class_name: 'BookUser'
  has_many :users, through: :books_user
  # has_and_belongs_to_many :users
end
