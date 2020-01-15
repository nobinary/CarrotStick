class Habit < ApplicationRecord
    belongs_to :user, optional: true
end
