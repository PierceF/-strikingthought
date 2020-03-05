class Book < ApplicationRecord
  has_many :users, through: :books_users
end
