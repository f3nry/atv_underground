class Model < ActiveRecord::Base
  has_many :aircrafts

  belongs_to :organization
end
