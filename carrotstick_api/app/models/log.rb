class Log < ApplicationRecord
    has_many :habits
    has_many :users
end
